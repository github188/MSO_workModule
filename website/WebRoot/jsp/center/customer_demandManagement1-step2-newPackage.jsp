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
	     // document.getElementById("ordernameshow2").innerText=value;
	 }
	 function setcity(value){
	     document.getElementById("cityshow").innerText=value;
// 	     document.getElementById("cityshow2").innerText=value;
	 }
	 function setMinage(value){
	      document.getElementById("beginageshow").innerText=value;
// 	      document.getElementById("beginageshow2").innerText=value;
	 }
	 function setMaxage(value){
	      document.getElementById("endageshow").innerText=value;
// 	      document.getElementById("endageshow2").innerText=value;
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
			    		 	<input type="hidden" name="orderpricetol" id="orderpricetol" value="${editsDemand.orderpricetol}">
			    		 	<input type="hidden" name="fdstate" id="fdstate" value="${editsDemand.fdstate}">
			    		 	<input type="hidden" name="standardoperation" id="standardoperation" value="${editsDemand.standardoperation}">
			    		 	<input type="hidden" name="otherreport" id="otherreport" value="${editsDemand.otherreport}">
			    		 	
			    		 	<!-- addby  2016-07-26 [1.3.2] begin-->
							<!-- 销售线索			    		 	 -->
			    		 	<input type="hidden" name="xsxsurl" id="xsxsurl" value="${editsDemand.xsxsurl}">
			    		 	<!-- addby  2016-07-26 end-->
			    		 	
<!-- 			    		 	<input type="hidden" name="pleader" id="pleader" value="${editsDemand.pleader}"> -->
<!-- 			    		 	<input type="hidden" name="pphone" id="pphone" value="${editsDemand.pphone}"> -->
			    		 	<input type="hidden" name="paytime" id="paytime" value="${editsDemand.paytime}">
			    		 	<input type="hidden" name="finishtime" id="finishtime" value="${editsDemand.finishtime}">
			    		 	<input type="hidden" name="category2v" id="category2v" value="${editsDemand.category2}">
		    		 	    <input type="hidden" name="needv" id="needv" value="${editsDemand.needv}">	
		    		 	    
		    		 	    <input type="hidden" name="standis" id="standis" value="${editsDemand.standis}">	
		    		 	    <input type="hidden" name="otheris" id="otheris" value="${editsDemand.otheris}">	
			        	
			        	
		    		 	    
		    		 	    <input type="hidden" name="releasenum" id="releasenum" value="${editsDemand.releasenum}">
		    		 	    <input type="hidden" name="orderprice" id="orderprice" value="${editsDemand.orderprice}">
		    		 	    <input type="hidden" name="endtime" id="endtime" value="${editsDemand.endtime}">
		    		 	    
		    		 	    
		    		 	    
	    		 	
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
	    				<div class="title">请填写套餐详情<span>（* 为必填）</span></div>
	    				<div class="info personal_info">
							<div class="scroll">
								<a class="prev" href="javascript:;"></a> 
								<div class="box"> 
																				
									<div class="scroll_list"> 
										<ul> 
													<c:forEach var="d" items="${packageList}" varStatus="s">
														<c:if test="${''==editsDemand.packageid}">
														   <c:if test="${s.count==1}">
														   	 <li class="selected">
														   </c:if>
														   <c:if test="${s.count!=1}">
														   	 <li>
														   </c:if>
														</c:if>
														
														<c:if test="${''!=editsDemand.packageid}">
															<c:if test="${d.pid==editsDemand.packageid}">
														    	<li class="selected">
														    </c:if>
															<c:if test="${d.pid!=editsDemand.packageid}">
														   	    <li>
															</c:if>
													    </c:if>
													    
															<h4>${d.name}</h4>
															<p class="finishperiods" style="display: none;">${d.finishperiod}</p>
															<p class="payments" style="display: none;" >${d.payment}</p>
															<p class="pid" style="display: none;">${d.pid}</p>
															<p class="money"><span>${d.pricetol}</span>／次</p>
															<p class="details">${d.intro}</p>
															<p class="price">${d.price}</p>
															<p class="number">${d.num}</p>
														</li> 
													</c:forEach>
	
										</ul> 
									</div> 
								</div> 
								<a class="next" href="javascript:;"></a> 
							</div> 
		    				<ul class="first_tab">
		    					<li>
		    						<label><span>*</span> 套餐名称：</label>
		    						<span class="pakeageName">新手尝鲜套餐</span>
		    					</li>
		    					<li>
		    						<label><span>*</span> 套餐优惠价：</label>
		    						<span class="pakeagePrice">￥0</span>
		    					</li>
		    					<li>
		    						<label><span>*</span> 需求单价：</label>
		    						<span class="pakeageTag">￥20</span>
		    					</li>
		    					<li>
		    						<label><span>*</span> 需求数量：</label>
		    						<span class="pakeageNumber">200</span>
		    					</li>
		    					
		    					<li>
		    						<label><span>*</span> 完成周期：</label>
		    						<span class="finishperiod">30</span>天（完成周期是指完成任务的期限，从需求上架之日算起）
		    					</li>
		    					<li>
		    						<label><span>*</span> 付款时间：</label>
		    						<span class="payment">预付款</span>（提前把款项付给平台）
		    					</li>
	    					</ul>
	    					
	    					
	    					<ul class="name_tab">
	    						<li>
		    						<p>
					                	<label><span>*</span><b> 需求名称：</b></label>
				                         <input type="text" class="ordername"  placeholder="请输入需求名称？"  
				                            name="ordername" id="ordername"
				                            value="${editsDemand.ordername}">
					                	<span class="error"></span>
					                </p>
					                <BR/>
					                <p>
					                	<label><span>*</span><b> 业务类型：</b></label>
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
					                </p> 
					                <BR/>
					                <p>
					                	<label><span>*</span><b> 需求描述：</b></label>
				                         <textarea  class="demanddescription"  style="width: 320px;height: 85px;margin: 0px 0px 24px 0px;" placeholder="请输入需求描述，如找出对少儿英语早教有意向的客户"  
				                            name="demanddescription" id="demanddescription" onblur="setTextlength()">${editsDemand.demanddescription}</textarea>
					                	<span class="error"></span>
					                	<span class="error" id="demanddspan" style="display:note"></span>
					                </p>
					                
					                
					                
					                
		    					</li>
	    					</ul>
	    					
	    					
	    					<ul class="second_tab">
	    						<!-- addby  2016-07-26 [1.3.2] begin-->
	    						
	    						<li class="set porduct">    
			    					<p>
			    						<p><b>1.您的产品（或服务）是什么？</b></p>
			    						 <label><span>*</span> 产品名称：</label>
			    						 <input type="text" class="productname" placeholder="如少儿英语早教" 
			    						 id="productname" name="productname"
			    						 onchange="setordername(this.value)"
			    						 value="${editsDemand.productname}"/>
			    						 <span class="error"></span>
			    					</p>
			    					
			    					
			    					<!-- addby  2016-07-26 [1.3.2] begin-->
				                    <p>
				                         <label><span>*</span> 产品介绍：</label>
				                         <textarea  class="demand"  placeholder="如帮助少儿学习提高英语能力" 
				                         name="demand" id="demand">${editsDemand.demand}</textarea>
				                         <span class="error"></span>
				                    </p>
			                    	<!-- addby  2016-07-26 end-->
			                    </li>        
			                            
			                            
			                            
		    					<li class="set region" style="margin-top:-20px;">
		    						<p><b>2.您想寻找什么样的意向客户？</b></p>
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
						                <div class="city_select" style="margin-top: -1px;margin-left:48px !important;">
						                    <div class="left">
										        <select id="cmbProvince" style="margin-left:13px !important;">
										        </select>
						                        <select id="cmbCity">
						                        </select>
						                    </div>
						                </div>
					                
					                
					                
					                
					                
					                <p style="margin-top: 20px;">
					                	<label><span>*</span> 人群：</label>
					                	<input class="people" type="text" placeholder="如学生"  name="targethumen" id="targethumen" value="${editsDemand.targethumen}"/>
					                	<span class="error"></span>
					                </p>
					                <p>
					                	<label>年龄：</label>
			    						<input class="age01" type="text" pattern="[0-9]{1,3}" title="请输入1至3个数字" 
			    											onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
													        onblur = 'this.value = this.value.replace(/\D+/g, "")'
													        onchange="setMinage(this.value)"
			    						placeholder="如12" name="beginage" id="beginage" value="${editsDemand.beginage}"/>
			    						<span class="age02">~</span>
			    						<input class="age03" type="text" pattern="[0-9]{1,3}" title="请输入1至3个数字" 
			    											onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")'
													        onblur = 'this.value = this.value.replace(/\D+/g, "")'
													        onchange="setMaxage(this.value)"
			    						placeholder="如15" name="endage" id="endage" value="${editsDemand.endage}"/>
			    						<span class="age04">周岁&nbsp;&nbsp;&nbsp;&nbsp;（不填代表无年龄限制）</span>
					                </p>
					                
					                
					                
			                         <!-- addby  2016-07-26 [1.3.2] beign-->
					                <li style="margin-top:20px;"><h4>3.您要求的任务开始日期？</h4></li>
			                        <li style="margin-top:20px;margin-bottom:0;" class="time">
			                             	<label style="vertical-align: top;">
			                             	<span style="color:#ed5400;font-size:16px;line-height:32px;">*</span>
			                             	开始日期：</label>
			                                <div class="input-group date form_date1 col-md-5" data-date=""  
			                                data-date-format="yyyy-MM-dd" data-link-field="dtp_input1" data-link-format="yyyy-MM-dd" style="display: inline-block; height: 32px; margin-top: 3px;width:200px">
			                                    <input class="form-control completionDate" size="16" type="text" style="margin:0;width:129px; height:15px"  readonly="" 
			                                    name="begintime" id="begintime" value="${editsDemand.begintime}">
			                                    <span class="input-group-addon" style="padding:0;"><span class="glyphicon glyphicon-remove"></span></span>
			                                    <span class="input-group-addon" style="padding:6px 0;"><span class="glyphicon glyphicon-calendar"></span></span>
			                                </div>
			                        </li>
			                        <span class="error" style="line-height:20px;color:#f00;text-indent: 9em;display: inline-block;margin-bottom: 10px;" id="timeerror"></span>
			                        <!-- addby  2016-07-26 end-->
			                        
					                <div class="msg_schedule" style="display: none;">
					                	<p>提示：您想找<span id="cityshow">上海市</span><span id="beginageshow">12</span>~<span id="endageshow">15</span>岁的学生，问他们是否需要<span id="ordernameshow">XXX</span>产品。</p>
					                </div>
					            </li>

					            <li>
		    						<p><b>4.您想获得意向客户的什么字段信息（这些信息齐备且有效就算是一条合格的销售线索）？</b></p>
		    						<p>标准销售线索模板：
		    						<c:if test="${''!=cluename&&'null'!=cluename}">
		    						<a class="link_blue" href="${cluename}">下载模板 >></a>
		    						</c:if>
		    						<c:if test="${''==cluename||'null'==cluename}">
		    						暂无模板
		    						</c:if>
		    						</p>
		    						<p style="height: 35px;">标准销售线索模板：</p>
		    						<div class="up-position1">
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
		    					<li>
		    						<p><b>5.您需要安排您公司的其他同事跟进此项目吗？</b></p>
		    						
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

		    					</li>
								<li class="checkbox_padding">
		    								   <p><b>6.您需要上传话术或者上传目标客户名单吗？</b></p>
		    						
		    						 		   <c:set var="string1" value="${editsDemand.category2}"/>
				                               <p class="tel-selected"><input type="checkbox" name="category2"
											   <c:if test="${fn:contains(string1, '电话营销')}">
											   </c:if>
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
		    						<p>需要帮助？<a class="link_blue" href="tencent://message/?uin=2850840278&Site=&menu=yes">点此联系客服 >></a></p>

		    					</li>
		    					</li>
		    				</ul>

	    					
	    					
	    					<div class="choice_pakeage_box">
	    						<div class="center">
	    							<input type="checkbox" checked="checked" />
	    							<span>同意并遵守《<a href="customer_mso"  target="_blank">眸事网需求发布与处理规则</a>》</span>
	    						</div>
	    						<div class="btn_box">
	    							<a href="customer_lj_DemandManagement1"><< 返回上一步</a>
	    							<button class="btn_orange" type="button" onclick="submitPost(1);">同意协议条款，马上发布</button>
	    							<button class="btn_gray"   type="button" onclick="submitPost(0);">保存到草稿箱</button>
	    						</div>
	    						
	    					</div>
	    				</div>
	    			</div>
	    			</from>
	    		</div>
	    	<!-- jsp公告 -->
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
	
	
	<script type="text/javascript" src="js/jsAddress.js"></script>
	<script type="text/javascript" src="lib/crypto1/crypto/crypto.js"></script>
	<script type="text/javascript" src="lib/crypto1/hmac/hmac.js"></script>
	<script type="text/javascript" src="lib/crypto1/sha1/sha1.js"></script>
	<script type="text/javascript" src="lib/base64.js"></script>
	<script type="text/javascript" src="js/plupload.full.min.js"></script>
	<script type="text/javascript" src="js/upload.js"></script>
	<script>
	
			var file1=document.getElementById("standardoperation").value;
			var file2=document.getElementById("otherreport").value; 
			var file3=document.getElementById("xsxsurl").value; 
			var cate=document.getElementById("category2v").value;
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
        
        
					var packageid=document.getElementById("packageid").value;
// 					if(''==packageid){//新增过来的
		// 					套餐默认显示第一个套餐内容
// 							$(".pakeageName").text($(".scroll_list li:first-child h4").text());
// 							$(".pakeagePrice").text("￥" + $(".scroll_list li:first-child p.money span").text());
// 							$(".pakeageTag").text("￥" + $(".scroll_list li:first-child p.price").text());
// 							$(".pakeageNumber").text($(".scroll_list li:first-child p.number").text());
// 							$(".finishperiod").text($(".scroll_list li:first-child p.finishperiods").text());
// 						    $(".payment").text($(".scroll_list li:first-child p.payments").text());				
// 						    document.getElementById("packageid").value=$(".scroll_list li:first-child p.pid").text();	
// 							document.getElementById("demand").value=$(".scroll_list li:first-child p.details").text();	
// 					}else{
							//套餐默认显示第select个套餐内容
							$(".pakeageName").text($(".scroll_list li.selected h4").text());
							$(".pakeagePrice").text("￥" + $(".scroll_list li.selected p.money span").text());
							$(".pakeageTag").text("￥" + $(".scroll_list li.selected p.price").text());
							$(".pakeageNumber").text($(".scroll_list li.selected p.number").text());
							$(".finishperiod").text($(".scroll_list li.selected p.finishperiods").text());
						    $(".payment").text($(".scroll_list li.selected p.payments").text());				
						    document.getElementById("packageid").value=$(".scroll_list li.selected p.pid").text();	
// 							document.getElementById("demand").value=$(".scroll_list li.selected p.details").text();	
// 					}
								
					//点击选择套餐
					$(".scroll_list li").click(function(){
						$(this).addClass("selected").siblings().removeClass("selected");
						$(".pakeageName").text($(this).children("h4").text());
						$(".pakeagePrice").text("￥" + $(this).find("p.money span").text());
						$(".pakeageTag").text("￥" + $(this).find("p.price").text());
						$(".pakeageNumber").text($(this).find("p.number").text());
						$(".finishperiod").text($(this).find("p.finishperiods").text());
				        $(".payment").text($(this).find("p.payments").text());	
// 				        document.getElementById("demand").value=$(this).find("p.details").text();	
				        document.getElementById("packageid").value=$(this).find("p.pid").text();
					});	        
			        
					//点击滚动
					var page= 1; 
					var i = 4;
					//向右滚动 
					$(".next").click(function(){
						var v_wrap = $(this).parents(".scroll");
						var v_show = v_wrap.find(".scroll_list");
						var v_cont = v_wrap.find(".box");
						var v_width = v_cont.width(); 
						var len = v_show.find("li").length;
						var page_count = Math.ceil(len/i);
						if(!v_show.is(":animated")){ 
							if(page == page_count){ 
								v_show.animate({left:'0px'},"slow"); 
								page =1; 
							}else{ 
								v_show.animate({left:'-='+v_width},"slow"); 
								page++; 
							} 
						} 
					}); 
					//向左滚动 
					$(".prev").click(function(){
						var v_wrap = $(this).parents(".scroll");
						var v_show = v_wrap.find(".scroll_list");
						var v_cont = v_wrap.find(".box");
						var v_width = v_cont.width(); 
						var len = v_show.find("li").length;
						var page_count = Math.ceil(len/i);
						if(!v_show.is(":animated")){ 
							if(page == 1){ 
								v_show.animate({left:'-='+ v_width*(page_count-1)},"slow"); 
								page =page_count; 
							}else{ 
								v_show.animate({left:'+='+ v_width},"slow"); 
								page--; 
							} 
						} 
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
					
					//表单验证开始
					//只能输入数字
					var oNumber = /^[0-9]*[1-9][0-9]*$/;
				    //年龄
					$("input.age01").blur(function(){
			            if($(this).val() == ''){
			                $(this).siblings().find(".age04").addClass("error_red");
			            }else if($(this).val().length<2){
			                $(this).siblings().find(".age04").addClass("error_red");
			            }else if($(this).val().length>8){
			                $(this).siblings().find(".age04").addClass("error_red");
			            }else{
			                $(this).siblings().find(".age04").removeClass("error_red");
			            }
			        });
			        $("input.age01").focus(function(){
			            $(this).siblings().find(".age04").removeClass("error_red");
			        });
			       // console.log("初始化~~~~~~~~~~~~~~~");
			        

			        
			       
			
					 
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
			        
        
        
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
        
        
			
			        
			        //城市
// 			        $("input.targecity").blur(function(){
// 			            if($(this).val() == ''){
// 			                $(this).addClass("error_red");
// 			                $(this).next().text("请填写目标城市");
// 			            }else{
// 			                $(this).removeClass("error_red");
// 			                $(this).next().text("");
// 			            }
// 			        });
// 			        $("input.targecity").focus(function(){
// 			            $(this).removeClass("error_red");
// 			            $(this).next().text("");
// 			        });
					//人群
			        $("input.people").blur(function(){
			            if($(this).val() == ''){
			                $(this).addClass("error_red");
			                $(this).next().text("请填写目标人群");
			            }else{
			                $(this).removeClass("error_red");
			                $(this).next().text("");
			            }
			        });
			        $("input.people").focus(function(){
			            $(this).removeClass("error_red");
			            $(this).next().text("");
			        });
					//表单验证结束
					
					//地址选择
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
			                $(".city_select .left").hide();
			            }else{
			                $(".city_select .left").show();
			            }
			        });

			        var  regioncity=document.getElementById("regioncity");
					 //自定城市选中
					if(regioncity.checked){
						 $(".city_select .left").show();
					}else{
						 $(".city_select .left").hide();
					}    
					
					
					//开始时间验证
			        $("input.completionDate").blur(function(){
			            if($(this).val() == ''){
			                $(this).addClass("error_red");
			                $("#timeerror").text("请填写您要求的开始日期！");	
			//                 $(this).parent().next().text("请填写您要求的时间");
			            }else{
			                $(this).removeClass("error_red");
			//                 $(this).parent().next().text("");
			                $("#timeerror").text("");
			            }
			        }).change(function(){
			            if($(this).val() == ''){
			                $(this).addClass("error_red");
			                $("#timeerror").text("请填写您要求的开始日期！");	
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
			        	}else  {
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
						    document.getElementById("standardoperationcheckfile").style.display="";
						}
						if('2'==standis){
						    $("#tel-b2").click();
						    document.getElementById("otherreportcheckfile").style.display="";
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
							    
							    //需求描述验证
						          var s=document.getElementById("demanddescription");
							      var s2=document.getElementById("demanddspan");
							      if(s.value!="" && s.value. length>200){
							        s2.innerHTML="输入文本不能超过200个字";
							        return false;
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
								document.getElementById("releasenum").value=$(".pakeageNumber").text();
								document.getElementById("orderprice").value=$(".pakeageTag").text();
								document.getElementById("orderpricetol").value=$(".pakeagePrice").text();
								document.getElementById("targethumen").value=$("input.people").val();
								document.getElementById("beginage").value=$("input.age01").val();
								document.getElementById("endage").value=$("input.age03").val();
								document.getElementById("fdstate").value=type;
								document.getElementById("endtime").value=$(".finishperiod").text();
								//追加目标城市start
								document.getElementById("targecity").value=datacityvvv;
								//end
								
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
								//销售线索
								document.getElementById("xsxsurl").value=file3;
// 								var othercheck=document.getElementsByName("otherreportcheck");
// 								var standarcheck=document.getElementsByName("standardoperationcheck");
								
								//document.getElementById("pleader").value="";
								//document.getElementById("pphone").value="";
								document.getElementById("paytime").value=$(".payment").text();
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