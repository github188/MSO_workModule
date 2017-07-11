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
    <style type="text/css">
		.htmleaf-icon{color: #fff;}
    </style>
	<!--[if IE]>
		<script src="http://libs.useso.com/js/html5shiv/3.7/html5shiv.min.js"></script>
	<![endif]-->
</head>
<script type="text/javascript">
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
	    				<div class="title">已取消订单</div>
	    				<%@ include file="../searchForm.jsp"%>
	    			</div>
	    			<div class="main_overview" style="min-height:550px;">
	    				<div class="tab">
	    					<ul>
	    						<li class="completion-rate">完成率</li>
	    						<li class="name">订单名称</li>
	    						<li class="price">单价</li>
	    						<li class="number">数量</li>
	    						<li class="total">总金额</li>
	    						<li class="order-status">订单状态</li>
	    						<li class="status">状态</li>
	    					</ul>
	    											<c:forEach var="d" items="${res.results}">
														<div class="order_box">
								    						<div class="number_date">
								    							<p>订单编号：${d.demandid}</p>
								    							<p class="date">发布时间：${fn:substring(d.releasetime,0,10)}</p>
								    							<form name="detailForm_${d.demandid}" id="detailForm_${d.demandid}" action="">
								    								<input type="hidden" value="${d.demandid}" name="demandid">
								    								<input type="hidden" value="${zt}" name="ztDetail">
								    							</form>
								    							<a onclick="gotoDetail('${d.demandid}')" href="javascript:">订单详情 ></a><!-- demandid -->
								    						</div>
								    						<div class="info">
								    							<div class="completion-rate">
								    								<div class="prg-cont rad-prg indicatorContainer" data="${(d.fishnum/d.releasenum)*100}"></div>
								    							</div>
								    							<div class="name">
								    								<p>${d.ordername}</p>
								    							</div>
								    							<div class="price">${d.orderprice}</div>
								    							<div class="number">${d.releasenum}</div>
								    							<div class="total">${d.orderpricetol}</div>
								    							<div class="order-status"><span class="wait">
									    						    <c:if test="${d.fdstate==0}">
									    							待提交
									    							</c:if>
									    							<c:if test="${d.fdstate==1}">
									    							审核中
									    							</c:if>
									    							<c:if test="${d.fdstate==2}">
<!-- 									    							审核通过 -->
									    							执行中
									    							</c:if>
									    							<c:if test="${d.fdstate==3}">
									    							被驳回
									    							</c:if>
									    							<c:if test="${d.fdstate==4}">
									    							执行中
									    							</c:if>
									    							<c:if test="${d.fdstate==5}">
									    							结算中
									    							</c:if>
									    							<c:if test="${d.fdstate==6}">
									    							已完成
									    							</c:if>
									    							<c:if test="${d.fdstate==8}">
									    							已分配
									    							</c:if>
									    							<c:if test="${d.fdstate==7}">
									    							被关闭
									    							</c:if>
								    							</span></div>
								    							<div class="status">
								    								<a onclick="gotoDetail('${d.demandid}')" href="javascript:" >查看详情</a>
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
            SyntaxHighlighter.defaults['toolbar'] = false;
			SyntaxHighlighter.all();
			jQuery(function(){
// 				var data=[{"initValue":10},{"initValue":55},{"initValue":80},{"initValue":80},{"initValue":55},{"initValue":80},{"initValue":80},{"initValue":10},{"initValue":55}];
			    $('div.indicatorContainer').each(function(i){
				        $(this).radialIndicator({
				        barColor: {
				            0: '#fad17a',
				            33: '#f9c367',
				            66: '#f8ac49',
				            100: '#f68c1f'
				        },
				        barWidth: 5,
				        radius: 40,
				        initValue: $(this).attr("data"),
				        roundCorner: true,
				        percentage: true
				    });
			    })
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
			});
    </script>
</body>
</html>