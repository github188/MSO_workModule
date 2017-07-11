<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<script type="text/javascript">
	function gotoDetail(demandid){
		var detailform=document.getElementById("detailForm");
		detailform.action="customer_lj_DemandDetail"; 
		detailform.method="post";
		detailform.submit();
	}
</script>

<body>
    <!-- jsp文件头和头部 -->
	<%@ include file="../cheader.jsp"%>
    <div class="content">
        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg" style="min-height:798px;">
    		<div class="mid_box">
    		    <%@ include file="../lmenu2.jsp"%>
	    		<div class="content_mid">
	    			<div class="main_info">
	    				<div class="vip">
	    					<div class="photo">
	    						<img src="${user.headurls}" />
	    					</div>
    						<div class="info">
    							<p>用户名:<span>${user.jfuname}</span></p>
    							<p>
    								邀请码:<span>${user.invitationcode}</span>
    								<i>?</i>
    								<span class="bubble">
    									<span class="arrow"></span>
    									<span class="context">
<!--     									把您的邀请码给其他接包方,并邀请他们入驻眸事平台，顺利完成订单后，即可获得500元的现金奖励 -->
    									如果有人使用您的邀请码注册我们谋事平台，并成功竞拍，我们平台会奖励五百元
    									</span>
    								</span>
    							</p>
<!--     						<p>您注册于:<span>${fn:substring(user.createtime,0,10)}</span></p> -->
    						</div>
	    				</div>
	    				<div class="list">
	    					<ul>
	    						<li class="first">待办提醒</li>
	    						<li><a href="customer_lj_DemandList?zt=dsjdemand">待上架需求(<span>${res.dsjDemandCount}</span>)</a></li>
	    						<li><a href="customer_lj_DemandList?zt=djpdemand">待竞拍需求(<span>${res.djpDemandCount}</span>)</a></li>
	    						<li><a href="customer_lj_DemandList?zt=dwcdemand">待完成需求(<span>${res.dwcDemandCount}</span>)</a></li>
	    						<li><a href="customer_lj_DemandList?zt=djsdemand">结算中需求(<span>${res.djsDemandCount}</span>)</a></li>
<!-- 	    						<li><a href="customer_lj_DemandList?zt=dsqdemand">待申请(<span>${res.dsqDemandCount}</span>)</a></li> -->
	    					</ul>
	    				</div>
	    			</div>
	    			<div class="new_demand">
	    				<div class="title">发布新需求</div>
	    				<div class="info">
	    					<h3>眸事，让销售变简单！</h3>
	    					<p>只需要简单三步，即可发布您的需求，轻松提升业绩！</p>
	    					<ul>
	    						<span class="icon"></span>
	    						<li class="first" style="width:130px"><span>1</span>选择类目</li>
	    						<li class="second"><span>2</span>填写需求详情</li>
	    						<li class="last"><span>3</span>提交成功，等待审核</li>
	    					</ul>
	    				</div>
	    			</div>
	    			<div class="main_overview">
	    				<div class="title">发包概况</div>
	    				<div class="info">
	    					<p>截至目前，您在眸事平台上一共发布了 <span class="mission">${res.gfbDemandCount}</span> 个需求，发包金额达到 <span class="cash">${res.gfbDemandTol}</span> 元。</p>
	    				</div>
	    			</div>
	    			
	    			
	    			
	    			<div class="main_history">
	    			    <form name="detailForm" id="detailForm" action="">
							   <input type="hidden" value="${res.fistDemand.demandid}" name="demandid">
						</form>
	    				<div class="title">历史订单<a href="customer_lj_DemandList?zt=zxzorder">更多订单 ></a></div>
	    				
	    				<c:if test="${''!=res.fistDemand&&null!=res.fistDemand}">   
	    				<div class="info">
	    					<p>
	    						<span class="order_name">订单名称:${res.fistDemand.ordername}</span>
	    						<span class="date">发布日期:${fn:substring(res.fistDemand.releasetime,0,10)}</span>
	    						<a class="more"  href="javascript:" onclick="gotoDetail('${res.fistDemand.demandid}')">订单详情 ></a>
	    					</p>
