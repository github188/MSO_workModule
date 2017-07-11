package com.mso.dao;

import java.util.List;

import com.mso.model.BaseLabel;

/**
 * 标签 操作dao
 */
public interface IBaseLabelDao {
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
