//var domain = "http://192.168.2.11";
var domain = "https://www.mshuoke.com";
var domainDown = "http://res.mshuoke.com/";//下载前缀
var domainDownShort = "http://res.mshuoke.com/";//下载前缀
var serverUrlpre = "";//正式库//back.mshuoke.com
var userTelCode =  '/user/telCode';
var domain137 = 'https://gateway.mshuoke.com/';

//var urlLogin = domain + oLogin.format({jfuname:oUname,jfupassword:oPwd});//首页头部用户名，邀请码，头像地址
var urlLogin = domain + "/user_toLogin";//首页头部用户名，邀请码，头像地址
var urlLogout = domain + "/loginOut";//登出

var key1 = 'm';
var key2 = 's';
var key3 = 'o';

/*获取角色信息*/
var telNumname = $.sessionStorage('telNum');
function msoLoginOut(callBack){
	callBack = callBack || function (){};
	$.ajax({
		type:"post",
		url:urlLogout,
		async:true,
		contentType:"application/x-www-form-urlencoded;charset=utf-8",
		dataType: "json",
		success:function(data){
			if(data.code=="Y"){
				callBack();
			}else{
				return false;
			}
		},
		error:function(){},
	});
}

//埋点点击
var urlPath = window.location.pathname;
var index = urlPath.lastIndexOf("\/");
urlPath  = urlPath.substring(index + 1, urlPath.length);
//console.log(urlPath);
$(document).ready(function(){
	document.body.onmousedown = function (event){
	 	var targ;
		if (!e){
			var e = window.event;
		}
		if (e.target) {
			targ = e.target;
		}
		else if (e.srcElement) {
			targ = e.srcElement;
		}
		if (targ.nodeType == 3) {// defeat Safari bug
		   targ = targ.parentNode;
		}
		var tname;
		tname=targ.tagName;
		tClass=targ.className;
		//if(targ.id=="seach"){
		//	return;
		//}
		seoPoint(urlPath,tname,tClass);
		//if(tname=="BUTTON"||tname=="A"){
		//	seoPoint(urlPath,tname,tClass);
		//}
	}
});
// /mso/buryingpoint?syspage=?&description=?&componentid=?

function seoPoint(syspage,description,componentid){
	var url = domain + "/mso/buryingpoint";
	var data = {
		syspage:syspage,
		description:description,
		componentid:componentid
	};
	$.ajax({
		type:"get",
		url:url,
		dataType:"json",
        cache:false,
		data:data,
		success:function(data){},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			if(XMLHttpRequest.status=="500"){
				//window.location.href = "page500.html";
			}else if(XMLHttpRequest.status=="404"){
				//window.location.href = "page404.html";
			}else{
				//console.log(XMLHttpRequest);
				//console.log(textStatus);
				//console.log(errorThrown);
			}
		},
	});
}
	
