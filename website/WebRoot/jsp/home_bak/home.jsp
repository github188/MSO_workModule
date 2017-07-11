<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
	<script src="js/tj.js"></script>
	<style>
	
		#full-screen-slider {width:100%;height:350px;float:left;position:relative}
		#slides {display:block;width:100%;height:350px;list-style:none;padding:0;margin:0;position:relative}
		#slides li {display:block;width:100%;height:100%;list-style:none;padding:0;margin:0;position:absolute;}
		.slides_text { width: 1100px; margin: 0 auto; padding-left: 100px;}
		#slides li h1 { padding: 0; padding-top: 70px; font-size: 48px; letter-spacing: 4px;}
		#slides li h3 { padding: 0; padding-top: 15px; font-size: 20px;}
		#slides li p { padding: 0; padding-top: 65px; font-size: 20px;}
		#slides li a { color: #fff; display: inline-block; padding: 10px; margin-right: 20px; border-radius: 4px;}
		#slides .red { color: #A60000;}
		#slides .orange { color: #FF6F0F;}
		#slides .blue { color: #005AB5;}
		#slides .bg_blue { background: #005AB5;}
		#slides .bg_orange { background: #FF6F0F;}
		.white { color: #222;}
		#pagination {display:block;list-style:none;position:absolute;left:50%;bottom:30px;z-index:3;padding:5px 15px 5px 0;margin:0}
		#pagination li { display:block; list-style:none; width:20px; height:20px; float:left; margin-left:15px; border-radius:50%; background:#999;}
		#pagination li a {display:block;width:100%;height:100%;padding:0;margin:0;text-indent:-9999px;}
		#pagination li.current {background:#fff;}
		
		.bottom_line { border-bottom: 1px #dadada solid; width: 100%; clear: both; height: 600px; overflow: hidden;}
		.bottom_line.gray { background: #f6f6f6;}
		.info_box { overflow: hidden; position: relative; width: 1000px; height: 500px; padding: 100px; padding-bottom: 0; margin: 0 auto; clear: both;}
		.info_box.padding0 { padding-right: 0; width: 1100px;}
		.info_box img { display: block;}
		.info_box .hover_menu { position: absolute; left: 100px; bottom: 120px;}
		.info_box.info_right .hover_menu { right: 59px; left: auto;}
		.info_box .hover_menu li { float: left; text-align: center; margin-right: 60px; width: 80px; font-size: 16px;}
		.info_box.info_right .hover_menu li { margin-left: 60px; margin-right: 0;}
		.info_box .hover_menu li a { display: block; padding-top: 88px; color: #868686;}
		.info_box .hover_box { width: 100%; height: 100%; overflow: hidden;}
		.f_right { float: right;}
		.f_left { float: left;}
		.info_left h4,
		.info_right h4 { font-size: 26px; color: #515151; padding-top: 23px; font-weight: normal; height: 26px; line-height: 26px;}
		.info_left h2,
		.info_right h2 { font-size: 40px; color: #FF8635; padding: 18px 0 32px 0; height: 40px; line-height: 40px; font-weight: normal;}
		.info_left p,
		.info_right p { font-size: 14px; color: #5E5E5E; line-height: 24px;}
		.hide { display: none;}
		
		
		.scroll_news { height: 550px; padding-left: 8px; width: 592px; background: url(images/index1/pc11.png) 0 0 no-repeat;}
		.datelist { height: 75px;overflow: hidden; margin-left: 26px; width: 425px; border-top: 1px #d7d7d7 solid;}
		.datelist li{ height: 25px;line-height: 25px; font-size: 12px; padding: 0; padding-left: 20px; list-style-type: disc;}
		.scroll_news h4 { background: url(images/index1/u326.png) 0 27px no-repeat; padding-left: 15px; line-height: 28px; height: 28px; font-size: 12px; margin-left: 26px;}
		.scroll_news h4 span { display: inline-block; padding: 0 10px; font-weight: normal; color: #FF9535;}
		.last .f_right { width: 40%;}
		.last .info_box.info_right .hover_menu { right: 277px;}
		.bottom_line.hzhb { text-align: center; padding: 70px 0; height: auto;}
	    .bottom_line.hzhb ul{width: 1200px; margin: auto;}
		.bottom_line.hzhb li { display: inline-block; margin: 0 60px 20px 60px;}
		.bottom_line.hzhb h3,
		.bottom_line.fblc h3 { padding-bottom: 70px; font-size: 20px; letter-spacing: 2px;}
		.bottom_line.fblc h3 { padding-bottom: 10px; padding-top: 70px; letter-spacing: 0;}
		.bottom_line.fblc { text-align: center; height: 273px; overflow: hidden;}
		.nav1-1 a { background: url(images/index1/u555.png) 0 0 no-repeat;}
		.nav1-1 a:hover,
		.nav1-1.selected a { background: url(images/index1/u557.png) 0 0 no-repeat;}
		.nav1-2 a { background: url(images/index1/u560.png) 0 0 no-repeat;}
		.nav1-2 a:hover,
		.nav1-2.selected a { background: url(images/index1/u562.png) 0 0 no-repeat;}
		.nav1-3 a { background: url(images/index1/u565.png) 0 0 no-repeat;}
		.nav1-3 a:hover,
		.nav1-3.selected a { background: url(images/index1/u567.png) 0 0 no-repeat;}
		.nav2-1 a { background: url(images/index1/u570.png) 0 0 no-repeat;}
		.nav2-1 a:hover,
		.nav2-1.selected a { background: url(images/index1/u572.png) 0 0 no-repeat;}
		.nav2-2 a { background: url(images/index1/u575.png) 0 0 no-repeat;}
		.nav2-2 a:hover,
		.nav2-2.selected a { background: url(images/index1/u577.png) 0 0 no-repeat;}
		.nav2-3 a { background: url(images/index1/u580.png) 0 0 no-repeat;}
		.nav2-3 a:hover,
		.nav2-3.selected a { background: url(images/index1/u582.png) 0 0 no-repeat;}
		.nav2-4 a { background: url(images/index1/u585.png) 0 0 no-repeat;}
		.nav2-4 a:hover,
		.nav2-4.selected a { background: url(images/index1/u587.png) 0 0 no-repeat;}
		.nav3-1 a { background: url(images/index1/u592.png) 0 0 no-repeat;}
		.nav3-1 a:hover,
		.nav3-1.selected a { background: url(images/index1/u594.png) 0 0 no-repeat;}
		.nav3-2 a { background: url(images/index1/u602.png) 0 0 no-repeat;}
		.nav3-2 a:hover,
		.nav3-2.selected a { background: url(images/index1/u604.png) 0 0 no-repeat;}
		.nav3-3 a { background: url(images/index1/u597.png) 0 0 no-repeat;}
		.nav3-3 a:hover,
		.nav3-3.selected a { background: url(images/index1/u599.png) 0 0 no-repeat;}
		.nav4-1 a { background: url(images/index1/u607.png) 0 0 no-repeat;}
		.nav4-1 a:hover,
		.nav4-1.selected a { background: url(images/index1/u609.png) 0 0 no-repeat;}
		.nav4-2 a { background: url(images/index1/u612.png) 0 0 no-repeat;}
		.nav4-2 a:hover,
		.nav4-2.selected a { background: url(images/index1/u614.png) 0 0 no-repeat;}
	</style>
</head>




<body>
	<!-- jsp文件头和头部 -->
	<%@ include file="../header.jsp"%>
	<aside>
    <ul>
        <li class="not"><a href="tencent://message/?uin=2850840272&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>发包方</li>
        <li><a href="tencent://message/?uin=2850840278&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>接包方</li>
        <li class="scroll"><a href="javascript:" class="scroll bottom"></a></li>
    </ul>
	</aside>
    <div id="full-screen-slider">
		<ul id="slides">
			<li style="background:url('images/index1/u11.jpg') no-repeat center top;">
				<div class="slides_text">
					<h1 class="red">最近生意难做，业绩下滑？</h1>
					<h3>试试眸事以效果为导向的营销外包服务吧，立马提升业绩！</h3>
					<p><a class="bg_orange" href="home_toRegister" target="_blank">马上入驻 >></a>成为发包方</p>
				</div>
			</li>
			<li style="background:url('images/index1/u29.jpg') no-repeat center top;">
				<div class="slides_text">
					<h1 class="orange">您家的呼叫中心不赚钱？</h1>
					<h3>赶紧上MSO接单，轻松赚钱！</h3>
					<p class="white"><a class="bg_blue" href="home_toRegister" target="_blank">马上入驻 >></a>成为接包方</p>
				</div>
			</li>
			<li style="background:url('images/index1/u47.jpg') no-repeat center top;">
				<div class="slides_text">
					<h1 class="blue">“眸事”？谋士！</h1>
					<h3>——营销谋士，让销售变简单！</h3>
					<p><a class="bg_blue" href="home_toCustomer" target="_blank">了解更多 >></a>轻松做销售</p>
				</div>
			</li>
		</ul>
	</div>
	<div class="bottom_line">
		<div class="info_box info_left">
	    	<div class="hover_menu">
	    		<ul>
		    		<li class="nav1-1 selected"><a href="javescript:;">更省钱</a></li>
		    		<li class="nav1-2"><a href="javescript:;">更省时</a></li>
		    		<li class="nav1-3"><a href="javescript:;">更省力</a></li>
		    	</ul>
	    	</div>
	    	
	    	<div class="hover_box">
	    		<div class="box_info">
	    			<div class="f_left">
	    				<h4>还在为生意不好头痛？</h4>
		    			<h2>上眸事，让业绩飞起来！</h2>
		    			<p>看到销售部门不给力，是不是很焦虑？</p>
		    			<p>来眸事外包您的销售工作吧！</p>
		    			<p>通过外包，获取同样数量的订单，</p>
		    			<p>开支节省30%~50%。</p>
	    			</div>
	    			<div class="f_right"><img src="images/index1/pc01.png" /></div>
	    			
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left">
		    			<h4>还在为生意不好头痛？</h4>
		    			<h2>上眸事，让业绩飞起来！</h2>
		    			<p>业务开拓迟迟不见成效，是不是很着急？</p>
		    			<p>来眸事外包您的销售工作吧！</p>
		    			<p>在眸事上外包，获得同样数量的订单，</p>
		    			<p>耗时可能比自己开拓节省60%的时间。</p>
	    			</div>
	    			<div class="f_right"><img src="images/index1/pc02.png" /></div>
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left">
		    			<h4>还在为生意不好头痛？</h4>
		    			<h2>上眸事，让业绩飞起来！</h2>
		    			<p>业务员60%的时间都耗在找意向客户上，太浪费？</p>
		    			<p>来眸事外包您的销售工作吧！</p>
		    			<p>眸事直接为您挖掘意向客户，您只需要跟进就行。</p>
		    			<p>销售是不是变得简单、变得轻松了？</p>
	    			</div>
	    			<div class="f_right"><img src="images/index1/pc03.png" /></div>
	    		</div>
	    	</div>
	    </div>
	</div>
    
    <div class="bottom_line gray">
		<div class="info_box info_right padding0">
	    	<div class="hover_menu">
	    		<ul>
		    		<li class="nav2-1 selected"><a href="javescript:;">专属客服</a></li>
		    		<li class="nav2-2"><a href="javescript:;">专业顾问</a></li>
		    		<li class="nav2-3"><a href="javescript:;">全程托管</a></li>
		    		<li class="nav2-4"><a href="javescript:;">免费服务</a></li>
		    	</ul>
	    	</div>
	    	
	    	<div class="hover_box">
	    		<div class="box_info">
	    			<div class="f_left"><img src="images/index1/pc04.png" /></div>
	    			<div class="f_right">
	    				<h4>何必再四处寻觅外包商？</h4>
		    			<h2>上眸事，营销“谋士”解烦忧！</h2>
		    			<p>专属的客服，一对一的为您服务！</p>
		    			<p>5 X 8小时的在线时间，</p>
		    			<p>60分钟内极速处理的酣畅，</p>
		    			<p>让您不必等待！</p>
	    			</div>	
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left"><img src="images/index1/pc05.png" /></div>
	    			<div class="f_right">
	    				<h4>何必再四处寻觅外包商？</h4>
		    			<h2>上眸事，营销“谋士”解烦忧！</h2>
		    			<p>抛出的外包需求无人搭理？</p>
		    			<p>我们的销售顾问会为您提供问题诊断，</p>
		    			<p>并给出专业的解决方案，</p>
		    			<p>让您的需求瞬间成为香饽饽！</p>
	    			</div>	
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left"><img src="images/index1/pc06.png" /></div>
	    			<div class="f_right">
	    				<h4>何必再四处寻觅外包商？</h4>
		    			<h2>上眸事，营销“谋士”解烦忧！</h2>
		    			<p>还在花时间挑选接包方？</p>
		    			<p>还在费力的去验证外包方提交的成果？</p>
		    			<p>统统交给眸事啦，</p>
		    			<p>您只需要发布营销外包需求，</p>
		    			<p>剩下的事眸事帮您搞定。</p>
	    			</div>	
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left"><img src="images/index1/pc07.png" /></div>
	    			<div class="f_right">
	    				<h4>何必再四处寻觅外包商？</h4>
		    			<h2>上眸事，营销“谋士”解烦忧！</h2>
		    			<p>关键是，客服+顾问+增值服务，</p>
		    			<p>全部都免费呢！</p>
		    			<p>只需支付外包服务费，即可畅享平台提供的尊贵服务，</p>
		    			<p>诱人吧？还不马上行动？</p>
	    			</div>	
	    		</div>
	    	</div>
	    </div>
	</div>
    
    <div class="bottom_line">
		<div class="info_box info_left">
	    	<div class="hover_menu">
	    		<ul>
		    		<li class="nav3-1 selected"><a href="javescript:;">面向的客户</a></li>
		    		<li class="nav3-2"><a href="javescript:;">提供的服务</a></li>
		    		<li class="nav3-3"><a href="javescript:;">收费的方式</a></li>
		    	</ul>
	    	</div>
	    	
	    	<div class="hover_box">
	    		<div class="box_info">
	    			<div class="f_left">
	    				<h4>心动了吗？</h4>
		    			<h2>赶紧入驻眸事吧！</h2>
		    			<p>我们面向所有的客户，</p>
		    			<p>但以下行业更是我们的拿手好戏！</p>
		    			<p>①教育培训；/ ②汽车销售；/</p>
		    			<p>③金融业；  / ④互联网；  /</p>
		    			<p>⑤运营商增值服务 ……</p>
	    			</div>
	    			<div class="f_right"><img src="images/index1/pc08.png" /></div>
	    			
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left">
		    			<h4>心动了吗？</h4>
		    			<h2>赶紧入驻眸事吧！</h2>
		    			<p>眸事提供线上、线下的营销外包服务，</p>
		    			<p>可以极大助力您的营销努力：</p>
		    			<p>①意向挖掘； / ②市场调研； /</p>
		    			<p>③电话销售； / ④网络推广； /</p>
		    			<p>⑤其他外包服务  ……</p>
	    			</div>
	    			<div class="f_right"><img src="images/index1/pc09.png" /></div>
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left">
		    			<h4>心动了吗？</h4>
		    			<h2>赶紧入驻眸事吧！</h2>
		    			<p>目前，除了外包服务费，</p>
		    			<p>眸事提供的其他服务是免费的。</p>
		    			<p>待外包工作结束后，</p>
		    			<p>将由平台把服务费结算给接包方。</p>
	    			</div>
	    			<div class="f_right"><img src="images/index1/pc10.png" /></div>
	    		</div>
	    	</div>
	    </div>
	</div>
    
    <div class="bottom_line gray last">
		<div class="info_box info_right">
	    	<div class="hover_menu">
	    		<ul>
		    		<li class="nav4-1 selected"><a href="javescript:;">业务动态</a></li>
		    		<li class="nav4-2"><a href="javescript:;">成功案例</a></li>
		    	</ul>
	    	</div>
	    	
	    	<div class="hover_box">
	    		<div class="box_info">
	    			<div class="f_left">
	    				<div class="scroll_news">
	    					<h4>发包动态：<span>已发布订单：368个任务</span><span>632500个订单</span><span>结算22453750元</span></h4>
	    					<div class="datelist">
	    						
	    						<ul>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						        </ul>
	    					</div>
	    					<h4>接包动态：<span>已发布订单：368个任务</span><span>632500个订单</span><span>结算22453750元</span></h4>
					        <div class="datelist">
					        	
	    						<ul>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						            <li>意向挖掘：目标城市——深圳，订单数量——2700单</li>
						            <li>意向挖掘：目标城市——全国，订单数量——3500单</li>
						        </ul>
	    					</div>
	    				</div>
	    			</div>
	    			<div class="f_right">
	    				<h4>还在犹豫吗？</h4>
		    			<h2>看看别人的成功吧!</h2>
		    			<p>截止目前，眸事平台上：</p>
		    			<p>已发布368个任务，</p>
		    			<p>632500个订单，</p>
		    			<p>合计22453750元。</p>
	    			</div>	
	    		</div>
	    		<div class="box_info hide">
	    			<div class="f_left"><img src="images/index1/pc12.png" /></div>
	    			<div class="f_right">
	    				<h4>还在犹豫吗？</h4>
		    			<h2>看看别人的成功吧!</h2>
		    			<p>某教育机构在眸事上外包了意向挖掘服务后，</p>
		    			<p>销售额在2个月内飙升了60%，</p>
		    			<p>其业务总监李先生感概地说：</p>
		    			<p>在眸事平台上外包销售工作之后，</p>
		    			<p>获得的回报远超预期，太棒了!</p>
	    			</div>	
	    		</div>
	    	</div>
	    </div>
	</div>
    <div class="bottom_line fblc">
    	<h3>外包流程</h3>
    	<img src="images/index1/fblc.png" />
    </div>
    <div class="bottom_line gray hzhb">
    	<h3>合作伙伴</h3>
    	<ul>
    		<li><img src="images/index1/u502.png" width="250" height="95" /></li>
    		<li><img src="images/index1/u504.png" width="250" height="95" /></li>
    		<li><img src="images/index1/u2.png" width="250" height="95" /></li>
    		<li><img src="images/index1/u501.png" width="250" height="95" /></li>
    		<li><img src="images/index1/u503.png" width="250" height="95" /></li>
    		<li><img src="images/index1/u505.png" width="250" height="95" /></li>
    	</ul>
    </div>
    
    
    
    
    <!-- jsp文件尾部 -->
	<%@ include file="../footer.jsp"%>
    
</body>
</html>