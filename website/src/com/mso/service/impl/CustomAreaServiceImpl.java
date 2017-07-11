package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.CustomAreaDao;
import com.mso.model.CustomArea;
import com.mso.service.CustomAreaService;

@Service("customareaservice")@Transactional
public class CustomAreaServiceImpl implements CustomAreaService{
    
	@Autowired
	CustomAreaDao customareaDao;
	
	public CustomAreaDao getCustomareaDao() {
		return customareaDao;
	}

	public void setCustomareaDao(CustomAreaDao customareaDao) {
		this.customareaDao = customareaDao;
	}
    
	
	@Override
	public List getCustomArea(CustomArea cuar) {
		return customareaDao.getCustomArea(cuar);	
	}

	@Override
	public void addCustomArea(CustomArea cuar) {
		customareaDao.addCustomArea(cuar);
		
	}

	@Override
	public void deleteCustomArea(CustomArea cuar) {
		customareaDao.deleteCustomArea(cuar);
		
	}

	@Override
	public void updateCustomAreaAreaRemark(CustomArea cuar) {
		customareaDao.updateCustomAreaAreaRemark(cuar);
		
	}

	@Override
	public CustomArea getCustomAreaModel(CustomArea cuar) {
		return customareaDao.getCustomAreaModel(cuar);
	}
}
