package com.mso.dao.impl;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import net.sf.json.JSONObject;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IOrderDemandDao;
import com.mso.model.HJOrderDemand;
import com.mso.model.HistoricalOrderSummary;
import com.mso.model.JfUser;
import com.mso.model.OrderDemandDetail;
import com.mso.model.OrderProfileSelect;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 */
@Repository("orderdemandDao")
public class OrderDemandDaoImpl extends BaseDao<Object, Serializable> implements IOrderDemandDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    @Override
    public void delOrderDemand(HJOrderDemand user){
    	this.delete(user);
    }
	@Override
	public void addOrderDemand(HJOrderDemand user){
		this.save(user);
	}
	@Override
	public void modifyOrderDemand(HJOrderDemand user){
		this.update(user);
	}
	
	
	@Override
	public OrderDemandDetail getOrderById(HJOrderDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		
		StringBuffer hql = new StringBuffer(" SELECT ");
		hql.append(" o.orderid,o.jfuid,o.pid,o.servicetype,o.demandid,o.jdstate,o.orderprice, ");
		hql.append(" o.auctionnum,o.explicittel,o.createtime,o.releasetime,o.fishnum,o.pause,  ");
		hql.append(" o.pausedescription,o.usemycompanydata,o.typeofinvoice,o.biddingcommission,  ");
		hql.append(" d.begintime,d.xsxsurl,d.productname,d.demand,d.category3,d.demanddescription,d.beginage,  ");
		hql.append(" d.endage,d.targecity,d.pleader,d.pphone,d.paytime,d.targethumen,d.releasenum,d.ordername,  ");
		hql.append(" d.endtime,d.paymentstandard,d.paymenttime ,d.category1,d.otherreport,d.standardoperation,d.sittingprice, ");
		hql.append(" o.settlementmethod,o.executiondays,o.seatsnum,d.category2,d.cleaningchannel,d.citydesc,o.updatetime,  ");
		hql.append(" d.subdescription,o.pricetol,o.dremark,d.pause as demandpause,d.pausedescription as demandpausedescription,o.paymentmoney,o.whetherupload,d.favorableway, ");
		hql.append(" o.paymenttime orderpaymenttime,d.twolevindustry,d.threelevindustry ");
		hql.append(" FROM (select j.* from h_j_order_demand j where 1=1 and j.orderid=? and j.jfuid=? ) o  ");
		
		listpar.add(user.getOrderid());
		listpar.add(user.getJfuid());
		
		hql.append(" LEFT JOIN ");
		hql.append(" ( " );
		hql.append(" select ");
		hql.append(" d1.pcdid demandid, d1.begintime,d1.xsxsurl,'' productname,'' demand,d1.servicetype category3,d1.demanddescription,null beginage,");
		hql.append(" null endage,'' targecity,d1.pleader,d1.pphone,'' paytime,'' targethumen,d1.releasenum,d1.ordername,");
		hql.append(" d1.endtime,d1.paymentstandard,d1.paymenttime,d1.industry category1,d1.otherreport,d1.standardoperation,null sittingprice,");
		hql.append(" '' category2,d1.cleaningchannel,'' citydesc,");
		hql.append(" '' subdescription,d1.pause,d1.pausedescription,d1.favorableway,'' twolevindustry,'' threelevindustry  ");
		hql.append("  from h_f_datafiltering d1");
		hql.append(" UNION ALL ");
		hql.append(" select ");
		hql.append(" d1.demandid,d1.begintime,d1.xsxsurl,d1.productname,d1.demand,d1.category3,d1.demanddescription,d1.beginage, ");
		hql.append(" d1.endage,d1.targecity,d1.pleader,d1.pphone,d1.paytime,d1.targethumen,d1.releasenum,d1.ordername, ");
		hql.append(" d1.endtime,d1.paymentstandard,d1.paymenttime,d1.category1,d1.otherreport,d1.standardoperation,d1.sittingprice, ");
		hql.append(" d1.category2,'' cleaningchannel,d1.citydesc, ");
		hql.append(" d1.subdescription,d1.pause,d1.pausedescription,d1.favorableway,d1.twolevindustry,d1.threelevindustry ");
		hql.append(" from h_f_demand d1 ");
		hql.append(" ) as d ");
		hql.append(" on o.demandid=d.demandid ");
		hql.append(" and o.servicetype=d.category3 ");
		
		
		OrderDemandDetail demand=new OrderDemandDetail();
		List<Object> orderList =this.getListBySQL(hql.toString(),listpar);
		
		if(orderList!=null&&orderList.size()!=0){
			Object[] a= (Object[]) orderList.get(0);
	    	String orderid=StringUtil.objCovStr(a[0]);
	    	String jfuid=StringUtil.objCovStr(a[1]);
	    	String pid=StringUtil.objCovStr(a[2]);
	    	String servicetype=StringUtil.objCovStr(a[3]);
	    	String demandid=StringUtil.objCovStr(a[4]);
	    	Integer jdstate=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
	    	BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[6]));
	    	Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[7]));
	    	String explicittel=StringUtil.objCovStr(a[8]);
	    	String createtime=StringUtil.objCovStr(a[9]);
	    	String releasetime=StringUtil.objCovStr(a[10]);
	    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[11]));
	    	Integer pause=StringUtil.toInteger(StringUtil.objCovStr(a[12]));
	    	String pausedescription=StringUtil.objCovStr(a[13]);
	    	Integer usemycompanydata=StringUtil.toInteger(StringUtil.objCovStr(a[14]));
	    	Integer typeofinvoice=StringUtil.toInteger(StringUtil.objCovStr(a[15]));
	    	BigDecimal biddingcommission=StringUtil.toBigDecimal(StringUtil.objCovStr(a[16]));
	    	String begintime=StringUtil.objCovStr(a[17]);
	    	String xsxsurl=StringUtil.objCovStr(a[18]);
	    	String productname=StringUtil.objCovStr(a[19]);
	    	String demands=StringUtil.objCovStr(a[20]);
	    	String category3=StringUtil.objCovStr(a[21]);
	    	String demanddescription=StringUtil.objCovStr(a[22]);
	    	Integer beginage=StringUtil.toInteger(StringUtil.objCovStr(a[23]));
	    	Integer endage=StringUtil.toInteger(StringUtil.objCovStr(a[24]));
	    	String targecity=StringUtil.objCovStr(a[25]);
	    	String pleader=StringUtil.objCovStr(a[26]);
	    	String pphone=StringUtil.objCovStr(a[27]);
	    	String paytime=StringUtil.objCovStr(a[28]);
	    	String targethumen=StringUtil.objCovStr(a[29]);
	    	Integer releasenum=StringUtil.toInteger(StringUtil.objCovStr(a[30]));
	    	String ordername=StringUtil.objCovStr(a[31]);
	    	String endtime=StringUtil.objCovStr(a[32]);
	    	String paymentstandard=StringUtil.objCovStr(a[33]);
	    	String paymenttime=StringUtil.objCovStr(a[34]);
	    	String category1=StringUtil.objCovStr(a[35]);
	    	String otherreport=StringUtil.objCovStr(a[36]);
	    	String standardoperation=StringUtil.objCovStr(a[37]);
	    	BigDecimal sittingprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[38]));
	    	Integer settlementmethod=StringUtil.toInteger(StringUtil.objCovStr(a[39]));
	    	Integer executiondays=StringUtil.toInteger(StringUtil.objCovStr(a[40]));
	    	Integer seatsnum=StringUtil.toInteger(StringUtil.objCovStr(a[41]));
	    	String category2=StringUtil.objCovStr(a[42]);
	    	String cleaningchannel=StringUtil.objCovStr(a[43]);
	    	String citydesc=StringUtil.objCovStr(a[44]);
	    	String updatetime=StringUtil.objCovStr(a[45]);
	    	String subdescription=StringUtil.objCovStr(a[46]);
	    	BigDecimal pricetol=StringUtil.toBigDecimal(StringUtil.objCovStr(a[47]));
	    	String dremark=StringUtil.objCovStr(a[48]);   	
	    	Integer demandpause=StringUtil.toInteger(StringUtil.objCovStr(a[49]));;
	    	String demandpausedescription=StringUtil.objCovStr(a[50]);
	    	BigDecimal paymentmoney=StringUtil.toBigDecimal(StringUtil.objCovStr(a[51]));
	    	Integer whetherupload=StringUtil.toInteger(StringUtil.objCovStr(a[52]));
	    	Integer favorableway=StringUtil.toInteger(StringUtil.objCovStr(a[53]));
	    	String orderpaymenttime=StringUtil.objCovStr(a[54]);
	    	
	    	String twolevindustry=StringUtil.objCovStr(a[55]);
	    	String ythreelevindustry=StringUtil.objCovStr(a[56]);
	    	
