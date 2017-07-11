package com.mso.service;

import com.mso.model.Event;
import com.mso.res.EventRes;




/**
 * 通用dao，包括基本的CRUD方法
 * @author Ljh
 *
 */

public interface IEventService {
	/*
	 * 新增 Event user對象
	 * */
	public void addEvent(Event user);
	/*
	 * 根据手UserId  update Event user對象
	 * */
	public void updateEventByUserId(Event user);
	/*
	 * 根据手UserId取得 Event user對象
	 * */
	public Event getEventByUserId(Event user) ;
	/*
	 * 根据手UserId Event user對象全部操作
	 * */
	public EventRes addUpEvent(Event e) ;
    
}

 
