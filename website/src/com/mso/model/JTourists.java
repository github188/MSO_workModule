package com.mso.model;

import java.io.Serializable;

/**
 * 意向客户信息
 */
public class JTourists implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String jitid;//有意向的游客信息表-发包方 主键id自增
	private String jmcid;//对应   接包方机构类别(j_mechanism_category)jmcid
	private String jitname;//称呼-姓名
	private String jitmobilephone;//手机号码
	private String jitorganization;//机构名称
	private String jitinvitationcode;//邀请码
	private Integer jitstate;//有意向的游客信息表-接包方当前的状态      0-初始状态  1-已分配  2-跟踪处理中  3-处理完成(已经引导注册)
	private String createtime;//创建时间
	private String updatetime;//修改时间
	
	
	public String getJitid() {
		return jitid;
	}
	public void setJitid(String jitid) {
		this.jitid = jitid;
	}
	public String getJmcid() {
		return jmcid;
	}
	public void setJmcid(String jmcid) {
		this.jmcid = jmcid;
	}
	public String getJitname() {
		return jitname;
	}
	public void setJitname(String jitname) {
		this.jitname = jitname;
	}
	public String getJitmobilephone() {
		return jitmobilephone;
	}
	public void setJitmobilephone(String jitmobilephone) {
		this.jitmobilephone = jitmobilephone;
	}
	public String getJitorganization() {
		return jitorganization;
	}
	public void setJitorganization(String jitorganization) {
		this.jitorganization = jitorganization;
	}
	public String getJitinvitationcode() {
		return jitinvitationcode;
	}
	public void setJitinvitationcode(String jitinvitationcode) {
		this.jitinvitationcode = jitinvitationcode;
	}
	public Integer getJitstate() {
		return jitstate;
	}
	public void setJitstate(Integer jitstate) {
		this.jitstate = jitstate;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	
	
	  
	  
}
