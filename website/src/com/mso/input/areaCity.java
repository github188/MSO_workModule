package com.mso.input;

import java.math.BigDecimal;

public class areaCity {
	private String targecity;//城市
	private String citydesc;//targecity备注
	private BigDecimal cityprice;
	private String subdescription;//子需求价格描述
	private BigDecimal orderprice;//单价
	private BigDecimal orderpricetol;//总价
	private  Integer releasenum;//数量
	
	public BigDecimal getCityprice() {
		return cityprice;
	}
	public void setCityprice(BigDecimal cityprice) {
		this.cityprice = cityprice;
	}
	public String getCitydesc() {
		return citydesc;
	}
	public void setCitydesc(String citydesc) {
		this.citydesc = citydesc;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public String getTargecity() {
		return targecity;
	}
	public String getSubdescription() {
		return subdescription;
	}
	public BigDecimal getOrderprice() {
		return orderprice;
	}
	public BigDecimal getOrderpricetol() {
		return orderpricetol;
	}
	public void setTargecity(String targecity) {
		this.targecity = targecity;
	}
	public void setSubdescription(String subdescription) {
		this.subdescription = subdescription;
	}
	public void setOrderprice(BigDecimal orderprice) {
		this.orderprice = orderprice;
	}
	public void setOrderpricetol(BigDecimal orderpricetol) {
		this.orderpricetol = orderpricetol;
	}
}
