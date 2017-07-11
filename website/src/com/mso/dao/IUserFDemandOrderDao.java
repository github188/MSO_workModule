package com.mso.dao;

import com.mso.model.UserFDemand;
import com.mso.model.UserFP;
import com.mso.model.UserJOrder;
import com.mso.model.UserJfUser;




/**
 * 用户DAO
 */
public interface IUserFDemandOrderDao {
	
	/*
	 * 新增  UserFDemand對象
	 * */
	public void addUserFDemand(UserFDemand user);
	
	public UserJfUser selectUser(UserJfUser user);
	
	public UserFP selectUserP(UserFP user);
	/*
	 * 新增  UserJfUser對象
	 * */
	public void addUserJfUser(UserJfUser user);
	
	
	/*
	 * 新增  UserJOrder對象
	 * */
	public void addUserJOrder(UserJOrder user);
	
	
}
 
