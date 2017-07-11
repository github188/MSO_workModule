package com.mso.dao.impl;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IDemandDao;
import com.mso.model.HFDemand;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 */
@Repository("demandDao")
public class DemandDaoImpl extends BaseDao<Object, Serializable> implements IDemandDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    
    /*
     * 添加需求
     */
	@Override
	public HFDemand addDemand(HFDemand user){
		this.save(user);
		return user;
	}
	@Override
	public List<HFDemand> addDemandAll(List<HFDemand> entities){
		this.saveAll(entities);
		return entities;
	}
	
	
	/*
	 * 删除草稿箱需求
	 */
	@Override
	public void deleteDemand(HFDemand user){
		this.delete(user);
	}
	/*
	 * 修改草稿箱需求
	 */
	@Override
	public void updateDemand(HFDemand user){
	    this.update(user);
	}
	
	
	public HFDemand getDemandByFist(HFDemand user){
		StringBuffer hql = new StringBuffer("from HFDemand  u where u.jfuid = ? ");
		ArrayList<Object> listpar = new ArrayList<Object>();
		listpar.add(user.getJfuid());
		
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		hql.append(" order by  u.createtime desc limit 0,1 ");
		List<Object> users =this.getListByHQL(hql.toString(), listpar);
		if(users!=null&&users.size()!=0){
			return (HFDemand)users.get(0);
		}
		return null;
	}
	
	
	
	

	
	
	public HFDemand getDemandById(HFDemand user){
		String hql = " from HFDemand  u where u.demandid = ?";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getDemandid());
		List<Object> users =this.getListByHQL(hql, list);
		if(users!=null&&users.size()!=0){
			return (HFDemand)users.get(0);
		}
		return null;
	}
	
	public List<Object> getDemandByPid(HFDemand user){
		String hql = " from HFDemand  u where u.pid = ?";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getPid());
		List<Object> users =this.getListByHQL(hql, list);
		if(users!=null&&users.size()!=0){
			return users;
		}
		return null;
	}
	
	
	
	/*
	 * 根据条件查询所有的需求信息   不分页  用于定时器
	 */
	@Override
	public List getReportDemands(HFDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" from HFDemand u where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and u.pid = ? ");
			listpar.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			sql.append(" and u.demandid = ? ");
			listpar.add(user.getDemandid());
		}
		if(!StringUtil.isNull(user.getJfuid())){
			sql.append(" and u.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			sql.append(" and u.fdstate in(");
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
		sql.append(" order by DATE_FORMAT(releasetime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(createtime,'%Y%m%d%H%i%s') desc ");
		List demanList =this.getListByHQL(sql.toString(),listpar);
		return demanList;
	}
	
	
	
	
	
	/*
	 * 更具状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	@Override
	public Long getCountDemandByzt(HFDemand user) {
		 ArrayList<Object> listpar = new ArrayList<Object>();
		 listpar.add(user.getJfuid());
		 String hql = " select count(u) from HFDemand  u where  u.jfuid = ? ";
		 Integer[] list = user.getStrzt();
		 if(list!=null){
			 hql+=" and u.fdstate in(";
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
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 * 加入了分页
	 */
	@Override
	public PageResults<Object> getDemands(HFDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from HFDemand  u where 1=1 ");
		
		if(!StringUtil.isNull(user.getXuqiuType())){
			if("套餐".equals(user.getXuqiuType())){
				hql.append(" and packageid!='' ");
			}
			if("个性化需求".equals(user.getXuqiuType())){
				hql.append(" and packageid='' ");
			}
		}
		if(!StringUtil.isNull(user.getMxArea())){
			hql.append(" and u.targecity like '%"+user.getMxArea()+"%' ");
		}
		if(!StringUtil.isNull(user.getCategory1())){
			hql.append(" and u.category1=? ");
			listpar.add(user.getCategory1());
		}
		if(!StringUtil.isNull(user.getCategory2())){
			hql.append(" and u.category2 like '%"+user.getCategory2()+"%' ");
		}
		
	
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and u.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getSorderName())){
			hql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
		}
		if(!StringUtil.isNull(user.getSorderNo())){
			hql.append(" and u.demandid =? ");
			listpar.add(user.getSorderNo());
			
		}
		
		if(null!=user.getMinJine()){
			hql.append(" and u.orderpricetol>=? ");
			listpar.add(user.getMinJine());
		}
		if(null!=user.getMaxJine()){
			hql.append(" and u.orderpricetol<=? ");
			listpar.add(user.getMaxJine());
		}

		if(!StringUtil.isNull(user.getSbeginDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		
		
		hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(u.updatetime,'%Y%m%d%H%i%s') desc ");
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedHql(hql.toString(), countHql, user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
	
	
	
	
	@Override
	public List<Object> getDemandList(HFDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from HFDemand  u where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			hql.append(" and u.pid = ? ");
			listpar.add(user.getPid());
		}else{
			hql.append(" and (u.pid is null or u.pid='') ");
		}
		
		if(!StringUtil.isNull(user.getXuqiuType())){
			if("套餐".equals(user.getXuqiuType())){
				hql.append(" and u.packageid!='' ");
			}
			if("个性化需求".equals(user.getXuqiuType())){
				hql.append(" and u.packageid='' ");
			}
		}
		if(!StringUtil.isNull(user.getMxArea())){
			hql.append(" and u.targecity like '%"+user.getMxArea()+"%' ");
		}
		if(!StringUtil.isNull(user.getCategory1())){
			hql.append(" and u.category1=? ");
			listpar.add(user.getCategory1());
		}
		if(!StringUtil.isNull(user.getCategory2())){
			hql.append(" and u.category2 like '%"+user.getCategory2()+"%' ");
		}
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and u.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getSorderName())){
			hql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
		}
		if(!StringUtil.isNull(user.getSorderNo())){
			hql.append(" and u.demandid =? ");
			listpar.add(user.getSorderNo());
		}
		if(null!=user.getMinJine()){
			hql.append(" and u.orderpricetol>=? ");
			listpar.add(user.getMinJine());
		}
		if(null!=user.getMaxJine()){
			hql.append(" and u.orderpricetol<=? ");
			listpar.add(user.getMaxJine());
		}
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(u.updatetime,'%Y%m%d%H%i%s') desc ");
		List<Object>  a=this.getListByHQL(hql.toString(), listpar);
		return a;
	}
	
	
	
	
	
	
	
	
	//计算金额字段中值 统计	 select sum(u.releasenum) as tolFbl,sum(u.fishnum) as tolWcl, sum(u.paymentmoney) as toljsPrice from h_f_demand  u where 1=1 and u.fdstate in(2,3,4,5,6,7);
	@Override  //需求发布总量   //成单总量  //结算总金额
	public Object[] getSumDemandOne(HFDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("select if(isnull(sum(u.releasenum)),0,sum(u.releasenum)) AS tolFbl,if(isnull(sum(u.fishnum)),0,sum(u.fishnum)) AS tolWcl,if(isnull(sum(u.paymentmoney)),0.0,sum(u.paymentmoney)) AS toljsPrice  ");
		hql.append(" ,if(isnull(sum(s.releasenum)),0,sum(s.releasenum)) AS tolJsl ");
		hql.append(" from h_f_demand  u  LEFT JOIN  gx_dba_everyday_statistics s  on u.demandid=s.demandid where 1=1 ");
		
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and u.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getSorderName())){
			hql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
		}
		if(!StringUtil.isNull(user.getSorderNo())){
			hql.append(" and u.demandid like '%"+user.getSorderNo()+"%' ");
		}
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
		}
		if(!StringUtil.isNull(user.getMonth())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y-%m')=? ");
			listpar.add(user.getMonth());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		List listres=this.getListBySQL(hql.toString(),listpar);
		Object[] a= {0,0,0.0,0};
		if(listres!=null&&listres.size()!=0){
			a=(Object[]) listres.get(0);
		}
		return a;
	}
	
	
	
	//计算金额字段中值 统计	
	@Override
	public BigDecimal getSumDemandPrice(HFDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("select sum(u.orderpricetol) as tolPrice from h_f_demand  u where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and u.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getSorderName())){
			hql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
		}
		if(!StringUtil.isNull(user.getSorderNo())){
			hql.append(" and u.demandid like '%"+user.getSorderNo()+"%' ");
		}
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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

	
	
	/*
	 * 需求大厅和悬赏大厅查询方法
	 */
	@Override
	public PageResults<Object> getDemandsAll(HFDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		listpar.add(user.getJfuid());
		String hql = " from HFDemand  u where 1=1 and u.jfuid = ? ";
		Integer[] list = user.getStrzt();
		 if(list!=null){
			 hql+=" and u.fdstate in(";
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
	 * 订单查询 1
	 */
	@Override
	public PageResults<Object> getOrderDemands(HFDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" SELECT u.ordername,u.beginage,d.auctionnum,d.orderprice,d.jfuid,d.demandid,d.releasetime,d.jdstate,d.orderid,d.fishnum from h_j_order_demand d ");
		    sql.append(" LEFT JOIN h_f_demand u on d.demandid=u.demandid  where 1=1 ");
		
	    if(!StringUtil.isNull(user.getJfuid())){
		 	sql.append(" and d.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getSorderName())){
			sql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
		}
		if(!StringUtil.isNull(user.getSorderNo())){
			sql.append(" and d.orderid like '%"+user.getSorderNo()+"%' ");
		}
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			sql.append(" and DATE_FORMAT(d.releasetime,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			sql.append(" and DATE_FORMAT(d.releasetime,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
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
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedSql(sql,user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
	
	/*
	 * 查询订单总金额
	 */
	public BigDecimal getSumOrderDemandPrice(HFDemand user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" SELECT sum(d.auctionnum*d.orderprice) orderpricetol from h_j_order_demand d LEFT JOIN h_f_demand u on d.demandid=u.demandid  where 1=1 ");
		
	    if(!StringUtil.isNull(user.getJfuid())){
		 	sql.append(" and d.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getSorderName())){
			sql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
		}
		if(!StringUtil.isNull(user.getSorderNo())){
			sql.append(" and d.demandid like '%"+user.getSorderNo()+"%' ");
		}
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			sql.append(" and DATE_FORMAT(d.releasetime,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			sql.append(" and DATE_FORMAT(d.releasetime,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
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
		
		List a=this.getListBySQL(sql.toString(),listpar);
		
		BigDecimal price=new BigDecimal("0");
		if(a!=null&&a.size()!=0){
			BigDecimal prices=(BigDecimal) a.get(0);
			if(null!=prices){
				price=prices;
			}
		}
		return price;
	}
	
	
	/*
	 * 首页计算代办事宜 1  计算中数目
	 */
	@Override
	public BigInteger getCountOrderDemandByzt(HFDemand user) {
			ArrayList<Object> listpar = new ArrayList<Object>();
			StringBuffer sql = new StringBuffer(" SELECT count(*) from h_j_order_demand d LEFT JOIN h_f_demand u on d.demandid=u.demandid  where 1=1 ");
		 	
		    if(!StringUtil.isNull(user.getJfuid())){
			 	sql.append(" and d.jfuid = ? ");
				listpar.add(user.getJfuid());
			}
			if(!StringUtil.isNull(user.getSorderName())){
				sql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
			}
			if(!StringUtil.isNull(user.getSorderNo())){
				sql.append(" and u.demandid like '%"+user.getSorderNo()+"%' ");
			}
			if(!StringUtil.isNull(user.getSbeginDateValue())){
				sql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')>=? ");
				listpar.add(user.getSbeginDateValue());
			}
			if(!StringUtil.isNull(user.getSendDateValue())){
				sql.append(" and DATE_FORMAT(u.releasetime,'%Y/%m/%d')<=? ");
				listpar.add(user.getSendDateValue());
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
		 BigInteger countDemand =new BigInteger("0");
		 List a=this.getListBySQL(sql.toString(),listpar);
		 if(a!=null&&a.size()!=0){
			 countDemand= (BigInteger) a.get(0);
		 }
		 return countDemand ;
	}
	
	
	
	public List getDemanddynamicsTop6(HFDemand user){
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		StringBuffer hql = new StringBuffer("from HFDemand  u where u.jfuid <>?  and (u.fishnum!=0 and u.fishnum is not null)");
		ArrayList<Object> listpar = new ArrayList<Object>();
		listpar.add(user.getJfuid());
		
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		ts=this.findPageByFetchedHql(hql.toString(), countHql, 1, 6, listpar);
		List<Object> users =ts.getResults();
		if(users!=null&&users.size()!=0){
			return users;
		}else{
			return null;
		}
	}
	
	
	
	public List getDemandAuctionList(HFDemand user){
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" select b.invitationcode,a.auctionnum,a.orderid,a.demandid,a.jfuid,fishnum,fisrate from  h_jf_user as b ");
		
		sql.append(" right JOIN (SELECT sum(auctionnum) as auctionnum,jfuid,orderid,demandid,sum(fishnum) as fishnum,sum(fishnum)/sum(auctionnum) AS fisrate FROM `h_j_order_demand` where 1=1 ");
	 	if(!StringUtil.isNull(user.getDemandid())){
		 	sql.append(" and demandid = ? ");
			listpar.add(user.getDemandid());
		}
	 	Integer[] list = user.getStrzt();
		if(list!=null){
			sql.append(" and jdstate in(");
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
		
		sql.append("  GROUP BY demandid,jfuid ");
		sql.append(" ) as a on a.jfuid=b.jfuid ");
		if("auctionnum".equals(user.getOrderBy())){
			sql.append(" ORDER BY a.auctionnum DESC  ");
		}
		if("fishnum".equals(user.getOrderBy())){
			sql.append(" ORDER BY a.fishnum DESC  ");
		}
		if("fisrate".equals(user.getOrderBy())){
			sql.append(" ORDER BY a.fisrate DESC  ");
		}
		
		//接包方
		if(!"2".equals(user.getJfutype())){
			sql.append(" LIMIT 0,5  ");
		}
		
		List<Object> users =this.getListBySQL(sql.toString(), listpar);
		if(users!=null&&users.size()!=0){
			return users;
		}else{
			return null;
		}
	}
	
	
	
	
	
	public List getConversionRateList(HFDemand user){
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" SELECT b.invitationcode,a.paymentnum,a.orderid,a.demandid,a.jfuid,a.fishnum,a.conversionRate FROM h_jf_user AS b ");
		sql.append(" RIGHT JOIN (SELECT IFNULL(sum(paymentnum),0) paymentnum,jfuid,orderid,demandid,IFNULL(sum(fishnum),0) fishnum,(IFNULL(sum(paymentnum),0)/IFNULL(sum(fishnum),0))*100 as conversionRate FROM `h_j_order_demand` WHERE 1 = 1 ");
//		sql.append(" RIGHT JOIN (SELECT paymentnum,jfuid,orderid,demandid,fishnum,paymentnum/fishnum as conversionRate FROM `h_j_order_demand` WHERE 1 = 1 ");
		
	 	if(!StringUtil.isNull(user.getDemandid())){
		 	sql.append(" and demandid= ? ");
			listpar.add(user.getDemandid());
		}
	 	Integer[] list = user.getStrzt();
		if(list!=null){
			sql.append(" and jdstate in(");
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
		sql.append(" GROUP BY demandid,jfuid ) AS a ON a.jfuid = b.jfuid ");
		sql.append(" ORDER BY a.conversionRate DESC  ");
		List<Object> users =this.getListBySQL(sql.toString(), listpar);
		if(users!=null&&users.size()!=0){
			return users;
		}else{
			return null;
		}
	}
	
	
	
	
	
	@Override
	public PageResults<Object> getDemandHallAll(HFDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		ArrayList<Object> listpar = new ArrayList<Object>();
		
		StringBuffer hql = new StringBuffer(" select u.* from ( ");
		hql.append(" select a.demandid,a.pid,a.jfuid,a.category1,a.category2,a.category3,a.demandtype,a.packageid,  ");
		hql.append(" a.productname,a.ordername,a.orderprice,a.orderpricetol,a.releasenum,a.targethumen,a.endage,a.citydesc,  ");
		hql.append(" a.targecity,a.begintime,a.endtime,a.demand,a.fdstate,a.createtime,a.releasetime,a.applicationnum,a.favorableway,  ");
		hql.append(" a.fishnum,a.demanddescription,a.standardoperation,a.otherreport,a.xsxsurl,a.paymenttime,a.paymentstandard,a.sittingprice,a.pleader,a.pphone,a.beginage,a.updatetime,a.subdescription,a.paymentmoney ");
		hql.append(" ,a.twolevindustry,a.threelevindustry,a.customlabel,a.jbfpricetol,a.jbfprice  ");
		hql.append(" from h_f_demand  a where 1=1 ");
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and a.demandid=? ");
			listpar.add(user.getDemandid());
		}
		
		hql.append(" UNION ALL  ");
		
		hql.append(" select a.pcdid  demandid,a.pid,a.jfuid,a.industry category1,a.cleaningchannel category2,a.servicetype category3,a.demandtype,a.packageid,  ");
		hql.append(" '' productname,a.ordername,a.demandprice orderprice,a.demandpricetol orderpricetol,a.releasenum,'' targethumen,null endage,'' citydesc,  ");
		hql.append(" '' targecity,a.begintime,a.endtime,'' demand,a.fdstate,a.createtime,a.releasetime,a.applicationnum,a.favorableway,  ");
		hql.append(" a.finishnum fishnum,a.demanddescription,a.standardoperation,a.otherreport,a.xsxsurl,a.paymenttime,a.paymentstandard,null sittingprice,a.pleader,a.pphone,null beginage,a.updatetime,'' subdescription,a.paymentmoney  ");
		hql.append(" ,'' twolevindustry, '' threelevindustry,'' customlabel,a.jbfpricetol,a.jbfprice  ");
		hql.append(" from  h_f_datafiltering a where 1=1  ");
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and a.pcdid=? ");
			listpar.add(user.getDemandid());
		}
		
		hql.append(" ) as u  where 1=1  ");
		
		if("2".equals(user.getAuction())){//不可竞拍
			hql.append(" and ((u.releasenum-u.applicationnum)<=0 or (DATE_FORMAT(u.endtime,'%Y/%m/%d')<DATE_FORMAT(SYSDATE(), '%Y/%m/%d') ))  ");
		} 
		if("1".equals(user.getAuction())){//可竞拍
			hql.append(" and  (u.releasenum-u.applicationnum)>0 and DATE_FORMAT(u.endtime,'%Y/%m/%d')>=DATE_FORMAT(SYSDATE(), '%Y/%m/%d') ");
		} 
		if(!StringUtil.isNull(user.getTargecity())){
			hql.append(" and u.targecity like '%"+user.getTargecity()+"%' ");
		}
		if(!StringUtil.isNull(user.getCategory1())){
			
			if("其他".equals(user.getCategory1())){
				hql.append(" and u.category1 not in('教育培训','汽车行业','医美行业','房地产','金融','电商') ");
			}else{
				hql.append(" and u.category1=? ");
				listpar.add(user.getCategory1());
			}
		}
		
		if(!StringUtil.isNull(user.getCategory3())){
			hql.append(" and u.category3=? ");
			listpar.add(user.getCategory3());
		}
		if(!StringUtil.isNull(user.getCategory2())){
			hql.append(" and u.category2 like '%"+user.getCategory2()+"%' ");
		}
		if(!StringUtil.isNull(user.getOrdername())){
			hql.append(" and u.ordername like '%"+user.getOrdername()+"%' ");
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and u.demandid like '%"+user.getDemandid()+"%' ");
		}
		if("1".equals(user.getPricerange())){
			hql.append(" and u.jbfprice<=30 ");
		}
		if("2".equals(user.getPricerange())){
			hql.append(" and u.jbfprice>30 ");
			hql.append(" and u.jbfprice<=60 ");
		}
		if("3".equals(user.getPricerange())){
			hql.append(" and u.jbfprice>60 ");
			hql.append(" and u.jbfprice<=100 ");
		}
		if("4".equals(user.getPricerange())){
			hql.append(" and u.jbfprice>100 ");
		}
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		if(!StringUtil.isNull(user.getOrderBy())){
			if("u.residualQuantity".equals(user.getOrderBy())){
				hql.append(" order by u.releasenum-u.fishnum ");
			}else if("u.releasetime".equals(user.getOrderBy())){
				hql.append(" order by u.releasetime ");
			}else if("u.orderprice".equals(user.getOrderBy())){
				hql.append(" order by u.jbfprice ");
			}else{
				hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,u.releasenum-u.fishnum desc,u.jbfprice desc ");
			}
			
			if("desc".equals(user.getSort())){
				hql.append(" desc ");
			}
			else if("asc".equals(user.getSort())){
				hql.append(" asc ");
			}else{
				hql.append(" desc ");
			}
		}else{
			hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,u.releasenum-u.fishnum desc, u.jbfprice desc ");
		}
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedSql(hql,user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
	
	
	/*
	 * 更具状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 * 加入了分页
	 */
	@Override
	public PageResults<Object> getDemandHall(HFDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from HFDemand  u where 1=1 ");
		
		
		if("2".equals(user.getAuction())){//不可竞拍
			hql.append(" and ((u.releasenum-u.applicationnum)<=0 or (DATE_FORMAT(u.endtime,'%Y/%m/%d')<SYSDATE()))  ");
		} 
		if("1".equals(user.getAuction())){//可竞拍
			hql.append(" and  (u.releasenum-u.applicationnum)>0 and DATE_FORMAT(u.endtime,'%Y/%m/%d')>=SYSDATE() ");
		} 
		
		
		if(!StringUtil.isNull(user.getTargecity())){
			hql.append(" and u.targecity like '%"+user.getTargecity()+"%' ");
		}
		if(!StringUtil.isNull(user.getCategory1())){
			if("其他".equals(user.getCategory1())){
				hql.append(" and u.category1 not in('教育培训','汽车行业','医美行业','房地产','金融','电商') ");
			}else{
				hql.append(" and u.category1=? ");
				listpar.add(user.getCategory1());
			}
		}


		if(!StringUtil.isNull(user.getCategory3())){
			hql.append(" and u.category3=? ");
			listpar.add(user.getCategory3());
		}
		if(!StringUtil.isNull(user.getCategory2())){
			hql.append(" and u.category2 like '%"+user.getCategory2()+"%' ");
		}
		if(!StringUtil.isNull(user.getOrdername())){
			hql.append(" and u.ordername like '%"+user.getOrdername()+"%' ");
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and u.demandid like '%"+user.getDemandid()+"%' ");
		}
		
		
		if("1".equals(user.getPricerange())){
			hql.append(" and u.jbfprice<=30 ");
		}
		if("2".equals(user.getPricerange())){
			hql.append(" and u.jbfprice>30 ");
			hql.append(" and u.jbfprice<=60 ");
		}
		if("3".equals(user.getPricerange())){
			hql.append(" and u.jbfprice>60 ");
			hql.append(" and u.jbfprice<=100 ");
		}
		if("4".equals(user.getPricerange())){
			hql.append(" and u.jbfprice>100 ");
		}
		
		
		
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		 
		if(!StringUtil.isNull(user.getOrderBy())){
			if("u.residualQuantity".equals(user.getOrderBy())){
//				剩余量(residualQuantity)  上架日期 (releasetime)   单价(orderprice)
				hql.append(" order by u.releasenum-u.fishnum ");
			}else if("u.releasetime".equals(user.getOrderBy())){
				hql.append(" order by u.releasetime ");
			}else if("u.orderprice".equals(user.getOrderBy())){
				hql.append(" order by u.jbfprice ");
			}else{
				hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,u.releasenum-u.fishnum desc, u.jbfprice desc ");
			}
			
			if("desc".equals(user.getSort())){
				hql.append(" desc ");
			}
			else if("asc".equals(user.getSort())){
				hql.append(" asc ");
			}else{
				hql.append(" desc ");
			}
		}else{
			hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,u.releasenum-u.fishnum desc, u.jbfprice desc ");
		}
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedHql(hql.toString(), countHql, user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
	
	
	
	@Override
	public List<Object> getCitys(HFDemand user) {
		List<Object>  ts=new ArrayList<Object>();
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from HFDemand  u where 1=1 ");
		
		Integer[] list = user.getStrzt();
		if(list!=null){
			hql.append(" and u.fdstate in(");
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
		 
		ts=this.getListByHQL(hql.toString(), listpar);
		return ts;
	}
}
