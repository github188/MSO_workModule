package com.mso.res;

import java.util.List;

import BaseRes.BaseRes;

public class UserRes extends BaseRes{
	
    public UserRes(String code, String msg) {
		super(code, msg);
	}
    
	private String jfuid;//接包方/发包方 表识
	private String jfutype;//1-发包方   2-接包方
	private String pid;//是否是子账号
	private String jfuname;//用户名/-用于登录(3-20 位    不区分大小写)
	private String jfupassword;//密码(密文)用于登录(6-20 位    区分大小写)
	private Integer jfustate;//接包方/发包方-当前用户信息的状态      0-(提交中)初始状态(注册未完善资料)   1-已分配(注册未完善资料)    2-跟踪处理中(注册,完善资料验证中)  3-驳回-继续完善      4-审核通过处理完成(注册完善资料通过)    
	private Integer jfudisable;//1-启用  2-停用
	private String jfumobilephone;//手机号
	private String jfuinvitationcode;//邀请人的邀请码
	private String invitationcode;//邀请码唯一生成
	private String  showName;//昵称为空  取 用户名  
	private String headurls;//
	private String compemail;//邮箱
	private String realname;//您的姓名  注册可以插入jfuname  昵称
	private String compname;//公司名称  
	private String remember;//1 记住密码
	private Integer logontimes;//登录次数
	private Integer trusteeship;//是否托管 0-非托管 1-托管
	private String brandname;//品牌名
	public String getBrandname() {
		return brandname;
	}
	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}
	public Integer getTrusteeship() {
		return trusteeship;
	}
	public void setTrusteeship(Integer trusteeship) {
		this.trusteeship = trusteeship;
	}
	public Integer getLogontimes() {
		return logontimes;
	}
	public void setLogontimes(Integer logontimes) {
		this.logontimes = logontimes;
	}
	public String getRemember() {
		return remember;
	}
	public void setRemember(String remember) {
		this.remember = remember;
	}
	public String getJfuinvitationcode() {
		return jfuinvitationcode;
	}
	public void setJfuinvitationcode(String jfuinvitationcode) {
		this.jfuinvitationcode = jfuinvitationcode;
	}
    public String getCompemail() {
		return compemail;
	}
	public String getRealname() {
		return realname;
	}
	public String getCompname() {
		return compname;
	}
	public void setCompemail(String compemail) {
		this.compemail = compemail;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public void setCompname(String compname) {
		this.compname = compname;
	}
	public String getHeadurls() {
		return headurls;
	}
	public void setHeadurls(String headurls) {
		this.headurls = headurls;
	}
	public String getShowName() {
		return showName;
	}
	public void setShowName(String showName) {
		this.showName = showName;
	}

	//拼接的pageStr 
    private String pageStr;

	private List userList;
	public List getUserList() {
		return userList;
	}
	public void setUserList(List userList) {
		this.userList = userList;
	}
	public String getPageStr() {
		return pageStr;
	}
	public void setPageStr(String pageStr) {
		this.pageStr = pageStr;
	}
	public String getInvitationcode() {
		return invitationcode;
	}
	public void setInvitationcode(String invitationcode) {
		this.invitationcode = invitationcode;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getJfutype() {
		return jfutype;
	}
	public void setJfutype(String jfutype) {
		this.jfutype = jfutype;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getJfuname() {
		return jfuname;
	}
	public void setJfuname(String jfuname) {
		this.jfuname = jfuname;
	}
	public String getJfupassword() {
		return jfupassword;
	}
	public void setJfupassword(String jfupassword) {
		this.jfupassword = jfupassword;
	}
	public Integer getJfustate() {
		return jfustate;
	}
	public void setJfustate(Integer jfustate) {
		this.jfustate = jfustate;
	}
	public Integer getJfudisable() {
		return jfudisable;
	}
	public void setJfudisable(Integer jfudisable) {
		this.jfudisable = jfudisable;
	}
	public String getJfumobilephone() {
		return jfumobilephone;
	}
	public void setJfumobilephone(String jfumobilephone) {
		this.jfumobilephone = jfumobilephone;
	}



}
