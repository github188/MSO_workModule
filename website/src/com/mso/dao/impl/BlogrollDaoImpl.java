/**
 * 
 */
package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.BlogrollDao;
import com.mso.model.Blogroll;
import com.mso.utils.StringUtil;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
@Repository("blogrollDao")    
public class BlogrollDaoImpl extends BaseDao<Blogroll, Serializable> implements BlogrollDao { //Blogroll实体类传到BaseDao<T,Serializable>的T里

	@Autowired
	private SessionFactory sessionFactory;
	
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List<Blogroll> getBlogroll(Blogroll blogroll) {
		StringBuffer hql = new StringBuffer(" from Blogroll where 1=1"); 
		ArrayList<Object> list = new ArrayList<Object>(); 
		if(null!=blogroll.getLinkid()){
			hql.append(" and linkid=?");
			list.add(blogroll.getLinkid()); //list里存blogroll对象里所有的属性值,可能是不同类型,so用<Object>泛型
		}
		if(!StringUtil.isNull(blogroll.getUrl())){
			hql.append(" and url=?");
			list.add(blogroll.getUrl());
		}
		if(!StringUtil.isNull(blogroll.getWebsitename())){
			hql.append(" and websitename=?");
			list.add(blogroll.getWebsitename());
		}
		if(!StringUtil.isNull(blogroll.getCreatetime())){
			hql.append(" and createtime=?");
			list.add(blogroll.getCreatetime());
		}
		if(!StringUtil.isNull(blogroll.getUpdatetime())){
			hql.append(" and updatetime=?");
			list.add(blogroll.getUpdatetime());
		}
		if(!StringUtil.isNull(blogroll.getWeblogourl())){
			hql.append(" and weblogourl=?");
			list.add(blogroll.getWeblogourl());
		}
		if(null!=blogroll.getClickcount()){
			hql.append(" and clickcount=?");
			list.add(blogroll.getClickcount());
		}
		List<Blogroll> blist = this.getListByHQL(hql.toString(), list);
		return blist;

	}

}
