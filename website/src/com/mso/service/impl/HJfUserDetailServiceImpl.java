package com.mso.service.impl;


import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mso.dao.HFUserDetailDao;
import com.mso.dao.HJUserDetailDao;
import com.mso.dao.IUserDao;
import com.mso.model.HFUserDetail;
import com.mso.model.HJUserDetail;
import com.mso.model.JfUser;
import com.mso.res.HJfUserDetailRes;
import com.mso.service.HJfUserDetailService;
import com.mso.utils.CommonUtil;
import com.mso.utils.DateUtil;

/**
 * 业务实现类
 * @date   2016年5月24日
 */
@Service("hjfUserDetailService")@Transactional
public class HJfUserDetailServiceImpl implements HJfUserDetailService{

	@Autowired
	HFUserDetailDao hfUserDetailDao;
	
	@Autowired
	HJUserDetailDao hjUserDetailDao;
	
	
	@Autowired
	IUserDao userDao;
	
	
	/*
	 * 根据手UserId Event user對象全部操作
	 * */
	public HJfUserDetailRes addHJfUser(JfUser user){
		String Jfutype=user.getJfutype();//1-发包方   2-接包方
		if("1".equals(Jfutype)){//1-发包方   2-接包方
			HFUserDetail par=new HFUserDetail();
			par.setJfuid(user.getJfuid());//用户id
			par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			par.setRealname(user.getRealname());//您的姓名
			par.setCompemail(user.getCompemail());//邮箱
			par.setCompname(user.getCompname());//公司名
			hfUserDetailDao.addHfUser(par);//editHfUser(
		}else{
			HJUserDetail par=new HJUserDetail();
			par.setJfuid(user.getJfuid());//用户id
			par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
			par.setRealname(user.getRealname());//您的姓名
			par.setCompemail(user.getCompemail());//邮箱
			par.setCompname(user.getCompname());//公司名
			hjUserDetailDao.addHJfUser(par);
		}
		return null;
	}
	
	
	
