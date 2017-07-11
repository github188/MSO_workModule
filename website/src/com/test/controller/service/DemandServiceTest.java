package com.test.controller.service;

import net.sf.json.JSONObject;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;

import com.mso.model.HFDemand;
import com.mso.res.AuctionListDemandHomeRes;
import com.mso.res.DemandHomeRes;
import com.mso.res.DynamicDemandHomeRes;
import com.mso.service.IDemandService;


//首先指定Junit的Runner
@RunWith(SpringJUnit4ClassRunner.class)
// 指明配置文件所在
@ContextConfiguration(locations = "classpath:config/spring.xml")
// 参数1:事务管理器的id或者name,参数2:测试完毕后事务是否回滚,默认为true
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = false)
public class DemandServiceTest extends AbstractTransactionalJUnit4SpringContextTests {
	@Autowired
	private IDemandService demandService;
	
	
	

	@Test
	public void test() {
		HFDemand user = new HFDemand();
		//查询某个用户下的/*1.4.2  发包方-Head 需求发布总量  成单总量  结算总金额  本月新增需求发布量  本月成单量  待结算金额*/ 
		user.setJfuid("30");//zhangsan
//		user.setOrdername("");
//		user.setSorderNo("");//demandid
//		user.setSendDateValue("");//releasetime
//		user.setSbeginDateValue("");//releasetime
		DemandHomeRes res = demandService.getDemand_1_4_Home(user);
		JSONObject jsonObject = JSONObject.fromObject(res);
		logger.info("");
		logger.info("start");
		logger.info("*value*:"+jsonObject);
		logger.info("");
		logger.info("end");
	}
	
	
	@Test
	public void test1() {
		//查询某个用户下的/*1.4.2  发包方-需求动态*/*/ 
		HFDemand u=new HFDemand();
		u.setJfuid("30");//zhangsan
		DynamicDemandHomeRes res=demandService.get_1_4_Demanddynamics(u);
		JSONObject jsonObject = JSONObject.fromObject(res);
		logger.info("");
		logger.info("start");
		logger.info("*value*:"+jsonObject);
		logger.info("");
		logger.info("end");
	}
	
	
	@Test
	public void test2() {
		//我的某个需求下/*1.4.2  发包方-我的接包方  竞拍榜*/
		HFDemand u=new HFDemand();
		u.setDemandid("20151120BBE07A67");//demandid
		u.setOrderBy("auctionnum");
		u.setJfutype("1");//发包方 
		AuctionListDemandHomeRes res=demandService.get_1_4_DemandAuctionList(u);
		JSONObject jsonObject = JSONObject.fromObject(res);
		logger.info("");
		logger.info("start");
		logger.info("*value*:"+jsonObject);
		logger.info("");
		logger.info("end");
	}
	
	@Test
	public void test3() {
		//我的某个需求下/* 1.4.2  接包方-转换率榜       结算量/完成量 ConversionRate  34  20160531E7114171*/
		HFDemand u=new HFDemand();
		u.setDemandid("20151120BBE07A67");
		u.setJfuid("32");
		AuctionListDemandHomeRes res=demandService.get_1_4_OrderConversionRateList(u);
		JSONObject jsonObject = JSONObject.fromObject(res);
		logger.info("");
		logger.info("start");
		logger.info("*value*:"+jsonObject);
		logger.info("");
		logger.info("end");
	}
	
	

	
}
