$(function(){
    //home hover tab
    var $div_li = $("div.hover_menu ul li");
    	$div_li.mouseover(function(){
    		$(this).addClass("selected").siblings().removeClass("selected");
    		var index =  $div_li.index(this); 
			$("div.hover_box .box_info").eq(index).show().siblings().hide();
    	});
    	
    	
    //最近使用的功能
	$(".menu_left .recently-used").hover(function(){
	    $(this).children(".level2").toggle();
	});
	//返回顶部
    $(".go-to-top").click(function(){
	    $('html,body').animate({scrollTop: '0px'}, 800);
	});
    
	$("li.building").click(function(){
		alert("功能开发中，稍后推出。");
	})
})


//存储cookie共用方法
function setCookie(name,value,time){ 
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

