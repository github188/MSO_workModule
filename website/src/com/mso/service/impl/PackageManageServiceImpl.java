package com.mso.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IPackageManageDao;
import com.mso.model.GXPackageManage;
import com.mso.service.IPackageManageService;
import com.mso.utils.PageResults;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("packageManageService")@Transactional
public class PackageManageServiceImpl implements IPackageManageService{
	
	@Autowired
	IPackageManageDao packageManageDao;
	
	
	@Override
	public PageResults<Object> getPackageManageBy(GXPackageManage user){
		PageResults palist=packageManageDao.getPackageManageBy(user);
		return palist;
	}
	
}
