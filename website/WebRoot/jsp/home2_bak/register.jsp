<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>注册</title>
    <script src="js/tj.js"></script>
</head>
<body id="login" style="background:url('home2/images/registerBack.jpg') no-repeat;background-size: 100% 100%;background-position-y: 100px;" onkeydown="on_return(event)">
    <!-- jsp文件头和头部 -->
	<%@ include file="../header2.jsp"%>
    <div class="login register" style="width:800px;height:668px;margin-left:-400px;margin-top:-210px;padding:30px 30px 50px 30px;" >
        <p style="text-align: left;margin-bottom:12px;">欢迎您注册成为眸事网成员，如果您已拥有账户，则可在此 <a href="home2_toLogin">登录</a></p>
        <hr style="border:none;border-top:1px solid #706e6b;border-bottom:1px solid #514f4e;margin:0;">
        <div>
            <table>
                <tr>
                    <td style="padding:12px 0px 16px 0px;width:112px;"><label ><span style="color:#ff0000">*</span>注册类型&nbsp;:</label></td>
                    <td ><input type="radio" name="registerType"  id="registerType"  onclick="setValue(1)">&nbsp;&nbsp;<span >发包方</span>&emsp;
                    <input type="radio" name="registerType" onclick="setValue(2)"> &nbsp;&nbsp;<span>接包方</span>
                    <input type="hidden" name="registerTypeValue"  id="registerTypeValue"  value="">
                    </td>
                </tr>
                <tr >
                    <td style="padding-bottom:12px;"><label><span style="color:#ff0000">*</span>用<span style="margin:0px 0.5em;">户</span>名&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="text" name="userName" id="userNames" placeholder="提示：这是您今后的登录账号"></td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;"><label><span style="color:#ff0000">*</span>您的称呼&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="text" name="userRealName" id="userRealName" placeholder="请填写您的称呼，以便您的专属客服与您联系"></td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;"><label><span style="color:#ff0000">*</span>贵公司名称&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="text" name="companyName" id="companyName" placeholder="提示：请填写贵公司名称，方便联络"></td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;"><label><span style="color:#ff0000">*</span>设置密码&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="password" name="passWord" id="passWords" placeholder="请设置大于6位的数字或字母组合作为密码"></td>
                </tr>
                
                <tr>
                    <td style="padding-bottom:12px;"><label><span style="color:#ff0000">*</span>确认密码&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="password" name="passWordA" id="passWordsA" placeholder="请设置大于6位的数字或字母组合作为密码"></td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;"><label><span style="color:#ff0000">*</span>您的手机号&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="text"  name="phoneNumber" id="phoneNumber" placeholder="请输入您的手机号"></td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;"><label><span style="margin-left:0.5em;">您的邀请码</span>&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="text" name="inviteCode" id="inviteCode" placeholder="如果是朋友推荐您来的，请填写邀请码"></td>
                </tr>
                <tr>
                    <td style="padding-bottom:12px;"><label><span style="color:#ff0000">*</span>验<span style="margin:0px 0.5em;">证</span>码&nbsp;:</label></td>
                    <td style="padding-bottom:12px;"><input type="text" name="code" id="codeinput" style="width:175px;margin-right:24px;vertical-align: middle">
                    <div class="code" onclick="Newcode()" style="width:120px;"><p></p></div></td>
                </tr>
            </table>
            <p style="font-size:12px;margin:8px 0px 16px 0px;">点击“注册”意味着您已阅读并接受《眸事用户协议》</p>
            <p><button type="button" style="background: url(home2/images/submit.gif) no-repeat;width:432px;height:45px;border:none;" onclick="submitPost()"></button>
            </p>
        </div>
    </div>
