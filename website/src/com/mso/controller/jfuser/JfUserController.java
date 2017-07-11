package com.mso.controller.jfuser;

import java.io.UnsupportedEncodingException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mso.controller.base.BaseController;
import com.mso.model.Event;
import com.mso.model.HFUserDetail;
import com.mso.model.HJUserDetail;
import com.mso.model.JfUser;
import com.mso.model.SmsCode;
import com.mso.res.EventRes;
import com.mso.res.IntentiontouristsRes;
import com.mso.res.SmsRes;
import com.mso.res.UserRes;
import com.mso.res.getCuserIdRes;
import com.mso.res.getCuserRes;
import com.mso.service.HJfUserDetailService;
import com.mso.service.IEventService;
import com.mso.service.ITemplateService;
import com.mso.service.IUserService;
import com.mso.task.CompletionStatisticsService;
import com.mso.utils.CommonUtil;
import com.mso.utils.CusAccessObjectUtil;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;
import com.mso.utils.DateUtil;
import com.mso.utils.DesUtils;
import com.mso.utils.ERConst;
import com.mso.utils.JsDESUtil;
import com.mso.utils.PageResults;
import com.mso.utils.SmsUtils;
import com.mso.utils.StringUtil;
import com.mso.utils.httpUtil;

@Controller
public class JfUserController extends BaseController {
	
	@Autowired
    private IUserService userService;

	@Autowired
    private IEventService eventService;
	@Autowired
    private CompletionStatisticsService completionStatisticsService;
	
	@Autowired
    private ITemplateService templateService;
	 @Autowired
     private HJfUserDetailService hjfUserDetailService;
	
	@ResponseBody
	@RequestMapping(value="/user_toDemandSettlement")
	public ModelAndView ToDemandSettlement(HttpSession session)throws Exception{
		ModelAndView mv = this.getModelAndView();
		mv.setViewName("jsp/home_bak/dsq.jsp");
		return mv;
	}
	
