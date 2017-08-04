package com.stylefeng.guns.modular.mso.controller.bd;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.stylefeng.guns.common.annotion.log.MyBussinessLogRemote;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.modular.mso.util.OkHttpUtils;

/**
 * BD发包方需求管理控制器
 *
 * @author fengshuonan
 * @Date 2017-07-17 17:57:13
 */
@Controller
@RequestMapping("/bdDemandManage")
public class BdDemandManageController extends BaseController {

    private String PREFIX = "/mso/bdDemandManage/";
    

    /**
     * 跳转到BD发包方需求管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "bdDemandManage.html";
    }

    /**
     * 跳转到添加BD发包方需求管理
     */
    @RequestMapping("/bdDemandManage_add")
    public String bdDemandManageAdd() {
        return PREFIX + "bdDemandManage_add.html";
    }

    /**
     * 跳转到修改BD发包方需求管理
     */
    @RequestMapping("/bdDemandManage_update/{bdDemandManageId}")
    public String bdDemandManageUpdate(@PathVariable String bdDemandManageId, Model model) {
    	//6666
          model.addAttribute(bdDemandManageId);
          String url = myProperties.getUrl()+"/bdusers/1/demands/"+bdDemandManageId;
          JSONObject json = null;
          try {
        	  json = OkHttpUtils.syncGetToJSON(url);
        	  	model.addAttribute("jsondata",json.get("data"));
        	  	LogObjectHolder.me().set(json.get("data"));
          } catch (Exception e) {
        	  e.printStackTrace();
        	  OkHttpUtils.log.info(e.getCause().getMessage());
          		}
        return PREFIX + "bdDemandManage_edit.html";
    }

    /**
     * 获取BD发包方需求管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增BD发包方需求管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除BD发包方需求管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改BD发包方需求管理
     */
    @RequestMapping(value = "/update/{id}")
    @ResponseBody
    @MyBussinessLogRemote(value = "修改BD发包方需求")
    public Object update(@RequestBody JSONObject json,@PathVariable String id,HttpServletRequest request) {
    	String roleid = request.getParameter("roleid");
    	String rolename = request.getParameter("rolename");
    	String url = myProperties.getUrl()+"/bdusers/"+roleid+"/demands/"+id+"?rolename="+rolename;
    	try {
			JSONObject jsonr = OkHttpUtils.syncPatchToJSON(url, json);
			LogObjectHolder.me().setUpdateobject(json);
			if(jsonr.getString("code").equals("0")){
				return super.SUCCESS_TIP;
			}else{
				return super.ERROR;
			}
		} catch (Exception e) {
			e.printStackTrace();
			OkHttpUtils.log.info(e.getCause().getMessage());
			return super.ERROR;
		}
    }

    /**
     * BD发包方需求管理详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
