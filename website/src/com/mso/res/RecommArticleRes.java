/**
 * 
 */
package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.RecommendArticle;


public class RecommArticleRes extends CbaseRes{

	
	public RecommArticleRes(String code, String msg) {
		super(code, msg);
	}
	
	private List<RecommendArticle> recommArticleList;

	public List<RecommendArticle> getRecommArticleList() {
		return recommArticleList;
	}

	public void setRecommArticleList(List<RecommendArticle> recommArticleList) {
		this.recommArticleList = recommArticleList;
	}
	

}
