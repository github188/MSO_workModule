package com.mso.service;

import com.mso.model.HFDemand;
import com.mso.model.HJCollectionDemand;
import com.mso.res.HFDemandRes;




/**
 * 通用dao，包括基本的CRUD方法
 */

public interface ICollectionDemandService {
	
	public void addCollectionDemand(HJCollectionDemand user) ;
	public HFDemandRes getOrderDemands(HFDemand user);
}

 
