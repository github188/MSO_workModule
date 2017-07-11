package com.mso.res;

import java.util.List;

import BaseRes.BaseNoageRes;

public class getCuserRes extends BaseNoageRes{
	
    public getCuserRes(String code, String msg) {
		super(code, msg);
	}
    
    //拼接的pageStr 
//    private String pageStr;
    private String pageNo;
    private String currentPage;
	public String getPageNo() {
		return pageNo;
	}
	public String getCurrentPage() {
		return currentPage;
	}
	public void setPageNo(String pageNo) {
		this.pageNo = pageNo;
	}
	public void setCurrentPage(String currentPage) {
		this.currentPage = currentPage;
	}

	private List userList;
	public List getUserList() {
		return userList;
	}
	public void setUserList(List userList) {
		this.userList = userList;
	}
//	public String getPageStr() {
//		return pageStr;
//	}
//	public void setPageStr(String pageStr) {
//		this.pageStr = pageStr;
//	}
}
