/**
 * 
 */
package com.mso.controller.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.mso.dao.IDatafilteringDao;
import com.mso.dao.IDemandDao;
import com.mso.dao.IHFpDao;
import com.mso.dao.IOrderDemandDao;
import com.mso.dao.IOrderUploadReportDao;
import com.mso.model.Event;
import com.mso.model.HFDatafiltering;
import com.mso.model.HFDemand;
import com.mso.service.ITemplateService;
import com.mso.task.CompletionStatisticsService;
import com.mso.utils.DateUtil;

/**
 * @author 
 * Method: JfUserController里面的除注册，登录，验证的其他方法  test199-test
 * toTest: 
 * Expect:
 * Result:
 * 
 */
public class DemandSettlementTest extends AbstractContextTests{
		
		private MockMvc mockMvc; 
	    
	    @Before  
	    public void setup() {   
	        this.mockMvc = webAppContextSetup(this.wac).build();  
	    }
	    
	    /**
	     * @date   12/21 Wed
	     * @author Carol
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: 测试get请求是否能成功调用modifDemandSettlementStatus修改需求结算状态
	     * Expect: YES
	     * Result: YES 返回json = {"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":null,"ajaxPageStr":"","code":"Y","msg":"","newId":null,"jfuid":null,"jfutype":null,"pid":null,"jfuname":null,"jfupassword":null,"jfustate":null,"jfudisable":null,"jfumobilephone":null,"jfuinvitationcode":null,"invitationcode":null,"showName":null,"headurls":null,"compemail":null,"realname":null,"compname":null,"remember":null,"logontimes":null,"trusteeship":null,"userList":null}
	     *
	     */
	    @Test
	    public void test1() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_DemandSettlement")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**
	     * @date   12/21 Wed
	     * @author Carol
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: 测试post请求是否能成功调用modifDemandSettlementStatus修改需求结算状态
	     * Expect: YES
	     * Result: YES 返回同样结果json={"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":null,"ajaxPageStr":"","code":"Y","msg":"","newId":null,"jfuid":null,"jfutype":null,"pid":null,"jfuname":null,"jfupassword":null,"jfustate":null,"jfudisable":null,"jfumobilephone":null,"jfuinvitationcode":null,"invitationcode":null,"showName":null,"headurls":null,"compemail":null,"realname":null,"compname":null,"remember":null,"logontimes":null,"trusteeship":null,"userList":null}
	     *
	     */
	    @Test
	    public void test2() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_DemandSettlement")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/21 Wed
	     * @author Carol
	     * Method: 更新模板基本数据信息  
	     * toTest: 测试get请求/user_UpdateTemplate
	     * Expect: YES
	     * Result: YES 返回同样结果json={"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":null,"ajaxPageStr":"","code":"Y","msg":"","newId":null,"jfuid":null,"jfutype":null,"pid":null,"jfuname":null,"jfupassword":null,"jfustate":null,"jfudisable":null,"jfumobilephone":null,"jfuinvitationcode":null,"invitationcode":null,"showName":null,"headurls":null,"compemail":null,"realname":null,"compname":null,"remember":null,"logontimes":null,"trusteeship":null,"userList":null}
	     *
	     */
	    @Test
	    public void test3() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_UpdateTemplate")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**
	     * @date   12/21 Wed
	     * @author Carol
	     * Method: 更新模板基本数据信息  
	     * toTest: 测试post请求/user_UpdateTemplate
	     * Expect: YES
	     * Result: YES 返回同样结果json={"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":null,"ajaxPageStr":"","code":"Y","msg":"","newId":null,"jfuid":null,"jfutype":null,"pid":null,"jfuname":null,"jfupassword":null,"jfustate":null,"jfudisable":null,"jfumobilephone":null,"jfuinvitationcode":null,"invitationcode":null,"showName":null,"headurls":null,"compemail":null,"realname":null,"compname":null,"remember":null,"logontimes":null,"trusteeship":null,"userList":null}
	     *
	     */
	    @Test
	    public void test4() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_UpdateTemplate")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    

