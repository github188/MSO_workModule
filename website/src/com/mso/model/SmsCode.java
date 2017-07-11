package com.mso.model;


/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class SmsCode implements java.io.Serializable  {
	private Integer smsid;
	
	private String username;//修改的用户名
	private String password;//修改的密码
	private String smscode;//都必须   用于验证   手机获取验证码接口和发送邮件接口会返回
	private Integer type;//短信验证码类型   1 注册   2 手机验证找回密码 3邮箱验证找回密码
	private String email;//邮箱地址
	
	private Integer isuse;// 2-使用   1-未使用 
	@Override
	public String toString() {
		return "SmsCode [smsid=" + smsid + ", username=" + username
				+ ", password=" + password + ", smscode=" + smscode + ", type="
				+ type + ", email=" + email + ", isuse=" + isuse + ", ip=" + ip
				+ ", content=" + content + ", createtime=" + createtime
				+ ", updatetime=" + updatetime + "]";
	}
	private String ip;
	private String content;
	private String createtime;
	private String updatetime;
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getIsuse() {
		return isuse;
	}
	public void setIsuse(Integer isuse) {
		this.isuse = isuse;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getSmsid() {
		return smsid;
	}
	public String getUsername() {
		return username;
	}
	public String getSmscode() {
		return smscode;
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
	public void setSmsid(Integer smsid) {
		this.smsid = smsid;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setSmscode(String smscode) {
		this.smscode = smscode;
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