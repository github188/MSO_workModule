package com.mso.model;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */
public class GXCluetemplate extends BaseSeach implements java.io.Serializable {
	//不同行业 销售线索模板url
	/** full constructor */
	public GXCluetemplate() {
	}
	
	private String cluetemplate_id;
	private String industry;
	private String cluename;
	private String template_url;
	private String createtime;
	private String updatetime;
	public String getCluetemplate_id() {
		return cluetemplate_id;
	}
	public String getIndustry() {
		return industry;
	}
	public String getCluename() {
		return cluename;
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
	public void setCluetemplate_id(String cluetemplate_id) {
		this.cluetemplate_id = cluetemplate_id;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public void setCluename(String cluename) {
		this.cluename = cluename;
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