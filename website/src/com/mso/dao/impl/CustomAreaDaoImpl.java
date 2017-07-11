package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mso.dao.CustomAreaDao;
import com.mso.model.CustomArea;

import BaseDao.BaseDao;
/**
 * 自定义区域表  用户自己定义Impl
 * @author harry
 *
 */
@Repository("customareaDao")
public class CustomAreaDaoImpl extends BaseDao<Object, Serializable> implements CustomAreaDao{

	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List getCustomArea(CustomArea cuar) {
		StringBuffer hql=new StringBuffer(" from CustomArea where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(null!=cuar.getFuid()){
			hql.append(" and fuid=? ");
			list.add(cuar.getFuid());
		}
		if(null!=(Integer)cuar.getAreaId()){
			hql.append(" and areaId=?");
			list.add(cuar.getAreaId());
		}
		List<Object> calist=this.getListByHQL(hql.toString(), list);
		return calist;
	}

	@Override
	public void addCustomArea(CustomArea cuar) {
		this.save(cuar);
	}

	@Override
	public void deleteCustomArea(CustomArea cuar) {
		this.delete(cuar);	
	}

	@Override
	public void updateCustomAreaAreaRemark(CustomArea cuar) {
	   this.update(cuar);
	  
	}

	@Override
	public CustomArea getCustomAreaModel(CustomArea cuar) {
		StringBuffer hql=new StringBuffer(" from CustomArea where 1=1");
		if(null!=(Integer)cuar.getAreaId()){
			hql.append(" and areaId=? ");
		}
		Object object=this.getByHQL(hql.toString(), cuar.getAreaId());
		
		return null;
	}
  
}
