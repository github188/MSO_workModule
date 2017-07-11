
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
            <form id="loginForm" class="login" method="post" action="">
			  
			    <p class="submitBtn">
			    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    <button id="login" class="shadow btn" type="button">查询</button></p>
            </form>
        </div>
    </div>
</div>

<div id="tableid">

</div>





<script type="text/javascript">

	$('#login').click(function(){
// 			 var data={
// 			 	"regionId":"2"
// 	         };
	         var data={
			 	"regionType":"1"
	         };
// 	          $.ajax({     
// 	            要用post方式      
// 	            type: "get",     
// 	            data: data,//要发送的数据（参数）格式为{'val1':"1","val2":"2"}
// 	            方法所在页面和方法名      
// 	            url: "http://*/getBaseRegionByPro",     
// 	            contentType: "application/json;charset=utf-8",     
// 	            dataType: "json",     
// 	            success: function(res) {     
// 	                返回的数据用data.d获取内容      
// 	                if(res.code=="Y"){
// 	                	 var str="<table  border='1'><tr><th>region_id</th><th>区域名</th><th>类型</th><th>描述</th></tr>";
// 		                 $.each(res.aaa,function(index,d){
// 		                   str+="<tr><td>"+d.regionId+"</td><td>"+d.regionName+"</td><td>"+d.regionType+"</td><td>"+d.remark+"</td></tr>";
// 		                 });
// 					}
// 					str+="</table>";
// 					alert(str);
// 					document.getElementById("tableid").innerHTML=str;
// 	            },     
// 	            error: function(err) {     
// 	                alert(err);     
// 	            }     
	            
	            
	            $.get('http://*/getBaseRegionByPro',data,function(res){
	            	//返回的数据用data.d获取内容      
	                if(res.code=="Y"){
	                	 var str="<table  border='1'><tr><th>region_id</th><th>区域名</th><th>类型</th><th>描述</th></tr>";
		                 $.each(res.basreglist,function(index,d){
		                   str+="<tr><td>"+d.regionId+"</td><td>"+d.regionName+"</td><td>"+d.regionType+"</td><td>"+d.remark+"</td></tr>";
		                 });
					}
					str+="</table>";
					alert(str);
					document.getElementById("tableid").innerHTML=str;
	            }
	             
	            
	            
	            
        	});     
	});
	
	
</script>

</body>
</html>