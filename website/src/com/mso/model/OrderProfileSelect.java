package com.mso.model;

import java.math.BigDecimal;

public class OrderProfileSelect implements java.io.Serializable  {
	private String ordername;
	private String demandid;
	private String jfuid;
	private Integer auctionnum;
	private BigDecimal orderprice;
	private Integer fishnum;
	private BigDecimal orderCompletionRate;
	public String getOrdername() {
		return ordername;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public Integer getAuctionnum() {
		return auctionnum;
	}
	public BigDecimal getOrderprice() {
		return orderprice;
	}
	public Integer getFishnum() {
		return fishnum;
	}
	public BigDecimal getOrderCompletionRate() {
		return orderCompletionRate;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setAuctionnum(Integer auctionnum) {
		this.auctionnum = auctionnum;
	}
	public void setOrderprice(BigDecimal orderprice) {
		this.orderprice = orderprice;
	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public void setOrderCompletionRate(BigDecimal orderCompletionRate) {
		this.orderCompletionRate = orderCompletionRate;
	}
	
}