package com.mso.model;


public class HFPLabel  implements java.io.Serializable {

	private static final long serialVersionUID = 1L;
	private String dlid;
	private String labelId;
	private String pid;
	private String createtime;
	private String updatetime;//更新时间
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getDlid() {
		return dlid;
	}
	public void setDlid(String dlid) {
		this.dlid = dlid;
	}
	public String getLabelId() {
		return labelId;
	}
	public void setLabelId(String labelId) {
		this.labelId = labelId;
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
}
