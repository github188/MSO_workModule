package com.mso.res;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

import BaseRes.BaseRes;

import com.mso.model.HFDemand;
import com.mso.model.HJOrderDemand;
import com.mso.utils.PageResults;

public class HFDemandRes extends BaseRes<Object>{
	
    public HFDemandRes(String code, String msg) {
		super(code, msg);
	}
    
    private Long dsjDemandCount;
    private Long djpDemandCount;
    private Long dwcDemandCount;
    private Long djsDemandCount;
    private Long dsqDemandCount;
    private Long gfbDemandCount;//总共发布的任务
    private HFDemand fistDemand;
    
	
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

	private HJOrderDemand fistOrderDemand;

	public HJOrderDemand getFistOrderDemand() {
		return fistOrderDemand;
	}
	public void setFistOrderDemand(HJOrderDemand fistOrderDemand) {
		this.fistOrderDemand = fistOrderDemand;
	}

	private List packageList;
    
    
    public List getPackageList() {
		return packageList;
	}
	public void setPackageList(List packageList) {
		this.packageList = packageList;
	}

	private BigInteger dshOrderCount;
    private BigInteger dzxOrderCount;
    private BigInteger zxzCount;
    private BigInteger djsOrderCount;
    private BigDecimal gfbDemandTol;//总金额
    
	public HFDemand getFistDemand() {
		return fistDemand;
	}
	public void setFistDemand(HFDemand fistDemand) {
		this.fistDemand = fistDemand;
	}
	public BigDecimal getGfbDemandTol() {
		return gfbDemandTol;
	}
	public void setGfbDemandTol(BigDecimal gfbDemandTol) {
		this.gfbDemandTol = gfbDemandTol;
	}
	public BigInteger getDshOrderCount() {
		return dshOrderCount;
	}
	public BigInteger getDzxOrderCount() {
		return dzxOrderCount;
	}
	public BigInteger getZxzCount() {
		return zxzCount;
	}
	public BigInteger getDjsOrderCount() {
		return djsOrderCount;
	}
	public void setDshOrderCount(BigInteger dshOrderCount) {
		this.dshOrderCount = dshOrderCount;
	}
	public void setDzxOrderCount(BigInteger dzxOrderCount) {
		this.dzxOrderCount = dzxOrderCount;
	}
	public void setZxzCount(BigInteger zxzCount) {
		this.zxzCount = zxzCount;
	}
	public void setDjsOrderCount(BigInteger djsOrderCount) {
		this.djsOrderCount = djsOrderCount;
	}

	private BigDecimal tolPrice;//用来统计 订单总金额之和
    public BigDecimal getTolPrice() {
		return tolPrice;
	}
	public void setTolPrice(BigDecimal tolPrice) {
		this.tolPrice = tolPrice;
	}

	private String pageStr;
	public String getPageStr() {
		return pageStr;
	}
	public void setPageStr(String pageStr) {
		this.pageStr = pageStr;
	}
	public Long getDsjDemandCount() {
		return dsjDemandCount;
	}
	public Long getDjpDemandCount() {
		return djpDemandCount;
	}
	public Long getDwcDemandCount() {
		return dwcDemandCount;
	}
	public Long getDjsDemandCount() {
		return djsDemandCount;
	}
	public Long getDsqDemandCount() {
		return dsqDemandCount;
	}
	public void setDsjDemandCount(Long dsjDemandCount) {
		this.dsjDemandCount = dsjDemandCount;
	}
	public void setDjpDemandCount(Long djpDemandCount) {
		this.djpDemandCount = djpDemandCount;
	}
	public void setDwcDemandCount(Long dwcDemandCount) {
		this.dwcDemandCount = dwcDemandCount;
	}
	public void setDjsDemandCount(Long djsDemandCount) {
		this.djsDemandCount = djsDemandCount;
	}
	public void setDsqDemandCount(Long dsqDemandCount) {
		this.dsqDemandCount = dsqDemandCount;
	}
	public Long getGfbDemandCount() {
		return gfbDemandCount;
	}
	public void setGfbDemandCount(Long gfbDemandCount) {
		this.gfbDemandCount = gfbDemandCount;
	}

    
	PageResults<Object> getpageresult;

	public PageResults<Object> getGetpageresult() {
		return getpageresult;
	}
	public void setGetpageresult(PageResults<Object> getpageresult) {
		this.getpageresult = getpageresult;
	}
	
	
	

}