	//返回接发包方邮箱
	public String selectHJfUser(JfUser user){
		String Jfutype=user.getJfutype();//1-发包方   2-接包方
		String emai="";
		if("1".equals(Jfutype)){//1-发包方   2-接包方
			HFUserDetail res=hfUserDetailDao.getUserDetailByFid(user.getJfuid());
			if(null!=res){
				emai=res.getCompemail();
			}
		}else{
			HJUserDetail res=hjUserDetailDao.getUserDetailByFid(user.getJfuid());
			if(null!=res){
				emai=res.getCompemail();
			}
		}
		return emai;
	}
	/*
	 * 根据手Jfuid 修改对象
	 * */
	public HJfUserDetailRes editHJfUser(JfUser user){
		String Jfutype=user.getJfutype();//1-发包方   2-接包方
		if("1".equals(Jfutype)){//1-发包方   2-接包方
			HFUserDetail par=hfUserDetailDao.getUserDetailByFid(user.getJfuid());
			if(par==null){
				par=new HFUserDetail();
				par.setJfuid(user.getJfuid());//用户id
				par.setCompname(user.getCompname());//公司名称/公司全称
				par.setBrandname(user.getBrandname());//品牌名
				par.setCompaddr(user.getCompaddr());//公司地址
				par.setCompind(user.getCompind());//所属行业
				par.setCompwebsite(user.getCompwebsite());//公司网站
				par.setCompimg(user.getCompimg());//公司图片
				par.setContacts(user.getContacts());//联系人
				par.setContactsphone(user.getContactsphone());//联系人电话
				par.setCompemail(user.getCompemail());//电子邮箱
				par.setComplicense(user.getComplicense());//营业执照
				par.setComptaxcer(user.getComptaxcer());//税务登记证
				par.setComporgcode(user.getComporgcode());//组织机构代码
				par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				par.setTrusteeship(0);//是否托管 0-非托管 1-托管
				hfUserDetailDao.addHfUser(par);//editHfUser(
			}else{
				par.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				par.setCompname(user.getCompname());//公司名称/公司全称
				par.setBrandname(user.getBrandname());//品牌名
				par.setCompaddr(user.getCompaddr());//公司地址
				par.setCompind(user.getCompind());//所属行业
				par.setCompwebsite(user.getCompwebsite());//公司网站
				par.setCompimg(user.getCompimg());//公司图片
				par.setContacts(user.getContacts());//联系人
				par.setContactsphone(user.getContactsphone());//联系人电话
				par.setCompemail(user.getCompemail());//电子邮箱
				par.setComplicense(user.getComplicense());//营业执照
				par.setComptaxcer(user.getComptaxcer());//税务登记证
				par.setComporgcode(user.getComporgcode());//组织机构代码
				hfUserDetailDao.editHfUser(par);
			}
		}else{
			HJUserDetail par=hjUserDetailDao.getUserDetailByFid(user.getJfuid());
			if(par==null){
				par=new HJUserDetail();
				par.setJfuid(user.getJfuid());//用户id
				par.setCompname(user.getCompname());//公司名/公司全称
				par.setBrandname(user.getBrandname());//品牌名/公司简称
				par.setCompaddr(user.getCompaddr());//公司地址
				par.setCompind(user.getCompind());// 所属行业/擅长行业
				par.setGoodpro(user.getGoodpro());//擅长项目
				par.setCompwebsite(user.getCompwebsite());//公司网站
				par.setCompanysize(user.getCompanysize());//公司规模
				par.setCompimg(user.getCompimg());////公司图片
				par.setContacts(user.getContacts());//联系人
				par.setContactsphone(user.getContactsphone());//联系人电话
				par.setCompemail(user.getCompemail());//电子邮箱
				par.setQq(user.getQq());//
				par.setHasdb(user.getHasdb());//是否自有数据库  0-无   1-有
				par.setDatacity(user.getDatacity());//数据分布
				par.setAccountname(user.getAccountname());//开户名称
				par.setBankaccount(user.getBankaccount());//开户行
				par.setComaccount(user.getComaccount());//公司账号
				par.setOpeninvoicetype(user.getOpeninvoicetype());//开发票类型  1-增票(一般纳税人) 2- 增票(小规模纳税人) 3-普票
				par.setComplicense(user.getComplicense());//营业执照
				par.setComptaxcer(user.getComptaxcer());//税务登记证
				par.setComporgcode(user.getComporgcode());//组织机构代码
				par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				hjUserDetailDao.addHJfUser(par);
			}else{
				par.setUpdatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				par.setCompname(user.getCompname());//公司名/公司全称
				par.setBrandname(user.getBrandname());//品牌名/公司简称
				par.setCompaddr(user.getCompaddr());//公司地址
				par.setCompind(user.getCompind());// 所属行业/擅长行业
				par.setGoodpro(user.getGoodpro());//擅长项目
				par.setCompwebsite(user.getCompwebsite());//公司网站
				par.setCompanysize(user.getCompanysize());//公司规模
				par.setCompimg(user.getCompimg());////公司图片
				par.setContacts(user.getContacts());//联系人
				par.setContactsphone(user.getContactsphone());//联系人电话
				par.setCompemail(user.getCompemail());//电子邮箱
				par.setQq(user.getQq());//
				par.setHasdb(user.getHasdb());//是否自有数据库  0-无   1-有
				par.setDatacity(user.getDatacity());//数据分布
				par.setAccountname(user.getAccountname());//开户名称
				par.setBankaccount(user.getBankaccount());//开户行
				par.setComaccount(user.getComaccount());//公司账号
				par.setOpeninvoicetype(user.getOpeninvoicetype());//开发票类型  1-增票(一般纳税人) 2- 增票(小规模纳税人) 3-普票
				par.setComplicense(user.getComplicense());//营业执照
				par.setComptaxcer(user.getComptaxcer());//税务登记证
				par.setComporgcode(user.getComporgcode());//组织机构代码
				par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				hjUserDetailDao.editHjUser(par);
			}
		}
		return null;
	}

	
	
