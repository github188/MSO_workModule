package com.mso.res.baseregion;

import java.util.List;

import com.mso.model.BaseRegion;
import com.mso.model.CustomArea;

import BaseRes.CbaseRes;

public class CustomAreares extends CbaseRes{

	public CustomAreares(String code, String msg) {
		super(code, msg);
	}
	
	List<CustomArea> getCustomAreaList;

	public List<CustomArea> getGetCustomAreaList() {
		return getCustomAreaList;
	}

	public void setGetCustomAreaList(List<CustomArea> getCustomAreaList) {
		this.getCustomAreaList = getCustomAreaList;
	}
    //所有城市
	List<BaseRegion> baseRegionCusA;

	public List<BaseRegion> getBaseRegionCusA() {
		return baseRegionCusA;
	}

	public void setBaseRegionCusA(List<BaseRegion> baseRegionCusA) {
		this.baseRegionCusA = baseRegionCusA;
	}
	
	
	
	

}
