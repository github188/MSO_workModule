<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>MSO-眸事网，国内专业营销服务外包平台</title>
	<meta name="description" content="MSO（眸事网）-国内专业营销服务外包平台，获客线索总交易量高达632500条！上游发包方企业可自由定价，行业包括线上/线下教育培训行业、金融行业、汽车行业、汽车后服务市场、电商平台、运营商增值服务等领域，下游以网络营销、电话营销、地推机构等营销机构为主，平台坐拥10000万以上精准数据用户，月均发包量达80000以上，目前已成为各领域权威人士认可的最专业的营销服务外包机构！">
	<meta name="keyword" content="">
    <script src="js/tj.js"></script>
    <script src="js/main.js"></script>
    <script type="text/javascript">
</script>
</head>

<script type="text/javascript">
	function getRef(){
		var referrer1=document.referrer;
    	var jsondata={
			  "referrer":referrer1,
		};
     	var jsonobj = JSON.stringify(jsondata);//JSON.parse(jsondata)  
     	jQuery.ajax({
             type : 'POST',
             contentType : 'application/json',
             url : '/1_5/visitRecord',
             processData : false,
             dataType : 'text',
             data : jsonobj,
             success : function(res) {
//                alert("新增成功！");
             },
             error : function(XMLHttpRequest,textStatus,errorThrown) {
//                 alert(XMLHttpRequest.status);
//                 alert(XMLHttpRequest.readyState);
//                 alert(textStatus);
             }
         });
     }
</script>
<body onload="getRef()">
    <!-- jsp文件头和头部 -->
	<%@ include file="../header2.jsp"%>
    <div class="home_banner">
    	<div class="home_banner_content">
    		<p class="img"><img src="home2/images/slideshow01.png" /></p>
    		<ul>
	    	     <c:if test="${user.jfutype=='1'}">
	    			<li class="icon01"><a href="customer_lj_DemandManagement1">
		    			<h3>发布需求</h3>
		    			<p>轻松一“键”发布需求，<br />海量线索手到擒来！</p>
		    		</a></li>
		    		<li class="icon02"><a href="javascript:">
		    			<h3>竞拍订单</h3>
		    			<p>一步入驻，快速接单，<br />百万收入唾手可得！</p>
		    		</a>
		    		</li>
	    	     </c:if>
	    			  
	    			  
	    	     <c:if test="${user.jfutype=='2'}">
	    			<li class="icon01"><a href="javascript:">
		    			<h3>发布需求</h3>
		    			<p>轻松一“键”发布需求，<br />海量线索手到擒来！</p>
		    		</a>
		    		</li>
		    		<li class="icon02"><a href="supplier_lj_demandHall2">
		    			<h3>竞拍订单</h3>
		    			<p>一步入驻，快速接单，<br />百万收入唾手可得！</p>
		    		</a>
		    		</li>
	    		</c:if>
	    		
	    		<c:if test="${user.jfutype!='2'&&user.jfutype!='1'}">
    			<li class="icon01"><a href="customer_lj_DemandManagement1">
    				<h3>发布需求</h3>
    				<p>轻松一“键”发布需求，<br />海量线索手到擒来！</p>
    			</a></li>
    			<li class="icon02"><a href="supplier_lj_demandHall2">
    				<h3>竞拍订单</h3>
    				<p>一步入驻，快速接单，<br />百万收入唾手可得！</p>
    			</a>
    			</li>
    			</c:if>
    			
    		</ul>
    	</div>
    </div>
    <div class="home_advantage">
    	<div class="home_advantage_content">
    		<h2>眸事优势</h2>
    		<h4>What advantage eyes</h4>
    		<p class="info">还在苦苦寻找意向客户么？上眸事，一切如此简单</p>
    		<ul>
    			<li class="icon01">
    				<h3>更省钱</h3>
    				<p>轻松获取意向客户与销售线索，<br />自由定价，最高可节省<br />35%~50%的获客成本。</p>
    			</li>
    			<li class="icon02">
    				<h3>更省时</h3>
    				<p>极速注册，轻松获取海量销售线索，<br />划定时间，不完成部分不付钱。<br />让一切尽在您的掌握中</p>
    			</li>
    			<li class="icon03">
    				<h3>更省力</h3>
    				<p>平台独有全程托管模式，<br />撮合交易-进度监控-成果质检全程服务，<br />让您轻松就做“甩手掌柜”！</p>
    			</li>
    		</ul>
    	</div>
    </div>
    <div class="home_process">
    	<div class="home_process_content">
    		<script type="text/javascript" src="home2/js/slideshow.js"></script>
    		<div class="comiis_wrapad" id="slideContainer">
	        <div id="frameHlicAe" class="frame cl">
	            <div class="temp"></div>
	            <div class="block">
	                <div class="cl">
	                    <ul class="slideshow" id="slidesImgs">
	                        <li><img src="home2/images/slideshow01.jpg" width="1200" height="700" alt="" /></li>
	                        <li><img src="home2/images/slideshow02.jpg" width="1200" height="700" alt="" /></li>
	                    </ul>
	                </div>
	                <div class="slidebar" id="slideBar">
	                    <ul>
	                        <li class="on">1</li>
	                        <li>2</li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
	    <script>
	        SlideShow(2000);
	    </script>

    	</div>
    </div>
