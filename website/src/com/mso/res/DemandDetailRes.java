package com.mso.res;

import BaseRes.CbaseRes;

import com.mso.model.HFDemand;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class DemandDetailRes extends CbaseRes{
	
    public DemandDetailRes(String code, String msg) {
		super(code, msg);
	}
	
    private HFDemand demand;

	public HFDemand getDemand() {
		return demand;
	}

	public void setDemand(HFDemand demand) {
		this.demand = demand;
	}
	
}