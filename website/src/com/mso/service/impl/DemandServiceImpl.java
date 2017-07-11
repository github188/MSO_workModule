package com.mso.service.impl;


import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.IDatafilteringDao;
import com.mso.dao.IDemandDao;
import com.mso.dao.IOrderDemandDao;
import com.mso.dao.IPackageManageDao;
import com.mso.dao.IUserFDemandOrderDao;
import com.mso.input.DemandHallPut;
import com.mso.input.DemandPut;
import com.mso.input.areaCity;
import com.mso.model.AuctionListDemand;
import com.mso.model.Demand;
import com.mso.model.DynamicDemand;
import com.mso.model.GXPackageManage;
import com.mso.model.HFDatafiltering;
import com.mso.model.HFDemand;
import com.mso.model.HJOrderDemand;
import com.mso.model.Hfp;
import com.mso.model.UserFDemand;
import com.mso.model.UserJfUser;
import com.mso.res.AddOrUpdateDemandRes;
import com.mso.res.AuctionListDemandHomeRes;
import com.mso.res.DemandHomeRes;
import com.mso.res.DynamicDemandHomeRes;
import com.mso.res.HFDemandRes;
import com.mso.res.HFdemandHallRes;
import com.mso.service.IDemandService;
import com.mso.utils.BeanUtils;
import com.mso.utils.DateUtil;
import com.mso.utils.ERConst;
import com.mso.utils.PageResults;
import com.mso.utils.StringUtil;


/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("demandService")@Transactional
public class DemandServiceImpl implements IDemandService{
	
	@Autowired
	IDemandDao demandDao;
	@Autowired
	IUserFDemandOrderDao userFDemandOrderDao;
	
	@Autowired
	IOrderDemandDao orderdemandDao;
	
	@Autowired
	IPackageManageDao packageManageDao;
	
	@Autowired
	IDatafilteringDao datafilteringDao;
	 
	@Override
	public void setAreaCity(DemandPut r,AddOrUpdateDemandRes res){
		List<HFDemand> demandList=new ArrayList<HFDemand>();
		List<areaCity> areaCityList=r.getAreaCityList();
		if(areaCityList!=null && !areaCityList.isEmpty()){
			for (areaCity areaCity : areaCityList) {
				
				    HFDemand copyDemand=BeanUtils.demandPutToHFDemand(r);
					copyDemand.setOrderprice(null==areaCity.getOrderprice()?new BigDecimal(0):areaCity.getOrderprice());
					copyDemand.setOrderpricetol(null==areaCity.getOrderpricetol()?new BigDecimal(0):areaCity.getOrderpricetol());
					copyDemand.setSubdescription(null==areaCity.getSubdescription()?"":areaCity.getSubdescription());
					copyDemand.setTargecity(null==areaCity.getTargecity()?"":areaCity.getTargecity());
					copyDemand.setReleasenum(null==areaCity.getReleasenum()?0:areaCity.getReleasenum());
					copyDemand.setProductaccessories(r.getProductaccessories());//产品附件
					
					copyDemand.setDemandid(DateUtil.getIdDay());
					copyDemand.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
					demandList.add(copyDemand);
					demandDao.addDemand(copyDemand);
			}
//			demandDao.addDemandAll(demandList);
		}
		res.setDemandList(demandList);
	}
	
	
	@Override
	public void setAreaCityTol(DemandPut r,Hfp p){
		List<areaCity> areaCityList=r.getAreaCityList();
		if(areaCityList!=null && !areaCityList.isEmpty()){
			 BigDecimal demandpricetol=new BigDecimal("0");
			 Integer releasenum=0;//	包发布量：2000条
			 StringBuffer targecity=new StringBuffer();
			for (areaCity areaCity : areaCityList) {
				demandpricetol=demandpricetol.add(areaCity.getOrderpricetol());
				if(null!=areaCity.getReleasenum()){
					releasenum=releasenum+areaCity.getReleasenum();
				}
				targecity=targecity.append(","+areaCity.getTargecity());
			}
			p.setReleasenum(releasenum);
			p.setDemandpricetol(demandpricetol);
		}else{
			p.setReleasenum(0);
			p.setDemandpricetol(new BigDecimal(0));
		}
	}
	@Override
	public void addDemand(HFDemand user){
		demandDao.addDemand(user);
		UserJfUser pa=new  UserJfUser();
		pa.setJfuid(user.getJfuid());
		UserJfUser resuser=userFDemandOrderDao.selectUser(pa);
		if(resuser!=null){//
			UserFDemand addUserD=new UserFDemand();
			addUserD.setDemandid(user.getDemandid());
			addUserD.setIsreview(0);
			addUserD.setUserId(resuser.getUserId());
			userFDemandOrderDao.addUserFDemand(addUserD);
		}else{//用户没有被分配
		}
	}
	@Override
	public void addDemands(HFDemand user){
		demandDao.addDemand(user);
	}
	@Override
	public void addDemandAll(List<HFDemand> demandList){
		demandDao.addDemandAll(demandList);
		UserJfUser pa=new  UserJfUser();
		if(null!=demandList){
			pa.setJfuid(demandList.get(0).getJfuid());
		}
		UserJfUser resuser=userFDemandOrderDao.selectUser(pa);
		if(resuser!=null){
			UserFDemand addUserD=new UserFDemand();
			addUserD.setDemandid(demandList.get(0).getDemandid());
			addUserD.setIsreview(0);
			addUserD.setUserId(resuser.getUserId());
			userFDemandOrderDao.addUserFDemand(addUserD);
		}else{//用户没有被分配
		}
	}
	@Override
	public void deleteDemand(HFDemand user){
		demandDao.deleteDemand(user);
	}
	
