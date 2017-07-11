package com.mso.controller.gxpackagemanage;

import java.io.UnsupportedEncodingException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.GXPackageManage;
import com.mso.res.gxpackagemanage.GxPackageManageres;
import com.mso.service.GxPackageManageService;
@Controller
public class GxPackageManageController extends BaseController{
	
	@Autowired
	GxPackageManageService gxpackagemanageservice;

	public GxPackageManageService getGxpackagemanageservice() {
		return gxpackagemanageservice;
	}

	public void setGxpackagemanageservice(
			GxPackageManageService gxpackagemanageservice) {
		this.gxpackagemanageservice = gxpackagemanageservice;
	}
	/**
	 * 套餐列表查询
	 * @param servicetype1-销售线索挖掘  2-数据加工  3-人工客服  
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@ResponseBody
	@RequestMapping("getGxPackageManage/{servicetype}_htm")      
	public GxPackageManageres getGxPackageManage(@PathVariable String servicetype) throws UnsupportedEncodingException{
		
		GxPackageManageres gxrs=new GxPackageManageres("Y","");
		try {
			GXPackageManage gxpm= new GXPackageManage();
			gxpm.setIsdisable(1);
			gxpm.setServicetype(servicetype);
			List<Object>  list=gxpackagemanageservice.getGxPackageManage(gxpm);
			gxrs.setGetGxPackageManagerList(list);
		} catch (Exception e) {
			gxrs.setCode("N");
			gxrs.setMsg("获取数据失败");
			e.printStackTrace();
		}
		return gxrs;
	}
	/**
	 * 查询套餐对象
	 * @param pid
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getGxPackageManagePid/{pid}_htm")
	public GxPackageManageres getGxPackageManagePid(@PathVariable String pid){
		GxPackageManageres gxrs=new GxPackageManageres("Y","");
		try {
			GXPackageManage gxpm= new GXPackageManage();
			int pids=Integer.parseInt(pid);
			gxpm.setPid(pids);
			GXPackageManage project=gxpackagemanageservice.getGxPackageManagePid(gxpm);
			gxrs.setGetgetGxPackageManagePid(project);
		} catch (Exception e) {
			gxrs.setCode("N");
			gxrs.setMsg("获取数据失败");
			e.printStackTrace();
		}
		return gxrs;
	}

}
