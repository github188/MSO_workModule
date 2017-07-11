/**
 * 
 */
package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.RecommendDao;
import com.mso.model.RecommendArticle;
import com.mso.service.RecommendService;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
@Service("recommendService")@Transactional
public class RecommendServiceImpl implements RecommendService{
	
	  @Autowired
	  RecommendDao recommendDao;

	  @Override
	  public List<RecommendArticle> listRecommArticle(RecommendArticle ra) {
		 
		  return recommendDao.getRecommend(ra);
		  
	  }
	  
	  
	  
	

}
