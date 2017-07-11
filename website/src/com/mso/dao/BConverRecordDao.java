package com.mso.dao;

import com.mso.model.BConverRecord;



public interface BConverRecordDao {
	/*
	 * 新增来源转换
	 */
	public BConverRecord addVisitRecord(BConverRecord user) ;
	/*
	 * 删除来源转换
	 */
	public void deleteBConverRecord(BConverRecord user);
	/*
	 * 修改来源转换
	 */
	public void updateBConverRecord(BConverRecord user);
	public BConverRecord getBConverRecordById(BConverRecord user);
}
 
