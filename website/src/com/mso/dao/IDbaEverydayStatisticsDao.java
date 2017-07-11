package com.mso.dao;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.utils.PageResults;



/**
 * 用户DAO
 */
public interface IDbaEverydayStatisticsDao {
 
	public PageResults<Object> getEverydayStatistics(GXDbaEverydayStatistics user);
	public GXDbaEverydayStatistics getEverydayStatisticsSum(GXDbaEverydayStatistics user);
	/**
	 * 递交量统计(总量)
	 * @param gxdbevery
	 * @return  Long
	 */
	public Long getreleasenum(GXDbaEverydayStatistics gxdbevery);
}
 
