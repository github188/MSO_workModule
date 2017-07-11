package com.mso.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IGXqaeverydaystatisticsDao;
import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.GXqaeverydaystatistics;
import com.mso.service.GXqaeverydaystatisticsService;
import com.mso.utils.DateUtil;
/**
 * 专员录音上传
 * @author harry
 *
 */
@Service("qaeverydaystatisticsService")@Transactional
public class GXqaeverydaystatisticsServiceImpl implements GXqaeverydaystatisticsService {
	@Autowired
	IGXqaeverydaystatisticsDao igxqaserverydaystatisticsdao;
	

	public IGXqaeverydaystatisticsDao getIgxqaserverydaystatisticsdao() {
		return igxqaserverydaystatisticsdao;
	}


	public void setIgxqaserverydaystatisticsdao(
			IGXqaeverydaystatisticsDao igxqaserverydaystatisticsdao) {
		this.igxqaserverydaystatisticsdao = igxqaserverydaystatisticsdao;
	}

	/**
     *   查找录音文件
     * @param jfuid 发包方用户ID
     * @param demandid 需求ID
     * @return
     */
	@Override
	public List<GXqaeverydaystatistics> getGXqaeverydaystatistics(GXqaeverydaystatistics gxqaevery) {
		List<GXqaeverydaystatistics>  listGxqaevery=igxqaserverydaystatisticsdao.getGXqaeverydaystatistics(gxqaevery);
		if(null!=listGxqaevery && listGxqaevery.size()>0){
			for(int i=0;i<listGxqaevery.size();i++){
				 GXqaeverydaystatistics gx=listGxqaevery.get(i);
				 String cent=gx.getCensusdayrange();
				  if(null!=cent){
					  int centlength=cent.length();
					  String cent1=" ";
						if(centlength<=10){
						    cent1=cent. substring(0, centlength);
							gx.setCensusdayrangeh(cent1);
						}else if(centlength>10){
							cent1=cent. substring(0, 10);
							String cent2=cent.substring(centlength-10,centlength);
							String cents=cent1+"~"+cent2;
							gx.setCensusdayrangeh(cents);
						  }
					 
				  }
		    }
		}
		
		   
		return listGxqaevery;  
	}
	
	public static String dateToStrLong(String  dateDate) {
		   SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		   String dateString = formatter.format(dateDate);
		   return dateString;
		}
	


}
