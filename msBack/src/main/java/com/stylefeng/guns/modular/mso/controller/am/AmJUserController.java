package com.stylefeng.guns.modular.mso.controller.am;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * am接包方用户信息控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 16:51:33
 */
@Controller
@RequestMapping("/amJUser")
public class AmJUserController extends BaseController {

    private String PREFIX = "/mso/amJUser/";

    /**
     * 跳转到am接包方用户信息首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "amJUser.html";
    }

    /**
     * 跳转到添加am接包方用户信息
     */
    @RequestMapping("/amJUser_add")
    public String amJUserAdd() {
        return PREFIX + "amJUser_add.html";
    }

    /**
     * 跳转到修改am接包方用户信息
     */
    @RequestMapping("/amJUser_update/{amJUserId}")
    public String amJUserUpdate(@PathVariable String amJUserId, Model model) {
          model.addAttribute(amJUserId);
        return PREFIX + "amJUser_edit.html";
    }

    /**
     * 获取am接包方用户信息列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增am接包方用户信息
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除am接包方用户信息
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改am接包方用户信息
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * am接包方用户信息详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