//	    	BigDecimal jbfprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[57]));
//	    	BigDecimal jbfpricetol=StringUtil.toBigDecimal(StringUtil.objCovStr(a[58]));
	    	
	    	
	    	
	    	
	    	
	         String threelevindustry="";
	         BigDecimal price=new BigDecimal("0");
	         //验证传入的json  自定义标签 是否合法       {"threelevindustry":"学科辅导","price":"10"}
	         if(!StringUtil.isNull(ythreelevindustry)){
				try {
					JSONObject jsonObject = JSONObject.fromObject(ythreelevindustry);
					threelevindustry=jsonObject.getString("threelevindustry");
					price=StringUtil.toBigDecimal(jsonObject.getString("price"));
				} catch (Exception e) {
					price=new BigDecimal("0");
					threelevindustry=StringUtil.objCovStr(a[56]);
				}
			 }
	    	
	    	demand.setOrdername(ordername);
	    	demand.setBeginage(beginage);
	    	demand.setEndage(endage);
	    	demand.setTargecity(targecity);
	    	demand.setPleader(pleader);
	    	demand.setPphone(pphone);
	    	demand.setPaytime(paytime);
	    	demand.setTargethumen(targethumen);
	    	demand.setOrderprice(orderprice);
	    	demand.setAuctionnum(auctionnum);
	    	demand.setFishnum(fishnum);
	    	demand.setJfuid(jfuid);
	    	demand.setDemandid(demandid);
	    	demand.setReleasetime(releasetime);
	    	demand.setJdstate(jdstate);
	    	demand.setOrderid(orderid);
	    	demand.setEndtime(endtime);
		    demand.setIndustry(category1);
		    demand.setBegintime(begintime);
		    demand.setProductname(productname);
		    demand.setDemand(demands);
		    demand.setPaymentstandard(paymentstandard);
		    demand.setPaymenttime(paymenttime);
		 //   demand.setXsxsurl(xsxsurl);
		    demand.setXsxsurl("");
		    demand.setCategory3(category3);
		    demand.setDemanddescription(demanddescription);
		    demand.setReleasenum(releasenum);
			demand.setSittingprice(sittingprice);
	    	demand.setCreatetime(createtime);
	    	demand.setExplicittel(explicittel);
	    	demand.setServicetype(servicetype);
	        demand.setPid(pid);		
	        demand.setBiddingcommission(biddingcommission);
	    	demand.setUsemycompanydata(usemycompanydata);
	    	demand.setPause(pause);
	    	demand.setTypeofinvoice(typeofinvoice);
	    	demand.setPausedescription(pausedescription);
	    //	demand.setStandardoperation(standardoperation);
	    demand.setStandardoperation("");
		  //  demand.setOtherreport(otherreport);
		  demand.setOtherreport("");
		    demand.setSettlementmethod(settlementmethod);
		    demand.setExecutiondays(executiondays);
		    demand.setSeatsnum(seatsnum);
		    demand.setCategory2(category2);
		    demand.setCleaningchannel(cleaningchannel);
	    	demand.setCitydesc(citydesc);
	    	demand.setUpdatetime(updatetime);
	    	demand.setSubdescription(subdescription);
	    	demand.setPricetol(pricetol);
	    	demand.setDremark(dremark);
	    	demand.setDemandpause(demandpause);
	    	demand.setDemandpausedescription(demandpausedescription);
	    	demand.setPaymentmoney(paymentmoney);
	    	demand.setWhetherupload(whetherupload);
	    	demand.setFavorableway(favorableway);
	    	demand.setOrderpaymenttime(orderpaymenttime);
	    	demand.setTwolevindustry(twolevindustry);
	    	demand.setThreelevindustry(threelevindustry);
	    	demand.setPrice(price);
