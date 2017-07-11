/**
 * 
 */
package com.mso.controller.toppost;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.Toppost;
import com.mso.res.ToppostRes;
import com.mso.service.ToppostService;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;

/**
 *  置顶文章列表
 * 
 */
@Controller
public class ToppostController extends BaseController{
	
	
	@Autowired
	ToppostService toppostService;

	public ToppostService getToppostService() {
		return toppostService;
	}

	public void setToppostService(ToppostService toppostService) {
		this.toppostService = toppostService;
	}
	
	/**
	 * 查询置顶文章列表
	 */
	@SuppressWarnings("static-access")
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/toppost")
	public ToppostRes toppost(){
		
		this.logBefore(this.logger, "查询置顶文章列表");
		ToppostRes tres = new ToppostRes("Y","");
		try{
			
			Toppost toppost = new Toppost();
			List<Toppost> toppostList = toppostService.listToppost(toppost); //toppost封装所有的传参    
			
			if(toppostList!=null&&toppostList.size()!=0){
			for(Toppost t: toppostList){
				String topphotourl = t.getTopphotourl();
			    String topphotourlPrefix =(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("topphotourl");
				t.setTopphotourl(topphotourlPrefix+topphotourl); //拼一个key.properties里面的域名前缀:http://res.mshuoke.com/
				//toppostList.add(t); 修改循环里对象的属性，不能add到list里
			  }
			}
			tres.setToppostList(toppostList);
	
		} catch (Exception e) {
			e.printStackTrace();
			tres.setCode("N");
			tres.setMsg("获取数据失败");
		}
		this.logAfter(this.logger);
		
		return tres;  
		
	}
	
	
	
	
	
	
	
	
	
	
	

}
