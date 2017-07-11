<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
				<input type="hidden" value="${zt}" id="zt">
	    		<div class="menu_left">
		    		<c:if test="${user.jfutype=='1'}">
		    				  <div class="recently-used">
			    				<p>最近使用的功能</p>
			    				<div class="level2">
			    					<!--没有记录的时候显示p-->
			    					<!--<p>暂时没有记录</p>-->
			    					<!--有记录的时候显示ul-->
			    					<ul>
<!-- 			    						<li><a href="customer_lj_DemandList?zt=zxzorder">执行中订单</a></li> -->
<!-- 			    						<li><a href="customer_lj_DemandList?zt=order">我的悬赏</a></li> -->
			    					</ul>
			    				</div>
			    			</div>
			    			<ul>
			    				<h3 class="nav01">交易管理</h3>
			    				<c:if test="${zt=='zxzorder'}">
			    					<li><a class="selected" href="customer_lj_DemandList?zt=zxzorder">执行中订单</a></li>
			    				</c:if>
			    				<c:if test="${zt!='zxzorder'}">
			    					<li><a  href="customer_lj_DemandList?zt=zxzorder">执行中订单</a></li>
			    				</c:if>

			    				<c:if test="${zt=='jszorder'}">
			    				    <li><a class="selected" href="customer_lj_DemandList?zt=jszorder">结算中订单</a></li>
			    				</c:if>
			    				<c:if test="${zt!='jszorder'}">
			    					<li><a href="customer_lj_DemandList?zt=jszorder">结算中订单</a></li>
			    				</c:if>

			    				<c:if test="${zt=='ywcorder'}">
			    					<li><a class="selected" href="customer_lj_DemandList?zt=ywcorder">已完成订单</a></li>
			    				</c:if>
			    				<c:if test="${zt!='ywcorder'}">
			    					<li><a href="customer_lj_DemandList?zt=ywcorder">已完成订单</a></li>
			    				</c:if>


			    				<c:if test="${zt=='bgborder'}">
			    				    <li><a class="selected" href="customer_lj_DemandList?zt=bgborder">已取消订单</a></li>
			    				</c:if>
			    				<c:if test="${zt!='bgborder'}">
			    					<li><a href="customer_lj_DemandList?zt=bgborder">已取消订单</a></li>
			    				</c:if>

			    			</ul>
			    			<ul>
			    				<h3 class="nav02">需求管理</h3>
			    				<c:if test="${user.jfustate==4}">
			    				<c:if test="${zt=='customer_lj_DemandManagement1'||zt=='customer_lj_DemandManagement2'}">
				    				<li><a class="selected" href="customer_lj_DemandManagement1" >发布新需求</a></li>
				    			</c:if>
				    			<c:if test="${zt!='customer_lj_DemandManagement1'&&zt!='customer_lj_DemandManagement2'}">
				    				<li><a href="customer_lj_DemandManagement1" >发布新需求</a></li>
				    			</c:if>
				    			</c:if>				    			

				    			<c:if test="${zt=='dsjdemand'}">
			    				    <li><a class="selected" href="customer_lj_DemandList?zt=dsjdemand">待上架需求</a></li>
			    				</c:if>
			    				<c:if test="${zt!='dsjdemand'}">
			    					<li><a href="customer_lj_DemandList?zt=dsjdemand">待上架需求</a></li>
			    				</c:if>


				    			<c:if test="${zt=='sjzdemand'}">
			    				    <li><a class="selected" href="customer_lj_DemandList?zt=sjzdemand">上架中需求</a></li>
			    				</c:if>
			    				<c:if test="${zt!='sjzdemand'}">
			    					<li><a href="customer_lj_DemandList?zt=sjzdemand">上架中需求</a></li>
			    				</c:if>

			    			</ul>
			    			<ul>
			    				<h3 class="nav03">悬赏管理</h3>
			    				<!--<c:if test="${zt=='order'}">
			    				    <li><a class="selected" href="customer_lj_DemandList?zt=order">我的悬赏</a></li>
			    				</c:if>
			    				<c:if test="${zt!='order'}">
 			    					<li><a href="customer_lj_DemandList?zt=order">我的悬赏</a></li>
			    				</c:if>-->
			    				<li class="building"><a href="javascript:;">我的悬赏</a></li>
			    			</ul>
			    			<ul>
			    				<h3 class="nav04">结算管理</h3>
			    				<c:if test="${zt=='all'||zt=='alljszorder'||zt=='allywcorder'}">
			    				    <li><a class="selected" href="customer_lj_DemandList?zt=all">我的小账本</a></li>
			    				</c:if>
			    				<c:if test="${zt!='all'&&zt!='alljszorder'&&zt!='allywcorder'}">
			    					<li><a href="customer_lj_DemandList?zt=all">我的小账本</a></li>
			    				</c:if>
			    			</ul>
			    			<ul class="last">
			    				<h3 class="nav05">报表管理</h3>
			    				<c:if test="${zt=='cdbb'}">
			    					<li><a class="selected" href="customer_lj_DemandList?zt=cdbb">成单报表</a></li>
			    				</c:if>
			    				<c:if test="${zt!='cdbb'}">
			    					<li><a href="customer_lj_DemandList?zt=cdbb">成单报表</a></li>
			    				</c:if>
			    			</ul>
		    	     </c:if>










			    	 <c:if test="${user.jfutype=='2'}">

			    	 		<c:if test="${user.pid!=''}">
			    	 			<ul>
									<h3 class="nav_3">我竞拍的订单</h3>
				    				<c:if test="${zt=='zxzorder'}">
				    				    <li><a class="selected" href="supplier_lj_OrderList?zt=zxzorder">执行中订单</a></li>
				    				</c:if>
				    				<c:if test="${zt!='zxzorder'}">
				    					<li><a href="supplier_lj_OrderList?zt=zxzorder">执行中订单</a></li>
				    				</c:if>
								</ul>
			    	 		</c:if>

			    	 		<c:if test="${user.pid==''}">


								<div class="recently-used">
			    					<p>最近使用的功能</p>
				    				<div class="level2">
				    					<!--没有记录的时候显示p-->
				    					<!--<p>暂时没有记录</p>-->
				    					<!--有记录的时候显示ul-->
	 			    					<ul>
