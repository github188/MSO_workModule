package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.SmsCodeDao;
import com.mso.model.SmsCode;



/**
 * 用户DAO实现类
 */
@Repository("smsCodeDao")
public class SmsCodeDaoImpl extends BaseDao<Object, Serializable> implements SmsCodeDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    
    /*
     * 添加
     */
	@Override
	public SmsCode addSmsCode(SmsCode user){
		this.save(user);
		return user;
	}
	/*
	 * 删除
	 */
	@Override
	public void deleteSmsCode(SmsCode user){
		this.delete(user);
	}
	/*
	 * 修改
	 */
	@Override
	public void updateSmsCode(SmsCode user){
	    this.update(user);
	}
	/*
	 * 根据username 和 smscode  创建时间倒叙查询第一条
	 */
	@Override
	public SmsCode getSmsCodeByUname(SmsCode user){
		String hql = " from SmsCode  u where 1=1 and u.username = ? and smscode= ? and type=? and isuse=1 ORDER BY createtime desc ";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getUsername());
		list.add(user.getSmscode());
		list.add(user.getType());
		List<Object> users =this.getListByHQL(hql, list);
		if(users!=null&&users.size()!=0){
			return (SmsCode)users.get(0);
		}
		return null;
	}
}
