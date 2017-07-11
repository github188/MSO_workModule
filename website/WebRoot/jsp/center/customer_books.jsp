<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link href="css/project_base.css"  rel="stylesheet" type="text/css" />
    <link href="css/radialindicator.css"  rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"/>

	<!--[if IE]>
		<script src="http://libs.useso.com/js/html5shiv/3.7/html5shiv.min.js"></script>
	<![endif]-->
</head>
<script type="text/javascript">
	function demanList(par){
		window.location.href="customer_lj_DemandList?zt="+par; 
	}
	function seach(){
		var par=document.getElementById("zt").value;
		var searchform=document.getElementById("searchform");
		searchform.action="customer_lj_DemandList?zt="+par; 
		searchform.method="post";
		searchform.submit();
	}
	
	function gotoDetail(demandid){
		var formid="detailForm_";
		var detailform=document.getElementById(formid+demandid);
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
    	<div class="mid_bg">
    		<div class="mid_box">
    		    <%@ include file="../lmenu2.jsp"%>
	    		<div class="content_mid">
	    			<div class="main_overview">
	    				<div class="title">我的小账本</div>
	    				    <style type="text/css">
								.htmleaf-icon{color: #fff;}
								.main_overview .tab .completion-rate { width: 20%;}
								.main_overview .tab .name { width: 24.8%;}
								.main_overview .tab .price { width: 11%;}
								.main_overview .tab .number { width: 11%;}
								.main_overview .tab .date { width: 15%;}
								.main_overview .tab .total { width: 13%;}
								.main_overview .tab .order-status { width: 14.7%;}
						    </style>
		    			<%@ include file="../searchForm.jsp"%>
	    			</div>
	    			<div class="tab_overview" style="min-height: 540px;">
					    <div class="tab_menu book_style">
					        <ul>
								<c:if test="${zt=='all'}">
						    		<li id="demandli1" class="selected" onclick="demanList('all')">全部订单</li>
						    	</c:if>
						    	<c:if test="${zt!='all'}">
						    		<li id="demandli1" onclick="demanList('all')" >全部订单</li>
						    	</c:if>
				
								<c:if test="${zt=='alljszorder'}">
						    		<li id="demandli2" class="selected" onclick="demanList('alljszorder')">结算中</li>
						    	</c:if>
						    	<c:if test="${zt!='alljszorder'}">
						    		<li id="demandli2" onclick="demanList('alljszorder')">结算中</li>
						    	</c:if>
						    	
						    	<c:if test="${zt=='allywcorder'}">
						    		<li id="demandli3" class="selected"  onclick="demanList('allywcorder')">已完成</li>
						    	</c:if>
						    	<c:if test="${zt!='allywcorder'}">
						    		<li id="demandli3" onclick="demanList('allywcorder')">已完成</li>
						    	</c:if>
					        </ul>
					    </div>
					    <div class="tab_box">
					        <div>
					        	<div class="main_overview">
				    				<div class="overview_box">概况        您所查询的订单订单金额合计为：￥${res.tolPrice}</div>
				    				<div class="tab tab_dashed">
				    					<ul>
				    						<li class="completion-rate">订单编号</li>
				    						<li class="name">订单名称</li>
				    						<li class="date">发布时间</li>
				    						<li class="total">订单金额</li>
				    						<li class="order-status">结算状态</li>
				    						<li class="status">操作</li>
				    					</ul>

			    					<c:forEach var="d" items="${res.results}">
											<div class="order_box">
												<form name="detailForm_${d.demandid}" id="detailForm_${d.demandid}" action="">
					    								<input type="hidden" value="${d.demandid}" name="demandid">
					    								<input type="hidden" value="${zt}" name="ztDetail">
					    						</form>
					    						<div class="info">
					    							<div class="completion-rate">
					    							${d.demandid}
					    							</div>
					    							<div class="name">
					    								<p>${d.ordername}</p>
					    							</div>
					    							<div class="date">${fn:substring(d.releasetime,0,10)}</div>
					    							<div class="total">${d.orderpricetol}</div>
					    							<div class="order-status">
						    							
										    			<c:if test="${d.fdstate==0}">
										    				<span class="wait">待提交</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==1}">
										    				<span class="wait">审核中</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==2}">
										    							<span class="wait">
<!-- 										    							审核通过 -->
																			执行中
										    							</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==3}">
										    			    <span class="wait">被驳回</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==4}">
										    				<span class="wait">执行中</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==5}">
										    				<span class="wait">结算中</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==6}">
										    				<span class="done">已完成</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==8}">
										    				<span class="wait">已分配</span>
										    			</c:if>
										    			<c:if test="${d.fdstate==7}">
										    				<span class="wait">被关闭</span>
										    			</c:if>
					    							</div>
					    							<div class="status">
					    								<a onclick="gotoDetail('${d.demandid}')" href="javascript:">查看详情</a>
					    							</div>
					    						</div>
					    					</div>
										</c:forEach>

				    					
				    					
				    					
				    					
	
				    					
				    					
				    				
				    				
				    					<div class="page">
				    					${res.pageStr}
				    					</div>
				    					
				    						
				    					
				    				</div>
				    			</div>
				    		</div>
					        
					        
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
	<script type="text/javascript"  src="js/project_base.js"></script>	
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/radialindicator.js"></script>
    <script>
			jQuery(function(){	
			    //日期
				$('.form_date1').datetimepicker({
			        language:  'zh-CN',
			        weekStart: 1,
			        todayBtn:  1,
					autoclose: 1,
					todayHighlight: 1,
					startView: 2,
					minView: 2,
					forceParse: 0
			   	}).on("click", function (ev) {
				    $(".form_date1").datetimepicker("setEndDate", $(".form_date2").val());
				});
			   	$('.form_date2').datetimepicker({
			        language:  'zh-CN',
			        weekStart: 1,
			        todayBtn:  1,
					autoclose: 1,
					todayHighlight: 1,
					startView: 2,
					minView: 2,
					forceParse: 0
			   	}).on("click", function (ev) {
				    $(".form_date2").datetimepicker("setStartDate", $(".form_date1").val());
				});

				var $div_li =$("div.tab_menu ul li");
				$div_li.click(function(){
					$(this).addClass("selected").siblings().removeClass("selected");
					var index =  $div_li.index(this);
					$("div.tab_box > div").eq(index).show().siblings().hide();
				});
			});
    </script>
</body>
</html>