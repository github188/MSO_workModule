
(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}
	$.decode = decode;
	$.encode = encode;
	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

})($);


	function createachivementlist(list){
		var url = domain137 + '/pt/areaandprices?demandid='+list.demandid;
	
		$.when($.ajax({
			url:url,
			
			dataType:'json',
		})).then(function (data){
			//debugger;
			if(data.msg=="success"){
				
				//debugger;
				if(list.publics == 'releasequantity'){
					$(list.ele).append('<span>子需求区域和发布量</span>');
					data.data.unshift({area:'区域',releasequantity:'发布量'});	
				}
				if(list.publics == 'price'){
					$(list.ele).append('<span>子需求区域和单价</span>');
					data.data.unshift({area:'区域',price:'单价'});	
				}
				console.log(data.data);
				var arr = data.data;
				var ulone = $('<ul></ul>');
				var ulsecond =  $('<ul></ul>');
				arr.map(function (data,index){
					console.log(data,index);
					ulone.append('<li>'+data.area+'</li>');
					ulsecond.append('<li>'+data[list.publics]+'</li>');
				});
				
				$(list.ele).append(ulone);
				$(list.ele).append(ulsecond);
			}
			
		}).fail(function (data){
		
		});
	}
	
	//获取签名信息
	function getSignature(parm){
		if(!parm){
			return;
		}
		
		if(!parm.fileName){
			return;
		}
		var xmlhttp = null;
		if (window.XMLHttpRequest){
			xmlhttp=new XMLHttpRequest();
		}else if (window.ActiveXObject){
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}

		if (xmlhttp){
		  
			var credentials = parm.fileName;
			/*后台签名上传*/
			 //https://back.mshuoke.com/aliOrder/customerDelve.do?stid=undefined&type=fbxq  
			serverUrl = serverUrlpre +'/ali.do?uid='+roleid+'&type='+credentials;
		   
			xmlhttp.open( "GET", serverUrl, false );
			xmlhttp.send( null );
			return xmlhttp.responseText
		}else{
			alert("Your browser does not support XMLHTTP.");
		}
	}



	function setupload(param,signature){
		var isSeccess = false;
		//$(param.formId)[0].action = signature.host;
		$(param.formId +' '+ param.key).val(signature.dir+'${filename}');
		$(param.formId +' '+ param.OSSAccessKeyId).val(signature.accessid);
		$(param.formId +' '+ param.policy).val(signature.policy);
		$(param.formId +' '+ param.Signature).val(signature.signature);
		var formData = new FormData($(param.formId)[0]);
		//formData.append("Signature",signature.signature);
		return $.when(
			$.ajax({  
				url : signature.host,  
				type : 'POST',  
				data : formData,  
				processData : false,  
				contentType : false,  
			})
		);
	}
	
	
	
	/*获取角色信息*/
	var rolename = $.cookie('rolename')?$.decode($.cookie('rolename')):"";
	var roleid = $.cookie('userid')?$.cookie('userid'):1;
	var imagesurl = 'https://res.mshuoke.com/';
	
	var ifAll = (function (){
		if(rolename.indexOf('admin')!=-1 || rolename.indexOf('管理')!=-1){
			return 1;
		}
		return 0;
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
	
	
	
	var domainDownShort = "https://res.mshuoke.com/";//下载前缀
	
	var domain137 = 'https://gateway.mshuoke.com/pasf/';
	
	var serverUrlpre = "https://back.mshuoke.com";//上传正式库//
	//var serverUrlpre = "http://192.168.2.33:8091";//上传正式库//
	
	
