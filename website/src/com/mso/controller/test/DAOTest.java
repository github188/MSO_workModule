package com.mso.controller.test;

import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.mso.dao.BaseRegionDao;
import com.mso.dao.CustomAreaDao;
import com.mso.dao.ICollectionDemandDao;
import com.mso.model.BaseRegion;
import com.mso.model.CustomArea;
import com.mso.model.HFDemand;
import com.mso.model.HJCollectionDemand;
import com.mso.utils.PageResults;

public class DAOTest extends  AbstractContextTests {
	
	
	
	@Autowired 
	private BaseRegionDao baseRegionDao;
	
	/**
	 * @date   12/6 Day2
	 * @author Carol
	 * Method: 更新base_region表里一条数据
	 * toTest: 测试英文字符的值是否能被更新
	 * Expect: Yes
	 * Result: Yes
	 *
	 */
	@Test
	public void test7updBaseRegion(){
		
		try {
			BaseRegion basreq = new BaseRegion();
			//base_region表里所有字段是Not Null,所以需要全set值
			basreq.setRegionId(1);
			basreq.setParentId(0);
			basreq.setRegionName("Boston");
			basreq.setRegionType(0);
			basreq.setAgencyId(0);
			basreq.setRegionCode("");
			basreq.setCityrank(0);
			basreq.setRemark("USA,MA");
			basreq.setRegionPinyyin("BoShidun");
			basreq.setRegionPy("Bos");
			basreq.setFirstWord("B");
			
			baseRegionDao.updBaseRegion(basreq);
		
		} catch (Exception e) {
			System.out.println("****************N");
		}
		System.out.println("************Y");

	}
	
	
	
	/**
	 * @date   12/6 Day2
	 * @author Carol
	 * Method: 更新base_region表里regionType=2, regionName=(传的参)的那条数据的 cityrank为1
	 * toTest: 测试传入已存regionName以外的其他地区名  数据库会否更新
	 * Expect: 没更新
	 * Result: 更新的是方法写死的String[]循环数组里传的城市(region_name=?), 手动传入的参“香港”没有被更新  因为它始终执行的是这句：update base_region set cityrank=1 where region_name=? and region_type=2
	 *
	 */
	@Test
	public void test8daoUpdateBaseRegion2(){
		try {
			BaseRegion basreq =new BaseRegion();
			basreq.setRegionName("香港");
			baseRegionDao.updBaseRegion2(basreq);
		} catch (Exception e) {
			System.out.println("****************N");
		}
		System.out.println("************Y");
	}
	
	
	
	
	/**
	 * @date   12/7 Day3
	 * @author Carol
	 * Method: 查询区域信息
	 * toTest: 测试传入的BaseRegion对象里的属性值不对应的情况下，能否查出数据
	 * Expect: Fail
	 * Result: Fail - NullPointerException
	 *
	 */
	@Test
	public void test18getBaseRegion(){
		BaseRegion b=new BaseRegion();
		b.setCityrank(1);
		b.setRegionType(4);
		b.setRegionId(1);
		b.setFirstWord("B");
		List<Object> list=baseRegionDao.getBaseRegion(b);
		JSONArray jsonArr = JSONArray.fromObject(list);
		//logger.info(jsonArr);
		System.out.println(jsonArr);
		
	}
	
	
	
	
	/**
	 * @date   12/7 Day3
	 * @author Carol
	 * Method: 通过用户Jfuid和Demandid查询收藏的需求对应的所有信息
	 * toTest: 测试HJCollectionDemand继承的父类里的属性能不能也打印出
	 * Expect: YES 
	 * Result: YES
	 *
	 */
	@Autowired
	private ICollectionDemandDao collectionDemandDao;
	@Test
	public void test19getCollectionDemandBy(){
		
		HJCollectionDemand user=new HJCollectionDemand();
		user.setJfuid("71");
		user.setDemandid("201606272E7CF62C");
		HJCollectionDemand demand=collectionDemandDao.getCollectionDemandBy(user);
		JSONObject jsonObject = JSONObject.fromObject(demand);
		System.out.println(jsonObject);   
		
	}
	
	
	/**
	 * @date   12/7 Day3
	 * @author Carol
	 * Method: 查询收藏的需求的所有分页结果
	 * toTest: 查询h_f_demand表和 h_j_collection_demand表中demandid都为201606272E7CF62C的h_j_collection_demand.jfuid=71的数据
	 * Expect: 返回所有字段的信息
	 * Result: 由于表内无report字段，"report":null，其他都返回显示
	 *
	 */
	@Test
	public void test20getCollections(){
		
		HFDemand user=new HFDemand();
		user.setDemandid("201606272E7CF62C");
		user.setJfuid("71");
		PageResults<Object> PageResults=collectionDemandDao.getCollections(user);
		JSONObject jsonObject = JSONObject.fromObject(PageResults);
		System.out.println("PageResults:     "+jsonObject);   
		//inner JOIN h_f_demand u on "d.demandid=u.demandid" 
	}
	
	@Autowired
	private CustomAreaDao customareaDao;
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 查询自定义区域信息
	 * toTest: 只根据主键AreaId查询自定义区域信息是否成功
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test28getCustomArea(){
		CustomArea cuar=new CustomArea();
		cuar.setAreaId(1);
		List l=customareaDao.getCustomArea(cuar);
		JSONArray jsonArr = JSONArray.fromObject(l);
		System.out.println(jsonArr);
		
	}
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 添加自定义区域信息
	 * toTest: 测试area_id主键是否自增
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test29addCustomArea(){
		CustomArea cuar=new CustomArea();
		cuar.setFuid("555");
		cuar.setAreaName("Ottawa");
		cuar.setAreaRemark("Canada");
		customareaDao.addCustomArea(cuar);
	}
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 删除自定义区域信息
	 * toTest: 测试 根据数据库的Not_Null的字段对应的属性传值 Hql能不能自动查询到该数据并执行删除操作
	 * Expect: YES
	 * Result: YES 或者 根据主键调用查询方法，在调delete()
	 *
	 */
	@Test
	public void test30deleteCustomArea(){
		CustomArea cuar=new CustomArea();
		cuar.setAreaId(13);
		cuar.setAreaName("自定义区域");
		cuar.setAreaRemark("12321");
		customareaDao.deleteCustomArea(cuar);
	}
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 更新自定义区域信息
	 * toTest: 测试更新自定义区域所有字段是否成功
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test31updateCustomAreaAreaRemark(){
		CustomArea cuar=new CustomArea();
		cuar.setAreaId(14);
		cuar.setFuid("33");
		cuar.setAreaName("Vancouver");
		cuar.setAreaRemark("Canada");
		customareaDao.updateCustomAreaAreaRemark(cuar);	
		
	}
	
	/**
	 * @date   12/8 Day 4
	 * @author Carol
	 * Method: 查询自定义区域单个返回对象信息
	 * toTest: 根据AreaId=12查询自定义区域对应的一条所有字段信息
	 * Expect: YES
	 * Result: Fail.返回null，因为CustomAreaDaoImpl类的getCustomAreaModel()误写成return null
	 *
	 */
	@Test
	public void test32getCustomAreaModel(){
		CustomArea cuar=new CustomArea();
		cuar.setAreaId(12);
		cuar=customareaDao.getCustomAreaModel(cuar);
		JSONObject res=JSONObject.fromObject(cuar);
		System.out.println("***"+res);
	}

}
