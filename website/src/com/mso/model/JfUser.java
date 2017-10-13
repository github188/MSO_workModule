package com.mso.model;

import java.io.Serializable;

/**
 * 用户
 */
public class JfUser extends BaseSeach implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String jfuid;//接包方/发包方 表识
	private String jfutype;//1-发包方   2-接包方
	
	/*
	 * 发包方完善字段
	 */
	private String compname;//公司名称/公司全称
	private String brandname;//品牌名/公司简称
	private String compaddr;//公司地址
	private String compind;// 所属行业/擅长行业
	private String compwebsite;//公司网站
	private String compimg;//公司图片
	private String contacts;//联系人
	private String contactsphone;//联系人电话
	private String compemail;//电子邮箱
	private String complicense;//营业执照
	private String comptaxcer;//税务登记证
	private String comporgcode;//组织机构代码
	
	private String goodpro;//擅长项目
	private String companysize;//公司规模
	private String qq;//
	private Integer hasdb;//是否自有数据库  0-无   1-有
	private String datacity;// 数据分布城市  多个，隔开
	private String accountname;//开户名称
	private String bankaccount;//开户行
	private String comaccount;//公司账号
	private Integer openinvoicetype;//开发票类型  1-增票(一般纳税人) 2- 增票(小规模纳税人) 3-普票
	
	
	
	

	private String contactsdep;
	private String contactsposition;
	private String pid;//是否是子账号
	private String jfuname;//用户名/昵称-用于登录(3-20 位    不区分大小写)
	private String jfunamelowercase;//用户名小写)  
	private String realname;//您的姓名  注册可以插入jfuname
	private String jfuinvitationcode;//邀请码
	private String invitationcode;   //系统自动生成的邀请码
	private Integer jfustate;//接包方/发包方-当前用户信息的状态        0-初始状态(注册未完善资料) 1-填写资料-提交     3-驳回        4-已审核 
	private Integer logontimes;//登录次数      新用户值为 0 或者为空
	private Integer distributionstate;   //1-初始状态  2-已分配
	private Integer jfudisable;//1-启用  2-停用
	private String jfumobilephone;//手机号
	private String createtime;
	private String updatetime;
	
	private String jfupassword;//密码(密文)用于登录(6-20 位    区分大小写)
	private String oldPassword;
    private String newPassword;			
    private String newCPassword;
    
    
    private String remember;//1 记住密码
	private String headurl;
	private String approveremark;
	private String fax;
	private String postcode;
	private String dbtype;
	private Integer usersouce;//用户来源  0-官网  1-第三方页面
	
	private String shortname;//公司简称...
	
	public Integer getUsersouce() {
		return usersouce;
	}
	public void setUsersouce(Integer usersouce) {
		this.usersouce = usersouce;
	}
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
	public String getBrandname() {
		return brandname;
	}
	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}
	public String getInvitationcode() {
		return invitationcode;
	}
	public void setInvitationcode(String invitationcode) {
		this.invitationcode = invitationcode;
	}
	public String getRemember() {
		return remember;
	}
	public void setRemember(String remember) {
		this.remember = remember;
	}
	public String getApproveremark() {
		return approveremark;
	}
	public void setApproveremark(String approveremark) {
		this.approveremark = approveremark;
	}
	public Integer getDistributionstate() {
		return distributionstate;
	}
	public void setDistributionstate(Integer distributionstate) {
		this.distributionstate = distributionstate;
	}
	
	public String getFax() {
		return fax;
	}
	public String getPostcode() {
		return postcode;
	}
	public String getAccountname() {
		return accountname;
	}
	public String getBankaccount() {
		return bankaccount;
	}
	public String getComaccount() {
		return comaccount;
	}
	public String getCompanysize() {
		return companysize;
	}
	public String getDbtype() {
		return dbtype;
	}
	public String getDatacity() {
		return datacity;
	}
	public String getGoodpro() {
		return goodpro;
	}
	public void setFax(String fax) {
		this.fax = fax;
	}
	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}
	public void setAccountname(String accountname) {
		this.accountname = accountname;
	}
	public void setBankaccount(String bankaccount) {
		this.bankaccount = bankaccount;
	}
	public void setComaccount(String comaccount) {
		this.comaccount = comaccount;
	}
	public void setCompanysize(String companysize) {
		this.companysize = companysize;
	}
	public void setDbtype(String dbtype) {
		this.dbtype = dbtype;
	}
	public void setDatacity(String datacity) {
		this.datacity = datacity;
	}
	public void setGoodpro(String goodpro) {
		this.goodpro = goodpro;
	}
	public String getOldPassword() {
		return oldPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public String getNewCPassword() {
		return newCPassword;
	}
	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	public void setNewCPassword(String newCPassword) {
		this.newCPassword = newCPassword;
	}
	public String getJfunamelowercase() {
		return jfunamelowercase;
	}
	public String getRealname() {
		return realname;
	}
	public String getCompname() {
		return compname;
	}
	public String getHeadurl() {
		return headurl;
	}
	public String getContacts() {
		return contacts;
	}
	public String getContactsphone() {
		return contactsphone;
	}
	public String getContactsdep() {
		return contactsdep;
	}
	public String getContactsposition() {
		return contactsposition;
	}
	public String getCompaddr() {
		return compaddr;
	}
	public String getCompind() {
		return compind;
	}
	public String getCompwebsite() {
		return compwebsite;
	}
	public String getCompemail() {
		return compemail;
	}
	public String getComplicense() {
		return complicense;
	}
	public String getComptaxcer() {
		return comptaxcer;
	}
	public String getComporgcode() {
		return comporgcode;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public void setCompname(String compname) {
		this.compname = compname;
	}
	public void setHeadurl(String headurl) {
		this.headurl = headurl;
	}
	public void setContacts(String contacts) {
		this.contacts = contacts;
	}
	public void setContactsphone(String contactsphone) {
		this.contactsphone = contactsphone;
	}
	public void setContactsdep(String contactsdep) {
		this.contactsdep = contactsdep;
	}
	public void setContactsposition(String contactsposition) {
		this.contactsposition = contactsposition;
	}
	public void setCompaddr(String compaddr) {
		this.compaddr = compaddr;
	}
	public void setCompind(String compind) {
		this.compind = compind;
	}
	public void setCompwebsite(String compwebsite) {
		this.compwebsite = compwebsite;
	}
	public void setCompemail(String compemail) {
		this.compemail = compemail;
	}
	public void setComplicense(String complicense) {
		this.complicense = complicense;
	}
	public void setComptaxcer(String comptaxcer) {
		this.comptaxcer = comptaxcer;
	}
	public void setComporgcode(String comporgcode) {
		this.comporgcode = comporgcode;
	}
	public void setJfunamelowercase(String jfunamelowercase) {
		this.jfunamelowercase = jfunamelowercase;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getJfutype() {
		return jfutype;
	}
	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getJfuname() {
		return jfuname;
	}
	public void setJfuname(String jfuname) {
		this.jfuname = jfuname;
	}
	public String getJfupassword() {
		return jfupassword;
	}
	public void setJfupassword(String jfupassword) {
		this.jfupassword = jfupassword;
	}
	public String getJfuinvitationcode() {
		return jfuinvitationcode;
	}
	public void setJfuinvitationcode(String jfuinvitationcode) {
		this.jfuinvitationcode = jfuinvitationcode;
	}
	public Integer getJfustate() {
		return jfustate;
	}
	public void setJfustate(Integer jfustate) {
		this.jfustate = jfustate;
	}
	public Integer getJfudisable() {
		return jfudisable;
	}
	public void setJfudisable(Integer jfudisable) {
		this.jfudisable = jfudisable;
	}
	public String getJfumobilephone() {
		return jfumobilephone;
	}
	public void setJfumobilephone(String jfumobilephone) {
		this.jfumobilephone = jfumobilephone;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public Integer getLogontimes() {
		return logontimes;
	}
	public void setLogontimes(Integer logontimes) {
		this.logontimes = logontimes;
	}
	public String getCompimg() {
		return compimg;
	}
	public void setCompimg(String compimg) {
		this.compimg = compimg;
	}
	public Integer getHasdb() {
		return hasdb;
	}
	public void setHasdb(Integer hasdb) {
		this.hasdb = hasdb;
	}
	public Integer getOpeninvoicetype() {
		return openinvoicetype;
	}
	public void setOpeninvoicetype(Integer openinvoicetype) {
		this.openinvoicetype = openinvoicetype;
	}
	public String getShortname() {
		return shortname;
	}
	public void setShortname(String shortname) {
		this.shortname = shortname;
	}
	
	
	
	
}
