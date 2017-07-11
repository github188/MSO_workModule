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
<body class="home">
	<!-- jsp文件头和头部 -->
	<%@ include file="../header2.jsp"%>
	<style>
		.bg_cover { position: absolute; z-index: 8;}
		.cover { top: auto; bottom: 437px;}
	</style>
	<div class="bg_cover">
		<div class="cover">
			<i><img src="home2/images/icon_msg.png" /></i>
			<p>此功能正在开发 ，即将上线！</p>
		</div>
	</div>
    <div class="case_banner">
    	<div class="case_banner_content">
    		<p class="img"><img src="home2/images/banner_case_img.png" /></p>
    	</div>	
    </div>
    <div class="case_main">
    	<div class="img_news">
    		<div class="border_bottom">
    			<div class="title">最新<span>共7个案例</span></div>
    		</div>
    		<div class="list">
    			<ul>
	        		<li>
	        			<a class="img_hover" href="javascript:;">
	        				<h3>BPO红酒会员销售</h3>
	        				<p>“会刊+海报+电话+网络+邮件”的立体，互动服务模式。为广大葡萄酒爱好者创作出更便利，更轻松，更舒适的人性化消费体验。</p>
	        				<p>营业状况：</p>
	        				<p>入会人数：15000/月以上</p>
	        				<p>每月销售营业额：500000元以上</p>
	        			</a>
	        			<img src="home2/images/case01.jpg" />
	        			<p class="name">
	        				<i><img src="home2/images/case_photo.jpg" /></i>
	        				<a href="javascript:;">知名红酒商城</a>
	        			</p>
	        		</li>
	        		<li>
	        			<a class="img_hover" href="javascript:;">
	        				<h3>世界知名教育品牌早教课程</h3>
	        				<p>世界知名的教育品牌，和麦曼长期合作，由麦曼为其上海各中心建设客户数据库，MMS/SMS彩短信营销。</p>
	        				<p>活动反馈：</p>
	        				<p>发布人数：10W/周</p>
	        				<p>宣传其新项目品牌。</p>
	        			</a>
	        			<img src="home2/images/case02.jpg" />
	        			<p class="name">
	        				<i><img src="home2/images/case_photo.jpg" /></i>
	        				<a href="javascript:;">世界知名教育品牌早教课程</a>
	        			</p>
	        		</li>
	        		<li>
	        			<a class="img_hover" href="javascript:;">
	        				<h3>短彩信营销 建设数据库</h3>
	        				<p>国际知名顶级奢侈品护肤系列，和迈讯长期，合作 由麦曼为其进行MMS/SMS彩短信营销。</p>
	        				<p>活动反馈：</p>
	        				<p>定向一线城市发布此短信及彩信：专柜反映，效果非常突出，达到一定销售提升</p>
	        			</a>
	        			<img src="home2/images/case03.jpg" />
	        			<p class="name">
	        				<i><img src="home2/images/case_photo.jpg" /></i>
	        				<a href="javascript:;">世界知名奢侈系列护肤品</a>
	        			</p>
	        		</li>
	        		<li>
	        			<a class="img_hover" href="javascript:;">
	        				<h3>建立良好客户关系，精准挖掘目标客户</h3>
	        				<p>海量挖掘优质意向客户，为其建立高品质客户数据库。长期合作给予我们建立保险行业成熟的运营机制。</p>
	        				<p>活动反馈：</p>
	        				<p>合作模式：坐席人力外包</p>
	        				<p>提交客户数：23000/月</p>
	        			</a>
	        			<img src="home2/images/case04.jpg" />
	        			<p class="name">
	        				<i><img src="home2/images/case_photo.jpg" /></i>
	        				<a href="javascript:;">大型知名保险公司</a>
	        			</p>
	        		</li>
	        		<li>
	        			<a class="img_hover" href="javascript:;">
	        				<h3>制定适合行业情况的CRM客户管理流程</h3>
	        				<p>全球知名的英语教育品牌，和迈讯长期合作，由迈讯为其上海各学习中心建立意向客户的数据库。</p>
	        				<p>活动反馈：</p>
	        				<p>邀约人数：5000/月</p>
	        				<p>出席率：35%</p>
	        				<p>签单率：4-5%</p>
	        			</a>
	        			<img src="home2/images/case05.jpg" />
	        			<p class="name">
	        				<i><img src="home2/images/case_photo.jpg" /></i>
	        				<a href="javascript:;">知名英语培训机构</a>
	        			</p>
	        		</li>
	        		<li>
	        			<a class="img_hover" href="javascript:;">
	        				<h3>市场调研，汽车试驾，新品发布</h3>
	        				<p>以市场调研形式，收集/邀约全国范围内意向客户，体验新车试驾体验活动，由迈讯为其品牌活动进行用户调研。</p>
	        				<p>活动反馈：8000/月</p>
	        			</a>
	        			<img src="home2/images/case06.jpg" />
	        			<p class="name">
	        				<i><img src="home2/images/case_photo.jpg" /></i>
	        				<a href="javascript:;">知名汽车品牌</a>
	        			</p>
	        		</li>
	        		<li>
	        			<a class="img_hover" href="javascript:;">
	        				<h3>世界知名教育品牌早教课程</h3>
	        				<p>全球知名的英语教育品牌,和MOS长期合作由麦曼为其意向客户数据库发布邮件邀约注册</p>
	        				<p>活动反馈：</p>
	        				<p>其中80%的订阅客户希望长期收到我们的电邮</p>
	        				<p>课程邮件：点击率非常突出 达到一定的注册率</p>
	        			</a>
	        			<img src="home2/images/case07.jpg" />
	        			<p class="name">
	        				<i><img src="home2/images/case_photo.jpg" /></i>
	        				<a href="javascript:;">知名教育机构全国连锁</a>
	        			</p>
	        		</li>
	        	</ul>
    		</div>
    		
    	</div>
    	<div class="word_news">
    		<div class="title">
    			<h3>平台相关信息</h3>
    			<p>Platform related information</p>
    			<a href="javascript:;">more...</a>
    		</div>
    		<div class="list">
    			<ul>
    				<li><span></span><a href="javascript:;">别小看众包平台！网络众包是一种趋势</a></li>
    				<li><span></span><a href="javascript:;">众包平台让人人都可成为网赚兼职达人</a></li>
    				<li><span></span><a href="javascript:;">2016年众包模式在互联网为什么这么火？</a></li>
    				<li><span></span><a href="javascript:;">外包那些事儿</a></li>
    				<li><span></span><a href="javascript:;">众创、众包、众扶、众筹分别是什么意思？</a></li>
    				<li><span></span><a href="javascript:;">继猪八戒之后，MSO如何做成最强大脑</a></li>
    				<li><span></span><a href="javascript:;">众包亮相世界移动大会，MSO定义未来劳动力</a></li>
    				<li><span></span><a href="javascript:;">互动双赢：MSO引领众包新玩法</a></li>
    			</ul>
    		</div>
    	</div>
    </div>
    
    <div class="footer_bg_home"></div>
    <!-- jsp文件头和头部 -->
	<%@ include file="../footer2.jsp"%>
    <script>
    	jQuery(function(){
    		//平台相关信息序号
    		$(".word_news .list ul li span").each(function(i){
    			$(this).text('0' + (i+1));
    		});
    		
			//鼠标划过js
			$(".case_main .img_news .list ul li").hover(function(){
				$(this).find("a.img_hover").stop().slideDown();
			},function(){
				$(this).find("a.img_hover").stop().slideUp();
			});
			
			//遮罩层js
			$(".word_news .list ul li a").click(function(){
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