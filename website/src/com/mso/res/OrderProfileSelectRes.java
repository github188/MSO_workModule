package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.OrderProfileSelect;

public class OrderProfileSelectRes  extends CbaseRes{
	
    public OrderProfileSelectRes(String code, String msg) {
		super(code, msg);
	}
	private List<OrderProfileSelect> orderSelectList;//OrderProfileSelect下拉选择框List
	public List<OrderProfileSelect> getOrderSelectList() {
		return orderSelectList;
	}
	public void setOrderSelectList(List<OrderProfileSelect> orderSelectList) {
		this.orderSelectList = orderSelectList;
	}
}
