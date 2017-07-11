package com.mso.controller.pickuppackageparty;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.model.GXDbaEverydayStatistics;
import com.mso.model.GXJOrderUploadReport;
import com.mso.res.gxdbaeverydaystatistics.LetContractOneRes;
import com.mso.res.pickuppackageparty.OutsourceeStatementRes;
import com.mso.service.IOrderUploadReportService;
import com.mso.utils.DateUtil;
import com.mso.utils.ERConst;
import com.mso.utils.StringUtil;

@Controller
public class JOrderUploadReportController {
	
	@Autowired
	private IOrderUploadReportService orderUploadReportService;

	public IOrderUploadReportService getOrderUploadReportService() {
		return orderUploadReportService;
	}

	public void setOrderUploadReportService(
			IOrderUploadReportService orderUploadReportService) {
		this.orderUploadReportService = orderUploadReportService;
	}
	

	//接包方成单报表第一层
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/report/j")
	public OutsourceeStatementRes getOutsourceeStatement(HttpSession session,HttpServletRequest  request) throws UnsupportedEncodingException{
		OutsourceeStatementRes res=new OutsourceeStatementRes("", "");
		String jfuid=StringUtil.objCovStr(request.getParameter("jfuid"));//用户id
    	if(StringUtil.isNull(jfuid)){
    		res.setCode("N");
    		res.setMsg("请输入用户id");
    		return res;
    	}
		String ordername=StringUtil.objCovStr(request.getParameter("ordername"));
		String  begintime=StringUtil.objCovStr(request.getParameter("begintime"));//开始时间
		String endtime=StringUtil.objCovStr(request.getParameter("endtime"));//结束时间
		Integer pn=StringUtil.toInteger(request.getParameter("pn"));
		
		
		GXJOrderUploadReport user=new GXJOrderUploadReport();
		user.setJfuid_j(jfuid);
		user.setOrdername(ordername);
		user.setBeginqachecktime(begintime);//搜索中  开始时间
		user.setEndqachecktime(endtime);//搜索中  结束时间
		if(null==pn){
			user.setCurrentPage(1);
		}else{
			user.setCurrentPage(pn);
		}
		
		res=orderUploadReportService.getOutsourceeStatement(user);
		
		return res;
	}
	
	//接包方成单报表第二层
	@ResponseBody
    @RequestMapping(method=RequestMethod.GET,value="/report/j/{jfuid}/{orderid}")
	public OutsourceeStatementRes getOutsourceeSecondFloorStatement(HttpServletRequest request,@PathVariable String jfuid,@PathVariable String orderid) throws UnsupportedEncodingException{
		   OutsourceeStatementRes res=new OutsourceeStatementRes("", "");
		   String begintime=StringUtil.objCovStr(request.getParameter("begintime"));//搜索中 上传时间  的开始时间
		   String endtime=StringUtil.objCovStr(request.getParameter("endtime"));//搜索中 上传时间  的结束时间
		   
		   String ordername=StringUtil.objCovStr(request.getParameter("ordername"));//第二层引用第一层与需求id对用的需求名
		   if(StringUtil.isNull(ordername)){
				res.setCode("N");
	    		res.setMsg("请输入需求名!");
	    		return res; 
		   }
		   BigDecimal auctionnum=StringUtil.toBigDecimal(StringUtil.objCovStr(request.getParameter("auctionnum")));//第二层引用第一层与需求id对应的竞拍量
		   if(null==auctionnum){
				res.setCode("N");
	    		res.setMsg("请输入竞拍量!");
	    		return res; 
		   }
		   GXJOrderUploadReport user=new GXJOrderUploadReport();
		   user.setJfuid_j(jfuid);
		   user.setOrderid(orderid);
		   user.setBegincreatetime(begintime);//搜索中 上传时间  的开始时间
		   user.setEndcreatetime(endtime);//搜索中 上传时间  的结束时间
		   res.setOrdername(ordername);
		   res.setSumauctionnum(auctionnum);
		   res=orderUploadReportService.getOutsourceeSecondFloorStatement(user);
		   return res;
	}
	
	//发包方成单报表第一层
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/report/f")
	public LetContractOneRes getLetContract(HttpSession session,HttpServletRequest  request) throws UnsupportedEncodingException{
		LetContractOneRes res=new LetContractOneRes("","");
		String jfuid=StringUtil.objCovStr(request.getParameter("jfuid"));//用户编号
		if(StringUtil.isNull(jfuid)){
			res.setCode(ERConst.ER_CODE_018);
	   		res.setMsg(ERConst.ER_CODE_018_VALUE); //请输入用户ID-jfuid
			return res;
		}
		
		//String servicetypeAll=StringUtil.objCovStr(request.getParameter("servicetypeAll"));  //是否查询全部需求
		   
		
		
		
		String demandname=StringUtil.objCovStr(request.getParameter("demandname"));//需求名称
		String servicetype=StringUtil.objCovStr(request.getParameter("servicetype"));
		//默认是  销售线索挖掘
        if(StringUtil.isNull(servicetype)){
        	servicetype="销售线索挖掘";
        }
		String begintime=StringUtil.objCovStr(request.getParameter("begintime"));//搜索  开始时间
		String endtime=StringUtil.objCovStr(request.getParameter("endtime"));//搜索  结束时间
		Integer pn=StringUtil.toInteger(request.getParameter("pn"));
		
		GXDbaEverydayStatistics user=new GXDbaEverydayStatistics();
		user.setJfuid(jfuid);
		user.setDemandname(demandname);
		user.setBegintime(begintime);
		user.setEndtime(endtime);
		if(null==pn){
			user.setCurrentPage(1);
		}else{
			user.setCurrentPage(pn);
		}
		user.setServicetype(servicetype);
		
	/*	if(!StringUtil.isNull(servicetypeAll)){
			   if(servicetypeAll.equals("1")){
				   res=orderUploadReportService.getHasPid(user);  
			   }else{
				   res=orderUploadReportService.getLetContract(user);
			   }
		 }else{
			
		 } */
		 res=orderUploadReportService.getLetContract(user);
		
		return res;
	}
	
