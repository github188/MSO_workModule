package com.mso.model;



/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class BNews  implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private String newsid;
	private String title_html;//title标签
	private String title;//标题
	private String author;//作者
	private String description;//描述
	private String keywords;//关键字
	private String begintime;//文章显示时间
	private String thumbnail;//缩略图
	private String content;//内容
	private String content_html;//富文本内容
	private String url;//生成的url
	private String templet;//模板url
	private String createtime;//发布时间/创建时间
	private String updatetime;//更新时间
	private Integer isshare;//0不需求 1需求
	private Integer state;//文章状态 0:下架 1:上架
	private Integer reading;//阅读量
	private String orderby;// 表的字段
	private String sort;// 排序  asc  desc
	private String endcreatetime;//开始创建时间 开始值  
	private String begincreatetime;//开始创建时间  结束值
	private String endbegintime;//文章显示时间 结束值
	private String beginbegintime;//文章显示时间  开始值   
	
	public String getEndbegintime() {
		return endbegintime;
	}
	public void setEndbegintime(String endbegintime) {
		this.endbegintime = endbegintime;
	}
	public String getBeginbegintime() {
		return beginbegintime;
	}
	public void setBeginbegintime(String beginbegintime) {
		this.beginbegintime = beginbegintime;
	}
	public String getEndcreatetime() {
		return endcreatetime;
	}
	public void setEndcreatetime(String endcreatetime) {
		this.endcreatetime = endcreatetime;
	}
	public String getBegincreatetime() {
		return begincreatetime;
	}
	public void setBegincreatetime(String begincreatetime) {
		this.begincreatetime = begincreatetime;
	}
	public String getOrderby() {
		return orderby;
	}
	public void setOrderby(String orderby) {
		this.orderby = orderby;
	}
	public String getSort() {
		return sort;
	}
	public void setSort(String sort) {
		this.sort = sort;
	}
	private Integer currentPage;//当前页
	private int pageSize=10;//pagesize
	
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}
	public String getNewsid() {
		return newsid;
	}
	public void setNewsid(String newsid) {
		this.newsid = newsid;
	}
	public String getTitle_html() {
		return title_html;
	}
	public void setTitle_html(String title_html) {
		this.title_html = title_html;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getKeywords() {
		return keywords;
	}
	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}
	public String getBegintime() {
		return begintime;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getContent_html() {
		return content_html;
	}
	public void setContent_html(String content_html) {
		this.content_html = content_html;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getTemplet() {
		return templet;
	}
	public void setTemplet(String templet) {
		this.templet = templet;
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
	public Integer getIsshare() {
		return isshare;
	}
	public void setIsshare(Integer isshare) {
		this.isshare = isshare;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public Integer getReading() {
		return reading;
	}
	public void setReading(Integer reading) {
		this.reading = reading;
	}
	

	
}
