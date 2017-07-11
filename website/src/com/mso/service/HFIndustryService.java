package com.mso.service;

import java.util.List;

import com.mso.model.HFIndustry;
public interface HFIndustryService {
	/**
	 * 查询行业信息
	 * @param cuar
	 * @return
	 */
	public List getHFIndustry(HFIndustry  cuar);
	/**
	 * 新增行业
	 * @param cuar
	 */
	public void addHFIndustry(HFIndustry  cuar);
	/**
	 * 删除行业
	 */
	public void deleteHFIndustry(HFIndustry  cuar);
	/**
	 * 修改行业
	 */
	public void	 updateHFIndustry(HFIndustry  cuar);
	
}
