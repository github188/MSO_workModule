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

	function demanList(par){
		window.location.href="supplier_lj_OrderList?zt="+par; 
	}
	
	function seach(){
		var par=document.getElementById("zt").value;
		var searchform=document.getElementById("searchform");
		searchform.action="supplier_lj_OrderList?zt="+par; 
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



<body class="supplier">
	<%@ include file="../cheader.jsp"%>
    <div class="content">
      	<%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		 	<%@ include file="../lmenu2.jsp"%>
			     <div class="content1"> 
			     
					<div class="content_mid">
					    <div class="main_overview">
					        <div class="title">${title}</div>
					        <%@ include file="../searchForm.jsp"%>
					    </div>
					    <div class="main_overview" style="min-height:548px;">
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
									    								<input type="hidden" name="token" value="${token}" />
									    							</form>
									    							<a  href="javascript:" onclick="gotoDetail('${d.demandid}')">订单详情 ></a><!-- demandid -->
									    						</div>
									    						<div class="info">
									    							<div class="completion-rate">
									    								<div class="prg-cont rad-prg indicatorContainer"  data="${(d.fishnum/d.releasenum)*100}"></div>
									    							</div>
									    							<div class="name">
									    								<p>${d.ordername}</p>
									    							</div>
									    							<div class="price">${d.orderprice}</div>
									    							<div class="number">${d.releasenum}</div>
									    							<div class="total">${d.orderprice*d.releasenum}</div>
									    							<div class="order-status">
	<!-- 								    							* (竞拍)1-待审核  2-通过(审核) 3-驳回   4-执行中  5-结算(付款中) 6-完成(已付款) 7-被关闭   8-已分配-->
										    							<c:if test="${d.fdstate==1}">
										    							<span class="wait">待审核</span>
										    							</c:if>
										    							<c:if test="${d.fdstate==8}">
										    							<span class="wait">待审核</span>
										    							</c:if>
										    							<c:if test="${d.fdstate==2}">
										    							<span class="done">执行中
<!-- 										    							审核通过 -->
										    							</span>
										    							</c:if>
										    							<c:if test="${d.fdstate==3}">
										    							<span class="wait">被驳回</span>
										    							</c:if>
										    							<c:if test="${d.fdstate==4}">
										    							<span class="wait">执行中</span>
										    							</c:if>
										    							<c:if test="${d.fdstate==5}">
										    							<span class="blue">结算中</span>
										    							</c:if>
										    							<c:if test="${d.fdstate==6}">
										    							<span class="done">已完成</span>
										    							</c:if>
										    							<c:if test="${d.fdstate==7}">
										    							<span class="wait">被关闭</span>
										    							</c:if>
									    							</div>
									    							<div class="status">
									    								<a  href="javascript:" onclick="gotoDetail('${d.demandid}')" style="background: #f38f00;" >查看详情</a>
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

