package com.mso.dao;

import com.mso.model.VisitRecord;



public interface IVisitRecordDao {
	/*
	 * 新增需求
	 */
	public VisitRecord addVisitRecord(VisitRecord user) ;
	/*
	 * 删除草稿箱需求
	 */
	public void deleteVisitRecord(VisitRecord user);
	/*
	 * 修改草稿箱需求
	 */
	public void updateVisitRecord(VisitRecord user);
	public VisitRecord getVisitRecordById(VisitRecord user);
}
 
