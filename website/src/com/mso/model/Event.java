package com.mso.model;

import java.io.Serializable;


public class Event implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
	private Integer seid;
	private String userId;
	private Integer menuId;
	private Integer count;
	
	private String jfutype;//1-发包方   2-接包方
	private String source;//1-意向客户新增   2-注册用户新增
	
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public Integer getSeid() {
		return seid;
	}
	public void setSeid(Integer seid) {
		this.seid = seid;
	}
	public String getJfutype() {
		return jfutype;
	}
	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public Integer getMenuId() {
		return menuId;
	}
	public void setMenuId(Integer menuId) {
		this.menuId = menuId;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	
	
	
	
	
	
}