	/*
	 * 根据手Jfuid 修改对象editHJfUserHeadUrl
	 * */
	public void editHJfUserHeadUrl(JfUser user){
		String Jfutype=user.getJfutype();//1-发包方   2-接包方
		if("1".equals(Jfutype)){//1-发包方   2-接包方
			HFUserDetail par=hfUserDetailDao.getUserDetailByFid(user.getJfuid());
			if(par==null){
				par=new HFUserDetail();
				par.setJfuid(user.getJfuid());//用户id
				par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				par.setRealname(user.getCompname());//公司名
				par.setHeadurl(user.getHeadurl());
				hfUserDetailDao.addHfUser(par);
			}else{
				par.setHeadurl(user.getHeadurl());
				hfUserDetailDao.editHfUser(par);
			}
		}else{
			HJUserDetail par=hjUserDetailDao.getUserDetailByFid(user.getJfuid());
			if(par==null){
				par=new HJUserDetail();
				par.setJfuid(user.getJfuid());//用户id
				par.setCreatetime(DateUtil.getTime());//获取YYYY-MM-DD HH:mm:ss格式
				par.setRealname(user.getCompname());//公司名
				par.setHeadurl(user.getHeadurl());
				hjUserDetailDao.addHJfUser(par);
			}else{
				par.setHeadurl(user.getHeadurl());
				hjUserDetailDao.editHjUser(par);
			}
		}
	}
	
	
	public Object getFUserById(String jfuid,String jfutype){
		JfUser user=userDao.getUserByFuid(jfuid,null);
		if(null==user){
			return null;
		}
		if("1".equals(user.getJfutype())){//发包方
				HFUserDetail detail=hfUserDetailDao.getUserDetailByFid(jfuid);
				if(detail!=null){
					detail.setHeadurls(CommonUtil.mosaicUserUrl(detail.getHeadurl()));
//					detail.setComplicenses(CommonUtil.mosaicCertificatesUrl(detail.getComplicense()));
//					detail.setComptaxcers(CommonUtil.mosaicCertificatesUrl(detail.getComptaxcer()));
//					detail.setComporgcodes(CommonUtil.mosaicCertificatesUrl(detail.getComporgcode()));
//					detail.setCompimg(CommonUtil.mosaicCertificatesUrl(detail.getCompimg()));
					detail.setJfustate(user.getJfustate());
					if(0==user.getJfustate()){//初始状态
						detail.setIsEditStr("Y");
					}
					if(3==user.getJfustate()){//驳回状态
						detail.setIsEditStr("Y");
					}
					detail.setJfudisable(user.getJfudisable());
					detail.setJfuname(user.getJfuname());
					detail.setApproveremark(user.getApproveremark());
					detail.setJfutype(user.getJfutype());
					detail.setJfuid(user.getJfuid());
				}else{
					detail=new HFUserDetail();
					detail.setJfutype(user.getJfutype());
					detail.setJfuid(jfuid);
				}
				return detail;
		}else{//接包方
				HJUserDetail detail=hjUserDetailDao.getUserDetailByFid(jfuid);
				if(detail!=null){
					detail.setHeadurls(CommonUtil.mosaicUserUrl(detail.getHeadurl()));
//					detail.setComplicenses(CommonUtil.mosaicCertificatesUrl(detail.getComplicense()));
//					detail.setComptaxcers(CommonUtil.mosaicCertificatesUrl(detail.getComptaxcer()));
//					detail.setComporgcodes(CommonUtil.mosaicCertificatesUrl(detail.getComporgcode()));
//					detail.setCompimg(CommonUtil.mosaicCertificatesUrl(detail.getCompimg()));
					
					detail.setJfustate(user.getJfustate());
					if(0==user.getJfustate()){//初始状态
						detail.setIsEditStr("Y");
					}
					if(3==user.getJfustate()){//驳回状态
						detail.setIsEditStr("Y");
					}
					detail.setJfudisable(user.getJfudisable());
					detail.setJfuname(user.getJfuname());
					detail.setApproveremark(user.getApproveremark());
					detail.setJfutype(user.getJfutype());
					detail.setJfuid(user.getJfuid());
				}else{
					detail=new HJUserDetail();
					detail.setJfutype(user.getJfutype());
					detail.setJfuid(jfuid);
				}
				return detail;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public JSONObject getjfUserById(String jfuid){
		JSONObject resobject=new JSONObject();
		JfUser user=userDao.getUserByFuid(jfuid,null);
		if(null==user){
			return null;
		}
		if("1".equals(user.getJfutype())){//发包方
				HFUserDetail detail=hfUserDetailDao.getUserDetailByFid(jfuid);
				if(detail!=null){
					resobject.put("jfustate", user.getJfustate());//接包方/发包方-当前用户信息的状态      0-初始状态(注册未完善资料) 1-填写资料-提交 4-已审核 3-驳回
					resobject.put("jfudisable", user.getJfudisable());//1-启用  2-停用
					resobject.put("jfuname", user.getJfuname());//用户名-用于登录(3-20 位    不区分大小写)
					resobject.put("approveremark", user.getApproveremark());//审核意见
					resobject.put("jfutype", user.getJfutype());//1-发包方   2-接包方
					resobject.put("pid", user.getPid());//是否是子账号       0或者空表示是主账号
					resobject.put("jfuid", user.getJfuid());//接包方/发包方 主键
					
					resobject.put("compname", detail.getCompname());//公司名称/公司全称
					resobject.put("brandname", detail.getBrandname());//品牌名/公司简称
					resobject.put("compaddr", detail.getCompaddr());//公司地址
					resobject.put("compind", detail.getCompind());// 所属行业/擅长行业
					resobject.put("compwebsite", detail.getCompwebsite());//公司网站
					resobject.put("compimg", CommonUtil.mosaicUserUrl(detail.getCompimg()));//公司图片
					resobject.put("contacts", detail.getContacts());//联系人
					resobject.put("contactsphone", detail.getContactsphone());//联系人电话
					resobject.put("compemail", detail.getCompemail());//电子邮箱
					resobject.put("complicense", CommonUtil.mosaicUserUrl(detail.getComplicense()));//营业执照
					resobject.put("comptaxcer", CommonUtil.mosaicUserUrl(detail.getComptaxcer()));//税务登记证
					resobject.put("comporgcode", CommonUtil.mosaicUserUrl(detail.getComporgcode()));//组织机构代码
					
					resobject.put("goodpro", detail.getGoodpro());//擅长项目
					resobject.put("companysize", detail.getCompanysize());//公司规模
//					resobject.put("qq", detail.getqq());//qq
//					resobject.put("hasdb", detail.gethasdb());//是否自有数据库  0-无   1-有
					resobject.put("datacity", detail.getDatacity());//数据分布城市  多个，隔开
					resobject.put("accountname", detail.getAccountname());//开户名称
					resobject.put("bankaccount", detail.getBankaccount());//开户行
					resobject.put("comaccount", detail.getComaccount());//公司账号
//					resobject.put("openinvoicetype", detail.getopeninvoicetype());//开发票类型  1-增票(一般纳税人) 2- 增票(小规模纳税人) 3-普票
				}else{
					detail=new HFUserDetail();
					resobject.put("jfustate", user.getJfustate());//账号状态
					resobject.put("jfudisable", user.getJfudisable());//账号状态
					resobject.put("jfuname", user.getJfuname());//账号状态
					resobject.put("approveremark", user.getApproveremark());//账号状态
					resobject.put("jfutype", user.getJfutype());//账号状态
					resobject.put("pid", user.getPid());//账号状态
					resobject.put("jfuid", user.getJfuid());
				}
				return resobject;
		}else{//接包方
				HJUserDetail detail=hjUserDetailDao.getUserDetailByFid(jfuid);
				if(detail!=null){
					
					resobject.put("jfustate", user.getJfustate());//接包方/发包方-当前用户信息的状态      0-初始状态(注册未完善资料) 1-填写资料-提交 4-已审核 3-驳回
					resobject.put("jfudisable", user.getJfudisable());//1-启用  2-停用
					resobject.put("jfuname", user.getJfuname());//用户名-用于登录(3-20 位    不区分大小写)
					resobject.put("approveremark", user.getApproveremark());//审核意见
					resobject.put("jfutype", user.getJfutype());//1-发包方   2-接包方
					resobject.put("pid", user.getPid());//是否是子账号       0或者空表示是主账号
					resobject.put("jfuid", user.getJfuid());//接包方/发包方 主键
					
					resobject.put("compname", detail.getCompname());//公司名称/公司全称
					resobject.put("brandname", detail.getBrandname());//品牌名/公司简称
					resobject.put("compaddr", detail.getCompaddr());//公司地址
					resobject.put("compind", detail.getCompind());// 所属行业/擅长行业
					resobject.put("compwebsite", detail.getCompwebsite());//公司网站
					resobject.put("compimg", CommonUtil.mosaicUserUrl(detail.getCompimg()));//公司图片
					resobject.put("contacts", detail.getContacts());//联系人
					resobject.put("contactsphone", detail.getContactsphone());//联系人电话
					resobject.put("compemail", detail.getCompemail());//电子邮箱
					resobject.put("complicense", CommonUtil.mosaicUserUrl(detail.getComplicense()));//营业执照
					resobject.put("comptaxcer", CommonUtil.mosaicUserUrl(detail.getComptaxcer()));//税务登记证
					resobject.put("comporgcode", CommonUtil.mosaicUserUrl(detail.getComporgcode()));//组织机构代码
					resobject.put("goodpro", detail.getGoodpro());//擅长项目
					resobject.put("companysize", detail.getCompanysize());//公司规模
					resobject.put("qq", detail.getQq());//qq
					resobject.put("hasdb", detail.getHasdb());//是否自有数据库  0-无   1-有
					resobject.put("datacity", detail.getDatacity());//数据分布城市  多个，隔开
					resobject.put("accountname", detail.getAccountname());//开户名称
					resobject.put("bankaccount", detail.getBankaccount());//开户行
					resobject.put("comaccount", detail.getComaccount());//公司账号
					resobject.put("openinvoicetype", detail.getOpeninvoicetype());//开发票类型  1-增票(一般纳税人) 2- 增票(小规模纳税人) 3-普票
				}else{
					resobject.put("jfustate", user.getJfustate());//账号状态
					resobject.put("jfudisable", user.getJfudisable());//账号状态
					resobject.put("jfuname", user.getJfuname());//账号状态
					resobject.put("approveremark", user.getApproveremark());//账号状态
					resobject.put("jfutype", user.getJfutype());//账号状态
					resobject.put("pid", user.getPid());//账号状态
					resobject.put("jfuid", user.getJfuid());
				}
				return resobject;
		}
	}
}
