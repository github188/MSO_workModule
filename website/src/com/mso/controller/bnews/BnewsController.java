package com.mso.controller.bnews;

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
import com.mso.model.BNews;
import com.mso.service.BnewsService;
import com.mso.utils.DateUtil;
import com.mso.utils.PageData;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;


@Controller
public class BnewsController extends BaseController{
	@Autowired
	BnewsService bnewsService;
	public BnewsService getBnewsService() {
		return bnewsService;
	}
	public void setBnewsService(BnewsService bnewsService) {
		this.bnewsService = bnewsService;
	}
	
	/*
	 * 查询列表
	 */
	@ResponseBody
    @RequestMapping(method=RequestMethod.GET,value="/news")
    public JSONObject news(HttpServletRequest  request) {
		JSONObject object=new JSONObject();
		object.put("code", "Y");
		object.put("msg", "");
		try {
			String author=StringUtil.objCovStr(request.getParameter("author"));//作者
			String newsid=StringUtil.objCovStr(request.getParameter("newsid"));//文章 id
			String state=StringUtil.objCovStr(request.getParameter("state"));//文章状态 0:下架 1:上架  2:预上架
			String title=StringUtil.objCovStr(request.getParameter("title"));//标题
			String orderby=StringUtil.objCovStr(request.getParameter("orderby"));//排序字段
			String sort=StringUtil.objCovStr(request.getParameter("sort"));//排序  asc  desc
			String endcreatetime=StringUtil.objCovStr(request.getParameter("endcreatetime"));//开始创建时间  结束值
			String begincreatetime=StringUtil.objCovStr(request.getParameter("begincreatetime"));//开始创建时间 开始值  
			
			String endbegintime=StringUtil.objCovStr(request.getParameter("endbegintime"));//文章显示时间 结束值
			String beginbegintime=StringUtil.objCovStr(request.getParameter("beginbegintime"));//文章显示时间  开始值    
			
			String currentPage=StringUtil.objCovStr(request.getParameter("currentPage"));//当前页面
		    String pageSize=StringUtil.objCovStr(request.getParameter("pageSize"));//分页size
			BNews cuar= new BNews();
			cuar.setAuthor(author);
			cuar.setTitle(title);
			cuar.setBegincreatetime(begincreatetime);
			cuar.setEndcreatetime(endcreatetime);
			cuar.setEndbegintime(endbegintime);
			cuar.setBeginbegintime(beginbegintime);
			
			cuar.setNewsid(newsid);
			if(!StringUtil.isNull(orderby)){
				cuar.setOrderby(orderby);
			}
			if(!StringUtil.isNull(sort)){
				if(!"ASC".equals(sort.trim().toUpperCase())&&!"DESC".equals(sort.trim().toUpperCase())){
					object.put("code", "N");
					object.put("msg", "输入的参数（sort）值不对");
					return object;
				}
				cuar.setSort(sort);
			}
			if(!StringUtil.isNull(state)){
				//不是整数
				if(!StringUtil.isInteger(state)){
					object.put("code", "N");
					object.put("msg", "输入的文章状态不是整数（0或者1或者2）");
					return object;
				}else{
					int a=StringUtil.toInteger(state);
//					if(a!=0&&a!=1&&a!=2){
//						object.put("code", "N");
//						object.put("msg", "输入的文章状态不是整数（0或者1或者2）");
//						return object;
//					}
					cuar.setState(StringUtil.toInteger(state));
				}
			}
			if(StringUtil.isNull(currentPage)){
				cuar.setCurrentPage(1);
			}else{
				if(!StringUtil.isInteger(currentPage)){
					object.put("code", "N");
					object.put("msg", "输入的当前页不是整数");
					return object;
				}
				cuar.setCurrentPage(StringUtil.toInteger(currentPage));
			}
			if(StringUtil.isNull(pageSize)){
				cuar.setPageSize(StringUtil.toInteger(pageSize));
			}else{
				if(!StringUtil.isInteger(pageSize)){
					object.put("code", "N");
					object.put("msg", "输入的pageSize不是整数");
					return object;
				}
				cuar.setPageSize(StringUtil.toInteger(pageSize));
			}
			PageResults re=bnewsService.getBnewsPage(cuar);
			PageData pageData=new PageData();
			pageData.setPageCount(re.getPageSize());
			pageData.setCurrentPage(re.getCurrentPage());
			pageData.setTotalCount(re.getTotalCount());
			pageData.setPageSize(cuar.getPageSize());
			pageData.setResults(re.getResults());
			object.put("pageData",pageData);
		} catch (Exception e) {
			object.put("code", "N");
			object.put("msg", "获取数据失败");
		}
		return object;
    }
	
	
	/*
	 * 查询新闻详情
	 */
	@ResponseBody
    @RequestMapping(method=RequestMethod.GET,value="/news/{newsid}")
    public JSONObject newsbyid(@PathVariable String newsid) {
		JSONObject object=new JSONObject();
		object.put("code", "Y");
		object.put("msg", "");
		try {
			BNews newpar=new BNews();
			newpar.setNewsid(newsid);
			newpar=bnewsService.getBnewsById(newpar);
			object.put("bnews",newpar);
		} catch (Exception e) {
			object.put("code","N");
			object.put("msg","获取数据失败");
		}
		return object;
    }
	
	
	
