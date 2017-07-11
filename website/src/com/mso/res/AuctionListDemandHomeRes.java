package com.mso.res;

import java.util.List;

import BaseRes.CbaseRes;

import com.mso.model.AuctionListDemand;

public class AuctionListDemandHomeRes  extends CbaseRes{
    public AuctionListDemandHomeRes(String code, String msg) {
		super(code, msg);
	}
	private List<AuctionListDemand> auctionList;
	public List<AuctionListDemand> getAuctionList() {
		return auctionList;
	}
	public void setAuctionList(List<AuctionListDemand> auctionList) {
		this.auctionList = auctionList;
	}
}
