package com.mso.controller.test;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import java.io.UnsupportedEncodingException;
import java.util.Map;

import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.web.servlet.ModelAndView;

public class ControllerTest extends AbstractContextTests{
	
	  	private MockMvc mockMvc; 
	    
	    @Before  
	    public void setup() {   
	        this.mockMvc = webAppContextSetup(this.wac).build();  
	    } 
	    

		@Test
		public void test1getBaseRegion()  {
	    		try {
	                //模拟get请求/getBaseRegion    测试参数：regionType=“3”,"0"和"5" （查询 我要选的城市-2 我要选的省份-1 我要选的区域-4）
	                String getresponseString =mockMvc.perform((get("/getBaseRegionType/5")
	                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  //数据的格式
	                		))
	                		.andExpect(status().isOk())//预测 {"code": "N","basreglist":[]}
	                		.andDo(print())
	                		.andReturn().getResponse().getContentAsString(); 
	              //结果:regionType="3","0"时"code":"Y",有"basreglist"数据返回，而regionType="5"时{"code":"Y","basreglist":[]} 结论：逻辑判断需加上3和0
	                        System.out.println("--------返回的json = " + getresponseString);
				
				
	    		} catch (Exception e) {
	    			
				}
		}
		
		@Test
		public void test2getBaseRegionTyp_firstWord(){
			
				try {
	                //模拟get请求/getBaseRegion    测试参数：firstWord是大小写区分否 能否被测出  
	                String getresponseString =mockMvc.perform((get("/getBaseRegionTyp_firstWord/c")
	                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	                		))
//	                		.andExpect(status().isOk())//预测 ：大小写不区分
//	                		.andDo(print())
	                		.andReturn().getResponse().getContentAsString();   //结果:正确
	             
	                        System.out.println("--------返回的json = " + getresponseString);
				
				
	    		} catch (Exception e) {
	    			
				}
				
//				try {
//	                //模拟post请求/listFDemandPkgReviewForAE
//	                String postresponseString =mockMvc.perform((post("/getBaseRegionTyp_firstWord/c")
//	                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  //数据的格式
//	                		.param("firstWord","C")
//	                		))
//	                		.andExpect(status().isOk())//添加执行完成后的断言  返回的状态是200
////	                		.andDo(print())//打印出请求和相应的内容
//	                		.andReturn().getResponse().getContentAsString();  //将相应的数据转换为字符串
//	                        System.out.println("--------返回的json = " + postresponseString);
//				
//				
//        		} catch (Exception e) {
//        			
//				}
					
		}
		
		
		/**
		 * @date   12/6 Day 2
		 * @author Carol
		 * Method: 根据fuid(发包方用户id)查询信息自定义区域表
		 * toTest: 测试不存在的fuid 能否被查询
		 * Expect: YES
		 * Result: YES,返回{"code":"Y","msg":null,"getCustomAreaList":[],"baseRegionCusA":[{}]
		 *
		 */
		protected Logger logger = Logger.getLogger(this.getClass());
		@Test
		public void test9getCustomAreaFuid(){
			
			try {
              
                String getresponseString =mockMvc.perform((get("/customarea/001")
                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
                		))
                		.andReturn().getResponse().getContentAsString();   
                		
                		JSONObject jsonObject = JSONObject.fromObject(getresponseString);
                		System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                        logger.info(jsonObject);
                        System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                      
			
    		} catch (Exception e) {
    				System.out.println("没有此Fuid");
			}
				
		}
		
		
		
		
		/**
		 * @date   12/6 Day 2
		 * @author Carol
		 * Method: 向自定义区域添加城市
		 * toTest: area_id(主键)自增情况下, 直接设置重复值的fuid和area_remark添加数据是否成功
		 * Expect: YES 
		 * Result: YES
		 *
		 */
		@Test
		public void test10addCustomAreaFuidArea(){
			
			try {
	              
                String getresponseString =mockMvc.perform((get("/addCustomAreaFuidArea/101/fggfgd")
                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
                		))
                		.andReturn().getResponse().getContentAsString();   
                		
                		JSONObject jsonObject = JSONObject.fromObject(getresponseString);
                		System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                        logger.info(jsonObject);
                        System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                      
			
    		} catch (Exception e) {
    				System.out.println("添加失败");
			}
				
		}
		
		
		/**
		 * @date   12/7 Day 3
		 * @author Carol
		 * Method: 根据fuid和areaId删除自定义区域表信息
		 * toTest: 测试删除fuid=101 area_id=14的数据是否成功
		 * Expect: YES
		 * Result: Fail,transaction.UnexpectedRollbackException because it has been marked as rollback-only
		 *
		 */
		@Test
		public void test13deleteCustomAreaFuidAreaId(){
			
			try {
	              
                String getresponseString =mockMvc.perform((get("/deleteCustomAreaFuidAreaId/101/14")  //还可以测传一个参数时是否ok
                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
                		))
                		.andReturn().getResponse().getContentAsString();   
                		
                		JSONObject jsonObject = JSONObject.fromObject(getresponseString);
                		System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                        logger.info(jsonObject);
                        System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                      
			
    		} catch (Exception e) {
    				System.out.println("删除失败");
			}
				
			
		}
		
		
		/**
		 * @date   12/7 Day 3
		 * @author Carol
		 * Method: 根据fuid和areaId删除自定义区域表信息
		 * toTest: 测试只根据主键area_id=14 找到数据删除是否成功
		 * Expect: YES
		 * Result: Fail 
		 *
		 */
		@Test
		public void test14deleteCustomAreaFuidAreaId(){
			try {
	              
                String getresponseString =mockMvc.perform((get("/deleteCustomAreaFuidAreaId/ /14")  //还可以测传一个参数时是否ok
                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
                		))
                		.andReturn().getResponse().getContentAsString();   
                		
                		JSONObject jsonObject = JSONObject.fromObject(getresponseString);
                		System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                        logger.info(jsonObject);
                        System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                      
			
    		} catch (Exception e) {
    				System.out.println("删除失败");
			}
			
		}
		
