package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IUserDao;
import com.mso.model.JfUser;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 * @author GJ
 * @date   2015年4月15日
 */
@Repository("userDao")
public class UserDaoImpl extends BaseDao<Object, Serializable> implements IUserDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

	@Override
	public JfUser addUser(JfUser user) {
		this.save(user);
		return user;
	}

	
	/*
	 * 修改密码/状态  修改方法
	 */
	public void updatePro(JfUser user){
		this.update(user);
	}
	
	@Override
	public JfUser getUserByLogin(JfUser user) {
		String hql = "from JfUser u where u.jfunamelowercase = ?";
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
   	 	query.setParameter(0, user.getJfunamelowercase());
        List<JfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	
	@Override
	public JfUser getUserByInvitationcode(JfUser user) {
		String hql = "from JfUser u where u.invitationcode = ? "; //and u.invitationcode = ?
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
 	 	query.setParameter(0, user.getInvitationcode());
        List<JfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	@Override
	public JfUser getUserByUserName(JfUser user) {
		String hql = "from JfUser u where u.jfuname = ? "; //and u.jfuname = ?
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
 	 	query.setParameter(0, user.getJfuname());
        List<JfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	
	@Override
	public JfUser getUserByUnamelowercase(JfUser user) {
		String hql = "from JfUser u where u.jfunamelowercase = ? "; //and u.jfuname = ?
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
 	 	query.setParameter(0, user.getJfunamelowercase());
        List<JfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	@Override
	public JfUser getUserByTelPhone(JfUser user) {
		String hql = "from JfUser u where u.jfumobilephone = ? ";//and u.jfutype = ?
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
	 	query.setParameter(0, user.getJfumobilephone());
        List<JfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	
	@Override
	public JfUser getUserByUP(JfUser user) {
		String hql = "from JfUser u where u.jfuname = ? and u.jfupassword = ? ";
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
	 	query.setParameter(0, user.getJfuname());
 	 	query.setParameter(1, user.getJfupassword());
        List<JfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}

	
	
	@Override
	public JfUser getUserByFuid(String  jfuid,String jfutype) {
		StringBuffer hql =new  StringBuffer(" from JfUser u where u.jfuid = ?  ");
		if(!StringUtil.isNull(jfutype)){
			hql.append(" and u.jfutype = ? ");
		}
        Query query = sessionFactory.getCurrentSession().createQuery(hql.toString());
    	query.setParameter(0, jfuid);
    	if(!StringUtil.isNull(jfutype)){
			query.setParameter(1,jfutype);
		}
        List<JfUser> users = query.list();
		if (users!= null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	
	
	@Override
	public  List<JfUser> getInvitationcodeIsnullUser() {
		String hql = "from JfUser u where u.invitationcode is null ";
        Query query = sessionFactory.getCurrentSession().createQuery(hql);
        List<JfUser> users = query.list();
		return users;
	}
	
	
	@Override
	public PageResults<Object> getUsers(JfUser user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from JfUser  u where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			hql.append(" and u.pid = ? ");
			listpar.add(user.getPid());
		}
		hql.append(" order by  DATE_FORMAT(u.createtime,'%Y/%m/%d') desc ");
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedHql(hql.toString(), countHql, user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
	
	/*入驻企业 */
	@Override
	public Long getSettledEnterprise(JfUser user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" SELECT count(*) from JfUser  where  1=1  ");
		if(null!=user.getJfustate()){
			hql.append(" and jfustate = ? ");
			listpar.add(user.getJfustate());
		}
		Long countDemand =this.countByHql(hql.toString(), listpar);
		return countDemand;
	}
	@Override
	public void addUserNew(JfUser user) {
		StringBuffer sql = new StringBuffer("insert into fbf_comp_detail (id,compname,createtime) values (?,?,?)");
		Query query = sessionFactory.getCurrentSession().createSQLQuery(sql.toString());
		query.setParameter(0,user.getJfuid());
		query.setParameter(1,user.getCompname());
		query.setParameter(2,user.getCreatetime());
		query.executeUpdate();
		StringBuffer sql1 = new StringBuffer("insert into fbf_basic_detail (id,name,createtime) values (?,?,?)");
		Query query1 = sessionFactory.getCurrentSession().createSQLQuery(sql1.toString());
		query1.setParameter(0,user.getJfuid());
		query1.setParameter(1,user.getRealname());
		query1.setParameter(2,user.getCreatetime());
		query1.executeUpdate();
	}
}
