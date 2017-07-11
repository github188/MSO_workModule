package com.mso.res;

import java.util.List;
import BaseRes.CbaseRes;
import com.mso.model.HJOrderDemand;
import com.mso.model.Hfp;

public class TestRes extends CbaseRes<Object>{
	
    public TestRes(String code, String msg) {
		super(code, msg);
	}
    
    private StringBuffer updateHJOrderDemandnotice;//更新的订单列表
	private List<HJOrderDemand> updateHJOrderDemandList;//更新的订单列表
	public StringBuffer getUpdateHJOrderDemandnotice() {
		return updateHJOrderDemandnotice;
	}
	public void setUpdateHJOrderDemandnotice(StringBuffer updateHJOrderDemandnotice) {
		this.updateHJOrderDemandnotice = updateHJOrderDemandnotice;
	}
	public List<HJOrderDemand> getUpdateHJOrderDemandList() {
		return updateHJOrderDemandList;
	}
	public void setUpdateHJOrderDemandList(
			List<HJOrderDemand> updateHJOrderDemandList) {
		this.updateHJOrderDemandList = updateHJOrderDemandList;
	}
	
	private StringBuffer addhfpnotice;//新增的hfp 提示
	private List<Hfp> addhfpList;//新增的hfp  List
	public StringBuffer getAddhfpnotice() {
		return addhfpnotice;
	}
	public List<Hfp> getAddhfpList() {
		return addhfpList;
	}
	public void setAddhfpnotice(StringBuffer addhfpnotice) {
		this.addhfpnotice = addhfpnotice;
	}
	public void setAddhfpList(List<Hfp> addhfpList) {
		this.addhfpList = addhfpList;
	}
	 
}
