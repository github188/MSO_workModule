package com.mso.model;

import java.io.Serializable;

public class UserJfUser implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String jfuid;
    private String userId;
	private Integer isreview;
	public String getJfuid() {
		return jfuid;
	}
	public String getUserId() {
		return userId;
	}
	public Integer getIsreview() {
		return isreview;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setIsreview(Integer isreview) {
		this.isreview = isreview;
	}
	
}