package com.mso.res;

import java.math.BigDecimal;

import BaseRes.CbaseRes;

public class ResidualOrderQuantityRes  extends CbaseRes{
	
    public ResidualOrderQuantityRes(String code, String msg) {
		super(code, msg);
	}
	private BigDecimal residualOrderQuantity;//剩余订单量
	public BigDecimal getResidualOrderQuantity() {
		return residualOrderQuantity;
	}
	public void setResidualOrderQuantity(BigDecimal residualOrderQuantity) {
		this.residualOrderQuantity = residualOrderQuantity;
	}
	
}
