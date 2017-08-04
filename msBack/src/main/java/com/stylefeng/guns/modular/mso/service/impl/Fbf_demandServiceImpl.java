package com.stylefeng.guns.modular.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.stylefeng.guns.modular.mso.mapper.Fbf_demandMapper;
import com.stylefeng.guns.modular.mso.model.Fbf_demand;
import com.stylefeng.guns.modular.mso.service.IFbf_demandService;

/**
 * 需求包Dao
 *
 * @author fengshuonan
 * @Date 2017-06-14 13:40:46
 */
@Service
@Transactional
public class Fbf_demandServiceImpl implements IFbf_demandService {

	@Autowired
	private Fbf_demandMapper fbf_demandMapper;
	
	@Override
	public void insertFbf_demand(Fbf_demand d) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List Fbf_demandList(Fbf_demand d) {
		return fbf_demandMapper.Fbf_demandList(d);
	}

	@Override
	public void updateFbf_demand(Fbf_demand d) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Fbf_demand selectById(String id) {
		// TODO Auto-generated method stub
		return null;
	}


}
