package com.mso.input;


public class DemandHallPut{
	
   private String category1;//面向行业    1-线上教育培训  2-线下教育培训  3-房地产  4-汽车  5-汽车后市场   6-金融  7-互联网  8-电商平台  9-运营商增值服务 10-其他行业 
   private String category2;//获客渠道    1-电话营销 2-网络营销 3-地推推广
   private String category3;//   业务类型      1-销售线索挖掘  2-数据加工  3-人工客服  
   private String targecity;//目标城市;
   private String auction;	//需求状态    1-可竞拍 2- 不可竞拍
   private String pricerange;      //需求单价 1:0-30  2:30-60  3:60-100  4:100以上
   private String keyword;//需求名
   private String demandid;//需求id
   private String orderBy;//排序字段     剩余量(residualQuantity)  上架日期 (releasetime)   单价(orderprice)
   private String sort;//desc降序 asc 升序
   private String currentPage;
   
	public String getCurrentPage() {
	return currentPage;
	}
	public void setCurrentPage(String currentPage) {
		this.currentPage = currentPage;
	}
	public String getCategory1() {
		return category1;
	}
	public String getCategory2() {
		return category2;
	}
	public String getCategory3() {
		return category3;
	}
	public String getTargecity() {
		return targecity;
	}
	public String getAuction() {
		return auction;
	}
	public String getPricerange() {
		return pricerange;
	}
	public String getKeyword() {
		return keyword;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getOrderBy() {
		return orderBy;
	}
	public String getSort() {
		return sort;
	}
	public void setCategory1(String category1) {
		this.category1 = category1;
	}
	public void setCategory2(String category2) {
		this.category2 = category2;
	}
	public void setCategory3(String category3) {
		this.category3 = category3;
	}
	public void setTargecity(String targecity) {
		this.targecity = targecity;
	}
	public void setAuction(String auction) {
		this.auction = auction;
	}
	public void setPricerange(String pricerange) {
		this.pricerange = pricerange;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setOrderBy(String orderBy) {
		this.orderBy = orderBy;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
}
