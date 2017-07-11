package com.mso.service;

import java.util.List;

import com.mso.model.BNews;
import com.mso.utils.PageResults;

public interface BnewsService {
    /**
     * 查询所有的Bnews字段的值 不分页
     * @return
    */
	public List getBnews(BNews cuar);
    /**
     * 查询所有的Bnews字段的值  分页
     * @return
    */
	public PageResults getBnewsPage(BNews cuar);
	
	
    /**
     * 根据id查询news
     * @return
    */
	public BNews getBnewsById(BNews cuar);
	
    /**
     * 新增Bnews字段的值
     * @return
    */
	public void addBnews(BNews cuar);
    /**
     * 删除Bnews字段的值
     * @return
    */
	public void deleteBnews(BNews cuar);
    /**
     * 修改Bnews字段的值
     * @return
    */
	public void updateBnews(BNews cuar);
}
