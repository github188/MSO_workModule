package com.mso.service.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IGxcluetemplateDao;
import com.mso.dao.IGxspeaktemplateDao;
import com.mso.model.GXCluetemplate;
import com.mso.model.GXSpeaktemplate;
import com.mso.service.ITemplateService;
import com.mso.utils.CommonUtil;
import com.mso.utils.StringUtil;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("templateService")@Transactional
public class TemplateServiceImpl implements ITemplateService{
	private static Map<String, String> clueTemplateMap=new HashMap<String, String>();
	private static Map<String, String> SpeakTemplateMap=new HashMap<String, String>();
	
	@Autowired
	IGxcluetemplateDao gxcluetemplateDao;

	@Autowired
	IGxspeaktemplateDao gxspeaktemplateDao;
	
	@Override
	public String getClueTemplateUrl(String cluename,boolean bool) {
		boolean isnull=clueTemplateMap==null||clueTemplateMap.size()==0;
		if(bool||isnull){//强制更新  后者为空(第一次)初始化
			clueTemplateMap=new HashMap<String, String>();
			GXCluetemplate user=new GXCluetemplate();
			List cluetemolateList=gxcluetemplateDao.getGxcluetemplates(user);
		
			if(cluetemolateList!=null||cluetemolateList.size()>0){
				for (int i = 0; i < cluetemolateList.size(); i++) {
					GXCluetemplate template=(GXCluetemplate) cluetemolateList.get(i);
					String template_url="";
					if(!StringUtil.isNull(template.getTemplate_url())){
						template_url=CommonUtil.getImageUrlpre()+template.getTemplate_url();
					}
					clueTemplateMap.put(template.getIndustry(),template_url);
				}
			}
		}else{
				String temp=clueTemplateMap.get(cluename);
				if(StringUtil.isNull(temp)){//某个分类下是空
					clueTemplateMap=new HashMap<String, String>();
					GXCluetemplate user=new GXCluetemplate();
					List cluetemolateList=gxcluetemplateDao.getGxcluetemplates(user);
				
					if(cluetemolateList!=null||cluetemolateList.size()>0){
						for (int i = 0; i < cluetemolateList.size(); i++) {
							GXCluetemplate template=(GXCluetemplate) cluetemolateList.get(i);
							String template_url="";
							if(!StringUtil.isNull(template.getTemplate_url())){
								template_url=CommonUtil.getImageUrlpre()+template.getTemplate_url();
							}
							clueTemplateMap.put(template.getIndustry(),template_url);
						}
					}
				}
		}
		String templateUrl=StringUtil.objCovStr(clueTemplateMap.get(cluename));
		return templateUrl;
	}

	@Override
	public String getSpeakTemplateUrl(String speakname,boolean bool) {
		boolean isnull=SpeakTemplateMap==null||SpeakTemplateMap.size()==0;
		
		if(bool||isnull){//强制更新  后者为空(第一次)初始化
			SpeakTemplateMap=new HashMap<String, String>();
			GXSpeaktemplate user=new GXSpeaktemplate();
			List speaktemplateList=gxspeaktemplateDao.getGXSpeaktemplates(user);
		
			if(speaktemplateList!=null||speaktemplateList.size()>0){
				for (int i = 0; i < speaktemplateList.size(); i++) {
					GXSpeaktemplate template=(GXSpeaktemplate) speaktemplateList.get(i);
					String template_url="";
					if(!StringUtil.isNull(template.getTemplate_url())){
						template_url=CommonUtil.getImageUrlpre()+template.getTemplate_url();
					}
					SpeakTemplateMap.put(template.getIndustry(),template_url);
				}
			}
		}else{
			String temp=SpeakTemplateMap.get(speakname);
			if(StringUtil.isNull(temp)){
				SpeakTemplateMap=new HashMap<String, String>();
				GXCluetemplate user=new GXCluetemplate();
				List cluetemolateList=gxcluetemplateDao.getGxcluetemplates(user);
				
				if(cluetemolateList!=null||cluetemolateList.size()>0){
					for (int i = 0; i < cluetemolateList.size(); i++) {
						GXCluetemplate template=(GXCluetemplate) cluetemolateList.get(i);
						String template_url="";
						if(!StringUtil.isNull(template.getTemplate_url())){
							template_url=CommonUtil.getImageUrlpre()+template.getTemplate_url();
						}
						SpeakTemplateMap.put(template.getIndustry(),template_url);
					}
				}
			}
		}
		String templateUrl=StringUtil.objCovStr(SpeakTemplateMap.get(speakname));
		return templateUrl;
	}
}
