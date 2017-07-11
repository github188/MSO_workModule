package com.mso.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IDatafilteringDao;
import com.mso.dao.IOrderDemandDao;
import com.mso.dao.IPackageManageDao;
import com.mso.dao.IUserFDemandOrderDao;
import com.mso.model.HFDatafiltering;
import com.mso.res.DatafilteringRes;
import com.mso.service.IDatafilteringService;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("datafilteringService")@Transactional
public class DatafilteringServiceImpl implements IDatafilteringService{
	
	@Autowired
	IDatafilteringDao datafilteringDao;
	@Autowired
	IUserFDemandOrderDao userFDemandOrderDao;
	
	@Autowired
	IOrderDemandDao orderdemandDao;
	
	@Autowired
	IPackageManageDao packageManageDao;
	
	
	
	@Override
	public void addDatafiltering(HFDatafiltering user){
		datafilteringDao.addDatafiltering(user);
//		UserJfUser pa=new  UserJfUser();
//		pa.setJfuid(user.getJfuid());
//		UserJfUser resuser=userFDemandOrderDao.selectUser(pa);
//		if(resuser!=null){//
//			UserFDemand addUserD=new UserFDemand();
//			addUserD.setDemandid(user.getDemandid());
//			addUserD.setIsreview(0);
//			addUserD.setUserId(resuser.getUserId());
//			userFDemandOrderDao.addUserFDemand(addUserD);
//		}else{//用户没有被分配
//		}
	}
	
	@Override
	public void deleteDatafiltering(HFDatafiltering user){
		datafilteringDao.deleteDatafiltering(user);
	}
	@Override
	public void updateDatafiltering(HFDatafiltering user) {
		datafilteringDao.updateDatafiltering(user);
		
	}
	/*
	 * 查询需求明细信息
	 */
	@Override
	public HFDatafiltering getDatafilteringById(HFDatafiltering user){
		return datafilteringDao.getDatafilteringById(user);
	}
	
	


	@Override
	public List<Object> getDatafilteringByPid(HFDatafiltering user) {
		return datafilteringDao.getDatafilteringByPid(user);
	}
	
	
	public DatafilteringRes getDatafilterings(HFDatafiltering user) {
		String code=ERConst.SU_CODE;
	    String msg="";
		DatafilteringRes res=new DatafilteringRes(code,msg);
		try {
			        PageResults s= datafilteringDao.getDatafilterings(user);
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setPageStr(s.getAjaxPageStr());
			        List list=s.getResults();
			        res.setResults(list);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}

	

	
	
	

	
	
	

	
	
}
