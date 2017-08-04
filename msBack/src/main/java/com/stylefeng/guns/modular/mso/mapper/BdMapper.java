package com.stylefeng.guns.modular.mso.mapper;

import java.util.List;

import com.stylefeng.guns.modular.mso.model.Bd;

public interface BdMapper {
	
    public void insertBd(Bd bd);
    
     public List bdlist(Bd bd);
     
     public void updateBd(Bd bd);

	public Bd selectById(String bdId);

	public void deleteBd(String bdId);
}