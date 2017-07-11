package com.mso.model;

import java.math.BigDecimal;
import java.util.List;

import com.mso.input.areaCity;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class HfpDetail implements java.io.Serializable  {
	private List<areaCity> areaCityList;//多个区域列表
	private String pid;
	private String jfuid;
	private String demandname;//需求名
	private String demanddescription;//需求描述
	private Integer fdstate;//发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回      4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  8-暂停
	private Integer demandtype;//需求类型   1-套餐    2-个性化需求
	private String packageid;//demandtype 为1-套餐时       对应h_f_package 的主键id
	private String industry;//成人教育
	private BigDecimal demandpricetol;//	包总价：45元
	private Integer releasenum;//	包发布量：2000条
	private Integer applicationnum;//	包审核通过竞拍数量：1900条
	private String paymentstandard ;//结算模式
	private Integer finishnum;//	包完成数量：1800条
	private String servicetype;//业务类型      1-销售线索挖掘  2-数据加工  3-人工客服 
	private BigDecimal paymentmoney;//结算金额
	private BigDecimal pprice;//单价  数据清洗
	private String releasetime;//审核通过时间
	private String begintime;//需求开始时间
	private String endtime;//需求结束时间
	private String pleader;//  套餐/项目负责人
	private String pphone;//  套餐/负责人电话
	private String createtime;//创建时间
	private String updatetime;//修改时间
	private String finishtime;//完成时间
	private Integer pause;//是否暂停 0-不暂停 1-暂停
	private String pausedescription;//暂停原因
    private String otherreport;//其他附件url/目标客户名单
	private String xsxsurl;//销售线索url
	private String standardoperation;//套餐/标准话术url
	private String productaccessories;//产品附件
	private String demand;//产品描述
	private String productname;//产品名
	
	private String targethumen;//目标人群
	private Integer beginage;//开始年龄
	private Integer endage;//结束年龄
    private String cleaningchannel;//清洗渠道
    private String category2;//获客渠道  电话营销   网络营销  地推推广
    private String remark;//操作备注    =驳回原因
    private Integer trusteeship;//是否托管 0-非托管 1-托管
    private String twolevindustry;
    private String threelevindustry;
    private BigDecimal price;//对应自定义 三级标签的threelevindustry
	private String customlabel;
	
	private String newIndustryId;  //新行业标签的id 2.4.1 by liu
	private BigDecimal newIndustryPrice;  //新行业标签的价格 2.4.1 by liu
	
	
    public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getCustomlabel() {
		return customlabel;
	}
	public void setCustomlabel(String customlabel) {
		this.customlabel = customlabel;
	}
	//选择的标签
	private List<PLabel> selectedlist;
    public List<PLabel> getSelectedlist() {
		return selectedlist;
	}
	public void setSelectedlist(List<PLabel> selectedlist) {
		this.selectedlist = selectedlist;
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
	public Integer getTrusteeship() {
		return trusteeship;
	}
	public void setTrusteeship(Integer trusteeship) {
		this.trusteeship = trusteeship;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	private List<DemandProgress> demandProgressList;//需求进度列表
    
    private long syDay;//
	public long getSyDay() {
		return syDay;
	}
	public void setSyDay(long syDay) {
		this.syDay = syDay;
	}
	public List<DemandProgress> getDemandProgressList() {
		return demandProgressList;
	}
	public void setDemandProgressList(List<DemandProgress> demandProgressList) {
		this.demandProgressList = demandProgressList;
	}
	public BigDecimal getPprice() {
		return pprice;
	}
	public void setPprice(BigDecimal pprice) {
		this.pprice = pprice;
	}
	public String getCategory2() {
		return category2;
	}
	public void setCategory2(String category2) {
		this.category2 = category2;
	}
	public String getCleaningchannel() {
		return cleaningchannel;
	}
	public void setCleaningchannel(String cleaningchannel) {
		this.cleaningchannel = cleaningchannel;
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
	public void setTargethumen(String targethumen) {
		this.targethumen = targethumen;
	}
	public void setBeginage(Integer beginage) {
		this.beginage = beginage;
	}
	public void setEndage(Integer endage) {
		this.endage = endage;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getDemand() {
		return demand;
	}
	public void setDemand(String demand) {
		this.demand = demand;
	}
	public String getProductaccessories() {
		return productaccessories;
	}
	public void setProductaccessories(String productaccessories) {
		this.productaccessories = productaccessories;
	}
	public List<areaCity> getAreaCityList() {
		return areaCityList;
	}
	public void setAreaCityList(List<areaCity> areaCityList) {
		this.areaCityList = areaCityList;
	}
	public String getOtherreport() {
		return otherreport;
	}
	public String getXsxsurl() {
		return xsxsurl;
	}
	public String getStandardoperation() {
		return standardoperation;
	}
	public void setOtherreport(String otherreport) {
		this.otherreport = otherreport;
	}
	public void setXsxsurl(String xsxsurl) {
		this.xsxsurl = xsxsurl;
	}
	public void setStandardoperation(String standardoperation) {
		this.standardoperation = standardoperation;
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
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getFinishtime() {
		return finishtime;
	}
	public void setFinishtime(String finishtime) {
		this.finishtime = finishtime;
	}
	public String getPid() {
		return pid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getDemandname() {
		return demandname;
	}
	public String getDemanddescription() {
		return demanddescription;
	}
	public Integer getFdstate() {
		return fdstate;
	}
	public Integer getDemandtype() {
		return demandtype;
	}
	public String getPackageid() {
		return packageid;
	}
	public BigDecimal getDemandpricetol() {
		return demandpricetol;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public Integer getFinishnum() {
		return finishnum;
	}
	public Integer getApplicationnum() {
		return applicationnum;
	}
	public String getPaymentstandard() {
		return paymentstandard;
	}
	public String getServicetype() {
		return servicetype;
	}
	public String getReleasetime() {
		return releasetime;
	}
	public String getBegintime() {
		return begintime;
	}
	public String getEndtime() {
		return endtime;
	}
	public String getPleader() {
		return pleader;
	}
	public String getPphone() {
		return pphone;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setDemandname(String demandname) {
		this.demandname = demandname;
	}
	public void setDemanddescription(String demanddescription) {
		this.demanddescription = demanddescription;
	}
	public void setFdstate(Integer fdstate) {
		this.fdstate = fdstate;
	}
	public void setDemandtype(Integer demandtype) {
		this.demandtype = demandtype;
	}
	public void setPackageid(String packageid) {
		this.packageid = packageid;
	}
	public void setDemandpricetol(BigDecimal demandpricetol) {
		this.demandpricetol = demandpricetol;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public void setFinishnum(Integer finishnum) {
		this.finishnum = finishnum;
	}
	public void setApplicationnum(Integer applicationnum) {
		this.applicationnum = applicationnum;
	}
	public void setPaymentstandard(String paymentstandard) {
		this.paymentstandard = paymentstandard;
	}
	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	public void setPleader(String pleader) {
		this.pleader = pleader;
	}
	public void setPphone(String pphone) {
		this.pphone = pphone;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public BigDecimal getPaymentmoney() {
		return paymentmoney;
	}
	public void setPaymentmoney(BigDecimal paymentmoney) {
		this.paymentmoney = paymentmoney;
	}
	public String getNewIndustryId() {
		return newIndustryId;
	}
	public void setNewIndustryId(String newIndustryId) {
		this.newIndustryId = newIndustryId;
	}
	public BigDecimal getNewIndustryPrice() {
		return newIndustryPrice;
	}
	public void setNewIndustryPrice(BigDecimal newIndustryPrice) {
		this.newIndustryPrice = newIndustryPrice;
	}
	
	
	
	
}