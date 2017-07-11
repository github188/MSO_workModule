package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.mBaseRegionDao;
import com.mso.model.BaseRegion;
import com.mso.service.mBaseRegionService;
/**
 * 地址  (国家大范围的省，市....)业务实现类
 * @author harry
 *2016-09-11
 */
@Service("mbaseregionservice")@Transactional
public class mBaseRegionServiceImpl implements mBaseRegionService{
	
	@Autowired
	mBaseRegionDao mbaseReqiondao;

	@Override
	public List getBaseRegionByPro(BaseRegion base) {
		return mbaseReqiondao.getBaseRegionByPro(base);
	} 
}
	

