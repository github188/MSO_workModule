package com.mso.dao;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.Hfp;
import com.mso.utils.PageResults;



public interface IHFpDao {
	/*
	 * 新增需求
	 */
	public Hfp addHfp(Hfp user) ;
	/*
	 * 删除草稿箱需求
	 */
	public void deleteHfp(Hfp user);
	/*
	 * 修改草稿箱需求
	 */
	public void updateHfp(Hfp user);
	public PageResults getHfps(Hfp user);
	public Hfp getHfpById(Hfp user);

	/*
	 * 查询 需求包
	 *jfuid(用户id)
	 * demandtype  需求类型   1-套餐    2-个性化需求
	 * servicetype 业务类型      1-销售线索挖掘  2-数据加工  3-人工客服  
	 * 只显示6条信息
	 */
	PageResults<Object>  getHfp(Hfp user);
	public List<Object> getHfpsNoPage(Hfp user);
	public BigDecimal getCustomerSales(Hfp user) ;
	
	public void insert_h_f_p_industry_new(String pid,String nfiid); //插入新行业的中间表
	
	public Map getNewIndustryId(String pid);	//得到需求包对应新行业的id 2.4.1
	//获取用户发的需求包数量
	public Integer getHfpCount(GXDbaEverydayStatistics user);
	
}
 
