package com.mso.dao;

import java.util.List;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.GXqaeverydaystatistics;

/**
 * @author harry
 * 专员录音上传Dao
 */
public interface IGXqaeverydaystatisticsDao {
	
    /**
     *   查找录音文件
     * @param jfuid 发包方用户ID
     * @param demandid 需求ID
     * @return
     */
	List<GXqaeverydaystatistics>  getGXqaeverydaystatistics(GXqaeverydaystatistics gxqaevery);
	/**
	 * 
	 * @param gxqaevery
	 * pid 需求包id
	 * demandid 需求id
	 * @return
	 */
	List<GXqaeverydaystatistics>  selectGXqaeveryDaystatisticesly(GXDbaEverydayStatistics user);
}
