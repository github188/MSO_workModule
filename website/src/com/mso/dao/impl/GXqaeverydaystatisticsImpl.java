package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mso.dao.IGXqaeverydaystatisticsDao;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.GXqaeverydaystatistics;
import com.mso.utils.StringUtil;


import BaseDao.BaseDao;

/**
 * 专员录音上传DaoImpl
 * @author harry
 *
 */
@Repository("gxqaeverydaystatisticsDao")
public class GXqaeverydaystatisticsImpl extends BaseDao<Object, Serializable> implements IGXqaeverydaystatisticsDao{
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    /**
     *   查找录音文件
     * @param jfuid 发包方用户ID
     * @param demandid 需求ID
     * @return
     */
	@Override
	public List getGXqaeverydaystatistics(GXqaeverydaystatistics gxqaevery) {
		String hql=" from GXqaeverydaystatistics  where jfuid= ? and demandid= ? and csstatus=1 order by censusday desc";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(gxqaevery.getJfuid());
		list.add(gxqaevery.getDemandid());
		List<Object> listGxgaever = getListByHQL(hql, list);
		if (null==listGxgaever && listGxgaever.isEmpty()){
			    return null;
			}else{
				return listGxgaever;
				}
		}
	/*
	 * 查找录音文件
	 * @param pid
	 * @param demandid
	 * @return 
	 */
	@Override
	public List selectGXqaeveryDaystatisticesly(GXDbaEverydayStatistics user) {
		StringBuffer hql=new StringBuffer(" from GXqaeverydaystatistics where 1=1");
		ArrayList<Object> alist=new ArrayList<Object>();
		if(!StringUtil.isNull(user.getPid())){
			hql.append(" and pid=?");
			alist.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and demandid=?");
			alist.add(user.getDemandid());
		}
		if(!StringUtil.isNull(user.getServicetype())){
			hql.append(" and servicetype=?");
			alist.add(user.getServicetype());
		}
		hql.append(" order by censusday desc");
		List<Object> list=this.getListByHQL(hql.toString(), alist);
		return list;
	}
	
}
