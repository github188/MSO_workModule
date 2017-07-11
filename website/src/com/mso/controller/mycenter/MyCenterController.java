package com.mso.controller.mycenter;

import java.io.File;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import jxl.Workbook;
import jxl.WorkbookSettings;
import jxl.format.Alignment;
import jxl.format.VerticalAlignment;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import BaseRes.CbaseRes;

import com.mso.controller.base.BaseController;
import com.mso.input.DemandHallPut;
import com.mso.input.UploadReportInput;
import com.mso.model.DemandSum;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.GXPackageManage;
import com.mso.model.GXqaeverydaystatistics;
import com.mso.model.HFDemand;
import com.mso.model.HFPLabel;
import com.mso.model.HFUserDetail;
import com.mso.model.HJCollectionDemand;
import com.mso.model.HJOrderDemand;
import com.mso.model.HJUserDetail;
import com.mso.model.Hfp;
import com.mso.model.JfUser;
import com.mso.model.PLabel;
import com.mso.res.AuctionListDemandHomeRes;
import com.mso.res.DemandDetailRes;
import com.mso.res.DemandHomeRes;
import com.mso.res.DemandReportHomeRes;
import com.mso.res.DynamicDemandHomeRes;
import com.mso.res.GrossIncomeRes;
import com.mso.res.HFDemandRes;
import com.mso.res.HFdemandHallRes;
import com.mso.res.HistoricalOrderSummaryRes;
import com.mso.res.OrderDemandRes;
import com.mso.res.OrderProfileSelectRes;
import com.mso.res.OrderReportRes;
import com.mso.res.PackageManageRes;
import com.mso.res.ResidualOrderQuantityRes;
import com.mso.res.ThisMonthOrderQuantityCompletedRes;
import com.mso.res.ThisMonthRevenueRes;
import com.mso.res.TotalBidOrderRes;
import com.mso.res.TotalOrderSettlementRes;
import com.mso.res.UploadProgressRes;
import com.mso.res.UserRes;
import com.mso.res.report.UploadReportRes;
import com.mso.service.BaseLabelService;
import com.mso.service.GXqaeverydaystatisticsService;
import com.mso.service.HFPLabelService;
import com.mso.service.HJfUserDetailService;
import com.mso.service.ICollectionDemandService;
import com.mso.service.IDatafilteringService;
import com.mso.service.IDbaEverydayStatisticsService;
import com.mso.service.IDemandService;
import com.mso.service.IHFpService;
import com.mso.service.IOrderDemandService;
import com.mso.service.IOrderUploadReportService;
import com.mso.service.IPackageManageService;
import com.mso.service.ITemplateService;
import com.mso.service.IUserService;
import com.mso.service.MyDemandSumService;
import com.mso.utils.CommonUtil;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;
import com.mso.utils.DateUtil;
import com.mso.utils.DesUtils;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;
import com.mso.utils.httpUtil;
@Controller
public class MyCenterController extends BaseController {
	
	@Autowired
    private IUserService userService;
	
	@Autowired
    private IDemandService demandService;
	
	@Autowired
    private IDatafilteringService datafilteringService;
	
	
	@Autowired
    private HJfUserDetailService hjfUserDetailService;
	
	@Autowired
    private IOrderDemandService orderdemandService;
	
	@Autowired
    private ICollectionDemandService collectionDemandService;
	
	@Autowired
    private IPackageManageService packageManageService;
	
	@Autowired
	private IDbaEverydayStatisticsService dbaEverydayStatisticsService;
	
	@Autowired
    private IOrderUploadReportService orderUploadReportService;
	
	@Autowired
    private ITemplateService templateService;
	
	@Autowired
	private GXqaeverydaystatisticsService gxqaeverydaystatisticsService;
	
	@Autowired
	private IHFpService hfpService;
	
	@Autowired
	private BaseLabelService baseLabelService;
	@Autowired
	private HFPLabelService plabelService;
	
	@Autowired
	private MyDemandSumService myDemandSumService;
	
