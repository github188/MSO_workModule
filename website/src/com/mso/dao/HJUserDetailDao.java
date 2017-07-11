package com.mso.dao;

import com.mso.model.HJUserDetail;



/**
 * 用户DAO
 */
public interface HJUserDetailDao {
	/*
	 * 新增 Event HJUserDetail對象
	 * */
	public void addHJfUser(HJUserDetail user);
	
	/*
	 * 取得用户详细对象
	 * */
	public HJUserDetail getUserDetailByFid(String user) ;
	
	
	public void editHjUser(HJUserDetail user);
}
 
