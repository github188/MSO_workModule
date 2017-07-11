package com.mso.service;

import java.util.List;

import com.mso.input.DemandHallPut;
import com.mso.input.DemandPut;
import com.mso.model.HFDemand;
import com.mso.model.Hfp;
import com.mso.res.AddOrUpdateDemandRes;
import com.mso.res.AuctionListDemandHomeRes;
import com.mso.res.DemandHomeRes;
import com.mso.res.DynamicDemandHomeRes;
import com.mso.res.HFDemandRes;
import com.mso.res.HFdemandHallRes;




/**
 * 通用dao，包括基本的CRUD方法
 */

public interface IDemandService {
	
	
	public void setAreaCityTol(DemandPut r,Hfp p);
	public void setAreaCity(DemandPut r,AddOrUpdateDemandRes res);
	public void addDemand(HFDemand user) ;
	public void addDemands(HFDemand user);
	public void addDemandAll(List<HFDemand> demandList);
	
	public void deleteDemand(HFDemand user);
	
	public void updateDemand(HFDemand user);
	public HFDemandRes doneDemand(HFDemand user) ;
	/*
	 * 更具状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public HFDemandRes getDemands(HFDemand user) ;
	public HFdemandHallRes getDemandHall(DemandHallPut user) ;
//	public HFdemandHallRes getCitys(HFDemand user) ;
	
	public HFDemandRes getDemandList(HFDemand user);
	public HFDemand getDemandHallById(HFDemand u);
	public HFDemand getDemandById(HFDemand user) ;
	public List<Object> getDemandByPid(HFDemand user);
	/*
	 * 初始化发包方 home
	 */
	public HFDemandRes getDemandHome(HFDemand user);
	
	/*
	 * 初始化接包方 home
	 */
	public HFDemandRes getOrderHome(HFDemand user);
	
	/*
	 * 接包方订单查询
	 */
	public HFDemandRes getOrderDemands(HFDemand user) ;
	
	public DynamicDemandHomeRes get_1_4_Demanddynamics(HFDemand user);
	public DemandHomeRes getDemand_1_4_Home(HFDemand user);
	//
	public AuctionListDemandHomeRes get_1_4_DemandAuctionList(HFDemand user);
	//
	public AuctionListDemandHomeRes get_1_4_DemandCompleteList(HFDemand user);
	//
	public AuctionListDemandHomeRes get_1_4_DemandCompletionRateList(HFDemand user);

	/*1.4.2  接包方- 转换率榜*/
	public AuctionListDemandHomeRes get_1_4_OrderConversionRateList(HFDemand user);
	
}

 
