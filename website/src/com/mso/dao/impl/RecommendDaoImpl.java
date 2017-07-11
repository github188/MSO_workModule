/**
 * 
 */
package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;
import com.mso.dao.RecommendDao;
import com.mso.model.RecommendArticle;
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
@Repository("recommendDao")
public class RecommendDaoImpl extends BaseDao<RecommendArticle, Serializable> implements RecommendDao{

	
	@Override
	public List getRecommend(RecommendArticle ra) {
		
		StringBuffer hql = new StringBuffer(" from RecommendArticle where 1=1"); 
		ArrayList<Object> list = new ArrayList<Object>(); 
		if(!StringUtil.isNull(ra.getRecommendid())){
			hql.append(" and recommendid=?");
			list.add(ra.getRecommendid()); 
		}
		if(!StringUtil.isNull(ra.getTitle())){
			hql.append(" and title=?");
			list.add(ra.getTitle());
		}
		if(!StringUtil.isNull(ra.getType())){
			hql.append(" and type=?");
			list.add(ra.getType());
		}
		if(null!=ra.getReading()){
			hql.append(" and reading =?");
			list.add(ra.getReading());
		}
		if(null!=ra.getRank()){
			hql.append(" and rank=?");
			list.add(ra.getRank());
		}
		if(!StringUtil.isNull(ra.getCreatetime())){
			hql.append(" and createtime=?");
			list.add(ra.getCreatetime());
		}
		if(!StringUtil.isNull(ra.getUpdatetime())){
			hql.append(" and updatetime=?");
			list.add(ra.getUpdatetime());
		}
		if(!StringUtil.isNull(ra.getUrl())){
			hql.append(" and url=?");
			list.add(ra.getUrl());
		}
		if(!StringUtil.isNull(ra.getThumbnail())){
			hql.append(" and thumbnail=?");
			list.add(ra.getThumbnail());
		}
		hql.append(" ORDER BY rank desc ");
		
		List<RecommendArticle> rlist = this.getListByHQL(hql.toString(),list);
		return rlist;
	}


	
	

}
