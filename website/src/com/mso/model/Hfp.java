package com.mso.model;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */
public class Hfp implements java.io.Serializable  {
	private String pid;//包id
	private String jfuid;
	private String demandname;//需求名
	private String demanddescription;//需求描述
	private Integer fdstate;//发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回      4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭  
	private Integer distributionstate;//后台需求状态 0未分配 1-已分配2-处理中 3-通过 4-驳回  5-驳回再次提交
	private Integer demandtype;//需求类型   1-套餐    2-个性化需求
	private String packageid;//demandtype 为1-套餐时       对应h_f_package 的主键id
	private String industry;//成人教育  一级分类
	private String twolevindustry;//  二级行业
	private String threelevindustry;//三级行业
	private BigDecimal demandpricetol;//	包总价：45元
	private Integer releasenum;//	包发布量：2000条
	private Integer applicationnum;//	包审核通过竞拍数量：1900条
	private String paymentstandard ;//结算标准  1-质检结算  2-二访结算
	private Integer finishnum;//	包完成数量：1800条
	private String servicetype;//业务类型      1-销售线索挖掘  2-数据加工  3-人工客服  
	private Integer favorableway;//优惠方式 0-无优惠 1-免手续费
	private Integer paymentnum;//结算数量
	private BigDecimal paymentmoney;//结算总价
	private BigDecimal demandprice; //需求单价
	private String remark;//操作备注      多个备注 用   - 链接
	private String paymenttime;//结算日期
	private String releasetime;//审核通过时间
	private String begintime;//需求开始时间
	private String endtime;//需求结束时间
	private String pleader;//  套餐/项目负责人
	private String pphone;//  套餐/负责人电话
	private String createtime;//创建时间
	private String updatetime;//修改时间
	private String finishtime;//完成时间
	private Integer[] strzt;
	private String otherreport;//其他附件url/目标客户名单
	private String xsxsurl;//销售线索url
	private String standardoperation;//套餐/标准话术url
	private Integer pause;//是否暂停 0-不暂停 1-暂停
	private String pausedescription;//暂停原因
	private String par;
	private String productaccessories;//产品附件
	private String beginreleasetime;
	private String endreleasetime;
	
	private String begincreatetime;//创建时间开始时间
	private String endcreatetime;
	private Integer trusteeship;//是否托管 0-非托管 1-托管
	private String customlabel;// 自定义标签 json 格式
	
	public String getEndcreatetime() {
		return endcreatetime;
	}
	public void setEndcreatetime(String endcreatetime) {
		this.endcreatetime = endcreatetime;
	}
	public String getBegincreatetime() {
		return begincreatetime;
	}
	public void setBegincreatetime(String begincreatetime) {
		this.begincreatetime = begincreatetime;
	}
	public String getCustomlabel() {
		return customlabel;
	}
	public void setCustomlabel(String customlabel) {
		this.customlabel = customlabel;
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
	public String getProductaccessories() {
		return productaccessories;
	}
	public void setProductaccessories(String productaccessories) {
		this.productaccessories = productaccessories;
	}
	public BigDecimal getDemandprice() {
		return demandprice;
	}
	public void setDemandprice(BigDecimal demandprice) {
		this.demandprice = demandprice;
	}
	public String getPar() {
		return par;
	}
	public void setPar(String par) {
		this.par = par;
	}
	public String getBeginreleasetime() {
		return beginreleasetime;
	}
	public String getEndreleasetime() {
		return endreleasetime;
	}
	public void setBeginreleasetime(String beginreleasetime) {
		this.beginreleasetime = beginreleasetime;
	}
	public void setEndreleasetime(String endreleasetime) {
		this.endreleasetime = endreleasetime;
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
	private Integer currentPage;
	
	public Integer getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
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
	public Integer[] getStrzt() {
		return strzt;
	}
	public void setStrzt(Integer[] strzt) {
		this.strzt = strzt;
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
	public Integer getDistributionstate() {
		return distributionstate;
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
	public Integer getFavorableway() {
		return favorableway;
	}
	public Integer getPaymentnum() {
		return paymentnum;
	}
	public BigDecimal getPaymentmoney() {
		return paymentmoney;
	}
	public String getRemark() {
		return remark;
	}
	public String getPaymenttime() {
		return paymenttime;
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
	public void setDistributionstate(Integer distributionstate) {
		this.distributionstate = distributionstate;
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
	public void setFavorableway(Integer favorableway) {
		this.favorableway = favorableway;
	}
	public void setPaymentnum(Integer paymentnum) {
		this.paymentnum = paymentnum;
	}
	public void setPaymentmoney(BigDecimal paymentmoney) {
		this.paymentmoney = paymentmoney;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public void setPaymenttime(String paymenttime) {
		this.paymenttime = paymenttime;
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
}