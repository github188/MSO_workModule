<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>我是发包方</title>
    <script src="js/tj.js"></script>
</head>
<body id="login" style="background:url('home2/images/customerBack.jpg') no-repeat;background-size: 100% 100%;background-position-y: 140px;">
<!-- jsp文件头和头部 -->
<%@ include file="../header2.jsp"%>
<div class="nav_01">
    <div>
        <ul class="clear">
            <a href="home2_toCustomer"><li class="active">我是发包方</li></a>
            <a href="home2_toSupplier"><li >我是接包方</li></a>
        </ul>
    </div>
</div>
<div class="login register" style="top:227px;width:800px;height:525px;margin-left:-400px;padding:30px 30px 50px 30px;" >
    <div>
        <table>
            <tr>
                <td style="width:170px;"><label ><span style="visibility: hidden;">*</span>选择您所在的行业&nbsp;:&emsp;</label></td>
                <td>
                <select name="outsourcingType" id="outsourcingType">
<!--                     <option value="1">线上教育培训</option> -->
<!--                     <option value="2">线下教育培训</option> -->
<!--                     <option value="3">房地产</option> -->
<!--                     <option value="4">汽车</option> -->
<!--                     <option value="5">汽车后市场</option> -->
<!--                     <option value="6">金融</option> -->
<!--                     <option value="7">互联网</option> -->
<!--                     <option value="8">电商平台</option> -->
<!--                     <option value="9">运营商增值服务</option> -->
<!--                     <option value="10">其他行业</option> -->
                    
	                    <option value="1">成人教育</option>
	                    <option value="2">青少儿教育</option>
	                    <option value="3">房地产</option>
	                    <option value="4">汽车业</option>
	                    <option value="5">汽车后市场</option>
	                    <option value="6">金融</option>
	                    <option value="7">互联网</option>
	                    <option value="8">电商平台</option>
	                    <option value="9">运营商增值服务</option>
	                    <option value="10">其他行业</option>
                    
                </select>&emsp;
                </td>
            </tr>
        </table>
        <hr style="border:none;border-top:1px solid #706e6b;border-bottom:1px solid #514f4e;margin:12px 0px 10px 0px;"/>
        <table>
            <tr>
                <td style="padding-bottom:12px;width:160px;">&emsp;&emsp;&emsp;&emsp;<label><span style="color:#ff0000">*</span>您的手机&nbsp;:</label></td>
                <td style="padding-bottom:12px;"><input type="text" name="phoneNumber"  id="phoneNumber" placeholder="这里填您的手机号码"></td>
            </tr>
            <tr>
                <td style="padding-bottom:12px;">&emsp;&emsp;&emsp;&emsp;<label><span style="color:#ff0000">*</span>您的称呼&nbsp;:</label></td>
                <td style="padding-bottom:12px;"><input type="text" name="realuserName" id="realuserName" placeholder="请填写您的称呼，以便您的专属客服与您联系"></td>
            </tr>
            <tr>
                <td style="padding-bottom:12px;">&emsp;&emsp;&emsp;&emsp;<label><span style="color:#ff0000">*</span>贵公司名称&nbsp;:</label></td>
                <td style="padding-bottom:12px;"><input type="text" name="companyName"  id="companyName" placeholder="提示：请填写贵公司名称，方便联络"></td>
            </tr>
            <tr>
                <td style="padding-bottom:12px;">&emsp;&emsp;&emsp;&emsp;<label><span style="color:#ff0000">&nbsp;</span>您的邀请码</span>&nbsp;:</label></td>
                <td style="padding-bottom:12px;"><input type="text" name="inviteCode" id="inviteCode" placeholder="如果是朋友推荐您来的，请填写邀请码"></td>
            </tr>
            <tr>
                <td style="padding-bottom:12px;vertical-align: top;">&emsp;&emsp;&emsp;&emsp;<label><span style="visibility: hidden">*</span>您的需求</span>&nbsp;:</label></td>
                <td style="padding-bottom:12px;"><textarea name="outsourcingDemand" id="outsourcingDemand"></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><button type="button"  onclick="submitPost()"style="background: url(home2/images/submit_1.gif) no-repeat;width:320px;height:45px;border:none;" class="submit"></button></td>
            </tr>
            <tr>
                <td></td>
                <td><p style="font-size:14px;margin-top:8px;">您的专属客服将在一个工作日内给您回复</p></td>
            </tr>
        </table>
    </div>
</div>
<div class="bg_cover">
    <div class="cover" style="top:370px;">
        <i><img src="home2/images/icon_msg.png"></i>
        <p>欢迎您注册眸事网，您的专属客服会在一个工作日内联系您，请耐心等待</p>
    </div>
</div>
<script>
    $(function (){
        $(".header .nav li a").click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
        });
        $(".nav_01 li").click(function(){
            $(this).addClass("active").parent().siblings().find("li").removeClass("active");
        });
//         $(".submit").click(function(){
//             $(".bg_cover").show();
//         });
        $(".bg_cover").click(function(){
            $(this).hide();
        });
        $(".cover").click(function(e){
            e.stopPropagation();
        });
    });
    
    
    function submitPost(){
                var phoneNumber=document.getElementById("phoneNumber").value;
                   //手机验证
	            var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
	            console.log(!isMobile.exec(phoneNumber));
       			if(phoneNumber == ''){
	                alert("请填写您的手机号码	");
	                return false;
	            }
	            else if(isMobile.exec(phoneNumber)){
	            
	            }else{
	                alert("请输入正确的手机号码	");
	                return false;
	            }
	            var realuserName=document.getElementById("realuserName").value;
       			if(realuserName == ''){
	                alert("请填写您的称呼");
	                return false;
	            }
	            var companyName=document.getElementById("companyName").value;
       			if(companyName == ''){
	                alert("请填写您的公司名称");
	                return false;
	            }
	            
            var outsourcingTypeValue= document.getElementById("outsourcingType").value;
            var data={
                "registerType":"1",//发包方
                "fitmobilephone":document.getElementById("phoneNumber").value,//手机号码				
                "companyName":document.getElementById("companyName").value,//公司名称
                "fitname":document.getElementById("realuserName").value,//您的称呼
                "fiid":outsourcingTypeValue,//$("#outsourcingType i.active").attr("value"),//行业
                "fstid":"9",//$("#businessType input:checked+span").text(),//业务类型   其他
                "fitdemand":document.getElementById("outsourcingDemand").value,//您的需求
                "fitinvitationcode":document.getElementById("inviteCode").value//您的邀请码
            };
            $.post("intentiontourists_tofAddJson",data,function(date){
            	if(date.code=="Y"){
            		console.log(date);
            		$(".bg_cover").show();
           	     	var par={
				           "jfutype":"1",  //1-发包方   2-接包方
				           "source":"1"  //1-意向客户新增   2-注册用户新增
				    };
            	    $.post("user_toModEvent",par,function(res){
            	        console.log(res);
            	    });
            	}
            });
            return false;
     }
</script>
</body>
</html>