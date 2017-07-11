package com.mso.res.pickuppackageparty;

import java.math.BigDecimal;
import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.pickuppackageparty.HJOrderDemandpupp;
import com.mso.model.pickuppackageparty.InvitationCodeShowOrder;

public class HJOrderDemandres extends CbaseRes{

	public HJOrderDemandres(String code, String msg) {
		super(code, msg);
	}

	List<HJOrderDemandpupp>  resultlist;
	
	public List<HJOrderDemandpupp> getResultlist() {
		return resultlist;
	}
	public void setResultlist(List<HJOrderDemandpupp> resultlist) {
		this.resultlist = resultlist;
	}
    //拼接的ajaxpageStr 
    private String ajaxPageStr;
	public String getAjaxPageStr() {
		return ajaxPageStr;
	}
	public void setAjaxPageStr(String ajaxPageStr) {
		this.ajaxPageStr = ajaxPageStr;
	}
	//邀请码显示我邀请的接包方列表
	public List<InvitationCodeShowOrder> jlist;

	public List<InvitationCodeShowOrder> getJlist() {
		return jlist;
	}
	public void setJlist(List<InvitationCodeShowOrder> jlist) {
		this.jlist = jlist;
	}
	 //推荐累计获益
	private BigDecimal sumprofit;
   
	public BigDecimal getSumprofit() {
		return sumprofit;
	}
	public void setSumprofit(BigDecimal sumprofit) {
		this.sumprofit = sumprofit;
	}
	
	
    

}
