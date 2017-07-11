package com.mso.dao;

import com.mso.model.SmsCode;



public interface SmsCodeDao {
	/*
	 * 新增
	 */
	public SmsCode addSmsCode(SmsCode user) ;
	/*
	 * 删除
	 */
	public void deleteSmsCode(SmsCode user);
	/*
	 * 修改
	 */
	public void updateSmsCode(SmsCode user);
	/*
	 * 查询
	 */
	public SmsCode getSmsCodeByUname(SmsCode user);

}
 
