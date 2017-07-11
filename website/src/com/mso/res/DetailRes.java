package com.mso.res;

import BaseRes.CbaseRes;

import com.mso.model.HfpDetail;

public class DetailRes  extends CbaseRes{
	
    public DetailRes(String code, String msg) {
		super(code, msg);
	}
    private HfpDetail detail;
	public HfpDetail getDetail() {
		return detail;
	}
	public void setDetail(HfpDetail detail) {
		this.detail = detail;
	}
}
