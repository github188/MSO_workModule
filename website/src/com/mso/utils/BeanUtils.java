package com.mso.utils;

import java.math.BigDecimal;

import com.mso.input.DatafilteringPut;
import com.mso.input.DemandPut;
import com.mso.model.HFDatafiltering;
import com.mso.model.HFDemand;
import com.mso.model.Hfp;

public class BeanUtils {
	
	

//	 修改	
	 public static HFDemand demandPutToHFDemand(HFDemand updem,DemandPut p,int i)  {
			if(3==updem.getFdstate()){//驳回再次提交
				updem.setDistributionstate(5);
	   		}
	
			updem.setPackageid(p.getPackageid());
			updem.setCategory1(p.getCategory1());
			updem.setCategory2(p.getCategory2());
			updem.setDemand(p.getDemand());
			updem.setOrdername(p.getOrdername());
			
			    
			if(null!=p.getAreaCityList().get(i).getTargecity()){
				updem.setTargecity(p.getAreaCityList().get(i).getTargecity());	
			}else{
				updem.setTargecity("");	
			} 
			if(null!=p.getAreaCityList().get(i).getSubdescription()){
				updem.setSubdescription(p.getAreaCityList().get(i).getSubdescription());	
			}else{
				updem.setSubdescription("");	
			} 
			if(null!=p.getAreaCityList().get(i).getReleasenum()){
				updem.setReleasenum(p.getAreaCityList().get(i).getReleasenum());
			}else{
				updem.setReleasenum(0);
			}
			if(null!=p.getAreaCityList().get(i).getOrderprice()){
				updem.setOrderprice(p.getAreaCityList().get(i).getOrderprice());
			}else{
				updem.setOrderprice(new BigDecimal(0));
			}
			if(null!=p.getAreaCityList().get(i).getOrderprice()&&null!=p.getReleasenum()){
				updem.setOrderpricetol(p.getAreaCityList().get(i).getOrderprice().multiply(new BigDecimal(p.getReleasenum())));	
			}else{
				updem.setOrderpricetol(new BigDecimal(0));	
			}
			
			
		    if("教育培训".equals(p.getCategory1())){
				if(null!=p.getAreaCityList().get(i).getCityprice()){
					updem.setCityprice(p.getAreaCityList().get(i).getCityprice());
				}else{
					updem.setCityprice(new BigDecimal(0));
				}
		    }
		    if("教育培训".equals(p.getCategory1())){
		    	updem.setTwolevindustry(p.getTwolevindustry());//教育培训   二级行业
		    	updem.setThreelevindustry(p.getThreelevindustry());//教育培训   三级行业
		    	updem.setCustomlabel(p.getCustomlabel());// customLabel json 格式数据
		    }
		    
			updem.setPaymentstandard(p.getPaymentstandard());
			updem.setTargethumen(p.getTargethumen());
			updem.setBeginage(p.getBeginage());
			updem.setEndage(p.getEndage());
			updem.setFdstate(p.getFdstate());
			updem.setProductname(p.getProductname());
			updem.setBegintime(p.getBegintime());
			updem.setCategory3(p.getCategory3());//业务类型
			updem.setProductaccessories(p.getProductaccessories());//产品附件
			updem.setDemanddescription(p.getDemanddescription());//需求介绍
			updem.setStandardoperation(p.getStandardoperation());
			updem.setOtherreport(p.getOtherreport());
			updem.setEndtime(p.getEndtime());
			updem.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			updem.setXsxsurl(p.getXsxsurl());
			return updem;
	 }
	 
	 
//	 新增
	 public static HFDemand demandPutToHFDemand(DemandPut p)  {
		    HFDemand demandPut=new HFDemand();
			
		    demandPut.setPid(p.getPid());
		    demandPut.setPackageid(p.getPackageid());
			demandPut.setCategory1(p.getCategory1());
			demandPut.setCategory2(p.getCategory2());
			demandPut.setDemandtype(p.getDemandtype());
			demandPut.setDemand(p.getDemand());
			demandPut.setOrdername(p.getOrdername());
			demandPut.setTargethumen(p.getTargethumen());
			demandPut.setBeginage(p.getBeginage());
			demandPut.setEndage(p.getEndage());
			demandPut.setDistributionstate(0);//初始化后台数据状态
			demandPut.setFishnum(0);
			demandPut.setApplicationnum(0);
			demandPut.setFdstate(p.getFdstate());
			demandPut.setEndtime(p.getEndtime());
			demandPut.setProductname(p.getProductname());
			demandPut.setBegintime(p.getBegintime());
			demandPut.setCategory3(p.getCategory3());//业务类型
			demandPut.setDemanddescription(p.getDemanddescription());//需求介绍
			demandPut.setStandardoperation(p.getStandardoperation());
			demandPut.setOtherreport(p.getOtherreport());
			demandPut.setPleader(p.getPleader());
			demandPut.setPphone(p.getPphone());
			demandPut.setJfuid(p.getJfuid());
			demandPut.setXsxsurl(p.getXsxsurl());
			demandPut.setProductaccessories(p.getProductaccessories());//产品附件
			demandPut.setOtherreport(p.getOtherreport());//其他附件url/目标客户名单
			demandPut.setXsxsurl(p.getXsxsurl());//销售线索url
			demandPut.setStandardoperation(p.getStandardoperation());//套餐/标准话术url
			demandPut.setUpdatetime("");
		    return demandPut;
		 }
		 
