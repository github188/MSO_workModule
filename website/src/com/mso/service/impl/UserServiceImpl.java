package com.mso.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IUserDao;
import com.mso.dao.SmsCodeDao;
import com.mso.model.JfUser;
import com.mso.model.SmsCode;
import com.mso.res.UserRes;
import com.mso.service.HJfUserDetailService;
import com.mso.service.IUserService;
import com.mso.utils.DateUtil;
import com.mso.utils.DesUtils;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("userService")@Transactional
public class UserServiceImpl implements IUserService{
	
	@Autowired
	IUserDao userDao;
	
	@Autowired
	HJfUserDetailService hjfUserDetailService;
	
	@Autowired
	SmsCodeDao smsCodeDao;
	
	@Override
	public void addUser(JfUser user) {
		 userDao.addUser(user);
	}
	@Override
	public void updateUser(JfUser user) {
		 userDao.updatePro(user);
	}
	public UserRes setInvitationcode(){
		String code=ERConst.SU_CODE;
	    String msg="";
		UserRes res=new UserRes(code,msg);
//		3.插入用户基本信息表
		try {
	//		1.验证登录名的重复性
			List<JfUser> userlist=userDao.getInvitationcodeIsnullUser();
			if(userlist!=null&&userlist.size()!=0){
				for (int i = 0; i < userlist.size(); i++) {
					String invitationcode=this.getCheckYzm();
					JfUser user=userlist.get(i);
					user.setInvitationcode(invitationcode);
					userDao.updatePro(user);
				}
			}
			res.setUserList(userlist);
		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			res.setMsg(e.toString());
		}
//		5.修改超级管理员   用户审核count表  加1
		return res;
	}
	
	
	//	1.根据用户名查询
	@Override
	public JfUser getUserByUserName(JfUser user){
		return userDao.getUserByUserName(user);
	}
	/*
	 * 1.验证登录名的重复性
	 * 2.验证手机号的重复性
	 * 3.插入用户基本信息表
	 * 4.插入用户从信息表
	 * 5.修改超级管理员   用户审核count表  加1 
	 */
	public UserRes register(JfUser user){
		String code=ERConst.SU_CODE;
	    String msg="";
		UserRes res=new UserRes(code,msg);
		
//		1.验证登录名的重复性
		JfUser uun=userDao.getUserByUserName(user);
		if(uun!=null){
			res.setCode(ERConst.ER_CODE_002);
			res.setMsg(ERConst.ER_CODE_002_VALUE);
			return res;
		}
//		1.验证登录名jfunamelowercase的重复性
		JfUser lowercase=userDao.getUserByUnamelowercase(user);
		if(lowercase!=null){
			res.setCode(ERConst.ER_CODE_002);
			res.setMsg(ERConst.ER_CODE_002_VALUE);
			return res;
		}
		
		
//		2.验证手机号的重复性
//		JfUser up=userDao.getUserByTelPhone(user);
//		if(up!=null){
//			res.setCode(ERConst.ER_CODE_001);
//			res.setMsg(ERConst.ER_CODE_001_VALUE);
//			return res;
//		}
		String Invitationcode=this.getCheckYzm();
		user.setInvitationcode(Invitationcode);
		user.setLogontimes(0);//(Invitationcode);
		res.setJfutype(user.getJfutype());
		res.setJfuname(user.getJfuname());
		res.setJfupassword(user.getJfupassword());
		res.setJfustate(user.getJfustate());
		res.setJfudisable(user.getJfudisable());
		res.setJfumobilephone(user.getJfumobilephone());
		res.setCompemail(user.getCompemail());
		res.setRealname(user.getRealname());
		res.setCompname(user.getCompname());
		res.setJfuinvitationcode(user.getJfuinvitationcode());
//		3.插入用户基本信息表..
		try {
			user=userDao.addUser(user);
			res.setJfuid(user.getJfuid());
		} catch (Exception e) {
			res.setCode(ERConst.ER_CODE);
			res.setMsg(e.toString());
		}
//		4.插入用户从信息表 
		if("Y".equals(res.getCode())){
			try {
				if(!"3".equals(user.getJfutype())){//3 为子账号
					hjfUserDetailService.addHJfUser(user);	
				}
			} catch (Exception e) {
				res.setCode(ERConst.ER_CODE);
				res.setMsg(e.toString());
			}
		}
		
		//插入用户信息表(发包方)byliu
		if(user.getJfutype().equals("1")){
			userDao.addUserNew(user);
		}
		
		
		
		

//		5.修改超级管理员   用户审核count表  加1
		return res;
	}
	
