
<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
<link rel="stylesheet" href="css/style.css"/>

<script src="js/jquery-2.1.1.min.js"></script>
</head>
<body class="supplier">
    <!-- jsp文件头和头部 -->
	<%@ include file="../cheader.jsp"%>
    <div class="content">
        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    			<div class="mid_box">
    		    <%@ include file="../lmenu2.jsp"%>
	    		      		 <div class="content_right">
	    		      		   <div class="main_overview" id="uploadReport" style="min-height:735px">
							    <div class="AuctionApply">
							        <p class="title">上传成单报告</p>
							        <p class="main"><img src="images/supplier/prompt.jpg">
							        <span>
<!--  							        ${msg} -->
							        您已成功上传成单报告，继续加油哦！
							        </span></p>
							        <p class="Apply_bottom"><a href="supplier_lj_OrderList?zt=zxzorder">< 返回上一页</a></p>
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























