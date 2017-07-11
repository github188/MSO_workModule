package com.mso.service;

import com.mso.model.BConverRecord;




/**
 * 通用dao，包括基本的CRUD方法
 */

public interface BConverRecordService {
	/*
	 * 新增需求
	 */
	public BConverRecord addBConverRecord(BConverRecord user) ;
	/*
	 * 删除草稿箱需求
	 */
	public void deleteBConverRecord(BConverRecord user);
	/*
	 * 修改草稿箱需求
	 */
	public void updateBConverRecord(BConverRecord user);
	public BConverRecord getBConverRecordById(BConverRecord user);
}

 
