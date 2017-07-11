package com.mso.res;

import java.math.BigDecimal;

import BaseRes.CbaseRes;

public class GrossIncomeRes  extends CbaseRes{
	
    public GrossIncomeRes(String code, String msg) {
		super(code, msg);
	}
	private BigDecimal grossIncome;//总收入
	public BigDecimal getGrossIncome() {
		return grossIncome;
	}
	public void setGrossIncome(BigDecimal grossIncome) {
		this.grossIncome = grossIncome;
	}
	
}
