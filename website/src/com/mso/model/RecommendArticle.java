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
public class RecommendArticle implements Serializable{
	
	private static final long serialVersionUID = 1L;
	 
	private String recommendid; //推荐文章主键id
	private String title; //文章名
	private String type;  //文章类型:头条,课堂
	private Integer reading; //阅读量
	private Integer rank; //排序权重 权重值越高越靠前
	private String createtime; //创建时间
	private String updatetime; //更新时间
	private String url;  //文章存储路径
	private String thumbnail; //缩略图url
	
	public String getRecommendid() {
		return recommendid;
	}
	public void setRecommendid(String recommendid) {
		this.recommendid = recommendid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getReading() {
		return reading;
	}
	public void setReading(Integer reading) {
		this.reading = reading;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	 
}
