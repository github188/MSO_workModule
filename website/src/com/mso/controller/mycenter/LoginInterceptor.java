package com.mso.controller.mycenter;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 * 登陆拦截器.  /防止表单提交拦截
 */
public class LoginInterceptor extends HandlerInterceptorAdapter {
 
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    	HttpSession session=request.getSession();
		@SuppressWarnings("unchecked")
		Map<String, String> usermap=(Map<String, String>) session.getAttribute("usermap");//手机号
		if(usermap==null){
//		    response.sendRedirect("home2_toLogin");
		    response.sendRedirect("login.html");
		    return false;
		}else{
			return true;
		}
    }
 
    
    
    private boolean isRepeatSubmit(HttpServletRequest request) {
        String serverToken = (String) request.getSession(false).getAttribute("token");
        if (serverToken == null ) {
            return true ;
        }
        String clinetToken = request.getParameter("token");
        if (clinetToken == null ) {
            return true ;
        }
        if (!serverToken.equals(clinetToken)) {
            return true ;
        }
        return false ;
    }
    
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        super.postHandle(request, response, handler, modelAndView);
    }
}