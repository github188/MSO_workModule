package com.mso.model;

/**
 * IndustryDynamics entity. @author MyEclipse Persistence Tools
 */

public class IndustryDynamics{

	

	private Integer indyid;
	private String userid;
	private String title;
	private String remark;
	private String industrytime;
	private String createtime;
	private String updatetime;

	public IndustryDynamics() {
	}

	
	public IndustryDynamics(String userid, String title, String remark,
			String industrytime, String createtime, String updatetime) {
		this.userid = userid;
		this.title = title;
		this.remark = remark;
		this.industrytime = industrytime;
		this.createtime = createtime;
		this.updatetime = updatetime;
	}

	

	public Integer getIndyid() {
		return this.indyid;
	}

	public void setIndyid(Integer indyid) {
		this.indyid = indyid;
	}

	public String getUserid() {
		return this.userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getRemark() {
		return this.remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getIndustrytime() {
		return this.industrytime;
	}

	public void setIndustrytime(String industrytime) {
		this.industrytime = industrytime;
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

}