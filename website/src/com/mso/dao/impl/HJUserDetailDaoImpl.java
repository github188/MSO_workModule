package com.mso.dao.impl;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.HJUserDetailDao;
import com.mso.model.HFUserDetail;
import com.mso.model.HJUserDetail;



/**
 * 用户DAO实现类
 */
@Repository("hjUserDetailDao")
public class HJUserDetailDaoImpl extends BaseDao<Object, Serializable> implements HJUserDetailDao  {

	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
	/*
	 * 新增 Event user對象
	 **/
	public void addHJfUser(HJUserDetail user){
		sessionFactory.getCurrentSession().save(user);
	}
	
	public HJUserDetail getUserDetailByFid(String jfuid) {
		String hql = "from HJUserDetail u where u.jfuid = ? "; //and u.jfutype = ?
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
 	 	query.setParameter(0, jfuid);
        List<HJUserDetail> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	/*
	 * 修改Event HJUserDetail對象
	 **/
	@Override
	public void editHjUser(HJUserDetail user){
		sessionFactory.getCurrentSession().update(user);
	}
	
	
	
}
