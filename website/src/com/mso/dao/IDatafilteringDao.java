package com.mso.dao;

import java.util.List;

import com.mso.model.HFDatafiltering;
import com.mso.utils.PageResults;



/**
 * 用户DAO
 */
public interface IDatafilteringDao {
 
	public void addDatafiltering(HFDatafiltering user) ;
	public void deleteDatafiltering(HFDatafiltering user);
	public void updateDatafiltering(HFDatafiltering user);
	/*
	 * 更具状态查询 需求记录
	 * 待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
	 */
	public PageResults<Object> getDatafilterings(HFDatafiltering user) ;
	public HFDatafiltering getDatafilteringById(HFDatafiltering user) ;
	public List<Object> getDatafilteringByPid(HFDatafiltering user);
	
}
 
