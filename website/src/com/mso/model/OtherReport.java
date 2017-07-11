package com.mso.model;



/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class OtherReport  implements java.io.Serializable {
	private static final long serialVersionUID = 1L;
	private String keyid;//主键id
	private String filename;//文件名
	private String url;//文件url
	private String uploadtime;//上传时间
	private String ifdownload;//0:未下载,1:已下载
	
	public String getKeyid() {
		return keyid;
	}
	public void setKeyid(String keyid) {
		this.keyid = keyid;
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUploadtime() {
		return uploadtime;
	}
	public void setUploadtime(String uploadtime) {
		this.uploadtime = uploadtime;
	}
	public String getIfdownload() {
		return ifdownload;
	}
	public void setIfdownload(String ifdownload) {
		this.ifdownload = ifdownload;
	}
}
