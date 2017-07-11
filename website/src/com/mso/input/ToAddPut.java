package com.mso.input;

import BaseRes.BasePut;

public class ToAddPut extends BasePut{
	//
	public ToAddPut(String ip, String souce) {
		super(ip, souce);
	}
	private String registerType;//发包方
    private String phoneNumber;//手机号码			
    private String companyName;//公司名称
    private String userName;//您的称呼
    private String outsourcingType;//行业
    private String businessType;//业务类型
    private String outsourcingDemand;//您的需求
    private String inviteCode;//您的邀请码
    
	public String getRegisterType() {
		return registerType;
	}
	public void setRegisterType(String registerType) {
		this.registerType = registerType;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getOutsourcingType() {
		return outsourcingType;
	}
	public void setOutsourcingType(String outsourcingType) {
		this.outsourcingType = outsourcingType;
	}
	public String getBusinessType() {
		return businessType;
	}
	public void setBusinessType(String businessType) {
		this.businessType = businessType;
	}
	public String getOutsourcingDemand() {
		return outsourcingDemand;
	}
	public void setOutsourcingDemand(String outsourcingDemand) {
		this.outsourcingDemand = outsourcingDemand;
	}
	public String getInviteCode() {
		return inviteCode;
	}
	public void setInviteCode(String inviteCode) {
		this.inviteCode = inviteCode;
	}
    
}
