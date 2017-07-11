package com.mso.res;

import BaseRes.CbaseRes;

import com.mso.model.OrderDemandDetail;

public class OrderDetailRes  extends CbaseRes{
	
    public OrderDetailRes(String code, String msg) {
		super(code, msg);
	}
    private OrderDemandDetail orderDetail;
	public OrderDemandDetail getOrderDetail() {
		return orderDetail;
	}
	public void setOrderDetail(OrderDemandDetail orderDetail) {
		this.orderDetail = orderDetail;
	}
}
