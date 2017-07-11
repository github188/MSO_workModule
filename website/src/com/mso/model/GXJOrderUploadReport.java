package com.mso.model;




/**
 * HFUserDetail entity. @author MyEclipse Persistence Tools
 */

public class GXJOrderUploadReport extends BaseSeach implements java.io.Serializable {
	/** full constructor */
	public GXJOrderUploadReport() {
	}
	
	
	private String id;
	private String pid;
	private String servicetype;//业务类型      1-销售线索挖掘  2-数据加工  3-人工客服 
	private String jfuid_j;//用户id
	private String demandid;
	private String orderid;
	private Integer order_num;
	private String report;
	private String recording;
	private String createtime;
	private String updatetime;
	private String uploadtime;
	private Integer status;
	private Integer isfollow;
	private Integer dba_receive;
	private Integer dba_repetition;
	private String dba_url;
	private Integer qa_qualified;
	private Integer qa_notstandard;
	private String releasetime;
    private String qachecktime;
	private String jfuid;
	private String ordername;
	private Integer qa_cancel;
	private Integer qa_disqualification;
	private String dba_assessment;
	private String qa_assessment;
	private String qa_url;
	private Integer dba_check;
	private Integer qa_check;
	private String action;
	
	//发布量, 成功量, 失败量,接收量,
	private Integer fbl;
	private Integer cgl;
	private Integer sbl;
	private Integer jsl;
	
	private Integer fblTol;
	private Integer cglTol;
	private Integer sblTol;
	private Integer jslTol;
	
	private Integer dba_receiveTol;
	private Integer dba_repetitionTol;
	private Integer qa_qualifiedTol;
	private Integer qa_notstandardTol;
	private Integer qa_cancelTol;
	private Integer qa_disqualificationTol;
	
	//竞拍时间
	private String beginqachecktime;//开始时间
	private String endqachecktime;//结束时间
	//上传
	private String begincreatetime;//开始时间
	private String endcreatetime;//结束时间
	
	private Integer currentpage;
	public Integer getCurrentpage() {
		return currentpage;
	}
	public void setCurrentpage(Integer currentpage) {
		this.currentpage = currentpage;
	}
	
