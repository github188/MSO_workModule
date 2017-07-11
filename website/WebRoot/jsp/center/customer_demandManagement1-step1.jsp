<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<body>
	<!-- jsp文件头和头部 -->
	<%@ include file="../cheader.jsp"%>
	
    <div class="content">
	   <!--导入 公用菜单页  -->
       <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		   	<%@ include file="../lmenu2.jsp"%>
	    		<div class="content_mid">
	    		
	    		<form id="firstForm" name="firstForm" >
	    		 	           <input type="hidden" value="" name="category1" id="category1"/>
	    		 	           <input type="hidden" value="" name="demandtype" id="demandtype"/>
<!-- 	    		 	           1-套餐    2-个性化需求 -->
	    						<div class="new_demand new_demand1">
				    				<div class="title">发布新需求</div>
				    				<div class="info">
				    					<h3>眸事，让销售变简单！</h3>
				    					<p>只需要简单三步，即可发布您的需求，轻松提升业绩！</p>
				    					<ul>
				    						<span class="icon"></span>
				    						<li class="first"><span>1</span>选择行业和发布方式</li>
				    						<li class="second"><span>2</span>填写需求详情</li>
				    						<li class="last"><span>3</span>提交成功，等待审核</li>
				    					</ul>
				    				</div>
				    			</div>
				    			<div class="new_demand_step">
				    				<div class="title">选择行业及发布类型
				    					<a class="contact" href="tencent://message/?uin=2850840272&Site=&menu=yes">不会发?马上联系客服代发 ></a>
				    					
				    				</div>
				    				<div class="info">
				    					<div class="selected_box">
				    						<div class="tab_main">
				    							<ul>
<!-- 				    								<li>线上教育培训</li> -->
<!-- 				    								<li>线下教育培训</li> -->
<!-- 				    								<li>房地产</li> -->
<!-- 				    								<li>汽车</li> -->
<!-- 				    								<li>汽车后市场</li> -->
<!-- 				    								<li>金融</li> -->
<!-- 				    								<li>互联网</li> -->
<!-- 				    								<li>电商平台</li> -->
<!-- 				    								<li>运营商增值服务</li> -->
<!-- 				    								<li>其他行业</li> -->
				    								
														<li >成人教育</li>
														<li >青少儿教育</li>
														<li >房地产</li>
														<li >汽车业</li>
														<li >汽车后市场</li>
														<li >金融</li>
														<li >互联网</li>
														<li >电商平台</li>
														<li >运营商增值服务</li>
								
				    							</ul>
				    						</div>
				    						<div id="errs" style="color: red;"></div>
				    					</div>
				    					<div class="choice_list">
				    						<ul>
				    							<li>请选择需求发布方式：</li>
				    							<li class="choice_link" onclick="submitPost2(1)"><a  href="javascript:">我想选择套餐，快速发布</a></li>
			    								<li class="choice_link" onclick="submitPost2(2)"><a  href="javascript:">我不想选择套餐，想自己填写</a></li>
			    								<li class="vip">* 我是大客户！想让眸事平台帮忙发布需求。请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系客服 >></a></li>
				    						</ul>
				    					</div>
				    				</div>
				    			</div>
	    			</form>
	    		</div>
	    		<!-- jsp文件尾部和尾部 -->
				<%@ include file="../Bulletin_display.jsp"%>
    		</div>
    	</div>
    </div>
	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
	<script>
						jQuery(function(){
						    //点击效果
							$("div.tab_main ul li").click(function(){
								$(this).addClass("selected").siblings().removeClass("selected");
								document.getElementById("category1").value=$(this).text();
							});
							$(".choice_list li.choice_link").click(function(){
								$(this).addClass("selected").siblings().removeClass("selected");
							});
						})
		
		                function submitPost2(demandtype){
		                     var category1=document.getElementById("category1").value;
				             if(category1== ''){
				               $("#errs").addClass("tips_success"); 
						       $("#errs").text("请选择行业！");
				                return false;
				            }else{
				                $("#errs").removeClass("error_red");
				                $("#errs").text("");
				            }
				            document.getElementById("demandtype").value=demandtype;
							var searchform=document.getElementById("firstForm")
							searchform.action="customer_lj_DemandManagement2"; 
							searchform.method="post";
							searchform.submit();
		                }
	</script>
</body>
</html>