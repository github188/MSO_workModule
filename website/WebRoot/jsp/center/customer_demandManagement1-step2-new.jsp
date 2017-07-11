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
    <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"/>
</head>
<script type="text/javascript">
	 function setordername(value){
	      document.getElementById("ordernameshow").innerText=value;
	 }
	 function setcity(value){
	      document.getElementById("cityshow").innerText=value;
	 }
	 function setMinage(value){
	      document.getElementById("beginageshow").innerText=value;
	 }
	 function setMaxage(value){
	      document.getElementById("endageshow").innerText=value;
	 }
	 function setTextlength(){
	      var s=document.getElementById("demanddescription");
	      var s2=document.getElementById("demanddspan");
	      if(s.value!="" && s.value. length>200)
	        s2.innerHTML="输入文本不能超过200个字";
	       
	 }

</script>
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
		    		<form  name="packageForm" id="packageForm" method="post" action="" >
	    		 	        <input type="hidden" name="demandid" id="demandid" value="${editsDemand.demandid}">
		    		 	    <input type="hidden" name="packageid" id="packageid" value="${editsDemand.packageid}">
			    		 	<input type="hidden" name="category1" id="category1" value="${category1}">
			    		 	<input type="hidden" name="demandtype" id="demandtype" value="${demandtype}">
			    		 	<%-- <input type="hidden" name="demand" id="demand" value="${editsDemand.demand}"> --%>
			    		 	<input type="hidden" name="orderpricetol" id="orderpricetol" value="${editsDemand.orderpricetol}">
			    		 	<input type="hidden" name="fdstate" id="fdstate" value="${editsDemand.fdstate}">
			    		 	<input type="hidden" name="standardoperation" id="standardoperation" value="${editsDemand.standardoperation}">
			    		 	<input type="hidden" name="otherreport" id="otherreport" value="${editsDemand.otherreport}">
			    		 	<input type="hidden" name="pleader" id="pleader" value="${editsDemand.pleader}">
			    		 	<input type="hidden" name="pphone" id="pphone" value="${editsDemand.pphone}">
			    		 	<input type="hidden" name="paytime" id="paytime" value="${editsDemand.paytime}">
			    		 	<input type="hidden" name="finishtime" id="finishtime" value="${editsDemand.finishtime}">
			    		 	<input type="hidden" name="category2v" id="category2v" value="${editsDemand.category2}">
		    		 	    <input type="hidden" name="needv" id="needv" value="${editsDemand.needv}">	
	    		 	
	    		 			<input type="hidden" name="standis" id="standis" value="${editsDemand.standis}">	
		    		 	    <input type="hidden" name="otheris" id="otheris" value="${editsDemand.otheris}">	
		    		 	    <!-- 销售线索			    		 	 -->
			    		 	<input type="hidden" name="xsxsurl" id="xsxsurl" value="${editsDemand.xsxsurl}">
		    		 	    
		    		 	    
		    		 	    
			                <div class="new_demand new_demand2">
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
			                    <div class="title"><p style="display: inline-block;">请填写需求详情</p><p style="display: inline-block;font-size:13px;font-weight: 300;">&nbsp;（<span style="color:#ed5400;">*</span> 为必填）</p></div>
			                    <div class="demand2">
			                        <ul>
			                        
			                            <!-- addby  2016-07-26 [1.3.2] begin-->
			                            <li>
			                            <span style="color:#ed5400;font-size:16px;">*&nbsp;</span>需求名称：<input type="text" class="ordername" style="margin:10px 0px 24px 0px;" placeholder="请输入需求名称？" 
			                            name="ordername" id="ordername" 
			                            value="${editsDemand.ordername}">
			                            <span class="error"></span>
			                            </li>
			                            <!-- addby  2016-07-26 end-->
				                        <li>
						                	<span style="color:#ed5400;">*&nbsp;</span>业务类型：
					                           <select name="category3" id="category3" style="height: 30px;width: 240px;">
 													<c:if test="${''==editsDemand.category3}">
					                                <option value="" selected="selected">请选择业务类型</option>
				                         			</c:if>
				                         			<c:if test="${''!=editsDemand.category3}">
					                                <option value="" >请选择业务类型</option>
				                         			</c:if>
					                                
					                                <c:if test="${'意向挖掘'==editsDemand.category3}">
					                                <option value="意向挖掘" selected="selected">意向挖掘</option>
				                         			</c:if>
				                         			<c:if test="${'意向挖掘'!=editsDemand.category3}">
					                                <option value="意向挖掘" >意向挖掘</option>
				                         			</c:if>
				                         			
				                         			<c:if test="${'数据清洗'==editsDemand.category3}">
					                                <option value="数据清洗" selected="selected">数据清洗</option>
				                         			</c:if>
				                         			<c:if test="${'数据清洗'!=editsDemand.category3}">
					                                <option value="数据清洗" >数据清洗</option>
				                         			</c:if>
				                         			
				                         			<c:if test="${'包坐席'==editsDemand.category3}">
					                                <option value="包坐席" selected="selected">包坐席</option>
				                         			</c:if>
				                         			<c:if test="${'包坐席'!=editsDemand.category3}">
					                                <option value="包坐席" >包坐席</option>
				                         			</c:if>
				                         			  
				                         			<c:if test="${'到访'==editsDemand.category3}">
					                                <option value="到访" selected="selected">到访</option>
				                         			</c:if>
				                         			<c:if test="${'到访'!=editsDemand.category3}">
					                                <option value="到访" >到访</option>
				                         			</c:if>
								        </select>&emsp;
						                		<span class="error"></span>
						                </li> 
						                <BR/>
						                <BR/>
						                <li>
						                	<span style="color:#ed5400;">*&nbsp;</span> 需求描述：
					                         <textarea  class="demanddescription"  style="width: 320px;height: 85px;margin: 0px 0px 24px 0px;" 
					                         	placeholder="请输入需求描述，如找出对少儿英语早教有意向的客户"  
					                            name="demanddescription" id="demanddescription" onblur="setTextlength()">${editsDemand.demanddescription}</textarea>
						                	<span class="error"></span>
						                	<span class="error" id="demanddspan" style="display:note"></span>
						                </li>
					                    
			                            
			                            <li><h4>1.您的产品（或服务）是什么？</h4></li>
			                            <li>
			                            <span style="color:#ed5400;font-size:16px;">*&nbsp;</span>产品名称：<input type="text" class="productname" style="margin:10px 0px 24px 0px;" placeholder="您要卖的是什么东西？" 
			                            name="productname" id="productname" 
			                            value="${editsDemand.productname}" ></input>
			                            <span class="error"></span>
			                            </li>
			                            
			                            
			                            <!-- addby  2016-07-26 [1.3.2] begin-->
			                            <li>
			                            <span style="color:#ed5400;font-size:16px;">*&nbsp;</span>产品介绍：
			                            
			                            <textarea class="demand"  placeholder="如：帮助成人快速学习英语" style="width: 320px;height: 85px;margin: 0px 0px 24px 0px;" 
			                            name="demand" id="demand" >${editsDemand.demand}</textarea>
			                            <span class="error"></span>
			                            </li>
			                            <!-- addby  2016-07-26 end-->
			                            
			                            
			                       <li><h4>2.您想寻找什么样的意向客户？</h4></li>  
			                       <li class="region" style="padding-top: 16px;">
					                <input type="hidden" name="targecity" id="targecity" value="${editsDemand.targecity}"/>
					                <span style="color:#ed5400;font-size:16px;">*</span> 城市：
					                
					                	<c:if test="${editsDemand.targecity=='全国'||editsDemand.targecity==''||editsDemand.targecity==null}">
							                 &emsp;<input type="radio" name="region" class="region1" id="regionall" checked="checked">全国
							                 &emsp;<input type="radio" name="region" class="region2" id="regioncity"  > 自定义城市
						                </c:if>
						                <c:if test="${editsDemand.targecity!='全国'&&editsDemand.targecity!=''&&editsDemand.targecity!=null}">
							                 &emsp;<input type="radio" name="region" class="region1" id="regionall" >全国
							                 &emsp;<input type="radio" name="region" class="region2" id="regioncity" checked="checked"> 自定义城市
						                </c:if>
						                &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:red"></span>
						                <br/>
						                <div style="margin-top: -1px;margin-left:48px !important;">
						                    <div class="left_City">
										        <select id="cmbProvince" style="margin-left:13px !important;">
										        </select>
						                        <select   id="cmbCity">
						                        </select>
						                    </div>
						                </div>
					            </li>
					            
					            
					            
					            
					            
			                            <li>
			                                <span style="color:#ed5400;font-size:16px;">*&nbsp;</span>人群：<input type="text" class="crowd" placeholder="如学生" name="targethumen" id="targethumen" value="${editsDemand.targethumen}"><span class="error"></span>
			                            </li>
			                            <li>
			                                &nbsp;&nbsp;&nbsp;年龄：<input class="age01" type="number" placeholder="如12" name="beginage"
			                                				onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
													        onblur = 'this.value = this.value.replace(/\D+/g, "")'
													        onchange="setMinage(this.value)"
			                                                id="beginage" value="${editsDemand.beginage}">
			                                <span style="font-size:16px;margin-left:9px;">~</span><input type="number" placeholder="如15" 
			                                				onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
													        onblur = 'this.value = this.value.replace(/\D+/g, "")'
													        onchange="setMaxage(this.value)"
			                                                name="endage" class="age03" id="endage" value="${editsDemand.endage}">&nbsp;&nbsp;岁&nbsp;&nbsp;<span>（不填代表任何年龄段都可以）</span><span></span>
			                            </li>
			                            
			                            
			                            
			                            
			                            
			                            
			                            
			                            </br>
			                            <div class="tips" style="display: none;">提示：您想找<span id="cityshow">上海市</span><span id="beginageshow">12</span>~<span id="endageshow">15</span>岁的学生，问他们是否需要
			                            <span id="ordernameshow">XXX</span>产品。</div>
			                           
			                           
			                            <li><h4>3.需求的单价和线索数量</h4></li>
			                            <li>
			                                <span style="color:#ed5400;font-size:16px;">*&nbsp;</span>单价：<input type="text" class="unitPrice" 
			                                placeholder="每条线索的价格？" value="${editsDemand.orderprice}" name="orderprice" id="orderprice">&nbsp;&nbsp;元&nbsp;&nbsp;<span class="error"></span>
			                            </li>
			                            <li>
			                                <span style="color:#ed5400;font-size:16px;">*&nbsp;</span>数量：<input type="text" class="size" placeholder="需要多少条线索？"
			                                				onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
													        onblur = 'this.value = this.value.replace(/\D+/g, "")'
			                                 name="releasenum" value="${editsDemand.releasenum}" id="releasenum">&nbsp;&nbsp;条&nbsp;&nbsp;<span class="error"></span>
			                            </li>
			                            <li style="margin:23px 0px 30px 0px;">合计：<span style="color:#ed5400;" id="tolPrice">${editsDemand.orderpricetol}元</span></li>
			                            <li><h4>4.您想获得意向客户的什么字段信息（这些信息齐备且有效就算是一条合格的销售线索）？</h4></li>
			                            <li style="margin:16px 0px; position:relative; line-height:30px;">标准销售线索模板：
