package com.mso.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.HFPLabelDao;
import com.mso.model.HFPLabel;
import com.mso.model.PLabel;
import com.mso.service.HFPLabelService;
import com.mso.utils.StringUtil;

@Service("plabelService")@Transactional
public class HFPLabelServiceImpl implements HFPLabelService{
	
	@Autowired
	HFPLabelDao plabelDao; 
	
	@Override
	public List<HFPLabel> getPLabel(HFPLabel cuar) {
		return plabelDao.getPLabel(cuar);
	}
	
	/**
	 * 查询某个需求包下选中的标签
	 * @param cuar
	 * @return
	 */
	public List<PLabel> getSelectPLabel(HFPLabel cuar){
        //转化
		List list=plabelDao.getSelectPLabel(cuar);
		List<PLabel> listp=new ArrayList<PLabel>();
		if(list!=null&&list.size()!=0){
			for (int i = 0; i < list.size(); i++) {
				 Object[]  a=(Object[] ) list.get(i);
	       	     String dlid=StringUtil.objCovStr(a[0]);
	       	     String pid=StringUtil.objCovStr(a[1]);
	       	     String labelName=StringUtil.objCovStr(a[2]);
	       	     String labelAttribute=StringUtil.objCovStr(a[3]);
	       	     BigDecimal labelPrice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[4]));
	       	     String labelId=StringUtil.objCovStr(a[5]);
	       	     PLabel plabel=new PLabel();
	       	     plabel.setDlid(dlid);
	       	     plabel.setPid(pid);
	       	     plabel.setLabelName(labelName);
	       	     plabel.setLabelAttribute(labelAttribute);
	       	     plabel.setLabelPrice(labelPrice);
	       	     plabel.setLabelId(labelId);
	       	     listp.add(plabel);
			}
		}
		return listp;
	}
	
	@Override
	public void addPLabel(HFPLabel cuar) {
		plabelDao.addPLabel(cuar);
	}
	@Override
	public void deletePLabel(HFPLabel cuar) {
		plabelDao.deletePLabel(cuar);
	}
	@Override
	public void updatePLabel(HFPLabel cuar) {
		plabelDao.updatePLabel(cuar);
	}
}
	

	

