package com.mso.controller.jfuser;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mso.model.JfUser;
import com.mso.service.IUserService;


@Controller
@RequestMapping("/UserController")
public class UserController {

	@Autowired
    private IUserService userService;
    
    @RequestMapping("/testLogin")
    public ModelAndView login(HttpServletRequest request,
            HttpServletResponse response) throws UnsupportedEncodingException{
        request.setCharacterEncoding("UTF-8");
        String name = request.getParameter("name");
        String password = request.getParameter("password");
        System.out.println("接收到的name:"+name+"/ password:"+password);
        ModelAndView modelAndView = new ModelAndView();
        JfUser user = userService.getUserByFuid("101","1");
        modelAndView.addObject("user",user);
        modelAndView.setViewName("/jsp/home_bak/dsq.jsp");
        return modelAndView;
    }
    
}