<!-- 			                            <a href="${cluename}">下载模板 >></a> -->
				                        <c:if test="${''!=cluename&&'null'!=cluename}">
			    						<a href="${cluename}">下载模板 >></a>
			    						</c:if>
			    						<c:if test="${''==cluename||'null'==cluename}">
			    						暂无模板 </a>
			    						</c:if>
			                            <p style="height: 35px;">标准销售线索模板：</p>
			                            <div class="up-position1" style="top:30px">
		    						<style>
		    							.progress {height: 4px; margin-bottom: 4px;}
		    						</style>
		    							<div class="ossfile3 hide" ></div>
										<div class="container3">
											<button type="button" class="btn" id="selectfiles3">选择销售线索</button>
											<button type="button" class="btn" id="postfiles3">开始上传</button>
											<div style="margin-left:13px;margin-top:5px;color:#25FF00;display: none;position: absolute; left: 200px; top: 0px; width: 200px;" id="xsxsurlcheckfile">已上传成功！</div>
										</div>
		    						</div>
			                            
			                            </li>
<!-- 			                            <li> -->
<!-- 			                                <table class="tab"> -->
<!-- 			                                    <tbody><tr> -->
<!-- 			                                        <th>姓名</th> -->
<!-- 			                                        <th>性别</th> -->
<!-- 			                                        <th>年龄</th> -->
<!-- 			                                        <th>城市</th> -->
<!-- 			                                        <th>电话</th> -->
<!-- 			                                        <th>······</th> -->
<!-- 			                                    </tr> -->
<!-- 			                                    <tr> -->
<!-- 			                                        <td></td> -->
<!-- 			                                        <td></td> -->
<!-- 			                                        <td></td> -->
<!-- 			                                        <td></td> -->
<!-- 			                                        <td></td> -->
<!-- 			                                        <td></td> -->
<!-- 			                                    </tr> -->
<!-- 			                                    </tbody></table> -->
<!-- 			                            </li> -->
<!-- 			                            <li> -->
<!-- 			                                	您还有其他字段要求?请填写：<input type="text" style="width:459px;" name="othercol" id="othercol" placeholder="您需要的其他字段" value="${editsDemand.othercol}"> -->
<!-- 			                            </li> -->

			                            <li style="margin-top:20px;"><h4>5.您要求的任务完成日期？</h4></li>
			                            
			                            <li style="margin-top:20px;" class="time">
			                             	<label><span style="color:#ed5400;font-size:16px;line-height:32px;">*&nbsp;</span>开始日期：</label>
			                                <div class="input-group date form_date1 col-md-5" data-date=""  data-date-format="yyyy-MM-dd" data-link-field="dtp_input1" data-link-format="yyyy-MM-dd">
			                                    <input class="form-control completionDate" size="16" type="text" style="margin:0;width:154px;"  readonly="" name="begintime" id="begintime" value="${editsDemand.begintime}">
			                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
			                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
			                                </div>
			                                <label>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ed5400;font-size:16px;line-height:32px;">*&nbsp;</span>完成日期：</label>
			                                <div class="input-group date form_date1 col-md-5" data-date=""  data-date-format="yyyy-MM-dd" data-link-field="dtp_input1" data-link-format="yyyy-MM-dd">
			                                    <input class="form-control completionDate" size="16" type="text" style="margin:0;width:154px;"  readonly="" name="endtime" id="endtime" value="${editsDemand.endtime}">
			                                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
			                                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
			                                </div>
			                            </li>
			                            <span class="error" style="line-height:32px;color: red;" id="timeerror"></span>
			                            
			                            
			                            
			                            <li style="margin-top:8px;display: none"><h4>6.您打算什么时候支付这笔外包服务费?</h4></li>
			                            <li style="margin-top:16px;display: none">付款时间：&emsp;
				                        <c:if test="${editsDemand.paytime==3}">
				                          <input type="checkbox" name="paytimechck" id="paytimechck" checked="checked">
					    			    </c:if>
					    			    <c:if test="${editsDemand.paytime!=3}">
				                          <input type="checkbox" name="paytimechck" id="paytimechck" >
					    			    </c:if>
			                            &nbsp;3天内&emsp;（想获得个性化的付款时间？<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系客服 >></a>）
			                            </li>
			                            
			                            
			                            
			                            
			                            <li style="margin-top:24px;"><h4>6.您需要安排您公司的其他同事跟进此项目吗？</h4></li>
			                            <li style="margin-top:20px;position:relative;">
			                            
			    							
			    							<c:if test="${editsDemand.needv==1}">
			    								<input type="radio" id="unneed"  name="need" class="hide" />
					    						<label class="radio-style nameTelHide" for="unneed">不需要</label>
					    						<input type="radio" id="need" name="need" class="hide"  checked="checked"/>
					    						<label class="radio-style selected nameTelShow" for="need">需要</label>
						    			    </c:if>
						    			    <c:if test="${editsDemand.needv!=1}">
						    			    	<input type="radio" id="unneed" checked="checked" name="need" class="hide" />
					    						<label class="radio-style selected nameTelHide" for="unneed">不需要</label>
					    						<input type="radio" id="need" name="need" class="hide" />
					    						<label class="radio-style nameTelShow" for="need">需要</label>
						    			    </c:if>
	
											<div class="nameTel">
				    							<ul>
				    								<li>姓名：<input type="text" name="pleader" id="pleader" value="${editsDemand.pleader}"/></li>
				    								<li>电话：<input type="tel" name="pphone" id="pphone" value="${editsDemand.pphone}"/></li>
				    							</ul>
				    						</div>
			    						
			    						
			    						
			                            <li style="clear:both;padding-top:1px;">
			                            <div class="tips">
			                                <p>提示：您想找<span id="cityshow2">上海市</span><span id="beginageshow2">12</span>~<span id="endageshow2">15</span>岁的学生，问他们是否需要<span id="ordernameshow2">XXX</span>产品。您打算花XXXXX元找到XXX条销售线索。</p>
			                                <p>&emsp;&emsp;&emsp;线索包含如下文档要求的信息方为合格：XXXX.XLS（<a href="${cluename}">点此下载 >></a>）。您希望任务在XXXX年XX月XX</p>
			                                <p>&emsp;&emsp;&emsp;日前完成，逾期将关闭此任务。您将在3天内支付外包服务费，且不需要安排您公司内的其他同事跟进</p>
			                                <p>&emsp;&emsp;&emsp;此项目。</p>
			                            </div>
			                            </li>
			                            <li style="margin-top:24px;"><h4>7.您可以接受以下哪些渠道寻找到的销售线索？（可多选）</h4></li>
			                            
			                            <li>
			                                  <c:set var="string1" value="${editsDemand.category2}"/>
			                                 
				                               <p class="tel-selected" style="margin-top:20px"><input type="checkbox" name="category2"
					                            value="电话营销">&nbsp;电话营销</p>
				                               <div class="hide">
					    							<div class="border-grey border-grey1">
					    								<ul>
					    									<li><input type="radio" id="tel-a1" name="standardoperationcheck"  /><label for="tel-a1">我没有目标客户名单，请自行准备名单并与其联系</label></li>
					    									<li>
					    										<input type="radio" id="tel-a2" name="standardoperationcheck"  class="radio-selected" /><label for="tel-a2">我提供目标客户名单，请帮我找出有意向的客户</label>
					    										<span class="hide">
					    											<div class="ossfile" ></div>
																	<div class="container">
																		<button type="button" id="selectfiles">上传客户名单</button>
																		<button type="button" id="postfiles">开始上传</button>
																		<div style="margin-left:5px;margin-top:5px;color:#25FF00;display: none;" id="standardoperationcheckfile">已上传成功！</div>
																	</div>
					    										</span>
					    									</li>
					    								</ul>
					    							</div>
					    							<div class="border-grey border-grey2">
					    								<ul>
					    									<li>
					    										<input type="radio" id="tel-b1" name="otherreportcheck" /><label for="tel-b1">我没有话术要求，请根据销售线索模板帮我设计</label>
					    										<span>（名词：话术---即跟目标客户沟通的方法）</span>
					    									</li>
					    									<li>
					    										<input type="radio" id="tel-b2" name="otherreportcheck" class="radio-selected1" /><label for="tel-b2">我想自行提供话术</label>
							    								<span class="hide hide2">
