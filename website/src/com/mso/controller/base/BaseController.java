package com.mso.controller.base;


import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;


public class BaseController {
	
	protected Logger logger = Logger.getLogger(this.getClass());
//	public  Logger logger=Logger.getLogger(this.getClass());
	private static final long serialVersionUID = 6357869213649815390L;
	
	/** new PageData对象
	 * @return
	 */
//	public PageData getPageData(){
//		return new PageData(this.getRequest());
//	}
	
	/**得到ModelAndView
	 * @return
	 */
	public ModelAndView getModelAndView(){
		return new ModelAndView();
	}
	
	/**得到request对象
	 * @return
	 */
	public HttpServletRequest getRequest() {
		HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
		return request;
	}

	/**得到32位的uuid
	 * @return
	 */
//	public String get32UUID(){
//		return UuidUtil.get32UUID();
//	}
	
	/**得到分页列表的信息
	 * @return
	 */
//	public Page getPage(){
//		return new Page();
//	}
	
	public static void logBefore(Logger logger, String interfaceName){
		logger.info("");
		logger.info("start");
		logger.info("________________className:"+Thread.currentThread() .getStackTrace()[1].getClassName()+"_______________methodName:"+Thread.currentThread() .getStackTrace()[1].getMethodName());
		logger.info(interfaceName);
	}
	public static void loger(Logger logger, Exception e){
		logger.info("");
		logger.info("start");
		StackTraceElement stackTraceElement= e.getStackTrace()[0];// 得到异常棧的首个元素
		logger.error("______________Line="+stackTraceElement.getLineNumber()+"__________________Method="+stackTraceElement.getMethodName()+"______________________Emsg="+e.toString());
		logger.info("end");
	}
	
	
	
	public static void logAfter(Logger logger){
		logger.info("end");
		logger.info("");
	}
	
}
