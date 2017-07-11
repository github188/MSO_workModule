package com.mso.controller.pickuppackageparty;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mso.controller.base.BaseController;
import com.mso.model.HJOrderDemand;
import com.mso.model.JfUser;
import com.mso.res.pickuppackageparty.HJOrderDemandres;
import com.mso.service.IOrderDemandService;
import com.mso.utils.StringUtil;

@Controller
public class HJOrderDemandController extends BaseController{
    @Autowired
    IOrderDemandService orderdemandService;

    public IOrderDemandService getOrderdemandService() {
		return orderdemandService;
	}

	public void setOrderdemandService(IOrderDemandService orderdemandService) {
		this.orderdemandService = orderdemandService;
	}
	/*
	 * 接包方我的订单
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/orderlist/{jfuid}/{jdstate}")
	public HJOrderDemandres  getTheOrderList(HttpSession session,HttpServletRequest  request,@PathVariable String jfuid,@PathVariable String jdstate)throws UnsupportedEncodingException{
		HJOrderDemandres res=new HJOrderDemandres("Y","获取数据成功");
		String demandname=StringUtil.objCovStr(request.getParameter("demandname"));//需求名/订单名
		String orderid=StringUtil.objCovStr(request.getParameter("orderid"));//订单编号
		String begintime=StringUtil.objCovStr(request.getParameter("begintime"));//开始时间
 	    String endtime=StringUtil.objCovStr(request.getParameter("endtime"));//结束时间
 	    Integer currentPage=StringUtil.toInteger(request.getParameter("currentPage"));
 	    HJOrderDemand user = new HJOrderDemand();
		//分页插件
    	try {
				//jdstate  0-正常订单全部  	1-待审核(审核中)   2[ 2-通过(审核)4-执行中] 进行中        3-驳回     5-结算中    6-已完成            7-被关闭   8-异常订单
				Integer[] strzt=null;
                if(!StringUtil.isNull(jdstate)){
	                		if("0".equals(jdstate)){//正常的全部订单
	                		    strzt=new Integer[]{1,2,4,5,6,7};
	                			user.setPause(0);
	                		}else if("1".equals(jdstate)){//待审核(审核中)
	                			strzt=new Integer[]{1};
	                			user.setPause(0);
	                		}else if("2".equals(jdstate)){//2[ 2-通过(审核)4-执行中] 进行中
	                			strzt=new Integer[]{2,4};
	                			user.setPause(0);
	                		}else if("3".equals(jdstate)){//3-驳回
	                			strzt=new Integer[]{3};
	                			user.setPause(0);
		                	}else if("5".equals(jdstate)){//5-结算中
		            			strzt=new Integer[]{5};
		            			user.setPause(0);
		            		}else if("6".equals(jdstate)){//6-已完成
		            			strzt=new Integer[]{6};
		            			user.setPause(0);
		            		}else if("7".equals(jdstate)){//  7-被关闭
		            			strzt=new Integer[]{7};
		            			user.setPause(0);
		            		}else if("8".equals(jdstate)){
		            			strzt=new Integer[]{3};
		            			user.setPause(1);
		            		}else{
		            			 res.setCode("N");
		                   	     res.setMsg("jdstate请输入 (0-正常订单全部 1-待审核(审核中)  2[ 2-通过(审核)4-执行中] 进行中      3-驳回     5-结算中    6-已完成   7-被关闭   8-异常订单 ) 对应的整数值");
		            			 return res;
		            		}
	                		user.setStrzt(strzt);
                  }else{
                	  res.setCode("N");
                	  res.setMsg("jdstate不能为空!");
                	  return res;
                  }
                  user.setJfuid(jfuid);
                  user.setJdstate(StringUtil.toInteger(jdstate));//订单状态：(竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭 
                  user.setDemandname(demandname);
                  user.setOrderid(orderid);
				  user.setBegintime(begintime);
				  user.setEndtime(endtime);
				  if(null==currentPage){
					user.setCurrentPage(1);
				  }else{
					user.setCurrentPage(currentPage);
				  }
				  res= orderdemandService.getTheOrderList(user);
		} catch (Exception e) {
			res.setCode("N");
			res.setMsg("获取数据失败");
			e.printStackTrace();
		}
    	return res;
    }
	

	/**
	 * 邀请码显示我邀请的接包方列表
	 * @param user
	 * @param jfuinvitationcode 邀请码  注册时候填写  邀请人的邀请码
	 * @return
	 */
	@ResponseBody
	@RequestMapping(method=RequestMethod.GET,value="/user/jfuinvitationcode/{jfuinvitationcode}")
	public HJOrderDemandres getVerificationCodeOrder(JfUser user,@PathVariable String jfuinvitationcode){
		HJOrderDemandres res=new HJOrderDemandres("","");
			user.setJfuinvitationcode(jfuinvitationcode);
			user.setJfutype("2");
			user.setCreatetime(user.getCreatetime());
		    user.setCompname(user.getCompname());
		    res=orderdemandService.getVerificationCodeOrder(user);
		return res;
	}

}
