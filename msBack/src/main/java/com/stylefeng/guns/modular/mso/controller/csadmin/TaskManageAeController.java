package com.stylefeng.guns.modular.mso.controller.csadmin;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 任务管理ae控制器
 *
 * @author fengshuonan
 * @Date 2017-08-04 12:00:14
 */
@Controller
@RequestMapping("/taskManageAe")
public class TaskManageAeController extends BaseController {

    private String PREFIX = "/mso/taskManageAe/";

    /**
     * 跳转到任务管理ae首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "taskManageAe.html";
    }

    /**
     * 跳转到添加任务管理ae
     */
    @RequestMapping("/taskManageAe_add")
    public String taskManageAeAdd() {
        return PREFIX + "taskManageAe_add.html";
    }

    /**
     * 跳转到修改任务管理ae
     */
    @RequestMapping("/taskManageAe_update/{taskManageAeId}")
    public String taskManageAeUpdate(@PathVariable String taskManageAeId, Model model) {
          model.addAttribute(taskManageAeId);
        return PREFIX + "taskManageAe_edit.html";
    }

    /**
     * 获取任务管理ae列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增任务管理ae
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除任务管理ae
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改任务管理ae
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 任务管理ae详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
