package com.mso.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IGXqaeverydaystatisticsDao;
import com.mso.dao.IHFpDao;
import com.mso.dao.IOrderUploadReportDao;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.GXqaeverydaystatistics;
import com.mso.model.Hfp;
import com.mso.model.OrderReport;
import com.mso.model.pickuppackageparty.OutsourceeStatement;
import com.mso.res.HFDemandRes;
import com.mso.res.OrderReportRes;
import com.mso.res.ThisMonthOrderQuantityCompletedRes;
import com.mso.res.ThisMonthRevenueRes;
import com.mso.res.gxdbaeverydaystatistics.LetContractOneRes;
import com.mso.res.pickuppackageparty.OutsourceeStatementRes;
import com.mso.service.IOrderUploadReportService;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("orderUploadReportService")@Transactional
public class OrderUploadReportServiceImpl implements IOrderUploadReportService{
	
	@Autowired
	IOrderUploadReportDao orderUploadReportDao;
	
	@Autowired
	IHFpDao hFpDao;
	
	@Override
	public GXJOrderUploadReport addOrderUploadReport(GXJOrderUploadReport user){
		orderUploadReportDao.addOrderUploadReport(user);
		return user;
	}
	@Override
	public PageResults<Object> getUploadReportPage(GXJOrderUploadReport user) {
		PageResults<Object> res=orderUploadReportDao.getUploadReportPage(user);
		GXJOrderUploadReport tolReport=orderUploadReportDao.getUploadReportPageSum(user);
		res.setReport(tolReport);
		return res;
	}
	@Autowired
	IGXqaeverydaystatisticsDao gxqaeverydaystatisticsDao;

	public IGXqaeverydaystatisticsDao getGxqaeverydaystatisticsDao() {
		return gxqaeverydaystatisticsDao;
	}
	public void setGxqaeverydaystatisticsDao(
			IGXqaeverydaystatisticsDao gxqaeverydaystatisticsDao) {
		this.gxqaeverydaystatisticsDao = gxqaeverydaystatisticsDao;
	}
	@Override
	public ArrayList<GXJOrderUploadReport> getUploadProgress(GXJOrderUploadReport user) {
		List<Object> list=orderUploadReportDao.getUploadProgress(user);
        ArrayList<GXJOrderUploadReport> mandList=new ArrayList();
        if(list!=null&&list.size()!=0){
	        for (int i = 0; i < list.size(); i++) {
	        	GXJOrderUploadReport d=(GXJOrderUploadReport) list.get(i);
	        	Integer qa_notstandard=new Integer(StringUtil.toInteger(StringUtil.objCovStr(d.getQa_notstandard())));
	     		Integer qa_qualified=StringUtil.toInteger(StringUtil.objCovStr(d.getQa_qualified()));
	     		Integer cgl=new Integer(0);
	        	cgl=qa_notstandard+qa_qualified;
	     		d.setCgl(cgl);//成功量
//	        	sbl=qa_cancel+qa_disqualification+dba_repetition
	     		Integer qa_cancel=StringUtil.toInteger(StringUtil.objCovStr(d.getQa_cancel()));
	     		Integer qa_disqualification=StringUtil.toInteger(StringUtil.objCovStr(d.getQa_disqualification()));
	     		Integer dba_repetition=StringUtil.toInteger(StringUtil.objCovStr(d.getDba_repetition()));
	     		Integer sbl=new Integer(0);
	        	sbl=qa_cancel+qa_disqualification+dba_repetition;
	    		d.setSbl(sbl);//失败量
	    		mandList.add(d);
			}
        }
		return mandList;
	}
	
