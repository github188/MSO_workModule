package com.mso.dao;

import com.mso.model.HFUserDetail;




/**
 * 用户DAO
 */
public interface HFUserDetailDao {
	/*
	 * 新增 Event HfUserDetail對象
	 * */
	public void addHfUser(HFUserDetail user);
   
	
	/*
	 * 修改HfUserDetail對象
	 * */
	public void editHfUser(HFUserDetail user);
	
	
	/*
	 * 取得用户详细对象
	 * */
	public HFUserDetail getUserDetailByFid(String user);
	

	
	
}
 
