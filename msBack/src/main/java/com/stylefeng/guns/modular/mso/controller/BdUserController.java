package com.stylefeng.guns.modular.mso.controller;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stylefeng.guns.common.annotion.log.BussinessLog;
import com.stylefeng.guns.common.constant.Dict;
import com.stylefeng.guns.common.controller.BaseController;
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
@RequestMapping("/bduser")
public class BdUserController extends BaseController {
	
	
//	@Autowired
//	private BdService bdService;
	
	@Autowired
	private BdMapper bdMapper;

    private String PREFIX = "/mso/darren/";


    
	/**
	 * 2.5.0版本bd 管理员操作用户
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/admin")
	public void listBDV25useradmin(HttpServletRequest request, HttpServletResponse response){
		//MyHttpServletUtil.responseAjax(response); 	
		try {
			request.getRequestDispatcher("/static/html/mso/darren/management-user-admin.html").forward(request, response);
		}catch (Exception e) {
			e.printStackTrace();
			//logger.error(e.toString(), e);
		}
	}
    
    
    
    

    /**
     * 跳转到添加bd
     */
    @RequestMapping("/bd_add")
    public String bdAdd() {
    	System.out.println("7777");
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
      //  Map a = new ConcurrentHashMap<>();
        LogObjectHolder.me().set(bd);
        return PREFIX + "bd_edit.html";
    }

    /**
     * 获取bd列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(Bd bd) {
    	System.out.println("88888");
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
    @BussinessLog(value = "修改bd", key = "name")
    @ResponseBody
    public Object update(Bd bd) {
    	System.out.println("777777777");
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
