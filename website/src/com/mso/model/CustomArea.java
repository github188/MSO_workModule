package com.mso.model;

import java.util.ArrayList;
import java.util.List;



/**
 * 自定义区域表  用户自己定义
 * @author harry
 *
 */

public class CustomArea  {



     private int areaId;
     private String fuid;
     private String areaName;
     private String areaRemark;


    
    public CustomArea() {
    }

    

	public CustomArea(int areaId, String fuid, String areaName,
			String areaRemark) {
		super();
		this.areaId = areaId;
		this.fuid = fuid;
		this.areaName = areaName;
		this.areaRemark = areaRemark;
	}



	public int getAreaId() {
		return areaId;
	}



	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}



	public String getFuid() {
		return fuid;
	}



	public void setFuid(String fuid) {
		this.fuid = fuid;
	}



	public String getAreaName() {
		return areaName;
	}



	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}



	public String getAreaRemark() {
		return areaRemark;
	}



	public void setAreaRemark(String areaRemark) {
		this.areaRemark = areaRemark;
	}
	
}