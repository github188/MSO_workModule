<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<html lang="en">
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<style>

    
    .info1,.info2,.info3,.info4{border-bottom:1px solid #ccc;}
    .info1{height:310px;}
    .info1>div,.info2>div,.info3>div,form>div,header>div,footer>div{width:1200px;margin:0 auto;}
    .info1>div ul{display: table;height:310px;border:none;}
    .info1>div ul:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info1>div ul li{display:table-cell;border:none;vertical-align:middle;width:400px;text-align: center;}
    .info1>div ul li p.p2{width:400px;font-size:50px;color:#51A8FF;font-family:'Arial Normal', 'Arial' !important;}
    .info1>div ul li p.p3{font-size:14px;color:#868686;font-family:'Arial Normal', 'Arial' !important;}

    .info2{padding:40px 0px 30px 0px;background: #F6F6F6;}
    .info2 .title{font-size:28px;color:#333;text-align: center;margin-bottom:50px;}
    .info2>div{width:1000px;margin:auto;}
    .info2>div>ul{margin-left:44px;z-index:12312;}
    .info2>div>ul li{float:left;cursor:pointer;width:140px;height:40px;border:1px solid #ccc;background:#fff;z-index:2;text-align: center;line-height:40px;font-size:14px;color:#333;border-radius: 6px 6px 0px 0px ;}
    .info2>div>ul li.active{border-bottom-color:#f6f6f6;background: #f6f6f6;}
    .info2>div>ul:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info2>div>div{border-top:1px solid #ccc;margin-top:-1px;padding: 28px 44px;display:none;}
    .info2>div>div.active{display: block;}
    .info2>div>div:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info2 div.left{float:left;}
    .info2 div.right{float:right;}
    .info2 div.right p{margin:0px 0px 24px 0px;line-height:50px;border-bottom:1px solid rgb(255,153,0);color:#FF9900;font-size: 18px;font-weight: 700;}
    .info2 div.right div{width:630px;height:200px;margin-bottom:26px;font-size: 14px;box-sizing: border-box;}
    .info2 div.right ul{width:630px;margin:auto;font-size:0;}
    .info2 div.right ul li{display: inline-block;cursor:pointer;text-align: center;width:90px;height:36px;border:1px solid rgb(148,148,148);box-sizing:border-box;font-size:14px;line-height: 36px;border-radius: 18px;margin-left:30px;}
    .info2 div.right ul li.active{background: rgb(255,153,0);border-color:rgb(255,153,0);color:#fff;}

    .info3{padding: 60px 0px 70px 0px;}
    .info3 .title{font-size:28px;color:#333;text-align: center;margin-bottom:30px;}
    .info3 ul{width:1050px;margin:0 auto;display: table;}
    .info3 ul li{width:100%;height:65px;display: table;}
    .info3 ul li{background-image: url("images/customer-test/u223_line.png");background-repeat: no-repeat;}
    .info3 ul li.not{background: none;}
    .info3 ul li div{display:table-cell;vertical-align: middle;}
    .info3 ul li div:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info3 ul li div img{float:left;}
    .info3 ul li div p.p1 span.span1{font-size: 18px;color: #51A8FF;vertical-align: middle;margin:0 12px 0 20px;}
    .info3 ul li div p.p1 span.span2{font-size: 13px;color: #51A8FF;vertical-align: middle;}
    .info3 ul li div p.p2 span{font-size:14px;color:#333;margin-left:20px;}

    .info4{background:#f6f6f6;padding:60px 0px 75px 0px;}
    .info4 .title{font-size:28px;color:#333;text-align: center;margin-bottom:50px;}
    .info4 ul{width:1200px;margin:auto;text-align:center;display: table;}
    .info4 ul li{width:20%;display: table-cell;position:relative;font-size: 13px;color: #333333;}
    .info4 ul li img{margin-bottom:3px;}
    .info4 ul li i:not(.not){display:block;position:absolute;top:30.5px;width:10px;height:23px;background-image: url("images/customer/u279.png");}
    .form{padding:60px 0px 78px 0px;}
    .form .title{font-size:28px;color:#333;text-align: center;margin-bottom:10px;}
    .form .title2{font-size:14px;color:#333;text-align: center;}
    .form form{width:1200px;margin:0 auto;}
    .form form .radio{width:1200px;margin:50px auto 30px auto;}
    .form form .radio:after{content:""; display:block;width:0;height:0;visibility:hidden; clear:both;}
    .form form .radio li{float:left;width:300px;margin:0px auto 40px auto;}
    .form form .radio li i{display:block;margin:auto;width:150px;height:150px;cursor: pointer;}
    .form form .radio li input[type=radio]{display:none;}
    .form form .radio li:nth-of-type(4n+1){margin-left:0 !important;}
    .form form .radio .li1 i{background-image: url("images/customer/u527.png");}
    .form form .radio .li1 i:hover{background-image: url("images/customer/u529.png");}
    .form form .radio .li1 i.active{background-image: url("images/customer/u531.png");}
    .form form .radio .li2 i{background-image: url("images/customer/u534.png");}
    .form form .radio .li2 i:hover{background-image: url("images/customer/u536.png");}
    .form form .radio .li2 i.active{background-image: url("images/customer/u538.png");}
    .form form .radio .li3 i{background-image: url("images/customer/u541.png");}
    .form form .radio .li3 i:hover{background-image: url("images/customer/u543.png");}
    .form form .radio .li3 i.active{background-image: url("images/customer/u545.png");}
    .form form .radio .li4 i{background-image: url("images/customer/u548.png");}
    .form form .radio .li4 i:hover{background-image: url("images/customer/u550.png");}
    .form form .radio .li4 i.active{background-image: url("images/customer/u552.png");}
    .form form .radio .li5 i{background-image: url("images/customer/u555.png");}
    .form form .radio .li5 i:hover{background-image: url("images/customer/u557.png");}
    .form form .radio .li5 i.active{background-image: url("images/customer/u559.png");}
    .form form .radio .li6 i{background-image: url("images/customer/u562.png");}
    .form form .radio .li6 i:hover{background-image: url("images/customer/u564.png");}
    .form form .radio .li6 i.active{background-image: url("images/customer/u566.png");}
    .form form .radio .li7 i{background-image: url("images/customer/u569.png");}
    .form form .radio .li7 i:hover{background-image: url("images/customer/u571.png");}
    .form form .radio .li7 i.active{background-image: url("images/customer/u573.png");}
    .form form .radio .li8 i{background-image: url("images/customer/u576.png");}
    .form form .radio .li8 i:hover{background-image: url("images/customer/u578.png");}
    .form form .radio .li8 i.active{background-image: url("images/customer/u580.png");}
    .form form table{margin:0 auto 30px auto;font-size:14px;color:#333;}
    .form form table  td{padding-bottom:36px;min-width:8em;}
    .form form table  td span.star{color:red;margin-right:9px;vertical-align: middle;}
    .form form table input[type=radio]{vertical-align: middle;margin-top:1px;}
    .form form table input[type=radio]+span{vertical-align: middle;margin:0px 30px 0px 4px;}
    .form form table input[type=text],.form form table input[type=password],.form form table textarea{width:920px;min-height:35px;box-sizing: border-box;padding-left:5px;}
    .form form input[type=submit]{display:block;width:600px;height:40px;border:1px solid rgb(255,134,53);background:rgb(255,134,53);outline:none;border-radius:20px;cursor:pointer;color:#fff;margin:0 auto;box-shadow:0px 0px 10px rgba(0,0,0,.3)}
	.form img.win{display: block;margin:auto;}
    .banner { background: url(images/customer/u179.jpg) center top no-repeat; height: 350px; overflow: hidden; text-indent: 100%;}
    td { position: relative;}
    td span.error { position: absolute; left: 0; top: 40px; color: #f00;}
    #outsourcingDemand td span.error { position: absolute; left: 0; top: 165px; color: #f00;}
    .form form table input[type=text].error_red,
    .form form table textarea.error_red { border: 1px #f00 solid;}
</style>
<body>




	<!-- jsp文件头和头部 -->
	<%@ include file="../header.jsp"%>
	<aside>
        <ul>
            <li class="not"><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll1').offset().top-90});">我要<br/>外包</a></li>
            <li><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll2').offset().top-90});">外包<br/>流程</a></li>
            <li><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll3').offset().top-90});">成功<br/>案例</a></li>
            <li><a href="tencent://message/?uin=2850840272&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a></li>
            <li class="scroll"><a href="javascript:" class="scroll bottom"></a></li>
        </ul>
    </aside>
    <div class="banner"><img src="images/customer/u179.png" style="width:100%;" alt="banner"/></div>
    <div class="info1">
        <div>
            <ul>
                <li>
                    <p><img src="images/customer-test/u226.png"/></p>
                    <p class="p2 jumbo" id="myTargetElement">368</p>
                    <p class="p3">个任务</p>
                </li>
                <li>
                    <p><img src="images/customer-test/u228.png"/></p>
                    <p class="p2 jumbo" id="myTargetElement2">632,500</p>
                    <p class="p3">个订单</p>
                </li>
                <li>
                    <p><img src="images/customer-test/u230.png"/></p>
                    <p class="p2 jumbo" id="myTargetElement3">22,453,750</p>
                    <p class="p3">元交易额</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="info2" >
        <div>
            <p class="title">眸事提供的营销外包服务</p>
                <ul>
                    <li class="active">电话营销</li>
                    <li>网络营销</li>
                </ul>
            <div class="length1 active">
                <div class="left"><img src="images/customer/u264.png"/></div>
                <div class="right">
                    <p>我们提供以效果为导向的营销外包服务，能给您带来看得见的效果。</p>
                    <div>发包方提供获取信息需求，<br/>
                        平台整理成为标准话术并制做成问卷形式，<br/>
                        通过接包方专业的客服团队进行调研，最终获得发包方所需的信息内容。
                    </div>
                    <ul>
                        <li class="active">市场调研</li>
                        <li>意向挖掘</li>
                        <li>意向调研</li>
                        <li>电话销售</li>
                        <li>售后服务</li>
                    </ul>
                </div>
            </div>
            <div class="length2">
                <div class="left"><img src="images/customer/u350.png"/></div>
                <div class="right">
                    <p>媒体广告太贵？引流虽多转换太差？不妨试试以营销效果说话的推广方式吧！</p>
                    <div>通过网络推广,<br/>产生的注册用户经过核实后结算。</div>
                    <ul>
                        <li class="active">CPA</li>
                        <li>CPS</li>
                        <li>EDM</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="info3" id="scroll3">
        <div>
            <p class="title">客户感言</p>
            <div>
                <ul>
                    <li class="not">
                        <div>
                            <img src="images/customer-test/u166.png">
                            <p class="p1"><span class="span1">吴先生</span><span class="span2">某培训机构老板</span></p>
                            <p class="p2"><span>实在是太意外了，在眸事上外包之后，2个月内业绩提升了60%。</span></p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="images/customer-test/u168.png">
                            <p class="p1"><span class="span1">施先生</span><span class="span2">某知名教育机构业务总监</span></p>
                            <p class="p2"><span>现在生意难做，就抱着死马当活马医的心态，到眸事上做了个外包，没想到一下子多了200多个订单，简直太给力了！</span></p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="images/customer-test/u170.png">
                            <p class="p1"><span class="span1">卫小姐</span><span class="span2">某汽车销售机构负责人</span></p>
                            <p class="p2"><span>我们的行业竞争很激烈，所以销售部门拼尽了力气去发展客户，也不见什么起色。于是就尝试在眸事上做了一下外包，谁知一试就试上了瘾，效果实在太棒了！</span></p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="images/customer-test/u172.png">
                            <p class="p1"><span class="span1">方先生</span><span class="span2">某线上金融机构负责人</span></p>
                            <p class="p2"><span>之前没想到能用外包来提高业绩，后来听说了眸事，口碑也不错，就外包了一部分业务，没想到获得了令人意外的增长，以后一定加大这方面的投入。</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="info4" id="scroll2">
        <div>
            <p class="title">外包其实很简单</p>
            <ul>
                <li >
                    <i class="not"></i>
                    <img src="images/customer/u2.png"/>
                    <p>提交需求</p>
                </li>
                <li>
                    <i></i>
                    <img src="images/customer/u4.png"/>
                    <p>客服跟进</p>
                </li>
                <li>
                    <i></i>
                    <img src="images/customer/u6.png"/>
                    <p>委托协议/免费发布</p></li>
                <li>
                    <i></i>
                    <img src="images/customer/u8.png"/>
                    <p>订单上线</p></li>
                <li>
                    <i></i>
                    <img src="images/customer/u10.png"/>
                    <p>订单执行并验收</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="form" id="scroll1">
        <div>
            <p class="title">我要外包</p>
            <p class="title2">请先选择您所在的行业</p>
            <form onsubmit="return submitPost()">
                <ul class="radio" id="outsourcingType">
                    <li class="li1"><i value="线下教育培训行业"></i><input name="a" type="radio"/></li>
                    <li class="li2"><i value="线上教育培训行业"></i><input name="a" type="radio"/></li>
                    <li class="li3"><i value="汽车及后服务行业"></i><input name="a" type="radio"/></li>
                    <li class="li4"><i value="电商平台"></i><input name="a" type="radio"/></li>
                    <li class="li5"><i value="房产"></i><input name="a" type="radio"/></li>
                    <li class="li6"><i value="金融行业"></i><input name="a" type="radio"/></li>
                    <li class="li7"><i value="运营商增值业务"></i><input name="a" type="radio"/></li>
                    <li class="li8"><i value="其他"></i><input name="a" type="radio"/></li>
                    
                </ul>
                <table border="0">
                    <tr id="businessType">
                        <td><span class="star">*</span>业务类型：</td>
                        <td>
                            <input type="radio" required name="classb"/><span>意向挖掘</span>
                            <input type="radio" required name="classb"/><span>市场调研</span>
                            <input type="radio" required name="classb"/><span>意向调研</span>
                            <input type="radio" required name="classb"/><span>电话销售</span>
                            <input type="radio" required name="classb"/><span>售后服务</span>
                            <input type="radio" required name="classb"/><span>CPA</span>
                            <input type="radio" required name="classb"/><span>CPS</span>
                            <input type="radio" required name="classb"/><span>EDM</span>
                            <input type="radio" required name="classb"/><span>其他</span>
                        </td>
                    </tr>
                    <tr id="userName">
                        <td><span class="star">*</span>您的称呼：</td>
                        <td>
                        	<input class="nickName" type="text" placeholder="请填写你您姓名" required/>
                        	<span class="error"></span>
                        </td>
                    </tr>
                    <tr id="phoneNumber">
                        <td><span class="star">*</span>您的手机：</td>
                        <td>
                        	<input type="text" class="phone" required pattern="^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$" placeholder="请填写您的手机号" />
                        	<span class="error"></span>
                        </td>
                    </tr>
                    <tr id="companyName">
                        <td><span class="star">*</span>公司名称：</td>
                        <td>
                        	<input type="text" class="companyName" placeholder="请填写贵公司的名称" required/>
                        	<span class="error"></span>
                        </td>
                    </tr>
                    <tr id="outsourcingDemand">
                        <td style="vertical-align: top;"><span class="star">*</span>您的需求：</td>
                        <td><textarea class="need" cols="30" rows="10" style="resize: vertical;max-height:500px;" placeholder="请详细描述您的外包需求" required></textarea><span class="error"></span></td>
                    </tr>
                    <tr id="inviteCode">
                        <td>您的邀请码：</td>
                        <td><input type="text" placeholder="如果是朋友介绍您的，请填写邀请码，会有惊喜哦" /></td>
                    </tr>
                </table>
                <input type="submit" value="马上提交需求，您的专属客服会在一个工作日内联系您"/>
            </form>
        </div>
    </div>
    <script>
        function submitPost(){
        	
        	var businessTypetext=$("#businessType input:checked+span").text();
        	var businessTypeValue="1";
            
            if(businessTypetext=='意向挖掘'){
            	businessTypeValue="1";
            }
            if(businessTypetext=='市场调研'){
            	businessTypeValue="2";
            }
            if(businessTypetext=='意向调研'){
            	businessTypeValue="3";
            }
            if(businessTypetext=='电话销售'){
            	businessTypeValue="4";
            }
            if(businessTypetext=='售后服务'){
            	businessTypeValue="5";
            }
            if(businessTypetext=='CPA'){
            	businessTypeValue="6";
            }
            if(businessTypetext=='CPS'){
            	businessTypeValue="7";
            }
            if(businessTypetext=='其他'){
            	businessTypeValue="8";
            }
        	
            
            var outsourcingTypeText=$("#outsourcingType i.active").attr("value");
            var outsourcingTypeValue="1";
            if(outsourcingTypeText=="线下教育培训行业"){
            	outsourcingTypeValue="1";
            }
            if(outsourcingTypeText=="线上教育培训行业"){
            	outsourcingTypeValue="2";
            }
            if(outsourcingTypeText=="汽车及后服务行业"){
            	outsourcingTypeValue="3";
            }
            if(outsourcingTypeText=="电商平台"){
            	outsourcingTypeValue="4";
            }
            if(outsourcingTypeText=="房产"){
            	outsourcingTypeValue="5";
            }
            if(outsourcingTypeText=="金融行业"){
            	outsourcingTypeValue="6";
            }
            if(outsourcingTypeText=="运营商增值业务"){
            	outsourcingTypeValue="7";
            }
            if(outsourcingTypeText=="其他"){
            	outsourcingTypeValue="8";
            }
            var data={
                "registerType":"1",//发包方
                "fitmobilephone":$("#phoneNumber input").val(),//手机号码				
                "companyName":$("#companyName input").val(),//公司名称
                "fitname":$("#userName input").val(),//您的称呼
                "fiid":outsourcingTypeValue,//$("#outsourcingType i.active").attr("value"),//行业
                "fstid":businessTypeValue,//$("#businessType input:checked+span").text(),//业务类型
                "fitdemand":$("#outsourcingDemand textarea").val(),//您的需求
                "fitinvitationcode":$("#inviteCode input").val()//您的邀请码
            };
            $.post("intentiontourists_tofAddJson",data,function(date){
            	if(date.code=="Y"){
            		console.log(date);
            		$("div.form").html("<img src='images/win.png' class='win'/>");
            		
           	     	var par={
				           "jfutype":"1",  //1-发包方   2-接包方
				           "source":"1"  //1-意向客户新增   2-注册用户新增
				    };
               	    //修改event代办事项
            	    $.post("user_toModEvent",par,function(res){
            	        console.log(res);
            	    });
            	}
            });
            return false;
        }
        
        
        
        //数字滚动插件
        var options = {
           useEasing : true,
           useGrouping : true,
           separator : ',',
           decimal : '.',
           prefix : '',
           suffix : ''
        };
        var demo = new CountUp("myTargetElement", 0, 368, 0, 2.5, options);
        var demo2 = new CountUp("myTargetElement2", 0, 632500, 0, 2.5, options);
        var demo3 = new CountUp("myTargetElement3", 0, 22453750, 0, 2.5, options);
        $(window).load(function(){
                demo.start();
                demo2.start();
                demo3.start();
        });
        var flag=true;
        
        $(function() {
        	//表单验证
        	//公司名称验证
	        $("input.companyName").blur(function(){
	            if($(this).val() == ''){
	                $(this).addClass("error_red");
	                $(this).next().text("请填写您的公司名称");
	            }else{
	                $(this).removeClass("error_red");
	                $(this).next().text("");
	            }
	        });
	        $("input.companyName").focus(function(){
	            $(this).removeClass("error_red");
	            $(this).next().text("");
	        });
	        //联系人验证
	        $("input.nickName").blur(function(){
	            if($(this).val() == ''){
	                $(this).addClass("error_red");
	                $(this).next().text("请填写您的称呼");
	            }else{
	                $(this).removeClass("error_red");
	                $(this).next().text("");
	            }
	        });
	        $("input.nickName").focus(function(){
	            $(this).removeClass("error_red");
	            $(this).next().text("");
	        });
	        //手机验证
	        var mobile = $.trim($("input.phone").val());
	        var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
	        $("input.phone").blur(function(){
	            if($(this).val() == ''){
	                $(this).addClass("error_red");
	                $(this).next().text("请填写您的联系方式");
	            }else if($(this).val().length == 11 && !isMobile.exec(mobile)){
	            	$(this).removeClass("error_red");
	            	$(this).next().text("");
	            }else{
	                $(this).addClass("error_red");
	                $(this).next().text("请输入正确的手机号码");
	            }
	        });
	        $("input.phone").focus(function(){
	            $(this).removeClass("error_red");
	            $(this).next().text("");
	        });
	        //需求验证
	        $("textarea.need").blur(function(){
	            if($(this).val() == ''){
	                $(this).addClass("error_red");
	                $(this).next().text("请填写您的需求");
	            }else{
	                $(this).removeClass("error_red");
	                $(this).next().text("");
	            }
	        });
	        $("textarea.need").focus(function(){
	            $(this).removeClass("error_red");
	            $(this).next().text("");
	        });
        });
        
        $(function() {
            //列表切换
            $("div.info2>div>ul li").hover(function(){
                $(this).addClass("active").siblings().removeClass("active");
                if($(this).index()==0){
                    $("div.length1").addClass("active").siblings().removeClass("active");
                }else{
                    $("div.length2").addClass("active").siblings().removeClass("active");
                }
            });
            //内容切换
            $("div.length1 div.right ul li").hover(function(){
                $(this).addClass("active").siblings().removeClass("active");
                if($(this).index()==0){
                    $("div.length1 div.right div")[0].innerHTML="发包方提供获取信息需求，<br/>平台整理成为标准话术并制做成问卷形式，<br/>通过接包方专业的客服团队进行调研，最终获得发包方所需的信息内容。";
                }else if($(this).index()==1){
                    $("div.length1 div.right div")[0].innerHTML="通过平台精准数据库资源对用户深层挖掘，<br/>最终获得意向客户。";
                }else if($(this).index()==2){
                    $("div.length1 div.right div")[0].innerHTML="为企业量身打造意向客户调研,<br/>并推动意向客户上门,<br/>创造销售机会。";
                }else if($(this).index()==3){
                    $("div.length1 div.right div")[0].innerHTML="通过对发包方产品分析,设计好标准的销售模板,对接包方进行统一培训,保证销售效果。";
                }else if($(this).index()==4){
                    $("div.length1 div.right div")[0].innerHTML="根据发包方内部会员消费信息，对发包方会员进行售后回访，以及时获取用户的使用信息。";
                }
            });
            //内容切换
            $("div.length2 div.right ul li").hover(function(){
                $(this).addClass("active").siblings().removeClass("active");
                if($(this).index()==0){
                    $("div.length2 div.right div")[0].innerHTML="通过网络推广,<br/>产生的注册用户经过核实后结算。";
                }else if($(this).index()==1){
                    $("div.length2 div.right div")[0].innerHTML="通过网络推广,<br/>产生的销售额经过核实后结算。";
                }else if($(this).index()==2){
                    $("div.length2 div.right div")[0].innerHTML="通过精准数据库资源,<br/>结合专业的电邮推广系统进行精准EDM推广。";
                }
            });
            //用图片替代radio
            $("ul.radio i").click(function () {$(this).next().click();});
            //radio状态切换时图片进行相应切换
            $("ul.radio input[type=radio]").change(function () {
                if ($(this).attr("checked") == "checked") {
                    $(this).prev().addClass("active").parent().siblings().find("i").removeClass("active");
                }
            });
            //页面滚动时出现aside栏目
            $(window).scroll(function(){if($(this).scrollTop()<300){$("aside .scroll").removeClass("top").addClass("bottom");}else{$("aside .scroll").removeClass("bottom").addClass("top");}});
            //返回顶部和跳到底部切换
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
        });
    </script>
    <!-- jsp文件尾部和尾部 -->
	<%@ include file="../footer.jsp"%>
</body>
</html>