	/*
	 * 新增
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.POST,value="/news")
    public JSONObject addnews(@RequestBody String news){      //requestBody里传的String实质是个JSONObject{"k":v,"k":v,...}
		JSONObject object=new JSONObject();
		BNews i=null;
		try {
		     i =(BNews) JSONObject.toBean(JSONObject.fromObject(news), BNews.class); //把requestbody传的news转成BNews实体类
		} catch (Exception e) {
			object.put("code","N");
			object.put("msg","json格式转换(BNews)失败");
			return object;
		}
		object.put("code","Y");
		object.put("msg","");
		
		try {
			i.setNewsid(DateUtil.getIdDay());
            //文章时间
		    if(null==i.getIsshare()){
		    	i.setIsshare(0);
		    }
		    //文章状态  文章状态 0:下架 1:上架
		    if(null==i.getState()){
		    	i.setState(0);
		    }
			//标题空验证
			if(StringUtil.isNull(i.getTitle())){
				object.put("code","N");
				object.put("msg","文章标题为空");
				return object;
			}
			//作者空验证
		    if(StringUtil.isNull(i.getAuthor())){
				object.put("code","N");
				object.put("msg","作者为空");
				return object;
		    }
            //文章时间
		    if(StringUtil.isNull(i.getBegintime())){
				object.put("code","N");
				object.put("msg","文章时间为空");
				return object;
		    }
            //缩略图
		    if(StringUtil.isNull(i.getThumbnail())){
				object.put("code","N");
				object.put("msg","缩略图为空");
				return object;
		    }
		    //默认插入0 Reading
		    if(null==i.getReading()){
		    	i.setReading(0);
		    }
		    //默认插入0 State
		    if(null==i.getState()){
		    	i.setState(0);
		    }
		    //默认插入0 Isshare
		    if(null==i.getIsshare()){
		    	i.setIsshare(0);
		    }
		    
		    i.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			bnewsService.addBnews(i);                                              
		} catch (Exception e) {
			object.put("code", "N");
			object.put("msg", "新增数据失败");
		}
		object.put("news", i);     
		return object;
    }
	
	/*
	 * 修改
	 */
	/*
    //文章id验证
	if(StringUtil.isNull(i.getNewsid())){
		object.put("code","N");
		object.put("msg","文章id为空");
		return object;
	}
	//标题空验证
	if(StringUtil.isNull(i.getTitle())){
		object.put("code","N");
		object.put("msg","文章标题为空");
		return object;
	}
	//作者空验证
    if(StringUtil.isNull(i.getAuthor())){
		object.put("code","N");
		object.put("msg","作者为空");
		return object;
    }
    //文章时间
    if(StringUtil.isNull(i.getBegintime())){
		object.put("code","N");
		object.put("msg","文章时间为空");
		return object;
    }
    //缩略图
    if(StringUtil.isNull(i.getThumbnail())){
		object.put("code","N");
		object.put("msg","缩略图为空");
		return object;
    }
    */
	@ResponseBody
	@RequestMapping(method=RequestMethod.PUT,value="/news/{newsid}")
    public JSONObject updatenews(@PathVariable String newsid,@RequestBody String news){
		JSONObject object=new JSONObject();
		BNews i =null;
		JSONObject newsobje=null;
		try {
			newsobje=JSONObject.fromObject(news);
		    i =(BNews) JSONObject.toBean(JSONObject.fromObject(news), BNews.class); 
		} catch (Exception e) {
			object.put("code", "N");
			object.put("msg", "传入的数据格式不是json格式");
			return object;
		}
		i.setNewsid(newsid);
	    //文章id验证
		if(StringUtil.isNull(i.getNewsid())){
			object.put("code","N");
			object.put("msg","文章id为空");
			return object;
		}
		
		object.put("code","Y");
		object.put("msg","");
		try {
		    BNews newpar=new BNews();
		    newpar.setNewsid(i.getNewsid());
		    newpar=bnewsService.getBnewsById(newpar);
		    if(null!=newpar){
			    JSONObject newparjson = JSONObject.fromObject(newpar);//将java对象转换为json对象
			    //将newparjson对象的值全塞入newsobje
			    newparjson.putAll(newsobje);
			    BNews i2 =(BNews)JSONObject.toBean(newparjson, BNews.class); 
			    i2.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				if(null!=i.getReading()){
					i2.setReading(newpar.getReading()+1);
				}
			    bnewsService.updateBnews(i2);
		    }else{
		    	object.put("code", "N");
				object.put("msg", "没有找到修改的数据");
				return object;
		    }
		} catch (Exception e) {
			object.put("code", "N");
			object.put("msg", "修改数据失败");
		}
		return object;
    }
	
	/*
	 * 删除
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.DELETE,value="/news/{newsid}")
    public JSONObject delnews(@PathVariable String newsid){
		JSONObject object=new JSONObject();
		object.put("code", "Y");
		object.put("msg", "");
		try {
			BNews cuar= new BNews();
			cuar.setNewsid(newsid);
			bnewsService.deleteBnews(cuar);
		} catch (Exception e) {
			object.put("code", "N");
			object.put("msg", "删除数据失败");
		}
		return object;
    }
}