	//检查验证码 是否重复 
	public String getCheckYzm(){
		String invitationcode=DateUtil.getInvitationcodeDay();
		JfUser user=new JfUser();
		user.setInvitationcode(invitationcode);
		JfUser s=userDao.getUserByInvitationcode(user);
		if(s==null){
			return invitationcode;
		}else{
			return this.getCheckYzm();
		}
	}
	
	/*
	 * 登录操作
	 */
	public UserRes login(JfUser user){
		String code=ERConst.SU_CODE;
	    String msg="";
		UserRes res=new UserRes(code,msg);
//		    1.根据用户名查询用户信息
			JfUser us=userDao.getUserByLogin(user);
			if(us==null){//用户名不存在
				res.setCode(ERConst.ER_CODE_003);
				res.setMsg(ERConst.ER_CODE_003_VALUE);
			}else{
				try {
					String Putpassword = DesUtils.encrypt(user.getJfupassword());
					String Outpassword=us.getJfupassword();
					if(!Putpassword.equals(Outpassword)){//密码不正确
						res.setCode(ERConst.ER_CODE_004);
						res.setMsg(ERConst.ER_CODE_004_VALUE);
					}else{
						//1.用户名/密码正确  检查账号是否停用
						Integer disable=us.getJfudisable();
						if(2==disable){
							//2.停用
							res.setCode(ERConst.ER_CODE_005);
							res.setMsg(ERConst.ER_CODE_005_VALUE);
						}else{
							//3.登录成功
							res.setJfuid(us.getJfuid());
							res.setJfutype(us.getJfutype());
							res.setLogontimes(StringUtil.toInteger(StringUtil.objCovStr(us.getLogontimes())));
							res.setPid(us.getPid());
							res.setJfuname(us.getJfuname());
							res.setJfupassword(us.getJfupassword());
							res.setJfustate(us.getJfustate());
							res.setJfudisable(us.getJfudisable());
							res.setJfumobilephone(us.getJfumobilephone());
							res.setInvitationcode(us.getInvitationcode());
							res.setPid(StringUtil.objCovStr(us.getPid()));
							
							res.setJfuinvitationcode(us.getJfuinvitationcode());
							res.setCode(ERConst.SULOGIN_CODE);
							res.setMsg(ERConst.SULOGIN_CODE_VALUE);
						}
					}
				} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
				}
			}
			return res;
	}
	
	
	
	/*
	 * 查询用户信息 子账号
	 */
	public PageResults getUsers(JfUser user){
		PageResults<Object> res =userDao.getUsers(user);
		return res;
	}
	
	
	
	
	
	/*
	 * 修改密码
	 * 1.验证旧密码是否正确
	 * 2.判断  俩次输入的密码是否一致 
	 * 3.修改密码
	 */
	public UserRes updatePassword(JfUser user){
		String code=ERConst.SU_CODE;
	    String msg=ERConst.SU_CODE_VALUE;
	    UserRes res=new UserRes(code,msg);
	    
//		3.1修改密码  根据jfuid取得用户信息
		JfUser up=userDao.getUserByFuid(user.getJfuid(),null);
		if(null==up){
			res.setCode("N");
			res.setMsg("没有找到对应的用户信息!");
			return res;
		}
		
		JfUser u=new JfUser();
		u.setJfupassword(up.getJfupassword());
		u.setJfuname(up.getJfuname());
		JfUser pwdcheckUser=userDao.getUserByUP(u);

//		1.1验证旧密码是否正确          
		if(!user.getJfupassword().equals(pwdcheckUser.getJfupassword())){
			res.setCode(ERConst.ER_CODE_006);
			res.setMsg(ERConst.ER_CODE_006_VALUE);
			return res;
		}
		
//		1.2验证旧密码是否正确        原密码和新密码不能相同  
		if(user.getOldPassword().equals(user.getNewPassword())){
			res.setCode(ERConst.ER_CODE_008);
			res.setMsg(ERConst.ER_CODE_008_VALUE);
			return res;
		}
		
//		2.判断  俩次输入的密码是否一致 
		if(!user.getNewCPassword().equals(user.getNewCPassword())){
			res.setCode(ERConst.ER_CODE_007);
			res.setMsg(ERConst.ER_CODE_007_VALUE);
			return res;
		}


		if(up!=null){
//			3.2修改密码
			try {
				up.setJfupassword(user.getNewPassword());
				userDao.updatePro(up);
			} catch (Exception e) {
				res.setCode(ERConst.ER_CODE);
				res.setMsg(e.toString());
				return res;
			}
		}
		return res;
	}
	
	
	/*
	 * 2.更新主表状态
	 **/
	public void editFUser(JfUser user){
		//主表中没有此账号信息
		JfUser up=userDao.getUserByFuid(user.getJfuid(),user.getJfutype());
		if(null!=up){
			hjfUserDetailService.editHJfUser(user);
			if(3==up.getJfustate()){//驳回再次提交 修改后台 状态   驳回再次提交
				up.setDistributionstate(5);
			}
			up.setJfustate(1);//1-填写资料-提交
			up.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			userDao.updatePro(up);
		}
	}
	
	public JfUser getUserByFuid(String  jfuid,String jfutype){
		return userDao.getUserByFuid(jfuid, jfutype);
	}
	
	/*
	 * 2.更新子账号
	 **/
	public void editCUser(JfUser user){
			JfUser up=userDao.getUserByFuid(user.getJfuid(),user.getJfutype());
			if(!StringUtil.isNull(user.getJfuname())){
				up.setJfuname(user.getJfuname());
			}
			if(!StringUtil.isNull(user.getJfupassword())){
				up.setJfupassword(user.getJfupassword());
			}
			if(!StringUtil.isNull(StringUtil.objCovStr(user.getJfudisable()))){
				up.setJfudisable(user.getJfudisable());
			}
			up.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			userDao.updatePro(up);
	}
	
	/*
	 * 1.修改从表数据  headurl
	 **/
	public void editHJfUserHeadUrl(JfUser user){
		hjfUserDetailService.editHJfUserHeadUrl(user);
	}
	
	
	
	/**
	 * 新增短信信息
	 **/
	public void addSmsCode(SmsCode user){
		smsCodeDao.addSmsCode(user);
	}
	/**
	 * 根据手机号查询短信验证码
	 **/
	public SmsCode getSmsCodeByUname(SmsCode user){
		return smsCodeDao.getSmsCodeByUname(user);
	}
	

	/**
	 * 修改使用状态
	 **/
	public void updateSmsCode(SmsCode user){
		 smsCodeDao.updateSmsCode(user);
	}
	
	
	
	/*
	 * 2.更新登录次数
	 **/
	public void editzUser(JfUser user){
			JfUser up=userDao.getUserByFuid(user.getJfuid(),user.getJfutype());
			up.setLogontimes(up.getLogontimes()+1);
			up.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			userDao.updatePro(up);
	}
	
	/*
	 * 用户加总
	 **/
	public Long getSettledEnterprise(JfUser user){
		return userDao.getSettledEnterprise(user);
	}
	
}
