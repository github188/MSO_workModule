package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IPackageManageDao;
import com.mso.model.GXPackageManage;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 */
@Repository("packageManageDao")
public class PackageManageDaoImpl extends BaseDao<Object, Serializable> implements IPackageManageDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

	@Override
	public PageResults<Object> getPackageManageBy(GXPackageManage user){
		PageResults<Object>  ts=new PageResults<Object>();
		ArrayList<Object> list = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from GXPackageManage u where 1=1  ");
		if(null!=user.getIsdisable()){
			hql.append(" and u.isdisable=? ");
			list.add(user.getIsdisable());
		}
		if(!StringUtil.isNull(user.getCategory1())){
			hql.append(" and u.category1=? ");
			list.add(user.getCategory1());
		}
		List<Object> users =this.getListByHQL(hql.toString(), list);
		ts.setResults(users);
		return ts;
	}
}
