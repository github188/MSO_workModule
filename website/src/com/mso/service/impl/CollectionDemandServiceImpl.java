package com.mso.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.ICollectionDemandDao;
import com.mso.model.HFDemand;
import com.mso.model.HJCollectionDemand;
import com.mso.res.HFDemandRes;
import com.mso.service.ICollectionDemandService;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("collectionDemandService")@Transactional
public class CollectionDemandServiceImpl implements ICollectionDemandService{
	
	@Autowired
	ICollectionDemandDao collectionDemandDao;
	
	@Override
	public void addCollectionDemand(HJCollectionDemand user){
		HJCollectionDemand u=collectionDemandDao.getCollectionDemandBy(user);
		if(u==null){
			collectionDemandDao.addCollectionDemand(user);
		}
	}
	
	
	
	@Override
	public HFDemandRes getOrderDemands(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			        PageResults s= collectionDemandDao.getCollections(user); //数据库获取列的字段
			        List<Object> list=s.getResults();
			        List mandList=new ArrayList();
			        for (int i = 0; i < list.size(); i++) {
//			        	u.ordername,u.beginage,u.releasenum,u.orderprice,u.jfuid,u.demandid,u.releasetime,u.fdstate,d.collectionid,d.createtime 
			        	Object[] a= (Object[]) list.get(i);
			        	String ordername=StringUtil.objCovStr(a[0]);
			        	Integer beginage=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
			        	Integer releasenum=StringUtil.toInteger(StringUtil.objCovStr(a[2]));
			        	BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[3]));
			        	String releasetime=StringUtil.objCovStr(a[6]);
			        	String jfuid=StringUtil.objCovStr(a[4]);
			        	String demandid=StringUtil.objCovStr(a[5]);
			        	Integer fdstate=(Integer) a[7];
			        	String collectionid=StringUtil.objCovStr(a[8]);
			        	HFDemand d=new HFDemand();
			    		d.setOrdername(ordername);   //字段再塞到对象的属性里
			    		d.setBeginage(beginage);
			    		d.setReleasenum(releasenum);
			    		d.setOrderprice(orderprice);
			    		d.setReleasetime(releasetime);
			        	d.setJfuid(jfuid);
			    		d.setDemandid(demandid);;
			    		d.setFdstate(fdstate);
			    		d.setCollectionid(collectionid);
			    		mandList.add(d);
					}
			        BigDecimal tolPrice=new BigDecimal("0");
			        res.setTolPrice(tolPrice);
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setPageStr(s.getPageStr());
			        res.setResults(mandList);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
}
