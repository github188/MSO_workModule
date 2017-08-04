package com.stylefeng.guns.modular.mso.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.modular.mso.quartz.QuartzEventService;
@Controller
@RequestMapping("/quartz")
public class QuartzController extends BaseController{
	
	@Autowired
	private QuartzEventService quartzEventService;
   
    @RequestMapping("/1")
    @ResponseBody
    public String startquartz(HttpServletRequest req,Model model) throws Exception {
    	quartzEventService.addJob("com.stylefeng.guns.modular.mso.quartz.QuartzJobExample", 15, 40); 
    	return "11111";
    }
    @RequestMapping("/1/a")
    @ResponseBody
    public String pausequartz1(HttpServletRequest req,Model model) throws Exception {
    	quartzEventService.pauseJob("com.stylefeng.guns.modular.mso.quartz.QuartzJobExample");
    	return "11111aaaaa";
    }
    @RequestMapping("/1/b")
    @ResponseBody
    public String resumequartz1(HttpServletRequest req,Model model) throws Exception {
    	quartzEventService.resumeJob("com.stylefeng.guns.modular.mso.quartz.QuartzJobExample");
    	return "11111bbbbbb";
    }
    
    
    
    
    
    
    @RequestMapping("/2")
    @ResponseBody
    public String startquartz2(HttpServletRequest req,Model model) throws Exception {
    	quartzEventService.addJob("com.stylefeng.guns.modular.mso.quartz.QuartzJobExample2", 15, 40); 
    	return "22222";
    }

}
