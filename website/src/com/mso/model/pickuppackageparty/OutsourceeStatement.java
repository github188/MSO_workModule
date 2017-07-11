package com.mso.model.pickuppackageparty;

import java.math.BigDecimal;

/*
 * 接包方-成单报表
 */
public class OutsourceeStatement {

	private Integer fbl; //上传数量
	private Integer cgl;//成功量
	private Integer sbl;//失败量
	private Integer jsl;//接收量
	private String jfuid;//用户id
	private String demandid;//发包方订单id
	private String ordername;//订单名
	private Integer auctionnum;//竞拍量
	private String qachecktime;//竞拍审核通过的时间
	private String orderid;//订单id
//	//搜索
//	private String beginqachecktime;//开始时间
//	private String endqachecktime;//结束时间
	public Integer getFbl() {
		return fbl;
	}
	public void setFbl(Integer fbl) {
		this.fbl = fbl;
	}
	public Integer getCgl() {
		return cgl;
	}
	public void setCgl(Integer cgl) {
		this.cgl = cgl;
	}
	public Integer getSbl() {
		return sbl;
	}
	public void setSbl(Integer sbl) {
		this.sbl = sbl;
	}
	public Integer getJsl() {
		return jsl;
	}
	public void setJsl(Integer jsl) {
		this.jsl = jsl;
	}
	public String getJfuid() {
		return jfuid;
	}
	public void setJfuid(String jfuid) {
		this.jfuid = jfuid;
	}
	public String getDemandid() {
		return demandid;
	}
	public void setDemandid(String demandid) {
		this.demandid = demandid;
	}
	public String getOrdername() {
		return ordername;
	}
	public void setOrdername(String ordername) {
		this.ordername = ordername;
	}
	public Integer getAuctionnum() {
		return auctionnum;
	}
	public void setAuctionnum(Integer auctionnum) {
		this.auctionnum = auctionnum;
	}
	public String getQachecktime() {
		return qachecktime;
	}
	public void setQachecktime(String qachecktime) {
		this.qachecktime = qachecktime;
	}
	
	public String getOrderid() {
		return orderid;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	
	public OutsourceeStatement(String orderid) {
		super();
		this.orderid = orderid;
	}
	public OutsourceeStatement(Integer fbl, Integer cgl, Integer sbl,
			Integer jsl, String jfuid, String demandid, String ordername,
			Integer auctionnum, String qachecktime) {
		super();
		this.fbl = fbl;
		this.cgl = cgl;
		this.sbl = sbl;
		this.jsl = jsl;
		this.jfuid = jfuid;
		this.demandid = demandid;
		this.ordername = ordername;
		this.auctionnum = auctionnum;
		this.qachecktime = qachecktime;
	}
	public OutsourceeStatement(){}
	
	
	private BigDecimal ordernum;//上传单量
	private BigDecimal qanotstandard;//qa质检：不规范
	private BigDecimal qaqualified;//qa质检：合格
	private BigDecimal qacancel;//qa质检：取消
	private BigDecimal qadisqualification;//qa质检：不合格
	private BigDecimal dbarepetition;//dba查重：重复量
	private BigDecimal dbareceive;//dba查重：接收量
	private String createtime;//创建时间
	private String dbaurl;//查重附件
	private String qaurl;//质检附件
	
	public BigDecimal getOrdernum() {
		return ordernum;
	}
	public void setOrdernum(BigDecimal ordernum) {
		this.ordernum = ordernum;
	}
	public BigDecimal getQanotstandard() {
		return qanotstandard;
	}
	public void setQanotstandard(BigDecimal qanotstandard) {
		this.qanotstandard = qanotstandard;
	}
	public BigDecimal getQaqualified() {
		return qaqualified;
	}
	public void setQaqualified(BigDecimal qaqualified) {
		this.qaqualified = qaqualified;
	}
	public BigDecimal getQacancel() {
		return qacancel;
	}
	public void setQacancel(BigDecimal qacancel) {
		this.qacancel = qacancel;
	}
	public BigDecimal getQadisqualification() {
		return qadisqualification;
	}
	public void setQadisqualification(BigDecimal qadisqualification) {
		this.qadisqualification = qadisqualification;
	}
	public BigDecimal getDbarepetition() {
		return dbarepetition;
	}
	public void setDbarepetition(BigDecimal dbarepetition) {
		this.dbarepetition = dbarepetition;
	}
	public BigDecimal getDbareceive() {
		return dbareceive;
	}
	public void setDbareceive(BigDecimal dbareceive) {
		this.dbareceive = dbareceive;
	}
	public String getCreatetime() {
		return createtime;
	}
	public void setCreatetime(String createtime) {
		this.createtime = createtime;
	}
	public String getDbaurl() {
		return dbaurl;
	}
	public void setDbaurl(String dbaurl) {
		this.dbaurl = dbaurl;
	}
	public String getQaurl() {
		return qaurl;
	}
	public void setQaurl(String qaurl) {
		this.qaurl = qaurl;
	}
	public OutsourceeStatement(Integer fbl, Integer cgl, Integer sbl,
			Integer jsl, String jfuid, String demandid, String ordername,
			Integer auctionnum, String qachecktime, String orderid,
			BigDecimal ordernum, BigDecimal qanotstandard, BigDecimal qaqualified,
			BigDecimal qacancel, BigDecimal qadisqualification,
			BigDecimal dbarepetition, BigDecimal dbareceive, String createtime,
			String dbaurl, String qaurl) {
		super();
		this.fbl = fbl;
		this.cgl = cgl;
		this.sbl = sbl;
		this.jsl = jsl;
		this.jfuid = jfuid;
		this.demandid = demandid;
		this.ordername = ordername;
		this.auctionnum = auctionnum;
		this.qachecktime = qachecktime;
		this.orderid = orderid;
		this.ordernum = ordernum;
		this.qanotstandard = qanotstandard;
		this.qaqualified = qaqualified;
		this.qacancel = qacancel;
		this.qadisqualification = qadisqualification;
		this.dbarepetition = dbarepetition;
		this.dbareceive = dbareceive;
		this.createtime = createtime;
		this.dbaurl = dbaurl;
		this.qaurl = qaurl;
	}
	
	private Integer uploadnumber;//上传量
	private Integer successfulnumber;//成功量
	private Integer failureamount;//失败量
	private Integer acceptquantity;//接收量
	public Integer getUploadnumber() {
		return uploadnumber;
	}
	public void setUploadnumber(Integer uploadnumber) {
		this.uploadnumber = uploadnumber;
	}
	public Integer getSuccessfulnumber() {
		return successfulnumber;
	}
	public void setSuccessfulnumber(Integer successfulnumber) {
		this.successfulnumber = successfulnumber;
	}
	public Integer getFailureamount() {
		return failureamount;
	}
	public void setFailureamount(Integer failureamount) {
		this.failureamount = failureamount;
	}
	public Integer getAcceptquantity() {
		return acceptquantity;
	}
	public void setAcceptquantity(Integer acceptquantity) {
		this.acceptquantity = acceptquantity;
	}
	public OutsourceeStatement(Integer uploadnumber, Integer successfulnumber,
			Integer failureamount, Integer acceptquantity) {
		super();
		this.uploadnumber = uploadnumber;
		this.successfulnumber = successfulnumber;
		this.failureamount = failureamount;
		this.acceptquantity = acceptquantity;
	}
	
	
	
}
