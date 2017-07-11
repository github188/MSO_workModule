package com.mso.dao;

import java.util.List;

import com.mso.model.UserFP;




/**
 * UserFP
 */
public interface IUserFPDao {
	
	/*
	 * 新增  UserFP對象
	 * */
	public void addUserFP(UserFP user);
	
	public UserFP selectUserP(UserFP user);
}
 
