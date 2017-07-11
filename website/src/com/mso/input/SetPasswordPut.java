package com.mso.input;

import BaseRes.BasePut;

public class SetPasswordPut extends BasePut{
	public SetPasswordPut(String ip, String souce) {
		super(ip, souce);
	}
	
	

	private String oldPassword;
    private String newPassword;			
    private String newCPassword;
	public String getOldPassword() {
		return oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public String getNewCPassword() {
		return newCPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public void setNewCPassword(String newCPassword) {
		this.newCPassword = newCPassword;
	}
	
	
	
//	public String getJfuid() {
//		return jfuid;
//	}
//	public String getJfutype() {
//		return jfutype;
//	}
//	public String getPid() {
//		return pid;
//	}
//	public String getJfuname() {
//		return jfuname;
//	}
//	public void setJfuid(String jfuid) {
//		this.jfuid = jfuid;
//	}
//	public void setJfutype(String jfutype) {
//		this.jfutype = jfutype;
//	}
//	public void setPid(String pid) {
//		this.pid = pid;
//	}
//	public void setJfuname(String jfuname) {
//		this.jfuname = jfuname;
//	}
}
