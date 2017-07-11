package com.mso.dao.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import BaseDao.BaseDao;

import com.mso.dao.BnewsDao;
import com.mso.model.BNews;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;

/**
 * 新闻/文章 操作Impl
 */
@Repository("bnewsDao")
public class BnewsDaoImpl extends BaseDao<Object, Serializable> implements BnewsDao{

	@Autowired
	private SessionFactory sessionFactory;

	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public List getBnews(BNews cuar) {
		StringBuffer hql=new StringBuffer(" from BNews where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(!StringUtil.isNull(cuar.getTitle())){
			hql.append(" and title=?");
			list.add(cuar.getTitle());
		}
		if(!StringUtil.isNull(cuar.getTitle_html())){
			hql.append(" and title_html=?");
			list.add(cuar.getTitle_html());
		}
		if(!StringUtil.isNull(cuar.getAuthor())){
			hql.append(" and author=?");
			list.add(cuar.getAuthor());
		}
		if(!StringUtil.isNull(cuar.getKeywords())){
			hql.append(" and keywords=?");
			list.add(cuar.getKeywords());
		}
		if(!StringUtil.isNull(cuar.getThumbnail())){
			hql.append(" and thumbnail=?");
			list.add(cuar.getThumbnail());
		}
		if(null!=cuar.getState()){
			hql.append(" and state=?");
			list.add(cuar.getState());
		}
		if(null!=cuar.getIsshare()){
			hql.append(" and isshare=?");
			list.add(cuar.getIsshare());
		}
		List<Object> calist=this.getListByHQL(hql.toString(), list);
		return calist;
	}
	
	
	@Override
	public PageResults<Object> getBnewsPage(BNews cuar) {
		PageResults<Object>  ts=new PageResults<Object>();
		StringBuffer hql=new StringBuffer(" from BNews where 1=1 ");
		ArrayList<Object> list=new ArrayList<Object>();
		if(!StringUtil.isNull(cuar.getNewsid())){
			hql.append(" and newsid like '%"+cuar.getNewsid()+"%' ");
		}
		if(!StringUtil.isNull(cuar.getTitle())){
			hql.append(" and title like '%"+cuar.getTitle()+"%' ");
		}
		
		if(null!=cuar.getState()){
			if(cuar.getState()<10){
				hql.append(" and state=?");
				list.add(cuar.getState());
			}else{
				if(12==cuar.getState()){
					hql.append(" and state in(1,2)");
				}
			}
		}
		if(!StringUtil.isNull(cuar.getAuthor())){
			hql.append(" and author like '%"+cuar.getAuthor()+"%' ");
		}
		if(!StringUtil.isNull(cuar.getBegincreatetime())){
			hql.append(" and DATE_FORMAT(createtime,'%Y-%m-%d')>=?");
			list.add(cuar.getBegincreatetime());
		}
		if(!StringUtil.isNull(cuar.getEndcreatetime())){
			hql.append(" and DATE_FORMAT(createtime,'%Y-%m-%d')<=?");
			list.add(cuar.getEndcreatetime());
		}
		
		
		if(!StringUtil.isNull(cuar.getBeginbegintime())){
			hql.append(" and DATE_FORMAT(begintime,'%Y-%m-%d')>=?");
			list.add(cuar.getBeginbegintime());
		}
		if(!StringUtil.isNull(cuar.getEndbegintime())){
			hql.append(" and DATE_FORMAT(begintime,'%Y-%m-%d')<=?");
			list.add(cuar.getEndbegintime());
		}
		
        
		if(!StringUtil.isNull(cuar.getTitle_html())){
			hql.append(" and title_html like '%"+cuar.getTitle_html()+"%' ");
		}
		if(!StringUtil.isNull(cuar.getKeywords())){
			hql.append(" and keywords=?");
			list.add(cuar.getKeywords());
		}
		if(!StringUtil.isNull(cuar.getThumbnail())){
			hql.append(" and thumbnail=?");
			list.add(cuar.getThumbnail());
		}
		if(null!=cuar.getIsshare()){
			hql.append(" and isshare=?");
			list.add(cuar.getIsshare());
		}
		if(!StringUtil.isNull(cuar.getOrderby())){
			
			if("reading".equals(cuar.getOrderby())){
				hql.append(" ORDER BY reading ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}
			else if ("newsid".equals(cuar.getOrderby())){
				hql.append(" ORDER BY newsid ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}
			else if("title".equals(cuar.getOrderby())){
				hql.append(" ORDER BY title ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}
			else if("author".equals(cuar.getOrderby())){
				hql.append(" ORDER BY author ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}
			else if("keywords".equals(cuar.getOrderby())){
				hql.append(" ORDER BY keywords ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}
			else if("state".equals(cuar.getOrderby())){
				hql.append(" ORDER BY state ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}
			else if("createtime".equals(cuar.getOrderby())){
				hql.append(" ORDER BY createtime ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}
			else if("begintime".equals(cuar.getOrderby())){
				hql.append(" ORDER BY begintime ");
				if(!StringUtil.isNull(cuar.getSort())){
					if("ASC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" ASC ");
					}
					if("DESC".equals(cuar.getSort().trim().toUpperCase())){
						hql.append(" DESC ");
					}
				}
			}else{
				
			}
			

			
		}
		ts=this.findPageByFetchedHql(hql.toString(),null,cuar.getCurrentPage(), cuar.getPageSize(), list);
		return ts;
	}
	
	
	
	@Override
	public BNews getBnewsById(BNews cuar) {
		StringBuffer hql=new StringBuffer(" from BNews where 1=1");
		ArrayList<Object> list=new ArrayList<Object>();
		if(!StringUtil.isNull(cuar.getNewsid())){
			hql.append(" and newsid=? ");
			list.add(cuar.getNewsid());
		}
		List<Object> calist=this.getListByHQL(hql.toString(), list);
		BNews news=new BNews();
		if(null!=calist){
			news=(BNews) calist.get(0);
		}
		return news;
	}
	
	

	@Override
	public void addBnews(BNews cuar) {
		this.save(cuar);
	}

	@Override
	public void deleteBnews(BNews cuar) {
		this.delete(cuar);	
	}

	@Override
	public void updateBnews(BNews cuar) {
		this.update(cuar);
	}
	
}
