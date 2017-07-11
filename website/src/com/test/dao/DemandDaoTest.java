package com.test.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;

import com.mso.dao.BaseRegionDao;
import com.mso.model.BaseRegion;


//首先指定Junit的Runner
@RunWith(SpringJUnit4ClassRunner.class)
// 指明配置文件所在
@ContextConfiguration(locations = "classpath:config/spring.xml")
// 参数1:事务管理器的id或者name,参数2:测试完毕后事务是否回滚,默认为true
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = false)
public class DemandDaoTest extends
		AbstractTransactionalJUnit4SpringContextTests {

	@Autowired
	BaseRegionDao baseReqiondao; 
	
	@Test
	public void test4daoUpdateBaseRegion2(){
		try {
			BaseRegion basreq =new BaseRegion();
			basreq.setRegionName("石家庄");
			baseReqiondao.updBaseRegion2(basreq);
		} catch (Exception e) {
			System.out.println("****************N");
		}
		System.out.println("************Y");
	}
	
	
	
	@Test
	public void test4daoUpdBaseRegion(){
		try {
			BaseRegion basreq =new BaseRegion();
			
			basreq.setRegionId(1);
			basreq.setParentId(0);
			basreq.setRegionName("中国");
			basreq.setRegionType(0);
			basreq.setAgencyId(0);
			basreq.setRegionCode("");
			basreq.setCityrank(0);
			basreq.setRemark("中国");
			
			
//			basreq.setRegionPinyyin("zhongguo1");
//			basreq.setRegionPy("ZG1");
//			basreq.setFirstWord("Z1");
		
		     
			basreq.setRegionPinyyin("zhongguo");
			basreq.setRegionPy("ZG");
			basreq.setFirstWord("Z");
			
			
			
			baseReqiondao.updBaseRegion(basreq);
		} catch (Exception e) {
			System.out.println("****************N");
		}
		System.out.println("************Y");
	}

	
}