<!-- 							    									<a href="${speakname}">点此下载话术模板 >></a> -->
							    									<div class="ossfile2" ></div>
																	<div class="container">
																		<button type="button" id="selectfiles2">上传我的话术</button>
																		<button type="button" id="postfiles2">开始上传</button>
																		<div style="margin-left:5px;margin-top:5px;color:#25FF00;display: none;" id="otherreportcheckfile">已上传成功！</div>
																	</div>
							    									
							    								</span>
					    									</li>
					    								</ul>
					    							</div>
					    					  </div>
				                            
<!-- 				                               <p class="tel-selected1" style="margin-top:20px"><input type="checkbox" name="category2"  -->
<!-- 				                               <c:if test="${fn:contains(string1, '网络营销')}"> -->
<!-- 											   checked="checked" -->
<!-- 											   </c:if> -->
<!-- 											   value="网络营销">&nbsp;网络营销</p> -->
				                               
<!-- 				                               <p class="tel-selected2" style="margin-top:20px"><input type="checkbox" name="category2"  -->
<!-- 				                               <c:if test="${fn:contains(string1, '地推推广')}"> -->
<!-- 											   checked="checked" -->
<!-- 											   </c:if> -->
<!-- 				                               value="地推推广">&nbsp;地推推广</p> -->
				                            
			                                 <p style="margin-top:20px;">需要帮助？<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系客服 >></a></p>
			                               
			                            </li>
			                            <li><hr style="margin-top:30px;"></li>
			                            <li style="padding-left:140px; padding-bottom:10px;"><input type="checkbox" checked="checked">&nbsp;
			                            	同意并遵守<a href="customer_mso" target="_blank" style="color:#000;">《眸事网需求发布与处理规则》</a></li>
			                        </ul>
			                       	<div class="btn_box">
										<a class="back" href="customer_lj_DemandManagement1"><< 返回上一步</a>
										<button class="btn_orange" type="button" onclick="submitPost(1);">同意协议条款，马上发布</button>
				    					<button class="btn_gray" style="margin-right: 0;"  type="button" onclick="submitPost(0);">保存到草稿箱</button>
									</div>
			                    </div>
			                </div>
			            </div>
           </form>
	    	<!-- jsp文件尾部和尾部 -->
			<%@ include file="../Bulletin_display.jsp"%>
        </div>
    </div>
