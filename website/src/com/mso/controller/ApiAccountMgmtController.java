package com.mso.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.JfUser;
import com.mso.res.ContracteeAccInfoRes;
import com.mso.service.HJfUserDetailService;
import com.mso.service.IUserService;
import com.mso.utils.StringUtil;

@Controller
public class ApiAccountMgmtController extends BaseController{
	
	@Autowired
    private IUserService userService;
	@Autowired
	private HJfUserDetailService hjfUserDetailService;
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.POST, value="/contracteeAccountMgmt")
	public ContracteeAccInfoRes getContracteeAccInfo(HttpSession session, HttpServletRequest request){  //或穿参JfUser contractee
		ContracteeAccInfoRes res=new ContracteeAccInfoRes("Y","");
		String jfuid=StringUtil.objCovStr(request.getParameter("jfuid")); //发包方用户id
		if(StringUtil.isNull(jfuid)){
			res.setCode("N");
			res.setMsg("请输入发包方用户id");
			return res;
		}
		
		String realname=StringUtil.objCovStr(request.getParameter("realname"));
		String compname=StringUtil.objCovStr(request.getParameter("compname"));
		
		if(StringUtil.isNull(compname)){
			res.setCode("N");
			res.setMsg("请输入公司名称");
			return res;
		}
		String brandname=StringUtil.objCovStr(request.getParameter("brandname"));
		String compaddr=StringUtil.objCovStr(request.getParameter("compaddr"));
		String contacts=StringUtil.objCovStr(request.getParameter("contacts"));
		Integer contactsphone=StringUtil.toInteger(request.getParameter("contactsphone"));
		String compemail=StringUtil.objCovStr(request.getParameter("compemail"));
		
		String complicense=StringUtil.objCovStr(request.getParameter("complicense"));
		String comptaxcer=StringUtil.objCovStr(request.getParameter("comptaxcer"));
		String comporgcode=StringUtil.objCovStr(request.getParameter("comporgcode"));
		
		//操作数据库
		JfUser user=userService.getUserByFuid(jfuid,null); //返回”主表”h_jf_user的用户信息
		if("1"==user.getJfutype()){
			user.setBrandname(brandname);
			user.setCompname(compname);
			user.setCompaddr(compaddr);
			user.setCompemail(compemail);
			user.setRealname(realname);
			user.setContacts(contacts);
			user.setComplicense(complicense);
			user.setComptaxcer(comptaxcer);
			user.setComporgcode(comporgcode);
			hjfUserDetailService.editHJfUser(user);
			
		}else if("2"==user.getJfutype()){
			hjfUserDetailService.addHJfUser(user);
		}else{
			res.setCode("N");
			res.setMsg("用户信息不存在");
		}
		res.setInfo(user);
		return res;
	}
	
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET, value="/user/{jfuid}")
	public JSONObject getContracteeAccInfoByid(@PathVariable("jfuid")String jfuid){  //或穿参JfUser contractee
		JSONObject O=new JSONObject();
		if(StringUtil.isNull(jfuid)){
			O.put("code", "N");
			O.put("msg", "请输入发包方用户id");
			return O;
		}
		JfUser user=userService.getUserByFuid(jfuid,null);
		
		O.put("user",user);
		return O;
	}
	
	
		
	
	   
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
