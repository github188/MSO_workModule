package com.mso.model;


/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class HJCollectionDemand extends BaseSeach implements java.io.Serializable {
	/** full constructor */
	public HJCollectionDemand() {
	}
	
	/**
	 */
	private static final long serialVersionUID = 1L;
	
	private String collectionid;
	private String jfuid;
	private String demandid;
	private String createtime;
	private String updatetime;
	public String getCollectionid() {
		return collectionid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public void setCollectionid(String collectionid) {
		this.collectionid = collectionid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	
	
}