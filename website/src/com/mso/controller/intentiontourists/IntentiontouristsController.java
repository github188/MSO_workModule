package com.mso.controller.intentiontourists;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.JTourists;
import com.mso.model.Tourists;
import com.mso.res.IntentiontouristsRes;
import com.mso.service.IJTouristsService;
import com.mso.service.ITouristsService;
import com.mso.utils.DateUtil;

@Controller
public class IntentiontouristsController extends BaseController {
	
	@Autowired
    private IJTouristsService jtouristsService;
	public IJTouristsService getJtouristsService() {
		return jtouristsService;
	}
	public void setJtouristsService(IJTouristsService jtouristsService) {
		this.jtouristsService = jtouristsService;
	}



	@Autowired
    private ITouristsService touristsService;
	public ITouristsService getTouristsService() {
		return touristsService;
	}
	public void setTouristsService(ITouristsService touristsService) {
		this.touristsService = touristsService;
	}
	
	
	
		/*
		*  发包方  插入意向客户信息
		*/
		@ResponseBody
	    @RequestMapping(value="/intentiontourists_tofAddJson")
		/*
		 var data={
                "registerType":"1",//发包方
                "phoneNumber":$("#phoneNumber input").val(),//手机号码				
                "companyName":$("#companyName input").val(),//公司名称
                "userName":$("#userName input").val(),//您的称呼
                "outsourcingType":$("#outsourcingType i.active").attr("value"),//行业
                "businessType":$("#businessType input:checked+span").text(),//业务类型
                "outsourcingDemand":$("#outsourcingDemand textarea").val(),//您的需求
                "inviteCode":$("#inviteCode input").val()//您的邀请码
            };(@RequestJsonParam("list") List<Integer> list
		 */
	    public  IntentiontouristsRes tofAddJson(Tourists addput) { 
	    	String code="Y";
	    	String msg="";
	    	IntentiontouristsRes res = new IntentiontouristsRes(code,msg);  
	    	try {
	    		addput.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
	    		addput.setFitstate(0);//初始化状态
	    		addput.setFitid(DateUtil.getIdDay());
	    		touristsService.addTourists(addput);
			} catch (Exception e) {
				System.out.println(e.toString());
				code="N";
				res.setMsg("异常啦!"+e.toString());
			}
	    	res.setCode(code);
			return res;
	    }  
		
		
		
		
		

		
		
		
		
		
		
		
		/*
		*  接包方  插入意向客户信息
		*/
		@ResponseBody
	    @RequestMapping(value="/intentiontourists_tojAddJson")  
		/*
		 var data={
		    "registerType":"2",//接包方
            "jmcid":$("#agencyType i.active").attr("value"),//对应   接包方机构类别(j_mechanism_category)jmcid	
            "jitname":$("#userName input").val(),//称呼-姓名
            "jitmobilephone":$("#phoneNumber input").val(),//手机号码
            "jitorganization":$("#agencyName input").val(),//机构名称
            "jitinvitationcode":$("#inviteCode input").val()//邀请码
            }
		 */
	    public  IntentiontouristsRes tojAddJson(JTourists addput) { 
	    	String code="Y";
	    	String msg="";
	    	IntentiontouristsRes res = new IntentiontouristsRes(code,msg);  
	    	try {
	    		addput.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
	    		addput.setJitstate(0);//初始化状态
	    		addput.setJitid(DateUtil.getIdDay());
	    		jtouristsService.addJTourists(addput);
			} catch (Exception e) {
				code="N";
				res.setMsg("异常啦!"+e.toString());
			}
	    	res.setCode(code);
			return res;
	    }  
		
}
