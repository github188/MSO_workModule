/**
 * 
 */
package com.mso.controller.test;

import static org.junit.Assert.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.mso.dao.HFUserDetailDao;
import com.mso.dao.HJUserDetailDao;
import com.mso.dao.IUserDao;
import com.mso.dao.SmsCodeDao;
import com.mso.model.HFUserDetail;
import com.mso.model.HJUserDetail;
import com.mso.model.JfUser;
import com.mso.model.SmsCode;
import com.mso.service.HJfUserDetailService;
import com.mso.service.IUserService;
import com.mso.utils.CommonUtil;
import com.mso.utils.DateUtil;

/**
 * @author Carol
 * toTest: 基于类测试"登录功能"相关的所有方法  test57-test91   
 * Expect: 
 * Result:
 * 
 */
public class LogInOutTest extends AbstractContextTests{
	

	private MockMvc mockMvc; 
    
    @Before  
    public void setup() {   
        this.mockMvc = webAppContextSetup(this.wac).build();  
    } 
    
    /**
     * @date
     * @author 
     * Method: 登录
     * toTest: 测试已注册的账户登录是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test1() throws Exception {
    	String postresponseString =mockMvc.perform((post("/user_toLogin")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570").param("jfupassword", "12345")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  

    }
    
    /**
     * @date
     * @author 
     * Method:
     * toTest: 测试添加默认的remember参数 会否成功登录
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test2() throws Exception {
    	String postresponseString =mockMvc.perform((post("/user_toLogin")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570").param("jfupassword", "12345").param("remember","1")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  

    }
    
    /**
     * @date
     * @author 
     * Method:
     * toTest: 测试多添加其他参数  会否成功登录
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test3() throws Exception {
    	String postresponseString =mockMvc.perform((post("/user_toLogin")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570").param("jfupassword", "12345").param("remember","1").param("jfutype", "1")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  

    }
    
    /**
     * @date
     * @author 
     * Method: 登出
     * toTest: 测试登出 会否返回response的构造器的参数code和msg
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test4() throws Exception {
    	String postresponseString =mockMvc.perform((post("/loginOut")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))  
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  

    }
    
    /**
     * @date
     * @author 
     * Method: 登出
     * toTest: 测试额外传参(方法没要求传参情况下)会否影响返回值
     * Expect: Nope
     * Result: Nope
     *
     */
    @Test
    public void test5() throws Exception {
    	String postresponseString =mockMvc.perform((post("/loginOut")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("code","LogOut").param("msg", "LogOutSuccess")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  

    }
    
   
    /**
	 * @date
	 * @author 手机验证找回密码
	 * Method: 找回密码
	 * toTest: 测试不传type(找回方式)是否成功
	 * Expect: YES
	 * Result: YES
	 *
	 */
    @Test
    public void test6() throws Exception {
		String postresponseString =mockMvc.perform((post("/user/telCode")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString);  
	}
	
	/**
	 * @date   12/13 Tues
	 * @author 
	 * Method: 手机验证找回密码
	 * toTest: 测试多传一个type(找回方式)是否成功
	 * Expect: YES
	 * Result: YES
	 *
	 */
    @Test
	public void test7() throws Exception {
		String postresponseString =mockMvc.perform((post("/user/telCode")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570").param("type","1")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString); 

	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 邮箱验证找回密码
     * toTest: 测试错误格式注册的邮箱 找回密码是否成功
     * Expect: Fail
     * Result: Fail  json = {"code":"ER0027","msg":"邮件格式不正确!","smsCode":null,"jfuname":null,"email":"c@mso.com","type":null}
     * private Integer type;//短信验证码类型   1 注册   2 手机验证找回密码 3邮箱验证找回密码
     */
    @Test
    public void test8() throws Exception {
    	String postresponseString =mockMvc.perform((post("/user/emailCode")                              
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570").param("type","3")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString); 

	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 邮箱验证找回密码
     * toTest: 测试type设置为2(手机验证找回密码)时 能否通过邮箱找回密码
     * Expect: Fail
     * Result: SUCCESS! controller里已setType=3 所以返回json = {"code":"Y","msg":"","smsCode":"113017","jfuname":"15710160570","email":"carol.koo@mso-china.com","type":3}
     *
     */
    @Test
    public void test9() throws Exception {
    	String postresponseString =mockMvc.perform((post("/user/emailCode")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570").param("type","2")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString); 
		
	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 邮箱验证找回密码
     * toTest: 测试不传type,能否通过邮箱找回密码
     * Expect: YES
     * Result: YES 默认type=3
     *
     */
    @Test
    public void test10() throws Exception {
    	String getresponseString =mockMvc.perform((get("/user/emailCode")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("jfuname","15710160570")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString);     
		
	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 手机验证或者邮件验证后  密码重置方法
     * toTest: 测试直接访问重设密码接口是否成功
     * Expect: YES
     * Result: YES 返回json = {"code":"Y","msg":"","smsCode":"141979","jfuname":"15710160570","email":null,"type":3}
     * toOptimize: http://192.168.2.127/retrievePassword.html?jfuname=b4lBYPIVWXpiULvEkRXYSQ==&type=3&smsCode=141979 
     * 访问/user/resetPassword此接口时(点击emailLink时)，发现smsCode的isUse(使用状态)是2(已使用)时，应直接显示此页面失效，而非设置新密码-确认密码-确认后才弹出alert！
     * 且alert应直接显示在页面上！
     * 【username是密文，jfuname是明文，数据库里两个都是明文！url上jfuname是密文(url上传参设置的)！此接口的访问参数是SmsCode对象，其中参数只有username！没有jfuname】
     *
     */
    @Test
    public void test11() throws Exception {
    	String postresponseString =mockMvc.perform((post("/user/resetPassword")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("username","b4lBYPIVWXpiULvEkRXYSQ==").param("jfuname","15710160570").param("type","3").param("isuse","1").param("smscode","141979").param("password","123456")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + postresponseString); 
		
	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 手机验证或者邮件验证后  密码重置方法
     * toTest: 测试用get请求是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test12() throws Exception {
    	String getresponseString =mockMvc.perform((get("/user/resetPassword")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("username","b4lBYPIVWXpiULvEkRXYSQ==").param("jfuname","15710160570").param("type","3").param("isuse","1").param("smscode","141979").param("password","123456")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString); 
		
	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 手机验证或者邮件验证后  密码重置方法
     * toTest: 测试不传jfuname是否成功
     * Expect: YES
     * Result: YES 返回json = {"code":"Y","msg":"","smsCode":"141979","jfuname":"15710160570","email":null,"type":3}
     *
     */
    @Test
    public void test13() throws Exception {
    	String getresponseString =mockMvc.perform((get("/user/resetPassword")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("username","b4lBYPIVWXpiULvEkRXYSQ==").param("type","3").param("isuse","1").param("smscode","141979").param("password","123456")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString); 
		
	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 手机验证或者邮件验证后  密码重置方法
     * toTest: 测试传email是否会返回email值 
     * Expect: Fail
     * Result: Fail. 返回json = {"code":"Y","msg":"","smsCode":"141979","jfuname":"15710160570","email":null,"type":3} 因为response没setEmail
     *
     */
    @Test
    public void test14() throws Exception {
    	String getresponseString =mockMvc.perform((get("/user/resetPassword")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("username","b4lBYPIVWXpiULvEkRXYSQ==").param("type","3").param("isuse","1").param("smscode","141979").param("password","123456").param("email","carol.koo@mso-china.com")))
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString); 
		
	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 手机验证或者邮件验证后  密码重置方法
     * toTest: 测试无isUse参数 是否成功
     * Expect: Fail
     * Result: Fail. json = {"code":"Y","msg":"","smsCode":"141979","jfuname":"15710160570","email":null,"type":3}
     *
     */
    @Test
    public void test15() throws Exception {
    	String getresponseString =mockMvc.perform((get("/user/resetPassword")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("username","b4lBYPIVWXpiULvEkRXYSQ==").param("password","123456").param("type","3").param("smscode","141979").param("email","carol.koo@mso-china.com")))  
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString); 
		
	}
    
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 手机验证或者邮件验证后  密码重置方法
     * toTest: 测试无type=2时 是否成功
     * Expect: Fail 
     * Result: Fail. json = {"code":"ER0011","msg":"您输入的用户名或手机号码格式不对!","smsCode":null,"jfuname":null,"email":null,"type":null}
     * 因为接口里type=3时username解密赋给Jfuname, type=2时Jfuname还是username的密文,所以不符合手机号格式！
     *
     */
    @Test
    public void test16() throws Exception {
    	String getresponseString =mockMvc.perform((get("/user/resetPassword")                               
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
        		.param("username","b4lBYPIVWXpiULvEkRXYSQ==").param("password","123456").param("type","2").param("smscode","141979").param("email","carol.koo@mso-china.com")))  
        		.andExpect(status().isOk())
        		.andReturn().getResponse().getContentAsString(); 
                System.out.println("--------返回的json = " + getresponseString); 
		
	}
    
    
    @Autowired
    private HJfUserDetailService hjfUserDetailService;
    @Autowired
    private IUserService userService;
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 更新登录次数
     * toTest: 测试更改登录次数是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test17() throws Exception {
    	JfUser user=new JfUser();
    	user.setJfuid("1");
    	user.setJfutype("2");
    	userService.editzUser(user);  
    }
    /**
     * @date   12/14 Wed
     * @author 
     * Method: 更新登录次数
     * toTest: 测试setLogontimes会不会影响它本身setLogontimes(up.getLogontimes()+1);
     * Expect: YES
     * Result: NOPE. editzUser()里已定义了setLogontimes 所以自己set的没用
     *
     */
    @Test
    public void test18() throws Exception {
    	JfUser user=new JfUser();
    	user.setLogontimes(999);
    	user.setJfuid("1");
    	user.setJfutype("2");
    	userService.editzUser(user);  
    }

    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 更新登录次数
     * toTest: 测试set所有其他非空字段会不会也更新;
     * Expect: YES
     * Result: NOPE. editzUser()里只定义了setLogontimes 和setUpdatetime所以自己set的没用
     *
     */
    @Test
    public void test19() throws Exception {
    	JfUser user=new JfUser();
    	user.setJfuid("1");
    	user.setJfutype("2");
    	user.setJfuname("77777777777");
    	user.setJfupassword("000111");
    	user.setJfustate(3);
    	user.setJfudisable(2);
    	user.setUpdatetime(DateUtil.getTime());
    	userService.editzUser(user);  
    }
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 通过fuid,jfutype在Jfuser主表上查到对象  再分别更新HFUserDetail发包方和HJUserDetail接包方详表其他字段信息
     * toTest: 验证fuid=1的对象是否如数据库一样在HJUserDetail接包方详表上 
     * Expect: YES
     * Result: YES
     * 
     */
    @Test
    public void test20() throws Exception {
    	String type="";
    	Object o=hjfUserDetailService.getFUserById("1",type);
    	try {
    		HFUserDetail x=(HFUserDetail) o;
			assertEquals("bbb",x.getJfuname());
		} catch (Exception e) {
			HJUserDetail x=(HJUserDetail)o;
			assertEquals("aaa",x.getJfuname());
			System.err.println("!!!");
		}
    	
    	
    }
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 通过fuid,jfutype在Jfuser主表上查到对象  再分别更新HFUserDetail发包方和HFUserDetail接包方详表其他字段信息
     * toTest: 验证fuid=1的对象是否jfutype=2
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test21() throws Exception {
    	String jfutype="2";
    	Object o=hjfUserDetailService.getFUserById("1",null);
    	if("2".equals(jfutype)){
    		HJUserDetail x=(HJUserDetail) o;
			assertEquals("aaa",x.getJfuname());
    	}else if("1".equals(jfutype)){
    		HFUserDetail x=(HFUserDetail) o;
			assertEquals("bbb",x.getJfuname());
		}
    }
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 根据用户名查询
     * toTest: 测试能否正确比较断言的结果
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test22() throws Exception {
    	JfUser user=new JfUser();
    	user.setJfuname("aaa");
    	user=userService.getUserByUserName(user); //此处user被重新赋值
    	assertEquals("1",user.getJfuid());
    	
    }
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 根据用户名查询
     * toTest: 测试输入错误的断言,Junit是否报错
     * Expect: YES
     * Result: YES 返回ComparisonFailure: expected:<[5] but was:<[1]
     *
     */
    @Test
    public void test23() throws Exception {
    	JfUser user=new JfUser();
    	user.setJfuname("aaa");
    	user=userService.getUserByUserName(user); //此处user被重新赋值
    	assertEquals("5",user.getJfuid());
    	
    }
    
    /** 
     * @date   12/15 Thurs
     * @author 
     * Method: 根据用户名查询
     * toTest: 测试输入错误的jfutype值,Junit是否报错
     * Expect: YES
     * Result: NOPE. 因为getUserByUserName(user)查询里的hql只设置了一个查询条件" where u.jfuname = ?"
     *
     */
    @Test
    public void test24() throws Exception {
    	JfUser user=new JfUser();
    	user.setJfuname("aaa");
    	user.setJfutype("1");
    	user=userService.getUserByUserName(user); //此处user被重新赋值
    	assertEquals("1",user.getJfuid());
    	
    }
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 增加验证码信息
     * toTest: 测试是否能成功增加
     * Expect: YES
     * Result: YES
     *
     */
    @Test	
    public void test25() throws Exception {
    	SmsCode smsd=new SmsCode();
    	smsd.setUsername("KKK");
    	smsd.setEmail("1111@qq.com");
    	smsd.setIsuse(2);
    	smsd.setSmscode("565656");
    	userService.addSmsCode(smsd);
	}
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 返回接发包方邮箱(以发送邮箱验证码)
     * toTest: 测试 是否能获取email内容
     * Expect: YES
     * Result: YES 返回null(数据库本身存的null)
     *
     */
    @Test
    public void test26() throws Exception {
    	JfUser user=new JfUser();
    	user.setJfutype("1");  //user.getJfutype()
    	user.setJfuid("101");
    	String email=hjfUserDetailService.selectHJfUser(user);
    	System.out.println("*******************"+email);
		
	}
    
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 返回接发包方邮箱
     * toTest: 测试只发送jfuid获得的email内容
     * Expect: 数据库里的xxx@qq.com
     * Result: NOPE! 返回空字符串"" 因为selectHJfUser()里定义初始值String email=""; 没传Jfutype,so走else，由于此Jfuid不在hjUserDetail里,所以res是null,跳出返回return emai(即初始化的email="")
     *
     */
    @Test
    public void test27() throws Exception {
    	JfUser user=new JfUser();
    	user.setJfuid("0000000000");
    	String email=hjfUserDetailService.selectHJfUser(user);
    	System.out.println("*******************"+email);
		
	}

    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 更新登录次数
     * toTest: 测试通过jfuid获取用户名是否正确
     * Expect: YES
     * Result: YES
     *
     */
    @Autowired
    private IUserDao userDao;
    @Test
    public void test28() throws Exception {
    	JfUser j=userDao.getUserByFuid("109","2");
    	assertEquals("1400262266@qq.com",j.getJfuname());
	}
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 更新登录次数
     * toTest: 测试更改jfutype获取用户名是否空指针异常
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test29() throws Exception {
    	JfUser j=userDao.getUserByFuid("109","1");
    	assertEquals("1400262266@qq.com",j.getJfuname());
	}
  
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 查询发包方详表里Headurl字段信息
     * toTest: 测试断言返回JUnit测试错误
     * Expect: YES
     * Result: YES 
     *
     */
    @Autowired
    private HFUserDetailDao hfUserDetailDao;
    @Test
    public void test30() throws Exception {
    	
    	HFUserDetail f=hfUserDetailDao.getUserDetailByFid("101");
    	assertEquals("jjj",f.getHeadurl());
		
	}
  
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 查询发包方详表里Headurl字段信息
     * toTest: 测试重设Headurls能否成功更新Headurls为绝对路径
     * Expect: YES
     * Result: YES 
     *
     */
    @Test
    public void test31() throws Exception {
    	
    	HFUserDetail f=hfUserDetailDao.getUserDetailByFid("101");
    	f.setHeadurls(CommonUtil.mosaicUserUrl(f.getHeadurl()));
    	assertEquals("http://mso-china.com:8088/user/101/info/u173_131416.png",f.getHeadurls());
	}
    
    
    /**
     * @date  12/15 Thurs
     * @author 
     * Method: 
     * toTest: 测试新set HFUserDetail对象里的Approveremark属性会否被数据库里返回HFUserDetail对象的Approveremark属性值覆盖
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test32() throws Exception {
    	
    	HFUserDetail f=hfUserDetailDao.getUserDetailByFid("101");
    	String a=f.getApproveremark(); //数据库里返回HFUserDetail对象的Approveremark属性值
    	f.setApproveremark("YYY");
    	String b=f.getApproveremark(); //重设后的Approveremark属性值
    	assertEquals(b,a);
	}
    
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 根据用户名查询
     * toTest: 通过用户名查询邀请码是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test33() throws Exception {
    	 JfUser user=new JfUser();
    	 user.setJfuname("aaa");
    	 user=userDao.getUserByUserName(user);
    	 System.out.println(user.getJfuinvitationcode());
    	
    }

    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 增加验证码
     * toTest: 测试增加自增的主键smsid是否成功增加数据
     * Expect: YES
     * Result: YES 主键不用set 依然自增                                                                     
     *
     */
    @Autowired
	SmsCodeDao smsCodeDao;
    @Test
    public void test34() throws Exception {
    	SmsCode s=new SmsCode();
    	s.setSmsid(987654321);
    	s.setUsername("7777777");
    	s.setSmscode("88888");
    	s.setType(2);
    	smsCodeDao.addSmsCode(s);
		
	}
    /**
     * @date   12/15 Thurs
     * @author 
     * Method: 通过jfuid获取HFUserDetail對象
     * toTest: 测试是否能断言成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test35() throws Exception {
    	HFUserDetail f=hfUserDetailDao.getUserDetailByFid("110");
    	assertEquals("VIP成人",f.getCompname());
    }
  
    /**
     * @date   12/16 Fri
     * @author 
     * Method: 通过jfuid获取HJUserDetail對象
     * toTest: 测试是否能断言成功
     * Expect: YES
     * Result: YES
     *
     */
	@Autowired
	HJUserDetailDao hjUserDetailDao;
    @Test
    public void test36() throws Exception {
    	HJUserDetail j=hjUserDetailDao.getUserDetailByFid("109");
    	assertEquals("市场总监",j.getContactsposition());
    }
    
   
	
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
