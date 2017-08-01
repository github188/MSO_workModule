var oJfuid;
var oDemandid;
var regionType=[2,1,4];//测试数据
var s = window.location.hash;
var pid=s.split('#')[1];//测试数据
var orderid=s.split('#')[1];
var demandid=s.split('#')[1];

var domain = "";
//var domain = "http://192.168.2.11";
var domain = "https://www.mshuoke.com";
				/*https://gateway.mshuoke.com*/
var domain137 = "https://gateway.mshuoke.com";
var domainDown = "http://res.mshuoke.com/";//下载前缀
var domainDownShort = "http://res.mshuoke.com/";//下载前缀
var serverUrlpre = domain137 + '/quality';//"https://back.mshuoke.com";//上传正式库//
//var serverUrlpre = "http://192.168.2.33:8091";//上传正式库//

var oPidDel;
var oLogin = "/user_toLogin?jfuname={jfuname}&jfupassword={jfupassword}";//首页头部用户名，邀请码，头像
var midGetHead = "/1_4_home/{jfuid}/getHead";//首页头部6块信息
var midDemandDynamics = "/1_4_home/{jfuid}/demandDynamics";//首页需求动态
var midDemandAuctionList = "/1_4_home/{demandid}/demandAuctionList";//我的发包方-竞拍榜
var midCompleteList = "/1_4_home/{demandid}/completeList";//我的发包方-完成榜
var midCompletionRateList = "/1_4_home/{demandid}/completionRateList";//我的发包方-完成率榜
var midDemandReport = "/1_4_home/{demandid}/demandReport";//我的需求-统计图
var midPackageDetails = "/getGxPackageManagePid/{pid}_htm";//发布需求套餐套餐
var midPackage = "/getGxPackageManage/{servicetype}_htm";
var midDel = "/1_5/{pid}/delDemandByPid";//删除草稿箱
var midOrderDetail="/{jfuid}/OrderDetail/{orderid}";
//首页
var midGetHead1 = "/1_4_home/{jfuid}/grossIncome";//首页头部6块信息
var midGetHead2 = "/1_4_home/{jfuid}/totalBidorder";//首页头部6块信息
var midGetHead3 = "/1_4_home/{jfuid}/totalOrderSettlement";//首页头部6块信息
var midGetHead4 = "/1_4_home/{jfuid}/thisMonthRevenue";//首页头部6块信息
var midGetHead5 = "/1_4_home/{jfuid}/thisMonthOrderQuantityCompleted";//首页头部6块信息
var midGetHead6 = "/1_4_home/{jfuid}/residualOrderQuantity";//首页头部6块信息
var midOrderReport = "/1_4_home/{demandid}/orderReport";
var midOrderProfileSelect = "/1_4_home/{jfuid}/orderProfileSelect";
var midOrderAuctionList = "/1_4_home/{jfuid}/{demandid}/orderAuctionList";
var midOrderConversionRateList = "/1_4_home/{jfuid}/{demandid}/orderConversionRateList";
var midHistoricalOrderSummary = "/1_4_home/{jfuid}/{yy}/historicalOrderSummary";
var midUploadSchedule =  "/uploadProgress/{jfuid}/{orderid}";//订单成单报告进度查询

var demandList = "/getHfps";//需求列表
var toRegoster="/user_toRegoster";//注册接口
var telCode="/user/telCode";//手机号验证码
var emailCode ="/user/emailCode";//邮箱验证
var auctionOrder = "/auctionOrder"; //竞拍订单(新增订单)
var uploadSingleReport="/uploadSingleReport";

var reportj="/report/j";//接包方每日报表
var reportf="/report/f";//发包方每日报表

var headurl="/user/headurl";//设置头像

//邀请码显示接包方邀请的接包方列表
var jfuinvitationcode = "/user/jfuinvitationcode/{jfuinvitationcode}";

//重置密码
var resetPassword="/user/resetPassword";
var intentiontourists_tofAddJson="/intentiontourists_tofAddJson";
var demandDetail = "/demandDetail/{demandid}";
var getBaseRegionType="/getBaseRegionType/{regionType}";//查询城市，省份和区域
var getDetailHfp="/{pid}/getDetailHfp";//需求详情
var information="/user/j/information";
var informationSeach="/user/information/{jfuid}";

//var iDemandid = ["20160721105121937","20160822053617565"];
//使用h5 sessionStorage 给jfuid赋值
var oUname = sessionStorage.getItem("jfuname");
var oPwd = sessionStorage.getItem("jfupassword");
var oJfuid = sessionStorage.getItem("jfuid");
var oDemandid = sessionStorage.getItem("demandid");
var oPid = sessionStorage.getItem("pid");

//var urlLogin = domain + oLogin.format({jfuname:oUname,jfupassword:oPwd});//首页头部用户名，邀请码，头像地址
var urlLogin = domain + "/user_toLogin";//首页头部用户名，邀请码，头像地址
var urlLogout = domain + "/loginOut";//登出
var urlGetHead = domain + midGetHead.format({jfuid:oJfuid});//首页头部6块信息最终生成地址
var urlDemandDynamics = domain + midDemandDynamics.format({demandid:oDemandid});//首页需求动态最终生成地址
var urlPackageDetails = domain + midPackageDetails.format({pid:oPid});
//注册
var urlToRegoster =  domain + toRegoster;

