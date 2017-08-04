package com.stylefeng.guns.modular.mso.controller.csadmin;

import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 订单指派控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 16:24:09
 */
@Controller
@RequestMapping("/orderSet")
public class OrderSetController extends BaseController {

    private String PREFIX = "/mso/orderSet/";

    /**
     * 跳转到订单指派首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "orderSet.html";
    }

    /**
     * 跳转到添加订单指派
     */
    @RequestMapping("/orderSet_add")
    public String orderSetAdd() {
        return PREFIX + "orderSet_add.html";
    }

    /**
     * 跳转到修改订单指派
     */
    @RequestMapping("/orderSet_update/{orderSetId}")
    public String orderSetUpdate(@PathVariable String orderSetId, Model model) {
          model.addAttribute(orderSetId);
        return PREFIX + "orderSet_edit.html";
    }

    /**
     * 获取订单指派列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增订单指派
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除订单指派
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改订单指派
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 订单指派详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
