package com.mso.service;

import java.util.ArrayList;
import java.util.List;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.res.OrderReportRes;
import com.mso.res.ThisMonthOrderQuantityCompletedRes;
import com.mso.res.ThisMonthRevenueRes;
import com.mso.res.gxdbaeverydaystatistics.LetContractOneRes;
import com.mso.res.pickuppackageparty.OutsourceeStatementRes;
import com.mso.utils.PageResults;




/**
 * 通用dao，包括基本的CRUD方法
 */

public interface IOrderUploadReportService {
	
	public GXJOrderUploadReport addOrderUploadReport(GXJOrderUploadReport user) ;
	
	public PageResults<Object> getUploadReportPage(GXJOrderUploadReport user) ;
	
	public PageResults<Object> getUploadReports(GXJOrderUploadReport user);
	public ArrayList<GXJOrderUploadReport> getUploadProgress(GXJOrderUploadReport user);
	
	public PageResults<Object> getUploadOrderReports(GXJOrderUploadReport user);
	public OrderReportRes getOrderOrderNums(GXJOrderUploadReport user);
	
	/*1.4.2  接包方-本月预计收入(Revenue expected this month)    */
	public ThisMonthRevenueRes getThisMonthRevenue(GXJOrderUploadReport user);
	/*
	 * 1.4.2  接包方-本月完成订单量(Order quantity completed this month)    
	 */
	public ThisMonthOrderQuantityCompletedRes getThisMonthOrderQuantityCompleted(GXJOrderUploadReport user);
	
	//接包方成单报表第一层
    public OutsourceeStatementRes getOutsourceeStatement(GXJOrderUploadReport user);
    
    //接包方成单报表第一层
    public OutsourceeStatementRes getOutsourceeSecondFloorStatement(GXJOrderUploadReport user);
    
    //发包方承担报表第一层
    public LetContractOneRes getLetContract(GXDbaEverydayStatistics user);
    
    //发包方承担报表第二层
    public LetContractOneRes getTowLetContract(GXDbaEverydayStatistics user);
    
    //发包方成单报表第三层
    public LetContractOneRes getThreeLetContract(GXDbaEverydayStatistics user);
	
    //根据stid查询对应的一条数据所有字段
    public GXDbaEverydayStatistics findGXDbaEverydayStatisticsByStid(String stid);
    
    //发包方成单报表第三层 - 点击"下载" 修改下载状态
    public void editDownloadStatus(GXDbaEverydayStatistics record);
   
}

 
