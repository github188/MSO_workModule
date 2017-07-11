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
<body class="photoSet">
	<form name="theform" action="customer_lj_DemandList?zt=dsjdemand">
	    <input type="text" id="uid"  name="uid" value="${user.jfuid}"  size="50" style="display:none;" />
	    <input type="radio" name="myradio" value="random_name" checked style="display:none;"/>
	    <input type="text" id="dirname" value="2016/01/21" size="50" style="display:none;"/>
	    <input type="hidden" id="pagename" value="${pagename}" size="50" />
	</form>
    <!-- jsp文件头和头部 -->
	<div class="topNav"></div>
    <div class="content" style="width: 1200px; margin: 0 auto; padding-top: 60px;">
    	<div class="mid_bg">
    		<div class="mid_box">
    			<%@ include file="../lmenu.jsp"%>
	    		<div class="content_right">
	    		    <div class="tips_success" id="tips" style="display: none">您的头像已经设置成功！</div>
	    			<div class="tips">温馨提示：您可在这里修改您的头像！</div>
	    			<div class="personal_info" style="min-height: 570px;">
	    				<div class="default_photo file-list">
								<img src="${user.headurls}" />
	    				</div>
	    				<div class="upload_photo">
							<div class="ossfile" ></div>
							<div class="container">
								<button type="button" id="selectfiles">选择图片</button>
								<button type="button" id="postfiles">上传头像</button>
							</div>
	    					<p>注：请使用真实头像，支持格式为jpg、jpeg、gif、png，图片大小限制2M以下</p>
	    				</div>
	    			</div>
	    		</div>
	    		
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
    <div class="footer_box"></div>
    <!-- jsp文件尾部和尾部 -->
    <div class="aside_bar"></div>
	<script src="../html/js/asideBar.js" type="text/babel"></script> 
	<script>
						var file1="";
						//最后一次上传的图片。按顺序对应。
						function submitPost(){
						        var data={
						            "headurl":file1
						        };
						        $.post("customer_lj_PhotoSetDo",data,function(date){
						                if(date.code=="Y"){
						                	sessionStorage.setItem("headurls",date.headurls);
						                	localStorage.setItem("headurls",date.headurls);
						                    document.getElementById("tips").style.display="";
						            		console.log(date);
						            	}else{
						            	    alert(date.msg);
						            	}
					        });
					        return false;
				        }
	</script>
				        
	<script type="text/javascript" src="lib/crypto1/crypto/crypto.js"></script>
	<script type="text/javascript" src="lib/crypto1/hmac/hmac.js"></script>
	<script type="text/javascript" src="lib/crypto1/sha1/sha1.js"></script>
	<script type="text/javascript" src="lib/base64.js"></script>
	<script type="text/javascript" src="js/plupload.full.min.js"></script>
	<script type="text/javascript" src="js/upload.js"></script>
	
</body>
</html>