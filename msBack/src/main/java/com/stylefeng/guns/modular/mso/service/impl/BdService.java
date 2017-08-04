package com.stylefeng.guns.modular.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylefeng.guns.modular.mso.mapper.BdMapper;
import com.stylefeng.guns.modular.mso.model.Bd;
import com.stylefeng.guns.modular.mso.service.IBdService;

@Service
public class BdService implements IBdService{
	
	@Autowired
	private BdMapper bdMapper;
	
	public void insert(Bd bd){
		bdMapper.insertBd(bd);
	}
	
	public List list(){
		return bdMapper.bdlist(null);
	}

}
