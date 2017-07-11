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

import com.mso.dao.IOrderUploadReportDao;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;

import BaseDao.BaseDao;



/**
 * 用户DAO实现类
 */
@Repository("orderUploadReportDao")
public class OrderUploadReportDaoImpl extends BaseDao<Object, Serializable> implements IOrderUploadReportDao {
	
	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

	@Override
	public GXJOrderUploadReport addOrderUploadReport(GXJOrderUploadReport user){
		 this.save(user);
		 return user;
	}
	
	
	/*
	 * 根据条件查询所有符合条件的 上传成单报告信息   不分页  用于定时器
	 */
	@Override
	public List getUploadReport(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" from GXJOrderUploadReport t where 1=1 ");

		if(null!=user.getStatus()){
			sql.append(" and t.status=? ");
			listpar.add(user.getStatus());
		}
		if(null!=user.getQa_check()){
			sql.append(" and t.qa_check=? ");
			listpar.add(user.getQa_check());
		}
		
		if(!StringUtil.isNull(user.getOrderid())){
			sql.append(" and t.orderid=? ");
			listpar.add(user.getOrderid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			sql.append(" and t.demandid=? ");
			listpar.add(user.getDemandid());
		}
		
		List demanList =this.getListByHQL(sql.toString(),listpar);
		return demanList;
	}
	
	
	
