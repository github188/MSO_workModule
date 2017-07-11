package com.mso.res.gxdbaeverydaystatistics;

import java.math.BigDecimal;
import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.GXDbaEverydayStatistics;

public class LetContractOneRes extends CbaseRes {

	public LetContractOneRes(String code, String msg) {
		super(code, msg);
	}
    private List<GXDbaEverydayStatistics> list;//报表
    private List luyinlist;//录音
    //汇总中的完成量 
    private BigDecimal sumcompletequantity;
    //汇总中的发布量
    private BigDecimal sumreleasenum;
	//汇总中的竞拍量
    private BigDecimal sumauctionnum;
	//分页中拼接的ajaxpageStr 
    private String ajaxPageStr;
    
    //用户发包数量
    private Integer sump;
    
    //用户未下载成单数(数据挖掘)
    private Integer ndcountHfd;
    
    //用户未下载成单数(数据加工)
    private Integer ndcountHfdf;
    
    
    
    
   

	public Integer getNdcountHfd() {
		return ndcountHfd;
	}
	public void setNdcountHfd(Integer ndcountHfd) {
		this.ndcountHfd = ndcountHfd;
	}
	public Integer getNdcountHfdf() {
		return ndcountHfdf;
	}
	public void setNdcountHfdf(Integer ndcountHfdf) {
		this.ndcountHfdf = ndcountHfdf;
	}
	public List<GXDbaEverydayStatistics> getList() {
		return list;
	}
	public void setList(List<GXDbaEverydayStatistics> list) {
		this.list = list;
	}
	public BigDecimal getSumcompletequantity() {
		return sumcompletequantity;
	}
	public void setSumcompletequantity(BigDecimal sumcompletequantity) {
		this.sumcompletequantity = sumcompletequantity;
	}
	public BigDecimal getSumReleasenum() {
		return sumreleasenum;
	}
	public void setSumReleasenum(BigDecimal sumreleasenum) {
		this.sumreleasenum = sumreleasenum;
	}
	public BigDecimal getSumAuctionnum() {
		return sumauctionnum;
	}
	public void setSumAuctionnum(BigDecimal sumauctionnum) {
		this.sumauctionnum = sumauctionnum;
	}
	public String getAjaxPageStr() {
		return ajaxPageStr;
	}
	public void setAjaxPageStr(String ajaxPageStr) {
		this.ajaxPageStr = ajaxPageStr;
	}
    
    private String demandname;//引用上一层的需求包名称

	public String getDemandname() {
		return demandname;
	}
	public void setDemandname(String demandname) {
		this.demandname = demandname;
	}
	public List getLuyinlist() {
		return luyinlist;
	}
	public void setLuyinlist(List luyinlist) {
		this.luyinlist = luyinlist;
	}
	private String targecity;//目标城市

	public String getTargecity() {
		return targecity;
	}
	public void setTargecity(String targecity) {
		this.targecity = targecity;
	}
	public Integer getSump() {
		return sump;
	}
	public void setSump(Integer sump) {
		this.sump = sump;
	}
	
	
    
	
}
