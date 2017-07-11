package com.mso.service;

import java.util.List;

import com.mso.model.HFPLabel;

public interface HFPLabelService {
	/**
	 * 查询需求标签中间表信息
	 * @param cuar
	 * @return
	 */
	public List getPLabel(HFPLabel  cuar);
	
	/**
	 * 查询某个需求包下选中的标签
	 * @param cuar
	 * @return
	 */
	public List getSelectPLabel(HFPLabel cuar) ;
	
	
	
	/**
	 * 新增需求标签中间表
	 * @param cuar
	 */
	public void addPLabel(HFPLabel  cuar);
	/**
	 * 删除需求标签中间表
	 */
	public void deletePLabel(HFPLabel  cuar);
	/**
	 * 修改需求标签中间表
	 */
	public void	 updatePLabel(HFPLabel  cuar);
	
}
