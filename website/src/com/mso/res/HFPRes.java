package com.mso.res;

import java.util.List;

import BaseRes.BaseRes;

import com.mso.model.Hfp;
import com.mso.utils.PageResults;

public class HFPRes extends BaseRes<Object>{
	
    public HFPRes(String code, String msg) {
		super(code, msg);
	}
    
	
    private List<Hfp> hfpList;

	public List<Hfp> getHfpList() {
		return hfpList;
	}
	public void setHfpList(List<Hfp> hfpList) {
		this.hfpList = hfpList;
	}


	private String pageStr;
	public String getPageStr() {
		return pageStr;
	}
	public void setPageStr(String pageStr) {
		this.pageStr = pageStr;
	}
	
	private List<Object> HfpListObject;

	public List<Object> getHfpListObject() {
		return HfpListObject;
	}
	public void setHfpListObject(List<Object> HfpListObject) {
		this.HfpListObject =HfpListObject;
	}
	
	private PageResults<Object> pageresults;

	public PageResults<Object> getPageresults() {
		return pageresults;
	}
	public void setPageresults(PageResults<Object> pageresults) {
		this.pageresults = pageresults;
	}
	
	
	



}
