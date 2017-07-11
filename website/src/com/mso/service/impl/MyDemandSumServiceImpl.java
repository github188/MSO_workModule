/**
 * 
 */
package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.MyDemandSumDao;
import com.mso.model.DemandSum;
import com.mso.service.MyDemandSumService;

@Service("myDemandSumService")@Transactional
public class MyDemandSumServiceImpl implements MyDemandSumService{
	
	@Autowired
	MyDemandSumDao myDemandSumDao;
	
	/*2.4.0 发包方-我的获客-获客完成量&获客费用 (适用于查询"每年"/"每月"/"全部")*/
	@Override
	public DemandSum getMyDemandSum(String jfuid, Integer year, Integer month) {

		 return myDemandSumDao.getMyDemandSum(jfuid, year, month);
		 
	}
	
	/*2.4.0发包方-我的需求统计-筛选需求 显示此需求lifecycle对应的"获客费用","需求竞拍及完成情况 */
	@Override
	public List getMyDemandStatistics(String pid) {
		
		return myDemandSumDao.getMyDemandStatistics(pid);
	}

}
