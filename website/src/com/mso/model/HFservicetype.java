package com.mso.model;
/**
 * 业务类型
 * @author harry
 *
 */
public class HFservicetype {
	  private String fstid ; //发包方行业主键id
	  private String fstname; //发包方行业名称
	  private Integer sort ; //排列序列     0-1-2-3 越小越显示在最前方
	  private Integer display ; //前端是否显示   0 显示  1 不显示
	  private Integer open ;//前端是否开放可用   0 开放  1 不开放
	  private String introduce ; //介绍说明
	  private String createtime;//创建时间
	  private String updatetime ;//修改时间
	  
	public String getFstid() {
		return fstid;
	}
	public void setFstid(String fstid) {
		this.fstid = fstid;
	}
	public String getFstname() {
		return fstname;
	}
	public void setFstname(String fstname) {
		this.fstname = fstname;
	}
	public Integer getSort() {
		return sort;
	}
	public void setSort(Integer sort) {
		this.sort = sort;
	}
	public Integer getDisplay() {
		return display;
	}
	public void setDisplay(Integer display) {
		this.display = display;
	}
	public Integer getOpen() {
		return open;
	}
	public void setOpen(Integer open) {
		this.open = open;
	}
	public String getIntroduce() {
		return introduce;
	}
	public void setIntroduce(String introduce) {
		this.introduce = introduce;
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
	public HFservicetype(String fstid, String fstname, Integer sort,
			Integer display, Integer open, String introduce, String createtime,
			String updatetime) {
		super();
		this.fstid = fstid;
		this.fstname = fstname;
		this.sort = sort;
		this.display = display;
		this.open = open;
		this.introduce = introduce;
		this.createtime = createtime;
		this.updatetime = updatetime;
	}
	public HFservicetype(){}
	  

}
