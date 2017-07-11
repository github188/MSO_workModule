package com.mso.res;

import java.math.BigDecimal;
import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.Demand;

public class DemandHomeRes  extends CbaseRes{
	
    public DemandHomeRes(String code, String msg) {
		super(code, msg);
	}

    private BigDecimal jsTolPrice;//    结算总金额
    private BigDecimal djsTolPrice;//    待结算金额
	private Integer tolFbl;//    需求发布总量
	private Integer tolWcl;//    成单总量
	private Integer thisMonthtolFbl;//    本月需求发布总量
	private Integer thisMonthtolWcl;//    本月成单总量
	
	
	private List<Demand> redemandList;//需求下拉框list
	
	public List<Demand> getRedemandList() {
		return redemandList;
	}
	public void setRedemandList(List<Demand> redemandList) {
		this.redemandList = redemandList;
	}
	public BigDecimal getJsTolPrice() {
		return jsTolPrice;
	}
	public BigDecimal getDjsTolPrice() {
		return djsTolPrice;
	}
	public Integer getTolFbl() {
		return tolFbl;
	}
	public Integer getTolWcl() {
		return tolWcl;
	}
	public Integer getThisMonthtolFbl() {
		return thisMonthtolFbl;
	}
	public Integer getThisMonthtolWcl() {
		return thisMonthtolWcl;
	}
	public void setJsTolPrice(BigDecimal jsTolPrice) {
		this.jsTolPrice = jsTolPrice;
	}
	public void setDjsTolPrice(BigDecimal djsTolPrice) {
		this.djsTolPrice = djsTolPrice;
	}
	public void setTolFbl(Integer tolFbl) {
		this.tolFbl = tolFbl;
	}
	public void setTolWcl(Integer tolWcl) {
		this.tolWcl = tolWcl;
	}
	public void setThisMonthtolFbl(Integer thisMonthtolFbl) {
		this.thisMonthtolFbl = thisMonthtolFbl;
	}
	public void setThisMonthtolWcl(Integer thisMonthtolWcl) {
		this.thisMonthtolWcl = thisMonthtolWcl;
	}
	




}
