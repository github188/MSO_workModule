package com.stylefeng.guns.modular.mso.controller.bd;



import com.stylefeng.guns.common.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * bd用户审核控制器
 *
 * @author fengshuonan
 * @Date 2017-08-04 10:30:02
 */
@Controller
@RequestMapping("/bdFUserReview")
public class BdFUserReviewController extends BaseController {

    private String PREFIX = "/mso/bdFUserReview/";

    /**
     * 跳转到bd用户审核首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "bdFUserReview.html";
    }

    /**
     * 跳转到添加bd用户审核
     */
    @RequestMapping("/bdFUserReview_add")
    public String bdFUserReviewAdd() {
        return PREFIX + "bdFUserReview_add.html";
    }

    /**
     * 跳转到修改bd用户审核
     */
    @RequestMapping("/bdFUserReview_update/{bdFUserReviewId}")
    public String bdFUserReviewUpdate(@PathVariable String bdFUserReviewId, Model model) {
          model.addAttribute(bdFUserReviewId);
        return PREFIX + "bdFUserReview_edit.html";
    }

    /**
     * 获取bd用户审核列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return null;
    }

    /**
     * 新增bd用户审核
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add() {
        return super.SUCCESS_TIP;
    }

    /**
     * 删除bd用户审核
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete() {
        return SUCCESS_TIP;
    }


    /**
     * 修改bd用户审核
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update() {
        return super.SUCCESS_TIP;
    }

    /**
     * bd用户审核详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
