package com.stylefeng.guns.core.log;

import com.stylefeng.guns.core.util.SpringContextHolder;

import java.util.UUID;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

/**
 * 被修改的bean临时存放的地方
 *
 * @author fengshuonan
 * @date 2017-03-31 11:19
 */
@Component
@Scope(scopeName = WebApplicationContext.SCOPE_SESSION)
public class LogObjectHolder {

    private Object object = null;
     //用于更新对象记录日志时用到的缓存(因为request输入流只能读一次)  by liu
     private Object updateobject = null;
    
    private String kk = UUID.randomUUID().toString();

    public void set(Object obj) {
        this.object = obj;
    }

    public Object get() {
        return object;
    }
    
    
    
    

    public Object getUpdateobject() {
		return updateobject;
	}

	public void setUpdateobject(Object updateobject) {
		this.updateobject = updateobject;
	}

	public String getKk() {
		return kk;
	}

	public void setKk(String kk) {
		this.kk = kk;
	}

	public static LogObjectHolder me(){
        LogObjectHolder bean = SpringContextHolder.getBean(LogObjectHolder.class);
        return bean;
    }
}
