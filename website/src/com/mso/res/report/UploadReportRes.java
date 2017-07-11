package com.mso.res.report;
import BaseRes.CbaseRes;

public class UploadReportRes extends CbaseRes{
    
    public UploadReportRes(String code, String msg) {
		super(code, msg);
	}

	private String  uploadId;//新增成功的id

	public String getUploadId() {
		return uploadId;
	}

	public void setUploadId(String uploadId) {
		this.uploadId = uploadId;
	}

	
	
     
}
