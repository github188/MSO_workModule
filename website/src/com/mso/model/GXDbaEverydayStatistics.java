package com.mso.model;

/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */
public class GXDbaEverydayStatistics extends BaseSeach implements java.io.Serializable {
	/** full constructor */
	public GXDbaEverydayStatistics() {
	}
	private String stid;
	private String demandid;
	private String ordername;
	private String orderid;
	private Integer isdownloaded;  //下载 状态

	private String jfuid;
	private Integer releasenum;//发布量/递交量   完成量
	private Integer dba_receive;//dba查重:接收量
	private Integer dba_repetition;//dba查重:重复量
	
	private Integer qa_qualified;//qa质检:合格量
	private Integer qa_notstandard;//qa质检:不规范
	private Integer qa_cancel;//qa质检:取消
	private Integer qa_disqualification;//qa质检:不合格
	private String action;
  	private Integer csstatus;//cs审核状态 0-未查看 1-审核通过 2-驳回 3-驳回再次提交
  	
  	//作为VO增加的字段   by liu
  	private Integer notdownloadcount;	//该子需求下未下载的成单数,0表示没有未下载的成单,大于0表示有  用于成单第一,第二层
  	
	public Integer getIsdownloaded() {
		return isdownloaded;
	}
	public void setIsdownloaded(Integer isdownloaded) {
		this.isdownloaded = isdownloaded;
	}
	public Integer getCsstatus() {
		return csstatus;
	}
	public void setCsstatus(Integer csstatus) {
		this.csstatus = csstatus;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	
	
	
	
	

	public Integer getNotdownloadcount() {
		return notdownloadcount;
	}
	public void setNotdownloadcount(Integer notdownloadcount) {
		this.notdownloadcount = notdownloadcount;
	}
	private Integer fblTol;
	private Integer cglTol;
	private Integer sblTol;
	private Integer jslTol;
	
	public Integer getFblTol() {
		return fblTol;
	}
	public Integer getCglTol() {
		return cglTol;
	}
	public Integer getSblTol() {
		return sblTol;
	}
	public Integer getJslTol() {
		return jslTol;
	}
	public void setFblTol(Integer fblTol) {
		this.fblTol = fblTol;
	}
	public void setCglTol(Integer cglTol) {
		this.cglTol = cglTol;
	}
	public void setSblTol(Integer sblTol) {
		this.sblTol = sblTol;
	}
	public void setJslTol(Integer jslTol) {
		this.jslTol = jslTol;
	}
	private String censusfile_url;//上传文件链接(成单报告)
	private String census_recording_url;//(录音文件)
	private String censusday;//统计的日期
	private String createtime;//创建时间
	private String updatetime;
	private Integer isdisable;//是否生效(假删除)  0 1 删除
	
	
	public String getOrderid() {
		return orderid;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public String getOrdername() {
		return ordername;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public String getStid() {
		return stid;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getJfuid() {
		return jfuid;
	}
	public Integer getReleasenum() {
		return releasenum;
	}
	public Integer getDba_receive() {
		return dba_receive;
	}
	public Integer getDba_repetition() {
		return dba_repetition;
	}
	public Integer getQa_qualified() {
		return qa_qualified;
	}
	public Integer getQa_notstandard() {
		return qa_notstandard;
	}
	public Integer getQa_cancel() {
		return qa_cancel;
	}
	public Integer getQa_disqualification() {
		return qa_disqualification;
	}
	public String getCensusfile_url() {
		return censusfile_url;
	}
	public String getCensus_recording_url() {
		return census_recording_url;
	}
	public String getCensusday() {
		return censusday;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public Integer getIsdisable() {
		return isdisable;
	}
	public void setStid(String stid) {
		this.stid = stid;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setReleasenum(Integer releasenum) {
		this.releasenum = releasenum;
	}
	public void setDba_receive(Integer dba_receive) {
		this.dba_receive = dba_receive;
	}
	public void setDba_repetition(Integer dba_repetition) {
		this.dba_repetition = dba_repetition;
	}
	public void setQa_qualified(Integer qa_qualified) {
		this.qa_qualified = qa_qualified;
	}
	public void setQa_notstandard(Integer qa_notstandard) {
		this.qa_notstandard = qa_notstandard;
	}
	public void setQa_cancel(Integer qa_cancel) {
		this.qa_cancel = qa_cancel;
	}
	public void setQa_disqualification(Integer qa_disqualification) {
		this.qa_disqualification = qa_disqualification;
	}
	public void setCensusfile_url(String censusfile_url) {
		this.censusfile_url = censusfile_url;
	}
	public void setCensus_recording_url(String census_recording_url) {
		this.census_recording_url = census_recording_url;
	}
	public void setCensusday(String censusday) {
		this.censusday = censusday;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public void setIsdisable(Integer isdisable) {
		this.isdisable = isdisable;
	}
	
	//搜索 中的开始时间结束时间
	private String begintime;//开始时间
	private String endtime;//结束时间
	private String releasetime;//发布需求审核通过的时间
	private Integer completequantity;//需求对应的发布量总量
	private Integer auctionnum;//竞拍量
	
	public String getBegintime() {
		return begintime;
	}
	public void setBegintime(String begintime) {
		this.begintime = begintime;
	}
	public String getEndtime() {
		return endtime;
	}
	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}
	public String getReleasetime() {
		return releasetime;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public Integer getCompletequantity() {
		return completequantity;
	}
	public void setCompletequantity(Integer completequantity) {
		this.completequantity = completequantity;
	}
	public Integer getAuctionnum() {
		return auctionnum;
	}
	public void setAuctionnum(Integer auctionnum) {
		this.auctionnum = auctionnum;
	}
	public GXDbaEverydayStatistics(String begintime, String endtime,String releasetime,Integer completequantity,Integer auctionnum) {
		super();
		this.begintime = begintime;
		this.endtime = endtime;
		this.releasetime=releasetime;
		this.completequantity=completequantity;
		this.auctionnum=auctionnum;
	}
    
	private String pid;//包id
	
	private String servicetype;//业务类型
	
	private String targecity;//目标城市
	
	private String citydesc;//城市描述
	
	private String demandname;//包名


	public String getDemandname() {
		return demandname;
	}
	public void setDemandname(String demandname) {
		this.demandname = demandname;
	}
	

	public String getTargecity() {
		return targecity;
	}
	public void setTargecity(String targecity) {
		this.targecity = targecity;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getCitydesc() {
		return citydesc;
	}
	public void setCitydesc(String citydesc) {
		this.citydesc = citydesc;
	}
	public String getServicetype() {
		return servicetype;
	}
	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}
	public GXDbaEverydayStatistics(String pid,String servicetype,String targecity,String demandname) {
		super();
		this.pid = pid;
		this.servicetype=servicetype;
		this.targecity=targecity;
		this.demandname=demandname;
	}
	
	

	
	
}