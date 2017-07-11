package com.mso.model;


public class VisitRecord implements java.io.Serializable  {
	private String visitid;
	private String jfuid;
	private String referrer;
	private String remark;
	private String ip;
	private String createtime;
	private String updatetime;
	
	public String getVisitid() {
		return visitid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getReferrer() {
		return referrer;
	}
	public String getRemark() {
		return remark;
	}
	public String getIp() {
		return ip;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setVisitid(String visitid) {
		this.visitid = visitid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setReferrer(String referrer) {
		this.referrer = referrer;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
   
}