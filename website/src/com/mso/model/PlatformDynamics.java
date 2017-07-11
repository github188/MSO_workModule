package com.mso.model;

/**
 * PlatformDynamics entity. @author MyEclipse Persistence Tools
 */

public class PlatformDynamics {


	private Integer platformid;
	private String userid;
	private String content;
	private String titleurl;
	private String createtime;
	private String updatetime;

	public PlatformDynamics() {
	}
	public PlatformDynamics(String userid, String content, String titleurl,
			String createtime, String updatetime) {
		this.userid = userid;
		this.content = content;
		this.titleurl = titleurl;
		this.createtime = createtime;
		this.updatetime = updatetime;
	}
	public Integer getPlatformid() {
		return this.platformid;
	}

	public void setPlatformid(Integer platformid) {
		this.platformid = platformid;
	}

	public String getUserid() {
		return this.userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTitleurl() {
		return this.titleurl;
	}

	public void setTitleurl(String titleurl) {
		this.titleurl = titleurl;
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