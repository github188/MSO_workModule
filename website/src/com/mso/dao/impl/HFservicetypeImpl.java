package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



import com.mso.dao.HFservicetypeDao;
import com.mso.model.HFservicetype;
import com.mso.model.HJUserDetail;

import BaseDao.BaseDao;

/**
 * 业务类型Impl,实现业务类型Dao
 * @author harry
 *
 */
@Repository("hfservicetypedao")
public class HFservicetypeImpl extends BaseDao<Object, Serializable> implements HFservicetypeDao{
	@Autowired
	private SessionFactory sessionFactory;
    
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List getHfservicesTypeOpen(HFservicetype user) {
		String sql="select * from h_f_service_type where display=? order by sort asc";
        ArrayList<Object>  list=new ArrayList<Object>();
        list.add(user.getDisplay());
        List<Object> hflist=getListBySQL(sql, list);
        if(null!=hflist){
        	return hflist;
        }else{
        	return null;
        }
        
	}

}
