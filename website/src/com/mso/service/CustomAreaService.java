package com.mso.service;

import java.util.List;

import com.mso.model.CustomArea;

public interface CustomAreaService {
		/**
		 * 查询自定义所添加的城市
		 * @param cuar
		 * @return
		 */
		public List getCustomArea(CustomArea  cuar);
		/**
		 * 自定义区域中添加自定义城市
		 * @param cuar
		 */
		public void addCustomArea(CustomArea  cuar);
		/**
		 * 自定义区域删除自定义城市
		 */
		public void deleteCustomArea(CustomArea  cuar);
		/**
		 * 根据fuid修改areaRemark
		 * 
		 */
		public void updateCustomAreaAreaRemark(CustomArea  cuar);
		/**
		 * 查询对象
		 * @param cuar
		 * @return
		 */
		public CustomArea getCustomAreaModel(CustomArea  cuar);
}
