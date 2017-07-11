package com.mso.dao.impl;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;
import net.sf.json.JSONObject;

import com.mso.dao.HFUserDetailDao;
import com.mso.model.HFUserDetail;
import com.mso.utils.StringUtil;



/**
 * 用户DAO实现类
 */
@Repository("hfUserDetailDao")
public class HFUserDetailDaoImpl extends BaseDao<Object, Serializable> implements HFUserDetailDao  {

	@Autowired
	private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }
    
	/*
	 * 新增 Event HFUserDetail對象
	 **/
	@Override
	public void addHfUser(HFUserDetail user){
		sessionFactory.getCurrentSession().save(user);
	}
	
	/*
	 * 修改Event HFUserDetail對象
	 **/
	@Override
	public void editHfUser(HFUserDetail user){
		sessionFactory.getCurrentSession().update(user);
	}

	public HFUserDetail getUserDetailByFid(String jfuid) {
//		String hql = "from HFUserDetail u where u.jfuid = ? "; //and u.jfutype = ?
//        Query query = sessionFactory.getCurrentSession().createQuery(hql);
// 	 	query.setParameter(0, jfuid);
//        List<HFUserDetail> users = query.list();
//		if (users!= null && users.size() > 0) {
//			return users.get(0);
//		}
//		return null;
		String sql = "select	t.jfuid,t.jfutype,t.pid,t.jfuname,t.jfupassword,t.jfustate,t.jfudisable,t.disableremark,t.jfumobilephone,t.jfuinvitationcode,t.approveremark,t.createtime,t.updatetime,t.distributionstate,t.invitationcode,"
				+"bd.name, bd.realname, bd.headurl,bd.compemail,bd.brandname,bd.compimg,bd.compwebsite,bd.trusteeship,bd.communication,bd.qq,bd.weixin,"
				+"cd.compname,cd.licensecode,cd.compind,cd.compaddr,cd.corporation,cd.fulllicense,cd.complicense,cd.comptaxcer,cd.comporgcode,cd.compfullname,"
				+"uu.isreview,uu.bd_USER_ID from h_jf_user t left join fbf_basic_detail bd on t.jfuid = bd.id left join fbf_comp_detail cd "
				+"on t.jfuid = cd.id left join user_jf_user uu on t.jfuid = uu.jfuid where t.jfuid LIKE ? limit 1";	
		Query query = this.getSession().createSQLQuery(sql).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP);
		query.setString(0, jfuid);
		Map map = (Map)query.uniqueResult();
		//System.out.println(map);
		HFUserDetail hfUserDetail = new HFUserDetail();
		JSONObject json = JSONObject.fromObject(map);
		System.out.println(json);
		//hfUserDetail  = (HFUserDetail) json.toBean(json, HFUserDetail.class);
		hfUserDetail.setJfuid((String) map.get("jfuid"));
		hfUserDetail.setJfutype((String) map.get("jfutype"));
		hfUserDetail.setPid((String) map.get("pid"));
		hfUserDetail.setJfuname((String) map.get("jfuname"));
		hfUserDetail.setJfustate( (Integer) map.get("jfustate"));
		hfUserDetail.setInvitationcode((String)map.get("invitationcode"));
		hfUserDetail.setHeadurls((String)map.get("headurl"));
		String compemail = (String)map.get("compemail");
		if(StringUtils.isNotBlank(compemail)){
			hfUserDetail.setCompemail(compemail);
		}else{
			hfUserDetail.setCompemail("");
		}
		String compname = (String)map.get("compname");
		if(StringUtils.isNotBlank(compname)){
			hfUserDetail.setCompname(compname);
		}else{
			hfUserDetail.setCompname("");
		}
		hfUserDetail.setRealname((String)map.get("realname"));
		
		hfUserDetail.setTrusteeship((Integer) map.get("trusteeship"));
		hfUserDetail.setBrandname((String)map.get("brandname"));
		
		//return StringUtil.toInteger(map.get("count"));
		return hfUserDetail;
	}
	
}
