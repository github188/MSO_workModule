package com.mso.controller.baseregion;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.BaseRegion;
import com.mso.model.CustomArea;
import com.mso.res.baseregion.CustomAreares;
import com.mso.service.BaseRegionService;
import com.mso.service.CustomAreaService;
import com.mso.utils.StringUtil;
@Controller
public class CustomAreaController extends BaseController{
   
	@Autowired
	public CustomAreaService customareaservice;
    @Autowired
	public BaseRegionService baseregionservice;
	
	
	
	public BaseRegionService getBaseregionservice() {
		return baseregionservice;
	}


	public void setBaseregionservice(BaseRegionService baseregionservice) {
		this.baseregionservice = baseregionservice;
	}


	public CustomAreaService getCustomareaservice() {
		return customareaservice;
	}


	public void setCustomareaservice(CustomAreaService customareaservice) {
		this.customareaservice = customareaservice;
	}
	
	

    /**
     * 根据fuid查询信息自定义区域表
     * @param fuid
     * @return
     * getCustomAreaFuid
     */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="customarea/{fuid}")
	public CustomAreares getCustomAreaFuid(@PathVariable String fuid,HttpSession session){
		
		CustomAreares cuares=new CustomAreares("Y", null);
		CustomArea cuar=new CustomArea();
		BaseRegion base=new BaseRegion();
		try {
			cuar.setFuid(fuid);
	        //查城市，默认条件ABC
			int regiontypeInt=2;
			base.setRegionType(regiontypeInt);
			base.setFirstWord("ABC");
			baseregionservice.cutOutString(base);
			
			List<CustomArea> list=customareaservice.getCustomArea(cuar);
			List<BaseRegion> blist=baseregionservice.getBaseRegion(base);
			cuares.setGetCustomAreaList(list);
			cuares.setBaseRegionCusA(blist);
		} catch (Exception e) {
			cuares.setCode("N");
			cuares.setMsg("获取数据失败");
			e.printStackTrace();
		}
		return cuares;
		
	}
	/**
	 * 根据fuid和areaId删除自定义区域表信息
	 * @param fuid
	 * @param areaId
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="deleteCustomAreaFuidAreaId/{fuid}/{areaId}")
	public CustomAreares deleteCustomAreaFuidAreaId(@PathVariable String fuid,@PathVariable String areaId){
		CustomAreares res=new CustomAreares("Y","");
		try {
			CustomArea cuar=new CustomArea();
			cuar.setFuid(fuid);
			int sareaId=Integer.parseInt(areaId);
			cuar.setAreaId(sareaId);
			customareaservice.deleteCustomArea(cuar);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg("删除信息失败");
			e.printStackTrace();
		}
		return res;
	}
	/**
	 * 向自定义区域添加城市
	 * @param fuid
	 * @param areaId
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="addCustomAreaFuidArea/{fuid}/{areaRemark}")
	public CustomAreares addCustomAreaFuidArea(@PathVariable String fuid,@PathVariable String areaRemark){
		CustomAreares res=new CustomAreares("Y","");
		try {
			CustomArea cuar=new CustomArea();
			cuar.setFuid(fuid);
			cuar.setAreaName("自定义区域");
			cuar.setAreaRemark(areaRemark);
			customareaservice.addCustomArea(cuar);
		} catch (Exception e) {
		    res.setCode("N");
		    res.setMsg("添加失败");
		    e.printStackTrace();
		}
		return res;
	}
	
	/**
	 * 根据fuid修改areaRemark
	 * @param fuid
	 * @param areaId
	 */
//	@ResponseBody
//	@RequestMapping(method=RequestMethod.GET,value="updateCustomAreaAreaRemark/{fuid}/{areaId}/{areaRemark}/areaRemark_htm")
//	public CustomAreares updateCustomAreaAreaRemark(@PathVariable String areaId, @PathVariable String fuid,@PathVariable String areaRemark){
//		CustomAreares res=new CustomAreares("Y","");
//		CustomArea cuar=new CustomArea();
//		try {
//			cuar.setFuid(fuid);
//			cuar.setAreaRemark(areaRemark);
////			cuar.setAreaId();
//			
//			customareaservice.updateCustomAreaAreaRemark(cuar);
//	        
//		} catch (Exception e) {
//			res.setCode("N");
//			res.setMsg("修改失败");
//			e.printStackTrace();
//		}
//		return res;
//	}
	
	/**
	 * 当 areaId不为空执行update操作
	 * 当areaid为空执行insert操作
	 * @param areaId
	 */
	@ResponseBody   
	@RequestMapping("/customarea")
	public CustomAreares updateAddInsertCustomArea(CustomArea c,HttpSession session){

		CustomAreares res=new CustomAreares("Y","");
		if(StringUtil.isNull(c.getFuid())){
		     res.setCode("N");
			 res.setMsg("请输入fuid");
		 }
				     if(c.getAreaId()>0){
			    		 //修改信息
				    	 try {
				    		 CustomArea cus=customareaservice.getCustomAreaModel(c);
				    		 if(null!=cus){
				    			 if(null!=c.getAreaName()){
				    				 cus.setAreaName(c.getAreaName());
				    			 }
				    			 if(null!=c.getAreaRemark()){
				    				 cus.setAreaRemark(c.getAreaRemark());
				    			 }	
				    		 }else{
				    			 res.setCode("N");
				    			 res.setMsg("没有获取到信息");
				    		 }    
					    	 customareaservice.updateCustomAreaAreaRemark(cus);
						} catch (Exception e) {
							 res.setCode("N");
							 res.setMsg("修改信息失败");
							 e.printStackTrace();
						}
				    	 
				     }else{
				     //添加操作
				    	try {
//				    		c.setFuid(jfuid);
					 		c.setAreaName(c.getAreaName());
					 		c.setAreaRemark(c.getAreaRemark());
					 		customareaservice.addCustomArea(c);
						} catch (Exception e) {
							res.setCode("N");
							res.setMsg("添加信息失败");
							e.printStackTrace();
						}
				    	
				     }
                     return res;
	}
	
	
}
