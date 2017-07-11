/**
 * 
 */
package com.mso.model;

import java.math.BigDecimal;


public class DemandSum {  //发包方-我的获客-获客完成量&获客费用 getMyDemandSum接口的返回对象的泛型
	
	private BigDecimal paymentmoneySum;
	private BigDecimal paymentnumSum;
	private BigDecimal noFinishSum;
	private BigDecimal releasenumSum;
	private String paytime;
	
	public BigDecimal getPaymentmoneySum() {
		return paymentmoneySum;
	}
	public void setPaymentmoneySum(BigDecimal paymentmoneySum) {
		this.paymentmoneySum = paymentmoneySum;
	}
	public BigDecimal getPaymentnumSum() {
		return paymentnumSum;
	}
	public void setPaymentnumSum(BigDecimal paymentnumSum) {
		this.paymentnumSum = paymentnumSum;
	}
	public BigDecimal getNoFinishSum() {
		return noFinishSum;
	}
	public void setNoFinishSum(BigDecimal noFinishSum) {
		this.noFinishSum = noFinishSum;
	}
	public BigDecimal getReleasenumSum() {
		return releasenumSum;
	}
	public void setReleasenumSum(BigDecimal releasenumSum) {
		this.releasenumSum = releasenumSum;
	}
	public String getPaytime() {
		return paytime;
	}
	public void setPaytime(String paytime) {
		this.paytime = paytime;
	}
	
	@Override
	public String toString() {
		return "DemandSum [paymentmoneySum=" + paymentmoneySum
				+ ", paymentnumSum=" + paymentnumSum + ", noFinishSum="
				+ noFinishSum + ", releasenumSum=" + releasenumSum
				+ ", paytime=" + paytime + "]";
	}

}
