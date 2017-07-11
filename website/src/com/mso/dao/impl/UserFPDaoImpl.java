package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.IUserFPDao;
import com.mso.model.UserFP;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 * @author GJ
 * @date   2015年4月15日
 */
@Repository("userfpDao")
public class UserFPDaoImpl extends BaseDao<Object, Serializable> implements IUserFPDao {
	
	@Autowired
	private SessionFactory sessionFactory;
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
	public UserFP selectUserP(UserFP user){
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" select a.USER_ID,a.jfuid,b.name,a.bstatus from user_jf_user a,sys_user b ");
		sql.append(" where 1=1 and  b.USER_ID=a.bd_USER_ID ");
	 	if(!StringUtil.isNull(user.getJfuid())){
		 	sql.append(" and a.jfuid = ? ");
			listpar.add(user.getJfuid());
		}
	 	UserFP p=null;
		List<Object> users =this.getListBySQL(sql.toString(), listpar);
		Integer bstatus=1;//0-默认状态 1-bd负责的需求包 3-bd转交给cs,cs负责的需求包
//				StringUtil.toInteger(StringUtil.objCovStr(a[3]));
		if(users!=null&&users.size()!=0){
			 p=new UserFP();
			 Object[] a= (Object[]) users.get(0);
		 	 String userId=StringUtil.objCovStr(StringUtil.objCovStr(a[0]));
			 String jfuid=StringUtil.objCovStr(StringUtil.objCovStr(a[1]));
			 String reviewname=StringUtil.objCovStr(StringUtil.objCovStr(a[2]));
//			 Integer bstatus=StringUtil.toInteger(StringUtil.objCovStr(a[3]));
			 p.setUserId(userId);
		     p.setJfuid(jfuid);
		     p.setReviewname(reviewname);
		     p.setBstatus(bstatus);
		}
		return p;
	}
    
	/*
	 * 新增  UserJfUser對象
	 * */
    @Override
	public void addUserFP(UserFP user){
		this.save(user);
	}
    
	
}
