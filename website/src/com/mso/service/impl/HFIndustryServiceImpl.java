package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IHFIndustryDao;
import com.mso.model.HFIndustry;
import com.mso.service.HFIndustryService;


@Service("industryService")@Transactional
public class HFIndustryServiceImpl implements HFIndustryService{
	
	@Autowired
	IHFIndustryDao industryDao; 

	@Override
	public List getHFIndustry(HFIndustry cuar) {
		return industryDao.getHFIndustry(cuar);
	}
	

	@Override
	public void addHFIndustry(HFIndustry cuar) {
		 industryDao.addHFIndustry(cuar);
	}

	@Override
	public void deleteHFIndustry(HFIndustry cuar) {
		 industryDao.deleteHFIndustry(cuar);
	}

	@Override
	public void updateHFIndustry(HFIndustry cuar) {
		 industryDao.updateHFIndustry(cuar);
	}
}