	/*
	 * 订单 需求   完成量/  状态 修改   定时器手动触发
	 * modifDemandSettlementStatus
	 */
	@ResponseBody
    @RequestMapping(value="/user_DemandSettlement")  
    public  UserRes modifDemandSettlementStatus(HttpSession session) { 
    	String code="Y";
    	String msg="";
    	UserRes res = new UserRes(code,msg);  
    	try {
    				completionStatisticsService.modifDemandSettlementStatus();
		} catch (Exception e) {
			code="N";
			res.setCode(code);
			res.setMsg("异常啦!"+e.toString());
		}
    	res.setMsg(msg);
		return res;
    }  
	
	
	/*
	 * 订单 需求   完成量/  状态 修改   定时器手动触发
	 * modifDemandSettlementStatus
	 */
	@ResponseBody
    @RequestMapping(value="/user_releaseNews")  
    public  JSONObject releaseNews(HttpSession session) { 
		JSONObject object=new JSONObject();
		object.put("code", "Y");
		object.put("msg", "");
    	try {
    		completionStatisticsService.newsRelease();
		} catch (Exception e) {
			object.put("code","N");
			object.put("msg", "异常啦!"+e.toString());
		}
		return object;
    }  
	/*
	 * 更新模板基本数据信息  
	 * modifDemandSettlementStatus
	 */
	@ResponseBody
    @RequestMapping(value="/user_UpdateTemplate")  
    public  UserRes userUpdateTemplate(HttpSession session) { 
    	String code="Y";
    	String msg="";
    	UserRes res = new UserRes(code,msg);  
    	try {
    		templateService.getClueTemplateUrl("",true);
    		templateService.getSpeakTemplateUrl("",true);
		} catch (Exception e) {
			code="N";
			res.setCode(code);
			res.setMsg("异常啦!"+e.toString());
		}
		return res;
    }  
	

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
	*  用户登录
	*     "jfuname":$("input[name=userName]").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
	            "remember":document.getElementById("remember").value,
	            "jfupassword":$("input[name=passWord]").val()//密码(密文)用于登录(6-20 位    区分大小写)
	*/
	@ResponseBody
    @RequestMapping(value="/user_toLogin")  
    public  UserRes toLogin(JfUser addput,HttpSession session) { 
    	String code="Y";
    	String msg="";
    	UserRes res = new UserRes(code,msg);  
    	try {
        	String jfunameLowerCase=addput.getJfuname().toLowerCase();
        	addput.setJfunamelowercase(jfunameLowerCase);
    		res=userService.login(addput);
    		if("Y".equals(res.getCode())){
    			
				String jfuid="";
				//pid 不为空  当前账号为子账号  查询父账号公司名
				if(!StringUtil.isNull(res.getPid())){
					jfuid=res.getPid();
				}else{
					jfuid=res.getJfuid();
				}
           		
          		//修改登录次数
          		JfUser user1=new JfUser();
          		user1.setJfuid(jfuid);
	    		userService.editzUser(user1);
//			    1.根据用户名查询用户信息
//				JfUser us=userService.getUserByFuid(jfuid,res.getJfutype());
	    		
        		Map<String, String> usermap=new HashMap<String, String>();
//        		usermap.put("logontimes",us.getLogontimes()+"");//登录次数  1 为第一次登录  数据库为1 这里为0
        		usermap.put("logontimes",res.getLogontimes()+"");//登录次数  1 为第一次登录  数据库为1 这里为0
        		usermap.put("jfuid",res.getJfuid());//接包方/发包方 id
        		usermap.put("jfutype",res.getJfutype());//1-发包方   2-接包方
        		usermap.put("jfuname",res.getJfuname());//用户名/昵称-用于登录(3-20 位    不区分大小写)
        		usermap.put("jfupassword",res.getJfupassword());//密码(密文)用于登录(6-20 位    区分大小写)
        		usermap.put("pid",res.getPid());//是否是子账号
        		usermap.put("jfustate",res.getJfustate()+"");//接包方/发包方-当前用户信息的状态      0-(提交中)初始状态(注册未完善资料)   1-已分配(注册未完善资料)    2-跟踪处理中(注册,完善资料验证中)  3-驳回-继续完善      4-审核通过处理完成(注册完善资料通过)    
        		usermap.put("jfudisable",res.getJfudisable()+"");//1-启用  2-停用
        		usermap.put("jfumobilephone",res.getJfumobilephone());//手机号
        		usermap.put("invitationcode",res.getInvitationcode());//手机号
				String showName="";
			
				Object o=hjfUserDetailService.getFUserById(jfuid,res.getJfutype());
				if("1".equals(res.getJfutype())){
					HFUserDetail user=(HFUserDetail)o;
					if(StringUtil.isNull(user.getRealname())){
						showName=user.getJfuname();
					}else{
						showName=user.getRealname();	
					}
					res.setShowName(showName);
					res.setHeadurls(user.getHeadurls());
					res.setTrusteeship(user.getTrusteeship());
					res.setCompemail(user.getCompemail());
					res.setRealname(user.getRealname());
					res.setCompname(user.getCompname());
					res.setBrandname(user.getBrandname());
					res.setTrusteeship(user.getTrusteeship());
				}else{
					HJUserDetail user=(HJUserDetail)o;	
					if(StringUtil.isNull(user.getRealname())){
						showName=user.getJfuname();
					}else{
						showName=user.getRealname();	
					}
					res.setShowName(showName);
					res.setHeadurls(user.getHeadurls());
					res.setTrusteeship(0);
					res.setCompemail(user.getCompemail());
					res.setRealname(user.getRealname());
					res.setCompname(user.getCompname());
					res.setBrandname(user.getBrandname());
					res.setTrusteeship(user.getTrusteeship());
				}
        		if("1".equals(addput.getRemember())){
        			res.setRemember("1");
        			session.setAttribute("remember",addput.getRemember());
        			session.setAttribute("username",addput.getJfuname());//手机号
        			session.setAttribute("password",addput.getJfupassword());//手机号
        		}else{
        			res.setRemember("0");
        			session.removeAttribute("remember");//手机号
        			session.removeAttribute("username");//手机号
        			session.removeAttribute("password");//手机号
        		}
        		usermap.put("trusteeship",StringUtil.objCovStr(res.getTrusteeship()));//
        		usermap.put("compemail",res.getCompemail());//
        		usermap.put("realname",res.getRealname());//
        		usermap.put("compname",res.getCompname());//
          		session.setAttribute("usermap",usermap);//手机号
    		}
		} catch (Exception e) {
			code="N";
			res.setCode(code);
			res.setMsg("登录失败"+e.toString());
		}
		return res;
    }  
	
	


   
   
	
	
	
		/*
		*  用户登录退出
		*/
		@ResponseBody
		@RequestMapping(value="/user_toLoginOut")
		public ModelAndView toLoginOut(HttpSession session,HttpServletResponse response)throws Exception{
			 response.setContentType("text/html");
	         //servlet页面默认是不缓存的
	         //本页面允许在浏览器端或缓存服务器中缓存，时限为20秒。
	         //20秒之内重新进入该页面的话不会进入该servlet的
	         response.setHeader("Cache-Control","no-cache,must-revalidate");
	         response.setHeader("Pragma","no-cache");
	         response.setDateHeader("Expires",0);
	         
			//清空  登录的session
			session.removeAttribute("usermap");//手机号
			ModelAndView mv =this.initUser(session,"user_toLoginOut");
			mv.addObject("page","user_toLoginOut");
//			mv.setViewName("forward:html/index.html");
			mv.setViewName("forward:jsp/home2/index.jsp");
			return mv;
		}
	
	
		
		
		/*
		*  用户登录退出
		*/
		@ResponseBody
		@RequestMapping(value="/loginOut")
		public IntentiontouristsRes loginOut(HttpSession session,HttpServletResponse response)throws Exception{
			String code="Y";
	    	String msg="";
	    	IntentiontouristsRes res = new IntentiontouristsRes(code,msg);  
	    	try {
				 response.setContentType("text/html");
		         //servlet页面默认是不缓存的
		         //本页面允许在浏览器端或缓存服务器中缓存，时限为20秒。
		         //20秒之内重新进入该页面的话不会进入该servlet的
		         response.setHeader("Cache-Control","no-cache,must-revalidate");
		         response.setHeader("Pragma","no-cache");
		         response.setDateHeader("Expires",0);
		         
				 //清空  登录的session
				 session.removeAttribute("usermap");//手机号
			} catch (Exception e) {
				code="N";
				res.setMsg("异常啦!"+e.toString());
			}
	    	res.setCode(code);
			return res;
		}
	    
		
		
		
		
		
		
		
		
		
		/*
		*  取得子账号
		*/
		@ResponseBody
	    @RequestMapping(value="/user_getCuser")  
		/*
	    var data={
	        "pid":父id
	        "pageNo"第几页 
	        "currentPage" 当前页
	    };
		*/
	    public  getCuserRes user_getCuser(JfUser addput,HttpSession session,HttpServletResponse response,HttpServletRequest request) { 
			response.setHeader("Access-Control-Allow-Origin", "*");
	    	String code="Y";
	    	String msg="";
	    	getCuserRes res = new getCuserRes(code,msg); 
	    	if(StringUtil.isNull(addput.getPid())){
	    		res.setCode(code);
				res.setMsg("请传入需要查询的pid");
				return res;
	    	}
	    	try {
	    		JfUser user=new JfUser();
	    		//主要是这个不能少
				String pageNo=addput.getPageNo()+"";
				if(StringUtil.isNull(pageNo)){
					pageNo="1";
				}
				int pageNoint=Integer.parseInt(pageNo);
				user.setPageNo(pageNoint);
				String currentPage=addput.getCurrentPage()+"";
				if(StringUtil.isNull(currentPage)){
					currentPage="1";
				}
				int currentPageint=Integer.parseInt(currentPage);
				user.setCurrentPage(currentPageint);
	    		user.setJfuid(StringUtil.objCovStr(addput.getJfuid()));
	    		user.setJfutype("2");
	    		user.setPid(addput.getPid());
	    		PageResults r=userService.getUsers(user);
	    		res.setUserList(r.getResults());
//	    		res.setPageStr(r.getPageStr());
	    		res.setPageNo(pageNo);
	    		res.setCurrentPage(currentPage);
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  
		
		
		
		
		
		/*
		*  取得user_getCuserById
		*/
		@ResponseBody
	    @RequestMapping(value="/user_getCuserById")  
		/*
	    var data={
	        "fuid":账号id
	    };
		*/
	    public  getCuserIdRes user_getCuserById(JfUser addput,HttpSession session,HttpServletResponse response,HttpServletRequest request) { 
			response.setHeader("Access-Control-Allow-Origin", "*");
	    	String code="Y";
	    	String msg="";
	    	getCuserIdRes res = new getCuserIdRes(code,msg); 
	    	if(StringUtil.isNull(addput.getJfuid())){
	    		res.setCode("N");
	    		res.setMsg("请输入子账号id");
	    		return res;
	    	}
	    	try {
	    		JfUser user=new JfUser();
	    		user.setJfuid(StringUtil.objCovStr(addput.getJfuid()));
	    		user.setJfutype("2");
	    		JfUser s=userService.getUserByFuid(addput.getJfuid(),"2");
	    		res.setJfuid(s.getJfuid());
	    		res.setPid(s.getPid());
	    		res.setJfuname(s.getJfuname());
	    		res.setJfupassword(s.getJfupassword());
	    		res.setJfustate(s.getJfustate());
	    		res.setJfudisable(s.getJfudisable());
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  

		
		
		

		/*
		*  用户注册  修改子账号
		*/
		@ResponseBody
	    @RequestMapping(value="/user_toUpdateDisable")  
		/*
	    var data={
	        "jfuid":子账号id
	        "jfudisable"  1-启用  2-停用
	        "jfuname" jfuname
	        "jfupassword" jfupassword
	    };
		*/
	    public  getCuserIdRes toUpdateDisable(JfUser addput,HttpSession session,HttpServletResponse response) { 
			response.setHeader("Access-Control-Allow-Origin", "*");
	    	String code="Y";
	    	String msg="";
	    	getCuserIdRes res = new getCuserIdRes(code,msg);
	    	if(StringUtil.isNull(addput.getJfuid())){
	    		res.setCode("N");
	    		res.setMsg("请输入子账号id");
	    		return res;
	    	}
	    	try {
	    		JfUser user=new JfUser();
	    		user.setJfuid(StringUtil.objCovStr(addput.getJfuid()));
	    		if(!StringUtil.isNull(addput.getJfuname())){
	    			user.setJfuname(StringUtil.objCovStr(addput.getJfuname()));
	    		}
	    		if(!StringUtil.isNull(addput.getJfupassword())){
	        		String fupasswordDes=new String(DesUtils.encrypt(addput.getJfupassword()));
	        		user.setJfupassword(fupasswordDes);
	    		}
	    		if(!StringUtil.isNull(StringUtil.objCovStr(addput.getJfudisable()))){
	    			user.setJfudisable(addput.getJfudisable());
				}
	    		user.setJfutype("2");//接包方子账号
	    		userService.editCUser(user);
	    		res.setJfudisable(addput.getJfudisable());
	    		res.setJfuid(StringUtil.objCovStr(addput.getJfuid()));
	    		res.setJfuname(StringUtil.objCovStr(addput.getJfuname()));
	    		res.setJfupassword(StringUtil.objCovStr(addput.getJfupassword()));
	    		res.setJfustate(addput.getJfustate());
	    		res.setJfudisable(addput.getJfudisable());
	    		res.setPid(addput.getPid());
			} catch (NullPointerException e) {
				code="N";
				res.setCode(code);
				res.setMsg("没有找到此账号！");
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  
	
	
		
		
		/*
		*  为每个没有邀请码的用户账号生成邀请码
		*/
		@ResponseBody
	    @RequestMapping(value="/user_toSetInvitationcode")  
	    public  UserRes toSetInvitationcode(JfUser addput,HttpSession session,HttpServletResponse response) { 
			response.setHeader("Access-Control-Allow-Origin", "*");
	    	String code="Y";
	    	String msg="";
	    	UserRes res = new UserRes(code,msg);  
	    	try {
	    		res=userService.setInvitationcode();
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  
		
		
		/*
		*  用户注册  新增子账号
		*/
		@ResponseBody
	    @RequestMapping(value="/user_toRegoster")  
		/*
        var data={
            "jfutype":$("input[name=registerType]:checked").is("#input1")?"1":"2",  //1-发包方   2-接包方   3 子账号
            "jfuname":$("input[name=userName]").val(),//用户名-用于登录(3-20 位    不区分大小写)
            "realname":$("input[name=userRealName]").val(),///昵称-用于登录(3-20 位    不区分大小写)
            "jfupassword":$("input[name=passWord]").val(),//密码(密文)用于登录(6-20 位    区分大小写)
            "compname":$("input[name=companyName]").val(),//公司名称
            "jfuinvitationcode":$("input[name=inviteCode]").val()//邀请码
            "jfumobilephone":$("input[name=phoneNumber]").val(),//手机号  x
            "compemail":"",//邮箱
            "realname":""//您的姓名  注册可以插入jfuname
            "usersouce":"0"
        };
		 */
	    public  UserRes toRegoster(JfUser addput,HttpSession session,HttpServletResponse response) { 
			response.setHeader("Access-Control-Allow-Origin", "*");
	    	String code="Y";
	    	String msg="";
	    	UserRes res = new UserRes(code,msg);  
	    	try {
	    		//默认官网注册来源
	    		if(null==addput.getUsersouce()){
	    			addput.setUsersouce(0);
	    		}
	    		addput.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
	    		addput.setJfustate(0);//初始化状态
	    		addput.setDistributionstate(0);
	    		if(!"3".equals(addput.getJfutype())){
	    			addput.setJfudisable(1);//1-启用  2-停用
	    		}else{//子账号
//	    			HashMap<String, String> usermap= (HashMap<String, String>) session.getAttribute("usermap");
//	    			String pid="";
//	    			if(usermap!=null){
//	    				pid=usermap.get("jfuid");
//	    			}
	    			if(StringUtil.isNull(addput.getPid())){
	    				res.setCode("N");
	    	    		res.setMsg("请输入父账号id");
	    	    		return res;
	    			}
//	    			addput.setPid(pid);
	    			addput.setJfutype("2");//接包方子账号
	    			addput.setJfumobilephone(addput.getJfuname());//手机号不能为空
	    		}
	           	String jfunameLowerCase=addput.getJfuname().toLowerCase();
	        	addput.setJfunamelowercase(jfunameLowerCase);//
	    		String fupasswordDes=new String(DesUtils.encrypt(addput.getJfupassword()));
	    		addput.setJfupassword(fupasswordDes);
	    		addput.setJfuid(DateUtil.getIdDay());
	    		/*
	    		 * 1.验证登录名的重复性
	    		 * 2.验证手机号的重复性
	    		 * 3.插入用户基本信息表
	    		 * 4.插入用户从信息表
	    		 * 5.修改超级管理员   用户审核count表  加1 
	    		 */
	    		res=userService.register(addput);
			} catch (Exception e) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e.toString());
			}
			return res;
	    }  
		
		
		
		
		/*
		 * 5.修改超级管理员   用户审核count表  加1
		 */
		@ResponseBody
	    @RequestMapping(value="/user_toModEvent")  
	    public  EventRes toModEvent(Event e) { 
	    	String code="Y";
	    	String msg="";
	    	EventRes res = new EventRes(code,msg);  
	    	try {
	    		/*
	    		 * 5.修改超级管理员   用户审核count表  加1 
	    		 */
	    		res=eventService.addUpEvent(e);
			} catch (Exception e1) {
				code="N";
				res.setCode(code);
				res.setMsg("异常啦!"+e1.toString());
			}
			return res;
	    }  
		
	
		
		
		
		
		
		
		
		   /**
			* 注册/找回密码 获取验证码  jfuname==手机号
			* type:短信验证码类型   1 是注册   2 是找回密码 
			* jfuname:手机号
			*/
		   @ResponseBody
		   @RequestMapping(value="/user/telCode" ,method=RequestMethod.POST)  
		   public  SmsRes toGetCode(HttpServletRequest request) { 
			    String jfuname=StringUtil.objCovStr(request.getParameter("jfuname"));
			    jfuname = JsDESUtil.getInstance().strDec_v1(jfuname);
			   // System.out.println(jfuname);
			    Integer type=StringUtil.toInteger(StringUtil.objCovStr(request.getParameter("type")));
			   	String code="Y";
			   	String msg="";
			   	SmsRes res = new SmsRes(code,msg); 
			    String  referer = request.getHeader("referer");
//			    Enumeration e =request.getHeaders("Referer");
//			    String a;
//			    System.out.println(e.hasMoreElements());
//			    if(e.hasMoreElements()){
//			    a=(String)e.nextElement();
//			    System.out.println(a);
//			    }
//			    
//			    //(String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("domain")
				//  System.out.println(referer);
				  //请求来源不对时return
				  if(referer==null||!referer.contains((String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("domain"))){
					  return res;
				  }
				  //System.out.println("呵呵呵呵");
			   	
			   	
			   	
			   	
			    //手机号码 空验证
				if(StringUtil.isNull(jfuname)){
					res.setCode(ERConst.ER_CODE_013);
			   		res.setMsg(ERConst.ER_CODE_013_VALUE); 
					return res;
				}
				
				//jfuname = JsDESUtil.getInstance().strDec_v1(jfuname);
				
				
				
				//手机号码 验证
				if(!CommonUtil.isMobile(jfuname)){
					res.setCode(ERConst.ER_CODE_011);
			   		res.setMsg(ERConst.ER_CODE_011_VALUE); 
					return res;
				}
				
			   	res.setJfuname(jfuname);
			   	res.setType(type);
			  	String smscode="";
			   	try {
					JfUser u=new JfUser();
					u.setJfuname(jfuname);
					JfUser uun=userService.getUserByUserName(u);
					String content="";
				 	String username=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("sms.username");
				   	String userpwd=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("sms.userpwd");
				   	String conptitle=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("sms.conptitle");
				   	smscode=DateUtil.getCode();//验证码生成
					//注册  1.验证注册的重复性
					if(1==type){
						if(uun!=null){
							res.setCode(ERConst.ER_CODE_002);
							res.setMsg(ERConst.ER_CODE_002_VALUE);
							return res;
						}
//						【眸事网】
					   	content="眸事网用户注册验证码："+smscode+"。请确认该申请是您本人操作！"+conptitle;
	//				   	眸事网用户注册验证码：000000。请确认该申请是您本人操作！
					}else{
	//					验证码为：000000。本验证码用于找回密码，请确认该申请是您本人操作！
					   	content="验证码为："+smscode+"。本验证码用于找回密码，请确认该申请是您本人操作！"+conptitle;
						//注册  1.验证jfuname是否存在
						if(uun==null){
							res.setCode(ERConst.ER_CODE_003);
					   		res.setMsg(ERConst.ER_CODE_003_VALUE);
					   		return res;
						}
					}
				   	/*
				   	 * 发送验证码
				   	 */
			   		String resdduanxin=new SmsUtils().sendSms(username,userpwd,jfuname,content);
//			   		{"balance":"2061480","chargCount":1,"deduction":"70","failedNum":0,"pkgId":"","replyCode":1,"replyMsg":"发送成功!","succeedNum":1}
			   		JSONObject jsonObject = JSONObject.fromObject(resdduanxin);  
			        String replyCode = jsonObject.getString("replyCode");  
			        String replyMsg = jsonObject.getString("replyMsg");  
			        if(!"1".equals(replyCode)){
			        	res.setCode(ERConst.ER_CODE_028);
				   		res.setMsg(ERConst.ER_CODE_028_VALUE+replyMsg);
				   		return res;
			        }
			   	  	/*
				   	 * 发送验证码
				   	 */
			   		SmsCode smsd=new SmsCode();
			   		smsd.setIp(CusAccessObjectUtil.getIpAddress(request));
			   		smsd.setContent(content);
			   		smsd.setSmscode(smscode);
			   		smsd.setType(type);
			   		smsd.setIsuse(1);
			   		smsd.setUsername(jfuname);
			   		smsd.setCreatetime(DateUtil.getTime());
			   		smsd.setUpdatetime("");
			   		userService.addSmsCode(smsd);
			   		/**
				   	* 插入操作
				   	**/
				} catch (Exception e1) {
					res.setCode("N");
					res.setMsg("验证码发送失败"+e1.toString());
				}
		  		res.setSmsCode(smscode);
				return res;
		   }
		   
		   
		   /**
			*  获取验证码  的key放到session中
			* type:短信验证码类型   1 是注册   2 是找回密码 
			* jfuname:手机号
			*/
		   @ResponseBody
		   @RequestMapping(value="/user/codeutil" ,method=RequestMethod.POST)  
		   public  JSONObject toGetCode_key(HttpServletRequest request) { 
			   JSONObject json = new JSONObject();
			  
				return json;
		   }		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   /**
			* 找回密码 邮箱获取验证码   发送邮件接口
			* jfuname:手机号
			* email:邮箱地址
		    * @throws UnsupportedEncodingException 
			*/
		   @ResponseBody
		   @RequestMapping(value="/user/emailCode")  
		   public  SmsRes toGetEmailCode(HttpServletRequest request) throws UnsupportedEncodingException { 
			    request.setCharacterEncoding("utf-8");
			    String jfuname=StringUtil.objCovStr(request.getParameter("jfuname"));
			   	String code="Y";
			   	String msg="";
			   	SmsRes res = new SmsRes(code,msg); 
			    //手机号码 空验证
				if(StringUtil.isNull(jfuname)){
					res.setCode(ERConst.ER_CODE_013);
			   		res.setMsg(ERConst.ER_CODE_013_VALUE); 
					return res;
				}
				//手机号码 空验证
				if(!CommonUtil.isMobile(jfuname)){
					res.setCode(ERConst.ER_CODE_011);
			   		res.setMsg(ERConst.ER_CODE_011_VALUE); 
					return res;
				}
				String email="";
				JfUser par=new JfUser();
				par.setJfuname(jfuname);
				JfUser s=userService.getUserByUserName(par);
				if(null!=s){
					email=hjfUserDetailService.selectHJfUser(s);
				}else{
					res.setCode(ERConst.ER_CODE_003);
			   		res.setMsg(ERConst.ER_CODE_003_VALUE);
			   		return res;
				}
				res.setEmail(email);
			    //邮箱格式验证 essen.zhang@mso-china.com
				if(!CommonUtil.checkEmail(email)){
					res.setCode(ERConst.ER_CODE_027);
			   		res.setMsg(ERConst.ER_CODE_027_VALUE); 
					return res;
				}
				String smscode=DateUtil.getCode();
			   	try {
				   	String servceurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("sms.servceurl");
				   	String findpwdurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("sms.findpwdurl");
				   	String jfuname12=new String(DesUtils.encrypt(jfuname));
				   	String url=findpwdurl+"?jfuname="+jfuname12+"&type=3&smsCode="+smscode;
				   	String urldes=new String(DesUtils.encrypt(url));
				   	
				
				   	/*
				   	 * 发送邮件
				   	 */
				    //发送 POST 请求
				    String jsonStr=httpUtil.sendPost(servceurl,
				    		"username="+jfuname+"&url="+java.net.URLEncoder.encode(urldes,"utf-8")+"&title="+java.net.URLEncoder.encode("找回密码","utf-8")+"&email="+email);
				    JSONObject jsonObject = JSONObject.fromObject(jsonStr);  
			        String codeemail = jsonObject.getString("code");  
			        String msgemail = jsonObject.getString("msg");  
			        if("Y".equals(codeemail)){
			        	/*
					   	 * 发送验证码  插入验证码
					   	 */
				   		SmsCode smsd=new SmsCode();
				   		smsd.setIp(CusAccessObjectUtil.getIpAddress(request));
				   		smsd.setContent("收件人邮箱："+email+"  账号:"+jfuname+" url:"+url);
				   		smsd.setSmscode(smscode);//验证码/生成
				   		smsd.setUsername(jfuname);
				   		smsd.setEmail(email);
				   		smsd.setType(3);
				   		smsd.setIsuse(1);
				   		smsd.setCreatetime(DateUtil.getTime());
				   		smsd.setUpdatetime("");
				   		userService.addSmsCode(smsd);
			        }else{
			        	res.setCode(codeemail);
						res.setMsg(msgemail);
			            /*  E001 账号不能为空  E003 邮件标题不能为空 E004 邮箱格式不正确 Y邮件发送成功 E005 邮件发送失败
			    			json.put("code", "E001");
			    			json.put("msg", "账号不能为空");
			    			json.put("code", "E002");
			    			json.put("msg", "url不能为空");
			    			json.put("code", "E003");
			   				json.put("msg", "邮件标题不能为空");
			   				json.put("code", "E004");
	    					json.put("msg", "邮箱格式不正确");
		   				    json.put("code", "Y");
	  					    json.put("msg", "邮件发送成功");
	  						json.put("code", "E005");
	   						json.put("msg", "邮件发送失败");
			    		*/
			        }
				} catch (Exception e) {
					res.setCode("N");
					res.setMsg("邮箱发送失败"+e.toString());
				}
			   	res.setJfuname(jfuname);
			   	res.setType(3);
		   		res.setSmsCode(smscode);
				return res;
		   }

		   
		   
		   /**
			* 验证验证码 
			*/
		   @ResponseBody
		   @RequestMapping(value="/user/validateCode")  
		   public  SmsRes toValidateCode(HttpServletRequest request) { 
			    String jfuname=StringUtil.objCovStr(request.getParameter("jfuname"));
			    String smscode=StringUtil.objCovStr(request.getParameter("smscode"));
			    Integer type=StringUtil.toInteger(StringUtil.objCovStr(request.getParameter("type")));
			   	String code="Y";
			   	String msg="";
			   	SmsRes res = new SmsRes(code,msg); 
			   	
				if(StringUtil.isNull(smscode)){
					res.setCode(ERConst.ER_CODE_012);
			   		res.setMsg(ERConst.ER_CODE_012_VALUE);
					return res;
				}
			   	if(!CommonUtil.isMobile(jfuname)){
			   		res.setCode(ERConst.ER_CODE_011);
			   		res.setMsg(ERConst.ER_CODE_011_VALUE);
			   		return res;
			   	}
			   	try {
				   	/**
				   	* 查询操作
				   	**/
			   		SmsCode smsd=new SmsCode();
			   		smsd.setSmscode(smscode);
			   		smsd.setUsername(jfuname);
			   		smsd.setType(type);
			   		SmsCode recode=userService.getSmsCodeByUname(smsd);
			   		if(null==recode){
			   			res.setCode(ERConst.ER_CODE_014);
				   		res.setMsg(ERConst.ER_CODE_014_VALUE);
				   		return res;
			   		}else{
			   			res.setSmsCode(smscode);
			   			res.setJfuname(jfuname);
					   	res.setType(type);
			   		}
				} catch (Exception e) {
					code="N";
					res.setCode(code);
					res.setMsg("验证验证码失败"+e.toString());
				}
				return res;
		   }
		   
		   
		   
		   
		   
		   
		   /**
			* 手机验证或者邮件验证后  密码重置方法
		    * @throws Exception 
			*/
		   @ResponseBody
		   @RequestMapping(value="/user/resetPassword")  
		   public  SmsRes toSetPassword(SmsCode s) throws Exception { 
			   	String code="Y";
			   	String msg="";
			   	String jfuname="";
			   	//type =3 的时候  需要解密
			   	if(3==s.getType()){
			   		String a=s.getUsername();
			   	    //邮件发送的地址	
			   		jfuname=DesUtils.decrypt(a);
			   	}else{
			   		jfuname=s.getUsername();
			   	}
			   	
			   	
			   	SmsRes res = new SmsRes(code,msg); 
				if(StringUtil.isNull(jfuname)){
					res.setCode(ERConst.ER_CODE_012);
			   		res.setMsg(ERConst.ER_CODE_012_VALUE);
					return res;
				}
			   	if(!CommonUtil.isMobile(jfuname)){
			   		res.setCode(ERConst.ER_CODE_011);
			   		res.setMsg(ERConst.ER_CODE_011_VALUE);
			   		return res;
			   	}
			   	
			    
			   	try {
			   		
				   	/**
				   	* 查询操作  是否存在此用户
				   	**/
			   		JfUser user=new JfUser();
			   		user.setJfuname(jfuname);
			   		JfUser re=userService.getUserByUserName(user);
					if(re==null){
						res.setCode(ERConst.ER_CODE_003);
				   		res.setMsg(ERConst.ER_CODE_003_VALUE);
				   		return res;
					}
			   		
				   	/**
				   	* 查询验证码的可用性 
				   	**/
			   		SmsCode smsd=new SmsCode();
			   		smsd.setSmscode(s.getSmscode());
			   		smsd.setUsername(jfuname);
			   		smsd.setType(s.getType());
			   		SmsCode recode=userService.getSmsCodeByUname(smsd);
			   		if(null==recode){
			   			res.setCode(ERConst.ER_CODE_015);
				   		res.setMsg(ERConst.ER_CODE_015_VALUE);
				   		return res;
			   		}else{
//			   			DateUtil.getAfterDay(days, dates);
			   		}
			   		//修改密码
			   		String paworddes=new String(DesUtils.encrypt(s.getPassword()));
			   		re.setJfupassword(paworddes);
			   		userService.updateUser(re);
			   		
		   			//修改验证码使用状态
		   			recode.setIsuse(2);//使用
		   			userService.updateSmsCode(recode);
		   	    
		   			res.setSmsCode(recode.getSmscode());	
		   			res.setJfuname(recode.getUsername());	
		   			res.setType(recode.getType());	
				} catch (Exception e) {
					code="N";
					res.setCode(code);
					res.setMsg("密码重置失败"+e.toString());
				}
				return res;
		   }
		   
		   
		   
}
