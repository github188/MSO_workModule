<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
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
  <style>
  .nav.nav_supplier { display: none;}
  </style>
</head>
<body class="supplier">
<%-- 	include file="../cheader.jsp"%> --%>
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
       <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
		        <!--导入 公用菜单页  -->
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


					    <div class="personal_info supplier_BasicInfo">
					        <p>【提示：<span>*</span> 为必填项！】</p>
					        <ul>
					            <li>
					                <label><span>*</span> 昵称：</label>
					                <input type="text" name="realname"  value="${user.realname}" />
					                <span></span>
					            </li>
					            <li>
					                <label><span>*</span> 公司名称：</label>
					                <input type="text" name="compname" value="${user.compname}" />
					                <span></span>
					            </li>
					            
					            
					            <li>
		    						<label><span>*</span> 品牌名称：</label>
		    						<input type="text" class="brandname" name="brandname" value="${user.brandname}" />
		    						<span></span>
		    					</li>
		    					
		    					
		    					
					            <li>
					                <label><span>*</span> 公司地址：</label>
					                <input type="text" name="compaddr" value="${user.compaddr}"/>
					                <span></span>
					            </li>
					            <li>
					                <label>所属行业：</label>
					                <input type="text" name="compind" value="${user.compind}"/>
					                <span></span>
					            </li>
					            <li>
					                <label>公司网址：</label>
					                <input type="text"  name="compwebsite" value="${user.compwebsite}"/>
					                <span></span>
					            </li>
					            <li>
					                <label><span>*</span> 联系人：</label>
					                <input type="text" name="contacts" value="${user.contacts}"/>
					                <span></span>
					            </li>
					            <li>
					                <label>所属部门：</label>
					                <input type="text" name="contactsdep" value="${user.contactsdep}"/>
					                <span></span>
					            </li>
					            <li>
					                <label>职位：</label>
					                <input type="text" name="contactsposition" value="${user.contactsposition}"/>
					                <span></span>
					            </li>
					            <li>
					                <label><span>*</span> 联系电话：</label>
					                <input type="text" name="contactsphone" value="${user.contactsphone}"/>
					                <span></span>
					            </li>
					            <li>
					                <label><span>*</span> 电子邮箱：</label>
					                <input type="text" name="compemail" value="${user.compemail}"/>
					                <span></span>
					            </li>





					            <li>
					                <label><span>*</span> 数据库类型：</label>
					                <input type="text" name="dbtype" value="${user.dbtype}"/>
					                <span></span>
					            </li>
					            <li>
					                <label> 传真：</label>
					                <input type="text" name="fax" value="${user.fax}"/>
					            </li>
					            <li>
					                <label><span>*</span> 邮政编码：</label>
					                <input type="text" name="postcode" value="${user.postcode}"/>
					                <span></span>
					            </li>
					            <li>
					                <label><span>*</span> 公司规模：</label>
					                <input type="text" name="companysize" value="${user.companysize}"/>
					                <span></span>
					            </li>





					            <li class="region">
					                <input type="hidden" name="datacity" id="datacity" value="${user.datacity}"/>
					                <label><span>*</span> 数据分布城市：</label>

					                	<c:if test="${user.datacity=='全国'||user.datacity==''||user.datacity==null}">
							                 &emsp;<input type="radio" name="region" class="region1" id="regionall" checked="checked">全国
							                 &emsp;<input type="radio" name="region" class="region2" id="regioncity"  > 自定义城市
						                </c:if>
						                <c:if test="${user.datacity!='全国'&&user.datacity!=''&&user.datacity!=null}">
							                 &emsp;<input type="radio" name="region" class="region1" id="regionall" >全国
							                 &emsp;<input type="radio" name="region" class="region2" id="regioncity" checked="checked"> 自定义城市
						                </c:if>
						                &nbsp;&nbsp;&nbsp;&nbsp;<span></span>
						                <br/>

								        <select id="cmbProvince">
								        </select>
						                <div>
						                    <div class="left">
						                        <select  multiple size="12" id="cmbCity">
						                        </select>
						                    </div>
						                    <div class="left_button">
						                        <button type="button" class="btn all">全选 >></button>
						                        <button type="button" class="btn add">添加 >></button>
						                        <button type="button" class="btn delete"><< 删除</button>
						                    </div>
						                    <div class="left">
									                 <select  multiple size="12" id="active">
						                        	 </select>
						                    </div>
						                </div>
					            </li>


					            <li class="CompanySize">
					                <label><span>*</span> 擅长项目：</label>
					                <input type="hidden" name="goodproyl" value="${user.goodpro}" id="goodproyl"  readonly="readonly"/>
					                <input type="text" name="goodpro" value="" id="goodpro" readonly="readonly" style="color: orange;"/>
					                <span></span>
					                <div class="class">
					                    <p><input type="checkbox" name="goodprocheckbox" onclick="getVlue(this)" value="增值服务">增值服务</p>
					                    <p><input type="checkbox" name="goodprocheckbox" onclick="getVlue(this)" value="意向邀约">意向邀约</p>
					                    <p><input type="checkbox" name="goodprocheckbox" onclick="getVlue(this)" value="邀约到访">邀约到访</p>
					                    <p><input type="checkbox" name="goodprocheckbox" onclick="getVlue(this)" value="电话销售">电话销售</p>
					                    <p><input type="checkbox" id="goodprocheckboxO" onclick="getVlue(this)" value="其他">其他</p>
					                </div>
					                <input type="text" placeholder="请在此处填写其他擅长类别,多个请用,隔开..." value="" id="other" class="other" style="color: orange;" disabled="disabled" >
					            </li>
					            <li>
					                <label><span>*</span> 开户名称：</label>
					                <input type="text" name="accountname" value="${user.accountname}"/>
					                <span></span>
					            </li>
					            <li>
					                <label><span>*</span> 开户行：</label>
					                <input type="text" name="bankaccount" value="${user.bankaccount}"/>
					                <span></span>
					            </li>
					            <li>
					                <label><span>*</span> 公司账号：</label>
					                <input type="text" name="comaccount" value="${user.comaccount}"/>
					                <span></span>
					            </li>






					            <li class="upload_img">
					                <label><span>*</span> 营业执照：</label>
					                <ul class="file-list">
					                    <img src="${user.complicenses}" />
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
							    			<button class="btn_submit" id="btn_submit" type="submit">确认提交</button>
							        </c:if>


					            </li>
					        </ul>
					    </div>
				</form>
			</div>
		</div>
	</div>
