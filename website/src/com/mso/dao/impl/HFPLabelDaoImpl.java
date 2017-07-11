package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.HFPLabelDao;
import com.mso.model.HFPLabel;
import com.mso.utils.StringUtil;
/**
 * 需求标签中间操作Impl
 */
@Repository("plabelDao")
public class HFPLabelDaoImpl extends BaseDao<Object, Serializable> implements HFPLabelDao{

	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List getPLabel(HFPLabel cuar) {
		StringBuffer hql=new StringBuffer(" from HFPLabel where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(!StringUtil.isNull(cuar.getLabelId())){
			hql.append(" and labelId=? ");
			list.add(cuar.getLabelId());
		}
		if(!StringUtil.isNull(cuar.getPid())){
			hql.append(" and pid=?");
			list.add(cuar.getPid());
		}
		List<Object> calist=this.getListByHQL(hql.toString(), list);
		return calist;
	}
	
	
	
	@Override
	public List getSelectPLabel(HFPLabel cuar) {
		ArrayList<Object> listpar = new ArrayList<Object>();
		StringBuffer sql = new StringBuffer(" SELECT pl.dlid,pl.pid,bl.label_name,bl.label_attribute,bl.label_price,pl.label_id FROM h_f_p_label pl  ");
		sql.append(" INNER JOIN base_label bl on pl.label_id=bl.label_id ");
		sql.append(" where bl.label_type=2 and bl.label_state=1 ");//收费标签 label_type=2   label_state=1  状态启用
		
	 	if(!StringUtil.isNull(cuar.getPid())){
		 	sql.append(" and pl.pid= ? ");
			listpar.add(cuar.getPid());
		}
		List<Object> calist =this.getListBySQL(sql.toString(), listpar);
		return calist;
	}

	
	@Override
	public void addPLabel(HFPLabel cuar) {
		this.save(cuar);
	}

	@Override
	public void deletePLabel(HFPLabel cuar) {
		this.delete(cuar);	
	}

	@Override
	public void updatePLabel(HFPLabel cuar) {
		this.update(cuar);
	}
}
