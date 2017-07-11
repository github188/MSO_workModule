<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	
				<form id="searchform"  method="post" action="">
		    				<div class="search">
		    					<div class="left">
		    						<ul class="date_list">
		    							<li><label>订单名称：</label><input class="date_style" name="sorderName" id="sorderName" type="text" value="${pa.sorderName}"/></li>
		    							<li class="second"><label>订单编号：</label><input class="date_style" name="sorderNo" id="sorderNo" type="text"  value="${pa.sorderNo}"/></li>
		    							<li>
		    								<label>发布时间：</label>
		    								<div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy-MM-dd">
							                    <input class="form-control" size="16" name="sbeginDateValue" id="sbeginDateValue" type="text" value="${pa.sbeginDateValue}"  readonly>
							                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
												<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
							                </div>
											<input type="hidden" id="dtp_input1" value="" />
		    							</li>
		    							<li class="second last">
		    								<label>---</label>
		    								<!--<input type="date" />-->
		    								<div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy/MM/dd" data-link-field="dtp_input1" data-link-format="yyyy-MM-dd">
							                    <input class="form-control" size="16" name="sendDateValue" id="sendDateValue" type="text" value="${pa.sendDateValue}" readonly>
							                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
												<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
							                </div>
											<input type="hidden" id="dtp_input1" value="" />
		    							</li>					
		    						</ul>
		    					</div>
		    					<div class="right">
		    						<button type="button" onclick="seach()">搜索</button>
		    					</div>
		    				</div>
		    	</form>