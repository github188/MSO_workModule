package com.mso.dao;

import java.util.List;

import com.mso.model.GXPackageManage;
/**
 * 发包方需求-销售线索挖掘-套餐
 * @author harry
 *
 */
public interface IGxPackageManageDao {
    /**
     * 根据条件查询套餐
     * @param gxpm
     * @return 
     */
	public List<Object> getGxPackageManage(GXPackageManage gxpm);
	/**
	 * 根据条件查询对象
	 * @param gxpm
	 * @return
	 */
	public GXPackageManage getGxPackageManagePid(GXPackageManage gxpm);
	
}
