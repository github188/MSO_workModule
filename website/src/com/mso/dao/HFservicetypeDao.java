package com.mso.dao;

import java.util.List;

import com.mso.model.HFservicetype;

/**
 * 业务类型Dao
 * @author harry
 *
 */
public interface HFservicetypeDao {
    /**
     * 根据display(前台是否显示)来查询
     * @param user
     * @return
     */
	public List getHfservicesTypeOpen(HFservicetype user);
}