	/*
	 * 更具状态查询 需求记录
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭
	 */
	@Override
	public Long getUploadReportCount(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" select sum(t.qa_qualified+t.qa_notstandard) from GXJOrderUploadReport  t where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid_j())){
			sql.append(" and t.jfuid_j=? ");
			listpar.add(user.getJfuid_j());
		}
		if(null!=user.getStatus()){
			sql.append(" and t.status=? ");
			listpar.add(user.getStatus());
		}
		if(null!=user.getQa_check()){
			sql.append(" and t.qa_check=? ");
			listpar.add(user.getQa_check());
		}
		if(!StringUtil.isNull(user.getOrderid())){
			sql.append(" and t.orderid=? ");
			listpar.add(user.getOrderid());
		}
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and t.pid=? ");
			listpar.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			sql.append(" and t.demandid=? ");
			listpar.add(user.getDemandid());
		}
		Long countDemand =this.countByHql(sql.toString(), listpar);
		return countDemand;
	}
	
	
	@Override
	public List<Object> getUploadProgress(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("  from GXJOrderUploadReport t where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid_j())){
			hql.append(" and t.jfuid_j=? ");
			listpar.add(user.getJfuid_j());
		}
		if(null!=user.getStatus()){
			hql.append(" and t.status=? ");
			listpar.add(user.getStatus());
		}
		if(null!=user.getQa_check()){
			hql.append(" and t.qa_check=? ");
			listpar.add(user.getQa_check());
		}
		if(!StringUtil.isNull(user.getOrderid())){
			hql.append(" and t.orderid=? ");
			listpar.add(user.getOrderid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and t.demandid=? ");
			listpar.add(user.getDemandid());
		}
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			hql.append(" and DATE_FORMAT(t.createtime,'%Y-%m-%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			hql.append(" and DATE_FORMAT(t.createtime,'%Y-%m-%d')<=? ");
			listpar.add(user.getSendDateValue());
		}
		hql.append(" order by t.createtime desc ");
		List<Object> list=this.getListByHQL(hql.toString(),listpar);
		return list;
	}
	
	@Override
	public PageResults<Object> getUploadReportPage(GXJOrderUploadReport user) {
		PageResults<Object>  ts=new PageResults<Object>();
		String countHql=null;
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer("  from GXJOrderUploadReport t where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid_j())){
			hql.append(" and t.jfuid_j=? ");
			listpar.add(user.getJfuid_j());
		}
		if(null!=user.getStatus()){
			hql.append(" and t.status=? ");
			listpar.add(user.getStatus());
		}
		if(null!=user.getQa_check()){
			hql.append(" and t.qa_check=? ");
			listpar.add(user.getQa_check());
		}
		if(!StringUtil.isNull(user.getOrderid())){
			hql.append(" and t.orderid=? ");
			listpar.add(user.getOrderid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			hql.append(" and t.demandid=? ");
			listpar.add(user.getDemandid());
		}
		if(!StringUtil.isNull(user.getSbeginDateValue())){
			hql.append(" and DATE_FORMAT(t.createtime,'%Y/%m/%d')>=? ");
			listpar.add(user.getSbeginDateValue());
		}
		if(!StringUtil.isNull(user.getSendDateValue())){
			hql.append(" and DATE_FORMAT(t.createtime,'%Y/%m/%d')<=? ");
			listpar.add(user.getSendDateValue());
		}
		hql.append(" order by t.createtime desc ");
		int pageSize= ts.getPageSize();
		ts=this.findPageByFetchedHql(hql.toString(), countHql, user.getCurrentPage(), pageSize, listpar);
		return ts;
	}
	
	@Override
	public GXJOrderUploadReport getUploadReportPageSum(GXJOrderUploadReport user) {
								ArrayList<Object> listpar = new ArrayList<Object>();
								StringBuffer sql = new StringBuffer(" select ");
		                        sql.append(" sum(t.order_num) fblTol,sum(t.qa_qualified+t.qa_notstandard) cglTol,sum(t.qa_disqualification+t.qa_cancel) sblTol, ");
		                        sql.append(" sum(t.dba_receive),sum(t.dba_repetition),sum(t.qa_qualified),sum(t.qa_notstandard),sum(t.qa_cancel),sum(t.qa_disqualification), ");
		                        sql.append(" t.demandid,t.orderid,t.jfuid_j,t.`status` from gx_j_order_upload_report t where 1=1 ");
				         		if(!StringUtil.isNull(user.getJfuid_j())){
				         			sql.append(" and t.jfuid_j=? ");
				         			listpar.add(user.getJfuid_j());
				         		}
				         		if(null!=user.getStatus()){
				         			sql.append(" and t.status=? ");
				         			listpar.add(user.getStatus());
				         		}
				         		if(null!=user.getQa_check()){
				         			sql.append(" and t.qa_check=? ");
				         			listpar.add(user.getQa_check());
				         		}
				         		if(!StringUtil.isNull(user.getOrderid())){
				         			sql.append(" and t.orderid=? ");
				         			listpar.add(user.getOrderid());
				         		}
				         		if(!StringUtil.isNull(user.getDemandid())){
				         			sql.append(" and t.demandid=? ");
				         			listpar.add(user.getDemandid());
				         		}
				         		if(!StringUtil.isNull(user.getSbeginDateValue())){
				         			sql.append(" and DATE_FORMAT(t.createtime,'%Y/%m/%d')>=? ");
				         			listpar.add(user.getSbeginDateValue());
				         		}
				         		if(!StringUtil.isNull(user.getSendDateValue())){
				         			sql.append(" and DATE_FORMAT(t.createtime,'%Y/%m/%d')<=? ");
				         			listpar.add(user.getSendDateValue());
				         		}
				         		
								 List list=this.getListBySQL(sql.toString(),listpar);
							 	 GXJOrderUploadReport d=new GXJOrderUploadReport();
								 if(list!=null&&list.size()!=0){
								 	Object[] a= (Object[]) list.get(0);
							       	Integer fblTol=StringUtil.toInteger(StringUtil.objCovStr(a[0]));
							       	Integer cglTol=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
							       	Integer sblTol=StringUtil.toInteger(StringUtil.objCovStr(a[2]));

							       	Integer dba_receiveTol=StringUtil.toInteger(StringUtil.objCovStr(a[3]));
							     	Integer dba_repetitionTol=StringUtil.toInteger(StringUtil.objCovStr(a[4]));
							     	Integer qa_qualifiedTol=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
							     	Integer qa_notstandardTol=StringUtil.toInteger(StringUtil.objCovStr(a[6]));
							     	Integer qa_cancelTol=StringUtil.toInteger(StringUtil.objCovStr(a[7]));
							     	Integer qa_disqualificationTol=StringUtil.toInteger(StringUtil.objCovStr(a[8]));
							     	
							     	d.setDba_receiveTol(dba_receiveTol);
							   		d.setDba_repetitionTol(dba_repetitionTol);
							   		d.setQa_qualifiedTol(qa_qualifiedTol);
							   		d.setQa_notstandardTol(qa_notstandardTol);
							   		d.setQa_cancelTol(qa_cancelTol);
							   		d.setQa_disqualificationTol(qa_disqualificationTol);
							   		
							       	d.setFblTol(fblTol);
							   		d.setCglTol(cglTol);
							   		d.setSblTol(sblTol);
								 }
								 return d;
	}
	
	
	
	@Override
	public PageResults<Object> getUploadReports(GXJOrderUploadReport user) {
		PageResults<Object>  ts=new PageResults<Object>();
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" select a.demandid,a.jfuid,a.ordername,a.releasetime,a.releasenum,b.cgl,b.sbl,b.jsl,b.orderid from  ");
		                        sql.append(" (select d.demandid,d.jfuid,d.ordername,d.releasetime,d.releasenum from h_f_demand d where jfuid=?) as a ");
		                        sql.append(" LEFT JOIN (SELECT   sum(order_num)as fbl,sum(qa_notstandard+qa_qualified)as cgl,sum(qa_cancel+qa_disqualification+dba_repetition)as sbl,sum(dba_receive)as jsl,t.demandid,t.orderid");
		                        sql.append(" from gx_j_order_upload_report t where t.demandid in(select d.demandid from h_f_demand d where jfuid=?) GROUP BY t.demandid) as b ");
		                        sql.append(" on a.demandid=b.demandid where 1=1 ");
		                 		listpar.add(user.getJfuid_j());
		                		listpar.add(user.getJfuid_j());                        
		                	    if(!StringUtil.isNull(user.getDemandid())){
			                	   sql.append(" and a.demandid =? ");
			                	   listpar.add(user.getDemandid());
			                	}
		                	    if(!StringUtil.isNull(user.getOrderid())){
			                	   sql.append(" and b.orderid =? ");
			                	   listpar.add(user.getOrderid());
			                	}
		                	    if(!StringUtil.isNull(user.getSorderName())){
		                		   sql.append(" and a.ordername like '%"+user.getSorderName()+"%' ");
		                		}
		                	    if(!StringUtil.isNull(user.getSbeginDateValue())){
		                		   sql.append(" and DATE_FORMAT(a.releasetime,'%Y/%m/%d')>=? ");
		                		   listpar.add(user.getSbeginDateValue());
		                		}
		                		if(!StringUtil.isNull(user.getSendDateValue())){
		                		   sql.append(" and DATE_FORMAT(a.releasetime,'%Y/%m/%d')<=? ");
		                		   listpar.add(user.getSendDateValue());
		                		}
		                		 if("export".equals(user.getAction())){
		                			 List list=this.getListBySQL(sql.toString(),listpar); 
		                			 ts.setResults(list);
		                		 }else{
		                			 int pageSize= ts.getPageSize();
									 ts=this.findPageByFetchedSql(sql,user.getCurrentPage(), pageSize, listpar);
		                		 }
								 return ts;
	}
	
	@Override
	public GXJOrderUploadReport getUploadReportsSum(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" select sum(a.releasenum) fblTol,sum(b.cgl) cglTol,sum(b.sbl) sblTol,sum(b.jsl) jslTol from   ");
		                         sql.append(" (select d.demandid,d.jfuid,d.ordername,d.releasetime,d.releasenum from h_f_demand d where jfuid=?) as a ");
		                         sql.append(" LEFT JOIN (SELECT   sum(order_num)as fbl,sum(qa_notstandard+qa_qualified)as cgl,sum(qa_cancel+qa_disqualification+dba_repetition)as sbl,sum(dba_receive)as jsl,t.demandid,t.orderid ");
		                         sql.append(" from gx_j_order_upload_report t where t.demandid in(select d.demandid from h_f_demand d where jfuid=?) GROUP BY t.demandid) as b ");
		                         sql.append(" on a.demandid=b.demandid where 1=1");
								 listpar.add(user.getJfuid_j());
								 listpar.add(user.getJfuid_j());
			                	 if(!StringUtil.isNull(user.getDemandid())){
					                 sql.append(" and a.demandid = ? ");
					                 listpar.add(user.getDemandid());
					             }
				                 if(!StringUtil.isNull(user.getOrderid())){
					                 sql.append(" and b.orderid = ? ");
					                 listpar.add(user.getOrderid());
					             }
			                	 if(!StringUtil.isNull(user.getSorderName())){
				                	sql.append(" and  a.ordername like '%"+user.getSorderName()+"%' ");
				                 }
				                 if(!StringUtil.isNull(user.getSbeginDateValue())){
				                	sql.append(" and DATE_FORMAT(a.releasetime,'%Y/%m/%d')>=? ");
				                    listpar.add(user.getSbeginDateValue());
				                 }
				                 if(!StringUtil.isNull(user.getSendDateValue())){
				                	sql.append(" and DATE_FORMAT(a.releasetime,'%Y/%m/%d')<=? ");
				                	listpar.add(user.getSendDateValue());
				                 }	
								 List list=this.getListBySQL(sql.toString(),listpar);
							 	 GXJOrderUploadReport d=new GXJOrderUploadReport();
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
	
	@Override
	public PageResults<Object> getUploadOrderReports(GXJOrderUploadReport user) {

		PageResults<Object>  ts=new PageResults<Object>();
		ArrayList<Object> listpar = new ArrayList<Object>();//b.fbl
		 StringBuffer sql = new StringBuffer(" select a.demandid,b.jfuid_j,a.ordername,c.createtime,b.fbl fbl,b.cgl,b.sbl,b.jsl,b.orderid from ");
         sql.append(" (SELECT sum(order_num)as fbl,sum(qa_notstandard+qa_qualified)as cgl,t.jfuid_j, ");
         sql.append(" sum(qa_cancel+qa_disqualification+dba_repetition)as sbl,sum(dba_receive) as jsl, ");
         sql.append(" t.demandid,t.orderid,t.createtime from gx_j_order_upload_report t where t.jfuid_j=?  ");
         listpar.add(user.getJfuid_j());
        
         if("cdbb".equals(user.getAction())){
        	sql.append(" GROUP BY t.demandid ) as b ");
 		 }else{
 			sql.append(" GROUP BY t.orderid ) as b ");
 		 }
         
         
         
         sql.append(" inner join ");
         sql.append(" (select a1.* from h_f_demand a1  where 1=1 ");
         
         if(!StringUtil.isNull(user.getDemandid())){
     		   sql.append(" and  a1.demandid=? ");
     		   listpar.add(user.getDemandid());
     	}
         
         if(!StringUtil.isNull(user.getSorderName())){
     		   sql.append(" and  a1.ordername like '%"+user.getSorderName()+"%' ");
     	}
         sql.append(" ) ");
         sql.append("  as a on a.demandid=b.demandid ");
         
         sql.append(" inner join (select c1.* from h_j_order_demand c1 where 1=1  ");
   		if(!StringUtil.isNull(user.getSbeginDateValue())){
             sql.append(" and DATE_FORMAT(c1.createtime,'%Y/%m/%d')>=? ");
             listpar.add(user.getSbeginDateValue());
         }
         if(!StringUtil.isNull(user.getSendDateValue())){
             sql.append(" and DATE_FORMAT(c1.createtime,'%Y/%m/%d')<=? ");
             listpar.add(user.getSendDateValue());
         }
		if("cdbb".equals(user.getAction())){
            sql.append(" ) as c on b.orderid=c.orderid where 1=1  ");
		}else{
            sql.append(" ) as c on b.orderid=c.orderid where 1=1  ");
		}
		 
		if("export".equals(user.getAction())){
		   List list=this.getListBySQL(sql.toString(),listpar); 
		   ts.setResults(list);
		}else{
		   int pageSize= ts.getPageSize();
		   ts=this.findPageByFetchedSql(sql,user.getCurrentPage(), pageSize, listpar);
		}
		return ts;
	}
	
	@Override
	public GXJOrderUploadReport getUploadOrderReportsSum(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();//b.fbl
		StringBuffer sql = new StringBuffer(" select sum(b.fbl),sum(b.cgl),sum(b.sbl),sum(b.jsl),b.jfuid_j from ");
					        sql.append(" (SELECT sum(order_num)as fbl,sum(qa_notstandard+qa_qualified)as cgl,t.jfuid_j, ");
					        sql.append(" sum(qa_cancel+qa_disqualification+dba_repetition)as sbl,sum(dba_receive) as jsl, ");
					        sql.append(" t.demandid,t.orderid,t.createtime from gx_j_order_upload_report t where t.jfuid_j=? ");
					        listpar.add(user.getJfuid_j());
					        
					        
					        if(!StringUtil.isNull(user.getDemandid())){
					        	  sql.append(" and  t.demandid=? ");
		                		  listpar.add(user.getDemandid());
		                	}
	
			                sql.append("  GROUP BY t.demandid) as b ");
			                 
					        sql.append(" LEFT JOIN h_f_demand as a on a.demandid=b.demandid  ");
					        sql.append(" inner join (select c1.* from h_j_order_demand c1 where 1=1 ");
					        
			                if(!StringUtil.isNull(user.getSbeginDateValue())){
				               sql.append(" and DATE_FORMAT(c1.createtime,'%Y/%m/%d')>=? ");
				               listpar.add(user.getSbeginDateValue());
				            }
				            if(!StringUtil.isNull(user.getSendDateValue())){
				               sql.append(" and DATE_FORMAT(c1.createtime,'%Y/%m/%d')<=? ");
				               listpar.add(user.getSendDateValue());
				            }
					        sql.append(" ) as c on b.orderid=c.orderid where 1=1 ");
	
						
			                	 if(!StringUtil.isNull(user.getSorderName())){
				                	sql.append(" and  a.ordername like '%"+user.getSorderName()+"%' ");
				                 }
								 List list=this.getListBySQL(sql.toString(),listpar);
							 	 GXJOrderUploadReport d=new GXJOrderUploadReport();
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
	@Override
	public List getOrderOrderNums(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" SELECT demandid,jfuid_j,DATE_FORMAT(qachecktime,'%Y/%m/%d'),sum(order_num),sum(qa_qualified+qa_notstandard)  ");
	        sql.append(" from gx_j_order_upload_report where 1=1  ");
			if(!StringUtil.isNull(user.getJfuid_j())){
				sql.append(" and jfuid_j=? ");
				listpar.add(user.getJfuid_j());
			}
			if(null!=user.getStatus()){
				sql.append(" and status=? ");
				listpar.add(user.getStatus());
			}
			if(null!=user.getQa_check()){
				sql.append(" and qa_check=? ");
				listpar.add(user.getQa_check());
			}
		    if(!StringUtil.isNull(user.getDemandid())){
		        sql.append(" and demandid =? ");
		        listpar.add(user.getDemandid());
		    }
	        sql.append(" GROUP BY demandid,DATE_FORMAT(qachecktime,'%Y/%m/%d') ");
//	        jfuid_j,
		    List list=this.getListBySQL(sql.toString(),listpar); 
			return list;
	}
	
	
	
	
	
	/*1.4.2 本月质检成功量*订单单价  本月预计收入 */
	@Override
	public BigDecimal getThisMonthRevenue(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" select sum((g.qa_qualified+g.qa_notstandard)*d.orderprice) from gx_j_order_upload_report g left join h_j_order_demand d on g.orderid=d.orderid  where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and g.jfuid_j = ? ");
			listpar.add(user.getJfuid());
		}
		if(null!=user.getStatus()){
			hql.append(" and g.status = ? ");
			listpar.add(user.getStatus());
		}
		if(null!=user.getQa_check()){
			hql.append(" and g.qa_check = ? ");
			listpar.add(user.getQa_check());
		}
		
		if(!StringUtil.isNull(user.getQachecktime())){
			hql.append(" and DATE_FORMAT(g.qachecktime,'%Y-%m') = ? ");
			listpar.add(user.getQachecktime());
		}
		
		List a=this.getListBySQL(hql.toString(),listpar);
		BigDecimal price=new BigDecimal("0");
		if(a!=null&&a.size()!=0){
			BigDecimal prices=(BigDecimal) a.get(0);
			if(null!=prices){
				price=prices;
			}
		}
		return price;
	}

	
	
	/*1.4.2 本月完成订单量    本月完成订单量 */
	@Override
	public BigDecimal getThisMonthOrderQuantityCompleted(GXJOrderUploadReport user) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer hql = new StringBuffer(" select sum(g.qa_qualified+g.qa_notstandard) from gx_j_order_upload_report g  left join h_j_order_demand d on g.orderid=d.orderid where 1=1 ");
		if(!StringUtil.isNull(user.getJfuid())){
			hql.append(" and g.jfuid_j = ? ");
			listpar.add(user.getJfuid());
		}
		if(null!=user.getStatus()){
			hql.append(" and g.status = ? ");
			listpar.add(user.getStatus());
		}
		if(null!=user.getQa_check()){
			hql.append(" and g.qa_check = ? ");
			listpar.add(user.getQa_check());
		}
		
		if(!StringUtil.isNull(user.getQachecktime())){
			hql.append(" and DATE_FORMAT(g.qachecktime,'%Y-%m') = ? ");
			listpar.add(user.getQachecktime());
		}
		
		List a=this.getListBySQL(hql.toString(),listpar);
		BigDecimal price=new BigDecimal("0");
		if(a!=null&&a.size()!=0){
			BigDecimal prices=(BigDecimal) a.get(0);
			if(null!=prices){
				price=prices;
			}
		}
		return price;
	}
	//接包方成单报表第一层
	@Override
	public PageResults<Object> getOutsourceeStatement(GXJOrderUploadReport user) {
		PageResults<Object> fen=new PageResults<Object>();
		ArrayList<Object> alist=new ArrayList<Object>();
		StringBuffer sql=new StringBuffer("SELECT b.fbl,b.cgl,b.sbl,b.jsl,c.jfuid,c.demandid,c.createtime,c.ordername,c.auctionnum,c.orderid FROM");
		sql.append(" (SELECT sum(order_num) AS fbl,sum(qa_notstandard + qa_qualified) AS cgl,t.jfuid_j,sum(qa_cancel + qa_disqualification + dba_repetition) AS sbl,sum(dba_receive) AS jsl,");
		sql.append(" t.demandid,t.orderid,t.qachecktime FROM gx_j_order_upload_report t WHERE 1 = 1");
		if(!StringUtil.isNull(user.getJfuid_j())){
			sql.append(" and t.jfuid_j = ?");
			alist.add(user.getJfuid_j());
		}
		sql.append(" GROUP BY t.orderid) AS b right JOIN (");
		sql.append(" SELECT c1.orderid,c1.auctionnum,c1.demandid,c2.ordername,c1.createtime,c1.jfuid FROM h_j_order_demand c1 INNER JOIN h_f_demand c2 ON c1.demandid = c2.demandid WHERE 1 = 1 AND c1.servicetype = '销售线索挖掘'");
		if(!StringUtil.isNull(user.getJfuid_j())){
			sql.append(" and c1.jfuid=?");
			alist.add(user.getJfuid_j());
		}
		sql.append(" UNION ALL");
		
		sql.append(" SELECT c3.orderid,c3.auctionnum,c3.demandid,c4.ordername,c3.createtime,c3.jfuid FROM h_j_order_demand c3 INNER JOIN h_f_datafiltering c4 ON c3.demandid = c4.pcdid WHERE 1 = 1 AND c3.servicetype = '数据加工'");
		if(!StringUtil.isNull(user.getJfuid_j())){
			sql.append(" and c3.jfuid=?");
			alist.add(user.getJfuid_j());
		}
		sql.append(" ) AS c ON b.orderid = c.orderid WHERE 1 = 1");
		if(!StringUtil.isNull(user.getOrdername())){
			sql.append(" AND c.ordername like '%"+user.getOrdername()+"%'");
		}
		if(!StringUtil.isNull(user.getBeginqachecktime())){
			sql.append(" and DATE_FORMAT(c.createtime,'%Y-%m-%d') >= ?");
			alist.add(user.getBeginqachecktime());
		}
		if(!StringUtil.isNull(user.getEndqachecktime())){
			sql.append(" and DATE_FORMAT(c.createtime,'%Y-%m-%d') <= ?");
			alist.add(user.getEndqachecktime());
		}
		sql.append(" ORDER BY DATE_FORMAT(c.createtime,'%Y-%m-%d %H:%i:%s') DESC ");
		PageResults<Object> list=this.findPageByFetchedSql(sql, user.getCurrentPage(), fen.getPageSize(), alist);
		return list;
	}
	
	
	//接包方成单报表第一层  无分页加总
		@Override
		public List getSumOutsourceeStatement(GXJOrderUploadReport user) {
			ArrayList<Object> alist=new ArrayList<Object>();
			StringBuffer sql=new StringBuffer("SELECT sum(b.fbl),sum(b.cgl),sum(b.sbl),sum(b.jsl),sum(c.auctionnum) FROM");
			sql.append(" (SELECT sum(order_num) AS fbl,sum(qa_notstandard + qa_qualified) AS cgl,t.jfuid_j,sum(qa_cancel + qa_disqualification + dba_repetition) AS sbl,sum(dba_receive) AS jsl,");
			sql.append(" t.demandid,t.orderid,t.qachecktime FROM gx_j_order_upload_report t WHERE 1=1");
			if(!StringUtil.isNull(user.getJfuid_j())){
				sql.append(" and t.jfuid_j = ?");
				alist.add(user.getJfuid_j());
			}
			sql.append(" GROUP BY t.demandid ) AS b RIGHT JOIN (");	
			sql.append(" SELECT c1.orderid,c1.auctionnum,c1.demandid,c2.ordername,c1.createtime FROM h_j_order_demand c1 INNER JOIN h_f_demand c2 ON c1.demandid = c2.demandid WHERE 1 = 1 AND c1.servicetype='销售线索挖掘' ");
			if(!StringUtil.isNull(user.getJfuid_j())){
				sql.append(" and c1.jfuid=?");
				alist.add(user.getJfuid_j());
			}
			sql.append(" UNION ALL");
			
			sql.append(" SELECT c3.orderid,c3.auctionnum,c3.demandid,c4.ordername,c3.createtime FROM h_j_order_demand c3 INNER JOIN h_f_datafiltering c4 ON c3.demandid = c4.pcdid WHERE 1 = 1 AND c3.servicetype='数据加工'");
			if(!StringUtil.isNull(user.getJfuid_j())){
				sql.append(" and c3.jfuid=?");
				alist.add(user.getJfuid_j());
			}
			sql.append(" ) AS c ON b.orderid = c.orderid WHERE 1 = 1");
			if(!StringUtil.isNull(user.getOrdername())){
				sql.append(" AND c.ordername like '%"+user.getOrdername()+"%'");
			}
			if(!StringUtil.isNull(user.getBeginqachecktime())){
				sql.append(" and DATE_FORMAT(c.createtime,'%Y-%m-%d') >= ?");
				alist.add(user.getBeginqachecktime());
			}
			if(!StringUtil.isNull(user.getEndqachecktime())){
				sql.append(" and DATE_FORMAT(c.createtime,'%Y-%m-%d') <= ?");
				alist.add(user.getEndqachecktime());
			}
			List list=this.getListBySQL(sql.toString(), alist);
			return list;
		}
		
		
		
	
	//接包方成单报表第二层
	@Override
	public List<Object> getOutsourceeSecondFloorStatement(GXJOrderUploadReport user) {
		ArrayList<Object> alist=new ArrayList<Object>();
		StringBuffer sql=new StringBuffer("SELECT g.order_num,g.qa_notstandard,g.qa_qualified,g.jfuid_j,g.qa_cancel,g.qa_disqualification,g.dba_repetition,g.dba_receive,g.demandid,g.orderid,g.createtime,g.dba_url,g.qa_url");
	    sql.append(" FROM gx_j_order_upload_report g");
	    sql.append(" WHERE 1=1");
	    if(!StringUtil.isNull(user.getJfuid_j())){
	    	sql.append(" and g.jfuid_j=?");
	    	alist.add(user.getJfuid_j());
	    }
	    if(!StringUtil.isNull(user.getOrderid())){
	    	sql.append(" AND g.orderid=?");
	    	alist.add(user.getOrderid());
	    }
		if(!StringUtil.isNull(user.getBegincreatetime())){
			sql.append(" and DATE_FORMAT(g.createtime,'%Y-%m-%d') >= ?");
			alist.add(user.getBegincreatetime());
		}
		if(!StringUtil.isNull(user.getEndcreatetime())){
			sql.append(" and DATE_FORMAT(g.createtime,'%Y-%m-%d') <= ?");
			alist.add(user.getEndcreatetime());
		}
		List<Object> list=this.getListBySQL(sql.toString(),alist);
		return list;
	}
	
	//发包方承担报表第一层
	@Override
	public PageResults<Object> getLetContract(GXDbaEverydayStatistics user) {
		PageResults<Object> fen=new PageResults<Object>();
		ArrayList<Object> alist=new ArrayList<Object>();
		StringBuffer sql=new StringBuffer("select h.pid,h.jfuid,p.servicetype,p.demandname,IFNULL(p.releasenum,0),d.auctionnumtol,IFNULL(sum(h.releasenum),0),p.releasetime,h.demandid");
		//add by  liu  增加第一层的需求包下成单报告是否下载的统计
		sql.append(",ifnull(count(h.stid),0) - ifnull(sum(h.isdownloaded),0) as notdownloadcount");
		sql.append(" from gx_dba_everyday_statistics h LEFT JOIN  h_f_p p on h.pid=p.pid");
		sql.append(" LEFT JOIN (select  IFNULL(sum(c.auctionnum),0) auctionnumtol,c.pid from h_j_order_demand c where 1=1 GROUP BY c.pid) d on  h.pid=d.pid");
		sql.append(" where 1=1");
		if(!StringUtil.isNull(user.getJfuid())){
			sql.append(" and h.jfuid =?");
			alist.add(user.getJfuid());
		}
		//销售线索挖掘
		if(!StringUtil.isNull(user.getServicetype())){
			sql.append("and p.servicetype=?");
			alist.add(user.getServicetype());
		}
		if(!StringUtil.isNull(user.getDemandname())){
			sql.append(" and p.demandname like '%"+user.getDemandname()+"%'");
		}
		if(!StringUtil.isNull(user.getBegintime())){
			sql.append(" and DATE_FORMAT(p.releasetime,'%Y-%m-%d')>=?");
			alist.add(user.getBegintime());
		}
		if(!StringUtil.isNull(user.getEndtime())){
			sql.append(" and DATE_FORMAT(p.releasetime,'%Y-%m-%d')<=?");
		    alist.add(user.getEndtime());
		}
		sql.append(" GROUP BY h.pid ORDER BY DATE_FORMAT(p.releasetime,'%Y-%m-%d %H:%i:%s') DESC");
		
		PageResults<Object> list=this.findPageByFetchedSql(sql,user.getCurrentPage(), fen.getPageSize(), alist);
		return list;
	}
	
	//发包方承担报表第一层 无分页加总
	@Override
    public List getsumLetContract(GXDbaEverydayStatistics user){
		ArrayList<Object> alist=new ArrayList<Object>();
		StringBuffer sql=new StringBuffer("SELECT sum(f.releasenum),sum(f.auctionnumtol),sum(f.completenumber) FROM (");
		sql.append(" select h.pid,h.jfuid,p.servicetype,p.demandname,IFNULL(p.releasenum,0) AS releasenum,d.auctionnumtol,IFNULL(sum(h.releasenum),0) AS completenumber,p.releasetime");
		sql.append(" from gx_dba_everyday_statistics h LEFT JOIN  h_f_p p on h.pid=p.pid");
		sql.append(" LEFT JOIN (select  IFNULL(sum(c.auctionnum),0) auctionnumtol,c.pid from h_j_order_demand c where 1=1 GROUP BY c.pid) d on  h.pid=d.pid");
		sql.append(" where 1=1");
		if(!StringUtil.isNull(user.getJfuid())){
			sql.append(" and h.jfuid =?");
			alist.add(user.getJfuid());
		}
		//销售线索挖掘
		if(!StringUtil.isNull(user.getServicetype())){
			sql.append("and p.servicetype=?");
			alist.add(user.getServicetype());
		}
		if(!StringUtil.isNull(user.getDemandname())){
			sql.append(" and p.demandname like '%"+user.getDemandname()+"%'");
		}
		if(!StringUtil.isNull(user.getBegintime())){
			sql.append(" and DATE_FORMAT(p.releasetime,'%Y-%m-%d')>=?");
			alist.add(user.getBegintime());
		}
		if(!StringUtil.isNull(user.getEndtime())){
			sql.append(" and DATE_FORMAT(p.releasetime,'%Y-%m-%d')<=?");
		    alist.add(user.getEndtime());
		}
		sql.append(" GROUP BY h.pid ORDER BY DATE_FORMAT(p.releasetime,'%Y-%m-%d %H:%i:%s') DESC");
		sql.append(" ) AS f");
		List<Object> list=this.getListBySQL(sql.toString(), alist);
		return list;
    }
	
	//发包方成单报表第二层
	@Override
	public List<Object> getTowLetContract(GXDbaEverydayStatistics user) {
		ArrayList<Object> alist=new ArrayList<Object>();
		StringBuffer sql=new StringBuffer("select h.pid,h.jfuid,h.demandid,p.category3,p.ordername,p.targecity,IFNULL(p.releasenum,0),d.auctionnumtol,IFNULL(sum(h.releasenum),0),p.citydesc");
		//add by liu 增加第二层的子需求下成单报告是否下载的统计
		sql.append(",ifnull(count(h.stid),0) - ifnull(sum(h.isdownloaded),0) as notdownloadcount");
		//add end
		sql.append(" from gx_dba_everyday_statistics h LEFT JOIN  ");
		sql.append("(");
		sql.append(" select pcdid demandid,releasenum,servicetype category3,ordername,'' targecity,'' citydesc from h_f_datafiltering");
		sql.append(" UNION ALL");
		sql.append(" select demandid,releasenum,category3,ordername,targecity,citydesc from h_f_demand");
		sql.append(") p");
		sql.append(" on h.demandid=p.demandid");
		sql.append(" LEFT JOIN");
		sql.append(" (select  IFNULL(sum(c.auctionnum),0) auctionnumtol,c.demandid from h_j_order_demand c where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and c.pid =?");
			alist.add(user.getPid());
		}
		sql.append(" GROUP BY c.demandid) d on h.demandid=d.demandid");
		sql.append(" where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and h.pid =?");
			alist.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getServicetype())){
			sql.append(" and p.category3 =?");
			alist.add(user.getServicetype());
		}
		sql.append("GROUP BY h.demandid");
		List<Object> list=this.getListBySQL(sql.toString(), alist);
		return list;
	}
	//发包方成单报表第三层
	@Override
	public PageResults<Object> getThreeLetContract(GXDbaEverydayStatistics user) {
		PageResults<Object> fen=new PageResults<Object>();
		ArrayList<Object> alist=new ArrayList<Object>();//
		StringBuffer sql=new StringBuffer("select g.releasenum,g.createtime,g.censusfile_url,g.censusday,g.isdownloaded,g.stid from gx_dba_everyday_statistics g where 1=1");
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and g.pid=?");
			alist.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			sql.append(" and g.demandid=?");
			alist.add(user.getDemandid());
		}
		if(!StringUtil.isNull(user.getServicetype())){
			sql.append(" and g.servicetype=?");
			alist.add(user.getServicetype());
		}
		if(!StringUtil.isNull(user.getBegintime())){
			sql.append(" and DATE_FORMAT(g.createtime,'%Y-%m-%d')>=?");
			alist.add(user.getBegintime());
		}
		if(!StringUtil.isNull(user.getEndtime())){
			sql.append(" and DATE_FORMAT(g.createtime,'%Y-%m-%d')<=?");
			alist.add(user.getEndtime());
		}
		sql.append(" order by g.createtime desc ");
		fen=this.findPageByFetchedSql(sql, user.getCurrentPage(), fen.getPageSize(), alist);
		return fen;
	}
	
	//根据stid查询对应的一条数据所有字段
	@Override
	public GXDbaEverydayStatistics findGXDbaEverydayStatisticsByStid(String stid){
		String hql=" from GXDbaEverydayStatistics g where g.stid=?";
		ArrayList<Object> list=new ArrayList<Object>();
		list.add(stid);
		List<Object> reports=this.getListByHQL(hql, list);
		if(reports!=null&&reports.size()!=0){
			return (GXDbaEverydayStatistics)reports.get(0);
		}
		return null;
	}
	
	//发包方成单报表第三层 - 点击"下载" 修改下载状态(Hql)
	@Override
	public void editDownloadStatus(GXDbaEverydayStatistics user) {
		this.update(user);
	}

	//发包方成单报表第三层加总
	@Override
	public List getSumThreeLetContract(GXDbaEverydayStatistics user) {
		ArrayList<Object> alist=new ArrayList<Object>();
		StringBuffer sql=new StringBuffer("select a.pid,a.demandid,sum(a.releasenum) from (");
		sql.append(" select  g.pid,g.demandid,g.releasenum from gx_dba_everyday_statistics g where 1=1");
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and g.pid=?");
			alist.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			sql.append(" and g.demandid=?");
			alist.add(user.getDemandid());
		}
		if(!StringUtil.isNull(user.getServicetype())){
			sql.append(" and g.servicetype=?");
			alist.add(user.getServicetype());
		}
		sql.append(" order by g.createtime desc ");
		sql.append(") a ");
		List list=this.getListBySQL(sql.toString(), alist);
		return list;
	}
	//发包方第三层获取上一层（需求名,发布量,目标城市）
	@Override
    public List selectTowLetContract(GXDbaEverydayStatistics user){
		ArrayList<Object> alist=new ArrayList<Object>();
		StringBuffer sql=new StringBuffer("select p.ordername,p.targecity,IFNULL(p.releasenum, 0)");
		sql.append(" from gx_dba_everyday_statistics h LEFT JOIN  ");
		sql.append("(");
		sql.append(" select pcdid demandid,releasenum,servicetype category3,ordername,'' targecity,'' citydesc from h_f_datafiltering");
		sql.append(" UNION ALL");
		sql.append(" select demandid,releasenum,category3,ordername,targecity,citydesc from h_f_demand");
		sql.append(") p");
		sql.append(" on h.demandid=p.demandid");
		sql.append(" LEFT JOIN");
		sql.append(" (select  IFNULL(sum(c.auctionnum),0) auctionnumtol,c.demandid from h_j_order_demand c where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and c.pid =?");
			alist.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			sql.append(" and c.demandid=?");
			alist.add(user.getDemandid());
		}
		sql.append(" GROUP BY c.demandid) d on h.demandid=d.demandid");
		sql.append(" where 1=1 ");
		if(!StringUtil.isNull(user.getPid())){
			sql.append(" and h.pid =?");
			alist.add(user.getPid());
		}
		if(!StringUtil.isNull(user.getDemandid())){
			sql.append(" and h.demandid=?");
			alist.add(user.getDemandid());
		}
		sql.append("GROUP BY h.demandid");
		List<Object> list=this.getListBySQL(sql.toString(), alist);
		return list;
    }
	@Override
	public List<Map> getCensusDownload(String jfuid) {
		String sql = "SELECT (ifnull(count(stid),0) - sum(ifnull(isdownloaded,0))) as count,servicetype FROM mso_server.gx_dba_everyday_statistics where jfuid = ? group by servicetype";
		Query query = this.getSession().createSQLQuery(sql);
			System.out.println(Transformers.ALIAS_TO_ENTITY_MAP);
		List<Map> list = query.setParameter(0, jfuid).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
	/*	for (Map map : list) {
			System.out.println(map);
		} */
		return list;
	}
}
