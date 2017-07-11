package com.mso.model;

import java.math.BigDecimal;

public class DynamicDemand implements java.io.Serializable  {
	
	private String demandid;
	private String jfuid;
	private String ordername;
	private Integer releasenum;//	需求量：2000条
	private BigDecimal orderpricetol;//需求总价
	private String demanddescription;//需求描述
	private float completionPercentage;//	需求完成率
	public String getDemandid() {
		return demandid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getOrdername() {
		return ordername;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public BigDecimal getOrderpricetol() {
		return orderpricetol;
	}
	public String getDemanddescription() {
		return demanddescription;
	}
	public float getCompletionPercentage() {
		return completionPercentage;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public void setOrderpricetol(BigDecimal orderpricetol) {
		this.orderpricetol = orderpricetol;
	}
	public void setDemanddescription(String demanddescription) {
		this.demanddescription = demanddescription;
	}
	public void setCompletionPercentage(float completionPercentage) {
		this.completionPercentage = completionPercentage;
	}
	
}