//	    	demand.setJbfprice(jbfprice);
//	    	demand.setJbfpricetol(jbfpricetol);
		}else{
			demand=null;
		}
		return demand;
	}
	
	
	
	/*
	 * 更具状态查询 需求记录
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 */
	@Override
	public List<HJOrderDemand> getOrderDemandByzt(HJOrderDemand user) {
		StringBuffer hql = new StringBuffer(" from HJOrderDemand  u where 1=1 ");
		ArrayList<Object> listpar = new ArrayList<Object>();
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and u.jfuid=? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getOrderid())){
			hql.append(" and u.orderid=? ");
			listpar.add(user.getOrderid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and u.demandid=? ");
			listpar.add(user.getDemandid());
		}
		Integer[] list = user.getStrzt();
		 if(list!=null){
			 hql.append(" and u.jdstate in(");
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql.append("?)");
				 }else{
					 hql.append("?,");
				 }
	         }
		 }
		List users =this.getListByHQL(hql.toString(), listpar);
		return users;
	}
	
	
	@Override
	public HJOrderDemand getOrderDemandByOrderid(HJOrderDemand user) {
		StringBuffer hql = new StringBuffer(" from HJOrderDemand  u where 1=1   ");
		ArrayList<Object> listpar = new ArrayList<Object>();
		if(!StringUtil.isNull(user.getOrderid())){
			hql.append(" and u.orderid=? ");
			listpar.add(user.getOrderid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and u.demandid=? ");
			listpar.add(user.getDemandid());
		}
		 Integer[] list = user.getStrzt();
		 if(list!=null){
			 hql.append(" and u.jdstate in(");
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql.append("?)");
				 }else
				 {
					 hql.append("?,");
				 }
	         }
		 }
		List<Object> users =this.getListByHQL(hql.toString(), listpar);
		HJOrderDemand demand=null;
		if(users!=null&&users.size()!=0){
			demand=(HJOrderDemand)users.get(0);
		}
		return demand;
	}
	/*
	 * 检查竞拍的重复性  jfuid  demandid
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 */
	@Override
	public HJOrderDemand getOrderDemandByUidAndDid(HJOrderDemand user) {
		String hql = " from HJOrderDemand  u where u.jfuid = ? and demandid =?  and orderid=?";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getJfuid());
		list.add(user.getDemandid());
		list.add(user.getOrderid());
		
		
		List<Object> users =this.getListByHQL(hql, list);
		HJOrderDemand demand=null;
		if(users!=null&&users.size()!=0){
			demand=(HJOrderDemand)users.get(0);
		}
		return demand;
	}
	
	
	
	/*
	 * 查询订单详细    加入需求相关信息
	 */
	@Override
	public HJOrderDemand getOrderDemandByById(HJOrderDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer("SELECT u.ordername,u.beginage,u.endage,u.targecity,u.finishtime,u.pleader,u.pphone,u.paytime,u.needv,u.targethumen");
										sql.append(",d.orderprice,d.auctionnum,'actualplan',d.fishnum,d.jfuid,d.demandid,d.releasetime,d.jdstate,d.dremark,u.standardoperation,d.orderid,u.applicationnum,u.standis,u.otheris ");
										sql.append(",u.packageid,u.endtime,u.releasetime as demareleasetime,u.otherreport,u.category1,u.begintime,u.productname,u.demand,'' as uy,''  as uy1");
										sql.append(",u.paymentstandard,u.paymenttime,u.xsxsurl,u.category3,u.demanddescription ");
										sql.append("from h_j_order_demand d LEFT JOIN h_f_demand u on d.demandid=u.demandid  where 1=1 ");
		if(!StringUtil.isNull(user.getOrderid())){
			sql.append(" and d.orderid=? ");
			listpar.add(user.getOrderid());
		}
		
		List<Object> users =this.getListBySQL(sql.toString(), listpar);
		HJOrderDemand demand=null;
		if(users!=null&&users.size()!=0){
	    	Object[] a= (Object[]) users.get(0);
	    	String ordername=StringUtil.objCovStr(a[0]);
	    	Integer beginage=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
	    	Integer endage=StringUtil.toInteger(StringUtil.objCovStr(a[2]));
	    	String targecity=StringUtil.objCovStr(a[3]);
	    	String finishtime=StringUtil.objCovStr(a[4]);
	    	
	    	String pleader=StringUtil.objCovStr(a[5]);
	    	String pphone=StringUtil.objCovStr(a[6]);
	    	String paytime=StringUtil.objCovStr(a[7]);
	    	String needv=StringUtil.objCovStr(a[8]);
	    	String targethumen=StringUtil.objCovStr(a[9]);
	    	
	    	BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[10]));
	    	Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[11]));
	    	String actualplan=StringUtil.objCovStr(a[12]);
	    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[13]));
	    	String jfuid=StringUtil.objCovStr(a[14]);
	    	String demandid=StringUtil.objCovStr(a[15]);
	    	String releasetime=StringUtil.objCovStr(a[16]);
	    	Integer jdstate=StringUtil.toInteger(StringUtil.objCovStr(a[17]));
	    	String dremark=StringUtil.objCovStr(a[18]);
	    	String standardoperation=StringUtil.objCovStr(a[19]);
	    	String orderid=StringUtil.objCovStr(a[20]);
	    	Integer applicationnum=StringUtil.toInteger(StringUtil.objCovStr(a[21]));
	    	Integer standis=StringUtil.toInteger(StringUtil.objCovStr(a[22]));
	    	Integer otheris=StringUtil.toInteger(StringUtil.objCovStr(a[23]));
	    	
	    	String packageid=StringUtil.objCovStr(a[24]);
	    	String endtime=StringUtil.objCovStr(a[25]);
	    	String demandreleasetime=StringUtil.objCovStr(a[26]);
	    	String otherreport=StringUtil.objCovStr(a[27]);
	    	String category1=StringUtil.objCovStr(a[28]);
	    	String begintime=StringUtil.objCovStr(a[29]);
	    	String productname=StringUtil.objCovStr(a[30]);
	    	String demands=StringUtil.objCovStr(a[31]);
	    	
	    	String paymentstandard=StringUtil.objCovStr(a[34]);
	    	String paymenttime=StringUtil.objCovStr(a[35]);
	    	String xsxsurl=StringUtil.objCovStr(a[36]);
	    	
	    	
	    	String category3=StringUtil.objCovStr(a[37]);
	    	String demanddescription=StringUtil.objCovStr(a[38]);
	    	
	    	demand=new HJOrderDemand();
	    	demand.setOrdername(ordername);
	    	demand.setBeginage(beginage);
	    	demand.setEndage(endage);
	    	demand.setTargecity(targecity);
	    	demand.setFinishtime(finishtime);
	    	demand.setPleader(pleader);
	    	demand.setPphone(pphone);
	    	demand.setPaytime(paytime);
	    	demand.setNeedv(needv);
	    	demand.setTargethumen(targethumen);
	    	demand.setOrderprice(orderprice);
	    	demand.setAuctionnum(auctionnum);