//手机号验证码
var urlTelCode=domain + telCode;
//邮箱验证
var urlEmailCode =domain + emailCode;
var urlAuctionOrder= domain + auctionOrder;

//重置密码
var urlResetPassword =domain + resetPassword;
//子需求详情
var urlDemandDetail = domain + demandDetail.format({demandid:demandid});
var urlReportj=domain + reportj;
var urlReportf=domain + reportf;
var urlJfuinvitationcode = domain + jfuinvitationcode.format({jfuinvitationcode:sessionStorage.getItem("invitationcode")});//邀请码

//发包方新增意向客户
var urlIntentiontourists_tofAddJson= domain + "/intentiontourists_tofAddJson";
//接包方新增意向客户
var urlIntentiontourists_tojAddJson= domain + "/intentiontourists_tojAddJson";
var urlInformation=domain +information;
var UrlInformationSeach=domain +informationSeach.format({jfuid:localStorage.getItem("jfuid")});
//首页
var urlGetHead1 = domain + midGetHead1.format({jfuid:oJfuid});//首页头部6块信息最终生成地址
var urlGetHead2 = domain + midGetHead2.format({jfuid:oJfuid});//首页头部6块信息最终生成地址
var urlGetHead3 = domain + midGetHead3.format({jfuid:oJfuid});//首页头部6块信息最终生成地址
var urlGetHead4 = domain + midGetHead4.format({jfuid:oJfuid});//首页头部6块信息最终生成地址
var urlGetHead5 = domain + midGetHead5.format({jfuid:oJfuid});//首页头部6块信息最终生成地址
var urlGetHead6 = domain + midGetHead6.format({jfuid:oJfuid});//首页头部6块信息最终生成地址
//首页

var servicetype = sessionStorage.getItem("servicetype");
var urlPackage = domain + midPackage.format({servicetype:servicetype});
var urlPackageSubmit =  domain + "/1_5/addOrUpdateCustomerDemand";
var urlDateSubmit =  domain + "/1_5/addOrUpdateDatafiltering";
var urlDel = domain + midDel.format({pid:oPidDel});
var urlOrderProfileSelect = domain + midGetHead.format({jfuid:oJfuid});//发包方-订单概况(我的订单-下拉选择框)
var urlUploadSchedule =  domain + midUploadSchedule.format({jfuid:oJfuid,orderid:orderid});//订单成单报告进度查询
//接包方
var  urlOrderProfileSelect1 = domain + midOrderProfileSelect.format({jfuid:oJfuid});//接包方-订单概况(我的订单-下拉选择框)

var urlCity = domain + getBaseRegionType.format({regionType:regionType[0]});//查询城市
var urlProvince = domain + getBaseRegionType.format({regionType:regionType[1]});//查询省份
var urlArea = domain + getBaseRegionType.format({regionType:regionType[2]});//查询区域
var urlGetDetailHfp=domain + getDetailHfp.format({pid:pid});//需求详情
var urlOrderDetail=domain + midOrderDetail.format({jfuid:oJfuid,orderid:orderid});//订单详情
var urlUploadSingleReport = domain + uploadSingleReport;
var urlHeadurl = domain + headurl;

function urlDemandReport(){//发包方-订单概况每日日提交量/质检成功量
	return domain + midDemandReport.format({demandid:demandid});
}
function urlDemandAuctionList(){//发包方-竞拍榜
	return domain + midDemandAuctionList.format({demandid:demandid});
}
function urlCompleteList(){//发包方-完成榜
	return domain + midCompleteList.format({demandid:demandid});
}
function urlCompletionRateList(){//发包方-完成率榜
	return domain + midCompletionRateList.format({demandid:demandid});
}
//接包方
function urlOrderReport(){//接包方-订单概况每日日提交量/质检成功量
	return domain + midOrderReport.format({demandid:demandid});
}
function urlOrderAuctionList(){//接包方-竞拍量榜
	return domain + midOrderAuctionList.format({jfuid:oJfuid,demandid:demandid});
}
function urlOrderConversionRateList(){//接包方-转换率榜
	return domain + midOrderConversionRateList.format({jfuid:oJfuid,demandid:demandid});
}
function urlHistoricalOrderSummary(){
	var optionText=$("#main1 .date select option:selected").length!=0?$("#main1 .date select option:selected").text():2016;
	return domain + midHistoricalOrderSummary.format({jfuid:oJfuid,yy:optionText});
};//接包方-历史订单汇总


var draftPid = "customerDateEdit.html#" + sessionStorage.getItem("pid");
var draftPidD = "new_demand_copy.html#" + sessionStorage.getItem("pid");

