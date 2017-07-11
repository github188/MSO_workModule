package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.HomePageDao;
import com.mso.model.IndustryDynamics;
import com.mso.model.PlatformDynamics;
import com.mso.utils.DateUtil;

/**
 * 官方首页  
 * @author harry
 *
 */
@Repository("homepagedao")
public class HomePageDaoImpl extends BaseDao<Object, Serializable>  implements HomePageDao{
 
	@Override
	public List<Object> getNotice() {
		StringBuilder sql=new StringBuilder(" select u.jfuid,u.jfuname,a.demandid,a.ordername,a.releasetime,a.servicetype,a.demandpricetol,ud.realname from ");
	    sql.append(" ( ");
		sql.append(" SELECT h.pcdid demandid,h.jfuid,h.ordername,h.releasetime,h.servicetype,h.demandpricetol FROM h_f_datafiltering h WHERE h.fdstate=2   ");
		sql.append(" UNION ALL  ");
		sql.append(" SELECT f.demandid,f.jfuid,f.ordername,f.releasetime,f.category3,f.orderpricetol FROM h_f_demand f WHERE f.fdstate=2  ");
		sql.append(" ) as a LEFT JOIN h_jf_user u on a.jfuid=u.jfuid LEFT JOIN h_f_user_detail ud on a.jfuid=ud.jfuid   ORDER BY a.releasetime desc limit 0,5 ");
		List<Object> list=this.getListBySQL(sql.toString(), null);
		return list;
	}
	@Override
	public List<Object> getHotDemand() {

		StringBuilder sql=new StringBuilder(" select u.demandid,u.jfuid,u.category1,u.category2,u.category3,u.demandtype, ");
		sql.append(" u.productname,u.ordername,u.releasenum,u.citydesc, ");
		sql.append(" u.targecity,u.begintime,u.endtime,u.demand,u.fdstate,u.applicationnum,u.favorableway,u.releasetime, ");
		sql.append(" u.fishnum,u.demanddescription,u.syl ");
		sql.append(" from (   ");
		sql.append(" select a.demandid,a.jfuid,a.category1,a.category2,a.category3,a.demandtype, ");
		sql.append(" a.productname,a.ordername,a.releasenum,a.citydesc, ");
		sql.append(" a.targecity,a.begintime,a.endtime,a.demand,a.fdstate,a.applicationnum,a.favorableway,releasetime, ");
		sql.append(" a.fishnum,a.demanddescription,a.releasenum-a.applicationnum syl");
		sql.append(" from h_f_demand  a where 1=1   and  a.fdstate in (2,4) ");
		sql.append(" UNION ALL   ");
		sql.append(" select a.pcdid demandid,a.jfuid,a.industry category1,a.cleaningchannel category2,a.servicetype category3,a.demandtype, ");
		sql.append(" '' productname,a.ordername,a.releasenum,'' citydesc,'' "); 
		sql.append(" targecity, a.begintime,a.endtime,'' demand,a.fdstate,a.applicationnum,a.favorableway,a.releasetime, ");
		sql.append(" a.finishnum fishnum,a.demanddescription,a.releasenum-a.applicationnum  syl ");
		sql.append(" from  h_f_datafiltering a where 1=1   and  a.fdstate in (2,4) ");
		sql.append(" ) as u LEFT JOIN h_jf_user a on a.jfuid=u.jfuid where 1=1  ");
		sql.append(" and u.syl>500 ORDER BY u.releasetime desc limit 0,4 ");
		
		List<Object> list=this.getListBySQL(sql.toString(), null);
		return list;
	}

	
	/**
	 * 本年度需求发布量
	 */
	public List<Object> getStatistical(){
		String currYear=DateUtil.getCurrYear();//取得当前年
		ArrayList<Object> par=new ArrayList<Object>();
		StringBuilder sql=new StringBuilder(" select DATE_FORMAT(u.releasetime,'%Y') yy,u.releasetimeYm,sum(u.releasenum) from ( ");
		sql.append(" select a.demandid,a.releasenum,a.releasetime,DATE_FORMAT(a.releasetime,'%m') releasetimeYm,a.jfuid ");
		sql.append(" from h_f_demand  a where 1=1 and  a.fdstate in (2,4,5,6,7) ");
		sql.append(" UNION ALL ");
		sql.append(" select a.pcdid demandid,a.releasenum,a.releasetime,DATE_FORMAT(a.releasetime,'%m') releasetimeYm,a.jfuid  ");
		sql.append(" from h_f_datafiltering a where 1=1 and  a.fdstate in (2,4,5,6,7) ");
		sql.append(" ) as u where 1=1 and  u.releasetime is not null  ");
		sql.append("  and DATE_FORMAT(u.releasetime,'%Y')=?  ");
		par.add(currYear);
		sql.append(" GROUP BY DATE_FORMAT(u.releasetime,'%Y-%m') ");
		List<Object> list=this.getListBySQL(sql.toString(),par);
		return list;
	}
	
	
	@Override
	public List<Object> getIndustryDynamics(IndustryDynamics user) {
		StringBuffer hql=new StringBuffer(" from IndustryDynamics where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(null!=user.getIndyid()){
			hql.append(" and indyid=? ");
			list.add(user.getIndyid());
		}
		if(null!=user.getUserid()){
			hql.append(" and userid !=?");
			list.add(user.getUserid());
		}
		hql.append(" Order by industrytime desc");
		List<Object> userlist=this.getListByHQL(hql.toString(), list);
		return userlist;
	}

	@Override
	public List<Object> getplatform_dynamics(PlatformDynamics user) {
		StringBuffer hql=new StringBuffer(" from PlatformDynamics where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(null!=user.getPlatformid()){
			hql.append(" and platformid=?");
			list.add(user.getPlatformid());
		}
		if(null!=user.getUserid()){
			hql.append(" and userid=?");
			list.add(user.getUserid());
		}
		hql.append(" order by createtime desc");
		List<Object> userlist=this.getListByHQL(hql.toString(), list);
 		return userlist;
	}
  
}
