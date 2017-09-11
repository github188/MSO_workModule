//获取数据
/*行业开始*/
var cityboxH = "";
//调试行业数据
function getInstusrydata(callBack){
	//var url = domain137 + 'quality/getIndustryList';
	var url = domain137 + 'chart/industrylist';
	callBack = callBack || function (){};
	$.ajax({
		url:url,
	}).then(function (data){
		callBack(data.data);
	});
}
$(document).on('vclick','.getback,.gethome',function (ev){
	var target = ev.target;
	if($(target).hasClass('getback')){
		if($('.citychoice:visible').length){
			$('.citychoice').hide();
			$('.homes').html('<span class="getback"></span>获客模拟<span class="gethome"></span>');
		}else{
			history.go(-1);
		}
		
	}else{
		location.href = '/';
	}
	ev.preventDefault(); 
	ev.stopPropagation();
});


$(".list li").bind("tap",function(ev){
	var target = ev.currentTarget;
	//$(".list li").removeClass('active');
	var mark = $(target).attr('data-item');
	
	if(mark == 'myindustry'){
		$(".industry").show().css({height:'auto'});
		$(".industry").animate({opacity:1},200);
	}
	if(mark == 'district'){
		setTimeout(function (){
			$(".citychoice").show().css({height:'auto'});
			$(".citychoice").animate({opacity:1},200,function (){
				//处理样式的bug
				$('.complex ul').css({lineHeight:'46'});
				cityboxH = $('.selectedcity').outerHeight();
				if(!$.sessionStorage('cityboxH')){
					$.setSessionStorage('cityboxH',cityboxH);
				}
				
			});
			
			$('.homes').html('<span class="getback"></span>分布地区<span class="gethome"></span>');
		},100);
	
	}
	ev.preventDefault(); 
	ev.stopPropagation();
});


var arr1 = [{name:'shanghai'},{name:'北京'},{name:'天津'}];
var arr2 = [{name:'chengdu'},{name:'xian'},{name:'shenzhen'}];

//储存数据;
getInstusrydata(function (data){
	$('.first-list').data(data);
	
	//默认线上
	createIndustry(data,1,$('.second-list'));
});

//创建数据 二级分类 and 三级分裂
function createIndustry(data,code,ele){
	if(code === 1){
		data[0].industryList.map(function (item,index){
			var oLi = $('<li>');
			oLi.data(item).html(item.name);
			ele.append(oLi);
			$('.thirty-list').html('');
		});
	}
	
	if(code === 0){
		data[1].industryList.map(function (item,index){
			var oLi = $('<li>');
			oLi.data(item).html(item.name);
			ele.append(oLi);
			$('.thirty-list').html('');
		});
	}
	
	if(code === false){
		data.industryList.map(function (item,index){
			var oLi = $('<li>');
			oLi.data(item).html(item.name);
			ele.append(oLi);
		});
	}
	
}

//切换数据 线上线下
$(document).on('touchstart','.first-list',function (ev){
	var target = ev.target;
	var code  = $(target).attr('data-code');
	$(".first-list li").removeClass('current');
	$(target).addClass('current');
	$('.second-list').html('');
	
	//模拟数据 (获取当前index数据在进行加在)
	var data = $('.first-list').data();
	if(data){
		createIndustry(data,code*1,$('.second-list'));
	}else{
		console.log('你还没有获取到数据');
	}
});

//切换数据二级分类 
$(document).on('vclick','.second-list li',function (ev){
	var target = ev.currentTarget;
	
	$(".second-list li").removeClass('current');
	$(target).addClass('current');
	$('.thirty-list').html('');
	var data = $(target).data();
	createIndustry(data,false,$('.thirty-list'));
	ev.preventDefault(); 
	ev.stopPropagation();
});


var industaritem = {};

