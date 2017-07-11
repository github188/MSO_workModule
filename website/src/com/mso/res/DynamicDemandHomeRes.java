package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.DynamicDemand;

public class DynamicDemandHomeRes  extends CbaseRes{
	
    public DynamicDemandHomeRes(String code, String msg) {
		super(code, msg);
	}
	private List<DynamicDemand> redemandList;
	
	public List<DynamicDemand> getRedemandList() {
		return redemandList;
	}
	public void setRedemandList(List<DynamicDemand> redemandList) {
		this.redemandList = redemandList;
	}
	



}
