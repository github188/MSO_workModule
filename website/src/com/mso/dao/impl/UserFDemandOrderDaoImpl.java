package com.mso.dao.impl;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IUserFDemandOrderDao;
import com.mso.model.UserFDemand;
import com.mso.model.UserFP;
import com.mso.model.UserJOrder;
import com.mso.model.UserJfUser;



/**
 * 用户DAO实现类
 * @author GJ
 * @date   2015年4月15日
 */
@Repository("userFDemandOrderDao")
public class UserFDemandOrderDaoImpl extends BaseDao<Object, Serializable> implements IUserFDemandOrderDao {
	
	@Autowired
	private SessionFactory sessionFactory;
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
	public UserJfUser selectUser(UserJfUser user){
		String hql = " from UserJfUser u where u.jfuid = ? "; 
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
 	 	query.setParameter(0, user.getJfuid());
        List<UserJfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
    
	
	public UserFP selectUserP(UserFP user){
		String hql = " from UserFP u where 1=1 and u.bstatus=3 and u.pid = ? "; 
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
 	 	query.setParameter(0, user.getPid());
        List<UserFP> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	
	/*
	 * 新增  UserJfUser對象
	 * */
    @Override
	public void addUserJfUser(UserJfUser user){
		this.save(user);
	}
	
	
	/*
	 * 新增  UserFDemand對象
	 * */
    @Override
	public void addUserFDemand(UserFDemand user){
		this.save(user);
	}
	

	/*
	 * 新增  UserJOrder對象
	 * */
    @Override
	public void addUserJOrder(UserJOrder user){
		this.save(user);
	}
}
