	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	jQuery(function(){
		var $div_li =$(".home-business .left li");
        $div_li.hover(function(){
            $(this).addClass("selected").siblings().removeClass("selected");
            var index =  $div_li.index(this);
            $(".home-business .right .content li").eq(index).show().siblings().hide();
        });
        $("a.rightNow").click(function(){
        	if(sessionStorage.getItem("jfuid")!=undefined&&sessionStorage.getItem("jfuid")!=""&&sessionStorage.getItem("jfuid")!=null){
        		if(sessionStorage.getItem("companyInfo")==4){
        			window.location.href="html/customer_new_demand.html";
        		}else{
					window.location.href="html/customer_home.html";
				}
        	}else{
				window.location.href="register-customer.html";
			}
        });
        $("#slide-img-1").click(function(){
        	$(".cover").show();
        });
        $(".cover .ad-promotion .closed").click(function(){
        	$(".cover").hide();
        });
		
		function getindustryData(callBack){
			callBack = callBack || function (){};
			$.ajax({
				url:domain137+'/chart/industrylist',
			}).then(function (data){
				if(data.msg === "success"){
					callBack(data.data);
				}
			}).fail(function (data){
				console.log(data);
			});
		}
		
		/*线上线下*/
		//https://gateway.mshuoke.com/chart/industrylist
	
		getindustryData(function(data){
			//改变数据;
			var changedata = {};
			data.map(function (item,index){
				//线上1 线下2
				changedata[item.id] = item;
			});
			$('ul.switchOnOff').data('industry',changedata);
		});
		
		function createData(data,parents){
			data.map(function (item,index){
				var oLi = $('<li>');
				oLi.data('sort',item);
				oLi.html(item.name);
				oLi.attr('data-code',item.id);
				parents.append(oLi);
			});
		}
		
		$('ul.switchOnOff li').click(function (ev){
			var tradedata = $('ul.switchOnOff').data('industry');
			var $target = $(ev.target).parent();
			var code = $target.attr('data-code');
			
			$('ul.switchOnOff li').removeClass('active');
			$target.addClass('active');
			//debugger;
			$('.box-industry p.valued-i').html('所属行业');
			$('.box-industry p.valued-i').data('value',false);
			$('.industry-first-level ul').html('');
			$('.onoffline-error').hide();
			if(tradedata[code]){
				$('.industry-first-level').show();
				$('.industry-second-level').hide().find('ul').html('');
				createData(tradedata[code].industryList,$('.industry-first-level ul'));
			}
			
		});
		
		$('.industry-first-level').on('click','ul li',function (ev){
			var $target = $(ev.currentTarget);
			var seconddata = $target.data('sort');
			$('.industry-first-level ul li').removeClass('active');
			 $target.addClass('active');
			if(seconddata){
				var  list = seconddata.industryList;
				$('.industry-second-level ul').html('');
				
				if(list[0]){
					$('.industry-second-level').show();
					createData(list,$('.industry-second-level ul'));
				}
			}
		});
		
		$('.industry-second-level').on('click','ul li',function (ev){
			var $target = $(ev.currentTarget);
			$('.industry-second-level ul li').removeClass('active');
			$target.addClass('active');
			var firstvalue = $('.industry-first-level ul li.active').data('sort');
			var secondvalue = $('.industry-second-level ul li.active').data('sort');
			//console.log(firstvalue,secondvalue);
			var selectedvalue = {first:firstvalue,second:secondvalue};
			//储存选择的值;
			$('.box-industry p.valued-i').data('value',selectedvalue);
			var allname = firstvalue.name+'>'+secondvalue.name;
			//if(allname.length>10){
			//	allname = allname.substring(0,10);
			//	allname +='...';
			//}
			
			$('.box-industry p.valued-i').html(allname);
			$('.industry-box').hide();
		});
		
		
		$('.box-industry p.valued-i').click(function (){

			var  onoffline = $('.switchOnOff li.active').attr('data-code');

			if(!onoffline){
				//线上线下没有 (请选择运营模式);
				$('.onoffline-error').show();
			}else{
				$('.onoffline-error').hide();
			}
			$('.industry-error').hide();
			$('.industry-box').show();
		});
		
		
		$('.box-area p.valued-p').click(function (){
			$('.area-error').hide();
		});
		
		$(document).on('click','',function (ev){
			var $target  = $(ev.target);
			//debugger;
			if(!($target.parents('.box-search').length)){
				$('.industry-box').hide();
			}
		});
		
	});
	
	
	//滚动到
    function gdjz(div,cssname,offset){
		var a,b,c,d;
		d = $(div).offset().top;//元素相对于窗口的距离
		a = eval(d + offset);
		b = $(window).scrollTop();//监控窗口已滚动的距离;
		c = $(window).height();//整个文档的高度
		if(b + c > a + 100){
			$((div)).addClass((cssname));
		}
	}
		
	$(document).ready(function(e) {
		$(window).scroll(function(){
			gdjz(".home-business",'move',100);
		});
		$(window).scroll(function(){
			gdjz(".box-top",'move',100);
		});
	});
	
	
	
	
	function getCityData(callBack){
		callBack = callBack || function (){};
		$.ajax({
			url:domain137+'/chart/citylist',
			data:{norequired:'四线,五线,六线'}
		}).then(function (data){
			if(data.msg === "success"){
				//handleData 比对后的数据;
				callBack(data.data);
				//slectedCity.setData([{name:'那曲',id:542400},{name:'阿里',id:542500}]);
			}
		}).fail(function (data){
			console.log(data);
		});
	}
	var  integrate  = {};
	getCityData(function (data){
		//对比一遍数据
		integrate.cityidList = data;
		var contractdata = handleData(data);
		
		var slectedCity = msocitySelect({
			ele:'#multi-select-2',
			data:contractdata,
			multiSelect:true,
			search:true,
			hotCity:['一线','二线','上海市','北京市','广州市','深圳市','杭州市','苏州市','南京市','成都市','重庆市'],
			shorthand:true,
			getdata:function (data){
				console.log(JSON.stringify(data));
				if(data){
					if(data.name[0]){
						$('.box-area p.valued-p').data('value',data);	
					}else{
						$('.box-area p.valued-p').data('value',false);	
					}
				}else{
					$('.box-area p.valued-p').data('value',false);
						
				}
			}
		});
		
	});
	
	
	

	
	//找二线and一线城市
	function findcity(name,citydata,foundcity){
		citydata.map(function (item,index){
			if(item.tier===name){
				foundcity.push(item.city);
			}
		});
		return foundcity;
	}
	//转成需要的格式
	function arrsearch(citydata,name,industryId){
		var type = {
				'一线':1,
				'二线':2,
				'三线':3,
				'四线':4,
				'五线':5,
				'六线':6,
			}
		
		for (var i=0;i<citydata.length;i++){
			if(citydata[i].city === name){
				return citydata[i].city;
			}
		}
	}
	function citySwitch(data,citydata,industryId){
			var names = data.name;
			var foundcity = [];
			for(var i=0;i<names.length;i++){
				if(names[i] == "二线" || names[i] == "一线"){
					//所有的找出的城市
					foundcity.concat(findcity(names[i],citydata,foundcity));
				}
			}
			
			var findarr = names.concat(foundcity);
			
			//删除一线二线
			for(var i=0;i<findarr.length;i++){
				if(findarr[i] == "二线" || findarr[i] == "一线"){
					findarr.splice(i,1);
					i--;
				}
			}
			
			var integaratearr = [];
			findarr.map(function (item,index){
				integaratearr.push(arrsearch(citydata,item,industryId));
			});
			return integaratearr;
			//查看一下处理以后的城市
			//在看找出来的城市
	}
	
	function whetherwent(data){
		//https://gateway.mshuoke.com/chart/user/chartdata	
		data = data || {};
		var  url = domain137 + '/chart/user/chartdata';
		return $.when($.ajax({
			  type: "post",
			  headers: {
					version: "v1"
			  },
              url: url,
              data:JSON.stringify(data),
              contentType: 'application/json',
		}));
		
	}
	
	$('.btn-search').click(function (){
		var  industrydata = $('.box-industry p.valued-i').data('value');
		var  citydata = $('.box-area p.valued-p').data('value');
		integrate.citydata = citydata;
		integrate.industrydata = industrydata;
		
		var  onoffline = $('.switchOnOff li.active').attr('data-code');
		integrate.currentCode = onoffline;
		//debugger;
		//console.log(onoffline);
		//debugger;
		if(!onoffline){
			//线上线下没有 (请选择运营模式);
			$('.onoffline-error').show();
		}else{
			$('.onoffline-error').hide();
		}
		
		if(!industrydata){
			//行业没有
			$('.industry-error').show();
		}else{
			$('.industry-error').hide();	
		}
		
		if(!citydata){
			//城市没有
			$('.area-error').show();
		}else{
			$('.area-error').hide();
		}
		
		if($('div.error:visible').length){
			return;
		}
			//已通过
		
		var cityidList = integrate.cityidList;
		var industryId = integrate.industrydata.second.id;
		var cityLists = citySwitch(citydata,cityidList,industryId);
		var agearr = integrate.industrydata.second.age1.split('~');
		var beginAge = agearr[0];
		var endAge = agearr[1];

		var options = {industryId: industryId , cityList: cityLists , beginAge:beginAge, endAge:endAge};
		whetherwent(options).then(function (res){
			
			
			//debugger;
			if(res.msg != "success")return;
			if(res.alluser>=1000){
				integrate.alluser = res.alluser;
				integrate.expectuser = res.expectuser;
				sessionStorage.setItem('integrate',JSON.stringify(integrate));
				if(sessionStorage.getItem('jfuid')){
					//登录后的获取模拟
					location.href = "https://www.mshuoke.com/app/research/entry";
				}else{
					location.href = "/loginbeforehasresult.html";
				}	
			}else{
				//空白页面
				location.href = "/loginbefore_noresult.html";
			}
		
		}).fail(function (){
	
		});

		
	});