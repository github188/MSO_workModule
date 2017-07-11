package com.mso.input;

public class UploadReportInput    {
	
	private String demandid;//需求id 
	private String orderid;//接包方订单id
	private String jfuid;//用户id
	private String report;//本次成单报告
	private String recording;//本次录音文件
	private Integer ordernum;//上传单量
	
	public String getDemandid() {
		return demandid;
	}
	public String getOrderid() {
		return orderid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getReport() {
		return report;
	}
	public String getRecording() {
		return recording;
	}
	public Integer getOrdernum() {
		return ordernum;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setReport(String report) {
		this.report = report;
	}
	public void setRecording(String recording) {
		this.recording = recording;
	}
	public void setOrdernum(Integer ordernum) {
		this.ordernum = ordernum;
	}
}