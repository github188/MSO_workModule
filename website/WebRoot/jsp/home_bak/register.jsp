<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/tj.js"></script>
</head>

<style>
    @charset "utf-8";
    img{border:none;}
    li{list-style: none}
    html{width:100%;height:100%;}
    textarea{resize:none;}
    a{text-decoration: none}
   
    body{padding-top:90px;}
    div.register{padding:70px 160px 0px 160px;}
    div.register>div{width:983px;padding:0px 90px;position:relative;box-sizing:border-box;margin:auto;border:1px solid #ccc;border-bottom:none;box-shadow: -1px -1px 10px rgba(0,0,0,.3);}
    div.register>div div.titleCloud{width:187px;height:115px;font-size:14px;color:#333;position: absolute;left:-104px;background-image: url("images/register/u129.png");background-size:100% 100%;}
    div.register>div div.titleCloud p{position: absolute;left:36px;top:24px;line-height:16px;}
    div.register>div div.titleCloud p span{margin-left:20px;}
    div.register>div ul.progress{position: relative;background:url("images/register/u54.png") 0 64px repeat-x;}
    div.register>div ul.progress li{width:400px;float:left;text-align: center;padding:30px 0px 25px 0px;z-index: 2}
    div.register>div ul:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    
    div.register>div ul p{margin-bottom:10px;font-size:14px;color:#333;line-height: 19px; }
    div.register>div ul li p.p2 i{display:block;margin:0 auto;width:20px;height:20px;background:url("images/register/u56.png") no-repeat; }
    div.register>div ul li.active p.p2 i{background-image:url("images/register/u79.png") }
    div.register>div ul li.li1.active p.p2{background:url("images/register/u83.png") 0 5px repeat-x; background-size: 100px 10px;}
    
    div.registerWindow{border-top:1px solid #ccc;padding: 53px 0px 60px 0px;}
    div.registerWindow:after{content:""; display:block;width:0;height:0; visibility:hidden; clear:both;}
    div.registerWindow div.left{float:left;font-size:14px;color:#333;border-right:1px solid #ccc;width:523px;}
    div.registerWindow div.left table{margin:auto;font-size:13px;}
    div.registerWindow div.left table tr td.error input,
    div.registerWindow div.left table input[type=text].error {border:2px solid #ee4f4c;}
    div.registerWindow div.left table tr td.error p.title,
    div.registerWindow div.left table tr td:nth-of-type(2) p.title.error {color:#ee4f4c !important;}
    div.registerWindow div.left table tr td:nth-of-type(1){text-align:right;line-height: 25px;vertical-align: top;padding-right:10px;}
    div.registerWindow div.left table tr td:nth-of-type(2) p.title{margin:10px 0px;color:#777;}
    div.registerWindow div.left table input[type=checkbox],div.registerWindow div.left table input[type=radio]{margin-top:2px;margin-right:4px;}
    div.registerWindow div.left table input[type=text],div.registerWindow div.left table input[type=password]{width:315px;height:25px;box-sizing: border-box;}
    div.registerWindow div.left table input[type=submit]{width:315px;height:30px;background: rgb(255,108,11);border:none;border-radius: 4px;cursor: pointer;color:#fff;}
    div.registerWindow div.left table div.code{vertical-align:middle;display: inline-block;background:rgb(241,241,241);width:80px;height:30px;cursor: pointer;text-align: center;}
    div.registerWindow div.left table div.code p{line-height: 30px;font-size:14px;}
    div.registerWindow div.right{float:left;font-size:14px;width:276px;padding-top: 50px;text-align: center;}
    img.registerImg{display:block;margin:0px auto 55px auto;}
</style>
<body>

<!-- jsp文件头和头部 -->
<%@ include file="../header.jsp"%>

<div class="register">
    <div>
        <div class="titleCloud"><p>眸事——<br/><span>让销售变简单！</span></p></div>
        <ul class="progress">
            <li class="li1 active">
                <p>注册眸事账号</p>
                <p class="p2"><i></i></p>
                <p>第一步</p>
            </li>
            <li class="li4">
                <p>进入管理中心</p>
                <p class="p2"><i></i></p>
                <p>注册成功</p>
            </li>
        </ul>
        <div class="registerWindow">
            <div class="left">
                <form onsubmit="return submitPost();">
                    <table>
                        <tr>
                            <td style="padding-bottom:30px;"><span style="color:red;">*&nbsp;</span><span>注册类型：</span></td>
                            <td style="padding-bottom:30px;"><input type="radio" name="registerType" required id="input1" style="vertical-align: middle;"  value="1"/><label for="input1"><span style="vertical-align: middle;">发包方</span></label>&emsp;<input type="radio" name="registerType" id="input2" style="vertical-align: middle;" required value="2"/><label for="input2"><span style="vertical-align: middle;">接包方</span></label></td>
                        </tr>
                        <tr>
                            <td><span style="color:red;">*&nbsp;</span><span>用户名：</span></td>
                            <td><input type="text" required pattern="^[0-9a-zA-Z]*$" name="userName"/><p class="title" id="userNamep">提示：支持3位以上的字母与数字组合</p></td>
                        </tr>
                        <tr>
                            <td><span style="color:red;">*&nbsp;</span><span>请设置密码：</span></td>
                            <td><input type="passWord" minlength="6" required  pattern="^[0-9a-zA-Z]*$" name="passWord" id="doc-vld-pwd-1" /><p class="title">提示：请设置大于6位的数字和字母组合作为密码</p></td>
                        </tr>
                        <tr>
                            <td><span style="color:red;">*&nbsp;</span><span>请确认密码：</span></td>
                            <td><input type="passWord" minlength="6" required  pattern="^[0-9a-zA-Z]*$" data-equal-to="#doc-vld-pwd-1" name="passWord1"/><p class="title">提示：请确认您的密码</p></td>
                        </tr>
                        <tr>
                            <td><span style="color:red;">*&nbsp;</span><span>您的手机号：</span></td>
                            <td><input type="text" required pattern="^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$" name="phoneNumber"/><p id="phoneNumberp" style="height: 17px;" class="title"></p></td>
                        </tr>
               
                        <tr>
                            <td><span style="color:red;">*&nbsp;</span><span>您的姓名：</span></td>
                            <td><input type="text" required name="userRealName"/><p class="title">提示：请填写您的姓名，以便您的专属客服与您联系</p></td>
                        </tr>
                        
                        <tr>
                            <td><span style="color:red;">*&nbsp;</span><span>贵公司名称：</span></td>
                            <td><input type="text" required name="companyName"/><p class="title">提示：请填写贵公司名称，方便联络</p></td>
                        </tr>
                        
                        <tr>
                            <td><span>您的邀请码：</span></td>
                            <td><input type="text" name="inviteCode"/><p class="title">提示：如果是朋友推荐您来的，请填写邀请码</p></td>
                        </tr>
                        <tr>
                            <td><span style="color:red;">*&nbsp;</span><span>请输入验证码：</span></td>
                            <td><input type="text" required style="width:165px;margin-right:20px;vertical-align: middle;"name="code" /><div class="code" onclick="Newcode()"><p></p></div></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style="padding: 30px 0px;"><input type="checkbox" id="a"  checked required style="vertical-align: middle;" /><label for="a" style="vertical-align: middle;"><span>点击“注册”意味着您已阅读并接受</span></label><a href="" style="vertical-align: middle;">《眸事用户协议》</a></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="注&emsp;&emsp;&emsp;册"/></td>
                        </tr>
                    </table>
                </form>
            </div>
            <div class="right">
                <p><span>已有账号？</span>&emsp;<a href="home_toLogin" style="color:rgb(255,153,0);">直接登录>></a></p>
            </div>
        </div>
    </div>
</div>



<script>
    $(function(){
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
        //手机号码验证
        var mobile = $.trim($("input[name=phoneNumber]").val());
        var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
        $("input[name=phoneNumber]").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error");
                $(this).next().text("提示：请输入正确格式的手机号码");
                $(this).next().addClass("error");
            }else if($(this).val().length == 11 && !isMobile.exec(mobile)){
            	$(this).removeClass("error");
            	$(this).next().text("提示：这是您今后的登录账号");
            	$(this).next().removeClass("error");
            }else{
                $(this).addClass("error");
                $(this).next().text("提示：请输入正确格式的手机号码");
                $(this).next().addClass("error");
            }
        });
        $("input[name=phoneNumber]").focus(function(){
            $(this).removeClass("error");
            $(this).next().text("提示：这是您今后的登录账号");
        });
	        
        //用户名验证
        $("input[name=userName]").blur(function(){
            if($(this).val() == ''){
                $(this).parent().addClass("error");
            }else if($(this)[0].value.length<3){
                $(this).parent().addClass("error");
            }else if($(this)[0].value.length>20){
                $(this).parent().addClass("error");
                $(this).next().html("提示：请输入20位以下的用户名");
            }else{
                $(this).parent().removeClass("error");
            }
        });
        $("input[name=userName]").focus(function(){
            $(this).parent().removeClass("error");
        });
        
        
        
        
        //您的姓名户名验证
        $("input[name=userRealName]").blur(function(){
            if($(this).val() == ''){
                $(this).parent().addClass("error");
            }else{
                $(this).parent().removeClass("error");
            }
        });
        $("input[name=userRealName]").focus(function(){
            $(this).parent().removeClass("error");
        });
        
        
        
        
        //公司名验证
        $("input[name=companyName]").blur(function(){
            if($(this).val() == ''){
                $(this).parent().addClass("error");
            }else{
                $(this).parent().removeClass("error");
            }
        });
        $("input[name=companyName]").focus(function(){
            $(this).parent().removeClass("error");
        });
        //密码验证
        $("input[name=passWord]").blur(function(){
            if($(this).val() == ''){
                $(this).parent().addClass("error");
            }else if($(this)[0].value.length<6){
                $(this).parent().addClass("error");
            }else if($(this)[0].value.length>20){
                $(this).parent().addClass("error");
                $(this).next().html("提示：请输入20位以下的密码");
            }else{
                $(this).parent().removeClass("error");
            }
        });
        $("input[name=passWord]").focus(function(){
            $(this).parent().removeClass("error");
        });
        //密码
        $("input[name=passWord1]").blur(function(){
        	if($("input[name=passWord1]").val()!= $("input[name=passWord]").val()){
        		$(this).parent().addClass("error");
	        	$(this).next().html("提示：请确保两次密码一致");
	        }else{
	        	$(this).parent().removeClass("error");
	        	
	        }
        });
        $("input[name=passWord1]").focus(function(){
            $(this).parent().removeClass("error");
        });
        
        //验证码
        $("input[name=code]").blur(function(){
            if($(this).val() == ''){
                $(this).parent().addClass("error");
            }else if($(this).val().toLowerCase()!=$("div.code p").text().toLowerCase()){
                $(this).parent().addClass("error");
            }else{
                $(this).parent().removeClass("error");
            }
        });
        $("input[name=code]").focus(function(){
            $(this).parent().removeClass("error");
        });
    });
    //页面滚动时出现aside栏目
    $(window).scroll(function(){if($(this).scrollTop()<200){$("aside .scroll").removeClass("top").addClass("bottom");}else{$("aside .scroll").removeClass("bottom").addClass("top");}});
    var str="";
    var strsource=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        function Newcode(){
            str="";
            for(var i=0;i<4;i++) {
                var n = Math.floor(Math.random() * strsource.length);
                str = str + strsource[n];
            }
            $(".code p").html(str);
        }
        Newcode();
    function submitPost(){
        if(str.toLowerCase()!=$("input[name=code]").val().toLowerCase()){
            alert("请输入正确的验证码!");
            return false;
        }
        
//         var data={
//             "registerType":$("input[name=registerType]:checked").is("#input1")?"1":"2",  //1-发包方   2-接包方
//             "phoneNumber":$("input[name=phoneNumber]").val(),//手机号
//             "userName":$("input[name=userName]").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
//             "userRealName":$("input[name=userRealName]").val(),//您的姓名
//             "passWord":$("input[name=passWord]").val(),//密码(密文)用于登录(6-20 位    区分大小写)
//             "companyName":$("input[name=companyName]").val(),
//             "inviteCode":$("input[name=inviteCode]").val()//邀请码
//         };
        var data={
            "jfutype":$("input[name=registerType]:checked").is("#input1")?"1":"2",  //1-发包方   2-接包方
            "jfumobilephone":$("input[name=phoneNumber]").val(),//手机号
            "jfuname":$("input[name=userName]").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
            "realname":$("input[name=userRealName]").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
            "jfupassword":$("input[name=passWord]").val(),//密码(密文)用于登录(6-20 位    区分大小写)
            "compname":$("input[name=companyName]").val(),//公司名称
            "jfuinvitationcode":$("input[name=inviteCode]").val()//邀请码
        };
        $.post("user_toRegoster",data,function(date){
                if(date.code=="Y"){
            		console.log(date);
            	    $("div.register").html("<img src='images/register.png' class='registerImg'>");
            	     var par={
				           "jfutype":$("input[name=registerType]:checked").is("#input1")?"1":"2",  //1-发包方   2-接包方
				           "source":"2"  //1-意向客户新增   2-注册用户新增
				     };
            	    //修改event代办事项
            	    $.post("user_toModEvent",par,function(res){
            	        console.log(res);
            	    });
            	}else{
            	    alert(date.msg);
            	}
        });
        return false;
    }
</script>




<!-- jsp文件尾部和尾部 -->
<%@ include file="../footer.jsp"%>

</body>
</html>