var visitRecord = domain + "/1_5/visitRecord";//首页-页头
var urlNotice = domain + "/homepage/notice";//首页-产品公告
var urlHot = domain + "/homepage/hotdemand";//首页-热门需求
var urlStatistical = domain + "/homepage/statistical";//首页-热门需求
var urlBottom = domain + "/homepage/bottom";//官网首页底部数据
var urlFinfo = domain + "/user/f/information";//发包方-资料完善
var midCinfo = "/user/information/{jfuid}";//发包方-查询资料
var urlCinfo = domain + midCinfo.format({jfuid:oJfuid});//发包方-查询资料
var urlPswd = domain + "/user/password";//更改密码
var midDemandList = domain + "/orderlist/{jfuid}/{classify}/{jdstate}";//我的订单
//var urlDemandList = domain + midDemandList.format({jfuid:oJfuid,classify:classify,jdstate:jdstate});
var midDemandDetail = "/demandDetail/{demandid}";//子需求详情，标签
var urlDemandDetail= domain + midDemandDetail.format({demandid:demandid});//子需求详情，标签
var urlProduction= domain137 + "/pasf/intentioncustomer";//产品页提交信息


var midCompanyInfo = "/quality/{userid}/enterpriseinfo";//企业认证
//var urlCompanyInfo = domain137 + midCompanyInfo.format({jfuid:oJfuid});//企业认证


var key1 = 'm';
var key2 = 's';
var key3 = 'o';

function msoLoginOut(callBack){
	 callBack = callBack || function (){};
	 $.ajax({
		type:"post",
		url:urlLogout,
		async:true,
			contentType:"application/x-www-form-urlencoded;charset=utf-8",
			dataType: "json",
			success:function(data){
			 //  console.log(data);
				if(data.code=="Y"){
					$.cookie('jfuid', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
					$.cookie('showName', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
					
					if(sessionStorage.getItem("remember")=="1"){
						sessionStorage.removeItem("showName");//显示用户名
						sessionStorage.removeItem("invitationcode");//邀请码
						sessionStorage.removeItem("headurls");//用户头像url
						sessionStorage.removeItem("compname");//公司名
						sessionStorage.removeItem("jfuid");//用户id
						sessionStorage.removeItem("compemail");//邮箱
						sessionStorage.removeItem("pid");//父账号id
						sessionStorage.removeItem("realname");//昵称
						sessionStorage.removeItem("jfustate");//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
						sessionStorage.removeItem("jfutype");//用户类型 1 发包方 2接包方
						sessionStorage.removeItem("jfuname");//用户名
						sessionStorage.removeItem("logontimes");//登录次数


						localStorage.removeItem("showName");//显示用户名
						localStorage.removeItem("invitationcode");//邀请码
						localStorage.removeItem("headurls");//用户头像url
						localStorage.removeItem("compname");//公司名
						localStorage.removeItem("jfuid");//用户id
						localStorage.removeItem("compemail");//邮箱
						localStorage.removeItem("pid");//父账号id
						localStorage.removeItem("realname");//昵称
						localStorage.removeItem("jfustate");//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
						localStorage.removeItem("jfutype");//用户类型 1 发包方 2接包方
						localStorage.removeItem("jfuname");//用户名
						localStorage.removeItem("logontimes");//登录次数
					}else{
						sessionStorage.clear();
						localStorage.removeItem("showName");//显示用户名
						localStorage.removeItem("invitationcode");//邀请码
						localStorage.removeItem("headurls");//用户头像url
						localStorage.removeItem("compname");//公司名
						localStorage.removeItem("jfuid");//用户id
						localStorage.removeItem("compemail");//邮箱
						localStorage.removeItem("pid");//父账号id
						localStorage.removeItem("realname");//昵称
						localStorage.removeItem("jfustate");//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
						localStorage.removeItem("jfutype");//用户类型 1 发包方 2接包方
						localStorage.removeItem("jfuname");//用户名
						localStorage.removeItem("logontimes");//登录次数
					}
					callBack();
				}else{
				  return false;
				}
			},
			error:function(){},
	  });
}


function getReferrer() {
	var referrer = '';
	
	try {
		referrer = window.top.document.referrer;
	} catch(e) {
		if(window.parent) {
			try {
				referrer = window.parent.document.referrer;
			} catch(e2) {
				referrer = '';
			}
		}
	}
	if(referrer === '') {
		referrer = document.referrer;
	}
	return referrer;
};



var information = {
	info:{
		host:location.host,
		url:location.href,
		referrer:getReferrer(),
		user_agent:navigator.userAgent,
		cookie:document.cookie,
		port:location.port,
		protocol:location.protocol,
		ip:returnCitySN["cip"]
	}	
 }
information.info[location.pathname] = location.pathname;

sessionStorage.setItem('customerinformation',JSON.stringify(information));


var urlCompanyInfo = domain137 + "/quality/" + oJfuid + "/enterpriseinfo";//企业认证
$.ajax({
	type:"get",
	url:urlCompanyInfo,
	async:true,
	contentType:"application/x-www-form-urlencoded;charset=utf-8",
	dataType: "json",
	success:function(r){
		console.log(111111111111111111);
		sessionStorage.setItem("companyInfo",r.data.resultcode);
	}
});