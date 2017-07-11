<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>  
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>	
<script type="text/javascript" src="js/jquery.validate.js"></script>



<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
    
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
<body class="changePassword">
    <!-- jsp文件头和头部 -->
	<div class="topNav"></div>
    <div class="content" style="width: 1200px; margin: 0 auto; padding-top: 60px;">
    		
    	<div class="mid_bg">
    		<div class="mid_box">
		        <%@ include file="../lmenu.jsp"%>
	    		<div class="content_right">
	    			<div class="tips_success" id="tips" style="display: none">您的密码已经修改成功！</div>
	    			<div class="tips" >安全提示：请妥善保管密码！眸事网工作人员不会以任何理由向您索取密码！</div>
	    			<div style="border-radius: 4px;
					    background: #fff4e4;
					    border: 1px #f38f00 solid;
					    line-height: 38px;
					    text-indent: 20px;
					    color: red;
					    margin-bottom: 20px;display: none" id="tipssss" class="tipssss">
	    			</div>
	    			<form onsubmit="return submitPost();">
	    			<div class="personal_info" style="min-height: 590px;">
	    				<ul>
	    					<li>
	    						<label>当前密码：</label>
	    						<input class="pswd_old" name="pswd_old" type="password" value=""/>
	    						<span>请输入旧密码</span>
	    					</li>
	    					<li>
	    						<label>设置新密码：</label>
	    						<input class="pswd_new" name="pswd_new" type="password" />
	    						<span>请输入您的6~20位新密码</span>
	    					</li>
	    					<li>
	    						<label>确认新密码：</label>
	    						<input class="pswd_new_confirm" name="pswd_new_confirm" type="password" />
	    						<span>请再次输入您的新密码</span>
	    					</li>
	    					<li>
	    						<label></label>
	    						<button class="btn_submit" type="submit">确定</button>
	    					</li>
	    				</ul>
	    			</div>
	    			</form>
	    			<script>
	    				jQuery(function(){
	    					//密码验证
					        $("input.pswd_old, input.pswd_new, input.pswd_new_confirm").blur(function(){
					            if($(this)[0].validity.valueMissing){
					                $(this).addClass("error");
					                $(this).next().html("请输入原始密码");
					                $(this).next().addClass("msg_error");
					            }else if($(this)[0].value.length<6){
					                $(this).addClass("error");
					                $(this).next().html("请输入6~20位密码");
					                $(this).next().addClass("msg_error");
					            }else if($(this)[0].value.length>20){
					                $(this).addClass("error");
					                $(this).next().html("请输入6~20位密码");
					                $(this).next().addClass("msg_error");
					            }else{
					                $(this).removeClass("error");
					                $(this).next().removeClass("msg_error");
					            }
					        });
					        $("input.pswd_new, input.pswd_new_confirm").focus(function(){
					            $(this).removeClass("error");
					            $(this).next().removeClass("msg_error");
					        });
					        //确认新密码
					        $("input.pswd_new_confirm").blur(function(){
					        	if($("input.pswd_new_confirm").val() != $("input.pswd_new").val()){
					        		$(this).addClass("error");
						        	$(this).next().html("请确保两次密码一致");
						        	$(this).next().addClass("msg_error");
						        }else{
						        	$(this).removeClass("error");
						        	$(this).next().removeClass("msg_error");	
						        }
					        });
	    				})
	    				
	    				


	    				function submitPost(){
						        var data={
						            "oldPassword":$("input[name=pswd_old]").val(),
						            "newPassword":$("input[name=pswd_new]").val(),
						            "newCPassword":$("input[name=pswd_new_confirm]").val()
						        };
						        $.post("customer_lj_ChangePasswordDo",data,function(date){
						                if(date.code=="Y"){
							                document.getElementById("tips").style.display="";
							                document.getElementById("tipssss").style.display="none";
						            		console.log(date);
						            	}else{
						            		$("#tipssss").text(date.msg);
						            		document.getElementById("tipssss").style.display="";
						            		document.getElementById("tips").style.display="none";
						            	}
					        });
					        return false;
				        }
	    			</script>
	    		</div>
	    		
    		</div>
    		
    	</div>
    </div>
    <div class="aside_bar"></div>
	<script src="../html/js/asideBar.js" type="text/babel"></script> 
    	<c:if test="${user.jfutype=='1'}">
	    	 <script src="../html/js/header-customerHall.js" type="text/babel"></script>
	    </c:if>
	    <c:if test="${user.jfutype=='2'}">
	    	<script src="../html/js/header-supplierHall.js" type="text/babel"></script>
	    </c:if>
		<script src="../html/js/footer.js" type="text/babel"></script>
       <div class="footer_box"></div>
</body>
</html>