</div>
<!-- jsp文件尾部和尾部 -->
<%@ include file="../cfooter.jsp"%>
	<script type="text/javascript" src="js/jsAddress.js"></script>
	<script type="text/javascript"  src="js/project_base.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>

	<script type="text/javascript" src="lib/crypto1/crypto/crypto.js"></script>
	<script type="text/javascript" src="lib/crypto1/hmac/hmac.js"></script>
	<script type="text/javascript" src="lib/crypto1/sha1/sha1.js"></script>
	<script type="text/javascript" src="lib/base64.js"></script>
	<script type="text/javascript" src="js/plupload.full.min.js"></script>
	<script type="text/javascript" src="js/upload.js"></script>
<script>
	var file1=document.getElementById("standardoperation").value;
	var file2=document.getElementById("otherreport").value; 
	var cate=document.getElementById("category2v").value;
	var file3=document.getElementById("xsxsurl").value; 
    jQuery(function(){
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
        //点击效果
        $("div.tab_main ul li").click(function(){
            $(this).addClass("selected").siblings().removeClass("selected");
        });
        
        
        var needvvalue=document.getElementById("needv").value;
        if(needvvalue==1){
        	$(".nameTel").show();
        }else{
        	$(".nameTel").hide();
        }
        //radio自定义样式
		$(".radio-style").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
		});
		$(".nameTelShow").click(function(){
			$(".nameTel").show();
		});
		$(".nameTelHide").click(function(){
			$(".nameTel").hide();
		});
					
					
					
        	//默认选择城市
			var targecityC=document.getElementById("targecity").value;
			if(targecityC!=null&&targecityC!=''&&targecityC!='undefined'){
				var cityL=targecityC.split(',');
		        addressInit('cmbProvince', 'cmbCity', 'cmbArea', cityL[0], cityL[1], '');
			}else{
				addressInit('cmbProvince', 'cmbCity', 'cmbArea', '', '', '');
			}
        
        
	        $("input[name=region]").change(function(){
	            if($(this).hasClass("region1")){
	                $("#cmbProvince, .left_City").hide();
	            }else{
	                $("#cmbProvince, .left_City").show();
	            }
	        });

        
	        var  regioncity=document.getElementById("regioncity");
			 //自定城市选中
			if(regioncity.checked){
				 $("#cmbProvince, .left_City").show();
			}else{
				 $("#cmbProvince, .left_City").hide();
			}
        //需求名称验证
        $("input.ordername").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请填写您的需求名称");
            }else{
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("input.ordername").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
         
        //需求描述
        $("textarea.demanddescription").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请填写您的需求描述");
            }else{
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("textarea.demanddescription").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
        
        //业务类型验证
        $("#category3").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请选择您的业务类型");
            }else{
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("#category3").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
        
        
        
        
        
        
        //产品名称验证
        $("input.productname").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请填写您的产品名称");
            }else{
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("input.productname").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
        
        //产品介绍验证
        $("textarea.demand").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请填写您的产品介绍");
            }else{
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("textarea.demand").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
        
        
       
        
        
        //人群验证
        $("input.crowd").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请填写您的意向人群");
            }else{
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("input.crowd").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
        //单价
        $("input.unitPrice").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请填写您需求的单价");
            }else{
                var prictol=$(this).val()*$("input.size").val();
                document.getElementById("tolPrice").innerText=prictol+"元";
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("input.unitPrice").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
        
        //单价输入验证
        $("input.unitPrice").keyup(function () {
             var reg = $(this).val().match(/\d+\.?\d{0,2}/);
             var txt = '';
             if (reg != null) {
               txt = reg[0];
             }
             $(this).val(txt);
         }).change(function () {
             $(this).keypress();
             var v = $(this).val();
             if (/\.$/.test(v))
             {
              $(this).val(v.substr(0, v.length - 1));
             }
         });
         
         
         
        //数量验证
        $("input.size").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $(this).next().text("请填写您需求的数量");
            }else{
                var prictol=$(this).val()*$("input.unitPrice").val();
                document.getElementById("tolPrice").innerText=prictol+"元";
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
        });
        $("input.size").focus(function(){
            $(this).removeClass("error_red");
            $(this).next().text("");
        });
        //完成时间验证
        $("input.completionDate").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $("#timeerror").text("请填写您要求的开始日期和完成日期！");	
