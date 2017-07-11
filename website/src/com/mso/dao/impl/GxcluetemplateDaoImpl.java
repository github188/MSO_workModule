package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IGxcluetemplateDao;
import com.mso.model.GXCluetemplate;



/**
 * 销售模板DAO实现类
 */
@Repository("gxcluetemplateDao")
public class GxcluetemplateDaoImpl extends BaseDao<Object, Serializable> implements IGxcluetemplateDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
	
	
	/*
	 *查询所有的销售模板 
	 */
	@Override
	public List getGxcluetemplates(GXCluetemplate user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" from GXCluetemplate u where 1=1 ");
		List demanList =this.getListByHQL(sql.toString(),listpar);
		return demanList;
	}
}
