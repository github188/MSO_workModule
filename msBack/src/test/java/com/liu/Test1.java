package com.liu;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.stylefeng.guns.GunsApplication;
import com.stylefeng.guns.modular.mso.service.IBdService;
/**
 * springboot 的 junit 配置..
 * @author liu
 *
 */

@RunWith(SpringRunner.class) 
@SpringBootTest(classes = GunsApplication.class)
@WebAppConfiguration
public class Test1 {
	 
	
	//必须用接口声明- -
	@Autowired
	private IBdService bdService;
	
	private Logger log = Logger.getLogger(this.getClass());
	
	@Test
	public void test1(){
		System.out.println(bdService.list());
		log.info("heiheihei");
		 
	}

}
