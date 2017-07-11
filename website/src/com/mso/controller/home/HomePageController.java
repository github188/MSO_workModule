package com.mso.controller.home;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.Hfp;
import com.mso.model.IndustryDynamics;
import com.mso.model.JfUser;
import com.mso.model.PlatformDynamics;
import com.mso.res.ThisMonthOrderQuantityCompletedRes;
import com.mso.res.HomePage.HomePageRes;
import com.mso.service.HomePageService;
import com.mso.service.IHFpService;
import com.mso.service.IOrderUploadReportService;
import com.mso.service.IUserService;
import com.mso.utils.DateUtil;
import com.mso.utils.StringUtil;

@Controller
public class HomePageController extends BaseController {
	@Autowired
	HomePageService homepageservice;
	
	@Autowired
	IUserService userService;
	@Autowired
	IHFpService hfpService;
	
	@Autowired
    private IOrderUploadReportService orderUploadReportService;
	
	public HomePageService getHomepageservice() {
		return homepageservice;
	}

	public void setHomepageservice(HomePageService homepageservice) {
		this.homepageservice = homepageservice;
	}
	/**
	 * 官方首页  产品公告
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/homepage/notice")
	public  JSONObject getNotice(){
		logBefore(logger,"官方首页-产品公告");
		JSONObject objectHomePage=new JSONObject();
		try {
			//提示信息
			objectHomePage.put("code","Y");
			objectHomePage.put("msg", "获取数据成功");
			JSONArray array=new JSONArray();
			List<Object> list=homepageservice.getNotice();
			if(null!=list){
				for(int i=0;i<list.size();i++){
					Object [] fistpage=(Object[]) list.get(i);
					Map<String,Object> map=new HashMap<String, Object>();
					map.put("jfuid", StringUtil.objCovStr(fistpage[0]));
					String jfuname=StringUtil.objCovStr(fistpage[1]);
					
					if(jfuname.length()>=3){
						jfuname=jfuname.substring(0,3)+"****";
					}else{
						jfuname=jfuname+"****";
					}
					
					map.put("jfuname", jfuname);
					map.put("demandid", StringUtil.objCovStr(fistpage[2]));
					map.put("ordername",  StringUtil.objCovStr(fistpage[3]));
					map.put("releasetime", StringUtil.objCovStr(fistpage[4]));
					map.put("servicetype", StringUtil.objCovStr(fistpage[5]));
					map.put("demandpricetol",  StringUtil.objCovStr(fistpage[6]));
					
					
					
					String realname=StringUtil.objCovStr(fistpage[7]);
					if(realname.length()>=3){
						realname=realname.substring(0,3)+"****";
					}else{
						realname=realname+"****";
					}
					map.put("realname",realname);
					array.add(map);
				}
			}else{
				objectHomePage.put("msg","暂无数据");
			}
			objectHomePage.put("noticeList",array);
		} catch (Exception e) {
			objectHomePage.put("code","N");
			objectHomePage.put("msg", "获取数据失败");
			loger(logger,e);
		}
		return objectHomePage;
	}
	
	
	/**
	 * 官方首页  热门需求
	 * @param user
	 * @return
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/homepage/hotdemand")
	public  JSONObject getHotdemand(){
		logBefore(logger,"官方首页-热门需求");
		JSONObject objectHomePage=new JSONObject();
		try {
			//提示信息
			objectHomePage.put("code","Y");
			objectHomePage.put("msg","获取数据成功");
			JSONArray array=new JSONArray();
			List<Object> list=homepageservice.getHotDemand();
			if(null!=list){
				for(int i=0;i<list.size();i++){
					Object [] fistpage=(Object[]) list.get(i);
					
					Map<String,Object> map=new HashMap<String, Object>();
					String demandid=StringUtil.objCovStr(fistpage[0]);
					String jfuid=StringUtil.objCovStr(fistpage[1]);
					String category1=StringUtil.objCovStr(fistpage[2]);
					String category2=StringUtil.objCovStr(fistpage[3]);
					String category3=StringUtil.objCovStr(fistpage[4]);
					String demandtype=StringUtil.objCovStr(fistpage[5]);
					String productname=StringUtil.objCovStr(fistpage[6]);
					String ordername=StringUtil.objCovStr(fistpage[7]);
					String releasenum=StringUtil.objCovStr(fistpage[8]);
					String citydesc=StringUtil.objCovStr(fistpage[9]);
					String targecity=StringUtil.objCovStr(fistpage[10]);
					String begintime=StringUtil.objCovStr(fistpage[11]);
					String endtime=StringUtil.objCovStr(fistpage[12]);
					
					String demand=StringUtil.objCovStr(fistpage[13]);
					String fdstate=StringUtil.objCovStr(fistpage[14]);
					String applicationnum=StringUtil.objCovStr(fistpage[15]);
					String favorableway=StringUtil.objCovStr(fistpage[16]);
					
					String releasetime=StringUtil.objCovStr(fistpage[17]);
					String finishnum=StringUtil.objCovStr(fistpage[18]);
					String demanddescription=StringUtil.objCovStr(fistpage[19]);
					String syl=StringUtil.objCovStr(fistpage[20]);
					
					
					map.put("demandid",demandid);//需求id
					map.put("jfuid", jfuid);//用户id
					map.put("category1", category1);//成人教育  选择行业及发布类型 
					map.put("category2", category2);//获客渠道/类目2  1-电话营销 2-网络营销 3-地推推广
					map.put("category3", category3);//业务类型1-销售线索挖掘    2数据加工  
					map.put("demandtype",demandtype);//需求类型   1-套餐    2-个性化需求
					map.put("productname",productname);//productname 产品名
					map.put("ordername", ordername);//需求标题/套餐名
					map.put("releasenum", releasenum);//发布量
					map.put("citydesc", citydesc);//城市描述
					map.put("targecity", targecity);//套餐/目标城市
					map.put("begintime", begintime);//开始时间
					map.put("endtime", endtime);//结束时间
					map.put("demand", demand);//产品介绍 
					map.put("fdstate", fdstate);//发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  
					map.put("applicationnum", applicationnum);//已经申请通过数
					map.put("favorableway", favorableway);//优惠方式 0-无优惠 1-免手续费
					map.put("releasetime", releasetime);//优惠方式 0-无优惠 1-免手续费
					map.put("finishnum", finishnum);//完成量
					map.put("demanddescription",demanddescription);//需求描述
					map.put("syl", syl);//剩余量
					
					
					array.add(map);
				}
			}else{
				objectHomePage.put("msg","暂无数据");
			}
			objectHomePage.put("hotdemandList",array);
		} catch (Exception e) {
			objectHomePage.put("code","N");
			objectHomePage.put("msg", "获取数据失败");
			loger(logger,e);
		}
		return objectHomePage;
	}
	
	
	
	
	
	/**
	 * 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 本年度需求发布量
	 * 上月总计完成订单
	 * @param user
	 * @return
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/homepage/statistical")
	public  JSONObject getStatistical(){
		logBefore(logger,"官方首页-本年度需求发布量/上月总计完成订单");
		JSONObject objectHomePage=new JSONObject();
		try {
			objectHomePage.put("code","Y");
			objectHomePage.put("msg","获取数据成功");
			List list=homepageservice.getStatistical();
			Map<String,Object> map=new TreeMap<String, Object>();
			if(null!=list){
				for(int i=0;i<list.size();i++){
					Object [] fistpage=(Object[]) list.get(i);
					String releasetimeYm=StringUtil.objCovStr(fistpage[1]);
					String releasenumTol=StringUtil.objCovStr(fistpage[2]);
					map.put(releasetimeYm, releasenumTol);//
				}
			}
//			String currYear=DateUtil.getCurrYear();//取得当前年
//			objectHomePage.put("currYear",currYear);
			objectHomePage.put("yearmMap",map);
			 GXJOrderUploadReport u=new GXJOrderUploadReport();
			 u.setStatus(6);
			 u.setQa_check(0);
			 u.setQachecktime(DateUtil.getPreM());
			 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
			 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
//			 lastMonthOrder=lastMonthOrder.multiply(new BigDecimal("1.3"));
			 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);//取整 
			 objectHomePage.put("lastMonthOrder",lastMonthOrder);
		} catch (Exception e) {
			objectHomePage.put("code","N");
			objectHomePage.put("msg", "获取数据失败");
			loger(logger,e);
		}
		return objectHomePage;
	}
	
	/*
	 *  1，入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 *  2，获客总数，抓取平台订单质检成功量的总数； 
	 *  3， 客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； 4，数据每日更新；
	 *  底部--数据展示
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/homepage/bottom")
	public  JSONObject getHomeBottom(){
		logBefore(logger,"官方首页-1，入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；2，获客总数，抓取平台订单质检成功量的总数；3，客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； ");
		JSONObject objectHomePage=new JSONObject();
		try {
			//提示信息
			objectHomePage.put("code","Y");
			objectHomePage.put("msg","获取数据成功");
			
			
			 /*
			  * 1，入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户； 
			  */
			 JfUser user=new JfUser();
			 user.setJfustate(4);//审核通过的用户
			 Long settEnterprise=userService.getSettledEnterprise(user);
			 if(null==settEnterprise){
				 settEnterprise=0l;
			 }
			 objectHomePage.put("settledEnterprise",settEnterprise);//入驻企业
			 
			 
			 /*
			 2，获客总数，抓取平台订单质检成功量的总数；
			 */
			 GXJOrderUploadReport u=new GXJOrderUploadReport();
			 u.setStatus(6);
			 u.setQa_check(0);
			 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
			 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
			 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);//取整 
			 objectHomePage.put("passengersTotal",lastMonthOrder);//获客总数
			 
			 
			 /*
			  * 3，客户销售额，抓取今年发包方结算金额总额的数字并处以0.22；
			  */
