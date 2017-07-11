package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IGxPackageManageDao;
import com.mso.model.GXPackageManage;
import com.mso.service.GxPackageManageService;

@Service("gxpackagemanageservice")@Transactional
public class GxPackageManageServiceImpl  implements GxPackageManageService{
	@Autowired
	IGxPackageManageDao icxpackagemanagedao;
	
	

	public IGxPackageManageDao getIcxpackagemanagedao() {
		return icxpackagemanagedao;
	}



	public void setIcxpackagemanagedao(IGxPackageManageDao icxpackagemanagedao) {
		this.icxpackagemanagedao = icxpackagemanagedao;
	}



	@Override
	public List<Object> getGxPackageManage(GXPackageManage gxpm) {
        List<Object>  list=icxpackagemanagedao.getGxPackageManage(gxpm);
        if(null!=list && list.size()>0){
        	return list;
        }else{
        	return null;
        }
	}



	@Override
	public GXPackageManage getGxPackageManagePid(GXPackageManage gxpm) {
		GXPackageManage ob=icxpackagemanagedao.getGxPackageManagePid(gxpm);
		if(null!=ob){
		   return ob;
		}else{
			return null;
		}
	}

}
