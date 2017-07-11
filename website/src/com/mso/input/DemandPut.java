package com.mso.input;

import java.math.BigDecimal;
import java.util.List;

import com.mso.model.BaseLabel;
import com.mso.utils.StringUtil;


public class DemandPut{
	private List<areaCity> areaCityList;//多个区域列表
	private String pid;//包id
	private String jfuid;
	private String demandid;
	private String category1;//选择行业及发布类型
	private String category2;//获客渠道/类目2  1-电话营销 2-网络营销 3-地推推广
	private String category3;//业务类型1-销售线索挖掘  -A  2数据加工  3-人工客服 
	private Integer demandtype; //需求类型   1-套餐    2-个性化需求
	private String productname;//产品名
	private String ordername;//需求名
	private String begintime;//需求开始时间
	private String endtime;//需求结束时间
	private String paymentstandard;//结算标准
	private String demanddescription;//需求描述
	private Integer favorableway;//优惠方式 0-无优惠 1-免手续费
	private String jfutype;//用户类型 接包方/发包方

	private Integer fishnum;//完成量
	private String paymenttime;//结算时间
	private Integer distributionstate;
	private String releasetime;//审核通过时间/开始时间
	private String finishtime;//完成时间
	private Integer releasenum;
	
	private String targethumen;
	private Integer beginage;
	private Integer endage;
	private String packageid; 
	private String pleader;
	private String pphone;
	private String demand;//产品描述
	private Integer fdstate;
	private String dremark;
	private String productaccessories;//产品附件
	private String otherreport;//其他附件url/目标客户名单
	private String xsxsurl;//销售线索url
	private String standardoperation;//套餐/标准话术url
	
	private BigDecimal demandpricetol;//包需求总价 
	//行业细分
	private String twolevindustry;//教育培训   二级行业
	private String threelevindustry;//教育培训   三级行业
	private String customlabel;//自定义标签    ===     [{ "labelName": "自定义标签2", "labelPrice": 0},{ "labelName": "自定义标签3","labelPrice": 0}]
	
	private String newIndustryId;  //2.4.1版本新行业的id
	
	//更多标签标签
	private List<BaseLabel> labelList;//多个区域列表  中文姓名/性别/年龄/手机号码/城市/学习目的/学习兴趣/提升点
	
    public String getCustomlabel() {
		return customlabel;
	}
	public void setCustomlabel(String customlabel) {
		this.customlabel = customlabel;
	}
	public List<BaseLabel> getLabelList() {
		return labelList;
	}
	public void setLabelList(List<BaseLabel> labelList) {
		this.labelList = labelList;
	}
	public BigDecimal getDemandpricetol() {
		return demandpricetol;
	}
	public void setDemandpricetol(BigDecimal demandpricetol) {
		this.demandpricetol = demandpricetol;
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
	public String getProductaccessories() {
		return productaccessories;
	}
	public void setProductaccessories(String productaccessories) {
		this.productaccessories = productaccessories;
	}
	public String getPaymenttime() {
		return paymenttime;
	}
	public void setPaymenttime(String paymenttime) {
		this.paymenttime = paymenttime;
	}
	public Integer getFishnum() {
		return fishnum;
	}
	public void setFishnum(Integer fishnum) {
		this.fishnum = fishnum;
	}
	public List<areaCity> getAreaCityList() {
		return areaCityList;
	}
	public void setAreaCityList(List<areaCity> areaCityList) {
		this.areaCityList = areaCityList;
	}
	public String getProductname() {
		return productname;
	}
	public String getBegintime() {
		return begintime;
	}
	public String getXsxsurl() {
		return xsxsurl;
	}
	public String getPaymentstandard() {
		return paymentstandard;
	}
//	public String getPaymenttime() {
//		return paymenttime;
//	}
	public String getDemanddescription() {
		return demanddescription;
	}
	public Integer getFavorableway() {
		return favorableway;
	}
	public String getJfutype() {
		return jfutype;
	}
	public Integer getDistributionstate() {
		return distributionstate;
	}
	public String getReleasetime() {
		return releasetime;
	}
	public String getFinishtime() {
		return finishtime;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getPid() {
		return pid;
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
	public String getTargethumen() {
		return targethumen;
	}
	public Integer getBeginage() {
		return beginage;
	}
	public Integer getEndage() {
		return endage;
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
	public String getDemand() {
		return demand;
	}
	public Integer getFdstate() {
		return fdstate;
	}
	public String getDremark() {
		return dremark;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
	public void setXsxsurl(String xsxsurl) {
		this.xsxsurl = xsxsurl;
	}
	public void setPaymentstandard(String paymentstandard) {
		this.paymentstandard = paymentstandard;
	}
//	public void setPaymenttime(String paymenttime) {
//		this.paymenttime = paymenttime;
//	}
	public void setDemanddescription(String demanddescription) {
		this.demanddescription = demanddescription;
	}
	public void setFavorableway(Integer favorableway) {
		this.favorableway = favorableway;
	}
	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}
	public void setDistributionstate(Integer distributionstate) {
		this.distributionstate = distributionstate;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public void setFinishtime(String finishtime) {
		this.finishtime = finishtime;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setPid(String pid) {
		this.pid = pid;
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
	public void setTargethumen(String targethumen) {
		this.targethumen = targethumen;
	}
	public void setBeginage(Integer beginage) {
		this.beginage = beginage;
	}
	public void setEndage(Integer endage) {
		this.endage = endage;
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
	public void setDemand(String demand) {
		this.demand = demand;
	}
	public void setFdstate(Integer fdstate) {
		this.fdstate = fdstate;
	}
	public void setDremark(String dremark) {
		this.dremark = dremark;
	}
	
	
	
	public String getNewIndustryId() {
		return newIndustryId;
	}
	public void setNewIndustryId(String newIndustryId) {
		this.newIndustryId = newIndustryId;
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

	public void getPriceTol() {
		if(areaCityList==null||areaCityList.size()<=0){
		}
	}
}
