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
