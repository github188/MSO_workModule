/**
 * 
 */
package com.mso.controller.articles;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.MkLecture;
import com.mso.model.MkNews;
import com.mso.model.PublicArticleMgmt;
import com.mso.res.ListArticlesRes;
import com.mso.service.ArticlesService;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;
import com.mso.utils.StringUtil;

/**
 * 官网-眸事资讯-列表页
 * 
 */
@Controller
public class ArticlesController extends BaseController{
	/**
	 * 
	 * 查询文章列表(1.全部列表 2.眸事头条列表 3.眸事课堂列表 4.标题下的标签对应的文章列表)
	 *
	 */
	@Autowired
	private ArticlesService articleService; 
	
	
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/articles/{state}")
	public ListArticlesRes getArticles(HttpServletRequest request,@PathVariable String state){
		
		String type=StringUtil.objCovStr(request.getParameter("type"));
		//String type1=request.getParameter("type").toString();
		Integer currentPage = StringUtil.toInteger(request.getParameter("currentPage")); //Dao层findPageByFetchedHql(..,pageNo..)currentPage传到pageNo
		String label = StringUtil.objCovStr(request.getParameter("label")); 
		Integer articlestate = StringUtil.toInteger(state); //传参上架/下架状态
		
		ListArticlesRes res = new ListArticlesRes("Y","");
		
	    try{	
			PublicArticleMgmt articles = new PublicArticleMgmt();
			articles.setType(type);      //传参：头条,课堂
			if(null==currentPage){
				articles.setCurrentPage(1);
			}else{
				articles.setCurrentPage(currentPage);
			}
			articles.setLabel(label);
			articles.setState(articlestate); //传参上架/下架状态
			res = articleService.getArticles(articles);
			List<PublicArticleMgmt> articleList = res.getArticleList();
			if(null!=articleList && articleList.size()!=0){
				for(PublicArticleMgmt p: articleList){
					String thumbnail = p.getThumbnail();
					String thumbnailPrefix = (String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("thumbnail");
					p.setThumbnail(thumbnailPrefix+thumbnail); ////拼一个key.properties里面的域名前缀:http://res.mshuoke.com/
				}
			}
			res.setArticleList(articleList);
			
	    }catch(Exception e){
	    	e.printStackTrace();
	    	res.setCode("N");
	    	res.setMsg("操作失败");
	    }

		return res;
		
	}
	
	/**
	 * 更新文章阅读量(头条+课堂的详表的reading字段,后台写了public公共表也同步更新此字段)
	 * by Carol (LZL_back项目已写此功能,已被启用)
	 */
	@ResponseBody
	@RequestMapping(value="/articles/{type}/{id}",method=RequestMethod.PUT)
	public JSONObject updateArticleReading(@PathVariable("type") String type,
			@PathVariable("id")String id, @RequestBody String jsonS){  //参数anyway是String
		//MyHttpServletUtil.responseAjax(res); 配置中已解决ajax跨域
		JSONObject jsonobj = new JSONObject();
		try{
			jsonobj = JSONObject.fromObject(jsonS);
			MkNews news = new MkNews();
			MkLecture lecture = new MkLecture();
			if("toutiao".equals(type) && jsonobj.has("reading")){ //.has(String key)判断是否有reading字段
				int readNum = jsonobj.getInt("reading")+1; //.getInt(S ring key)	
				news.setReading(readNum);
				news.setNewsid(id);
				articleService.updateNewsReading(news);
				jsonobj.put("reading", readNum);
			}
			if("ketang".equals(type) && jsonobj.has("reading")){
				int readNum = jsonobj.getInt("reading")+1;
				lecture.setReading(readNum);
				lecture.setLectureid(id);
				articleService.updateLectureReading(lecture);
				jsonobj.put("reading", readNum);
			}
			System.out.println("lalalalalalallllllllllllllllllllll");

			jsonobj.put("code", "Y");
			jsonobj.put("msg", "");
		}catch(Exception e){
			e.printStackTrace();
			jsonobj.put("code", "N");
			jsonobj.put("msg", "请求失败,请输入正确的json格式");
		}
		return jsonobj;	
	}

	
}
