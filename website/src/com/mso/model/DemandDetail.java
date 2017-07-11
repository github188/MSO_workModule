package com.mso.model;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class DemandDetail implements java.io.Serializable {
	
	private String orderBy;//auctionnum  fishnum  fisrate    //需求大厅  排序字段     剩余量(residualQuantity)  上架日期 (releasetime)   单价(orderprice)
	private Integer jfustate;
	private String suDay;
	private String month;
	//add by 2016-07-26 [1.3.2] begin
	private String productname;//产品名
	private String begintime;
	private String xsxsurl;//销售线索
	private String standardoperation;
	private String otherreport;
	private String paymentstandard;//结算标准
	private String paymenttime;//结算时间
	private String demanddescription;//需求描述
	private Integer favorableway;//优惠方式 0-无优惠 1-免手续费
	private Integer newdemand;//1-是新单   发布时间 没有超过5天 0 老单
	private String auction;	//需求状态    1-可竞拍 2- 不可竞拍
	private String pricerange;      //需求单价 1:0-30  2:30-60  3:60-100  4:100以上
	private String sort;//desc降序 asc 升序
	private String  par;//标识当前的操作
	private String jfutype;//用户类型 接包方/发包方
	private String  collectionid;
	private String othercol;
	private Integer standis;
	private Integer otheris;
	private Integer needv;
	private Integer distributionstate;
	private String releasetime;//审核通过时间/开始时间
	private String finishtime;//完成时间
	private String demandid;
	private String pid;//包id
	private String jfuid;
	private String category1;
	private String category2;
	private String category3;
	private Integer demandtype;   
	private String packageid; 
	private String ordername;
	private Integer releasenum;
	private String citydesc;//城市备注
	private String targecity; 
	private String subdescription;//子需求价格描述
	private BigDecimal orderprice;
	private BigDecimal orderpricetol;
	private BigDecimal minorderpricetol;
	private BigDecimal maxorderpricetol;
	private String targethumen;
	private Integer beginage;
	private Integer endage;
	private String endtime;
	private String pleader;
	private String pphone;
	private String paytime;
	private String demand;//产品描述
	private String productaccessories;//产品附件
	private Integer fdstate;
	private String dremark;
	private String createtime;
	private String updatetime;
	private Integer fishnum;
	private float percent;
	private float zhanbi;
	
	public String getCitydesc() {
		return citydesc;
	}
	public void setCitydesc(String citydesc) {
		this.citydesc = citydesc;
	}
	public String getProductaccessories() {
		return productaccessories;
	}
	public void setProductaccessories(String productaccessories) {
		this.productaccessories = productaccessories;
	}
	public String getSubdescription() {
		return subdescription;
	}
	public void setSubdescription(String subdescription) {
		this.subdescription = subdescription;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getPricerange() {
		return pricerange;
	}
	public String getSort() {
		return sort;
	}
	public void setPricerange(String pricerange) {
		this.pricerange = pricerange;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	public String getAuction() {
		return auction;
	}
	public void setAuction(String auction) {
		this.auction = auction;
	}
	public Integer getNewdemand() {
		return newdemand;
	}
	public void setNewdemand(Integer newdemand) {
		this.newdemand = newdemand;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getOrderBy() {
		return orderBy;
	}
	public void setOrderBy(String orderBy) {
		this.orderBy = orderBy;
	}
	public Integer getFavorableway() {
		return favorableway;
	}
	public void setFavorableway(Integer favorableway) {
		this.favorableway = favorableway;
	}
	public String getDemanddescription() {
		return demanddescription;
	}
	public void setDemanddescription(String demanddescription) {
		this.demanddescription = demanddescription;
	}
	//add by 2016-07-26  end
	public String getPaymentstandard() {
		return paymentstandard;
	}
	public String getPaymenttime() {
		return paymenttime;
	}
	public void setPaymentstandard(String paymentstandard) {
		this.paymentstandard = paymentstandard;
	}
	public void setPaymenttime(String paymenttime) {
		this.paymenttime = paymenttime;
	}
	public Integer getJfustate() {
		return jfustate;
	}
	public void setJfustate(Integer jfustate) {
		this.jfustate = jfustate;
	}
	public String getXsxsurl() {
		return xsxsurl;
	}
	public void setXsxsurl(String xsxsurl) {
		this.xsxsurl = xsxsurl;
	}
	public float getZhanbi() {
		return zhanbi;
	}
	public void setZhanbi(float zhanbi) {
		this.zhanbi = zhanbi;
	}
	private String yjwctime;//需求项目计划完成时间
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getYjwctime() {
		return yjwctime;
	}
	public void setYjwctime(String yjwctime) {
		this.yjwctime = yjwctime;
	}
	public float getPercent() {
		return percent;
	}
	public void setPercent(float percent) {
		this.percent = percent;
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
	private Integer applicationnum;
	
	public Integer getApplicationnum() {
		return applicationnum;
	}
	public void setApplicationnum(Integer applicationnum) {
		this.applicationnum = applicationnum;
	}
	public String getCollectionid() {
		return collectionid;
	}
	public void setCollectionid(String collectionid) {
		this.collectionid = collectionid;
	}
	public String getSuDay() {
		return suDay;
	}
	public void setSuDay(String suDay) {
		this.suDay = suDay;
	}
	public Integer getFishnum() {
		return fishnum;
	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public Integer getDistributionstate() {
		return distributionstate;
	}
	public void setDistributionstate(Integer distributionstate) {
		this.distributionstate = distributionstate;
	}
	public String getOthercol() {
		return othercol;
	}
	public void setOthercol(String othercol) {
		this.othercol = othercol;
	}
    public Integer getNeedv() {
		return needv;
	}
	public void setNeedv(Integer needv) {
		this.needv = needv;
	}
	private String type;//
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getJfutype() {
		return jfutype;
	}
	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}
	public String getPar() {
		return par;
	}
	public void setPar(String par) {
		this.par = par;
	}
	public String getReleasetime() {
		return releasetime;
	}
	public String getFinishtime() {
		return finishtime;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public void setFinishtime(String finishtime) {
		this.finishtime = finishtime;
	}
	public BigDecimal getMinorderpricetol() {
		return minorderpricetol;
	}
	public BigDecimal getMaxorderpricetol() {
		return maxorderpricetol;
	}
	public void setMinorderpricetol(BigDecimal minorderpricetol) {
		this.minorderpricetol = minorderpricetol;
	}
	public void setMaxorderpricetol(BigDecimal maxorderpricetol) {
		this.maxorderpricetol = maxorderpricetol;
	}
	public BigDecimal getOrderpricetol() {
		return orderpricetol;
	}
	public void setOrderpricetol(BigDecimal orderpricetol) {
		this.orderpricetol = orderpricetol;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getCategory1() {
		return category1;
	}
	public String getCategory2() {
		return category2;
	}
	public String getCategory3() {
		return category3;
	}
	public Integer getDemandtype() {
		return demandtype;
	}
	public String getPackageid() {
		return packageid;
	}
	public String getOrdername() {
		return ordername;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public BigDecimal getOrderprice() {
		return orderprice;
	}
	public String getTargethumen() {
		return targethumen;
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
	public String getBegintime() {
		return begintime;
	}
	public String getEndtime() {
		return endtime;
	}
	public String getStandardoperation() {
		return standardoperation;
	}
	public String getOtherreport() {
		return otherreport;
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
	public String getDemand() {
		return demand;
	}
	public Integer getFdstate() {
		return fdstate;
	}
	public String getDremark() {
		return dremark;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setCategory1(String category1) {
		this.category1 = category1;
	}
	public void setCategory2(String category2) {
		this.category2 = category2;
	}
	public void setCategory3(String category3) {
		this.category3 = category3;
	}
	public void setDemandtype(Integer demandtype) {
		this.demandtype = demandtype;
	}
	public void setPackageid(String packageid) {
		this.packageid = packageid;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public void setOrderprice(BigDecimal orderprice) {
		this.orderprice = orderprice;
	}
	public void setTargethumen(String targethumen) {
		this.targethumen = targethumen;
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
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	public void setStandardoperation(String standardoperation) {
		this.standardoperation = standardoperation;
	}
	public void setOtherreport(String otherreport) {
		this.otherreport = otherreport;
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
	public void setDemand(String demand) {
		this.demand = demand;
	}
	public void setFdstate(Integer fdstate) {
		this.fdstate = fdstate;
	}
	public void setDremark(String dremark) {
		this.dremark = dremark;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
}