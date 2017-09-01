//获取数据
/*行业开始*/
function getInstusrydata(callBack){
	var url = domain137 + 'quality/getIndustryList';
	callBack = callBack || function (){};
	$.ajax({
		url:url,
	}).then(function (data){
		callBack(data.data.list[0]);
	});
}
$(".list li").bind("touchstart",function(ev){
	var target = ev.currentTarget;
	$(".list li").removeClass('active');
	var mark = $(target).attr('data-item');
	
	if(mark == 'myindustry'){
		$(".industry").show();
		$(".industry").animate({opacity:1},200);
	}
	$(target).addClass('active');
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
	data.list.map(function (item,index){
		if(item.onoff == code) {
			var oLi = $('<li>');
			oLi.data(item).html(item.name);
			ele.append(oLi);
		}
		
		if(code === false){
			var oLi = $('<li>');
			oLi.html(item.name);
			ele.append(oLi);
		}
	});
}

//切换数据 线上线下
$(".first-list li").bind("touchstart",function(ev){
	var target = ev.currentTarget;
	var code  = $(target).attr('data-code');
	$(".first-list li").removeClass('current');
	$(target).addClass('current');
	$('.second-list').html('');
	
	//模拟数据 (获取当前index数据在进行加在)
	var data = $('.first-list').data();
	if(data){
		createIndustry(data,code,$('.second-list'));
	}else{
		console.log('你还没有获取到数据');
	}
	
});

//切换数据二级分类 
$(document).on('touchstart','.second-list li',function (ev){
	var target = ev.currentTarget;
	
	$(".second-list li").removeClass('current');
	$(target).addClass('current');
	$('.thirty-list').html('');
	
	var data = $(target).data();
	console.log(data);
	createIndustry(data,false,$('.thirty-list'));
});

//三级current
$(document).on('touchstart','.thirty-list li',function (ev){
	var target = ev.currentTarget;
	$(".thirty-list li").removeClass('current');
	$(target).addClass('current');
	$('.industry').animate({opacity:0},500,function (){
			$(target).hide();
	});
	//在这里回填list
});

$(".industry").bind("touchstart",function(ev){
	var target = ev.target;
	if($(target).hasClass('industry')){
		$(target).animate({opacity:0},500,function (){
			$(target).hide();
		});
	}
});
/*行业结束*/


/*城市开始*/

$(".hotlist li").bind("touchstart",function(ev){
	var target = ev.currentTarget;
	$(target).addClass('current');
});


//https://www.mshuoke.com//getBaseRegionType/2;
function getCityData(callBack){
	var url = domain  + '/getBaseRegionType/2';

	callBack = callBack || function (){};
	$.ajax({
		url:url,
	}).then(function (data){
		callBack(data);
	});
}


	//complex
	getCityData(function (data){
		createComplexCity(data);
	});
	
	function createComplexCity(data){ 
		var items = data.basreglist;
		items.map(function (item,index){
			for(var name in item){
				$(".sort_letter"+name).html(name);
				$(".sort_list"+name).append('<li data-code="'+item[name].regionId+'">'+item[name].regionName+'</li>');
			}
		});
	}
	













