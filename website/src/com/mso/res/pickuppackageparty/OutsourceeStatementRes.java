package com.mso.res.pickuppackageparty;

import java.math.BigDecimal;
import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.pickuppackageparty.OutsourceeStatement;

public class OutsourceeStatementRes extends CbaseRes{

	public OutsourceeStatementRes(String code, String msg) {
		super(code, msg);
	}
    
	private List<OutsourceeStatement> list;
	
	private BigDecimal sumuploadnumber;//上传量(汇总)
	private BigDecimal sumsuccessfulnumber;//成功量(汇总)
	private BigDecimal sumfailureamount;//失败量(汇总)
	private BigDecimal sumacceptquantity;//接收量(汇总)
	private BigDecimal sumauctionnum;//竞拍量(汇总)

	private BigDecimal sumqaqualified;//合格量(汇总)
	private BigDecimal sumqanotstandard;//话术不规范量(汇总)
	private BigDecimal sumdbarepetition;//重复量(汇总)
	private BigDecimal sumqacancel;//取消量(汇总)
	private BigDecimal sumqadisqualification;//不合格量(汇总)
	
    //分页中拼接的ajaxpageStr 
	private String ajaxPageStr;
	//接包方成担报表第二层 引用第一层用的需求名
	private String ordername;
	
	
	public List<OutsourceeStatement> getList() {
		return list;
	}
	public void setList(List<OutsourceeStatement> list) {
		this.list = list;
	}
	public BigDecimal getSumuploadnumber() {
		return sumuploadnumber;
	}
	public void setSumuploadnumber(BigDecimal sumuploadnumber) {
		this.sumuploadnumber = sumuploadnumber;
	}
	public BigDecimal getSumsuccessfulnumber() {
		return sumsuccessfulnumber;
	}
	public void setSumsuccessfulnumber(BigDecimal sumsuccessfulnumber) {
		this.sumsuccessfulnumber = sumsuccessfulnumber;
	}
	public BigDecimal getSumfailureamount() {
		return sumfailureamount;
	}
	public void setSumfailureamount(BigDecimal sumfailureamount) {
		this.sumfailureamount = sumfailureamount;
	}
	public BigDecimal getSumacceptquantity() {
		return sumacceptquantity;
	}
	public void setSumacceptquantity(BigDecimal sumacceptquantity) {
		this.sumacceptquantity = sumacceptquantity;
	}
	public BigDecimal getSumauctionnum() {
		return sumauctionnum;
	}
	public void setSumauctionnum(BigDecimal sumauctionnum) {
		this.sumauctionnum = sumauctionnum;
	}
    
	public BigDecimal getSumqaqualified() {
		return sumqaqualified;
	}
	public void setSumqaqualified(BigDecimal sumqaqualified) {
		this.sumqaqualified = sumqaqualified;
	}
	public BigDecimal getSumqanotstandard() {
		return sumqanotstandard;
	}
	public void setSumqanotstandard(BigDecimal sumqanotstandard) {
		this.sumqanotstandard = sumqanotstandard;
	}
	public BigDecimal getSumdbarepetition() {
		return sumdbarepetition;
	}
	public void setSumdbarepetition(BigDecimal sumdbarepetition) {
		this.sumdbarepetition = sumdbarepetition;
	}
	public BigDecimal getSumqacancel() {
		return sumqacancel;
	}
	public void setSumqacancel(BigDecimal sumqacancel) {
		this.sumqacancel = sumqacancel;
	}
	public BigDecimal getSumqadisqualification() {
		return sumqadisqualification;
	}
	public void setSumqadisqualification(BigDecimal sumqadisqualification) {
		this.sumqadisqualification = sumqadisqualification;
	}
	public String getAjaxPageStr() {
		return ajaxPageStr;
	}
	public void setAjaxPageStr(String ajaxPageStr) {
		this.ajaxPageStr = ajaxPageStr;
	}
	public String getOrdername() {
		return ordername;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	
	
	
	
	
	
	
	
	
	
	
}
