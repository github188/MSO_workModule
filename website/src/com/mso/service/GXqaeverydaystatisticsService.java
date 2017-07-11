package com.mso.service;

import java.util.List;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.GXqaeverydaystatistics;
/**
 * 专员录音上传DaoImpl
 * @author harry
 *
 */
public interface GXqaeverydaystatisticsService {
	/**
     *   查找录音文件
     * @param jfuid 发包方用户ID
     * @param demandid 需求ID
     * @return
     */
	public List<GXqaeverydaystatistics>  getGXqaeverydaystatistics(GXqaeverydaystatistics gxqaevery);

}
