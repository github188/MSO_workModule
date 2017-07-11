package com.mso.controller.upload;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;
import com.mso.utils.httpUtil;


@Controller
public class AliController extends BaseController{
	
	@ResponseBody
    @RequestMapping("/ali.do")
    public String ali(HttpServletRequest request,HttpServletResponse response) throws UnsupportedEncodingException {
        request.setCharacterEncoding("UTF-8");
        String uId = request.getParameter("uid");
		String type = request.getParameter("type");
		String servceurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("back.servceurl");
		servceurl=servceurl+"ali.do";
	    String jsonStr=httpUtil.sendGet(servceurl,"uid="+uId+"&type="+type);
	    return jsonStr.replaceAll("http:", "https:");
    }
	@ResponseBody
    @RequestMapping("/aliOrder.do")
    public String aliOrder(HttpServletRequest request,HttpServletResponse response) throws UnsupportedEncodingException{
        request.setCharacterEncoding("UTF-8");
		String orderId = request.getParameter("orderId");
		String type = request.getParameter("type");
		String servceurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("back.servceurl");
		servceurl=servceurl+"aliOrder.do";
	    String jsonStr=httpUtil.sendGet(servceurl,"orderId="+orderId+"&type="+type);
	    
	    return jsonStr.replaceAll("http:", "https:");
    }
	@ResponseBody
    @RequestMapping("/aliOrder/customerDelve")
    public String customerDelve(HttpServletRequest request,HttpServletResponse response) throws UnsupportedEncodingException{
        request.setCharacterEncoding("UTF-8");
		String stid = request.getParameter("stid");
		String type = request.getParameter("type");
		String servceurl=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("back.servceurl");
		servceurl=servceurl+"aliOrder/customerDelve";
	    String jsonStr=httpUtil.sendGet(servceurl,"stid="+stid+"&type="+type);
	    return jsonStr.replaceAll("http:", "https:");
    }
}