$(document).on('vclick','.thirty-list li',function (ev){
	var target = ev.currentTarget;
	$(".thirty-list li").removeClass('current');
	$(target).addClass('current');
	$('.industry').animate({opacity:0},500,function (){
		$('.industry').hide();
	});
	
	//在这里回填list
	
	var first =  $('.first-list li.current').html();
	var second =  $('.second-list li.current').html();
	var thirty =  $('.thirty-list li.current').html();
	var whole = $('.thirty-list li.current').data();
	
	industaritem.first = first;
	industaritem.second = second;
	industaritem.thirty = thirty;
	var industrystr = first+'>'+second+'>'+thirty;
		$('.list li').eq(0).html();
	if(industrystr.length>12){
		$('.list li').eq(0).html(industrystr.substring(0,11)+'...');
		var state = $('.list li').eq(0).attr('data-state','1');
		var stated =  $('.list li').eq(0).attr('data-state');
		if(stated == '1'){
			$('.list li').eq(0).addClass('active');
		}
	}
	
	var agestated = "";
	if(whole.age1){
		$('.rangeage').html(whole.age1+'岁');
		$('.age-range').attr('data-state','1');
		agestated = $('.age-range').attr('data-state');
		if(agestated == '1'){
			$('.age-range').addClass('active');
		}
	}else{
		$('.age-range').html('年龄范围');
		$('.age-range').attr('data-state','0');
		agestated = $('.age-range').attr('data-state');
		if(agestated == '0'){
			$('.age-range').removeClass('active');
		}
	}
	//更新年龄标签
	incorporateUserWords();
	addState();
	ev.preventDefault(); 
	ev.stopPropagation();
});


$(document).on('touchstart','.industry',function (ev){
	
	var target = ev.target;
	if($(target).hasClass('industry')){
		$(target).animate({opacity:0},500,function (){
			$('.industry').hide();
		});
	}
	
});


/*行业结束*/

/*城市开始*/
var focusArr = [];
//type(城市是否是 全国 一线城市  二线城市)
$(document).on('vclick','li.js_citykey',function (ev){
	//debugger;
	var target = ev.currentTarget;
	//被禁用了不能在点击
	if($(target).hasClass('disabled')){
		return;
	}
	
	
	var _value = "";
	var type = '';

	if($(target).hasClass('current')){
		$(target).removeClass('current');
		_value = $(target).html();
		type = $(target).attr('data-unique');
		console.log(_value);
		incorporateFoucs(false,_value,type,$(target));
		//同步上下的current状态
		$('.js_citykey').map(function (index,item){
			if($(item).html() == _value){
				$(item).removeClass('current');
			}
		});
	}else{
		$(target).addClass('current');
		_value = $(target).html();
		type = $(target).attr('data-unique');
		incorporateFoucs(true,_value,type,$(target));
		$('.js_citykey').map(function (index,item){
			if($(item).html() == _value){
				$(item).addClass('current');
			}
		});
	}
	
	ev.preventDefault(); 
	ev.stopPropagation();
	//采用比对方案进行加减
});

//点击上面的删除
$(document).on('vclick','.selectedcity li',function (ev){
	
	 var target = ev.currentTarget;
	 var _value = $(target).attr('data-name');
	 var  type =  $(target).attr('data-unique')
	 
	 incorporateFoucs(false,_value,type,$(target));
	 var  item = _value;
	// debugger;
	 var founded = findLable($('li.js_citykey'),_value);
	//删除下面的选中状态
	if(founded.length == 1){
		founded[0].removeClass('current');
	}else if(founded.length > 1){
		founded[0].removeClass('current');
		founded[1].removeClass('current');
	}
	ev.preventDefault(); 
	ev.stopPropagation();
});

//city选择完毕
$(".complete").bind("vclick",function(ev){
	$(".citychoice").hide();
	var citystr = "";
	focusArr.map(function (data,index){
		if((focusArr.length-1) == index){
			citystr += (data.city);
		}else{
			citystr += (data.city+',');
		}
	});
	
	//debugg
	/*组装城市*/
	
	if(citystr.length>12){
		$('.list li').eq(1).html(citystr.substring(0,11)+'...');
	}else{
		
		$('.list li').eq(1).html(citystr);
	}
	if(citystr){
		var state = $('.list li').eq(1).attr('data-state','1');
		var stated =  $('.list li').eq(1).attr('data-state');
		if(stated == '1'){
			$('.list li').eq(1).addClass('active');
			
		}
	}else{
		var state = $('.list li').eq(1).attr('data-state','0');
		var stated =  $('.list li').eq(1).attr('data-state');
		$('.list li').eq(1).html('分布地区');
		if(stated == '0'){
			$('.list li').eq(1).removeClass('active');	
		}
		
	}
	//complete
	$('.homes').html('<span class="getback"></span>获客模拟<span class="gethome"></span>');
	
	addState();
	ev.preventDefault(); 
	ev.stopPropagation();
});


