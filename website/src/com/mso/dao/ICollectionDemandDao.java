package com.mso.dao;

import com.mso.model.HFDemand;
import com.mso.model.HJCollectionDemand;
import com.mso.utils.PageResults;



public interface ICollectionDemandDao {
 
	public void addCollectionDemand(HJCollectionDemand user) ;
	
	public HJCollectionDemand getCollectionDemandBy(HJCollectionDemand user) ;
	
	
	public PageResults<Object> getCollections(HFDemand user);
	
}
 
