package com.mso.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IHFdemandDao;
import com.mso.model.HFDemand;
import com.mso.service.HFdemandService;
import com.mso.utils.PageResults;
@Service("hfdemandservice")@Transactional
public class HFdemandServiceImpl implements HFdemandService{
	@Autowired
	public IHFdemandDao hfdemanddao;

	public IHFdemandDao getHfdemanddao() {
		return hfdemanddao;
	}

	public void setHfdemanddao(IHFdemandDao hfdemanddao) {
		this.hfdemanddao = hfdemanddao;
	}


	/*
     * 查询目标人群（发布需求-潜在客户中-套餐中的）
     * pid 需求包ID
     */
	@Override
	public PageResults<Object> getHFdemandpid(HFDemand user) {
		return hfdemanddao.getHFdemandpid(user);
	}

}
