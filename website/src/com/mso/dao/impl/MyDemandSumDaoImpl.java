/**
 * 
 */
package com.mso.dao.impl;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.MyDemandSumDao;
import com.mso.model.DemandSum;
import com.mso.utils.StringUtil;


@Repository("myDemandSumDao")
public class MyDemandSumDaoImpl extends BaseDao<Object, Serializable> implements MyDemandSumDao{
	
	
//	 String query = "select new Map(p.code, p.value) from Dictionary p";
//
//	 List list = session.createQuery(query).list();
	
	 @Autowired
	 private SessionFactory sessionFactory;

     public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
     }
     public SessionFactory getSessionFactory() {
        return sessionFactory;
     }
       
     /*2.4.0 发包方-我的获客-获客完成量&获客费用 (适用于查询"每年"/"每月"/"全部")*/
	 @Override
	 public DemandSum getMyDemandSum(String jfuid, Integer year, Integer month) {
		 Object[] values  = new Object[2];
		 int length = 0;  //初始化 this.getBySQL2 循环里的传参长度
		 StringBuffer sql = new StringBuffer(" SELECT SUM(f.paymentnum) AS paymentnumSum, SUM(f.paymentmoney) AS paymentmoneySum,p.paytime AS paytime, " +
		 		"SUM(f.releasenum) AS releasenumSum, SUM(f.releasenum)-SUM(f.paymentnum) AS noFinishSum FROM h_f_p  f ");
		 sql.append(" LEFT JOIN b_f_p_paytime p ON f.pid =p.pid WHERE 1=1 ");
		 if(!StringUtil.isNull(jfuid)){
			 sql.append(" and f.jfuid=? ");
			 values[0]=jfuid; 
			 length++;
			 //我的获客--查全部
		 }
		 
		//我的获客--每月(可用于上月[.js里实现])(获客完成量, 获客费用)
		 if(null!=year && null!=month){         //paytime---归属年月不为null才进行统计
//			 sql.append(" and p.paytime =? "); 如果直接用"p.paytime=?" month传2,不会转成02
			 sql.append(" and STR_TO_DATE(p.paytime,'%Y-%m-%d')=STR_TO_DATE(?,'%Y-%m-%d') "); 	 
			 values[1]=year+"-"+month;
			 length++;   //在之前的length++后再++
		 }
		 
		//我的获客--每年(获客完成量, 获客费用) 
		 if(null!=year && null==month){     
			 //STR_TO_DATE: paytime在数据库是varchar,且是year-month的格式,so要用YEAR(paytime)取year
			 sql.append(" and YEAR(STR_TO_DATE(p.paytime,'%Y-%m-%d'))=YEAR(STR_TO_DATE(?,'%Y-%m-%d')) ");  
			 values[1]=year;   //integer类+String类=String类
			 length++;
		 }
		 
		 System.out.println(sql.toString());
		 System.out.println(values[0]);
		// Object[] T = (Object[]) this.getBySQL(sql.toString(), values);  //返回一条数据,so是Object 不是List<Object> !
		 Object[] T = (Object[]) this.getBySQL2(sql.toString(), length, values);
		 DemandSum a = new DemandSum();
		 a.setPaymentnumSum((BigDecimal) T[0]);
		 a.setPaymentmoneySum((BigDecimal) T[1]);
		 a.setPaytime((String)T[2]);
		 a.setReleasenumSum((BigDecimal) T[3]);
		 a.setNoFinishSum((BigDecimal) T[4]);
		 if(null!=T){
				return a;
			}else{
				return null;
			}
	}

	 
	/*2.4.0发包方-我的需求统计-筛选需求 显示此需求lifecycle对应的"获客费用","需求竞拍及完成情况 */
	@Override
	public List<Object> getMyDemandStatistics(String pid) {
		
		return null;
	}

}
