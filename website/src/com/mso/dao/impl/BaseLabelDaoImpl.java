package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IBaseLabelDao;
import com.mso.model.BaseLabel;
import com.mso.utils.StringUtil;
/**
 * 标签操作Impl
 */
@Repository("baseLabelDao")
public class BaseLabelDaoImpl extends BaseDao<Object, Serializable> implements IBaseLabelDao{

	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List getBaseLabel(BaseLabel cuar) {
		StringBuffer hql=new StringBuffer(" from BaseLabel where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(!StringUtil.isNull(cuar.getLabelId())){
			hql.append(" and labelId=? ");
			list.add(cuar.getLabelId());
		}
		if(!StringUtil.isNull(cuar.getLabelName())){
			hql.append(" and labelName=?");
			list.add(cuar.getLabelName());
		}
		if(null!=cuar.getLabelAttribute()){
			hql.append(" and labelAttribute=?");
			list.add(cuar.getLabelAttribute());
		}
		if(null!=cuar.getLabelType()){
			hql.append(" and labelType=?");
			list.add(cuar.getLabelType());
		}
		if(null!=cuar.getLabelState()){
			hql.append(" and labelState=?");
			list.add(cuar.getLabelState());
		}
		List<Object> calist=this.getListByHQL(hql.toString(), list);
		return calist;
	}

	@Override
	public void addBaseLabel(BaseLabel cuar) {
		this.save(cuar);
	}

	@Override
	public void deleteBaseLabel(BaseLabel cuar) {
		this.delete(cuar);	
	}

	@Override
	public void updateBaseLabel(BaseLabel cuar) {
		this.update(cuar);
	}
}
