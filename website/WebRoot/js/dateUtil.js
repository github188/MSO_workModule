
	Date.prototype.format = function(format)
	{
		 var o = {
		 "M+" : this.getMonth()+1, //month
		 "d+" : this.getDate(),    //day
		 "h+" : this.getHours(),   //hour
		 "m+" : this.getMinutes(), //minute
		 "s+" : this.getSeconds(), //second
		 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
		 "S" : this.getMilliseconds() //millisecond
		 }
		 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
		 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
		 for(var k in o)if(new RegExp("("+ k +")").test(format))
		 format = format.replace(RegExp.$1,
		 RegExp.$1.length==1 ? o[k] :
		 ("00"+ o[k]).substr((""+ o[k]).length));
		 return format;
	}
	
	function addDate(dd,dadd){
		var a = new Date(dd)
		a = a.valueOf()
		a = a + dadd * 24 * 60 * 60 * 1000
		a = new Date(a)
		return a;
	}
	
	
	function subDate(strDateStart,strDateEnd){
		  var strSeparator = "-"; //日期分隔符
		  var strDateArrayStart;
		  var strDateArrayEnd;
		  var intDay;
		  strDateArrayStart = strDateStart.split(strSeparator);
		  strDateArrayEnd = strDateEnd.split(strSeparator);
		  var strDateS = new Date(strDateArrayStart[0] + "/" + strDateArrayStart[1] + "/" + strDateArrayStart[2]);
		  var strDateE = new Date(strDateArrayEnd[0] + "/" + strDateArrayEnd[1] + "/" + strDateArrayEnd[2]);
		  intDay = (strDateE-strDateS)/(1000*3600*24);
		  return intDay;
		 }