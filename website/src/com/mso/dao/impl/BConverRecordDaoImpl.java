package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.BConverRecordDao;
import com.mso.model.BConverRecord;



/**
 * 用户DAO实现类
 */
@Repository("bconverRecordDao")
public class BConverRecordDaoImpl extends BaseDao<Object, Serializable> implements BConverRecordDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    
    /*
     * 添加来源转换记录 
     */
	@Override
	public BConverRecord addVisitRecord(BConverRecord user) {
		this.save(user);
		return user;
	}
	/*
	 * 删除来源转换记录 
	 */
	@Override
	public void deleteBConverRecord(BConverRecord user){
		this.delete(user);
	}
	/*
	 * 获得单个来源转换记录 
	 */
	public BConverRecord getBConverRecordById(BConverRecord user){
		String hql = " from BConverRecord  u where u.crid = ?";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getCrid());
		List<Object> users =this.getListByHQL(hql, list);
		if(users!=null&&users.size()!=0){
			return (BConverRecord)users.get(0);
		}
		return null;
	}
	
	/*
	 * 修改来源转换记录 
	 */
	@Override
	public void updateBConverRecord(BConverRecord user) {
		this.update(user);
	}

}
