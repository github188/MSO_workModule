/**
 * 
 */
package com.mso.dao.impl;

import java.io.Serializable;

import java.util.ArrayList;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.ArticlesDao;
import com.mso.model.MkLecture;
import com.mso.model.MkNews;
import com.mso.model.PublicArticleMgmt;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;

/**
 * 
 */
@Repository("articlesDao")
public class ArticlesDaoImpl extends BaseDao<Object, Serializable> implements ArticlesDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

	@Override
	public PageResults<Object> getArticles(PublicArticleMgmt article) { 
		
		PageResults<Object> articles = new PageResults<Object>();
		String countHql=null; //countHql相当于总查询条数(findPageByFetchedHql里写了传null查数据库所有条数;传int值查对应条数))
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" from PublicArticleMgmt p where 1=1");
		if(!StringUtil.isNull(article.getType())){
			hql.append(" and p.type = ? ");
			listpar.add(article.getType());
		}
		if(!StringUtil.isNull(article.getLabel())){
			hql.append(" and p.label like '%"+article.getLabel()+"%'  ");
//			listpar.add(article.getLabel());  //只有Hql里的"?"参数才需要放在listpar里
		}
		if(null!=article.getState()){
			hql.append(" and p.state=? ");
			listpar.add(article.getState());
		}
		hql.append(" order by DATE_FORMAT(p.updatetime,'%Y%m%d%H%i%s') desc ");
		int pageSize = articles.getPageSize();
		articles = this.findPageByFetchedHql(hql.toString(), countHql, article.getCurrentPage(), pageSize, listpar); //方法里传参 article.getCurrentPage()到pageNo.
		return articles;
	}
	
	@Override
	public void updateNewsReading(MkNews news) {
		
		StringBuffer hql = new StringBuffer("update MkNews set reading = ? where newsid =? ");
		Query query = sessionFactory.getCurrentSession().createQuery(hql.toString());
		query.setParameter(0,news.getReading());
		query.setParameter(1, news.getNewsid());
		query.executeUpdate();
		
//		Session a = this.getSession();
//		Transaction transaction = a.getTransaction(); //dao层try catch的AOP的回滚rollback
//		transaction.commit();
//		transaction.rollback();
//		
//		Connection conn=null;
//		try {
//			conn=DBUtil.getConnection();
//			String sql = "update mk_news set reading = ? where newsid =? ";
//			PreparedStatement ps=conn.prepareStatement(sql);
//			ps.setInt(1,reading);
//			ps.setString(2,newsid);
//			ps.executeUpdate();
//		} catch (SQLException e) {
//			e.printStackTrace();
//			throw new RuntimeException("更新失败",e);
//		}finally{
//			DBUtil.close(conn);
//		}

	}
	
	@Override
	public void updateLectureReading(MkLecture lecture) {
		//String sql = "update mk_lecture set reading = ? where lectureid =? ";
		//this.getBySQL(sql,reading,newsid);//若查询时直接传参1,参2-->相当于Object... values可变参数数组里的传参
		
		lecture.setLectureid(lecture.getLectureid());
		lecture.setReading(lecture.getReading());
		this.update(lecture); 	//或用  this.saveOrUpdate(lecture);	

		
	}



}
