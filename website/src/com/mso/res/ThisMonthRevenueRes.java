package com.mso.res;

import java.math.BigDecimal;

import BaseRes.CbaseRes;

public class ThisMonthRevenueRes  extends CbaseRes{
	
    public ThisMonthRevenueRes(String code, String msg) {
		super(code, msg);
	}
	private BigDecimal thisMonthRevenue;//本月预计收入
	public BigDecimal getThisMonthRevenue() {
		return thisMonthRevenue;
	}
	public void setThisMonthRevenue(BigDecimal thisMonthRevenue) {
		this.thisMonthRevenue = thisMonthRevenue;
	}
}
