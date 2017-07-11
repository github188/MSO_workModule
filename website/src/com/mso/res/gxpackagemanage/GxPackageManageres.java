package com.mso.res.gxpackagemanage;

import java.util.List;

import com.mso.model.GXPackageManage;

import BaseRes.CbaseRes;

public class GxPackageManageres extends CbaseRes{

	public GxPackageManageres(String code, String msg) {
		super(code, msg);
	}
	
	//根据条件查询列表
	List<Object> getGxPackageManagerList;

	public List<Object> getGetGxPackageManagerList() {
		return getGxPackageManagerList;
	}

	public void setGetGxPackageManagerList(List<Object> getGxPackageManagerList) {
		this.getGxPackageManagerList = getGxPackageManagerList;
	}

	GXPackageManage getgetGxPackageManagePid;

	public GXPackageManage getGetgetGxPackageManagePid() {
		return getgetGxPackageManagePid;
	}

	public void setGetgetGxPackageManagePid(GXPackageManage getgetGxPackageManagePid) {
		this.getgetGxPackageManagePid = getgetGxPackageManagePid;
	}
	
	
	
	
}
