package com.mso.controller.test;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.mso.model.BaseRegion;
import com.mso.model.CustomArea;
import com.mso.model.HFDemand;
import com.mso.model.HJCollectionDemand;
import com.mso.res.HFDemandRes;
import com.mso.service.BaseRegionService;
import com.mso.service.CustomAreaService;
import com.mso.service.ICollectionDemandService;
import com.mso.utils.DateUtil;



public class ServiceTest extends AbstractContextTests {

	@Autowired
	private BaseRegionService baseregionservice; // 注入接口 @Service("baseregionservice")的baseregionservice就是private BaseRegionService "baseregionservice"

	/**
	 * @date   12/5 Day1
	 * @author Carol
	 * Method: 查询城市
	 * toTest: 测试RegionId=9,Cityrank=0时的base里的属性是否一一对应base_region表里的字段
	 * Expect: YES
	 * Result: regionTypeFristWord的字段表里没有   显示regionTypeFristWord=null
	 *
	 */
	@Test
	public void test3getBaseRegion() { 
		BaseRegion base = new BaseRegion(); 
		base.setRegionId(9);
		base.setCityrank(0);
		// base.setRegionType(3);
		// base.setFirstWord("x");
		List<Object> list = baseregionservice.getBaseRegion(base);
		System.out.println("-----------------------------------------" + list);

	}

	/**
	 * @date   12/5 Day1
	 * @author Carol
	 * Method: 更新城市列表
	 * toTest: 传入某一已存的RegionName的拼音,会不会影响BaseRegion的数据库更新
	 * Expect: Yes
	 * Result: No
	 *
	 */
	@Test
	public void test4updBaseRegion2() {

		BaseRegion basreq = new BaseRegion();
		basreq.setRegionName("HaiKou"); 
		baseregionservice.updBaseRegion2(basreq); 

	}
	
	
	/**
	 * @date   12/6 Day2
	 * @author Carol
	 * Method: 截取字符串操作
	 * toTest: 是否能输出所有以A、B、C、D首字母的中英文regionName命名的数据
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test11cutOutString(){
		
		BaseRegion b=new BaseRegion();
		ArrayList<String>  listp =new ArrayList<String>();
		b.setFirstWord("a");   //因为BaseRegionDaoImpl里面的if(null!=base.getFirstWord()){...}
		listp.add("A");
		listp.add("B");
		listp.add("C");
		listp.add("D");
		
		b.setRegionTypeFristWord(listp);
		List l=baseregionservice.getBaseRegion(b);
		JSONArray jsonArr = JSONArray.fromObject(l);
		System.out.println("******************"+jsonArr); //listp=[A,B,C,D]   BaseRegionDaoImpl里根据firstWord in {listp.get(i)}
		//由于数据库里没有RegionTypeFristWord字段,所以输出"regionTypeFristWord":[]  regionTypeFristWord只是用来存firstWord的数组
	}
	
	
	@Autowired
	private ICollectionDemandService collectionDemandService;
	
	/**
	 * @date   12/6 Day2
	 * @author Carol
	 * Method: 添加 收藏需求
	 * toTest: 测试添加一条collection_demand数据是否成功
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test12addCollectionDemand(){   
		
		HJCollectionDemand user=new HJCollectionDemand();
		
		user.setCollectionid("222222222222"); //Collectionid是主键 非自增
		user.setDemandid("555555555"); 
		user.setJfuid("88");
		user.setCreatetime(DateUtil.getTime()); 
//		user.setUpdatetime("");  
		
		collectionDemandService.addCollectionDemand(user); //h_j_collection_demand表(保存需求功能)

	}
	
	
	/**
	 * @date   12/7 Day3
	 * @author Carol
	 * Method: 获取/显示  收藏过的发包方需求
	 * toTest: 测试 只根据主键Demandid能否获取HRDemandRes所有属性
	 * Expect: YES
	 * Result: YES 获取了HRDemandRes里的基本类的属性、自定义对象里的属性、甚至继承的父类里的属性
	 *
	 */
	@Test
	public void test16getOrderDemands(){
		HFDemand d=new HFDemand();
		d.setDemandid("01511201D986F3E");
//		d.setOrdername(ordername);   
//		d.setBeginage(beginage);
//		d.setReleasenum(releasenum);
//		d.setOrderprice(orderprice);
//		d.setReleasetime(releasetime);
//    	d.setJfuid(jfuid);
//		d.setFdstate(fdstate);
//		d.setCollectionid(collectionid);
		
		HFDemandRes res=collectionDemandService.getOrderDemands(d);
		JSONObject jsonObject = JSONObject.fromObject(res);
		System.out.println(jsonObject);
	}
	
	
	@Autowired
	private CustomAreaService customareaservice;
	/**
	 * @date   12/7 Day3
	 * @author Carol
	 * Method: 获取自定义区域表信息
	 * toTest: 测试只根据主键AreaId获取对应的自定义区域的数据是否成功
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test17getCustomArea(){
		CustomArea cuar=new CustomArea();
		cuar.setAreaId(4);
//		cuar.setFuid
//		cuar.setAreaName
//		cuar.setAreaRemark
		List l=customareaservice.getCustomArea(cuar);
		JSONArray jsonArr = JSONArray.fromObject(l);
		System.out.println(jsonArr);
	}
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 添加自定义区域信息
	 * toTest: 测试添加新数据是否成功
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test24addCustomArea(){
		CustomArea ca=new CustomArea();
		ca.setFuid("200");
		ca.setAreaName("Philly");
		ca.setAreaRemark("PA");
		customareaservice.addCustomArea(ca);
		
	}
	
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 删除自定义区域信息
	 * toTest: 测试只传主键area_id删除新数据是否成功
	 * Expect: YES
	 * Result: YES. getSession().delete()是sqlSsession默认的delete方法，对应的Hql是from xxx where +所有字段，所以delete()要先调用查询方法再删除，不能像用Sql的直接封装查询好再删除
	 *
	 */
	@Test
	public void test25deleteCustomArea(){
		CustomArea ca=new CustomArea();
		ca.setAreaId(17);
//		ca.setFuid("200");
		List l=customareaservice.getCustomArea(ca);
		if(null!=l){
			ca=(CustomArea) l.get(0);
			customareaservice.deleteCustomArea(ca); //cuar.setFuid  setAreaId
		}else{
			System.out.println("没找到你要删除的对象");
		}
		
	}
	
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 更新自定义区域信息
	 * toTest: 检测未传另一数据库定义的Not_Null字段Area_Name更新自定义区域AreaRemark信息是否成功
	 * Expect: Fail
	 * Result: Fail 因为以数据库定义的字段要求为准，虽然对应的属性可能没要求set的代码
	 *
	 */
	@Test
	public void test26updateCustomAreaAreaRemark(){
		CustomArea ca=new CustomArea();
		ca.setAreaId(1);
//		ca.setAreaName("NY");
		ca.setAreaRemark("MA");
		customareaservice.updateCustomAreaAreaRemark(ca);
	}
	
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 查询单个自定义区域对象数据
	 * toTest: 测试 根据已存主键AreaId是否能获取一条自定义区域数据
	 * Expect: YES
	 * Result: Fail. 因为getCustomAreaModel()方法(CustomAreaDaoImpl类Line 80)里的return应该是CustomArea而非null
	 *
	 */
	@Test
	public void test27getCustomAreaModel(){
		CustomArea cuar=new CustomArea();
		cuar.setAreaId(4);
		cuar= customareaservice.getCustomAreaModel(cuar);
		
	}
	
	
	
	
}
