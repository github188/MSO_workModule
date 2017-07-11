package com.mso.service;

import java.util.List;

import com.mso.model.BaseLabel;
/**
 * 地址  (国家大范围的省，市....)业务接口
 * @author harry
 *2016-09-11
 */
public interface BaseLabelService {
	/**
	 * 查询行业信息
	 * @param cuar
	 * @return
	 */
	public List getBaseLabel(BaseLabel  cuar);
	/**
	 * 新增标签
	 * @param cuar
	 */
	public void addBaseLabel(BaseLabel  cuar);
	/**
	 * 删除标签
	 */
	public void deleteBaseLabel(BaseLabel  cuar);
	/**
	 * 修改标签
	 */
	public void	 updateBaseLabel(BaseLabel  cuar);
	
}
