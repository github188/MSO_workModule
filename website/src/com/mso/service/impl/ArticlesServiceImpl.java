/**
 * 
 */
package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.ArticlesDao;
import com.mso.model.MkLecture;
import com.mso.model.MkNews;
import com.mso.model.PublicArticleMgmt;
import com.mso.res.ListArticlesRes;
import com.mso.service.ArticlesService;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
@Service("articleService")@Transactional
public class ArticlesServiceImpl implements ArticlesService{
	
	@Autowired
	ArticlesDao articlesDao;
	
	@Override
	public ListArticlesRes getArticles(PublicArticleMgmt articles){
		
		String code=ERConst.SU_CODE;  //调用公共util包 
		String msg="";
		ListArticlesRes res = new ListArticlesRes(code,msg);
		try{
			PageResults pr = articlesDao.getArticles(articles);
			res.setPageCount(pr.getPageCount());
	        res.setPageNo(pr.getPageNo());
	        res.setPageSize(pr.getPageSize());
	        res.setCurrentPage(pr.getCurrentPage());
	        res.setTotalCount(pr.getTotalCount()); //查询后返回给PageResults的查询总条数
	        res.setPageStr(pr.getPageStr());
	        res.setAjaxPageStr(pr.getAjaxPageStr());
	   		res.setArticleList(pr.getResults());  //封装好返回List<PublicArticleMgmt> articleList
		}catch(Exception e){
			res.setCode(ERConst.ER_CODE);
			res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
		}
		return res;

	}


	@Override
	public void updateNewsReading(MkNews news) {
		 articlesDao.updateNewsReading(news);
	}
	

	@Override
	public void updateLectureReading(MkLecture lecture) {
		 articlesDao.updateLectureReading(lecture);
	}

	
	
}
