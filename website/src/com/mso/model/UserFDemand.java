package com.mso.model;

import java.io.Serializable;

public class UserFDemand implements Serializable {
	
	private String userId;
	private String demandid;
	private Integer isreview;
	public String getUserId() {
		return userId;
	}
	public String getDemandid() {
		return demandid;
	}
	public Integer getIsreview() {
		return isreview;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setIsreview(Integer isreview) {
		this.isreview = isreview;
	}
	
}