	public String getPid() {
		return pid;
	}
	public String getServicetype() {
		return servicetype;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public void setServicetype(String servicetype) {
		this.servicetype = servicetype;
	}
	public String getQachecktime() {
		return qachecktime;
	}
	public void setQachecktime(String qachecktime) {
		this.qachecktime = qachecktime;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
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

	
 	
	public Integer getDba_receiveTol() {
		return dba_receiveTol;
	}
	public Integer getDba_repetitionTol() {
		return dba_repetitionTol;
	}
	public Integer getQa_qualifiedTol() {
		return qa_qualifiedTol;
	}
	public Integer getQa_notstandardTol() {
		return qa_notstandardTol;
	}
	public Integer getQa_cancelTol() {
		return qa_cancelTol;
	}
	public Integer getQa_disqualificationTol() {
		return qa_disqualificationTol;
	}
	public void setDba_receiveTol(Integer dba_receiveTol) {
		this.dba_receiveTol = dba_receiveTol;
	}
	public void setDba_repetitionTol(Integer dba_repetitionTol) {
		this.dba_repetitionTol = dba_repetitionTol;
	}
	public void setQa_qualifiedTol(Integer qa_qualifiedTol) {
		this.qa_qualifiedTol = qa_qualifiedTol;
	}
	public void setQa_notstandardTol(Integer qa_notstandardTol) {
		this.qa_notstandardTol = qa_notstandardTol;
	}
	public void setQa_cancelTol(Integer qa_cancelTol) {
		this.qa_cancelTol = qa_cancelTol;
	}
	public void setQa_disqualificationTol(Integer qa_disqualificationTol) {
		this.qa_disqualificationTol = qa_disqualificationTol;
	}
	
	
	
	public String getReleasetime() {
		return releasetime;
	}
	public void setReleasetime(String releasetime) {
		this.releasetime = releasetime;
	}
	public String getJfuid() {
		return jfuid;
	}
	public String getOrdername() {
		return ordername;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public Integer getFbl() {
		return fbl;
	}
	public Integer getCgl() {
		return cgl;
	}
	public Integer getSbl() {
		return sbl;
	}
	public Integer getJsl() {
		return jsl;
	}
	public void setFbl(Integer fbl) {
		this.fbl = fbl;
	}
	public void setCgl(Integer cgl) {
		this.cgl = cgl;
	}
	public void setSbl(Integer sbl) {
		this.sbl = sbl;
	}
	public void setJsl(Integer jsl) {
		this.jsl = jsl;
	}
	public String getId() {
		return id;
	}
	public String getJfuid_j() {
		return jfuid_j;
	}
	public String getDemandid() {
		return demandid;
	}
	public String getOrderid() {
		return orderid;
	}
	public Integer getOrder_num() {
		return order_num;
	}
	public String getReport() {
		return report;
	}
	public String getRecording() {
		return recording;
	}
	public String getCreatetime() {
		return createtime;
	}
	public String getUpdatetime() {
		return updatetime;
	}
	public String getUploadtime() {
		return uploadtime;
	}
	public Integer getStatus() {
		return status;
	}
	public Integer getIsfollow() {
		return isfollow;
	}
	public Integer getDba_receive() {
		return dba_receive;
	}
	public Integer getDba_repetition() {
		return dba_repetition;
	}
	public String getDba_url() {
		return dba_url;
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
	public String getDba_assessment() {
		return dba_assessment;
	}
	public String getQa_assessment() {
		return qa_assessment;
	}
	public String getQa_url() {
		return qa_url;
	}
	public Integer getDba_check() {
		return dba_check;
	}
	public Integer getQa_check() {
		return qa_check;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setJfuid_j(String jfuid_j) {
		this.jfuid_j = jfuid_j;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public void setOrder_num(Integer order_num) {
		this.order_num = order_num;
	}
	public void setReport(String report) {
		this.report = report;
	}
	public void setRecording(String recording) {
		this.recording = recording;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(String updatetime) {
		this.updatetime = updatetime;
	}
	public void setUploadtime(String uploadtime) {
		this.uploadtime = uploadtime;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public void setIsfollow(Integer isfollow) {
		this.isfollow = isfollow;
	}
	public void setDba_receive(Integer dba_receive) {
		this.dba_receive = dba_receive;
	}
	public void setDba_repetition(Integer dba_repetition) {
		this.dba_repetition = dba_repetition;
	}
	public void setDba_url(String dba_url) {
		this.dba_url = dba_url;
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
	public void setDba_assessment(String dba_assessment) {
		this.dba_assessment = dba_assessment;
	}
	public void setQa_assessment(String qa_assessment) {
		this.qa_assessment = qa_assessment;
	}
	public void setQa_url(String qa_url) {
		this.qa_url = qa_url;
	}
	public void setDba_check(Integer dba_check) {
		this.dba_check = dba_check;
	}
	public void setQa_check(Integer qa_check) {
		this.qa_check = qa_check;
	}
	
	
	public String getBeginqachecktime() {
		return beginqachecktime;
	}
	public void setBeginqachecktime(String beginqachecktime) {
		this.beginqachecktime = beginqachecktime;
	}
	public String getEndqachecktime() {
		return endqachecktime;
	}
	public void setEndqachecktime(String endqachecktime) {
		this.endqachecktime = endqachecktime;
	}
	
	
	public String getBegincreatetime() {
		return begincreatetime;
	}
	public void setBegincreatetime(String begincreatetime) {
		this.begincreatetime = begincreatetime;
	}
	public String getEndcreatetime() {
		return endcreatetime;
	}
	public void setEndcreatetime(String endcreatetime) {
		this.endcreatetime = endcreatetime;
	}
	
	//竞拍量h 第二层用
	private Integer towauctionnum;
	public Integer getTowauctionnum() {
		return towauctionnum;
	}
	public void setTowauctionnum(Integer towauctionnum) {
		this.towauctionnum = towauctionnum;
	}
	public GXJOrderUploadReport(Integer towauctionnum) {
		super();
		this.towauctionnum = towauctionnum;
	}
	
}