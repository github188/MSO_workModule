package com.mso.model;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class DemandProgress implements java.io.Serializable  {
	
//	private String jfuid;
	private Integer releasenum;//	需求量：2000条
	private BigDecimal orderprice;//	需求单价：45元
	private Integer fishnum;//	已完成：1800条
	private Integer applicationnum;//	竞拍量：1900条
	private String targecity;//城市
	private BigDecimal orderpriceTol;//预计结算金额
	
//	public String getJfuid() {
//		return jfuid;
//	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public BigDecimal getOrderprice() {
		return orderprice;
	}
	public Integer getFishnum() {
		return fishnum;
	}
	public Integer getApplicationnum() {
		return applicationnum;
	}
	public String getTargecity() {
		return targecity;
	}
	public BigDecimal getOrderpriceTol() {
		return orderpriceTol;
	}
//	public void setJfuid(String jfuid) {
//		this.jfuid = jfuid;
//	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public void setOrderprice(BigDecimal orderprice) {
		this.orderprice = orderprice;
	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public void setApplicationnum(Integer applicationnum) {
		this.applicationnum = applicationnum;
	}
	public void setTargecity(String targecity) {
		this.targecity = targecity;
	}
	public void setOrderpriceTol(BigDecimal orderpriceTol) {
		this.orderpriceTol = orderpriceTol;
	}
	
}