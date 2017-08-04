package com.stylefeng.guns.modular.mso.controller.csadmin;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 任务管理控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 16:14:20
 */
@Controller
@RequestMapping("/taskManage")
public class TaskManageController extends BaseController {

    private String PREFIX = "/mso/taskManage/";

    /**
     * 跳转到任务管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "taskManage.html";
    }

    /**
     * 跳转到添加任务管理
     */
    @RequestMapping("/taskManage_add")
    public String taskManageAdd() {
        return PREFIX + "taskManage_add.html";
    }

    /**
     * 跳转到修改任务管理
     */
    @RequestMapping("/taskManage_update/{taskManageId}")
    public String taskManageUpdate(@PathVariable String taskManageId, Model model) {
          model.addAttribute(taskManageId);
        return PREFIX + "taskManage_edit.html";
    }

    /**
     * 获取任务管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增任务管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除任务管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改任务管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 任务管理详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
