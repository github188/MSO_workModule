package com.mso.dao.impl;

import java.io.Serializable;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IEventDao;
import com.mso.model.Event;



/**
 * 用户DAO实现类
 * @author GJ
 * @date   2015年4月15日
 */
@Repository("eventDao")
public class EventDaoImpl extends BaseDao<Object, Serializable> implements IEventDao  {

	@Autowired
	private SessionFactory sessionFactory;


	/*
	 * 新增 Event user對象
	 **/
	public boolean addEvent(Event user){
		this.save(user);
		return true;
	}
	/*
	 * 根据手UserId  update Event user對象
	 */
	public void updateEventByUserId(Event user){
		this.update(user);
	}
	/*
	 * 根据手UserId取得 Event user對象
	 * */
	public Event getEventByUserId(Event user) {
		String hql = "from Event u where u.userId = ?";
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
		 query.setParameter(0, user.getUserId());
        List<Event> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
}
