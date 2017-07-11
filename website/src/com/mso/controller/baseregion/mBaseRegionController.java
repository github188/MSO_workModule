package com.mso.controller.baseregion;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mso.controller.base.BaseController;
import com.mso.model.BaseRegion;
import com.mso.service.mBaseRegionService;

@Controller
public class mBaseRegionController extends BaseController {
    @Autowired  
	private mBaseRegionService mbaseregionservice;

	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="getBaseRegionByPro")
	public JSONObject getBaseRegionByPro(BaseRegion  base){
		JSONObject o=new JSONObject();
		o.put("code","Y");
		o.put("msg", "");
		try {
			base.setRegionType(1);
			List<BaseRegion> basreglist=mbaseregionservice.getBaseRegionByPro(base);
			o.put("basreglist", basreglist);
		} catch (Exception e) {
			o.put("code","N");
			o.put("msg", "获取数据失败");
		}
		return o;
	}
	
	

	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="getBaseRegionByProtest")
	public JSONObject getBaseRegionByProtest(BaseRegion  base){
		JSONObject o=new JSONObject();
		o.put("code","Y");
		o.put("msg", "");
		try {
			base.setRegionType(1);
			List<BaseRegion> basreglist=new ArrayList<BaseRegion>();
			BaseRegion r=new BaseRegion();
			r.setAgencyId(1);
			basreglist.add(r);
			//=mbaseregionservice.getBaseRegionByPro(base);
			o.put("YYY", basreglist);
		} catch (Exception e) {
			o.put("code","N");
			o.put("msg", "获取数据失败");
		}
		return o;
	}
	
	
	@RequestMapping(value="mbase")
	public ModelAndView toMain()throws Exception{
		ModelAndView mv = this.getModelAndView();
		mv.setViewName("jsp/home_bak/mbase.jsp");
		return mv;
	}
	
}