		/**
		 * @date   12/7 Day 3
		 * @author Carol
		 * Method: 根据fuid查询信息自定义区域表
		 * toTest: 测试通过HttpSession传参 访问获取自定义区域信息getCustomAreaFuid()是否成功
		 * Expect: YES
		 * Result:
		 * @throws Exception 
		 *
		 */
		@Test
		public void test15getCustomAreaFuid() throws Exception{
			
			 	ResultActions resultActions =mockMvc.perform((get("/customarea/34")
		        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)
		                .session((MockHttpSession)getLoginSession())  //getLoginSession() 获取HttpSession  传参数入session
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
	     * (只有)登录时  获取session
	     * @return session
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
		
		
		
		
		
		/**
		 * @date   12/8 Day 4
		 * @author Carol
		 * Method: 根据fuid修改areaRemark
		 * toTest: 根据fuid和areaRemark更新自定义区域信息是否成功
		 * Expect: YES
		 * Result: Fail custom_area表里定义area_id,area_name和area_remark为非空，而controller里的方法传的参是fuid,area_remark 不统一，so无返回
		 *
		 */
		@Test
		public void test21updateCustomAreaAreaRemark(){
			
			try {
	              
                String getresponseString =mockMvc.perform((get("/updateCustomAreaAreaRemark/101/12321/areaRemark_htm")  //还可以测传一个参数时是否ok
                		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
                		))
                		.andReturn().getResponse().getContentAsString();   
                		
                		JSONObject jsonObject = JSONObject.fromObject(getresponseString);
                		System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                        logger.info(jsonObject);
                        System.out.println(" ");
                        System.out.println(" ");
                        System.out.println(" ");	
                      
			
    		} catch (Exception e) {
    				System.out.println("修改失败");
			}
		}
			
		/**
		 * @date   12/8 Day 4
		 * @author Carol
		 * Method: 当 areaId不为空对自定义区域表执行update操作 ; 当areaid为空执行insert操作
		 * toTest: 测试 update操作是否成功
		 * Expect: YES
		 * Result: Fail. 类CustomAreaDaoImpl-Line 78应该return CustomArea才能根据areaId到数据库查回数据 再更新areaName和areaRemark
		 * @throws Exception 
		 *
		 */
		@Test
		public void test22updateAddInsertCustomArea() throws Exception{
	        //模拟post请求
	        String postresponseString =mockMvc.perform((post("/customarea")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)  
	        		.param("areaId","1").param("areaName", "Boston").param("areaRemark", "CharlesRiver")))
	        		.andExpect(status().isOk())
//	        		.andDo(print())//打印出请求和相应的内容
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString);  

			
		}
		
		
		
		/**
		 * @date   12/8 Day 4
		 * @author Carol
		 * Method: 套餐列表查询
		 * toTest: 测试 根据业务类型查询 套餐列表
		 * Expect: Fail. Url上不能直接传中文参数，除非发请求时设置编码格式
		 * Result: Fail
		 * @throws Exception 
		 * @throws UnsupportedEncodingException 
		 *
		 */
		@Test
		public void test23getGxPackageManage() throws  Exception{
			
			//模拟post请求
	        String postresponseString =mockMvc.perform((post("/getGxPackageManage/数据加工_htm")
	        		.contentType(MediaType.APPLICATION_FORM_URLENCODED)))
	        		.andExpect(status().isOk())
	        		.andReturn().getResponse().getContentAsString(); 
	                System.out.println("--------返回的json = " + postresponseString); 
			
		}
		
		
		/**
		 * @date   12/9 Day 5
		 * @author Carol
		 * Method: 发包方需求-销售线索挖掘-套餐：套餐对象查询 
		 * toTest: 根据pid查询GxPackageManage套餐对象信息是否成功
		 * Expect: YES
		 * Result: YES "getGxPackageManagerList"(查询多个GxPackageManager):返回null   getgetGxPackageManagePid:(查询单个getGxPackageManage){返回了具体数据}
		 * @throws Exception 
		 *
		 */
		@Test
		public void test33getGxPackageManagePid() throws Exception{
		
			 String getresponseString =mockMvc.perform((get("/getGxPackageManagePid/17_htm")
		        		.contentType(MediaType.APPLICATION_FORM_URLENCODED))) 
		        		.andExpect(status().isOk())
		        		.andReturn().getResponse().getContentAsString();  
		                System.out.println("--------返回的json = " + getresponseString);

		}
		
		

}
