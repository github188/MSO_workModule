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
				    <div class="AuctionApply" style="min-height:750px;">
				        <p class="title">收藏商机</p>
				        <p class="main"><img src="images/supplier/prompt.jpg">
				        <span>
						您已收藏该商机！您可以在“我收藏的商机”中查看！
				        </span></p>
				        <p class="Apply_bottom"><a href="supplier_lj_OrderList?zt=zxzorder">< 返回上一页</a></p>
				    </div>
				</div>
    		</div>
    	</div>
    </div>

	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
</body>
</html>
						
