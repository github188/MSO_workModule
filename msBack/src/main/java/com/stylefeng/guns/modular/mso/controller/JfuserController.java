package com.stylefeng.guns.modular.mso.controller;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 前台用户控制器
 *
 * @author fengshuonan
 * @Date 2017-06-15 14:54:12
 */
@Controller
@RequestMapping("/jfuser")
public class JfuserController extends BaseController {

    private String PREFIX = "/mso/jfuser/";

    /**
     * 跳转到前台用户首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "jfuser.html";
    }

    /**
     * 跳转到添加前台用户
     */
    @RequestMapping("/jfuser_add")
    public String jfuserAdd() {
        return PREFIX + "jfuser_add.html";
    }

    /**
     * 跳转到修改前台用户
     */
    @RequestMapping("/jfuser_update/{jfuserId}")
    public String jfuserUpdate(@PathVariable String jfuserId, Model model) {
    	System.out.println(jfuserId);
          model.addAttribute(jfuserId);
        return PREFIX + "jfuser_edit.html";
    }

    /**
     * 获取前台用户列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增前台用户
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除前台用户
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改前台用户
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 前台用户详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
