<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户登录</title>
        <script src="js/tj.js"></script>
        <style type="text/css">
          .error{margin-left:56px;width:340px;color: #fff;}
        </style>
</head>
<body id="login" onkeydown="on_return(event)">

    <!-- jsp文件头和头部 -->
	<%@ include file="../header2.jsp"%>
    <div class="main">
          
        <div class="login" style="top:40%;width:545px;height:434px;margin-top:-117px;margin-left:-272.5px;padding:35px 15px 30px 15px;">
            <div class="error"><span></span></div>
            <div style="width:auto;">
                <img src="home2/images/user.png" style="margin:auto;">
                <p style="font-size:24.32px;margin:15px 0px 20px 0px;">用户登录</p>
                <p style="margin-bottom:30px;position: relative;"><i id="username"></i><input autocomplete="off" type="text" id="email" 
                <c:if test="${1==remember}">
                value="${username}"
                 </c:if>
                 name="userName"  placeholder="支持手机号/邮箱登录" style="padding-left:34px;"></p>
                <p style="position: relative;"><i id="password"></i><input autocomplete="off"  type="password" name="passWord"  
                <c:if test="${1==remember}">
                value="${password}"
                 </c:if>
                placeholder="请输入密码" style="padding-left:34px;"></p>
                <p style="line-height:30px;text-align: left;">
                <input type="hidden" name="remember" value="${remember}" id="remember">
                <input type="checkbox" name="remember"
                <c:if test="${1==remember}">
                 checked="checked"
                </c:if>
                onclick="setValue(this)">&nbsp;<span>记住账号</span></p>
                
                <p><button type="button" id="logindo">登录</button></p>
                <div><a href="javascript:">忘了密码？</a><a href="home2_toRegister" style="border-left:1px solid #fff;border-right:1px solid #fff;color:#006cb8;padding:0 1em;margin:0 1em;">注册新账号</a><a href="javascript:">意见反馈</a></div>
            </div>
        </div>
    </div>
    <script>
    $(".header .nav li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    function setValue(sender){
      if(sender.checked){
        document.getElementById("remember").value="1";
      }else{
      	document.getElementById("remember").value="0";
      }
    }
    
    
          //回车时，默认是登陆
	 function on_return(evt){
	    evt = (evt) ? evt : ((window.event) ? window.event : ""); 
	    var key = evt.keyCode?evt.keyCode:evt.which;//兼容IE和Firefox获得keyBoardEvent对象的键值 
		if(key == 13){
		  $('#logindo').click();
		}
	 }
    
    
    
	function checkForm(){
		if (!checkEmail() | !checkPwd()){
	        if(!checkEmail()){
	            $("#email").blur();
	        }else{
	            if(!checkPwd()){
	                $("#password").blur();
	            }
	        }
			return false;
		}
		return true;
	}
	function checkEmail(){
		var email = document.getElementById('email');
		email.value = $.trim(email.value);
		var value = email.value;
		if(value==""){
			$(".error span").html("请输入登录账号。");
			return false;
		}
		return true;
	}
	function checkPwd(){
		var pwd = document.getElementById('password');
		if(pwd.value==""){
			$(".error span").html("请输入登录密码。");
			return false;
		}
		return true;
	}

	$('#logindo').click(function(){
		if(checkForm())
		{
			 var data={
	            "jfuname":$("input[name=userName]").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
	            "remember":document.getElementById("remember").value,
	            "jfupassword":$("input[name=passWord]").val()//密码(密文)用于登录(6-20 位    区分大小写)
	         };
			$.post('user_toLogin',data,function(res){
				if(res.code=="Y"){
				   var sucmsg="";
	               if(null==res.pid||""==res.pid){
	                  	sucmsg=sucmsg+"-主账号 ";
		                if("1"==res.jfutype){//发包方
		                  	if("4"==res.jfustate){//发包方
		                		window.location.href = '../mso1.4.2/customer_home.html';
		                	}else{
		                		window.location.href = 'customer_lj_AccountManagement';
		                	}
		                }
		                if("2"==res.jfutype){//接包方
		                	if("4"==res.jfustate){//接包方
		                		window.location.href = '../mso1.4.2/supplier_index.html';
		                	}else{
		                		window.location.href = 'supplier_lj_Supplier_BasicInfo';
		                	}
		                }
	                }else{
	                	sucmsg=sucmsg+"-子账号 ";
		                if("1"==res.jfutype){//发包方
		                  window.location.href = 'customer_lj_AccountManagement';
		                }
		                if("2"==res.jfutype){//接包方
		                   window.location.href = '../mso1.4.2/supplier_index.html';
		                }
	                }
					sessionStorage.setItem("jfuid",res.jfuid);
					sessionStorage.setItem("jfutype",res.jfutype);
					sessionStorage.setItem("pid",res.pid);
					sessionStorage.setItem("jfuname",res.jfuname);
					sessionStorage.setItem("jfustate",res.jfustate);
					sessionStorage.setItem("jfumobilephone",res.jfumobilephone);
					sessionStorage.setItem("invitationcode",res.invitationcode);
					sessionStorage.setItem("showName",res.showName);
					sessionStorage.setItem("headurls",res.headurls);
				}else{
                    $(".error span").html(res.msg);
				}
			});
		}
	});
    </script>
</body>
</html>