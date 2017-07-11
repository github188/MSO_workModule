/**
 * 
 */
package com.mso.controller.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.mso.dao.IJTouristsDao;
import com.mso.dao.ITouristsDao;
import com.mso.model.JTourists;
import com.mso.model.Tourists;
import com.mso.service.IJTouristsService;
import com.mso.service.ITouristsService;
import com.mso.utils.DateUtil;

/**
 * @author Carol
 * toTest: 基于类测试"Intentiontourists意向客户"相关的所有方法  test92-test198
 * 
 */
public class IntentiontouristsTest extends AbstractContextTests{
	
	private MockMvc mockMvc; 
    
    @Before  
    public void setup() {   
        this.mockMvc = webAppContextSetup(this.wac).build();  
    } 
	
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 发包方  插入意向客户信息
     * toTest: 测试fitid是不是自增的
     * Expect: YES
     * Result: YES 数据库里fitid是自增,而非"88888888888"
     *
     */
    @Test
	public void test1() throws Exception {
		String getresponseString =mockMvc.perform((get("/intentiontourists_tofAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("fitid","88888888888").param("fiid","44")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 发包方  插入意向客户信息
     * toTest: 测试不插入Not_Null的字段fiid  是否仍添加成功
     * Expect: Fail
     * Result: Fail 必须插入
     *
     */
    @Test
	public void test2() throws Exception {
		String getresponseString =mockMvc.perform((get("/intentiontourists_tofAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 发包方  插入意向客户信息
     * toTest: 测试插入其他可空字段 是否成功
     * Expect: Fail
     * Result: Fail Not_Null字段fiid必须插入
     *
     */
    @Test
	public void test3() throws Exception {
		String getresponseString =mockMvc.perform((get("/intentiontourists_tofAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
        		.param("fitname","cccccc")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 发包方  插入意向客户信息
     * toTest: 测试post请求 是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
	public void test4() throws Exception {
		String postresponseString =mockMvc.perform((post("/intentiontourists_tofAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
        		.param("fiid","77")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 接包方  插入意向客户信息
     * toTest: 测试传jitid是否自增
     * Expect: Nope
     * Result: Nope       按getMinutes()随机增                                                                  //新Bug---Controller里定义了  addput.setJitid(aa.getMinutes()+""); 主键是String不能自增   随机按minute开始
     *
     */  	
    @Test
	public void test5() throws Exception {
		String getresponseString =mockMvc.perform((get("/intentiontourists_tojAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
        		.param("jitid","uuuu")
        		.param("jmcid","ffffff")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 接包方  插入意向客户信息
     * toTest: 测试不插入Not_Null的字段jmcid  是否仍添加成功
     * Expect: YES
     * Result: YES                                                                            
     *
     */
    @Test
	public void test6() throws Exception {
		String getresponseString =mockMvc.perform((get("/intentiontourists_tojAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
        		.param("jmcid","bbbbbbbbbb")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 接包方  插入意向客户信息
     * toTest: 测试测试post请求 是否成功
     * Expect: YES
     * Result: YES                                                                            
     *
     */
    @Test
	public void test7() throws Exception {
		String postresponseString =mockMvc.perform((post("/intentiontourists_tojAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
        		.param("jmcid","bbbbbbbbbb")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 接包方  插入意向客户信息
     * toTest: 测试可空字段jitmobilephone  是否仍添加成功
     * Expect: Fail
     * Result: Fail                                                                         
     *
     */
    @Test
	public void test8() throws Exception {
		String postresponseString =mockMvc.perform((post("/intentiontourists_tojAddJson")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
        		.param("jitmobilephone","6666666666")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 发包方  插入意向客户信息
     * toTest: 测试数据库自增的主键fitid 是否成功自增
     * Expect: Fail
     * Result: Fail  因为数据库内Fitid是String(Varchar)所以不能自增                                                                        
     *
     */
    @Autowired
    private ITouristsService touristsService;
    @Test
	public void test9() throws Exception {
    	  Tourists addput=new Tourists();
    	  addput.setFitid("22222222222");
    	  addput.setFiid("33333");
    	  touristsService.addTourists(addput);
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 发包方  插入意向客户信息
     * toTest: 测试添加其他字段值   是否添加数据成功
     * Expect: YES
     * Result: YES                                                              
     *
     */
    @Test
	public void test10() throws Exception {
    	  Tourists addput=new Tourists();
    	  addput.setFitid("99999999");
    	  addput.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
  		  addput.setFitstate(0);//初始化状态
    	  addput.setFiid("7777777777777");
    	  touristsService.addTourists(addput);
	}
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 接包方  插入意向客户信息
     * toTest: 测试
     * Expect: YES
     * Result: YES                                                              
     *
     */
    @Autowired
    private IJTouristsService jtouristsService;
    
    @Test
   	public void test11() throws Exception {
    	JTourists addput=new JTourists();
    	addput.setJitid("6666");
    	addput.setJmcid("222");
    	jtouristsService.addJTourists(addput);
    
    }
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 接包方  插入意向客户信息
     * toTest: 测试插入其他的可以空的字段 返回数据是否成功
     * Expect: Nope
     * Result: Nope 必须插入Not_Null字段
     *
     */
    @Test
   	public void test12() throws Exception {                                                
    	JTourists addput=new JTourists();
    	addput.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
		addput.setJitstate(0);//初始化状态
//		Date aa=new Date();
//		addput.setJitid(aa.getMinutes()+"");
    	jtouristsService.addJTourists(addput);
    
    }
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 发包方  插入意向客户信息
     * toTest: 直接测试Dao层
     * Expect:
     * Result:
     *
     */
    @Autowired
	private ITouristsDao touristsDao;
    @Test
   	public void test13() throws Exception {
    	Tourists user=new Tourists();
    	user.setFitid("99999");
    	user.setFiid("1111111");
    	touristsDao.addTourists(user);
    
    }
    
    /**
     * @date   12/21 Wed
     * @author 
     * Method: 接包方  插入意向客户信息
     * toTest: 直接测试Dao层  不传主键jitid能否返回数据
     * Expect: Yes
     * Result: Fail. 因为jitid是String(Varchar)不能自增,so必须手动传
     *
     */
	@Autowired
	private IJTouristsDao jtouristsDao;
    @Test
   	public void test14() throws Exception {
    	JTourists user=new JTourists();
    	user.setJmcid("90909090");
    	jtouristsDao.addJTourists(user);
    
    }
    
    
    
    
    
    
    
    
    
}
