/**
 * 
 */
package com.mso.controller.test;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.mso.dao.HomePageDao;
import com.mso.dao.IGxPackageManageDao;
import com.mso.dao.IHFpDao;
import com.mso.dao.IOrderUploadReportDao;
import com.mso.dao.IUserDao;
import com.mso.model.GXJOrderUploadReport;
import com.mso.model.GXPackageManage;
import com.mso.model.Hfp;
import com.mso.model.IndustryDynamics;
import com.mso.model.JfUser;
import com.mso.model.PlatformDynamics;
import com.mso.res.ThisMonthOrderQuantityCompletedRes;
import com.mso.res.HomePage.HomePageRes;
import com.mso.service.GxPackageManageService;
import com.mso.service.HomePageService;
import com.mso.service.IHFpService;
import com.mso.service.IOrderUploadReportService;
import com.mso.service.IUserService;
import com.mso.utils.DateUtil;

/**
 * @author Carol
 * toTest: 基于类测试"GxPackageManage需求发包套餐和Homepage首页"相关的所有方法  test92-test198  (Controller_Test在ControllerTest.java中已测)
 * 
 */
public class GxPackageManageAndHomepageTest extends AbstractContextTests{
	
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
     * @date   12/18 Sun
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
     * @date   12/18 Sun
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
     * @date   12/18 Sun
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
     * @date   12/18 Sun
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
     * @date   12/18 Sun
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
    
    /**
    * @date   12/19 Mon
    * @author 
    * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	*         本年度需求发布量 +上月总计完成订单
    * toTest: 测试接口能否返回本年度需求发布量 +上月总计完成订单
    * Expect: YES
    * Result: YES
    *
    */
   @Test
   public void test46() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
   
   /**
    * @date   12/19 Mon
    * @author 
    * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	*         本年度需求发布量 +上月总计完成订单
    * toTest: 测试传currYear 2015能否仍返回2016本年度需求发布量
    * Expect: YES
    * Result: YES
    *
    */
   @Test
   public void test47() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("currYear", "2015")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
   
