package com.mso.dao.impl;

import java.io.Serializable;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.ITouristsDao;
import com.mso.model.Tourists;



/**
 * 用户DAO实现类
 * @author GJ
 * @date   2015年4月15日
 */
@Repository("touristsDao")
public class TouristsDaoImpl extends BaseDao<Object, Serializable> implements ITouristsDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

	
	@Override
	public String addTourists(Tourists user) {
		Tourists u=(Tourists) this.add(user);
		return u.getFiid();
	}

}
