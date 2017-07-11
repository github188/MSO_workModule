package com.mso.task;

import java.util.List;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IDatafilteringDao;
import com.mso.dao.IDemandDao;
import com.mso.dao.IHFpDao;
import com.mso.dao.IOrderDemandDao;
import com.mso.dao.IOrderUploadReportDao;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.HFDatafiltering;
import com.mso.model.HFDemand;
import com.mso.model.HJOrderDemand;
import com.mso.model.Hfp;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;
import com.mso.utils.DateUtil;
import com.mso.utils.StringUtil;
import com.mso.utils.httpUtil;
import com.test.controller.mycenter.MyCenterControllerTest;


/*
 * 注意事项
    1、spring的@Scheduled注解  需要写在实现上、

	2、 定时器的任务方法不能有返回值（如果有返回值，spring初始化的时候会告诉你有个错误、需要设定一个proxytargetclass的某个值为true、具体就去百度google吧）
	
	3、实现类上要有组件的注解@Component
	
	CRON表达式    含义 
	"0/5 * *  * * ? "  //每5秒执行一次 
	"0 0 12 * * ?"    每天中午十二点触发 
	"0 15 10 ? * *"    每天早上10：15触发 
	"0 15 10 * * ?"    每天早上10：15触发 
	"0 15 10 * * ? *"    每天早上10：15触发 
	"0 15 10 * * ? 2005"    2005年的每天早上10：15触发 
	"0 * 14 * * ?"    每天从下午2点开始到2点59分每分钟一次触发 
	"0 0/5 14 * * ?"    每天从下午2点开始到2：55分结束每5分钟一次触发 
	"0 0/5 14,18 * * ?"    每天的下午2点至2：55和6点至6点55分两个时间段内每5分钟一次触发 
	"0 0-5 14 * * ?"    每天14:00至14:05每分钟一次触发 
	"0 10,44 14 ? 3 WED"    三月的每周三的14：10和14：44触发 
	"0 15 10 ? * MON-FRI"    每个周一、周二、周三、周四、周五的10：15触发 
 */
@Component@Service("completionStatisticsService")@Transactional
public class CompletionStatisticsServiceImpl implements CompletionStatisticsService {
	 
    private static Logger log=Logger.getLogger(MyCenterControllerTest.class);
	@Autowired
	IDemandDao demandDao;
	
	@Autowired
    IOrderDemandDao orderdemandDao;
	
	@Autowired
    IOrderUploadReportDao orderUploadReportDao;
	
	@Autowired
	IDatafilteringDao datafilteringDao;
	
