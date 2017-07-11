package com.mso.model;

import java.math.BigDecimal;

import com.mso.utils.StringUtil;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class OrderDemandDetail  implements java.io.Serializable {
	/** full constructor */
	public OrderDemandDetail() {
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer releasenum;
	private String ordername;
	private String orderid;
	private String jfuid;
	private String pid; // 包id  对应 h_f_p 主键
	private String servicetype;//业务类型      1-销售线索挖掘  2-数据加工  3-人工客服 
	private String demandid;
	private Integer jdstate;//(竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  8-已分配
	private String updatetime;//修改时间/暂停时间
	private BigDecimal orderprice;
	private BigDecimal biddingcommission;//竞拍手续费
	private Integer auctionnum;
	private String explicittel;
	private String createtime;
	private String releasetime;//发布时间\
	private String begintime;//需求开始时间\
	private String subdescription;//
	private String xsxsurl;//销售线索
	private String productname;//需求产品名
    private String demand;
    private BigDecimal pricetol;
    private String dremark;//驳回备注

	private Integer settlementmethod;
	private Integer favorableway;//优惠方式 0-无优惠 1-免手续费
	private Integer executiondays;
    private Integer seatsnum;
	private String citydesc;//城市描述
	private String category2;//获客渠道/类目2  1-电话营销 2-网络营销 3-地推推广
    private String cleaningchannel;//清洗渠道/筛选渠道
	private BigDecimal sittingprice;//包坐席价格
	private String category3;
    private String demanddescription;
	private Integer beginage;
	private Integer endage;
	private String targecity;
//	private String finishtime;
	private String pleader;
	private String pphone;
	private String paytime;
//	private String needv;
//	private String targethume;
	private Integer fishnum;
	private String targethumen;
//	private Integer applicationnum;
	private String  endtime;
//	private String  packageid;
	private String paymentstandard;//结算标准
	private String paymenttime;//需求结算时间
	private Integer pause;//暂停状态  是否暂停 0-不暂停 1-暂停
	private String pausedescription;//暂停原因
	private Integer typeofinvoice; //  1增税(一般纳税人) 2 小规模纳税人(一般纳税人 收3%的)   3普票(收6%的)
	private Integer usemycompanydata;//0 ：第三方平台 0.4元一条 1 ：MSO平台(按使用收费) 2 ：不使用
	private String standardoperation;
	private String otherreport;
//	private String demandname;//需求名
    private String industry;//行业标签
    private Integer demandpause;
    private String demandpausedescription;
    private BigDecimal paymentmoney;//结算金额
	private Integer whetherupload;//控制成单报表是否可以上传　0 -不能上传   1-能上传
	private String orderpaymenttime;//订单结算周期 35个工作日 45个工作日 自定义
	private String twolevindustry;
	private String threelevindustry;
	private BigDecimal price;//自定义三级行业 价格
	
//	private BigDecimal jbfprice;//接包方价格
//	private BigDecimal jbfpricetol;//接包方总价
	
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
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
	public String getOrderpaymenttime() {
		return orderpaymenttime;
	}
	public void setOrderpaymenttime(String orderpaymenttime) {
		this.orderpaymenttime = orderpaymenttime;
	}
	public Integer getFavorableway() {
		return favorableway;
	}
	public void setFavorableway(Integer favorableway) {
		this.favorableway = favorableway;
	}
	public Integer getWhetherupload() {
		return whetherupload;
	}
	public void setWhetherupload(Integer whetherupload) {
		this.whetherupload = whetherupload;
	}
	public Integer getDemandpause() {
		return demandpause;
	}
	public String getDemandpausedescription() {
		return demandpausedescription;
	}
	public void setDemandpause(Integer demandpause) {
		this.demandpause = demandpause;
	}
	public void setDemandpausedescription(String demandpausedescription) {
		this.demandpausedescription = demandpausedescription;
	}
	public String getDremark() {
		return dremark;
	}
	public void setDremark(String dremark) {
		this.dremark = dremark;
	}
    public BigDecimal getPricetol() {
  		return pricetol;
  	}
  	public void setPricetol(BigDecimal pricetol) {
  		this.pricetol = pricetol;
  	}
	public String getSubdescription() {
		return subdescription;
	}
	public void setSubdescription(String subdescription) {
		this.subdescription = subdescription;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
    public String getCitydesc() {
		return citydesc;
	}
	public void setCitydesc(String citydesc) {
		this.citydesc = citydesc;
	}
	public String getCategory2() {
		return category2;
	}
	public String getCleaningchannel() {
		return cleaningchannel;
	}
	public void setCategory2(String category2) {
		this.category2 = category2;
	}
	public void setCleaningchannel(String cleaningchannel) {
		this.cleaningchannel = cleaningchannel;
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
    
    public BigDecimal getSittingprice() {
		return sittingprice;
	}
	public void setSittingprice(BigDecimal sittingprice) {
		this.sittingprice = sittingprice;
	}
    public Integer getPause() {
		return pause;
	}
	public String getPausedescription() {
		return pausedescription;
	}
	public Integer getTypeofinvoice() {
		return typeofinvoice;
	}
	public Integer getUsemycompanydata() {
		return usemycompanydata;
	}
	public String getStandardoperation() {
		return standardoperation;
	}
	public String getOtherreport() {
		return otherreport;
	}
	public void setPause(Integer pause) {
		this.pause = pause;
	}
	public void setPausedescription(String pausedescription) {
		this.pausedescription = pausedescription;
	}
	public void setTypeofinvoice(Integer typeofinvoice) {
		this.typeofinvoice = typeofinvoice;
	}
	public void setUsemycompanydata(Integer usemycompanydata) {
		this.usemycompanydata = usemycompanydata;
	}
	public void setStandardoperation(String standardoperation) {
		this.standardoperation = standardoperation;
	}
	public void setOtherreport(String otherreport) {
		this.otherreport = otherreport;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
//	public BigDecimal getOrderpricetol() {
//		return orderpricetol;
//	}
	public String getOrdername() {
		return ordername;
	}
	public String getOrderid() {
		return orderid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getPid() {
		return pid;
	}
	public String getServicetype() {
		return servicetype;
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
	public BigDecimal getBiddingcommission() {
		return biddingcommission;
	}
	public Integer getAuctionnum() {
		return auctionnum;
	}
	public String getExplicittel() {
		return explicittel;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getReleasetime() {
		return releasetime;
	}
	public String getBegintime() {
		return begintime;
	}
//	public String getDemandreleasetime() {
//		return demandreleasetime;
//	}
	public String getXsxsurl() {
		return xsxsurl;
	}
	public String getProductname() {
		return productname;
	}
	public String getDemand() {
		return demand;
	}
	public String getCategory3() {
		return category3;
	}
	public String getDemanddescription() {
		return demanddescription;
	}
	public Integer getBeginage() {
		return beginage;
	}
	public Integer getEndage() {
		return endage;
	}
	public String getTargecity() {
		return targecity;
	}
//	public String getFinishtime() {
//		return finishtime;
//	}
	public String getPleader() {
		return pleader;
	}
	public String getPphone() {
		return pphone;
	}
	public String getPaytime() {
		return paytime;
	}
//	public String getNeedv() {
//		return needv;
//	}
	public Integer getFishnum() {
		return fishnum;
	}
	public String getTargethumen() {
		return targethumen;
	}
//	public Integer getApplicationnum() {
//		return applicationnum;
//	}
	public String getEndtime() {
		return endtime;
	}
//	public String getPackageid() {
//		return packageid;
//	}
	public String getPaymentstandard() {
		return paymentstandard;
	}
	public String getPaymenttime() {
		return paymenttime;
	}
//	public String getDemandname() {
//		return demandname;
//	}
	public String getIndustry() {
		return industry;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
//	public void setOrderpricetol(BigDecimal orderpricetol) {
//		this.orderpricetol = orderpricetol;
//	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
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
	public void setBiddingcommission(BigDecimal biddingcommission) {
		this.biddingcommission = biddingcommission;
	}
	public void setAuctionnum(Integer auctionnum) {
		this.auctionnum = auctionnum;
	}
	public void setExplicittel(String explicittel) {
		this.explicittel = explicittel;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
//	public void setDemandreleasetime(String demandreleasetime) {
//		this.demandreleasetime = demandreleasetime;
//	}
	public void setXsxsurl(String xsxsurl) {
		this.xsxsurl = xsxsurl;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public void setDemand(String demand) {
		this.demand = demand;
	}
	public void setCategory3(String category3) {
		this.category3 = category3;
	}
	public void setDemanddescription(String demanddescription) {
		this.demanddescription = demanddescription;
	}
	public void setBeginage(Integer beginage) {
		this.beginage = beginage;
	}
	public void setEndage(Integer endage) {
		this.endage = endage;
	}
	public void setTargecity(String targecity) {
		this.targecity = targecity;
	}
//	public void setFinishtime(String finishtime) {
//		this.finishtime = finishtime;
//	}
	public void setPleader(String pleader) {
		this.pleader = pleader;
	}
	public void setPphone(String pphone) {
		this.pphone = pphone;
	}
	public void setPaytime(String paytime) {
		this.paytime = paytime;
	}
//	public void setNeedv(String needv) {
//		this.needv = needv;
//	}
//	public void setTargethume(String targethume) {
//		this.targethume = targethume;
//	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public void setTargethumen(String targethumen) {
		this.targethumen = targethumen;
	}
//	public void setApplicationnum(Integer applicationnum) {
//		this.applicationnum = applicationnum;
//	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
//	public void setPackageid(String packageid) {
//		this.packageid = packageid;
//	}
	public void setPaymentstandard(String paymentstandard) {
		this.paymentstandard = paymentstandard;
	}
	public void setPaymenttime(String paymenttime) {
		this.paymenttime = paymenttime;
	}
//	public void setDemandname(String demandname) {
//		this.demandname = demandname;
//	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public BigDecimal getPaymentmoney() {
		return paymentmoney;
	}
	public void setPaymentmoney(BigDecimal paymentmoney) {
		this.paymentmoney = paymentmoney;
	}
    
  
}