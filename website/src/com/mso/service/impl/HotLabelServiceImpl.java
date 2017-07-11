/**
 * 
 */
package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.HotLabelDao;
import com.mso.model.HotLabel;
import com.mso.service.HotLabelService;


@Service("hotLabelService")@Transactional
public class HotLabelServiceImpl implements HotLabelService{
	
	
	 @Autowired
	 HotLabelDao hotLabelDao;

	 @Override
	 public List<HotLabel> getHotLabel(HotLabel label) {

		return hotLabelDao.getHotLabel(label);
		
	 }
	 
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
