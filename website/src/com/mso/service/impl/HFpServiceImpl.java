package com.mso.service.impl;


import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.hibernate.Query;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IHFpDao;
import com.mso.dao.IUserFPDao;
import com.mso.model.Hfp;
import com.mso.model.UserFP;
import com.mso.res.HFPRes;
import com.mso.service.IHFpService;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("hfpService")@Transactional
public class HFpServiceImpl implements IHFpService{
	
	@Autowired
	IHFpDao hfpDao;
	@Autowired
	IUserFPDao userfpDao;
	@Override
	public Hfp addHfp(Hfp user){
		UserFP pa=new  UserFP();
		pa.setJfuid(user.getJfuid());
		UserFP resuser=userfpDao.selectUserP(pa);
		if(resuser!=null){//
			resuser.setPid(user.getPid());
			userfpDao.addUserFP(resuser);
			user.setDistributionstate(1);
		}else{//用户没有被分配
			
		}
		hfpDao.addHfp(user);
        return user;
	}
	@Override
	public void deleteHfp(Hfp user){
		hfpDao.deleteHfp(user);
	}
	
	@Override
	public void updateHfp(Hfp user){
		hfpDao.updateHfp(user);
	}
	/*
	 * 查询需求明细信息
	 */
	@Override
	public Hfp getHfpById(Hfp user){
		return hfpDao.getHfpById(user);
	}
	
	/*
	 * 更具状态查询 需求记录
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       
	 * [待上架(待提交/审核中/驳回)  上架中(通过(审核))     
	 */
	public HFPRes getHfps(Hfp user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFPRes res=new HFPRes(code,msg);
			try {
			    PageResults s= hfpDao.getHfps(user);
		        res.setPageCount(s.getPageCount());
		        res.setPageNo(s.getPageNo());
		        res.setPageSize(s.getPageSize());
		        res.setCurrentPage(s.getCurrentPage());
		        res.setTotalCount(s.getTotalCount());
		        res.setPageStr(s.getPageStr());
		        res.setAjaxPageStr(s.getAjaxPageStr());
		        List list=s.getResults();
			    res.setHfpList(s.getResults());
			} catch (Exception e) {
				res.setCode(ERConst.ER_CODE);
				res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	@Override
	public PageResults<Object> getHfp(Hfp user) {
		PageResults<Object> sd=hfpDao.getHfp(user);
		if(null!=sd){
			return sd;
		}
		return null;
	}
	
	/*客户销售额 */
	@Override
	public BigDecimal getCustomerSales(Hfp user) {
		return hfpDao.getCustomerSales(user);
	}

	
	@Override
	public void insert_h_f_p_industry_new(String pid, String nfiid) {
		hfpDao.insert_h_f_p_industry_new(pid, nfiid);
	}
	@Override
	public Map getNewIndustryId(String pid) {
		return hfpDao.getNewIndustryId(pid);
	}
}
