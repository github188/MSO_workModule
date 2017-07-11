
package com.mso.controller.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
import net.sf.json.JSONObject;

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
import com.mso.res.HJfUserDetailRes;
import com.mso.res.UserRes;
import com.mso.service.IUserService;
import com.mso.utils.DateUtil;

/**
 * @author Carol
 * toTest: 基于类测试"注册功能"相关的所有方法  test34-test56  
 * Expect: 
 * Result:
 * 
 */
public class RegisterTest extends AbstractContextTests{
	
	private MockMvc mockMvc; 
    
    @Before  
    public void setup() {   
        this.mockMvc = webAppContextSetup(this.wac).build();  
    } 
    
    /**
     * @date
     * @author 
     * Method: 注册/找回密码 获取验证码  jfuname==手机号 type:短信验证码类型   1 是注册   2 是找回密码   
     * toTest: 测试发包方注册 是否可以获取验证码
     * Expect: YES
     * Result: {"code":"Y","msg":"","smsCode":"634073","jfuname":"15710160570","email":null,"type":1}
     * @throws Exception 
     *
     */
    @Test
    public void test1toGetCode() throws Exception{ 
    	 String postresponseString =mockMvc.perform((post("/user/telCode")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","15710160570").param("type", "1")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  

    }
    
    /**
     * @date
     * @author 
     * Method: 注册/找回密码 获取验证码  jfuname==手机号 type:短信验证码类型   1 是注册   2 是(忘记密码)找回密码的发验证码   
     * toTest: 测试接包方注册 是否可获取验证码
     * Expect: YES
     * Result: {"code":"Y","msg":"","smsCode":"839750","jfuname":"15710160570","email":null,"type":2}
     * @throws Exception 
     *
     */
    @Test
    public void test2toGetCode() throws Exception{ 
    	 String postresponseString =mockMvc.perform((post("/user/telCode")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","15710160570").param("type", "2")))
//	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  

    }
    
    /**
     * @date
     * @author 
     * Method: 验证短信验证码
     * toTest: 测试注册名和验证码是否存在
     * Expect: YES
     * Result: YES
     * @throws Exception 
     * when back项目LZLServer is on,sms发送短信的接口在back项目上(msof调用它的发) 
     */
    @Test
    public void test3toValidateCode() throws Exception{
    	 String postresponseString =mockMvc.perform((post("/user/validateCode")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","15710160570").param("type","1").param("smscode","818457")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
    }
    
    /**
     * @date
     * @author 验证短信验证码
     * Method: 测试注册名和验证码是否存在
     * toTest: 测试type=2(忘记密码找回密码)用的验证码是否为注册时的验证码
     * Expect: Nope
     * Result: Nope. "msg":"输入的验证码不正确(没有找到对应的验证码)!"
     *
     */
    @Test
    public void test4toValidateCode() throws Exception{
    	 String postresponseString =mockMvc.perform((post("/user/validateCode")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","15710160570").param("type","2").param("smscode","818457")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
    }
    
    /**
     * @date
     * @author 
     * Method: 模拟注册  (输的参都是新参数， 数据库里的数据都是已注册过的用户！)
     * toTest: 测试接包方注册是否成功
     * Expect: YES 
     * Result: YES
     * @throws Exception 
     *
     */
    @Test
    public void test5toRegoster() throws Exception{
    	 String postresponseString =mockMvc.perform((post("/user_toRegoster")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","11111111119").param("jfutype","2").param("realname","C").param("jfupassword", "555555").param("compname", "Ccc").param("compemail", "c@mso-china.com")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
    	
    }
    
    /**
     * @date
     * @author 
     * Method: 注册账号
     * toTest: 测试手机号不满11位数的结果
     * Expect: 返回“您输入的用户名或手机号码格式不对!”
     * Result: Fail. 数据库并不存在此手机号，但返回  msg":"用户名或者手机号已经被占用!" 应该返回 ER_CODE_011_VALUE = "您输入的用户名或手机号码格式不对!";
     *
     */
    @Test
    public void test6toRegoster() throws Exception{
    	 String postresponseString =mockMvc.perform((post("/user_toRegoster")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","1010101").param("jfutype","1").param("realname","D").param("jfupassword", "000").param("compname", "Aaa").param("compemail", "ca@mso-china.com")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
    }
    
    /**
     * @date
     * @author 
     * Method: 注册账号
     * toTest: 测试compname,compemail和另一账号的compname和compemail相同, 是否可以注册
     * Expect: Nope, 不一样才符合逻辑
     * Result: 可以注册
     *
     */
    @Test
    public void test7toRegoster() throws Exception{
   	 String postresponseString =mockMvc.perform((post("/user_toRegoster")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","13666666666").param("jfutype","1").param("realname","D").param("jfupassword", "12345").param("compname", "Ccc").param("compemail", "c@mso-china.com")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
   }
    
    /**
     * @date
     * @author 
     * Method: 注册账号
     * toTest: 测试特殊字符的密码是否注册成功
     * Expect: YES
     * Result: YES 且密码加密 "jfupassword":"OxjEjGCyGtw=","
     *
     */
    @Test
    public void test8toRegoster() throws Exception{
   	 String postresponseString =mockMvc.perform((post("/user_toRegoster")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","13000000000").param("jfutype","1").param("realname","D").param("jfupassword", "!?$").param("compname", "Bbb").param("compemail", "abc@mso-china.com")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
   }
    
    /**
     * @date
     * @author 
     * Method: 注册账号
     * toTest: 测试不存在的email账号注册是否成功
     * Expect: Fail
     * Result: YES 不存在的email应该不能注册
     *
     */
    @Test
    public void test9toRegoster() throws Exception{
   	 String postresponseString =mockMvc.perform((post("/user_toRegoster")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("jfuname","13777777777").param("jfutype","1").param("realname","D").param("jfupassword", "12345").param("compname", "Ccc").param("compemail", "c@mso-china.com")))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  
   }
    
    @Autowired
    private IUserService userService;
    /**
     * @date
     * @author 
     * Method: 存储验证码
     * toTest: 测试设置SmsCode的部分属性的值 存储验证码到sms_code表是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test10addSmsCode(){
    	SmsCode smsd=new SmsCode();
//    	smsd.setIp(CusAccessObjectUtil.getIpAddress());
   		smsd.setContent("ccc");
   		smsd.setPassword("123456");
   		smsd.setType(2); //短信验证码类型   1 注册   2 手机验证找回密码 3邮箱验证找回密码
   		smsd.setIsuse(1); // 2-使用   1-未使用 
   		smsd.setUsername("15710160570");
   		smsd.setCreatetime(DateUtil.getTime()); 
   		smsd.setUpdatetime("");
   		userService.addSmsCode(smsd);
    }
    
    /**
     * @date
     * @author 
     * Method: 存储验证码
     * toTest: 测试全传""和null值验证码是否能保存
     * Expect: YES
     * Result: YES 没设置smscode就能保存不合理
     *
     */
    @Test
    public void test11addSmsCode(){
    	SmsCode smsd=new SmsCode();
//    	smsd.setIp(CusAccessObjectUtil.getIpAddress());
   		smsd.setContent("");
   		smsd.setPassword("");
   		smsd.setType(null); //短信验证码类型   1 注册   2 手机验证找回密码 3邮箱验证找回密码
   		smsd.setIsuse(null); // 2-已验证   1-未验证
   		smsd.setUsername("");
   		smsd.setCreatetime(DateUtil.getTime()); 
   		smsd.setUpdatetime("");
   		userService.addSmsCode(smsd);
    }
    
    /**
     * @date
     * @author 
     * Method: 存储验证码
     * toTest: 测试只set Hibernate Save()要求set的部分字段/属性 是否成功
     * Expect: Fail
     * Result: Yes  Hibernate的字段不set都默认null 初始化生成
     *
     */
    @Test
    public void test12addSmsCode(){
    	SmsCode smsd=new SmsCode();
   		smsd.setContent("d");
   		smsd.setPassword("sss");
   		smsd.setType(null); //短信验证码类型   1 注册   2 手机验证找回密码 3邮箱验证找回密码
   		smsd.setIsuse(null); // 2-使用   1-未使用 
   		userService.addSmsCode(smsd);
    }
    
    /**
     * @date
     * @author 
     * Method: 存储验证码(Service层)
     * toTest: 测试Username不设置手机号是否存储成功
     * Expect: Fail
     * Result: SUCCESS. username不符合手机号格式，不应能保存
     *
     */
    @Test
    public void test13addSmsCode(){
    	SmsCode smsd=new SmsCode();
   		smsd.setUsername("c");
   		userService.addSmsCode(smsd);
    }
    
    
    /**
     * @date
     * @author 
     * Method: 存储验证码(Service层)
     * toTest: 查询已存的验证码是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test14getSmsCodeByUname(){
    	SmsCode smsd=new SmsCode();
    	smsd.setSmscode("839750");
   		smsd.setUsername("15710160570");
   		smsd.setType(2);
   		SmsCode smsCode=userService.getSmsCodeByUname(smsd);
   		System.out.println("smsCode:"+smsCode.getSmscode());
    }
    
    /**
     * @date
     * @author 
     * Method: 用户注册(Service层)
     * toTest: 测试“确认密码”不传 能不能注册成功
     * Expect: Fail  因为网页上显示是必传参数
     * Result: Success “确认密码”的参数NewCPassword在前端JS里传，service里不用传到数据库此参数
     *
     */
    @Test
    public void test15register(){
    	JfUser addput=new JfUser();
    	addput.setJfutype("2");
    	addput.setJfuid("1");
    	addput.setJfuname("aaa");
    	addput.setRealname("ss");
    	addput.setJfustate(0);//接包方/发包方-当前用户信息的状态        0-初始状态(注册未完善资料) 1-填写资料-提交     3-驳回        4-已审核 
    	addput.setJfudisable(1);
    	addput.setJfupassword("mmm");
    	addput.setCompemail("x@126.com");
//    	addput.setNewCPassword("HHH");
//    	addput.set
    	UserRes res=userService.register(addput);
    	JSONObject jsonObject = JSONObject.fromObject(res);
    	System.out.println(jsonObject);
    	
    }
    
    /**
     * @date
     * @author 
     * Method: 根据用户名查询(Service层)
     * toTest: 根据非主键查询用户信息是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test16getUserByUserName(){
    	JfUser u=new JfUser();
    	u.setJfuname("aaa");
    	JfUser user=userService.getUserByUserName(u);
    	JSONObject jsonObject = JSONObject.fromObject(user);
    	System.out.println(jsonObject);
    }
    
    @Autowired
	IUserDao userDao;
    /**
     * @date
     * @author 
     * Method: 根据用户名查询(Dao层)
     * toTest: 根据主键  而非where后字段 查询用户信息是否成功
     * Expect: YES
     * Result: FAIL 返回NULL
     *
     */
    @Test
    public void test17getUserByUserName(){
    	JfUser u=new JfUser();
    	u.setJfuid("101");
    	JfUser user=userDao.getUserByUserName(u);
    	JSONObject jsonObject = JSONObject.fromObject(user);
    	System.out.println(jsonObject);
    }
    
    @Autowired
	SmsCodeDao smsCodeDao;
    /**
     * @date
     * @author 
     * Method: 存储验证码(Dao层)
     * toTest: 测试存储非6位验证码是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test18addSmsCode(){
    	SmsCode user=new SmsCode();
    	user.setSmscode("11111");
    	smsCodeDao.addSmsCode(user);
    }
    
    /**
     * @date
     * @author 
     * Method: 验证验证码(Dao层)
     * toTest: 测试验证码验证内容返回是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test19getSmsCodeByUname(){
    	SmsCode smsd=new SmsCode();
    	smsd.setSmscode("030013");
    	smsd.setUsername("13386137527");
    	smsd.setType(1);
//    	smsd.setSmsid(216);
    	SmsCode s=smsCodeDao.getSmsCodeByUname(smsd);
    	System.out.println(s.getContent());
    }
    
    /**
     * @date
     * @author 
     * Method: 验证登录名jfunamelowercase的重复性(Dao层)
     * toTest: 测试通过非Sql查询条件的字段   查询用户的Jfupassword用户名是否成功
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test20getUserByUnamelowercase(){
    	JfUser user=new JfUser();
    	user.setJfuname("carrie");
//    	user.setJfunamelowercase("superman1");
    	JfUser J=userDao.getUserByUnamelowercase(user);
    	System.out.println(J.getJfupassword());
    }
    
    /**
     * @date
     * @author 
     * Method: 增加用户信息
     * toTest: 测试能否新增新数据
     * Expect: YES
     * Result: YES
     *
     */
    @Test
    public void test21addUser(){
    	JfUser user=new JfUser();
    	user.setJfuid("12345");
    	user.setJfutype("2");
    	user.setJfuname("787878");
    	user.setJfupassword("0000");
    	user.setJfustate(1);
    	user.setJfudisable(1);
//    	user.setJfuinvitationcode("nnnn");
    	try {
    		user=userDao.addUser(user);
		} catch (Exception e) {
			System.out.println("报错啦"+e.toString());
		}
    	System.out.println("成功"+user.getJfupassword());
    }

	@Autowired
	HFUserDetailDao hfUserDetailDao;
   /**
 * @date
 * @author 
 * Method: 增加发包方用户信息
 * toTest: 测试能否新增新数据
 * Expect: YES
 * Result: YES
 *
 */
   @Test
   public void test22addHJfUser(){
	    HFUserDetail par=new HFUserDetail();
   		par.setJfuid("0000000000");//用户id
		par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
		par.setRealname("Carolyn");//您的姓名
		par.setCompemail("xxx@qq.com");//邮箱
		par.setCompname("mso");//公司名
		par.setJfutype("1");
		try {
			hfUserDetailDao.addHfUser(par);
		} catch (Exception e) {
			System.out.println("报错啦"+e.toString());
		}
    	System.out.println("成功");
   }
   
   @Autowired
   HJUserDetailDao hjUserDetailDao;
   /**
 * @date
 * @author 
 * Method: 增加接包方用户信息
 * toTest: 测试能否新增新数据
 * Expect: YES
 * Result: YES
 *
 */
   @Test
   public void test23addHJfUser2(){
	    HJUserDetail par=new HJUserDetail();
		par.setJfuid("3838383");//用户id
		par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
		par.setRealname("TTT");//您的姓名
		par.setCompemail("zero@outlook.com");//邮箱
		par.setCompname("STAR");//公司名
		try{
			hjUserDetailDao.addHJfUser(par);
			System.out.println("SUCCESS");
		}catch(Exception e){
			System.out.println("ERROR!");
		}
   }
   
   
    
}
