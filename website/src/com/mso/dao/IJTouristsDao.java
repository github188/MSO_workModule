package com.mso.dao;

import java.util.List;

import com.mso.model.JTourists;



/**
 * 用户DAO
 * @author GJ
 * @date   2015年4月15日
 */
public interface IJTouristsDao {
 
	public void addJTourists(JTourists user) ;
	public List<JTourists> getAllJTourists();
	public void delJTourists(Integer id);
	public void updateJTourists(JTourists user);
	public List<JTourists> getJTourists(Integer id);
	
}
 
