package com.mso.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IDbaEverydayStatisticsDao;
import com.mso.dao.IOrderUploadReportDao;
import com.mso.model.DemandReport;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.res.DemandReportHomeRes;
import com.mso.res.HFDemandRes;
import com.mso.service.IDbaEverydayStatisticsService;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;


/**
 * 业务实现类
 * @date   2016年7月20日
 */
@Service("dbaEverydayStatisticsService")@Transactional
public class IDbaEverydayStatisticsServiceImpl implements IDbaEverydayStatisticsService{
	
	@Autowired
	IDbaEverydayStatisticsDao dbaEverydayStatisticsDao;
	
	@Autowired
	IOrderUploadReportDao orderUploadReportDao;
	@Override
	public HFDemandRes getEverydayStatistics(GXDbaEverydayStatistics user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
					PageResults s= dbaEverydayStatisticsDao.getEverydayStatistics(user);
			        List<Object> list=s.getResults();
			        if(!"export".equals(user.getAction())){//不是 导出  不是 不分页的统计
			        	GXDbaEverydayStatistics tolReport= dbaEverydayStatisticsDao.getEverydayStatisticsSum(user);
				        res.setFblTol(tolReport.getFblTol());
				        res.setCglTol(tolReport.getCglTol());
				        res.setSblTol(tolReport.getSblTol());
				        res.setJslTol(tolReport.getJslTol());
			        }
			        res.setResults(list);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}

	
	@Override
	public DemandReportHomeRes  getEveryday(GXDbaEverydayStatistics user) {
	 	String code=ERConst.SU_CODE;
	    String msg="";
	    DemandReportHomeRes res=new DemandReportHomeRes(code,msg);
		try {
			PageResults a1=dbaEverydayStatisticsDao.getEverydayStatistics(user);
			List<DemandReport> reportDemandList=new ArrayList<DemandReport>();
	        List<Object> demandList=a1.getResults();
	        if(demandList!=null){
	        	 for (int i = 0; i < demandList.size(); i++) {
	        		    GXDbaEverydayStatistics  a=(GXDbaEverydayStatistics) demandList.get(i);
	        		    DemandReport d=new DemandReport();
		       	    	d.setDemandid(a.getDemandid());
						d.setJfuid(a.getJfuid());
						d.setReleasenum(a.getReleasenum());
						d.setCensusday(a.getCensusday());
	        		    reportDemandList.add(d);
			     }
	        }
	        res.setReportDemandList(reportDemandList);
		} catch (Exception e) {
				res.setCode(ERConst.ER_CODE);
				res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
		}
		return res;
	}

	/**
	 * 递交量统计(总量)
	 * @param gxdbevery
	 * @return
	 */
	@Override
	public Long getreleasenum(GXDbaEverydayStatistics gxdbevery) {
		Long sun=dbaEverydayStatisticsDao.getreleasenum(gxdbevery);
		return sun;
	}
}
