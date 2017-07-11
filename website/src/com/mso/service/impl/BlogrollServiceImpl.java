/**
 * 
 */
package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.BlogrollDao;
import com.mso.model.Blogroll;
import com.mso.service.BlogrollService;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
@Repository("blogrollService")@Transactional
public class BlogrollServiceImpl implements BlogrollService{
	
	@Autowired
	BlogrollDao blogrollDao;

	@Override
	public List<Blogroll> getBlogroll(Blogroll blogroll) {
		return blogrollDao.getBlogroll(blogroll);
	}

}
