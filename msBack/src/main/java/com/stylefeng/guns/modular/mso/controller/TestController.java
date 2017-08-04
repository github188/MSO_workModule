package com.stylefeng.guns.modular.mso.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {


    @Value("${myconfig}")
    private String myconfig;
    
    @Value("${b.c}")
    private String m;


    @RequestMapping("/getProperties")
    public String getProperties(){
        return myconfig+"呵呵呵呵"+m;
    }
}
