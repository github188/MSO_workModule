package com.mso.service;

import com.mso.model.HFDemand;
import com.mso.utils.PageResults;

public interface HFdemandService {
	/*
     * 查询目标人群（发布需求-潜在客户中-套餐中的）
     * pid 需求包ID
     */
	public PageResults<Object> getHFdemandpid(HFDemand user);
}
