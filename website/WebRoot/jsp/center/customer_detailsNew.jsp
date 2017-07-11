<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
<link rel="stylesheet" href="css/style.css"/>
<script src="js/jquery-2.1.1.min.js"></script>
</head>
<body>
    <!-- jsp文件头和头部 -->
	<%@ include file="../cheader.jsp"%>
    <div class="content">
        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		    <%@ include file="../lmenu2.jsp"%>
    		    
	    		<div class="content_right">
	    			<div class="new_demand order_details">
	    				<div class="title">需求详情</div>
	    				<div class="title_order">${demand.ordername}</</div>
	    				<div class="details_order">
	    					<h3>每单 ¥ ${demand.orderprice}，共需要${demand.releasenum}单，总价为<span> ¥ ${demand.orderpricetol}</span></h3>
	    					<p>需求状态：上架中</p>
	    				</div>
	    				<div class="info">
	    					<ul class="step3">
	    						<span class="icon"></span>
	    						<li class="first"><span>1</span>发布需求</li>
	    						<li class="second"><span>2</span>等待执行</li>
	    						<li class="third"><span>3</span>订单执行</li>
	    						<li class="forth"><span>4</span>订单结算</li>
	    						<li class="last"><span>5</span>订单完成</li>
	    					</ul>
	    				</div>
	    				<div class="title_order">基本信息 </div>
	    				<div class="info_order">
	    					<ul>
	    						<li><b>目标人群：</b><span>${demand.targethumen}</span></li>
	    						<li><b>对象年龄：</b><span>${demand.beginage}-${demand.endage}</span></li>
	    						<li><b>目标城市：</b><span>${demand.targecity}</span></li>
	    						<li><b>项目负责人：</b><span>${demand.pleader}</span></li>
	    						<li><b>负责人电话：</b><span>${demand.pphone}</span></li>
	    						<li><b>成单需求：</b><span>${demand.demand}</span></li>
	    						<li><b>合格标准：</b><span>${demand.standardoperation}</span></li>
	    						<li><b>标准术语：</b><span>${demand.standardoperation}<a href="${demand.standardoperation}">下载</a></span></li>
	    						<li><b>其他附件：</b><span>${demand.otherreport}<a href="${demand.otherreport}">下载</a></span></li>
	    					</ul>
	    				</div>
	    					<div class="back"><a href="javascript:history.back(-1);">< 返回上一页</a></div>
	    					<button class="btn_blue">申请上架</button>
	    					<button class="btn_blue">编辑</button>
	    					<button class="btn_blue">复制</button>
	    					<button class="btn_orange">删除</button>
	    			</div>
	    			
	    		</div>
	    		
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