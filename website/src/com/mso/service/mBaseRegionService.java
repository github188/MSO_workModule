package com.mso.service;

import java.util.List;

import com.mso.model.BaseRegion;

/**
 * 地址  (国家大范围的省，市....)业务接口
 * @author harry
 *2016-09-11
 */
public interface mBaseRegionService {
    /**
     * 根据属性查询  BaseRegion
     * @return  List
     */
	public List getBaseRegionByPro(BaseRegion  base) ;
	
}
