package com.stylefeng.guns.modular.mso.controller;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 任务控制器
 *
 * @author fengshuonan
 * @Date 2017-06-15 16:52:27
 */
@Controller
@RequestMapping("/pttask")
public class PttaskController extends BaseController {

    private String PREFIX = "/mso/pttask/";

    /**
     * 跳转到任务首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "pttask.html";
    }

    /**
     * 跳转到添加任务
     */
    @RequestMapping("/pttask_add")
    public String pttaskAdd() {
        return PREFIX + "pttask_add.html";
    }

    /**
     * 跳转到修改任务
     */
    @RequestMapping("/pttask_update/{pttaskId}")
    public String pttaskUpdate(@PathVariable String pttaskId, Model model) {
          model.addAttribute(pttaskId);
        return PREFIX + "pttask_edit.html";
    }

    /**
     * 获取任务列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增任务
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除任务
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改任务
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 任务详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
