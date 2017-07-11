package com.mso.model;

import java.io.Serializable;

/**
 * 意向客户信息
 */
public class Tourists implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String fitid;//接包方/发包方 表识
	private String fstid;//对应   发包方业务类型(f_service_type)fstid
	
	private String fiid;//对应   发包方行业(f_industry)fiid
	private String fitname;//称呼-姓名
	private String fitmobilephone;//手机号码
	private String ficomp;//公司名
	private String fitdemand;//需求介绍       可变长度，最多65535个字符
	private String fitinvitationcode;//邀请码
	private Integer fitstate;//游客信息当前的状态      0-初始状态  1-已分配  2-跟踪处理中  3-处理完成(已经引导注册)
	private String createtime;//创建时间
	private String updatetime;//修改时间
	
	public String getFicomp() {
		return ficomp;
	}
	public void setFicomp(String ficomp) {
		this.ficomp = ficomp;
	}
	public String getFitid() {
		return fitid;
	}
	public void setFitid(String fitid) {
		this.fitid = fitid;
	}
	public String getFiid() {
		return fiid;
	}
	public void setFiid(String fiid) {
		this.fiid = fiid;
	}
	public String getFstid() {
		return fstid;
	}
	public void setFstid(String fstid) {
		this.fstid = fstid;
	}
	public String getFitname() {
		return fitname;
	}
	public void setFitname(String fitname) {
		this.fitname = fitname;
	}
	public String getFitmobilephone() {
		return fitmobilephone;
	}
	public void setFitmobilephone(String fitmobilephone) {
		this.fitmobilephone = fitmobilephone;
	}
	public String getFitdemand() {
		return fitdemand;
	}
	public void setFitdemand(String fitdemand) {
		this.fitdemand = fitdemand;
	}
	public String getFitinvitationcode() {
		return fitinvitationcode;
	}
	public void setFitinvitationcode(String fitinvitationcode) {
		this.fitinvitationcode = fitinvitationcode;
	}
	public Integer getFitstate() {
		return fitstate;
	}
	public void setFitstate(Integer fitstate) {
		this.fitstate = fitstate;
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
