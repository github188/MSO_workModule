
<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/jquery-1.7.2.min.js"></script>
</head>
<body>
<!-- jsp文件头和头部 -->
<div class="login">    
    <div>
       <div class="loginWindow">
            <p class="title">定时器测试 -需求订单状态检查更新</p>
            <form id="loginForm" class="login" method="post" action="">
                <div class="error"><span></span></div>
			    <p class="submitBtn"><button id="login" class="shadow btn" type="button">跑起来</button></p>
            </form>
        </div>
    </div>
</div>


<div class="login">    
    <div>
       <div class="loginWindow">
            <p class="title">强制更新-模板基本数据</p>
            <form id="loginForm1" class="login" method="post" action="">
                <div class="error1"><span></span></div>
			    <p class="submitBtn"><button id="updatetemplate" class="shadow btn" type="button">更新</button></p>
            </form>
        </div>
    </div>
</div>


<script type="text/javascript">
	var times;
	var i;
	$(function(){
	 $(".error span").html("");
	 $(".error1 span").html("");
	});

	$('#login').click(function(){
			 var data={
	         };
			$.post('user_DemandSettlement',data,function(res){
				if(res.code=="Y"){
				    $(".error span").html("完成!");
				}else{
                    $(".error span").html(res.msg);
				}
			});
	});
	
	
	$('#updatetemplate').click(function(){
			 var data={
	         };
			$.post('user_UpdateTemplate',data,function(res){
				if(res.code=="Y"){
				    $(".error1 span").html("更新完成!");
				}else{
                    $(".error1 span").html(res.msg);
				}
			});
	});
</script>

</body>
</html>