<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
  <c:if test="${user.jfutype=='1'}">
	<div class="notice_right">
	    <div class="notice">
	        <div class="title">公告<span>5月2日  星期一</span></div>
	        <div class="list">
	            <ul>
	                <li>▪ 【公告】MSO1.2版上线啦！</li>
	                <li>▪ 【公告】升级成VIP，尊享更多权益！</li>
	            </ul>
	        </div>
	    </div>
	    <div class="notice">
	        <div class="title">发包方入门</div>
	        <div class="list">
	            <ul>
	                <li>▪ 【新手必读】如何发布需求？</li>
	                <li>▪ 【新手必读】如何托管赏金？</li>
	            </ul>
	        </div>
	    </div>
	</div>

	</c:if>
	
	<c:if test="${user.jfutype=='2'}">	
	<div class="notice_right supplier">
	    <div class="notice">
	        <div class="title">公告<span>5月2日  星期一</span></div>
	        <div class="list">
	            <ul>
	                <li>▪ 【公告】MSO1.2版上线啦！</li>
	                <li>▪ 【公告】升级成VIP，尊享更多权益！</li>
	            </ul>
	        </div>
	    </div>
	    <div class="notice">
	        <div class="title">接包方入门</div>
	        <div class="list">
	            <ul>
	                <li>▪ 【新手必读】如何发布需求？</li>
	                <li>▪ 【新手必读】如何托管赏金？</li>
	            </ul>
	        </div>
	    </div>
	</div>
	</c:if>