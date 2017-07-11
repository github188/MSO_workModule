package com.mso.model;

import java.math.BigDecimal;

public class AuctionListDemand implements java.io.Serializable  {
	private String number;//序号
	private String demandid;//需求id
	private String jfuid;//用户id 
	private String orderid;//订单id
	private String invitationcode;//用户邀请码
	
	private Integer auctionnum;//竞拍量
	private Integer fishnum;//完成量
	private BigDecimal completionPercentage;//完成率
	private BigDecimal conversionRate;//转换率
	public BigDecimal getConversionRate() {
		return conversionRate;
	}
	public void setConversionRate(BigDecimal conversionRate) {
		this.conversionRate = conversionRate;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public Integer getFishnum() {
		return fishnum;
	}
	public BigDecimal getCompletionPercentage() {
		return completionPercentage;
	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public void setCompletionPercentage(BigDecimal completionPercentage) {
		this.completionPercentage = completionPercentage;
	}
	public Integer getAuctionnum() {
		return auctionnum;
	}
	public String getInvitationcode() {
		return invitationcode;
	}
	public void setAuctionnum(Integer auctionnum) {
		this.auctionnum = auctionnum;
	}
	public void setInvitationcode(String invitationcode) {
		this.invitationcode = invitationcode;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getOrderid() {
		return orderid;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
}