package com.stylefeng.guns.modular.mso.quartz;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.beans.factory.annotation.Autowired;

import com.stylefeng.guns.modular.mso.mapper.BdMapper;

public class QuartzJobExample implements Job {
	
	@Autowired
	private BdMapper bdMapper;
	
	
	
    @Override
    public void execute(JobExecutionContext arg0) throws JobExecutionException {
        System.out.println(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) + "啊哈哈哈哈");
    //	System.out.println(bdMapper.bdlist(null));
    	 for (int i = 0; i < 100000000; i++) {
			try {
				//Thread.currentThread().sleep(1000);
				i++;
				System.out.println(i);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
    }
    

}
