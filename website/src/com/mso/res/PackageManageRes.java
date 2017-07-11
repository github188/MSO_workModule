package com.mso.res;

import java.math.BigDecimal;
import java.util.List;

import BaseRes.BaseRes;

public class PackageManageRes extends BaseRes{
	
    public PackageManageRes(String code, String msg) {
		super(code, msg);
	}
    
	private List packgeList;
	private String collectionid;
	private String jfuid;
	private String pid;
	private String name;
	private String intro;
	private BigDecimal pricetol;
	private BigDecimal price;
	private Integer isdisable;
	private Integer num;
	private String target;
	private String finishperiod;
	private String payment;
	private String createtime;
	private String updatetime;
	public List getPackgeList() {
		return packgeList;
	}
	public String getCollectionid() {
		return collectionid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getPid() {
		return pid;
	}
	public String getName() {
		return name;
	}
	public String getIntro() {
		return intro;
	}
	public BigDecimal getPricetol() {
		return pricetol;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public Integer getIsdisable() {
		return isdisable;
	}
	public Integer getNum() {
		return num;
	}
	public String getTarget() {
		return target;
	}
	public String getFinishperiod() {
		return finishperiod;
	}
	public String getPayment() {
		return payment;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setPackgeList(List packgeList) {
		this.packgeList = packgeList;
	}
	public void setCollectionid(String collectionid) {
		this.collectionid = collectionid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setIntro(String intro) {
		this.intro = intro;
	}
	public void setPricetol(BigDecimal pricetol) {
		this.pricetol = pricetol;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public void setIsdisable(Integer isdisable) {
		this.isdisable = isdisable;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	public void setTarget(String target) {
		this.target = target;
	}
	public void setFinishperiod(String finishperiod) {
		this.finishperiod = finishperiod;
	}
	public void setPayment(String payment) {
		this.payment = payment;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}

}
