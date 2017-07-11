package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IDatafilteringDao;
import com.mso.model.HFDatafiltering;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 */
@Repository("datafilteringDao")
public class DatafilteringDaoImpl extends BaseDao<Object, Serializable> implements IDatafilteringDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    
	@Override
	public void addDatafiltering(HFDatafiltering user) {
		this.save(user);
	}
	@Override
	public void deleteDatafiltering(HFDatafiltering user) {
		this.delete(user);
	}
	@Override
	public void updateDatafiltering(HFDatafiltering user) {
		this.update(user);
		
	}
	@Override
	public PageResults<Object> getDatafilterings(HFDatafiltering user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from HFDatafiltering  u where 1=1 ");
		if("2".equals(user.getAuction())){//不可竞拍
			hql.append(" and ((u.releasenum-u.applicationnum)<=0 or (DATE_FORMAT(u.endtime,'%Y/%m/%d')<SYSDATE()))  ");
		} 
		if("1".equals(user.getAuction())){//可竞拍
			hql.append(" and  (u.releasenum-u.applicationnum)>0 and DATE_FORMAT(u.endtime,'%Y/%m/%d')>=SYSDATE() ");
		} 
//		if(!StringUtil.isNull(user.getTargecity())){
//			hql.append(" and u.targecity like '%"+user.getTargecity()+"%' ");
//		}
		if(!StringUtil.isNull(user.getIndustry())){//行业
			hql.append(" and u.industry=? ");
			listpar.add(user.getIndustry());
		}
		if(!StringUtil.isNull(user.getServicetype())){//业务类型
			hql.append(" and u.servicetype=? ");
			listpar.add(user.getServicetype());
		}
		if(!StringUtil.isNull(user.getCategory1())){
			if("其他".equals(user.getCategory1())){
				hql.append(" and u.servicetype not in('教育培训','汽车行业','医美行业','房地产','金融','电商') ");
			}else{
				hql.append(" and u.servicetype=? ");
				listpar.add(user.getServicetype());
			}
		}
		//疑问  ?
		if(!StringUtil.isNull(user.getCleaningchannel())){//获客渠道
			hql.append(" and u.cleaningchannel like '%"+user.getCleaningchannel()+"%' ");
		}
		if(!StringUtil.isNull(user.getOrdername())){
			hql.append(" and u.ordername like '%"+user.getOrdername()+"%' ");
		}
		if(!StringUtil.isNull(user.getPcdid())){
			hql.append(" and u.demandid like '%"+user.getPcdid()+"%' ");
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
//				剩余量(residualQuantity)  上架日期 (releasetime)   单价(demandprice)
				hql.append(" order by u.releasenum-u.finishnum ");
			}else if("u.releasetime".equals(user.getOrderBy())){
				hql.append(" order by u.releasetime ");
			}else if("u.orderprice".equals(user.getOrderBy())){
				hql.append(" order by u.jbfprice ");
			}else{
				hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,u.releasenum-u.finishnum desc, u.jbfprice desc ");
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
			hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,u.releasenum-u.finishnum desc, u.demandprice desc ");
		}
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedHql(hql.toString(), countHql, user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
	@Override
	public HFDatafiltering getDatafilteringById(HFDatafiltering user) {
		String hql = " from HFDatafiltering  u where u.pcdid = ?  and u.jfuid=?";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getPcdid());
		list.add(user.getJfuid());
		List<Object> users =this.getListByHQL(hql, list);
		if(users!=null&&users.size()!=0){
			return (HFDatafiltering)users.get(0);
		}
		return null;
	}
	@Override
	public List<Object> getDatafilteringByPid(HFDatafiltering user) {
		String hql = " from HFDatafiltering  u where 1=1  ";
		ArrayList<Object> listpar = new ArrayList<Object>();
		if(!StringUtil.isNull(user.getPid())){//业务类型
			hql+=" and u.pid = ?  ";
			listpar.add(user.getPid());
		}
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
		List<Object> users =this.getListByHQL(hql, listpar);
		if(users!=null&&users.size()!=0){
			return users;
		}
		return null;
	}
}
