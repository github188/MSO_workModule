package com.mso.model;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class HFUserDetail implements java.io.Serializable {

	private String jfuid;
	private String compname;
	private String brandname;
	private String realname;
	private String headurl;
	private String contacts;
	private String contactsphone;
	private String contactsdep;
	private String contactsposition;
	private String compaddr;
	private String compind;
	private String compwebsite;
	private String compemail;
	private String complicense;
	private String comptaxcer;
	private String comporgcode;
	private String compimg;//公司图片
	private String createtime;
	private String updatetime;
	private String fax;
	private String postcode;
	private String accountname;
	private String bankaccount;
	private String comaccount;
	private String companysize;
	private String dbtype;
	private String datacity;
	private String goodpro;
	private String approveremark;
	private String jfutype;//1-发包方   2-接包方
	private String pid;
	private Integer trusteeship;//是否托管 0-非托管 1-托管
	private Integer jfustate;//   0-初始状态(注册未完善资料) 1-填写资料-提交    2-已分配    4-已审核    3-驳回    ',   
	private Integer jfudisable;//1-启用  2-停用
	private String isEditStr;//是否可以编辑  0/3可以编辑(Y)
	private String headurls;
	private String complicenses;
	private String comptaxcers;
	private String comporgcodes;
	
	public String getCompimg() {
		return compimg;
	}
	public void setCompimg(String compimg) {
		this.compimg = compimg;
	}
	public Integer getTrusteeship() {
		return trusteeship;
	}
	public void setTrusteeship(Integer trusteeship) {
		this.trusteeship = trusteeship;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	private String invitationcode;
	public String getInvitationcode() {
		return invitationcode;
	}
	public void setInvitationcode(String invitationcode) {
		this.invitationcode = invitationcode;
	}
	public String getBrandname() {
		return brandname;
	}
	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}
	public String getJfutype() {
		return jfutype;
	}
	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}
	public String getApproveremark() {
		return approveremark;
	}
	public void setApproveremark(String approveremark) {
		this.approveremark = approveremark;
	}
	
	  


	
	// Fields
	private String jfuname;//用户名/昵称-用于登录(3-20 位    不区分大小写)
	
	public String getJfuname() {
		return jfuname;
	}

	public void setJfuname(String jfuname) {
		this.jfuname = jfuname;
	}
	
	public String getHeadurls() {
		return headurls;
	}

	public String getComplicenses() {
		return complicenses;
	}

	public String getComptaxcers() {
		return comptaxcers;
	}

	public String getComporgcodes() {
		return comporgcodes;
	}

	public void setHeadurls(String headurls) {
		this.headurls = headurls;
	}

	public void setComplicenses(String complicenses) {
		this.complicenses = complicenses;
	}

	public void setComptaxcers(String comptaxcers) {
		this.comptaxcers = comptaxcers;
	}

	public void setComporgcodes(String comporgcodes) {
		this.comporgcodes = comporgcodes;
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



	public String getIsEditStr() {
		return isEditStr;
	}

	public void setIsEditStr(String isEditStr) {
		this.isEditStr = isEditStr;
	}

	public Integer getJfustate() {
		return jfustate;
	}

	public Integer getJfudisable() {
		return jfudisable;
	}

	public void setJfustate(Integer jfustate) {
		this.jfustate = jfustate;
	}

	public void setJfudisable(Integer jfudisable) {
		this.jfudisable = jfudisable;
	}

	/** default constructor */
	public HFUserDetail() {
	}

	/** minimal constructor */
	public HFUserDetail(String jfuid) {
		this.jfuid = jfuid;
	}

	/** full constructor */
	public HFUserDetail(String jfuid, String compname, String realname,
			String headurl, String contacts, String contactsphone,
			String contactsdep, String contactsposition, String compaddr,
			String compind, String compwebsite, String compemail,
			String complicense, String comptaxcer, String comporgcode,
			String createtime, String updatetime) {
		this.jfuid = jfuid;
		this.compname = compname;
		this.realname = realname;
		this.headurl = headurl;
		this.contacts = contacts;
		this.contactsphone = contactsphone;
		this.contactsdep = contactsdep;
		this.contactsposition = contactsposition;
		this.compaddr = compaddr;
		this.compind = compind;
		this.compwebsite = compwebsite;
		this.compemail = compemail;
		this.complicense = complicense;
		this.comptaxcer = comptaxcer;
		this.comporgcode = comporgcode;
		this.createtime = createtime;
		this.updatetime = updatetime;
	}

	// Property accessors

	public String getJfuid() {
		return this.jfuid;
	}

	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}

	public String getCompname() {
		return this.compname;
	}

	public void setCompname(String compname) {
		this.compname = compname;
	}

	public String getRealname() {
		return this.realname;
	}

	public void setRealname(String realname) {
		this.realname = realname;
	}

	public String getHeadurl() {
		return this.headurl;
	}

	public void setHeadurl(String headurl) {
		this.headurl = headurl;
	}

	public String getContacts() {
		return this.contacts;
	}

	public void setContacts(String contacts) {
		this.contacts = contacts;
	}

	public String getContactsphone() {
		return this.contactsphone;
	}

	public void setContactsphone(String contactsphone) {
		this.contactsphone = contactsphone;
	}

	public String getContactsdep() {
		return this.contactsdep;
	}

	public void setContactsdep(String contactsdep) {
		this.contactsdep = contactsdep;
	}

	public String getContactsposition() {
		return this.contactsposition;
	}

	public void setContactsposition(String contactsposition) {
		this.contactsposition = contactsposition;
	}

	public String getCompaddr() {
		return this.compaddr;
	}

	public void setCompaddr(String compaddr) {
		this.compaddr = compaddr;
	}

	public String getCompind() {
		return this.compind;
	}

	public void setCompind(String compind) {
		this.compind = compind;
	}

	public String getCompwebsite() {
		return this.compwebsite;
	}

	public void setCompwebsite(String compwebsite) {
		this.compwebsite = compwebsite;
	}

	public String getCompemail() {
		return this.compemail;
	}

	public void setCompemail(String compemail) {
		this.compemail = compemail;
	}

	public String getComplicense() {
		return this.complicense;
	}

	public void setComplicense(String complicense) {
		this.complicense = complicense;
	}

	public String getComptaxcer() {
		return this.comptaxcer;
	}

	public void setComptaxcer(String comptaxcer) {
		this.comptaxcer = comptaxcer;
	}

	public String getComporgcode() {
		return this.comporgcode;
	}

	public void setComporgcode(String comporgcode) {
		this.comporgcode = comporgcode;
	}

	public String getCreatetime() {
		return this.createtime;
	}

	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}

	public String getUpdatetime() {
		return this.updatetime;
	}

	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	@Override
	public String toString() {
		return "HFUserDetail [jfuid=" + jfuid + ", compname=" + compname + ", brandname=" + brandname + ", realname="
				+ realname + ", headurl=" + headurl + ", contacts=" + contacts + ", contactsphone=" + contactsphone
				+ ", contactsdep=" + contactsdep + ", contactsposition=" + contactsposition + ", compaddr=" + compaddr
				+ ", compind=" + compind + ", compwebsite=" + compwebsite + ", compemail=" + compemail
				+ ", complicense=" + complicense + ", comptaxcer=" + comptaxcer + ", comporgcode=" + comporgcode
				+ ", compimg=" + compimg + ", createtime=" + createtime + ", updatetime=" + updatetime + ", fax=" + fax
				+ ", postcode=" + postcode + ", accountname=" + accountname + ", bankaccount=" + bankaccount
				+ ", comaccount=" + comaccount + ", companysize=" + companysize + ", dbtype=" + dbtype + ", datacity="
				+ datacity + ", goodpro=" + goodpro + ", approveremark=" + approveremark + ", jfutype=" + jfutype
				+ ", pid=" + pid + ", trusteeship=" + trusteeship + ", jfustate=" + jfustate + ", jfudisable="
				+ jfudisable + ", isEditStr=" + isEditStr + ", headurls=" + headurls + ", complicenses=" + complicenses
				+ ", comptaxcers=" + comptaxcers + ", comporgcodes=" + comporgcodes + ", invitationcode="
				+ invitationcode + ", jfuname=" + jfuname + "]";
	}
	
	

}