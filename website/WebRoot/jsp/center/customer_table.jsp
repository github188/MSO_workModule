<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
	<link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css"/>


    <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/jquery.validate.js"></script>

    <script src="js/tj.js"></script>

	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link href="css/project_base.css"  rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"/>

				<link href="../html/css/bootstrap.min.css" rel="stylesheet">
			    <link href="../html/css/animate.min.css" rel="stylesheet">
			    <link rel="stylesheet" href="../html/css/style.css"/>
			    <link href="../html/css/font-awesome.min.css" rel="stylesheet">
			    <link href="../html/css/drop-down.css" rel="stylesheet">
				<script src="../html/js/bootstrap.min.js"></script>
				<script src="../html/js/react.js"></script>
				<script src="../html/js/react-dom.js"></script>
				<script src="../html/js/browser.min.js"></script>
				<script src="../html/js/circle-progress.js"></script>
				<script src="../html/js/main.js"></script>
				<script src="../html/js/url.js"></script>
			    <script type="text/javascript" src="../html/js/bootstrap-datetimepicker.min.js" charset="UTF-8"></script>
			    <script type="text/javascript" src="../html/js/bootstrap.min.js" charset="UTF-8"></script>
				<link rel="stylesheet" href="css/bootstrap.min.css">
				<link rel="stylesheet" href="css/style.css"/>


    <style type="text/css">
		.htmleaf-icon{color: #fff;}
		 ul.date_list li .input-group[class*=col-] { width: 180px;}
		.main_overview .search .left li { width: 260px;}
		.supplier .date { top:0;}
		.content .title { border-top:0;}
		.nav.nav_supplier { display: none;}
		.nav { height: 0;line-height: 0;}
    </style>
    <script type="text/javascript">
      	function searchReport1(zt){
		     var searchReport=document.getElementById("searchReport");
		     searchReport.action="customer_lj_DemandList?zt="+zt;
			 searchReport.method="post";
			 searchReport.submit();
	    }
	    function getReport(zt){
		     var searchReport=document.getElementById("searchReport");
		     searchReport.action="customer_lj_DemandListEx?zt="+zt;
			 searchReport.method="post";
			 searchReport.submit();
	    }
	    function demandDetailReport(demandid){
	         var formid="searchReport"+demandid;
		     var searchReport=document.getElementById(formid);
		     searchReport.action="customer_lj_DemandList?zt=cdbbdetail";
			 searchReport.method="post";
			 searchReport.submit();
	    }

	    function demandDetailReport1(demandid){
	         var formid="searchReport"+demandid;
		     var searchReport=document.getElementById(formid);
		     searchReport.action="customer_lj_DemandList?zt=cdbbdetail2";
			 searchReport.method="post";
			 searchReport.submit();
	    }


	    function demandDetailReport2(orderid){
	         var formid="searchReport"+orderid;
		     var searchReport=document.getElementById(formid);
		     searchReport.action="customer_lj_DemandList?zt=cdbbdetail2";
			 searchReport.method="post";
			 searchReport.submit();
	    }
    </script>
</head>
<body class="supplier"  >


		<div class="topNav"></div>


    <!-- jsp文件头和头部 -->
    <div class="content">

	    <style>
		.content_right {
		    width: auto;
		    height: 100%;
		    margin-left: 0;
		    margin-top: 20px;
		}
		ul.date_list li .input-group-addon { padding: 5px 0; width: 25px;}
		ul.date_list li .input-group-addon1,
		ul.date_list li .input-group-addon2 { position: absolute;  z-index: 100; right: 25px;}
		ul.date_list li .input-group-addon2 { right:0;}
		</style>


        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg" style="margin-top:40px">
    		<div class="mid_box">

<!-- 	    		<c:if test="${user.jfutype=='1'}"> -->
<!-- 	    		   <div class="menu_left"></div> -->
<!-- 	    		</c:if> -->
<!-- 	    		<c:if test="${user.jfutype=='2'}"> -->
<!-- 	    		</c:if> -->


	    		<div class="content_right">
	    			<div class="main_overview" style="min-height: 850px;">


	    			    <c:if test="${'cdbb'==zt}">
		    			    <form action="" name="searchReport" id="searchReport">
		    				<div class="title">成单报表</div>
		    				<input type="hidden" value="${zt}" name="zt" >
							<input type="hidden" value="${demand.demandid}" name="demandid">
							<div class="search" style="height: auto;">
		    					<div class="left" style="width: 100%;">
		    						<ul class="date_list">
		    							<li>
		    							 <c:if test="${user.jfutype=='1'}">
		    								<label>发布时间：</label>
		    							 </c:if>
		    							 <c:if test="${user.jfutype=='2'}">
		    								<label>竞拍时间：</label>
		    							 </c:if>
		    								<div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy/MM/dd">
							                    <input class="form-control" size="16" type="text" readonly value="${sbeginDateValue}" name="sbeginDateValue" id="sbeginDateValue" >
							                    <span class="input-group-addon input-group-addon1"><span class="glyphicon glyphicon-remove"></span></span>
												<span class="input-group-addon input-group-addon2"><span class="glyphicon glyphicon-calendar"></span></span>
							                </div>
											<input type="hidden" id="dtp_input1" value="" />
		    							</li>
		    							<li class="second last">
		    								<label>---</label>
		    								<div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy/MM/dd">
							                    <input class="form-control" size="16" type="text" readonly  name="sendDateValue" id="sendDateValue" type="text" value="${sendDateValue}">
							                    <span class="input-group-addon input-group-addon1"><span class="glyphicon glyphicon-remove"></span></span>
												<span class="input-group-addon input-group-addon2"><span class="glyphicon glyphicon-calendar"></span></span>
							                </div>
											<input type="hidden" id="dtp_input1" value="" />
		    							</li>
		    							<li class="input_box"><input type="text" class="table-search"  name="sorderName" id="sorderName" type="text" value="${sorderName}"/></li>
		    							<li class="btn_box"><button class="btn_orange" onclick="searchReport1('cdbb')">搜索</button></li>
		    						</ul>
		    					</div>
		    				</div>
							</form>
						</c:if>



						<c:if test="${'cdbbdetail'==zt}">
				            <div class="title">竞拍明细</div>
		    				<div class="search" style="height: auto;">
		    					<div class="name" style="padding-left:117px;">
		    						需求名称：${demandnameShow}
		    					</div>
		    				</div>
						</c:if>


						<c:if test="${'cdbbdetail2'==zt}">
							<form action="" name="searchReport" id="searchReport">
			    				<div class="title">报表明细</div>
			    				<input type="hidden" value="${zt}" name="zt" >

			    			    <c:if test="${user.jfutype=='2'}">
								<input type="hidden" value="${demand.orderid}" name="orderid">
								</c:if>

								<input type="hidden" value="${demand.demandid}" name="demandid">
								<div class="search" style="height: auto;">
			    					<div class="left" style="width: 100%;">
			    						<ul class="date_list">
				    						<li style="line-height:33px">
				    						 <c:if test="${user.jfutype=='1'}">

				    						 <span style="display:inline-block; width:11em; overflow:hidden; height:17px;line-height:17px;margin-right:20px;text-overflow:ellipsis;white-space: nowrap;" title="${demandnameShow}">需求名称：${demandnameShow}</span>  <span style=" display:inline-block;line-height:17px;height:17px;overflow:hidden;">发布量：${fbl} </span>
				    						 </c:if>
				    						 <c:if test="${user.jfutype=='2'}">
				    						 <label>订单名称：${demandnameShow}</label>
				    						 </c:if>
					    					</li>
			    							<li>
			    							<c:if test="${user.jfutype=='2'}">
			    								<label>上传时间：</label>
			    							</c:if>
			    							<c:if test="${user.jfutype=='1'}">
			    								<label>统计时间：</label>
			    							</c:if>

			    								<div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy/MM/dd">
								                    <input class="form-control" size="16" type="text" readonly value="${sbeginDateValue}" name="sbeginDateValue" id="sbeginDateValue" >
								                    <span class="input-group-addon input-group-addon1"><span class="glyphicon glyphicon-remove"></span></span>
													<span class="input-group-addon input-group-addon2"><span class="glyphicon glyphicon-calendar"></span></span>
								                </div>
												<input type="hidden" id="dtp_input1" value="" />
			    							</li>
			    							<li class="second last">
			    								<label>---</label>
			    								<div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy/MM/dd">
								                    <input class="form-control" size="16" type="text" readonly  name="sendDateValue" id="sendDateValue" type="text" value="${sendDateValue}">
								                    <span class="input-group-addon input-group-addon1"><span class="glyphicon glyphicon-remove"></span></span>
													<span class="input-group-addon input-group-addon2"><span class="glyphicon glyphicon-calendar"></span></span>
								                </div>
												<input type="hidden" id="dtp_input1" value="" />
			    							</li>
			    							<li class="btn_box"><button class="btn_orange" onclick="searchReport1('cdbbdetail2')">搜索</button></li>
			    						</ul>
			    					</div>
			    				</div>
								</form>
						</c:if>




	    				<table class="tab tab_cd">
	    					<c:if test="${'cdbb'==zt}">
			    				 <c:if test="${user.jfutype=='1'}">
			    					<tr>
			    						<th width="58">序号</th>
			    						<th>需求名称</th>
			    						<th width="118">发布量</th>
			    						<th width="118">成功量</th>
<!-- 			    						<th width="118">失败量</th> -->
			    						<th width="172">发布时间</th>
			    						<th width="140">操作</th>
			    					</tr>
			    					<c:forEach var="d" items="${page.results}" varStatus="status">
							    					<form action="" name="searchReport${d.demandid}" id="searchReport${d.demandid}">
									    				<input type="hidden" value="cdbbdetail" name="zt" >
														<input type="hidden" value="${d.demandid}" name="demandid">
														<input type="hidden" value="${d.ordername}" name="demandnameShow">
														<input type="hidden" value="${d.fbl}" name="fbl">
														<input type="hidden" value="${d.jfuid }" name="jfuid">
													</form>
							    					<tr>
							    						<!--需求号-->
							    						<td><span class="number">${status.index+1}</span></td>
							    						<td>${d.ordername}</td>
							    						<td>${d.fbl}</td>
							    						<td>${d.cgl}</td>
<!-- 							    						<td>${d.sbl}</td> -->
							    						<td>${d.releasetime}</td>
<!-- 							    					<td><a href="javascript:;" onclick="demandDetailReport('${d.demandid}');">查看11</a></td> -->
							    						<td><a href="javascript:;" onclick="demandDetailReport1('${d.demandid}');">查看</a></td>
							    					</tr>
									</c:forEach>
			    				 </c:if>

			    				 <c:if test="${user.jfutype=='2'}">
			    					<tr>
			    						<th width="58">序号</th>
			    						<th>需求名称</th>
			    						<th width="118">竞拍订单量</th>
			    						<th width="118">成功量</th>
			    						<th width="118">失败量</th>
			    						<th width="172">竞拍时间</th>
			    						<th width="140">操作</th>
			    					</tr>
			    					<c:forEach var="d" items="${page.results}" varStatus="status">
							    					<form action="" name="searchReport${d.demandid}" id="searchReport${d.demandid}">
									    				<input type="hidden" value="cdbbdetail" name="zt" >
														<input type="hidden" value="${d.demandid}" name="demandid">
														<input type="hidden" value="${d.ordername}" name="demandnameShow">
													</form>
							    					<tr>
							    						<!--需求号-->
							    						<!--<td>${d.demandid}</td>-->
							    						<td><span class="number">${status.index+1}</span></td>
							    						<td>${d.ordername}</td>
							    						<td>${d.fbl}</td>
							    						<td>${d.cgl}</td>
							    						<td>${d.sbl}</td>
							    						<td>${d.createtime}</td>
							    						<td><a href="javascript:;" onclick="demandDetailReport('${d.demandid}');">查看</a></td>
							    					</tr>
									</c:forEach>
			    				 </c:if>
	    					</c:if>





	    					<c:if test="${'cdbbdetail'==zt}">
	    				    <tr>
	    						<th>竞拍号</th>
	    						<th>竞拍量</th>
	    						<th>完成量</th>
	    						<th>竞拍时间</th>
	    						<th>上传明细</th>
	    					</tr>
	    					<c:forEach var="d" items="${page.results}">
					    					<form action="" name="searchReport${d.orderid}" id="searchReport${d.orderid}">
							    				<input type="hidden" value="cdbbdetail2" name="zt" >
												<input type="hidden" value="${d.demandid}" name="demandid">
												<input type="hidden" value="${d.orderid}" name="orderid">
											</form>
					    					<tr>
					    						<td>${d.orderid}</td>
					    						<td>${d.fbl}</td>
					    						<td>${d.cgl}</td>
					    						<td>${d.createtime}</td>
					    						<td><a href="javascript:;" onclick="demandDetailReport2('${d.orderid}');">查看</a></td>
					    					</tr>
							</c:forEach>
	    				    </c:if>



	    				    <c:if test="${'cdbbdetail2'==zt}">
							    <c:if test="${user.jfutype=='1'}">
			    					<tr>
			    						<th>序号</th>
<!-- 			    						<th>需求名称</th> -->
			    						<th >递交量</th>
			    						 <!-- <th >成功量</th>-->
			    						<!-- <th >失败量</th>-->
			    						<th width="180">成单时间</th>
			    						<th width="80">成单报告 </th>
			    						<th width="200">操作时间</th>
			    						 <!--  <th width="80">录音文件 </th>-->
			    					</tr>
									<c:forEach var="d" items="${page.results}" varStatus="s">
							    					<form action="" name="searchReport${d.demandid}" id="searchReport${d.demandid}">
									    				<input type="hidden" value="cdbbdetail" name="zt" >
														<input type="hidden" value="${d.demandid}" name="demandid">
														<input type="hidden" value="${d.ordername}" name="demandnameShow">
													</form>
							    					<tr>
							    						<td>${s.index+1}</td>
<!-- 														<td>${d.demandid}</td> -->
<!-- 							    						<td>${d.ordername}</td> -->
							    						<td>${d.releasenum}</td>
							    						  <!--<td> ${d.qa_qualified+d.qa_notstandard}</td>-->
							    						<!--<td> ${d.qa_cancel+d.qa_disqualification}</td>-->
							    						<td>${d.censusday}</td>
		                       							<td>
									    				<c:if test="${''!=d.censusfile_url}">
															  <a href="${pre}${d.censusfile_url}" style="margin:0;text-decoration: underline">下载</a>
								                        </c:if>
								                        </td>
								                        <!--<td>
								                       	<c:if test="${''!=d.census_recording_url}">
															  <a href="${pre}${d.census_recording_url}" style="margin:0;text-decoration: underline">下载</a>
								                        </c:if>
								                        </td>-->
								                        <td>${d.updatetime }</td>
							    					</tr>
									</c:forEach>
			    				 </c:if>










							    <c:if test="${user.jfutype=='2'}">
	    				     	<tr>
		    						<th>上传号</th>
		    						<th>上传量</th>
		    						<th>接收量</th>
		    						<th>重复量</th>
		    						<th>查重附件</th>
		    						<th>合格量</th>
		    						<th>话术不规范</th>
		    						<th>取消</th>
		    						<th>不合格量</th>
		    						<th>质检附件</th>
		    						<th>上传时间</th>
		    					</tr>
		    					<c:forEach var="d" items="${page.results}">
						    					<form action="" name="searchReport${d.orderid}" id="searchReport${d.orderid}">
								    				<input type="hidden" value="cdbbdetail2" name="zt" >
													<input type="hidden" value="${d.demandid}" name="demandid">
												</form>
						    					<tr>
						    					<td>${d.id}</td>
						    					<td>${d.order_num}</td>
						                        <td>${d.dba_receive}</td>
						                        <td>${d.dba_repetition}</td>
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
						    					<td>${d.qa_qualified}</td>
						    					<td>${d.qa_notstandard}</td>
						    					<td>${d.qa_cancel}</td>
						    					<td>${d.qa_disqualification}</td>
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
						                       <td>${d.createtime}</td>
						    				   </tr>
								</c:forEach>
							    </c:if>

	    				    </c:if>
	    				</table>



	    				<div class="export_box">
		    				<c:if test="${'cdbb'==zt}">
		    				    <button class="export_btn" onclick="getReport('cdbb');">导出报表</button>
		    				</c:if>
		    				<c:if test="${'cdbbdetail'==zt}">
			    				<form action="" name="searchReport" id="searchReport">
			    					<input type="hidden" value="${demandnameShow}" name="demandnameShow">
			    					<input type="hidden" value="${zt}" name="zt" >
									<input type="hidden" value="${d.demandid}" name="demandid">
								</form>
		    				    <button class="export_btn" onclick="getReport('cdbbdetail');">导出报表</button>
		    				</c:if>
		    				<c:if test="${'cdbbdetail2'==zt}">
		    				    <button class="export_btn" onclick="getReport('cdbbdetail2');">导出报表</button>
		    				</c:if>
	    					<div class="page">
 								${page.pageStr}
	    					</div>
	    				</div>


<!-- ++++++++================================================= -->
	    				<style>
	    					hr { margin:10px 0;}
	    				</style>
	    				  <div class="title_top"><c:if test="${'cdbbdetail2'==zt}">录音文件</c:if></div>
	    				 <c:if test="${'cdbbdetail2'==zt}">
	    				 <table class="tab tab_hz">
	    				  <c:forEach var="gx" items="${lis}" varStatus="s">
		    				   <c:if test="${s.index%5==0}">
		    				       <tr>
		    				       <td style="padding:10px 0;width:150px">序号<hr>对应时间<hr>录音文件</td>
		    				       <td style="padding:10px 0;">${s.index+1}<hr>${gx.censusdayrangeh}<hr><a href="${pre}${gx.census_recording_url}" style="margin:0;text-decoration: underline;color:#009cee;">录音文件名点击即下载</a></td>
		    				    </c:if>
								<c:if test="${s.index%5>0&&s.index%5<=5}">
		    				       <td style="padding:10px 0;">${s.index+1}<hr>${gx.censusdayrangeh}<hr><a href="${pre}${gx.census_recording_url}" style="margin:0;text-decoration: underline;color:#009cee;">录音文件名点击即下载</a></td>
		    				    </c:if>
		    				    <c:if test="${s.index%5==0&&s.index!=0}">
	    				    	</tr>
	    				    	</c:if>


	    				    </c:forEach>
	    				    </table>
	    				  </c:if>

<!-- ======================================================== -->


	    				<BR/>
	    				<div class="title_top">汇总</div>
	    				<table class="tab tab_hz">
	    				<c:if test="${'cdbb'==zt}">
	    					<tr>
	    					  <c:if test="${user.jfutype=='1'}">
	    					     <th>发布量</th>
	    					  </c:if>
	    					  <c:if test="${user.jfutype=='2'}">
	    						 <th>竞拍订单量</th>
	    					  </c:if>
	    						<th>成功量</th>
	    					  <c:if test="${user.jfutype=='2'}">
	    						<th>失败量</th>
	    					  </c:if>
	    					</tr>
	    					<tr>
	    						<td>${page.fblTol}</td>
	    						<td>${page.cglTol}</td>
	    						<c:if test="${user.jfutype=='2'}">
	    						<td>${page.sblTol}</td>
	    						</c:if>
	    					</tr>
	    			    </c:if>
	    				<c:if test="${'cdbbdetail'==zt}">
	    					<tr>
	    						<th>竞拍量</th>
	    						<th>完成量</th>
	    					</tr>
	    					<tr>
	    						<td>${page.fblTol}</td>
	    						<td>${page.cglTol}</td>
	    					</tr>
	    			    </c:if>
	    			    <c:if test="${'cdbbdetail2'==zt}">

	    			       <c:if test="${user.jfutype=='1'}">
	    					<tr>
<!-- 	    						<th>发布量</th> -->
	    						<th>发布量</th>
	    						<th>递交量</th>
	    					</tr>
	    					<tr>
<!-- 	    						<td>${page.fblTol}</td> -->
	    						<td>${fbl}</td>
	    						<td>${sum}</td>
	    					</tr>
	    			      </c:if>

	    			      <c:if test="${user.jfutype=='2'}">
	    					<tr>
	    						<th>上传量</th>
	    						<th>接收量</th>
	    						<th>重复量</th>
	    						<th>合格量</th>
	    						<th>话术不规范</th>
	    						<th>取消</th>
	    						<th>不合格</th>
	    					</tr>
	    					<tr>
	    						<td>${page.report.fblTol}</td>
	    						<td>${page.report.dba_receiveTol}</td>
	    						<td>${page.report.dba_repetitionTol}</td>
	    						<td>${page.report.qa_qualifiedTol}</td>
	    						<td>${page.report.qa_notstandardTol}</td>
	    						<td>${page.report.qa_cancelTol}</td>
	    						<td>${page.report.qa_disqualificationTol}</td>
	    					</tr>
	    			     </c:if>

	    			     </c:if>
	    				</table>
	    			</div>
	    		</div>
    		</div>
    	</div>
    </div>
    <!-- jsp文件尾部和尾部 -->

	<div class="footer_box"></div>

	<script type="text/javascript"  src="js/project_base.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/radialindicator.js"></script>


		<c:if test="${user.jfutype=='1'}">
	    	 <script src="../html/js/header-customerHall.js" type="text/babel"></script>
	    </c:if>
	    <c:if test="${user.jfutype=='2'}">
	    	<script src="../html/js/header-supplierHall.js" type="text/babel"></script>
	    </c:if>
		<script src="../html/js/footer.js" type="text/babel"></script>

    <script>
        	SyntaxHighlighter.defaults['toolbar'] = false;
			SyntaxHighlighter.all();

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
      			$(".topNav .top .menu ul li:nth-child(3) a").addClass("selected");
			});
    </script>
</body>
</html>
