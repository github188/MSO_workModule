/**
 * 
 */
package com.mso.dao;

import java.util.List;

import com.mso.model.DemandSum;


public interface MyDemandSumDao {
	
		public DemandSum getMyDemandSum(String jfuid, Integer year, Integer month);
	  
		public List<Object> getMyDemandStatistics(String pid);
}
