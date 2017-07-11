package com.mso.res;

import BaseRes.CbaseRes;

public class CurrUser extends CbaseRes{
	
    public CurrUser(String code, String msg) {
		super(code, msg);
	}
    
	private String jfuid;//接包方/发包方 表识
	private String jfutype;//1-发包方   2-接包方
	private String pid;//是否是子账号
	private String jfuname;//用户名/昵称-用于登录(3-20 位    不区分大小写)
//	private String jfupassword;//密码(密文)用于登录(6-20 位    区分大小写)
	private Integer jfustate;//接包方/发包方-当前用户信息的状态      0-(提交中)初始状态(注册未完善资料)   1-已分配(注册未完善资料)    2-跟踪处理中(注册,完善资料验证中)  3-驳回-继续完善      4-审核通过处理完成(注册完善资料通过)    
	private Integer jfudisable;//1-启用  2-停用
	private String jfumobilephone;//手机号
	private String invitationcode;
	private String showName;
	private String islogin; //login  nologin
    public String getIslogin() {
		return islogin;
	}
	public void setIslogin(String islogin) {
		this.islogin = islogin;
	}
	public String getShowName() {
		return showName;
	}
	public void setShowName(String showName) {
		this.showName = showName;
	}

	public String getInvitationcode() {
		return invitationcode;
	}
	public void setInvitationcode(String invitationcode) {
		this.invitationcode = invitationcode;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getJfutype() {
		return jfutype;
	}
	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getJfuname() {
		return jfuname;
	}
	public void setJfuname(String jfuname) {
		this.jfuname = jfuname;
	}
	public Integer getJfustate() {
		return jfustate;
	}
	public void setJfustate(Integer jfustate) {
		this.jfustate = jfustate;
	}
	public Integer getJfudisable() {
		return jfudisable;
	}
	public void setJfudisable(Integer jfudisable) {
		this.jfudisable = jfudisable;
	}
	public String getJfumobilephone() {
		return jfumobilephone;
	}
	public void setJfumobilephone(String jfumobilephone) {
		this.jfumobilephone = jfumobilephone;
	}



}