//	    	demand.setActualplan(actualplan);
	    	demand.setFishnum(fishnum);
	    	demand.setJfuid(jfuid);
	    	demand.setDemandid(demandid);
	    	demand.setReleasetime(releasetime);
	    	demand.setJdstate(jdstate);
	    	demand.setDremark(dremark);
	    //	demand.setStandardoperation(standardoperation);
	        demand.setStandardoperation("");
	    	demand.setOrderid(orderid);
	    	demand.setApplicationnum(applicationnum);
	    	demand.setStandis(standis);
	    	demand.setOtheris(otheris);
	    	
	       	demand.setPackageid(packageid);
	    	demand.setEndtime(endtime);
		    demand.setDemandreleasetime(demandreleasetime);
		   // demand.setOtherreport(otherreport);
		   demand.setOtherreport("");
		    demand.setCategory1(category1);
		    demand.setBegintime(begintime);
		    demand.setProductname(productname);
		    demand.setDemand(demands);
		    demand.setPaymentstandard(paymentstandard);
		    demand.setPaymenttime(paymenttime);
		   // demand.setXsxsurl(xsxsurl);
		    demand.setXsxsurl("");
		    demand.setCategory3(category3);
		    demand.setDemanddescription(demanddescription);
		}
		return demand;
	}
	
	
	
	
	
	/*
	 * 查询订单详细    加入需求相关信息
	 */
	@Override
	public HJOrderDemand getOrderDemandByFirst(HJOrderDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer("SELECT u.ordername,u.beginage,u.endage,u.targecity,u.finishtime,u.pleader,u.pphone,u.paytime,u.needv,u.targethumen");
										sql.append(",d.orderprice,d.auctionnum,d.actualplan,d.fishnum,d.jfuid,d.demandid,d.releasetime,d.jdstate,d.dremark,u.standardoperation,d.orderid,u.applicationnum,u.standis,u.otheris ");
										sql.append(",u.packageid,u.endtime,u.releasetime as demareleasetime,u.otherreport,u.category1,u.begintime,u.productname,u.demand,'','' ");
										sql.append(",u.paymentstandard,u.paymenttime,u.xsxsurl ");
										sql.append(" from h_j_order_demand d LEFT JOIN h_f_demand u on d.demandid=u.demandid  where 1=1 ");
		Integer[] list = user.getStrzt();
		if(list!=null){
			sql.append(" and d.jdstate in(");
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 sql.append("?)");
				 }else
				 {
					 sql.append("?,");
				 }
	         }
		 }
		sql.append(" order by  d.createtime desc limit 0,1 ");
		
		List<Object> users =this.getListBySQL(sql.toString(), listpar);
		HJOrderDemand demand=null;
		if(users!=null&&users.size()!=0){
	    	Object[] a= (Object[]) users.get(0);
	    	String ordername=StringUtil.objCovStr(a[0]);
	    	Integer beginage=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
	    	Integer endage=StringUtil.toInteger(StringUtil.objCovStr(a[2]));
	    	String targecity=StringUtil.objCovStr(a[3]);
	    	String finishtime=StringUtil.objCovStr(a[4]);
	    	
	    	String pleader=StringUtil.objCovStr(a[5]);
	    	String pphone=StringUtil.objCovStr(a[6]);
	    	String paytime=StringUtil.objCovStr(a[7]);
	    	String needv=StringUtil.objCovStr(a[8]);
	    	String targethumen=StringUtil.objCovStr(a[9]);
	    	
	    	BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[10]));
	    	Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[11]));
