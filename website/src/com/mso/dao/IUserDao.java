package com.mso.dao;

import java.util.List;

import com.mso.model.JfUser;
import com.mso.utils.PageResults;



/**
 * 用户DAO
 * @author GJ
 * @date   2015年4月15日
 */
public interface IUserDao {
	public  List<JfUser> getInvitationcodeIsnullUser();
	
	public JfUser addUser(JfUser user) ;
//	public List<JfUser> getAllUsers();
//	public void delUser(Integer id);
//	public void updateUser(JfUser user);
//	public List<JfUser> getUser(Integer id);
	
	public JfUser getUserByInvitationcode(JfUser user);
	/*
	 * 根据用户名/用户类型-(发包方/接包方)取得用户对象
	 * */
	public JfUser getUserByUserName(JfUser user) ;
	
	/*
	 * 根据手机号/用户类型-(发包方/接包方)取得用户对象
	 * */
	public JfUser getUserByTelPhone(JfUser user) ;

	/*
	 * 根据用户名取得用户对象
	 * */
	public JfUser getUserByLogin(JfUser user) ;
	
	/*
	 * 根据用户名/密码-(发包方/接包方)取得用户对象
	 * */
	public JfUser getUserByUP(JfUser user);
	public PageResults<Object> getUsers(JfUser user);
	public JfUser getUserByUnamelowercase(JfUser user);
	/*
	 * 修改密码/状态
	 */
	public void updatePro(JfUser user);
	
	/*
	 * 取得主用户信息  根据jfuid
	 */
	public JfUser getUserByFuid(String  jfuid,String jfutype) ;
	
	/*
	 * 加总用户数量
	 */
	public Long getSettledEnterprise(JfUser user);
	//增加用户(V2.4.5)
	public void addUserNew(JfUser user);
	
}
 
