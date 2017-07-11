package com.mso.res;

import BaseRes.CbaseRes;

import com.mso.model.VisitRecord;

public class VisitRecordRes  extends CbaseRes{
	
    public VisitRecordRes(String code, String msg) {
		super(code, msg);
	}
    private VisitRecord visitRecord;
	public VisitRecord getVisitRecord() {
		return visitRecord;
	}
	public void setVisitRecord(VisitRecord visitRecord) {
		this.visitRecord = visitRecord;
	}
}
