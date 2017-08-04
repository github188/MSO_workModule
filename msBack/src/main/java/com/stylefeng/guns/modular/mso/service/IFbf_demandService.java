package com.stylefeng.guns.modular.mso.service;

import java.util.List;

import com.stylefeng.guns.modular.mso.model.Fbf_demand;

/**
 * 需求包Service
 *
 * @author fengshuonan
 * @Date 2017-06-14 13:40:46
 */
public interface IFbf_demandService {
    public void insertFbf_demand(Fbf_demand d);
    
    public List Fbf_demandList(Fbf_demand d);
    
    public void updateFbf_demand(Fbf_demand d);

	public Fbf_demand selectById(String id);

}
