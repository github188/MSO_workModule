package com.stylefeng.guns.modular.mso.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

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
import com.stylefeng.guns.modular.mso.service.IFbf_demandService;
import com.stylefeng.guns.modular.mso.util.OkHttpUtils;

/**
 * 需求包控制器
 *
 * @author fengshuonan
 * @Date 2017-06-14 13:40:46
 */
@Controller
@RequestMapping("/fbf_demand")
public class Fbf_demandController extends BaseController {

    private String PREFIX = "/mso/fbf_demand/";
    
    
    @Resource
    IFbf_demandService fbf_demandService;

    /**
     * 跳转到需求包首页
     */
    @RequestMapping("")
    public String index() {
    	//System.out.println("4888897");
        return PREFIX + "fbf_demand.html";
    }

    /**
     * 跳转到添加需求包
     */
    @RequestMapping("/fbf_demand_add")
    public String fbf_demandAdd() {
        return PREFIX + "fbf_demand_add.html";
    }

    /**
     * 跳转到修改需求包
     */
    @RequestMapping("/fbf_demand_update/{fbf_demandId}")
    public String fbf_demandUpdate(@PathVariable String fbf_demandId, Model model) {
    //	System.out.println(fbf_demandId);
    	System.out.println("666");
    	//model.addAttribute(fbf_demandId);
    	try {
    		JSONObject json = OkHttpUtils.syncGetToJSON("https://gateway.mshuoke.com/dbservice/fbfdemands/201511201D986F3E");
    		model.addAttribute("json", json);
    		LogObjectHolder.me().set(json);
		} catch (Exception e) {
			e.printStackTrace();
		}
       return PREFIX + "fbf_demand_edit.html";
    }

    /**
     * 获取需求包列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
    	  System.out.println("list");
    	  
        return fbf_demandService.Fbf_demandList(null);
    }

    /**
     * 新增需求包
     */
    @RequestMapping(value = "/add")
    @ResponseBody
     @MyBussinessLogRemote(value = "新增需求包")
    public Object add(@RequestBody JSONObject f) {
    	 System.out.println(f);
    	 //缓存新增的数据
    	 LogObjectHolder.me().set(f);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除需求包
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改需求包
     */
    @RequestMapping(value = "/update/{fbf_demandId}")
    @ResponseBody
    @MyBussinessLogRemote(value = "修改需求包")
    public Object update(@RequestBody JSONObject f) {
    	try {
    		JSONObject json = OkHttpUtils.syncPatchToJSON("https://gateway.mshuoke.com/dbservice/fbfdemands/201511201D986F3E", f);
    		LogObjectHolder.me().setUpdateobject(f);
		} catch (Exception e) {
			e.printStackTrace();
			return super.ERROR;
		}
        return super.SUCCESS_TIP;
    }

    /**
     * 需求包详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
