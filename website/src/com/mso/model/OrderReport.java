package com.mso.model;


public class OrderReport implements java.io.Serializable  {
//	demandid,jfuid_j,DATE_FORMAT(qachecktime,'%Y/%m/%d'), sum(order_num) order_num,sum(qa_qualified+qa_notstandard) wcl
	private String demandid;//需求id
	private String jfuid_j;//用户id 
	private String qachecktime;//日期
	private String order_num;//日提交量
	private String wcl;//质检完成量
	
	public String getDemandid() {
		return demandid;
	}
	public String getJfuid_j() {
		return jfuid_j;
	}
	public String getQachecktime() {
		return qachecktime;
	}
	public String getOrder_num() {
		return order_num;
	}
	public String getWcl() {
		return wcl;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJfuid_j(String jfuid_j) {
		this.jfuid_j = jfuid_j;
	}
	public void setQachecktime(String qachecktime) {
		this.qachecktime = qachecktime;
	}
	public void setOrder_num(String order_num) {
		this.order_num = order_num;
	}
	public void setWcl(String wcl) {
		this.wcl = wcl;
	}
	
	
}