</div>
<div class="aside_bar"></div>
	<script src="../html/js/asideBar.js" type="text/babel"></script> 

    	<c:if test="${user.jfutype=='1'}">
	    	 <script src="../html/js/header-customerHall.js" type="text/babel"></script>
	    </c:if>
	    <c:if test="${user.jfutype=='2'}">
	    	<script src="../html/js/header-supplierHall.js" type="text/babel"></script>
	    </c:if>
		<script src="../html/js/footer.js" type="text/babel"></script>
		<!-- jsp文件尾部和尾部
		< include file="../cfooter.jsp"%> -->
		<div class="footer_box"></div>

		<script type="text/javascript" src="js/jsAddress.js"></script>
		<script type="text/javascript">

			function  getVlue(sender){
			   var sc=sender.checked;//取消和选中
			   var values=sender.value;//选中或者不选中的值
			   var goodproValue=document.getElementById("goodpro").value;
			   if(values=='其他'){
			      if(!sc){
			      	document.getElementById("other").disabled="disabled";
			      	document.getElementById("other").value="";
			      }else{
			      	document.getElementById("other").disabled="";
			      }
			   }else{
				   if(sc){
				      //最后一位有，了  去掉
				       var endstr=goodproValue.substring(goodproValue.length-1,goodproValue.length);
				       if(endstr==','){
					     goodproValue=goodproValue.substring(0,goodproValue.length-1);
					   }
					   if(goodproValue==''){
					     goodproValue=values;
					   }else{
					   	 goodproValue=goodproValue+","+values;
					   }
					   var begstr=goodproValue.substring(0,1);
					   if(begstr==','){
					     goodproValue=goodproValue.substring(1,goodproValue.length);
					   }
					   document.getElementById("goodpro").value=goodproValue;
				   }else{
				      //第一位有，了  去掉
					   var begstr=goodproValue.substring(0,1);
					   if(begstr==','){
					     goodproValue=goodproValue.substring(1,goodproValue.length);
					   }
					   if(goodproValue==''){
					     goodproValue=values;
					   }else{
					   	 //第一个 没有前后，的情况
						 if(goodproValue.indexOf(",")==-1){
						   goodproValue=goodproValue.replace(values,"");
						 }else{
		                     //values+"," 不为空
						     if(goodproValue.indexOf(values+",")!=-1){
						        goodproValue=goodproValue.replace(values+",","");
						     }else{
							     if(goodproValue.indexOf(","+values)!=-1){
							       goodproValue=goodproValue.replace(","+values,"");
							     }
						     }
					     }

					   }
					   document.getElementById("goodpro").value=goodproValue;
				   }
				}
			}

			var file1=document.getElementById("complicenses").value;
			var file2=document.getElementById("comptaxcers").value;
			var file3=document.getElementById("comporgcodes").value;

			   //初化   擅长项目
			    var goodproylVlue=document.getElementById("goodproyl").value;
			    if(goodproylVlue.indexOf("[-]")!=-1){
			      var c=goodproylVlue.split('[-]');
			      document.getElementById("goodpro").value=c[0];
			      document.getElementById("other").value=c[1];
			      document.getElementById("goodprocheckboxO").checked="checked";
			      document.getElementById("other").disabled="";
			    }else{
			      document.getElementById("goodpro").value=goodproylVlue;
			      document.getElementById("goodprocheckboxO").checked="";
			      document.getElementById("other").disabled="disabled";
			    }
			   var goodproValue=document.getElementById("goodpro").value;
			   var av=document.getElementsByName("goodprocheckbox");
			   if(av.length>0){
			      for(var i=0;i<av.length;i++){
			         var element=av[i];
			         var elementValue=element.value;
			         if(goodproValue.indexOf(elementValue)!=-1){
			             element.checked="checked";
			         }
				  }
			   }

			 //城市初始化
			  var datacityC=document.getElementById("datacity").value;
			  if(datacityC.indexOf(",")!=-1){
			     var cityL=datacityC.split(',');
			     for(var i=0,len=cityL.length;i<len;i++){
			        		var option = document.createElement("OPTION");
							document.getElementById("active").options.add(option);
							option.innerHTML = cityL[i];
							option.value = cityL[i];
							option.obj = cityL[i];
			     }
			 }else{
				 var option = document.createElement("OPTION");
				 	if(!(datacityC==null||datacityC=="")){
				 		document.getElementById("active").options.add(option);
						option.innerHTML = datacityC;
						option.value = datacityC;
						option.obj = datacityC;
				 	}

			 }



			   //昵称验证
		        $("input[name=realname]").blur(function(){
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
		        $("input[name=realname]").focus(function(){
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
		        $("input[name=compname]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的公司名称");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=compname]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });


		        //公司地址验证
		        $("input[name=compaddr]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的公司地址");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=compaddr]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });


		        //联系人验证
		        $("input[name=contacts]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写您的联系人信息");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=contacts]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
		        //手机验证
		        var mobile = $.trim($("input[name=contactsphone]").val());
		        var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
		        $("input[name=contactsphone]").blur(function(){
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
		        $("input[name=contactsphone]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });
				//邮箱验证
		        $("input[name=compemail]").blur(function(){
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
		        $("input[name=compemail]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });





		        //数据库类型
		        $("input[name=dbtype]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写数据库类型");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=dbtype]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });

		        //邮编
		        $("input[name=postcode]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写邮政编码");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=postcode]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });

		        //公司规模
		        $("input[name=companysize]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写公司规模");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=companysize]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });




            	//擅长项目
		        $("input[name=goodpro]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写擅长项目");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=goodpro]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });


		         // 开户名称
		        $("input[name=accountname]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写开户名称");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=accountname]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });



		         // 开户行
		        $("input[name=bankaccount]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写开户行");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=bankaccount]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });


		         // 开户行
		        $("input[name=comaccount]").blur(function(){
		            if($(this).val() == ''){
		                $(this).addClass("error_red");
		                $(this).next().text("请填写公司账号  ");
		            }else{
		                $(this).removeClass("error_red");
		                $(this).next().text("");
		            }
		        });
		        $("input[name=comaccount]").focus(function(){
		            $(this).removeClass("error_red");
		            $(this).next().text("");
		        });





						    addressInit('cmbProvince', 'cmbCity', 'cmbArea', '上海', '', '');
						    $(".left_button .add").click(function(){
						        var length=[];
						        if($("#cmbCity option:selected").length==0){
						        	$("input[name=region]").addClass("error_red");
						            $("input[name=region]").next().text("请您在左边选择框中至少选择一个！ ");
						        }else{
						        	$("input[name=region]").removeClass("error_red");
						            $("input[name=region]").next().text("");
						        }
						        $("#cmbCity option:selected").each(function(){
						            var option=$(this);
						            var flag=false;
						            $("#active option").each(function(){
						                if($(this).text()==$(option).text()){
						                    flag=true;
						                    return true;
						                }
						            });
						            if(flag){
						                length.push($(this)[0]);
						            }else{
						                $("#active").append($(this).clone());
						            }
						        });
						        if(length.length!=0){
						            var text;
						            for(var i=0;i<length.length;i++){
						                if(i==0){
						                    text=$(length[i]).text();
						                }else if(i<length.length-1){
						                    text+=","+$(length[i]).text();
						                }else{
						                    text+=","+$(length[i]).text();
						                }
						            }
						            $("input[name=region]").addClass("error_red");
						            $("input[name=region]").next().text("城市("+text+")已经添加过！  ");
						            length=[];
						        }else{
						         	$("input[name=region]").removeClass("error_red");
						            $("input[name=region]").next().text("");
						        }
						    });
						    $(".left_button .all").click(function(){
							    $("#cmbCity option").each(function(){
							        $(this)[0].selected="selected";
							    })
							});

						    $(".left_button .delete").click(function(){
						        if($("#active option:selected").length==0){
						        	$("input[name=region]").addClass("error_red");
						            $("input[name=region]").next().text("请您在右边选择框中至少选择一个！ ");
						        }else{
						        	$("input[name=region]").removeClass("error_red");
						            $("input[name=region]").next().text("");
						        }
						        $("#active option:selected").remove();
						    });
						    $("input[name=region]").change(function(){
						       if($(this).hasClass("region1")){
						           $("#cmbProvince,#cmbProvince+div").hide();
						       }else{
						           $("#cmbProvince,#cmbProvince+div").show();
						       }
						    });
							var  regioncity=document.getElementById("regioncity");
							 //自定城市选中
							if(regioncity.checked){
								 $("#cmbProvince,#cmbProvince+div").show();
							}else{
								 $("#cmbProvince,#cmbProvince+div").hide();
							}








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

								         var regionall=document.getElementById("regionall");
							    		 var obj = document.getElementById("active");
										 var options = obj.options;
										 if(options.length==0){
										 		if(!regionall.checked){//不选中  全国
										    		 $("input[name=region]").addClass("error_red");
									           	     $("input[name=region]").next().text("请您选择数据分布城市！ ");
										             return false;
									            }else{
								                  $("input[name=region]").removeClass("error_red");
								                  $("input[name=region]").next().text("");
								                }
									     }else{
									    		$("input[name=region]").removeClass("error_red");
								            	$("input[name=region]").next().text("");
								            	var optap="";
								            	for(var i=0,len=options.length;i<len;i++){
								            	  var opt = options[i].value;
								            		    if(i==0){
								            		      optap=optap+opt;
								            		    }else{
								            		      optap=optap+","+opt;
								            		    }
												 }
												 document.getElementById("datacity").value=optap;
									     }

							    	    var datacityvvv=document.getElementById("datacity").value;
	 									if(regionall.checked){
								           datacityvvv="全国";
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


					        			var goodpro=$("input[name=goodpro]").val()+"[-]"+document.getElementById("other").value;
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
								            "comporgcode":file3,
								            "fax":$("input[name=fax]").val(),
								            "postcode":$("input[name=postcode]").val(),
								            "accountname":$("input[name=accountname]").val(),
								            "bankaccount":$("input[name=bankaccount]").val(),
								            "comaccount":$("input[name=comaccount]").val(),
								            "companysize":$("input[name=companysize]").val(),
								            "dbtype":$("input[name=dbtype]").val(),
								            "datacity":datacityvvv,
								            "goodpro":goodpro
								        };
								        $.post("supplier_lj_Supplier_BasicInfoDo",data,function(date){
								                if(date.code=="Y"){
		// 						                    location.reload();

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
