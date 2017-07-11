package com.mso.model;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class HJOrderDemand extends BaseSeach implements java.io.Serializable {
	/** full constructor */
	public HJOrderDemand() {
	}
	private static final long serialVersionUID = 1L;
	
    private String yy;//年份   条件查询
	private Integer usemycompanydata;// 0 ：第三方平台 0.4元一条 1 ：MSO平台(按使用收费) 2 ：不使用
    private Integer typeofinvoice; //  1增税(一般纳税人) 2 小规模纳税人(一般纳税人 收3%的)   3普票(收6%的)
	private Integer releasenum;
	private BigDecimal orderpricetol;
	private BigDecimal pricetol;//预计收益
	private String ordername;
	private Integer distributionstate;//后台需求状态 -1未分配 0-已分配1-处理中 2-通过 3-驳回  5-驳回再次提交
	private Integer[] strzt;//(竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭   8-已分配
	private String orderid;
	private String jfuid;
	private String pid; // 包id  对应 h_f_p 主键
	private String servicetype;//业务类型      1-销售线索挖掘  2-数据加工  3-人工客服  
	private String demandid;
	private Integer jdstate;//(竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  8-已分配
	private String dremark;
	private BigDecimal orderprice;//接包方价格
	private BigDecimal biddingcommission;//竞拍手续费
	private Integer auctionnum;
	private String explicittel;
	private String createtime;
	private String updatetime;
	private String releasetime;//发布时间\
	private String begintime;//需求开始时间\
	private String demandreleasetime;//需求发布时间\
	private String xsxsurl;//销售线索
	private String productname;//需求产品名
    private String demand;
    private Integer settlementmethod;//结算方法  1-客户效果付费  2-包坐席 
    private Integer executiondays;//执行天数
    private Integer seatsnum;//坐席数量
	private String category3;
    private String demanddescription;
	private Integer beginage;
	private Integer endage;
	private String targecity;
	private String finishtime;
	private String pleader;
	private String pphone;
	private String paytime;
	private String needv;
	private String targethume;
	private Integer fishnum;
	private String targethumen;
	private Integer applicationnum;
	private String  endtime;
	private String  packageid;
	private String  yjwctime;
	private Integer standis;
	private Integer otheris;
	private String paymentstandard;//结算标准
	private Integer pause;//暂停状态  是否暂停 0-不暂停 1-暂停
	private String pausedescription;//暂停原因
    private String demandname;//需求名
    private String industry;//行业标签
    private Integer paymentnum;//结算量
    private BigDecimal paymentmoney;//结算金额
    private String paymentday;//结算时间(后台结算完成生成)
    private String paymenttime;//订单结算时间
	// par  订单列表(1-查询全部,2-待审核,3-我的需求进行中,4-结算(付款中,5-完成(已付款)), 异常订单：6   
	private String par;//par为1,2,3,4,5时为顶点列表，为6时是异常订单
	private String standardoperation;
	private String otherreport;
	private Integer whetherupload;//控制成单报表是否可以上传  0 -不能上传   1-能上传
    private String  pausetime;//暂停时间
    
	public String getPausetime() {
		return pausetime;
	}
	public void setPausetime(String pausetime) {
		this.pausetime = pausetime;
	}
	public Integer getWhetherupload() {
		return whetherupload;
	}
	public void setWhetherupload(Integer whetherupload) {
		this.whetherupload = whetherupload;
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
	public String getPaymenttime() {
		return paymenttime;
	}
	public void setPaymenttime(String paymenttime) {
		this.paymenttime = paymenttime;
	}
	public Integer getPaymentnum() {
		return paymentnum;
	}
	public BigDecimal getPaymentmoney() {
		return paymentmoney;
	}
	public String getPaymentday() {
		return paymentday;
	}
	public void setPaymentnum(Integer paymentnum) {
		this.paymentnum = paymentnum;
	}
	public void setPaymentmoney(BigDecimal paymentmoney) {
		this.paymentmoney = paymentmoney;
	}
	public void setPaymentday(String paymentday) {
		this.paymentday = paymentday;
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
	public Integer getPause() {
		return pause;
	}
	public String getPausedescription() {
		return pausedescription;
	}
	public void setPause(Integer pause) {
		this.pause = pause;
	}
	public void setPausedescription(String pausedescription) {
		this.pausedescription = pausedescription;
	}
	public BigDecimal getBiddingcommission() {
		return biddingcommission;
	}
	public void setBiddingcommission(BigDecimal biddingcommission) {
		this.biddingcommission = biddingcommission;
	}
	public String getPid() {
		return pid;
	}
	public String getServicetype() {
		return servicetype;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}
	public String getCategory3() {
		return category3;
	}
	public String getDemanddescription() {
		return demanddescription;
	}
	public void setCategory3(String category3) {
		this.category3 = category3;
	}
	public void setDemanddescription(String demanddescription) {
		this.demanddescription = demanddescription;
	}
    public String getYy() {
		return yy;
	}
	public void setYy(String yy) {
		this.yy = yy;
	}
	
    public String getXsxsurl() {
		return xsxsurl;
	}
	public void setXsxsurl(String xsxsurl) {
		this.xsxsurl = xsxsurl;
	}
	public String getPaymentstandard() {
		return paymentstandard;
	}
	public void setPaymentstandard(String paymentstandard) {
		this.paymentstandard = paymentstandard;
	}
	private float percent;//百分比
	private float zhanbi;
    
	public String getProductname() {
		return productname;
	}
	public String getDemand() {
		return demand;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public void setDemand(String demand) {
		this.demand = demand;
	}
	public Integer getUsemycompanydata() {
		return usemycompanydata;
	}
	public Integer getTypeofinvoice() {
		return typeofinvoice;
	}
	public void setUsemycompanydata(Integer usemycompanydata) {
		this.usemycompanydata = usemycompanydata;
	}
	public void setTypeofinvoice(Integer typeofinvoice) {
		this.typeofinvoice = typeofinvoice;
	}
	public float getZhanbi() {
		return zhanbi;
	}
	public void setZhanbi(float zhanbi) {
		this.zhanbi = zhanbi;
	}
	public float getPercent() {
		return percent;
	}
	public void setPercent(float percent) {
		this.percent = percent;
	}
	public String getEndtime() {
		return endtime;
	}
	public String getPackageid() {
		return packageid;
	}
	public String getYjwctime() {
		return yjwctime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	public void setPackageid(String packageid) {
		this.packageid = packageid;
	}
	public void setYjwctime(String yjwctime) {
		this.yjwctime = yjwctime;
	}

	public String getBegintime() {
		return begintime;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
	
	public String getDemandreleasetime() {
		return demandreleasetime;
	}
	public void setDemandreleasetime(String demandreleasetime) {
		this.demandreleasetime = demandreleasetime;
	}
	
	public Integer getStandis() {
		return standis;
	}
	public Integer getOtheris() {
		return otheris;
	}
	public void setStandis(Integer standis) {
		this.standis = standis;
	}
	public void setOtheris(Integer otheris) {
		this.otheris = otheris;
	}
	public Integer getApplicationnum() {
		return applicationnum;
	}
	public void setApplicationnum(Integer applicationnum) {
		this.applicationnum = applicationnum;
	}
	public String getOtherreport() {
		return otherreport;
	}
	public void setOtherreport(String otherreport) {
		this.otherreport = otherreport;
	}
	public String getStandardoperation() {
		return standardoperation;
	}
	public void setStandardoperation(String standardoperation) {
		this.standardoperation = standardoperation;
	}
	public String getTargethumen() {
		return targethumen;
	}
	public void setTargethumen(String targethumen) {
		this.targethumen = targethumen;
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
	public String getFinishtime() {
		return finishtime;
	}
	public String getPleader() {
		return pleader;
	}
	public String getPphone() {
		return pphone;
	}
	public String getPaytime() {
		return paytime;
	}
	public String getNeedv() {
		return needv;
	}
	public String getTargethume() {
		return targethume;
	}
	public Integer getFishnum() {
		return fishnum;
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
	public void setFinishtime(String finishtime) {
		this.finishtime = finishtime;
	}
	public void setPleader(String pleader) {
		this.pleader = pleader;
	}
	public void setPphone(String pphone) {
		this.pphone = pphone;
	}
	public void setPaytime(String paytime) {
		this.paytime = paytime;
	}
	public void setNeedv(String needv) {
		this.needv = needv;
	}
	public void setTargethume(String targethume) {
		this.targethume = targethume;
	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public BigDecimal getOrderpricetol() {
		return orderpricetol;
	}
	public String getOrdername() {
		return ordername;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public void setOrderpricetol(BigDecimal orderpricetol) {
		this.orderpricetol = orderpricetol;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public String getReleasetime() {
		return releasetime;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public Integer[] getStrzt() {
		return strzt;
	}
	public void setStrzt(Integer[] strzt) {
		this.strzt = strzt;
	}
	public String getOrderid() {
		return orderid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getDemandid() {
		return demandid;
	}
	public Integer getJdstate() {
		return jdstate;
	}
	public String getDremark() {
		return dremark;
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
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJdstate(Integer jdstate) {
		this.jdstate = jdstate;
	}
	public void setDremark(String dremark) {
		this.dremark = dremark;
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
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public Integer getDistributionstate() {
		return distributionstate;
	}
	public void setDistributionstate(Integer distributionstate) {
		this.distributionstate = distributionstate;
	}
	public String getPar() {
		return par;
	}
	public void setPar(String par) {
		this.par = par;
	}
	//par0 0-全部(订单列表与异常列表) 1-订单列表   2-异常订单
	private String par0;//第一层状态
	public String getPar0() {
		return par0;
	}
	public void setPar0(String par0) {
		this.par0 = par0;
	}
	
		
}