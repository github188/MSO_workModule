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
            <a href="home2_toCustomer"><li >我是发包方</li></a>
            <a href="home2_toSupplier"><li class="active">我是接包方</li></a>
        </ul>
    </div>
</div>
<div class="login register" style="top:227px;width:800px;height:525px;margin-left:-400px;padding:30px 30px 50px 30px;" >
    <div>
        <table>
            <tr>
                <td style="width:200px;"><label ><span style="visibility: hidden;">*</span>选择您所在的机构类别&nbsp;:</label>&emsp;</td>
                <td ><select name="agencyType" id="agencyType">
	                <option value="1">呼叫中心</option>
                    <option value="2">网络推广机构</option>
                    <option value="3">地推机构</option>
                    <option value="4">其他</option>
                </select>&emsp;</td>
            </tr>
        </table>
        <hr style="border:none;border-top:1px solid #706e6b;border-bottom:1px solid #514f4e;margin:12px 0px 50px 0px;"/>
        <table>
            <tr>
                <td style="padding-bottom:14px;width:180px;">&emsp;&emsp;&emsp;&emsp;<label><span style="color:#ff0000">*</span>您的手机&nbsp;:</label></td>
                <td style="padding-bottom:14px;"><input type="text" name="phoneNumber" id="phoneNumber" placeholder="这里填您的手机号码"></td>
            </tr>
            <tr>
                <td style="padding-bottom:14px;">&emsp;&emsp;&emsp;&emsp;<label><span style="color:#ff0000">*</span>您的称呼&nbsp;:</label></td>
                <td style="padding-bottom:14px;"><input type="text"  name="realuserName" id="realuserName" placeholder="请填写您的称呼，以便您的专属客服与您联系"></td>
            </tr>
            <tr>
                <td style="padding-bottom:14px;">&emsp;&emsp;&emsp;&emsp;<label><span style="color:#ff0000">*</span>机构名称&nbsp;:</label></td>
                <td style="padding-bottom:14px;"><input type="text"  name="agencyName" id="agencyName" placeholder="提示：请填写贵公司名称，方便联络"></td>
            </tr>
            <tr>
                <td style="padding-bottom:36px;">&emsp;&emsp;&emsp;&emsp;<label><span style="visibility: hidden;">&nbsp;</span>您的邀请码</span>&nbsp;:</label></td>
                <td style="padding-bottom:36px;"><input type="text" name="inviteCode"  id="inviteCode" placeholder="如果是朋友推荐您来的，请填写邀请码"></td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: right;"><button type="button" onclick="submitPost()" style="background: url(home2/images/submit_2.gif) no-repeat;width:418px;height:45px;border:none;" class="submit"></button></td>
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
	        $(".header .nav li").click(function(){
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
	            var agencyName=document.getElementById("agencyName").value;
       			if(agencyName == ''){
	                alert("请填写机构名称");
	                return false;
	            }
	            
	            
	    var agencyTypeValue=document.getElementById("agencyType").value;
        var data={
            "registerType":"2",//接包方
            "jmcid":agencyTypeValue,//$("#agencyType i.active").attr("value"),//对应   接包方机构类别(j_mechanism_category)jmcid	
            "jitname":document.getElementById("realuserName").value,//称呼-姓名
            "jitmobilephone":document.getElementById("phoneNumber").value,//手机号码
            "jitorganization":document.getElementById("agencyName").value,//机构名称
            "jitinvitationcode":document.getElementById("inviteCode").value//邀请码
        };
        $.post("intentiontourists_tojAddJson",data,function(date){
            	if(date.code=="Y"){
            		console.log(date);
            		$(".bg_cover").show();
//             		$("div.form").html("<img src='images/win.png' class='win'/>");
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
</script>
</body>
</html>