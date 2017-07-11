package com.mso.model;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */
public class GXSpeaktemplate extends BaseSeach implements java.io.Serializable {
	//不同行业 话术模板url
	/** full constructor */
	public GXSpeaktemplate() {
	}
	
	private String speaktemplate_id;
	private String industry;
	private String speakname;
	private String template_url;
	private String createtime;
	private String updatetime;
	public String getSpeaktemplate_id() {
		return speaktemplate_id;
	}
	public String getIndustry() {
		return industry;
	}
	public String getSpeakname() {
		return speakname;
	}
	public String getTemplate_url() {
		return template_url;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setSpeaktemplate_id(String speaktemplate_id) {
		this.speaktemplate_id = speaktemplate_id;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public void setSpeakname(String speakname) {
		this.speakname = speakname;
	}
	public void setTemplate_url(String template_url) {
		this.template_url = template_url;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}

}