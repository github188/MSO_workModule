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
$("button.btn-cancel,span.closed").click(function(){
	$(".cover").hide();
	$(".cover input").val("");
	$(".cover input").removeClass("error");
	$(".cover p.error").hide()
});