	    /**
	     * @date   12/21 Wed
	     * @author Carol
	     * Method: 取得子账号
	     * toTest: 测试get请求/user_getCuser 传参pid
	     * Expect: YES
	     * Result: YES 
	     *
	     */
	    @Test
	    public void test5() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_getCuser")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("pid", "20160819035825548")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 取得子账号
	     * toTest: 测试get请求/user_getCuser 不传参是否返回所有数据
	     * Expect: Nope
	     * Result: Nope 返回 json = {"code":"Y","msg":"请传入需要查询的pid","newId":null,"pageNo":null,"currentPage":null,"userList":null} //返回的是controller里拦截的return res内容+返回值类型里的属性值
	     *
	     */
	    @Test
	    public void test6() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_getCuser")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 取得子账号
	     * toTest: 测试post请求/user_getCuser 传参pid是否返回数据
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test7() throws Exception {
	    	String getresponseString =mockMvc.perform((post("/user_getCuser")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED).param("pid", "20160819035825548")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	     

	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 取得user_getCuserById
	     * toTest: 测试get请求/user_getCuserById 传参jfuid 能否返回数据
	     * Expect: YES
	     * Result: YES 
	     *
	     */
	    @Test
	    public void test8() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_getCuserById")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("jfuid", "20160819034144188")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 取得user_getCuserById
	     * toTest: 测试get请求/user_getCuserById 传参jfuid 能否返回数据
	     * Expect: YES
	     * Result: YES 
	     *
	     */
	    @Test
	    public void test9() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_getCuserById")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("jfuid", "20160819034144188")        
	        		.param("jfutype", "3")))                             //userService.getUserByFuid(addput.getJfuid(),"2");  getUserByFuid(String  jfuid, String jfutype)
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 取得user_getCuserById
	     * toTest: 测试get请求/user_getCuserById 传参jfutype 能否返回数据
	     * Expect: Nope
	     * Result: Nope
	     *  //userService.getUserByFuid(addput.getJfuid(),"2");  getUserByFuid(String  jfuid, String jfutype)
	     *  controller层里要求传jfuid,否则return res; +定义的返回值类型的getCuserIdRes及其父类的属性值
	     */
	    @Test
	    public void test10() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_getCuserById")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("jfutype", "3")))                             
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 取得user_getCuserById
	     * toTest: 测试post请求/user_getCuserById 传参jfuid jfutype能否返回数据
	     * Expect: YES
	     * Result: YES 
	     *
	     */
	    @Test
	    public void test11() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_getCuserById")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("jfuid", "20160819034144188")        
	        		.param("jfutype", "2")))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 取得user_getCuserById
	     * toTest: 测试post请求/user_getCuserById 不传参能否返回数据
	     * Expect: Nope
	     * Result: Nope
	     *
	     */
	    @Test
	    public void test12() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_getCuserById")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
	    	
		}
	    
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 用户注册  修改子账号
	     * toTest: 测试post请求 不输入参数 返回数据是否成功
	     * Expect: NOPE 
	     * Result: NOPE 没传jfuid,controller里就拦截了走service  返回的json = {"code":"N","msg":"请输入子账号id","newId":null,"jfuid":null,"pid":null,"jfuname":null,"jfupassword":null,"jfustate":null,"jfudisable":null}
	     *
	     */
	    @Test
	    public void test13() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toUpdateDisable")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 用户注册  修改子账号
	     * toTest: 测试post请求 只输入参数jfuid 返回数据是否成功
	     * Expect: NOPE 
	     * Result: NOPE Dao层方法里userDao.getUserByFuid(user.getJfuid(),user.getJfutype())
	     *
	     */
	    @Test
	    public void test14() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toUpdateDisable")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("jfuid", "101")))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 为每个没有邀请码的用户账号生成邀请码
	     * toTest: 测试用post请求/user_toSetInvitationcode返回数据是否成功
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test15() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toSetInvitationcode")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 为每个没有邀请码的用户账号生成邀请码
	     * toTest: 测试用get请求/user_toSetInvitationcode返回数据是否成功
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test16() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_toSetInvitationcode")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**(#难度测试 DEBUG推断须传的参数(不只是从Service和Dao层找)#)
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 修改超级管理员   用户审核count表  加1
	     * toTest: 测试用get请求/user_toModEvent  不传参 返回数据是否成功
	     * Expect: Nope
	     * Result: 【"msg":"java.lang.NumberFormatException
	     * 【返回的json = {"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":"","ajaxPageStr":"","code":"N","msg":"java.lang.NumberFormatException: For input string: \"\"","newId":null}
	     *
	     */
	    @Test
	    public void test17() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/user_toModEvent")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
		}
	    
	    /**(#难度测试 DEBUG推断须传的参数(不只是从Service和Dao层找)#)
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 修改超级管理员   用户审核count表  加1
	     * toTest: 测试用get请求/user_toModEvent 不传参  返回数据是否成功
	     * Expect: Nope
	     * Result: 【"msg":"java.lang.NumberFormatException
	     * 【返回的json = {"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":"","ajaxPageStr":"","code":"N","msg":"java.lang.NumberFormatException: For input string: \"\"","newId":null}
	     *
	     */
	    @Test
	    public void test18() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toModEvent")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    
	    /** (#难度测试 DEBUG推断须传的参数(不只是从Service和Dao层找)#)
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 修改超级管理员   用户审核count表  加1
	     * toTest: 测试用post请求/user_toModEvent返回数据是否成功  
	     * Expect: YES  【EventServiceImpl层里addUpEvent(Event e)要求传参source和type 不需要传其他参数即可访问】
	     * Result: YES  返回的json = {"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":"","ajaxPageStr":"","code":"N","msg":"java.lang.NumberFormatException: For input string: \"\"","newId":null}
	     *
	     */
	    @Test
	    public void test19() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toModEvent")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
