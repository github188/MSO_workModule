<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>  
<!DOCTYPE html>
<html>
<head lang="en">
    <title></title>
    <meta charset="UTF-8">
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<script src="js/tj.js"></script>
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>	
	<script type="text/javascript" src="js/jquery.validate.js"></script>
    <link href="../html/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="../html/css/style.css"/>
	<link rel="stylesheet" href="css/style.css"/>
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script src="../html/js/bootstrap.min.js"></script>
	<script src="../html/js/react.js"></script>
	<script src="../html/js/react-dom.js"></script>
	<script src="../html/js/browser.min.js"></script>
	<script src="../html/js/main.js"></script>
	<script src="../html/js/url.js"></script>
</head>
<body class="supplier">
    <form name="theform" action="customer_lj_DemandList?zt=dsjdemand">
	    <input type="text" id="uid"  name="uid" value="${user.jfuid}"  size="50" style="display:none;" />
	    <input type="radio" name="myradio" value="random_name" checked style="display:none;"/>
	    <input type="text" id="dirname" value="2016/01/21" size="50" style="display:none;"/>
	    <input type="hidden" id="pagename" value="${pagename}" size="50" />
	</form>
	<!-- jsp文件头和头部 -->
	<div class="topNav"></div>
	
    <div class="content">
        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
				<%@ include file="../lmenu.jsp"%>
			
	    		<div class="content_right">
	    			<div class="tips">安全提醒：为确保您的账号安全，如果已启用的账号使用者发生人事变更，请及时修改对应的账号权限！</div>
	    			
	    			<div class="personal_info edit">
	    				<div class="title_edit">新增子账号</div>
	    				<form method="post" action="">
	    				<ul>
	    					<li>
	    						<label class="edit"><span>*</span> 用户账号：</label>
	    						<input class="accountName" type="text" placeholder="请输入8位以上的字母与数字的组合，必须是以字母开头" />
	    						<span></span>
	    					</li>
	    					<li>
	    						<label class="edit"><span>*</span> 登录密码：</label>
	    						<input class="loginPsd" type="password" placeholder="请输入6位以上的字母与数字的组合" />
	    						<span></span>
	    					</li>
	    					<li>
	    						<label class="edit"><span>*</span> 确认密码：</label>
	    						<input class="loginPsd1" type="password" placeholder="请再次输入您的密码" />
	    						<span></span>
	    					</li>
	    					<li class="line_bottom">
	    						<label class="edit"><span>*</span> 用户状态：</label>
	    						<input type="radio" name="jfudisable" id="input1" checked="checked" style="margin-left: 10px;" />启用
	    						<input type="radio" name="jfudisable" style="margin-left: 10px;" />停用
	    						<span></span>
	    					</li>
	    					<li>
	    						<label class="edit"></label>
	    						<button class="btn_submit" type="button" style="width: 120px;" onclick="addAccount();">确认提交</button>
	    					</li>
	    				</ul>
	    				</form>
	    			</div>
	    		</div>
				<script>
					jQuery(function(){
						//用户账户
						var oUser = /^[a-zA-Z0-9]{1,}$/;
						var oFirstletter = /^[a-zA-Z]{1}/;
						$("input.accountName").blur(function(){
							if($(this).val() == ''){
				                $(this).addClass("error");
				                $(this).next().html("请输入用户账号");
				                $(this).next().addClass("msg_error");
				            }else if($(this).val().length<8){
				                $(this).addClass("error_red");
				                $(this).next().text("请输入8个以上的字符");
				            }else if(!$(this).val().match(oFirstletter)){
				            	$(this).next().text("第一个字符必须为字母");
				            }else if(!$(this).val().match(oUser)){
				            	$(this).next().text("只能输入字母与数字且必须是以字母开头");
				            }else{
				                $(this).removeClass("error_red");
				                $(this).next().text("");
				            }
						});
						$("input.accountName").focus(function(){
				            $(this).removeClass("error");
				            $(this).next().removeClass("msg_error");
				        });
						//密码验证
				        $("input.loginPsd, input.loginPsd1").blur(function(){
				            if($(this).val() == ''){
				                $(this).addClass("error");
				                $(this).next().html("请输入原始密码");
				                $(this).next().addClass("msg_error");
				            }else if($(this).val().length<6){
				                $(this).addClass("error");
				                $(this).next().html("请输入6~20位密码");
				                $(this).next().addClass("msg_error");
				            }else if($(this).val().length>20){
				                $(this).addClass("error");
				                $(this).next().html("请输入6~20位密码");
				                $(this).next().addClass("msg_error");
				            }else{
				                $(this).removeClass("error");
				                $(this).next().html("");
				                $(this).next().removeClass("msg_error");
				            }
				        });
				        $("input.loginPsd, input.loginPsd1").focus(function(){
				            $(this).removeClass("error");
				            $(this).next().removeClass("msg_error");
				        });
				        //确认新密码
				        $("input.loginPsd1").blur(function(){
				        	if($("input.loginPsd1").val() != $("input.loginPsd").val()){
				        		$(this).addClass("error");
					        	$(this).next().html("请确保两次密码一致");
					        	$(this).next().addClass("msg_error");
					        }else{
					        	$(this).removeClass("error");
					        	$(this).next().html("");
					        	$(this).next().removeClass("msg_error");	
					        }
				        });
					});
					function addAccount(){
						 var subAccount={
				            "jfutype":3,  //1-发包方   2-接包方 3-子账号
				            "jfuname":$("input.accountName").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
				            "jfupassword":$("input.loginPsd").val(),//密码(密文)用于登录(6-20 位    区分大小写)
				            "jfudisable":$("input[name=jfudisable]:checked").is("#input1")?"1":"2"//1-启用  2-停用
				        };
						$.post("user_toRegoster",subAccount,function(date){
							if(date.code=="Y"){
								alert("新增成功！");
								window.location="supplier_lj_manegeAccount";
							}else{
								alert(date.msg);
							}
						});
					}
				</script>
    		</div>
    	</div>
    </div>
	    <c:if test="${user.jfutype=='1'}">
	    	 <script src="../html/js/header-customerHall.js" type="text/babel"></script>
	    </c:if>
	    <c:if test="${user.jfutype=='2'}">
	    	<script src="../html/js/header-supplierHall.js" type="text/babel"></script>
	    </c:if>
		<script src="../html/js/footer.js" type="text/babel"></script>
		<!-- jsp文件尾部和尾部
		< include file="../cfooter.jsp"%> -->
		<div class="footer_box"></div>
</body>
</html>
