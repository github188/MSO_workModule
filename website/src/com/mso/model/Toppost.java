/**
 * 
 */
package com.mso.model;

import java.io.Serializable;

/**
 * @author 
 * Method:
 * toTest:
 * Expect:
 * Result:
 * 
 */
public class Toppost implements Serializable{
	
	private static final long serialVersionUID = 1L; //初始化序列号(保证其对象的唯一性)
	
	private String topid;   //置顶文章id
	private String type;   //文章类型:头条,课堂
	private String topdirection;  //置顶位置   (1-左，2-中上, 3-中下 4-右)
	private String title;  //文章标题
	private String topphotourl; //置顶图片url
	private String photodescrip; //图片描述
	private String createtime; //创建时间
	private String updatetime; //更新时间
	private String url;  //文章存储路径

	public String getTopid() {
		return topid;
	}
	public void setTopid(String topid) {
		this.topid = topid;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getTopdirection() {
		return topdirection;
	}
	public void setTopdirection(String topdirection) {
		this.topdirection = topdirection;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTopphotourl() {
		return topphotourl;
	}
	public void setTopphotourl(String topphotourl) {
		this.topphotourl = topphotourl;
	}
	public String getPhotodescrip() {
		return photodescrip;
	}
	public void setPhotodescrip(String photodescrip) {
		this.photodescrip = photodescrip;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	@Override
	public String toString() {
		return "Toppost [topid=" + topid + ", type=" + type + ", topdirection="
				+ topdirection + ", title=" + title + ", topphotourl="
				+ topphotourl + ", photodescrip=" + photodescrip
				+ ", createtime=" + createtime + ", updatetime=" + updatetime
				+ ", url=" + url + "]";
	}
	
	
	

}
