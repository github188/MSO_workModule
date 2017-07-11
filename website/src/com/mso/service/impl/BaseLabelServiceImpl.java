package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.mso.dao.IBaseLabelDao;
import com.mso.model.BaseLabel;
import com.mso.service.BaseLabelService;

@Service("baseLabelService")@Transactional
public class BaseLabelServiceImpl implements BaseLabelService{
	
	@Autowired
	IBaseLabelDao baseLabelDao; 

	public IBaseLabelDao getBaseLabelDao() {
		return baseLabelDao;
	}
	public void setBaseLabelDao(IBaseLabelDao baseLabelDao) {
		this.baseLabelDao = baseLabelDao;
	}
	/**
	 * 查询行业信息
	 * @param cuar
	 * @return
	 */
	public List getBaseLabel(BaseLabel  cuar){
		return baseLabelDao.getBaseLabel(cuar);
	}
	/**
	 * 新增标签
	 * @param cuar
	 */
	public void addBaseLabel(BaseLabel  cuar){
		baseLabelDao.addBaseLabel(cuar);
	}
	/**
	 * 删除标签
	 */
	public void deleteBaseLabel(BaseLabel  cuar){
		baseLabelDao.deleteBaseLabel(cuar);
	}
	/**
	 * 修改标签
	 */
	public void	 updateBaseLabel(BaseLabel  cuar){
		baseLabelDao.updateBaseLabel(cuar);
	}
}
	

	

