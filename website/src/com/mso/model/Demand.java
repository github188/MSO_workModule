package com.mso.model;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class Demand implements java.io.Serializable  {
	
	private String demandid;
	private String jfuid;
	private String ordername;
	private Integer releasenum;//	需求量：2000条
	private BigDecimal orderprice;//	需求单价：45元
	private Integer fishnum;//	已完成：1800条
	private Integer applicationnum;//	竞拍量：1900条
	private float completionPercentage;//	需求完成率
	
	private String begintime;//需求开始时间
	private String endtime;//需求结束时间
	
    public String getBegintime() {
		return begintime;
	}
	public String getEndtime() {
		return endtime;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	//	private float percent;
	public float getCompletionPercentage() {
		return completionPercentage;
	}
	public void setCompletionPercentage(float completionPercentage) {
		this.completionPercentage = completionPercentage;
	}
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
	public BigDecimal getOrderprice() {
		return orderprice;
	}
	public Integer getFishnum() {
		return fishnum;
	}
	public Integer getApplicationnum() {
		return applicationnum;
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
	public void setOrderprice(BigDecimal orderprice) {
		this.orderprice = orderprice;
	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public void setApplicationnum(Integer applicationnum) {
		this.applicationnum = applicationnum;
	}
}