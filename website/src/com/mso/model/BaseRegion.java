package com.mso.model;

import java.math.BigDecimal;
import java.util.List;


/**
 * BaseRegion entity. @author MyEclipse Persistence Tools
 */

public class BaseRegion  implements java.io.Serializable {
     @Override
	public String toString() {
		return "BaseRegion [regionId=" + regionId + ", parentId=" + parentId
				+ ", regionName=" + regionName + ", regionType=" + regionType
				+ ", agencyId=" + agencyId + ", regionCode=" + regionCode
				+ ", regionPinyyin=" + regionPinyyin + ", regionPy=" + regionPy
				+ ", firstWord=" + firstWord + ", remark=" + remark
				+ ", cityrank=" + cityrank + ", regionTypeFristWord="
				+ regionTypeFristWord + "]";
	}
	private Integer regionId;
     private Integer parentId;
     private String regionName;
     private Integer regionType;
     private Integer agencyId;
     private String regionCode;
     private String regionPinyyin;
     private String regionPy;
     private String firstWord;
     private String remark;
     private Integer cityrank;
     private BigDecimal pricerange;//价格的浮动比例  例如  0.2
     private String updatetime; //价格浮动 更新时间
     private String createtime; //价格浮动 更新时间
     
     
     
     
     
     
     public BigDecimal getPricerange() {
		return pricerange;
	}
	public void setPricerange(BigDecimal pricerange) {
		this.pricerange = pricerange;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	private List<String> regionTypeFristWord;
     
    public String getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(String updatetime) {
	    this.updatetime = updatetime;
	}
	public List<String> getRegionTypeFristWord() {
		return regionTypeFristWord;
	}
	public void setRegionTypeFristWord(List<String> regionTypeFristWord) {
		this.regionTypeFristWord = regionTypeFristWord;
	}
	
	public Integer getRegionId() {
		return regionId;
	}
	public void setRegionId(Integer regionId) {
		this.regionId = regionId;
	}
	public Integer getParentId() {
		return parentId;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public String getRegionName() {
		return regionName;
	}
	public void setRegionName(String regionName) {
		this.regionName = regionName;
	}
	public Integer getRegionType() {
		return regionType;
	}
	public void setRegionType(Integer regionType) {
		this.regionType = regionType;
	}
	public Integer getAgencyId() {
		return agencyId;
	}
	public void setAgencyId(Integer agencyId) {
		this.agencyId = agencyId;
	}
	public String getRegionCode() {
		return regionCode;
	}
	public void setRegionCode(String regionCode) {
		this.regionCode = regionCode;
	}
	public String getRegionPinyyin() {
		return regionPinyyin;
	}
	public void setRegionPinyyin(String regionPinyyin) {
		this.regionPinyyin = regionPinyyin;
	}
	public String getRegionPy() {
		return regionPy;
	}
	public void setRegionPy(String regionPy) {
		this.regionPy = regionPy;
	}
	public String getFirstWord() {
		return firstWord;
	}
	public void setFirstWord(String firstWord) {
		this.firstWord = firstWord;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public Integer getCityrank() {
		return cityrank;
	}
	public void setCityrank(Integer cityrank) {
		this.cityrank = cityrank;
	}
}