<!-- 	    						<li class="first will"> -->
<!-- 	    							<p class="step">订单完成</p> -->
<!-- 	    							<p class="state">温馨提示：尚未</p> -->
<!-- 	    						</li> -->
<!-- 	    						<li class="ing"> -->
<!-- 	    							<p class="step">订单结算</p> -->
<!-- 	    							<p class="state">温馨提示：此订单正在结算，请等待。</p> -->
<!-- 	    						</li> -->
<!-- 	    						<li class="ed"> -->
<!-- 	    							<p class="step">订单托管</p> -->
<!-- 	    							<p class="state">温馨提示：已完成</p> -->
<!-- 	    						</li> -->
<!-- 	    						<li class="ed"> -->
<!-- 	    							<p class="step">订单赏金</p> -->
<!-- 	    							<p class="state">温馨提示：已完成</p> -->
<!-- 	    						</li> -->
<!-- 	    						<li class="last ed"> -->
<!-- 	    							<p class="step">订单订单</p> -->
<!-- 	    							<p class="state">温馨提示：已完成</p> -->
<!-- 	    						</li> -->
<!--  0(提交中)初始状态(未提交/草稿箱)1-提交(审核中) 2-通过(审核) 3-驳回             4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭    -->
	    					<ul>
		    					<c:if test="${'4'==res.fistDemand.fdstate}">   
		    						<li class="first will">
		    							<p class="step">订单完成</p>
		    							<p class="state">温馨提示：尚未</p>
		    						</li>
		    						<li class="ing" style="color:#999;">
		    							<p class="step">订单结算</p>
		    							<p class="state">温馨提示：尚未</p>
		    						</li>
		    						<li class="last ed" style="color: #f38f00;">
		    							<p class="step">订单执行中</p>
		    							<p class="state">温馨提示：此订单正在执行中，请等待。</p>
		    						</li>
		    					</c:if>	
		    					<c:if test="${'5'==res.fistDemand.fdstate}">   
		    					    <li class="first will">
		    							<p class="step">订单完成</p>
		    							<p class="state">温馨提示：尚未</p>
		    						</li>
		    						<li class="ing">
		    							<p class="step">订单结算</p>
		    							<p class="state">温馨提示：此订单正在结算，请等待。</p>
		    						</li>
		    						<li class="last ed">
		    							<p class="step">订单执行中</p>
		    							<p class="state">温馨提示：已完成</p>
		    						</li>
		    					</c:if>	
		    					<c:if test="${'6'==res.fistDemand.fdstate}">   
		    					     <li class="first will" style="color: #f38f00;">
		    							<p class="step">订单完成</p>
		    							<p class="state">温馨提示：已完成</p>
		    						</li>
		    						<li class="ing" style="color:#333;">
		    							<p class="step" >订单结算</p>
		    							<p class="state">温馨提示：已完成</p>
		    						</li>
		    						<li class="last ed">
		    							<p class="step">订单执行中</p>
		    							<p class="state">温馨提示：已完成</p>
		    						</li>
		    					</c:if>	
	    					</ul>
	    				</div>
	    				</c:if>	
	    			</div>
	    			
	    			
	    			<div class="main_package">
	    				<div class="title">套餐推荐<a href="javascript:;" onclick="showAll()">更多套餐 ></a></div>
	    				<div class="info">
	    					<table class="tab" name="tab" id="tab">
	    						<tr>
	    							<th>序号</th>
	    							<th>名称</th>
	    							<th>描述</th>
	    							<th>操作</th>
	    						</tr>
	    						
	    						<c:forEach var="d" items="${res.packageList}" varStatus="s">
									<c:if test="${s.count>=11}">
									<tr style="display: none;" name="tabtrdisplay">
									</c:if>
									
									<c:if test="${s.count<11}">
									<tr>
									</c:if>
		    							<td>${d.pid}</td>
		    							<td>${d.name}</td>
		    							<td>${d.intro}</td>
		    							<form name="fabuForm" id="fabuForm${d.pid}" action=""  >
		    							   <input type="hidden" name="pid" value="${d.pid}">
		    							   <input type="hidden" name="category1" value="${d.category1}">
		    							</form>
		    							<td>
								        <c:if test="${user.jfutype=='1'}">
						    			 		<c:if test="${user.jfustate==4}">
								    			    <a href="javascript:;" onclick="fabu('${d.pid}')">马上发布</a>
								    			</c:if>  
						    			</c:if>
		    							</td>
		    						</tr>
								</c:forEach>
	    					</table>
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
		function showAll(){
		    var dis=document.getElementsByName("tabtrdisplay");
			for ( var int = 0; int < dis.length; int++) {
				dis[int].style.display="";
			}
		}
		function fabu(pid){
		    var fabuForm=document.getElementById("fabuForm"+pid);
		    fabuForm.action="customer_lj_DemandManagement2";
		    fabuForm.method="post";
		    fabuForm.submit();
		}
	    jQuery(function(){
		    	$(".main_info .vip .info p i").hover(function(){
		    			$(this).next().toggle();
		    	})
		})
	</script>
</body>
</html>