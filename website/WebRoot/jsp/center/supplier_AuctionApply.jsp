<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head lang="en">
    <title></title>
    <meta charset="UTF-8">
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
    <script src="js/tj.js"></script>
</head>
<body class="supplier">
	<%@ include file="../cheader.jsp"%>
    <div class="content">
      	<%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		 	<%@ include file="../lmenu2.jsp"%>
						<div class="content_right">
						    <div class="main_overview" style="min-height:740px;">
							    <div class="AuctionApply">
							    <p class="title">申请竞拍</p>
							    <p class="main"><img src="images/supplier/prompt.jpg">
							    <c:if test="${'Y'==res.code}">
							       <span>您已申请竞拍这个订单，客服会在2个工作日内给您审核完毕！</span>
							    </c:if>
							    
							    <c:if test="${'Y'!=res.code}">
							       <span style="color: red;">${res.msg}</span>
							    </c:if>
							 
							    </p>
							    <p class="Apply_bottom"><a href="javascript:" onclick="history.go(-1);">< 返回上一页</a><button type="button" class="btn"><a href="tencent://message/?uin=2850840278&Site=&menu=yes">不想等待？马上联系您的专属客服</a></button></p>
							    </div>
						    </div>
						</div>
						
    		</div>
    	</div>
    </div>

	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
</body>
</html>
						

