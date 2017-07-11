package com.mso.utils;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.OncePerRequestFilter;

public class CrossFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
            //"*"存在风险，建议指定可信任的域名来接收响应信息，如"http://www.sosoapi.com"
            response.addHeader("Access-Control-Allow-Origin", "*");
        	//如果存在自定义的header参数，需要在此处添加，逗号分隔
            response.addHeader("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, "
        			+ "If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, "
        			+ "Content-Type, X-E4M-With");
            response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,OPTIONS");
            filterChain.doFilter(request, response);
    }
}