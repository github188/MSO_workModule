package com.mso.service;

import net.sf.json.JSONObject;

import com.mso.model.JfUser;
import com.mso.res.HJfUserDetailRes;




/**
 * 通用dao，包括基本的CRUD方法
 * @author Ljh
 *
 */

public interface HJfUserDetailService {
	/*
	 * 新增 JfUser user對象
	 * */
	public HJfUserDetailRes addHJfUser(JfUser user);
	
	/*
	 * 修改 JfUser user對象
	 * */
	public HJfUserDetailRes editHJfUser(JfUser user);
    
	//返回接发包方邮箱
	public String selectHJfUser(JfUser user);
	/*
	 * 修改 JfUser user對象  设置头像
	 * */
	public void editHJfUserHeadUrl(JfUser user);
	/*
	 * 查询 HFUserDetail user對象
	 * */
	public Object getFUserById(String jfuid,String jfutype);
	
	/*
	 * 查询 HFUserDetail user對象
	 * */
	public JSONObject getjfUserById(String jfuid);
}

 
