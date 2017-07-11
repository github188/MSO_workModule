package com.mso.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.BConverRecordDao;
import com.mso.model.BConverRecord;
import com.mso.service.BConverRecordService;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("bconverRecordService")@Transactional
public class BConverRecordServiceImpl implements BConverRecordService{
	
	@Autowired
	BConverRecordDao bconverRecordDao;
	
	@Override
	public BConverRecord addBConverRecord(BConverRecord user){
		bconverRecordDao.addVisitRecord(user);
        return user;
	}
	@Override
	public void deleteBConverRecord(BConverRecord user){
		bconverRecordDao.deleteBConverRecord(user);
	}
	
	@Override
	public void updateBConverRecord(BConverRecord user){
		bconverRecordDao.updateBConverRecord(user);
	}
	@Override
	public BConverRecord getBConverRecordById(BConverRecord user){
		return bconverRecordDao.getBConverRecordById(user);
	}
	
}
