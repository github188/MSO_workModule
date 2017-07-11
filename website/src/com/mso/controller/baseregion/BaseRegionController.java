package com.mso.controller.baseregion;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.BaseRegion;
import com.mso.res.baseregion.BaseRegionres;
import com.mso.service.BaseRegionService;

@Controller
public class BaseRegionController extends BaseController {
    @Autowired  
	private BaseRegionService baseregionservice;

	public BaseRegionService getBaseregionservice() {
		return baseregionservice;
	}

	public void setBaseregionservice(BaseRegionService baseregionservice) {
		this.baseregionservice = baseregionservice;
	}
    
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="getBaseRegion")
	public BaseRegionres getBaseRegion(BaseRegion  base){
		BaseRegionres br=new BaseRegionres("Y","");
		try {
			List<BaseRegion> basreglist=baseregionservice.getBaseRegion(base);
			br.setBasreglist(basreglist);
		} catch (Exception e) {
			br.setCode("N");
			br.setMsg("互取数据失败");
		}
		return br;
	}
	
	/**
	 * 查询  我要选的城市-2   我要选的省份-1  我要选的区域-4
	 * @param regionType
	 * @return
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="getBaseRegionType/{regionType}")
	public JSONObject getBaseRegionType(@PathVariable String regionType){		
		BaseRegionres br=new BaseRegionres("Y","");
		JSONObject jsonObject =  new JSONObject();
		try {
			int regionTypeInt=Integer.parseInt(regionType);
			BaseRegion base=new BaseRegion();
			if(regionTypeInt==2){
				   base.setCityrank(1);
				}else{
					base.setCityrank(0);
				}
			base.setRegionType(regionTypeInt);
			List<BaseRegion> basreglist=baseregionservice.getBaseRegion(base);
			
			jsonObject.put("code", "Y");
			JSONArray array = new JSONArray();
			for (BaseRegion baseRegion : basreglist) {
				JSONObject json = new JSONObject();
				json.put(baseRegion.getFirstWord(), baseRegion);
				array.add(json);
			}
			jsonObject.put("basreglist", array);
			br.setGetRegionType(basreglist);
			
		} catch (Exception e) {
			jsonObject.put("code", "N");
			br.setMsg("获取数据失败");
		}
		return jsonObject;
	}
	

	
	/**
	 * 根据首字母查询城市(regionType写死是2)
	 * @param firstWord
	 * @return
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="getBaseRegionTyp_firstWord/{firstWord}")
	public BaseRegionres getBaseRegionTyp_firstWord(@PathVariable String firstWord){//@PathVariable String regionType,/{regionType}
		
		BaseRegionres br=new BaseRegionres("Y","");
		try {
			BaseRegion base=new BaseRegion();
			int regiontypeInt=2;
			base.setRegionType(regiontypeInt);
			base.setFirstWord(firstWord);//条件2;
			baseregionservice.cutOutString(base);
			
			List<BaseRegion> basreglist=baseregionservice.getBaseRegion(base);
			br.setGetRegionType(basreglist);
		} catch (Exception e) {
			br.setCode("N");
			br.setMsg("获取数据失败");
		}
		return br;
	}
}
