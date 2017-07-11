package com.mso.dao.impl;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mso.dao.IHFpDao;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.Hfp;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;

import BaseDao.BaseDao;



/**
 * 用户DAO实现类
 */
@Repository("hfpDao")
public class HFpDaoImpl extends BaseDao<Object, Serializable> implements IHFpDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    
    /*
     * 添加需求
     */
	@Override
	public Hfp addHfp(Hfp user){
		this.save(user);
		return user;
	}
	/*
	 * 删除草稿箱需求
	 */
	@Override
	public void deleteHfp(Hfp user){
		this.delete(user);
	}
	/*
	 * 修改草稿箱需求
	 */
	@Override
	public void updateHfp(Hfp user){
	    this.update(user);
	}
	/*
	 * 获得单个需求
	 */
	public Hfp getHfpById(Hfp user){
		String hql = " from Hfp  u where u.pid = ?";
		ArrayList<Object> list = new ArrayList<Object>();
		list.add(user.getPid());
		List<Object> users =this.getListByHQL(hql, list);
		if(users!=null&&users.size()!=0){
			return (Hfp)users.get(0);
		}
		return null;
	}
	/*
	 * 更具状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 * 加入了分页
	 */
	@Override
	public PageResults<Object> getHfps(Hfp user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from Hfp u where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and u.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getDemandname())){
			hql.append(" and u.demandname like '%"+user.getDemandname()+"%' ");
		}
		if(!"6".equals(user.getPar())){// 6-异常
			if(null!=user.getPause()){
				hql.append(" and u.pause = ? ");
				listpar.add(user.getPause());
			}
		}
		if(!StringUtil.isNull(user.getBeginreleasetime())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y-%m-%d')>=? ");
			listpar.add(user.getBeginreleasetime());
		}
		if(!StringUtil.isNull(user.getEndreleasetime())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y-%m-%d')<=? ");
			listpar.add(user.getEndreleasetime());
		}
		
		if(!StringUtil.isNull(user.getBegincreatetime())){
			hql.append(" and DATE_FORMAT(u.createtime,'%Y-%m-%d')>=? ");
			listpar.add(user.getBegincreatetime());
		}
		if(!StringUtil.isNull(user.getEndcreatetime())){
			hql.append(" and DATE_FORMAT(u.createtime,'%Y-%m-%d')<=? ");
			listpar.add(user.getEndcreatetime());
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
		if("6".equals(user.getPar())){// 6-异常
			
			if(!StringUtil.isNull(user.getJfuid())){
				hql.append(" or ( u.jfuid = ? ");
				listpar.add(user.getJfuid());
			}
			hql.append(" and u.pause = ? ) ");
			listpar.add(user.getPause());
		}
		hql.append(" order by DATE_FORMAT(u.createtime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc ");
		int pageSize= ts.getPageSize();
		if("7".equals(user.getPar())){// 7-草稿箱
			pageSize=999;
		}
		ts=this.findPageByFetchedHql(hql.toString(), countHql,user.getCurrentPage(), pageSize, listpar);
		
		return ts;
	}
	
	
	
	/*
	 * 更具状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 * 无分页
	 */
	@Override
	public List<Object> getHfpsNoPage(Hfp user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from Hfp u where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			hql.append(" and u.pid = ? ");
			listpar.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and u.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
		if(!StringUtil.isNull(user.getDemandname())){
			hql.append(" and u.demandname like '%"+user.getDemandname()+"%' ");
		}
		if(!"6".equals(user.getPar())){// 6-异常
			if(null!=user.getPause()){
				hql.append(" and u.pause = ? ");
				listpar.add(user.getPause());
			}
		}
		if(!StringUtil.isNull(user.getBeginreleasetime())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y-%m-%d')>=? ");
			listpar.add(user.getBeginreleasetime());
		}
		if(!StringUtil.isNull(user.getEndreleasetime())){
			hql.append(" and DATE_FORMAT(u.releasetime,'%Y-%m-%d')<=? ");
			listpar.add(user.getEndreleasetime());
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
		if("6".equals(user.getPar())){// 6-异常
			if(!StringUtil.isNull(user.getJfuid())){
				hql.append(" or ( u.jfuid = ? ");
				listpar.add(user.getJfuid());
			}
			hql.append(" and u.pause = ? ) ");
			listpar.add(user.getPause());
		}
		hql.append(" order by DATE_FORMAT(u.createtime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc ");
		List a=this.getListByHQL(hql.toString(), listpar);
		return a;
	}
	
	
	/*
	 * 查询 需求包
	 * 
	 */
	public PageResults<Object>  getHfp(Hfp user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		StringBuffer hql = new StringBuffer(" from Hfp  u where 1=1");
		ArrayList<Object> listpar = new ArrayList<Object>();
		if(null!=user.getJfuid()){
			hql.append(" and u.jfuid=?");
			listpar.add(user.getJfuid());
			
		}
		if(!StringUtil.isNull(user.getServicetype())){
			hql.append(" and u.servicetype=?");
			listpar.add(user.getServicetype());
		}
		if(null!=user.getDemandtype()){
			hql.append(" and u.demandtype=?");
			listpar.add(user.getDemandtype());
		}
		hql.append(" order by DATE_FORMAT(u.releasetime,'%Y%m%d%H%i%s') desc,DATE_FORMAT(u.createtime,'%Y%m%d%H%i%s') desc ");
		int pageSize= 6; 
		ts=ts=this.findPageByFetchedHql(hql.toString(), countHql,1, pageSize, listpar);
		if(ts!=null){
			return ts;
		}
		return null;
	}
	
	/*客户销售额 */
	@Override
	public BigDecimal getCustomerSales(Hfp user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" SELECT sum(paymentmoney) from  h_f_p  where 1=1  ");
		if(null!=user.getReleasetime()){
			hql.append(" and DATE_FORMAT(releasetime,'%Y')= ? ");
			listpar.add(user.getReleasetime());
		}
		List a=this.getListBySQL(hql.toString(),listpar);
		BigDecimal paymentmoneyTol=new BigDecimal("0");
		if(a!=null&&a.size()!=0){
			BigDecimal prices=(BigDecimal) a.get(0);
			if(null!=prices){
				paymentmoneyTol=prices;
			}
		}
		return paymentmoneyTol;
	}
	@Override
	public void insert_h_f_p_industry_new(String pid, String nfiid) {
		Query query = this.getSession().createSQLQuery("insert into h_f_p_industry_new values (?,?)");
		query.setString(0, pid);
		query.setString(1, nfiid);
		query.executeUpdate();
	}
	@Override
	public Map getNewIndustryId(String pid) {
		String sql = "select t.pid,hn.finame,hn.price,hn.nfiid from h_f_p_industry_new t left join h_f_industry_new hn on t.nfiid = hn.nfiid where t.pid LIKE ?";
		Query query = this.getSession().createSQLQuery(sql).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
		query.setString(0, pid);
//		Map map = (Map) query.uniqueResult();
//		System.out.println("+++++");
//		System.out.println(map);
		return (Map)query.uniqueResult();
	}
	@Override
	public Integer getHfpCount(GXDbaEverydayStatistics user) {
		String sql = "SELECT ifnull(count(pid),0) as count FROM mso_server.h_f_p where  jfuid = ?";
		Query query = this.getSession().createSQLQuery(sql).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
		query.setString(0, user.getJfuid());
		Map map = (Map)query.uniqueResult();
		//System.out.println(map);
		return StringUtil.toInteger(map.get("count"));
	}
	
}
