package com.mso.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.HFservicetypeDao;
import com.mso.model.HFservicetype;
import com.mso.service.HFservicetypeService;

/**
 * 专员录音上传DaoImpl
 * @author harry
 *
 */
@Service("hfservicetypeService")@Transactional
public class HFservicetypeServiceImpl implements HFservicetypeService{
	@Autowired
    private HFservicetypeDao hfservicetypedao;
	public HFservicetypeDao getHfservicetypedao() {
		return hfservicetypedao;
	}
	public void setHfservicetypedao(HFservicetypeDao hfservicetypedao) {
		this.hfservicetypedao = hfservicetypedao;
	}


	/**
     * 根据display(前台是否显示)来查询
     * @param user
     * @return
     */
	@Override
	public List getHfservicesTypeOpen(HFservicetype user) {
		List hflist=hfservicetypedao.getHfservicesTypeOpen(user);
		if(null!=hflist){
			return hflist;
		}else{
		return null;
		}
	}

}
