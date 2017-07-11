/**
 * 
 */
package com.mso.dao;

import com.mso.model.MkLecture;
import com.mso.model.MkNews;
import com.mso.model.PublicArticleMgmt;
import com.mso.utils.PageResults;

/**
 * 
 * 
 */
public interface ArticlesDao {
	
	public PageResults<Object> getArticles(PublicArticleMgmt article);
	
	public void updateNewsReading(MkNews news);
	 
	public void updateLectureReading(MkLecture lecture);
	
	

}
