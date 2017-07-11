package com.mso.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IEventDao;
import com.mso.model.Event;
import com.mso.res.EventRes;
import com.mso.service.IEventService;
import com.mso.utils.CustomizedPropertyPlaceholderConfigurer;
import com.mso.utils.DateUtil;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("eventService")@Transactional
public class EventServiceImpl implements IEventService{

	@Autowired
	IEventDao eventDao;
	@Override
	public void addEvent(Event user) {
		eventDao.addEvent(user);
	}

	@Override
	public void updateEventByUserId(Event user) {
		eventDao.updateEventByUserId(user);
	}

	@Override
	public Event getEventByUserId(Event user) {
		eventDao.getEventByUserId(user);
		return null;
	}
	
	
	/*
	 * 根据手UserId Event user對象全部操作
	 * */
	public EventRes addUpEvent(Event e) {
		String type=e.getJfutype();
		String source=e.getSource();//		source;//1-意向客户新增   2-注册用户新增
		EventRes res=new EventRes("Y", "");
		try {
	//		5.修改超级管理员   用户审核count表  加1
			String administrator="";
			String menuStr="";
			
			if("2".equals(source)){
				if("1".equals(type)){//1-发包方  
					administrator=(String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("re.contract.administratorid");//發包方
					menuStr=(String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("re.contract.menuid");//發包方
				}
				if("2".equals(type)){//2-接包方
					administrator=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("re.package.managerid");//接包方
					menuStr=(String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("re.package.menuid");//發包方
				}
			}
			
			if("1".equals(source)){
				if("1".equals(type)){//1-发包方  
					administrator=(String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("tour.contract.administratorid");//發包方
					menuStr=(String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("tour.contract.menuid");//發包方
				}
				if("2".equals(type)){//2-接包方
					administrator=(String)CustomizedPropertyPlaceholderConfigurer.getContextProperty("tour.package.managerid");//接包方
					menuStr=(String) CustomizedPropertyPlaceholderConfigurer.getContextProperty("tour.package.menuid");//發包方
				}
			}
			
			Integer administratorMenuurlId=Integer.parseInt(menuStr);
			Event event=new Event();
			event.setUserId(administrator);
			Event resevent=eventDao.getEventByUserId(event);
			if(resevent!=null){
				resevent.setCount(resevent.getCount()+1);
				eventDao.updateEventByUserId(resevent);
			}else{
				event.setMenuId(administratorMenuurlId);
//				event.setSeid(DateUtil.getcurrentTimeMillis());
				event.setCount(1);
				eventDao.addEvent(event);
			}
		} catch (Exception e1) {
			res.setCode("N");
			res.setMsg(e1.toString());
		}
		return res;
	}
}
