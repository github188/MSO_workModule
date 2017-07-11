package com.mso.model;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class GXqaeverydaystatistics {
	
	
	private String stid  ;//qa需求每日统计_主键id
	private String ordername ; //需求名  订单名
	private String demandid ; //需求id
	private String jfuid ; //发包方用户id
	private Integer releasenum  ; //发布量/递交量(保留字段)
	private Integer  dba_receive ; //dba查重:接收量(保留字段)
	private Integer  dba_repetition;// dba查重:重复量(保留字段)
	private Integer  qa_qualified ; //qa质检:合格量(保留字段)
	private Integer  qa_notstandard; //qa质检:不规范(保留字段)
	private Integer qa_cancel; //qa质检:取消(保留字段)
	private Integer qa_disqualification; //qa质检:不合格(保留字段),
	private String  censusfile_url; //上传文件链接(成单报告)(保留字段)
	private String  census_recording_url; //(录音文件)
	private String  censusday; //统计日期(保留字段)
	private String  createtime; //创建时间
	private  String updatetime; //更新时间
	private  Integer isdisable;//是否生效(假删除) 
	private  String compname; //发包方公司名(暂留字段)
	private  Integer csstatus;//cs审核状态 0-未查看 1-审核通过 2-驳回 3-驳回再次提交
	private  String censusdayrange; //COMMENT '统计的时间范围
	private  String csrefuse; //cs驳回时填写的原因
	
	//数据库中不存在的字段，用来存储censusdayrange字段，中截取后的数据
	private  String censusdayrangeh;
	public String getStid() {
		return stid;
	}
	public void setStid(String stid) {
		this.stid = stid;
	}
	public String getOrdername() {
		return ordername;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public String getDemandid() {
		return demandid;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public Integer getDba_receive() {
		return dba_receive;
	}
	public void setDba_receive(Integer dba_receive) {
		this.dba_receive = dba_receive;
	}
	public Integer getDba_repetition() {
		return dba_repetition;
	}
	public void setDba_repetition(Integer dba_repetition) {
		this.dba_repetition = dba_repetition;
	}
	public Integer getQa_qualified() {
		return qa_qualified;
	}
	public void setQa_qualified(Integer qa_qualified) {
		this.qa_qualified = qa_qualified;
	}
	public Integer getQa_notstandard() {
		return qa_notstandard;
	}
	public void setQa_notstandard(Integer qa_notstandard) {
		this.qa_notstandard = qa_notstandard;
	}
	public Integer getQa_cancel() {
		return qa_cancel;
	}
	public void setQa_cancel(Integer qa_cancel) {
		this.qa_cancel = qa_cancel;
	}
	public Integer getQa_disqualification() {
		return qa_disqualification;
	}
	public void setQa_disqualification(Integer qa_disqualification) {
		this.qa_disqualification = qa_disqualification;
	}
	public String getCensusfile_url() {
		return censusfile_url;
	}
	public void setCensusfile_url(String censusfile_url) {
		this.censusfile_url = censusfile_url;
	}
	public String getCensus_recording_url() {
		return census_recording_url;
	}
	public void setCensus_recording_url(String census_recording_url) {
		this.census_recording_url = census_recording_url;
	}
	public String getCensusday() {
		return censusday;
	}
	public void setCensusday(String censusday) {
		this.censusday = censusday;
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
	public Integer getIsdisable() {
		return isdisable;
	}
	public void setIsdisable(Integer isdisable) {
		this.isdisable = isdisable;
	}
	public String getCompname() {
		return compname;
	}
	public void setCompname(String compname) {
		this.compname = compname;
	}
	public Integer getCsstatus() {
		return csstatus;
	}
	public void setCsstatus(Integer csstatus) {
		this.csstatus = csstatus;
	}
	public String getCensusdayrange() {
		return censusdayrange;
	}
	public void setCensusdayrange(String censusdayrange) {
		this.censusdayrange = censusdayrange;
	}
	public String getCensusdayrangeh() {
		return censusdayrangeh;
	}
	public void setCensusdayrangeh(String censusdayrangeh) {
		this.censusdayrangeh = censusdayrangeh;
	}
	public String getCsrefuse() {
		return csrefuse;
	}
	public void setCsrefuse(String csrefuse) {
		this.csrefuse = csrefuse;
	}
	public GXqaeverydaystatistics(String stid, String ordername,
			String demandid, String jfuid, Integer releasenum,
			Integer dba_receive, Integer dba_repetition, Integer qa_qualified,
			Integer qa_notstandard, Integer qa_cancel,
			Integer qa_disqualification, String censusfile_url,
			String census_recording_url, String censusday, String createtime,
			String updatetime, Integer isdisable, String compname,
			Integer csstatus, String censusdayrange, String censusdayrangeh,
			String csrefuse) {
		super();
		this.stid = stid;
		this.ordername = ordername;
		this.demandid = demandid;
		this.jfuid = jfuid;
		this.releasenum = releasenum;
		this.dba_receive = dba_receive;
		this.dba_repetition = dba_repetition;
		this.qa_qualified = qa_qualified;
		this.qa_notstandard = qa_notstandard;
		this.qa_cancel = qa_cancel;
		this.qa_disqualification = qa_disqualification;
		this.censusfile_url = censusfile_url;
		this.census_recording_url = census_recording_url;
		this.censusday = censusday;
		this.createtime = createtime;
		this.updatetime = updatetime;
		this.isdisable = isdisable;
		this.compname = compname;
		this.csstatus = csstatus;
		this.censusdayrange = censusdayrange;
		this.censusdayrangeh = censusdayrangeh;
		this.csrefuse = csrefuse;
	}
	public GXqaeverydaystatistics() {
		super();
	}
	//新增字段pid
	private String pid;
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public GXqaeverydaystatistics(String pid) {
		super();
		this.pid = pid;
	}
	
	
	  
}
