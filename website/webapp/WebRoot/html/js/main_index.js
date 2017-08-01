//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7da9bd342c0cba6f2d6ebc64c9813b89";
  var s = document.getElementsByTagName("script")[0];
  s.setAttribute('async','async');
  s.parentNode.insertBefore(hm, s);
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?02d1a71fd6dffb051b153e1be0aeaefc";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b205ce712e42560e75ab7c3b35502859";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//百度统计
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


//金钱三位逗号
function formatNum(str){
	var newStr = "";
	var count = 0;
	if(str.indexOf(".")==-1){
		for(var i=str.length-1;i>=0;i--){
			if(count % 3 == 0 && count != 0){
			newStr = str.charAt(i) + "," + newStr;
		}else{
			newStr = str.charAt(i) + newStr;
		}
		count++;
		}
		str = newStr; // + ".00" 自动补小数点后两位
		return str;
	}else{
		for(var i = str.indexOf(".")-1;i>=0;i--){
			if(count % 3 == 0 && count != 0){
				newStr = str.charAt(i) + "," + newStr;
			}else{
				newStr = str.charAt(i) + newStr; //逐个字符相接起来
			}
			count++;
		}
		str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
		return str;
	}
}

//format方法
String.prototype.format = function(args) {
	if(arguments.length > 0) {
		var result = this;
		if(arguments.length == 1 && typeof(args) == "object") {
			for(var key in args) {
				var reg = new RegExp("({" + key + "})", "g");
				result = result.replace(reg, args[key]);
			}
		} else {
			for(var i = 0; i < arguments.length; i++) {
				if(arguments[i] == undefined) {
					return "";
				} else {
					var reg = new RegExp("({[" + i + "]})", "g");
					result = result.replace(reg, arguments[i]);
				}
			}
		}
		return result;
	} else {
		return this;
	}
}

function isNull(variable){
	if(variable===undefined||variable===null||variable===""){
		return true
	}
	return false;
}

function GetRequest(){
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=strs[i].substring(strs[i].indexOf("=")+1,strs[i].length);
        }
    }
    return theRequest;
}

Date.prototype.diff = function(date){
  return (this.getTime() - date.getTime())/(24 * 60 * 60 * 1000);
}


//判断浏览器版本
$(document).ready(function(){
  //判断浏览器版本
	var DEFAULT_VERSION = "9.0";
	var ua = navigator.userAgent.toLowerCase();
	var isIE = ua.indexOf("msie")>-1;
	var safariVersion;
	if(isIE){
	    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
	}
	if(safariVersion <= DEFAULT_VERSION ){
		$("body").append('<div class="cover-ie"><div class="cover-box"><ul><li class="icon-chrome"><a href="http://www.google.cn/chrome/browser/desktop/index.html" target="_blank">谷歌浏览器</a></li><li class="icon-ff"><a href="http://www.firefox.com.cn/" target="_blank">火狐浏览器</a></li><li class="icon-360"><a href="http://chrome.360.cn/" target="_blank">360极速浏览器</a></li><li class="icon-sogou"><a href="http://ie.sogou.com/" target="_blank">搜狗浏览器</a></li></ul><p>忽略此问题，<a class="ignore" href="javascript:;">继续访问>></a></p></div></div>');
		$(".cover-ie").show();
	}
	$("a.ignore").click(function(){
		$(".cover-ie").hide();
	});
});

//页面点击顺序
$(document).ready(function(){
	var oMsoid = $.msoid;
	var msoid = sessionStorage.getItem("msoid");
	if(msoid==undefined){
		msoid = oMsoid +",";
		sessionStorage.setItem("msoid",msoid);
	}else{
		sessionStorage.setItem("msoid",msoid + oMsoid + ",");
	}
	
});


//埋点点击
var domain = "https://www.mshuoke.com";
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

//控制开关   GET /quality/forbidden
window.onload = function () {
	/**
	 * cb为隐藏组件处理函数
	 */
	hide(cb);
	function cb(result) {
		if(result.length>0){
			for(var i=0;i<result.length;i++){
				$(result[i].description+"."+result[i].componentId).hide();
			}
		}
	}
}