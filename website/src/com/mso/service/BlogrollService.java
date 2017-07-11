/**
 * 
 */
package com.mso.service;

import java.util.List;

import com.mso.model.Blogroll;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
public interface BlogrollService {
	/**
	 * 查询友情链接Blogroll(单条或列表)所有字段值的列表  不分页
	 * @param blogroll对象里的属性值
	 */
	public List<Blogroll> getBlogroll(Blogroll blogroll);
	
	
}
