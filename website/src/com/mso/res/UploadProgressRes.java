package com.mso.res;

import java.util.ArrayList;

import BaseRes.CbaseRes;

import com.mso.model.GXJOrderUploadReport;

public class UploadProgressRes  extends CbaseRes{
	
    public UploadProgressRes(String code, String msg) {
		super(code, msg);
	}
	private  ArrayList<GXJOrderUploadReport> uploadProressList;//上传进度list
	public ArrayList<GXJOrderUploadReport> getUploadProressList() {
		return uploadProressList;
	}
	public void setUploadProressList(
			ArrayList<GXJOrderUploadReport> uploadProressList) {
		this.uploadProressList = uploadProressList;
	}
}
