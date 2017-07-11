package com.mso.controller.test;

import javax.transaction.Transactional;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.context.WebApplicationContext;

//首先指定Junit的Runner
@RunWith(SpringJUnit4ClassRunner.class)
//指明配置文件所在
@ContextConfiguration(locations = "classpath:config/spring.xml")
//@ContextConfiguration：因为controller，component等都是使用注解，需要注解指定spring的配置文件，扫描相应的配置，将类初始化等
@WebAppConfiguration  
//@webappconfiguration是一级注释，用于声明一个ApplicationContext集成测试加载WebApplicationContext。作用是模拟ServletContext

@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = false)
@Transactional
//让我们对数据库的操作会事务回滚，如对数据库的添加操作，在方法结束之后，会撤销我们对数据库的操作。
public class AbstractContextTests  {

	/*
	  spring mvc测试框架提供了两种方式，独立安装和集成Web环境测试（此种方式并不会集成真正的web环境，而是通过相应的Mock API进行模拟测试，无须启动服务器）
	
	  1、mockMvc.perform执行一个请求；
	
	  2、MockMvcRequestBuilders.get("/user/1")构造一个请求
	
	  3、ResultActions.andExpect添加执行完成后的断言
	
	  4、ResultActions.andDo添加一个结果处理器，表示要对结果做点什么事情，比如此处使用MockMvcResultHandlers.print()输出整个响应结果信息。
	
	  5、ResultActions.andReturn表示执行完成后返回相应的结果。
	
	  MockMvcBuilder是用来构造MockMvc的构造器，其主要有两个实现：StandaloneMockMvcBuilder和DefaultMockMvcBuilder，StandaloneMockMvcBuilder继承了DefaultMockMvcBuilder。直接使用静态工厂MockMvcBuilders创建即可：
	
	  MockMvcBuilders.webAppContextSetup(WebApplicationContext context)：指定WebApplicationContext，将会从该上下文获取相应的控制器并得到相应的MockMvc；
	
	  MockMvcBuilders.standaloneSetup(Object... controllers)：通过参数指定一组控制器，这样就不需要从上下文获取了；
	
	     其中DefaultMockMvcBuilder还提供了如下API：
	
	  addFilters(Filter... filters)/addFilter(Filter filter, String... urlPatterns)：添加javax.servlet.Filter过滤器
	
	  defaultRequest(RequestBuilder requestBuilder)：默认的RequestBuilder，每次执行时会合并到自定义的RequestBuilder中，即提供公共请求数据的；
	
	  alwaysExpect(ResultMatcher resultMatcher)：定义全局的结果验证器，即每次执行请求时都进行验证的规则；
	
	  alwaysDo(ResultHandler resultHandler)：定义全局结果处理器，即每次请求时都进行结果处理；
	
	  dispatchOptions：DispatcherServlet是否分发OPTIONS请求方法到控制器；
	*/

	@Autowired
	protected WebApplicationContext wac;
}
