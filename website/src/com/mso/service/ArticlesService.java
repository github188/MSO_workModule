/**
 * 
 */
package com.mso.service;

import com.mso.model.MkLecture;
import com.mso.model.MkNews;
import com.mso.model.PublicArticleMgmt;
import com.mso.res.ListArticlesRes;


/**
 * 
 */

public interface ArticlesService {
	
	public ListArticlesRes getArticles(PublicArticleMgmt articles);
	
	public void updateNewsReading(MkNews news);//更新头条阅读量
	
	public void updateLectureReading(MkLecture lecture); //更新课堂阅读量

}
