package com.mso.dao;

import java.util.List;

import com.mso.model.IndustryDynamics;
import com.mso.model.PlatformDynamics;

/**
 * 官方首页  
 * @author harry
 *
 */
public interface HomePageDao {
	/**
	 * 首页 产品公告
	 * @return
	 */
	public List<Object> getNotice();
	
	/**
	 * 首页 热门需求
	 * @return
	 */
	public List<Object> getHotDemand();
	
	
	/**
	 * 本年度需求发布量
	 */
	public List<Object> getStatistical();
	/**
	 * 行业动态 (左边)
	 * @param user
	 * @return
	 */
    public List<Object> getIndustryDynamics(IndustryDynamics user);
    /**
     * 行业动态（右边）
     * @param user
     * @return
     */
    public List<Object> getplatform_dynamics(PlatformDynamics user);
	
}
