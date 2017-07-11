package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.OrderReport;

public class OrderReportRes  extends CbaseRes{
    public OrderReportRes(String code, String msg) {
		super(code, msg);
	}
	private List<OrderReport> orderReportList;
	public List<OrderReport> getOrderReportList() {
		return orderReportList;
	}
	public void setOrderReportList(List<OrderReport> orderReportList) {
		this.orderReportList = orderReportList;
	}
}
