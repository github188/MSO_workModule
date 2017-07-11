package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IVisitRecordDao;
import com.mso.model.VisitRecord;



/**
 * 用户DAO实现类
 */
@Repository("visitRecordDao")
public class VisitRecordDaoImpl extends BaseDao<Object, Serializable> implements IVisitRecordDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    
    /*
     * 添加来源记录 
     */
	@Override
	public VisitRecord addVisitRecord(VisitRecord user){
		this.save(user);
		return user;
	}
	/*
	 * 删除来源记录 
	 */
	@Override
	public void deleteVisitRecord(VisitRecord user){
		this.delete(user);
	}
	/*
	 * 获得单个来源记录 
	 */
	public VisitRecord getVisitRecordById(VisitRecord user){
		String hql = " from VisitRecord  u where u.visitid = ?";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getVisitid());
		List<Object> users =this.getListByHQL(hql, list);
		if(users!=null&&users.size()!=0){
			return (VisitRecord)users.get(0);
		}
		return null;
	}
	
	/*
	 * 修改来源记录 
	 */
	@Override
	public void updateVisitRecord(VisitRecord user) {
		this.update(user);
	}
}