	 //新增/修改
	 public static Hfp demandPutToHfp(DemandPut p,Hfp hfp)  {
		 if(null!=hfp){
				if(3==hfp.getFdstate()){//驳回再次提交
					hfp.setDistributionstate(5);
		   		}
				hfp.setFdstate(p.getFdstate());
			 	hfp.setDemandname(p.getOrdername());
				hfp.setDemanddescription(p.getDemanddescription());
				hfp.setPaymentstandard(p.getPaymentstandard());
				hfp.setServicetype(p.getCategory3());
				hfp.setBegintime(p.getBegintime());
				hfp.setEndtime(p.getEndtime());
				hfp.setPleader(p.getPleader());
				hfp.setPphone(p.getPphone());
				hfp.setUpdatetime(DateUtil.getTime());
				hfp.setPackageid(p.getPackageid());
				hfp.setIndustry(p.getCategory1());
				hfp.setProductaccessories(p.getProductaccessories());//产品附件
				hfp.setOtherreport(p.getOtherreport());//其他附件url/目标客户名单
				hfp.setXsxsurl(p.getXsxsurl());//销售线索url
				hfp.setStandardoperation(p.getStandardoperation());//套餐/标准话术url
//				hfp.setTrusteeship(0);//是否托管 0-非托管 1-托管
				
				if("教育培训".equals(p.getCategory1())){
					hfp.setReleasenum(p.getReleasenum());
					hfp.setDemandpricetol(p.getDemandpricetol());
					hfp.setTwolevindustry(p.getTwolevindustry());
					hfp.setThreelevindustry(p.getThreelevindustry());
					hfp.setCustomlabel(p.getCustomlabel());
				}
		 }else{
			 	hfp=new Hfp();
			    hfp.setDemandname(p.getOrdername());
				hfp.setDemanddescription(p.getDemanddescription());
				hfp.setFdstate(p.getFdstate());
				hfp.setJfuid(p.getJfuid());
				hfp.setDemandtype(p.getDemandtype());
				hfp.setPackageid(p.getPackageid());
				hfp.setFavorableway(p.getFavorableway());
				hfp.setPaymentstandard(p.getPaymentstandard());
				hfp.setServicetype(p.getCategory3());
				hfp.setBegintime(p.getBegintime());
				hfp.setEndtime(p.getEndtime());
				hfp.setPleader(p.getPleader());
				hfp.setPphone(p.getPphone());
				
				hfp.setPaymentmoney(new BigDecimal("0"));
				hfp.setPaymentnum(0);
				hfp.setFinishnum(0);
				hfp.setApplicationnum(0);
				hfp.setDistributionstate(0);//未分配
				hfp.setPaymenttime("");
				hfp.setReleasetime("");
				hfp.setRemark("");
				hfp.setUpdatetime("");
				hfp.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				hfp.setPid(DateUtil.getIdDay());
				hfp.setPause(0);
				hfp.setPausedescription("");
				hfp.setIndustry(p.getCategory1());
				hfp.setProductaccessories(p.getProductaccessories());//产品附件
				hfp.setOtherreport(p.getOtherreport());//其他附件url/目标客户名单
				hfp.setXsxsurl(p.getXsxsurl());//销售线索url
				hfp.setStandardoperation(p.getStandardoperation());//套餐/标准话术url
//				hfp.setTrusteeship(0);//是否托管 0-非托管 1-托管
				
				if("教育培训".equals(p.getCategory1())){
					hfp.setReleasenum(p.getReleasenum());
					hfp.setDemandpricetol(p.getDemandpricetol());
					hfp.setTwolevindustry(p.getTwolevindustry());
					hfp.setThreelevindustry(p.getThreelevindustry());
					hfp.setCustomlabel(p.getCustomlabel());
				}
		 }
		 return hfp;
	}
	 
	 
	 
	 
	 
	 
	 