<!--     <div class="home_cooperation"> -->
<!--     	<div class="home_cooperation_content"> -->
<!--     		<h2>我们的客户</h2> -->
<!--     		<h4>Our cooperation</h4> -->
<!--     		<p class="info">专业，让我们成为客户首选</p> -->
<!--     		<ul> -->
<!--     			<li><img src="home2/images/client01.jpg" /></li> -->
<!--     			<li><img src="home2/images/client02.jpg" /></li> -->
<!--     			<li><img src="home2/images/client03.jpg" /></li> -->
<!--     			<li class="clear"></li> -->
<!--     			<li><img src="home2/images/client04.jpg" /></li> -->
<!--     			<li><img src="home2/images/client05.jpg" /></li> -->
<!--     			<li><img src="home2/images/client06.jpg" /></li> -->
<!--     			<li class="clear"></li> -->
<!--     			<li><img src="home2/images/client07.jpg" /></li> -->
<!--     			<li><img src="home2/images/client08.jpg" /></li> -->
<!--     			<li><img src="home2/images/client09.jpg" /></li> -->
<!--     		</ul> -->
<!--     	</div> -->
<!--     </div> -->
    <div class="home_package">
    	<div class="home_package_content">
    		<div class="title">眸事提供的营销外包服务</div>
    		<div class="content">
    			<ul>
	    			<li class="icon01">
	    				<h3>电话营销</h3>
	    				<p>销售线索挖掘，市场调研，电话销售，售后服务<br />我们样样拿手，效果看得见</p>
	    			</li>
	    			<li class="icon02">
	    				<h3>网络推广</h3>
	    				<p>普通网络推广方式引流虽多转化太差？<br />试试以营销效果说话的CPA/CPS/EDM推广吧</p>
	    			</li>
	    			<li class="icon03">
	    				<h3>地推推广</h3>
	    				<p>在指定地域进行推广，可以精准拜访您的目标客户，<br />获取最新鲜有效的销售线索</p>
	    			</li>
	    		</ul>
    		</div>
    	</div>
    </div>
    <div class="home_about">
    	<div class="home_about_content">
    		<div class="left">
    			<h1>about us</h1>
    			<p>MSO（眸事）营销服务外包平台致力打造成为营销服务外包行业的第三方交易平台，实现发包方在平台发布推广需求；接包方在平台下单，订单执行全程都有专业的工作人员进行1V1服务</p>
    			<p>最优秀的服务团队：数十位超过10年行业经验的的管理者，2000多名3年以上行业经验的优秀员工；打造专业级的自主对接平台， 以专业营销，合作运营的模式成为客户切实提高营销的成功率</p>
    			<a href="home2_toAbout">more</a>
    		</div>
    		<div class="right"><img src="home2/images/img_home.png" /></div>
    	</div>
    </div>
    
        <div class="footer_bg_home"></div>
        <!-- jsp文件头和头部 -->
		<%@ include file="../footer2.jsp"%>
    <script>
    	jQuery(function(){
    		console.log("探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n加入眸事，加入营销服务外包平台，你，可以.....\n");
    		console.log("加入我们：http://dwz.cn/2ulrj6");
    	})
    </script>
</body>
</html>