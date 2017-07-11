package com.mso.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IVisitRecordDao;
import com.mso.model.VisitRecord;
import com.mso.service.IVisitRecordService;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("visitRecordService")@Transactional
public class VisitRecordServiceImpl implements IVisitRecordService{
	
	@Autowired
	IVisitRecordDao visitRecordDao;
	
	@Override
	public VisitRecord addVisitRecord(VisitRecord user){
		visitRecordDao.addVisitRecord(user);
        return user;
	}
	@Override
	public void deleteVisitRecord(VisitRecord user){
		visitRecordDao.deleteVisitRecord(user);
	}
	
	@Override
	public void updateVisitRecord(VisitRecord user){
		visitRecordDao.updateVisitRecord(user);
	}
	/*
	 * 查询需求明细信息
	 */
	@Override
	public VisitRecord getVisitRecordById(VisitRecord user){
		return visitRecordDao.getVisitRecordById(user);
	}
	
}
