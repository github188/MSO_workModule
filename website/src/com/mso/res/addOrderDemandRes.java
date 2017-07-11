package com.mso.res;

import BaseRes.CbaseRes;

public class addOrderDemandRes extends CbaseRes{
    public addOrderDemandRes(String code, String msg) {
		super(code, msg);
	}
    private String orderId;
	public String getOrderId() {
		return orderId;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
}
