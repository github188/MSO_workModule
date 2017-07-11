package com.mso.service;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.res.DemandReportHomeRes;
import com.mso.res.HFDemandRes;




/**
 * 通用dao，包括基本的CRUD方法
 */

public interface IDbaEverydayStatisticsService {
	
	public HFDemandRes getEverydayStatistics(GXDbaEverydayStatistics user);
	public DemandReportHomeRes getEveryday(GXDbaEverydayStatistics user);
	
	/**
	 * 递交量统计(总量)
	 * @param gxdbevery
	 * @return
	 */
	public Long getreleasenum(GXDbaEverydayStatistics gxdbevery);
}

 
