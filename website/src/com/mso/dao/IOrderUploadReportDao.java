package com.mso.dao;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.utils.PageResults;



/**
 * 用户DAO
 */
public interface IOrderUploadReportDao {
 
	public GXJOrderUploadReport addOrderUploadReport(GXJOrderUploadReport user) ;
	public List getUploadReport(GXJOrderUploadReport user) ;
	public Long getUploadReportCount(GXJOrderUploadReport user);
	
	public PageResults<Object> getUploadReportPage(GXJOrderUploadReport user);
	
	public List<Object> getUploadProgress(GXJOrderUploadReport user);
	public PageResults<Object> getUploadReports(GXJOrderUploadReport user);
	
	public PageResults<Object> getUploadOrderReports(GXJOrderUploadReport user);
	public GXJOrderUploadReport getUploadOrderReportsSum(GXJOrderUploadReport user);
	public GXJOrderUploadReport getUploadReportsSum(GXJOrderUploadReport user);
	public GXJOrderUploadReport getUploadReportPageSum(GXJOrderUploadReport user);
	public List getOrderOrderNums(GXJOrderUploadReport user);
	
	public BigDecimal getThisMonthRevenue(GXJOrderUploadReport user);
	public BigDecimal getThisMonthOrderQuantityCompleted(GXJOrderUploadReport user);
	
	//接包方成单报表第一层
    public PageResults<Object> getOutsourceeStatement(GXJOrderUploadReport user);
	//接包方成单报表第一层  无分页加总
	public List getSumOutsourceeStatement(GXJOrderUploadReport user);
	
    //接包方成单报表第二层
    public List<Object> getOutsourceeSecondFloorStatement(GXJOrderUploadReport user);
    
    //发包方承担报表第一层
    public PageResults<Object> getLetContract(GXDbaEverydayStatistics user);
    //发包方承担报表第一层 无分页加总
    public List getsumLetContract(GXDbaEverydayStatistics user);
    
    //发包方成单报表第二层
    public List<Object> getTowLetContract(GXDbaEverydayStatistics user);
    
    //发包方成单报表第三层
    public PageResults<Object> getThreeLetContract(GXDbaEverydayStatistics user);
    //发包方成单报表第三层加总
    public List getSumThreeLetContract(GXDbaEverydayStatistics user);
    //发包方第三层获取上一层（需求名,发布量,目标城市）
    public List selectTowLetContract(GXDbaEverydayStatistics user);
    //根据stid查询对应的一条数据所有字段
    public GXDbaEverydayStatistics findGXDbaEverydayStatisticsByStid(String stid);
    //发包方成单报表第三层 - 点击"下载" 修改下载状态
    public void editDownloadStatus(GXDbaEverydayStatistics user);
    //发包方成单报表第一层 - 获取数据挖掘和数据加工的用户未下载的成单信息
    public List<Map>  getCensusDownload(String jfuid);
    
    
    
}
 
