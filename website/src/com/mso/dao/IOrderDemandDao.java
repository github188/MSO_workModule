package com.mso.dao;

import java.math.BigDecimal;
import java.util.List;

import com.mso.model.HJOrderDemand;
import com.mso.model.HistoricalOrderSummary;
import com.mso.model.JfUser;
import com.mso.model.OrderDemandDetail;
import com.mso.model.OrderProfileSelect;
import com.mso.utils.PageResults;



/**
 * 用户DAO
 */
public interface IOrderDemandDao {
 
	
	public OrderDemandDetail getOrderById(HJOrderDemand user);
	public void modifyOrderDemand(HJOrderDemand user);
	public void delOrderDemand(HJOrderDemand user) ;
	public void addOrderDemand(HJOrderDemand user) ;
	/*
	 * 根据状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public List<HJOrderDemand> getOrderDemandByzt(HJOrderDemand user) ;
	public HJOrderDemand getOrderDemandByOrderid(HJOrderDemand user) ;
	
	public List<Object> getOrders(HJOrderDemand user);
	 /*
	 * 接包方-我的订单-订单列表
	 * @return
	 */
	 public PageResults<Object> getTheOrderList(HJOrderDemand user);
	
	/*
	 * 检查竞拍的重复性  jfuid  demandid
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 */
	public HJOrderDemand getOrderDemandByUidAndDid(HJOrderDemand user);
	/*
	 * 取得条件记录下的count
	 * 根据状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public Long getCountOrderDemandByzt(HJOrderDemand user) ;
	
	/*
	 * 根据状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public PageResults getOrderDemands(HJOrderDemand user);
	
	
	public HJOrderDemand getOrderDemandByFirst(HJOrderDemand user);
	
	public HJOrderDemand getOrderDemandByById(HJOrderDemand user) ;
	
	/*1.4.2  接包方-历史订单汇总  HistoricalOrderSummary*/
	public List<HistoricalOrderSummary>  getHistoricalOrderSummary(HJOrderDemand user);
	
	/*1.4.2  接包方-总收入-平台结款的总接包方金额(GrossIncome)   #订单结算总量(Total bid order)*/
	public Object[] getSettlementInfo(HJOrderDemand user) ;
	/*1.4.2  接包方-竞拍订单总量 TotalBidOrder*/
	public BigDecimal getTotalBidOrder(HJOrderDemand user);
	
	/*1.4.2  接包方- 剩余订单量(ResidualOrderQuantity) */
	public BigDecimal getResidualOrderQuantity(HJOrderDemand user);
	
	/*1.4.2 接包方-订单概况(我的订单-OrderProfileSelect下拉选择框)  */
	public List<OrderProfileSelect> getOrderProfileSelect(HJOrderDemand user);
	
	/*邀请码显示我邀请的接包方列表*/
	public List<Object> getVerificationCodeOrder(JfUser user);
}
 
