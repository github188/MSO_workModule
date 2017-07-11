package com.mso.dao.impl;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IDbaEverydayStatisticsDao;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;

/**
 * 用户DAO实现类
 */
@Repository("dbaEverydayStatisticsDao")
public class IDbaEverydayStatisticsDaoImpl extends BaseDao<Object, Serializable> implements IDbaEverydayStatisticsDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

	@Override
	public PageResults<Object> getEverydayStatistics(GXDbaEverydayStatistics user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("  from GXDbaEverydayStatistics t where 1=1");
		if(null!=user.getCsstatus()){
			hql.append(" and t.csstatus=? ");
			listpar.add(user.getCsstatus());
		}
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and t.jfuid=? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and t.demandid=? ");
			listpar.add(user.getDemandid());
		}
		if(null!=user.getIsdisable()){//1 删除  0 是有效
			hql.append(" and t.isdisable=? ");
			listpar.add(user.getIsdisable());
		}
		if(!StringUtil.isNull(user.getSorderName())){
			hql.append(" and t.ordername like '%"+user.getSorderName()+"%' ");
		}
	 
		//统计时间查询
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			hql.append(" and DATE_FORMAT(t.censusday,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			hql.append(" and DATE_FORMAT(t.censusday,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
		}

		hql.append(" order by t.censusday asc ");
		int pageSize= ts.getPageSize();
		if("nopage".equals(user.getAction())){
			ts=this.findPageByFetchedHql(hql.toString(),countHql,1,9999,listpar);
		}else{
			ts=this.findPageByFetchedHql(hql.toString(),countHql,user.getCurrentPage(),pageSize,listpar);
		}
		return ts;
	}
	
	
	
	
	@Override
	public GXDbaEverydayStatistics getEverydayStatisticsSum(GXDbaEverydayStatistics user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
								StringBuffer hql = new StringBuffer(" SELECT sum(releasenum)as fbl,sum(qa_notstandard+qa_qualified)as cgl,  ");
								hql.append(" sum(qa_cancel+qa_disqualification)as sbl,sum(dba_receive)as jsl ");
		                        hql.append(" from gx_dba_everyday_statistics t where 1=1 ");
		                        if(null!=user.getCsstatus()){
		                			hql.append(" and t.csstatus=? ");
		                			listpar.add(user.getCsstatus());
		                		}
		                 		if(!StringUtil.isNull(user.getJfuid())){
		                 			hql.append(" and t.jfuid=? ");
		                 			listpar.add(user.getJfuid());
		                 		}
		                 		if(!StringUtil.isNull(user.getDemandid())){
		                 			hql.append(" and t.demandid=? ");
		                 			listpar.add(user.getDemandid());
		                 		}
		                 		if(null!=user.getIsdisable()){//1 删除  0 是有效
		                 			hql.append(" and t.isdisable=? ");
		                 			listpar.add(user.getIsdisable());
		                 		}
		                 		if(!StringUtil.isNull(user.getSorderName())){
		                 			hql.append(" and t.ordername like '%"+user.getSorderName()+"%' ");
		                 		}
//		                 		统计时间查询
		                 		if(!StringUtil.isNull(user.getSbeginDateValue())){
		                 			hql.append(" and DATE_FORMAT(t.censusday,'%Y/%m/%d')>=? ");
		                 			listpar.add(user.getSbeginDateValue());
		                 		}
		                 		if(!StringUtil.isNull(user.getSendDateValue())){
		                 			hql.append(" and DATE_FORMAT(t.censusday,'%Y/%m/%d')<=? ");
		                 			listpar.add(user.getSendDateValue());
		                 		}
		                 		hql.append(" order by t.censusday asc ");
								 List list=this.getListBySQL(hql.toString(),listpar);
								 GXDbaEverydayStatistics d=new GXDbaEverydayStatistics();
								 if(list!=null&&list.size()!=0){
								 	Object[] a= (Object[]) list.get(0);
							       	Integer fblTol=StringUtil.toInteger(StringUtil.objCovStr(a[0]));
							       	Integer cglTol=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
							       	Integer sblTol=StringUtil.toInteger(StringUtil.objCovStr(a[2]));
							       	Integer jslTol=StringUtil.toInteger(StringUtil.objCovStr(a[3]));
							       	d.setFblTol(fblTol);
							   		d.setCglTol(cglTol);
							   		d.setSblTol(sblTol);
							   		d.setJslTol(jslTol);
								 }
								 return d;
	}
	/**
	 * 递交量统计(总量)
	 * @param gxdbevery
	 * @return
	 */
	@Override
	public Long getreleasenum(GXDbaEverydayStatistics gxdbevery) {
		String sql="select sum(releasenum) from gx_dba_everyday_statistics  where  jfuid=? and demandid=? and csstatus=? ";
		BigDecimal sun= (BigDecimal) getBySQL(sql, new Object[]{gxdbevery.getJfuid(),gxdbevery.getDemandid(),gxdbevery.getCsstatus()});
		if(null==sun){
			sun=new BigDecimal("0");
		}
		Long sum=sun.longValue();
		if(sum>0){
			  return sum;
		}else{
			  return  0L;
		}
		
	}
		
}

