package com.stylefeng.guns.modular.mso.controller.csadmin;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 订单管理控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 16:28:13
 */
@Controller
@RequestMapping("/orderManage")
public class OrderManageController extends BaseController {

    private String PREFIX = "/mso/orderManage/";

    /**
     * 跳转到订单管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "orderManage.html";
    }

    /**
     * 跳转到添加订单管理
     */
    @RequestMapping("/orderManage_add")
    public String orderManageAdd() {
        return PREFIX + "orderManage_add.html";
    }

    /**
     * 跳转到修改订单管理
     */
    @RequestMapping("/orderManage_update/{orderManageId}")
    public String orderManageUpdate(@PathVariable String orderManageId, Model model) {
          model.addAttribute(orderManageId);
        return PREFIX + "orderManage_edit.html";
    }

    /**
     * 获取订单管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增订单管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除订单管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改订单管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 订单管理详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
