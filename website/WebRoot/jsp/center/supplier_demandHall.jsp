<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>  
<!DOCTYPE html>
<html>
<head lang="en">
    <title></title>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/style.css"/>
	<script src="js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<link href="css/radialindicator.css"  rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
</head>
<script type="text/javascript">
	function demanList(par){
		window.location.href="customer_lj_DemandList?zt="+par; 
	}
	function seach(){
		var par=document.getElementById("zt").value;
		var searchform=document.getElementById("searchform");
		searchform.action="supplier_lj_demandHall2?zt="+par; 
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
	
	
	function gojbwszl(){//接包方
	   if(confirm("完善资料通过审核后才可以竞拍哦，确认去完善资料？")){
	   		window.location.href = 'supplier_lj_Supplier_BasicInfo';
	   }
	}
	function gojbwszlF(){//接包方
	   alert("订单已经抢完啦。");
	}
	function gojbwszlFi(){//接包方
	   alert("订单已经结束。");
	}
	function gofbwszl(){
	   if(confirm("您是发包方不能竞拍，确定去注册接包方账号竞拍吗？")){
	   		window.location.href = 'home2_toRegister';
	   }
	}
</script>
<body class="supplier">

	<%@ include file="../cheader.jsp"%>
    <div class="content">
    	<%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    	<div class="mid_box">
    	
    	        <style>
				    .menu_left{display:none;}
				    .content_mid{margin-left:0px;width:935px;}
				    .search .left{width:748px !important;}
				    .date_list .date_style{width:646px;}
				    .main_overview{ box-shadow: 1px 1px 1px #dcdcdc}
				    .screen ul li{padding:0px 10px;width:100%;height:46px;line-height:46px;border-bottom:1px dashed #dcdcdc;color:#333;}
				    .screen ul li span{margin:0px 14px;color:#666;}
				    .screen ul li span.active{padding:5px 6px;background: #f38f00;border-radius: 3px;color:#fff;}
				</style>
				<div class="content_mid demendHall" style="min-height:860px">
					<form id="searchform"  method="post" action="">
					        <input type="hidden" value="${pa.xuqiuType}" id="xuqiuType" name="xuqiuType">
					        <input type="hidden" value="${pa.category2}" id="category2" name="category2">
					        <input type="hidden" value="${pa.mxArea}" id="mxArea" name="mxArea">
					        <input type="hidden" value="${pa.category1}" id="category1" name="category1">
					        <input type="hidden" value="cset" id="cset" name="cset">
						    <div class="main_overview">
						        <div class="title">需求大厅</div>
						        <div class="search">
						            <div class="left">
						                <ul class="date_list">
						                    <li style="width:100%;"><label>订单名称：</label><input class="date_style form-control" type="text" name="sorderName" id="sorderName"  value="${pa.sorderName}"/>
						                    <p style="color:#666666;margin-left:68px;margin-top:5px;">搜索热词：&emsp;意向挖掘&emsp;英语&emsp;上海&emsp;北京&emsp;电话销售&emsp;市场调研&emsp;深圳&emsp;广州&emsp;天津&emsp;西安</p>
						                    </li>
						                    <li style="float:left;width:inherit;"><label>订单编号：</label><input class="form-control" name="sorderNo" id="sorderNo" type="text"  value="${pa.sorderNo}" style="width:80px;display:inline-block;"/></li>
						                    <li style="float:left;width:inherit;"><label>发布时间：</label>     
						                        <div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd"
						                             data-link-field="dtp_input1" data-link-format="yyyy/MM/dd" style="width:140px;">
						                            <input class="form-control"size="16" type="text" value="" style="width:80px;"  name="sbeginDateValue" id="sbeginDateValue" type="text" value="${pa.sbeginDateValue}" readonly>
						                            <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
						                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
						                        </div>
						                        <input type="hidden" id="dtp_input1" value=""/><label>&emsp;---&emsp;</label>
						                        <div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy/MM/dd" style="width:140px;">
						                            <input class="form-control"  size="16" type="text" value="" style="width:80px;" name="sendDateValue" id="sendDateValue" type="text" value="${pa.sendDateValue}" readonly>
						                            <span  class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
						                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
						                        </div>
						                        <input type="hidden" id="dtp_input1" value=""/></li>
						                    <li style="float:left;width:inherit;">
						                    <div class="input-group " style="float:left;">
						                        <span style="float:left;line-height:30px;">¥&nbsp;</span>
						                        <input class="form-control" type="text" value="${pa.minJine}" 
						                        			onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
													        onblur = 'this.value = this.value.replace(/\D+/g, "")'
						                        name="minJine" id="minJine"  style="width:45px;border-radius: 4px;">
						                    </div>
						                    <label>&emsp;---&emsp;</label>
						                    <div class="input-group "  style="float:left;">
						                        <input class="form-control" type="text" value="${pa.maxJine}" 
						                        			onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
													        onblur = 'this.value = this.value.replace(/\D+/g, "")'
						                        name="maxJine" id="maxJine"  style="width:45px;border-radius: 4px;float:inherit;" >
						                    </div></li>
						                </ul>
						            </div>
						            <div class="right" style="height:110px;">
						                <button onclick="seach()">搜索</button>
						            </div>
						        </div>
						    </div>
				    </form>
				    <style>
				        .screen ul li{padding:0px 10px;width:100%;height:46px;line-height:46px;border-bottom:1px dashed #dcdcdc;color:#333;}
				        .screen ul li span{margin:0px 14px;color:#666;}
				        .screen ul li span.active{padding:5px 6px;background: #f38f00;border-radius: 3px;color:#fff;}
				    </style>
				    <div class="main_overview screen" style="min-height:250px;">
				        <ul class="choice_list">       
				            <li>需求类型：
			    				<c:if test="${''==pa.xuqiuType}">
			    				 <span class="active">全部</span><span>套餐</span><span>个性化需求</span>
			    				</c:if>
	    				        <c:if test="${'套餐'==pa.xuqiuType}">
			    				 <span >全部</span><span class="active">套餐</span><span>个性化需求</span>
			    				</c:if>
			    				<c:if test="${'个性化需求'==pa.xuqiuType}">
			    				 <span >全部</span><span >套餐</span><span class="active">个性化需求</span>
			    				</c:if>
				            </li>
				            
				            <c:set var="category2" value="${pa.category2}"/>
				            <li>营销类型：
				             	<c:if test="${''==pa.category2}">
			    				   <span class="active">全部</span><span>电话营销</span><span>网络营销</span><span>地推推广</span>
			    				</c:if>
	    				        <c:if test="${fn:contains(category2, '电话营销')}">
			    				   <span>全部</span><span class="active">电话营销</span><span >网络营销</span><span>地推推广</span>
			    				</c:if>
			    				<c:if test="${fn:contains(category2, '网络营销')}">
			    				   <span>全部</span><span>电话营销</span><span class="active">网络营销</span><span>地推推广</span>
			    				</c:if>
			    				<c:if test="${fn:contains(category2, '地推推广')}">
			    				   <span>全部</span><span>电话营销</span><span>网络营销</span><span class="active">地推推广</span>
			    				</c:if>
				            </li>
				            
				            <li>面向地区：
				                <c:if test="${''==pa.mxArea}">
			    				   <span class="active">全国</span><span>上海</span><span>北京</span><span>广州 </span><span>深圳</span><span>重庆</span><span>天津</span>
			    				</c:if>
	    				       <c:if test="${'上海'==pa.mxArea}">
			    				   <span>全国</span><span class="active">上海</span><span>北京</span><span>广州 </span><span>深圳</span><span>重庆</span><span>天津</span>
			    				</c:if>
				                <c:if test="${'北京'==pa.mxArea}">
			    				   <span>全国</span><span>上海</span><span class="active">北京</span><span>广州 </span><span>深圳</span><span>重庆</span><span>天津</span>
			    				</c:if>
				                <c:if test="${'广州 '==pa.mxArea}">
			    				   <span>全国</span><span>上海</span><span>北京</span><span class="active">广州 </span><span>深圳</span><span>重庆</span><span>天津</span>
			    				</c:if>
	    				        <c:if test="${'深圳'==pa.mxArea}">
			    				   <span>全国</span><span>上海</span><span>北京</span><span>广州 </span><span class="active">深圳</span><span>重庆</span><span>天津</span>
			    				</c:if>
				                <c:if test="${'重庆'==pa.mxArea}">
			    				   <span>全国</span><span>上海</span><span>北京</span><span>广州 </span><span>深圳</span><span class="active">重庆</span><span>天津</span>
			    				</c:if> 
				                <c:if test="${'天津'==pa.mxArea}">
			    				   <span>全国</span><span>上海</span><span>北京</span><span>广州 </span><span>深圳</span><span>重庆</span><span class="active">天津</span>
			    				</c:if> 
				            </li>
				            
				            <li>面向行业：
				            	<c:if test="${''==pa.category1}">
			    				                <span class="active">全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'线上教育培训'==pa.category1}">
			    				                <span>全部</span>
				                                <span class="active">线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'线下教育培训'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span class="active">线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'房地产'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span class="active">房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'汽车'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span class="active">汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'汽车后市场'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span class="active">汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'金融'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span class="active">金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'互联网'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span class="active">互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'电商平台'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span class="active">电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'运营商增值服务'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span class="active">运营商增值服务</span>
							                    <span>其他行业</span>
			    				</c:if>
			    				<c:if test="${'其他行业'==pa.category1}">
			    				                <span>全部</span>
				                                <span>线上教育培训</span>
							                    <span>线下教育培训</span>
							                    <span>房地产</span>
							                    <span>汽车</span>
							                    <span>汽车后市场</span>
							                    <span>金融</span>
							                    <span>互联网</span>
							                    <span>电商平台</span>
							                    <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							                    <span>运营商增值服务</span>
							                    <span class="active">其他行业</span>
			    				</c:if>       
				            </li>
				        </ul>
				    </div>   
				    <div class="main_overview">
				        <div class="tab">
				            <ul>
	    						<li class="completion-rate">完成率</li>
	    						<li class="name">订单名称</li>
	    						<li class="price">单价</li>
	    						<li class="number">剩余数量</li>
	    						<li class="total">总金额</li>
	    						<li class="order-status">剩余时间</li>
	    						<c:if test="${user.jfutype=='2'}">
	    						<li class="status">操作</li>
	    						</c:if>
	    					</ul>
	    					<c:forEach var="d" items="${res.results}">
				            <div class="order_box">
				                <div class="number_date">
				                    <c:set var="auctionNum" value="${d.releasenum-d.applicationnum}"/>
	    							<p>订单编号：${d.demandid}</p>
	    							<p class="date">发布时间：${fn:substring(d.releasetime,0,10)}</p>
	    							<form name="detailForm_${d.demandid}" id="detailForm_${d.demandid}" action="">
	    								<input type="hidden" value="${d.demandid}" name="demandid">
	    								<input type="hidden" value="supplier_lj_demandHall2" name="ztDetail">
	    							</form>
	    							
	    							
	    							
	    								<c:if test="${user.jfutype=='2'}">
	    								   <c:if test="${user.jfustate==4}">
				    							<c:if test="${auctionNum>0}">
													 <a onclick="gotoDetail('${d.demandid}')" href="javascript:">订单详情 ></a>
												</c:if>
												<c:if test="${auctionNum<=0}">
<!-- 													<a onclick="gojbwszlF()" href="javascript:">订单详情 ></a> -->
												</c:if>
											</c:if>
											<c:if test="${user.jfustate!=4}">
<!-- 											   <a onclick="gojbwszl()" href="javascript:">订单详情 ></a> -->
											</c:if>
										 </c:if>
										 
										 <c:if test="${user.jfutype=='1'}">
<!-- 										 	    <a onclick="gofbwszl()" href="javascript:">订单详情 ></a> -->
										 </c:if>
										 
										 
										 
										 
										 
	    							
	    							
	    							
	    						</div>
				                <div class="info">
	    							<div class="completion-rate">
	    								<div class="prg-cont rad-prg indicatorContainer" data="${(d.fishnum/d.releasenum)*100}"></div>
	    							</div>
	    							<div class="name">
	    								<p>${d.ordername}</p>
	    							</div>
	    							<div class="price">
	    								      <c:if test="${user.jfustate==4}">
	    								      ${d.orderprice}
	    								      </c:if>
	    								      <c:if test="${user.jfustate!=4}">
	    								      ***
	    								      </c:if>
	    							</div>
	    							<div class="number">${d.releasenum-d.applicationnum}</div>
	    							<div class="total">
	    								      <c:if test="${user.jfustate==4}">
	    								      ${d.orderpricetol}
	    								      </c:if>
	    								      <c:if test="${user.jfustate!=4}">
	    								      ***
	    								      </c:if>
	    							</div>
	    							<div class="order-status">
		    							<span class="wait">
		    							<c:if test="${d.suDay>0}">
		    							   ${d.suDay}天后截止
		    							</c:if> 
		    							</span>
	    							</div>
	    							<c:if test="${user.jfutype=='2'}">
		    							<div class="status">
		    							<!-- 2,4  审核通过和执行中 -->
		    							<c:if test="${d.fdstate<=4}">
		    								   <c:if test="${user.jfustate==4}">
					    						  <c:if test="${auctionNum>0}">
					    							   <c:if test="${d.suDay>5}">
														 <a onclick="gotoDetail('${d.demandid}')" style="background:#ff9429" href="javascript:" id="jinpai">马上竞拍</a>
													   </c:if>  
													   
													   <c:if test="${d.suDay<=5}">
													  	<a onclick="gotoDetail('${d.demandid}')" style="background:#259dfa" href="javascript:" id="jinpai">立即抢拍</a>
													 </c:if>    
													</c:if>
													<c:if test="${auctionNum<=0}">
														<a onclick="gojbwszlF()" style="background:#ccc" href="javascript:" id="jinpai">抢完啦</a>
													</c:if>
												</c:if>
												<c:if test="${user.jfustate!=4}">
													 	<a onclick="gojbwszl()" style="background:#ccc" href="javascript:" id="jinpai">马上竞拍</a>
												</c:if>
		    							</c:if>
		    							
		    							<!-- 5,6  结算中和完成的 -->
		    							<c:if test="${d.fdstate>=4}">
											<a onclick="gojbwszlFi()" style="background:#ccc" href="javascript:" id="jinpai">已截止</a>
		    							</c:if> 
		    							</div>
	    							</c:if>
	    						</div>
	    						
				            </div>
				            </c:forEach>
				            <div class="page">
	    					${res.pageStr}
	    					</div>
	    					
				        </div>
				    </div>
				</div>
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
				
				$("ul.choice_list li span").click(function(){
		        	$(this).addClass("active").siblings().removeClass("active");
		        	$("ul.choice_list li").each(function(i){
			        	if(i==0){
			        		$("#xuqiuType").attr("value",$(this).find("span.active").text());
			        	}
			        	if(i==1){
			        		$("#category2").attr("value",$(this).find("span.active").text());
			        	}
			        	if(i==2){
			        		$("#mxArea").attr("value",$(this).find("span.active").text());
			        	}
			        	if(i==3){
			        		$("#category1").attr("value",$(this).find("span.active").text());
			        	}
			        });
		        });
			});
</script>
</body>
</html>
