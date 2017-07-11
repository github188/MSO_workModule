package com.mso.controller.blogroll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.Blogroll;
import com.mso.res.BlogrollRes;
import com.mso.service.BlogrollService;


@Controller
public class BlogrollController extends BaseController{
	
	@Autowired
	BlogrollService blogrollService;

	public BlogrollService getBlogrollService() {
		return blogrollService;
	}

	public void setBlogrollService(BlogrollService blogrollService) {
		this.blogrollService = blogrollService;
	}

	/**
	 * 查询友情链接列表
	 */
	@SuppressWarnings("static-access")
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/blogroll")
	public BlogrollRes blogroll(){
		this.logBefore(this.logger, "查询友情链接列表");
		BlogrollRes bres = new BlogrollRes("Y","");
		try{
			
			Blogroll b = new Blogroll();
			List<Blogroll> blogrolllist = blogrollService.getBlogroll(b);
			bres.setBlogrollList(blogrolllist);
			
		} catch (Exception e) {
			bres.setCode("N");
			bres.setMsg("获取数据失败");
		}
		this.logAfter(this.logger);
		return bres;  //前端在js里循环list    <img="url" 就可显示 
		//写Hql对应返回的BlogrollRes对象   
		
	}
	
	/*
	 * 查询"单个"友情链接    再开个controller接口blogrollbyid --> (service Dao层还是调上面同样的service dao接口)
	 */
	
	
	
	
	
	
	
	
	
	
	
	
}