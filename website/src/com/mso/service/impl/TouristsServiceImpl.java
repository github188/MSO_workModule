package com.mso.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.ITouristsDao;
import com.mso.model.Tourists;
import com.mso.service.ITouristsService;


@Service("touristsService")@Transactional
public class TouristsServiceImpl implements ITouristsService{

	@Autowired
	ITouristsDao touristsDao;
	
	@Override
	public void addTourists(Tourists user) {
		touristsDao.addTourists(user);
	}


}