   /**
    * @date   12/19 Mon
    * @author 
    * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	*         本年度需求发布量 +上月总计完成订单
    * toTest: 测试post请求能否返回2016本年度需求发布量 +上月总计完成订单
    * Expect: Fail
    * Result: Fail 405Error
    *
    */
   @Test
   public void test48() throws Exception {
	        String postresponseString =mockMvc.perform((post("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	
   /**
    * @date   12/19 Mon
    * @author 
    * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	*         本年度需求发布量 +上月总计完成订单
    * toTest: 测试传lastMonthOrder能否改变上月总计完成订单
    * Expect: NOPE
    * Result: NOPE
    *
    */
   @Test
   public void test49() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("lastMonthOrder", "1111111111")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	
   /**
    * @date   12/19 Mon
    * @author 
    * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	*         本年度需求发布量 +上月总计完成订单
    * toTest: 测试传yearmMap能否改变本年度需求发布量
    * Expect: NOPE
    * Result: NOPE
    *
    */
   @Test
   public void test50() throws Exception {
	        String getresponseString =mockMvc.perform((get("/homepage/statistical")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("yearmMap", "{}")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	
	 /**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 +上月总计完成订单
	 * toTest: 测试直接双循环list能否打印所有的数据
	 * Expect: YES
	 * Result: YES
	 *
	 */
   @Test
   public void test51() throws Exception {
	   List<Object> list=homepageservice.getStatistical();
	   for(int i=0;i<list.size();i++){
		   Object[] o=(Object[])list.get(i);
		   for(Object obj:o){
			   System.out.println(obj);
		   }
	      System.out.println(o);
	}
   }   
   
	 /**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试内循环是否能输出所有的本年度需求发布量
	 * Expect: YES
	 * Result: YES
	 *
	 */
 @Test
 public void test52() throws Exception {
	   List<Object> list=homepageservice.getStatistical();
	   Map<Object,Object> map=new TreeMap<Object, Object>();
	   for(int i=0;i<list.size();i++){
		   Object[] o=(Object[])list.get(i);
		   for(int j=0;j<o.length;j++){
//			   map.put(o[1],o[2]);
			   System.out.println("*******"+o[j]);
//			   System.out.println(o[j]);
//			   System.out.println(map);
		   }
	}
	 // System.out.println(map);
 } 
 
	 /**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量
	 * toTest: 测试map里一一存放对应的字段和值,是否能输出
	 * Expect: YES 输出每条数据一次
	 * Result: YES 输出每条数据三次！(因为j=0,1,2,时,不知道对应的哪个字段名,所以每行map.put()循环3次！
	 *
	 */
	@Test
	public void test53() throws Exception {
	   List<Object> list=homepageservice.getStatistical();
	   Map<Object,Object> map=new TreeMap<Object, Object>();
	   for(int i=0;i<list.size();i++){
		   Object[] o=(Object[])list.get(i);
		   for(int j=0;j<o.length;j++){
			   map.put("yy", o[0]); //o[0]  o[1]  o[2]已经存了数据库里查到的值
			   map.put("releasetimeYm", o[1]);
			   map.put("releasenumTol", o[2]);
			   System.out.println(map);
		   }
		   System.out.println("*******"+map);
	}
//	  System.out.println(map);
	} 
	
	/**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量
	 * toTest: 测试map放在内循环外面 能否输出
	 * Expect: YES  正常输出 输出每条数据一次
	 * Result: YES  正常输出 输出每条数据一次   内循环可省略(Same Result)
	 *
	 */
	@Test
	public void test54() throws Exception {
	   List<Object> list=homepageservice.getStatistical();
	   Map<Object,Object> map=new TreeMap<Object, Object>();
	   for(int i=0;i<list.size();i++){
		   Object[] o=(Object[])list.get(i);
		   for(int j=0;j<o.length;j++){
//			   map.put(o[1],o[2]);
//			   System.out.println(map);
		   }
		   map.put("yy", o[0]);
		   map.put("releasetimeYm", o[1]);
		   map.put("releasenumTol", o[2]);
		   System.out.println(map);
	}
	  System.out.println("***********"+map);
	} 
	/**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量
	 * toTest: 测试 
	 * Expect: YES
	 * Result: YES                                             
	 *
	 */
	@Test
	public void test55() throws Exception {
	   List<Object> list=homepageservice.getStatistical();
	   Map<Object,Object> map=new TreeMap<Object, Object>();
	   for(int i=0;i<list.size();i++){
		   Object[] o=(Object[])list.get(i);
		   for(int j=0;j<o.length;j++){
			   if(j==0){
				   map.put("yy", o[j]);
			   }
			   if(j==1){
				   map.put("releasetimeYm", o[j]);   
			   }
			   if(j==2){
				   map.put("releasenumTol", o[j]);
			   }
//			   System.out.println(map);                                           
		   }
		   System.out.println(map);
	    }
	  System.out.println("************"+map);
	} 
	
	 /**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试map
	 * Expect: YES
	 * Result: YES
	 *
	 */
	@Test
	public void test56() throws Exception {
		   List<Object> list=homepageservice.getStatistical();
		   Map<Object,Object> map=new TreeMap<Object, Object>();
		   for(int i=0;i<list.size();i++){
			   Object[] o=(Object[])list.get(i);
			   for(int j=0;j<o.length;j++){                                           //map会不断添加的  key是一样的话,value一直在被替换
				   map.put(o[1],o[2]);
				   System.out.println(map);
			   }
		}
		 // System.out.println(map);
	} 
	
	 /**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试map转EntrySet能否输出同样结果
	 * Expect: YES 上下两个for循环并列,上一个for负责执行,下一个负责输出
	 * Result: YES
	 *
	 */
	@Test
	public void test57() throws Exception {
		   List<Object> list=homepageservice.getStatistical();
		   Map<Object,Object> map=new TreeMap<Object, Object>();
		   for(int i=0;i<list.size();i++){
			   Object[] o=(Object[])list.get(i);
			   for(int j=0;j<o.length;j++){
				   map.put(o[1],o[2]);
				  }   
			   }
//			   for(Entry<Object,Object> e : map.entrySet()) {
//				       System.out.println("key:"+e.getKey());
//				       System.out.println("value:"+e.getValue());   
//				  }   
		
//	 	Set<Map.Entry<Object,Object>> e =map.entrySet();
	 	for(Entry<Object,Object> entry : map.entrySet()) {
	       System.out.println("key:"+entry.getKey());
	       System.out.println("value:"+entry.getValue());   
	 	} 
	}
	 /**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试上月总计完成订单
	 * Expect: YES
	 * Result: YES  返回1274
	 *
	 */
	@Autowired
    private IOrderUploadReportService orderUploadReportService;
	@Test
	public void test58() throws Exception {
		 GXJOrderUploadReport u=new GXJOrderUploadReport();
		 u.setStatus(6);
		 u.setQa_check(0);
		 u.setQachecktime(DateUtil.getPreM());
		 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);
		 System.out.println(lastMonthOrder);
	} 
	
	 /**
		 * @date   12/19 Mon
		 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
		 * 		        上月总计完成订单
		 * toTest: 测试不向上取整  是否也返回整数
		 * Expect: YES
		 * Result: YES  返回1274
		 *
		 */
		public void test59() throws Exception {
			 GXJOrderUploadReport u=new GXJOrderUploadReport();
			 u.setStatus(6);
			 u.setQa_check(0);
			 u.setQachecktime(DateUtil.getPreM());
			 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
			 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
//			 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);
			 System.out.println(lastMonthOrder);
		} 
	
	 /**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试改变Status和Qa_check会否影响lastMonthOrder值
	 * Expect: YES
	 * Result: YES  返回0
	 *
	 */
	@Test
	public void test60() throws Exception {
		 GXJOrderUploadReport u=new GXJOrderUploadReport();
		 u.setStatus(4);
		 u.setQa_check(1);
		 u.setQachecktime(DateUtil.getPreM());
		 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);
		 System.out.println(lastMonthOrder);
	} 
	
	/**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试用JSONObject接收  能否返回lastMonthOrder值
	 * Expect: YES
	 * Result: YES  返回{"lastMonthOrder":1274} //"lastMonthOrder"不是页面上的1656因为前端设置了x1.3                                             
	 *
	 */
	@Test
	public void test61() throws Exception {
		 GXJOrderUploadReport u=new GXJOrderUploadReport();                                    
		 u.setStatus(6);
		 u.setQa_check(0);
		 u.setQachecktime(DateUtil.getPreM());
		 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);
		 JSONObject objectHomePage=new JSONObject();
		 objectHomePage.put("lastMonthOrder",lastMonthOrder);
		 System.out.println(objectHomePage);
	} 
	
	/**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试setIsfollow(2)【qa已查看】是否仍返回{"lastMonthOrder":1274}
	 * Expect: Nope
	 * Result: Nope  不传Qachecktime,查询的即所有数据,返回{"lastMonthOrder":412737}！         
	 * //QaChecktime是sql里leftJoin以后返回的表里的QaChecktime的字段,是查上个月的数据,isFollow不是Sql里指定的参数so传了也不能改变数据                                                                                                                                                                                                                                     //WHY？？？
	 * 
	 */
	@Test
	public void test62() throws Exception {
		 GXJOrderUploadReport u=new GXJOrderUploadReport();
		 u.setStatus(6);
		 u.setQa_check(0);
		 u.setIsfollow(2); //
//		 u.setQachecktime(DateUtil.getPreM());
		 ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		 BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		 lastMonthOrder=lastMonthOrder.setScale(0, BigDecimal.ROUND_HALF_UP);
		 JSONObject objectHomePage=new JSONObject();
		 objectHomePage.put("lastMonthOrder",lastMonthOrder);
		 System.out.println(objectHomePage);
	} 
	
	/**
	 * @date   12/19 Mon
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试Dao层能否直接返回list内容
	 * Expect: YES 
	 * Result: YES 返回[["2016","01",30817],["2016","02",45410],["2016","03",63105],["2016","04",51475],["2016","05",59625],["2016","06",36742],["2016","07",352211],["2016","08",90718],["2016","09",28900],["2016","10",55923],["2016","11",44933]]
	 *
	 */
	@Test
	public void test63() throws Exception {
		List<Object> list=homepagedao.getStatistical();
		JSONArray arr=JSONArray.fromObject(list);
		System.out.println("************"+arr);  
//		System.out.println(list);
	} 
	

	/**
	 * @date   12/20 Tues
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试
	 * Expect: YES 
	 * Result: YES 
	 *
	 */
	@Test
	public void test64() throws Exception {
		List<Object> list=homepagedao.getStatistical();
		for(Object obj:list){
			Object[] o=(Object[]) obj;
			o[0]=2016;
			JSONArray arr=JSONArray.fromObject(o);
			System.out.println(arr);
		}
//		JSONArray arr=JSONArray.fromObject(list);
//		System.out.println("************"+arr);  
//		System.out.println(list);
	} 
	
	/**
	 * @date   12/20 Tues
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试改变表中"yy"字段的值,是否会影响返回的数据
	 * Expect: YES 显示2015年的每月的需求发布量
	 * Result: NO homepagedao.getStatistical()里已封装了(自带传参) 改变yy不能改变sql(sql默认查的currYear2016的数据) 仍返回2016的数据只是年份换成了2015！
	 *
	 */
	@Test
	public void test65() throws Exception {
		List<Object> list=homepagedao.getStatistical();
		for(Object obj:list){
			Object[] o=(Object[]) obj;
			o[0]=2015;
			JSONArray arr=JSONArray.fromObject(o);
			System.out.println(arr);
		}
	} 
	
	/**
	 * @date   12/20 Tues
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试用map接收,是否会影响返回的数据内容
	 * Expect: NOPE
	 * Result: NOPE
	 *
	 */
	@Test
	public void test66() throws Exception {
		List<Object> list=homepagedao.getStatistical();
		Map<String,Object> map=new TreeMap<String, Object>();
		for(Object obj:list){
			Object[] o=(Object[]) obj;
			map.put("yy", o[0]);
			map.put("releasetimeYm",o[1]);
			map.put("releasenumTol", o[2]);
			System.out.println(map);
		}
	} 
	
	/**
	 * @date   12/20 Tues
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        本年度需求发布量 
	 * toTest: 测试用map接收,是否会影响返回的数据内容
	 * Expect: YES
	 * Result: YES homepagedao.getStatistical()里已封装了(自带传参) 改变yy不能改变sql(sql默认查的currYear2016的数据) 仍返回2016的数据只是年份换成了2014！
	 *
	 */
	@Test
	public void test67() throws Exception {
		List<Object> list=homepagedao.getStatistical();
		Map<String,Object> map=new TreeMap<String, Object>();
		for(Object obj:list){
			Object[] o=(Object[]) obj;
			map.put("yy", 2014);
			map.put("releasetimeYm",o[1]);
			map.put("releasenumTol", o[2]);
			System.out.println(map);
		}
	} 
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试直接从Dao层测 上月总计完成订单能否返回数据
	 * Expect: YES
	 * Result: YES  返回1274
	 *
	 */
	@Autowired
	private IOrderUploadReportDao orderUploadReportDao;
	@Test
	public void test68() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setStatus(6);
		u.setQa_check(0);
		u.setQachecktime(DateUtil.getPreM());
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(u);
		System.out.println(thisMonthOrderQuantityCompleted);
	} 
	

	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试直接从Dao层测 不传参  上月总计完成订单能否返回数据是否一致
	 * Expect: NOPE
	 * Result: NOPE 返回所有数据-- 上月总计完成订单：412799
	 *
	 */
	@Test
	public void test69() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
//		u.setStatus(6);
//		u.setQa_check(0);
//		u.setQachecktime(DateUtil.getPreM());
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(u);
		System.out.println(thisMonthOrderQuantityCompleted);
	} 
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试直接从Dao层测 只传参Status  上月总计完成订单能否返回数据是否一致
	 * Expect: NOPE 
	 * Result: NOPE 返回查询所有数据的同样结果-- 上月总计完成订单：412799
	 *
	 */
	@Test
	public void test70() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setStatus(6);
//		u.setQa_check(0);
//		u.setQachecktime(DateUtil.getPreM());
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(u);
		System.out.println(thisMonthOrderQuantityCompleted);
	} 
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试直接从Dao层测 只传参Qa_check  上月总计完成订单能否返回数据是否一致
	 * Expect: NOPE 
	 * Result: NOPE 返回查询所有数据的同样结果-- 上月总计完成订单：412799
	 *
	 */
	@Test
	public void test71() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
//		u.setStatus(6);
		u.setQa_check(0);
//		u.setQachecktime(DateUtil.getPreM());
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(u);
		System.out.println(thisMonthOrderQuantityCompleted);
	} 
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试直接从Dao层测 只传参Qa_check  上月总计完成订单能否返回数据是否一致
	 * Expect: NOPE 
	 * Result: NOPE 返回全传参的查询结果-- 上月总计完成订单：1274
	 *
	 */
	@Test
	public void test72() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
//		u.setStatus(6);
//		u.setQa_check(0);
		u.setQachecktime(DateUtil.getPreM());
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(u);
		System.out.println(thisMonthOrderQuantityCompleted);
	} 
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试直接从Dao层测 传参Jfuid和Qa_checktime 能否返回数据与之前一致
	 * Expect: NOPE 
	 * Result: NOPE 返回全传参的查询结果-- 1683  是根据Jfuid查有orderid订单号的所有时间的数据
	 *
	 */
	@Test
	public void test73() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setJfuid("53");