//	    	String actualplan=StringUtil.objCovStr(a[12]);
	    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[13]));
	    	String jfuid=StringUtil.objCovStr(a[14]);
	    	String demandid=StringUtil.objCovStr(a[15]);
	    	String releasetime=StringUtil.objCovStr(a[16]);
	    	Integer jdstate=StringUtil.toInteger(StringUtil.objCovStr(a[17]));
	    	String dremark=StringUtil.objCovStr(a[18]);
	    	String standardoperation=StringUtil.objCovStr(a[19]);
	    	String orderid=StringUtil.objCovStr(a[20]);
	    	Integer applicationnum=StringUtil.toInteger(StringUtil.objCovStr(a[21]));
	    	Integer standis=StringUtil.toInteger(StringUtil.objCovStr(a[22]));
	    	Integer otheris=StringUtil.toInteger(StringUtil.objCovStr(a[23]));
	    	
	    	String packageid=StringUtil.objCovStr(a[24]);
	    	String endtime=StringUtil.objCovStr(a[25]);
	    	String demandreleasetime=StringUtil.objCovStr(a[26]);
	    	String otherreport=StringUtil.objCovStr(a[27]);
	    	String category1=StringUtil.objCovStr(a[28]);
	    	String begintime=StringUtil.objCovStr(a[29]);
	    	String productname=StringUtil.objCovStr(a[30]);
	    	String demands=StringUtil.objCovStr(a[31]);
	    	String paymentstandard=StringUtil.objCovStr(a[34]);
	    	String paymenttime=StringUtil.objCovStr(a[35]);
	    	String xsxsurl=StringUtil.objCovStr(a[36]);
	    	
	    	demand=new HJOrderDemand();
	    	demand.setOrdername(ordername);
	    	demand.setBeginage(beginage);
	    	demand.setEndage(endage);
	    	demand.setTargecity(targecity);
	    	demand.setFinishtime(finishtime);
	    	demand.setPleader(pleader);
	    	demand.setPphone(pphone);
	    	demand.setPaytime(paytime);
	    	demand.setNeedv(needv);
	    	demand.setTargethumen(targethumen);
	    	demand.setOrderprice(orderprice);
	    	demand.setAuctionnum(auctionnum);
