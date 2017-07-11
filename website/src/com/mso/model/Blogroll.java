/**
 * 
 */
package com.mso.model;

import java.math.BigInteger;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
public class Blogroll implements java.io.Serializable{
	
	private static final long serialVersionUID = 1L;  
	private Integer linkid;  //友情链接ID
	private String url;   //友情链接URL
	private String websitename; //网站名称
	private String createtime; //创建时间
	private String updatetime; //更新时间
	private String weblogourl; //网站Logo图片URL
	private BigInteger clickcount; //点击次数总数
	private Integer isdelete; //是否删除
	
	public Integer getLinkid() {
		return linkid;
	}
	public void setLinkid(Integer linkid) {
		this.linkid = linkid;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getWebsitename() {
		return websitename;
	}
	public void setWebsitename(String websitename) {
		this.websitename = websitename;
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
	public String getWeblogourl() {
		return weblogourl;
	}
	public void setWeblogourl(String weblogourl) {
		this.weblogourl = weblogourl;
	}
	public BigInteger getClickcount() {
		return clickcount;
	}
	public void setClickcount(BigInteger clickcount) {
		this.clickcount = clickcount;
	}
	public Integer getIsdelete() {
		return isdelete;
	}
	public void setIsdelete(Integer isdelete) {
		this.isdelete = isdelete;
	}
	

}