	@Autowired
	IHFpDao hfpDao;
	
//  定时修改结算状态   每天凌晨00:10   需求和订单状态  
	
//	1.需求结束时期到达时  						需求变为结算中. 
//	2.需求结束时间到达时  						订单变结算中.
//	3.需求完成时(完成数量超过设置数量)           			需求与订单状态不变
//	4.订单完成时(审核通过数量超过竞拍量)	 			订单状态变结算中
//	5.需求结算中时(状态值为结算中)					订单变结算中
//	6.需求被关闭(状态值为关闭)					订单变结算中
//	7.需求状态为完成时						如果订单不是完成中或结算中. 修改为结算中
    @Scheduled(cron="0 10 00 * * ?")  
	@Override
	public void modifDemandSettlementStatus() {
        log.info("__________________________________________className:"+Thread.currentThread() .getStackTrace()[1].getClassName());
  	    log.info("__________________________________________methodName:"+Thread.currentThread() .getStackTrace()[1].getMethodName());
    	StringBuffer buf=new StringBuffer("包表检测 修改的pid：");
    	try {
			Integer[] strzt=new Integer[]{2,4};
	        //发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭   
			HFDatafiltering filtering=new HFDatafiltering();
			filtering.setStrzt(strzt);
			List<Object> DatafilteringList=datafilteringDao.getDatafilteringByPid(filtering);
			if(null!=DatafilteringList){
				buf.append("HFDatafiltering需求检测 需求id:");
				for (int i = 0; i < DatafilteringList.size(); i++) {
					HFDatafiltering updema=(HFDatafiltering) DatafilteringList.get(i);
					if(null!=updema){
						long subDays=0;
						String endTime=updema.getEndtime();//2016-06-22 17:21:52
						if(!StringUtil.isNull(endTime)){
							//如果是套餐   则是一个整数  3天
							if(StringUtil.isNull(updema.getPackageid())){//不是套餐
								long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
								subDays=subDay;
							}else{//是套餐
								if(StringUtil.isInteger(endTime)){
									String releasetime=updema.getBegintime();
									String yMd=DateUtil.getAfterDay(endTime,DateUtil.fomatDate(releasetime));//得到N天后的日期
									long subDay=DateUtil.getDaySub(yMd,DateUtil.getTime());
									subDays=subDay;
								}else{
									long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
									subDays=subDay;
								}
							}
						}
						
						//需求完成量
						Integer demanFishnum=updema.getFinishnum();
						Integer releasenum=updema.getReleasenum();
						if(null==demanFishnum){
							demanFishnum=0;
							updema.setFinishnum(0);
						}
						if(null==releasenum){
							updema.setReleasenum(0);
						}
						
						//过时 或者 完成量完成
						if(subDays>0||updema.getReleasenum()<=updema.getFinishnum()){
							//更新需求完成量
					    	GXJOrderUploadReport reportpa=new GXJOrderUploadReport();
					    	reportpa.setQa_check(0);
					    	reportpa.setStatus(6);
					    	reportpa.setDemandid(updema.getDemandid());
					    	Long lon=orderUploadReportDao.getUploadReportCount(reportpa);
					    	if(null==lon){
					    		lon=0l;
					    	}
							if(Long.parseLong(demanFishnum+"")!=lon){
								updema.setFishnum(new Integer(lon+""));
							}
							//完成量大于等于发布量     3.需求完成时(完成数量超过设置数量)           			需求与订单状态不变
							if(subDays>0||Long.parseLong(demanFishnum+"")!=lon||updema.getFishnum()>=updema.getReleasenum()){
								buf.append(updema.getDemandid()+",");
								datafilteringDao.updateDatafiltering(updema);
							}
						}	
					}
				}
			}
			
			
			
			
			
			
			
			HFDemand pa= new HFDemand();
			pa.setStrzt(strzt);
		//pa.setDemandid("201704280955140661");
			List<HFDemand> demandList=demandDao.getReportDemands(pa);
			if(null!=demandList){
				buf.append("HFDemand需求检测需求id:");
				for (int i = 0; i < demandList.size(); i++) {
					HFDemand updema=(HFDemand) demandList.get(i);
					if(null!=updema){
						long subDays=0;
						String endTime=updema.getEndtime();//2016-06-22 17:21:52
						if(!StringUtil.isNull(endTime)){
							//如果是套餐   则是一个整数  3天
							if(StringUtil.isNull(updema.getPackageid())){//不是套餐
								long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
								subDays=subDay;
							}else{//是套餐
								if(StringUtil.isInteger(endTime)){
									String releasetime=updema.getBegintime();
									String yMd=DateUtil.getAfterDay(endTime,DateUtil.fomatDate(releasetime));//得到N天后的日期
									long subDay=DateUtil.getDaySub(yMd,DateUtil.getTime());
									subDays=subDay;
								}else{
									long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
									subDays=subDay;
								}
							}
						}
						//需求完成量
						Integer demanFishnum=updema.getFishnum();
						Integer releasenum=updema.getReleasenum();
						if(null==demanFishnum){
							demanFishnum=0;
							updema.setFishnum(0);
						}
						if(null==releasenum){
							updema.setReleasenum(0);
						}
						//过时 或者 完成量完成
						if(subDays>0||updema.getReleasenum()<=updema.getFishnum()){
							 //更新需求完成量
					    	GXJOrderUploadReport reportpa=new GXJOrderUploadReport();
					    	reportpa.setQa_check(0);
					    	reportpa.setStatus(6);
					    	reportpa.setDemandid(updema.getDemandid());
					    	Long lon=orderUploadReportDao.getUploadReportCount(reportpa);
					    	if(null==lon){
					    		lon=0l;
					    	}
							if(Long.parseLong(demanFishnum+"")!=lon){
								updema.setFishnum(new Integer(lon+""));
							}
							//完成量大于等于发布量     3.需求完成时(完成数量超过设置数量)           			需求与订单状态不变
							if(subDays>0||Long.parseLong(updema.getFishnum()+"")!=lon||updema.getFishnum()>=updema.getReleasenum()){
								buf.append(updema.getDemandid()+",");
								updema.setFdstate(5);
								demandDao.updateDemand(updema);
							}
						}
					}
				}
			}
			
			
			
			
			
			
			
			Hfp p=new Hfp();
			p.setStrzt(strzt);
			//p.setPid("20170428095514020");
			List<Object> hfplist=hfpDao.getHfpsNoPage(p);
			if(null!=hfplist){
				for (int i = 0; i < hfplist.size(); i++) {
					Hfp updema=(Hfp) hfplist.get(i);
					if(null!=updema){
						long subDays=0;
						String endTime=updema.getEndtime();//2016-06-22 17:21:52
						if(!StringUtil.isNull(endTime)){
							//如果是套餐   则是一个整数  3天
							if(StringUtil.isNull(updema.getPackageid())){//不是套餐
								long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
								subDays=subDay;
							}else{//是套餐
								if(StringUtil.isInteger(endTime)){
									String releasetime=updema.getBegintime();
									String yMd=DateUtil.getAfterDay(endTime,DateUtil.fomatDate(releasetime));//得到N天后的日期
									long subDay=DateUtil.getDaySub(yMd,DateUtil.getTime());
									subDays=subDay;
								}else{
									long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
									subDays=subDay;
								}
							}
						}
						//需求完成量
						Integer demanFishnum=updema.getFinishnum();
						Integer releasenum=updema.getReleasenum();
						Integer pause=updema.getPause();
						
						if(null==pause){
							updema.setPause(0);
						}
						if(null==demanFishnum){
							demanFishnum=0;
							updema.setFinishnum(0);
						}
						if(null==releasenum){
							updema.setReleasenum(0);
						}
						
						//过时 或者 完成量完成
						if(subDays>0||updema.getReleasenum()<=updema.getFinishnum()){
							buf.append(updema.getPid()+",");
							updema.setFdstate(5);
							hfpDao.updateHfp(updema);
							
							//修改了包  在修改子需求
							if("销售线索挖掘".equals(updema.getServicetype())){
								buf.append("包id"+updema.getPid()+"销售线索挖掘 子需求检查:");
								HFDemand d=new HFDemand();
								d.setPid(updema.getPid());
								List<Object> dList=demandDao.getReportDemands(d);
								if(dList!=null){
									for (Object object : dList) {
										HFDemand a=(HFDemand)object;
										a.setStrzt(strzt);
										a.setFdstate(5);
										buf.append(a.getDemandid()+",");
										demandDao.updateDemand(a);
									}
								}
							}
							if("数据加工".equals(updema.getServicetype())){
								buf.append("包id"+updema.getPid()+"数据加工 子需求检查:");
								HFDatafiltering d=new HFDatafiltering();
								filtering.setPid(updema.getPid());
								List<Object> dList=datafilteringDao.getDatafilteringByPid(d);
								if(dList!=null){
									for (Object object : dList) {
										HFDatafiltering a=(HFDatafiltering)object;
										a.setStrzt(strzt);
										a.setFdstate(5);
										buf.append(a.getPcdid()+",");
										datafilteringDao.updateDatafiltering(a);
									}
								}
							}
						}
							
						//没有过时 且 没有完成  则改回执行中
//						if(subDays<0&&updema.getReleasenum()>updema.getFinishnum()&&0==updema.getPause()){
//							buf.append(updema.getPid()+",");
//							updema.setFdstate(4);
//							hfpDao.updateHfp(updema);
//						}
					}
				}
			}
			
			
			
			
			
			
			// 循环修改当前需求下的订单
			HJOrderDemand user=new HJOrderDemand();
			user.setStrzt(strzt);
//			user.setDemandid("201610251053292411");
			List<HJOrderDemand> orderlist=orderdemandDao.getOrderDemandByzt(user);
			if(null!=orderlist){
				buf.append("HJOrderDemand订单检测订单id:");
				for (int j = 0; j < orderlist.size(); j++) {
					HJOrderDemand up=orderlist.get(j);
			    	//取得当前订单的需求信息 判断其状态是否为5 
					HFDemand upa=new HFDemand();
					upa.setDemandid(up.getDemandid());
					HFDemand updema=demandDao.getDemandById(upa);
					if(null!=updema){
						long subDays=0;
						String endTime=updema.getEndtime();//2016-06-22 17:21:52
						if(!StringUtil.isNull(endTime)){
							//如果是套餐   则是一个整数  3天
							if(StringUtil.isNull(updema.getPackageid())){//不是套餐
								long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
								subDays=subDay;
							}else{//是套餐
								if(StringUtil.isInteger(endTime)){
									String releasetime=updema.getBegintime();
									String yMd=DateUtil.getAfterDay(endTime,DateUtil.fomatDate(releasetime));//得到N天后的日期
									long subDay=DateUtil.getDaySub(yMd,DateUtil.getTime());
									subDays=subDay;
								}else{
									long subDay=DateUtil.getDaySub(endTime, DateUtil.getTime());
									subDays=subDay;
								}
							}
						}
						
						//当前订单完成量
						Integer orderFisNum=up.getFishnum();
				    	GXJOrderUploadReport report=new GXJOrderUploadReport();
				    	report.setQa_check(0);
				    	report.setStatus(6);
				    	report.setDba_check(0);
				    	report.setDemandid(up.getDemandid());
				    	report.setOrderid(up.getOrderid());//当前需求下的订单
				    	List reportList=orderUploadReportDao.getUploadReport(report);
				    	Integer orderSingleValueTol=0;//实际完成量累加
				    	
				    	if(reportList!=null||reportList.size()>0){
				    		for (int n = 0; n < reportList.size(); n++) {
				    			GXJOrderUploadReport upload=(GXJOrderUploadReport)reportList.get(n);
				    			Integer singleValue= upload.getQa_notstandard()+upload.getQa_qualified();//qa质检:合格量  //qa质检:不规范===  成单量
				    			orderSingleValueTol=orderSingleValueTol+singleValue;
				    			//修改订单进度json
							}
				    	}
				    	
				    	//订单完成量
				    	if(orderSingleValueTol!=orderFisNum){
				    		up.setFishnum(orderSingleValueTol);
				    	}
						Integer Fdstate= updema.getFdstate();//需求状态
						//完成量大于等于竞拍量   需求到期  或者 需求状态为5 //订单状态  需求是什么状态订单同步状态 //需求被关闭进入结算中
						if(subDays>0||orderFisNum>=up.getAuctionnum()||5==Fdstate||7==Fdstate||(6==Fdstate&&up.getJdstate()<5)){
							up.setJdstate(5);
							up.setWhetherupload(0);//订单被定时器修改为结算状态  则不能上传成单报告
							buf.append(up.getOrderid()+",");
							orderdemandDao.modifyOrderDemand(up);
						}
					}
				}
			}
    	} catch (Exception e) {
    		//我使用了如下方法获得异常所在的文件,行号和方法:
			StackTraceElement stackTraceElement= e.getStackTrace()[0];// 得到异常棧的首个元素
			log.info("_____________________________________________________________定时器更新内容(已经更新):"+buf.toString());
			log.error("_____________________________________________________________File="+stackTraceElement.getFileName());
			log.error("_____________________________________________________________Line="+stackTraceElement.getLineNumber());
			log.error("_____________________________________________________________Method="+stackTraceElement.getMethodName());
			log.error("_____________________________________________________________Emsg="+e.toString());
		}
    	log.info("_____________________________________________________________定时器更新内容:"+buf.toString());
	}
    
    
   /*
    * 定时发布新闻 模板 定时器     每天凌晨00:50   
    */
    @Scheduled(cron="0 50 00 * * ?")  
	@Override
	public void newsRelease() {
        log.info("__________________________________________className:"+Thread.currentThread() .getStackTrace()[1].getClassName());
  	    log.info("__________________________________________methodName:"+Thread.currentThread() .getStackTrace()[1].getMethodName());
    	StringBuffer buf=new StringBuffer("定时发布新闻 模板 定时器");
    	try {
		   	String servceurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("back.servceurl");
		   	servceurl=servceurl+"news/release";
		   	/*
		   	 * 调用发布方法
		   	 */
		    String jsonStr=httpUtil.sendGet(servceurl,"");
		    JSONObject jsonObject = JSONObject.fromObject(jsonStr);  
	        String codeemail = jsonObject.getString("code");  
	        String msg = jsonObject.getString("msg");  
	        if("Y".equals(codeemail)){
	        	buf.append("发布成功!");
	        }else{
	        	buf.append("发布失败"+msg);
	        }
    	} catch (Exception e) {
    		//我使用了如下方法获得异常所在的文件,行号和方法:
			StackTraceElement stackTraceElement= e.getStackTrace()[0];// 得到异常棧的首个元素
			log.info("_____________________________________________________________定时器更新内容(已经更新):"+buf.toString());
			log.error("_____________________________________________________________File="+stackTraceElement.getFileName());
			log.error("_____________________________________________________________Line="+stackTraceElement.getLineNumber());
			log.error("_____________________________________________________________Method="+stackTraceElement.getMethodName());
			log.error("_____________________________________________________________Emsg="+e.toString());
		}
    	log.info("_____________________________________________________________定时发布新闻 模板 定时器:"+buf.toString());
	}
    
} 