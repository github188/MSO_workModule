/**
 * 
 */
package com.mso.model;

import java.io.Serializable;


public class HotLabel implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private String mklabelid;
	private String name;
	private Integer rank;
	private String createtime;
	private String updatetime;
	private Integer ifshow;
	
	public String getMklabelid() {
		return mklabelid;
	}
	public void setMklabelid(String mklabelid) {
		this.mklabelid = mklabelid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getRank() {
		return rank;
	}
	public void setRank(Integer rank) {
		this.rank = rank;
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
	public Integer getIfshow() {
		return ifshow;
	}
	public void setIfshow(Integer ifshow) {
		this.ifshow = ifshow;
	}
	

}
