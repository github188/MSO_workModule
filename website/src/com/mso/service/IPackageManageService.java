package com.mso.service;

import com.mso.model.GXPackageManage;
import com.mso.utils.PageResults;





/**
 * 通用dao，包括基本的CRUD方法
 */

public interface IPackageManageService {
	
//	public void addPackageManage(GXPackageManage user) ;
	
	public PageResults<Object> getPackageManageBy(GXPackageManage user);
	
}

 