function incorporateFoucs(ifAdd,data,type,currentEle){
	/*处理数据的进出*/
	if(ifAdd){
		//处理权限问题
		//全国 
		if(type==10){
			$('.special').remove();
			focusArr = [];
			focusArr.push({city:data,type:type});
			$('.selectedcity').html('');
			$('.selectedcity').append('<li data-unique="'+type+'" data-name="'+data+'"><span></span>'+data+'</li>');
			$('li.js_citykey').removeClass('current');
			$('li.js_citykey').addClass('disabled');
			currentEle.removeClass('disabled');
			currentEle.addClass('current');
			
			return;
		}
		var repeat = false;
		
		if(focusArr[0]){
			focusArr.map(function (item,index){
				if(item.city == data){
					repeat = true; 
				}
			});
		}
		
		//假的不要 防止数据重复
		if(!repeat){
			focusArr.push({city:data,type:type});
			//添加label
			$('.special').remove();
			$('.selectedcity').append('<li data-unique="'+type+'" data-name="'+data+'"><span></span>'+data+'</li>');
		}

		/*一线城市*/
		if(type == 9){
			selectedLable(type,9,1);
		}
		
		if(type == 8){
		/*二线线城市*/
			selectedLable(type,8,2);
		}

	}else{
		
		//没有选中的时候
		
		/*一线城市*/
		//noTselectedLable(type,9,1,currentEle);
		//debugger;
		/*二线城市*/
		//if(type == 8){
		//	noTselectedLable(type,8,2,currentEle);
		//}
		
		if(type == 9){
			$('li.js_citykey').map(function (index,data){
			   var unique = $(data).attr('data-unique');
			  if(unique == '1'){
				   $(data).removeClass('disabled');
			   }
			});
		}
		
		if(type == 8){
			$('li.js_citykey').map(function (index,data){
			   var unique = $(data).attr('data-unique');
			  if(unique == '2'){
				   $(data).removeClass('disabled');
			   }
			});
			
		}
		
		if(currentEle.parent().hasClass('selectedcity')){
			currentEle.remove();
		}
		
		
		var current = sorted_find(focusArr,data);
		var index = current.index;
		var item = current.city;
		//删除数组不要的
		focusArr.splice(index,1);
		//删除上面不要的label
		
		
		var found = findLable($('.selectedcity li'),item);
		//上面只有一个
		if(found && found[0]){
			found[0].remove();
		}
		
		//上面一个也没有了
		if(!focusArr[0]){
			$('li.js_citykey').removeClass('disabled');
			$('.selectedcity').append('<li class="special"></li>');
		}
	}
}

//查找当前index
function sorted_find(arr,data){
	//debugger;
	var json = {};
	arr.map(function (item,index){
		if(data==item.city){
			json.index = index;
			json.city = item.city;
		}
	});
	return json;
}

/*查找想要的lable*/
function findLable(Resources,item){
	var arr  = [];
	Resources.map(function (index,data){
		var isValue = $(data).html().indexOf(item);
		if(isValue!=-1){
			arr.push($(data));
		}
	});
	return arr;
}

function findNextLable(Resources,item){
	var mainItem;
	Resources.map(function (index,data){
		var isValue = $(data).html().indexOf(item);
		if(isValue!=-1){
			mainItem = $(data);
			mainItem.removeClass('current');
		}
	});
}



//https://www.mshuoke.com//getBaseRegionType/2;
function getCityData(callBack){
	var url = domain137 + 'chart/citylist'; 
	//var url = domain  + '/getBaseRegionType/2';
	callBack = callBack || function (){};
	$.ajax({
		url:url,
	}).then(function (data){
		$.msocitydata = data;
		callBack(data);
	});
}

/*此方法逻辑错误停用*/
function noTselectedLable(currenttype,needtype,iscity,currentEle){
	//alert(needtype);
	if(currenttype == needtype){
		/*处理一线and二线*/
		var currentUnique = $(currentEle).attr('data-unique');
		//选中的时候
		if(currentUnique == needtype){
			if(!($(currentEle).hasClass('current'))){
				//debugger;
				$('li.js_citykey').map(function (index,data){
				   var unique = $(data).attr('data-unique');
				  if(unique == iscity){
					   $(data).removeClass('disabled');
				   }
				});
			}
		}
	}
}


