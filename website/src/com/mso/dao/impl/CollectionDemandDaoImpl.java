package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.ICollectionDemandDao;
import com.mso.model.HFDemand;
import com.mso.model.HJCollectionDemand;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 */
@Repository("collectionDemandDao")
public class CollectionDemandDaoImpl extends BaseDao<Object, Serializable> implements ICollectionDemandDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

	@Override
	public void addCollectionDemand(HJCollectionDemand user){
		this.save(user);
	}
	
	@Override
	public HJCollectionDemand getCollectionDemandBy(HJCollectionDemand user){
		String hql = " from HJCollectionDemand  u where u.jfuid = ? and demandid =? ";
//		String[] list = new String[]{user.getJfuid(),user.getDemandid()};
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getJfuid());
		list.add(user.getDemandid());
		List<Object> users =this.getListByHQL(hql, list);
		HJCollectionDemand demand=null;
		if(users!=null&&users.size()!=0){
			demand=(HJCollectionDemand)users.get(0);
		}
		return demand;
	}
	
	
	
	
	@Override
	public PageResults<Object> getCollections(HFDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" SELECT u.ordername,u.beginage,u.releasenum,u.orderprice,u.jfuid,u.demandid,u.releasetime,u.fdstate,d.collectionid,d.createtime from h_j_collection_demand d ");
		             sql.append(" inner JOIN h_f_demand u on d.demandid=u.demandid  where 1=1 ");
		             
	    if(!StringUtil.isNull(user.getJfuid())){
		 	sql.append(" and d.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
//		if(!StringUtil.isNull(user.getSorderName())){
//			sql.append(" and u.ordername like '%"+user.getSorderName()+"%' ");
//		}
//		if(!StringUtil.isNull(user.getSorderNo())){
//			sql.append(" and d.orderid like '%"+user.getSorderNo()+"%' ");
//		}
//		Integer[] list = user.getStrzt();
//		if(list!=null){
//			sql.append(" and d.jdstate in(");
//			 for(int i = 0; i < list.length; i++) {
//				 listpar.add(list[i]);
//				 if(i==list.length-1){
//					 sql.append("?)");
//				 }else
//				 {
//					 sql.append("?,");
//				 }
//	         }
//		 }
		             
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedSql(sql,user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
}
