/**
 * 
 */
package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.HotLabel;



public class HotLabelRes extends CbaseRes{


	public HotLabelRes(String code, String msg) {
		super(code, msg);
	}
	
	public List<HotLabel> hotLabelList;

	public List<HotLabel> getHotLabelList() {
		return hotLabelList;
	}

	public void setHotLabelList(List<HotLabel> hotLabelList) {
		this.hotLabelList = hotLabelList;
	}
	

	

}
