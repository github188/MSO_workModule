package com.mso.model.pickuppackageparty;

import java.math.BigDecimal;

public class InvitationCodeShowOrder {
	
	private String jfuid;//用户编号
	private String createtime;//我推荐的接包方搜索中的时间
	private String companyname;//公司名
	private Integer sumauctionnum;//累计竞拍量
	private BigDecimal biddingcommission;//质检成功量   单个用户的收益
	private String jfuinvitationcode;//邀请码  注册时候填写  邀请人的邀请码
	
	
	
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public Integer getSumauctionnum() {
		return sumauctionnum;
	}
	public void setSumauctionnum(Integer sumauctionnum) {
		this.sumauctionnum = sumauctionnum;
	}
	public BigDecimal getBiddingcommission() {
		return biddingcommission;
	}
	public void setBiddingcommission(BigDecimal biddingcommission) {
		this.biddingcommission = biddingcommission;
	}
	public String getJfuinvitationcode() {
		return jfuinvitationcode;
	}
	public void setJfuinvitationcode(String jfuinvitationcode) {
		this.jfuinvitationcode = jfuinvitationcode;
	}
	public InvitationCodeShowOrder(String jfuid, String createtime,
			String companyname, Integer sumauctionnum,
			BigDecimal biddingcommission, String jfuinvitationcode) {
		super();
		this.jfuid = jfuid;
		this.createtime = createtime;
		this.companyname = companyname;
		this.sumauctionnum = sumauctionnum;
		this.biddingcommission = biddingcommission;
		this.jfuinvitationcode = jfuinvitationcode;
	}
	public InvitationCodeShowOrder(){}
}