	@Override
	public PageResults<Object> getUploadReports(GXJOrderUploadReport user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			        PageResults s= orderUploadReportDao.getUploadReports(user);
			        List<Object> list=s.getResults();
			        List mandList=new ArrayList();
			        for (int i = 0; i < list.size(); i++) {
//			    		 a.demandid,a.jfuid,a.ordername,a.releasetime,b.fbl,b.cgl,b.sbl,b.jsl,b.orderid
			        	Object[] a= (Object[]) list.get(i);
			        	String demandid=StringUtil.objCovStr(a[0]);
			        	String jfuid=StringUtil.objCovStr(a[1]);
			        	String ordername=StringUtil.objCovStr(a[2]);
			        	String releasetime=StringUtil.objCovStr(a[3]);
			        	Integer fbl=StringUtil.toInteger(StringUtil.objCovStr(a[4]));
			        	Integer cgl=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
			        	Integer sbl=StringUtil.toInteger(StringUtil.objCovStr(a[6]));
			        	Integer jsl=StringUtil.toInteger(StringUtil.objCovStr(a[7]));
			        	String orderid=StringUtil.objCovStr(a[8]);
			        	GXJOrderUploadReport d=new GXJOrderUploadReport();
			        	d.setDemandid(demandid);
			        	d.setJfuid(jfuid);
			    		d.setOrdername(ordername);
			    		d.setReleasetime(releasetime);
			    		d.setFbl(fbl);
			    		d.setCgl(cgl);
			    		d.setSbl(sbl);
			    		d.setJsl(jsl);
			    		d.setOrderid(orderid);
			    		mandList.add(d);
					}
			        
			        if(!"export".equals(user.getAction())){
				        GXJOrderUploadReport tolReport= orderUploadReportDao.getUploadReportsSum(user);
				        res.setFblTol(tolReport.getFblTol());
				        res.setCglTol(tolReport.getCglTol());
				        res.setSblTol(tolReport.getSblTol());
				        res.setJslTol(tolReport.getJslTol());
			        }
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setPageStr(s.getPageStr());
			        res.setResults(mandList);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	
	
	@Override
	public PageResults<Object> getUploadOrderReports(GXJOrderUploadReport user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			        PageResults s= orderUploadReportDao.getUploadOrderReports(user);
			        List<Object> list=s.getResults();
			        List mandList=new ArrayList();
			        for (int i = 0; i < list.size(); i++) {
//			        	a.demandid,b.jfuid_j,a.ordername,b.createtime,b.fbl,b.cgl,b.sbl,b.jsl,b.orderid 
			        	Object[] a= (Object[]) list.get(i);
			        	String demandid=StringUtil.objCovStr(a[0]);
			        	String jfuid=StringUtil.objCovStr(a[1]);
			        	String ordername=StringUtil.objCovStr(a[2]);
			        	String createtime=StringUtil.objCovStr(a[3]);
			        	Integer fbl=StringUtil.toInteger(StringUtil.objCovStr(a[4]));
			        	Integer cgl=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
			        	Integer sbl=StringUtil.toInteger(StringUtil.objCovStr(a[6]));
			        	Integer jsl=StringUtil.toInteger(StringUtil.objCovStr(a[7]));
			        	String orderid=StringUtil.objCovStr(a[8]);
			        	GXJOrderUploadReport d=new GXJOrderUploadReport();
			        	d.setDemandid(demandid);
			        	d.setJfuid(jfuid);
			    		d.setOrdername(ordername);
			    		d.setCreatetime(createtime);
			    		d.setFbl(fbl);
			    		d.setCgl(cgl);
			    		d.setSbl(sbl);
			    		d.setJsl(jsl);
			    		d.setOrderid(orderid);
			    		mandList.add(d);
					}
			        
			        if(!"export".equals(user.getAction())){
				        GXJOrderUploadReport tolReport= orderUploadReportDao.getUploadOrderReportsSum(user);
				        res.setFblTol(tolReport.getFblTol());
				        res.setCglTol(tolReport.getCglTol());
				        res.setSblTol(tolReport.getSblTol());
				        res.setJslTol(tolReport.getJslTol());
			        }
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setPageStr(s.getPageStr());
			        res.setResults(mandList);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	@Override
	public OrderReportRes getOrderOrderNums(GXJOrderUploadReport user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    OrderReportRes res=new OrderReportRes(code,msg);
	    try {
			List list=orderUploadReportDao.getOrderOrderNums(user);
	        List<OrderReport> orderReportList=new ArrayList<OrderReport>();
	        for (int i = 0; i < list.size(); i++) {
	        	Object[] a= (Object[]) list.get(i);
	        	String demandid=StringUtil.objCovStr(a[0]);
	        	String jfuid_j=StringUtil.objCovStr(a[1]);
	        	String qachecktime=StringUtil.objCovStr(a[2]);
	        	String order_num=StringUtil.objCovStr(a[3]);
	        	String wcl=StringUtil.objCovStr(a[4]);
	        	
	        	OrderReport d=new OrderReport();
	        	d.setDemandid(demandid);
	        	d.setJfuid_j(jfuid_j);
	        	d.setQachecktime(qachecktime);
	        	d.setOrder_num(order_num);
	        	d.setWcl(wcl);
	        	orderReportList.add(d);
			}
	        res.setOrderReportList(orderReportList);
		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
		}
		return res;
	}
	
	
	/*1.4.2  接包方-本月预计收入(Revenue expected this month)    */
	public ThisMonthRevenueRes getThisMonthRevenue(GXJOrderUploadReport user) {
		ThisMonthRevenueRes res=new ThisMonthRevenueRes("Y","");
		try {
			BigDecimal thisMonthRevenue=orderUploadReportDao.getThisMonthRevenue(user);
		    if(null==thisMonthRevenue){
		    	thisMonthRevenue=new BigDecimal(0);	
		    }
			res.setThisMonthRevenue(thisMonthRevenue);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
	}
	/*
	 * 1.4.2  接包方-本月完成订单量(Order quantity completed this month)    
	 */
	public ThisMonthOrderQuantityCompletedRes getThisMonthOrderQuantityCompleted(GXJOrderUploadReport user) {
		ThisMonthOrderQuantityCompletedRes res=new ThisMonthOrderQuantityCompletedRes("Y","");
		try {
			BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(user);
		    if(null==thisMonthOrderQuantityCompleted){
		    	thisMonthOrderQuantityCompleted=new BigDecimal(0);	
		    }
			res.setThisMonthOrderQuantityCompleted(thisMonthOrderQuantityCompleted);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
	}
	
	//接包方成单报表第一层
	@Override
	public OutsourceeStatementRes getOutsourceeStatement(GXJOrderUploadReport user) {
		OutsourceeStatementRes res=new OutsourceeStatementRes(ERConst.SU_CODE, ERConst.SU_CODE_VALUE);
		try {
			PageResults<Object> alist=orderUploadReportDao.getOutsourceeStatement(user);
			
			//加总
			List sumuploadnumberList=orderUploadReportDao.getSumOutsourceeStatement(user);//总量上传量
			if(null!=sumuploadnumberList && sumuploadnumberList.size()>0){
					Object[] object=(Object []) sumuploadnumberList.get(0);
					
					BigDecimal sum=StringUtil.toBigDecimal(StringUtil.objCovStr(object[0]));//上传数量
					BigDecimal s=StringUtil.toBigDecimal(StringUtil.objCovStr(object[1]));//成功量
					BigDecimal js=StringUtil.toBigDecimal(StringUtil.objCovStr(object[2]));//失败量
					BigDecimal sumuploadnumber=StringUtil.toBigDecimal(StringUtil.objCovStr(object[3]));//接收量
					BigDecimal sb=StringUtil.toBigDecimal(StringUtil.objCovStr(object[4]));//竞拍量
					res.setSumuploadnumber(sum);
					res.setSumsuccessfulnumber(s);
					res.setSumfailureamount(js);
					res.setSumacceptquantity(sumuploadnumber);
					res.setSumauctionnum(sb);
					
			}
			//分页
			List<OutsourceeStatement> list=new ArrayList<OutsourceeStatement>();
			if(null!=alist && alist.getResults().size()>0){
				for (int i = 0; i <alist.getResults().size(); i++) {
					Object[] object=(Object []) alist.getResults().get(i);
					OutsourceeStatement o=new OutsourceeStatement();
					o.setUploadnumber(StringUtil.toInteger(StringUtil.objCovStr(object[0])));
					o.setSuccessfulnumber(StringUtil.toInteger(StringUtil.objCovStr(object[1])));
					o.setFailureamount(StringUtil.toInteger(StringUtil.objCovStr(object[2])));
					o.setAcceptquantity(StringUtil.toInteger(StringUtil.objCovStr(object[3])));
					o.setJfuid(StringUtil.objCovStr(object[4]));
					o.setDemandid(StringUtil.objCovStr(object[5]));
					o.setQachecktime(StringUtil.objCovStr(object[6]));
					o.setOrdername(StringUtil.objCovStr(object[7]));
					o.setAuctionnum(StringUtil.toInteger(StringUtil.objCovStr(object[8])));
					o.setOrderid(StringUtil.objCovStr(object[9]));
					list.add(o);
				}
				res.setAjaxPageStr(alist.getAjaxPageStr());
				res.setList(list);
			}
			
		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			
			res.setMsg(ERConst.ER_CODE_VALUE);
			e.printStackTrace();
		}
		return res;
	}
	
	//接包方成单报表第二层
	@Override
	public OutsourceeStatementRes getOutsourceeSecondFloorStatement(GXJOrderUploadReport user) {
		String code=ERConst.SU_CODE;
		String msg=ERConst.SU_CODE_VALUE;
		OutsourceeStatementRes res=new OutsourceeStatementRes(code,msg);
		try {
			List<Object> alist=orderUploadReportDao.getOutsourceeSecondFloorStatement(user);
			List<OutsourceeStatement> list=new ArrayList<OutsourceeStatement>();
			
			BigDecimal sumfbls = new BigDecimal(0.00); //(汇总)上传量 
			BigDecimal sumjsls = new BigDecimal(0.00);  //(汇总)接收量
			BigDecimal sumhgls = new BigDecimal(0.00);  //(汇总)合格量
			BigDecimal sumbgfls = new BigDecimal(0.00);  //(汇总)术不规范量
			BigDecimal sumcfls = new BigDecimal(0.00);   //(汇总)重复量
			BigDecimal sumqxls = new BigDecimal(0.00);  //(汇总)取销量
			BigDecimal sumbhgls = new BigDecimal(0.00); //(汇总)不合格量
			
			if(null!=alist && alist.size()>0){
				for(int i=0;i<alist.size();i++){
					OutsourceeStatement o=new OutsourceeStatement();
				    Object [] object=(Object[]) alist.get(i);
				    o.setOrdernum(StringUtil.toBigDecimal(StringUtil.objCovStr(object[0])));
                    o.setQanotstandard(StringUtil.toBigDecimal(StringUtil.objCovStr(object[1])));
                    o.setQaqualified(StringUtil.toBigDecimal(StringUtil.objCovStr(object[2])));
                    o.setJfuid(StringUtil.objCovStr(object[3]));
                    o.setQacancel(StringUtil.toBigDecimal(StringUtil.objCovStr(object[4])));
                    o.setQadisqualification(StringUtil.toBigDecimal(StringUtil.objCovStr(object[5])));
                    o.setDbarepetition(StringUtil.toBigDecimal(StringUtil.objCovStr(object[6])));
                    o.setDbareceive(StringUtil.toBigDecimal(StringUtil.objCovStr(object[7])));
                    o.setDemandid(StringUtil.objCovStr(object[8]));
                    o.setOrderid(StringUtil.objCovStr(object[9]));
                    o.setCreatetime(StringUtil.objCovStr(object[10]));
                    o.setDbaurl(StringUtil.objCovStr(object[11]));
                    o.setQaurl(StringUtil.objCovStr(object[12]));
                    list.add(o);
                    
                    //汇总
                      sumfbls=sumfbls.add(o.getOrdernum());//上传量
                      sumjsls=sumjsls.add(o.getDbareceive());//接收量
                      sumhgls=sumhgls.add(o.getQaqualified());//合格量
                      sumbgfls=sumbgfls.add(o.getQanotstandard());//不规范量
                      sumcfls=sumcfls.add(o.getDbarepetition());//重复量
                      sumqxls=sumqxls.add(o.getQacancel());//取消量
                      sumbhgls=sumbhgls.add(o.getQadisqualification());//不合格量
                      
				}
				res.setList(list);
				res.setSumuploadnumber(sumfbls);
				res.setSumacceptquantity(sumjsls);
				res.setSumqaqualified(sumhgls);
				res.setSumqanotstandard(sumbgfls);
				res.setSumdbarepetition(sumcfls);
				res.setSumqacancel(sumqxls);
				res.setSumqadisqualification(sumbhgls);
	
			}
		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			res.setMsg(ERConst.ER_CODE_VALUE);
			e.printStackTrace();
		}
		return res;
	}
	
	//发包方成单报表第一层
	@Override
	public LetContractOneRes getLetContract(GXDbaEverydayStatistics user) {
		String code=ERConst.SU_CODE;
		String msg=ERConst.SU_CODE_VALUE;
		LetContractOneRes res=new LetContractOneRes(code, msg);
		try {
			//加总
			List sumList=orderUploadReportDao.getsumLetContract(user);//总量上传量
			if(null!=sumList && sumList.size()>0){
				Object [] object =(Object[]) sumList.get(0);
				BigDecimal fbl=StringUtil.toBigDecimal(StringUtil.objCovStr(object[0])); //发布量
				BigDecimal jpl=StringUtil.toBigDecimal(StringUtil.objCovStr(object[1]));;//竞拍量
				BigDecimal wcl=StringUtil.toBigDecimal(StringUtil.objCovStr(object[2]));;//完成量
				res.setSumReleasenum(fbl);
				res.setSumAuctionnum(jpl);
				res.setSumcompletequantity(wcl);
			}
			
			//获取用户发的需求包的数量
			Hfp puser = new Hfp();
			puser.setJfuid(user.getJfuid());
			Integer  sump=hFpDao.getHfpCount(user);
				res.setSump(sump);
				
				//统计用户是否有新的成单
				List<Map> listnew = orderUploadReportDao.getCensusDownload(user.getJfuid());
				if(listnew!=null){
					for (Map map : listnew) {
						if("销售线索挖掘".equals(map.get("servicetype"))){
							res.setNdcountHfd(StringUtil.toInteger(map.get("count")));
						}
						if("数据加工".equals(map.get("servicetype"))){
							res.setNdcountHfdf(StringUtil.toInteger(map.get("count")));
						}
					}
				}
				
			
			
			
				//Integer	ndcountHfd = 0;
			
			//分页
			PageResults<Object> alist=orderUploadReportDao.getLetContract(user);
			if(null!=alist && alist.getResults().size()>0){
				ArrayList<GXDbaEverydayStatistics> list=new ArrayList<GXDbaEverydayStatistics>();
				for(int i=0;i<alist.getResults().size();i++){
					Object [] object=(Object[]) alist.getResults().get(i);
					GXDbaEverydayStatistics e=new GXDbaEverydayStatistics();
					e.setPid(StringUtil.objCovStr(object[0]));
					e.setJfuid(StringUtil.objCovStr(object[1]));
					e.setServicetype(StringUtil.objCovStr(object[2]));
					e.setDemandname(StringUtil.objCovStr(object[3]));
					e.setReleasenum(StringUtil.toInteger(StringUtil.objCovStr(object[4])));//发布量：需求包对应的发布量总量；
					e.setAuctionnum(StringUtil.toInteger(StringUtil.objCovStr(object[5])));//竞拍量：需求包对应的被竞拍量；
					e.setCompletequantity(StringUtil.toInteger(StringUtil.objCovStr(object[6])));//完成量:后台DBA填写的属于这个需求包的总的递交量；
					e.setReleasetime(StringUtil.objCovStr(object[7]));
					e.setDemandid(StringUtil.objCovStr(object[8]));
					Integer notdownloadcount = StringUtil.toInteger(StringUtil.objCovStr(object[9]));
					e.setNotdownloadcount(notdownloadcount);
				//	notdownloadcountSum = notdownloadcountSum+notdownloadcount;
					list.add(e);
				}
				res.setList(list);
				res.setAjaxPageStr(alist.getAjaxPageStr());
				//res.setNotdownloadcountSum(notdownloadcountSum);
			}
		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			res.setMsg(ERConst.ER_CODE_VALUE);
			e.printStackTrace();
		}
		return res;
	}
	//发包方成单报表第二层
	@Override
	public LetContractOneRes getTowLetContract(GXDbaEverydayStatistics user) {
		String code=ERConst.SU_CODE;
		String msg=ERConst.SU_CODE_VALUE;
		LetContractOneRes res=new LetContractOneRes(code, msg);
		try {
			List<Object> alist=orderUploadReportDao.getTowLetContract(user);
			ArrayList<GXDbaEverydayStatistics> list=new ArrayList<GXDbaEverydayStatistics>();
			if(null!=alist && alist.size()>0){
				for(int i=0;i<alist.size();i++){
				Object [] object =(Object[]) alist.get(i);
				GXDbaEverydayStatistics e=new GXDbaEverydayStatistics();
				e.setPid(StringUtil.objCovStr(object[0]));
				e.setJfuid(StringUtil.objCovStr(object[1]));
				e.setDemandid(StringUtil.objCovStr(object[2]));
				e.setServicetype(StringUtil.objCovStr(object[3]));//业务类型
				e.setOrdername(StringUtil.objCovStr(object[4]));
				e.setTargecity(StringUtil.objCovStr(object[5]));
				e.setReleasenum(StringUtil.toInteger(StringUtil.objCovStr(object[6])));//发布量
				e.setAuctionnum(StringUtil.toInteger(StringUtil.objCovStr(object[7])));
				e.setCompletequantity(StringUtil.toInteger(StringUtil.objCovStr(object[8])));
				e.setCitydesc(StringUtil.objCovStr(object[9]));
				e.setNotdownloadcount(StringUtil.toInteger(StringUtil.objCovStr(object[10])));
				list.add(e);
				}
				res.setList(list);
			}
			res.setDemandname(user.getDemandname());
		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			res.setMsg(ERConst.ER_CODE_VALUE);
			e.printStackTrace();
		}
		return res;
	}
	//发包方成单报表第三层
	@Override
	public LetContractOneRes getThreeLetContract(GXDbaEverydayStatistics user) {
		String code=ERConst.SU_CODE;
		String msg=ERConst.SU_CODE_VALUE;
		LetContractOneRes res=new LetContractOneRes(code, msg);
		try {
			//加总
			List sumlist=orderUploadReportDao.getSumThreeLetContract(user);
			if(null!=sumlist && sumlist.size()>0){
				Object [] object =(Object [])sumlist.get(0);
				BigDecimal sumcompletequantity=StringUtil.toBigDecimal(StringUtil.objCovStr(object[2]));
				res.setSumcompletequantity(sumcompletequantity);
			}
			//分页
			PageResults<Object> alist=orderUploadReportDao.getThreeLetContract(user);
			List<GXDbaEverydayStatistics> list=new ArrayList<GXDbaEverydayStatistics>();
			if(null!=alist && alist.getResults().size()>0){
				for(int i=0;i<alist.getResults().size();i++){
					Object [] object=(Object []) alist.getResults().get(i);
					GXDbaEverydayStatistics e=new GXDbaEverydayStatistics();
					e.setCompletequantity(StringUtil.toInteger(StringUtil.objCovStr(object[0])));
					e.setCreatetime(StringUtil.objCovStr(object[1]));
					e.setCensusfile_url(StringUtil.objCovStr(object[2]));
					e.setCensusday(StringUtil.objCovStr(object[3]));
					e.setIsdownloaded(StringUtil.toInteger(object[4]));
					e.setStid((StringUtil.objCovStr(object[5])));
					list.add(e);
				}
				res.setList(list);
				res.setAjaxPageStr(alist.getAjaxPageStr());
			}
			////发包方第三层获取上一层（需求名,发布量,目标城市）
			List drclist=orderUploadReportDao.selectTowLetContract(user);
			if(null!=drclist && drclist.size()>0){
				Object [] object=(Object[]) drclist.get(0);
				res.setDemandname(StringUtil.objCovStr(object[0]));//需求名
				res.setTargecity(StringUtil.objCovStr(object[1]));//目标城市
				res.setSumReleasenum(StringUtil.toBigDecimal(StringUtil.objCovStr(object[2])));//需求量
			}
			//录音文件按
			List<GXqaeverydaystatistics> lylist=gxqaeverydaystatisticsDao.selectGXqaeveryDaystatisticesly(user);
			if(null!=lylist && lylist.size()>0){
				for (int i = 0; i < lylist.size(); i++) {
					GXqaeverydaystatistics gx=lylist.get(i);
					 String cent=gx.getCensusdayrange();
					  if(null!=cent){
						  int centlength=cent.length();
						  String cent1=" ";
							if(centlength<=10){
							    cent1=cent. substring(0, centlength);
								gx.setCensusdayrangeh(cent1);
							}else if(centlength>10){
								cent1=cent. substring(0, 10);
								String cent2=cent.substring(centlength-10,centlength);
								String cents=cent1+"~"+cent2;
								gx.setCensusdayrangeh(cents);
							  }
				     }
			}
		  }
			res.setLuyinlist(lylist);

		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			res.setMsg(ERConst.ER_CODE_VALUE);
			e.printStackTrace();
		}
		return res;
	}

	//根据stid查询对应的一条数据所有字段
	@Override
	public GXDbaEverydayStatistics findGXDbaEverydayStatisticsByStid(String stid){
		return orderUploadReportDao.findGXDbaEverydayStatisticsByStid(stid);
	}
	
	//发包方成单报表第三层 - 点击"下载" 修改下载状态
	@Override
	public void editDownloadStatus(GXDbaEverydayStatistics record){
		orderUploadReportDao.editDownloadStatus(record);
	}
	
}
