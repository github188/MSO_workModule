/**
 * 
 */
package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.HotLabelDao;
import com.mso.model.HotLabel;
import com.mso.utils.StringUtil;

@Repository("hotLabelDao")
public class HotLabelDaoImpl extends BaseDao<HotLabel, Serializable> implements HotLabelDao {

	@Override
	public List getHotLabel(HotLabel label){
		
		StringBuffer hql = new StringBuffer(" from HotLabel where 1=1");
		
		ArrayList<Object> list = new ArrayList<Object>();
		if(!StringUtil.isNull(label.getMklabelid())){
			hql.append(" and mklabelid = ?");
			list.add(label.getMklabelid());
		}
		if(!StringUtil.isNull(label.getName())){
			hql.append(" and name = ?");
			list.add(label.getName());
		}
		if(null!=label.getRank()){
			hql.append(" and rank = ?");
			list.add(label.getRank());
		}
		if(!StringUtil.isNull(label.getCreatetime())){
			hql.append(" and createtime=?");
			list.add(label.getCreatetime());
		}
		if(!StringUtil.isNull(label.getUpdatetime())){
			hql.append(" and updatetime=?");
			list.add(label.getUpdatetime());
		}
		if(null!=label.getIfshow()){
			hql.append(" and ifshow=?");
			list.add(label.getIfshow());
		}
		hql.append(" ORDER BY rank desc");
		
		List<HotLabel> hlist = this.getListByHQL(hql.toString(), list);
		return hlist;
		
		
	}

}