<script>
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
	    $(function (){
	        $(".header .nav li a").click(function(){
	            $(this).parent().addClass("active").siblings().removeClass("active");
	        });
	    });
    
      //回车时，默认是登陆
    
    function on_return(evt){
	    evt = (evt) ? evt : ((window.event) ? window.event : ""); 
	    var key = evt.keyCode?evt.keyCode:evt.which;//兼容IE和Firefox获得keyBoardEvent对象的键值 
		if(key == 13){
		  submitPost();
		}
	 }
    
      function setValue(setvalue){
          document.getElementById("registerTypeValue").value=setvalue;
      }
      function submitPost(){
             //注册类型判断
             var registerTypeValue=document.getElementById("registerTypeValue");
             if(registerTypeValue.value == ''){
                 alert("请选择注册类型");
//                  new Toast({context:$('body'),message:'请选择注册类型'}).show();  
                 return false;
            }
            //用户名验证
            var userName=document.getElementById("userNames");
            if(userName.value == ''){
                 alert("请输入用户名");
//                  new Toast({context:$('body'),message:'请输入用户名'}).show();  
                 return false;
            }else if(userName.value.length<3){
                 alert("提示：请输入3位以上的用户名");
//                  new Toast({context:$('body'),message:'提示：请输入3位以上的用户名'}).show(); 
                 return false;
            }else if(userName.value.length>20){
                alert("提示：请输入20位以下的用户名");
//                 new Toast({context:$('body'),message:'提示：请输入20位以下的用户名'}).show(); 
                return false;
            }
            var patrn=/^[A-Za-z0-9]+$/;
            if (!patrn.test(userName.value)){
               alert("提示：用户名请输入字母或者数字");
//                new Toast({context:$('body'),message:'提示：用户名请输入字母或者数字'}).show(); 
               return false;
            }
            var userRealName=document.getElementById("userRealName");
            //您的称呼
            if(userRealName.value == ''){
            	 alert("请输入您的称呼");
//             	 new Toast({context:$('body'),message:'请输入您的称呼'}).show();  
            	 return false;
            }else{
            }
        
            //公司名验证
            var companyName=document.getElementById("companyName");
            if(companyName.value == ''){
             	alert("请输入贵公司名称");
//              	new Toast({context:$('body'),message:'请输入贵公司名称'}).show(); 
             	return false;
            }else{
            }
        
            //密码验证
            var passWord=document.getElementById("passWords");
            if(passWord.value == ''){
            	   alert("请输入您的密码");
//             	   new Toast({context:$('body'),message:'请输入您的密码'}).show(); 
            	   return false;
            }else if(passWord.value.length<6){
                   alert("提示：请输入6位以上的密码");
//                    new Toast({context:$('body'),message:'提示：请输入6位以上的密码'}).show();
                   return false;
            }else if(passWord.value.length>20){
                   alert("提示：请输入20位以下的密码");
//                    new Toast({context:$('body'),message:'提示：请输入20位以下的密码'}).show();
                   return false;
            }else{
            }
      
      
      
      
            //密码验证2
            var passWordsA=document.getElementById("passWordsA");
            if(passWordsA.value == ''){
            	   alert("请输入您的确认密码");
//             	   new Toast({context:$('body'),message:'请输入您的确认密码'}).show();
            	   return false;
            }else if(passWordsA.value.length<6){
//                    new Toast({context:$('body'),message:'提示：请输入6位以上的确认密码'}).show();
                   alert("提示：请输入6位以上的确认密码");
                   return false;
            }else if(passWordsA.value.length>20){
                   alert("提示：请输入20位以下的确认密码");
//                    new Toast({context:$('body'),message:'提示：请输入20位以下的确认密码'}).show();
                   return false;
            }else{
            }
	      	if(passWord.value!= passWordsA.value){
	      		  alert("提示：请确保两次密码一致");
// 	      		  new Toast({context:$('body'),message:'提示：请确保两次密码一致'}).show();
	              return false;
		    }
      
      
         		//手机号码验证
                var phoneNumber=$.trim(document.getElementById("phoneNumber").value);
	            var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
	             console.log(!isMobile.exec(phoneNumber));
       			if(phoneNumber == ''){
	                alert("请填写您的手机号码	");
// 	                new Toast({context:$('body'),message:'请填写您的手机号码'}).show();
	                return false;
	            }else if(isMobile.exec(phoneNumber)){
	            
	            }else{
// 	            	new Toast({context:$('body'),message:'请输入正确的手机号码'}).show();
	                alert("请输入正确的手机号码");
	                return false;
	            }
        
        	if(''==$("input[name=code]").val()){
	        	alert("请输入验证码");
// 	        	new Toast({context:$('body'),message:'请输入验证码'}).show();
	        	return false;
	        }
	        if(str.toLowerCase()!=$("input[name=code]").val().toLowerCase()){
// 	        	new Toast({context:$('body'),message:'请输入正确的验证码'}).show();
	            alert("请输入正确的验证码!");
	            return false;
	        }

        
        var data={
            "jfutype":document.getElementById("registerTypeValue").value,  //1-发包方   2-接包方
            "jfumobilephone":phoneNumber,//手机号
            "jfuname":userName.value,//用户名/昵称-用于登录(3-20 位    不区分大小写)
            "realname":userRealName.value,//用户名/昵称-用于登录(3-20 位    不区分大小写)
            "jfupassword":passWord.value,//密码(密文)用于登录(6-20 位    区分大小写)
            "compname":companyName.value,//公司名称
            "jfuinvitationcode":document.getElementById("inviteCode").value//邀请码
        };
        console.log(data);
             $.post("user_toRegoster",data,function(date){
            	 if(date.code=="Y"){
            		console.log(date);
            	     var par={
				           "jfutype":document.getElementById("registerTypeValue").value,  //1-发包方   2-接包方
				           "source":"2"  //1-意向客户新增   2-注册用户新增
				     };
//             	    修改event代办事项
            	    $.post("user_toModEvent",par,function(res){
            	        console.log(res);
            	    });
            	    window.location.href = 'home2_toLogin';
            	}else{
            	    alert(date.msg);
            	}
            });
        return false;
    }
</script>
</body>
</html>