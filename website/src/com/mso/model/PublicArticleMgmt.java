/**
 * 
 */
package com.mso.model;

import java.io.Serializable;

/**
 * 文章管理 公共表
 */
public class PublicArticleMgmt implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String public_id; //文章公共表主键id 存mk_news和mk_lecture里的newid和lectureid
	private String title;  //文章标题
	private String author; //作者
	private Integer state; //文章状态 0:下架 1:上架 2:预上架
	private String begintime; //文章显示时间
	private String createtime; //创建时间
	private String updatetime; //修改时间
	private String type;  //文章类型: 1-头条, 2-课堂
	private String thumbnail; //缩略图
	private String url;  //文章存储路径
	private Integer reading;  //阅读量
	private String label; //文章标签  --数据库是text类型
	private String content; //文章列表显示(部分)内容
	
	private Integer currentPage;     //传当前页
	public Integer getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}
	
	public String getPublic_id() {
		return public_id;
	}
	public void setPublic_id(String public_id) {
		this.public_id = public_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public String getBegintime() {
		return begintime;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
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
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Integer getReading() {
		return reading;
	}
	public void setReading(Integer reading) {
		this.reading = reading;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	

}
