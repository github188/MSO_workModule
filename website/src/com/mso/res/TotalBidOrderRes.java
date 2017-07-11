package com.mso.res;

import java.math.BigDecimal;

import BaseRes.CbaseRes;

public class TotalBidOrderRes  extends CbaseRes{
	
    public TotalBidOrderRes(String code, String msg) {
		super(code, msg);
	}
	private BigDecimal totalBidOrder;//竞拍订单总量
	public BigDecimal getTotalBidOrder() {
		return totalBidOrder;
	}
	public void setTotalBidOrder(BigDecimal totalBidOrder) {
		this.totalBidOrder = totalBidOrder;
	}
	
}