	 //需要用户信息的数据初始化
	 public ModelAndView initUser(HttpSession session,String pagenameValue){
		 	ModelAndView mv = this.getModelAndView();
			HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
			if(usermap!=null){
				String jfuid=usermap.get("jfuid");
				String pid=usermap.get("pid");
				String jfutype=usermap.get("jfutype");
				String invitationcode=usermap.get("invitationcode");
				String showName="";
				Object o=hjfUserDetailService.getFUserById(jfuid,jfutype);
				if("1".equals(jfutype)){
					HFUserDetail user=(HFUserDetail)o;
					user.setInvitationcode(invitationcode);
					user.setPid(pid);
					if(StringUtil.isNull(user.getRealname())){
						showName=user.getJfuname();
					}else{
						showName=user.getRealname();	
					}
					mv.addObject("showName",showName);
					mv.addObject("user",user);
				}else{
					HJUserDetail user=(HJUserDetail)o;	
					user.setInvitationcode(invitationcode);
					user.setPid(pid);
					if(StringUtil.isNull(user.getRealname())){
						showName=user.getJfuname();
					}else{
						showName=user.getRealname();	
					}
					mv.addObject("showName",showName);
					mv.addObject("user",user);
				}
				mv.addObject("pagename",pagenameValue);
				mv.addObject("islogin","login");
			}else{
				mv.addObject("islogin","nologin");
			}
			return mv;
	 }
	/* 
	 * 发包方
	 * 前端登录 基本信息  -发包方
	 */
	@RequestMapping(value="/customer_lj_AccountManagement")
	public ModelAndView toCustomer_AccountManagement(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"customer_lj_AccountManagement");
		mv.addObject("pagename","customer_lj_AccountManagement");
		mv.setViewName("jsp/center/customer_accountManagement.jsp");
		return mv;
	}
	/* 
	 * 发包方
	 * 基本信息do  -发包方
	 */
	 @ResponseBody
	 @RequestMapping(value="/customer_lj_AccountManagementDo")
	 public  UserRes toAccountManagementDo(JfUser  passPut,HttpSession session) { 
	    	String code="Y";
	    	String msg="修改成功";
	    	UserRes res = new UserRes(code,msg);  
	    	try {
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				if(StringUtil.isNull(passPut.getJfuid())){
					
				}
				passPut.setJfuid(jfuid);
				String jfuname=usermap.get("jfuname");
				passPut.setJfuname(jfuname);
				String jfutype=usermap.get("jfutype");
				passPut.setJfutype(jfutype);
				userService.editFUser(passPut);
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }
	
	 
			 
			 
	 
	 
	 
	 
     /* 
	 * 接/发包方  获取用户信息
	 * 发包方 基本信息提交
	 */
	 @ResponseBody
	 @RequestMapping(method=RequestMethod.GET,value="/user/information/{jfuid}")
	 public  JSONObject informationByd(@PathVariable("jfuid")String jfuid) { 
		 	logBefore(logger,"接/发包方  获取用户信息");
		 	JSONObject objectHomePage=null;
	    	try {
	    		objectHomePage=hjfUserDetailService.getjfUserById(jfuid);
	    		if(null==objectHomePage){
	    			objectHomePage=new JSONObject();
	    			objectHomePage.put("code","Y");
	    			objectHomePage.put("msg","没有查到相关信息");
	    		}else{
	    			objectHomePage.put("code","Y");
	    			objectHomePage.put("msg","获取数据成功");
	    		}
			} catch (Exception e) {
				objectHomePage.put("code","N");
				objectHomePage.put("msg","获取数据失败");
				loger(logger,e);
			}
	    	return objectHomePage;
	    }
	 
	 
	 
	     /* 
		 * 发包方
		 * 基本信息do  -发包方 基本信息提交
		 */
		 @ResponseBody
		 @RequestMapping(method=RequestMethod.POST,value="/user/f/information")
		 public  JSONObject finformation(JfUser  passPut) { 
			 	logBefore(logger,"发包方 基本信息 完善");
			 	JSONObject objectHomePage=new JSONObject();
			 	objectHomePage.put("code","Y");
				objectHomePage.put("msg","修改成功");
		    	try {
	
					if(StringUtil.isNull(passPut.getJfuid())){
						objectHomePage.put("code","N");
						objectHomePage.put("msg","请输入jfuid");
						return objectHomePage;
					}
			
		    		//如果图片证书  url 包含
					passPut.setCompimg(CommonUtil.replaceUrl(passPut.getCompimg()));
					passPut.setComplicense(CommonUtil.replaceUrl(passPut.getComplicense()));
					passPut.setComptaxcer(CommonUtil.replaceUrl(passPut.getComptaxcer()));
					passPut.setComporgcode(CommonUtil.replaceUrl(passPut.getComporgcode()));
					
					passPut.setJfutype("1");
					userService.editFUser(passPut);
				} catch (Exception e) {
					objectHomePage.put("code","N");
					objectHomePage.put("msg","修改失败");
					loger(logger,e);
				}
		    	return objectHomePage;
		    }
		 
		 
		 
	
			/* 
			 * 接包方 
			 * 基本信息do-接包方 基本信息提交
			 */
			 @ResponseBody
			 @RequestMapping(method=RequestMethod.POST,value="/user/j/information")
			 public  JSONObject jinformation(JfUser  passPut) { 
				 logBefore(logger,"官方首页-产品公告");
				 	JSONObject objectHomePage=new JSONObject();
			    	objectHomePage.put("code","Y");
					objectHomePage.put("msg","修改成功");
			    	try {
			    		if(StringUtil.isNull(passPut.getJfuid())){
							objectHomePage.put("code","N");
							objectHomePage.put("msg","请输入jfuid");
							return objectHomePage;
						}					
			    		passPut.setCompimg(CommonUtil.replaceUrl(passPut.getCompimg()));
						passPut.setComplicense(CommonUtil.replaceUrl(passPut.getComplicense()));
						passPut.setComptaxcer(CommonUtil.replaceUrl(passPut.getComptaxcer()));
						passPut.setComporgcode(CommonUtil.replaceUrl(passPut.getComporgcode()));
						passPut.setJfutype("2");
						userService.editFUser(passPut);
					} catch (Exception e) {
						objectHomePage.put("code","N");
						objectHomePage.put("msg","修改失败");
						loger(logger,e);
					}
					return objectHomePage;
			    }
		 
		 
		 
		 
		 
		 
	 	
		 
		 
		/* 
		 * 接包方
		 * 接包方-子账号管理 supplier_manegeAccount.jsp  首页
		 */
		@RequestMapping(value="/supplier_lj_manegeAccount")
		public ModelAndView toSupplier_lj_manegeAccount(HttpSession session)throws Exception{
			ModelAndView mv =this.initUser(session,"supplier_lj_manegeAccount");
			mv.addObject("pagename","supplier_lj_manegeAccount");
			mv.setViewName("jsp/center/supplier_manegeAccount.jsp");
			return mv;
		}
		
		/* 
		 * 接包方
		 * 接包方-子账号管理supplier_subAccount.jsp 新增页面
		 */
		@RequestMapping(value="/supplier_lj_subAccount")
		public ModelAndView toSupplier_lj_Supplier_BasicInfo(HttpSession session)throws Exception{
			ModelAndView mv =this.initUser(session,"supplier_lj_subAccount");
			mv.addObject("pagename","supplier_lj_subAccount");
			mv.setViewName("jsp/center/supplier_subAccount.jsp");
			return mv;
		}

		/* 
		 * 接包方
		 * 接包方-子账号管理supplier_subAccount.jsp 编辑页面
		 */
		@RequestMapping(value="/supplier_lj_subAccountEdit")
		public ModelAndView toSupplier_lj_SubAccountEdit(HttpSession session,HttpServletRequest  request)throws Exception{
			String jfuid=request.getParameter("jfuid");
			ModelAndView mv =this.initUser(session,"supplier_lj_subAccount");
			mv.addObject("jfuid",jfuid);
			mv.setViewName("jsp/center/supplier_subAccountEdit.jsp");
			return mv;
		}
		
		
	/* 
	 * 发包方
	 * 修改密码  -发包方
	 */
	@RequestMapping(value="/customer_lj_ChangePassword")
	public ModelAndView toCustomer_ChangePassword(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"customer_lj_ChangePassword");
		mv.setViewName("jsp/center/customer_changePassword.jsp");
		return mv;
	}
	/* 
	 * 发包方
	 * 修改密码do  -发包方
	 */
	 @ResponseBody
	 @RequestMapping(value="/customer_lj_ChangePasswordDo")
	 public  UserRes toChangePasswordDo(JfUser  passPut,HttpSession session) { 
	    	String code="Y";
	    	String msg="";
	    	UserRes res = new UserRes(code,msg);  
	    	try {
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
	    		JfUser user=new JfUser();
	    		user.setJfuid(usermap.get("jfuid"));
	    		user.setJfutype(usermap.get("jfutype"));
	    		user.setPid(usermap.get("pid"));
	    		user.setJfuname(usermap.get("jfuname"));
	    		 /*
	    		 * session的密码已经加密
	    		 * 密码已经全部加密
	    		 */
	    		user.setJfupassword(usermap.get("jfupassword"));
	    		user.setOldPassword(new String(DesUtils.encrypt(passPut.getOldPassword())));
	    		user.setNewPassword(new String(DesUtils.encrypt(passPut.getNewPassword())));
	    		user.setNewCPassword(new String(DesUtils.encrypt(passPut.getNewCPassword())));
	    		res=userService.updatePassword(user);
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	     /* 
		 * 接发包方 修改密码
		 */
		 @ResponseBody
		 @RequestMapping(value="/user/password")
		 public  JSONObject modifyPassword(JfUser  p) { 
			 	JSONObject obj=new JSONObject();
			 	obj.put("code","Y");
			 	obj.put("msg","修改成功");
		    	try {
		    		if(StringUtil.isNull(p.getJfuid())){
						obj.put("code","N");
					 	obj.put("msg","请输入jfuid");
						return obj;
					}
		       		if(StringUtil.isNull(p.getOldPassword())){
						obj.put("code","N");
					 	obj.put("msg","请输入当前密码");
						return obj;
					}
		       		if(StringUtil.isNull(p.getNewPassword())){
						obj.put("code","N");
					 	obj.put("msg","请输入新密码");
						return obj;
					}	
		       		if(StringUtil.isNull(p.getNewCPassword())){
						obj.put("code","N");
					 	obj.put("msg","请输入确认新密码");
						return obj;
					}	
		       		
		    		 /*
		    		 * 密码已经全部加密
		    		 */
		    		p.setJfupassword(new String(DesUtils.encrypt(p.getOldPassword())));//用于查询
		    		p.setOldPassword(new String(DesUtils.encrypt(p.getOldPassword())));
		    		p.setNewPassword(new String(DesUtils.encrypt(p.getNewPassword())));
		    		p.setNewCPassword(new String(DesUtils.encrypt(p.getNewCPassword())));
		    		UserRes res=userService.updatePassword(p);
		    		obj.put("code",res.getCode());
				 	obj.put("msg",res.getMsg());
		    		
				} catch (Exception e) {
					obj.put("code","N");
				 	obj.put("msg","修改失败");
				}
				return obj;
		    }  
	/* 
	 * 发包方
	 * 头像设置  -发包方 /接包方
	 */
	@RequestMapping(value="/customer_lj_PhotoSet")
	public ModelAndView toCustomer_PhotoSet(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"customer_lj_PhotoSet");
		mv.addObject("pagename","customer_lj_PhotoSet");
		mv.setViewName("jsp/center/customer_photoSet.jsp");
		return mv;
	}
	
	 /* 
	 * 发包方
	 * 基本信息do  -发包方
	 */
	 @ResponseBody
	 @RequestMapping(value="/customer_lj_PhotoSetDo")
	 public  UserRes toCustomer_PhotoSetDo(JfUser  passPut,HttpSession session) { 
	    	String code="Y";
	    	String msg="设置成功";
	    	UserRes res = new UserRes(code,msg);  
	    	try {
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				String jfutype=usermap.get("jfutype");
				passPut.setJfutype(jfutype);
				passPut.setJfuid(jfuid);
				String jfuname=usermap.get("jfuname");
				passPut.setJfuname(jfuname);
				userService.editHJfUserHeadUrl(passPut);
				
				
				
				
				String showName="";
				Object o=hjfUserDetailService.getFUserById(jfuid,jfutype);
				if("1".equals(jfutype)){
					HFUserDetail user=(HFUserDetail)o;
					if(StringUtil.isNull(user.getRealname())){
						showName=user.getJfuname();
					}else{
						showName=user.getRealname();	
					}
					res.setShowName(showName);
					res.setHeadurls(user.getHeadurls());
				}else{
					HJUserDetail user=(HJUserDetail)o;	
					if(StringUtil.isNull(user.getRealname())){
						showName=user.getJfuname();
					}else{
						showName=user.getRealname();	
					}
					res.setShowName(showName);
					res.setHeadurls(user.getHeadurls());
				}
				
				
				
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  
	 
	 
	 
	 
	 /* 
	 * 接发包方用户头像修改  /user/j/information
	 */
	 @SuppressWarnings("rawtypes")
	 @ResponseBody
	 @RequestMapping(value="/user/headurl",method=RequestMethod.POST)
	 public  CbaseRes avatarSettings(JfUser  passPut) { 
	    	String code="Y";
	    	String msg="设置成功";
	    	CbaseRes res = new CbaseRes(code,msg);  
	    	try {
	       		if(StringUtil.isNull(passPut.getJfuid())){
					res.setMsg("请输入jfuid");
					res.setCode("N");
					return res;
				}
	       		if(StringUtil.isNull(passPut.getHeadurl())){
					res.setMsg("请输入headurl头像url");
					res.setCode("N");
					return res;
				}
	       		JfUser getuser=userService.getUserByFuid(passPut.getJfuid(),null);
	    		if(null==getuser){
	    			res.setMsg("没有找到对应的用户信息");
					res.setCode("N");
					return res;
	    		}
	    		getuser.setHeadurl(passPut.getHeadurl());
				userService.editHJfUserHeadUrl(getuser);
			} catch (Exception e) {
				res.setCode("N");
				res.setMsg("修改失败");
			}
			return res;
	 } 
		 
		 
		 
		 
	
	 /* 
	 * 发包方
	 * 发布新需求 第一步
	 */
	 @RequestMapping(value="/customer_lj_DemandManagement1")
	 public  ModelAndView toCustomer_DemandManagement1(HttpServletRequest  request,HttpSession session) { 
			ModelAndView mv =this.initUser(session,"customer_lj_DemandManagement1");
			mv.addObject("pagename","customer_lj_DemandManagement1");
			mv.addObject("zt","customer_lj_DemandManagement1");
			mv.setViewName("jsp/center/customer_demandManagement1-step1.jsp");
			return mv;
	 }
	 
	 
	 
	 /* 
	 * 发包方
	 * 发布一个需求操作方法/修改
	 */
	 @RequestMapping(value="/customer_lj_DemandDo")
	 public  ModelAndView toCustomer_DemandDo(HttpServletRequest  request,HttpSession session) { 
			    ModelAndView mv =this.initUser(session,"customer_lj_DemandManagement1");
				String category1= request.getParameter("category1");
				String category2= request.getParameter("category2v");
				String demandtype= request.getParameter("demandtype");

				String ordername= request.getParameter("ordername");
				String releasenum= request.getParameter("releasenum");
				String orderprice= request.getParameter("orderprice");
				orderprice=orderprice.replace("￥","");
				String orderpricetol= request.getParameter("orderpricetol");
				orderpricetol=orderpricetol.replace("￥","");
				String targethumen= request.getParameter("targethumen");
				
				//add by 2016-07-26 [1.3.2] begin
				String productname= request.getParameter("productname");
				String demand= request.getParameter("demand");
				String begintime=request.getParameter("begintime");
				
				//add by 2016-07-26  end
				String category3=request.getParameter("category3");
				String demanddescription=request.getParameter("demanddescription");
				 
				String beginage= request.getParameter("beginage");
				String endage= request.getParameter("endage");
				String fdstate= request.getParameter("fdstate");
				String targecity= request.getParameter("targecity");
				String endtime= request.getParameter("endtime");
		 	    
		 	    String standis= request.getParameter("standis");
		 	    String otheris= request.getParameter("otheris");
		 	    
				String standardoperation= request.getParameter("standardoperation");
				String otherreport= request.getParameter("otherreport");
				String pleader= request.getParameter("pleader");
				String pphone= request.getParameter("pphone");				
				String paytime= request.getParameter("paytime");
				String othercol= request.getParameter("othercol");
				String needv=request.getParameter("needv");
		 	    String packageid=request.getParameter("packageid");
		 	    
				 
		 	    //追加的销售线索url
		 	    String xsxsurl=request.getParameter("xsxsurl");
		 	   
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				
				String demandid=request.getParameter("demandid");
				HFDemand demandPut=new HFDemand();
				//新增
				if(StringUtil.isNull(demandid)){
					demandPut.setPackageid(packageid);
					demandPut.setCategory1(category1);
					demandPut.setCategory2(category2);
					demandPut.setDemandtype(StringUtil.toInteger(demandtype));
					demandPut.setDemand(demand);
					demandPut.setOrdername(ordername);
					demandPut.setReleasenum(StringUtil.toInteger(releasenum));
					demandPut.setOrderprice(StringUtil.toBigDecimal(orderprice));
					demandPut.setOrderpricetol(StringUtil.toBigDecimal(orderpricetol));
					demandPut.setTargethumen(targethumen);
					demandPut.setNeedv(StringUtil.toInteger(needv));
					demandPut.setOthercol(othercol);
					demandPut.setBeginage(StringUtil.toInteger(beginage));
					demandPut.setEndage(StringUtil.toInteger(endage));
					demandPut.setDistributionstate(0);//初始化后台数据状态
					demandPut.setFishnum(0);
					demandPut.setApplicationnum(0);
					demandPut.setFdstate(StringUtil.toInteger(fdstate));
					demandPut.setTargecity(targecity);
					demandPut.setEndtime(endtime);
					
					//add by 2016-07-26 [1.3.2] begin
					demandPut.setProductname(productname);
					demandPut.setBegintime(begintime);
					//add by 2016-07-26 end
					
					demandPut.setCategory3(category3);//业务类型
					demandPut.setDemanddescription(demanddescription);//需求介绍
					
					demandPut.setStandis(StringUtil.toInteger(standis));
					demandPut.setOtheris(StringUtil.toInteger(otheris));
					
					demandPut.setStandardoperation(standardoperation);
					demandPut.setOtherreport(otherreport);
					demandPut.setPleader(pleader);
					demandPut.setPphone(pphone);
					
					demandPut.setPaytime(paytime);
					demandPut.setJfuid(jfuid);
		    		demandPut.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
		    		demandPut.setDemandid(DateUtil.getIdDay());
//		    		demandPut.setDemandid(DateUtil.getUuid());
		    		
		    		//追加的销售线索url
		    		demandPut.setXsxsurl(xsxsurl);
		    		
		    		demandService.addDemand(demandPut);
				}else{//修改
					demandPut.setDemandid(demandid);
					HFDemand updem=demandService.getDemandById(demandPut);
					if(3==updem.getFdstate()){//驳回再次提交
						updem.setDistributionstate(5);
			   		}
					updem.setPackageid(packageid);
					updem.setCategory1(category1);
					updem.setCategory2(category2);
//					updem.setDemandtype(StringUtil.toInteger(demandtype));//需求类型   1-套餐    2-个性化需求
					updem.setDemand(demand);
					updem.setOrdername(ordername);
					updem.setReleasenum(StringUtil.toInteger(releasenum));
					updem.setOrderprice(StringUtil.toBigDecimal(orderprice));
					updem.setOrderpricetol(StringUtil.toBigDecimal(orderpricetol));
					updem.setTargethumen(targethumen);
					updem.setNeedv(StringUtil.toInteger(needv));
					updem.setOthercol(othercol);
					updem.setBeginage(StringUtil.toInteger(beginage));
					updem.setEndage(StringUtil.toInteger(endage));
					updem.setFdstate(StringUtil.toInteger(fdstate));
					
					
					//add by 2016-07-26 [1.3.2] begin
					updem.setProductname(productname);
					updem.setBegintime(begintime);
					//add by 2016-07-26 end
					
					updem.setCategory3(category3);//业务类型
					updem.setDemanddescription(demanddescription);//需求介绍
					
					updem.setStandis(StringUtil.toInteger(standis));
					updem.setOtheris(StringUtil.toInteger(otheris));
					updem.setStandardoperation(standardoperation);
					updem.setOtherreport(otherreport);
					
					updem.setTargecity(targecity);
					updem.setEndtime(endtime);
					updem.setPaytime(paytime);
					updem.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
					//追加的销售线索url
					updem.setXsxsurl(xsxsurl);
					demandService.updateDemand(updem);
				}
	    		mv.addObject("fdstate", fdstate);
//			    mv.setViewName("redirect:/jsp/center/customer_demandManagement1-step3.jsp");
			    mv.setViewName("redirect:/supplier_lj_demandManagement1step3Alert");
			    return mv;
	 }
	 
	 
	 @RequestMapping(value="/supplier_lj_demandManagement1step3Alert")
	 public  ModelAndView supplier_lj_demandManagement1step3Alert(HttpServletRequest  request,HttpSession session) { 
			    ModelAndView mv =this.initUser(session,"supplier_lj_demandManagement1step3Alert");
    	 		String fdstate= request.getParameter("fdstate");
    	 		mv.addObject("fdstate", fdstate);
			    String forObject="customer_demandManagement1-step3.jsp";
			    mv.setViewName("jsp/center/"+forObject);
				return mv;
	 } 
	 /* 
		 * 发包方
		 * 发布一个需求操作方法/修改
		 */
     @RequestMapping(value="/customer_lj_customer_demandManagement1step3")
	 public  ModelAndView toCustomer_customer_demandManagement1step3(HttpServletRequest  request,HttpSession session) {  
    	 		ModelAndView mv =this.initUser(session,"customer_lj_DemandManagement1");
			    mv.setViewName("jsp/center/customer_demandManagement1-step3.jsp");
			    return mv;
	 }
	 /* 
	 * 发包方
	 * 发布新需求 第二步
	 */
	 /**
	 * @param request
	 * @param session
	 * @return
	 */
	@RequestMapping(value="/customer_lj_DemandManagement2")
	 public  ModelAndView toCustomer_DemandManagement2(HttpServletRequest  request, HttpSession session) { 
		 	ModelAndView mv =this.initUser(session,"customer_lj_DemandManagement2");
		 	String objurl="";
		 	String category1="";
			String demandtype="";
			
		 	String pid=StringUtil.ifNull(request.getParameter("pid"));//有值表示首页  套餐马上发布过来
		 	if(!"".equals(pid)){
		 		 category1=StringUtil.ifNull(request.getParameter("category1"));
		 		 demandtype="1";
		 		 HFDemand edits=new HFDemand();
		 		 edits.setCategory1(category1);
		 		 edits.setPackageid(pid);
		 		 edits.setDemandtype(StringUtil.toInteger(demandtype));
		 		 mv.addObject("editsDemand",edits);
		 	}else{
			 	//进入编辑
				String demandid= request.getParameter("demandid");
				if(!StringUtil.isNull(demandid)){
					HFDemand up=new HFDemand();
					up.setDemandid(demandid);
					HFDemand edits=demandService.getDemandById(up);
					if(edits!=null){
						category1=edits.getCategory1();
						demandtype=edits.getDemandtype()+"";
						String paytime=edits.getPaytime();
						if(!StringUtil.isNull(paytime)){
							if(-1!=paytime.indexOf("天内")){
								paytime=paytime.replace("天内","");
								edits.setPaytime(paytime);
							}
						}
					}
					mv.addObject("editsDemand",edits);
				}else{
					//进入新增第二部
					 category1= request.getParameter("category1");
					 demandtype= request.getParameter("demandtype");
					 HFDemand edits=new HFDemand();
			 		 edits.setCategory1(category1);
			 		 edits.setPackageid("");
			 		 edits.setDemandtype(StringUtil.toInteger(demandtype));
			 		 if(edits!=null){ 
				 		String paytime=edits.getPaytime();
				 		if(!StringUtil.isNull(paytime)){
				 			if(-1!=paytime.indexOf("天内")){
								paytime=paytime.replace("天内","");
								edits.setPaytime(paytime);
							}
				 		}
			 		 }
					 mv.addObject("editsDemand",edits);
				}
		 	}
		 	
		 	if("1".equals(demandtype)){//套餐   查询套餐列表
			    	GXPackageManage user=new GXPackageManage();
			    	user.setIsdisable(1);//状态值 1-启用 2-停用
			    	user.setCategory1(category1);
			    	PageResults packageList= packageManageService.getPackageManageBy(user);
			    	mv.addObject("packageList",packageList.getResults());
			    	objurl="customer_demandManagement1-step2-newPackage.jsp";
			}
			if("2".equals(demandtype)){//自定义需求
			    	objurl="customer_demandManagement1-step2-new.jsp";
			}
			
			
			String cluename=templateService.getClueTemplateUrl(category1,false);
			String speakname=templateService.getSpeakTemplateUrl(category1,false);
			mv.addObject("cluename",cluename);
			mv.addObject("speakname",speakname);
			
		 	mv.addObject("category1",category1);
			mv.addObject("demandtype",demandtype);
			mv.addObject("zt","customer_lj_DemandManagement2");
			mv.setViewName("jsp/center/"+objurl);
			return mv;
			
	 }  
	
	
		/* 
		 * 发包方-眸事网需求发布与处理规则
		 */
		 /**
		 * @param request
		 * @param session
		 * @return
		 */
		@RequestMapping(value="/customer_mso")
		 public  ModelAndView toCustomer_mso(HttpServletRequest  request, HttpSession session) { 
			 	ModelAndView mv =this.initUser(session,"customer_mso");
				mv.addObject("zt","customer_mso");
				mv.setViewName("jsp/center/customer_mso.jsp");
				return mv;
				
		 }  
	 
        //异步取得  套餐列表
		@ResponseBody
	    @RequestMapping(value="/customer_lj_getPackageManage")  
	    public  PackageManageRes toCustomer_getPackageManage(JfUser addput,HttpSession session) { 
	    	String code="Y";
	    	String msg="";
	    	PackageManageRes res = new PackageManageRes(code,msg);  
	    	try {
	        	String jfunameLowerCase=addput.getJfuname().toLowerCase();
	        	addput.setJfunamelowercase(jfunameLowerCase);
	        	GXPackageManage user=new GXPackageManage();
	        	user.setIsdisable(1);//状态值 1-启用 2-停用
	        	PageResults packageListres= packageManageService.getPackageManageBy(user);
	        	res.setPackgeList(packageListres.getResults());
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  
	 
	 
	 @RequestMapping(value="/customer_lj_DemandManagement3")
	 public  ModelAndView toCustomer_DemandManagement3(JfUser  passPut,HttpSession session) { 
			ModelAndView mv =this.initUser(session,"customer_lj_DemandManagement3");
			mv.addObject("pagename","customer_lj_DemandManagement3");
			mv.setViewName("jsp/center/customer_demandManagement1-step3.html");
			return mv;
	    }  
	 
	 
	
		 /* 
		 * 发包方
		 * 会员中心-首页
		 * * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       
		 * [待上架需求(待提交0/审核中1/驳回3)  上架中(通过(审核)2)  待竞拍 2     待完成 4/5   已经完成 6  关闭  7   结算中订单5]
		 * [执行中订单4/5   已完成订单6      被关闭订单7]
		 */
		 @RequestMapping(value="/customer_lj_Home")
		 public  ModelAndView toCustomer_Home(JfUser  passPut,HttpSession session) { 
			ModelAndView mv =this.initUser(session,"customer_lj_Home");
			HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
			String jfuid=usermap.get("jfuid");
			HFDemand u=new HFDemand();
			u.setJfuid(jfuid);
			//查询首页的       待办提醒
			HFDemandRes res=demandService.getDemandHome(u);
			mv.addObject("res",res);
			mv.addObject("zt","customer_lj_Home");
			mv.setViewName("jsp/center/customer_home.jsp");
			return mv;
	    }  
		 
		 
		 
		 
		 
		 
		 
	
		
		
		
		 /* 
		 * 查询需求管理
		 * 待上架需求/上架中需求 查询
		 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       
		 * [待上架需求(待提交0/审核中1/驳回3)  上架中(通过(审核)2)  待竞拍 2     待完成 4/5   已经完成 6  关闭  7   结算中订单5]
		 * [执行中订单4/5   已完成订单6      被关闭订单7]
		 */
		 @RequestMapping(value="/customer_lj_DemandList")
		 public  ModelAndView toCustomer_DemandList(HttpServletRequest  request,HttpSession session) { 
			    HFDemand u=new HFDemand();
				String zt= request.getParameter("zt");
				String currentPage=request.getParameter("currentPage");
				
				//取得查询条件
				String sorderName= request.getParameter("sorderName");
				String sbeginDateValue=request.getParameter("sbeginDateValue");
				String sendDateValue=request.getParameter("sendDateValue");
				
				
					if(StringUtil.isNull(sorderName)){
						if(!StringUtil.isNull(currentPage)){//分页过来的
							sorderName=(String) session.getAttribute("sorderName");
						}else{
							sorderName="";
						}
						session.setAttribute("sorderName",sorderName);
					}else{
						session.setAttribute("sorderName",sorderName);
					}
					if(StringUtil.isNull(sbeginDateValue)){
						if(!StringUtil.isNull(currentPage)){//分页过来的
							sbeginDateValue=(String) session.getAttribute("sbeginDateValue");
						}else{
							sbeginDateValue="";
						}
						session.setAttribute("sbeginDateValue",sbeginDateValue);
					}else{
						session.setAttribute("sbeginDateValue",sbeginDateValue);
					}
					if(StringUtil.isNull(sendDateValue)){
						if(!StringUtil.isNull(currentPage)){//分页过来的
							sendDateValue=(String) session.getAttribute("sendDateValue");
						}else{
							sendDateValue="";
						}
						session.setAttribute("sendDateValue",sendDateValue);
					}else{
						session.setAttribute("sendDateValue",sendDateValue);
					}
				
				if(StringUtil.isNull(currentPage)){
					currentPage="1";
				}
				String sorderNo= request.getParameter("sorderNo");

				int currentPageint=Integer.parseInt(currentPage);
				u.setCurrentPage(currentPageint);
				
				u.setSorderName(sorderName);
				u.setSorderNo(sorderNo);
				u.setSbeginDateValue(sbeginDateValue);
				u.setSendDateValue(sendDateValue);
				
                //发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 3-驳回   8-已分配                  2-通过(审核) 4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭 
				String forObject="";
				Integer[] strzt=null;
				//待上架需求
				if("dsjdemand".equals(zt)){
					strzt = new Integer[]{0,1,3,7,8};
					forObject="customer_demandManagement2.jsp";
				}
				//待上架需求 -草稿箱
				if("cgxdemand".equals(zt)){
					strzt = new Integer[]{0};
					forObject="customer_demandManagement2.jsp";
				}
				//待上架需求 -审核中
				if("shzdemand".equals(zt)){// 提交和分配中
					strzt = new Integer[]{1,8};
					forObject="customer_demandManagement2.jsp";
				}			
				//上架中需求
				if("sjzdemand".equals(zt)){
					strzt = new Integer[]{2};
					forObject="customer_demandManagement3.jsp";
				}
				//执行中 
				if("zxzorder".equals(zt)){
					strzt=new Integer[]{4};
					forObject="customer_transactionManagement1.jsp";
				}
				//结算中订单
				if("jszorder".equals(zt)){
					strzt=new Integer[]{5};
					forObject="customer_settlement.jsp";
				}
				//已完成
				if("ywcorder".equals(zt)){
					strzt=new Integer[]{6};
					forObject="customer_transactionManagement2.jsp";
				}
				//被关闭
				if("bgborder".equals(zt)){
					strzt=new Integer[]{7};
					forObject="customer_transactionManagement3.jsp";
				}
				//我的小账本  默认全部   结算中/完成
				if("all".equals(zt)){
					strzt=new Integer[]{5,6};
					forObject="customer_books.jsp";
				}
				//我的小账本-结算中订单
				if("alljszorder".equals(zt)){
					strzt=new Integer[]{5};
					forObject="customer_books.jsp";
				}
				//我的小账本-已完成
				if("allywcorder".equals(zt)){
					strzt=new Integer[]{6};
					forObject="customer_books.jsp";
				}
				//我的悬赏
				if("order".equals(zt)){
					strzt=null;
					forObject="customer_reward3.jsp";
				}
				//待竞拍需求  上架中
				if("djpdemand".equals(zt)){
					strzt = new Integer[]{2};
					forObject="customer_demandManagement3.jsp";
				}
				//待完成需求(3) 執行中
				if("dwcdemand".equals(zt)){
					strzt = new Integer[]{4};
					forObject="customer_transactionManagement1.jsp";
				}
				//待结算需求(2)  結算中
				if("djsdemand".equals(zt)){
					strzt = new Integer[]{5};
					forObject="customer_settlement.jsp";
				}
				
				//发包方成单报表
				if("cdbb".equals(zt)||"cdbbdetail".equals(zt)||"cdbbdetail2".equals(zt)){
					forObject="customer_table.jsp";
				}
				String forObjectFunction=forObject+"customer_lj_DemandList";
			    ModelAndView mv =this.initUser(session,forObjectFunction);
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				String jfutype=usermap.get("jfutype");
//				if("cdbbdetail".equals(zt)&&"2".equals(jfutype)){
//					zt="cdbbdetail2";
//				}
				if("cdbb".equals(zt)||"cdbbdetail".equals(zt)||"cdbbdetail2".equals(zt)){
					String demandid="";
					String demandnameShow="";
					String orderid="";
					if("cdbbdetail".equals(zt)){
						demandid= request.getParameter("demandid");
						if(StringUtil.isNull(demandid)){
							demandid=(String) session.getAttribute("demandid");
						}else{
							session.setAttribute("demandid", demandid);
						}
						demandnameShow= request.getParameter("demandnameShow");
						if(StringUtil.isNull(demandnameShow)){
							demandnameShow=(String) session.getAttribute("demandnameShow");
						}else{
							session.setAttribute("demandnameShow", demandnameShow);
						}
					}else if("cdbbdetail2".equals(zt)){
						demandid= request.getParameter("demandid");
						if(StringUtil.isNull(demandid)){
							demandid=(String) session.getAttribute("demandid");
						}else{
							session.setAttribute("demandid", demandid);
						}
						demandnameShow= request.getParameter("demandnameShow");
						if(StringUtil.isNull(demandnameShow)){
							demandnameShow=(String) session.getAttribute("demandnameShow");
						}else{
							session.setAttribute("demandnameShow", demandnameShow);
						}
						orderid= request.getParameter("orderid");
						if(StringUtil.isNull(orderid)){
							orderid=(String) session.getAttribute("orderid");
						}else{
							session.setAttribute("orderid", orderid);
						}
					}
					else{
					    demandid= request.getParameter("demandid");
						demandnameShow= request.getParameter("demandnameShow");
					}

					GXJOrderUploadReport report=new GXJOrderUploadReport();
					report.setCurrentPage(currentPageint);
					report.setOrderid(orderid);
					report.setDemandid(demandid);
					report.setSorderName(sorderName);
			    	report.setSbeginDateValue(sbeginDateValue);
			    	report.setSendDateValue(sendDateValue);
			    	PageResults page=null;
			    	
			    	if("cdbbdetail2".equals(zt)){
			    		if("2".equals(jfutype)){//接包方   成单报表1
					    	page=orderUploadReportService.getUploadReportPage(report);
					    	List list=page.getResults();
					    	if(list!=null||list.size()>=0){
					    		for (int i = 0; i < list.size(); i++) {
					    			GXJOrderUploadReport up=(GXJOrderUploadReport) list.get(i);
					    			up.setReport(StringUtil.objCovStr(up.getReport()));
					    			up.setRecording(StringUtil.objCovStr(up.getRecording()));
					    			up.setDba_url(StringUtil.objCovStr(up.getDba_url()));
					    			up.setQa_url(StringUtil.objCovStr(up.getQa_url()));
								}
					    	}
			    		}else{
			    			//发包方报表
                             Integer csstatus=1;
			    			 GXDbaEverydayStatistics statics =new GXDbaEverydayStatistics();
			    			 statics.setCurrentPage(currentPageint);
			    			 statics.setDemandid(demandid);
			    			 statics.setSorderName(sorderName);
			    			 statics.setSbeginDateValue(sbeginDateValue);
			    			 statics.setSendDateValue(sendDateValue);
			    			 statics.setCsstatus(csstatus);
			    			 page=dbaEverydayStatisticsService.getEverydayStatistics(statics);
			    			 
			    			 //发布量（customer_lj_DemandList?zt=cdbbdetail2）
			    			 String fbl= request.getParameter("fbl");
			    			 mv.addObject("fbl",fbl);
			    			 //录音文件
			    			 String jfuids=request.getParameter("jfuid");
			    			 GXqaeverydaystatistics gxqaevery = new GXqaeverydaystatistics();
			    			 gxqaevery.setJfuid(jfuids);
			    			 gxqaevery.setDemandid(demandid);
							 List lis=gxqaeverydaystatisticsService.getGXqaeverydaystatistics(gxqaevery);
			    			 mv.addObject("lis", lis);
			    			 
			    			 //递交量统计(总量)	
			    			 statics.setJfuid(jfuids);
			    			 statics.setCsstatus(csstatus);
			    			 Long sum=dbaEverydayStatisticsService.getreleasenum(statics);
			    			 mv.addObject("sum",sum);
			    		}
			    	}else{
			    		report.setJfuid_j(jfuid);
			    		if("2".equals(jfutype)){//接包方   成单报表1
			    			report.setAction(zt);
			    			page=orderUploadReportService.getUploadOrderReports(report);
			    		}else{
			    			 GXDbaEverydayStatistics statics =new GXDbaEverydayStatistics();
			    			 statics.setCurrentPage(currentPageint);
			    			 statics.setDemandid(demandid);
			    			 statics.setSorderName(sorderName);
			    			 statics.setSbeginDateValue(sbeginDateValue);
			    			 statics.setSendDateValue(sendDateValue);	
//			    			 page=dbaEverydayStatisticsService.getEverydayStatistics(statics);
			    			//发包方的成单报表
			    			 page=orderUploadReportService.getUploadReports(report);
			    		}
			    	}			    	
					
			    	mv.addObject("page",page);
			    	mv.addObject("demandnameShow",demandnameShow);
					mv.addObject("sbeginDateValue",sbeginDateValue);
					mv.addObject("sendDateValue",sendDateValue);
					mv.addObject("sorderName",sorderName);
					mv.addObject("pagename","customer_lj_DemandDetail");
					mv.addObject("zt",zt);
				}else{
					u.setZt(zt);
					u.setJfuid(jfuid);
					u.setStrzt(strzt);
					HFDemandRes res=demandService.getDemands(u);
					mv.addObject("pa",u);
					mv.addObject("res",res);
					mv.addObject("zt",zt);
				}
				mv.addObject("pre1",CommonUtil.getImageUrlOldpre());
		        mv.addObject("pre",CommonUtil.getImageUrlpre());
				mv.setViewName("jsp/center/"+forObject);
				return mv;
	    }  
		 
		 
		 
		 @RequestMapping(value="/customer_lj_DemandListEx")
		 public  void toCustomer_DemandListEx(HttpServletRequest  request,HttpSession session,HttpServletResponse response) throws Exception { 
			    this.initUser(session,"customer_lj_DemandListEx");
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				String jfutype=usermap.get("jfutype");
				
				String zt= request.getParameter("zt");
				//取得查询条件
				String sorderName= request.getParameter("sorderName");
				String sbeginDateValue=request.getParameter("sbeginDateValue");
				String sendDateValue=request.getParameter("sendDateValue");
				String reportDetailsTemplatexls="";
				String demandnameShow="";
				String orderid="";
             //发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 3-驳回   8-已分配                  2-通过(审核) 4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭 
				//发包方成单报表
				String demandid="";
				if("cdbb".equals(zt)){
					if("2".equals(jfutype)){//接包方   成单报表
						reportDetailsTemplatexls="demandreport2.xls";
		    		}else{
		    			reportDetailsTemplatexls="demandreport.xls";
		    		}
					
				    demandid= request.getParameter("demandid");
					demandnameShow= request.getParameter("demandnameShow");
				}
				if("cdbbdetail".equals(zt)){
					demandnameShow= request.getParameter("demandnameShow");
					reportDetailsTemplatexls="demandreportdetail.xls";
					demandid= request.getParameter("demandid");
					if(StringUtil.isNull(demandid)){
						demandid=(String) session.getAttribute("demandid");
					}else{
						session.setAttribute("demandid", demandid);
					}
					demandnameShow= request.getParameter("demandnameShow");
					if(StringUtil.isNull(demandnameShow)){
						demandnameShow=(String) session.getAttribute("demandnameShow");
					}else{
						session.setAttribute("demandnameShow", demandnameShow);
					}
				}
				
				if("cdbbdetail2".equals(zt)){
					demandnameShow= request.getParameter("demandnameShow");
					if("2".equals(jfutype)){//接包方   成单报表
						reportDetailsTemplatexls="demandreportdetail2.xls";
					}else{
						reportDetailsTemplatexls="demandreportdetail1.xls";
					}
					demandid= request.getParameter("demandid");
					if(StringUtil.isNull(demandid)){
						demandid=(String) session.getAttribute("demandid");
					}else{
						session.setAttribute("demandid", demandid);
					}
					demandnameShow= request.getParameter("demandnameShow");
					if(StringUtil.isNull(demandnameShow)){
						demandnameShow=(String) session.getAttribute("demandnameShow");
					}else{
						session.setAttribute("demandnameShow", demandnameShow);
					}
					orderid= request.getParameter("orderid");
					if(StringUtil.isNull(orderid)){
						orderid=(String) session.getAttribute("orderid");
					}else{
						session.setAttribute("orderid", orderid);
					}
				}
				

				GXJOrderUploadReport report=new GXJOrderUploadReport();
				report.setSorderName(sorderName);
			    report.setSbeginDateValue(sbeginDateValue);
			    report.setSendDateValue(sendDateValue);
			    report.setDemandid(demandid);
			    report.setOrderid(orderid);
			    report.setAction("export");

			    response.setContentType("APPLICATION/OCTET-STREAM");
				response.setHeader("Content-Disposition", "attachment; filename="+URLEncoder.encode(DateUtil.getDays()+".xls", "UTF-8"));  
				try{
					String reportDetailsTemplate= request.getSession().getServletContext().getRealPath("")+"/reportTemplate/";
					Workbook wb = Workbook.getWorkbook(new File(reportDetailsTemplate+reportDetailsTemplatexls)); // 获得原始文档    
					WorkbookSettings settings = new WorkbookSettings ();  
					settings.setWriteAccess(null); 
					WritableWorkbook workbook = Workbook.createWorkbook(response.getOutputStream(),wb,settings); // 创建一个可读写的副本
					WritableSheet sheet = workbook.getSheet(0);  
					jxl.write.WritableFont wfont = new jxl.write.WritableFont(WritableFont.createFont("微软雅黑"), 10,WritableFont.BOLD);  
					WritableCellFormat mergeFormat = new WritableCellFormat(wfont);
					mergeFormat.setAlignment(Alignment.CENTRE);
					mergeFormat.setVerticalAlignment(VerticalAlignment.CENTRE);
					PageResults pages=null;
						if("cdbbdetail2".equals(zt)){
							if("2".equals(jfutype)){//接包方   成单报表
								pages=orderUploadReportService.getUploadReportPage(report);
						    	sheet.setName(demandnameShow);
								List dbaList=pages.getResults();
								for(int i=0;i<dbaList.size();i++){
									GXJOrderUploadReport r=(GXJOrderUploadReport) dbaList.get(i);
									
									r.setReport(StringUtil.objCovStr(r.getReport()));
					    			r.setRecording(StringUtil.objCovStr(r.getRecording()));
					    			r.setDba_url(StringUtil.objCovStr(r.getDba_url()));
					    			r.setQa_url(StringUtil.objCovStr(r.getQa_url()));
			    					
									Label label0 = new Label(1, i+2, r.getId(),mergeFormat);     //1
									Label label1 = new Label(2, i+2, r.getOrder_num()+"",mergeFormat);							  //2
									Label label2 = new Label(3, i+2, r.getQa_qualified()+r.getQa_notstandard()+"",mergeFormat);								  //3
									Label label3 = new Label(4, i+2, r.getQa_disqualification()+r.getQa_cancel()+"",mergeFormat);	//4
									Label label4 = new Label(5, i+2, r.getCreatetime(),mergeFormat);		
									String reporturl=r.getReport();//5
									String recording=r.getRecording();
									
									if(DateUtil.compareDateD(r.getCreatetime(), "2016-07-08")){
										reporturl=CommonUtil.getImageUrlpre()+reporturl;
										recording=CommonUtil.getImageUrlpre()+recording;
									}else{
										reporturl=CommonUtil.getImageUrlOldpre()+reporturl;
										recording=CommonUtil.getImageUrlOldpre()+recording;
									}
									
									Label label5 = new Label(6, i+2, reporturl,mergeFormat);									  //5
									Label label6 = new Label(7, i+2, recording,mergeFormat);									  //5
									
									//把单元格加到工作表中
									sheet.addCell(label0);
									sheet.addCell(label1);
									sheet.addCell(label2);
									sheet.addCell(label3);
									sheet.addCell(label4);
									sheet.addCell(label5);
									sheet.addCell(label6);
								}
							}else{
				    			//发包方的成单报表
				    			//发包方报表
				    			GXDbaEverydayStatistics statics =new GXDbaEverydayStatistics();
				    			statics.setCurrentPage(1);
				    			Integer csstatus=1;
				    			statics.setDemandid(demandid);
				    			statics.setCsstatus(csstatus);
				    			statics.setSorderName(sorderName);
				    			statics.setSbeginDateValue(sbeginDateValue);
				    			statics.setSendDateValue(sendDateValue);	
				    			statics.setAction("export");
				    			pages=dbaEverydayStatisticsService.getEverydayStatistics(statics);
//				    			pages=orderUploadReportService.getUploadReportPage(report);
				    			 
						    	sheet.setName(demandnameShow);
								List dbaList=pages.getResults();
								for(int i=0;i<dbaList.size();i++){
									GXDbaEverydayStatistics r=(GXDbaEverydayStatistics) dbaList.get(i);
																	                        
									Label label0 = new Label(1, i+2, i+1+"",mergeFormat);     //序号
									Label label1 = new Label(2, i+2, r.getReleasenum()+"",mergeFormat);							  //递交量
									Label label2 = new Label(3, i+2, r.getCensusday()+"",mergeFormat);								  //成单时间
									String censusfile_url=r.getCensusfile_url();
									censusfile_url=CommonUtil.getImageUrlpre()+censusfile_url;
									Label label3 = new Label(4, i+2, censusfile_url,mergeFormat);	//成单报告
									Label label4 = new Label(5, i+2, r.getUpdatetime(),mergeFormat);	//操作时间
									
									//把单元格加到工作表中
									sheet.addCell(label0);
									sheet.addCell(label1);
									sheet.addCell(label2);
									sheet.addCell(label3);
									sheet.addCell(label4);
								}
							}

						}else{
							report.setJfuid_j(jfuid);
							if("2".equals(jfutype)){//接包方   成单报表
								pages=orderUploadReportService.getUploadOrderReports(report);
				    		}else{
				    			pages=orderUploadReportService.getUploadReports(report);
				    		}
						}
						
						if("cdbb".equals(zt)){
							List dbaList=pages.getResults();
							for(int i=0;i<dbaList.size();i++){
								GXJOrderUploadReport r=(GXJOrderUploadReport) dbaList.get(i);
								Label label0 = new Label(1, i+2, r.getDemandid(),mergeFormat);     //1
								Label label1 = new Label(2, i+2, r.getOrdername(),mergeFormat);							  //2
								Label label2 = new Label(3, i+2, r.getFbl()+"",mergeFormat);								  //3
								Label label3 = new Label(4, i+2, r.getCgl()+"",mergeFormat);									  //4
								Label label4 = new Label(5, i+2, r.getSbl()+"",mergeFormat);//5
								String time="";
								if("2".equals(jfutype)){//接包方   成单报表
									time=r.getCreatetime();
								}else{
									time=r.getReleasetime();
								}
								Label label5 = new Label(6, i+2,time ,mergeFormat);//6
								//把单元格加到工作表中
								sheet.addCell(label0);
								sheet.addCell(label1);
								sheet.addCell(label2);
								sheet.addCell(label3);
								sheet.addCell(label4);
								sheet.addCell(label5);
							}
						}
						if("cdbbdetail".equals(zt)){
							sheet.setName(demandnameShow);
							List dbaList=pages.getResults();
							for(int i=0;i<dbaList.size();i++){
								GXJOrderUploadReport r=(GXJOrderUploadReport) dbaList.get(i);
								Label label0 = new Label(1, i+2, r.getOrderid(),mergeFormat);     //1
								Label label1 = new Label(2, i+2, r.getFbl()+"",mergeFormat);							  //2
								Label label2 = new Label(3, i+2, r.getCgl()+"",mergeFormat);								  //3
								Label label3 = new Label(4, i+2, r.getReleasetime(),mergeFormat);									  //4
								//把单元格加到工作表中
								sheet.addCell(label0);
								sheet.addCell(label1);
								sheet.addCell(label2);
								sheet.addCell(label3);
							}
						}
						
						workbook.write();  
				        workbook.close();  
				        wb.close();  
				} catch(Exception e){
					
				}
	    }  
		 
	 	 /* 
		 * 删除/编辑/新增   需求  doDetailDone
		 */
		 @RequestMapping(value="/customer_lj_doDetailDone")
		 public  ModelAndView toCustomer_lj_doDetailDone(HttpServletRequest  request,HttpSession session)  { 
				String par =request.getParameter("done");
				String demandid= request.getParameter("demandid");
				String orderid= request.getParameter("orderid");
				String zt= request.getParameter("zt");
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfutype=usermap.get("jfutype");

			    //如果是接包方  且操作是删除  删除订单表  delete
				if("delete".equals(par)&&"2".equals(jfutype)){
					HJOrderDemand orderdeman=new HJOrderDemand();
					orderdeman.setOrderid(orderid);
					HJOrderDemand deleteOrder=orderdemandService.getOrderDemandByById(orderdeman);
					orderdemandService.delOrderDemand(deleteOrder);
					return this.to_supplierOrder(request,session);
			    }else{
				    HFDemand u=new HFDemand();
				    u.setPar(par);
				    u.setZt(zt);
	                u.setDemandid(demandid);
				    demandService.doneDemand(u);
				    return this.toCustomer_DemandList(request, session);
			    }	
	    } 
		

		 
		 
		 
		 
		 
		 

//				JSONObject object=new JSONObject();
//				BNews i =null;
//				JSONObject newsobje=null;
//				try {
//					newsobje=JSONObject.fromObject(news);
//				    i =(BNews) JSONObject.toBean(JSONObject.fromObject(news), BNews.class); 
//				} catch (Exception e) {
//					object.put("code", "N");
//					object.put("msg", "传入的数据格式不是json格式");
//					return object;
//				}
//				
//				    BNews newpar=new BNews();
//				    newpar.setNewsid(i.getNewsid());
//				    newpar=bnewsService.getBnewsById(newpar);
//				    if(null!=newpar){
//					    JSONObject newparjson = JSONObject.fromObject(newpar);//将java对象转换为json对象
//					    //将newparjson对象的值全塞入newsobje
//					    newparjson.putAll(newsobje);
//					    BNews i2 =(BNews)JSONObject.toBean(newparjson, BNews.class); 
//					    i2.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
//						if(null!=i.getReading()){
//							i2.setReading(newpar.getReading()+1);
//						}
//					    bnewsService.updateBnews(i2);
//				    }else{
//				    	object.put("code", "N");
//						object.put("msg", "没有找到修改的数据");
//						return object;
//				    }
			
		 
		 
		 	 /* 
		 	 * 数据数据加工  执行中订单
			 * 上传客户名单   /hfp/{pcdid}  接口  /news/{newsid}
			 * [{"keyid":"1","filename":"logidng","url": "/upload/logidng.pdf","uploadtime": "2017-06-01","ifdownload": "1"}]
			 */
			 @ResponseBody
			 @RequestMapping(method = RequestMethod.PUT,value="/hfp/{pid}")
			 public  JSONObject toUploadCustomerList(@PathVariable String pid,@RequestBody String otherreport){
				 		JSONObject  obj=new JSONObject();
				 		obj.put("code", "Y");
				 		JSONArray newOtherreport= new JSONArray();
				 		//需求id空验证
						if(StringUtil.isNull(pid)){
							obj.put("code", "N");
							obj.put("msg", "pid不能为空");
							return obj;
						}
						int newsize=0;
						int oldsize=0;
//						try {
//							 newOtherreport = JSONArray.fromObject(otherreport);
//							//新的JSONArray 中数据的条数
//							 newsize=newOtherreport.size();
//						} catch (Exception e) {
//							obj.put("code", "N");
//							obj.put("msg", "传入的数据格式不是json数组格式");
//							return obj;
//						}
						
						try {
				 			Hfp user =new Hfp();
				 			user.setPid(pid);
				 			Hfp upHfp=hfpService.getHfpById(user);
				 			String oldOtherstr=upHfp.getOtherreport();
				 			
				 		
				 			
				 			JSONObject json  = JSONObject.fromObject(otherreport);
				 			 System.out.println(json.toString());
				 			
				 				
				 			JSONArray myJsonArray = new JSONArray() ;
				 			try {
				 			    if(oldOtherstr!=""|| null!=oldOtherstr)
				 				myJsonArray = JSONArray.fromObject(oldOtherstr);
				 			
				 				oldsize=myJsonArray.size();
				 				
				 				
				 				
				 			} catch (Exception e) {
				 				
				 				JSONObject jsonObject= new JSONObject();
				 				jsonObject.put("old", oldOtherstr);
				 				myJsonArray.add(jsonObject);
				 				
							} finally{
							    if(null!=json)
								myJsonArray.add(json);
							}
				 				
				 			
				 			
				 			
				 			
				 			
				 			
				 			upHfp.setOtherreport(myJsonArray.toString());
				 			hfpService.updateHfp(upHfp);
				 			String demandname=upHfp.getDemandname();
				 			//判断出来是新增  则邮件通知
				 			if(newsize>oldsize){
							   	try {
							   		
								   	String servceurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("sms.servceurl");
								   	servceurl=servceurl+"publicApi/email/upload/dfurl";
								   	/*
								   	 * 发送邮件
								   	 */
								    //发送 POST 请求
								    String jsonStr=httpUtil.sendPost(servceurl,
								    		"pid="+pid+"&demandname="+java.net.URLEncoder.encode(demandname,"utf-8"));
								    JSONObject jsonObject = JSONObject.fromObject(jsonStr);  
							        String codeemail = jsonObject.getString("code");  
//							        String msgemail = jsonObject.getString("msg");  
							        if("Y".equals(codeemail)){
							        }else{
//							        	obj.put("code", codeemail);
//							        	obj.put("msg", msgemail);
							        }
								} catch (Exception e) {
//									obj.put("code", "N");
//									obj.put("msg", "邮箱发送失败"+e.toString());
								}
				 			}

						} catch (Exception e) {
							obj.put("code", "N");
							obj.put("msg", "上传失败"+e.toString());
						}
		            	return obj;
		    } 

			 
	 	 /* 
		 * 上传成单报告 uploadReportDone  接口
		 */
		 @ResponseBody
		 @RequestMapping(method = RequestMethod.POST,value="/uploadSingleReport")
		 public  UploadReportRes toUploadSinglereport(UploadReportInput i) { 
			 		UploadReportRes res=new UploadReportRes("Y","");
			 		//订单id空验证
					if(StringUtil.isNull(i.getOrderid())){
						res.setCode(ERConst.ER_CODE_019);
				   		res.setMsg(ERConst.ER_CODE_019_VALUE); 
				   		// Y 上传成功   ER0019  订单id不能为空!  N 上传失败    ER0018 用户id不能为空!  ER0021成单报告不能为空!  ER0022 录音文件不能为空! ER0023 上传单量不能为空!
						return res;
					}
					/*
					 * 需求id空验证
					 
					if(StringUtil.isNull(i.getDemandid())){
						res.setCode(ERConst.ER_CODE_019);
				   		res.setMsg(ERConst.ER_CODE_019_VALUE); 
						return res;
					}
					 */
					
			 		//jfuid 验证
					if(StringUtil.isNull(i.getJfuid())){
						res.setCode(ERConst.ER_CODE_018);
				   		res.setMsg(ERConst.ER_CODE_018_VALUE); 
						return res;
					}
			 		//本次成单报告
					if(StringUtil.isNull(i.getReport())){
						res.setCode(ERConst.ER_CODE_021);
				   		res.setMsg(ERConst.ER_CODE_021_VALUE); 
						return res;
					}
			 		//本次录音文件
					if(StringUtil.isNull(i.getRecording())){
						res.setCode(ERConst.ER_CODE_022);
				   		res.setMsg(ERConst.ER_CODE_022_VALUE); 
						return res;
					}
			 		//上传单量
					if(StringUtil.isNull(StringUtil.objCovStr(i.getOrdernum()))){
						res.setCode(ERConst.ER_CODE_023);
				   		res.setMsg(ERConst.ER_CODE_023_VALUE); 
						return res;
					}
			 		try {
						GXJOrderUploadReport u=new GXJOrderUploadReport();
						u.setId(DateUtil.getIdDay());
		                u.setDemandid(i.getDemandid());
		                u.setOrderid(i.getOrderid());
		                u.setJfuid_j(i.getJfuid());
		                u.setReport(i.getReport());
		                u.setRecording(i.getRecording());
		                u.setOrder_num(i.getOrdernum());
		            	u.setCreatetime(DateUtil.getTime());
		            	u.setUploadtime(DateUtil.getTime());
		            	u.setStatus(0);//初始状态
		            	GXJOrderUploadReport reuser=orderUploadReportService.addOrderUploadReport(u);
		            	res.setUploadId(reuser.getId());
					} catch (Exception e) {
						res.setCode("N");
						res.setMsg("上传失败"+e.toString());
					}
	            	
	                //如果订单状态是 审核通过状态 修改为执行中
//					HJOrderDemand order=new HJOrderDemand();
//					order.setOrderid(orderid);
//					HJOrderDemand res=orderdemandService.getOrderDemandByOrderid(order);
//					if(2==res.getJdstate()){
//						res.setJdstate(4);
//						res.setUpdatetime(DateUtil.getTime());
//						orderdemandService.modifyOrderDemand(res);
//					}
					
					//如果需求状态是 审核通过 修改为执行中
//					HFDemand demand=new HFDemand();
//					demand.setDemandid(demandid);
//					HFDemand updemand=demandService.getDemandById(demand);
//					if(2==updemand.getFdstate()){
//						updemand.setFdstate(4);
//						updemand.setUpdatetime(DateUtil.getTime());
//						demandService.updateDemand(updemand);
//					}
	            	return res;
	    } 
		 
		 
		 
		 
	 	 /* 
		 * 上传成单报告 uploadReportDone
		 */
		 @RequestMapping(value="/supplier_lj_douploadReportDone")
		 public  ModelAndView toSupplier_lj_douploadReportDone(HttpServletRequest  request,HttpSession session ) { 
			        ModelAndView mv =this.initUser(session,"supplier_lj_douploadReportDone");
					String demandid= request.getParameter("demandid");
					String orderid= request.getParameter("orderid");
					String jfuid= request.getParameter("jfuid");
					String 	report= request.getParameter("report");
					String 	recording= request.getParameter("recording");
					String order_num=request.getParameter("order_num");
					
					GXJOrderUploadReport u=new GXJOrderUploadReport();
					u.setId(DateUtil.getIdDay());
	                u.setDemandid(demandid);
	                u.setOrderid(orderid);
	                u.setJfuid_j(jfuid);
	                u.setReport(report);
	                u.setRecording(recording);
	                u.setOrder_num(StringUtil.toInteger(order_num));
	            	u.setCreatetime(DateUtil.getTime());
	            	u.setUploadtime(DateUtil.getTime());
	            	u.setStatus(0);//初始状态
	            	GXJOrderUploadReport reuser=orderUploadReportService.addOrderUploadReport(u);
	            	
	                //如果订单状态是 审核通过状态 修改为执行中
					HJOrderDemand order=new HJOrderDemand();
					order.setOrderid(orderid);
					HJOrderDemand res=orderdemandService.getOrderDemandByOrderid(order);
					if(2==res.getJdstate()){
						res.setJdstate(4);
						res.setUpdatetime(DateUtil.getTime());
						orderdemandService.modifyOrderDemand(res);
					}
					
					//如果需求状态是 审核通过 修改为执行中
					HFDemand demand=new HFDemand();
					demand.setDemandid(demandid);
					HFDemand updemand=demandService.getDemandById(demand);
					if(2==updemand.getFdstate()){
						updemand.setFdstate(4);
						updemand.setUpdatetime(DateUtil.getTime());
						demandService.updateDemand(updemand);
					}
					mv.setViewName("redirect:/supplier_lj_douploadReportAlert");
                return mv;
	    } 
		 @RequestMapping(value="/supplier_lj_douploadReportAlert")
		 public  ModelAndView supplier_lj_douploadReportAlert(HttpServletRequest  request,HttpSession session) { 
				    ModelAndView mv =this.initUser(session,"supplier_lj_douploadReportAlert");
				    String forObject="supplier_uploadReportAlert.jsp";
				    mv.setViewName("jsp/center/"+forObject);
					return mv;
		 } 
		
//		 查看进度
		 @RequestMapping(value="/supplier_lj_Debriefing")
		 public  ModelAndView toSupplier_lj_Debriefing(HttpServletRequest  request,HttpSession session) { 
				    HFDemand u=new HFDemand();
					String orderid= request.getParameter("orderid");
					String zt= request.getParameter("ztDetail");
				    ModelAndView mv =this.initUser(session,"");
				    
				    HJOrderDemand up=new HJOrderDemand();
					up.setOrderid(orderid);
					HJOrderDemand getdeMand=orderdemandService.getOrderDemandByOrderid(up);
				
					mv.addObject("pa",u);
					mv.addObject("zt",zt);
					JSONArray jsonArray=null;
//					String exePlan=getdeMand.getExecutionplan();
//					boolean  isexePl=StringUtil.isNull(exePlan);
//					if(!isexePl){
//						JSONObject jsonObject = JSONObject.fromObject(exePlan) ; 
//						jsonArray=JSONArray.fromObject(jsonObject.values());
//					}
					mv.addObject("dataTitle",jsonArray);
					mv.addObject("dem",getdeMand);
					String forObject="supplier_debriefing.jsp";
					mv.setViewName("jsp/center/"+forObject);
					return mv;
	    } 
		 

//		竞拍
//		 竞拍进入方法
		 @Token(save=true)
		 @RequestMapping(value="/supplier_lj_ApplyAuction")
		 public  ModelAndView toSupplier_lj_ApplyAuction(HttpServletRequest  request,HttpSession session) { 
			    HFDemand u=new HFDemand();
				String demandid= request.getParameter("demandid");
				String zt= request.getParameter("ztDetail");
				
				u.setDemandid(demandid);
			    ModelAndView mv =this.initUser(session,"");
			    HFDemand demand=demandService.getDemandById(u);
			    
			    HJOrderDemand up=new HJOrderDemand();
			    HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				up.setJfuid(jfuid);
				up.setDemandid(demandid);
					mv.addObject("pa",u);
					mv.addObject("demand",demand);
					mv.addObject("zt",zt);
					
					long subDays=0;
					if(StringUtil.isNull(demand.getPackageid())){//不是套餐
						String endTime=demand.getEndtime();//2016-06-22 17:21:52
						long subDay=DateUtil.getDaySub(endTime,DateUtil.getTime());
						subDays=-1*subDay+1;
					}else{//是套餐
						String endTime=demand.getEndtime();
					 	if(!StringUtil.isNumerics(endTime)){
					 		long subDay=DateUtil.getDaySub(endTime,DateUtil.getTime());
							subDays=-1*subDay+1;
						}else{
							/*
							 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
							 */
							String releasetime=demand.getBegintime();
							String yMd=DateUtil.getAfterDay(endTime,DateUtil.fomatDate(releasetime));//得到N天后的日期
							/*
							 * 发布日期n天后的日期   -  既取得结算日期
							 * 结算日期和当前日期比较
							 * 结算日期当前日期  进入结算状态修改  修改成结算中  - 5
							 */
							long subDay=DateUtil.getDaySub(yMd,DateUtil.getTime());
							subDays=-1*subDay+1;
						}
						
					}
					
					ArrayList nowdata =DateUtil.getAfterDayWeekAr(subDays);
					mv.addObject("dataTitle",nowdata);
					String forObject="supplier_ApplyAuction.jsp";
					mv.setViewName("jsp/center/"+forObject);
					return mv;
	    } 
		 
		 
		 
//		 竞拍do 计划
		 @RequestMapping(value="/applyAuctionOrder")
		 public  ModelAndView toSupplier_lj_ApplyAuctionDo(HttpServletRequest  request,HttpSession session) { 
				    HJOrderDemand u=new HJOrderDemand();
				    String auctionnum= request.getParameter("auctionnum");
				    String explicittel= request.getParameter("explicittel");
				    String demandid= request.getParameter("demandid");
				    String orderprice=request.getParameter("orderprice");
				    
				    //是否使用我公司数据 usemycompanydata  1需要 2 不需要
				    String usemycompanydata=request.getParameter("usemycompanydata");
				    //我能开的发票类型（小规模纳税人需另收3%的税费；普票需另收6%的税费） typeofinvoice    1增税(一般纳税人) 2 小规模纳税人(一般纳税人 收3%的)   3普票(收6%的)
				    String typeofinvoice=request.getParameter("typeofinvoice");
				    
				    u.setUsemycompanydata(StringUtil.toInteger(usemycompanydata));
				    u.setTypeofinvoice(StringUtil.toInteger(typeofinvoice));
				    
					u.setOrderid(DateUtil.getIdDay());
					HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
					String jfuid=usermap.get("jfuid");
					u.setJfuid(jfuid);
					u.setDemandid(demandid);
					u.setJdstate(1);//待审核
					u.setOrderprice(StringUtil.toBigDecimal(orderprice));
					u.setAuctionnum(StringUtil.toInteger(auctionnum));
					u.setExplicittel(explicittel);
					u.setCreatetime(DateUtil.getTime());
					u.setDistributionstate(0);//默认已经分配  分配到用户对应的
					u.setFishnum(0);
				    ModelAndView mv =this.initUser(session,"");
				    OrderDemandRes res= orderdemandService.ApplyOrderDemand(u);
					mv.addObject("pa",u);
					mv.addObject("res",res);
				    return mv;
	    } 
		 
		 
		 
		 
//		 收藏方法
		 @RequestMapping(value="/supplier_lj_CollectionDo") 
		 public  ModelAndView toSupplier_lj_CollectionDo(HttpServletRequest  request,HttpSession session) { 
			        ModelAndView mv =this.initUser(session,"supplier_lj_CollectionDo");
				    HJCollectionDemand u=new HJCollectionDemand();
				    String demandid= request.getParameter("demandid");
					HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
					String jfuid=usermap.get("jfuid");
					u.setJfuid(jfuid);
					u.setCollectionid(DateUtil.getIdDay());
					u.setDemandid(demandid);
					u.setCreatetime(DateUtil.getTime());
				    
				    collectionDemandService.addCollectionDemand(u);
					mv.addObject("pa",u);
			    mv.setViewName("redirect:/supplier_lj_CollectionAlert");
				return mv;
	    } 
		 @RequestMapping(value="/supplier_lj_CollectionAlert")
		 public  ModelAndView supplier_lj_CollectionAlert(HttpServletRequest  request,HttpSession session) { 
			    ModelAndView mv =this.initUser(session,"supplier_lj_CollectionAlert");
			    String forObject="supplier_collectionOpportunities.jsp";
			    mv.setViewName("jsp/center/"+forObject);
				return mv;
	    } 
		 
		 
		 
		 
			 
			 
			 
			 
			 
			 
			 
			 
			 
		 /* 
		 * 查询需求管理  明细
		 */
		 @Token(save=true)
		 @RequestMapping(value="/customer_lj_DemandDetail")
		 public  ModelAndView toCustomer_lj_DemandDetail(HttpServletRequest  request,HttpSession session) { 
				    HFDemand u=new HFDemand();
				   
				    String category1="";
					String demandid= request.getParameter("demandid");
					if(StringUtil.isNull(demandid)){
						demandid=(String) session.getAttribute("demandid");
					}else{
						session.setAttribute("demandid", demandid);
					}
					String zt= request.getParameter("ztDetail");
					if(StringUtil.isNull(zt)){
						zt=(String) session.getAttribute("zt");
					}else{
						session.setAttribute("zt", zt);
					}
                    u.setDemandid(demandid);
				    ModelAndView mv =this.initUser(session,"");
				    HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				    String jfutype=usermap.get("jfutype");
				 	String category3=request.getParameter("category3");
				 	u.setCategory3(category3);
				    String yjwctime="";
				    String forObject="";
					if("1".equals(jfutype)){
							 //查询需求明细
//							 HFDemand demand=demandService.getDemandById(u);
							 HFDemand demand= demandService.getDemandHallById(u);
							 category1=demand.getCategory1();
							 String cluename=templateService.getClueTemplateUrl(category1,false);
							 String speakname=templateService.getSpeakTemplateUrl(category1,false);
							 mv.addObject("cluename",cluename);
							 mv.addObject("speakname",speakname);
							 
							 String xsxsurl=demand.getXsxsurl();
							 if(StringUtil.isNull(xsxsurl)){
								 if(cluename.indexOf(CommonUtil.getImageUrlpre())!=-1){
									 cluename=cluename.replace(CommonUtil.getImageUrlpre(),"");
								 }
								 demand.setXsxsurl(cluename);
							 }
							 
							float fishnum=0;
							float releasenum=0;
							if(null!=demand.getFishnum()){
								fishnum=demand.getFishnum();
							}
							if(null!=demand.getReleasenum()){
								releasenum=demand.getReleasenum();
							}
							
							
							float zhanbi=(float)fishnum/releasenum*100;
							if(zhanbi>100){
							  	zhanbi=100;
							}
							if(zhanbi<0){
							  	zhanbi=0;
							}
							zhanbi=(float)(Math.round(zhanbi*100)/100);
							demand.setZhanbi(zhanbi);
							
							/*
							 * 时间进度条
							 */
							if(4==demand.getFdstate()||5==demand.getFdstate()||6==demand.getFdstate()||7==demand.getFdstate()){
							    if(StringUtil.isNull(demand.getPackageid())){//不是套餐
							    	yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
								}else{//是套餐
									
									//假如不是整数就直接取到
									String endTimes=demand.getEndtime();
									if(!StringUtil.isNumerics(endTimes)){
										yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
									}else{
										/*
										 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
										 */
										String releasetime=demand.getBegintime();
										yjwctime=DateUtil.getAfterDay(endTimes,DateUtil.fomatDate(releasetime));//得到N天后的日期
									}
								}
							    
							    float percent=0;
								/*
								 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
								 */
							    if(null!=demand.getBegintime()){
								    long subDay=DateUtil.getDaySub(demand.getBegintime(),yjwctime);
								    long useDay=DateUtil.getDaySub(demand.getBegintime(),DateUtil.getDay());
								    percent=(float)useDay/subDay*100;  
								    if(percent>100){
								    	percent=100;
								    }
								    if(percent<0){
								    	percent=0;
								    }
							    }
							    percent=(float)(Math.round(percent*100)/100);
							    demand.setPercent(percent);
							}
						    demand.setYjwctime(yjwctime);
						    forObject="customer_details.jsp";
						    mv.addObject("demand",demand);
					}else{
						if("supplier_lj_demandHall2".equals(zt)||"mycollection".endsWith(zt)){
						    	 //查询需求明细
//								 demand=demandService.getDemandById(u);
							 	 HFDemand demand= demandService.getDemandHallById(u);
								 category1=demand.getCategory1();
								 String cluename=templateService.getClueTemplateUrl(category1,false);
								 String speakname=templateService.getSpeakTemplateUrl(category1,false);
								 mv.addObject("cluename",cluename);
								 mv.addObject("speakname",speakname);
								 String xsxsurl=demand.getXsxsurl();
								 if(StringUtil.isNull(xsxsurl)){
									 if(cluename.indexOf(CommonUtil.getImageUrlpre())!=-1){
										 cluename=cluename.replace(CommonUtil.getImageUrlpre(),"");
									 }
									 demand.setXsxsurl(cluename);
								 }
								 
								 float fishnum=0;
								 float releasenum=0;
								 if(null!=demand.getFishnum()){
									fishnum=demand.getFishnum();
								 }
								 if(null!=demand.getReleasenum()){
									releasenum=demand.getReleasenum();
								 }
									
								 float zhanbi=(float)fishnum/releasenum*100;
								 if(zhanbi>100){
								   	zhanbi=100;
								 }
								 if(zhanbi<0){
								    zhanbi=0;
								 }
								 zhanbi=(float)(Math.round(zhanbi*100)/100);
								 demand.setZhanbi(zhanbi);
								/*
								 * 时间进度条
								 */
								 if(2==demand.getFdstate()||4==demand.getFdstate()||5==demand.getFdstate()||6==demand.getFdstate()||7==demand.getFdstate()){
									 if(StringUtil.isNull(demand.getPackageid())){//不是套餐
										 yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
									 }else{//是套餐
										 	String endTimes=demand.getEndtime();
										 	if(!StringUtil.isNumerics(endTimes)){
											     yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
											}else{
												 /*
												 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
											     */
												 String releasetime=demand.getBegintime();
												 yjwctime=DateUtil.getAfterDay(endTimes,DateUtil.fomatDate(releasetime));//得到N天后的日期
											}
									 }
									 float percent=0;
									 if(null!=demand.getBegintime()){
										 long subDay=DateUtil.getDaySub(demand.getBegintime(),yjwctime);
										 long useDay=DateUtil.getDaySub(demand.getBegintime(),DateUtil.getDay());
										 
										 percent=(float)useDay/subDay*100; 
										 if(percent>100){
										    percent=100;
										 }
										 if(percent<0){
										    percent=0;
										 }
									 }
									 percent=(float)(Math.round(percent*100)/100);
									 demand.setPercent(percent);							 
								 }
								 demand.setYjwctime(yjwctime);
								 forObject="customer_details.jsp";
								 mv.addObject("demand",demand);
						}else{
							String orderid= request.getParameter("orderid");
							if(StringUtil.isNull(orderid)){
								orderid=(String) session.getAttribute("orderid");
							}else{
								session.setAttribute("orderid", orderid);
							}
							 //查询订单明细
							HJOrderDemand pa=new HJOrderDemand();
							pa.setDemandid(demandid);
							pa.setOrderid(orderid);
							HJOrderDemand demand=orderdemandService.getOrderDemandByById(pa);
							category1=demand.getCategory1();
							 String cluename=templateService.getClueTemplateUrl(category1,false);
							 String speakname=templateService.getSpeakTemplateUrl(category1,false);
//							 http://mso-china.com:8088/core/templet_xsxs.xlsx 销售线索模板
							 mv.addObject("cluename",cluename);
//							 http://mso-china.com:8088/core/templet_bzhs.xlsx  话术模板
							 mv.addObject("speakname",speakname);
							 String xsxsurl=demand.getXsxsurl();
							 if(StringUtil.isNull(xsxsurl)){
								 if(cluename.indexOf(CommonUtil.getImageUrlpre())!=-1){
									 cluename=cluename.replace(CommonUtil.getImageUrlpre(),"");
								 }
								 demand.setXsxsurl(cluename);
							 }
							 
							 float fishnum=0;
							 float auctionnum=0;
							 if(null!=demand.getFishnum()){
								fishnum=demand.getFishnum();
							 }
							 if(null!=demand.getAuctionnum()){
								 auctionnum=demand.getAuctionnum();
							 }
							float zhanbi=(float)fishnum/auctionnum*100;
						    if(zhanbi>100){
						    	zhanbi=100;
						    }
						    if(zhanbi<0){
						    	zhanbi=0;
						    }
						    zhanbi=(float)(Math.round(zhanbi*100)/100);
						    demand.setZhanbi(zhanbi);
							/*
							 * 时间进度条
							 */
							 if(4==demand.getJdstate()||5==demand.getJdstate()||6==demand.getJdstate()||7==demand.getJdstate()){
								 if(StringUtil.isNull(demand.getPackageid())){//不是套餐
									 yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
								 }else{//是套餐
									 	String endTimes=demand.getEndtime();
									 	if(!StringUtil.isNumerics(endTimes)){
										     yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
										}else{
											 /*
											 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
										     */
											 String releasetime=demand.getBegintime();
											 yjwctime=DateUtil.getAfterDay(endTimes,DateUtil.fomatDate(releasetime));//得到N天后的日期
										}
								 }
								 
								 float percent=0;
								 /*
								 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
							     */
								 if(null!=demand.getBegintime()){
									 long subDay=DateUtil.getDaySub(demand.getBegintime(),yjwctime);
									 long useDay=DateUtil.getDaySub(demand.getBegintime(),DateUtil.getDay());
									 percent=(float)useDay/subDay*100;  
									 if(percent>100){
										percent=100;
									 }
									 if(percent<0){
										percent=0;
									 }
								 }
								 percent=(float)(Math.round(percent*100)/100);
								 demand.setPercent(percent);
							 }
							 demand.setYjwctime(yjwctime);
//							if(4==demand.getJdstate()){
								//执行中订单下面的成单报告查询
								GXJOrderUploadReport report=new GXJOrderUploadReport();
								//主要是这个不能少
								String pageNo=request.getParameter("pageNo");
								if(StringUtil.isNull(pageNo)){
									pageNo="1";
								}
								int pageNoint=Integer.parseInt(pageNo);
								report.setPageNo(pageNoint);
								
								String currentPage=request.getParameter("currentPage");
								if(StringUtil.isNull(currentPage)){
									currentPage="1";
								}
								int currentPageint=Integer.parseInt(currentPage);
								report.setCurrentPage(currentPageint);
						    	String sbeginDateValue=request.getParameter("sbeginDateValue");
						    	String sendDateValue=request.getParameter("sendDateValue");
						    	
						    	report.setSbeginDateValue(sbeginDateValue);
						    	report.setSendDateValue(sendDateValue);
						    	report.setDemandid(demandid);
						    	report.setOrderid(orderid);//当前需求下的订单
						    	PageResults page=orderUploadReportService.getUploadReportPage(report);
						    	List list=page.getResults();
						    	if(list!=null||list.size()>=0){
						    		for (int i = 0; i < list.size(); i++) {
						    			GXJOrderUploadReport up=(GXJOrderUploadReport) list.get(i);
						    			up.setReport(StringUtil.objCovStr(up.getReport()));
						    			up.setRecording(StringUtil.objCovStr(up.getRecording()));
						    			up.setDba_url(StringUtil.objCovStr(up.getDba_url()));
						    			up.setQa_url(StringUtil.objCovStr(up.getQa_url()));
									}
						    	}
								mv.addObject("page",page);
								mv.addObject("sbeginDateValue",sbeginDateValue);
								mv.addObject("sendDateValue",sendDateValue);
								mv.addObject("pagename","customer_lj_DemandDetail");
//							}
							forObject="supplier_details.jsp";
							mv.addObject("demand",demand);
						}
					}
					 mv.addObject("pre1", CommonUtil.getImageUrlOldpre());
			    	 mv.addObject("pre",CommonUtil.getImageUrlpre());
			    	
						
						
					 mv.addObject("pa",u);
					 mv.addObject("zt",zt);
				
					mv.setViewName("jsp/center/"+forObject);
					return mv;
		    }  
 
		 
		 
 	/* 
	 * 查询需求管理  明细
	 */
 	 @ResponseBody
	 @RequestMapping(value="/demandDetail/{demandid}")
	 public  DemandDetailRes toDemandDetail(@PathVariable("demandid")String demandid) {
		 		DemandDetailRes res=new DemandDetailRes("Y","");
		 		try {
					    HFDemand u=new HFDemand();
	                    u.setDemandid(demandid);
					    String yjwctime="";
						 //查询需求明细
						 HFDemand demand= demandService.getDemandHallById(u);
						 // /baseLabel/{labelType}
						float fishnum=0;
						float releasenum=0;
						if(null!=demand.getFishnum()){
							fishnum=demand.getFishnum();
						}
						if(null!=demand.getReleasenum()){
							releasenum=demand.getReleasenum();
						}
						
						float zhanbi=(float)fishnum/releasenum*100;
						if(zhanbi>100){
						  	zhanbi=100;
						}
						if(zhanbi<0){
						  	zhanbi=0;
						}
						zhanbi=(float)(Math.round(zhanbi*100)/100);
						demand.setZhanbi(zhanbi);
						
						
					
						//选择的标签
						HFPLabel lap=new HFPLabel();
						lap.setPid(demand.getPid());
						List<PLabel> selectedlist=plabelService.getSelectPLabel(lap);
						demand.setSelectedlist(selectedlist);
											
						
                        
                        
						/*
						 * 时间进度条
						 */
						if(null!=demand.getFdstate()){
							if(4==demand.getFdstate()||5==demand.getFdstate()||6==demand.getFdstate()||7==demand.getFdstate()){
							    if(StringUtil.isNull(demand.getPackageid())){//不是套餐
							    	yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
								}else{//是套餐
									//假如不是整数就直接取到
									String endTimes=demand.getEndtime();
									if(!StringUtil.isNumerics(endTimes)){
										yjwctime=DateUtil.getDay(DateUtil.fomatDate(demand.getEndtime()));
									}else{
										/*
										 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
										 */
										String releasetime=demand.getBegintime();
										yjwctime=DateUtil.getAfterDay(endTimes,DateUtil.fomatDate(releasetime));//得到N天后的日期
									}
								}
							    
							    float percent=0;
								/*
								 * 开始时间换成前端输入时间  String releasetime=demand.getReleasetime();
								 */
							    if(null!=demand.getBegintime()){
								    long subDay=DateUtil.getDaySub(demand.getBegintime(),yjwctime);
								    long useDay=DateUtil.getDaySub(demand.getBegintime(),DateUtil.getDay());
								    percent=(float)useDay/subDay*100;  
								    if(percent>100){
								    	percent=100;
								    }
								    if(percent<0){
								    	percent=0;
								    }
							    }
							    percent=(float)(Math.round(percent*100)/100);
							    demand.setPercent(percent);
							}
						}
					    demand.setYjwctime(yjwctime);
					    		    demand.setXsxsurl("");
					    		    demand.setStandardoperation("");
					    		    demand.setOtherreport("");
					    
					    res.setDemand(demand);
		 		} catch (Exception e) {
		 			res.setCode("N");
		 			res.setMsg("查询失败"+e.toString());
				}
			    return res;
	    }  
	 
			 
		/*
	    * 前端登录 接包方-- 基本信息
		*/
		@RequestMapping(value="/supplier_lj_Supplier_BasicInfo")
		public ModelAndView toSupplier_BasicInfo(HttpSession session)throws Exception{
			ModelAndView mv =this.initUser(session,"supplier_lj_Supplier_BasicInfo");
			mv.setViewName("jsp/center/supplier_BasicInfo.jsp");
			return mv;
		}
		/* 
		 * 发包方
		 * 基本信息do  -发包方
		 */
		 @ResponseBody
		 @RequestMapping(value="/supplier_lj_Supplier_BasicInfoDo")
		 public  UserRes toSupplierBasicInfoDo(JfUser  passPut,HttpSession session) { 
		    	String code="Y";
		    	String msg="修改成功";
		    	UserRes res = new UserRes(code,msg);  
		    	try {
					HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
					String jfuid=usermap.get("jfuid");
					passPut.setJfuid(jfuid);
					String jfutype=usermap.get("jfutype");
					passPut.setJfutype(jfutype);
					String jfuname=usermap.get("jfuname");
					passPut.setJfuname(jfuname);
					userService.editFUser(passPut);
				} catch (Exception e) {
					code="N";
					res.setCode(code);
					res.setMsg("异常啦!"+e.toString());
				}
				return res;
		    }
		
		
		 
	
		 
		//需求大厅
		@RequestMapping(value="/supplier_lj_demandHall")
		public ModelAndView to_supplierDemandHall(HttpServletRequest  request,HttpSession session)throws Exception{
				    HFDemand u=new HFDemand();

				    String zt= request.getParameter("zt");
					//取得查询条件
					String sorderName= request.getParameter("sorderName");
					String sorderNo= request.getParameter("sorderNo");
					String sbeginDateValue=request.getParameter("sbeginDateValue");
					String sendDateValue=request.getParameter("sendDateValue");
					
					BigDecimal minJine=StringUtil.toBigDecimal(request.getParameter("minJine"));
					BigDecimal maxJine=StringUtil.toBigDecimal(request.getParameter("maxJine"));
					
//					需求类型
					String xuqiuType= StringUtil.objCovStr(request.getParameter("xuqiuType"));
					if("全部".equals(xuqiuType)){
						xuqiuType="";
					}
//					营销类型  电话营销
					String category2= StringUtil.objCovStr(request.getParameter("category2"));
					if("全部".equals(category2)){
						category2="";
					}
//					面向地区
					String mxArea= StringUtil.objCovStr(request.getParameter("mxArea"));
					if("全国".equals(mxArea)){
						mxArea="";
					}
//					面向行业
					String category1= StringUtil.objCovStr(request.getParameter("category1"));
					if("全部".equals(category1)){
						category1="";
					}
					
					//主要是这个不能少
					String pageNo=request.getParameter("pageNo");
					if(StringUtil.isNull(pageNo)){
						pageNo="1";
					}
					int pageNoint=Integer.parseInt(pageNo);
					u.setPageNo(pageNoint);
					
					String currentPage=request.getParameter("currentPage");
					String  cset=request.getParameter("cset");
					if("cset".equals(cset)){
						currentPage="1";
					}else{
						if(StringUtil.isNull(currentPage)){
							currentPage="1";
						}
					}

					int currentPageint=Integer.parseInt(currentPage);
					u.setCurrentPage(currentPageint);
					u.setMinJine(minJine);
					u.setMaxJine(maxJine);
					
					u.setXuqiuType(xuqiuType);
					u.setCategory1(category1);
					u.setCategory2(category2);
					u.setMxArea(mxArea);
					
					u.setSorderName(sorderName);
					u.setSorderNo(sorderNo);
					u.setSbeginDateValue(sbeginDateValue);
					u.setSendDateValue(sendDateValue);
					Integer[] strzt = new Integer[]{2,4,5,6};

					u.setZt(zt);
					u.setStrzt(strzt);
					//查询首页的       待办提醒
					HFDemandRes res=demandService.getDemands(u);
					
					ModelAndView mv =this.initUser(session,"supplier_lj_demandHall2");
	                //发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 3-驳回   8-已分配                  2-通过(审核) 4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭 
					String forObject="supplier_demandHall.jsp";
					mv.addObject("pa",u);
					mv.addObject("res",res);
					mv.addObject("zt",zt);
					
					mv.setViewName("jsp/center/"+forObject);
					return mv;
		 }
		
		
		
		/*
		 * 1.4.2需求大厅  需要登录
		 */
				@RequestMapping(value="/supplier_lj_demandHall2")
				public ModelAndView to_supplierDemandHall2(HttpServletRequest  request,HttpSession session)throws Exception{
							ModelAndView mv =this.initUser(session,"supplier_lj_demandHall2");
							String sorderName= request.getParameter("sorderName");
							String ztseach= request.getParameter("ztseach"); 
							HFDemand u=new HFDemand();
							u.setSorderName(sorderName);
							mv.addObject("pa",u);
			                //发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 3-驳回   8-已分配                  2-通过(审核) 4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭 
							String forObject="supplier_demandHall2.jsp";
							mv.addObject("ztseach",ztseach);
							mv.setViewName("jsp/center/"+forObject);
							return mv;
				 }
				/*
				 * 异步取得需求大厅数据
				 * 1.4.2需求大厅
				 */
				@ResponseBody
			    @RequestMapping(value="/getDemandHall")  
			    public  HFdemandHallRes to_getDemand(DemandHallPut demandhall) { 
			    	String code="Y";
			    	String msg="";
//			    	demandhall.setDemandid("201611140205416711"); 
			    	HFdemandHallRes res = new HFdemandHallRes(code,msg);  
			    	res.setCurrentPage(1);
			    	res.setCode("Y");
			    	try {
 			    		 res=demandService.getDemandHall(demandhall);
					} catch (Exception e) {
						code="N";
						res.setCode(code);
						res.setMsg("异常啦!"+e.toString());
					}
					return res;
			    }  		
				
				
				
	     /*
		 * 查询我的订单的方法  customer_settlement.html  未使用  接包方
		 * 待审核订单  supplier_pendingOrder.jsp
		 */
		@RequestMapping(value="/supplier_lj_OrderList")
		public ModelAndView to_supplierOrder(HttpServletRequest  request,HttpSession session){
			ModelAndView mv =this.initUser(session,"supplier_lj_OrderList");
//			* (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭   8-已分配
			//推送的商机
//			执行中
			HFDemand u=new HFDemand();
			String zt= request.getParameter("zt");
			//取得查询条件
			String sorderName= request.getParameter("sorderName");
			String sorderNo= request.getParameter("sorderNo");
			String sbeginDateValue=request.getParameter("sbeginDateValue");
			String sendDateValue=request.getParameter("sendDateValue");
			
			//主要是这个不能少
			String pageNo=request.getParameter("pageNo");
			if(StringUtil.isNull(pageNo)){
				pageNo="1";
			}
			int pageNoint=Integer.parseInt(pageNo);
			u.setPageNo(pageNoint);
			
			String currentPage=request.getParameter("currentPage");
			if(StringUtil.isNull(currentPage)){
				currentPage="1";
			}
			int currentPageint=Integer.parseInt(currentPage);
			u.setCurrentPage(currentPageint);
			
			u.setSorderName(sorderName);
			u.setSorderNo(sorderNo);
			u.setSbeginDateValue(sbeginDateValue);
			u.setSendDateValue(sendDateValue);
			
			String title="";
			String forObject="";
			Integer[] strzt=null;
			//待审核订单
			if("dshorder".equals(zt)){
				strzt=new Integer[]{1,3,8};
				title="待审核订单";
				forObject="supplier_pendingOrder.jsp";
			}
			//待执行订单
			if("dzxorder".equals(zt)){
				strzt=new Integer[]{2};
				title="待执行订单";
				forObject="supplier_pendingOrder.jsp";
			}
			//执行中 ---//待执行订单                               (审核通过和执行中)
			if("zxzorder".equals(zt)){
				strzt=new Integer[]{2,4};
				title="执行中订单";
				forObject="supplier_pendingOrder.jsp";
			}
			//我的小账本
			if("all".equals(zt)){
				strzt=new Integer[]{5,6};
			    title="我的小账本";
				forObject="supplier_pendingOrder.jsp";
			}
			//我的小账本
			if("allywcorder".equals(zt)){
				strzt=new Integer[]{6};
			    title="我的小账本";
				forObject="supplier_pendingOrder.jsp";
			}
			//我的小账本 结算中
			if("alljszorder".equals(zt)){
				strzt=new Integer[]{5};
			    title="我的小账本";
				forObject="supplier_pendingOrder.jsp";
			}
			
			//待结算  supplier_settlementOrder.html
			if("djsorder".equals(zt)){
				strzt=new Integer[]{5};
				title="待结算订单";
				forObject="supplier_pendingOrder.jsp";
			}
			//已完成
			if("ywcorder".equals(zt)){
				strzt=new Integer[]{6};
				title="已完成订单";
				forObject="supplier_pendingOrder.jsp";
			}
			//被关闭
			if("bgborder".equals(zt)){
				strzt=new Integer[]{7};
				title="被关闭订单";
				forObject="supplier_pendingOrder.jsp";
			}
			
			
			//我收藏的需求
			if("mycollection".equals(zt)){
				strzt=null;
				title="我收藏的需求";
				forObject="supplier_pendingCollction.jsp";
			}
			
			u.setStrzt(strzt);
			u.setZt(zt);
			HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
			String jfuid=usermap.get("jfuid");
			String pid=usermap.get("pid");
			if(!StringUtil.isNull(pid)&&!"0".equals(pid)){
				jfuid=pid;
			}
			u.setJfuid(jfuid);
			u.setStrzt(strzt);
			
			HFDemandRes res=null;
			if("mycollection".equals(zt)){
			   res=collectionDemandService.getOrderDemands(u);
			}else{
			   res=demandService.getOrderDemands(u);
			}
			
			mv.setViewName("jsp/center/"+forObject);
			mv.addObject("title",title);
			mv.addObject("pa",u);
			mv.addObject("res",res);
			mv.addObject("zt",zt);
			return mv;
		}
	
		
	     /*  
		 * 我的悬赏  所有状态  未使用
		 */
		 @RequestMapping(value="/customer_lj_offerDemandList")
		 public  ModelAndView toCustomer_offerDemandList(HttpServletRequest  request,HttpSession session) { 
				String forObject="customer_reward3.jsp";//我的悬赏
			    ModelAndView mv =this.initUser(session,"customer_lj_offerDemandList");
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				HFDemand u=new HFDemand();
				u.setJfuid(jfuid);
				u.setStrzt(null);
				HFDemandRes res=demandService.getDemands(u);
				mv.addObject("res",res);
				mv.setViewName("jsp/center/"+forObject);
				return mv;
	    } 
		 
		
		 //进入首页 接包方   待审核订单(1)待执行订单(1)执行中订单(1)待结算订单(1
		 @RequestMapping(value="/supplier_lj_Home_supplier")
		 public ModelAndView toSupplier_lj_Home(HttpSession session)throws Exception{
				ModelAndView mv =this.initUser(session,"supplier_lj_Home_supplier");
				HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
				String jfuid=usermap.get("jfuid");
				String pid=usermap.get("pid");
				if(!StringUtil.isNull(pid)&&!"0".equals(pid)){
					jfuid=pid;
				}
				HFDemand u=new HFDemand();
				u.setJfuid(jfuid);
				//查询首页的       待办提醒
				HFDemandRes res=demandService.getOrderHome(u);
				mv.addObject("res",res);
			    
				HFDemand u1=new HFDemand();
				String pageNo="1";
				int pageNoint=Integer.parseInt(pageNo);
				u1.setPageNo(pageNoint);
				String currentPage="1";
				int currentPageint=Integer.parseInt(currentPage);
				u1.setCurrentPage(currentPageint);
				Integer[] strzt = new Integer[]{2,4,5,6,7};
				u1.setStrzt(strzt);
				HFDemandRes r=demandService.getDemands(u1);
				mv.addObject("r",r.getResults());
				
				mv.setViewName("jsp/center/home_supplier.jsp");
				return mv;
			}
		
		
		
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		/*1.4.2  发包方-Head*/
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/getHead")
		public  DemandHomeRes toCustomer_1_4_Home(@PathVariable("jfuid")String jfuid) { 
			HFDemand u=new HFDemand();
			u.setJfuid(jfuid);
	    	DemandHomeRes res1=demandService.getDemand_1_4_Home(u);
			return res1;
	    }
		/*1.4.2  发包方-需求动态*/
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/demandDynamics")
		public  DynamicDemandHomeRes toCustomer_1_4_Home_DemandDynamics(@PathVariable("jfuid")String jfuid) { 
			HFDemand u=new HFDemand();
			u.setJfuid(jfuid);
			DynamicDemandHomeRes res1=demandService.get_1_4_Demanddynamics(u);
			return res1;
	    }
		/*1.4.2  发包方-我的接包方  竞拍榜*/
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{demandid}/demandAuctionList")
		public  AuctionListDemandHomeRes toCustomer_1_4_Home_demandAuctionList(@PathVariable("demandid")String demandid) { 
			HFDemand u=new HFDemand();
			u.setDemandid(demandid);
			u.setOrderBy("auctionnum");
			u.setJfutype("1");//发包方 
			AuctionListDemandHomeRes res1=demandService.get_1_4_DemandAuctionList(u);
			return res1;
	    }
		/*1.4.2  发包方-我的接包方 完成榜*/
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{demandid}/completeList")
		public  AuctionListDemandHomeRes toCustomer_1_4_Home_CompleteList(@PathVariable("demandid")String demandid) { 
			HFDemand u=new HFDemand();
			u.setDemandid(demandid);
			u.setOrderBy("fishnum");
			AuctionListDemandHomeRes res1=demandService.get_1_4_DemandCompleteList(u);
			return res1;
	    }
		/*1.4.2  发包方-我的接包方 完成率榜*/
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{demandid}/completionRateList")
		public  AuctionListDemandHomeRes toCustomer_1_4_Home_CompletionRateList(@PathVariable("demandid")String demandid) { 
			HFDemand u=new HFDemand();
			u.setDemandid(demandid);
			u.setOrderBy("fisrate");
			AuctionListDemandHomeRes res1=demandService.get_1_4_DemandCompletionRateList(u);
			return res1;
	    }
		/*1.4.2  发包方-我的需求 -统计图*/
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{demandid}/demandReport")
		public  DemandReportHomeRes toCustomer_1_4_Home_demandReport(@PathVariable("demandid")String demandid) { 
			 GXDbaEverydayStatistics statics =new GXDbaEverydayStatistics();
			 statics.setDemandid(demandid);
			 Integer csstatus=1;
			 statics.setCsstatus(csstatus);
			 statics.setAction("nopage");//不分页
			 DemandReportHomeRes res=dbaEverydayStatisticsService.getEveryday(statics);
			 return res;
	    }
		
		/*2.4.0 发包方-我的获客-获客完成量&获客费用 (适用于查询"每年"/"每月"/"全部")*/
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="myDemandSum/{jfuid}")    //{year}/{month}在ajax里传  
		public JSONObject getMyDemandSum(@PathVariable("jfuid") String jfuid, HttpServletRequest req){  //if前端是JSP用ModelAndView作返回值
			 
			 JSONObject jsonobj = new JSONObject();
			 jsonobj.put("code", "Y");
			 jsonobj.put("msg", "");
			 System.out.println("489797");
			 String yearS = req.getParameter("year");
			 String monthS = req.getParameter("month");
			 
			 Integer year = null;  //初始化year和month为null(用于全部查询)
			 Integer month = null;
			//DateUtil.isValidDate_month(year+"-"+month)
			 try {   
				 if(null!=yearS){
					 year = Integer.valueOf(yearS);
				 }
				 
				 if(null!=monthS){
					 month = Integer.valueOf(monthS);
					 if(null==yearS){
						 jsonobj.put("code", "N");
						 jsonobj.put("msg", "请输入年份");
						 return jsonobj;
					 }		 
				 }  	 
				DemandSum demandSum = (DemandSum) myDemandSumService.getMyDemandSum(jfuid, year, month);  //Integer.parseInt()

				jsonobj.put("data", demandSum);
				
			}catch(JSONException e1){
				jsonobj.put("code", "N");
				jsonobj.put("msg","查不到数据");
			}catch (Exception e) {
				e.printStackTrace();
				jsonobj.put("code", "N");
				jsonobj.put("msg","获取数据失败");
			}
			
		 	return jsonobj;
		}
		
		/*2.4.0发包方-我的需求统计-筛选需求 显示此需求lifecycle对应的"获客费用","需求竞拍及完成情况 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="myDemandStatistics/{pid}")
		public JSONObject getMyDemandStatistics(@PathVariable("pid") String pid){
			JSONObject o = new JSONObject();
			o.put("code", "Y");
			o.put("msg", "");
			//h_f_demand表demandid=pid; h_f_datafiltering表基本pcdid=/=pid
			try{
				List demandStatList = myDemandSumService.getMyDemandStatistics(pid);
				o.put("demandStatList", demandStatList);
			}catch(Exception e){
				e.printStackTrace();
				o.put("code", "N");
				o.put("msg","获取数据失败");
			}
			return o;

		}
		
		/*1.4.2  接包方-历史订单汇总  HistoricalOrderSummary
		 http://.../1_4_home/34/2016/historicalOrderSummary
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/{yy}/historicalOrderSummary")
		public  HistoricalOrderSummaryRes toSuper_1_4_Home_historicalOrderSummary(@PathVariable("jfuid")String jfuid,@PathVariable("yy")String yy) { 
			 HJOrderDemand u=new HJOrderDemand();
			 Integer[] strzt=new Integer[]{2,4,5,6,7};
			 u.setJfuid(jfuid);
			 u.setYy(yy);
			 u.setStrzt(strzt);
			 HistoricalOrderSummaryRes res=orderdemandService.getHistoricalOrderSummary(u);
			 return res;
	    }
		
		/*
		 * 1.4.2  接包方-总收入(GrossIncome)   
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/grossIncome")
		public  GrossIncomeRes toSuper_1_4_Home_grossIncome(@PathVariable("jfuid")String jfuid) { 
			 HJOrderDemand u=new HJOrderDemand();
			 Integer[] strzt=new Integer[]{5,6};
			 u.setJfuid(jfuid);
			 u.setStrzt(strzt);
			 GrossIncomeRes res=orderdemandService.getGrossIncome(u);//总收入
			 return res;
	    }
		/*
		 * 1.4.2  接包方- #订单结算总量  (TotalOrderSettlement)
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/totalOrderSettlement")
		public  TotalOrderSettlementRes toSuper_1_4_Home_totalOrderSettlement(@PathVariable("jfuid")String jfuid) { 
			 HJOrderDemand u=new HJOrderDemand();
			 Integer[] strzt=new Integer[]{5,6};
			 u.setJfuid(jfuid);
			 u.setStrzt(strzt);
			 TotalOrderSettlementRes res=orderdemandService.getTotalOrderSettlement(u);
			 return res;
	    }
		/*
		 * 1.4.2  接包方- 竞拍订单总量(TotalBidOrder)    无需状态
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/totalBidorder")
		public  TotalBidOrderRes toSuper_1_4_Home_totalBidorder(@PathVariable("jfuid")String jfuid) { 
			 HJOrderDemand u=new HJOrderDemand();
			 u.setJfuid(jfuid);
			 TotalBidOrderRes res=orderdemandService.getTotalBidOrder(u);
			 return res;
	    }
		
		/*
		 * 1.4.2  接包方-剩余订单量(Residual order quantity)    
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/residualOrderQuantity")
		public  ResidualOrderQuantityRes toSuper_1_4_Home_residualOrderQuantity(@PathVariable("jfuid")String jfuid) { 
			 HJOrderDemand u=new HJOrderDemand();
			 u.setJfuid(jfuid);
			 ResidualOrderQuantityRes res=orderdemandService.getResidualOrderQuantity(u);
			 return res;
	    }
		/*
		 * 1.4.2  接包方-本月预计收入(Revenue expected this month)
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/thisMonthRevenue")
		public  ThisMonthRevenueRes toSuper_1_4_Home_thisMonthRevenue(@PathVariable("jfuid")String jfuid) { 
			 GXJOrderUploadReport u=new GXJOrderUploadReport();
			 u.setJfuid(jfuid);
			 u.setStatus(6);
			 u.setQa_check(0);
			 u.setQachecktime(DateUtil.getCurrMouth());
			 ThisMonthRevenueRes res=orderUploadReportService.getThisMonthRevenue(u);
			 return res;
	    }
		/*
		 * 1.4.2  接包方-本月完成订单量(Order quantity completed this month)
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/thisMonthOrderQuantityCompleted")
		public  ThisMonthOrderQuantityCompletedRes toSuper_1_4_Home_thisMonthOrderQuantityCompleted(@PathVariable("jfuid")String jfuid) { 
			 GXJOrderUploadReport u=new GXJOrderUploadReport();
			 u.setJfuid(jfuid);
			 u.setStatus(6);
			 u.setQa_check(0);
			 u.setQachecktime(DateUtil.getCurrMouth());
			 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
			 return res;
	    }
		/*
		 * 1.4.2  接包方-订单概况(我的订单-OrderProfileSelect下拉选择框)    
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/orderProfileSelect")
		public  OrderProfileSelectRes toSuper_1_4_Home_orderProfileSelect(@PathVariable("jfuid")String jfuid) { 
			 HJOrderDemand u=new HJOrderDemand();
			 u.setJfuid(jfuid);
			 OrderProfileSelectRes res=orderdemandService.getOrderProfileSelect(u);
			 return res;
	    }
		/*
		 * 1.4.2  接包方-竞拍量榜    
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/{demandid}/orderAuctionList")
		public  AuctionListDemandHomeRes toCustomer_1_4_Home_orderAuctionList(@PathVariable("jfuid")String jfuid,@PathVariable("demandid")String demandid) { 
			HFDemand u=new HFDemand();
			u.setDemandid(demandid);
			u.setJfuid(jfuid);
			u.setJfutype("2");//接包方
			u.setOrderBy("auctionnum");
			AuctionListDemandHomeRes res1=demandService.get_1_4_DemandAuctionList(u);
			return res1;
	    }
		/*
		 * 1.4.2  接包方-转换率榜       结算量/完成量 ConversionRate  34  20160531E7114171
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{jfuid}/{demandid}/orderConversionRateList")
		public  AuctionListDemandHomeRes toCustomer_1_4_Home_orderConversionRateList(@PathVariable("jfuid")String jfuid,@PathVariable("demandid")String demandid) { 
			HFDemand u=new HFDemand();
			u.setDemandid(demandid);
			u.setJfuid(jfuid);
			AuctionListDemandHomeRes res1=demandService.get_1_4_OrderConversionRateList(u);
			return res1;
	    }
		/*
		 * 1.4.2  接包方-订单概况        报表统计数据
		 * 接包方-订单概况每日日提交量/质检成功量 2015123102DF2911
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/1_4_home/{demandid}/orderReport")
		public  OrderReportRes toCustomer_1_4_Home_orderReport(@PathVariable("demandid")String demandid) { 
			 GXJOrderUploadReport statics =new GXJOrderUploadReport();
			 statics.setDemandid(demandid);
			 statics.setStatus(6);
			 statics.setQa_check(0);
			 OrderReportRes res= orderUploadReportService.getOrderOrderNums(statics);
			 return res;
	    }
		
		/*
		 * 2.0  接包方-本月预计收入(Revenue expected this month)  orderid
		 */
		@ResponseBody
		@RequestMapping(method=RequestMethod.GET,value="/uploadProgress/{jfuid}/{orderid}")
		public  UploadProgressRes getUploadProgress(@PathVariable("jfuid")String jfuid,@PathVariable("orderid")String orderid,HttpServletRequest request) { 
			 UploadProgressRes res=new UploadProgressRes("Y","");
			 try {
				 String sbeginDateValue=request.getParameter("sbeginDateValue");
				 String sendDateValue= request.getParameter("sendDateValue");
				 GXJOrderUploadReport u=new GXJOrderUploadReport();
				 u.setJfuid(jfuid);
				 u.setOrderid(orderid);
				 u.setSbeginDateValue(sbeginDateValue);
				 u.setSendDateValue(sendDateValue);
				 ArrayList<GXJOrderUploadReport> list=orderUploadReportService.getUploadProgress(u);
				 res.setUploadProressList(list);
			} catch (Exception e) {
				res.setCode("N");
				res.setMsg("查询异常"+e.toString());
			}
			return res;
	    }
}
