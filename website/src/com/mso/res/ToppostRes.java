/**
 * 
 */
package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.Toppost;

public class ToppostRes extends CbaseRes{
	
	public ToppostRes(String code, String msg) {
		super(code, msg);
	}
	
	private List<Toppost> toppostList;

	public List<Toppost> getToppostList() {
		return toppostList;
	}

	public void setToppostList(List<Toppost> toppostList) {
		this.toppostList = toppostList;
	}


}
