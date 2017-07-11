package com.mso.model;


public class BConverRecord implements java.io.Serializable  {
	private String crid;
	private String jfuid;//对应的用户id
	private String visitid;//来源记录id
	private String crtype;//1 注册   2 登录
	private String createtime;//创建时间 
	private String updatetime;//修改时间
	private String cookie;//记录浏览记录
	

	public String getCookie() {
		return cookie;
	}
	public void setCookie(String cookie) {
		this.cookie = cookie;
	}
	public String getCrid() {
		return crid;
	}
	public void setCrid(String crid) {
		this.crid = crid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getVisitid() {
		return visitid;
	}
	public void setVisitid(String visitid) {
		this.visitid = visitid;
	}
	public String getCrtype() {
		return crtype;
	}
	public void setCrtype(String crtype) {
		this.crtype = crtype;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	
   
}