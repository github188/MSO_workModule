<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<body>
    <!-- jsp文件头和头部 -->
<%@ include file="../cheader.jsp"%>

<div class="content">
	   <!--导入 公用菜单页  -->
       <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		   	<%@ include file="../lmenu2.jsp"%>
	    		<div class="content_mid">
	    		
 	    			<div class="new_demand new_demand2">
	    				<div class="title">发布新需求</div>
	    				<div class="info">
	    					<h3>眸事，让销售变简单！</h3>
	    					<p>只需要简单三步，即可发布您的需求，轻松提升业绩！</p>
	    					<ul>
	    						<span class="icon"></span>
	    						<li class="first"><span>1</span>选择行业和发布方式</li>
	    						<li class="second"><span>2</span>填写需求详情</li>
	    						<li class="last"><span>3</span>提交成功，等待审核</li>
	    					</ul>
	    				</div>
	    			</div>
	    			
	    			<div class="new_demand_step">
	    				<div class="title">
			    			<c:if test="${fdstate=='1'}">
			    				提交成功，等待审核
			    		    </c:if>
			    		    <c:if test="${fdstate=='0'}">
			    				保存到草稿箱成功，等待提交
			    		    </c:if>
	    				</div>
	    				<div class="info">
	    					<div class="done">
		    					<c:if test="${fdstate=='1'}">
		    						<h3>发布成功，您的信息已提交审核！</h3>
		    						<p>您的信息将在工作时间（周一至周五 9:00~17:00）2小时内发布上网，请您耐心等待！</p>
		    					</c:if>
		    					
		    					<c:if test="${fdstate=='0'}">
		    						<h3>保存成功，您的信息已保存到草稿箱！</h3>
		    						<p>您可以进入草稿箱编辑完善您的需求信息再提交！</p>
		    					</c:if>
	    					</div>
	    					<c:if test="${fdstate=='0'}">
		    					<div class="btn_service"><a href="customer_lj_DemandList?zt=cgxdemand">进入草稿箱</a></div>
		    					<br>
	    					</c:if>
	    					
	    					<div class="btn_service"><a href="tencent://message/?uin=2850840272&Site=&menu=yes">不想等待？马上联系专属客服</a></div>
	    				</div>
	    			</div>
	    		</div>
	    		<!-- jsp文件尾部和尾部 -->
			    <%@ include file="../Bulletin_display.jsp"%>
    		</div>
    	</div>
    </div>
	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
	<script>
		jQuery(function(){
			var oHeight = $(".main_overview .tab .info .name").height();
			$(".main_overview .tab .info .name").css("padding-top",function(){return (140 - $(this).height())/2;});
		})
	</script>
</body>
</html>