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
 * BD发包方需求审核控制器
 *
 * @author fengshuonan
 * @Date 2017-07-18 17:16:01
 */
@Controller
@RequestMapping("/bdDemandReview")
public class BdDemandReviewController extends BaseController {

    private String PREFIX = "/mso/bdDemandReview/";

    /**
     * 跳转到BD发包方需求审核首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "bdDemandReview.html";
    }

    /**
     * 跳转到添加BD发包方需求审核
     */
    @RequestMapping("/bdDemandReview_add")
    public String bdDemandReviewAdd() {
        return PREFIX + "bdDemandReview_add.html";
    }

    /**
     * 跳转到修改BD发包方需求审核
     */
    @RequestMapping("/bdDemandReview_update/{bdDemandReviewId}")
    public String bdDemandReviewUpdate(@PathVariable String bdDemandReviewId, Model model) {
          model.addAttribute(bdDemandReviewId);
          String url = myProperties.getUrl()+"/bdusers/1/demands/"+bdDemandReviewId;
            
            JSONObject json = null;
            try {
          	  json = OkHttpUtils.syncGetToJSON(url);
          	  	model.addAttribute("jsondata",json.get("data"));
          	  	System.out.println(json.get("data"));
          	  	LogObjectHolder.me().set(json.get("data"));
            } catch (Exception e) {
  			// TODO Auto-generated catch block
          	  e.printStackTrace();
          	  OkHttpUtils.log.info(e.getCause().getMessage());
            		}
        return PREFIX + "bdDemandReview_edit.html";
    }

    /**
     * 获取BD发包方需求审核列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增BD发包方需求审核
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除BD发包方需求审核
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改BD发包方需求审核
     */
    @RequestMapping(value = "/update/{id}")
    @ResponseBody
    @MyBussinessLogRemote(value = "修改BD发包方需求审核")
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
     * BD发包方需求审核详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
