package com.mso.res.servicetype;
import java.util.List;
import com.mso.model.HFservicetype;
import BaseRes.CbaseRes;
public class HFservicetypeRes extends CbaseRes{
    
    public HFservicetypeRes(String code, String msg) {
		super(code, msg);
	}

	List<HFservicetype> Hfservicetypelist;

	public List<HFservicetype> getHfservicetypelist() {
		return Hfservicetypelist;
	}

	public void setHfservicetypelist(List<HFservicetype> hfservicetypelist) {
		Hfservicetypelist = hfservicetypelist;
	}

	
	
     
}
