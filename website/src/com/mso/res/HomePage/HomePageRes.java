package com.mso.res.HomePage;

import java.util.List;

import BaseRes.CbaseRes;

public class HomePageRes  extends CbaseRes{

	public HomePageRes(String code, String msg) {
		super(code, msg);
	}
	
	List<Object> list;
	
	public List<Object> getList() {
		return list;
	}

	public void setList(List<Object> list) {
		this.list = list;
	}

}
