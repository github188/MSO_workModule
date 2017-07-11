package com.mso.dao;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

import com.mso.model.HFDemand;
import com.mso.utils.PageResults;



/**
 * 用户DAO
 */
public interface IDemandDao {
 
	/*
	 * 新增草稿箱需求
	 */
	public HFDemand addDemand(HFDemand user) ;
	public List<HFDemand> addDemandAll(List<HFDemand> entities);
	/*
	 * 删除草稿箱需求
	 */
	public void deleteDemand(HFDemand user);
	/*
	 * 修改草稿箱需求
	 */
	public void updateDemand(HFDemand user);
	/*
	 * 取得条件记录下的count
	 * 根据状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public Long getCountDemandByzt(HFDemand user) ;
	
	/*
	 * 根据条件查询所有的需求   不分页
	 */
	public List getReportDemands(HFDemand user) ;
	/*
	 * 根据状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public PageResults getDemands(HFDemand user);
	public List<Object> getDemandList(HFDemand user);
	/*
	 * 根据状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public BigDecimal getSumDemandPrice(HFDemand user);
	/*
	 * 根据状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 * 计算金额sum值
	 */
	public BigDecimal getSumOrderDemandPrice(HFDemand user) ;
	
	public HFDemand getDemandById(HFDemand user);
	
	public List<Object> getDemandByPid(HFDemand user);
	
	public HFDemand getDemandByFist(HFDemand user);
	/*
	 * 需求大厅和悬赏大厅查询方法
	 */
	public PageResults<Object> getDemandsAll(HFDemand user);
	
	
	/**
	 * 各种业务类型的需求集合
	 **/
	public PageResults<Object> getDemandHallAll(HFDemand user);
	
//	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭     
	public PageResults<Object> getOrderDemands(HFDemand user) ;
	public BigInteger getCountOrderDemandByzt(HFDemand user);

	//计算金额字段中值 统计	 select sum(u.releasenum) as tolFbl,sum(u.fishnum) as tolWcl, sum(u.paymentmoney) as toljsPrice from h_f_demand  u where 1=1 and u.fdstate in(2,3,4,5,6,7);
   //需求发布总量   //成单总量  //结算总金额
	public Object[] getSumDemandOne(HFDemand user);
	
	
	public List getDemanddynamicsTop6(HFDemand user);
	
	public List getDemandAuctionList(HFDemand user);
	
	public List getConversionRateList(HFDemand user);
	
	public PageResults<Object> getDemandHall(HFDemand user);
	public List<Object> getCitys(HFDemand user) ;
}
 
