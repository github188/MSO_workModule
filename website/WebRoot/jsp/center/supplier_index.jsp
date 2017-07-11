<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<script type="text/javascript">
	function gotoDetail(demandid){
		var detailform=document.getElementById("detailForm");
		detailform.action="customer_lj_DemandDetail"; 
		detailform.method="post";
		detailform.submit();
	}
	
	function gotoDetailAp(demandid){
		var formid="detailForm_";
		var detailform=document.getElementById(formid+demandid);
		detailform.action="customer_lj_DemandDetail"; 
		detailform.method="post";
		detailform.submit();
	}
</script>
<div class="content_mid">
		<div class="main_info" >
	        <div class="usertitle">
	        <ul>
	            <li class="li1">
	                <img src="${user.headurls}" />
					<p>用户名：<span>${user.jfuname}</span></p>
					<c:if test="${user.pid==''}">
						<p>
		    				邀请码：<span>${user.invitationcode}</span>
		    				<i>?</i>
		    				<span class="bubble">
		    					<span class="arrow"></span>
		    					<span class="context">
	<!-- 	    					把您的邀请码给其他接包方,并邀请他们入驻眸事平台，顺利完成订单后，即可获得500元的现金奖励 -->
		    					如果有人使用您的邀请码注册我们谋事平台，并成功竞拍，我们平台会奖励五百元
		    					</span>
		    				</span>
		    			</p>
	    		    </c:if>
	            </li>
	            <li class="li2">
	            	<p>需要帮助，<a style="color: #009cee;" href="tencent://message/?uin=2850840278&Site=&menu=yes">点此联系客服>></a></p>
	                 <!--<c:if test="${user.pid==''}">
	                 	<p>您目前是普通会员&emsp;&emsp;</p>
		             </c:if>
		             <c:if test="${user.pid!=''}">
		                <p>您目前是子账号&emsp;&emsp;</p>
		             </c:if>-->
	            </li>
	        </ul>
	    	</div>
	        <div class="list_supplier">
	            	<ul>
		                <li>待办提醒</li>  	
		                <c:if test="${user.pid==''}">
		                <li><a href="supplier_lj_OrderList?zt=dshorder">待审核订单(<span>${res.dshOrderCount}</span>)</a></li>
		                <li><a href="supplier_lj_OrderList?zt=zxzorder">执行中订单(<span>${res.zxzCount}</span>)</a></li>
		                <li><a href="supplier_lj_OrderList?zt=djsorder">待结算订单(<span>${res.djsOrderCount}</span>)</a></li>
		                </c:if>
		                <c:if test="${user.pid!=''}">
		                 <li><a href="supplier_lj_OrderList?zt=zxzorder">执行中订单(<span>${res.zxzCount}</span>)</a></li>
		                </c:if>
		            </ul>
	        </div>
	    </div>