	//发包方成单报表第二层    只用于  销售线索挖掘  的需求包
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/report/f/{pid}")
	public LetContractOneRes getTowLetContract(HttpServletRequest  request,@PathVariable String pid){
		LetContractOneRes res=new LetContractOneRes("","");
		GXDbaEverydayStatistics user=new GXDbaEverydayStatistics();
		//获取发包方第一层中的需求名称，使其在第二层显示
		String demandname=StringUtil.objCovStr(request.getParameter("demandname"));
		if(StringUtil.isNull(demandname)){
			res.setCode("N");
    		res.setMsg("请输入需求包名!");
    		return res; 
		}
		user.setDemandname(demandname);
		user.setPid(pid);
		if(null!=pid){
		res=orderUploadReportService.getTowLetContract(user);
		}
		return  res;
	}
   //发包方成单报表第三层 
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/report/f/{pid}/{demandid}")
   public LetContractOneRes getThreeLetContract(HttpServletRequest request,@PathVariable String pid,@PathVariable String demandid){
	   LetContractOneRes res=new LetContractOneRes("","");
	   
	   String begintime=StringUtil.objCovStr(request.getParameter("begintime"));
	   String endtime=StringUtil.objCovStr(request.getParameter("endtime"));
	   Integer pn=StringUtil.toInteger(StringUtil.objCovStr(request.getParameter("pn")));
	   String servicetype=StringUtil.objCovStr(request.getParameter("servicetype"));
	   
	   
	   
		//默认是  销售线索挖掘
       if(StringUtil.isNull(servicetype)){
       	  servicetype="销售线索挖掘";
       }
       
       
       
       
	   GXDbaEverydayStatistics user=new GXDbaEverydayStatistics();
	   user.setPid(pid);
	   user.setDemandid(demandid);
	   user.setBegintime(begintime);
	   user.setEndtime(endtime);
	   user.setServicetype(servicetype);
	   if(null==pn){
			user.setCurrentPage(1);
		}else{
			user.setCurrentPage(pn);
		}

	   res=orderUploadReportService.getThreeLetContract(user);   //查询 下载状态
	  
	   return res;
   }
	
	//发包方成单报表第三层 -成单报告 修改下载状态(未下载的,有New标示) 
	@ResponseBody
	@RequestMapping(method=RequestMethod.PUT,value="/report/editDownloadStatus")
	public JSONObject editDownloadStatus(@RequestBody String s){
		JSONObject jsonobj=new JSONObject();
		jsonobj.put("code", "Y");
		jsonobj.put("msg","");
		GXDbaEverydayStatistics gxDbaEverydayStatistics=null;
		try {
			JSONObject uu=JSONObject.fromObject(s);
			gxDbaEverydayStatistics=
					(GXDbaEverydayStatistics) JSONObject.toBean(uu, GXDbaEverydayStatistics.class); //将一个JSONObject对象uu转换为指定类型对象gxDbaEverydayStatistics
		} 
		catch (Exception e) {
			jsonobj.put("code","N");
			jsonobj.put("msg", "参数请输入json格式");
			return jsonobj;
		}
//	发包方成单报表第三层 -成单报告 修改下载状态(未下载的,有New标示)
//	@ResponseBody
//	@RequestMapping(method=RequestMethod.PUT,value="/report/editDownloadStatus")
//	public JSONObject editDownloadStatus(GXDbaEverydayStatistics gxDbaEverydayStatistics){
//		JSONObject jsonobj=new JSONObject();
//		jsonobj.put("code", "Y");
//		jsonobj.put("msg","");
	
		try{
			if(StringUtil.isNull(gxDbaEverydayStatistics.getStid())){
				jsonobj.put("code","N");
				jsonobj.put("msg", "请输入Stid!");
				return jsonobj;
			}
			//根据stid查询对应的一条数据所有字段
			GXDbaEverydayStatistics report = orderUploadReportService.findGXDbaEverydayStatisticsByStid(gxDbaEverydayStatistics.getStid());
			
			String updatetime=DateUtil.getTime();
			report.setUpdatetime(updatetime);
			
			report.setUpdatetime(updatetime);
			
			Integer isdownloaded = gxDbaEverydayStatistics.getIsdownloaded();
			if(null!=isdownloaded){
				report.setIsdownloaded(isdownloaded);
				orderUploadReportService.editDownloadStatus(report); //更新Update 下载状态 和 更新时间
			}
	  }catch(Exception e){
		  jsonobj.put("code", "N");
		  jsonobj.put("msg","修改下载状态失败");
	  }
	  return jsonobj;
	
	}
	
}
