package com.stylefeng.guns.modular.mso.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stylefeng.guns.common.constant.factory.ConstantFactory;
import com.stylefeng.guns.common.controller.BaseController;
import com.stylefeng.guns.common.persistence.model.Dept;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.modular.mso.mapper.BdMapper;
import com.stylefeng.guns.modular.mso.model.Bd;

/**
 * bd控制器
 *
 * @author fengshuonan
 * @Date 2017-06-09 15:15:23
 */
@Controller
@RequestMapping("/cs")
public class CSController extends BaseController {
	
	
//	@Autowired
//	private BdService bdService;
	
	@Autowired
	private BdMapper bdMapper;

    private String PREFIX = "/html/cs/";

    /**
     * 跳转到bd首页
     */
    @RequestMapping("")
    public String index() {
    	//System.out.println("5");
        return PREFIX + "test1.html";
    }

    /**
     * 跳转到添加bd
     */
    @RequestMapping("/bd_add")
    public String bdAdd() {
        return PREFIX + "bd_add.html";
    }

    /**
     * 跳转到修改bd
     */
    @RequestMapping("/bd_update/{bdId}")
    public String bdUpdate(@PathVariable String bdId, Model model) {
    	System.out.println("56787987");
    	Bd bd = bdMapper.selectById(bdId);
        model.addAttribute(bd);
       // LogObjectHolder.me().set(bd);
       // System.out.println(LogObjectHolder.me().get().toString());
        
        return PREFIX + "bd_edit.html";
    }

    /**
     * 获取bd列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(Bd bd) {
    	System.out.println("896789787");
    //	return PREFIX + "bd.html";
        return bdMapper.bdlist(bd);
    }

    /**
     * 新增bd
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Bd bd) {
    	 System.out.println(bd);
    	// bd.setId(new Date().toLocaleString());
    	 bdMapper.insertBd(bd);
        return super.SUCCESS_TIP;
    }

    /**
     * 删除bd
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam String bdId) {
    	System.out.println(bdId);
    	bdMapper.deleteBd(bdId);
        return SUCCESS_TIP;
    }


    /**
     * 修改bd
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Bd bd) {
    	bdMapper.updateBd(bd);
        return super.SUCCESS_TIP;
    }

    /**
     * bd详情
     */
    @RequestMapping(value = "/detail")
    @ResponseBody
    public Object detail() {
        return null;
    }
}