//	        		.param("userId", "4926eef7ad944fbf90a9b0137ae37890")
	        		.param("source", "2")
	        		.param("jfutype", "2")
	        		))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /** (#难度测试 DEBUG推断须传的参数(不只是从Service和Dao层找)#)
	     * @date   12/22 Thurs
	     * @author Carol
	     * Method: 修改超级管理员   用户审核count表  加1
	     * toTest: 测试用post请求/user_toModEvent返回数据是否成功  
	     * Expect: YES  
	     * 【EventServiceImpl层里addUpEvent(Event e)要求传参source和type 不需要传其他参数即可访问】
	     * 【传入的userId值会根据封装好的Hibernate: update self_event set USER_ID=?, MENU_ID=?, COUNT=? where ID=?更新UserId字段】
	     * Result: YES 返回的json = {"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":"","ajaxPageStr":"","code":"Y","msg":"","newId":null}
	     */
	    @Test
	    public void test20() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toModEvent")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("userId", "4926eef7ad944fbf90a9b0137ae37890")
	        		.param("source", "2")
	        		.param("jfutype", "2")
	        		))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /** (#难度测试 DEBUG推断须传的参数(不只是从Service和Dao层找)#)
	     * @date   12/22 Thurs
	     * @author 
	     * Method: 修改超级管理员   用户审核count表  加1
	     * toTest: 测试用post请求/user_toModEvent传参source和jfutype访问   并传入需更新的字段值Hibernate: update self_event set USER_ID=?, MENU_ID=?, COUNT=? where ID=?更新传入的数据是否成功  
	     * Expect: YES 
	     * Result: NOPE EventServiceImpl里的addUpEvent()里根据source和jfutype值已经设死了userId,menuId和count的传入值,so手动传入新值不会影响
	     *
	     */
	    @Test
	    public void test21() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toModEvent")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("userId", "333333333333")
	        		.param("menuId", "55555")
	        		.param("count", "777")
	        		.param("source", "1")
	        		.param("jfutype", "2")
	        		))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/22 Thurs
	     * @author 
	     * Method: 修改超级管理员   用户审核count表  加1
	     * toTest: 测试source和type不是if条件里写的1和2时  更新数据是否成功
	     * Expect: YES
	     * Result: YES 
	     * 【返回 "java.lang.NumberFormatException"
	     * 【初始化时String menuStr=""; source和type不是1或2，就走else==>  Integer administratorMenuurlId=Integer.parseInt(menuStr); menuStr就是初始化时的""  所以无法转Integer
	     */
	    @Test
	    public void test22() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/user_toModEvent")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("source", "3")
	        		.param("jfutype", "5")
	        		))                            
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: 数据库HFDatafiltering表中修改finishnum=releasenum=100, fdstate=4(执行中) 运行test,验证fdstate变成5(结算中)
	     *
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Autowired
	    private CompletionStatisticsService completionStatisticsService;
	    @Test
	    public void test23() throws Exception {
	    	 
	    	completionStatisticsService.modifDemandSettlementStatus();
	    	
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: 数据库h_f_demand表中修改finishnum=releasenum=100, fdstate=4(执行中) 运行test,验证fdstate变成5(结算中)
	     * Expect: YES
	     * Result: FAIL  
	     * 
	     *
	     */
	    @Test
	    public void test24() throws Exception {
	    	
	    	completionStatisticsService.modifDemandSettlementStatus();
	    	 
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: 测试
	     * Expect:
	     * Result:
	     *
	     */
	    @Test
	    public void test25() throws Exception {
	    	
	    	completionStatisticsService.modifDemandSettlementStatus();
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: 测试 Hfp 需求包表中fdstate变成5(结算中), 2个自需求表h_f_datafiltering表和h_f_demand表中fdstate也会变成5(结算中)
	     * Expect: YES
	     * Result: YES
	     * 
	     */
	    @Test
	    public void test26() throws Exception {
	    	
	    	completionStatisticsService.modifDemandSettlementStatus();
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: 子需求表之一h_f_demand需求表的fdstate变成5(结算中),h_j_order_demand订单表的fdstate也变成5(结算中)
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test27() throws Exception {
	    	
	    	completionStatisticsService.modifDemandSettlementStatus();
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: h_f_datafiltering表需求表的fdstate变成5(结算中),h_j_order_demand订单表的fdstate也变成5(结算中)
	     * Expect: YES
	     * Result: FAIL 
	     * 【new bug】 CompletionStatisticsServiceImpl里line 331: HFDemand updema=demandDao.getDemandById(upa);只查了HFDemand表
         * 也要查HFDatafiltering表(添加else！) 否则无法使用定时器更新HFDatafiltering表中的fdstate(结算中 "4")
	     *
	     */
	    @Test
	    public void test28() throws Exception {
	    	
	    	completionStatisticsService.modifDemandSettlementStatus();
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: finishtime(实际完成时间)---jdstate=5(结算中)后最后一次更新时间
	     *         查询endtime(需求规定完成时间)<DateUtil.getTime(),HFDemand表中的jdstate变成5
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test29() throws Exception {
	    	
	    	completionStatisticsService.modifDemandSettlementStatus();
		}
	    
	    /**
	     * @date   12/23 Fri
	     * @author 
	     * Method: 订单 需求   完成量/  状态 修改   定时器手动触发
	     * toTest: finishtime(实际完成时间)---jdstate=5(结算中)后最后一次更新时间
	     *         查询endtime(需求规定完成时间)<DateUtil.getTime(),HFDatafiltering表中的jdstate变成5
	     * Expect: YES
	     * Result: FAIL
	     * 【new bug】 CompletionStatisticsServiceImpl里line 331: HFDemand updema=demandDao.getDemandById(upa);只查了HFDemand表
         * 也要查HFDatafiltering表(添加else！) 否则无法使用定时器更新HFDatafiltering表中的fdstate(结算中 "4")
	     *
	     */
	    @Test
	    public void test30() throws Exception {
	    	
	    	completionStatisticsService.modifDemandSettlementStatus();
		}
	    
	    
	    
	    
	    
	     // /user_UpdateTemplate  /user_getCuser /user_getCuserById  /user_toUpdateDisable   /user_toSetInvitationcode   ModelAndView initUser   
	    //测他们的service和Dao
	    
	    /**
	     * @date   12/27 Tues
	     * @author 
	     * Method: /user_UpdateTemplate 更新模板基本数据信息  
	     * toTest: 
	     * Expect:
	     * Result:
	     *
	     */
	    @Autowired
	    private ITemplateService templateService;
	    @Test
	    public void test31() throws Exception {
	    	templateService.getClueTemplateUrl("",true);
		}
	    
	    

}
