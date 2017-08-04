package com.stylefeng.guns.modular.mso.controller.csadmin;


import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * 分配ae专员控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 15:52:58
 */
@Controller
@RequestMapping("/allocateAe")
public class AllocateAeController extends BaseController {

    private String PREFIX = "/mso/allocateAe/";

    /**
     * 跳转到分配ae专员首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "allocateAe.html";
    }

    /**
     * 跳转到添加分配ae专员
     */
    @RequestMapping("/allocateAe_add")
    public String allocateAeAdd() {
        return PREFIX + "allocateAe_add.html";
    }

    /**
     * 跳转到修改分配ae专员
     */
    @RequestMapping("/allocateAe_update/{allocateAeId}")
    public String allocateAeUpdate(@PathVariable String allocateAeId, Model model) {
          model.addAttribute(allocateAeId);
        return PREFIX + "allocateAe_edit.html";
    }

    /**
     * 获取分配ae专员列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增分配ae专员
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除分配ae专员
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改分配ae专员
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * 分配ae专员详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
