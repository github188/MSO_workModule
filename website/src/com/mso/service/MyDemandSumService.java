/**
 * 
 */
package com.mso.service;

import java.util.List;

import com.mso.model.DemandSum;


public interface MyDemandSumService {
	
	  public DemandSum getMyDemandSum(String jfuid, Integer year, Integer month);
	  
	  public List getMyDemandStatistics(String pid);

}


