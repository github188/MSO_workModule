<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
	<link rel="stylesheet" href="css/style.css"/>
</head>

<script type="text/javascript">
	//查询上传附件
	function searchReport1(){
		     var searchReport=document.getElementById("searchReport");
		     searchReport.action="customer_lj_DemandDetail"; 
			 searchReport.method="post";
			 searchReport.submit();
	}
	function doDetailDone(par){
	     var do_detailForm=document.getElementById("do_detailForm");
	     document.getElementById("done").value=par;
	     
	     if('apply'==par){//竞拍
	       do_detailForm.action="supplier_lj_ApplyAuction"; 
	     }
	     else if ('collectionOpportunities'==par){//收藏
	       do_detailForm.action="supplier_lj_CollectionDo"; 
	     }
	      else if ('edit'==par){//编辑
	       do_detailForm.action="customer_lj_DemandManagement2"; 
	     }
	     else if('supplier_lj_Debriefing'==par){
	     	do_detailForm.action="supplier_lj_Debriefing"; 
	     }
	     else{
	       do_detailForm.action="customer_lj_doDetailDone"; 
	     }
		 do_detailForm.method="post";
		 do_detailForm.submit();
	}
	function quxiao(){
	  	 document.getElementById("order_details_id").style.display="";
	  	 document.getElementById("new_demand_step_id").style.display="none";
	  	 $('html,body').animate({scrollTop: '0px'}, 800);
	}
	function  doDelete(){
	  	 document.getElementById("order_details_id").style.display="none";
	  	 document.getElementById("new_demand_step_id").style.display="";
	  	 $('html,body').animate({scrollTop: '0px'}, 800);
    }	
    
    
    
    
    function uploadReport(){
	  	 document.getElementById("uploadReport").style.display="";
	  	 document.getElementById("order_details_id").style.display="none";
	  	 document.getElementById("new_demand_step_id").style.display="none";
	  	 $('html,body').animate({scrollTop: '0px'}, 800);
	}
	function quxiaoupload(){
		 document.getElementById("uploadReport").style.display="none";
	  	 document.getElementById("order_details_id").style.display="";
	  	 document.getElementById("new_demand_step_id").style.display="none";
	  	 $('html,body').animate({scrollTop: '0px'}, 800);
	}
	
	
	
	//上传提交
	function uploadReportDone(par){
	     var order_num=document.getElementById("order_num").value;
	     if(order_num==""){
	        alert("请填写本次上传的单量");
	        return false;
	     }
	     if(file1==""){
	        alert("请选择成单报告");
	        return false;
	     }
	     if(file2==""){
	        alert("请选择录音文件");
	        return false;
	     }
	     document.getElementById("report").value=file1;
	     document.getElementById("recording").value=file2;
	     var uploadReportForm=document.getElementById("uploadReportForm");
	     uploadReportForm.action="supplier_lj_douploadReportDone"; 
		 uploadReportForm.method="post";
		 uploadReportForm.submit();
	}
</script>

