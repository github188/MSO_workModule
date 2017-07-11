package com.mso.res;

import java.math.BigDecimal;

import BaseRes.CbaseRes;

public class ThisMonthOrderQuantityCompletedRes  extends CbaseRes{
	
    public ThisMonthOrderQuantityCompletedRes(String code, String msg) {
		super(code, msg);
	}
	private BigDecimal thisMonthOrderQuantityCompleted;//本月完成订单量
	public BigDecimal getThisMonthOrderQuantityCompleted() {
		return thisMonthOrderQuantityCompleted;
	}
	public void setThisMonthOrderQuantityCompleted(
			BigDecimal thisMonthOrderQuantityCompleted) {
		this.thisMonthOrderQuantityCompleted = thisMonthOrderQuantityCompleted;
	}
	
}
