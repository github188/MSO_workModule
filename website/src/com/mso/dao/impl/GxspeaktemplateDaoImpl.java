package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IGxspeaktemplateDao;
import com.mso.model.GXSpeaktemplate;



/**
 * 话术模板DAO实现类
 */
@Repository("gxspeaktemplateDao")
public class GxspeaktemplateDaoImpl extends BaseDao<Object, Serializable> implements IGxspeaktemplateDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
	
	
	/*
	 *查询所有的 话术模板 
	 */
	@Override
	public List getGXSpeaktemplates(GXSpeaktemplate user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" from GXSpeaktemplate u where 1=1 ");
		List demanList =this.getListByHQL(sql.toString(),listpar);
		return demanList;
	}
}