<!-- 	 			    						<li><a href="supplier_lj_OrderList?zt=ywcorder">已完成订单</a></li>  -->
	 			    					</ul>
				    				</div>
			    				</div>
								<ul>
									<h3 class="nav_2">我的商机</h3>
<!-- 									<li><a href="supplier_lj_OrderList?zt=mycollection">我收藏的商机</a></li> -->
<!-- 									<li><a href="customer_lj_DemandList?zt=zxzorder">系统推送商机<i class="title">3</i></a></li> -->
										<li class="building"><a href="javascript:;">我收藏的商机</a></li>
										<li class="building"><a href="javascript:;">系统推送商机<i class="title">3</i></a></li>
								</ul>
								<ul>
									<h3 class="nav_3">我竞拍的订单</h3>
									<c:if test="${zt=='dshorder'}">
				    				    <li><a class="selected" href="supplier_lj_OrderList?zt=dshorder">审批中订单</a></li>
				    				</c:if>
				    				<c:if test="${zt!='dshorder'}">
				    					<li><a href="supplier_lj_OrderList?zt=dshorder">审批中订单</a></li>
				    				</c:if>

				    				<c:if test="${zt=='zxzorder'}">
				    				    <li><a class="selected" href="supplier_lj_OrderList?zt=zxzorder">执行中订单</a></li>
				    				</c:if>
				    				<c:if test="${zt!='zxzorder'}">
				    					<li><a href="supplier_lj_OrderList?zt=zxzorder">执行中订单</a></li>
				    				</c:if>

				    				<c:if test="${zt=='djsorder'}">
				    				    <li><a class="selected" href="supplier_lj_OrderList?zt=djsorder">结算中订单</a></li>
				    				</c:if>
				    				<c:if test="${zt!='djsorder'}">
				    					<li><a href="supplier_lj_OrderList?zt=djsorder">结算中订单</a></li>
				    				</c:if>

			    					<c:if test="${zt=='ywcorder'}">
				    				    <li><a class="selected" href="supplier_lj_OrderList?zt=ywcorder">已完成订单</a></li>
				    				</c:if>
				    				<c:if test="${zt!='ywcorder'}">
				    					<li><a href="supplier_lj_OrderList?zt=ywcorder">已完成订单</a></li>
				    				</c:if>

				    				<c:if test="${zt=='bgborder'}">
				    				    <li><a class="selected" href="supplier_lj_OrderList?zt=bgborder">已取消订单</a></li>
				    				</c:if>
				    				<c:if test="${zt!='bgborder'}">
				    					<li><a href="supplier_lj_OrderList?zt=bgborder">已取消订单</a></li>
				    				</c:if>
								</ul>
								<ul>
									<h3 class="nav_4">悬赏订单</h3>
<!-- 									<li><a href="customer_lj_DemandList?zt=order">我竞拍的悬赏订单</a></li> -->
										<li class="building"><a href="javascript:;">我竞拍的悬赏订单</a></li>
								</ul>
								<ul>
									<h3 class="nav_5">结算管理</h3>
				    				<c:if test="${zt=='all'||zt=='alljszorder'||zt=='allywcorder'}">
				    				    <li><a class="selected" href="supplier_lj_OrderList?zt=all">我的小账本</a></li>
				    				</c:if>
				    				<c:if test="${zt!='all'&&zt!='alljszorder'&&zt!='allywcorder'}">
				    					<li><a href="supplier_lj_OrderList?zt=all">我的小账本</a></li>
				    				</c:if>
								</ul>
							   <ul class="last">
				    				<h3 class="nav05">报表管理</h3>
				    				<c:if test="${zt=='cdbb'}">
				    					<li><a class="selected" href="customer_lj_DemandList?zt=cdbb">成单报表</a></li>
				    				</c:if>
				    				<c:if test="${zt!='cdbb'}">
				    					<li><a href="customer_lj_DemandList?zt=cdbb">成单报表</a></li>
				    				</c:if>
			    			 	</ul>

							</c:if>
		    	     </c:if>
	    		</div>
