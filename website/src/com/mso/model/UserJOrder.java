package com.mso.model;

import java.io.Serializable;

public class UserJOrder implements Serializable {
	
	private static final long serialVersionUID = 1L;
    private String orderid;
    private String userId;
    private Integer isreview;
	public String getOrderid() {
		return orderid;
	}
	public String getUserId() {
		return userId;
	}
	public Integer getIsreview() {
		return isreview;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setIsreview(Integer isreview) {
		this.isreview = isreview;
	}
}