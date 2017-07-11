package com.mso.model;

import java.math.BigDecimal;

/**
 * GxPackageManage entity. @author MyEclipse Persistence Tools
 */

public class GXPackageManage extends BaseSeach  implements java.io.Serializable {
	private static final long serialVersionUID = 1L;

	// Fields

	private Integer pid;
	private String userId;
	private String name;
	private String intro;
	private BigDecimal pricetol;
	private String category1;
	private Double price;
	private Integer num;
	private String target;
	private Integer finishperiod;
	private String payment;
	private Integer isdisable;
	private String createtime;
	private String updatetime;
	private String servicetype ;
	private String paymentmodel ;

	// Constructors
    
	/** default constructor */
	public GXPackageManage() {
	}


	public GXPackageManage(Integer pid, String userId, String name,
			String intro, BigDecimal pricetol, String category1, Double price,
			Integer num, String target, Integer finishperiod, String payment,
			Integer isdisable, String createtime, String updatetime,
			String servicetype, String paymentmodel) {
		super();
		this.pid = pid;
		this.userId = userId;
		this.name = name;
		this.intro = intro;
		this.pricetol = pricetol;
		this.category1 = category1;
		this.price = price;
		this.num = num;
		this.target = target;
		this.finishperiod = finishperiod;
		this.payment = payment;
		this.isdisable = isdisable;
		this.createtime = createtime;
		this.updatetime = updatetime;
		this.servicetype = servicetype;
		this.paymentmodel = paymentmodel;
	}
	

	/** full constructor */
	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIntro() {
		return intro;
	}

	public void setIntro(String intro) {
		this.intro = intro;
	}

	public BigDecimal getPricetol() {
		return pricetol;
	}

	public void setPricetol(BigDecimal pricetol) {
		this.pricetol = pricetol;
	}

	public String getCategory1() {
		return category1;
	}

	public void setCategory1(String category1) {
		this.category1 = category1;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getNum() {
		return num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

	public String getTarget() {
		return target;
	}

	public void setTarget(String target) {
		this.target = target;
	}

	public Integer getFinishperiod() {
		return finishperiod;
	}

	public void setFinishperiod(Integer finishperiod) {
		this.finishperiod = finishperiod;
	}

	public String getPayment() {
		return payment;
	}

	public void setPayment(String payment) {
		this.payment = payment;
	}

	public Integer getIsdisable() {
		return isdisable;
	}

	public void setIsdisable(Integer isdisable) {
		this.isdisable = isdisable;
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

	public String getServicetype() {
		return servicetype;
	}

	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}

	public String getPaymentmodel() {
		return paymentmodel;
	}

	public void setPaymentmodel(String paymentmodel) {
		this.paymentmodel = paymentmodel;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


}