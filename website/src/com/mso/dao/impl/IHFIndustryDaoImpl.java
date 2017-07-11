package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IHFIndustryDao;
import com.mso.model.HFIndustry;
import com.mso.utils.StringUtil;
/**
 * 行业操作Impl
 */
@Repository("industryDao")
public class IHFIndustryDaoImpl extends BaseDao<Object, Serializable> implements IHFIndustryDao{

	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List getHFIndustry(HFIndustry cuar) {
		StringBuffer hql=new StringBuffer(" from HFIndustry where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(!StringUtil.isNull(cuar.getFiid())){
			hql.append(" and fiid=? ");
			list.add(cuar.getFiid());
		}
		if(!StringUtil.isNull(cuar.getFiname())){
			hql.append(" and finame=?");
			list.add(cuar.getFiname());
		}
		if(!StringUtil.isNull(cuar.getSeqno())){
			hql.append(" and seqno=?");
			list.add(cuar.getSeqno());
		}
		if(null!=cuar.getLevel()){
			hql.append(" and level=?");
			list.add(cuar.getLevel());
		}
		if(null!=cuar.getParentfiid()){
			hql.append(" and parentfiid=?");
			list.add(cuar.getParentfiid());
		}
		List<Object> calist=this.getListByHQL(hql.toString(), list);
		return calist;
	}

	@Override
	public void addHFIndustry(HFIndustry cuar) {
		this.save(cuar);
	}

	@Override
	public void deleteHFIndustry(HFIndustry cuar) {
		this.delete(cuar);	
	}

	@Override
	public void updateHFIndustry(HFIndustry cuar) {
		this.update(cuar);
	}
}
