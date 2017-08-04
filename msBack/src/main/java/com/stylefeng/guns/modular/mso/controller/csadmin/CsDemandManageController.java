package com.stylefeng.guns.modular.mso.controller.csadmin;



import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * cs需求管理控制器
 *
 * @author fengshuonan
 * @Date 2017-07-21 15:41:48
 */
@Controller
@RequestMapping("/csDemandManage")
public class CsDemandManageController extends BaseController {

    private String PREFIX = "/mso/csDemandManage/";

    /**
     * 跳转到cs需求管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "csDemandManage.html";
    }

    /**
     * 跳转到添加cs需求管理
     */
    @RequestMapping("/csDemandManage_add")
    public String csDemandManageAdd() {
        return PREFIX + "csDemandManage_add.html";
    }

    /**
     * 跳转到修改cs需求管理
     */
    @RequestMapping("/csDemandManage_update/{csDemandManageId}")
    public String csDemandManageUpdate(@PathVariable String csDemandManageId, Model model) {
          model.addAttribute(csDemandManageId);
        return PREFIX + "csDemandManage_edit.html";
    }

    /**
     * 获取cs需求管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增cs需求管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除cs需求管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改cs需求管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * cs需求管理详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
