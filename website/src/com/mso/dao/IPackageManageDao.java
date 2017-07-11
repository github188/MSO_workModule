package com.mso.dao;

import com.mso.model.GXPackageManage;
import com.mso.utils.PageResults;



/**
 * 用户DAO
 */
public interface IPackageManageDao {
 
//	public void addPackageManage(GXPackageManage user) ;
	
	public PageResults<Object> getPackageManageBy(GXPackageManage user) ;
}
 
