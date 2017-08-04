package com.stylefeng.guns.modular.mso.model;

public class Fbf_demand {
	private String id;
	private String serviceType;
	private String demandName;
	private String projectLeader;
	private String projectLeaderPhone;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getServiceType() {
		return serviceType;
	}
	public void setServiceType(String serviceType) {
		this.serviceType = serviceType;
	}
	public String getDemandName() {
		return demandName;
	}
	public void setDemandName(String demandName) {
		this.demandName = demandName;
	}
	public String getProjectLeader() {
		return projectLeader;
	}
	public void setProjectLeader(String projectLeader) {
		this.projectLeader = projectLeader;
	}
	public String getProjectLeaderPhone() {
		return projectLeaderPhone;
	}
	public void setProjectLeaderPhone(String projectLeaderPhone) {
		this.projectLeaderPhone = projectLeaderPhone;
	}
	@Override
	public String toString() {
		return "Fbf_demand [id=" + id + ", serviceType=" + serviceType + ", demandName=" + demandName
				+ ", projectLeader=" + projectLeader + ", projectLeaderPhone=" + projectLeaderPhone + "]";
	}

}
