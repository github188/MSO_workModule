<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<!DOCTYPE html>
<html class="home">
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>MSO营销服务外包平台</title>
    <script src="js/tj.js"></script>
</head>
<body class="home" style="overflow-y: scroll;">
	<div class="bg_cover">
		<div class="cover">
			<i><img src="home2/images/icon_msg.png" /></i>
			<p>此功能正在开发 ，即将上线！</p>
		</div>
	</div>
	
	    <!-- jsp文件头和头部 -->
	<%@ include file="../header2.jsp"%>
    <div class="help_main">
    	<div class="help_text">
    		<div class="title">先来搜一搜快速找到答案</div>
    		<div class="text">
    			<input class="search_text" type="text" placeholder="请输入关键词：比如如何注册，如何登陆" />
    			<button class="search_btn"></button>
    		</div>
    		<div class="title">常见问题</div>
    		<div class="list">
    			<ul>
    				<li><a href="#">如何注册？</a></li>
    				<li><a href="#">如何入驻？</a></li>
    				<li><a href="#">如何发包？</a></li>
    				<li><a href="#">如何入驻眸事平台？</a></li>
    				<li><a href="#">如何登陆？</a></li>
    				<li><a href="#">如何发包？</a></li>
    				<li><a href="#">如何打款？</a></li>
    				<li><a href="#">查看更多</a></li>
    			</ul>
    		</div>
    	</div>
    <!-- jsp文件头和头部 -->
	<%@ include file="../footer2.jsp"%>
    </div>
	<script>
		jQuery(function(){
			$(".search_btn, .help_text .list li a").click(function(){
				$(".bg_cover").show();
			});
			$(".bg_cover").click(function(){
				$(this).hide();
			});
			$(".cover").click(function(e){
				e.stopPropagation();
			});
		})
	</script>
    
</body>
</html>