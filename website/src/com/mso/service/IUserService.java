package com.mso.service;

import com.mso.model.JfUser;
import com.mso.model.SmsCode;
import com.mso.res.UserRes;
import com.mso.utils.PageResults;




/**
 * 通用dao，包括基本的CRUD方法
 * @author Ljh
 *
 */

public interface IUserService {
    //查询所有
//	public List<JfUser> getAllUsers();
    //添加用户
	public void addUser(JfUser user);
    //删除用户
//	public void delUser(Integer id);
    //修改用户
	public void updateUser(JfUser user) ;
    //单个查询
//	List<JfUser> getUser(Integer id)  ;
	public UserRes setInvitationcode();
	
    //注册事件   
	/*
	 * 1.验证登录名的重复性
	 * 2.验证手机号的重复性
	 * 3.插入用户基本信息表
	 * 4.插入用户从信息表 
	 */
	public UserRes register(JfUser user);
	
	public JfUser getUserByUserName(JfUser user);
	
	
	public PageResults getUsers(JfUser user);
	/*
	 * 1.修改发包基本信息 
	 */
	public void editFUser(JfUser user);
	
	//登录
	public UserRes login(JfUser user);
	
	public JfUser getUserByFuid(String  jfuid,String jfutype);
	//修改密码
	public UserRes updatePassword(JfUser user);
	//修改子账号
	public void editCUser(JfUser user);
	/*
	 * 1.修改从表数据  headurl
	 **/
	public void editHJfUserHeadUrl(JfUser user);
	
	/*
	 * 加总用户数
	 **/
	public Long getSettledEnterprise(JfUser user);
    
	
	
	/**
	 * 新增短信信息
	 **/
	public void addSmsCode(SmsCode user);
	/**
	 * 根据手机号查询短信验证码
	 **/
	public SmsCode getSmsCodeByUname(SmsCode user);	
	/**
	 * 修改使用状态
	 **/
	public void updateSmsCode(SmsCode user);
	
	/**
	 * 更新登录次数
	 **/
	public void editzUser(JfUser user);
}

 
