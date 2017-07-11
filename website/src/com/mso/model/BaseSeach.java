package com.mso.model;

import java.math.BigDecimal;



public class BaseSeach {
	private String sorderName;//订单/需求名
	private String sorderNo;//订单/需求号
	private String sbeginDateValue;//订单发布时间/需求创建时间
	private String sendDateValue;
	
	
	


//	需求时间
//	需求类型
//	面向行业
//	业务类型
//	结算方式
//	面向地区
	
	private String xuqiuType;
	private String category1;
	private String category2;
	private String mxArea;
	
	
	
	public String getXuqiuType() {
		return xuqiuType;
	}
	public String getCategory1() {
		return category1;
	}
	public String getCategory2() {
		return category2;
	}
	public String getMxArea() {
		return mxArea;
	}
	public void setXuqiuType(String xuqiuType) {
		this.xuqiuType = xuqiuType;
	}
	public void setCategory1(String category1) {
		this.category1 = category1;
	}
	public void setCategory2(String category2) {
		this.category2 = category2;
	}
	public void setMxArea(String mxArea) {
		this.mxArea = mxArea;
	}
	private BigDecimal minJine;
	private BigDecimal maxJine;
	
    public BigDecimal getMinJine() {
		return minJine;
	}
	public BigDecimal getMaxJine() {
		return maxJine;
	}
	public void setMinJine(BigDecimal minJine) {
		this.minJine = minJine;
	}
	public void setMaxJine(BigDecimal maxJine) {
		this.maxJine = maxJine;
	}
	// 下一页
    private int pageNo;
    // 当前页
    private int currentPage;
 
 
	public int getPageNo() {
		return pageNo;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public String getSorderName() {
		return sorderName;
	}
	public String getSorderNo() {
		return sorderNo;
	}
	public String getSbeginDateValue() {
		return sbeginDateValue;
	}
	public String getSendDateValue() {
		return sendDateValue;
	}
	public void setSorderName(String sorderName) {
		this.sorderName = sorderName;
	}
	public void setSorderNo(String sorderNo) {
		this.sorderNo = sorderNo;
	}
	public void setSbeginDateValue(String sbeginDateValue) {
		this.sbeginDateValue = sbeginDateValue;
	}
	public void setSendDateValue(String sendDateValue) {
		this.sendDateValue = sendDateValue;
	}
	
	
}