//			 String currYear=DateUtil.getCurrYear();//取得当前年
			 Hfp par=new Hfp();
//			 par.setReleasetime(currYear);
			 BigDecimal customerSales=hfpService.getCustomerSales(par);
//			 customerSales=customerSales.divide(new BigDecimal("0.22"),BigDecimal.ROUND_HALF_UP);
			 customerSales=customerSales.setScale(2, BigDecimal.ROUND_HALF_UP);//俩位取整 
			 objectHomePage.put("customerSales",customerSales);//客户销售额
			 
		} catch (Exception e) {
			objectHomePage.put("code","N");
			objectHomePage.put("msg", "获取数据失败");
			loger(logger,e);
		}
		return objectHomePage;
	}
	
	
	
	
	/*
	 获客需求金额：动态抓取，上架需求的总金额，即发布需求审核通过的所有需求的金额的加总；
	获客需求两：动态抓取，上架需求的总需求量，即发布需求审核通过的所有需求的需求量的加总；
	促成交易：动态数据，即现在网站首页下方的客户收益的数据；算法为：结算金额/0.22；
	*/
//	@ResponseBody
//	@RequestMapping(method=RequestMethod.GET,value="/homepage/bottom")
//	public  JSONObject getHomeBottom1(){
//		logBefore(logger,"官方首页-1，入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；2，获客总数，抓取平台订单质检成功量的总数；3，客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； ");
//		JSONObject objectHomePage=new JSONObject();
//		try {
//			//提示信息
//			objectHomePage.put("code","Y");
//			objectHomePage.put("msg","获取数据成功");
//			
//			 /*
//			  * 1，入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户； 
//			  */
//			 JfUser user=new JfUser();
//			 user.setJfustate(4);//审核通过的用户
//			 Long settEnterprise=userService.getSettledEnterprise(user);
//			 if(null==settEnterprise){
//				 settEnterprise=0l;
//			 }
//			 objectHomePage.put("settledEnterprise",settEnterprise);//入驻企业
//			 
//			 /*
//			 2，获客总数，抓取平台订单质检成功量的总数；
//			 */
//			 GXJOrderUploadReport u=new GXJOrderUploadReport();
//			 u.setStatus(6);
//			 u.setQa_check(0);
//			 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
//			 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
//			 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);//取整 
//			 objectHomePage.put("passengersTotal",lastMonthOrder);//获客总数
//			 
//			 /*
//			  * 3，客户销售额，抓取今年发包方结算金额总额的数字并处以0.22；
//			  */
//			 Hfp par=new Hfp();
//			 BigDecimal customerSales=hfpService.getCustomerSales(par);
//			 customerSales=customerSales.setScale(2, BigDecimal.ROUND_HALF_UP);//俩位取整 
//			 objectHomePage.put("customerSales",customerSales);//客户销售额
//			 
//		} catch (Exception e) {
//			objectHomePage.put("code","N");
//			objectHomePage.put("msg", "获取数据失败");
//			loger(logger,e);
//		}
//		return objectHomePage;
//	}
	

	
	
	
	
	/**
	 * 行业内动态
	 * @param user
	 * @return
	 */
    @ResponseBody
    @RequestMapping(method=RequestMethod.GET,value="/homepage/industrydynamic")
	public HomePageRes getIndustryDynamic(IndustryDynamics user){
    	logBefore(logger,"官方首页-行业内动态");
    	HomePageRes res=new HomePageRes("Y","获取数据成功");
		try {
			//行业动态表查询
			List<Object> Industrylist=homepageservice.getIndustryDynamics(user);
			res.setList(Industrylist);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg("获取信息失败");
			loger(logger,e);
		}
		return res;
		
	}
    /**
     * 平台动态
     * @param users
     * @return
     */
    @ResponseBody
    @RequestMapping(method=RequestMethod.GET,value="/homepage/platformdynamic")
    public  HomePageRes getPlatformDynamics(PlatformDynamics users){
    	logBefore(logger,"官方首页-平台动态");
    	HomePageRes res=new HomePageRes("Y","获取数据成功");
    	try {
    		//平台动态变查询
      		List<Object> Platformlist=homepageservice.getplatform_dynamics(users);
      		res.setList(Platformlist);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg("获取信息失败");
			loger(logger,e);
		}
    	return res;
    }
	
}
