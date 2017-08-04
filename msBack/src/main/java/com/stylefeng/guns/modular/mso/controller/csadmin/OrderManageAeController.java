package com.stylefeng.guns.modular.mso.controller.csadmin;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 订单管理ae控制器
 *
 * @author fengshuonan
 * @Date 2017-08-04 13:42:08
 */
@Controller
@RequestMapping("/orderManageAe")
public class OrderManageAeController extends BaseController {

    private String PREFIX = "/mso/orderManageAe/";

    /**
     * 跳转到订单管理ae首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "orderManageAe.html";
    }

    /**
     * 跳转到添加订单管理ae
     */
    @RequestMapping("/orderManageAe_add")
    public String orderManageAeAdd() {
        return PREFIX + "orderManageAe_add.html";
    }

    /**
     * 跳转到修改订单管理ae
     */
    @RequestMapping("/orderManageAe_update/{orderManageAeId}")
    public String orderManageAeUpdate(@PathVariable String orderManageAeId, Model model) {
          model.addAttribute(orderManageAeId);
        return PREFIX + "orderManageAe_edit.html";
    }

    /**
     * 获取订单管理ae列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增订单管理ae
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除订单管理ae
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改订单管理ae
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 订单管理ae详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
