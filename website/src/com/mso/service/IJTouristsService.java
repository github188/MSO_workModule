package com.mso.service;

import java.util.List;

import com.mso.model.JTourists;




/**
 * 通用dao，包括基本的CRUD方法
 */

public interface IJTouristsService {
    //查询所有
	public List<JTourists> getJTourists();
    //添加用户
	public void addJTourists(JTourists user);
    //删除用户
	public void delJTourists(Integer id);
    //修改用户
	public void updateJTourists(JTourists user) ;
    //单个查询
	List<JTourists> getJTourists(Integer id)  ;
    
}

 