/*一线城市*/
function selectedLable(currenttype,needtype,iscity){
	if(currenttype == needtype){
		$('.special').remove();
		//没有选中的时候
		//一线全部关闭
		$('li.js_citykey').map(function (index,data){
			
		   var unique = $(data).attr('data-unique');
		   if(unique == iscity){
			   $(data).removeClass('current');
			   $(data).addClass('disabled'); 
		   }
		});
		for(var i=0;i<focusArr.length;i++){
			if(focusArr[i].type == iscity){
				var foundup = findLable($('.selectedcity li'),focusArr[i].city);
				//同步下面的标签的状态
				//同步数据
				focusArr.splice(i,1);
				//同步上面的标签(上面的只有一个)
				if(foundup){
					foundup[0].remove();
					//回归到原位
					i--;
				}
			}
		}
	}
}


//complex
getCityData(function (data){
	createComplexCity(data);
});


//创建城市只需要一二级
function createComplexCity(data){ 
	//debugger;
	var items = data.data;
	items.map(function (item,index){
		//模拟数据 需要真实数据来支撑
		var firstWords = "";
		if(item.fristPinyin){
			
			firstWords = item.fristPinyin.toUpperCase();
		}
		
	  
		if(item.tier == "一线"){
			$(".sort_letter"+firstWords).html(firstWords);
			$(".sort_list"+firstWords).append('<li class="js_citykey"   data-unique="'+1+'" data-code="'+item.id+'">'+item.city+'</li>');
		}
		
		if(item.tier == "二线"){
			$(".sort_letter"+firstWords).html(firstWords);
			$(".sort_list"+firstWords).append('<li class="js_citykey"   data-unique="'+2+'" data-code="'+item.id+'">'+item.city+'</li>');
		}
		
		if(item.tier == "三线"){
			$(".sort_letter"+firstWords).html(firstWords);
			$(".sort_list"+firstWords).append('<li class="js_citykey"   data-unique="'+3+'" data-code="'+item.id+'">'+item.city+'</li>');
		}
		
		if(item.tier == "四线"){
			$(".sort_letter"+firstWords).html(firstWords);
			$(".sort_list"+firstWords).append('<li class="js_citykey"   data-unique="'+4+'" data-code="'+item.id+'">'+item.city+'</li>');
		}
	});
}

//组装客户标签

function incorporateUserWords(){
	var instrydata = $('.thirty-list li.current').data();
	
	//console.log(instrydata);
	var biaoqian = JSON.parse(instrydata.biaoqian);
	//console.log(biaoqian);
	var stated = "";
	if(biaoqian){
		$('.usermessage').show();
		$('.usermessage ul').html('');
		biaoqian.map(function (item,index){
			$('.usermessage ul').append('<li><span class="one">'+item.lablename+'</span><span class="two">'+item.lablevalue+'</span></li>');	
		});
		
		$('.userlable').attr('data-state','1');
		stated =  $('.userlable').attr('data-state');
		if(stated == '1'){
			$('.userlable').addClass('active');	
		}
		
	}else{
		$('.usermessage').hide();
		$('.userlable').attr('data-state','0');
		stated =  $('.userlable').attr('data-state');
		if(stated == '0'){
			$('.userlable').addClass('active');	
		}
	}

	//focusArr 城市数据
}

//添加状态
function addState (){
	if($('.list li.active').length == 4){
		$('button.press').addClass('active');
	}else{
		$('button.press').removeClass('active');
	}
}

/*安字母切换*/

//document.body.scrollTop

$(".cityselected ul li").bind("vclick",function(ev){
	var target = ev.target;
	var item = $(target).html();
	var item_top = $('.city'+item).offset().top;
	var topdistance  = $('.secondHalf').innerHeight()*1 +  $('.main-top').innerHeight()*1;
	$(document.body).scrollTop(item_top*1-topdistance);
	ev.preventDefault(); 
	ev.stopPropagation();
});


//点击显示展开;
var alltopH = $('.secondHalf').outerHeight();

