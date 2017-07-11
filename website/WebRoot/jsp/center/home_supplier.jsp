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
    		<div class="mid_box"  style="min-height:773px;">
    		 	<%@ include file="../lmenu2.jsp"%>
			     <div class="content1">
			     <%@ include file="supplier_index.jsp"%>
			     </div>
    		</div>
    	</div>
    </div>

	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
</body>
</html>
