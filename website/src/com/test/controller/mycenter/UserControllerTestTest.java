package com.test.controller.mycenter;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.web.servlet.ModelAndView;

public class UserControllerTestTest  extends AbstractContextControllerTests{
  
    private MockMvc mockMvc; 
    
    @Before  
    public void setup() {   
        this.mockMvc = webAppContextSetup(this.wac).build();  
    } 
    
    

    

    
    
//    perform：执行一个RequestBuilder请求，会自动执行SpringMVC的流程并映射到相应的控制器执行处理；
//    get:声明发送一个get请求的方法。MockHttpServletRequestBuilder get(String urlTemplate, Object... urlVariables)：根据uri模板和uri变量值得到一个GET请求方式的。另外提供了其他的请求的方法，如：post、put、delete等。
//    param：添加request的参数，如上面发送请求的时候带上了了pcode = root的参数。假如使用需要发送json数据格式的时将不能使用这种方式，可见后面被@ResponseBody注解参数的解决方法
//    andExpect：添加ResultMatcher验证规则，验证控制器执行完成后结果是否正确（对返回的数据进行的判断）；
//    andDo：添加ResultHandler结果处理器，比如调试时打印结果到控制台（对返回的数据进行的判断）；
//    andReturn：最后返回相应的MvcResult；然后进行自定义验证/进行下一步的异步处理（对返回的数据进行的判断）；
    
    
    
    @Test  
    public void testLogin() throws Exception {  
        //模拟post请求/user_toLogin
        String postresponseString =mockMvc.perform((post("/user_toLogin")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  //数据的格式
        		.param("jfuname","zhangsan").param("jfupassword", "123456")))
        		.andExpect(status().isOk())//添加执行完成后的断言  返回的状态是200
//        		.andDo(print())//打印出请求和相应的内容
        		.andReturn().getResponse().getContentAsString();  //将相应的数据转换为字符串
                System.out.println("--------返回的json = " + postresponseString);



        //模拟post请求/user_toLogin
        String getresponseString =mockMvc.perform((get("/user_toLogin")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  //数据的格式
        		.param("jfuname","zhangsan").param("jfupassword", "123456")))
        		.andExpect(status().isOk())//添加执行完成后的断言  返回的状态是200
//        		.andDo(print())//打印出请求和相应的内容
        		.andReturn().getResponse().getContentAsString();  //将相应的数据转换为字符串
                System.out.println("--------返回的json = " + getresponseString);
    } 
    
    //无参数 返回json数据类型接口
    @Test  
    public void testPlatformdynamic() throws Exception {  
//    	 ResultActions resultActions =mockMvc.perform((get("/homepage/platformdynamic")
//        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)));
//    	 MockHttpServletResponse res= resultActions.andReturn().getResponse();
//    	 resultActions.andExpect(status().isOk());
//    	 System.out.println("***********"+res.getContentAsString());
    	 
    	 
    	 
    	 
    	 //模拟post登录请求  取得Session   /user_toLogin
         HttpSession sesion=mockMvc.perform((post("/user_toLogin")
                 		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  //数据的格式
                 		.param("jfuname","zhangsan").param("jfupassword", "123456")))
                 		.andExpect(status().isOk())//添加执行完成后的断言  返回的状态是200
                 		.andReturn().getRequest().getSession();  //将相应的数据转换为字符串
                         System.out.println("--------返回的json = " + sesion);
                         Map<String, String> usermap=(Map<String, String>) sesion.getAttribute("usermap");
                         String jfuid=usermap.get("jfuid");
                         String jfutype=usermap.get("jfutype");
                         System.out.println("jfuid**************"+jfuid);
                         System.out.println("jfutype**************"+jfutype);
    } 
    
    
  //无参数 返回ModelAndView数据类型接口
    @Test  
    public void testhome_toMain() throws Exception {  
    	 ResultActions resultActions =mockMvc.perform((get("/home_toMain")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)));
    	 MvcResult r= resultActions.andReturn();
    	 ModelAndView view=r.getModelAndView();
    	 String viewname= view.getViewName();
    	 System.out.println("***********"+viewname);
    	 MockHttpServletResponse res= r.getResponse();
    	 resultActions.andExpect(status().isOk());
//    	 resultActions.andDo(print());
    	 System.out.println("***********"+res.getContentAsString());
    } 
    
    
    
    
    
    
    
    
    
    
    
    
    //需要session　参数的接口　
    @Test  
    public void testhome2_toIndex() throws Exception {  
    	 ResultActions resultActions =mockMvc.perform((get("/home2_toIndex")
        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .session((MockHttpSession)getLoginSession())  //getLoginSession 获取登录session      传入session
    	 ));
    	 MvcResult r= resultActions.andReturn();
    	 ModelAndView view=r.getModelAndView();
    	 String viewname= view.getViewName();
    	 System.out.println("***********"+viewname);
    	 MockHttpServletResponse res= r.getResponse();
    	 resultActions.andExpect(status().isOk());
    	 System.out.println("***********"+res.getContentAsString());
    } 
    
    /** 
     * 获取登入信息session 
     * @return 
     * @throws Exception 
     */  
    private HttpSession getLoginSession() throws Exception{  
        //模拟post登录请求  取得Session   /user_toLogin
        HttpSession sesion=mockMvc.perform((post("/user_toLogin")
                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  //数据的格式
                		.param("jfuname","zhangsan").param("jfupassword", "123456")))
                		.andExpect(status().isOk())//添加执行完成后的断言  返回的状态是200
                		.andReturn().getRequest().getSession();  //将相应的数据转换为字符串
                        System.out.println("--------返回的sesion = " + sesion);
                        @SuppressWarnings("unchecked")
						Map<String, String> usermap=(Map<String, String>) sesion.getAttribute("usermap");
                        String jfuid=usermap.get("jfuid");
                        String jfutype=usermap.get("jfutype");
                        System.out.println("jfuid**************"+jfuid);
                        System.out.println("jfutype**************"+jfutype);
                	    return sesion;	
    }
    
    
    
    
    
    
    

}