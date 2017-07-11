/**
 * 
 */
package com.mso.controller.test;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.mso.dao.HomePageDao;
import com.mso.dao.IGxPackageManageDao;
import com.mso.model.GXPackageManage;
import com.mso.service.GxPackageManageService;
import com.mso.service.HomePageService;

/**
 * @author Carol
 * toTest: 基于类测试" "相关的所有方法  test92-test114   (Controller_Test在ControllerTest.java中已测)
 * 
 */
public class GxPackageManageTest extends AbstractContextTests{
	
	private MockMvc mockMvc; 
    
    @Before  
    public void setup() {   
        this.mockMvc = webAppContextSetup(this.wac).build();  
    } 
    
	 /**
     * @date   12/16 Fri
     * @author 
     * Method: 发包方需求-销售线索挖掘-套餐：套餐对象查询 
     * toTest: 根据pid查询Pricetol是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Autowired
    private GxPackageManageService gxpackagemanageservice;
    @Test
    public void test1() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setPid(21);
    	GXPackageManage gx=gxpackagemanageservice.getGxPackageManagePid(gxpm);
    	BigDecimal bd=new BigDecimal(15000);
    	assertEquals(bd,gx.getPricetol());
    	
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 发包方需求-销售线索挖掘-套餐：套餐对象查询 
     * toTest: 测试不传pid是否查询Category1成功
     * Expect: YES
     * Result: Fail 返回"Position beyond number of declared ordinal parameters"
     *  Object pid="";
     *  if(null!=gxpm.getPid()){       //gxpm此时是Null 所以跳走Line 66(传pid="") 而"pid=?"没走说明没拼 ==>二者矛盾
			 hql.append(" and pid=?");
		}
		GXPackageManage gxpackageManage=(GXPackageManage) this.getByHQL(hql.toString(),pid);
     *
     */
    @Test
    public void test2() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();//没set值即为null
    	GXPackageManage gx=gxpackagemanageservice.getGxPackageManagePid(gxpm);
    	System.out.println(gx.getCategory1());
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询   servicetype1-销售线索挖掘  2-数据加工  3-人工客服  
     * toTest: 测试通过getGxPackageManage()查询Category1是否成功
     * Expect: YES
     * Result: YES. 返回"成人教育"
     *
     */
    @Test
    public void test3() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setPid(22);
    	gxpm.setCategory1("成人教育");
    	gxpm.setIsdisable(2);
    	gxpm.setServicetype("潜在客户挖掘");
    	List<Object>  list=gxpackagemanageservice.getGxPackageManage(gxpm);
    	System.out.println(((GXPackageManage)list.get(0)).getCategory1());  
    	
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询   servicetype1-销售线索挖掘  2-数据加工  3-人工客服  
     * toTest: 测试不传任何参数 能否查询Intro数据
     * Expect: YES
     * Result: YES 不传任何参数, list里面存0个参数,即list={}  
     * List<Object>  listuser=this.getListByHQL(hql.toString(), list); 就会执行查询全部
     *
     */
    @Test
    public void test4() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	List<Object> list=gxpackagemanageservice.getGxPackageManage(gxpm);
    	Iterator<Object> it=list.iterator();
//    	while(it.hasNext()){
//    		Object o=it.next();
//    		System.out.println(((GXPackageManage)o).getIntro());
//    	}
    	for(Object o: list){
    		if("成人教育".equals(((GXPackageManage)o).getCategory1())){
    		System.out.println(((GXPackageManage)o).getCategory1());
    	}
    }

    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询   servicetype1-销售线索挖掘  2-数据加工  3-人工客服  
     * toTest: 測試 跳傳 拼的參數的其中一個 能否查詢
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test5() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setIsdisable(1);
    	List<Object> list=gxpackagemanageservice.getGxPackageManage(gxpm);
    	System.out.println(((GXPackageManage)list.get(0)).getCategory1());  
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询   servicetype1-销售线索挖掘  2-数据加工  3-人工客服  
     * toTest: 測試  傳不對應的參數值能否查詢成功
     * Expect: Fail
     * Result: Fail.返回NullPointerException
     *
     */
    @Test
    public void test6() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setIsdisable(2);
    	gxpm.setCategory1("青少儿教育");
    	List<Object> list=gxpackagemanageservice.getGxPackageManage(gxpm);
    	System.out.println(((GXPackageManage)list.get(0)).getCategory1());  
    	
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询(Dao層)
     * toTest: 測試 傳ServiceType 查詢Category1是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Autowired
	private IGxPackageManageDao icxpackagemanagedao;
    @Test
    public void test7() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setServicetype("数据加工");
    	List<Object> list=icxpackagemanagedao.getGxPackageManage(gxpm);
    	System.out.println(((GXPackageManage)list.get(0)).getCategory1());
    	
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 查询套餐对象
     * toTest:
     * Expect:
     * Result:
     *
     */
    @Test
    public void test8() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	Object pid="";
		 if(null!=gxpm.getPid()){
			 GXPackageManage ob=icxpackagemanagedao.getGxPackageManagePid(gxpm);
		 }else{
			 List<Object> list=icxpackagemanagedao.getGxPackageManage(gxpm);
		 }
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 查询套餐对象
     * toTest:
     * Expect:
     * Result:
     *
     */
    @Test
    public void test9() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setPid(23);
           if(null!=gxpm.getPid()){
		   try{
			 GXPackageManage ob=icxpackagemanagedao.getGxPackageManagePid(gxpm);
			 System.out.println(ob.getCategory1());
			 }catch(Exception e){
				 System.err.println("Pid Not Found!");
			 }
			}
    }
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 查询套餐对象
     * toTest:
     * Expect:
     * Result:
     *
     */
    @Test
    public void test10() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setPid(null);
		   try{
			 GXPackageManage ob=icxpackagemanagedao.getGxPackageManagePid(gxpm);
			 System.out.println(ob.getCategory1());
			 }catch(Exception e){
				 System.err.println("Pid Not Found!");
			 }
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询(Dao層)
     * toTest:
     * Expect:
     * Result:
     *
     */
    @Test
    public void test11() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setPid(21);
    	gxpm.setCategory1("青少儿教育");
    	gxpm.setIsdisable(1);
    	gxpm.setServicetype("意向挖掘");
		   try{
			 List<Object> list=icxpackagemanagedao.getGxPackageManage(gxpm);
			 System.out.println(((GXPackageManage)list.get(0)).getPrice());
			 }catch(Exception e){
				 System.err.println("套餐沒找到");
			 }
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询(Dao層)
     * toTest:
     * Expect:
     * Result:
     *
     */
    @Test
    public void test12() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
    	gxpm.setServicetype("潜在客户挖掘");
		   try{
			 List<Object> list=icxpackagemanagedao.getGxPackageManage(gxpm);
			 Iterator<Object> it=list.iterator();
		    	while(it.hasNext()){
		    		Object o=it.next();
		    		System.out.println(((GXPackageManage)o).getNum());
		    	}
			 }catch(Exception e){
				 System.err.println("套餐沒找到");
			 }
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 套餐列表查询(Dao層)
     * toTest: 測試 不傳參數 能否查詢套餐
     * Expect:
     * Result:
     *
     */
    @Test
    public void test13() throws Exception {
    	GXPackageManage gxpm=new GXPackageManage();
		   try{
			 List<Object> list=icxpackagemanagedao.getGxPackageManage(gxpm);
			 Iterator<Object> it=list.iterator();
		    	while(it.hasNext()){
		    		Object o=it.next();
		    		System.out.println(((GXPackageManage)o).getNum());
		    	}
			 }catch(Exception e){
				 System.err.println("套餐沒找到");
			 }
		}
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  产品公告
     * toTest: 測試 
     * Expect:
     * Result:
     *
     */
    @Test
    public void test14() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/notice")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    	
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  产品公告
     * toTest: 測試 傳參jfuname 是否影響原來的jfuname值
     * Expect: Nope
     * Result: Nope
     *
     */
    @Test
    public void test15() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/notice")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","aaa")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    	
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  热门需求
     * toTest: 測試
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test16() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/hotdemand")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  热门需求
     * toTest: 測試 傳參productname 是否影響原來的productname值
     * Expect: Nope
     * Result: Nope
     *
     */
    @Test
    public void test17() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/hotdemand")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("productname","产品名")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    	
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  统计图 
     * toTest: 測試 
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test18() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))  
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  统计图 
     * toTest: 測試  本年度需求发布量
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test19() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("","")))  
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  统计图 
     * toTest: 測試 傳參releasetimeYm 是否影響原來的releasetimeYm值(原來沒有12)
     * Expect: NOPE
     * Result: NOPE
     *
     */
    @Test
    public void test20() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("releasetimeYm","12")))  
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  统计图 
     * toTest: 測試 上月总计完成订单
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test21() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  统计图 
     * toTest: 測試 上月总计完成订单   傳參lastMonthOrder為"" 是否影響原來的rlastMonthOrder值
     * Expect: NOPE
     * Result: NOPE 返回"lastMonthOrder":1274
     *
     */
    @Test
    public void test22() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("lastMonthOrder","")))  
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 官方首页  统计图 
     * toTest: 測試 上月总计完成订单   傳參lastMonthOrder=555555 是否影響原來的lastMonthOrder值
     * Expect: NOPE
     * Result: NOPE. Still返回"lastMonthOrder":1274
     *
     */
    @Test
    public void test23() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("lastMonthOrder","555555")))  
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  产品公告
     * toTest: 测试能否查询getNotice()里sql返回的表里的第1条数据的第一个字段
     * Expect: YES
     * Result: YES
     *
     */
    @Autowired
    private HomePageService homepageservice;
    @Test
    public void test24() throws Exception {
    	List<Object> list=homepageservice.getNotice();
    	Object [] o=(Object [])(list.get(0));
    	assertEquals("20161124014733662",o[0]);
    	
		}
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  产品公告
     * toTest: 测试能否获取 用HashMap存放Object[]里的属性值
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test25() throws Exception {
    	List<Object> list=homepageservice.getNotice();
    	Object [] o=(Object [])(list.get(0));
    	Map<String,Object> map=new HashMap<String, Object>();
    	map.put("jfuid", o[0]);
    	assertEquals("20161124014733662",map.get("jfuid"));
    	
		}
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  产品公告
     * toTest: 测试添加查询到的Object[]数组对象到set,能否循环输出每个对象的元素/字段
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test26() throws Exception {
    	List<Object> list=homepageservice.getNotice();
    	Object [] o=(Object [])(list.get(0));
    	Set<Object []> s=new TreeSet<Object []>();
    	s.add(o);
    	for (Object[] obj: s) {
    		for(int i=0;i<obj.length;i++){
    			System.out.println(obj[i]);
    		}
    	} 
	}
    
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  产品公告
     * toTest: 测试直接输出返回的Object[]中元素/字段是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test27() throws Exception {
    	List<Object> list=homepageservice.getNotice();
    	Object [] o=(Object [])(list.get(0));  	
    	for(int i=0;i<o.length;i++){
			System.out.println(o[i]);
		}

	}
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  产品公告
     * toTest: 测试用迭代器 输出查询结果的第四个字段信息
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test28() throws Exception {
    	List<Object> list=homepageservice.getNotice();
    	Iterator<Object> it=list.iterator();
    	while(it.hasNext()){
    		Object o=it.next();
    		Object[] obj=(Object[])o;
    		System.out.println(obj[3]);
    	}
	}
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  产品公告(Dao层)
     * toTest: 测试返回数据的第三条数据的第四个字段是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Autowired
	private HomePageDao homepagedao;
    @Test
    public void test29() throws Exception {
    	List<Object> list=homepagedao.getNotice();
    	Object [] o=(Object [])(list.get(2));
    	assertEquals("1048",o[3]);
    	}

    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  产品公告(Dao层)
     * toTest: map里没有被put过的keyValue,get以后返回的是null不是""
     * Expect: expected<daphne> actual:<null>
     * Result: expected<daphne> actual:<null>
     *
     */
    @Test
    public void test30() throws Exception {
    	List<Object> list=homepagedao.getNotice();
    	Object [] o=(Object [])(list.get(0));
    	Map<String,Object> map=new HashMap<String, Object>();
    	map.put("jfuname", o[1]);
    	assertEquals("",map.get("realname"));
    }
    
    /**
     * @date
     * @author 
     * Method: 官方首页  产品公告(Dao层)
     * toTest: 测试能否查询getNotice()里sql返回的表里的第五条数据的所有字段
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test31() throws Exception {
    	List<Object> list=homepagedao.getNotice();
    	Object [] o=(Object [])(list.get(4));
    	Set<Object []> s=new TreeSet<Object []>();
    	s.add(o);
    	Iterator<Object[]> it=s.iterator();
    	while(it.hasNext()){
    		Object[] obj=it.next();
    		for(int i=0;i<obj.length;i++){
    			System.out.println(obj[i]);
    		}
    	}
    }
    
    /**
     * @date
     * @author 
     * Method: 官方首页  产品公告(Dao层)
     * toTest: 测试用增强for循环 获取每一个对象的字段是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test32() throws Exception {
    	List<Object> list=homepagedao.getNotice();
    	for(Object o: list){
    		Object [] obj=(Object [])o;
    		for(int i=0;i<obj.length;i++){
    			System.out.println(obj[i]);
    	}
	}   
}
    /**
     * @date
     * @author 
     * Method: 官方首页  产品公告(Dao层)
     * toTest: 测试用迭代器循环输出所有对象的第三列字段是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test33() throws Exception {
    	List<Object> list=homepagedao.getNotice();
    	Iterator<Object> it=list.iterator();
    	while(it.hasNext()){
    		Object o=it.next();
    		Object[] obj=(Object[])o;
    		System.out.println(obj[2]);
    	}
	}
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求
     * toTest: 测试返回热门需求的数据的第三个字段
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test34() throws Exception {
    	List<Object> list=homepageservice.getHotDemand();
    	for(int i=0;i<list.size();i++){
    		Object[] o=(Object [])list.get(i);
    		assertEquals("电商平台",o[2]);
    	}
	}
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求
     * toTest: 测试能否获取 用HashMap存放Object[]里的属性值
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test35() throws Exception {
    	List<Object> list=homepageservice.getHotDemand();
    	Object [] o=(Object [])(list.get(0));
    	Map<String,Object> map=new HashMap<String, Object>();
    	map.put("demandid",o[0]);
    	map.put("jfuid", o[1]);
    	map.put("category1", o[2]);
    	assertEquals("201611220546331111",map.get("demandid"));
    	
	}
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求
     * toTest: 测试用HashSet存放Object对象,能否循环输出每个对象的元素/字段
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test36() throws Exception {
    	List<Object> list=homepageservice.getHotDemand();
    	Object [] o=(Object [])(list.get(0));
    	Set<Object []> s=new HashSet<Object []>();
    	s.add(o);
    	for (Object[] obj: s) {
    		for(int i=0;i<obj.length;i++){
    			System.out.println(obj[i]);
    		}
    	} 
    	
	}
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求
     * toTest: 测试直接输出返回的Object[]中元素/字段是否成功
     * Expect: YES
     * Result: Fail. 返回IndexOutOfBoundsException,因为只有返回的表里只有一条数据(一个对象)
     *
     */
    @Test
    public void test37() throws Exception {
    	List<Object> list=homepageservice.getHotDemand();
    	Object [] o=(Object [])(list.get(1));  	
    	for(int i=0;i<o.length;i++){
			System.out.println(o[i]);
		  }
    	} 
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求
     * toTest: 测试用迭代器 输出查询结果的第7个字段信息 断言是否一致
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test38() throws Exception {
    	List<Object> list=homepageservice.getHotDemand();
    	Iterator<Object> it=list.iterator();
    	while(it.hasNext()){
    		Object o=it.next();
    		Object[] obj=(Object[])o;
    		assertEquals("M11.22电商平台测试",obj[6]);
    	} 
    }	
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  热门需求(Dao层)
     * toTest: 测试返回数据的第一条数据的第8个字段是否断言成功
     * Expect: YES
     * Result: Fail. 第8个字段releasenum是Integer类,so应该: assertEquals(1200,o[8])
     *
     */
    @Test
    public void test39() throws Exception {
    	List<Object> list=homepagedao.getHotDemand();
    	Object [] o=(Object [])(list.get(0));
    	assertEquals("1200",o[8]);
    	}
    
    /**
     * @date   12/18 Sun
     * @author 
     * Method: 官方首页  热门需求(Dao层)
     * toTest: 测试能否用TreeMap获取存放在Object[]对象数组里的属性值 
     * Expect: YES. expected<daphne> actual:<null>
     * Result: YES. expected<daphne> actual:<null>
     *
     */
    @Test
    public void test40() throws Exception {
    	List<Object> list=homepagedao.getHotDemand();
    	Object [] o=(Object [])(list.get(0));
    	Map<String,Object> map=new TreeMap<String, Object>();
    	map.put("productname",o[6]);//productname 产品名
		map.put("ordername", o[7]);//需求标题/套餐名
		map.put("releasenum", o[8]);//发布量
    	assertEquals("M11.22电商平台测试",map.get("productname"));
    }
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求(Dao层)
     * toTest: 测试用HashSet的Iterator是否能输出第一条数据的所有字段
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test41() throws Exception {
    	List<Object> list=homepagedao.getHotDemand();
    	Object [] o=(Object [])(list.get(0));
    	Set<Object []> s=new HashSet<Object []>();
    	s.add(o);
    	Iterator<Object[]> it=s.iterator();
    	while(it.hasNext()){
    		Object[] obj=it.next();
    		for(int i=0;i<obj.length;i++){
    			System.out.println(obj[i]);
    		}
    	}
    }
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求(Dao层)
     * toTest: 测试把返回的Object[]对象数组里的第一个对象的所有属性值存放到一个map里,并输出所有的键值对是否成功
     * Expect: YES
     * Result: YES
     *
     */
    
    @Test
    public void test42() throws Exception {

    	List<Object> list=homepagedao.getHotDemand();
    	Object [] o=(Object [])(list.get(0));
    	Map<String,Object> map = new TreeMap<String,Object>();
         
    	for(int i=0;i<o.length;i++){
    		map.put(i+"",o[i]); //因为key(属性名)拿不到,so直接用i下标(0,1,2,3...)做key
    	}
    	Set<Map.Entry<String, Object>> set=map.entrySet(); 
    	Iterator<Entry<String, Object>> it=set.iterator();
    	
    	while(it.hasNext()){
    		Map.Entry<String, Object> entry=(Map.Entry<String, Object>)it.next();
//    		treemap.put(entry.getKey(), entry.getValue());
    		System.out.println(entry);
    	}
//    	map.entrySet();
//    	map.keySet();
//    	map.values();
    }
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求(Dao层)
     * toTest: 测试把返回的Object[]对象数组里的第一个对象的所有属性值存放到一个map里,并输出所有的键值对   降序排序是否成功
     * Expect: YES
     * Result: YES 但是是根据Key的字符串排列 而非"值降序排序"！
     *
     */
    
    @Test
    public void test43() throws Exception {
    	
        Map<String,Object> map = new TreeMap<String,Object>(new Comparator<String>(){ 
      	   public int compare(String obj1,String obj2){ 
      	    //降序排序 
      	    return obj2.compareTo(obj1); 
      	   } 
      	  }); 
        
    	List<Object> list=homepagedao.getHotDemand();
    	Object [] o=(Object [])(list.get(0));
    	for(int i=0;i<o.length;i++){
    		map.put(i+"",o[i]); //因为key(属性名)拿不到,so直接用i下标(0,1,2,3...)做key
    	}
    	Set<Map.Entry<String, Object>> set=map.entrySet(); 
    	Iterator<Entry<String, Object>> it=set.iterator();
    	
    	while(it.hasNext()){
    		Map.Entry<String, Object> entry=(Map.Entry<String, Object>)it.next();
//    		treemap.put(entry.getKey(), entry.getValue());
    		System.out.println(entry);
    	}
//    	map.entrySet();
//    	map.keySet();
//    	map.values();
    }
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求(Dao层)
     * toTest: 测试用迭代器循环输出对象的第三个字段是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test44() throws Exception {
    	List<Object> list=homepagedao.getHotDemand();
    	Iterator<Object> it=list.iterator();
    	while(it.hasNext()){
    		Object o=it.next();
    		Object[] obj=(Object[])o;
    		System.out.println(obj[2]);
    	}
	}
    
    /**
     * @date
     * @author 
     * Method: 官方首页  热门需求(Dao层)
     * toTest: 测试用增强for循环 获取每一个对象的字段是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test45() throws Exception {
    	List<Object> list=homepagedao.getHotDemand();
    	for(Object o: list){
    		Object [] obj=(Object [])o;
    		for(int i=0;i<obj.length;i++){
    			System.out.println(obj[i]);
    	}
	}   
}
}