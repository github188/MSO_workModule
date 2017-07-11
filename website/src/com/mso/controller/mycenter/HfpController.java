package com.mso.controller.mycenter;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.input.DatafilteringPut;
import com.mso.input.DemandPut;
import com.mso.input.VisitRecordPut;
import com.mso.input.areaCity;
import com.mso.input.orderDetailInput;
import com.mso.model.BConverRecord;
import com.mso.model.BaseLabel;
import com.mso.model.DemandProgress;
import com.mso.model.HFDatafiltering;
import com.mso.model.HFDemand;
import com.mso.model.HFIndustry;
import com.mso.model.HFPLabel;
import com.mso.model.HJOrderDemand;
import com.mso.model.Hfp;
import com.mso.model.HfpDetail;
import com.mso.model.OrderDemandDetail;
import com.mso.model.PLabel;
import com.mso.model.VisitRecord;
import com.mso.res.AddOrUpdateDatafilteringRes;
import com.mso.res.AddOrUpdateDemandRes;
import com.mso.res.DetailRes;
import com.mso.res.HFDemandRes;
import com.mso.res.HFPRes;
import com.mso.res.OrderDetailRes;
import com.mso.res.TestRes;
import com.mso.res.VisitRecordRes;
import com.mso.res.addOrderDemandRes;
import com.mso.service.BConverRecordService;
import com.mso.service.BaseLabelService;
import com.mso.service.HFIndustryService;
import com.mso.service.HFPLabelService;
import com.mso.service.HFdemandService;
import com.mso.service.IDatafilteringService;
import com.mso.service.IDemandService;
import com.mso.service.IHFpService;
import com.mso.service.IOrderDemandService;
import com.mso.service.IVisitRecordService;
import com.mso.utils.BeanUtils;
import com.mso.utils.CusAccessObjectUtil;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;
import com.mso.utils.DateUtil;
import com.mso.utils.ERConst;
import com.mso.utils.StringUtil;
import com.mso.utils.httpUtil;
import com.test.controller.mycenter.MyCenterControllerTest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class HfpController extends BaseController {
		private static Logger log=Logger.getLogger(MyCenterControllerTest.class);
		@Autowired
	    private IDemandService demandService;
		@Autowired
	    private IDatafilteringService datafilteringService;
		@Autowired
		private IHFpService hfpService;
		@Autowired
		private IVisitRecordService visitRecordService;	
		@Autowired
		private HFdemandService hfdemandservice;
		@Autowired
		private IOrderDemandService orderdemandService;
		@Autowired
		private BaseLabelService baseLabelService;
		@Autowired
		private HFIndustryService industryService;
		@Autowired
		private HFPLabelService plabelService;
		@Autowired
		private BConverRecordService bconverRecordService;
		
		/* 
		 * 需求包列表
		 */
	    @ResponseBody
		@RequestMapping(value = "/getHfps")
		public HFPRes to_getHfps(HttpServletRequest  request) throws UnsupportedEncodingException{ 
	    	   log.info("______________________________className:"+Thread.currentThread() .getStackTrace()[1].getClassName());
	    	   log.info("______________________________methodName:"+Thread.currentThread() .getStackTrace()[1].getMethodName());
	    	   String demandname=StringUtil.objCovStr(request.getParameter("demandname"));
	    	   String beginreleasetime=StringUtil.objCovStr(request.getParameter("beginreleasetime"));
	    	   String endreleasetime=StringUtil.objCovStr(request.getParameter("endreleasetime"));
	    	   
	    	   String begincreatetime=StringUtil.objCovStr(request.getParameter("begincreatetime"));//创建时间开始时间
	    	   String endcreatetime=StringUtil.objCovStr(request.getParameter("endcreatetime"));
	    	   
	    	   
	    	   String par=StringUtil.objCovStr(request.getParameter("par"));
	    	   Integer currentPage=StringUtil.toInteger(request.getParameter("currentPage"));
	    	   String jfuid=StringUtil.objCovStr(request.getParameter("jfuid"));
	    	   
					HFPRes res=new HFPRes("Y","") ;
					try {
						Hfp hfp=new Hfp();
						hfp.setDemandname(demandname);
						hfp.setBeginreleasetime(beginreleasetime);
						hfp.setEndreleasetime(endreleasetime);
						hfp.setBegincreatetime(begincreatetime);
						hfp.setEndcreatetime(endcreatetime);
						if(null==currentPage){
							hfp.setCurrentPage(1);
						}else{
							hfp.setCurrentPage(currentPage);
						}
						Integer[] strzt=null;
						if(!StringUtil.isNull(par)){
	                        //发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回      4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  
							// 1-我的需求全部   2-我的需求审核中  3-我的需求进行中  4-我的需求结算中  5-我的需求已完成  6-异常需求   7-草稿箱
							if("1".equals(par)){
								strzt=new Integer[]{1,2,4,5,6};
								hfp.setPause(0);
							}
							if("2".equals(par)){//2-我的需求审核中
								strzt=new Integer[]{1};
								hfp.setPause(0);
							}
							if("3".equals(par)){ //3-我的需求进行中
								strzt=new Integer[]{2,4};
								hfp.setPause(0);
							}						
							if("4".equals(par)){//5-结算(付款中)
								strzt=new Integer[]{5};
								hfp.setPause(0);
							}
							if("5".equals(par)){//6-完成(已付款)
								strzt=new Integer[]{6};
								hfp.setPause(0);
							}
							if("6".equals(par)){// 6-异常需求  3-驳回  7-被关闭
								strzt=new Integer[]{3,7};
								hfp.setPause(1);//暂停
							}
							if("7".equals(par)){// 7-草稿箱
								strzt=new Integer[]{0};
								hfp.setPause(0);
							}
						}
						hfp.setStrzt(strzt);
						if(StringUtil.isNull(jfuid)){
							res.setCode(ERConst.ER_CODE_018);
					   		res.setMsg(ERConst.ER_CODE_018_VALUE); //请输入用户ID-jfuid
					   		log.error(ERConst.ER_CODE_018_VALUE);
							return res;
						}
						hfp.setJfuid(jfuid);
						hfp.setPar(par);
						res=hfpService.getHfps(hfp);
					} catch (Exception e) {
						//我使用了如下方法获得异常所在的文件,行号和方法:
						StackTraceElement stackTraceElement= e.getStackTrace()[0];// 得到异常棧的首个元素
						log.error("File="+stackTraceElement.getFileName());
						log.error("Line="+stackTraceElement.getLineNumber());
						log.error("Method="+stackTraceElement.getMethodName());
						log.error("Emsg="+e.toString());
						res.setCode("N");
						res.setMsg("操作失败");
					}
					return res;
					
		}

	    
		/* 
		 * 需求包列表 详情
		 */
	     @ResponseBody
		 @RequestMapping(method = RequestMethod.GET,value = "/{pid}/getDetailHfp")
		 public DetailRes to_getHfps(
				@PathVariable("pid")String pid) throws UnsupportedEncodingException{ 
	    	   log.info("______________________________className:"+Thread.currentThread() .getStackTrace()[1].getClassName());
	    	   log.info("______________________________methodName:"+Thread.currentThread() .getStackTrace()[1].getMethodName());
	    	 	DetailRes res=new DetailRes("Y","");
				/*
				 * 判断传入的参数是否为空
				 */
				try {
					HfpDetail resdetail =new HfpDetail();
					Hfp hf=new Hfp();
					hf.setPid(pid);
//					hf.setJfuid(jfuid);
					Hfp up=hfpService.getHfpById(hf);
					if(null!=up){
						resdetail.setPid(up.getPid());
						resdetail.setJfuid(up.getJfuid());
						resdetail.setDemandname(up.getDemandname());//需求名
						resdetail.setDemanddescription(up.getDemanddescription());//需求描述
						resdetail.setFdstate(up.getFdstate());//发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回      4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  8-暂停
						resdetail.setDemandtype(up.getDemandtype());//需求类型   1-套餐    2-个性化需求
						resdetail.setPackageid(up.getPackageid());//demandtype 为1-套餐时       对应h_f_package 的主键id
						resdetail.setServicetype(up.getServicetype());//业务类型      1-销售线索挖掘  2-数据加工  3-人工客服  
						resdetail.setIndustry(up.getIndustry());//成人教育   行业
						resdetail.setPaymentstandard(up.getPaymentstandard());//结算模式
						resdetail.setDemandpricetol(up.getDemandpricetol());//	包总价：45元
						resdetail.setReleasenum(up.getReleasenum());//	包发布量：2000条
						resdetail.setApplicationnum(up.getApplicationnum());//	包审核通过竞拍数量：1900条
						resdetail.setFinishnum(up.getFinishnum());//	包完成数量：1800条
						resdetail.setReleasetime(up.getReleasetime());//审核通过时间
						resdetail.setBegintime(up.getBegintime());//需求开始时间
						resdetail.setEndtime(up.getEndtime());//需求结束时间
						resdetail.setPleader(up.getPleader());//  套餐/项目负责人
						resdetail.setPphone(up.getPphone());//  套餐/负责人电话
						resdetail.setCreatetime(up.getCreatetime());//创建时间
						resdetail.setUpdatetime(up.getUpdatetime());//修改时间
						resdetail.setFinishtime(up.getFinishtime());//完成时间
						resdetail.setPause(up.getPause());//是否暂停 0-不暂停 1-暂停
						resdetail.setPausedescription(up.getPausedescription());//暂停原因
						resdetail.setOtherreport(up.getOtherreport());//其他附件url/目标客户名单
						resdetail.setXsxsurl(up.getXsxsurl());//销售线索url
						resdetail.setStandardoperation(up.getStandardoperation());//套餐/标准话术url
						resdetail.setProductaccessories(up.getProductaccessories());//套餐/标准话术url
						resdetail.setRemark(up.getRemark());
						resdetail.setPaymentmoney(up.getPaymentmoney());//结算金额
						resdetail.setTrusteeship(up.getTrusteeship());//是否托管 0-非托管 1-托管
						resdetail.setTwolevindustry(up.getTwolevindustry());
						
				       	 String ythreelevindustry=up.getThreelevindustry();
				         String threelevindustry="";
				         BigDecimal price=new BigDecimal("0");
				         //验证传入的json  自定义标签 是否合法   {"threelevindustry":"学科辅导","price":"10"}
				         if(!StringUtil.isNull(ythreelevindustry)){
							try {
								JSONObject jsonObject = JSONObject.fromObject(ythreelevindustry);
								threelevindustry=jsonObject.getString("threelevindustry");
								price=StringUtil.toBigDecimal(jsonObject.getString("price"));
							} catch (Exception e) {
								price=new BigDecimal("0");
								threelevindustry=up.getThreelevindustry();
							}
						 }
						resdetail.setThreelevindustry(threelevindustry);
						resdetail.setCustomlabel(up.getCustomlabel());
						resdetail.setPrice(price);
						//选择的标签
						HFPLabel lap=new HFPLabel();
						lap.setPid(resdetail.getPid());
						List<PLabel> selectedlist=plabelService.getSelectPLabel(lap);
						resdetail.setSelectedlist(selectedlist);
						
						List<DemandProgress> demandProgressList=new ArrayList<DemandProgress>();
						//销售线索挖掘查询新行业标签
						Map map = hfpService.getNewIndustryId(pid);
						//System.out.println(map);
						if(map!=null){
							resdetail.setNewIndustryId((String) map.get("nfiid"));
							resdetail.setNewIndustryPrice((BigDecimal) map.get("price"));
						}
						if("销售线索挖掘".equals(up.getServicetype())){
							List<areaCity> areaCityList=new ArrayList<areaCity>();
							HFDemand par=new HFDemand();
							par.setPid(pid);
							List<Object> lists=demandService.getDemandByPid(par);
							if(null!=lists&&lists.size()>0){
								int i=0;
								for (Object object : lists) {
									HFDemand d=(HFDemand)object;
									areaCity a=new areaCity();
									a.setOrderprice(d.getOrderprice());//子需求单价
									a.setOrderpricetol(d.getOrderpricetol());//子需求总价格
									a.setReleasenum(d.getReleasenum());//子需求发布量
									a.setTargecity(d.getTargecity());//子需求城市
									a.setCitydesc(d.getCitydesc());
									a.setSubdescription(d.getSubdescription());//子需求价格描述
									areaCityList.add(a);
									
									DemandProgress r=new DemandProgress();
									r.setReleasenum(d.getReleasenum());
									r.setOrderprice(d.getOrderprice());
									r.setOrderpriceTol(d.getOrderpricetol());
									r.setFishnum(d.getFishnum());
									r.setApplicationnum(d.getApplicationnum());
									r.setTargecity(d.getTargecity());
									demandProgressList.add(r);
									
								
									
									
									if(i==0){
										resdetail.setDemand(d.getDemand());//产品介绍
										resdetail.setProductname(d.getProductname());//产品名称
										resdetail.setTargethumen(d.getTargethumen());//目标人群
										resdetail.setBeginage(d.getBeginage());//对象年龄
										resdetail.setEndage(d.getEndage());//对象年龄
										resdetail.setCategory2(d.getCategory2());//获客渠道
										resdetail.setProductaccessories(d.getProductaccessories());//介绍附件
									}
									i++;
								}
								resdetail.setDemandProgressList(demandProgressList);
								resdetail.setAreaCityList(areaCityList);
								
								//Object o
								
							}
						}else if("数据加工".equals(up.getServicetype())){
							HFDatafiltering g=new HFDatafiltering();
							g.setPid(pid);
							List<Object> list=datafilteringService.getDatafilteringByPid(g);
							HFDatafiltering get=null;
							if(null!=list&&list.size()!=0){
								get=(HFDatafiltering)list.get(0);
								
								DemandProgress r=new DemandProgress();
								r.setReleasenum(get.getReleasenum());
								r.setOrderprice(get.getDemandprice());
								r.setOrderpriceTol(get.getDemandpricetol());
								r.setFishnum(get.getFinishnum());
								r.setApplicationnum(get.getApplicationnum());
								demandProgressList.add(r);
							}
							resdetail.setCleaningchannel(get.getCleaningchannel());
							resdetail.setPprice(up.getDemandprice());
						}
						res.setDetail(resdetail);
					}else{
						res.setCode("N");
						log.error("没有查到信息");
						res.setMsg("没有查到信息");
					}
				} catch (Exception e) {
					//我使用了如下方法获得异常所在的文件,行号和方法:
					StackTraceElement stackTraceElement= e.getStackTrace()[0];// 得到异常棧的首个元素
					log.error("File="+stackTraceElement.getFileName());
					log.error("Line="+stackTraceElement.getLineNumber());
					log.error("Method="+stackTraceElement.getMethodName());
					log.error("Emsg="+e.toString());
					res.setCode("N");
					res.setMsg("操作失败");
				}
				return res;
		}
		
	     /*
	      * 2.3.0版本 -- 给DBA发送邮件，提示有新的附件可下载
	      */
	     @ResponseBody
	     @RequestMapping(value="/emailDBA")
	     public JSONObject emailDBA(HttpServletRequest request) throws UnsupportedEncodingException{
	    	 request.setCharacterEncoding("utf-8");
	    	 JSONObject jsonObj = new JSONObject();
	    	 jsonObj.put("code", "Y");  //初始化   
	    	 jsonObj.put("msg","");
		     try{
		    		 
		    	 String pid=StringUtil.objCovStr(request.getParameter("pid"));
		    	 String demandname=StringUtil.objCovStr(request.getParameter("demandname"));
		    	 /*
		    	  * 发送邮件
		    	  */
		    	 //发送POST请求  
//		    	 String url="http://192.168.2.33:8091/gxcms/publicApi/email/upload/dfurl"; //访问33的服务器
		    	 String servceurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("back.servceurl"); //读Key.properties里的servceurl
		    	 String url=servceurl+"publicApi/email/upload/dfurl";
		    	 String jsonStr = httpUtil.sendPost(url,"pid="+pid+"demandname"+demandname);
		    	 JSONObject jsonObject = JSONObject.fromObject(jsonStr);
		    	 String codeemail = jsonObject.getString("code"); //code和msg:调用gxcms发邮件接口的返回参数
		    	 String msgemail = jsonObject.getString("msg");
		    	
		    	 if("Y".equals(codeemail)){
		    		 /*
		    		  * 发送 邮件内容(显示初始化jsonObj的code和msg值
		    		  */
		    	 }else{
		    		 jsonObj.put("code",codeemail);
		    		 jsonObj.put("msg",msgemail);
		    	 }
		    }catch (Exception e) {
	    		 jsonObj.put("code", "N");
	    		 jsonObj.put("msg", "邮件发送失败"+e.toString());
				 return jsonObj;
			}
		     
			return jsonObj;
	     }
	     
	     
  		 /* 
		 * 获取行业列表
		 * level:0-全部分类  1-一级分类  2 二级分类   3  三级分类
		 * parentfiid ：0-全部   (父id)
		 */
	     @SuppressWarnings("unchecked")
		 @ResponseBody
		 @RequestMapping(method = RequestMethod.GET,value = "/industry/{level}/{parentfiid}")
		 public JSONObject to_getIndustry(@PathVariable("level") String level,@PathVariable("parentfiid") String parentfiid) { 
		    	logBefore(logger,"获取行业列表");
		 		JSONObject industryObj=new JSONObject();
		 		industryObj.put("code","Y");
		 		industryObj.put("msg", "获取数据成功");
		 		
		 		
		 		if("null".equals(parentfiid)){
					industryObj.put("code","N");
					industryObj.put("msg","请输入正确的父id,查询所有父id下的行业,请传入0");
					return industryObj;
				}
		 		if(StringUtil.isNull(parentfiid)){
					industryObj.put("code","N");
					industryObj.put("msg","请输入要查询的父id,查询所有请传入0");
					return industryObj;
				}
				if(StringUtil.isNull(level)){
					industryObj.put("code","N");
					industryObj.put("msg","请输入行业分类");
					return industryObj;
				}else{
					if(!"0".equals(level)&&!"1".equals(level)&&!"2".equals(level)&&!"3".equals(level)){
						industryObj.put("code","N");
						industryObj.put("msg","行业分类输入不正确(请输入[0-全部分类]或者[1-一级分类]或者[2-二级分类]或者[3-二级分类])");
						return industryObj;
					}
				}
				//查询数据库数据
				try {
					HFIndustry label=new HFIndustry();
					if("0".equals(level)){
						label.setLevel(null);//查询全部级别的分类
					}else{
						label.setLevel(StringUtil.toInteger(level));//查询全部传入对应行业级别的分类
					}
					if("0".equals(parentfiid)){
						label.setParentfiid(null);
					}else{
						label.setParentfiid(parentfiid);
					}
					List<HFIndustry> industryList=industryService.getHFIndustry(label);
					industryObj.put("industryList",industryList);
				} catch (Exception e) {
					industryObj.put("code","N");
					industryObj.put("msg","获取数据失败");
					loger(logger,e);
				}
				return industryObj;
		 }   
	     
  		 /* 
		 * 获取标签列表
		 * type：1-免费标签  2-收费标签 
		 */
	     @SuppressWarnings("unchecked")
		 @ResponseBody
		 @RequestMapping(method = RequestMethod.GET,value = "/baseLabel/{labelType}")
		 public JSONObject to_getBaseLabel(@PathVariable("labelType") String labelType){ 
		    	logBefore(logger,"获取标签列表");
		 		JSONObject lableObj=new JSONObject();
		 		lableObj.put("code","Y");
		 		lableObj.put("msg", "获取数据成功");
				if(StringUtil.isNull(labelType)){
					lableObj.put("code","N");
					lableObj.put("msg","请输入标签类型");
					return lableObj;
				}else{
					if(!"1".equals(labelType)&&!"2".equals(labelType)){
						lableObj.put("code","N");
						lableObj.put("msg","标签类型输入不正确(请输入[1-免费标签]或者[2-收费标签] )");
						return lableObj;
					}
				}
				//查询数据库数据
				try {
					BaseLabel label=new BaseLabel();
					label.setLabelType(StringUtil.toInteger(labelType));
					label.setLabelState(1);//只查询启用状态的
					List<BaseLabel> lableList=baseLabelService.getBaseLabel(label);
					lableObj.put("lableList",lableList);
				} catch (Exception e) {
					lableObj.put("code","N");
					lableObj.put("msg","获取数据失败");
					loger(logger,e);
				}
				return lableObj;
		 }
	     
	     
	     
		     
	 	/* 
		 * 订单详情接口
		 */
	     @ResponseBody
		 @RequestMapping(method = RequestMethod.GET,value = "/{jfuid}/OrderDetail/{orderid}")
		 public OrderDetailRes to_getOrderDetail(HttpSession session,
				@PathVariable("orderid")String orderid,@PathVariable("jfuid") String jfuid) throws UnsupportedEncodingException{ 
	    	 	OrderDetailRes res=new OrderDetailRes("Y","");
				if(StringUtil.isNull(jfuid)){
					res.setCode(ERConst.ER_CODE_018);
			   		res.setMsg(ERConst.ER_CODE_018_VALUE); //请输入用户ID-jfuid
					return res;
				}
				if(StringUtil.isNull(orderid)){
					res.setCode(ERConst.ER_CODE_019);
			   		res.setMsg(ERConst.ER_CODE_019_VALUE); //订单id不能为空!
					return res;
				}
				/*
				 * 判断传入的参数是否为空
				 */
				try {
					HJOrderDemand user=new HJOrderDemand();
					user.setOrderid(orderid);
					user.setJfuid(jfuid);
					OrderDemandDetail up=orderdemandService.getOrderById(user);
					if(null==up){
						res.setCode(ERConst.ER_CODE_020);
				   		res.setMsg(ERConst.ER_CODE_020_VALUE); //没有查询到对应的查询信息
					}
					up.setXsxsurl("");
					up.setStandardoperation("");
					up.setOtherreport("");
					res.setOrderDetail(up);
				} catch (Exception e) {
					res.setCode("N");
					res.setMsg("操作失败");
				}
				return res;
		}
		
		     
			 
     	/* 
     	 * 竞拍订单接口
		 */
	     @ResponseBody
		 @RequestMapping(method = RequestMethod.POST, value = "/auctionOrder")
		 public addOrderDemandRes to_auctionOrder(orderDetailInput order) throws IOException { 
	    	 	addOrderDemandRes res=new addOrderDemandRes("Y", "");
	    	    String jfuid= order.getJfuid();
				if(StringUtil.isNull(jfuid)){
					res.setCode(ERConst.ER_CODE_018);
			   		res.setMsg(ERConst.ER_CODE_018_VALUE); //请输入用户ID-jfuid
					return res;
				}
				
				if(StringUtil.isNull(jfuid)){
					res.setCode(ERConst.ER_CODE_018);
			   		res.setMsg(ERConst.ER_CODE_018_VALUE); //请输入用户ID-jfuid
					return res;
				}
				HJOrderDemand u=new HJOrderDemand();
				if(!StringUtil.isNull(StringUtil.objCovStr(order.getSettlementmethod()))){////结算方法  1-客户效果付费  2-包坐席 
					u.setSettlementmethod(order.getSettlementmethod());
					if(1==order.getSettlementmethod()){// 1-客户效果付费
			    	    if(StringUtil.isNull(StringUtil.objCovStr(order.getAuctionnum()))){
			    	    	res.setCode(ERConst.ER_CODE_016);
					   		res.setMsg(ERConst.ER_CODE_016_VALUE); //竞拍数量不能为空!
							return res;
			    	    }
			    	    String explicittel=order.getExplicittel(); 
			    	    if(StringUtil.isNull(explicittel)){
			    	    	res.setCode(ERConst.ER_CODE_017);
					   		res.setMsg(ERConst.ER_CODE_017_VALUE); //外显号码不能为空!
							return res;
			    	    }
			    	    
						u.setExplicittel(order.getExplicittel());
						u.setAuctionnum(order.getAuctionnum());
						u.setUsemycompanydata(order.getUsemycompanydata());
					}
					if(2==order.getSettlementmethod()){//2-包坐席 
			    	    if(StringUtil.isNull(StringUtil.objCovStr(order.getExecutiondays()))){
			    	    	res.setCode(ERConst.ER_CODE_024);
					   		res.setMsg(ERConst.ER_CODE_024_VALUE); //执行天数不能为空!
							return res;
			    	    }
			    	    String seatsnum=StringUtil.objCovStr(order.getSeatsnum()); 
			    	    if(StringUtil.isNull(seatsnum)){
			    	    	res.setCode(ERConst.ER_CODE_025);
					   		res.setMsg(ERConst.ER_CODE_025_VALUE); //坐席数量!
							return res;
			    	    }
						u.setSeatsnum(order.getSeatsnum());
						u.setExecutiondays(order.getExecutiondays());
					}
					
				}else{
					res.setCode(ERConst.ER_CODE_026);
			   		res.setMsg(ERConst.ER_CODE_026_VALUE); //结算方法不能为空!
					return res;
					
				}
				try {
					u.setPricetol(order.getPricetol());
				    u.setTypeofinvoice(order.getTypeofinvoice());
					u.setOrderid(DateUtil.getIdDay());
					u.setJfuid(jfuid);
					u.setPid(order.getPid());
					u.setServicetype(order.getServicetype());
					u.setBiddingcommission(order.getBiddingcommission());
					u.setTypeofinvoice(order.getTypeofinvoice());
					u.setUsemycompanydata(order.getUsemycompanydata());
					u.setDemandid(order.getDemandid());
					u.setJdstate(1);//待审核
					u.setOrderprice(order.getOrderprice());
					
//					u.setJbfprice(order.getJbfprice());
					
					u.setCreatetime(DateUtil.getTime());
					u.setDistributionstate(0);//默认已经分配  分配到用户对应的
					u.setFishnum(0);
					u.setPaymentday("");
					u.setPause(0);
					
					u.setPaymentnum(0);
					u.setPaymentmoney(new BigDecimal("0.00"));
					u.setWhetherupload(0);
				    orderdemandService.ApplyOrderDemand(u);
				    res.setOrderId(u.getOrderid());
				} catch (Exception e) {
					res.setCode("N");
					res.setMsg("操作失败");
				}
				return res;
		}
		     
		
		 /* 
		 * 发包方  销售线索挖掘
		 * 发布一个需求操作方法/修改 
		 */
		@ResponseBody
		@RequestMapping(value = "/1_5/addOrUpdateCustomerDemand", method=RequestMethod.POST) 
		public  AddOrUpdateDemandRes to_addOrUpdateCustomerDemand(@RequestBody DemandPut d ) { 
			    AddOrUpdateDemandRes res=new AddOrUpdateDemandRes("Y","");

			    if(true){
			    	//return res;
			    }
				/*
				 * 判断传入的参数是否为空
				 */
				String msg=d.validate();
				if(!"".equals(msg)){
					res.setCode("N");
					res.setMsg(msg);
					return res;	
				}
				try {
					String pid=d.getPid();
					if(StringUtil.isNull(d.getJfuid())){
						res.setCode("N");
						res.setMsg("请输入用户id");
						return res;
					}
					
					//验证传入的json  自定义标签 是否合法
					if(!StringUtil.isNull(d.getCustomlabel())){
						try {
							JSONArray json = JSONArray.fromObject(d.getCustomlabel());
							d.setCustomlabel(json.toString());
						} catch (Exception e) {
							res.setCode("N");
							res.setMsg("自定义标签不是合法的JSON格式，重新输入");
							return res;
						}
					}
					
					//新增
					if(StringUtil.isNull(pid)){
							Hfp hfp=BeanUtils.demandPutToHfp(d,null);
							System.out.println(d.getNewIndustryId());
						    if("教育培训".equals(d.getCategory1())){
								//DemandPut 转换成 Hfp对象
								d.setDemandpricetol(null==d.getDemandpricetol()?new BigDecimal(0):d.getDemandpricetol());
								
								//在新行业中间表插入数据 by liu 2.4.1

								hfpService.insert_h_f_p_industry_new(hfp.getPid(), d.getNewIndustryId());
								//httpUtil.sendPost("", "");
								//这里调用http请求
								//在新行业中间表插入数据 by liu 2.4.1
								//return res;
								
								
						    }else{
						    	//设置总金额
								demandService.setAreaCityTol(d,hfp);
						    }
							
							hfpService.addHfp(hfp);
							res.setHfp(hfp);
							d.setPid(hfp.getPid());
							
							
							if("教育培训".equals(d.getCategory1())){
								//选中的收费标签List  
								List<BaseLabel> labelList=d.getLabelList();
								//插入标签中间表
								if(labelList!=null && !labelList.isEmpty()){
									int j=0;
									for (BaseLabel bl : labelList) {
										HFPLabel demandLabel=new HFPLabel();
										j++;
										demandLabel.setDlid(DateUtil.getIdDay()+StringUtil.objCovStr(j));
										demandLabel.setLabelId(bl.getLabelId());
										demandLabel.setPid(hfp.getPid());
										demandLabel.setCreatetime(DateUtil.getTime());
										plabelService.addPLabel(demandLabel);
									}
								}
						    }
							
							
							
							List<HFDemand> demandList=new ArrayList<HFDemand>();
							List<areaCity> areaCityList=d.getAreaCityList();
							if(areaCityList!=null && !areaCityList.isEmpty()){
								int i=0;
								for (areaCity areaCity : areaCityList) {
								    HFDemand copyDemand=new HFDemand();
								    copyDemand.setPid(d.getPid());
								    copyDemand.setPackageid(d.getPackageid());
								    copyDemand.setCategory1(d.getCategory1());
								    if("教育培训".equals(d.getCategory1())){
									    copyDemand.setTwolevindustry(d.getTwolevindustry());//教育培训   二级行业
									    copyDemand.setThreelevindustry(d.getThreelevindustry());//教育培训   三级行业
									    copyDemand.setCityprice(null==areaCity.getCityprice()?new BigDecimal(0):areaCity.getCityprice());
								    }
								    copyDemand.setCategory2(d.getCategory2());
								    copyDemand.setDemandtype(d.getDemandtype());
								    copyDemand.setDemand(d.getDemand());
								    copyDemand.setOrdername(d.getOrdername());
								    copyDemand.setTargethumen(d.getTargethumen());
								    copyDemand.setBeginage(d.getBeginage());
								    copyDemand.setEndage(d.getEndage());
								    copyDemand.setDistributionstate(0);//初始化后台数据状态
									copyDemand.setFishnum(0);
									copyDemand.setApplicationnum(0);
									copyDemand.setFdstate(d.getFdstate());
									copyDemand.setEndtime(d.getEndtime());
									copyDemand.setProductname(d.getProductname());
									copyDemand.setBegintime(d.getBegintime());
									copyDemand.setCategory3(d.getCategory3());//业务类型
									copyDemand.setDemanddescription(d.getDemanddescription());//需求介绍
									copyDemand.setStandardoperation(d.getStandardoperation());
									copyDemand.setOtherreport(d.getOtherreport());
									copyDemand.setPleader(d.getPleader());
									copyDemand.setPphone(d.getPphone());
									copyDemand.setJfuid(d.getJfuid());
									copyDemand.setXsxsurl(d.getXsxsurl());
									copyDemand.setProductaccessories(d.getProductaccessories());//产品附件
									copyDemand.setOtherreport(d.getOtherreport());//其他附件url/目标客户名单
									copyDemand.setXsxsurl(d.getXsxsurl());//销售线索url
									copyDemand.setStandardoperation(d.getStandardoperation());//套餐/标准话术url
									copyDemand.setUpdatetime("");
									copyDemand.setPaymentstandard(d.getPaymentstandard());
									copyDemand.setCitydesc(null==areaCity.getCitydesc()?"":areaCity.getCitydesc());
									
									copyDemand.setOrderprice(null==areaCity.getOrderprice()?new BigDecimal(0):areaCity.getOrderprice());
									copyDemand.setOrderpricetol(null==areaCity.getOrderpricetol()?new BigDecimal(0):areaCity.getOrderpricetol());
									
									copyDemand.setJbfprice(null==areaCity.getOrderprice()?new BigDecimal(0):areaCity.getOrderprice());
									copyDemand.setJbfpricetol(null==areaCity.getOrderpricetol()?new BigDecimal(0):areaCity.getOrderpricetol());
									
									
									copyDemand.setSubdescription(null==areaCity.getSubdescription()?"":areaCity.getSubdescription());
									copyDemand.setTargecity(null==areaCity.getTargecity()?"":areaCity.getTargecity());
									copyDemand.setReleasenum(null==areaCity.getReleasenum()?0:areaCity.getReleasenum());
									copyDemand.setProductaccessories(d.getProductaccessories());//产品附件
									i++;
									copyDemand.setDemandid(DateUtil.getIdDay()+StringUtil.objCovStr(i));
									copyDemand.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
									
									demandService.addDemands(copyDemand);
									demandList.add(copyDemand);
								}
							}
							res.setDemandList(demandList);
					}else{//修改
							//DemandPut 转换成 Hfp对象
							Hfp hf=new Hfp();
							hf.setPid(d.getPid());
							Hfp up=hfpService.getHfpById(hf);
							if(up!=null){
								BeanUtils.demandPutToHfp(d,up);
							    
								hfpService.updateHfp(up);
								res.setHfp(up);
								HFDemand par=new HFDemand();
								par.setPid(d.getPid());
								List<Object> uplist=demandService.getDemandByPid(par);
								if("教育培训".equals(d.getCategory1())){
									
					                //选中的hashMap
									//获取原来的选中的收费标签
									HFPLabel pars=new HFPLabel();
									par.setPid(hf.getPid());
									
									List<HFPLabel> allp=plabelService.getPLabel(pars);
									
									List<HFPLabel> allpdr=allp;//剩下的执行删除操作
									
									//选中的收费标签List  
									List<BaseLabel> labelList=d.getLabelList();
									//插入标签中间表
									if(labelList!=null && !labelList.isEmpty()){
										int j=0;
										for (BaseLabel bl : labelList) {
											boolean isadd=true;
											if(allp!=null && !allp.isEmpty()){
												for (HFPLabel selectbl : allp) {
													//找到相同的就不在新增   且从allpdr 中移除
													if(bl.getLabelId().equals(selectbl.getLabelId())){
														isadd=false;
														allpdr.remove(selectbl);
														break;//跳出当前循环不在继续下个循环
													}else{
														isadd=true;
													}
												}
											}
											//allp 中没有    labelList 中有就新增
											if(isadd){
												HFPLabel demandLabel=new HFPLabel();
												j++;
												demandLabel.setDlid(DateUtil.getIdDay()+StringUtil.objCovStr(j));
												demandLabel.setLabelId(bl.getLabelId());
												demandLabel.setPid(hf.getPid());
												demandLabel.setCreatetime(DateUtil.getTime());
												plabelService.addPLabel(demandLabel);
											}
										}
										
										// labelList 中没有    allp 中有就删除
										if(allpdr!=null && !allpdr.isEmpty()){
											for (HFPLabel delselectbl : allpdr) {
												plabelService.deletePLabel(delselectbl);
											}
										}
									}
								}
								
									if(null!=uplist){
										int a=d.getAreaCityList().size();
										int b=uplist.size();
										if(a==b){//不增不减直接修改
											for (int i = 0; i < b; i++) {
													HFDemand updem=(HFDemand)uplist.get(i);
													if(null!=updem){
														updem=BeanUtils.demandPutToHFDemand(updem,d,i);
														//DemandPut 转换成 HFDemand对象
														demandService.updateDemand(updem);
													}
											}
										}
										
										if(a>b){//有新增
											for (int i = 0; i < b; i++) {
													HFDemand updem=(HFDemand)uplist.get(i);
													if(null!=updem){
														updem=BeanUtils.demandPutToHFDemand(updem,d,i);
														//DemandPut 转换成 HFDemand对象
														demandService.updateDemand(updem);
													}
											}
											for (int j = 0; j < a-b; j++) {
													HFDemand updem1=(HFDemand)uplist.get(0);
													if(null!=updem1){
														updem1=BeanUtils.demandPutToHFDemand(updem1,d,b+j);
														//DemandPut 转换成 HFDemand对象
														demandService.updateDemand(updem1);
													}
											}
										}
										
										if(a<b){//有减少
											for (int i = 0; i < b; i++) {
												HFDemand updem=(HFDemand)uplist.get(i);
												if(i<a){
													if(null!=updem){
														updem=BeanUtils.demandPutToHFDemand(updem,d,i);
														//DemandPut 转换成 HFDemand对象
														demandService.updateDemand(updem);
													}
												}else{
													if(null!=updem){
														demandService.deleteDemand(updem);
													}
												}
											}
										}
									}else{
										int a=d.getAreaCityList().size();
										for (int i = 0; i < a; i++) {
											HFDemand copyDemand=new HFDemand();
											copyDemand.setPid(d.getPid());
										    copyDemand.setPackageid(d.getPackageid());
										    copyDemand.setCategory1(d.getCategory1());
										    copyDemand.setCategory2(d.getCategory2());
										    copyDemand.setDemandtype(d.getDemandtype());
										    copyDemand.setDemand(d.getDemand());
										    copyDemand.setOrdername(d.getOrdername());
										    copyDemand.setTargethumen(d.getTargethumen());
										    copyDemand.setBeginage(d.getBeginage());
										    copyDemand.setEndage(d.getEndage());
										    copyDemand.setDistributionstate(0);//初始化后台数据状态
											copyDemand.setFishnum(0);
											copyDemand.setApplicationnum(0);
											copyDemand.setFdstate(d.getFdstate());
											copyDemand.setEndtime(d.getEndtime());
											copyDemand.setProductname(d.getProductname());
											copyDemand.setBegintime(d.getBegintime());
											copyDemand.setCategory3(d.getCategory3());//业务类型
											copyDemand.setDemanddescription(d.getDemanddescription());//需求介绍
											copyDemand.setStandardoperation(d.getStandardoperation());
											copyDemand.setOtherreport(d.getOtherreport());
											copyDemand.setPleader(d.getPleader());
											copyDemand.setPphone(d.getPphone());
											copyDemand.setJfuid(d.getJfuid());
											copyDemand.setXsxsurl(d.getXsxsurl());
											copyDemand.setProductaccessories(d.getProductaccessories());//产品附件
											copyDemand.setOtherreport(d.getOtherreport());//其他附件url/目标客户名单
											copyDemand.setXsxsurl(d.getXsxsurl());//销售线索url
											copyDemand.setStandardoperation(d.getStandardoperation());//套餐/标准话术url
											copyDemand.setPaymentstandard(d.getPaymentstandard());
											copyDemand.setUpdatetime("");
											copyDemand.setProductaccessories(d.getProductaccessories());//产品附件
											copyDemand.setDemandid(DateUtil.getIdDay());
											copyDemand.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
											copyDemand=BeanUtils.demandPutToHFDemand(copyDemand,d,i);
											demandService.addDemand(copyDemand);
										}
									}
							}
					}
				} catch (Exception e) {
					res.setCode("N");
					res.setMsg("操作失败"+e.toString());
				}
				return res;
		 }
	
		
		 /* 
		 * 根据包id 删除  包和对应的需求信息
		 * 发布一个需求操作方法/修改 
		 */
		@ResponseBody
		@RequestMapping(value = "/1_5/{pid}/delDemandByPid", method =RequestMethod.GET) 
		public  String to_delCustomerDemand(@PathVariable("pid")String pid,HttpSession session) { 
				String code ="Y";
				try {
					Hfp p=new Hfp();
					p.setPid(pid);
					Hfp onehfp=hfpService.getHfpById(p);
					if(null!=onehfp){
						if("销售线索挖掘".equals(onehfp.getServicetype())){
							HFDemand d=new HFDemand();
							d.setPid(onehfp.getPid());
							demandService.deleteDemand(d);
						}else{
							HFDatafiltering g=new HFDatafiltering();
							g.setPid(onehfp.getPid());
							datafilteringService.deleteDatafiltering(g);
						}
						hfpService.deleteHfp(onehfp);//删除包
						
						//删除包对应的标签列表
						HFPLabel dellab=new HFPLabel();
						dellab.setPid(pid);
						List<HFPLabel> lableList=plabelService.getPLabel(dellab);
						if(lableList!=null && !lableList.isEmpty()){
							for (HFPLabel bl : lableList) {
								plabelService.deletePLabel(bl);
							}
						}
						//删除包对应的标签列表
					}
				} catch (Exception e) {
					code="N";
				}
				return code;
		 }
		
		
		 /* 
		 * 根据包id copy  包和对应的需求信息
		 * 发布一个需求操作方法/修改 
		 */
		@ResponseBody
		@RequestMapping(value = "/1_5/{pid}/copyDemandByPid", method =RequestMethod.GET) 
		public  AddOrUpdateDemandRes to_copyCustomerDemand(@PathVariable("pid")String pid,HttpSession session) { 
				AddOrUpdateDemandRes res=new AddOrUpdateDemandRes("Y","");
				try {
					Hfp p=new Hfp();
					p.setPid(pid);
					Hfp onehfp=hfpService.getHfpById(p);
					String newPid=DateUtil.getIdDay();
					onehfp.setDemandname("复制"+onehfp.getDemandname());
					onehfp.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
					onehfp.setPid(newPid);
					onehfp.setFdstate(0);
					onehfp.setPaymentmoney(new BigDecimal("0"));
					onehfp.setPaymentnum(0);
					onehfp.setFinishnum(0);
					onehfp.setApplicationnum(0);
					onehfp.setDistributionstate(0);//未分配
					onehfp.setPaymenttime("");
					onehfp.setReleasetime("");
					onehfp.setRemark("");
					onehfp.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
					onehfp.setFinishtime("");
					onehfp.setPaymentmoney(new BigDecimal(0.00));
					onehfp.setUpdatetime("");
					
					if(null!=onehfp){
						if("销售线索挖掘".equals(onehfp.getServicetype())){
							List<HFDemand> demandList=new ArrayList<HFDemand>();
							HFDemand d=new HFDemand();
							d.setPid(pid);
							List<Object> list=demandService.getDemandByPid(d);
							if(null!=list&&list.size()>0){
								int i=0;
								for (Object object : list) {
									i++;
									String istr=""+i;
									HFDemand hfd=(HFDemand)object;
									hfd.setDemandid(DateUtil.getIdDay()+istr);
									hfd.setOrdername("复制"+hfd.getOrdername()+istr);
									hfd.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
									hfd.setPid(hfd.getPid());
									
									
									hfd.setFdstate(0);
									hfd.setPaymenttime("");
									hfd.setFinishtime("");
									hfd.setFishnum(0);
									hfd.setApplicationnum(0);
									hfd.setDistributionstate(0);//未分配
									hfd.setPaymenttime("");
									hfd.setReleasetime("");
									hfd.setUpdatetime("");
									demandService.addDemand(hfd);
									demandList.add(hfd);
								} 
							}
							res.setDemandList(demandList);
						}else{
							HFDatafiltering g=new HFDatafiltering();
							g.setPid(pid);
							List<Object> list=datafilteringService.getDatafilteringByPid(g);
							if(null!=list&&list.size()>0){
								for (Object object : list) {
									HFDatafiltering hfd=(HFDatafiltering)object;
									hfd.setPcdid(DateUtil.getIdDay());
									hfd.setOrdername("复制"+hfd.getOrdername());
									hfd.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
									hfd.setPid(hfd.getPid());
									hfd.setFdstate(0);
									hfd.setPaymenttime("");
									hfd.setPaymentmoney(new BigDecimal(0.00));
									hfd.setFinishtime("");
									hfd.setFinishnum(0);
									hfd.setApplicationnum(0);
									hfd.setDistributionstate(0);//未分配
									hfd.setPaymenttime("");
									hfd.setReleasetime("");
									hfd.setUpdatetime("");
									datafilteringService.addDatafiltering(hfd);
									res.setHfdatafiltering(hfd);//只有一条
								} 
							}
						}
					}
					hfpService.addHfp(onehfp);//复制包
				} catch (Exception e) {
					res.setCode("N");
					res.setMsg("操作失败");
				}
				return res;
		 }
		
		
		 /* 
		 * 发包方  数据帅选
		 * 发布一个需求操作方法/修改 
		 */
		@ResponseBody
		@RequestMapping(value = "/1_5/addOrUpdateDatafiltering", method =RequestMethod.POST) 
		public  AddOrUpdateDatafilteringRes to_addOrUpdateDatafiltering(@RequestBody DatafilteringPut d) { 
			    AddOrUpdateDatafilteringRes res=new AddOrUpdateDatafilteringRes("Y","");
				/*
				 * 判断传入的参数是否为空
				 */
				String msg=d.validate();
				if(!"".equals(msg)){
					res.setCode("N");
					res.setMsg(msg);
					return res;	
				}
				try {
					String pid=d.getPid();
					
					if(StringUtil.isNull(d.getJfuid())){
						res.setCode("N");
						res.setMsg("请输入用户id");
						return res;
					}
//					d.setJfuid(jfuid);
					
					//新增
					if(StringUtil.isNull(pid)){
							//DatafilteringPut 转换成 Hfp对象
							Hfp hfp=BeanUtils.datafilteringPutToHfp(d,null);
							hfpService.addHfp(hfp);
							res.setHfp(hfp);
							d.setPid(hfp.getPid());
							HFDatafiltering g=BeanUtils.datafilteringPutToHFDemand(d);
							datafilteringService.addDatafiltering(g);
							res.setDatafiltering(g);
					}else{//修改
							Hfp hf=new Hfp();
							Hfp up=hfpService.getHfpById(hf);
							if(up!=null){
								BeanUtils.datafilteringPutToHfp(d,up);
								hfpService.updateHfp(up);
								res.setHfp(up);
								HFDatafiltering par=new HFDatafiltering();
								par.setPid(d.getPcdid());
			    				par.setJfuid(d.getJfuid());
								HFDatafiltering updem=datafilteringService.getDatafilteringById(par);
								if(null!=updem){
									datafilteringService.updateDatafiltering(updem);
							    }
								res.setDatafiltering(updem);
							}
					
					}
				
				} catch (Exception e) {
					res.setCode("N");
					res.setMsg("操作失败");
				}
				return res;
		}
		
		
		 /* 
		 * 首页记录来访来源和用户信息
		 */
		 @ResponseBody
		 @RequestMapping(value = "/1_5/visitRecord",method = RequestMethod.POST) 
		 public VisitRecordRes to_visitRecord(@RequestBody VisitRecordPut d,HttpSession session,HttpServletRequest request) { 
			 VisitRecordRes res=new VisitRecordRes("Y","");
			 try {
				VisitRecord user=new VisitRecord();
				user.setVisitid(DateUtil.getIdDay());
				user.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				user.setReferrer(d.getReferrer());
				user.setIp(CusAccessObjectUtil.getIpAddress(request));
				user.setRemark("");
				user.setJfuid("");
				visitRecordService.addVisitRecord(user);
				res.setVisitRecord(user);
			 } catch (Exception e) {
				res.setCode("N");
				res.setMsg("操作失败");
			}
			return res;	
		 }
		 
		 
		 
		 
		    /*
			 * 新增
			 */
			@ResponseBody
			@RequestMapping(method=RequestMethod.POST,value="/bconverRecord")
		    public JSONObject addbconverRecord(@RequestBody String bconverRecord){
				JSONObject object=new JSONObject();
				BConverRecord i=null;
				try {
					i =(BConverRecord) JSONObject.toBean(JSONObject.fromObject(bconverRecord), BConverRecord.class); 
				} catch (Exception e) {
					object.put("code","N");
					object.put("msg","json格式转换(BConverRecord)失败");
					return object;
				}
				object.put("code","Y");
				object.put("msg","");
				try {
					i.setCrid(DateUtil.getIdDay());
				    i.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				    bconverRecordService.addBConverRecord(i);
				} catch (Exception e) {
					object.put("code", "N");
					object.put("msg", "新增数据失败");
				}
				object.put("bconverRecord", i);
				return object;
		    }
		 
		 
		 /*
		  * 新增修改 订单 包表数据  （没有包的生成包 有包 将包id插入订单和子需求表）
		  * pid 需求包ID
		 */
		 @ResponseBody
		 @RequestMapping("/orderdTest")
		 public TestRes getHFdemandpid() throws UnsupportedEncodingException {
			 TestRes res=new TestRes("Y", "");
			 try {
				 //查询需求表中 pid 为空的  循环 生成pid 加入pid
				 HFDemand u1=new HFDemand();
				 HFDemandRes asdf= demandService.getDemandList(u1);
				 List d=asdf.getResults();
				 StringBuffer addhfpnotice=new StringBuffer("新增的包id为：");
				 List<Hfp> addhfpList=new ArrayList<Hfp>();
				 if(null!=d){
					 for (Object object : d) {
						 HFDemand p=(HFDemand)object;
						 if(StringUtil.isNull(p.getPid())){
							 //新增包 获取 包id  插入需求中
							 	Hfp hfp=new Hfp();
								hfp.setPid(DateUtil.getIdDay()); 
							    hfp.setDemandname(p.getOrdername());
								hfp.setDemanddescription(p.getDemanddescription());
								hfp.setFdstate(p.getFdstate());
								hfp.setJfuid(p.getJfuid());
								hfp.setDemandtype(p.getDemandtype());
								hfp.setPackageid(p.getPackageid());
								hfp.setServicetype(p.getCategory3());
								hfp.setFavorableway(p.getFavorableway());
								hfp.setPaymentstandard(p.getPaymentstandard());
								hfp.setBegintime(p.getBegintime());
								hfp.setEndtime(p.getEndtime());
								hfp.setIndustry(p.getCategory1());
								hfp.setProductaccessories(p.getProductaccessories());//产品附件
								hfp.setOtherreport(p.getOtherreport());//其他附件url/目标客户名单
								hfp.setXsxsurl(p.getXsxsurl());//销售线索url
								hfp.setStandardoperation(p.getStandardoperation());//套餐/标准话术url
								hfp.setPaymentmoney(p.getPaymentmoney());
								hfp.setPaymentnum(p.getPaymentnum());
								hfp.setFinishnum(p.getFishnum());
								hfp.setApplicationnum(p.getApplicationnum());
								hfp.setDistributionstate(p.getDistributionstate());//未分配
								hfp.setPaymenttime(p.getPaymenttime());
								hfp.setReleasetime(p.getReleasetime());
								hfp.setUpdatetime(p.getUpdatetime());
								hfp.setCreatetime(p.getCreatetime());
								hfp.setRemark(p.getRemark());
								hfp.setPause(p.getPause());
								hfp.setPausedescription(p.getPausedescription());
							    hfpService.addHfp(hfp);
							    p.setPid(hfp.getPid());
							    addhfpnotice.append(hfp.getPid()+",");
							    demandService.updateDemand(p);
							    addhfpList.add(hfp);
						 }
					 }
				 }
				 res.setAddhfpList(addhfpList);
				 addhfpnotice.append("总增加和修改共"+addhfpList.size()+"条数据!");
				 res.setAddhfpnotice(addhfpnotice);
				 
				 
				 
				 
				 
				 List<HJOrderDemand> updateHJOrderDemandList=new ArrayList<HJOrderDemand>();
				 StringBuffer updateHJOrderDemandnotice=new StringBuffer("更新的订单id为：");
				 HJOrderDemand user=new HJOrderDemand();
				 HFDemandRes re=orderdemandService.getOrders(user);
				 List a=re.getResults();
				 if(null!=a){
					 for (Object object : a) {
						 HJOrderDemand b=(HJOrderDemand)object;
						 //订单表pid等于空的情况
						 if(StringUtil.isNull(b.getPid())){
							 //取得对应需求的pid  
							 if(!StringUtil.isNull(b.getDemandid())){
								 HFDemand u=new HFDemand();
								 u.setDemandid(b.getDemandid());
								 HFDemand resdemand=demandService.getDemandById(u);
								 if(null!=resdemand){
									 //订单对应的需求pid为空继续查询
									 if(StringUtil.isNull(resdemand.getPid())){
										 
									 }else{
										//订单对应的需求pid不为空则更新pid
										 b.setPid(resdemand.getPid());
										 if(StringUtil.isNull(b.getServicetype())){
											 b.setServicetype("销售线索挖掘");
										 }
										 updateHJOrderDemandnotice.append(b.getOrderid()+",");
										 orderdemandService.modifyOrderDemand(b);
										 updateHJOrderDemandList.add(b);
									 }
								 }
							 }
						 }else{
							 //订单 对应的需求id 为空  暂不做处理
						 }
					}
				 }
				 res.setUpdateHJOrderDemandList(updateHJOrderDemandList);
				 updateHJOrderDemandnotice.append("总共"+updateHJOrderDemandList.size()+"条数据!");
				 res.setUpdateHJOrderDemandnotice(updateHJOrderDemandnotice);
				 
			} catch (Exception e) {
				res.setCode("N");
				res.setMsg("获取数据失败"+e.toString());
			}
			return res;
		 }
}
