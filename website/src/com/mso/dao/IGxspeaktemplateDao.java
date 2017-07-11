package com.mso.dao;

import java.util.List;

import com.mso.model.GXSpeaktemplate;



/**
 * 话术模板DAO
 */
public interface IGxspeaktemplateDao {
	/*
	 * 查询所有的 话术模板
	 */
	public List getGXSpeaktemplates(GXSpeaktemplate user) ;
}
 