//	    	demand.setActualplan(actualplan);
	    	demand.setFishnum(fishnum);
	    	demand.setJfuid(jfuid);
	    	demand.setDemandid(demandid);
	    	demand.setReleasetime(releasetime);
	    	demand.setJdstate(jdstate);
	    	demand.setDremark(dremark);
	    //	demand.setStandardoperation(standardoperation);
	    demand.setStandardoperation("");
	    	demand.setOrderid(orderid);
	    	demand.setApplicationnum(applicationnum);
	    	demand.setStandis(standis);
	    	demand.setOtheris(otheris);
	    	
	       	demand.setPackageid(packageid);
	    	demand.setEndtime(endtime);
		    demand.setDemandreleasetime(demandreleasetime);
		   // demand.setOtherreport(otherreport);
		   demand.setOtherreport("");
		    demand.setCategory1(category1);
		    demand.setBegintime(begintime);
		    demand.setProductname(productname);
		    demand.setDemand(demands);
		    demand.setPaymentstandard(paymentstandard);
		    demand.setPaymenttime(paymenttime);
		   // demand.setXsxsurl(xsxsurl);
		    demand.setXsxsurl("");
		}
		return demand;
	}
	
	/*
	 * 更具状态查询 需求记录
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 */
	@Override
	public Long getCountOrderDemandByzt(HJOrderDemand user) {
		 ArrayList<Object> listpar = new ArrayList<Object>();
		 listpar.add(user.getJfuid());
		 String hql = " select count(u) from HJOrderDemand  u where u.jfuid = ? ";
		 Integer[] list = user.getStrzt();
		 if(list!=null){
			 hql+=" and u.jdstate in(";
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql+="?)";
				 }else
				 {
					 hql+="?,";
				 }
	         }
		 }
		Long countDemand =this.countByHql(hql, listpar);
		return countDemand;
	}
	
	
	/*
	 * 更具状态查询 需求记录
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 * 加入了分页
	 */
	@Override
	public PageResults<Object> getOrderDemands(HJOrderDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		String hql =" from HJOrderDemand  u where 1=1 ";
		
		if(!StringUtil.isNull(user.getPid())){
			hql+=" and u.pid = ? ";
			listpar.add(user.getPid());
		}else{
			hql+=" and (u.pid is null or u.pid='') ";
		}
		
		if(!StringUtil.isNull(user.getJfuid())){
			hql+=" and u.jfuid = ? ";
			listpar.add(user.getJfuid());
		}
		Integer[] list = user.getStrzt();
		 if(list!=null){
			 hql+=" and u.jdstate in(";
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql+="?)";
				 }else
				 {
					 hql+="?,";
				 }
	         }
		 }
		ts=this.findPageByFetchedHql(hql, countHql, ts.getPageNo(), ts.getPageSize(), listpar);
		return ts;
	}
	
	/*
	 * 更具状态查询 需求记录
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 * 加入了分页
	 */
	@Override
	public List<Object> getOrders(HJOrderDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		String hql =" from HJOrderDemand  u where 1=1 ";
		
		if(!StringUtil.isNull(user.getPid())){
			hql+=" and u.pid = ? ";
			listpar.add(user.getPid());
		}else{
			hql+=" and (u.pid is null or u.pid='') ";
		}
		
		if(!StringUtil.isNull(user.getJfuid())){
			hql+=" and u.jfuid = ? ";
			listpar.add(user.getJfuid());
		}
		Integer[] list = user.getStrzt();
		 if(list!=null){
			 hql+=" and u.jdstate in(";
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql+="?)";
				 }else
				 {
					 hql+="?,";
				 }
	         }
		 }
		List<Object> A=this.getListByHQL(hql,listpar);
		return A;
	}
	
	
	
	
	
	/*1.4.2  接包方-历史订单汇总  HistoricalOrderSummary*/
	@Override
	public List<HistoricalOrderSummary>  getHistoricalOrderSummary(HJOrderDemand user){
		ArrayList<Object> listpar = new ArrayList<Object>();
		
		StringBuffer sql = 
	    new StringBuffer(" SELECT sum(d.auctionnum) yyauctionnumtol,DATE_FORMAT(d.createtime,'%Y-%m') as ym,d.createtime,d.jfuid ");
			  sql.append(" FROM h_j_order_demand d WHERE 1=1  ");
				if(!StringUtil.isNull(user.getJfuid())){
					sql.append(" and d.jfuid=? ");
					listpar.add(user.getJfuid());
				}
				if(!StringUtil.isNull(user.getYy())){
					sql.append(" and DATE_FORMAT(d.createtime,'%Y')=? ");
					listpar.add(user.getYy());
				}
				Integer[] list = user.getStrzt();
				if(list!=null){
					sql.append(" and d.jdstate in(");
					 for(int i = 0; i < list.length; i++) {
						 listpar.add(list[i]);
						 //最后一个
						 if(i==list.length-1){
							 sql.append("?)");
						 }else
						 {
							 sql.append("?,");
						 }
			         }
				 }
				
				sql.append(" GROUP BY ym ");
				
		ArrayList<HistoricalOrderSummary> hosList=new ArrayList<HistoricalOrderSummary>();
		List<Object> users =this.getListBySQL(sql.toString(), listpar);
		if(users!=null&&users.size()!=0){
			for (int i = 0; i < users.size(); i++) {
		    	Object[] a= (Object[]) users.get(i);
		    	
		    	String yyauctionnumtol=StringUtil.objCovStr(a[0]);
		    	String ym=StringUtil.objCovStr(a[1]);
		    	String createtime=StringUtil.objCovStr(a[2]);
		    	String jfuid=StringUtil.objCovStr(a[3]);
		    	HistoricalOrderSummary d=new HistoricalOrderSummary();
		    	d.setYyauctionnumtol(yyauctionnumtol);
		    	d.setYm(ym);
		    	d.setCreatetime(createtime);
		    	d.setJfuid(jfuid);
		    	hosList.add(d);
			}
		}
		return hosList;
	}
	
	
	
	
	
	@Override
	public Object[] getSettlementInfo(HJOrderDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("select sum(o.paymentmoney),sum(o.paymentnum) FROM `h_j_order_demand` o  where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and o.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and o.jdstate in(");
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql.append("?)");
				 }else
				 {
					 hql.append("?,");
				 }
	         }
		 }
		List a=this.getListBySQL(hql.toString(),listpar);
		Object[] price=(Object[]) a.get(0);
		return price;
	}
	
	/*1.4.2  接包方- 竞拍订单总量(TotalBidOrder) */
	@Override
	public BigDecimal getTotalBidOrder(HJOrderDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("select sum(o.auctionnum) from h_j_order_demand  o where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and o.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql.append("?)");
				 }else
				 {
					 hql.append("?,");
				 }
	         }
		 }
		List a=this.getListBySQL(hql.toString(),listpar);
		BigDecimal price=new BigDecimal("0");
		if(a!=null&&a.size()!=0){
			BigDecimal prices=(BigDecimal) a.get(0);
			if(null!=prices){
				price=prices;
			}
		}
		return price;
	}
	
	
	
	/*1.4.2  接包方- 剩余订单量(ResidualOrderQuantity) */
	@Override
	public BigDecimal getResidualOrderQuantity(HJOrderDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("select sum(o.auctionnum-o.fishnum) from h_j_order_demand  o where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and o.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			 for(int i = 0; i < list.length; i++) {
				 listpar.add(list[i]);
				 //最后一个
				 if(i==list.length-1){
					 hql.append("?)");
				 }else
				 {
					 hql.append("?,");
				 }
	         }
		 }
		List a=this.getListBySQL(hql.toString(),listpar);
		BigDecimal price=new BigDecimal("0");
		if(a!=null&&a.size()!=0){
			BigDecimal prices=(BigDecimal) a.get(0);
			if(null!=prices){
				price=prices;
			}
		}
		return price;
	}

	
	
	/*1.4.2 接包方-订单概况(我的订单-OrderProfileSelect下拉选择框)  */
	@Override
	public List<OrderProfileSelect> getOrderProfileSelect(HJOrderDemand user){
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = 
	    new StringBuffer(" select d.ordername,o.demandid,o.jfuid,sum(o.auctionnum),o.orderprice,sum(o.fishnum),(sum(o.fishnum)/sum(o.auctionnum))*100,o.orderid ");
			  sql.append(" from h_j_order_demand o LEFT JOIN h_f_demand d  on o.demandid=d.demandid where 1=1 and o.jdstate in(2,4,5,6,7) ");
				if(!StringUtil.isNull(user.getJfuid())){
					sql.append(" and o.jfuid=? ");
					listpar.add(user.getJfuid());
				}
				sql.append(" GROUP BY o.demandid   ");
				sql.append(" order by DATE_FORMAT(o.releasetime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(o.createtime,'%Y%m%d%H%i%s') desc ");
				
		ArrayList<OrderProfileSelect> hosList=new ArrayList<OrderProfileSelect>();
		List<Object> users =this.getListBySQL(sql.toString(), listpar);
		if(users!=null&&users.size()!=0){
			for (int i = 0; i < users.size(); i++) {
		    	Object[] a= (Object[]) users.get(i);
		    	String ordername=StringUtil.objCovStr(a[0]);
		    	String demandid=StringUtil.objCovStr(a[1]);
		    	String jfuid=StringUtil.objCovStr(a[2]);
		    	Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[3]));
		    	BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[4]));
		    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
		    	BigDecimal orderCompletionRate=StringUtil.toBigDecimal(StringUtil.objCovStr(a[6]));
		    	OrderProfileSelect d=new OrderProfileSelect();
		    	d.setOrdername(ordername);
		    	d.setDemandid(demandid);
		    	d.setJfuid(jfuid);
		    	d.setAuctionnum(auctionnum);
		    	d.setOrderprice(orderprice);
		    	d.setFishnum(fishnum);
		    	d.setOrderCompletionRate(orderCompletionRate);
		    	hosList.add(d);
			}
		}
		return hosList;
	}
	////接包方-我的订单-订单列表/异常订单（h）
	@Override
	public PageResults<Object> getTheOrderList(HJOrderDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" SELECT o.jfuid,t.demandname,t.industry,t.paymentstandard,o.orderid,o.orderprice,o.auctionnum,o.fishnum,o.createtime ");
		    sql.append(" ,o.jdstate,o.servicetype,o.pause,o.settlementmethod,o.executiondays,o.seatsnum,o.typeofinvoice,o.pricetol,t.begintime,t.endtime,t.twolevindustry,t.threelevindustry,t.jbfpricetol,t.jbfprice from h_j_order_demand o");
		    sql.append(" LEFT JOIN ( ");
		    sql.append(" SELECT h.pid,h.ordername as demandname,h.paymentstandard,h.category1 as industry,h.twolevindustry,h.threelevindustry,h.demandid,h.begintime,h.endtime ,h.jbfpricetol,h.jbfprice from h_f_demand h   ");
		    sql.append(" UNION ALL ");
		    sql.append(" SELECT f.pid,f.ordername as demandname,f.paymentstandard,f.industry,'' twolevindustry,'' threelevindustry,f.pcdid as demandid,f.begintime,f.endtime ,f.jbfpricetol,f.jbfprice from h_f_datafiltering f   ");
		    sql.append(" ) t ");
		    sql.append(" ON t.demandid = o.demandid ");
		    sql.append(" WHERE 1 = 1 ");
		
		if(!StringUtil.isNull(user.getJfuid())){
			sql.append(" and o.jfuid = ?");
			listpar.add(user.getJfuid());
		}
