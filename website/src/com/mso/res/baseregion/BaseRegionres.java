package com.mso.res.baseregion;

import java.util.List;

import com.mso.model.BaseRegion;

import BaseRes.CbaseRes;

public class BaseRegionres extends CbaseRes {

	public BaseRegionres(String code, String msg) {
		super(code, msg);
	}
	
    List basreglist;

	public List getBasreglist() {
		return basreglist;
	}

	public void setBasreglist(List basreglist) {
		this.basreglist = basreglist;
	}
    
	List<BaseRegion> getRegionType;

	public List<BaseRegion> getGetRegionType() {
		return getRegionType;
	}

	public void setGetRegionType(List getRegionType) {
		this.getRegionType = getRegionType;
	}
	
    

}