//		u.setStatus(6);
//		u.setQa_check(0);
//		u.setQachecktime(DateUtil.getPreM());
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(u);
		System.out.println(thisMonthOrderQuantityCompleted);
	} 
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 官方首页  统计图   统计图内的统计数据统计到当前月份的，数据直接拉真实数据，抓取月内发布成功的需求总量，并作成动态的，每日自动更新数据；都统计；
	 * 		        上月总计完成订单
	 * toTest: 测试直接从Dao层测 只传参Qa_check  上月总计完成订单能否返回数据是否一致
	 * Expect: NOPE 
	 * Result: NOPE 返回全传参的查询结果-- 上月总计完成订单：0
	 *
	 */
	@Test
	public void test74() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setJfuid("53");
//		u.setStatus(6);
//		u.setQa_check(0);
//		u.setQachecktime(DateUtil.getPreM());
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(u);
		System.out.println(thisMonthOrderQuantityCompleted);
	} 
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 *         2  获客总数，抓取平台订单质检成功量的总数； 
	 *         3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； 
	 *         4  数据每日更新；底部--数据展示
	 * toTest: 测试get请求能否直接返回settledEnterprise,passengersTotal和customerSales的值
	 * Expect: YES
	 * Result: YES 返回的json = {"code":"Y","msg":"获取数据成功","settledEnterprise":184,"passengersTotal":412737,"customerSales":15628906.20}
	 *
	 */
	@Test
	public void test75() throws Exception {
		String getresponseString =mockMvc.perform((get("/homepage/bottom")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
	
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 *         2  获客总数，抓取平台订单质检成功量的总数； 
	 *         3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； 
	 *         4  数据每日更新；底部--数据展示
	 * toTest: 测试post请求能否直接返回settledEnterprise,passengersTotal和customerSales的值
	 * Expect: Nope
	 * Result: Nope 返回405Error
	 *
	 */
	@Test
	public void test76() throws Exception {
		String postresponseString =mockMvc.perform((post("/homepage/bottom")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))  
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  
	}
	
	/**
	 * @date    12/20 Tues
	 * @author 
	 * Method:  1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 *          2  获客总数，抓取平台订单质检成功量的总数； 
	 *          3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； 
	 *          4  数据每日更新；底部--数据展示
	 * toTest:  测试传"入驻企业"的参数jfustate  是否会影响返回数据
	 * Expect:  Nope
	 * Result:  Nope. 返回的json = {"code":"Y","msg":"获取数据成功","settledEnterprise":184,"passengersTotal":412737,"customerSales":15628906.20}
	 *
	 */
	@Test
	public void test77() throws Exception {
		String getresponseString =mockMvc.perform((get("/homepage/bottom")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfustate","4")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
	
	/**
	 * @date    12/20 Tues
	 * @author 
	 * Method:  1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 *          2  获客总数，抓取平台订单质检成功量的总数； 
	 *          3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； 
	 *          4  数据每日更新；底部--数据展示
	 * toTest:  测试传"获客总数"的4个参数  是否会影响返回数据
	 * Expect:  Nope
	 * Result:  Nope. 返回的json = {"code":"Y","msg":"获取数据成功","settledEnterprise":184,"passengersTotal":412737,"customerSales":15628906.20}
	 *
	 */
	@Test
	public void test78() throws Exception {
		String getresponseString =mockMvc.perform((get("/homepage/bottom")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuid","53").param("status","6").param("qa_check","0").param("qachecktime","")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
	
	/**
	 * @date    12/20 Tues
	 * @author 
	 * Method:  1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 *          2  获客总数，抓取平台订单质检成功量的总数； 
	 *          3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22； 
	 *          4  数据每日更新；底部--数据展示
	 * toTest:  测试传"客户销售额"的参数releasetime  是否会影响返回数据
	 * Expect:  Nope
	 * Result:  Nope. 返回的json = {"code":"Y","msg":"获取数据成功","settledEnterprise":184,"passengersTotal":412737,"customerSales":15628906.20}
	 *
	 */
	@Test
	public void test79() throws Exception {
		String getresponseString =mockMvc.perform((get("/homepage/bottom")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("releasetime","2016")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 * toTest:  测试能否返回入驻企业数量
	 * Expect:  YES
	 * Result:  YES 返回184
	 *
	 */
	@Autowired
	private IUserService userService;
	@Test
	public void test80() throws Exception {
		 JfUser user=new JfUser();
		 user.setJfustate(4);//已审核通过的用户
		 Long settEnterprise=userService.getSettledEnterprise(user);
		 System.out.println(settEnterprise);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 * toTest:  测试不传参数  能否返回入驻企业数量
	 * Expect:  YES
	 * Result:  YES 查询所有用户  返回284
	 *
	 */
	@Test
	public void test81() throws Exception {
		 JfUser user=new JfUser();
//		 user.setJfustate(4);//已审核通过的用户
		 Long settEnterprise=userService.getSettledEnterprise(user);
		 System.out.println(settEnterprise);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 * toTest:  测试参数Jfustate不存在的值7  settEnterprise返回的null是否被转成0输出  
	 * Expect:  YES
	 * Result:  YES 返回0
	 *
	 */
	@Test
	public void test82() throws Exception {
		 JfUser user=new JfUser();
		 user.setJfustate(7);
		 Long settEnterprise=userService.getSettledEnterprise(user);
		 System.out.println(settEnterprise);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  1  入驻企业，数据抓取平台所有发包方和接包方注册并资料审核通过的用户；
	 * toTest:  测试参数Jfustate传null settEnterprise返回的null是否被转成0输出  
	 * Expect:  YES
	 * Result:  Fail. 返回全表查询的相同结果284 
     *          if(null!=user.getJfustate()){
			         hql.append(" and jfustate = ? ");
			    }
			    Long countDemand =this.countByHql(hql.toString(), listpar);
	 *
	 */
	@Test
	public void test83() throws Exception {
		 JfUser user=new JfUser();
		 user.setJfustate(null);
		 Long settEnterprise=userService.getSettledEnterprise(user);
		 System.out.println(settEnterprise);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  2  获客总数，抓取平台订单质检成功量的总数
	 * toTest:  测试使用JSONObject接收获客总数,能否显示
	 * Expect:  YES
	 * Result:  YES 返回{"passengersTotal":412737}
	 *
	 */
	@Test
	public void test84() throws Exception {
		JSONObject objectHomePage=new JSONObject();
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setStatus(6);
		u.setQa_check(0);
		ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		objectHomePage.put("passengersTotal",lastMonthOrder);
		System.out.println(objectHomePage);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  2  获客总数，抓取平台订单质检成功量的总数
	 * toTest:  测试直接输出获客总数,能否显示
	 * Expect:  YES
	 * Result:  YES 返回412737
	 *
	 */
	@Test
	public void test85() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setStatus(6);
		u.setQa_check(0);
		ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		System.out.println(lastMonthOrder);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  2  获客总数，抓取平台订单质检成功量的总数
	 * toTest:  测试直接输出获客总数,能否显示
	 * Expect:  YES
	 * Result:  YES 返回412797  跟上一个比,说明审查数据错误的有60个
	 *
	 */
	@Test
	public void test86() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setStatus(6);
//		u.setQa_check(0);
		ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		System.out.println(lastMonthOrder);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  2  获客总数，抓取平台订单质检成功量的总数
	 * toTest:  测试其中一个参数传"" 是否走else 全局查询
	 * Expect:  YES
	 * Result:  YES 跟全局查询返回结果一样:412799
	 *
	 */
	@Test
	public void test87() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setJfuid("");
		ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		System.out.println(lastMonthOrder);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  2  获客总数，抓取平台订单质检成功量的总数
	 * toTest:  测试其中一个参数传null 是否走else 全局查询
	 * Expect:  YES
	 * Result:  YES 跟全局查询返回结果一样:412799
	 *
	 */
	@Test
	public void test88() throws Exception {
		GXJOrderUploadReport u=new GXJOrderUploadReport();
		u.setQachecktime(null);
		ThisMonthOrderQuantityCompletedRes res=orderUploadReportService.getThisMonthOrderQuantityCompleted(u);
		BigDecimal lastMonthOrder=res.getThisMonthOrderQuantityCompleted();
		System.out.println(lastMonthOrder);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22
	 * toTest:  测试保留0位小数 是否能返回客户销售额
	 * Expect:  YES
	 * Result:  YES 
	 *
	 */
	@Autowired
	private IHFpService hfpService;
	@Test
	public void test89() throws Exception {
		String currYear=DateUtil.getCurrYear();//取得当前年
		Hfp par=new Hfp();
		par.setReleasetime(currYear);
		BigDecimal customerSales=hfpService.getCustomerSales(par);
		customerSales=customerSales.setScale(0, BigDecimal.ROUND_HALF_UP);
		System.out.println(customerSales);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22
	 * toTest:  测试传releasetime=2015 是否能返回客户销售额
	 * Expect:  YES
	 * Result:  YES 返回5673079
	 *
	 */
	@Test
	public void test90() throws Exception {
		Hfp par=new Hfp();
		par.setReleasetime("2015");
		BigDecimal customerSales=hfpService.getCustomerSales(par);
		customerSales=customerSales.setScale(0, BigDecimal.ROUND_HALF_UP);
		System.out.println(customerSales);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22
	 * toTest:  测试传releasetime=2015 是否能返回客户销售额
	 * Expect:  YES
	 * Result:  YES 返回5673079
	 *
	 */
	@Test
	public void test91() throws Exception {
		Hfp par=new Hfp();
		par.setReleasetime("2015");
		BigDecimal customerSales=hfpService.getCustomerSales(par);
		customerSales=customerSales.setScale(0, BigDecimal.ROUND_HALF_UP);
		System.out.println(customerSales);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22
	 * toTest:  测试传releasetime=null 是否走else能返回客户销售额
	 * Expect:  YES
	 * Result:  YES 返回24108249
	 *
	 */
	@Test
	public void test92() throws Exception {
		Hfp par=new Hfp();
		par.setReleasetime(null);
		BigDecimal customerSales=hfpService.getCustomerSales(par);
		customerSales=customerSales.setScale(0, BigDecimal.ROUND_HALF_UP);
		System.out.println(customerSales);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method:  3  客户销售额，抓取今年发包方结算金额总额的数字并处以0.22
	 * toTest:  直接测试(Dao层) 能否返回数据
	 * Expect:  YES
	 * Result:  YES  返回18
	 *
	 */
	@Autowired
	private IUserDao userDao;
	@Test
	public void test93() throws Exception {
		JfUser user=new JfUser();
		user.setJfustate(3);
		Long l=userDao.getSettledEnterprise(user);
		System.out.println(l);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 2，获客总数，抓取平台订单质检成功量的总数
	 * toTest: 直接测试(Dao层) 测试传参Jfuid是否能返回获客总数
	 * Expect: YES
	 * Result: YES 返回1683
	 *
	 */
	@Test
	public void test94() throws Exception {
		GXJOrderUploadReport user=new GXJOrderUploadReport();
		user.setJfuid("53");
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(user);
		System.out.println(thisMonthOrderQuantityCompleted);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 2，获客总数，抓取平台订单质检成功量的总数
	 * toTest: 直接测试(Dao层) 测试传不存在值的参数  是否能返回获客总数
	 * Expect: YES
	 * Result: YES 返回0                                                                                            
	 *
	 */
	@Test
	public void test95() throws Exception {
		GXJOrderUploadReport user=new GXJOrderUploadReport();
		user.setJfuid("88888888888888");
		user.setStatus(7777);
		user.setQa_check(33333);
		user.setQachecktime("2015-5");
		BigDecimal thisMonthOrderQuantityCompleted=orderUploadReportDao.getThisMonthOrderQuantityCompleted(user);
		System.out.println(thisMonthOrderQuantityCompleted);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 2，获客总数，抓取平台订单质检成功量的总数
	 * toTest: 直接测试(Dao层) 测试传参2015  是否能返回不同获客总数
	 * Expect: YES
	 * Result: YES 返回5673078.62
	 *
	 */
	@Autowired
	private IHFpDao hfpDao;
	@Test
	public void test96() throws Exception {
		Hfp user = new Hfp();
		user.setReleasetime("2015");
		BigDecimal bd=hfpDao.getCustomerSales(user);
		System.out.println(bd);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 2，获客总数，抓取平台订单质检成功量的总数
	 * toTest: 直接测试(Dao层) 测试传参2016  是否能返回获客总数
	 * Expect: YES
	 * Result: YES 返回15628906.20
	 *
	 */
	@Test
	public void test97() throws Exception {
		Hfp user = new Hfp();
		user.setReleasetime("2016");
		BigDecimal bd=hfpDao.getCustomerSales(user);
		System.out.println(bd);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 2，获客总数，抓取平台订单质检成功量的总数
	 * toTest: 直接测试(Dao层) 测试不传参  是否能返回获客总数
	 * Expect: YES
	 * Result: YES 返回24108248.90
	 *
	 */
	@Test
	public void test98() throws Exception {
		Hfp user = new Hfp();
//		user.setReleasetime("2016");
		BigDecimal bd=hfpDao.getCustomerSales(user);
		System.out.println(bd);
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 平台动态
	 * toTest: 测试是否能查询platformdynamic表返回数据
	 * Expect: YES                                                                                                                             
	 * Result: YES 
	 *
	 */
	@Test
	public void test99() throws Exception {
		String getresponseString =mockMvc.perform((get("/homepage/platformdynamic")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
        		.param("platformid","1").param("userid", "34")
        		))  
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
	
	/**
	 * @date   12/20 Tues
	 * @author 
	 * Method: 行业内动态
	 * toTest: 测试是否能查询industrydynamic表返回数据
	 * Expect: YES
	 * Result: YES  405Error                                                                                                                     //get请求？？？dao里的?传参
	 *
	 */
	@Test
	public void test100() throws Exception {
		String postresponseString =mockMvc.perform((post("/homepage/industrydynamic")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  
	}
	
	/**
	 * @date   12/21 Wed
	 * @author 
	 * Method: 行业内动态
	 * toTest: 测试是否能查询IndustryDynamics表返回数据
	 * Expect: YES                                                                                                                  //get请求？？？dao里的?传参
	 * Result: YES 返回[]
	 *
	 */
	@Test
	public void test101() throws Exception {
		IndustryDynamics user=new IndustryDynamics();
		user.setIndyid(1);
		user.setUserid("34");
		List<Object> Industrylist=homepageservice.getIndustryDynamics(user);
		System.out.println(Industrylist);
	}
	
	/**
	 * @date   12/21 Wed
	 * @author 
	 * Method: 行业内动态
	 * toTest: 测试是否能查询IndustryDynamics表返回数据
	 * Expect: YES                                                                                                                  //get请求？？？dao里的?传参
	 * Result: YES 返回[{"code":"Y","list":[],"msg":"获取数据成功"}]
	 *
	 */
	@Test
	public void test102() throws Exception {
		HomePageRes res=new HomePageRes("Y","获取数据成功");
		IndustryDynamics user=new IndustryDynamics();
//		user.setIndyid(1);
		user.setUserid("34");
		List<Object> Industrylist=homepageservice.getIndustryDynamics(user);
		res.setList(Industrylist);
		JSONArray arr=JSONArray.fromObject(res);
		System.out.println(arr);
	}
	
	/**
	 * @date   12/21 Wed
	 * @author 
	 * Method: 行业内动态
	 * toTest: 测试是否能查询IndustryDynamics表返回数据
	 * Expect: YES                                                                                                                
	 * Result: YES 返回[{"code":"Y","list":[{"createtime":"2016.01,02","industrytime":"2016.01,02","indyid":2,"remark":"s","title":"sasdf","updatetime":"","userid":"34"},{"createtime":"2016.01,01","industrytime":"2016.01,01","indyid":1,"remark":"s","title":"啊士大夫胜多负少发射点","updatetime":"","userid":"34"}],"msg":"获取数据成功"}]
	 *
	 */
	@Test
	public void test103() throws Exception {
		HomePageRes res=new HomePageRes("Y","获取数据成功");
		IndustryDynamics user=new IndustryDynamics();
//		user.setIndyid(1);
		user.setUserid(null);
		List<Object> Industrylist=homepageservice.getIndustryDynamics(user);
		res.setList(Industrylist);
		JSONArray arr=JSONArray.fromObject(res);
		System.out.println(arr);
	}
	
	/**
	 * @date   12/21 Wed
	 * @author 
	 * Method: 平台动态
	 * toTest: 测试是否能查询platformdynamic表返回数据
	 * Expect: YES                                                                                                                 
	 * Result: YES 返回[{"code":"Y","list":[{"content":"sdfsdf","createtime":"2016.01,03","platformid":1,"titleurl":"d;//ssss","updatetime":"","userid":"34"}],"msg":"获取数据成功"}]
	 *
	 */
	@Test
	public void test104() throws Exception {
		HomePageRes res=new HomePageRes("Y","获取数据成功");
		PlatformDynamics users=new PlatformDynamics();
		users.setPlatformid(1);
		users.setUserid("34");
		List<Object> Platformlist=homepageservice.getplatform_dynamics(users);
		res.setList(Platformlist);
		JSONArray arr=JSONArray.fromObject(res);
		System.out.println(arr);
	}
	
	/**
	 * @date   12/21 Wed
	 * @author 
	 * Method: 平台动态
	 * toTest: 传参在数据库里不存在的Platformid值,测试是否能查询platformdynamic表返回数据
	 * Expect: Nope                                                                                                                
	 * Result: Nope 返回[{"code":"Y","list":[],"msg":"获取数据成功"}]
	 *
	 */
	@Test
	public void test105() throws Exception {
		HomePageRes res=new HomePageRes("Y","获取数据成功");
		PlatformDynamics users=new PlatformDynamics();
		users.setPlatformid(5);
//		users.setUserid("34");
		List<Object> Platformlist=homepageservice.getplatform_dynamics(users);
		res.setList(Platformlist);
		JSONArray arr=JSONArray.fromObject(res);
		System.out.println(arr);
	}
	
	/**
	 * @date   12/21 Wed
	 * @author 
	 * Method: 行业内动态
	 * toTest: 测试Dao层 是否能查询IndustryDynamics表返回数据
	 * Expect: Yes                                                                                              
	 * Result: Yes 返回  2016.01,02                                                                                                                                                                                                                                   IndustryDynamics表一直查不出数据？？？
	 *
	 */
	@Test
	public void test106() throws Exception {
		IndustryDynamics user=new IndustryDynamics();
//		user.setUserid("34");       //hql.append(" and userid !=?");                   
		List<Object> userlist=homepagedao.getIndustryDynamics(user);
		IndustryDynamics o=(IndustryDynamics)userlist.get(0);  //Hql自动转好，查询返回是具体对象，不是数组！
		System.out.println(o.getCreatetime());
	}
	
	/**
	 * @date   12/21 Wed
	 * @author 
	 * Method: 平台动态
	 * toTest: 测试Dao层 是否能查询platformdynamic表返回数据
	 * Expect: Yes                                                                                                               
	 * Result: Yes  返回   sasd                                                                                                                                                                                                                                Object[]用数组就不能输出？  IndustryDynamics表一直查不出数据？？？
	 *
	 */
	@Test
	public void test107() throws Exception {
		HomePageRes res=new HomePageRes("Y","获取数据成功");
		PlatformDynamics users=new PlatformDynamics();
		users.setUserid("34");
		List<Object> userlist=homepagedao.getplatform_dynamics(users);
//		Object[] o=(Object []) userlist.get(0);            //Hql自动转好，查询返回是具体对象，不是数组！
		PlatformDynamics o=(PlatformDynamics)userlist.get(0); 
		System.out.println(o.getContent());
		
//		List<Object> Platformlist=homepageservice.getplatform_dynamics(users);
//		res.setList(Platformlist);
//		JSONArray arr=JSONArray.fromObject(res);
//		System.out.println(arr);
	}
	
	
	
}