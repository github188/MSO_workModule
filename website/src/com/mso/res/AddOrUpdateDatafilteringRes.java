package com.mso.res;

import BaseRes.CbaseRes;

import com.mso.model.HFDatafiltering;
import com.mso.model.Hfp;

public class AddOrUpdateDatafilteringRes  extends CbaseRes{
	
    public AddOrUpdateDatafilteringRes(String code, String msg) {
		super(code, msg);
	}
    
    private Hfp hfp;
    public Hfp getHfp() {
		return hfp;
	}
	public void setHfp(Hfp hfp) {
		this.hfp = hfp;
	}
    private HFDatafiltering datafiltering;
	public HFDatafiltering getDatafiltering() {
		return datafiltering;
	}
	public void setDatafiltering(HFDatafiltering datafiltering) {
		this.datafiltering = datafiltering;
	}
}
