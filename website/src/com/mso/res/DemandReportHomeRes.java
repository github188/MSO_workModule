package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.DemandReport;

public class DemandReportHomeRes  extends CbaseRes{
	
    public DemandReportHomeRes(String code, String msg) {
		super(code, msg);
	}
	private List<DemandReport> reportDemandList;
	public List<DemandReport> getReportDemandList() {
		return reportDemandList;
	}
	public void setReportDemandList(List<DemandReport> reportDemandList) {
		this.reportDemandList = reportDemandList;
	}
	



}