<body 
<c:if test="${user.jfutype=='2'}">
class="supplier"
</c:if>
>   				

    <!-- jsp文件头和头部 -->
	<%@ include file="../cheader.jsp"%>
    <div class="content">
        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		    <%@ include file="../lmenu2.jsp"%>
	    		
	    		<div class="content_right">
	    		 
						 
	    		    <div id="new_demand_step_id" class="new_demand new_demand_step" style="display:none;">
	    				<div class="title">删除订单提醒</div>
	    				<div class="info">
	    					<div class="done">
	    						<p>您确定要删除这个订单吗？</p>
	    					</div>
	    					<div class="back">
	    						<a onclick="quxiao()" href="javascript:">< 返回上一页</a>
	    						<button class="btn_define" onclick="doDetailDone('delete')">确定</button>
	    						<button class="btn_cancel" onclick="quxiao()">取消</button>
	    					</div>
	    				</div>
	    			</div>
	    			
	    			
	    			<div id="order_details_id" class="new_demand order_details" >
	    			    <c:set var="tolJine" value="${demand.orderprice*demand.auctionnum}"/>    
		    			<c:set var="zhanbi" value="${demand.zhanbi}"/>
		    			
	    				<div class="title">订单详情</div>
	    				<div class="title_order">${demand.ordername}</div>
	    				<div class="details_order">
	    					<h3>每单 ¥
	    					   <c:if test="${user.pid==''}">
	    					     ${demand.orderprice}
	    					   </c:if>  
	    					   <c:if test="${user.pid!=''}">
								 ***
							   </c:if>
	    					       ，竞拍${demand.auctionnum}单，竞拍总价为<span>
	   							<c:if test="${user.pid==''}">
								 ${demand.orderprice*demand.auctionnum}
								</c:if>
								<c:if test="${user.pid!=''}">
								 ***
								</c:if>  					 										   
	    					 </span>
	    					</h3>
			    			<c:if test="${demand.jdstate==1}">
				    			<p>订单状态：竞拍订单</p>
				    			 <div class="info">
						            <ul class="step1">
						                <span class="icon"></span>
						                <li class="first"><span>1</span>竞拍订单</li>
						                <li class="second"><span>2</span>等待执行</li>
						                <li class="third"><span>3</span>订单执行</li>
						                <li class="forth"><span>4</span>订单结算</li>
						                <li class="last"><span>5</span>订单完成</li>
						            </ul>
						        </div>
				    		</c:if>	
				    		<c:if test="${demand.jdstate==3}">
				    			<p>订单状态：被驳回</p>
				    			<div class="msg_reason">备注：该订单已被驳回，原因是：${demand.dremark}</div>
				    			<div class="info">
			    					<ul class="step1">
						                <span class="icon"></span>
						                <li class="first"><span>1</span>竞拍订单</li>
						                <li class="second"><span>2</span>等待执行</li>
						                <li class="third"><span>3</span>订单执行</li>
						                <li class="forth"><span>4</span>订单结算</li>
						                <li class="last"><span>5</span>订单完成</li>
						            </ul>
		    					</div>
				    		</c:if>	

				    		
			    			<c:if test="${demand.jdstate==7}">
			    			    <p>项目开始日期：${fn:substring(demand.begintime,0,10)}，结束日期：${demand.yjwctime}，目前已用时：</p>
		    					<div class="rate_box">
		    						<style>
		    							@keyframes mymove
										{
											from {width:0;}
											to {width:${demand.percent}%;}
										}	
										@-webkit-keyframes mymove /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${demand.percent}%;}
										}	
		    						</style>
		    						<div class="rate_bar blue" style="width: ${demand.percent}%;"><p>${demand.percent}%</p></div>
		    					</div>
		    					<p>目前已完成${demand.fishnum}单，消耗金额为
			    					<c:if test="${user.pid==''}">
									${tolJine}
									</c:if>
									<c:if test="${user.pid!=''}">
									***
									</c:if>  
		    					元，占比${zhanbi}%：</p>
		    					<div class="rate_box">
		    						<style>
		    							@keyframes mymove1
										{ 
											from {width:0;}
											to {width:${zhanbi}%;}
										}	
										@-webkit-keyframes mymove1 /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${zhanbi}%;}
										}
		    						</style>
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi}%</p></div>
		    					</div>
		    					<div class="msg_reason">备注：该订单已被关闭，原因是：${demand.dremark}</div>
		    					
		    					<div class="info">
			    					<ul class="step2">
						                <span class="icon"></span>
						                <li class="first"><span>1</span>竞拍订单</li>
						                <li class="second"><span>2</span>等待执行</li>
						                <li class="third"><span>3</span>订单执行</li>
						                <li class="forth"><span>4</span>订单结算</li>
						                <li class="last"><span>5</span>订单完成</li>
						            </ul>
		    					</div>
				    		</c:if>	
				    		
				    		
				    		
				    		<c:if test="${demand.jdstate==2}">
			    			<div class="info">
			    					<ul class="step2">
						                <span class="icon"></span>
						                <li class="first"><span>1</span>竞拍订单</li>
						                <li class="second"><span>2</span>等待执行</li>
						                <li class="third"><span>3</span>订单执行</li>
						                <li class="forth"><span>4</span>订单结算</li>
						                <li class="last"><span>5</span>订单完成</li>
						            </ul>
		    					</div>
				    		</c:if>	
				    		
			    			<c:if test="${demand.jdstate==4}">
			    				<p>项目开始日期：${fn:substring(demand.begintime,0,10)}，结束日期：${demand.yjwctime}，目前已用时：</p>
			    				<div class="rate_box">
		    						<style>
		    							@keyframes mymove
										{
											from {width:0;}
											to {width:${demand.percent}%;}
										}	
										@-webkit-keyframes mymove /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${demand.percent}%;}
										}	
		    						</style>
		    						<div class="rate_bar blue" style="width: ${demand.percent}%;"><p>${demand.percent}%</p></div>
		    					</div>
		    					<p>目前已完成${demand.fishnum}单，消耗金额为
		    						<c:if test="${user.pid==''}">
									${tolJine}
									</c:if>
									<c:if test="${user.pid!=''}">
									***
									</c:if>  
		    					元，占比${zhanbi}%：</p>
				    			<div class="rate_box">
		    						<style>
		    							@keyframes mymove1
										{ 
											from {width:0;}
											to {width:${zhanbi}%;}
										}	
										@-webkit-keyframes mymove1 /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${zhanbi}%;}
										}
		    						</style>
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi}%</p></div>
		    						<div style="height: 4px;" onclick="doDetailDone('supplier_lj_Debriefing')">
		    						<p style="text-align: right;"><span style="color:#ed5400;line-height:40px;"><a href="javascript:;" onclick="doDetailDone('supplier_lj_Debriefing')"  style="color:#009cee">点击查看进度</a></span></p>
		    						</div>
		    					</div>
		    					
		    					
			    				<div class="info">
		    					  <ul class="step3">
						                <span class="icon"></span>
						                <li class="first"><span>1</span>竞拍订单</li>
						                <li class="second"><span>2</span>等待执行</li>
						                <li class="third"><span>3</span>订单执行</li>
						                <li class="forth"><span>4</span>订单结算</li>
						                <li class="last"><span>5</span>订单完成</li>
						            </ul>
		    					</div>
				    		</c:if>	
				    					
			    			<c:if test="${demand.jdstate==5}">
			    			
			    			
			    			<p>项目开始日期：${fn:substring(demand.begintime,0,10)}，结束日期：${demand.yjwctime}，目前已用时：</p>
		    					<div class="rate_box">
		    						<style>
		    							@keyframes mymove
										{
											from {width:0;}
											to {width:${demand.percent}%;}
										}	
										@-webkit-keyframes mymove /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${demand.percent}%;}
										}	
		    						</style>
		    						<div class="rate_bar blue" style="width: ${demand.percent}%;"><p>${demand.percent}%</p></div>
		    					</div>
		    					<p>目前已完成${demand.fishnum}单，消耗金额为
		    						<c:if test="${user.pid==''}">
									${tolJine}
									</c:if>
									<c:if test="${user.pid!=''}">
									***
									</c:if>  
		    					元，占比${zhanbi}%：</p>
		    					<div class="rate_box">
		    						<style>
		    							@keyframes mymove1
										{ 
											from {width:0;}
											to {width:${zhanbi}%;}
										}	
										@-webkit-keyframes mymove1 /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${zhanbi}%;}
										}
		    						</style>
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi}%</p></div>
		    				  </div>
		    					
			    			<div class="info">
		    					 <ul class="step4">
						                <span class="icon"></span>
						                <li class="first"><span>1</span>竞拍订单</li>
						                <li class="second"><span>2</span>等待执行</li>
						                <li class="third"><span>3</span>订单执行</li>
						                <li class="forth"><span>4</span>订单结算</li>
						                <li class="last"><span>5</span>订单完成</li>
						            </ul>
		    					</div>
				    		</c:if>	
				    		
				    			    	
				    		<c:if test="${demand.jdstate==6}">
				    			
				    			<p>项目开始日期：${fn:substring(demand.begintime,0,10)}，结束日期：${demand.yjwctime}，目前已用时：</p>
		    					<div class="rate_box">
		    						<style>
		    							@keyframes mymove
										{
											from {width:0;}
											to {width:${demand.percent}%;}
										}	
										@-webkit-keyframes mymove /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${demand.percent}%;}
										}	
		    						</style>
		    						<div class="rate_bar blue" style="width: ${demand.percent}%;"><p>${demand.percent}%</p></div>
		    					</div>
		    					<p>目前已完成${demand.fishnum}单，消耗金额为
		    						<c:if test="${user.pid==''}">
									${tolJine}
									</c:if>
									<c:if test="${user.pid!=''}">
									***
									</c:if> 
		    					元，占比${zhanbi}%：</p>
		    					<div class="rate_box">
		    						<style>
		    							@keyframes mymove1
										{ 
											from {width:0;}
											to {width:${zhanbi}%;}
										}	
										@-webkit-keyframes mymove1 /* Safari and Chrome */
										{
											from {top:0px;}
											to {top:${zhanbi}%;}
										}
		    						</style>
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi}%</p></div>
		    					</div>
				    			<div class="info">
		    					  <ul class="step5">
						                <span class="icon"></span>
						                <li class="first"><span>1</span>竞拍订单</li>
						                <li class="second"><span>2</span>等待执行</li>
						                <li class="third"><span>3</span>订单执行</li>
						                <li class="forth"><span>4</span>订单结算</li>
						                <li class="last"><span>5</span>订单完成</li>
						            </ul>
		    					</div>
				    		</c:if>	
	    				</div>
	    				
	    				<div class="title_order">基本信息 </div>
	    				<div class="info_order">
	    					<ul>
	    					
	    						   	<li>
					                	<b>业务类型：</b>
					                	<span>${demand.category3}</span>
					                </li>
					                <li>
					                	<b>需求描述：</b>
					                	<span>${demand.demanddescription}</span>
					                </li>
					                
					                
		    						<li>
					                	<b>产品名称：</b>
					                	<span>${demand.productname}</span>
					                </li>
					                <li>
					                	<b>产品介绍：</b>
					                	<span>${demand.demand}</span>
					                </li>
					                <li>
					                	<p style="overflow: hidden;">
					                		<b>意向客户特征：</b>
					                		<span>城市：${demand.targecity}</span>
					                	</p>
					                	<p class="padding-7">人群：${demand.targethumen}</p>
					                	<p class="padding-7">年龄：${demand.beginage}-${demand.endage}</p>
					                </li>
					                <li>
					                	<b>销售线索模板：</b>
										<c:if test="${''!=demand.xsxsurl||'null'!=demand.xsxsurl}">
											<a href="${pre}${demand.xsxsurl}"  style="background: none; padding-left: 0; margin-left: 0;">下载销售线索文件>></a>
										</c:if> 
					                </li>
					                
					                
					                <li>
					                		<b>获客渠道：</b>
							    		 	   <c:if test="${''!=demand.standardoperation||'null'!=demand.standardoperation}">  
							                   &nbsp;&nbsp;电话营销： <a style=" background: none; padding-left: 0; margin-left: 0;" href="${pre}${demand.standardoperation}">下载话术>></a>&nbsp;&nbsp;&nbsp;&nbsp;
							                   </c:if> 
					               </li>
					                
					                
					                

					                 <li> 
						                	<b>结算时间：</b>
						                	<span>${demand.paymenttime}</span>
						          	 </li>
					                 <li> 
						                	<b>结算标准：</b>
						                	<span>${demand.paymentstandard}</span>
						          	 </li>
						          	 
						          	 
						          	 
	    					</ul>
				 
	    				</div>
	    				<form name="do_detailForm" id="do_detailForm" action="">
						    	<input type="hidden" value="${demand.demandid}" name="demandid">
						    	<input type="hidden" value="${demand.orderid}" name="orderid" >
						    	<input type="hidden" value="${zt}" name="zt">
						    	<input type="hidden" value="" name="done" id="done">
						    	<input type="hidden" value="" name="done" id="done">
						    	<c:set var="auctionNum" value="${demand.releasenum-demand.applicationnum}"/>
						 </form>
		    			 <div class="back">
		    			 
				    			     <c:if test="${demand.jdstate==2||demand.jdstate==4}"> 
				    			        <script type="text/javascript" src="js/plupload.full.min.js"></script>
					    			        <div class="uploadReport" >
										        <p class="title">上传成单报告</p>
										        <div class="demand2">
											        <form name="uploadReportForm" id="uploadReportForm" action="">
											            <li>本次上传的单量为：
											                                    <input type="number" name="order_num"  id="order_num" 
											            						style="width: 113px;"
																	            onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
																		        oninput= 'this.value = this.value.replace(/\D+/g, "")'
																		        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
																		        onblur = 'this.value = this.value.replace(/\D+/g, "")'/>&emsp;单&emsp;<span style="color:#ed5400;">（* 必填）</span></li>
											            <li>
											                <label>上传本次成单报告：&emsp;</label>
											                <div style="width:500px;">
											                    <div class="ossfile" ></div>
											                    <button type="button" style="margin:0;" id="selectfiles">选择</button>
											                    <button type="button" style="margin:0;"  id="postfiles">开始上传</button>
											                </div>
											            </li>
											            <li>
											                <label>上传本次录音文件：&emsp;</label>
											                <div style="width:500px;">
											                    <div class="ossfile2" ></div>
											                    <button type="button" style="margin:0;"  id="selectfiles2">选择</button>
											                    <button type="button" style="margin:0;" id="postfiles2">开始上传</button>
											                </div>
											            </li>
											            <p class="remind">备注：以上三项皆为必填（传），否则上传不成功，请留意！</p>
											            			<input type="hidden" value="" name="report" id="report" >
															        <input type="hidden" value="" name="recording" id="recording">
															        <input type="hidden" value="${demand.jfuid}" name="jfuid" >
															        <input type="hidden" value="${demand.orderid}" name="orderid" id="orderid">
															        <input type="hidden" value="${demand.demandid}" name="demandid">
															        <input type="hidden" name="token" value="${token}">
											        </form>
										        </div>
						       					<p class="Apply_bottom">
						       					<a href="javascript:history.back(-1);">< 返回上一页</a>
						       					<button type="button" class="btn" onclick="uploadReportDone()">确认提交</button></p>
										</div>
									</c:if>
							
							
							
									 <c:if test="${demand.jdstate!=2&&demand.jdstate!=4}"> 
					    					<a href="javascript:history.back(-1);">< 返回上一页</a>
					    			 </c:if>
			    			 
			    					<c:if test="${zt=='supplier_lj_demandHall2'}">
			    						<c:if test="${auctionNum>0}">
				    						<c:if test="${user.jfustate==4}">
			    							  <button class="btn_orange" onclick="doDetailDone('apply')" >马上竞拍</button>
											</c:if>
										</c:if>
				    					<button class="btn_orange" onclick="doDetailDone('collectionOpportunities')" >收藏</button>
			    					</c:if>	
			    					
			    					<c:if test="${zt!='supplier_lj_demandHall2'}">
						    			<c:if test="${demand.jdstate==0||demand.jdstate==3}">
					    					<button class="btn_orange" onclick="doDelete()">删除</button>
							    		</c:if>	
									</c:if>	
						  </div>
						  
						  



						
						<p style="border:1px solid #ccc;border-left:none;border-right:none;padding:20px;
													border-width: 1px medium;
													border-style: solid none;
													border-color: rgb(204, 204, 204) -moz-use-text-color;
													-moz-border-top-colors: none;
													-moz-border-right-colors: none;
													-moz-border-bottom-colors: none;
													-moz-border-left-colors: none;
													border-image: none;
													padding: 20px;">成单报告上传记录与质检反馈</p>
						
						<div class="main_overview" style="padding: 30px 45px 12px 26px;">
						    <form action="" name="searchReport" id="searchReport">
								<input type="hidden" value="${zt}" name="zt" >
								<input type="hidden" value="${demand.orderid}" name="orderid">
								<input type="hidden" value="${demand.demandid}" name="demandid">
					            <div class="search" style="height:inherit; overflow:hidden;">
					                <div class="left" style="float:right; width:auto;">
					                    <ul class="date_list">
					                        <li>
					                            <label>上传时间：</label>
					                            <!--<input type="date" />-->
					                            <div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy/MM/dd">
					                                <input class="form-control" size="16" type="text" value="${sbeginDateValue}" name="sbeginDateValue" value="" readonly="">
					                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
					                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
					                            </div>
					                            <input type="hidden" id="dtp_input1" value="">
					                        </li>
					                        <li class="second last">
					                            <label>---</label>
					                            <div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy/MM/dd">
					                                <input class="form-control" size="16" type="text" value="${sendDateValue}" name="sendDateValue"  readonly="">
					                                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
					                                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
					                            </div>
					                            <input type="hidden" id="dtp_input1" value="">
					                        </li>
					                        <li style=" width:119px">
					                            <button type="button" class="btn btn_orange" onclick="searchReport1()" style="margin:0;height: 30px;
																									width: 80px;
																									background: #f38f00;
																									color: #fff4e4;
																									font-size: 16px;
																									text-align: center;
																									display: block;
																									margin: 0 auto;
																									border-radius: 3px;">搜索</button>
					                            </li>
					                    </ul>
					                </div>
					            </div>
							</form>
				
				            <div class="RoleManagement" style="padding:0">
				                <table class="tab">
				                    <tbody>
					                    <tr>
					                        <th>上传时间</th>
					                        <th>上传量</th>
					                        <th>成功量</th>
					                        <th>失败量</th>
					                        <th>重复数据明细</th>
					                        <th>质检反馈报告</th>
					                        <th>dba审查</th>
					                        <th>qa审查</th>
					                    </tr>
					                    <c:forEach var="d" items="${page.results}">
										     <tr>
											 
						                        <td>${d.createtime}</td>
						                        <td>${d.order_num}</td>
						                        <td>${d.qa_qualified+d.qa_notstandard}</td>
						                        <td>${d.qa_disqualification+d.qa_cancel}</td>
						                        <td>
						                        
						                        <c:if test="${''!=d.dba_url}">  
														 <c:if test="${d.createtime > '2016-07-08 00:00:00'}">
													  <a href="${pre}${d.dba_url}" style="margin:0;text-decoration: underline">下载</a>
																</c:if>
													   <c:if test="${d.createtime <= '2016-07-08 00:00:00'}">
													   <a href="${pre1}${d.dba_url}" style="margin:0;text-decoration: underline">下载</a>
													     </c:if>		
						                        		
						                        </c:if>  
						                        </td>
						                        <td>
						                        <c:if test="${''!=d.qa_url}">  
													 <c:if test="${d.createtime > '2016-07-08 00:00:00'}">
													  <a href="${pre}${d.qa_url}" style="margin:0;text-decoration: underline">下载</a>
																</c:if>
													   <c:if test="${d.createtime <= '2016-07-08 00:00:00'}">
													   <a href="${pre1}${d.qa_url}" style="margin:0;text-decoration: underline">下载</a>
													     </c:if>		
						              
						                        </c:if> 
						                        </td>
						                        <td>
						                        						<c:if test="${d.dba_check==0}">
										    								正确
										    							</c:if>
						                        						<c:if test="${d.dba_check==1}">
										    								错误
										    							</c:if>
										    							<c:if test="${d.dba_check!=1&&d.dba_check!=0}">
										    								未审查
										    							</c:if>
						                        </td>
						                        <td> 
						                        						<c:if test="${d.qa_check==0}">
										    								正确
										    							</c:if>
						                        						<c:if test="${d.qa_check==1}">
										    								错误
										    							</c:if>
										    							<c:if test="${d.qa_check!=1&&d.qa_check!=0}">
										    								未审查
										    							</c:if>
										    	</td>
						                     </tr>
										</c:forEach>
											
				                    </tbody>
				                </table>
				            </div>
				            <div class="page" style="padding-right:45px;">
						        ${page.pageStr}
						    </div>
				        </div>
	    			</div>
	    		</div>
    		</div>
    	</div>
    </div>
	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
	<script>
		var file1="";
		var file2="";
		jQuery(function(){
				var oHeight = $(".main_overview .tab .info .name").height();
				$(".main_overview .tab .info .name").css("padding-top",function(){return (140 - $(this).height())/2;});
			
			
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
				
				
		})
	</script>
    
	<script type="text/javascript" src="lib/crypto1/crypto/crypto.js"></script>
	<script type="text/javascript" src="lib/crypto1/hmac/hmac.js"></script>
	<script type="text/javascript" src="lib/crypto1/sha1/sha1.js"></script>
	<script type="text/javascript" src="lib/base64.js"></script>
	<script type="text/javascript" src="js/plupload.full.min.js"></script>
	<script type="text/javascript" src="js/upload.js"></script>
	
</body>
</html>