<c:if test="${user.pid==''}">

 		<!--新增开始-->
    		<div class="new_demand" style="padding-bottom: 20px;">
	    		<div class="title">收费规则</div>
	    		<table class="tab" style="width: 97%; margin: 10px auto;">
	    			<tr>
	    				<th>收费内容</th>
	   					<th>收费标准</th>
	  				</tr>
	    			<tr>
	    				<td>竞拍手续费</td>
	    				<td>平台免收交易佣金，但会根据您的竞拍量收取一定的手续费，每单收取1元</td>
	    			</tr>
	    			<tr>
	    				<td>税费</td>
	    				<td>一般纳税人增值税发票不收费，小规模纳税人增值税发票加收3%，普票加收6%</td>
	    			</tr>
	    			<tr>
	    				<td>数据使用费</td>
	    				<td>如果需要使用平台数据，需要收取订单总金额的8%做为数据使用费</td>
	    			</tr>
	    			<tr>
	    				<td>CRM系统</td>
	    				<td>免费</td>
	    			</tr>
	    			<tr>
	    				<td>培训</td>
	    				<td>免费</td>
	    			</tr>
	    			<tr>
	    				<td>线路话费</td>
	    				<td>如果需要使用平台提供的电话线路，将按0.06元/分钟的标准计费</td>
	    			</tr>
	    			<tr>
	    				<td>电话审核</td>
	    				<td>对网络营销公司所提交的数据，按1元/条收取电话审核费</td>
	    			</tr>
	    		</table>
	    		<!--
	    		<p style="padding-left: 10px; line-height: 24px;"><b>表一：</b></p>
	    		<table class="tab" style="width: 97%; margin: 10px auto;">
	    			<tr>
	    				<th>竞拍数量</th>
	    				<th>100以下</th>
	    				<th>101-500</th>
	    				<th>501-1000</th>
	    				<th>1001-1500</th>
	    				<th>1501-2000</th>
	    			</tr>
	    			<tr>
	    				<td>手续费</td>
	    				<td>0元</td>
	    				<td>500元</td>
	    				<td>1000元</td>
	    				<td>1500元</td>
	    			    <td>2000元</td>
	    			</tr>
	    		</table>-->
	    	</div>
	   	<!--新增结束-->	     
        
        
        <div class="main_info info_supplier2">
            <p class="title">接包概况</p>
            <p class="main">截至目前，您在眸事平台上一共竞拍了${res.gfbDemandCount}个订单，接包金额达${res.gfbDemandTol}元</p>
        </div>
		<div class="new_demand new_demand3">
			<div class="title">竞拍订单<a href="#" style="color:#f38f00;float:right;font-weight: normal;font-size: 13px;">马上竞拍 &gt;</a></div>
			<div class="info">
			<h3>眸事，让销售变简单！</h3>
			<p>只需要简单三步，即可发布您的需求，轻松提升业绩！</p>
			<ul >
			<span class="icon"></span>
			<li class="first" style="text-align: center;"><span>1</span>竞拍订单</li>
			<li class="second" style="text-align: center;"><span>2</span>执行订单</li>
			<li class="last" style="text-align: center;"><span>3</span>订单结算</li>
			</ul>
			</div>
		</div>
        <div class="main_info info_supplier3 main_history" style="">
             <form name="detailForm" id="detailForm" action="">
				<input type="hidden" value="${res.fistOrderDemand.orderid}" name="orderid">
				<input type="hidden" value="../mso1.4.2/supplier_index.html" name="ztDetail">
			 </form>
            <p class="title">历史订单<a href="#">更多订单 &gt;</a></p>
            <div class="info">
            <p>
                <span class="order_name">订单名称:${res.fistOrderDemand.ordername}</span>
                <span class="date">发布日期:${fn:substring(res.fistOrderDemand.releasetime,0,10)}</span>
                <a class="more" href="javascript:" onclick="gotoDetail('${res.fistOrderDemand.orderid}')">查看详情 &gt;</a>
            </p>
            
            <ul>
		    					<c:if test="${'4'==res.fistOrderDemand.jdstate}">   
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
		    					<c:if test="${'5'==res.fistOrderDemand.jdstate}">   
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
		    					<c:if test="${'6'==res.fistOrderDemand.jdstate}">   
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
        </div>

	    <div class="main_info info_supplier4">
	        <p class="title">商机推荐<a href="#" style="float:right;font-weight: normal;font-size: 13px;">更多商机 &gt;</a></p>
	        <div>
	            <table class="tab">
	                <tbody>
		                <tr>
		                    <th>序号</th>
		                    <th>名称</th>
<!-- 		                    <th>剩余时间</th> -->
<!-- 		                    <th>可竞拍数</th> -->
		                    <th>操作</th>
		                </tr>
						            
					    <c:forEach var="d" items="${r}" varStatus="s">
						<tr>
								<form name="detailForm_${d.demandid}" id="detailForm_${d.demandid}" action="">
			    				<input type="hidden" value="${d.demandid}" name="demandid">
			   					<input type="hidden" value="supplier_lj_demandHall2" name="ztDetail">
			    				</form>
					    		<td>${d.demandid}</td>
					            <td>${d.ordername}</td>
<!-- 					            <td>${d.suDay}天后 截止</td> -->
<!-- 					            <td>${d.releasenum-d.applicationnum} </td> -->
					            <td>
					               	<c:set var="auctionNum" value="${d.releasenum-d.applicationnum}"/>
							    	<c:if test="${auctionNum>0}">
								    	<c:if test="${user.jfustate==4}">
											 <a onclick="gotoDetailAp('${d.demandid}')"  href="javascript:" id="jinpai" style="color: rgb(243, 143, 0);">马上竞拍</a>
										</c:if>
										<c:if test="${user.jfustate!=4}">
											 <a onclick="gotoDetailAp('${d.demandid}')"  style="color: #009cee;" href="javascript:" id="jinpai">查看详情</a>
										</c:if>
									</c:if>
									<c:if test="${auctionNum<=0}">
										 <a onclick="gotoDetailAp('${d.demandid}')"  style="color: #009cee;" href="javascript:" id="jinpai">查看详情</a>
									</c:if>
					             </td>
					     </tr>						
						</c:forEach>									
	                </tbody>
	            </table>
	        </div>
	    </div>
</c:if>
</div>
<script type="text/javascript">
    jQuery(function(){
	    	$(".supplier .usertitle ul .li1 p i").hover(function(){
	    			$(this).next().toggle();
	    	})
	})
</script>				
<!-- jsp文件尾部和尾部 -->
<%@ include file="../Bulletin_display.jsp"%>
