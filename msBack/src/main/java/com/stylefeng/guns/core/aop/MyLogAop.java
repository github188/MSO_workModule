package com.stylefeng.guns.core.aop;

import java.lang.annotation.Annotation;
import java.lang.reflect.AnnotatedType;
import java.lang.reflect.Method;
import java.lang.reflect.Parameter;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.alibaba.fastjson.JSONObject;
import com.stylefeng.guns.common.annotion.log.MyBussinessLogRemote;
import com.stylefeng.guns.common.constant.dictmap.base.AbstractDictMap;
import com.stylefeng.guns.common.constant.dictmap.factory.DictMapFactory;
import com.stylefeng.guns.core.log.LogManager;
import com.stylefeng.guns.core.log.LogObjectHolder;
import com.stylefeng.guns.core.log.factory.LogTaskFactory;
import com.stylefeng.guns.core.shiro.ShiroKit;
import com.stylefeng.guns.core.shiro.ShiroUser;
import com.stylefeng.guns.core.support.HttpKit;
import com.stylefeng.guns.core.util.Contrast;

/**
 * 日志记录
 *
 * @author fengshuonan
 * @date 2016年12月6日 下午8:48:30
 */
@Aspect
@Component
public class MyLogAop {

    private Logger log = Logger.getLogger(this.getClass());

    @Pointcut(value = "@annotation(com.stylefeng.guns.common.annotion.log.MyBussinessLogRemote)")
    public void cutService() {
    }

    @Around("cutService()")
    public Object recordSysLog(ProceedingJoinPoint point) throws Throwable {

        //先执行业务
        Object result = point.proceed();

        try {
            handle(point);
        } catch (Exception e) {
            log.error("日志记录出错!", e);
        }

        return result;
    }

    private void handle(ProceedingJoinPoint point) throws Exception {

        //获取拦截的方法名
        Signature sig = point.getSignature();
        MethodSignature msig = null;
        if (!(sig instanceof MethodSignature)) {
            throw new IllegalArgumentException("该注解只能用于方法");
        }
        msig = (MethodSignature) sig;
        Object target = point.getTarget();
        Method currentMethod = target.getClass().getMethod(msig.getName(), msig.getParameterTypes());
         //获取字段上的所有注解
          //判断是否有@RequestBody注解,有就更新日志没有就return
        Parameter[] myparameters = currentMethod.getParameters();
        //是否启用日志的flag
           boolean isreturn = true;
           //需要用于记录的参数(@RequestBody注解的参数)
        //   Parameter logParameter = null;
           
           
        for (Parameter parameter : myparameters) {
        	   if(parameter.isAnnotationPresent(RequestBody.class)){
        	//	   logParameter = parameter;
        		   isreturn = false;
        		   break;
        	   }
        	 
        
		}
        if(isreturn){
        	return;
        }
        
       
       
        String methodName = currentMethod.getName();

        //如果当前用户未登录，不做日志
        ShiroUser user = ShiroKit.getUser();
        if (null == user) {
            return;
        }

        //获取拦截方法的参数
        String className = point.getTarget().getClass().getName();
        Object[] params = point.getArgs();
        for (Object object : params) {
			System.out.println(object);
		}

        //获取操作名称
        MyBussinessLogRemote annotation = currentMethod.getAnnotation(MyBussinessLogRemote.class);
        String bussinessName = annotation.value();
        String key = annotation.key();
        String dictClass = annotation.dict();

//        StringBuilder sb = new StringBuilder();
//        for (Object param : params) {
//            sb.append(param);
//            sb.append(" & ");
//        }

        //如果涉及到修改,比对变化
        String msg;
        if (bussinessName.indexOf("修改") != -1 || bussinessName.indexOf("编辑") != -1) {
        	   //暂时一定是json数据
        	    try {
        	    	JSONObject jsonbefore = (JSONObject)LogObjectHolder.me().get();
        	    	JSONObject jsonupdate = (JSONObject)LogObjectHolder.me().getUpdateobject();
        	    	StringBuilder sbold = new StringBuilder(200);
        	    	sbold.append("修改前的数据:");
        	    	StringBuilder sbnew = new StringBuilder(200);
        	    	sbnew.append("修改后的数据:");
        	    	Set<String> keySet = jsonupdate.keySet();
        	    	keySet.forEach((e)->{
        	    		if(!jsonupdate.getString(e).equals(jsonbefore.getString(e))){
        	    			sbold.append("||"+e+":"+jsonbefore.getString(e));
        	    			sbnew.append("||"+e+":"+jsonupdate.getString(e));
        	    		}
        	    	});
        	    	msg = sbold.toString()+"<br/>"+sbnew.toString();
				} catch (Exception e) {
					e.printStackTrace();
					msg = null;
				}
        } else {
                //暂时只处理新增
           // msg = logParameter.toString();
        	msg = LogObjectHolder.me().get().toString();
        }
        //System.out.println(msg);
        	if(StringUtils.isNotBlank(msg)){
        		 LogManager.me().executeLog(LogTaskFactory.bussinessLog(user.getId(), bussinessName, className, methodName, msg));
        	}
       
    }
}