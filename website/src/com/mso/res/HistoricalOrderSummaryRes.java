package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.HistoricalOrderSummary;

public class HistoricalOrderSummaryRes  extends CbaseRes{
	
    public HistoricalOrderSummaryRes(String code, String msg) {
		super(code, msg);
	}
	private List<HistoricalOrderSummary> hisOrderSummaryList;
	public List<HistoricalOrderSummary> getHisOrderSummaryList() {
		return hisOrderSummaryList;
	}
	public void setHisOrderSummaryList(
			List<HistoricalOrderSummary> hisOrderSummaryList) {
		this.hisOrderSummaryList = hisOrderSummaryList;
	}
	
}
