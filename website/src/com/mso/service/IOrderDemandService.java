package com.mso.service;

import java.util.List;

import com.mso.model.HJOrderDemand;
import com.mso.model.JfUser;
import com.mso.model.OrderDemandDetail;
import com.mso.model.pickuppackageparty.HJOrderDemandpupp;
import com.mso.model.pickuppackageparty.InvitationCodeShowOrder;
import com.mso.res.GrossIncomeRes;
import com.mso.res.HFDemandRes;
import com.mso.res.HistoricalOrderSummaryRes;
import com.mso.res.OrderDemandRes;
import com.mso.res.OrderProfileSelectRes;
import com.mso.res.ResidualOrderQuantityRes;
import com.mso.res.TotalBidOrderRes;
import com.mso.res.TotalOrderSettlementRes;
import com.mso.res.pickuppackageparty.HJOrderDemandres;





/**
 * 通用dao，包括基本的CRUD方法
 */

public interface IOrderDemandService {
	public OrderDemandDetail getOrderById(HJOrderDemand user);
	public void modifyOrderDemand(HJOrderDemand user);
	public void delOrderDemand(HJOrderDemand user) ;
	public void addOrderDemand(HJOrderDemand user) ;
	/*
	 * 更具状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public HFDemandRes getOrderDemandByzt(HJOrderDemand user) ;
	public HFDemandRes getOrders(HJOrderDemand user);
	/*
	 * 竞拍
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public OrderDemandRes ApplyOrderDemand(HJOrderDemand user);
	
	public HJOrderDemand getOrderDemandByOrderid(HJOrderDemand user);
	/*
	 * 根据id查询需求 订单信息
	 */
	public HJOrderDemand getOrderDemandByById(HJOrderDemand user);
	/*
	 * 竞拍  检查
	 */
	public HJOrderDemand getOrderDemandByUidAndDid(HJOrderDemand user);
	
	/*1.4.2  接包方-历史订单汇总  HistoricalOrderSummary*/
	public HistoricalOrderSummaryRes  getHistoricalOrderSummary(HJOrderDemand user);
	
	/*1.4.2  接包方- 竞拍订单总量(Total bid order)   */
	public GrossIncomeRes getGrossIncome(HJOrderDemand user);
	
	/*1.4.2  接包方-订单结算总量 (Total order settlement)   */
	public TotalOrderSettlementRes getTotalOrderSettlement(HJOrderDemand user);
	
	/*1.4.2  接包方-竞拍订单总量(Total bid order)  */
	public TotalBidOrderRes getTotalBidOrder(HJOrderDemand user);
	
	/*1.4.2  接包方-剩余订单量(Residual order quantity)    */
	public ResidualOrderQuantityRes getResidualOrderQuantity(HJOrderDemand user);
	
	/*1.4.2  接包方-订单概况(我的订单-OrderProfileSelect下拉选择框)   */
	public OrderProfileSelectRes getOrderProfileSelect(HJOrderDemand user);
	
	/*
	 * 接包方-我的订单-订单列表
	 * @return
	 */
	 public HJOrderDemandres getTheOrderList(HJOrderDemand user);
	
	
	 /*邀请码显示我邀请的接包方列表*/
	 public HJOrderDemandres getVerificationCodeOrder(JfUser user);
	
}

 
