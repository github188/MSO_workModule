package com.mso.service.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import BaseDao.BaseDao;

import com.mso.dao.BnewsDao;
import com.mso.model.BNews;
import com.mso.service.BnewsService;
import com.mso.utils.PageResults;

/**
 * 新闻/文章 操作Impl
 */
@Repository("bnewsService")@Transactional
public class BnewsServiceImpl extends BaseDao<Object, Serializable> implements BnewsService{

	@Autowired
	BnewsDao bnewsdao;
	public BnewsDao getBnewsdao() {
		return bnewsdao;
	}

	public void setBnewsdao(BnewsDao bnewsdao) {
		this.bnewsdao = bnewsdao;
	}

	@Override
	public BNews getBnewsById(BNews cuar) {
		return bnewsdao.getBnewsById(cuar);
	}
	@Override
	public List getBnews(BNews cuar) {
		return bnewsdao.getBnews(cuar);
	}
	@Override
	public PageResults getBnewsPage(BNews cuar) {
		return bnewsdao.getBnewsPage(cuar);
	}
	@Override
	public void addBnews(BNews cuar) {
		bnewsdao.addBnews(cuar);
	}

	@Override
	public void deleteBnews(BNews cuar) {
		bnewsdao.deleteBnews(cuar);
	}

	@Override
	public void updateBnews(BNews cuar) {
		bnewsdao.updateBnews(cuar);
	}
	
}
