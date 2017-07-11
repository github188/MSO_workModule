package com.mso.model;

import java.io.Serializable;

public class UserFP implements Serializable {
	private String userId;
	private String pid;
	private String reviewname;
	private String jfuid;
	private Integer bstatus;
	
	public Integer getBstatus() {
		return bstatus;
	}
	public void setBstatus(Integer bstatus) {
		this.bstatus = bstatus;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getUserId() {
		return userId;
	}
	public String getPid() {
		return pid;
	}
	public String getReviewname() {
		return reviewname;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public void setReviewname(String reviewname) {
		this.reviewname = reviewname;
	}
	
}