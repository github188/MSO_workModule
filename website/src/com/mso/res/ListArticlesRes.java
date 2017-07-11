/**
 * 
 */
package com.mso.res;

import java.util.List;

import BaseRes.BaseRes;

import com.mso.model.PublicArticleMgmt;
import com.mso.utils.PageResults;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
public class ListArticlesRes extends BaseRes<Object>{ 
	//BaseRes<T>  extends PageResults<T>  pageResults里的属性都有,可以引用

	public ListArticlesRes(String code, String msg) {
		super(code, msg);
	}
	
	private List<PublicArticleMgmt> articleList;

	public List<PublicArticleMgmt> getArticleList() {
		return articleList;
	}

	public void setArticleList(List<PublicArticleMgmt> articleList) {
		this.articleList = articleList;
	}

}
