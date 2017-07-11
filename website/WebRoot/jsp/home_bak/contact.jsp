<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<html>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=3nFhmMmUgTkywu0waCZKYlxY0YWjE9GV"></script>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<style>
    .info1{height:310px;background: #F6F6F6;}
    .info1>div,.info2>div,.info3>div,form>div,header>div,footer>div{width:1200px;margin:0 auto;}
    
    .banner { border-top: 1px #cbcbcb solid; height: 150px; background: url(images/contact/u0.png) center center no-repeat #fe9857; text-indent: 100%; overflow: hidden;}
    .box_content { width: 1112px; padding-left: 88px; margin: 0 auto;}
    .tab { overflow: hidden; padding-top: 18px;}
	.tab_menu { float: left;}
	.tab_menu li { font-size: 18px; border-bottom: 1px #e4e4e4 solid; width: 104px; height: 41px; line-height: 41px; cursor: pointer; text-indent: 22px;}
	.tab_menu li.hover,
	.tab_menu li.selected { font-weight: bold; background: url(images/about/u3.png) 9px center no-repeat;}
	.tab_box { float: left; min-height: 600px; width: 840px; padding-left: 80px; padding-top: 4px; padding-bottom: 35px; background: url(images/about/icon.gif) 34px 17px no-repeat; color: #515151;}
	.tab_box h2 { font-size: 16px; font-weight: 600; padding: 8px 0;}
	.tab_box p { font-size: 12px; padding: 10px 0;}
	.hide{display:none}
	
	.business_card { background: url(images/contact/u72.png); width: 400px; height: 250px; float: left; margin-right: 20px; margin-bottom: 16px; position: relative;}
	.business_card.margin0 { margin-right: 0;}
	.business_card .title { height: 50px; padding-top: 40px; font-size: 14px; width: 90px; text-align: center;}
	.business_card .info { padding-left: 210px;}
	.business_card .info h3 { font-size: 18px; padding-bottom: 20px;}
	.business_card .info h3 span { font-size: 12px;}
	.business_card .info p { padding: 5px 0; padding-left: 30px; line-height: 14px; font-size: 14px;}
	.business_card .info p.tel { background: url(images/contact/u82.png) 0 center no-repeat;}
	.business_card .info p.qq { background: url(images/contact/u86.png) 0 center no-repeat;}
	.business_card .info p.mail { background: url(images/contact/u88.png) 0 center no-repeat;}
	.business_card a { width:100%; height: 100%; line-height: 250px; text-align: center; position: absolute; top: 0; left: 0; 
	color: rgba(0,0,0,0); background: rgba(255,204,102,0); 
	transition: all 0.5s; -moz-transition: all 0.5s; -webkit-transition: all 0.5s;}
	.business_card a:hover { color: rgba(0,0,0,1); background: rgba(255,204,102,1); 
	transition: all 0.5s; -moz-transition: all 0.5s; -webkit-transition: all 0.5s;}
	address { border: 1px #f2f2f2 solid; font-style: normal; overflow: hidden; padding: 10px; width: 800px; margin-bottom: 20px;}
	address .add_info { float: left;}
	address .add_info h3 { padding-bottom: 4px;}
	address .add_info p { padding: 0;  font-size: 14px;}
	address img { border-left: 1px #f2f2f2 solid; padding: 17px 34px; float: right;}
</style>
<body>
	<!-- jsp文件头和头部 -->
	<%@ include file="../header.jsp"%>
    <div class="banner"><img src="images/contact/u0.png"></div>
    <div class="box_content">
    	<div class="tab">
		    <div class="tab_menu">
		        <ul>
		            <li class="selected">客服中心</li>
		            <li>公司地址</li>
		        </ul>
		    </div>
		    <div class="tab_box">
		        <div>
		        	<h2>客服中心</h2>
		        	<div class="business_card">
		        		<div class="title">发包方合作</div>
		        		<div class="info">
		        			<h3>施先生 / <span>发包方接洽</span></h3>
		        			<p class="tel">(021)55091213*812</p>
		        			<p class="qq">2850840272</p>
		        			<p class="mail">terry.shi<br />@lzcallcenter.com</p>
		        		</div>
		        		<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点击这里，马上通过QQ咨询！</a>
		        	</div>
		        	<div class="business_card margin0">
		        		<div class="title">接包方合作</div>
		        		<div class="info">
		        			<h3>骆小姐 / <span>接包方洽谈</span></h3>
		        			<p class="tel">400-900-5288*805</p>
		        			<p class="qq">95896106</p>
		        			<p class="mail">yumika.luo<br />@lzcallcenter.com</p>
		        		</div>
		        		<a href="tencent://message/?uin=95896106&Site=&menu=yes">点击这里，马上通过QQ咨询！</a>
		        	</div>
		        	<div class="business_card">
		        		<div class="title">商务合作</div>
		        		<div class="info">
		        			<h3>吴先生 / <span>商务接洽</span></h3>
		        			<p class="tel">(021)55091213*818</p>
		        			<p class="qq">370615191</p>
		        			<p class="mail">king.wu<br />@lzcallcenter.com</p>
		        		</div>
		        		<a href="tencent://message/?uin=370615191&Site=&menu=yes">点击这里，马上通过QQ咨询！</a>
		        	</div>
		        	<!--<div class="business_card margin0">
		        		<div class="title">帮助热线</div>
		        		<div class="info">
		        			<h3>总机 / <span>欢迎致电</span></h3>
		        			<p class="tel">(021)55091213</p>
		        			<p class="qq">2850840272</p>
		        			<p class="mail">欢迎致电，谢谢！</p>
		        		</div>
		        		<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点击这里，马上通过QQ咨询！</a>
		        	</div>-->
		        </div>
		        <div class="hide">
		        	<h2>公司地址</h2>
		        	<address>
		        			<div class="add_info">
		        				<h3>上海脉豪商务信息咨询有限公司</h3>
		        				<p>地址：上海市黄浦区打浦路443号荣科大厦203室</p>
					        	<p>邮编：200023</p>
					        	<p>电话：400-900-5288&nbsp;&nbsp;&nbsp;&nbsp;传真：400-900-5288 * 816</p>
					        	
		        			</div>
			        	
			        	<img src="images/index1/logo.png" width="360" />
		        	</address>
		        	<div style="width:820px;height:550px;border:#ccc solid 1px;font-size:12px" id="allmap"></div>
		        </div>

		    </div>
		</div>
		
		
    </div>
    <script type="text/javascript" >
		$(function(){
			var $div_li =$("div.tab_menu ul li");
			$div_li.click(function(){
				$(this).addClass("selected").siblings().removeClass("selected"); 
				var index =  $div_li.index(this); 
				$("div.tab_box > div").eq(index).show().siblings().hide();
				
				// 百度地图API功能,点击tab属性后，执行地图定位
				var map = new BMap.Map("allmap");
				map.centerAndZoom(new BMap.Point(121.479714,31.203618), 18);		
				var local = new BMap.LocalSearch(map, {
				  renderOptions:{map: map}
				});
				local.searchInBounds("荣科大厦", map.getBounds());			
				map.addEventListener("dragend",function(){
				    map.clearOverlays();
				    local.searchInBounds("荣科大厦", map.getBounds());
				});
				//百度地图API 结束
			}).hover(function(){
				$(this).addClass("hover");
			},function(){
				$(this).removeClass("hover");
			});
		}); 
	  </script>
	  	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../footer.jsp"%>
</body>
</html>