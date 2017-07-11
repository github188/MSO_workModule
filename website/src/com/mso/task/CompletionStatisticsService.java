package com.mso.task;



public interface CompletionStatisticsService { 
	
	/*
	 *  修改定时修改结算状态   每天凌晨00:00
	 */
	public void  modifDemandSettlementStatus();
	
	
	
	/*
	 *  新闻发布接口定时更新  每天凌晨00:00
	 */
	public void  newsRelease();
	
} 