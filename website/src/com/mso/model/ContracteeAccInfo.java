package com.mso.model;

import com.mso.utils.StringUtil;

public class ContracteeAccInfo {
	
	private Integer contactsphone;
	private String jfuid;
	private String compname;
	private String brandname;
	private String compaddr;
	private String compemail;
	private String realname;
	private String contacts;
	private String complicense;
	private String comptaxcer;
	private String comporgcode;
	
	
	public String getComplicense() {
		return complicense;
	}

	public void setComplicense(String complicense) {
		this.complicense = complicense;
	}

	public String getComptaxcer() {
		return comptaxcer;
	}

	public void setComptaxcer(String comptaxcer) {
		this.comptaxcer = comptaxcer;
	}

	public String getComporgcode() {
		return comporgcode;
	}

	public void setComporgcode(String comporgcode) {
		this.comporgcode = comporgcode;
	}

	public ContracteeAccInfo() {
		super();	
	}
	
	public ContracteeAccInfo(String jfuid) {
		super();
		this.jfuid = jfuid;
	}

	public ContracteeAccInfo(Integer contactsphone, String jfuid,
			String compname, String brandname, String compaddr,
			String compemail, String realname, String contacts) {
		super();
		this.contactsphone = contactsphone;
		this.jfuid = jfuid;
		this.compname = compname;
		this.brandname = brandname;
		this.compaddr = compaddr;
		this.compemail = compemail;
		this.realname = realname;
		this.contacts = contacts;
	}

	public Integer getContactsphone() {
		return contactsphone;
	}
	public void setContactsphone(Integer contactsphone) {
		this.contactsphone = contactsphone;
	}
	
	public String getJfuid() {
		return jfuid;
	}

	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	
	public String getCompname() {
		return compname;
	}
	public void setCompname(String compname) {
		this.compname = compname;
	}
	public String getBrandname() {
		return brandname;
	}
	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}
	public String getCompaddr() {
		return compaddr;
	}
	public void setCompaddr(String compaddr) {
		this.compaddr = compaddr;
	}
	public String getCompemail() {
		return compemail;
	}
	public void setCompemail(String compemail) {
		this.compemail = compemail;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public String getContacts() {
		return contacts;
	}
	public void setContacts(String contacts) {
		this.contacts = contacts;
	}


	
	

}
