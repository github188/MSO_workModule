
<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<style>
    body{padding-top:90px;}
    div.login{ background: url(images/login/u0.png) center center no-repeat; background: url(images/login/u0.png) center center repeat\0; background-size: cover; overflow: hidden; padding: 110px 0; padding: 95px 0\0;}
    div.login:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    div.login>div{width:1200px;height:100%;margin:auto;}
    .loginBack{width:100%;display:block;margin:-1px;}
    .loginImg{width:434px;height:341px; float: left; margin-left: 135px;}
    .loginWindow{ margin-right: 80px; width:350px;height:364px;font-size:14px;background: #F3E0E1;padding: 35px 25px;box-sizing: border-box; float: right;}
    .loginWindow .title{font-size: 16px;font-weight: 700;margin-bottom:30px;}
    .loginWindow p{margin-bottom:20px;}
    p.username,p.password{position: relative;width:300px;height:42px;}
    p.username input::-webkit-input-placeholder{margin-left:50px;}
    p.username img,p.password img{position: absolute;left:1px;top:1px;}
    p.username input,p.password input{width:300px;height:42px;border:1px solid #E3D1C4;outline:none;padding-left:48px;color:#666;box-sizing: border-box;}
    p.rp>label{vertical-align:middle;}
    p.rp>input{vertical-align:middle;margin-right:6px;margin-top:2px;}
    p.rp>a{vertical-align:middle;float:right;margin-top:3px;}
    p.submitBtn button{cursor:pointer;width:300px;height:40px;background: #FEB24D;border:none;outline: none;border-radius: 3px;color:#fff;font-size:16px;}
    p.register span{margin-right:10px;}
    p.register a{color:#0000FF;}
    .error{margin-left:56px;width:340px;color: red;}
</style>
<body>

<aside>
    <ul>
        <li class="not"><a href="tencent://message/?uin=2850840272&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>发包方</li>
        <li><a href="tencent://message/?uin=2850840278&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>接包方</li>
        <li class="scroll"><a href="javascript:" class="scroll bottom"></a></li>
    </ul>
</aside>

<!-- jsp文件头和头部 -->
<%@ include file="../header.jsp"%>


<div class="login">    
    <div>
        <img src="images/login/u65.png" class="loginImg"/>
       <div class="loginWindow">
            <p class="title">账户登录</p>
            <form id="loginForm" class="login" method="post" action="index.html">
                <div class="error"><span>您的用户名或密码错误。</span></div>
                <p class="username"><img src="images/login/user.png" /><input id="email" type="text" name="userName" placeholder="手机号/会员名" /></p>
                <p class="password"><img src="images/login/password.png" /><input id="password" name="passWord" placeholder="密码" type="password"/></p>
                <p class="rp"><input type="checkbox"  id="a"/><label for="a"><span>记住我两小时</span></label><a href="" style="color:rgb(255,153,0);"><span>忘记密码？</span></a></p>
			    <p class="submitBtn"><button id="login" class="shadow btn" type="button">登录</button></p>
                <p class="register"><span>没有账号？</span><a href="home_toRegister" style="color:rgb(255,153,0);">马上注册>></a></p>
            </form>
        </div>
    </div>
</div>

<script>
    //页面滚动时出现aside栏目
    $(window).scroll(function(){if($(this).scrollTop()<100){$("aside .scroll").removeClass("top").addClass("bottom");}else{$("aside .scroll").removeClass("bottom").addClass("top");}});
    //返回顶部和跳到底部切换
    var flag=true;
    $("aside .scroll").click(function(){
        if(flag){
            flag=false;
            if($(this).hasClass("top")){
                $("html,body").animate({"scrollTop":0},500,"swing",function(){
                    $("aside .scroll").removeClass("top").addClass("bottom");
                    flag=true;
                });
            }else{
                $("html,body").animate({"scrollTop":$("body").height()},500,"swing",function(){
                    $("aside .scroll").removeClass("bottom").addClass("top");
                    flag=true;
                });
            }
        }
    });
</script>

<script type="text/javascript">
var times;
var i;
$(function(){
 $(".error span").html("");
});

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
	var _email=document.getElementById('email_warn_box');
	var warn=document.getElementById('email_warn');
	email.value = $.trim(email.value);
	var value = email.value;
	if(value==""){
		return false;
	}
	return true;
}
function checkPwd(){
	var pwd = document.getElementById('password');
	var _password=document.getElementById('pw_warn_box');
	var warn1=document.getElementById('pw_warn');
	if(pwd.value==""){
		return false;
	}
	return true;
}

$('#login').click(function(){
		if(checkForm())
		{
			 var data={
	            "jfuname":$("input[name=userName]").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
	            "jfupassword":$("input[name=passWord]").val()//密码(密文)用于登录(6-20 位    区分大小写)
	         };
			$.post('user_toLogin',data,function(res){
				if(res.code=="Y"){
					var sucmsg="";
	                if("1"==res.jfutype){
	                  sucmsg=sucmsg+"发包方 ";
	                }
	                if("2"==res.jfutype){
	                  sucmsg=sucmsg+"接包方 ";
	                }
					if(null==res.pid||""==res.pid){
	                  sucmsg=sucmsg+"-主账号 ";
	                }
	                if("0"==res.jfustate){
	                	sucmsg=sucmsg+"-(0-提交中 )";
	                }
	                if("2"==res.jfustate){
	               	 	sucmsg=sucmsg+"-(2-跟踪处理中/审核中 )";
	                }
	                if("3"==res.jfustate){
	                	sucmsg=sucmsg+"-(3-驳回   )";
	                }
	                if("4"==res.jfustate){
	                	sucmsg=sucmsg+"-(4-审核通过处理完成)";
	                }
					if("1"==res.jfutype){//发包方
	                   window.location.href = 'customer_lj_AccountManagement';
	                }
	                
	                if("2"==res.jfutype){//接包方
	                   window.location.href = 'supplier_lj_Supplier_BasicInfo';
	                }
				}else{
                    $(".error span").html(res.msg);
				}
			});
		}
	});
	$(function(){
		document.onkeydown = function(e){
		    var ev = document.all ? window.event : e;
		    if(ev.keyCode==13) {
		    	$('#login').click();
		     }
		}
	});

	$(function(){
		var scroll_flag = true;
		var scroll_num = 0;
		setInterval(function(){
			if(scroll_flag){
				var first_dynamic = $("#scroll_dynamic");
				scroll_num++;

				if(scroll_num == 3) scroll_num = 0;

				$(".dynamic_num li.active").removeClass("active");
				$(".dynamic_num li").eq(scroll_num).addClass("active");

				first_dynamic.animate({"margin-left":"-1000"*scroll_num + "px"}, 1500);
			}

		}, 15000);

		$(".dynamic_num li").bind("click", function(){
			scroll_num = $(this).index();
			scroll_flag = false;

			$(".dynamic_num li.active").removeClass("active");
			$(".dynamic_num li").eq(scroll_num).addClass("active");

			var first_dynamic = $("#scroll_dynamic");
			first_dynamic.animate({"margin-left":"-1000"*scroll_num + "px"}, 1500, function(){

				scroll_flag = true;
			});
		});	});

</script>


<!-- jsp文件尾部和尾部 -->
<%@ include file="../footer.jsp"%>
</body>
</html>