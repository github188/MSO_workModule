package com.mso.res;

import BaseRes.CbaseRes;

public class TotalOrderSettlementRes  extends CbaseRes{
	
    public TotalOrderSettlementRes(String code, String msg) {
		super(code, msg);
	}
	private Long totalOrderSettlement;//订单结算总量
	public Long getTotalOrderSettlement() {
		return totalOrderSettlement;
	}
	public void setTotalOrderSettlement(Long totalOrderSettlement) {
		this.totalOrderSettlement = totalOrderSettlement;
	}
	
}
