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




//存储cookie共用方法
function setCookie(name,value,time){
  time=3600;
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+time);
	document.cookie = name+"="+value+";expires="+oDate;
}
function getCookie(name){
	var arr = document.cookie.split("; ");
	for(var i=0; i<arr.length; i++){
		var arr2 = arr[i].split("=");
		if(arr2[0] == name){
			return arr2[1];
		}
	}
	return "";
}


//圆形百分比
function circular(){
	$('.circle').each(function(e){
		var oCircle = $(this).find('strong').text();
		var oPercent = oCircle/100;
		if(oCircle=='0'){
			$(this).circleProgress({
		    	value: oPercent,//百分比内的值
		    	fill: {
		            color: '#dddddd'
		        }//值为0的时候，填充灰色
			});
			$(this).find('strong').addClass('gray');
		}else{
			$(this).circleProgress({
		    	value: oPercent
			});
		}
		$(this).find('strong').text($(this).find('strong').text()+"%");
	})
}

function circleGreen(){
	$('.circle-green').each(function(e){
		var oCircle = $(this).find('strong span.number').text();
		var oPercent = oCircle/100;
		if(oCircle=='0'){
			$(this).circleProgress({
		    	value: oPercent,//百分比内的值
		    	size: 126.0,//圆形的宽度
		    	fill: {
		            color: '#dddddd'
		        },//值为0的时候，填充灰色
		        thickness: '4',//圆形边框宽细
			});
			$(this).find('strong').addClass('gray');
		}else{
			$(this).circleProgress({
		    	value: oPercent,//百分比内的值
		    	size: 126.0,//圆形的宽度
		    	fill: {
		            color: '#a3db20'
		        },//填充绿色
		        thickness: '4',//圆形边框宽细
			});
			$(this).find('strong').removeClass('gray');
		}

		$(this).find('strong span.number').next().text("%");
	})
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
};

function circleTogglt(){
	$(".dynamic_demand_details .circle").hover(function(){
          $(this).find(".bubble").toggle();
      });
}

function info_head(){
	$(".customer_overview .photo-box .details p i").hover(function(){
          $(".customer_overview .photo-box .bubble").toggle();
      });
      $(".overview-list").each(function(i){
          $(this).addClass("overview-nav0" + i);
      });
      $(".welcome .left p.name span").text($(".customer_overview .photo-box .details p.name span.uName").text());
}

function needHide(){
	if (4==oJfustate){
			$(".my-needs-tab .nodate a.btn-new").show();
		}else{
			$(".my-needs-tab .nodate a.btn-new").hide();
		}
}

function selectClick(){
	$(".select-main").click(function(){
		$(".ui-select-line").click();
	});
}



function myFunction() {
          var x = $(".mbrq").val();
          $("span.target-population").html(x);
          //document.getElementById("demo").innerHTML = "你输入的是: " + x;
      }

function isNull(variable){
  if(variable===undefined||variable===null||variable===""){
    return true
  }
  return false;
}

Date.prototype.diff = function(date){
  return (this.getTime() - date.getTime())/(24 * 60 * 60 * 1000);
};

//日期加减
function getNewDay(dateTemp,days) {
    var strdate=dateTemp; //日期字符串
    var isdate = new Date(strdate.replace(/-/g,"/"));  //把日期字符串转换成日期格式
    isdate = new Date((isdate/1000+(86400*days))*1000);  //日期加1天
    var pdate = isdate.getFullYear()+"-"+(isdate.getMonth()+1)+"-"+(isdate.getDate());   //把日期格式转换成字符串

    return pdate;
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

//大小排序
function sortNumber(a,b){
	return a - b
}
//arr.sort(str);

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


window.API = (function(){
	var hostname = location.hostname;
	if(hostname=="localhost" || hostname == "127.0.0.1"){
		return 'http://192.168.2.11/';
	}
	if(/192.168.2.11/.test(hostname)){
		return 'http://192.168.2.11/';
	}else{
		return '线上地址';
	}
})();
$.sessionStorage = function (id){
	return sessionStorage.getItem(id);
};

$.setSessionStorage = function (key,value){
	sessionStorage.setItem(key,value); 
};
$.removeSessionStorage = function (key){
	sessionStorage.removeItem(key);
};




//吸顶
function topStick(){
	
	$(window).scroll(function(){
	  //console.log('========================');
	  $("#demend_right_test").css({width:$(".demend_right .right").width(),height:$(".demend_right .right").height()});
	  if($(window).scrollTop()>=$(".demend_right").offset().top){		
		$(".demend_right .right").css({"position":"fixed","top":"60px",'bottom':'auto'});
		//demend_right_test
		$("#demend_right_test").show();
		var offsetp = $(".demend_right .right").offset();
		var offLeft = $(".demend_left").offset();
	
		/*左边的值*/
		var leftTop = offLeft.top*1+$(".demend_left").height()*1;
		/*右边的值*/
		var rightTop = offsetp.top*1+$(".demend_right .right").height()*1;
		
		
		if(rightTop>=leftTop){
			//#new_demand div.demend_left 35
			var bottomrange = $('.footer_box').height()*1+ parseInt($('.demend_left').css('margin-bottom'))*1;
			//console.log('bottomrange=='+bottomrange);
			/*吸底 因为有margin-bottom 20*/
			$(".demend_right .right").css({"position":"fixed","top":"auto","bottom":(bottomrange-20)+"px",});
			
		}else{
			$(".demend_right .right").css({"position":"fixed","top":"60px",'bottom':'auto'});
		}
		
	  }else{
		  $(".demend_right .right").css({"position":"static"});
		  $("#demend_right_test").hide();
	  }
	});
}

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
 function isIE() { //ie?
		if (!!window.ActiveXObject || "ActiveXObject" in window)
	  return true;
	  else
	  return false;
 }
//控制开关   GET /quality/forbidden
window.onload = function () {
	/**
	 * cb为隐藏组件处理函数
	 */
	
	//debugger;
	//if(!isIE()){
	  
	   hide(cb);
	   function cb(result) {
			if(result.length>0){
				for(var i=0;i<result.length;i++){
					$(result[i].description+"."+result[i].componentId).hide();
				}
			}
	   } 
	//}
	
}