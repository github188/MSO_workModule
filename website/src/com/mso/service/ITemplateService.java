package com.mso.service;

/**
 * 通用dao，包括基本的CRUD方法
 * @author 
 */
public interface ITemplateService {
	//取得当前分类行业下的模板信息 bool 是否更新 
	public String getClueTemplateUrl(String cluename,boolean bool);
	//取得当前分类行业下的模板信息  bool 是否更新
	public String getSpeakTemplateUrl(String speakname,boolean bool); 
}

 
