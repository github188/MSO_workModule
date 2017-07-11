package com.mso.service;

import java.util.List;

import com.mso.model.HFservicetype;

/**
 * 业务类型service
 * @author harry
 *
 */
public interface HFservicetypeService {
	
	 /**
     * 根据display(前台是否显示)来查询
     * @param user
     * @return
     */
	public List getHfservicesTypeOpen(HFservicetype user);

}
