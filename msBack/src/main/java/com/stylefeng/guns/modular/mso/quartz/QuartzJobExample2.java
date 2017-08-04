package com.stylefeng.guns.modular.mso.quartz;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

public class QuartzJobExample2 implements Job {
    @Override
    public void execute(JobExecutionContext arg0) throws JobExecutionException {
        System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) + "★★★★★★★★★★★");
        
        System.out.println(Thread.currentThread().getId());
    }
    
    public static void main(String[] args) throws ClassNotFoundException {
    	 Class<?> forName = Class.forName("com.stylefeng.guns.modular.mso.quartz.QuartzJobExample");
    	 System.out.println(forName);
    	 
	}
}
