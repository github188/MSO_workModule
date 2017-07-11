package com.mso.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.mso.dao.IJTouristsDao;
import com.mso.model.JTourists;

/**
 * 用户DAO实现类
 * @author GJ
 * @date   2015年4月15日
 */
@Repository("jtouristsDao")
public class JTouristsDaoImpl implements IJTouristsDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
	
	@Override
	public void addJTourists(JTourists user) {
		Session session = sessionFactory.getCurrentSession();
		session.save(user);
	}
	@Override
	public List<JTourists> getAllJTourists() {
		return null;
	}
	@Override
	public void delJTourists(Integer id) {
		 Session session = sessionFactory.getCurrentSession();
		 session.createQuery("delete User u where u.id="+id).executeUpdate();  
	}
	@Override
	public void updateJTourists(JTourists user) {
		Session session = sessionFactory.getCurrentSession();
        session.beginTransaction();
        String hql = ("update h_jf_user u set u.jfuid = ?,u.jfutype = ?,u.pid = ?,u.jfuname = ?,u.jfuheadurl = ?     " +
        		",u.pid = ?,u.pid = ?,u.pid = ?,u.pid = ?,u.pid = ?,u.pid = ?,u.pid = ? where u.id = ?"); 

        Query query = session.createQuery(hql);
//        query.setParameter(0, user.getName());
//        query.setParameter(1, user.getPassword());
//        query.setParameter(2, user.getLoginDate());
//        query.setParameter(3, user.getId());
        query.executeUpdate();
        session.getTransaction().commit(); 
	}
	@Override
	public List<JTourists> getJTourists(Integer id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from User");
        List<JTourists> list = query.list();
        return list;
	}
	

}
