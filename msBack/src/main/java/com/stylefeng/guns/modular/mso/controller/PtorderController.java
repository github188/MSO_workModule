package com.stylefeng.guns.modular.mso.controller;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 订单控制器
 *
 * @author fengshuonan
 * @Date 2017-06-15 17:37:43
 */
@Controller
@RequestMapping("/ptorder")
public class PtorderController extends BaseController {

    private String PREFIX = "/mso/ptorder/";

    /**
     * 跳转到订单首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "ptorder.html";
    }

    /**
     * 跳转到添加订单
     */
    @RequestMapping("/ptorder_add")
    public String ptorderAdd() {
        return PREFIX + "ptorder_add.html";
    }

    /**
     * 跳转到修改订单
     */
    @RequestMapping("/ptorder_update/{ptorderId}")
    public String ptorderUpdate(@PathVariable String ptorderId, Model model) {
          model.addAttribute(ptorderId);
        return PREFIX + "ptorder_edit.html";
    }

    /**
     * 获取订单列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增订单
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除订单
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改订单
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 订单详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
