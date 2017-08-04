package com.stylefeng.guns.modular.mso.controller.am;



import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * am订单管理控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 16:43:00
 */
@Controller
@RequestMapping("/amOrderManage")
public class AmOrderManageController extends BaseController {

    private String PREFIX = "/mso/amOrderManage/";

    /**
     * 跳转到am订单管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "amOrderManage.html";
    }

    /**
     * 跳转到添加am订单管理
     */
    @RequestMapping("/amOrderManage_add")
    public String amOrderManageAdd() {
        return PREFIX + "amOrderManage_add.html";
    }

    /**
     * 跳转到修改am订单管理
     */
    @RequestMapping("/amOrderManage_update/{amOrderManageId}")
    public String amOrderManageUpdate(@PathVariable String amOrderManageId, Model model) {
          model.addAttribute(amOrderManageId);
        return PREFIX + "amOrderManage_edit.html";
    }

    /**
     * 获取am订单管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增am订单管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除am订单管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改am订单管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * am订单管理详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