//		res.setMsg("jdstate请输入 (0-正常订单全部 1-待审核(审核中)  2[ 2-通过(审核)4-执行中] 进行中      3-驳回     5-结算中    6-已完成   7-被关闭   8-异常订单 ) 对应的整数值");
		
		Integer[] list = user.getStrzt();
		//异常订单
		if(8==user.getJdstate()){
			sql.append(" and (o.pause = ?");
			listpar.add(user.getPause());
			
			if(list!=null){
				sql.append(" or o.jdstate in(");
				 for(int i = 0; i < list.length; i++) {
					 listpar.add(list[i]);
					 //最后一个
					 if(i==list.length-1){
						 sql.append("?)");
					 }else
					 {
						 sql.append("?,");
					 }
		         }
			 }	
			sql.append(" )");
		}else{
			if(null!=user.getPause()){
				sql.append(" and o.pause = ?");
				listpar.add(user.getPause());
			}
			if(list!=null){
				sql.append(" and o.jdstate in(");
				 for(int i = 0; i < list.length; i++) {
					 listpar.add(list[i]);
					 //最后一个
					 if(i==list.length-1){
						 sql.append("?)");
					 }else
					 {
						 sql.append("?,");
					 }
		         }
			 }	
		}
		if(!StringUtil.isNull(user.getOrderid())){
			sql.append(" and o.orderid like '%"+user.getOrderid()+"%' ");
		}
		if(!StringUtil.isNull(user.getBegintime())){
			sql.append(" and o.createtime>= ? ");
			listpar.add(user.getBegintime());
		}
		if(!StringUtil.isNull(user.getEndtime())){
			sql.append(" and o.createtime<= ?");
			listpar.add(user.getEndtime());
		}
		if(!StringUtil.isNull(user.getDemandname())){
			sql.append(" and t.demandname like '%"+user.getDemandname()+"%' ");
		}
		sql.append(" order by DATE_FORMAT(o.createtime,'%Y%m%d%H%i%s') desc");
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedSql(sql,user.getCurrentPage(), pageSize, listpar);
		
		return ts;
	}
	
	/*邀请码显示我邀请的接包方列表*/
	@Override
	public List<Object> getVerificationCodeOrder(JfUser user) {
		StringBuffer sql=new StringBuffer("select t.jfuid,t.createtime,t.jfuinvitationcode,t.compname,IFNULL(SUM(t.auctionnum),0),IFNULL(t.biddingcommission,0),IFNULL(t.order_numtol,0) ");
		             sql.append(" from ( select u.jfuid,u.createtime,u.jfuinvitationcode,u.compname,SUM(o.auctionnum) as auctionnum,SUM(o.biddingcommission) as biddingcommission,t1.order_numtol from (");
		             sql.append("select r.jfuid,r.createtime,r.jfuinvitationcode,d.compname from(select  c.jfuid,c.createtime,c.jfuinvitationcode from h_jf_user c where 1=1 ");
		             
		             ArrayList<Object> list=new ArrayList<Object>();
		             
		             if(!StringUtil.isNull(user.getJfuinvitationcode())){
		            	 sql.append(" and c.jfuinvitationcode = ?");
		            	 list.add(user.getJfuinvitationcode()); 
		             }
		             
		             if(!StringUtil.isNull(user.getJfutype())){
		            	 sql.append(" and c.jfutype = ?");
		            	 list.add(user.getJfutype());
		             }
		             
		             if(!StringUtil.isNull(user.getCreatetime())){
		            	//获取当前时间
		     			 Calendar a=Calendar.getInstance();
		     			 user.setCreatetime(a.get(Calendar.YEAR)+"-"+user.getCreatetime());
		            	 sql.append(" and DATE_FORMAT(c.createtime,'%Y-%c') = ?");
		            	 list.add(user.getCreatetime());
		             }
		             
		             sql.append(" ) r  LEFT JOIN h_j_user_detail d on d.jfuid=r.jfuid ");
		             
		             if(!StringUtil.isNull(user.getCompname())){
		            	 sql.append(" where 1=1 and d.compname like '%"+user.getCompname()+"%'");
		             }
		             
		            sql.append(") u LEFT JOIN h_j_order_demand o on  u.jfuid=o.jfuid  ");
		            
		            sql.append("  LEFT JOIN  (select  jfuid_j,sum(qa_notstandard+qa_qualified) order_numtol,orderid from gx_j_order_upload_report  where `status`=6 and qa_check=0 and dba_check=0 GROUP BY jfuid_j) t1 ON o.jfuid = t1.jfuid_j and o.orderid=t1.orderid ");
		            
//		            and o.jdstate in (2,4,5,6,7) 
		            sql.append("  where 1=1  GROUP BY u.jfuid) t GROUP  BY t.jfuid");
		            List<Object> jlist=(List<Object>) this.getListBySQL(sql.toString(), list);
		            return jlist;
	}
}
