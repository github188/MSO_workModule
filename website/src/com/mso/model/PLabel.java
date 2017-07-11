package com.mso.model;

import java.math.BigDecimal;


public class PLabel  implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private String dlid;
	private String labelId;
	private String pid;
	private String labelName;
	private String labelAttribute;
	private BigDecimal labelPrice;
	
	public String getLabelName() {
		return labelName;
	}
	public void setLabelName(String labelName) {
		this.labelName = labelName;
	}
	public String getLabelAttribute() {
		return labelAttribute;
	}
	public void setLabelAttribute(String labelAttribute) {
		this.labelAttribute = labelAttribute;
	}
	public BigDecimal getLabelPrice() {
		return labelPrice;
	}
	public void setLabelPrice(BigDecimal labelPrice) {
		this.labelPrice = labelPrice;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getDlid() {
		return dlid;
	}
	public void setDlid(String dlid) {
		this.dlid = dlid;
	}
	public String getLabelId() {
		return labelId;
	}
	public void setLabelId(String labelId) {
		this.labelId = labelId;
	}
}
