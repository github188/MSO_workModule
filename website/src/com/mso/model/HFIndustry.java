package com.mso.model;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class HFIndustry extends BaseSeach implements java.io.Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String fiid;
	private String finame;
	private String seqno;
	private String parentfiid;
	private Integer level;
	private String filogo;
	private String createtime;
	private String updatetime;
	private BigDecimal price;
	
	public Integer getLevel() {
		return level;
	}
	public void setLevel(Integer level) {
		this.level = level;
	}
	public String getFilogo() {
		return filogo;
	}
	public void setFilogo(String filogo) {
		this.filogo = filogo;
	}
	public String getFiid() {
		return fiid;
	}
	public void setFiid(String fiid) {
		this.fiid = fiid;
	}
	public String getFiname() {
		return finame;
	}
	public void setFiname(String finame) {
		this.finame = finame;
	}
	public String getSeqno() {
		return seqno;
	}
	public void setSeqno(String seqno) {
		this.seqno = seqno;
	}
	public String getParentfiid() {
		return parentfiid;
	}
	public void setParentfiid(String parentfiid) {
		this.parentfiid = parentfiid;
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
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}




	
}