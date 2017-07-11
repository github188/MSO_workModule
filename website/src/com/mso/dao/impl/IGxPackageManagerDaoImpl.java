package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mso.dao.IGxPackageManageDao;
import com.mso.model.GXPackageManage;

import BaseDao.BaseDao;
@Repository("icxpackagemanagedao")
public class IGxPackageManagerDaoImpl extends BaseDao<Object, Serializable> implements IGxPackageManageDao{
    
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
	@Override
	public List<Object> getGxPackageManage(GXPackageManage gxpm) {
		StringBuffer hql=new StringBuffer(" from GXPackageManage where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(null!=gxpm.getPid()){
			hql.append(" and pid=? ");
			list.add(gxpm.getPid());
		}
		if(null!=gxpm.getCategory1()){
			hql.append(" and category1=? ");
			list.add(gxpm.getCategory1());
		}
		if(null!=gxpm.getIsdisable()){
			hql.append(" and isdisable=?");
			list.add(gxpm.getIsdisable());
		}
		if(null!=gxpm.getServicetype()){
			hql.append(" and servicetype=?");
			list.add(gxpm.getServicetype());
		}
		    hql.append(" order by pid ");
		List<Object>  listuser=this.getListByHQL(hql.toString(), list);
		return listuser;
	}
	
	
	public GXPackageManage getGxPackageManagePid(GXPackageManage gxpm){
		 StringBuffer hql=new StringBuffer(" from GXPackageManage where 1=1");
		 Object pid="";
		 if(null!=gxpm.getPid()){
			 hql.append(" and pid=?");
			 pid=gxpm.getPid();
		 }
		 GXPackageManage gxpackageManage=(GXPackageManage) this.getByHQL(hql.toString(),pid);
		 return gxpackageManage;
	}

}
