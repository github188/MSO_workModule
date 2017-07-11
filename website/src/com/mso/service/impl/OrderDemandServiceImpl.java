package com.mso.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IOrderDemandDao;
import com.mso.dao.IUserFDemandOrderDao;
import com.mso.model.HJOrderDemand;
import com.mso.model.JfUser;
import com.mso.model.OrderDemandDetail;
import com.mso.model.OrderProfileSelect;
import com.mso.model.UserFP;
import com.mso.model.UserJOrder;
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
import com.mso.service.IOrderDemandService;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("orderdemandService")@Transactional
public class OrderDemandServiceImpl implements IOrderDemandService{
	
	@Autowired
	IOrderDemandDao orderdemandDao;
	
	@Autowired
	IUserFDemandOrderDao userFDemandOrderDao;
	
	
	@Override
	public OrderDemandDetail getOrderById(HJOrderDemand user) {
		return orderdemandDao.getOrderById(user);
	}
	@Override
	public void modifyOrderDemand(HJOrderDemand user){
		orderdemandDao.modifyOrderDemand(user);
	}
	@Override
	public void addOrderDemand(HJOrderDemand user){
		orderdemandDao.addOrderDemand(user);
		UserFP pa=new  UserFP();
		pa.setPid(user.getPid());
		UserFP resuser=userFDemandOrderDao.selectUserP(pa);
		if(resuser!=null){
			UserJOrder addUserD=new UserJOrder();
			addUserD.setOrderid(user.getOrderid());
			addUserD.setIsreview(0);
			addUserD.setUserId(resuser.getUserId());
			userFDemandOrderDao.addUserJOrder(addUserD);
		}else{//用户没有被分配
			
		}
		
//		UserJfUser pa=new  UserJfUser();
//		pa.setJfuid(user.getJfuid());
//		UserJfUser resuser=userFDemandOrderDao.selectUser(pa);
//		if(resuser!=null){
//			UserJOrder addUserD=new UserJOrder();
//			addUserD.setOrderid(user.getOrderid());
//			addUserD.setIsreview(0);
//			addUserD.setUserId(resuser.getUserId());
//			userFDemandOrderDao.addUserJOrder(addUserD);
//		}else{//用户没有被分配
//			
//		}
	}
	@Override
	public void delOrderDemand(HJOrderDemand user) {
		orderdemandDao.delOrderDemand(user);
	}
	/*
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 */
	@Override
	public HFDemandRes getOrderDemandByzt(HJOrderDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			        PageResults s= orderdemandDao.getOrderDemands(user);
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setResults(s.getResults());
				
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	@Override
	public HFDemandRes getOrders(HJOrderDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
					List<Object> s= orderdemandDao.getOrders(user);
			        res.setResults(s);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	
	
	
	@Override
	public HJOrderDemand getOrderDemandByById(HJOrderDemand user) {
		HJOrderDemand getdeMand=orderdemandDao.getOrderDemandByById(user);
		return getdeMand;
	}
	
	@Override
	public HJOrderDemand getOrderDemandByUidAndDid(HJOrderDemand user){
		HJOrderDemand getdeMand=orderdemandDao.getOrderDemandByUidAndDid(user);
		return getdeMand;
	}
	@Override
	public HJOrderDemand getOrderDemandByOrderid(HJOrderDemand user){
		HJOrderDemand getdeMand=orderdemandDao.getOrderDemandByOrderid(user);
		return getdeMand;
	}
	
	@Override
	public OrderDemandRes ApplyOrderDemand(HJOrderDemand user){
		OrderDemandRes res=new OrderDemandRes("Y", "");
		this.addOrderDemand(user);
		return res;
	}
	/*1.4.2  接包方-历史订单汇总  HistoricalOrderSummary*/
	public HistoricalOrderSummaryRes  getHistoricalOrderSummary(HJOrderDemand user){
		HistoricalOrderSummaryRes res=new HistoricalOrderSummaryRes("Y","");
		try {
		    List hisOrderSummaryList=orderdemandDao.getHistoricalOrderSummary(user);
			res.setHisOrderSummaryList(hisOrderSummaryList);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
	}
	
	
	
	
	
	
	
	/*1.4.2  接包方-总收入(GrossIncome) 订单结算总量 (Total order settlement)   */
	public GrossIncomeRes getGrossIncome(HJOrderDemand user) {
		GrossIncomeRes res=new GrossIncomeRes("Y","");
		try {
		    Object[] a=orderdemandDao.getSettlementInfo(user);
		    BigDecimal grossIncome=StringUtil.toBigDecimal(StringUtil.objCovStr(a[0]));
		    if(null==grossIncome){
		    	grossIncome=new BigDecimal(0) ;	
		    }
			res.setGrossIncome(grossIncome);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
	}
	/*1.4.2  接包方-总收入(GrossIncome) 订单结算总量 (Total order settlement)   */
	public TotalOrderSettlementRes getTotalOrderSettlement(HJOrderDemand user) {
		TotalOrderSettlementRes res=new TotalOrderSettlementRes("Y","");
		try {
		    Object[] a=orderdemandDao.getSettlementInfo(user);
		    Long totalOrderSettlement=StringUtil.toLong(StringUtil.objCovStr(a[1]));
		    if(null==totalOrderSettlement){
		    	totalOrderSettlement=0l;	
		    }
			res.setTotalOrderSettlement(totalOrderSettlement);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
	}
	
	
	
	/*1.4.2  接包方-竞拍订单总量(Total bid order)  */
	public TotalBidOrderRes getTotalBidOrder(HJOrderDemand user) {
		TotalBidOrderRes res=new TotalBidOrderRes("Y","");
		try {
			BigDecimal totalBidOrder=orderdemandDao.getTotalBidOrder(user);
		    if(null==totalBidOrder){
		    	totalBidOrder=new BigDecimal(0);	
		    }
			res.setTotalBidOrder(totalBidOrder);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
	}
	
	
	
	/*1.4.2  接包方-剩余订单量(Residual order quantity)    */
	public ResidualOrderQuantityRes getResidualOrderQuantity(HJOrderDemand user) {
		ResidualOrderQuantityRes res=new ResidualOrderQuantityRes("Y","");
		try {
			BigDecimal residualOrderQuantity=orderdemandDao.getResidualOrderQuantity(user);
		    if(null==residualOrderQuantity){
		    	residualOrderQuantity=new BigDecimal(0);	
		    }
			res.setResidualOrderQuantity(residualOrderQuantity);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
	}
	
	
	/*1.4.2  接包方-订单概况(我的订单-OrderProfileSelect下拉选择框)   */
	public OrderProfileSelectRes getOrderProfileSelect(HJOrderDemand user){
		OrderProfileSelectRes res=new OrderProfileSelectRes("Y","");
		try {
			List<OrderProfileSelect> list=orderdemandDao.getOrderProfileSelect(user);
			res.setOrderSelectList(list);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg(e.toString());
		}
		return res;
		
	}
	//接包方-我的订单-订单列表/夜场订单
	@Override
	public HJOrderDemandres getTheOrderList(HJOrderDemand user) {
				String code=ERConst.SU_CODE;
			    String msg="";
			    HJOrderDemandres res=new HJOrderDemandres(code,msg);
			    try {
			    		List<HJOrderDemandpupp> hjlist=new ArrayList<HJOrderDemandpupp>();
				        PageResults list= orderdemandDao.getTheOrderList(user);
						
						for(int i=0;i<list.getResults().size();i++){
							Object object []=(Object []) list.getResults().get(i);
							HJOrderDemandpupp d=new HJOrderDemandpupp();
							d.setJfuid(StringUtil.objCovStr(object[0]));
							d.setDemandname(StringUtil.objCovStr(object[1]));
							d.setIndustry(StringUtil.objCovStr(object[2]));
							d.setPaymentstandard(StringUtil.objCovStr(object[3]));
							d.setOrderid(StringUtil.objCovStr(object[4]));
							d.setOrderprice((BigDecimal) object[5]);
							d.setAuctionnum((Integer) object[6]);
							d.setFishnum((Integer) object[7]);
							d.setCreatetime(StringUtil.objCovStr(object[8]));
							d.setJdstate((Integer) object[9]);
							d.setServicetype(StringUtil.objCovStr(object[10]));
							d.setPause((Integer) object[11]);
							d.setSettlementmethod(StringUtil.toInteger(StringUtil.objCovStr(object[12])));
							d.setExecutiondays(StringUtil.toInteger(StringUtil.objCovStr(object[13])));
							d.setSeatsnum(StringUtil.toInteger(StringUtil.objCovStr(object[14])));
							d.setTypeofinvoice(StringUtil.toInteger(StringUtil.objCovStr(object[15])));
							d.setPricetol(StringUtil.toBigDecimal(StringUtil.objCovStr(object[16])));
							d.setBegintime(StringUtil.objCovStr(object[17]));
							d.setEndtime(StringUtil.objCovStr(object[18]));
							d.setThreelevindustry(StringUtil.objCovStr(object[19]));
							d.setThreelevindustry(StringUtil.objCovStr(object[20]));
							
							d.setJbfpricetol(StringUtil.toBigDecimal(StringUtil.objCovStr(object[21])));
							d.setJbfprice(StringUtil.toBigDecimal(StringUtil.objCovStr(object[22])));
							
							hjlist.add(d);
						}
				        res.setAjaxPageStr(list.getAjaxPageStr());
				        res.setResultlist(hjlist);
				} catch (Exception e) {
						res.setCode(ERConst.ER_CODE);
						res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
				}
				return res;
	}
	
	
	 /*邀请码显示我邀请的接包方列表*/
		@Override
		public HJOrderDemandres getVerificationCodeOrder(JfUser user) {
			String code=ERConst.SU_CODE;
		    String msg=ERConst.SU_CODE_VALUE;
			HJOrderDemandres res=new HJOrderDemandres(code, msg);
			try {
				List<InvitationCodeShowOrder> jlist=new ArrayList<InvitationCodeShowOrder>();
				List<Object> list=orderdemandDao.getVerificationCodeOrder(user);
				if(null!=list){
					BigDecimal C=new BigDecimal(0);
					for(int i=0;i<list.size();i++){
						Object [] object=(Object[]) list.get(i);
						InvitationCodeShowOrder juser=new InvitationCodeShowOrder();
						juser.setJfuid(StringUtil.objCovStr(object [0]));
						juser.setCreatetime(StringUtil.objCovStr(object [1]));
						juser.setJfuinvitationcode(StringUtil.objCovStr(object[2]));
						juser.setCompanyname(StringUtil.objCovStr(object[3]));
//						juser.setSumauctionnum(StringUtil.toInteger(StringUtil.objCovStr(object[4])));
						juser.setSumauctionnum(StringUtil.toInteger(StringUtil.objCovStr(object[6])));
//						juser.setBiddingcommission(StringUtil.toBigDecimal(StringUtil.objCovStr(object[5])));
						juser.setBiddingcommission(StringUtil.toBigDecimal(StringUtil.objCovStr(object[6])));
						jlist.add(juser);
//						1.累计成单量由之前的竞拍量改成了质检成功量。
//						2.累计收益=所有累计成单量的总和
						//推荐累计获益  
						BigDecimal S=juser.getBiddingcommission();
						C=C.add(S);
					}
					res.setJlist(jlist);
					res.setSumprofit(C);
				}
			} catch (Exception e) {
				res.setCode(ERConst.ER_CODE);
				res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
				e.printStackTrace();
			}
			return res;
		}
}
