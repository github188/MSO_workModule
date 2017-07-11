package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.HomePageDao;
import com.mso.model.IndustryDynamics;
import com.mso.model.PlatformDynamics;
import com.mso.service.HomePageService;
@Service("homepageservice")@Transactional
public class HomePageServiceImpl implements HomePageService{
	@Autowired
	HomePageDao homepagedao;
	
	public HomePageDao getHomepagedao() {
		return homepagedao;
	}

	public void setHomepagedao(HomePageDao homepagedao) {
		this.homepagedao = homepagedao;
	}
    //产品公告
	@Override
	public List<Object> getNotice() {
		return homepagedao.getNotice();
	}
	
    //热门需求
	@Override
	public List<Object> getHotDemand() {
		return homepagedao.getHotDemand();
	}
	//本年度需求发布量
	@Override
	public List<Object> getStatistical() {
		return homepagedao.getStatistical();
	}
	
	
	
    //行业动态(左边)
	@Override
	public List<Object> getIndustryDynamics(IndustryDynamics user) {
		return homepagedao.getIndustryDynamics(user);
	}
    //行业动态(右边)
	@Override
	public List<Object> getplatform_dynamics(PlatformDynamics user) {
		return homepagedao.getplatform_dynamics(user);
	}
    
}
