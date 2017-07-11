package com.mso.model;


/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class orderPing   implements java.io.Serializable  {
	private String  keyDate;//yyyy-MM-dd
	private String  valueDate;//前端显示日期  4月1日  4-1
	private String  targetValue;//目标量
	private String  uploadValue;//上传量
	private String  singleValue;//成单量
	private String  differenceValue;//相差量
	
	public String getKeyDate() {
		return keyDate;
	}
	public String getValueDate() {
		return valueDate;
	}
	public String getTargetValue() {
		return targetValue;
	}
	public String getUploadValue() {
		return uploadValue;
	}
	public String getSingleValue() {
		return singleValue;
	}
	public String getDifferenceValue() {
		return differenceValue;
	}
	public void setKeyDate(String keyDate) {
		this.keyDate = keyDate;
	}
	public void setValueDate(String valueDate) {
		this.valueDate = valueDate;
	}
	public void setTargetValue(String targetValue) {
		this.targetValue = targetValue;
	}
	public void setUploadValue(String uploadValue) {
		this.uploadValue = uploadValue;
	}
	public void setSingleValue(String singleValue) {
		this.singleValue = singleValue;
	}
	public void setDifferenceValue(String differenceValue) {
		this.differenceValue = differenceValue;
	}
	
	
}