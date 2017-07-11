<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>




	    			<c:if test="${user.jfutype=='1'}">
		    			<div class="nav nav_customer">
				    		<div class="menu_box">
			    			<ul>
				    			<li class="first_menu">我是发包方<span>▼</span></li>
				    			
<!-- 				    			<c:if test="${pagename=='customer_lj_Home'}"> -->
<!-- 				    				<li class="selected"><a href="customer_lj_Home">首页</a></li> -->
<!-- 				    			</c:if> -->
<!-- 				    			<c:if test="${pagename!='customer_lj_Home'}"> -->
<!-- 				    				<li><a href="customer_lj_Home">首页</a></li> -->
<!-- 				    			</c:if> -->
				    				<li><a href="../html/customer_home.html">首页</a></li>
				    			
				    			
<!-- 							    	<c:if test="${pagename=='supplier_lj_demandHall'}"> -->
<!-- 							    		<li class="selected"><a href="supplier_lj_demandHall">需求大厅</a></li> -->
<!-- 							    	</c:if> -->
<!-- 							    	<c:if test="${pagename!='supplier_lj_demandHall'}"> -->
<!-- 							    		<li><a href="supplier_lj_demandHall">需求大厅</a></li> -->
<!-- 							    	</c:if> -->
					    			
					    			
					    			
					    		    <c:if test="${pagename=='supplier_lj_demandHall2'}">
							    		<li class="selected"><a href="supplier_lj_demandHall2">需求大厅</a></li>
							    	</c:if>
							    	<c:if test="${pagename!='supplier_lj_demandHall2'}">
							    		<li><a href="supplier_lj_demandHall2">需求大厅</a></li>
							    	</c:if>
							    	
							    	
							    	
				    			<c:if test="${pagename=='customer_lj_AccountManagement'||pagename=='customer_lj_PhotoSet'||pagename=='customer_lj_ChangePassword'||pagename=='supplier_lj_manegeAccount'}">
				    				<li class="selected"><a href="customer_lj_AccountManagement">账号管理</a></li>
				    			</c:if>
				    			<c:if test="${pagename!='customer_lj_AccountManagement'&&pagename!='customer_lj_PhotoSet'&&pagename!='customer_lj_ChangePassword'&&pagename!='supplier_lj_manegeAccount'}">
				    				<li><a href="customer_lj_AccountManagement">账号管理</a></li>
				    			</c:if>
				    			
				    			<li><a href="home2_toHelp">常见问题</a></li>
			    			</ul>
			    			</div>
		    			</div>
	    			</c:if>
	    			
		    	    <c:if test="${user.jfutype=='2'}">
			    	    <div class="nav nav_supplier" style="background: #f38f00;">
				    		<div class="menu_box">
				    			<ul>
					    			<li class="first_menu" style="background: url(images/public/icon_nav.png) 12px center no-repeat #009cee;">我是接包方<span>▼</span></li>
<!-- 					    			<c:if test="${pagename=='supplier_lj_Home_supplier'||pagename=='supplier_lj_OrderList'}"> -->
<!-- 					    				<li class="selected"><a href="supplier_lj_Home_supplier">首页</a></li> -->
<!-- 					    			</c:if> -->
<!-- 					    			<c:if test="${pagename!='supplier_lj_Home_supplier'&&pagename!='supplier_lj_OrderList'}"> -->
<!-- 					    				<li><a href="supplier_lj_Home_supplier">首页</a></li> -->
<!-- 					    			</c:if> -->
										<li><a href="../mso1.4.2/supplier_index.html">首页</a></li>
					    			
					    			
<!-- 					    			<c:if test="${user.pid==''}"> -->
<!-- 							    			<c:if test="${pagename=='supplier_lj_demandHall'}"> -->
<!-- 							    				<li class="selected"><a href="supplier_lj_demandHall">需求大厅</a></li> -->
<!-- 							    			</c:if> -->
<!-- 							    			<c:if test="${pagename!='supplier_lj_demandHall'}"> -->
<!-- 							    				<li><a href="supplier_lj_demandHall">需求大厅</a></li> -->
<!-- 							    			</c:if> -->
<!-- 							    			<li class="building"><a href="javascript:">悬赏区</a></li> -->
<!-- 					    			</c:if> -->
					    			
					    			
					    			
					    								    			
					    			<c:if test="${user.pid==''}">
							    			<c:if test="${pagename=='supplier_lj_demandHall2'}">
							    				<li class="selected"><a href="supplier_lj_demandHall2">需求大厅</a></li>
							    			</c:if>
							    			<c:if test="${pagename!='supplier_lj_demandHall2'}">
							    				<li><a href="supplier_lj_demandHall2">需求大厅</a></li>
							    			</c:if>
					    			</c:if>
					    			
					    			
					    			
					    			
					    			<c:if test="${user.pid==''}">
						    			<c:if test="${pagename=='supplier_lj_Supplier_BasicInfo'||pagename=='customer_lj_PhotoSet'||pagename=='customer_lj_ChangePassword'}">
						    				<li class="selected"><a href="supplier_lj_Supplier_BasicInfo">账号管理</a></li>
						    			</c:if>
						    			<c:if test="${pagename!='supplier_lj_Supplier_BasicInfo'&&pagename!='customer_lj_PhotoSet'&&pagename!='customer_lj_ChangePassword'}">
						    				<li><a href="supplier_lj_Supplier_BasicInfo">账号管理</a></li>
						    			</c:if>
						    			</c:if>
		    						<li><a href="home2_toHelp">常见问题</a></li>
    	
					    		</ul>
				    		</div>
				    	</div>

	    			</c:if>
	    			
    			
    			
