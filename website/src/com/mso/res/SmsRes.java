package com.mso.res;

import BaseRes.CbaseRes;

public class SmsRes extends CbaseRes{
	
    public SmsRes(String code, String msg) {
		super(code, msg);
	}
   
    private String smsCode;//加密获的验证码
    private String jfuname;//
    private String email;
	private Integer type; //秘钥/验证码类型   1 注册   2 手机验证找回密码 3邮箱验证找回密码   用于重置密码验证用
    public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
    public String getJfuname() {
		return jfuname;
	}
	public Integer getType() {
		return type;
	}
	public void setJfuname(String jfuname) {
		this.jfuname = jfuname;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	
	public String getSmsCode() {
		return smsCode;
	}
	public void setSmsCode(String smsCode) {
		this.smsCode = smsCode;
	}
}
