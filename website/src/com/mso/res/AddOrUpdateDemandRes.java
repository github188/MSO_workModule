package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.HFDatafiltering;
import com.mso.model.HFDemand;
import com.mso.model.Hfp;

public class AddOrUpdateDemandRes  extends CbaseRes{
	
    public AddOrUpdateDemandRes(String code, String msg) {
		super(code, msg);
	}
    private Hfp hfp;
    public Hfp getHfp() {
		return hfp;
	}
	public void setHfp(Hfp hfp) {
		this.hfp = hfp;
	}
	
	private List<HFDemand> demandList;
	public List<HFDemand> getDemandList() {
		return demandList;
	}
	public void setDemandList(List<HFDemand> demandList) {
		this.demandList = demandList;
	}
	
	
	private HFDatafiltering hfdatafiltering;
	public HFDatafiltering getHfdatafiltering() {
		return hfdatafiltering;
	}
	public void setHfdatafiltering(HFDatafiltering hfdatafiltering) {
		this.hfdatafiltering = hfdatafiltering;
	}
}
