package com.stylefeng.guns.modular.mso.controller.bd;

import com.alibaba.fastjson.JSONObject;
import com.stylefeng.guns.common.annotion.log.MyBussinessLogRemote;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.modular.mso.util.OkHttpUtils;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * bd发包方用户管理控制器
 *
 * @author fengshuonan
 * @Date 2017-07-18 18:18:30
 */
@Controller
@RequestMapping("/bdFUserManage")
public class BdFUserManageController extends BaseController {

    private String PREFIX = "/mso/bdFUserManage/";

    /**
     * 跳转到bd发包方用户管理首页//
     */
    @RequestMapping("")
    public String index() {
    		//System.out.println(LogObjectHolder.me().getKk());
        return PREFIX + "bdFUserManage.html";
    }

    /**
     * 跳转到添加bd发包方用户管理
     */
    @RequestMapping("/bdFUserManage_add")
    public String bdFUserManageAdd() {
        return PREFIX + "bdFUserManage_add.html";
    }

    /**
     * 跳转到修改bd发包方用户管理
     */
    @RequestMapping("/bdFUserManage_update/{bdFUserManageId}")
    public String bdFUserManageUpdate(@PathVariable String bdFUserManageId, Model model) {
          model.addAttribute(bdFUserManageId);
          String url = myProperties.getUrl()+"/bdusers/all/users/"+bdFUserManageId;
          JSONObject json = null;
          try {
        	  json = OkHttpUtils.syncGetToJSON(url);
        	  System.out.println(json);
        	  model.addAttribute("jsondata",json.get("data"));
        	  LogObjectHolder.me().set(json.get("data"));
          } catch (Exception e) {
        	  e.printStackTrace();
        	  OkHttpUtils.log.info(e.getCause().getMessage());
          		}
        return PREFIX + "bdFUserManage_edit.html";
    }

    /**
     * 获取bd发包方用户管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增bd发包方用户管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除bd发包方用户管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }

    /**
     * 修改bd发包方用户管理
     */
    @RequestMapping(value = "/update/{id}")
    @ResponseBody
    @MyBussinessLogRemote(value = "修改BD发包方用户管理")
    public Object update(@RequestBody JSONObject json,@PathVariable String id,HttpServletRequest request) {
    	System.out.println("1111");
    	String url = myProperties.getUrl()+"/bdusers/all/users/"+id;
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
     * bd发包方用户管理详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
