/**
 * @author 
 * Method: mycenter包下HfpController的所有方法的测试
 * toTest:
 * Expect:
 * Result:
 * 
 */
package com.mso.controller.test;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.mso.dao.IDemandDao;
import com.mso.dao.IHFpDao;
import com.mso.model.HFDatafiltering;
import com.mso.model.HFDemand;
import com.mso.model.Hfp;
import com.mso.model.PLabel;
import com.mso.res.HFPRes;
import com.mso.service.IDatafilteringService;
import com.mso.service.IDemandService;
import com.mso.service.IHFpService;
import com.mso.utils.PageResults;

public class HfpControllerTest  extends AbstractContextTests{
	
		private MockMvc mockMvc; 
	    
	    @Before  
	    public void setup() {   
	        this.mockMvc = webAppContextSetup(this.wac).build();  
	    }
	    
	    /**
	     * @date   12/27 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试不传参 get请求是否成功
	     * Expect: YES
	     * Result: YES 用户id不能为空! 返回的json = {"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":null,"ajaxPageStr":"","code":"ER0018","msg":"用户id不能为空!","newId":null,"hfpList":null,"pageresults":null,"hfpListObject":null}
	     *
	     */
	    @Test
	    public void test1() throws Exception {
	    	String getresponseString =mockMvc.perform((get("/getHfps")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
			
		}
	    
	    /**
	     * @date   12/27 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试不传参 post请求是否成功
	     * Expect: YES
	     * Result: YES 用户id不能为空! 返回的json = {"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":null,"ajaxPageStr":"","code":"ER0018","msg":"用户id不能为空!","newId":null,"hfpList":null,"pageresults":null,"hfpListObject":null}
	     *
	     */
	    @Test
	    public void test2() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/getHfps")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
			
		}
	    
	    /**
	     * @date   12/27 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试post请求 传参demandname和pause 返回数据是否成功
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test3() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/getHfps")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("demandname","线下EK-上海-1512").param("pause", "0")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
			
		}
	    
	    /**
	     * @date   12/27 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试post请求 传参jfuid 返回数据是否成功  "用户id不能为空!"提示是否会消失
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test4() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/getHfps")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("jfuid","29")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
			
		}
	    
	    /**
	     * @date   12/27 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试post请求 全传参  返回数据是否成功  
	     * Expect: YES
	     * Result: 返回的json = {"report":null,"pageNo":1,"currentPage":2,"pageSize":10,"entityOrField":true,"url":null,"totalCount":1,"pageCount":1,"results":null,"pageStr":"\t<div class=\"page\">\n\t<span>共1页，1条</span>\n</div>\n","ajaxPageStr":"\t<div class=\"page\">\n\t<span>共1页，1条</span>\n</div>\n","code":"Y","msg":"","newId":null,"hfpList":[],"pageresults":null,"hfpListObject":null}
	     *
	     */
	    @Test
	    public void test5() throws Exception {
	    	String postresponseString =mockMvc.perform((post("/getHfps")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("demandname","线下EN-广州-1512").param("beginreleasetime","2015-11-20 00:00:00").param("endreleasetime","2015-12-20 00:00:00").param("par","1").param("currentPage","2").param("jfuid","28")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
		}
	    
	    /**
	     * @date   12/28 Wed
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试service层 不传参  currentPage的返回值
	     * Expect: 1
	     * Result: 0  因为直接走的service层,没传参则hfp对象的currentPage传的是null,currentPage是int类型,默认0
	     *
	     */
	    @Autowired
		private IHFpService hfpService;
	    @Test
	    public void test6() throws Exception {
	    	HFPRes res=new HFPRes("Y","") ;   //new对象时 没传参 currentPage即默认为0
	    	Hfp hfp=new Hfp();
	    	res=hfpService.getHfps(hfp);
	    	System.out.println(res.getCurrentPage());
		}
	    
	    /**
	     * @date   12/28 Wed
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试service层
	     * Expect: 传入不在一条数据内的字段值, 返回数据是否成功
	     * Result: currentPage=0   Results=null   TotalCount=0(hfp.set的数据在数据库里不统一(不在一条数据内),int TotalCount找不到就默认0
	     *
	     */
	    @Test
	    public void test7() throws Exception {
	    	HFPRes res=new HFPRes("Y","") ;                    
	    	Hfp hfp=new Hfp();
	        hfp.setJfuid("28");
	        hfp.setDemandname("线下EN-广州-1512");
	        hfp.setPar("6");
//	        hfp.setBeginreleasetime("2015-11-11 00:00:00");
//	        hfp.setEndreleasetime("2015-12-11 00:00:00");
	        hfp.setStrzt(new Integer[]{3,7});
	        hfp.setPause(1);
	        hfp.setCurrentPage(1);
	    	res=hfpService.getHfps(hfp);
	    	System.out.println(res.getCurrentPage()+"***********"+res.getResults()+"*********"+res.getTotalCount());
		}
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试service层
	     * Expect: 
	     * Result: 【res.getCurrentPage()=22
	     * 【{"ajaxPageStr":"","code":"Y","currentPage":1,"entityOrField":true,"hfpList":[],"hfpListObject":[],"msg":"","newId":"","pageCount":0,"pageNo":1,"pageSize":10,"pageStr":"","pageresults":null,"report":null,"results":[],"totalCount":0,"url":""}
	     *
	     */
	    @Test
	    public void test8() throws Exception {
	    	
	    	HFPRes res=new HFPRes("Y","") ;                    
	    	Hfp hfp=new Hfp();
	        hfp.setJfuid("32");
	        hfp.setDemandname("线下EK-上海-1512");
	        hfp.setPar("2");
	        hfp.setBeginreleasetime("2015-11-29 00:00:02");
	        hfp.setEndreleasetime("2015-11-30 00:00:10");
	        hfp.setStrzt(new Integer[]{1});
	        hfp.setPause(0);
	        hfp.setCurrentPage(22);
	    	res=hfpService.getHfps(hfp);
	    	System.out.println(res.getCurrentPage());                                        //res.getCurrentPage()=22
	    	JSONObject jsonObject = JSONObject.fromObject(res);
	    	System.out.println(jsonObject);                                                  //{"currentPage":1} ？？
		}
	
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试Dao层  只传hql的一个参数是否成功
	     * Expect: YES
	     * Result: FAIL. 执行的方法是ts=this.findPageByFetchedHql(hql.toString(), countHql,user.getCurrentPage(), pageSize, listpar);
	     * pageSize是定义的int pageSize=10写死的  listpar是参数的list  还有currentPage是必传的
	     * 
	     */
	    @Autowired
		private IHFpDao hfpDao;
	    @Test
	    public void test9() throws Exception{
	    	Hfp user=new Hfp();
	    	user.setJfuid("32");
	    	PageResults s= hfpDao.getHfps(user);
	    	JSONObject jsonObject = JSONObject.fromObject(s);
	    	System.out.println(jsonObject);
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试Dao层  只传hql的一个参数是否成功
	     * Expect: YES
	     * Result: FAIL. 执行的方法是ts=this.findPageByFetchedHql(hql.toString(), countHql,user.getCurrentPage(), pageSize, listpar);
	     * pageSize是定义的int pageSize=10写死的  listpar是参数的list  还有currentPage是必传 传了23
	     * 
	     * 结果JSONObject返回{..."currentPage":4...}                                                                                                      //？？？？？？？
	     *  
	     */
	    @Test
	    public void test10() throws Exception{
	    	Hfp user=new Hfp();
	    	user.setJfuid("32");
	    	user.setCurrentPage(23);                             
	    	PageResults s= hfpDao.getHfps(user);
	    	JSONObject jsonObject = JSONObject.fromObject(s);
	    	System.out.println("*****"+jsonObject);
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试Dao层  不传hql的参数 只传必传参数currentPage 是否成功
	     * Expect: YES
	     * Result: YES 数据返回完整{..."currentPage":23...}                                                                                               
	     *  
	     */
	    @Test
	    public void test11() throws Exception{
	    	Hfp user=new Hfp();
	    	user.setCurrentPage(23);                             
	    	PageResults s= hfpDao.getHfps(user);
	    	JSONObject jsonObject = JSONObject.fromObject(s);
	    	System.out.println("*****"+jsonObject);
	    }
	    
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试get请求 to_getHfps  传参是否访问成功
	     * Expect: YES
	     * Result: YES                                                                                               
	     *  
	     */
	    @Test
	    public void test12() throws Exception{
	    	String getresponseString =mockMvc.perform((get("/201511201D986F3E/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试POST请求 to_getHfps  传参是否访问成功
	     * Expect: FAIL
	     * Result: FAIL                                                                                              
	     *  
	     */
	    @Test
	    public void test13() throws Exception{
	    	String postresponseString =mockMvc.perform((post("/201511201D986F3E/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试get请求 to_getHfps  传参Jfuid是否返回33
	     * Expect: YES
	     * Result: FAIL  返回pid对应的jfuid{..."jfuid":"29"...}                                                                                             
	     *  
	     */
	    @Test
	    public void test14() throws Exception{
	    	String getresponseString =mockMvc.perform((get("/201511201D986F3E/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("Jfuid", "33")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试get请求 除了url上传参pid 再次传不同的参pid值   数据是否显示两个pid对应的数据
	     * Expect: YES
	     * Result: NOPE  只返回url上传参的pid的数据{..."pid":"201511201D986F3E..."}                                                                                       
	     *  
	     */
	    @Test
	    public void test15() throws Exception{
	    	String getresponseString =mockMvc.perform((get("/201511201D986F3E/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("pid", "201511205DFDF04D")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试get请求 除了url上传参pid 再次传相同的参pid值   数据是否返回成功
	     * Expect: YES
	     * Result: YES                                                                                 
	     *  
	     */
	    @Test
	    public void test16() throws Exception{
	    	String getresponseString =mockMvc.perform((get("/201511201D986F3E/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("pid", "201511201D986F3E")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试get请求  传多参(不在一条数据内的字段)  返回数据是否为多传的参的数据值
	     * Expect: YES
	     * Result: NOPE 返回的始终是url上pid对应的那条数据的所有字段                                                                              
	     *  
	     */
	    @Test
	    public void test17() throws Exception{
	    	String getresponseString =mockMvc.perform((get("/201511201D986F3E/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("pid", "201511201D986F3E").param("demandname", "线").param("fdstate", "3").param("packageid", "5555555")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  
	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: get请求  传pid=null 返回数据是否成功
	     * Expect: YES
	     * Result: 没有查到信息   返回的json = {"code":"N","msg":"没有查到信息","detail":null}
	     *
	     */
	    @Test
	    public void test18() throws Exception{
	    	String getresponseString =mockMvc.perform((get("/null/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("pid", "201511201D986F3E").param("demandname", "线").param("fdstate", "3").param("packageid", "5555555")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  

	    }
	    
	    /**
	     * @date   12/29 Thurs
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: get请求  传不存在的pid值  返回数据是否成功
	     * Expect: FAIL
	     * Result: FAIL 没有查到信息   返回的json = {"code":"N","msg":"没有查到信息","detail":null}
	     *
	     */
	    @Test
	    public void test19() throws Exception{
	    	String getresponseString =mockMvc.perform((get("/cccccccccc/getDetailHfp")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
	        		.param("pid", "201511201D986F3E").param("demandname", "线").param("fdstate", "3").param("packageid", "5555555")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + getresponseString);  

	    }
	    
	    
	    /**
	     * @date   12/30 Fri
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试hfpService层  是否可以返回数据
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test20() throws Exception{
	    	Hfp hf=new Hfp();
	    	hf.setPid("20151127345E210D");
	    	Hfp up=hfpService.getHfpById(hf);
	    	System.out.println(up.getJfuid());
	    }
	    
	    
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试hfpService层 传错误的pid 是否可以返回数据
	     * Expect: Fail
	     * Result: Fail --NullPointerException
	     *
	     */
	    @Test
	    public void test21() throws Exception {
	    	Hfp hf=new Hfp();
	    	hf.setPid("aaaaa");
	    	Hfp up=hfpService.getHfpById(hf);
	    	System.out.println(up.getJfuid());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试hfpService层 只传Demandname 是否可以返回数据
	     * Expect: Fail
	     * Result: Fail --NullPointerException
	     *
	     */
	    @Test
	    public void test22() throws Exception {
	    	Hfp hf=new Hfp();
//	    	hf.setPid("aaaaa");
	    	hf.setDemandname("线下EN-广州-1512");
	    	Hfp up=hfpService.getHfpById(hf);
	    	System.out.println(up.getJfuid());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试hfpService层 只传Demandname 是否可以返回数据
	     * Expect: Fail
	     * Result: Fail --NullPointerException
	     *
	     */
	    @Test
	    public void test23() throws Exception {
	    	Hfp hf=new Hfp();
//	    	hf.setPid("aaaaa");
	    	hf.setDemandname("线下EN-广州-1512");
	    	Hfp up=hfpService.getHfpById(hf);
	    	System.out.println(up.getJfuid());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试HFpDaoImpl层 传pid Jfuid返回值是否为29
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Test
	    public void test24() throws Exception {
	    	Hfp hf=new Hfp();
	    	hf.setPid("201511201D986F3E");
	    	hf=hfpDao.getHfpById(hf);
	    	System.out.println(hf.getJfuid());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试HFpDaoImpl层 传和pid不统一的demandname 返回值是否受影响
	     * Expect: Nope
	     * Result: Nope   jfuid=29  currentPage=Null(Dao层无此字段)
	     *
	     */
	    @Test
	    public void test25() throws Exception {
	    	Hfp hf=new Hfp();
	    	hf.setPid("201511201D986F3E");
	    	hf.setDemandname("线下H-上海-1512");
	    	hf=hfpDao.getHfpById(hf);
	    	System.out.println(hf.getJfuid()+hf.getCurrentPage());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试IDemandService层 传pid 是否能返回数据
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Autowired
	    private IDemandService demandService;
	    @Test
	    public void test26() throws Exception {
	    	HFDemand user=new HFDemand();
	    	user.setPid("201511201D986F3E");
	    	List<Object> lists=demandService.getDemandByPid(user);
	    	System.out.println(((HFDemand)lists.get(0)).getCategory3());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试IDemandService层 传pid 是否能返回数据
	     * Expect: Nope
	     * Result: Nope IndexOutOfBoundsException
	     *
	     */
	    @Test
	    public void test27() throws Exception {
	    	HFDemand user=new HFDemand();
	    	user.setPid("201511201D986F3E");
	    	List<Object> lists=demandService.getDemandByPid(user);
	    	System.out.println(((HFDemand)lists.get(1)).getCategory3());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试IDemandService层  只传demandid 是否能返回数据
	     * Expect: Nope  NullPointerException
	     *
	     */
	    @Test
	    public void test28() throws Exception {
	    	HFDemand user=new HFDemand();
	    	user.setDemandid("201511205DFDF04D");
	    	List<Object> lists=demandService.getDemandByPid(user);
	    	System.out.println(((HFDemand)lists.get(0)).getCategory3());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试IDemandService层  传不统一的pid和jfuid值  是否still返回pid对应的数据值
	     * Expect: YES
	     * Result: YES 返回Null
	     * 
	     */
	    @Test
	    public void test29() throws Exception {
	    	HFDemand user=new HFDemand();
	    	user.setPid("201511205DFDF04D");
	    	user.setJfuid("35");
	    	List<Object> lists=demandService.getDemandByPid(user);
	    	System.out.println(((HFDemand)lists.get(0)).getCategory1());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试IDemandService层  传不统一的pid和jfuid值  lists.get(5)是否still返回pid对应的数据值
	     * Expect: FAIL
	     * Result: FAIL 返回IndexOutOfBoundsException 
	     * 
	     */
	    @Test
	    public void test30() throws Exception {
	    	HFDemand user=new HFDemand();
	    	user.setPid("201511205DFDF04D");
	    	List<Object> lists=demandService.getDemandByPid(user);
	    	System.out.println(((HFDemand)lists.get(5)).getCategory1());
		}
	    
	    /**
	     * @date   1/3 Tues
	     * @author Carol
	     * Method: to_getHfps  发包方登录——我的需求——列表需求(所有子需求)
	     * toTest: 测试Dao层  
	     * Expect: FAIL
	     * Result: FAIL 返回IndexOutOfBoundsException 
	     * 
	     */
	    @Autowired
		private IDemandDao demandDao;
	    @Test
	    public void test31() throws Exception {
	    	HFDemand user=new HFDemand();
	    	user.setPid("201511205DFDF04D");
	    	List<Object> lists=demandDao.getDemandByPid(user);
	    	System.out.println(((HFDemand)lists.get(5)).getCategory1());
		}
	    
	    /**
	     * @date   1/4 Wed
	     * @author Carol
	     * Method: getDatafilteringByPid 
	     * toTest: 测试传pid 能否返回数据
	     * Expect: YES
	     * Result: YES
	     *
	     */
	    @Autowired
	    private IDatafilteringService datafilteringService;
	    @Test
	    public void test32() throws Exception {
	    	HFDatafiltering user=new HFDatafiltering(); 
	    	user.setPid("20160929051732481");
	    	List<Object> list=datafilteringService.getDatafilteringByPid(user);
	    	System.out.println(((HFDatafiltering)list.get(0)).getOrdername());
		}
	    
	    /**
	     * @date   1/4 Wed
	     * @author Carol
	     * Method: getDatafilteringByPid 
	     * toTest: 测试传fdstate 能否返回数据
	     * Expect: YES
	     * Result: YES 打印最后一条数据
	     *
	     */
	   
		@Test
	    public void test33() throws Exception {
	    	HFDatafiltering user=new HFDatafiltering(); 
	    	user.setFdstate(1);
	    	List<Object> list=datafilteringService.getDatafilteringByPid(user);
	    	Object obj=null;
	    	for(Object o:list){
	    		obj=o;
//	    		String =(HFDatafiltering)o.getOrdername();
	    	}
	    	if(obj!=null){
	    		System.out.println(((HFDatafiltering)obj).getOrdername());
	    	}
		}
		
	    /**
	     * @date   1/4 Wed
	     * @author Carol
	     * Method: getDatafilteringByPid 
	     * toTest: 测试传fdstate 能否返回所有fdstate=1的数据
	     * Expect: YES
	     * Result: 
	     *
	     */
	   
		@Test
	    public void test34() throws Exception {
	    	HFDatafiltering user=new HFDatafiltering(); 
	    	user.setFdstate(1);
	    	List<Object> list=datafilteringService.getDatafilteringByPid(user);
	    	for(Object obj:list){
	    		if(obj!=null){
	    			System.out.println(((HFDatafiltering)obj).getOrdername());
	    		}
	    	}
		}


}