	@Override
	public void updateDemand(HFDemand user){
		demandDao.updateDemand(user);
	}
	/*
	 * 查询需求明细信息
	 */
	@Override
	public HFDemand getDemandById(HFDemand user){
		return demandDao.getDemandById(user);
	}
	/*
	 * 查询需求明细信息 更具包id
	 */
	@Override
	public List<Object> getDemandByPid(HFDemand user){
		return demandDao.getDemandByPid(user);
	}
	/*
	* demand 操作
	*/
	public HFDemandRes doneDemand(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			String par=user.getPar();
		   	if("submit".equals(par)){//提交
		   		HFDemand addU=this.getDemandById(user);
		   		if(3==addU.getFdstate()){//驳回再次提交
		   			addU.setDistributionstate(5);
		   		}
		   		addU.setFdstate(1);//提交
		   		this.updateDemand(addU);
		   	}
		   	else if("copy".equals(par)){
		   		HFDemand addU=this.getDemandById(user);
		   		HFDemand newaddU=new HFDemand();
		   		newaddU.setDemandid(DateUtil.getIdDay());
		   		newaddU.setJfuid(addU.getJfuid());
		   		newaddU.setCategory1(addU.getCategory1());
		   		newaddU.setCategory2(addU.getCategory2());
		   		newaddU.setCategory3(addU.getCategory3());
		   		newaddU.setDemandtype(addU.getDemandtype());
		   		newaddU.setPackageid(addU.getPackageid());
		   		newaddU.setOrdername(addU.getOrdername()+"_copy");
		   		newaddU.setBeginage(addU.getBeginage());
		   		newaddU.setOrderprice(addU.getOrderprice());
		   		newaddU.setOrderpricetol(addU.getOrderpricetol());
		   		newaddU.setReleasenum(addU.getReleasenum());
		   		newaddU.setTargethumen(addU.getTargethumen());
		   		newaddU.setEndage(addU.getEndage());
		   		newaddU.setTargecity(addU.getTargecity());
		   		newaddU.setEndtime(addU.getEndtime());
		   		newaddU.setStandardoperation(addU.getStandardoperation());
		   		newaddU.setOtherreport(addU.getOtherreport());
		   		newaddU.setPleader(addU.getPleader());
		   		newaddU.setPphone(addU.getPphone());
		   		newaddU.setPaytime(addU.getPaytime());
		   		newaddU.setDemand(addU.getDemand());
		   		newaddU.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
		   		newaddU.setFdstate(new Integer("0"));//初始化状态
		   		newaddU.setDistributionstate(0);//已分配
		   		newaddU.setOthercol(addU.getOthercol());
		   		newaddU.setNeedv(addU.getNeedv());
		   		newaddU.setStandis(addU.getStandis());
		   		newaddU.setOtheris(addU.getOtheris());
		   		newaddU.setStandardoperation(addU.getStandardoperation());
		   		newaddU.setOtherreport(addU.getOtherreport());
		   		newaddU.setFishnum(0);
		   		newaddU.setApplicationnum(0);
		   		this.addDemand(newaddU);
		   	}
		   	else if("forreward".equals(par)){
		   		HFDemand addU=this.getDemandById(user);
		   		//悬赏新增金额
		   		this.updateDemand(addU);
		   	}
		   	else if("delete".equals(par)){//刪除需求
		   		HFDemand deleteU=this.getDemandById(user);
		   		this.deleteDemand(deleteU);
		   	}else{
		   		
			}
		} catch (Exception e) {
				res.setCode(ERConst.ER_CODE);
				res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
		}
		return res;
	}
	
	@Override
	public HFDemand getDemandHallById(HFDemand u) {
		PageResults s= demandDao.getDemandHallAll(u);
		List<Object> list=s.getResults();
		HFDemand d=new HFDemand();
        if(list!=null&&list.size()!=0){
        		 Object[]  a=(Object[] ) list.get(0);
	       	     String demandid=StringUtil.objCovStr(a[0]);
	       	     String pid=StringUtil.objCovStr(a[1]);
	       	     String jfuid=StringUtil.objCovStr(a[2]);
	       	     String category1=StringUtil.objCovStr(a[3]);
	       	     String category2=StringUtil.objCovStr(a[4]);
	       	     String category3=StringUtil.objCovStr(a[5]);
	       	     Integer demandtype=StringUtil.toInteger((StringUtil.objCovStr(a[6])));
	             String packageid=StringUtil.objCovStr(a[7]);
	       	     String productname=StringUtil.objCovStr(a[8]);
	       	     String ordername=StringUtil.objCovStr(a[9]);
	             BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[10]));
	             BigDecimal orderpricetol=StringUtil.toBigDecimal(StringUtil.objCovStr(a[11]));				       	    	
	             Integer releasenum=StringUtil.toInteger(StringUtil.objCovStr(a[12]));
	             String targethumen=StringUtil.objCovStr(a[13]);
	             Integer endage=StringUtil.toInteger(StringUtil.objCovStr(a[14]));
	       	     String citydesc=StringUtil.objCovStr(a[15]);
	             String targecity=StringUtil.objCovStr(a[16]);
	       	     String begintime=StringUtil.objCovStr(a[17]);    
	       	     String endtime=StringUtil.objCovStr(a[18]);
	             String demand=StringUtil.objCovStr(a[19]);
	             Integer fdstate=StringUtil.toInteger(StringUtil.objCovStr(a[20]));
	             String createtime=StringUtil.objCovStr(a[21]);
	       	     String releasetime=StringUtil.objCovStr(a[22]);				       	    	
	       	     Integer applicationnum=StringUtil.toInteger(StringUtil.objCovStr(a[23]));
	       	     Integer favorableway=StringUtil.toInteger(StringUtil.objCovStr(a[24]));
	       	     Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[25]));
	       	     String demanddescription=StringUtil.objCovStr(a[26]);			
	       	     String standardoperation=StringUtil.objCovStr(a[27]);
		       	 String otherreport=StringUtil.objCovStr(a[28]);
		       	 String xsxsurl=StringUtil.objCovStr(a[29]);
		       	 String paymenttime=StringUtil.objCovStr(a[30]);
		       	 String paymentstandard=StringUtil.objCovStr(a[31]);
		       	 BigDecimal sittingprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[32]));
		       	 String pleader=StringUtil.objCovStr(a[33]);
		       	 String pphone=StringUtil.objCovStr(a[34]);
		       	 Integer beginage=StringUtil.toInteger(StringUtil.objCovStr(a[35])); 
		       	 String updatetime=StringUtil.objCovStr(a[36]);
		    	 String subdescription=StringUtil.objCovStr(a[37]);
		    	 BigDecimal paymentmoney=StringUtil.toBigDecimal(StringUtil.objCovStr(a[38]));
		    	 String twolevindustry=StringUtil.objCovStr(a[39]);
		    	 
		       	 String ythreelevindustry=StringUtil.objCovStr(a[40]);
		         String threelevindustry="";
		         BigDecimal price=new BigDecimal("0");
		         //验证传入的json  自定义标签 是否合法
		         if(!StringUtil.isNull(ythreelevindustry)){
					try {
						JSONObject jsonObject = JSONObject.fromObject(ythreelevindustry);
						threelevindustry=jsonObject.getString("threelevindustry");
						price=StringUtil.toBigDecimal(jsonObject.getString("price"));
					} catch (Exception e) {
						price=new BigDecimal("0");
						threelevindustry=StringUtil.objCovStr(a[40]);
					}
				 }
		    	 String customlabel=StringUtil.objCovStr(a[41]);
		    	 
		         BigDecimal jbfpricetol=StringUtil.toBigDecimal(StringUtil.objCovStr(a[42]));
		         BigDecimal jbfprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[43]));
		         
	       	     d.setDemandid(demandid);
	       	     d.setPid(pid);
	       	     d.setJfuid(jfuid);
	       	     d.setCategory1(category1);
	       	     d.setCategory2(category2);
	       	     d.setCategory3(category3);
	       	     d.setDemandtype(demandtype);
	             d.setPackageid(packageid);
	       	     d.setProductname(productname);
	       	     d.setOrdername(ordername);
	             d.setOrderprice(orderprice);
	       	     d.setOrderpricetol(orderpricetol);				       	    	
	       	     d.setReleasenum(releasenum);
	             d.setTargethumen(targethumen);
	       	     d.setEndage(endage);
	       	     d.setCitydesc(citydesc);
	             d.setTargecity(targecity);
	       	     d.setBegintime(begintime);    
	       	     d.setEndtime(endtime);
	             d.setDemand(demand);
	       	     d.setFdstate(fdstate);
	             d.setCreatetime(createtime);
	       	     d.setReleasetime(releasetime);				       	    	
	       	     d.setApplicationnum(applicationnum);
	             d.setFavorableway(favorableway);
	       	     d.setFishnum(fishnum);
	       	     d.setDemanddescription(demanddescription);
	       	     d.setStandardoperation(standardoperation);
	       	     d.setOtherreport(otherreport);
	       	     d.setXsxsurl(xsxsurl);
	       	     d.setPaymenttime(paymenttime);
	       	     d.setPaymentstandard(paymentstandard);
	       	     d.setSittingprice(sittingprice);
	       	     d.setPleader(pleader);
	       	     d.setPphone(pphone);
		       	 d.setBeginage(beginage);
		       	 d.setUpdatetime(updatetime);
		       	 d.setSubdescription(subdescription);
		       	 d.setPaymentmoney(paymentmoney);
		       	 d.setTwolevindustry(twolevindustry);
		       	 d.setThreelevindustry(threelevindustry);
		       	 d.setCustomlabel(customlabel);
		       	 d.setPrice(price);
        		 if(!StringUtil.isNull(d.getReleasetime())){
              		String releasetime1=d.getReleasetime();
	        		long subday=DateUtil.getDaySub(releasetime1,DateUtil.getTime());
	        		subday=-1*subday+1;
	        		if(subday<=5){
	        			d.setNewdemand(1);	
	        		}else{
	        			d.setNewdemand(0);	
	        		}
        		 }else{
        			d.setNewdemand(0);	
        		 }
        		 d.setJbfprice(jbfprice);
		       	 d.setJbfpricetol(jbfpricetol);
			}
        return d;
	}
	public HFdemandHallRes getDemandHall(DemandHallPut demandhall) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFdemandHallRes res=new HFdemandHallRes(code,msg);
	    
	    List results=new ArrayList();
		try {
				 Integer[] strzt=null;//发包方需求状态 0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭   
				 //查询全部时候
				 if(StringUtil.isNull(demandhall.getCategory3())){
					 	HFDemand u=new HFDemand();
			    		u.setCategory1(demandhall.getCategory1());//面向行业
			    		u.setTargecity(demandhall.getTargecity());//目标城市
			    		u.setCategory2(demandhall.getCategory2());////获客渠道
			    		if("1".equals(demandhall.getAuction())){
							strzt=new Integer[]{2,4};
			    			u.setAuction("1");// 1-可竞拍 2- 不可竞拍
			    		}
			    		else if("2".equals(demandhall.getAuction())){
							strzt=new Integer[]{5,6,7};
			    			u.setAuction("2");// 1-可竞拍 2- 不可竞拍
			    		}else{
			    		   strzt=new Integer[]{2,4,5,6,7};
			    		}
			    		u.setStrzt(strzt);//面向行业
			    		u.setPricerange(demandhall.getPricerange());//需求单价 1:0-30  2:30-60  3:60-100  4:100以上
			    		u.setOrderBy(demandhall.getOrderBy());//   剩余量(residualQuantity)  上架日期 (releasetime)   单价(orderprice)
			    		u.setSort(demandhall.getSort());//desc降序 asc 升序
			    		u.setOrdername(demandhall.getKeyword());
			    		u.setDemandid(demandhall.getDemandid()); 
			    		int currentPage=1;
			    		if(StringUtil.isNull(demandhall.getCurrentPage())){
			    			currentPage=1; 
			    		}else{
			    		    currentPage=StringUtil.toInteger(demandhall.getCurrentPage());
			    		}
			    	    u.setCurrentPage(currentPage);
			    		u.setCategory3(demandhall.getCategory3());//业务类型  1-销售线索挖掘  2-数据加工  3-人工客服  
		    		 
		    		    PageResults s= demandDao.getDemandHallAll(u);
				        res.setPageCount(s.getPageCount());
				        res.setPageNo(s.getPageNo());
				        res.setPageSize(s.getPageSize());
				        res.setCurrentPage(s.getCurrentPage());
				        res.setTotalCount(s.getTotalCount());
				        res.setPageStr(s.getAjaxPageStr());
				        List list=s.getResults();
				        
				        List<Object> resultsList=new ArrayList<Object>();
				        if(list!=null&&list.size()!=0){
				        	for (int i = 0; i < list.size(); i++) {
				        		 
				        		 Object[]  a=(Object[]) list.get(i);
					       	     String demandid=StringUtil.objCovStr(a[0]);
					       	     String pid=StringUtil.objCovStr(a[1]);
					       	     String jfuid=StringUtil.objCovStr(a[2]);
					       	     String category1=StringUtil.objCovStr(a[3]);
					       	     String category2=StringUtil.objCovStr(a[4]);
					       	     String category3=StringUtil.objCovStr(a[5]);
					       	     Integer demandtype=StringUtil.toInteger((StringUtil.objCovStr(a[6])));
					             String packageid=StringUtil.objCovStr(a[7]);
					       	     String productname=StringUtil.objCovStr(a[8]);
					       	     String ordername=StringUtil.objCovStr(a[9]);
					             BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[10]));
					             BigDecimal orderpricetol=StringUtil.toBigDecimal(StringUtil.objCovStr(a[11]));				       	    	
					             Integer releasenum=StringUtil.toInteger(StringUtil.objCovStr(a[12]));
					             String targethumen=StringUtil.objCovStr(a[13]);
					             String endagestr=StringUtil.objCovStr(a[14]);
					             Integer endage=StringUtil.toInteger(endagestr);
					       	     String citydesc=StringUtil.objCovStr(a[15]);
					             String targecity=StringUtil.objCovStr(a[16]);
					       	     String begintime=StringUtil.objCovStr(a[17]);    
					       	     String endtime=StringUtil.objCovStr(a[18]);
					             String demand=StringUtil.objCovStr(a[19]);
					             Integer fdstate=StringUtil.toInteger(StringUtil.objCovStr(a[20]));
					             String createtime=StringUtil.objCovStr(a[21]);
					       	     String releasetime=StringUtil.objCovStr(a[22]);				       	    	
					       	     Integer applicationnum=StringUtil.toInteger(StringUtil.objCovStr(a[23]));
					       	     Integer favorableway=StringUtil.toInteger(StringUtil.objCovStr(a[24]));
					       	     Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[25]));
					       	     
					       	     String demanddescription=StringUtil.objCovStr(a[26]);			
					       	     String standardoperation=StringUtil.objCovStr(a[27]);
						       	 String otherreport=StringUtil.objCovStr(a[28]);
						       	 String xsxsurl=StringUtil.objCovStr(a[29]);
						       	 String paymenttime=StringUtil.objCovStr(a[30]);
						       	 String paymentstandard=StringUtil.objCovStr(a[31]);
						       	 
						       	
						       	 String twolevindustry=StringUtil.objCovStr(a[39]);
						       	 String ythreelevindustry=StringUtil.objCovStr(a[40]);
						         String threelevindustry="";
						         BigDecimal price=new BigDecimal("0");
						         //验证传入的json  自定义标签 是否合法
						         if(!StringUtil.isNull(ythreelevindustry)){
									try {
										JSONObject jsonObject = JSONObject.fromObject(ythreelevindustry);
										threelevindustry=jsonObject.getString("threelevindustry");
										price=StringUtil.toBigDecimal(jsonObject.getString("price"));
									} catch (Exception e) {
										price=new BigDecimal("0");
										threelevindustry=StringUtil.objCovStr(a[40]);
									}
								 }
						         
						         BigDecimal jbfpricetol=StringUtil.toBigDecimal(StringUtil.objCovStr(a[42]));
						         BigDecimal jbfprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[43]));
						         
					       	     HFDemand d=new HFDemand();
					       	     d.setDemandid(demandid);
					       	     d.setPid(pid);
					       	     d.setJfuid(jfuid);
					       	     d.setCategory1(category1);
					       	     d.setCategory2(category2);
					       	     d.setCategory3(category3);
					       	     d.setDemandtype(demandtype);
					             d.setPackageid(packageid);
					       	     d.setProductname(productname);
					       	     d.setOrdername(ordername);
					             d.setOrderprice(orderprice);
					       	     d.setOrderpricetol(orderpricetol);				       	    	
					       	     d.setReleasenum(releasenum);
					             d.setTargethumen(targethumen);
					       	     d.setEndage(endage);
					       	     d.setCitydesc(citydesc);
					             d.setTargecity(targecity);
					       	     d.setBegintime(begintime);    
					       	     d.setEndtime(endtime);
					             d.setDemand(demand);
					       	     d.setFdstate(fdstate);
					             d.setCreatetime(createtime);
					       	     d.setReleasetime(releasetime);				       	    	
					       	     d.setApplicationnum(applicationnum);
					             d.setFavorableway(favorableway);
					       	     d.setFishnum(fishnum);
					       	     d.setDemanddescription(demanddescription);
					       	     
					       	     d.setStandardoperation(standardoperation);
					       	     d.setOtherreport(otherreport);
					       	     d.setXsxsurl(xsxsurl);
					       	     d.setPaymenttime(paymenttime);
					       	     d.setPaymentstandard(paymentstandard);
					       	     d.setTwolevindustry(twolevindustry);
					       	     d.setThreelevindustry(threelevindustry);
					       	     d.setPrice(price);
					       	     
						       	 d.setJbfprice(jbfprice);
						       	 d.setJbfpricetol(jbfpricetol);
					       	     
				        		 if(!StringUtil.isNull(d.getReleasetime())){
				              		String releasetime1=d.getReleasetime();
					        		long subday=DateUtil.getDaySub(DateUtil.getTime(),releasetime1);//DateUtil.getTime()-releasetime1 
					        		subday=-1*subday+1;
					        		if(subday<=5){
					        			d.setNewdemand(1);	
					        		}else{
					        			d.setNewdemand(0);	
					        		}
				        		 }else{
				        			d.setNewdemand(0);	
				        		 }
				        		 resultsList.add(d);
							}
				        }
				        res.setResults(resultsList);
				 }else{
	    			if("销售线索挖掘".equals(demandhall.getCategory3())){
		    				HFDemand u=new HFDemand();
				    		u.setCategory1(demandhall.getCategory1());//面向行业
				    		u.setTargecity(demandhall.getTargecity());//目标城市
				    		u.setCategory2(demandhall.getCategory2());////获客渠道
				    		if("1".equals(demandhall.getAuction())){
								strzt=new Integer[]{2,4};
				    			u.setAuction("1");// 1-可竞拍 2- 不可竞拍
				    		}
				    		else if("2".equals(demandhall.getAuction())){
								strzt=new Integer[]{5,6,7};
				    			u.setAuction("2");// 1-可竞拍 2- 不可竞拍
				    		}else{
				    		   strzt=new Integer[]{2,4,5,6,7};
				    		}
				    		u.setStrzt(strzt);//面向行业
				    		u.setPricerange(demandhall.getPricerange());//需求单价 1:0-30  2:30-60  3:60-100  4:100以上
				    		u.setOrderBy(demandhall.getOrderBy());//   剩余量(residualQuantity)  上架日期 (releasetime)   单价(orderprice)
				    		u.setSort(demandhall.getSort());//desc降序 asc 升序
				    		u.setOrdername(demandhall.getKeyword());
				    		u.setDemandid(demandhall.getDemandid()); 
				    		int currentPage=1;
				    		if(StringUtil.isNull(demandhall.getCurrentPage())){
				    			currentPage=1; 
				    		}else{
				    		    currentPage=StringUtil.toInteger(demandhall.getCurrentPage());
				    		}
				    	    u.setCurrentPage(currentPage);
				    		u.setCategory3(demandhall.getCategory3());//业务类型  1-销售线索挖掘  2-数据加工  3-人工客服  
			    		 
			    		    PageResults s= demandDao.getDemandHall(u);
					        res.setPageCount(s.getPageCount());
					        res.setPageNo(s.getPageNo());
					        res.setPageSize(s.getPageSize());
					        res.setCurrentPage(s.getCurrentPage());
					        res.setTotalCount(s.getTotalCount());
					        res.setPageStr(s.getAjaxPageStr());
					        List list=s.getResults();
					        if(list!=null&&list.size()!=0){
					        	for (int i = 0; i < list.size(); i++) {
					        		HFDemand d=(HFDemand) list.get(i);
					        		if(!StringUtil.isNull(d.getReleasetime())){
					              		String releasetime=d.getReleasetime();
						        		long subday=DateUtil.getDaySub(DateUtil.getTime(),releasetime);
						        		subday=-1*subday+1;
						        		if(subday<=5){
						        			d.setNewdemand(1);	
						        		}else{
						        			d.setNewdemand(0);	
						        		}
					        		}else{
					        			d.setNewdemand(0);	
					        		}
								}
					        }
					        res.setResults(list);
	    			}
	    			if("数据加工".equals(demandhall.getCategory3())){
					        HFDatafiltering data=new HFDatafiltering();
		    				data.setServicetype(demandhall.getCategory3());//业务类型
		    				data.setIndustry(demandhall.getCategory1());//行业
		    				data.setCleaningchannel(demandhall.getCategory2());//清洗渠道  获客渠道\
		    				
		    				if("1".equals(demandhall.getAuction())){
								strzt=new Integer[]{2,4};
								data.setAuction("1");// 1-可竞拍 2- 不可竞拍
				    		}
				    		else if("2".equals(demandhall.getAuction())){
								strzt=new Integer[]{5,6,7};
								data.setAuction("2");// 1-可竞拍 2- 不可竞拍
				    		}else{
				    		   strzt=new Integer[]{2,4,5,6,7};
				    		}
		    				data.setStrzt(strzt);//面向行业
		    				data.setPricerange(demandhall.getPricerange());//需求单价 1:0-30  2:30-60  3:60-100  4:100以上
		    				data.setOrderBy(demandhall.getOrderBy());//   剩余量(residualQuantity)  上架日期 (releasetime)   单价(orderprice)
		    				data.setSort(demandhall.getSort());//desc降序 asc 升序
		    				data.setOrdername(demandhall.getKeyword());
		    				data.setPcdid(demandhall.getDemandid()); 
				    		int currentPage=1;
				    		if(StringUtil.isNull(demandhall.getCurrentPage())){
				    			currentPage=1; 
				    		}else{
				    		    currentPage=StringUtil.toInteger(demandhall.getCurrentPage());
				    		}
				    		data.setCurrentPage(currentPage);
				    	    
		    				PageResults s= datafilteringDao.getDatafilterings(data);
		    				
					        res.setPageCount(s.getPageCount());
					        res.setPageNo(s.getPageNo());
					        res.setPageSize(s.getPageSize());
					        res.setCurrentPage(s.getCurrentPage());
					        res.setTotalCount(s.getTotalCount());
					        res.setPageStr(s.getAjaxPageStr());
					        List list=s.getResults();
					        if(list!=null&&list.size()!=0){
					        	for (int i = 0; i < list.size(); i++) {
					        		HFDatafiltering d=(HFDatafiltering) list.get(i);
					        		if(!StringUtil.isNull(d.getReleasetime())){
					              		String releasetime=d.getReleasetime();
						        		long subday=DateUtil.getDaySub(DateUtil.getTime(),releasetime);
						        		subday=-1*subday+1;
						        		if(subday<=5){
						        			d.setNewdemand(1);	
						        		}else{
						        			d.setNewdemand(0);	
						        		}
					        		}else{
					        			d.setNewdemand(0);	
					        		}
					        		d.setCategory3(d.getServicetype());
					        		
					        		d.setCategory1(d.getIndustry());
					        		d.setDemandid(d.getPcdid());
					        		d.setOrderprice(d.getDemandprice());
					        		d.setFishnum(d.getFinishnum());
								}
					        }
					        res.setResults(list);
	    			}
	    			if("人工客服".equals(demandhall.getCategory3())){
	    				res.setResults(results);
	    			}
	    		 }
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	
	/*
	 * 更具状态查询 需求记录
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       
	 * [待上架(待提交/审核中/驳回)  上架中(通过(审核))     
	 */
	public HFDemandRes getDemands(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			        PageResults s= demandDao.getDemands(user);
			        /*
					待上架需求-dsjdemand
					待上架需求 -草稿箱-cgxdemand
					待上架需求 -审核中-shzdemand// 提交和分配中
					上架中需求-sjzdemand
					执行中-zxzorder
					结算中订单-jszorder
					已完成-ywcorder
					被关闭-bgborder
					我的小账本  默认全部   结算中/完成-all
					我的小账本-结算中订单-alljszorder
					我的小账本-已完成-allywcorder
					我的悬赏-order
					 s.getResults()
					*/
			        BigDecimal tolPrice=new BigDecimal("0");
			        String zt= user.getZt();
			        if(("all").equals(zt)||("alljszorder").equals(zt)||("allywcorder").equals(zt)){
			        	tolPrice= demandDao.getSumDemandPrice(user);
			        }
			        
			        res.setTolPrice(tolPrice);
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setPageStr(s.getPageStr());
			        List list=s.getResults();
			        if(list!=null&&list.size()!=0){
			        	for (int i = 0; i < list.size(); i++) {
			        		HFDemand d=(HFDemand) list.get(i);
			        		String packageId=StringUtil.objCovStr(d.getPackageid());
			        		long subDays=0;
			        		/*
			        		//当前用户状态不为4   则价格显示***    当前用户是发包方
			        		if(!"2".equals(user.getJfutype())){//不是接包方
			        			d.setOrderprice(new BigDecimal("***"));
			        			d.setOrderpricetol(new BigDecimal("***"));
			        		}else{
				        		if(user.getJfustate()!=4){//是接包方 但是用户状态没有审核通过
				        			d.setOrderprice(new BigDecimal("***"));
				        			d.setOrderpricetol(new BigDecimal("***"));
				        		}
			        		}
			        		*/
			        		if(StringUtil.isNull(packageId)){//不是套餐
								String endTime=d.getEndtime();//2016-06-22 17:21:52  endtime
								if(!"".equals(endTime)){
									long subDay=DateUtil.getDaySub(endTime,DateUtil.getTime());
									subDays=-1*subDay+1;
								}
							}else{//是套餐
								String endTime=d.getEndtime();
								//需求发布开始时间
								/*
								 * 开始时间换成前端输入时间  String releasetime=d.getReleasetime();
								 */
								String releasetime=d.getBegintime();
								
								String yMd="";
								if(!StringUtil.isNull(releasetime)){
									yMd=DateUtil.getAfterDay(endTime,DateUtil.fomatDate(releasetime));//得到N天后的日期
									/*
									 * 发布日期n天后的日期   -  既取得结算日期
									 * 结算日期和当前日期比较
									 * 结算日期当前日期  进入结算状态修改  修改成结算中  - 5
									 */
									long subDay=DateUtil.getDaySub(yMd,DateUtil.getTime());
									subDays=-1*subDay+1;
								}
							
							}
			        		//subDay 计算出 现在时间到 结束时间的  时间 天数
			        		d.setSuDay(subDays+"");
						}
			        }
			        res.setResults(list);
				
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	
	
	public HFDemandRes getDemandList(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
					List<Object> list= demandDao.getDemandList(user);
			        res.setResults(list);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	/*
	 * customer  首页信息化   初始化方法
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       
	 * [待上架需求(待提交0/审核中1/驳回3)  上架中(通过(审核)2)  待竞拍 2     待完成 4/5   已经完成 6  关闭  7   结算中订单5]
	 * [执行中订单4/5   已完成订单6      被关闭订单7]
	 */
	public HFDemandRes getDemandHome(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
		//	        0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中)     6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
			        //待上架需求   待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
			        Integer[] strzt1 = new Integer[]{0,1,3,7};
			        //待竞拍需求
			        Integer[] strzt2 = new Integer[]{2};
			        //待完成需求
			        Integer[] strzt3 = new Integer[]{4};
			        //待结算需求
			        Integer[] strzt4 = new Integer[]{5};
			        user.setStrzt(strzt4);
			        //待申请需求/已完成
			        Integer[] strzt5 = new Integer[]{6};
			        user.setStrzt(strzt5);
			        
			        user.setStrzt(strzt1);
			        PageResults s= demandDao.getDemands(user);
			        
		//	        0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中)     6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
			        //待上架需求   待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
			        user.setStrzt(strzt1);
			        Long dsjDemandCount= demandDao.getCountDemandByzt(user);
			       
			        user.setStrzt(strzt2);
			        Long djpDemandCount= demandDao.getCountDemandByzt(user);
		
			        user.setStrzt(strzt3);
			        Long dwcDemandCount= demandDao.getCountDemandByzt(user);
			        
			        user.setStrzt(strzt4);
			        Long djsDemandCount= demandDao.getCountDemandByzt(user);
			        
			        user.setStrzt(strzt5);
			        Long dsqDemandCount= demandDao.getCountDemandByzt(user);
			        
			        //通过过的需求2,4,5,6,7
			        Integer[] strzt6 = new Integer[]{2,4,5,6,7};
			        user.setStrzt(strzt6);//截至目前，您在眸事平台上一共发布了 6 个任务
			        Long gfbDemandCount= demandDao.getCountDemandByzt(user);
			        
//			                    发包金额达到 15368 元。
			        BigDecimal gfbDemandTol=demandDao.getSumDemandPrice(user);
			        
			        Integer[] strzt7 = new Integer[]{4,5,6};
			        user.setStrzt(strzt7);//截至目前，您在眸事平台上一共发布了 6 个任务
			        HFDemand fistDemand=demandDao.getDemandByFist(user);
			        
			        
			    	GXPackageManage u=new GXPackageManage();
			    	u.setIsdisable(1);//状态值 1-启用 2-停用
			    	PageResults packageList= packageManageDao.getPackageManageBy(u);
			    	res.setPackageList(packageList.getResults());
			    	
			        res.setDsjDemandCount(dsjDemandCount);
			        res.setDjpDemandCount(djpDemandCount);
			        res.setDwcDemandCount(dwcDemandCount);
			        res.setDjsDemandCount(djsDemandCount);
			        res.setDsqDemandCount(dsqDemandCount);
			        res.setGfbDemandCount(gfbDemandCount);
			        res.setGfbDemandTol(gfbDemandTol);
			        
			        res.setFistDemand(fistDemand);
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setResults(s.getResults());
				
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	/*
	 * 需求大厅和悬赏大厅查询方法
	 */
	public HFDemandRes getDemandAll(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
					String begintime="";
					user.setBegintime(begintime);
					
					String endtime="";
					user.setEndtime(endtime);
			
					String releasetime="";
					user.setReleasetime(releasetime);
					
					String finishtime="";
					user.setReleasetime(finishtime);
			
					BigDecimal minorderpricetol=new BigDecimal("1");//订单总金额  小
					user.setMinorderpricetol(minorderpricetol);
					
					BigDecimal maxorderpricetol=new BigDecimal("1000");//订单总金额  大
					user.setMaxorderpricetol(maxorderpricetol);
					
					String  targecity="";
					user.setTargecity(targecity);//面向城市
					
					String category1="";
					user.setCategory1(category1);//需求类型
					String category2="";
					user.setCategory2(category2);//面向行业
				    String category3="";
				    user.setCategory3(category3);//业务类型
				    
			        String ordername="";
			        user.setOrdername(ordername);//需求名
	        
			        PageResults s= demandDao.getDemandsAll(user);
			        
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setResults(s.getResults());
				
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	/*
	 * customer  首页信息化   初始化方法
	 * (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭     
	 */
	public HFDemandRes getOrderHome(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			
//			        (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭     
					//待审核订单			
			        Integer[] strzt1 = new Integer[]{1,3};
			        
			        //2-通过(审核)	
			        Integer[] strzt2 = new Integer[]{2};
			        
			        //待完成订单/执行中
			        Integer[] strzt3 = new Integer[]{2,4};
			        
			        //结算(付款中)
			        Integer[] strzt4 = new Integer[]{5};
			        user.setStrzt(strzt4);
			        
			        
			        //待审核订单
			        user.setStrzt(strzt1);
			        BigInteger dshOrderCount= demandDao.getCountOrderDemandByzt(user);
			       
			        user.setStrzt(strzt2);
			        BigInteger dzxOrderCount= demandDao.getCountOrderDemandByzt(user);
		
			        user.setStrzt(strzt3);
			        BigInteger zxzCount= demandDao.getCountOrderDemandByzt(user);
			        
			        user.setStrzt(strzt4);
			        BigInteger djsOrderCount= demandDao.getCountOrderDemandByzt(user);
			        
//			        (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭     
//			        Integer[] strzt5 = new Integer[]{1,2,3,4,5};
			        user.setStrzt(null);
			        BigInteger gfbDemandCount= demandDao.getCountOrderDemandByzt(user);
			        BigDecimal gfbDemandTol= demandDao.getSumOrderDemandPrice(user);
			        
			        
			        
			        HJOrderDemand order=new HJOrderDemand();
			        Integer[] strzt7 = new Integer[]{4,5,6};
			        order.setStrzt(strzt7);//截至目前，您在眸事平台上一共发布了 6 个任务
			        HJOrderDemand fistOrderDemand=orderdemandDao.getOrderDemandByFirst(order);
			        res.setFistOrderDemand(fistOrderDemand);
			        res.setGfbDemandCount(Long.parseLong(gfbDemandCount+""));
			        res.setGfbDemandTol(gfbDemandTol);
			        res.setDshOrderCount(dshOrderCount);
			        res.setDzxOrderCount(dzxOrderCount);
			        res.setZxzCount(zxzCount);
			        res.setDjsOrderCount(djsOrderCount);
				
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	/*
	 * 更具状态查询 需求记录
	 * 0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭       
	 * [待上架(待提交/审核中/驳回)  上架中(通过(审核))     
	 */
	public HFDemandRes getOrderDemands(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    HFDemandRes res=new HFDemandRes(code,msg);
		try {
			        PageResults s= demandDao.getOrderDemands(user);
			        List<Object> list=s.getResults();
			        List ordemandList=new ArrayList();
			        for (int i = 0; i < list.size(); i++) {
//			        	[需求标题, 18, 10000, 1000000.00, b9e05566-01be-4328-8a85-fa5b95ee28da, 15f90302eb47472e86a8ed9c4eb9fc24, 2016-06-11 14:04:35, 3]
//			        	u.ordername,u.orderprice, u.releasenum,u.orderpricetol,d.jfuid,d.demandid,d.releasetime,d.jdstate
			        	Object[] a= (Object[]) list.get(i);
			        	
			        	String ordername=StringUtil.objCovStr(a[0]);
			        	Integer beginage=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
			        	Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[2]));
			        	BigDecimal orderprice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[3]));
			        	String jfuid=StringUtil.objCovStr(a[4]);
			        	String demandid=StringUtil.objCovStr(a[5]);
			        	String releasetime=StringUtil.objCovStr(a[6]);
			        	Integer jdstate=(Integer) a[7];
			        	String orderid=StringUtil.objCovStr(a[8]);
			        	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[9]));
			        	HJOrderDemand d=new HJOrderDemand();
			        	
			        	d.setJfuid(jfuid);
			    		d.setDemandid(demandid);;
			    		d.setJdstate(jdstate);
			    		d.setOrdername(ordername);
			    		d.setBeginage(beginage);
			    		d.setOrderprice(orderprice);
			    		
			    		d.setReleasetime(releasetime);
			    		d.setOrderid(orderid);
			    		d.setFishnum(fishnum);
			    		d.setAuctionnum(auctionnum);
			        	ordemandList.add(d);
					}
			        BigDecimal tolPrice=new BigDecimal("0");
			        String zt= user.getZt();
			        if(("all").equals(zt)||("alljszorder").equals(zt)||("allywcorder").equals(zt)){
			        	tolPrice= demandDao.getSumOrderDemandPrice(user);
			        }
			        res.setTolPrice(tolPrice);
			        res.setPageCount(s.getPageCount());
			        res.setPageNo(s.getPageNo());
			        res.setPageSize(s.getPageSize());
			        res.setCurrentPage(s.getCurrentPage());
			        res.setTotalCount(s.getTotalCount());
			        res.setPageStr(s.getPageStr());
			        res.setResults(ordemandList);
				
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}

	
	
	
	
	/*1.4.2  发包方-Head*/
	public DemandHomeRes getDemand_1_4_Home(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    DemandHomeRes res=new DemandHomeRes(code,msg);
		try {
		//	        0未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中)     6-完成(已付款) 7-被关闭       [待上架(待提交/审核中)  上架中(审核通过的需求)]
			        //待上架需求   待上架需求  状态  0-未提交 1-审核中   3-驳回  7-被关闭
			        //待完成需求
			        //通过过的需求2,4,5,6,7
			        Integer[] strzt6 = new Integer[]{2,4,5,6,7};
			        user.setStrzt(strzt6);//  需求发布总量
			        Object[] a= demandDao.getSumDemandOne(user);
//			        sum(u.releasenum) as tolFbl,sum(u.fishnum) as tolWcl, sum(u.paymentmoney) as toljsPrice
			        Integer tolFbl=StringUtil.toInteger(StringUtil.objCovStr(a[0]));//发布量
		        	Integer tolWcl=StringUtil.toInteger(StringUtil.objCovStr(a[1]));//完成量
		        	BigDecimal jsTolPrice=StringUtil.toBigDecimal(StringUtil.objCovStr(a[2]));
//		        	tolWcl=StringUtil.toInteger(StringUtil.objCovStr(a[3]));//换成接收量
		        	
			        res.setTolFbl(tolFbl);//需求发布总量
			        res.setTolWcl(tolWcl);// 成单总量
			        res.setJsTolPrice(jsTolPrice);//结算总金额
		        	
			        //取得当前用户所有的需求信息(状态上架过的) 不分页
			        List<Demand> redemandList=new ArrayList<Demand>();
			        List<HFDemand> demandList=demandDao.getReportDemands(user);
			        for (int i = 0; i < demandList.size(); i++) {
						HFDemand h=(HFDemand) demandList.get(i);
						Demand d=new Demand();
						d.setDemandid(h.getDemandid());
						d.setOrdername(h.getOrdername());
						d.setOrderprice(h.getOrderprice());
						d.setJfuid(h.getJfuid());
						d.setReleasenum(h.getReleasenum());
						d.setFishnum(h.getFishnum());
						d.setApplicationnum(h.getApplicationnum());
						if(null==h.getReleasenum()){
							h.setReleasenum(0);
						}
						if(null==h.getFishnum()){
							h.setFishnum(0);
						}
						float completionPercentage=(float)h.getFishnum()/h.getReleasenum()*100;
						if(completionPercentage>100){
							completionPercentage=100;
						}
						if(completionPercentage<0){
							completionPercentage=0;
						}
						completionPercentage=(float)(Math.round(completionPercentage*100)/100);
					    d.setCompletionPercentage(completionPercentage);
					    d.setBegintime(h.getBegintime());
					    d.setEndtime(h.getEndtime());
					    redemandList.add(d);
			        }
			        res.setRedemandList(redemandList);
			        
			        user.setMonth(DateUtil.getCurrMouth());//取得本月
			        Object[] a1= demandDao.getSumDemandOne(user);
			        Integer thisMonthtolFbl=StringUtil.toInteger(StringUtil.objCovStr(a1[0]));
		        	Integer thisMonthtolWcl=StringUtil.toInteger(StringUtil.objCovStr(a1[1]));
		        	
		            res.setThisMonthtolFbl(thisMonthtolFbl);//本月需求发布总量
			        res.setThisMonthtolWcl(thisMonthtolWcl);//本月成单总量
		        	
			        Integer[] strzt5 = new Integer[]{5};
			        user.setStrzt(strzt5);//待结算金额
			        BigDecimal djsTolPrice=demandDao.getSumDemandPrice(user);
			        res.setDjsTolPrice(djsTolPrice);//待结算金额
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}

	/*1.4.2  发包方-需求动态*/
	@Override
	public DynamicDemandHomeRes get_1_4_Demanddynamics(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    DynamicDemandHomeRes res=new DynamicDemandHomeRes(code,msg);
		try {
			        Integer[] strzt6 = new Integer[]{2,4,5,6,7};
			        user.setStrzt(strzt6);//  需求发布总量
			        List<DynamicDemand> redemandList=new ArrayList<DynamicDemand>();
			        List<HFDemand> demandList=demandDao.getDemanddynamicsTop6(user);
			        if(demandList!=null){
			        	 for (int i = 0; i < demandList.size(); i++) {
								HFDemand h=(HFDemand) demandList.get(i);
								DynamicDemand d=new DynamicDemand();
								d.setDemandid(h.getDemandid());
								d.setOrdername(h.getOrdername());
								d.setOrderpricetol(h.getOrderpricetol());
								d.setJfuid(h.getJfuid());
								d.setReleasenum(h.getReleasenum());
								d.setDemanddescription(h.getDemanddescription());
								if(null==h.getReleasenum()){
									h.setReleasenum(0);
								}
								if(null==h.getApplicationnum()){
									h.setApplicationnum(0);
								}
								float completionPercentage=(float)h.getApplicationnum()/h.getReleasenum()*100;
								if(completionPercentage>100){
									completionPercentage=100;
								}
								if(completionPercentage<0){
									completionPercentage=0;
								}
								completionPercentage=(float)(Math.round(completionPercentage*100)/100);
							    d.setCompletionPercentage(completionPercentage);
							    redemandList.add(d);
					     }
			        }
			        res.setRedemandList(redemandList);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	
	

	
	/*1.4.2  发包方-我的接包方  竞拍榜*/
	public AuctionListDemandHomeRes get_1_4_DemandAuctionList(HFDemand user){
		String code=ERConst.SU_CODE;
	    String msg="";
	    AuctionListDemandHomeRes res=new AuctionListDemandHomeRes(code,msg);
		try {
			        Integer[] strzt6 = new Integer[]{2,4,5,6,7};
			        user.setStrzt(strzt6);//  需求发布总量
			        ArrayList<AuctionListDemand> auctionLis=new ArrayList<AuctionListDemand>();
			        List<Object> demandList=demandDao.getDemandAuctionList(user);
			        boolean is5=false;
			        //break表示跳出整个for循环     continue；// 跳出当前循环，执行下面的循环
			        if(demandList!=null){
			        	 for (int i = 0; i < demandList.size(); i++) {
			        		    Object[]  a=(Object[] ) demandList.get(i);
			        		    AuctionListDemand d=new AuctionListDemand();
				       	        String invitationcode=StringUtil.objCovStr(a[0]);
				       	        Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
				       	    	String orderid=StringUtil.objCovStr(a[2]);
				       	    	String demandid=StringUtil.objCovStr(a[3]);
				       	    	String jfuid=StringUtil.objCovStr(a[4]);
				       	    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
				       	    	BigDecimal completionPercentage=new BigDecimal(0.00);
				       	    	if(a[5]!=null){
				       	    		completionPercentage=StringUtil.toBigDecimal(StringUtil.objCovStr(a[6]));
				       	    	}
				       	    	
				       	    	if("2".equals(user.getJfutype())){
				       	    		if(i<5){
					       	    		d.setNumber((i+1)+"");
						       	    	d.setAuctionnum(auctionnum);
										d.setFishnum(fishnum);
										d.setCompletionPercentage(completionPercentage);
										d.setInvitationcode(invitationcode);
										d.setOrderid(orderid);
										d.setDemandid(demandid);
										d.setJfuid(jfuid);
						       	    	if(jfuid.equals(user.getJfuid())){
						       	    		is5=true;
						       	    	}
						       	    	auctionLis.add(d);
				       	    		}else{
				       	    			if(is5){
				       	    				break;
					       	    		}else{
					       	    			if(jfuid.equals(user.getJfuid())){
							       	    		d.setNumber((i+1)+"");
								       	    	d.setAuctionnum(auctionnum);
												d.setFishnum(fishnum);
												d.setCompletionPercentage(completionPercentage);
												d.setInvitationcode(invitationcode);
												d.setOrderid(orderid);
												d.setDemandid(demandid);
												d.setJfuid(jfuid);
							        		    auctionLis.add(d);
							        		    break;
							       	    	}
					       	    		}
				       	    		}
				       	    	}else{
					       	    	d.setNumber((i+1)+"");
					       	    	d.setAuctionnum(auctionnum);
									d.setFishnum(fishnum);
									d.setCompletionPercentage(completionPercentage);
									d.setInvitationcode(invitationcode);
									d.setOrderid(orderid);
									d.setDemandid(demandid);
									d.setJfuid(jfuid);
				        		    auctionLis.add(d);
				       	    	}
					     }
			        }
			        res.setAuctionList(auctionLis);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	/*1.4.2  接包方- 转换率榜*/
	public AuctionListDemandHomeRes get_1_4_OrderConversionRateList(HFDemand user){
		String code=ERConst.SU_CODE;
	    String msg="";
	    AuctionListDemandHomeRes res=new AuctionListDemandHomeRes(code,msg);
		try {
			        Integer[] strzt6 = new Integer[]{2,4,5,6,7};
			        user.setStrzt(strzt6);//  需求发布总量
			        ArrayList<AuctionListDemand> auctionLis=new ArrayList<AuctionListDemand>();
			        List<Object> demandList=demandDao.getConversionRateList(user);
			        boolean is5=false;
			        //break表示跳出整个for循环     continue；// 跳出当前循环，执行下面的循环
			        if(demandList!=null){
			        	 for (int i = 0; i < demandList.size(); i++) {
			        		    Object[]  a=(Object[] ) demandList.get(i);
			        		    AuctionListDemand d=new AuctionListDemand();
				       	        String invitationcode=StringUtil.objCovStr(a[0]);
				       	    	String orderid=StringUtil.objCovStr(a[2]);
				       	    	String demandid=StringUtil.objCovStr(a[3]);
				       	    	String jfuid=StringUtil.objCovStr(a[4]);
				       	    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
				       	    	BigDecimal conversionRate=new BigDecimal(0.00);
				       	    	if(a[5]!=null){
				       	    		conversionRate=StringUtil.toBigDecimal(StringUtil.objCovStr(a[6]));
				       	    	}
				       	    	
				       	    	if(i<5){
				       	    		d.setNumber((i+1)+"");
									d.setFishnum(fishnum);
									d.setConversionRate(conversionRate);
									d.setInvitationcode(invitationcode);
									d.setOrderid(orderid);
									d.setDemandid(demandid);
									d.setJfuid(jfuid);
					       	    	if(jfuid.equals(user.getJfuid())){
					       	    		is5=true;
					       	    	}
					       	    	auctionLis.add(d);
			       	    		}else{
			       	    			if(is5){
			       	    				break;
				       	    		}else{
				       	    			if(jfuid.equals(user.getJfuid())){
						       	    		d.setNumber((i+1)+"");
											d.setFishnum(fishnum);
											d.setConversionRate(conversionRate);
											d.setInvitationcode(invitationcode);
											d.setOrderid(orderid);
											d.setDemandid(demandid);
											d.setJfuid(jfuid);
						        		    auctionLis.add(d);
						        		    break;
						       	    	}
				       	    		}
			       	    		}				       	    		
					     }
			        }
			        res.setAuctionList(auctionLis);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
	
	/*1.4.2  发包方-我的接包方 完成榜*/
	@Override
	public AuctionListDemandHomeRes get_1_4_DemandCompleteList(HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    AuctionListDemandHomeRes res=new AuctionListDemandHomeRes(code,msg);
		try {
			        Integer[] strzt6 = new Integer[]{2,4,5,6,7};
			        user.setStrzt(strzt6);//  需求发布总量
			        List<AuctionListDemand> auctionLis=new ArrayList<AuctionListDemand>();
			        List<Object> demandList=demandDao.getDemandAuctionList(user);
			        if(demandList!=null){
			        	 for (int i = 0; i < demandList.size(); i++) {
			        		    Object[]  a=(Object[] ) demandList.get(i);
			        		    AuctionListDemand d=new AuctionListDemand();
				       	        String invitationcode=StringUtil.objCovStr(a[0]);
				       	        Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
				       	    	String orderid=StringUtil.objCovStr(a[2]);
				       	    	String demandid=StringUtil.objCovStr(a[3]);
				       	    	String jfuid=StringUtil.objCovStr(a[4]);
				       	    	
				       	    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
				       	    	BigDecimal completionPercentage=new BigDecimal(0.00);
				       	    	if(a[5]!=null){
				       	    		completionPercentage=StringUtil.toBigDecimal(StringUtil.objCovStr(a[6]));
				       	    	}
				       	    	d.setNumber((i+1)+"");
				       	    	d.setAuctionnum(auctionnum);
								d.setFishnum(fishnum);
								d.setCompletionPercentage(completionPercentage);
								
				       	    	d.setInvitationcode(invitationcode);
								d.setOrderid(orderid);
								d.setDemandid(demandid);
								d.setJfuid(jfuid);
				
			        		    auctionLis.add(d);
					     }
			        }
			        res.setAuctionList(auctionLis);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	/*1.4.2  发包方-我的接包方 完成率榜*/
	@Override
	public AuctionListDemandHomeRes get_1_4_DemandCompletionRateList(
			HFDemand user) {
		String code=ERConst.SU_CODE;
	    String msg="";
	    AuctionListDemandHomeRes res=new AuctionListDemandHomeRes(code,msg);
		try {
			        Integer[] strzt6 = new Integer[]{2,4,5,6,7};
			        user.setStrzt(strzt6);//  需求发布总量
			        List<AuctionListDemand> auctionLis=new ArrayList<AuctionListDemand>();
			        List<Object> demandList=demandDao.getDemandAuctionList(user);
			        if(demandList!=null){
			        	 for (int i = 0; i < demandList.size(); i++) {
			        		    Object[]  a=(Object[] ) demandList.get(i);
			        		    AuctionListDemand d=new AuctionListDemand();
				       	        String invitationcode=StringUtil.objCovStr(a[0]);
				       	        Integer auctionnum=StringUtil.toInteger(StringUtil.objCovStr(a[1]));
				       	    	String orderid=StringUtil.objCovStr(a[2]);
				       	    	String demandid=StringUtil.objCovStr(a[3]);
				       	    	String jfuid=StringUtil.objCovStr(a[4]);
				       	    	
				       	    	
				       	    	Integer fishnum=StringUtil.toInteger(StringUtil.objCovStr(a[5]));
				       	    	BigDecimal completionPercentage=new BigDecimal(0.00);
				       	    	if(a[5]!=null){
				       	    		completionPercentage=StringUtil.toBigDecimal(StringUtil.objCovStr(a[6]));
				       	    	}
				       	    	d.setNumber((i+1)+"");
				       	    	d.setAuctionnum(auctionnum);
								d.setFishnum(fishnum);
								d.setCompletionPercentage(completionPercentage);
								
								d.setInvitationcode(invitationcode);
								d.setOrderid(orderid);
								d.setDemandid(demandid);
								d.setJfuid(jfuid);
			        		    auctionLis.add(d);
					     }
			        }
			        res.setAuctionList(auctionLis);
			} catch (Exception e) {
					res.setCode(ERConst.ER_CODE);
					res.setMsg(ERConst.ER_CODE_VALUE+e.toString());
			}
			return res;
	}
	
}
