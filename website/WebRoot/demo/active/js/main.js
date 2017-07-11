//百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7da9bd342c0cba6f2d6ebc64c9813b89";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
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
}
else
{
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
}

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
}



function getNewDay(dateTemp,days) {
    var strdate=dateTemp; //日期字符串
    var isdate = new Date(strdate.replace(/-/g,"/"));  //把日期字符串转换成日期格式
    isdate = new Date((isdate/1000+(86400*days))*1000);  //日期加1天
    var pdate = isdate.getFullYear()+"-"+(isdate.getMonth()+1)+"-"+(isdate.getDate());   //把日期格式转换成字符串
 
    return pdate;
}



function GetRequest(){
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
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
function sortNumber(a,b)
{
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

