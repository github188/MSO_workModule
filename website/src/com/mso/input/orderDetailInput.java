package com.mso.input;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class orderDetailInput implements java.io.Serializable  {
	private String orderid;//主键ID 订单id
	private Integer jdstate;//(竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭   
	private String jfuid;//接包人 主键  对应 h_jf_user-jfuid
	private String servicetype;//业务类型      1-销售线索挖掘  2-数据加工  3-人工客服  
	private String pid;//包id  对应 h_f_p 主键
	private String demandid;//需求 id
	private BigDecimal orderprice;//订单单价  元
	private Integer auctionnum;//	竞拍数量  个
	private String explicittel;//竞拍-外显号码
	private BigDecimal biddingcommission;//竞拍手续费
	private Integer typeofinvoice;//1增票(一般纳税人) 2增票（小规模纳税人一般纳税人 收3%的)   3普票(收6%的)
	private Integer usemycompanydata;//0 第三方平台 0.4元一条 1MSO平台(按使用收费) 2 不使用
	
	private Integer settlementmethod;//结算方法  1-客户效果付费  2-包坐席 
	private Integer executiondays;//执行天数
	private Integer seatsnum;//坐席数量
	private BigDecimal pricetol;  //包坐席预计收益  
	private BigDecimal jbfprice;//接包方价格
	
	public BigDecimal getJbfprice() {
		return jbfprice;
	}
	public void setJbfprice(BigDecimal jbfprice) {
		this.jbfprice = jbfprice;
	}
	public BigDecimal getPricetol() {
		return pricetol;
	}
	public void setPricetol(BigDecimal pricetol) {
		this.pricetol = pricetol;
	}
	public Integer getSettlementmethod() {
		return settlementmethod;
	}
	public Integer getExecutiondays() {
		return executiondays;
	}
	public Integer getSeatsnum() {
		return seatsnum;
	}
	public void setSettlementmethod(Integer settlementmethod) {
		this.settlementmethod = settlementmethod;
	}
	public void setExecutiondays(Integer executiondays) {
		this.executiondays = executiondays;
	}
	public void setSeatsnum(Integer seatsnum) {
		this.seatsnum = seatsnum;
	}
	public String getOrderid() {
		return orderid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getServicetype() {
		return servicetype;
	}
	public String getPid() {
		return pid;
	}
	public String getDemandid() {
		return demandid;
	}
	public Integer getJdstate() {
		return jdstate;
	}
	public BigDecimal getOrderprice() {
		return orderprice;
	}
	public Integer getAuctionnum() {
		return auctionnum;
	}
	public String getExplicittel() {
		return explicittel;
	}
	public BigDecimal getBiddingcommission() {
		return biddingcommission;
	}
	public Integer getTypeofinvoice() {
		return typeofinvoice;
	}
	public Integer getUsemycompanydata() {
		return usemycompanydata;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJdstate(Integer jdstate) {
		this.jdstate = jdstate;
	}
	public void setOrderprice(BigDecimal orderprice) {
		this.orderprice = orderprice;
	}
	public void setAuctionnum(Integer auctionnum) {
		this.auctionnum = auctionnum;
	}
	public void setExplicittel(String explicittel) {
		this.explicittel = explicittel;
	}
	public void setBiddingcommission(BigDecimal biddingcommission) {
		this.biddingcommission = biddingcommission;
	}
	public void setTypeofinvoice(Integer typeofinvoice) {
		this.typeofinvoice = typeofinvoice;
	}
	public void setUsemycompanydata(Integer usemycompanydata) {
		this.usemycompanydata = usemycompanydata;
	}
}