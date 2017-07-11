package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IHFdemandDao;
import com.mso.model.HFDemand;
import com.mso.utils.PageResults;
@Repository("hfdemanddao")
public class HFdemandDaoImpl extends BaseDao<Object, Serializable> implements IHFdemandDao{
	/*
     * 查询目标人群（发布需求-潜在客户中-套餐中的）
     * pid 需求包ID
     */
	@Override
	public PageResults<Object> getHFdemandpid(HFDemand user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		StringBuffer  hql=new StringBuffer(" from HFDemand where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(null!=user.getPid()){
			hql.append(" and pid=? ");
			list.add(user.getPid());
		}
		if(null!=user.getDemandtype()){
			hql.append(" and demandtype=? ");
			list.add(user.getDemandtype());
		}
		hql.append(" order by DATE_FORMAT(releasetime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(createtime,'%Y%m%d%H%i%s') desc");
		int pageSize=6;
		return this.findPageByFetchedHql(hql.toString(), countHql,1, pageSize, list);
	}

}