//tap
$(document).on('vclick','.ifshow',function (ev){

	var _show = $(this).data('show');
	var nowH = $('.selectedcity').outerHeight();
	cityboxH = $.sessionStorage('cityboxH')*1;
	//超过了3个
	//cityboxH 原有的选择的高
	//nowH现在选择的高
	//alltopH 外盒的高
	//外盒的高 - 原有的选择的高 = 上边的高度;
	//上边的高度 + 现在选择的高 = 新盒子的高度;
	
	if(!_show){
		$(this).data('show',true);
		//$('.secondHalf').height((alltopH-cityboxH)+nowH);
		//console.log(cityboxH,alltopH,nowH);
		$('.secondHalf').animate({height:(alltopH-cityboxH)+nowH},300,'easeInOutBack');
		$(this).find('a').html('收起');
	}else{
		$(this).data('show',false);
		//$('.secondHalf').height(alltopH);
		$('.secondHalf').animate({height:alltopH},300,'easeInOutBack');

		$(this).find('a').html('展开');
	}
	ev.preventDefault(); 
	ev.stopPropagation();
});



$(document).on('vclick','.press',function (ev){
	
	if($('.list li.active').length != 4){
		return; 
	}

	var nextData = {};
	var industryData = $('.thirty-list li.current').data();
	var lineOff = $('.first-list li.current').attr('data-code');
	var twoLine = $('.second-list li.current').data();
	//debugger;
	
	nextData.industry = industryData;
	//验证是否有一线 二线 (有一线，二线全部换成一线，二线的所有标签);
	var iflinesone;
	var iflinestwo;
	//删除一线，二线 主题标签 
	//debugger;
	var industryId  =  industryData.id;;
	for(var i=0;i<focusArr.length;i++){
		focusArr[i].industryId = industryId;
		//debugger;
		if(focusArr[i]){
			if(focusArr[i].city == '一线') {
				iflinesone = true;
				focusArr.splice(i,1);
				i--;
			}else if(focusArr[i].city == '二线') {
				iflinestwo = true;
				focusArr.splice(i,1);
				i--;
			}
		}
	}
	
	//debugger;
	if(iflinesone){
		//添加一线所有城市
		$.msocitydata.data.map(function (item,index){
			if(item.tier=="一线"){
			
				focusArr.push({city:item.city,type:1,industryId:industryId});
			}
		});
	}
	
	if(iflinestwo){
		//添加二线所有城市
		$.msocitydata.data.map(function (item,index){
			if(item.tier=="二线"){
				focusArr.push({city:item.city,type:2,industryId:industryId});
			}
		});
	}

	var url = domain137 +  'chart/sumdata';
	
	//debugger;
	$.ajax({
		type: "post",
		url: url,
		data:JSON.stringify(focusArr),
		contentType: "application/json",
		dataType: "json",
	}).then(function (data){
		
		// "expectuser": "预计签约客户人数",下
		//"alluser": "符合要求的的客户" 上
		//console.log(data);
		
		if(data.msg == "success"){
			nextData.city = focusArr;
			nextData.lineOff = lineOff;
			nextData.twoLine = twoLine;
			$.setSessionStorage('usermessage',JSON.stringify(nextData));
			$.setSessionStorage('topData',data.data.alluser);
			$.setSessionStorage('bottomData',data.data.expectuser);
			if(data.data.alluser>=1000){
				location.href = '/detail.html';
			}else{
				location.href = '/no-result.html';
			}
			
		}else{
			location.href = '/no-result.html';
		}
		
	}).fail(function (data){
		location.href = '/no-result.html';
	});
	
	//topData   

    //bottomData
	ev.preventDefault(); 
	ev.stopPropagation();
});



$(document).on('touchstart','.funicon',function (ev){
	var target = ev.target;
	var boxh = $('.usermessage ul').outerHeight();

	if($(target).hasClass('current')){
		$(target).removeClass('current');
		
		if(boxh>80){
			$('.usermessage').css({height:'100px'});
		}
	}else{
		$(target).addClass('current');
		if(boxh>80){
			$('.usermessage').height(boxh);
		}
	}
	ev.preventDefault(); 
	ev.stopPropagation();
});

//二线城市展示 收起
$(document).on('vclick','.findingadd',function (ev){
	var  target = ev.currentTarget;
	if($(target).hasClass('current')){
		$(target).removeClass('current').html('查看更多');
		$('.defaultcity').show();
		$('.currentcitylist').hide();
	}else{
		$('.defaultcity').hide();
		$('.currentcitylist').show();
		$(target).addClass('current').html('收起');
	}
	ev.preventDefault(); 
	ev.stopPropagation();
});













