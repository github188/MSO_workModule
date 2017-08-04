package com.stylefeng.guns.modular.mso.mapper;

import java.util.List;

import com.stylefeng.guns.modular.mso.model.Bd;
import com.stylefeng.guns.modular.mso.model.Fbf_demand;

public interface Fbf_demandMapper {
	
    public void insertFbf_demand(Fbf_demand d);
    
     public List Fbf_demandList(Fbf_demand d);
     
     public void updateFbf_demand(Fbf_demand d);

	public Fbf_demand selectById(String id);


}