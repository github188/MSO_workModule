package com.mso.service;

import java.util.List;

import com.mso.model.BaseRegion;
/**
 * 地址  (国家大范围的省，市....)业务接口
 * @author harry
 *2016-09-11
 */
public interface BaseRegionService {
	  /**
     * 查询所有的regionName字段的值
     * @return
     */
	public List getBaseRegion(BaseRegion  base) ;
	/**
	 * 添加regionPinyyin,regionPy,firstWord字段的值
	 * @return
	 */
	public void updBaseRegion(BaseRegion basreq);
	/**
	 * 截取字符串
	 * @param base
	 */
	public void cutOutString(BaseRegion base);
	
	/**
	 * 修改省事级别1.地级城市   2.其他
	 * @param basreq
	 */
	public void updBaseRegion2(BaseRegion basreq);
	
}
