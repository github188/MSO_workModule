/**
 * 
 */
package com.mso.controller.recommend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.RecommendArticle;
import com.mso.model.Toppost;
import com.mso.res.RecommArticleRes;
import com.mso.service.RecommendService;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;

/**
 *  推荐阅读 列表页
 */
@Controller
public class RecommendController extends BaseController{
	
	@Autowired
	RecommendService recommendService;

	public RecommendService getRecommendService() {
		return recommendService;
	}

	public void setRecommendService(RecommendService recommendService) {
		this.recommendService = recommendService;
	}
	  
	/**
	 *  查询  推荐阅读 列表页
	 * 
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/recommend")
	public RecommArticleRes recommend(){
		
		this.logBefore(this.logger, "查询推荐阅读 列表");
		RecommArticleRes rres = new RecommArticleRes("Y","");
		try{
			
			RecommendArticle ra = new RecommendArticle();
			List<RecommendArticle> recommArticleList = recommendService.listRecommArticle(ra);   
			
			if(recommArticleList!=null&&recommArticleList.size()!=0){
				for(RecommendArticle r: recommArticleList){
					String thumbnail = r.getThumbnail();
				    String thumbnailPrefix =(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("thumbnail");
					r.setThumbnail(thumbnailPrefix+thumbnail); //拼一个key.properties里面的域名前缀:http://res.mshuoke.com/
					//toppostList.add(t); 修改循环里对象的属性，不能add到list里
					System.out.println(r.getThumbnail());
				  }
			}
			rres.setRecommArticleList(recommArticleList);
			
		} catch (Exception e) {
			System.out.println(e.toString());
			rres.setCode("N");
			rres.setMsg("获取数据失败");
		}
		this.logAfter(this.logger);
		return rres;  
		
		
	}
	  
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
