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

import com.mso.dao.ToppostDao;
import com.mso.model.Toppost;
import com.mso.utils.StringUtil;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
@Repository("toppostDao")
public class ToppostDaoImpl extends BaseDao<Toppost, Serializable> implements ToppostDao{ //BaseDao<Toppost,Serializable>只能在Hql内用
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	/**
	 * 置顶文章-选择文章(查询头条+课堂列表)
	 */
	@Override
	public List getToppost(Toppost toppost){
		
//		ArrayList<Object> listpar = new ArrayList<Object>();
//		StringBuffer sql = new StringBuffer(" SELECT t.topid, t.type, t.topdirection, t.topphotourl, ");
//		sql.append(" t.photodescrip,t.url,p.title,p.thumbnail FROM ");   //四篇置顶文章,是图片加文章的标题（p.title&p.thumbnail)
//		sql.append("`mk_toppost` t left JOIN mk_public_articlemgmt p on t.topid=p.public_id ");   //以置顶文章表b_toppost为主(优先显示)
//		
//		List<Object> toppostlist =this.getListBySQL(sql.toString(),listpar);   //listpar传空  即查全表
//		return toppostlist;
		
		StringBuffer hql = new StringBuffer(" from Toppost where 1=1"); 
		ArrayList<Object> list = new ArrayList<Object>(); 
		if(!StringUtil.isNull(toppost.getTopid())){
			hql.append(" and topid=?");
			list.add(toppost.getTopid()); 
		}
		if(!StringUtil.isNull(toppost.getType())){
			hql.append(" and type=?");
			list.add(toppost.getType());
		}
		if(!StringUtil.isNull(toppost.getTopdirection())){
			hql.append(" and topdirection=?");
			list.add(toppost.getTopdirection());
		}
		if(!StringUtil.isNull(toppost.getTitle())){
			hql.append(" and title=?");
			list.add(toppost.getTitle());
		}
		if(!StringUtil.isNull(toppost.getTopphotourl())){
			hql.append(" and topphotourl=?");
			list.add(toppost.getTopphotourl());
		}
		if(!StringUtil.isNull(toppost.getCreatetime())){
			hql.append(" and createtime=?");
			list.add(toppost.getCreatetime());
		}
		if(!StringUtil.isNull(toppost.getUpdatetime())){
			hql.append(" and updatetime=?");
			list.add(toppost.getUpdatetime());
		}
		if(!StringUtil.isNull(toppost.getUrl())){
			hql.append(" and url=?");
			list.add(toppost.getUrl());
		}
		hql.append(" ORDER BY topdirection ASC "); // 置顶位置升序排列(1-左，2-中上, 3-中下 4-右)
		List<Toppost> tlist = this.getListByHQL(hql.toString(),list);
		return tlist;

	}
}
