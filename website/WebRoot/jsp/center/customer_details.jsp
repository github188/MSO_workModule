<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
<link rel="stylesheet" href="css/style.css"/>

<script src="js/jquery-2.1.1.min.js"></script>
</head>



<script type="text/javascript">
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
</script>

<body class="supplier">
    <!-- jsp文件头和头部 -->
	<%@ include file="../cheader.jsp"%>
    <div class="content">
        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		    <%@ include file="../lmenu2.jsp"%>
	    		<div class="content_right">
	    		    <div id="new_demand_step_id" class="new_demand new_demand_step" style="display:none;">
	    				<div class="title">删除需求提醒</div>
	    				<div class="info">
	    					<div class="done">
	    						<p>您确定要删除这个需求吗？</p>
	    					</div>
	    					<div class="back">
	    						<a onclick="quxiao()" href="javascript:">< 返回上一页</a>
	    						<button class="btn_define" onclick="doDetailDone('delete')">确定</button>
	    						<button class="btn_cancel" onclick="quxiao()">取消</button>
	    					</div>
	    				</div>
	    			</div>
	    			
	    			<div id="order_details_id" class="new_demand order_details" >
	    			    <c:set var="tolJine" value="${demand.fishnum*demand.orderprice}"/>    
						<c:set var="zhanbi" value="${demand.zhanbi}"/>
		    					
	    				<div class="title">需求详情</div>
	    				<div class="title_order">${demand.ordername}</div>
	    				<div class="details_order">
	    					<h3>每单 ¥ 
	    					   <c:if test="${user.pid==''}">
	    					     ${demand.orderprice}
	    					   </c:if>  
	    					   <c:if test="${user.pid!=''}">
								 ***
							   </c:if>
							       ，共需要${demand.releasenum}单，总价为<span> ¥ ${demand.orderpricetol}</span></h3>
			    			<c:if test="${demand.fdstate==0}">
				    			<div class="info">
			    					<ul class="step1">
			    						<span class="icon"></span>
			    						<li class="first"><span>1</span>新建需求</li>
			    						<li class="second"><span>2</span>提交需求</li>
			    						<li class="third"><span>3</span>等待审核</li>
			    						<li class="last"><span>4</span>待执行</li>
			    					</ul>
		    					</div>
				    		</c:if>	
				    		<c:if test="${demand.fdstate==3}">
				    			<div class="msg_reason">备注：该订单已被驳回，原因是：${demand.dremark}</div>
				    			<div class="info">
			    					<ul class="step1">
			    						<span class="icon"></span>
			    						<li class="first"><span>1</span>新建需求</li>
			    						<li class="second"><span>2</span>提交需求</li>
			    						<li class="third"><span>3</span>等待审核</li>
			    						<li class="last"><span>4</span>待执行</li>
			    					</ul>
		    					</div>
				    		</c:if>	
				    		
				    		<c:if test="${demand.fdstate==1}">
			    			<div class="info">
			    					<ul class="step2">
			    						<span class="icon"></span>
			    						<li class="first"><span>1</span>新建需求</li>
			    						<li class="second"><span>2</span>提交需求</li>
			    						<li class="third"><span>3</span>等待审核</li>
			    						<li class="last"><span>4</span>待执行</li>
			    					</ul>
		    					</div>
				    		</c:if>	
				    		<c:if test="${demand.fdstate==8}">
			    			<div class="info">
			    					<ul class="step2">
			    						<span class="icon"></span>
			    						<li class="first"><span>1</span>新建需求</li>
			    						<li class="second"><span>2</span>提交需求</li>
			    						<li class="third"><span>3</span>等待审核</li>
			    						<li class="last"><span>4</span>待执行</li>
			    					</ul>
		    					</div>
				    		</c:if>	
				    		
				    		
				    		
				    		
			    			<c:if test="${demand.fdstate==7}">
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
		    					<p>目前已完成${demand.fishnum}单，消耗金额为${tolJine}元，占比${zhanbi}%：</p>
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
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi} %</p></div>
		    					</div>
		    					<div class="msg_reason">备注：该订单已被关闭，原因是：${demand.dremark}</div>
		    					
		    					<div class="info">
			    					<ul class="step1">
			    						<span class="icon"></span>
			    						<li class="first"><span>1</span>新建需求</li>
			    						<li class="second"><span>2</span>提交需求</li>
			    						<li class="third"><span>3</span>等待审核</li>
			    						<li class="last"><span>4</span>待执行</li>
			    					</ul>
		    					</div>
				    		</c:if>	
				    		
				    		
			    			<c:if test="${demand.fdstate==4||demand.fdstate==2}">
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
		    					<p>目前已完成${demand.fishnum}单，消耗金额为${tolJine}元，占比${zhanbi} %：</p>
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
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi} %</p></div>
		    					</div>
		    					
		    				<c:if test="${zt=='supplier_lj_demandHall2'}">
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
		    				<c:if test="${zt!='supplier_lj_demandHall2'}">
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
		    				</c:if>		
				    		</c:if>	
				    		
			    			<c:if test="${demand.fdstate==5}">
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
		    					<p>目前已完成${demand.fishnum}单，消耗金额为${tolJine}元，占比${zhanbi} %：</p>
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
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi} %</p></div>
		    					</div>
			    				<div class="info">
		    					  <ul class="step4">
		    						<span class="icon"></span>
		    						<li class="first"><span>1</span>发布需求</li>
		    						<li class="second"><span>2</span>等待执行</li>
		    						<li class="third"><span>3</span>订单执行</li>
		    						<li class="forth"><span>4</span>订单结算</li>
		    						<li class="last"><span>5</span>订单完成</li>
			    				  </ul>
		    					</div>
				    		</c:if>	
				    		
				    		
				    		<c:if test="${demand.fdstate==6}">
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
		    					<p>目前已完成${demand.fishnum}单，消耗金额为${tolJine}元，占比${zhanbi} %：</p>
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
		    						<div class="rate_bar orange" style="width: ${zhanbi}%;"><p>${zhanbi} %</p></div>
		    					</div>
				    			<div class="info">
		    					  <ul class="step5">
		    						<span class="icon"></span>
		    						<li class="first"><span>1</span>发布需求</li>
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
					                
					                <c:if test="${zt!='supplier_lj_demandHall2'}">
					                <li>
					                	<b>付款时间：</b>
					                	<c:if test="${demand.paytime=='3'}">
					                		<span>${demand.paytime}天内</span>
					                	</c:if>	
					                	<c:if test="${demand.paytime!='3'}">
					                		<span>${demand.paytime}</span>
					                	</c:if>	
					                </li>
					                </c:if>
					                
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
					                <c:if test="${zt!='supplier_lj_demandHall2'}">
						                <c:if test="${''!=demand.pleader||'null'!=demand.pleader}">  
							                <li>
							                	<b>联系人：</b>
							                	<span>${demand.pleader}</span>
							                </li>
							                <li>
							                	<b>联系人电话：</b>
							                	<span>${demand.pphone}</span>
							                </li>
						                 </c:if>
					                	 <li>
					                		<b>获客渠道：</b>
							    		 	   <c:if test="${''!=demand.standardoperation||'null'!=demand.standardoperation}">  
							                   &nbsp;&nbsp;电话营销： <a style=" background: none; padding-left: 0; margin-left: 0;" href="${pre}${demand.standardoperation}">下载话术>></a>&nbsp;&nbsp;&nbsp;&nbsp;
							                   </c:if> 
					                 	</li>
					                 </c:if>
									 <c:if test="${zt=='supplier_lj_demandHall2'}">
						                 <li> 
							                	<b>结算时间：</b>
							                	<span>${demand.paymenttime}</span>
							          	 </li>
						                 <li> 
							                	<b>结算标准：</b>
							                	<span>${demand.paymentstandard}</span>
							          	 </li>
						          	 </c:if>
	    					</ul>
	    				</div>



		    					<form name="do_detailForm" id="do_detailForm" action="">
		    					    <c:set var="auctionNum" value="${demand.releasenum-demand.applicationnum}"/>
							    	<input type="hidden" value="${demand.demandid}" name="demandid">
							    	<input type="hidden" value="${zt}" name="zt">
							    	<input type="hidden" value="" name="done" id="done">
							    </form>
		    					<div class="back">
			    					<a href="javascript:history.back(-1);">< 返回上一页</a>
			    					<c:if test="${zt=='supplier_lj_demandHall2'}">
		    							<c:if test="${auctionNum>0}">
			    							<c:if test="${user.jfustate==4}">
			    							  <button class="btn_orange" onclick="doDetailDone('apply')" >马上竞拍</button>
			    							</c:if>
										</c:if>
				    					<button class="btn_orange" onclick="doDetailDone('collectionOpportunities')" >收藏</button>
			    					</c:if>	
			    					
			    					<c:if test="${zt!='supplier_lj_demandHall2'&&zt!='mycollection'}">
						    			<c:if test="${demand.fdstate==0||demand.fdstate==3}">
					    					<button class="btn_blue" onclick="doDetailDone('submit')">提交</button>
					    					<button class="btn_blue" onclick="doDetailDone('edit')">编辑</button>
					    					<button class="btn_blue" onclick="doDetailDone('copy')">复制</button>
					    					<button class="btn_orange" onclick="doDelete()">删除</button>
							    		</c:if>	
							    			<c:if test="${demand.fdstate==4||demand.fdstate==5}">
							    				<button class="btn_blue" onclick="doDetailDone('copy')">复制</button>
								    		</c:if>	
								   </c:if>	
								</div>
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