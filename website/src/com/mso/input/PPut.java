package com.mso.input;




public class PPut{
	private String demandname;//需求名
	private String releasetime;//审核通过时间/开始时间
	private String par;  // 1-我的需求全部   2-我的需求审核中  3-我的需求进行中  4-我的需求结算中  5-我的需求已完成  6-异常需求   7-草稿箱
	private Integer currentPage=1;
	public Integer getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}
	public String getReleasetime() {
		return releasetime;
	}
	public String getPar() {
		return par;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public void setPar(String par) {
		this.par = par;
	}
	public String getDemandname() {
		return demandname;
	}
	public void setDemandname(String demandname) {
		this.demandname = demandname;
	}
}
