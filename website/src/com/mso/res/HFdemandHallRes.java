package com.mso.res;

import BaseRes.BaseRes;

public class HFdemandHallRes extends BaseRes<Object>{
	
    public HFdemandHallRes(String code, String msg) {
		super(code, msg);
	}
	private String pageStr;
	public String getPageStr() {
		return pageStr;
	}
	public void setPageStr(String pageStr) {
		this.pageStr = pageStr;
	}
}
