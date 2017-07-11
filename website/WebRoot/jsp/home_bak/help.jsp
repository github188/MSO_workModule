<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<style>
    .info1{height:310px;background: #F6F6F6;}
    .info1>div,.info2>div,.info3>div,form>div,header>div,footer>div{width:1200px;margin:0 auto;}
    aside{position: fixed;top:200px;right:0;}
    aside ul{padding: 10px;background: rgba(237,237,237,.5);border:1px solid #ccc;}
    aside ul li{width:40px;border-top:1px solid #fff;text-align: center;font-size: 13px;line-height:16px;color:#333;padding:4px 0px;box-sizing: border-box;}
    aside ul li.not{border-top:none;}
    aside ul li a{color:#333;}
    aside ul li a.scroll{display:block;margin:auto;width:33px;height:33px;background-size: 100% 100%;}
    aside ul li a.scroll.top{background-image: url("images/customer/u178.png");}
    aside ul li a.scroll.bottom{background-image: url("images/customer/u162.png");}
    header{z-index:2;background: #f2f2f2;position: fixed;top:0;width:100%; z-index: 5;}
    header>div{display:table;height:90px;font-size:0;padding: 12px 10px;box-sizing: border-box;}
    header ul.logo{width:247px;}
    header img.logo{width:247px;}
    header ul{display:table-cell;vertical-align: middle;}
    header ul.list{padding-left:100px;}
    header li{font-size: 16px;float:left;margin-right:35px;position: relative;}
    header li.other{margin-right:20px;}
    header li a{color:#5e5e5e;}
    header li a:hover{color:rgb(255,134,53);}
    header li a.active{color:rgb(255,134,53);}
    header li.list:hover ul{display: block;}
    header li.list ul{ position:absolute; left:50%; padding:7px 0; box-sizing: border-box; display: none; width:148px; border:1px solid #d4d4d4; background: rgba(255,255,255,0.8);
    transform:translate(-50%,0%);-webkit-transform:translate(-50%,0%);-moz-transform:translate(-50%,0%);-o-transform:translate(-50%,0%);}
    header li.list ul li{padding:5px;width:100%;box-sizing:border-box;text-align: center;font-size:13px;line-height:16px;color:#333;}
    header li a.login{display:block;margin-top:-4px;background:#fff;border:1px solid #FF8635;line-height:30px;text-align:center;width:60px;height:30px;border-radius: 10px;}
    header li a.login:hover{color:#fff;background: #FF8635;}
    header li a.register{display:block;margin-top:-4px;color:#fff;background:#2492FF;line-height:30px;text-align:center;width:62px;height:32px;border-radius: 10px;}
    header li a.register:hover{background: #0080FF;}
    footer{background: rgb(51,51,51);}
    footer>div{padding: 33px 100px;box-sizing: border-box;}
    footer>div:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    footer .left{float: left;}
    footer .left ul{float:left;margin-right:136px;color:#fff;}
    footer .left ul .title{font-weight: 700;font-size: 15px;margin-bottom:16px;line-height: 18px;}
    footer .left ul li{color:#e4e4e4;font-size:13px;font-weight: 400;margin-bottom:6px;line-height: 16px;}
    footer .right{float: right;}
    footer .right>p{font-weight: 700;font-size: 14px;color: #FF9933;line-height:18px;margin-bottom:16px;}
    footer .right>div{color:#fff;text-align: center;background: rgb(152,152,152);width:337px;height:85px;padding: 10px 0px;box-sizing: border-box;}
    footer .right>div img{position:relative;left:65px;float:left;margin-left:10px;height:65px;}
    footer .right>div .p1{font-size: 16px;line-height:19px;margin-bottom:10px;}
    footer .right>div .p2{font-size: 20px;font-weight:700;margin-bottom:10px;}
    .copyright{height:150px;padding-top:43px;box-sizing:border-box;font-size: 16px;color: #666666;text-align: center;line-height: 16px;}
    .copyright .p1{margin-bottom:15px;}
    
    .banner { border-top: 1px #cbcbcb solid; background: url(images/help/u0.png) center top no-repeat #e6e6e6; height: 150px; text-indent: 100%; overflow: hidden;}
    .box_content { width: 1112px; padding-left: 88px; margin: 0 auto;}
    .tab { overflow: hidden; padding-top: 18px;}
	.tab_menu { float: left;}
	.tab_menu li span,
	.tab_menu li a { font-size: 14px; border-bottom: 1px #e4e4e4 solid; width: 104px; height: 41px; line-height: 41px; text-indent: 22px; display: block; color: #000;}
	.tab_menu li span { font-weight: bold; font-size: 18px;}
	.tab_menu li.hover,
	.tab_menu li.selected { font-weight: bold; background: url(images/about/u3.png) 9px 17px no-repeat;}
	.tab_menu li.hover a,
	.tab_menu li.selected a { color: #000; font-weight: normal;}
	.tab_menu li.hover a.hover,
	.tab_menu li.selected a.selected { color: #ff9955;}
	.tab_box { float: left; min-height: 650px; padding-bottom: 35px; width: 815px; padding-left: 80px; padding-top: 4px; background: url(images/about/icon.gif) 34px 17px no-repeat; color: #515151;}
	.tab_box h2 { font-size: 18px; font-weight: 600; padding: 8px 0;}
	.tab_box p { font-size: 14px; padding: 10px 0;}
	.tab_box p.red { color: #FF0000; margin-top: 30px;}
	.tab_box p a { color: #3366FF;}
	.hide{display:none}
	.orange, .tab_box .orange { color: #ff9955;}
	.blue { color: #3366FF;}
	footer .left ul li a { color:#e4e4e4;}
</style>
<body>
<aside>
    <ul>
        <li class="not"><a href="tencent://message/?uin=2850840272&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>发包方</li>
        <li><a href="tencent://message/?uin=2850840278&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>接包方</li>
        <li class="scroll"><a href="javascript:" class="scroll bottom"></a></li>
    </ul>
</aside>


	<!-- jsp文件头和头部 -->
   <%@ include file="../header.jsp"%>

    <div class="banner"><img src="images/help/u316.png" ></div>
    <div class="box_content">
    	<div class="tab">
		    <div class="tab_menu">
		        <ul>
		            <li class="selected">
		            	<span>新手指南</span>
		            	<a href="javascript:;" class="selected">如何注册？</a>
		            	<a href="javascript:;">如何登录？</a>
		            </li>
		            <li>
						<span>发包方</span>
		            	<a href="javascript:;">如何入驻？</a>
		            	<a href="javascript:;">如何发包？</a>
		            	<a href="javascript:;">如何打款？</a>
		            	<a href="javascript:;">如何托管？</a>
		            	<a href="javascript:;">如何结算？</a>
		            </li>
		            <li>
						<span>接包方</span>
		            	<a href="javascript:;">如何入驻？</a>
		            	<a href="javascript:;">如何竞拍？</a>
		            	<a href="javascript:;">结果上传？</a>
		            	<a href="javascript:;">平台质检？</a>
		            	<a href="javascript:;">如何结算？</a>
		            </li>
		        </ul>
		    </div>
		    <div class="tab_box">
		        <div>
		        	<h2>如何注册？</h2>
		        	<p>打开<a href="http://www.mshuoke.com">http://www.mshuoke.com</a>，点击右上角的“<span class="blue">注册</span>”按钮，根据提示填写相关的内容，如下图：</p>    
		        	<p><img src="images/help/u29.png" ></p>
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何登录？</h2>
		        	<p>注册完成后，点击眸事首页顶部右上角“<span class="blue">登录</span>”按钮，并填写相应信息既可登录。</p> 
		        	<P><img src="images/help/u41.png" ></P>
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何入驻？</h2>
		        	<p>注册时注册类型选择“发包方”：</p>  
		        	<P><img src="images/help/u51.png" ></P>
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何发包？</h2>
		        	
		        	<p>资料完善之后，点击“订单发布”，根据提示填写相关信息：</p>  
		        	<P><img src="images/help/u63.png" ></P>
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何打款？</h2>
		        	<p>相关细节建议与您的专属客服联系，或者点击“<a href="tencent://message/?uin=2850840272&Site=&menu=yes">联系客服</a>”获得更多帮助。</p>  
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何托管？</h2>
		        	<p>在眸事平台，您完全可以做一个甩手掌柜，发包之后，我们会对每一个环节都进行监控，确保您的需求能够得到很好的满足。而且，我们会给您配备一位专属的客服，在您遇到问题的时候，会随时解决您的困惑。</p>  
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何结算？</h2>
		        	<p>结算时间和结算金额，是由发布订单时填写的相应信息决定的；目前我们的结算方式分为<span class="orange">有效数据单量</span>和<span class="orange">质检单量合格结算</span>两种。</p>  
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何入驻？</h2>
		        	<p>注册时注册类型选择“接包方”</p>  
		        	<P><img src="images/help/u99.png" ></P>
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何竞拍？</h2>
		        	<p>点击“竞拍订单”，然后选择您要竞拍的订单，按要求填写相关信息，如下图：</p> 
		        	<P><img src="images/help/u111.png" ></P>
		        	<p>点击提交后，会有专属客服审核您竞拍的订单，如果没有问题，客服会引导您完成剩下的步骤。</p>  
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>结果上传？</h2>
		        	
		        	<p>完成随机数量订单后，可上传订单成果。点击“我的订单”，然后点击“订单上传”，上传了数据和录音文件之后，即可点击提交，如下图：</p>  
		        	<P><img src="images/help/u123.png" ></P>
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>平台质检？</h2>
		        	<p>平台每日会反馈前一天接包方上传资料的质检情况，并提供不合格明细报告供接包方下载。</p>  
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>
		        <div class="hide">
		        	<h2>如何结算？</h2>
		        	<p>平台将根据订单单价和合格成果数量每月结算一次。</p>  
		        	<p class="red">如果以上内容未解决您的问题，请<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系</a>在线客服为您解答。</p>
		        </div>

		    </div>
		</div>
		
		
    </div>

    <script type="text/javascript" >
	$(function(){
		var $div_li =$("div.tab_menu ul li a");
		$div_li.click(function(){
			$(this).parent().addClass("selected").siblings().removeClass("selected"); 
			$(this).addClass("selected").siblings().removeClass("selected");
			var index =  $div_li.index(this); 
			$("div.tab_box > div").eq(index).show().siblings().hide();
		}).hover(function(){
			$(this).parent().addClass("hover");
			$(this).addClass("hover");
		},function(){
			$(this).parent().removeClass("hover");
			$(this).removeClass("hover");
		});
        //页面滚动时出现aside栏目
        $(window).scroll(function(){if($(this).scrollTop()<100){$("aside .scroll").removeClass("top").addClass("bottom");}else{$("aside .scroll").removeClass("bottom").addClass("top");}});
        //返回顶部和跳到底部切换
        var flag=true;
        $("aside .scroll").click(function(){
            if(flag){
                flag=false;
                if($(this).hasClass("top")){
                    $("html,body").animate({"scrollTop":0},500,"swing",function(){
                        $("aside .scroll").removeClass("top").addClass("bottom");
                        flag=true;
                    });
                }else{
                    $("html,body").animate({"scrollTop":$("body").height()},500,"swing",function(){
                        $("aside .scroll").removeClass("bottom").addClass("top");
                        flag=true;
                    });
                }
            }
        });
	})
</script>
	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../footer.jsp"%>
</body>
</html>