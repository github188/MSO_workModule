package com.mso.model;

public class HistoricalOrderSummary implements java.io.Serializable  {
	private String yyauctionnumtol;
	private String ym;
	private String createtime;
	private String jfuid;
	
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getYyauctionnumtol() {
		return yyauctionnumtol;
	}
	public String getYm() {
		return ym;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setYyauctionnumtol(String yyauctionnumtol) {
		this.yyauctionnumtol = yyauctionnumtol;
	}
	public void setYm(String ym) {
		this.ym = ym;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
}