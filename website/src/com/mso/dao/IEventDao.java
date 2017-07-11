package com.mso.dao;

import com.mso.model.Event;



/**
 * 用户DAO
 * @author GJ
 * @date   2015年4月15日
 */
public interface IEventDao {
	/*
	 * 新增 Event user對象
	 * */
	public boolean addEvent(Event user);
	/*
	 * 根据手UserId  update Event user對象
	 * */
	public void updateEventByUserId(Event user);
	/*
	 * 根据手UserId取得 Event user對象
	 * */
	public Event getEventByUserId(Event user) ;
}
 
