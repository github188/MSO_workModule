package com.mso.model;

import java.math.BigDecimal;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class BaseLabel  implements java.io.Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String labelId;
	private String labelName;
	private BigDecimal labelPrice;//标签价格
	private Integer labelAttribute;//1 基本属性  2 需求属性
	private Integer labelType;//1-免费标签  2-收费标签   3-自定义标签
	private Integer labelState;//1-启用  2-停用
	private String labelCode;
	private String createtime;
	private String updatetime;//更新时间
	private String labelRemark;//备注
	
	public Integer getLabelAttribute() {
		return labelAttribute;
	}
	public void setLabelAttribute(Integer labelAttribute) {
		this.labelAttribute = labelAttribute;
	}
	public Integer getLabelType() {
		return labelType;
	}
	public void setLabelType(Integer labelType) {
		this.labelType = labelType;
	}
	public Integer getLabelState() {
		return labelState;
	}
	public void setLabelState(Integer labelState) {
		this.labelState = labelState;
	}
	public String getLabelId() {
		return labelId;
	}
	public void setLabelId(String labelId) {
		this.labelId = labelId;
	}
	public String getLabelName() {
		return labelName;
	}
	public void setLabelName(String labelName) {
		this.labelName = labelName;
	}
	public String getLabelCode() {
		return labelCode;
	}
	public void setLabelCode(String labelCode) {
		this.labelCode = labelCode;
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
	public BigDecimal getLabelPrice() {
		return labelPrice;
	}
	public void setLabelPrice(BigDecimal labelPrice) {
		this.labelPrice = labelPrice;
	}
	public String getLabelRemark() {
		return labelRemark;
	}
	public void setLabelRemark(String labelRemark) {
		this.labelRemark = labelRemark;
	}
	

	
}
