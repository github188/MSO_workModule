package com.mso.model;


public class DemandReport implements java.io.Serializable  {
	
	private String demandid;
	private String jfuid;
	private Integer releasenum;// 发布量/递交量 成单量
	private String censusday;//统计日期
	public String getDemandid() {
		return demandid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public String getCensusday() {
		return censusday;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public void setCensusday(String censusday) {
		this.censusday = censusday;
	}
	
}