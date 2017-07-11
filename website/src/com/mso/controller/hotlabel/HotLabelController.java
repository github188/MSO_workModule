/**
 * 
 */
package com.mso.controller.hotlabel;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.HotLabel;
import com.mso.res.HotLabelRes;
import com.mso.service.HotLabelService;

/**
 * 
 * 热门标签  列表页
 * 
 */
@Controller
public class HotLabelController extends BaseController {
	
	@Autowired
	HotLabelService hotLabelService;

	public HotLabelService getHotLabelService() {
		return hotLabelService;
	}

	public void setHotLabelService(HotLabelService hotLabelService) {
		this.hotLabelService = hotLabelService;
	}
	
	/**
	 *  查询  热门标签
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/hotlabel")
	public HotLabelRes hotlabel(HttpServletRequest req){
		
		this.logBefore(this.logger, "查询热门标签");
		HotLabelRes hres = new HotLabelRes("Y","");
		String name = req.getParameter("name");
		
		try{
			if(null!=name && !"".equals(name)){
				name = java.net.URLDecoder.decode(name,"utf-8");  //especially for中文传参的解码
				//System.out.println(name);	
			}
			HotLabel label = new HotLabel();
			label.setName(name);
			List<HotLabel> hlist = hotLabelService.getHotLabel(label);
			hres.setHotLabelList(hlist);
			
		}catch(Exception e){
			System.out.println(e.toString());
			hres.setCode("N");
			hres.setMsg("获取数据失败");
		}
		this.logAfter(this.logger);
		
		return hres;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
