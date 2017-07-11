package com.mso.service;

import com.mso.model.VisitRecord;




/**
 * 通用dao，包括基本的CRUD方法
 */

public interface IVisitRecordService {
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

 
