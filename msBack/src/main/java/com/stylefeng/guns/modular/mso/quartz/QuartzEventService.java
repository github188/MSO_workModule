package com.stylefeng.guns.modular.mso.quartz;

import org.quartz.CronScheduleBuilder;
import org.quartz.SimpleScheduleBuilder;
import org.quartz.Job;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class QuartzEventService {
	 private static final String JOB_GROUP = "event_job_group";
	  private static final String TRIGGER_GROUP = "event_trigger_group";
	  @Autowired
	  private Scheduler scheduler;
	  //新增一个定时器
	  public void addJob(String jobS,int hour,int minute) throws Exception {
		  System.out.println("6789744987897");
		  JobDetail job = JobBuilder.newJob((Class<? extends Job>) Class.forName(jobS)).withIdentity(jobS, JOB_GROUP).build();
		  //定时执行一次(小时,分钟)
	   //Trigger trigger = TriggerBuilder.newTrigger().withIdentity(jobS, TRIGGER_GROUP).startNow().withSchedule(CronScheduleBuilder.dailyAtHourAndMinute(hour, minute)).build();
		  //每两秒执行一次
		  Trigger trigger = TriggerBuilder.newTrigger().withIdentity(jobS, TRIGGER_GROUP).startNow().withSchedule( SimpleScheduleBuilder.repeatSecondlyForever(100)   
).build();
		  System.out.println("++++++++++++++++");
		  System.out.println(job.getKey());
		  System.out.println("++++++++++++++++");
	    scheduler.scheduleJob(job, trigger);
	   // scheduler.resumeJob(arg0);
	  }
	  
	//暂停一个定时器
	  public void pauseJob(String jobS) throws Exception {
		  System.out.println(JobKey.jobKey(jobS,JOB_GROUP));
		
		  scheduler.pauseJob(JobKey.jobKey(jobS,JOB_GROUP));
	  }
	  
	  //恢复一个定时器
	  public void resumeJob(String jobS) throws Exception {
		  scheduler.resumeJob(JobKey.jobKey(jobS,JOB_GROUP));
	  }

}
