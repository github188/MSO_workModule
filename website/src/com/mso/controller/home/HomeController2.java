package com.mso.controller.home;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mso.controller.base.BaseController;
import com.mso.model.HFUserDetail;
import com.mso.model.HJUserDetail;
import com.mso.service.HJfUserDetailService;
import com.mso.utils.StringUtil;

@Controller
public class HomeController2 extends BaseController {
	 @Autowired
     private HJfUserDetailService hjfUserDetailService;
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
	 * 访问登首页
	 */
	@RequestMapping(value="/home2_toIndex")
	public ModelAndView toIndex(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toIndex");
		mv.setViewName("jsp/home2/index.jsp");
		mv.addObject("page", "home2_toIndex");
		return mv;
	}
	/*
	 * 访问登首页
	 */
	@RequestMapping(value="/index.htm")
	public ModelAndView toIndex2()throws Exception{
		ModelAndView mv =new ModelAndView();
		mv.setViewName("redirect:index.html");
		return mv;
	}
	
	
	/*
	 * 访问登首页
	 */
	@RequestMapping(value="/index2.htm")
	public ModelAndView toIndex3()throws Exception{
		ModelAndView mv =new ModelAndView();
		mv.setViewName("redirect:html/index.html");
		return mv;
	}
	
	/*
	 * 注册
	 */
	@RequestMapping(value="/home2_toRegister")
	public ModelAndView toRegister(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toRegister");
		mv.setViewName("jsp/home2/register.jsp");
		mv.addObject("page", "home2_toRegister");
		return mv;
	}
	/*
	 * 登录
	 */
	@RequestMapping(value="/home2_toLogin")
	public ModelAndView toLogin(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toLogin");
		String remember=(String) session.getAttribute("remember");//记住登录   1
		String username=(String) session.getAttribute("username");//
		String password=(String) session.getAttribute("password");//
		
		if(StringUtil.isNull(remember)){
			remember="0";
		}
		mv.addObject("remember", remember);
		mv.addObject("username", username);
		mv.addObject("password", password);
		
		mv.setViewName("jsp/home2/login.jsp");
		mv.addObject("page", "home2_toLogin");
		return mv;
	}
	/*
	 * 案例中心
	 */
	@RequestMapping(value="/home2_toCase")
	public ModelAndView toCase(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toCase");
		mv.setViewName("jsp/home2/case.jsp");
		mv.addObject("page", "home2_toCase");
		return mv;
	}
	/*
	 * 关于我们
	 */
	@RequestMapping(value="/home2_toAbout")
	public ModelAndView toAbout(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toAbout");
		mv.setViewName("jsp/home2/about.jsp");
		mv.addObject("page", "home2_toAbout");
		return mv;
	}
	/*
	 * 发包方
	 */
	@RequestMapping(value="/home2_toCustomer")
	public ModelAndView toCustomer(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toCustomer");
		mv.setViewName("jsp/home2/customer.jsp");
		mv.addObject("page", "home2_toCustomer");
		return mv;
	}
	/*
	 * 接包方
	 */
	@RequestMapping(value="/home2_toSupplier")
	public ModelAndView toSupplier(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toSupplier");
		mv.setViewName("jsp/home2/supplier.jsp");
		mv.addObject("page", "home2_toSupplier");
		return mv;
	}
	
	/*
	 * 访问进入 帮助中心  页面
	 */
	@RequestMapping(value="/home2_toHelp")
	public ModelAndView toHelp(HttpSession session)throws Exception{
		ModelAndView mv =this.initUser(session,"home2_toHelp");
		mv.setViewName("jsp/home2/help.jsp");
		mv.addObject("page", "home2_toHelp");
		return mv;
	}

}
