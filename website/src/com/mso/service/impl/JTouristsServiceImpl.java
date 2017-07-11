package com.mso.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IJTouristsDao;
import com.mso.model.JTourists;
import com.mso.service.IJTouristsService;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("jtouristsService")@Transactional
public class JTouristsServiceImpl implements IJTouristsService{

	@Autowired
	IJTouristsDao jtouristsDao;
	
	@Override@Transactional
	public void addJTourists(JTourists user) {
		jtouristsDao.addJTourists(user);
	}
	@Override
	public void delJTourists(Integer id)  {
		jtouristsDao.delJTourists(id);
	}

	@Override
	public void updateJTourists(JTourists user)  {
		jtouristsDao.updateJTourists(user);
	}
	@Override
	public List<JTourists> getJTourists(Integer id)   {
		return jtouristsDao.getJTourists(id);
	}
	@Override@Transactional(readOnly=true)
	public List<JTourists> getJTourists() {
		return null;
	}


}
