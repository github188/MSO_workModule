package com.test.controller.mycenter;

import net.sf.json.JSONObject;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;

import com.mso.model.HFDemand;
import com.mso.res.DemandHomeRes;
import com.mso.service.IDemandService;



//首先指定Junit的Runner
@RunWith(SpringJUnit4ClassRunner.class)
// 指明配置文件所在
@ContextConfiguration(locations = "classpath:config/spring.xml")
// 参数1:事务管理器的id或者name,参数2:测试完毕后事务是否回滚,默认为true
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = false)
public class MyCenterControllerTest extends
		AbstractTransactionalJUnit4SpringContextTests {
//	private static Logger log = Logger.getLogger(MyCenterControllerTest.class);
	@Autowired
	private IDemandService demandService;

	@Test
	public void test() {    //本地访问的测试（不是Http网络请求的测试）
		HFDemand user = new HFDemand();
		DemandHomeRes res = demandService.getDemand_1_4_Home(user);
		JSONObject jsonObject = JSONObject.fromObject(res);
		logger.info("");
		logger.info("start");
		logger.info("*value*:"+jsonObject);
		logger.info("");
		logger.info("end");
	}
}
