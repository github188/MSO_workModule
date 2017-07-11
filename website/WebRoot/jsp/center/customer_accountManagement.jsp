<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>  

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
    <title></title>
    <script src="js/tj.js"></script>
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>	
	<script type="text/javascript" src="js/jquery.validate.js"></script>
    <link href="../html/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="../html/css/style.css"/>
	<link rel="stylesheet" href="css/style.css"/>
	
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script src="../html/js/bootstrap.min.js"></script>
	<script src="../html/js/react.js"></script>
	<script src="../html/js/react-dom.js"></script>
	<script src="../html/js/browser.min.js"></script>
	<script src="../html/js/main.js"></script>
	<script src="../html/js/url.js"></script>
	
	
	<script type="text/javascript" id="s1"></script>
    <c:if test="${user.jfutype=='1'}">
 	    <script src="../html/js/header-customerHall.js" type="text/babel"></script> 
 	</c:if> 
 	<c:if test="${user.jfutype=='2'}"> 
 	    <script src="../html/js/header-supplierHall.js" type="text/babel"></script> 
 	</c:if>
</head>
<body>
	<form name="theform" action="customer_lj_DemandList?zt=dsjdemand">
	    <input type="text" id="uid"  name="uid" value="${user.jfuid}"  size="50" style="display:none;" />
	    <input type="radio" name="myradio" value="random_name" checked style="display:none;"/>
	    <input type="text" id="dirname" value="2016/01/21" size="50" style="display:none;"/>
	    <input type="hidden" id="pagename" value="${pagename}" size="50" />
	</form>
	<!-- jsp文件头和头部 -->
	<div class="topNav"></div>
    <div class="content" style="width: 1200px; margin: 0 auto; padding-top: 60px;">
    	<input type="hidden"  id="complicenses" value="${user.complicense}"/>
		<input type="hidden"  id="comptaxcers" value="${user.comptaxcer}"/>
		<input type="hidden"  id="comporgcodes" value="${user.comporgcode}"/>    

	   <!--导入 公用菜单页  -->
    	
    	<div class="mid_bg">
    		<div class="mid_box">
	    		<!--导入 左边菜单页  -->
				<%@ include file="../lmenu.jsp"%>
	    		<div class="content_right">
	    			<form onsubmit="return submitPost();">
                        <div class="tips" id="tips" style="display: none">温馨提示：您的资料还没有完善，无法发布需求！</div>
		    			<c:if test="${user.jfustate==0}">
		    			    <div class="tips" id="tips_success">温馨提示：您的资料还没有完善，无法发布需求！</div>
		    			</c:if> 
	    				<c:if test="${user.jfustate==1}">
		    			    <div class="tips" id="tips_success">温馨提示：您的资料正在审核中，请耐心等待！</div>
		    			</c:if>
		    			<c:if test="${user.jfustate==2}">
		    			    <div class="tips" id="tips_success">温馨提示：您的资料正在审核中，请耐心等待！</div>
		    			</c:if>
		    			<c:if test="${user.jfustate==4}">
		    			    <div class="tips" id="tips_success">温馨提示：您的资料已经审核通过，赶快发布需求吧！</div>
		    			</c:if>  
		    			<c:if test="${user.jfustate==3}">
		    			    <div class="tips" id="tips_success">温馨提示：您的资料已经被驳回，赶快去修改吧！</div>
		    			    <div class="msg_success" style="color: red;" id="msg_success">${user.approveremark}</div>
		    			</c:if>  


		    			<div class="personal_info">
		    				<p>【提示：<span>*</span> 为必填项！】</p>
		    				<ul>
		    					<li>
		    						<label><span>*</span> 昵称：</label>
		    						<input type="text" class="nickname" name="realname" value="${user.realname}" />
		    						<span></span>
		    					</li>
		    					<li>
		    						<label><span>*</span> 公司名称：</label>
		    						<input type="text" class="companyName" name="compname" value="${user.compname}" />
		    						<span></span>
		    					</li>
		    					
		    					<li>
		    						<label><span>*</span> 品牌名称：</label>
		    						<input type="text" class="brandname" name="brandname" value="${user.brandname}" />
		    						<span></span>
		    					</li>
		    					
		    					<li>
		    						<label><span>*</span> 公司地址：</label>
		    						<input type="text" class="companyAdd" name="compaddr" value="${user.compaddr}"/>
		    						<span></span>
		    					</li>
		    					<li>
		    						<label>所属行业：</label>
		    						<input type="text" name="compind" value="${user.compind}"/>
		    					</li>
		    					<li>
		    						<label>公司网址：</label>
		    						<input type="text"  name="compwebsite" value="${user.compwebsite}"/>
		    					</li>
		    					<li>
		    						<label><span>*</span> 联系人：</label>
		    						<input type="text" class="contactName" name="contacts" value="${user.contacts}"/>
		    						<span></span>
		    					</li>
		    					<li>
		    						<label>所属部门：</label>
		    						<input type="text" name="contactsdep" value="${user.contactsdep}"/>
		    					</li>
		    					<li>
		    						<label>职位：</label>
		    						<input type="text" name="contactsposition" value="${user.contactsposition}"/>
		    					</li>
		    					<li>
		    						<label><span>*</span> 联系电话：</label>
		    						<input type="text" class="telNumber" pattern="^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$" name="contactsphone" value="${user.contactsphone}"/>
		    						<span></span>
		    					</li>
		    					<li>
		    						<label><span>*</span> 电子邮箱：</label>
		    						<input type="text" class="eMail" name="compemail" value="${user.compemail}"/>
		    						<span></span>
		    					</li>
								<li class="upload_img">
									<label><span>*</span> 营业执照：</label>
									<ul class="file-list">
										<img src="${user.complicenses}"  />
									</ul>
									<div class="ossfile" ></div>
									<div class="container">
									    <c:if test="${user.isEditStr=='Y'}">
										<button type="button" id="selectfiles">选择图片</button><br/><br/>
										<button type="button" id="postfiles">开始上传</button>
										</c:if> 
									</div>
								</li>
								<li class="upload_img">
									<label><span>*</span> 税务登记证：</label>
									<ul class="file-list2">
										<img src="${user.comptaxcers}" />
									</ul>
									<div class="ossfile2" ></div>
									<div class="container2">
									    <c:if test="${user.isEditStr=='Y'}">
										<button type="button" id="selectfiles2">选择图片</button><br/><br/>
										<button type="button" id="postfiles2">开始上传</button>
										</c:if> 
									</div>
								</li>
								<li class="upload_img">
									<label><span>*</span> 组织机构代码证：</label>
									<ul class="file-list3">
										<img src="${user.comporgcodes}" />
									
									</ul>
									<div class="ossfile3" ></div>
									<div class="container3">
									    <c:if test="${user.isEditStr=='Y'}">
										<button type="button" id="selectfiles3">选择图片</button><br/><br/>
										<button type="button" id="postfiles3">开始上传</button>
										</c:if> 
									</div>
								</li>
		    					<li>
		    						<label></label>
		    						<c:if test="${user.isEditStr=='Y'}">
		    							<button class="btn_submit" id="btn_submit" type="submit" >确认提交</button>
		    						</c:if> 
		    					</li>
		    				</ul>
		    			</div>
		    		</from>
		    	</div>
		    	
		    	
    		</div>
    	</div>
    </div>
		<script src="../html/js/footer.js" type="text/babel"></script>
		<!-- jsp文件尾部和尾部
		< include file="../cfooter.jsp"%> -->
		<div class="footer_box"></div>
		<div class="aside_bar"></div>
	<script src="../html/js/asideBar.js" type="text/babel"></script> 
	<script>
	
			//最后一次上传的图片。按顺序对应。
			var file1=document.getElementById("complicenses").value;
			var file2=document.getElementById("comptaxcers").value;
			var file3=document.getElementById("comporgcodes").value;
				        
			jQuery(function(){	        
				//昵称验证
		        $("input.nickname").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的昵称");
		            }else if($(this).val().length<2){
		                $(this).addClass("error_red");
		                $(this).next().text("请输入2~8个字符");
		            }else if($(this).val().length>8){
		                $(this).addClass("error_red");
		                $(this).next().text("请输入2~8个字符");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input.nickname").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
		        
		        
		        //品牌名称验证
		        $("input.brandname").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的品牌名称");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input.brandname").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
		        
     
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
		        //公司名称验证
		        $("input.companyAdd").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的公司地址");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input.companyAdd").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
		        //联系人验证
		        $("input.contactName").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的联系人信息");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input.contactName").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
		        //手机验证
		        var mobile = $.trim($("input.telNumber").val());
		        var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
		        $("input.telNumber").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的联系方式");
		            }else if(!$(this)[0].validity.patternMismatch){
		            	$(this).removeClass("error_red");
		            	$(this).next().text("");
		            }else{
		                $(this).addClass("error_red");
		                $(this).next().text("请输入正确的手机号码");
		            }
		        });
		        $("input.telNumber").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
				//邮箱验证
		        $("input.eMail").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的联系方式");
		            }else if (!$(this).val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
		            	$(this).addClass("error_red");
		            	$(this).next().text("请填写正确的邮箱");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input.eMail").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
		})
			
			
			
			
			
					    function submitPost(){
					    
					            		   	$(".content_right input").blur();
		   				 	     			if(0!=$(".error_red").length){
							                	$('html,body').animate({scrollTop:$(".error_red").offset().top-200}, 800);
		   				 	     			}
							                //触发所有input绑定的blur验证
									        //判断是否有错误。有就返回false;
									        if($(".error_red").length!=0){
									            return false;
									        }
									        
					           if(file1==''){
						                    $("#tips_success").text("请上传营业执照！");	
											scrollTo(0, 0);
						                    return false;			           				
					           }
					           if(file2==''){
						                    $("#tips_success").text("请上传税务登记证！");		
											scrollTo(0, 0);
						                    return false;		           				
					           }
					           if(file3==''){
						                    $("#tips_success").text("请上传组织机构代码！");	
											scrollTo(0, 0);
						                    return false;		           				
					           }
					            
						        var data={
						            "realname":$("input[name=realname]").val(),
						            "compname":$("input[name=compname]").val(),
						            "brandname":$("input[name=brandname]").val(),
						            "contacts":$("input[name=contacts]").val(),
						            "contactsphone":$("input[name=contactsphone]").val(),
						            "contactsdep":$("input[name=contactsdep]").val(),
						            "contactsposition":$("input[name=contactsposition]").val(),
						            "compaddr":$("input[name=compaddr]").val(),
						            "compind":$("input[name=compind]").val(),
						            "compwebsite":$("input[name=compwebsite]").val(),
						            "compemail":$("input[name=compemail]").val(),
						            "complicense":file1,
						            "comptaxcer":file2,
						            "comporgcode":file3
						        };
						        $.post("customer_lj_AccountManagementDo",data,function(date){
						                if(date.code=="Y"){
							                document.getElementById("postfiles").style.display="none";
							                document.getElementById("selectfiles").style.display="none";
							                document.getElementById("postfiles2").style.display="none";
							                document.getElementById("selectfiles2").style.display="none";
							                document.getElementById("postfiles3").style.display="none";
							                document.getElementById("selectfiles3").style.display="none";
						                    document.getElementById("btn_submit").style.display="none";
						                    
						                   	$("#tips_success").removeClass("tips"); 
						                   	$("#tips_success").addClass("tips_success"); 
						                    $("#tips_success").text("您的信息已经修改成功！");
						                    scrollTo(0, 0);
						                    
						            		console.log(date);
						            	}else{
						            	    $("#tips_success").text(date.msg);
						            	}
					        });
					        return false;
				        }
			
			        
	</script>


	<script type="text/javascript" src="lib/crypto1/crypto/crypto.js"></script>
	<script type="text/javascript" src="lib/crypto1/hmac/hmac.js"></script>
	<script type="text/javascript" src="lib/crypto1/sha1/sha1.js"></script>
	<script type="text/javascript" src="lib/base64.js"></script>
	<script type="text/javascript" src="js/plupload.full.min.js"></script>
	<script type="text/javascript" src="js/upload.js"></script>
</body>
</html>