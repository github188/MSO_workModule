package com.mso.model.pickuppackageparty;

import java.math.BigDecimal;

public class HJOrderDemandpupp {
	   private String jfuid; //用户id
	   private String demandname;//需求名
	   private String industry;//行业标签
	   private String paymentstandard;//结算模式
	   private String orderid;//订单编号
	   private BigDecimal orderprice;//订单单价
	   private Integer auctionnum;//竞拍数量
	   private Integer fishnum;//完成单数
	   private String createtime;//竞拍时间
	   private Integer jdstate;//订单状态
	   private String servicetype; //业务类型
	   private Integer pause;//暂停状态
	   private Integer settlementmethod;//包坐席
	   private Integer executiondays;//执行天数
	   private Integer seatsnum;//坐席数量
	   private Integer typeofinvoice;//增票
	   private BigDecimal pricetol;//做细预计收益 总价
	   private String begintime;//开始日期 格式  年月日/  开始时间前端录入
	   private String endtime;//结束日期 年月日  客户期待完成时间
	   private String twolevindustry;//二级行业   线上/线下
	   private String threelevindustry;//三级行业
	   private BigDecimal jbfpricetol;//接包方总价
	   private BigDecimal jbfprice;//接包方单价
	   

		public BigDecimal getJbfpricetol() {
			return jbfpricetol;
		}
		public void setJbfpricetol(BigDecimal jbfpricetol) {
			this.jbfpricetol = jbfpricetol;
		}
		public BigDecimal getJbfprice() {
			return jbfprice;
		}
		public void setJbfprice(BigDecimal jbfprice) {
			this.jbfprice = jbfprice;
		}
		public String getTwolevindustry() {
			return twolevindustry;
		}
		public void setTwolevindustry(String twolevindustry) {
			this.twolevindustry = twolevindustry;
		}
		public String getThreelevindustry() {
			return threelevindustry;
		}
		public void setThreelevindustry(String threelevindustry) {
			this.threelevindustry = threelevindustry;
		}
		public Integer getSettlementmethod() {
			return settlementmethod;
		}
		public void setSettlementmethod(Integer settlementmethod) {
			this.settlementmethod = settlementmethod;
		}
		public Integer getExecutiondays() {
			return executiondays;
		}
		public void setExecutiondays(Integer executiondays) {
			this.executiondays = executiondays;
		}
		public Integer getSeatsnum() {
			return seatsnum;
		}
		public void setSeatsnum(Integer seatsnum) {
			this.seatsnum = seatsnum;
		}
		public Integer getTypeofinvoice() {
			return typeofinvoice;
		}
		public void setTypeofinvoice(Integer typeofinvoice) {
			this.typeofinvoice = typeofinvoice;
		}
		public BigDecimal getPricetol() {
			return pricetol;
		}
		public void setPricetol(BigDecimal pricetol) {
			this.pricetol = pricetol;
		}
	
	
		public Integer getPause() {
			return pause;
		}
		public void setPause(Integer pause) {
			this.pause = pause;
		}
		public String getJfuid() {
			return jfuid;
		}
		public void setJfuid(String jfuid) {
			this.jfuid = jfuid;
		}
		public String getDemandname() {
			return demandname;
		}
		public void setDemandname(String demandname) {
			this.demandname = demandname;
		}
		public String getIndustry() {
			return industry;
		}
		public void setIndustry(String industry) {
			this.industry = industry;
		}
		public String getPaymentstandard() {
			return paymentstandard;
		}
		public void setPaymentstandard(String paymentstandard) {
			this.paymentstandard = paymentstandard;
		}
		public String getOrderid() {
			return orderid;
		}
		public void setOrderid(String orderid) {
			this.orderid = orderid;
		}
		public BigDecimal getOrderprice() {
			return orderprice;
		}
		public void setOrderprice(BigDecimal orderprice) {
			this.orderprice = orderprice;
		}
		public Integer getAuctionnum() {
			return auctionnum;
		}
		public void setAuctionnum(Integer auctionnum) {
			this.auctionnum = auctionnum;
		}
		public Integer getFishnum() {
			return fishnum;
		}
		public void setFishnum(Integer fishnum) {
			this.fishnum = fishnum;
		}
		public String getCreatetime() {
			return createtime;
		}
		public void setCreatetime(String createtime) {
			this.createtime = createtime;
		}
		public Integer getJdstate() {
			return jdstate;
		}
		public void setJdstate(Integer jdstate) {
			this.jdstate = jdstate;
		}
		public String getServicetype() {
			return servicetype;
		}
		public void setServicetype(String servicetype) {
			this.servicetype = servicetype;
		}
	
		
		public HJOrderDemandpupp(String jfuid, String demandname, String industry,
				String paymentstandard, String orderid, BigDecimal orderprice,
				Integer auctionnum, Integer fishnum, String createtime,
				Integer jdstate, String servicetype,Integer pause) {
			super();
			this.jfuid = jfuid;
			this.demandname = demandname;
			this.industry = industry;
			this.paymentstandard = paymentstandard;
			this.orderid = orderid;
			this.orderprice = orderprice;
			this.auctionnum = auctionnum;
			this.fishnum = fishnum;
			this.createtime = createtime;
			this.jdstate = jdstate;
			this.servicetype = servicetype;
			this.pause=pause;
		}
		
		
		public HJOrderDemandpupp(Integer settlementmethod,
				Integer executiondays, Integer seatsnum, Integer typeofinvoice,
				BigDecimal pricetol) {
			super();
			this.settlementmethod = settlementmethod;
			this.executiondays = executiondays;
			this.seatsnum = seatsnum;
			this.typeofinvoice = typeofinvoice;
			this.pricetol = pricetol;
		}
		public HJOrderDemandpupp() {
			super();
		}
		public String getBegintime() {
			return begintime;
		}
		public void setBegintime(String begintime) {
			this.begintime = begintime;
		}
		public String getEndtime() {
			return endtime;
		}
		public void setEndtime(String endtime) {
			this.endtime = endtime;
		}
		public HJOrderDemandpupp(String begintime, String endtime) {
			super();
			this.begintime = begintime;
			this.endtime = endtime;
		}
		
	   
	
}
