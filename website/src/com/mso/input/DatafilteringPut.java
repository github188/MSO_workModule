package com.mso.input;

import java.math.BigDecimal;
import java.util.List;

import com.mso.utils.StringUtil;


public class DatafilteringPut{
	private String pcdid;//销售线索挖掘需求包主键id
	private String pid;//包id
	private String servicetype;
	private String ordername;//需求名
	private String industry;//行业
	private Integer releasenum;//
	private String cleaningchannel;//清洗 1-电话
	private String demanddescription;//需求描述
	private String releasetime;//审核通过时间/开始时间
	private Integer fdstate;
	private Integer distributionstate;
	private String jfuid;
	private String jfutype;//用户类型 接包方/发包方
	private Integer demandtype;  //需求类型   1-套餐    2-个性化需求
	private String packageid;
	private BigDecimal demandprice;//需求单价
	private String begintime;
	private String endtime;
	private String finishtime;//完成时间
	private String remark;
	private Integer finishnum;
	private Integer applicationnum;
	private String paymenttime;//结算时间
	private BigDecimal paymentmoney;//结算总价
	private Integer paymentnum;
	private String paymentstandard;//结算标准
	private Integer favorableway;//优惠方式 0-无优惠 1-免手续费
	private String pleader;
	private String pphone;
	private String createtime;
	private String updatetime;
	private String otherreport;//其他附件url/目标客户名单    数据加工  换成json 格式
	private String xsxsurl;//销售线索url
	private String standardoperation;//套餐/标准话术url
	
	public BigDecimal getDemandprice() {
		return demandprice;
	}

	public void setDemandprice(BigDecimal demandprice) {
		this.demandprice = demandprice;
	}

	private BigDecimal demandpricetol;//需求总价
	public BigDecimal getDemandpricetol() {
		return demandpricetol;
	}

	public void setDemandpricetol(BigDecimal demandpricetol) {
		this.demandpricetol = demandpricetol;
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

	public String getPcdid() {
		return pcdid;
	}

	public String getPid() {
		return pid;
	}

	public String getServicetype() {
		return servicetype;
	}

	public String getOrdername() {
		return ordername;
	}

	public String getIndustry() {
		return industry;
	}

	public Integer getReleasenum() {
		return releasenum;
	}

	public String getCleaningchannel() {
		return cleaningchannel;
	}

	public String getDemanddescription() {
		return demanddescription;
	}

	public String getReleasetime() {
		return releasetime;
	}

	public Integer getFdstate() {
		return fdstate;
	}

	public Integer getDistributionstate() {
		return distributionstate;
	}

	public String getJfuid() {
		return jfuid;
	}

	public String getJfutype() {
		return jfutype;
	}

	public Integer getDemandtype() {
		return demandtype;
	}

	public String getPackageid() {
		return packageid;
	}


	public String getBegintime() {
		return begintime;
	}

	public String getEndtime() {
		return endtime;
	}

	public String getFinishtime() {
		return finishtime;
	}

	public String getRemark() {
		return remark;
	}

	public Integer getFinishnum() {
		return finishnum;
	}

	public Integer getApplicationnum() {
		return applicationnum;
	}

	public String getPaymenttime() {
		return paymenttime;
	}

	public BigDecimal getPaymentmoney() {
		return paymentmoney;
	}

	public Integer getPaymentnum() {
		return paymentnum;
	}

	public String getPaymentstandard() {
		return paymentstandard;
	}

	public Integer getFavorableway() {
		return favorableway;
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

	public void setPcdid(String pcdid) {
		this.pcdid = pcdid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}

	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}

	public void setIndustry(String industry) {
		this.industry = industry;
	}

	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}

	public void setCleaningchannel(String cleaningchannel) {
		this.cleaningchannel = cleaningchannel;
	}

	public void setDemanddescription(String demanddescription) {
		this.demanddescription = demanddescription;
	}

	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}

	public void setFdstate(Integer fdstate) {
		this.fdstate = fdstate;
	}

	public void setDistributionstate(Integer distributionstate) {
		this.distributionstate = distributionstate;
	}

	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}

	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}

	public void setDemandtype(Integer demandtype) {
		this.demandtype = demandtype;
	}

	public void setPackageid(String packageid) {
		this.packageid = packageid;
	}

	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public void setFinishtime(String finishtime) {
		this.finishtime = finishtime;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public void setFinishnum(Integer finishnum) {
		this.finishnum = finishnum;
	}

	public void setApplicationnum(Integer applicationnum) {
		this.applicationnum = applicationnum;
	}

	public void setPaymenttime(String paymenttime) {
		this.paymenttime = paymenttime;
	}

	public void setPaymentmoney(BigDecimal paymentmoney) {
		this.paymentmoney = paymentmoney;
	}

	public void setPaymentnum(Integer paymentnum) {
		this.paymentnum = paymentnum;
	}

	public void setPaymentstandard(String paymentstandard) {
		this.paymentstandard = paymentstandard;
	}

	public void setFavorableway(Integer favorableway) {
		this.favorableway = favorableway;
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

	public String validate() {
		String str="";
//		if(areaCityList==null||areaCityList.size()<=0){
//			str="请填写发布分布信息!";
//		}
		if(StringUtil.isNull(ordername)){
			str="请填写需求名称!";
		}
		return str;
	}
}
