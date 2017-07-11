<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/tj.js"></script>
</head>

<style>
    div.banner img{display: block;}
    .info1,.info2,.info3,.info4,.info5{border-bottom:1px solid #ccc;}
    .info1>div,.info2>div,.info3>div,.info4>div,.info5>div,.info6>div,form>div,header>div,footer>div{width:1200px;margin:0 auto;}
    .info1{padding: 82px 0px 83px 0px;text-align: center;}
    .info1>div>p.title{font-size: 18px;color:#333;font-weight: 700;margin-bottom:80px;}
    .info1>div ul:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info1>div ul li{width:400px;float:left;color:#333;font-size:13px;}
    .info1>div ul li img{margin-bottom:20px;}

    .info2{padding: 80px 0px 70px 0px;text-align: center;background: #F6F6F6;}
    .info2>div>p.title{font-size: 18px;color:#333;font-weight: 700;margin-bottom:45px;}
    .info2>div ul{text-align: center;font-size:0;}
    .info2>div ul:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info2>div ul li{display:inline-block;margin:16px;}
    .info2>div ul li img{display: block;}

    .info3{padding: 40px 0px 30px 0px;}
    .info3 .title{font-size:28px;color:#333;text-align: center;margin-bottom:50px; font-weight: bold;}
    .info3>div{width:1000px;margin:auto;}
    .info3>div>ul{margin-left:44px;z-index:12312;}
    .info3>div>ul li{float:left;cursor:pointer;width:140px;height:40px;border:1px solid #ccc;background:#fff;z-index:2;text-align: center;line-height:40px;font-size:14px;color:#333;border-radius: 6px 6px 0px 0px ;}
    .info3>div>ul li.active{border-bottom-color:#fff;}
    .info3>div>ul:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info3>div>div{border-top:1px solid #ccc;margin-top:-1px;padding: 28px 44px;display:none;}
    .info3>div>div.active{display: block;}
    .info3>div>div:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info3 div.left{float:left;}
    .info3 div.right{float:right;}
    .info3 div.right>p{margin: 0px 0px 24px 0px;line-height: 50px;border-bottom: 1px solid rgb(255,153,0);color: #FF9900;font-size: 18px;font-weight: 700;}
    .info3 div.right div{width:630px;height:200px;margin-bottom:26px;font-size: 14px;box-sizing: border-box;}
    .info3 div.right ul{width:630px;margin:auto;font-size:0;}
    .info3 div.right ul li{display: inline-block;cursor:pointer;text-align: center;width:90px;height:30px;border:1px solid rgb(143,143,143);box-sizing:border-box;font-size:14px;line-height: 28px;border-radius: 8px;margin-left:30px;}
    .info3 .length1 .right li{width:110px;height:36px;border-radius:18px;line-height:36px;margin-left:20px;}
    .info3 .length2 .right li{width:70px;height:36px;border-radius:18px;line-height:36px;margin-left:12px;}
    .info3 div.right ul li.active{background: rgb(255,153,0);border-color: rgb(255,153,0);color:#fff;}

    .info4{padding: 92px 0px;background: #F6F6F6;}
    .info4 .title{font-size:18px;color:#333;text-align: center;margin-bottom:60px; font-weight: bold;}
    .info4 ul{width:1200px;margin:0 auto;display: table;}
    .info4 ul li{width:1095px;height:68px;display: table;}
    .info4 ul li{background: url("images/customer-test/u223_line.png") repeat-x; background-size: 1000px 1px;margin:auto;}
    .info4 ul li.not{background: none;}
    .info4 ul li div{display:table-cell;vertical-align: middle;}
    .info4 ul li div:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    .info4 ul li div img{float:left;}
    .info4 ul li div p.p1 span.span1{font-size: 18px;color: #51A8FF;vertical-align: middle;margin:0 12px 0 20px;}
    .info4 ul li div p.p1 span.span2{font-size: 13px;color: #51A8FF;vertical-align: middle;}
    .info4 ul li div p.p2 span{font-size:14px;color:#333;margin-left:20px;}

    .info5{padding:60px 0px 80px 0px;}
    .info5 .title{font-size:18px;color:#333;text-align: center;margin-bottom:50px; font-weight: bold;}
    .info5 ul{width:1200px;margin:auto;text-align:center;display: table;}
    .info5 ul li{width:20%;display: table-cell;position:relative;font-size: 13px;color: #333333;float:left;}
    .info5 ul li img{display:block;margin:0px auto 20px auto;}
    .info5 ul li i:not(.not){display:block;position:absolute;top:30.5px;width:10px;height:23px;background-image: url("images/customer/u158.png");}

    .info6{background:#f6f6f6;padding:60px 0px 80px 0px;}
    .info6 .title{font-size:18px;color:#333;text-align: center;margin-bottom:50px;font-weight: bold;}
    .info6 ul{width:1200px;margin:auto;text-align:center;display: table;}
    .info6 ul li{width:20%;display: table-cell;position:relative;font-size: 13px;color: #333333;float:left;}
    .info6 ul li img{display:block;margin:0px auto 20px auto;}
    .info6 ul li i:not(.not){display:block;position:absolute;top:30.5px;width:9px;height:20px;background-image: url("images/supplier/u10.png");}
    .form{padding:90px 0px;}
    .form .title{font-size:18px;color:#333;text-align: center;font-weight:700;margin-bottom:26px;}
    .form .title2{font-size:13px;color:#333;text-align: center;}
    .form form{width:1200px;margin:0 auto;}
    .form form .radio{width:1200px;margin:50px auto 70px auto;}
    .form form .radio:after{content:""; display:block;width:0;height:0;visibility:hidden; clear:both;}
    .form form .radio li{float:left;width: 300px}
    .form form .radio li i{display:block;margin:auto;width:150px;height:150px;cursor: pointer;}
    .form form .radio li input[type=radio]{display:none;}
    .form form .radio .li1{margin-left:0 !important;}
    .form form .radio .li1 i{background-image: url("images/supplier/u65.png");}
    .form form .radio .li1 i:hover{background-image: url("images/supplier/u67.png");}
    .form form .radio .li1 i.active{background-image: url("images/supplier/u69.png");}
    .form form .radio .li2 i{background-image: url("images/supplier/u72.png");}
    .form form .radio .li2 i:hover{background-image: url("images/supplier/u74.png");}
    .form form .radio .li2 i.active{background-image: url("images/supplier/u76.png");}
    .form form .radio .li3 i{background-image: url("images/supplier/u51.png");}
    .form form .radio .li3 i:hover{background-image: url("images/supplier/u53.png");}
    .form form .radio .li3 i.active{background-image: url("images/supplier/u55.png");}
    .form form .radio .li4 i{background-image: url("images/customer-test/u3.png");}
    .form form .radio .li4 i:hover{background-image: url("images/customer-test/u5.png");}
    .form form .radio .li4 i.active{background-image: url("images/customer-test/u7.png");}
    .form form table{margin:0 auto 30px auto;font-size:13px;color:#333;}
    .form form table  td{padding-bottom:36px;min-width:8em;}
    .form form table  td span.star{color:red;margin-right:9px;vertical-align: middle;}
    .form form table input,.form form table textarea{width:920px;min-height:35px;box-sizing: border-box;padding-left:5px;}
    .form form input[type=submit]{display:block;width:600px;height:40px;border:1px solid #FF6C0B;background:#FF6C0B;outline:none;border-radius:20px;cursor:pointer;color:#fff;margin:0 auto;box-shadow:0px 0px 10px rgba(0,0,0,.3)}
    .form img.win{display: block;margin:auto;}
    #preloader {
        background-image: url(images/customer/u178.png);background-image: url(images/customer-test/u10.png);background-image: url(images/customer-test/u12.png);background-image: url(images/customer-test/u14.png);background-image: url(images/customer-test/u191.png);background-image: url(images/customer-test/u193.png);background-image: url(images/customer-test/u195.png);background-image: url(images/customer-test/u205.png);background-image: url(images/customer-test/u207.png);background-image: url(images/customer-test/u209.png);background-image: url(images/customer-test/u198.png);background-image: url(images/customer-test/u200.png);background-image: url(images/customer-test/u202.png);background-image: url(images/customer-test/u3.png);background-image: url(images/customer-test/u5.png);background-image: url(images/customer-test/u7.png);width: 0px; height: 0px; display: inline;}
	.banner { background:url(images/supplier/u277.jpg) center top no-repeat; text-indent:100%; overflow:hidden; height:350px; text-align:center;}
	td { position: relative;}
    td span.error { position: absolute; left: 0; top: 40px; color: #f00;}
    .form form table input[type=text].error_red { border: 1px #f00 solid;}
</style>
<body>

<!-- jsp文件头和头部 -->
<%@ include file="../header.jsp"%>

<i id="preloader"></i>
<aside>
    <ul>
        <li class="not"><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll1').offset().top-90});">我要<br/>入驻</a></li>
        <li><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll2').offset().top-90});">入驻<br/>流程</a></li>
        <li><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll3').offset().top-90});">竞拍<br/>模式</a></li>
        <li><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll4').offset().top-90});">激励<br/>政策</a></li>
        <li><a href="javascript:" onclick="$('html,body').animate({'scrollTop':$('#scroll5').offset().top-90});">成功<br/>案例</a></li>
        <li><a href="tencent://message/?uin=2850840278&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png" style="width:30px;height:30px;"/></a></li>
        <li class="scroll"><a href="javascript:" class="scroll bottom"></a></li>
    </ul>
</aside>

<div class="banner"></div>
<div class="info1">
    <div>
        <p class="title">欢迎各类营销机构入驻</p>
        <ul>
            <li>
                <p><img src="images/supplier/u132.png"/></p>
                <p>呼叫中心</p>
            </li>
            <li>
                <p><img src="images/supplier/u130.png"/></p>
                <p>网络推广机构</p>
            </li>
            <li>
                <p><img src="images/supplier/u128.png"/></p>
                <p>地推机构</p>
            </li>
        </ul>
    </div>
</div>
<div class="info2">
    <div>
        <p class="title">从此无需到处奔波找订单</p>
        <ul>
            <li><img src="images/u1.png"/></li>
            <li><img src="images/u2.png"/></li>
            <li><img src="images/u3.png"/></li>
            <li><img src="images/u4.png"/></li>
            <li><img src="images/u5.png"/></li>
            <li><img src="images/u6.png"/></li>
        </ul>
    </div>
</div>

<div class="info3"  id="scroll4">
    <div>
        <p class="title">令人怦然心动的激励政策</p>
        <ul>
            <li class="active">超强的激励政策</li>
            <li>全面的扶持体系</li>
        </ul>
        <div class="length1 active">
            <div class="left"><img src="images/supplier/u373.png"/></div>
            <div class="right">
                <p>还在发愁呼叫中心没单做，不赚钱，不稳定吗？来眸事吧，想不赚钱都难。</p>
                <div>
                    <img src='images/table.png'>
                <p>&emsp;备注：以上等级每个自然季度调整一次，年度佣金返还只算达到钻石级别的那些季度。</p>
                </div>
                <ul>
                    <li class="active">分级激励政策</li>
                    <li>悬赏激励政策</li>
                </ul>
            </div>
        </div>
        <div class="length2">
            <div class="left"><img src="images/supplier/u405.png"/></div>
            <div class="right">
                <p>能力差，产能不足，挣不到钱？眸事丰富的扶持体系让这些都不成问题！</p>
                <div>
                    <p style="font-weight: 700;">目的：迅速解决接包方的发展瓶颈！</p>
                    <br/>培训类型：远程培训、现场培训
                    <br/>条件：接包方入驻后
                    <br/>培训内容：产品知识、电话礼仪、话术技巧等
                    <br/>
                    <br/>备注：远程培训（电话/网络）申请后48小时内响应，现场培训需提前7个工作日申请。
                </div>
                <ul>
                    <li class="active">项目培训</li>
                    <li>运营培训</li>
                    <li>CRM提供</li>
                    <li>话费优惠</li>
                    <li>精准用户</li>
                    <li>专属客服</li>
                    <li>管理外训</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
<div class="info4" id="scroll5">
    <div>
        <p class="title">用户评价</p>
        <div>
            <ul>
                <li class="not">
                    <div>
                        <img src="images/supplier/u104.png">
                        <p class="p1"><span class="span1">张先生</span><span class="span2">某呼叫中心老板</span></p>
                        <p class="p2"><span>我们中心不大，很多客户都不愿意把单给我们，为了多找点订单，把自己搞得好累。无意中得知了眸事这个平台，试了一下之后，简直欣喜若狂，再也不怕没单做了。</span></p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="images/supplier/u106.png">
                        <p class="p1"><span class="span1">杜先生</span><span class="span2">某呼叫中心老板</span></p>
                        <p class="p2"><span>眸事上不但单子多，价格也很好，这下不怕没钱赚了！</span></p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="images/supplier/u108.png">
                        <p class="p1"><span class="span1">韩小姐</span><span class="span2">某呼叫中心老板</span></p>
                        <p class="p2"><span>眸事太牛了。居然可以免费派人上门培训，学了好多经验，之前客服产能好低，现在高了一大截，光这点就值了。</span></p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="images/supplier/u110.png">
                        <p class="p1"><span class="span1">李先生</span><span class="span2">某呼叫中心老板</span></p>
                        <p class="p2"><span>我们中心是新建的，入驻眸事后，非但订单不愁，还能使用他们的CRM，享受到极便宜的电话费，而且还提供了全方位的培训，一下子就赚了钱，太感谢了。</span></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

<div class="info5" id="scroll2">
    <div>
        <p class="title">入驻流程</p>
        <ul>
            <li >
                <i class="not"></i>
                <img src="images/supplier/u20.png"/>
                <p>提交需求</p>
            </li>
            <li>
                <i></i>
                <img src="images/supplier/u26.png"/>
                <p>客服跟进</p>
            </li>
            <li>
                <i></i>
                <img src="images/supplier/u22.png"/>
                <p>委托协议/免费发布</p></li>
            <li>
                <i></i>
                <img src="images/supplier/u24.png"/>
                <p>订单上线</p></li>
            <li>
                <i></i>
                <img src="images/supplier/u28.png"/>
                <p>订单执行并验收</p>
            </li>
        </ul>
    </div>
</div>

<div class="info6" id="scroll3">
    <div>
        <p class="title">竞拍模式</p>
        <ul>
            <li >
                <i class="not"></i>
                <img src="images/supplier/u2.png"/>
                <p>竞拍订单</p>
            </li>
            <li>
                <i></i>
                <img src="images/supplier/u6.png"/>
                <p>专员审核</p>
            </li>
            <li>
                <i></i>
                <img src="images/supplier/u264.png"/>
                <p>执行订单</p></li>
            <li>
                <i></i>
                <img src="images/supplier/u8.png"/>
                <p>上传成果</p></li>
            <li>
                <i></i>
                <img src="images/supplier/u4.png"/>
                <p>质检并验收后结款</p>
            </li>
        </ul>
    </div>
</div>

<div class="form" id="scroll1">
    <div>
        <p class="title">我要入驻</p>
        <p class="title2">请先选择您所在的机构类别</p>
        <form onsubmit="return submitPost()">
            <ul class="radio" id="agencyType">
<!--                 <li class="li1"><i value="1"></i><input name="a" type="radio"/></li> -->
<!--                 <li class="li2"><i value="2"></i><input name="a" type="radio"/></li> -->
<!--                 <li class="li3"><i value="3"></i><input name="a" type="radio"/></li> -->
<!--                 <li class="li4"><i value="4"></i><input name="a" type="radio"/></li> -->
                <li class="li1"><i value="呼叫中心"></i><input name="a" type="radio"/></li>
                <li class="li2"><i value="网络推广机构"></i><input name="a" type="radio"/></li>
                <li class="li3"><i value="地推机构"></i><input name="a" type="radio"/></li>
                <li class="li4"><i value="其他"></i><input name="a" type="radio"/></li>
            </ul>
            <table border="0">
                <tr id="userName">
                    <td><span class="star">*</span>您的称呼：</td>
                    <td>
                    	<input type="text" class="nickName" placeholder="请填写你您姓名" required/>
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
                <tr id="agencyName">
                    <td><span class="star">*</span>机构名称：</td>
                    <td>
                    	<input type="text" class="companyName" placeholder="请填写您所在的机构名称" required/>
                    	<span class="error"></span>
                    </td>
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
	    var agencyTypeText=$("#agencyType i.active").attr("value");
	    var agencyTypeValue="1";
	    if(agencyTypeText=="呼叫中心"){
	    	agencyTypeValue="1";
	    }
	    if(agencyTypeText=="网络推广机构"){
	    	agencyTypeValue="2";
	    }
	    if(agencyTypeText=="地推机构"){
	    	agencyTypeValue="3";
	    }
	    if(agencyTypeText=="其他"){
	    	agencyTypeValue="4";
	    }
        var data={
//             "registerType":"2",//接包方
//             "agencyType":$("#agencyType i.active").attr("value"),//对应   接包方机构类别(j_mechanism_category)jmcid	
//             "userName":$("#userName input").val(),//称呼-姓名
//             "phoneNumber":$("#phoneNumber input").val(),//手机号码
//             "agencyName":$("#agencyName input").val(),//机构名称
//             "jitinvitationcode":$("#inviteCode input").val()//邀请码
            "registerType":"2",//接包方
            "jmcid":agencyTypeValue,//$("#agencyType i.active").attr("value"),//对应   接包方机构类别(j_mechanism_category)jmcid	
            "jitname":$("#userName input").val(),//称呼-姓名
            "jitmobilephone":$("#phoneNumber input").val(),//手机号码
            "jitorganization":$("#agencyName input").val(),//机构名称
            "jitinvitationcode":$("#inviteCode input").val()//邀请码
        };
        $.post("intentiontourists_tojAddJson",data,function(date){
            	if(date.code=="Y"){
            		console.log(date);
            		$("div.form").html("<img src='images/win.png' class='win'/>");
            		var par={
				           "jfutype":"2",  //1-发包方   2-接包方
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
    var flag=true;
    
    $(function() {
        	//表单验证
        	//机构名称验证
	        $("input.companyName").blur(function(){
	            if($(this).val() == ''){
	                $(this).addClass("error_red");
	                $(this).next().text("请填写您的机构名称");
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
        });
    
    $(function() {
        //列表切换
        $("div.info3>div>ul li").hover(function(){
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
                $("div.length1 div.right div")[0].innerHTML="<img src='images/table.png'><p>&emsp;备注：以上等级每个自然季度调整一次，年度佣金返还只算达到钻石级别的那些季度。</p>";
            }else if($(this).index()==1){
                $("div.length1 div.right div")[0].innerHTML="我们会不定期的在悬赏区发布一些特殊的订单，<br/>这些订单的回报将远远超出普通订单，<br/>如果您足够幸运，<br/>执行这些订单将可以让您乐开了花。";
            }
        });
        //内容切换
        $("div.length2 div.right ul li").hover(function(){
            $(this).addClass("active").siblings().removeClass("active");
            if($(this).index()==0){
                $("div.length2 div.right div").html('<p style="font-weight: 700;">目的：迅速解决接包方的发展瓶颈！</p><br/>培训类型：远程培训、现场培训<br/>条件：接包方入驻后<br/>培训内容：产品知识、电话礼仪、话术技巧等<br/> <br/>备注：远程培训（电话/网络）申请后48小时内响应，现场培训需提前7个工作日申请。');
            }else if($(this).index()==1){
                $("div.length2 div.right div").html('<p style="font-weight: 700;">目的：提高接包方的管理技能！</p><br/>培训类型：远程培训、现场培训<br/>条件：接包方入驻后<br/>培训内容：管理技能、专业知识等<br/> <br/>备注：远程培训（电话/网络）申请后48小时内响应，现场培训需提前7个工作日申请。');
            }else if($(this).index()==2){
                $("div.length2 div.right div").html('<p style="font-weight: 700;">目的：让您以最低的成本，使用行业最尖端的科技迅速提升坐席产能！</p><br/>面向对象：全体接包方<br/>条件：接包方入驻后<br/>激励内容：提供呼叫中心拨号系统，高效监控话务员KPI以及业绩的工具，同时进行质检监控<br/> ');
            }else if($(this).index()==3){
                $("div.length2 div.right div").html('<p style="font-weight: 700;">目的：让接包方以最低的成本，获得最多的回报！</p><br/>面向对象：全体接包方<br/>条件：接包方入驻后<br/>激励内容：提供稳定的电话线路，以及低于市场价的话费<br/> ');
            }else if($(this).index()==4){
                $("div.length2 div.right div").html('<p style="font-weight: 700;">目的：让接包方能迅速开展工作！</p><br/>面向对象：全体接包方<br/>条件：接包方入驻后<br/>激励内容：最多提供三个月的精准用户资源<br/> ');
            }else if($(this).index()==5){
                $("div.length2 div.right div").html('<p style="font-weight: 700;">目的：及时处理接包方的问题！</p><br/>面向对象：全体接包方<br/>条件：接包方入驻后<br/>激励内容：提供专属客服，5×8小时的在线无缝响应<br/>');
            }else if($(this).index()==6){
                $("div.length2 div.right div").html('<p style="font-weight: 700;">目的：让接包方能进一步发展！</p><br/>面向对象：全体接包方<br/>条件：接包方已竞拍订单<br/>激励内容：每年举办一次进阶培训（免费参加），邀请业内资深专家为大家传道解惑<br/>');
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