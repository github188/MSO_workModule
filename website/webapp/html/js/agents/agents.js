$(".info p").click(function(){
	$(".update-info").slideToggle();
});

$(".update-pswd").click(function(){
	$(".cover").show();
});

//表单验证
$("input.oldPswd").blur(function(){
	if($(this).val() == ''){
		$(this).addClass("error");
		$(this).parent().find("p.error").text("请输入您的原始密码").show();
		return false;
	}else{
		$(this).removeClass("error");
		$(this).parent().find("p.error").hide();
	}
});
$("input.oldPswd").focus(function(){
	$(this).removeClass("error");
	$(this).parent().find("p.error").hide();
});

 $("input.newPswd").blur(function(){
	if($(this).val() == ''){
		$(this).addClass("error");
		$(this).parent().find("p.error").text("请输入您的新密码").show();
		return false;
	}else if($(this).val().length<6 || $(this).val().length>18){
		$(this).addClass("error");
		$(this).parent().find("p.error").text("请输入6~18位密码").show();
		return false;
	}else{
		$(this).removeClass("error");
		$(this).parent().find("p.error").hide();
	}
});
$("input.newPswd").focus(function(){
	$(this).removeClass("error");
	$(this).parent().find("p.error").hide();
});  

$("input.confirmPswd").blur(function(){
	if($(this).val() == ''){
		$(this).addClass("error");
		$(this).parent().find("p.error").text("请再次确认您的新密码").show();
		return false;
	}else if($(this).val() != $("input.newPswd").val()){
		$(this).addClass("error");
		$(this).parent().find("p.error").text("请确保两次输入的密码一致").show();
		return false;
	}else{
		$(this).removeClass("error");
		$(this).parent().find("p.error").hide();
	}
});
$("input.confirmPswd").focus(function(){
	$(this).removeClass("error");
	$(this).parent().find("p.error").hide();
});      

//提交密码修改
$("button.btn-save").click(function(){
	$(".cover input").blur();
	if($(".cover input").hasClass("error")){
		return false;
	}
	var data = {
		jfuid:sessionStorage.getItem("jfuid"),
        oldPassword:$("input.oldPswd").val(),
        newPassword:$("input.newPswd").val(),
		newCPassword:$("input.confirmPswd").val()
	};
	$.ajax({
		type:"post",
		url:urlPswd,
		async:true,
		data:data,
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        dataType: "json",
        success:function(data){
        	if(data.code=="Y"){
        		$(".cover").hide();
        		$(".fadeOut").show().fadeOut(3000);
        		$(".cover input").val("");
        	}else{
        		$("input.oldPswd").addClass("error");
        	    $("input.oldPswd").next().show().text(data.msg);
        	}
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
        	if(XMLHttpRequest.status=="500"){
        		//window.location.href = "../page500.html";
        	}else if(XMLHttpRequest.status=="404"){
        		//window.location.href = "../page500.html";
        	}else{
        		console.log(XMLHttpRequest);
				console.log(textStatus);
				console.log(errorThrown);
        	}
	    },
	});
});

//点击关闭按钮退出
$("button.btn-cancel").click(function(){
	$(".cover").hide();
	$(".cover input").val("");
	$(".cover input").removeClass("error");
	$(".cover p.error").hide()
});

//点击退出
$('a.logout').click(function(){
	msoLoginOut(function(){
		window.location.href="../index.html";
	});
});


var urlTab  = domain137 + '/quality/hproxypage';
var $table = $('#tabList');
//文档地址http://bootstrap-table.wenzhixin.net.cn/zh-cn/documentation/
/*自定义头部*/
/*自己填写数据*/
$('#tabList').bootstrapTable({
	url:urlTab,
	pagination: false, //关闭分页
	//pagesize:10,
	contentType:'application/json',
	search:false,//关闭搜索
	showColumns:false,//关闭选择显示窗口
	striped: true,
	checkbox:false,
	queryParams:function (params){
		/*自定义参数,如果有参数在这里定义*/
		var data = {
			jfuid:sessionStorage.getItem("jfuid"),
		};
		return data;
	},
	responseHandler:function(res){
		var newJson = {};
		//console.log(res.proxycompname);
		newJson.data = res.data;
		$("span.companyName").text(res.proxycompname);
        return newJson;
	},
	formatNoMatches:function(){
	    return '没有搜索结果'
	},
	formatLoadingMessage:function(){
	    return '正在努力加载中...';
	},
	columns:[
		{visible: false, align: 'center', valign: 'middle'},
		{  
	    	field: 'compname',  
	    	title: '发包方公司'  
	    }, {  
	    	field: 'demandName',  
	    	title: '需求名称'  
	    }, {  
	    	field: 'releaseQuantity',  
	    	title: '需求总量'  
	    }, {  
	    	field: 'completeQuantity',  
	    	title: '完成总量'
	    }, {  
	    	field: 'vestingTime',  
	    	title: '归属年月'
	    }, {  
	    	field: 'channelrule',  
	    	title: '支付规则',
	    	formatter:function(value,row,index){
				if(row.channelrule==1){
					var channelrule = '首单支付 '; 
				}else{
					var channelrule = '持续支付 ';
				}
	        	var channelprice = row.channelprice + '元/单';  
	            return channelrule + channelprice;  
	        } 
	    }, {  
	    	field: 'settlementPrice',  
	    	title: '结算金额',
	    	formatter:function(value,row,index){
	        	var settlementPrice = row.completeQuantity*row.channelprice;  
	            return settlementPrice;  
	        },
	    }
	]  
});
//表格加载完成 计算总额
$("#tabList").on('load-success.bs.table',function(data){
	var colsNum = 0;
    $("#tabList tbody tr").each(function(){
    	var sunNum = $(this).children("td:last").text()*1;
    	//console.log("获取到的值："+sunNum);
    	colsNum += sunNum;
    	//console.log("计算到的值："+colsNum);
    });
	if(isNaN(colsNum)){ 
		$(".totalNum span").text("0");
	}else{
		$(".totalNum span").text(colsNum.toFixed(2));
	}
});