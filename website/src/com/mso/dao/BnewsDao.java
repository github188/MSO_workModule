package com.mso.dao;

import java.util.List;

import com.mso.model.BNews;
import com.mso.utils.PageResults;

public interface BnewsDao {
    /**
     * 查询所有的Bnews字段的值
     * @return
    */
	public List getBnews(BNews cuar);
	
	public PageResults<Object> getBnewsPage(BNews cuar);
    /**
     * 根据id查询news
     * @return
    */
	public BNews getBnewsById(BNews cuar);
    /**
     * 新增Bnews值
     * @return
    */
	public void addBnews(BNews cuar);
    /**
     * 删除Bnews值
     * @return
    */
	public void deleteBnews(BNews cuar);
    /**
     * 修改Bnews值
     * @return
    */
	public void updateBnews(BNews cuar);
}
