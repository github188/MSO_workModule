package com.mso.controller.servicetype;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.HFservicetype;
import com.mso.res.servicetype.HFservicetypeRes;
import com.mso.service.HFservicetypeService;
@Controller
public class HFserviceTypeController extends BaseController {
	@Autowired
	private HFservicetypeService hfservicetypeService;

	public HFservicetypeService getHfservicetypeService() {
		return hfservicetypeService;
	}

	public void setHfservicetypeService(HFservicetypeService hfservicetypeService) {
		this.hfservicetypeService = hfservicetypeService;
	}

	/**
     * 根据display(前台是否显示)来查询
     * @param user
     * @return
     */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="getHfservicesTypeOpen")
	public HFservicetypeRes getHfservicesTypeOpen(){
		HFservicetypeRes res=new HFservicetypeRes("Y","");
		try {
			HFservicetype hfsertype=new HFservicetype();
			int display=0;//在前端显示
			hfsertype.setDisplay(display);
			ArrayList<HFservicetype> hfservicetypelist=(ArrayList<HFservicetype>) hfservicetypeService.getHfservicesTypeOpen(hfsertype);
			res.setHfservicetypelist(hfservicetypelist);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg("获取数据失败");
			e.printStackTrace();
		}
		return res;
	}
}