	 //新增
	 public static Hfp datafilteringPutToHfp(DatafilteringPut p,Hfp up)  {
		 if(null!=up){
				if(3==up.getFdstate()){//驳回再次提交
					up.setDistributionstate(5);
		   		}
				up.setDemandname(p.getOrdername());
				up.setDemanddescription(p.getDemanddescription());
				up.setPaymentstandard(p.getPaymentstandard());
				up.setServicetype(p.getServicetype());
				up.setBegintime(p.getBegintime());
				up.setEndtime(p.getEndtime());
				up.setPleader(p.getPleader());
				up.setPphone(p.getPphone());
				up.setUpdatetime(DateUtil.getTime());
				up.setPackageid(p.getPackageid());
				up.setReleasenum(StringUtil.toInteger(p.getReleasenum()+""));
				up.setDemandprice(StringUtil.toBigDecimal(p.getDemandprice()+""));
				if(null!=p.getDemandprice()&&null!=p.getReleasenum()){
					up.setDemandpricetol(p.getDemandprice().multiply(new BigDecimal(p.getReleasenum())));	
				}else{
					up.setDemandpricetol(new BigDecimal(0));	
				}
				up.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				up.setXsxsurl(p.getXsxsurl());
				up.setStandardoperation(p.getStandardoperation());
				up.setOtherreport(p.getOtherreport());
		 }else{
				up=new Hfp();
				up.setDemandname(p.getOrdername());
				up.setDemanddescription(p.getDemanddescription());
				up.setFdstate(p.getFdstate());
				up.setJfuid(p.getJfuid());
				up.setDemandtype(p.getDemandtype());
				up.setPackageid(p.getPackageid());
				
				if(null!=p.getDemandprice()){
					up.setDemandprice(StringUtil.toBigDecimal(p.getDemandprice()+""));
				}else{
					up.setDemandprice(new BigDecimal(0.00));
				}
				if(null!=p.getDemandprice()&&null!=p.getReleasenum()){
					up.setDemandpricetol(p.getDemandprice().multiply(new BigDecimal(p.getReleasenum())));	
				}else{
					up.setDemandpricetol(new BigDecimal(0));	
				}
				
				if(null!=p.getReleasenum()){
					up.setReleasenum(StringUtil.toInteger(p.getReleasenum()+""));
				}else{
					up.setReleasenum(0);
				}
			
				up.setFavorableway(p.getFavorableway());
				up.setPaymentstandard(p.getPaymentstandard());
				up.setServicetype(p.getServicetype());
				up.setBegintime(p.getBegintime());
				up.setEndtime(p.getEndtime());
				up.setPleader(p.getPleader());
				up.setPphone(p.getPphone());
				up.setCreatetime(DateUtil.getTime());
				up.setPaymentmoney(new BigDecimal("0"));
				up.setPaymentnum(0);
				up.setFinishnum(0);
				up.setApplicationnum(0);
				up.setDistributionstate(0);//未分配
				up.setPaymenttime("");
				up.setReleasetime("");
				up.setRemark("");
				up.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				up.setPid(DateUtil.getIdDay());
				
				up.setXsxsurl(p.getXsxsurl());
				up.setStandardoperation(p.getStandardoperation());
				up.setOtherreport(p.getOtherreport());
				up.setPause(0);
				up.setPausedescription("");
		 }
		 return up;
	}
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
//	 新增 HFDatafiltering
	 public static HFDatafiltering datafilteringPutToHFDemand(DatafilteringPut p)  {
		 	HFDatafiltering demandPut=new HFDatafiltering();
			demandPut.setPcdid(DateUtil.getIdDay());
			demandPut.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
		    demandPut.setPid(p.getPid());
		    demandPut.setServicetype(p.getServicetype());
			demandPut.setIndustry(p.getIndustry());
			demandPut.setCleaningchannel(p.getCleaningchannel());
			demandPut.setDemandtype(p.getDemandtype());
			demandPut.setPleader(p.getPleader());
			demandPut.setPphone(p.getPphone());
			demandPut.setJfuid(p.getJfuid());
			demandPut.setPackageid(p.getPackageid());
			demandPut.setOrdername(p.getOrdername());
			demandPut.setDemanddescription(p.getDemanddescription());
			demandPut.setFdstate(p.getFdstate());
			demandPut.setDistributionstate(0);
			demandPut.setJfutype(p.getJfutype());
			
			
			if(null!=p.getDemandprice()){
				demandPut.setDemandprice(StringUtil.toBigDecimal(p.getDemandprice()+""));
			}else{
				demandPut.setDemandprice(new BigDecimal(0));
			}
			if(null!=p.getDemandprice()){
				demandPut.setReleasenum(StringUtil.toInteger(p.getReleasenum()+""));
			}else{
				demandPut.setReleasenum(0);
			}
			if(null!=p.getDemandprice()&&null!=p.getReleasenum()){
				demandPut.setDemandpricetol(p.getDemandprice().multiply(new BigDecimal(p.getReleasenum())));	
			}else{
				demandPut.setDemandpricetol(new BigDecimal(0));	
			}
			demandPut.setJbfprice(demandPut.getDemandprice());
			demandPut.setJbfpricetol(demandPut.getDemandpricetol());
			
			demandPut.setBegintime(p.getBegintime());
			demandPut.setEndtime(p.getEndtime());
			demandPut.setXsxsurl(p.getXsxsurl());
			demandPut.setDistributionstate(0);//初始化后台数据状态
			demandPut.setApplicationnum(0);
			demandPut.setFinishtime("");
			demandPut.setRemark("");
			demandPut.setFinishnum(0);
			demandPut.setPaymenttime("");
			demandPut.setPaymentmoney(new BigDecimal("0"));
			demandPut.setPaymentnum(0);
			demandPut.setBegintime(p.getBegintime());
			demandPut.setFavorableway(0);
			demandPut.setDemanddescription(p.getDemanddescription());//需求介绍
			demandPut.setPaymentstandard(p.getPaymentstandard());
			demandPut.setXsxsurl(p.getXsxsurl());
			demandPut.setStandardoperation(p.getStandardoperation());
			demandPut.setOtherreport(p.getOtherreport());
			
			demandPut.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			demandPut.setUpdatetime("");
		    return demandPut;
		 }
	 
}
