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
var domain137 = "https://gateway.mshuoke.com/pasf";
//domain137 = 'http://192.168.2.68:20005';
var domainDown = "https://res.mshuoke.com/";//下载前缀
var domainDownShort = "https://res.mshuoke.com/";//下载前缀
var serverUrlpre = "https://back.mshuoke.com";//上传正式库//
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


function isNull(variable){
  if(variable===undefined||variable===null||variable===""){
    return true
  }
  return false;
}