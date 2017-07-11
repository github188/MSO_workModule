package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.BaseRegionDao;
import com.mso.model.BaseRegion;

/**
 * 地址  (国家大范围的省，市....)Imply
 * @author harry
 *2016-09-11
 */
@Repository("baseReqiondao")
public class BaseRegionDaoImpl extends BaseDao<Object, Serializable> implements BaseRegionDao{
	
	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
  
	@Override
	public List<Object> getBaseRegion(BaseRegion base) {
		StringBuffer hql = new StringBuffer(" from BaseRegion where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(null!=base.getCityrank()){
			hql.append(" and cityrank=?");
			list.add(base.getCityrank());
		}
		if(null!=base.getRegionId()){
			 hql.append(" AND regionId=?");
		    list.add(base.getRegionId());
		}
		if(null!=base.getRegionType()){
			 hql.append(" and regionType=?");
		     list.add(base.getRegionType());
		}
		if(null!=base.getFirstWord()){
			ArrayList<String>  listp=(ArrayList<String>) base.getRegionTypeFristWord();
			if(list!=null){
				hql.append(" and firstWord in(");
				 for(int i = 0; i < listp.size(); i++) {
					 list.add(listp.get(i));
					 //最后一个
					 if(i==listp.size()-1){
						 hql.append("?)");
					 }else
					 {
						 hql.append("?,");
					 }
		         }
			 }
		}
		hql.append(" order by regionId");
		List<Object> users =this.getListByHQL(hql.toString(), list);
		return users;
	}
	
	

	@Override
	public void updBaseRegion(BaseRegion basreq) {
			this.update(basreq);	
	}

	@Override
	public void updBaseRegion2(BaseRegion basreq) {
		StringBuffer hql=new StringBuffer("update BaseRegion set cityrank=1 where regionName=? and regionType=2");
		Query query=sessionFactory.getCurrentSession().createQuery(hql.toString());
		query.setParameter(0, basreq.getRegionName());
		query.executeUpdate();

	}
	


}