//                 $(this).parent().next().text("请填写您要求的时间");
            }else{
                $(this).removeClass("error_red");
//                 $(this).parent().next().text("");
                $("#timeerror").text("");
            }
        }).change(function(){
            if($(this).val() == ''){
                $(this).addClass("error_red");
                $("#timeerror").text("请填写您要求的开始日期和完成日期！");	
//                 $(this).parent().next().text("请填写您要求的时间");
            }else{
                $(this).removeClass("error_red");
//                 $(this).parent().next().text("");
                $("#timeerror").text("");
            }
        });
        $("input.completionDate").focus(function(){
            $(this).removeClass("error_red");
             $("#timeerror").text("");
//             $(this).parent().next().text("");
        });
        
        //点击电话营销显示隐藏
	    $(".tel-selected input").change(function(){
			 $(this).parent().next().toggle();
	    });
	    $("[name=standardoperationcheck]").change(function(){
		if ($(".radio-selected").is(":checked")){
		 document.getElementById("standis").value=2;
			$(this).next().next().show();
		}else {
			document.getElementById("standis").value=1;
		   $(".radio-selected").next().next().hide();
			   }
		});
		$("[name=otherreportcheck]").change(function(){
		if ($(".radio-selected1").is(":checked")){
			        		document.getElementById("otheris").value=2;
			        		$(this).next().next().show();
			        	}else  {
							document.getElementById("otheris").value=1;
			        		$(".radio-selected1").next().next().hide();
			        		
			        	}
		});      		 	        	 		          	        	                    	       
        var ched=false;
		if(-1!=cate.indexOf("电话营销")){
			ched=true;
		}
		var standis=document.getElementById("standis").value;
		var otheris=document.getElementById("otheris").value;	
		if(ched){
			 $(".tel-selected input").click();
				if('2'==otheris){
				  $("#tel-a2").click();
				}
			if('2'==standis){
				  $("#tel-b2").click();
			}
		}		
    });
    
    
    					function submitPost(type){
							    if($(".age01").val()!=''&&$(".age03").val()!=''){
							       	if(parseInt($(".age01").val())>parseInt($(".age03").val())){
							            $(".age01").addClass("error_red");
							            $('html,body').animate({scrollTop:$(".error_red").offset().top-200}, 800);
								    	alert("起始年龄必须小于结束年龄");
								    	return false;
								    }else{
								        $(".age01").removeClass("error_red");
								    }
							    }
							    
							    
							    
								$(".content_mid input").blur();
		   				 	    if(0!=$(".error_red").length){
							        $('html,body').animate({scrollTop:$(".error_red").offset().top-200}, 800);
		   				 	    }
							    //触发所有input绑定的blur验证
								//判断是否有错误。有就返回false;
							    if($(".error_red").length!=0){
									    return false;
								}

							    if ($(".tel-selected input").is(':checked')){
									var oStan=$('[name="standardoperationcheck"]:checked').val();
									var oSoth=$('[name="otherreportcheck"]:checked').val();
						            if(oStan==null && oSoth==null){
						            	$(".border-grey").css("border","1px #f00 solid");
						                alert("请选择电话营销选项");
						                return false;
						            }else if(oStan==null && oSoth!=null) {
						            	$(".border-grey1").css("border","1px #f00 solid");
						                alert("请选择电话营销选项");
						                return false;
						            }else if(oStan!=null && oSoth==null) {
						            	$(".border-grey2").css("border","1px #f00 solid");
						                alert("请选择电话营销选项");
						                return false;
						            }else if(oStan!=null && oSoth!=null){
						            	
						            }
								}
							    
							  //目标城市的新增  start
								  var regionall=document.getElementById("regionall");
						    		 var obj = document.getElementById("active");
						    		 var optionsP = $("#cmbProvince option:selected");	//省
									 var optionsC = $("#cmbCity option:selected");  //城市
									 
							    	 var datacityvvv;
									 if(regionall.checked){
											datacityvvv="全国";
								      }else{
								    	  //alert(options.html());
								           datacityvvv=$(optionsP).html()+','+$(optionsC).html();
								      }
						    		
									//console.log(datacityvvv);
									//目标城市  end

								
								var category2em=document.getElementsByName("category2");
								var category2Value="";
								if(category2em!=0){
								  for ( var int = 0; int < category2em.length; int++) {
									var elm=category2em[int];
									if(elm.checked){
									
										if(category2Value==''){
											category2Value=elm.value;
										}else{
											category2Value=category2Value+","+elm.value;
										}
										if(category2Value!=''){
											if(category2Value.substring(category2Value.length-1,category2Value.length)==","){
												category2Value=category2Value.substring(0,category2Value.length-1);
											}
										}
										
									}
								  }
								  
								  
								}
								document.getElementById("category2v").value=category2Value;
								document.getElementById("orderpricetol").value=document.getElementById("orderprice").value*document.getElementById("releasenum").value;
								document.getElementById("fdstate").value=type;
								document.getElementById("targecity").value=datacityvvv;
								
							    var otheris=document.getElementById("otheris").value;
								if('2'==otheris){//目标客户名单不能为空
								    if(''==file2){
								    	alert("请上传话术附件.");
								    	return false;
								    }else{
								    	document.getElementById("standardoperation").value=file2; 
								    }
								}
								var standis=document.getElementById("standis").value;
								if('2'==standis){//标准话术不能为空
								    if(''==file1){
									    alert("请上传目标客户名单.");
									    return false;
								    }else{
								       document.getElementById("otherreport").value=file1;
								    }
								}
								
								 //需求描述验证
						          var s=document.getElementById("demanddescription");
							      var s2=document.getElementById("demanddspan");
							      if(s.value!="" && s.value. length>200){
							        s2.innerHTML="输入文本不能超过200个字";
							        return false;
							        }
							        
							        
								//销售线索
								document.getElementById("xsxsurl").value=file3;
								//end
								document.getElementById("pleader").value="";
								document.getElementById("pphone").value="";
								
								if(document.getElementById("paytimechck").checked){
									document.getElementById("paytime").value=3;
								}else{
								    document.getElementById("paytime").value="";//不知道如何赋值
								}
							
								if(document.getElementById("need").checked){
								   document.getElementById("needv").value="1";//需要
								}
								if(document.getElementById("unneed").checked){
								   document.getElementById("needv").value="0";//不需需要
								}
								var packageForm=document.getElementById("packageForm");
								packageForm.action="customer_lj_DemandDo";
								packageForm.method="post";
								packageForm.submit();   
				        }
</script>
</body>
</html>