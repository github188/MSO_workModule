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
			     <div class="content1">
			        <div class="content_right">
						    <div class="new_demand new_demand_step ApplyAuction debriefing" style="min-height:755px;">
						        <div class="title">订单执行情况</div>
						        <div class="info">
						            <div class="main" style="padding:30px 40px 50px 40px;">
						                <p style="color:#ed5400;">您竞拍了${dem.auctionnum}单，目前完成了${dem.fishnum}单，完成占比${dem.fishnum/dem.auctionnum*100}%，进度与计划基本相符，加油！</p>
						                <p style="margin:20px 0px 10px 0px;">订单执行情况</p>
						                <div>
						                    <table class="ExecutionPlan tab table">

												<c:forEach var="data" items="${dataTitle}" varStatus="status" >
														 <!-- 日期 -->
											             <c:if test="${status.count%7!=0}">
											                <c:if test="${status.count%7==1}">
											                 <tr>
											                 <td>日期<br>目标量<br>上传量<br>成单量<br>相差量</td>
											                 <td>${fn:substring(data.keyDate,5,10)}<br>${data.targetValue}<br>${data.uploadValue}<br>${data.singleValue}<br>${data.differenceValue}</td>
											                </c:if>
				
											                <c:if test="${status.count%7!=1}">
											                 <td>${fn:substring(data.keyDate,5,10)}<br>${data.targetValue}<br>${data.uploadValue}<br>${data.singleValue}<br>${data.differenceValue}</td>
											                </c:if>
											             </c:if>
											             
											             
											             
													     <c:if test="${status.count%7==0}">
											               <td>${fn:substring(data.keyDate,5,10)}<br>${data.targetValue}<br>${data.uploadValue}<br>${data.singleValue}<br>${data.differenceValue}</td>
											               </td>
										                   </tr>
											             </c:if>
										        </c:forEach>
						                    </table>
						                </div>
						            </div>
						            <div class="back">
						                <a href="javascript:history.back(-1);">< 返回上一页</a>
						            </div>
						        </div>
						    </div>
						</div>
			     </div>
    		</div>
    	</div>
    </div>

	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
    <script>
        $(function(){
		});
    </script>
</body>
</html>






