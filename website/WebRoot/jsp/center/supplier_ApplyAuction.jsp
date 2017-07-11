<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <title></title>
    <meta charset="UTF-8">
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
    <script src="js/tj.js"></script>
    <style>
        .ApplyAuction{
            font-size:14px;
        }
        .ApplyAuction a{
            color:#009cee;
        }
        .ApplyAuction input[type=text]{
            width:250px;
            height:30px;
            line-height:30px;
            border:1px solid #dddddd;
        }
        .ApplyAuction input[type=checkbox],.ApplyAuction input[type=radio]{
            vertical-align: top;
            margin-top:4px;
            margin-right:4px;
        }
    </style>
</head>
<script type="text/javascript">


   function setptysf() 
   {
     var auctionnum=document.getElementById("auctionnum").value;
     var usemycompanydata=document.getElementById("usemycompanydata").value;
	 //&&usemycompanydata!=''
     var typeofinvoice=document.getElementById("typeofinvoice").value;
    
     if(auctionnum!=''){
	     var ptysf=0.00;
	     //是否使用我公司数据  8%
// 	     var tol10=tol*0.08;
	     var tol10=document.getElementById("usemycompanydata1showv").innerText;
	     //我能开的发票类型  
// 	     var tol3=tol*0.03;//增票（小规模纳税人）
	     var tol3=document.getElementById("typeofinvoice2showv").innerText;
// 	     var tol6=tol*0.06;//普票
	     var tol6=document.getElementById("typeofinvoice3showv").innerText;
	     //竞拍手续费
		 var jpsxf=document.getElementById("jpsxf").innerText;
		


		 var sf=0.00;
	     if(parseInt(usemycompanydata)==1){
	        ptysf=Number(ptysf)+Number(tol10);
			sf=Number(tol10);
	     }
	     
	     if(parseInt(typeofinvoice)==2){
	        ptysf=Number(ptysf)+Number(tol3);
			sf=Number(tol3);
	     } 
	     if(parseInt(typeofinvoice)==3){
	         ptysf=Number(ptysf)+Number(tol6);
			 sf=Number(tol6);
	     } 
	     ptysf=Number(ptysf)+Number(jpsxf);
	     ptysf=ptysf.toFixed(2); 
     	 document.getElementById("ptysf").innerText=ptysf;

         //预计收益=单价*数量-(竞拍手续费+税费)=800元
		 var yauct=parseInt(document.getElementById("auctionnum").value);
	   	 var oneprice=document.getElementById("orderprice").value;
	     var tol=Number(oneprice)*Number(yauct);
		 var tolvalue=tol-jpsxf-sf;
		 document.getElementById("tolyg").innerText=tolvalue;
     }
   }
   
   
   function settolyg(value){
     if(value!=''){
	   	 var yauct=parseInt(document.getElementById("YauctionNum").value);
	     if(value>yauct){
	        value=yauct;
	        document.getElementById("auctionnum").value=value;
	     }
	   	 var oneprice=document.getElementById("orderprice").value;
	     var tol=Number(oneprice)*Number(value);
	     document.getElementById("tolyg").innerText=tol;
	     
	     
	//   是否使用我公司数据  10%
	     var tol10=tol*0.08;
	     tol10=tol10.toFixed(2); 
	     //document.getElementById("usemycompanydata1showv").innerText=tol10;
	     
	//   我能开的发票类型  
	     var tol3=tol*0.03;//增票（小规模纳税人）
	     tol3=tol3.toFixed(2); 
	     document.getElementById("typeofinvoice2showv").innerText=tol3;
	     
	     var tol6=tol*0.06;//普票
	     tol6=tol6.toFixed(2); 
	     document.getElementById("typeofinvoice3showv").innerText=tol6;


	    
	//     竞拍手续费
	//     100以下  101-500 501-1000 1001-1500 1501-2000
	// 	        手续费0 元 500 元 1000 元 1500 元 2000 元
	      var jpsxf=0;
	      var valuen=Number(value);
// 	      if(valuen<100){
// 	        jpsxf=0;
// 	      }else if(valuen<=500){
// 	      	jpsxf=500;
// 	      }else if(valuen<=1000){
// 	      	jpsxf=1000;
// 	      }else if(valuen<=1500){
// 	      	jpsxf=1500;
// 	      }else if(valuen<=2000){
// 	      	jpsxf=2000;
// 	      }else{
// 	        jpsxf=2000;
// 	      }
          var favorableway=document.getElementById("favorableway").value;
          if("1"!=favorableway){
             jpsxf=valuen;
          }
	      //竞拍手续费
		  document.getElementById("jpsxf").innerText=jpsxf;
		  var aaa=document.getElementById("jpsxf").innerText;
		  setptysf();





	  }
   }

   function funusemycompanydata(sender){
     var values=parseInt(sender.value);
     document.getElementById("usemycompanydata").value=values;
     if(values==1){
    // 	document.getElementById("usemycompanydata1show").style.display="";
    // 	document.getElementById("usemycompanydata2show").style.display="none";
     }
     if(values==2){
     //	document.getElementById("usemycompanydata2show").style.display="";
     //	document.getElementById("usemycompanydata1show").style.display="none";
     }
     //setptysf();
   }
   
   function funtypeofinvoice(sender){
     var values=parseInt(sender.value);
     document.getElementById("typeofinvoice").value=values;
     if(values==1){
     	document.getElementById("typeofinvoice1show").style.display="";
     	document.getElementById("typeofinvoice2show").style.display="none";
     	document.getElementById("typeofinvoice3show").style.display="none";
     }
     if(values==2){
     	document.getElementById("typeofinvoice2show").style.display="";
     	document.getElementById("typeofinvoice1show").style.display="none";
     	document.getElementById("typeofinvoice3show").style.display="none";
     }
     if(values==3){
     	document.getElementById("typeofinvoice3show").style.display="";
     	document.getElementById("typeofinvoice1show").style.display="none";
     	document.getElementById("typeofinvoice2show").style.display="none";
     }
     setptysf();
   }
</script>
<body class="supplier">
	<%@ include file="../cheader.jsp"%>
    <div class="content">
      	<%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		 	<%@ include file="../lmenu2.jsp"%>
						<div class="content_right">
						     <form name="applyForm" id="applyForm" action="">
							            <input type="hidden" name="token" value="${token}">
							            <input type="hidden" value="${demand.releasenum-demand.applicationnum}" name="YauctionNum" id="YauctionNum"/>
							            <input type="hidden" value="dshorder" name="zt"/>
							            <input type="hidden" value="" name="executionplan" id="executionplan"/>
							            <input type="hidden" value="${demand.demandid}" name="demandid" id="demandid"/>
							            <input type="hidden" value="${demand.favorableway}" name="favorableway" id="favorableway"/>
							            <input type="hidden" value="${demand.orderprice}" name="orderprice" id="orderprice">
									    <input type="hidden" name="usemycompanydata" id="usemycompanydata">
									    <input type="hidden"  name="typeofinvoice" id="typeofinvoice">
								        <div class="new_demand" style="min-height:800px">
									        <div class="title">竞拍申请</div>
									        <div class="ApplyAuction" style="margin:0px 12px;border-bottom:1px dotted #cccccc;padding:30px 40px;">
									            <p class="size">
									            	<i style="font-style:normal;font-weight:600; background:#009cee;color:#fff;border-radius:50%;width:32px;height:32px;font-size:18px;display:inline-block;text-align:center;line-height:32px; margin-right:20px;">1</i>
									            	<b>请填写您要竞拍的数量：</b>
													<input type="text" name="auctionnum" value="" 
										            	 			onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))'
		 													        oninput= 'this.value = this.value.replace(/\D+/g, "")'
		 													        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")' 
		  													        onblur = 'this.value = this.value.replace(/\D+/g, "")' 
		  													        onkeyup ='settolyg(this.value)' id="auctionnum" />
																	&emsp;单&emsp;最多可竞拍${demand.releasenum-demand.applicationnum}单（<span>* 必填</span>）
													<div id="tips_success1" style="color: red;margin:0px 0px 10px 50px;margin-bottom:0;" ></div>
												</p>
<!-- 									         onchange="settolyg(this.value);" -->
									           
									            <p class="phone">
									                <i style="font-style:normal;font-weight:600; background:#009cee;color:#fff;border-radius:50%;width:32px;height:32px;font-size:18px;display:inline-block;text-align:center;line-height:32px; margin-right:20px;">2</i>
										            <b>请填写您用的外显号码：</b><input type="text" class="input" name="explicittel" value="" id="explicittel">&emsp;（<span>* 必填</span>）
										            <div id="tips_success2" style="color: red;margin:0px 0px 10px 50px;margin-bottom:0;" >
										            </div>
										            </p>
									            <p style="margin-bottom:30px;"><i style="font-style:normal;font-weight:600; background:#009cee;color:#fff;border-radius:50%;width:32px;height:32px;font-size:18px;display:inline-block;text-align:center;line-height:32px; margin-right:20px;">3</i><b>预计收益 ：</b> （<span>* 必填</span>）
												<a href="../mso1.4.2/supplier_index.html" >&emsp;&emsp;点此查看MSO平台收费规则 >></a>
									            <ul style="padding-left:73px;">
									                <li>
									                    <p style="font-size:13px;margin-bottom:30px;">竞拍手续费：<span id="jpsxf">0.00</span>元</p>
									                    
								
									                    <p style="font-size:13px;margin-bottom:20px;">我能开的发票类型<b style="font-weight: 300;color:#333;">（小规模纳税人增票需另收3%税费，普票另收6%税费）</b></p>
									                    
									                    <p style="margin-bottom:16px;">
									                    <input type="radio"  name="typeofinvoice1" id="typeofinvoice1" value="1" onclick="funtypeofinvoice(this)">增票（一般纳税人）&emsp;&emsp;&emsp;
									                    <input type="radio"  name="typeofinvoice1" id="typeofinvoice2" value="2" onclick="funtypeofinvoice(this)">增票（小规模纳税人）&emsp;&emsp;&emsp;
									                    <input type="radio"  name="typeofinvoice1" id="typeofinvoice3" value="3" onclick="funtypeofinvoice(this)">普票
									                    <div id="tips_success4" style="color: red;display: none;"  >请选择我能开的发票类型。</div>
									                    
									                    <p style="margin-bottom:30px;display: none;" id="typeofinvoice1show">税费=<span>0</span>元</p>
									                    <p style="margin-bottom:10px;display: none;" id="typeofinvoice2show">税费=结算金额×3%=<span id="typeofinvoice2showv">0.00</span>元</p>
									                    <p style="margin-bottom:30px;display: none;" id="typeofinvoice3show">税费=结算金额×6%=<span id="typeofinvoice3showv">0.00</span>元</p>
									                    <p style="margin-bottom:30px;display:none;">信息服务费=结算金额*8%<span id="ptysf"></span></p>
									                    <div id="tips_success5" style="color: red;display: none;text-align: left;margin-left:160px;">请选择接受MSO平台收费规则。</div>



														


									                </li>
									            </ul>



												<p style="font-size:16px;font-weight: 700;margin-bottom:30px;padding-left:50px;border-bottom:1px #ccc solid;padding-bottom:30px">预计收益<!--=单价*数量-(竞拍手续费+税费)-->=<span  style=" font-size:24px">￥</span><span id="tolyg" style=" font-size:24px">0.00</span>元</p>

														<p style="font-size:13px;font-weight: 700;margin-bottom:20px;padding-left:50px">是否需要信息服务<b style="font-weight: 300;color:#333;">（如果使用，将收取项目总结款金额的8%作为信息服务费）</b></p>
									                    
									                    <p style="margin-bottom:16px;padding-left:50px">
									                    <input type="radio" name="usemycompanydata1" id="usemycompanydata1" value="1" onclick="funusemycompanydata(this)">是&emsp;&emsp;&emsp;&emsp;
									                    <input type="radio" name="usemycompanydata1" id="usemycompanydata2" value="2" onclick="funusemycompanydata(this)">否</p>
									                    <p style="margin-bottom:30px;display: none;" id="usemycompanydata1show">信息服务费=结算金额×8%=<span id="usemycompanydata1showv">0.00</span>元</p>
									                    <p style="margin-bottom:30px;display: none;" id="usemycompanydata2show">信息服务费<span>0</span>元</p>
									                    <div id="tips_success3" style="color: red;display: none;"  >请选择是否需要数据支持。</div>






									        </div>
									            <div class="btn_box">
									                <div style="margin:40px 0px 12px 0px;text-align: left;margin-left:255px;"><input type="checkbox" checked="checked" id="sfgz" >&nbsp;接受MSO平台收费规则</div>
									                <button class="btn_orange" type="button" onclick="applyFormSu()" style="margin-left:180px;">确认提交</button>
									            </div>
									</div>







<!-- 								    <div class="ApplyAuction" > -->
<!-- 								            <p class="size">请填写您要竞拍的数量：<input type="text" name="auctionnum" value=""  -->
<!-- 								                                onkeypress = 'return /^\d$/.test(String.fromCharCode(event.keyCode||event.keycode||event.which))' -->
<!-- 														        oninput= 'this.value = this.value.replace(/\D+/g, "")' -->
<!-- 														        onpropertychange='if(!/\D+/.test(this.value)){return;};this.value=this.value.replace(/\D+/g, "")' -->
<!-- 														        onblur = 'this.value = this.value.replace(/\D+/g, "")' -->
<!-- 														        id="auctionnum">&emsp;单&emsp;最多可竞拍${demand.releasenum-demand.applicationnum}单（<span>* 必填</span>）<div id="tips_success1" style="color: red;" ></div></p> -->
<!-- 								            <p class="phone">请填写您用的外显号码：<input type="text" name="explicittel" value="" id="explicittel">&emsp;（<span>* 必填</span>） <div id="tips_success2" style="color: red;" ></div></p> -->
								           
<!-- 								            <p class="ExecutionPlan">请填写您的订单执行计划： （<span>* 必填</span>）<div id="tips_success3" style="color: red;" ></div></p> -->
								            
<!-- 								            <table class="ExecutionPlan tab table"> -->
<!-- 								             <c:forEach var="data" items="${dataTitle}" varStatus="status" > -->
<!-- 										             <c:if test="${status.count%7!=0}"> -->
<!-- 										                <c:if test="${status.count%7==1}"> -->
<!-- 										                 <tr> -->
<!-- 										                 <td>日期<br>完成单量</td> -->
<!-- 										                 <td>${fn:substring(data,5,10)}<br> -->
<!-- 										                 <input type="text" value="" id="${data1}Value" name="dateTempValue"> -->
<!-- 														 <input type="hidden" value="${data}" id="${data}"  name="dateTemp"></td> -->
<!-- 										                </c:if> -->
			
<!-- 										                <c:if test="${status.count%7!=1}"> -->
<!-- 										                 <td>${fn:substring(data,5,10)}<br> -->
<!-- 										                  <input type="text" value="" id="${data1}Value" name="dateTempValue"> -->
<!-- 														 <input type="hidden" value="${data}" id="${data}"  name="dateTemp"></td> -->
<!-- 										                 </td> -->
<!-- 										                </c:if> -->
<!-- 										             </c:if> -->
										             
<!-- 										             <c:if test="${status.count%7==0}"> -->
<!-- 										               <td>${fn:substring(data,5,10)} -->
<!-- 										                 <br> -->
<!-- 										                 <input type="text" value="" id="${data1}Value" name="dateTempValue"> -->
<!-- 														 <input type="hidden" value="${data}" id="${data}"  name="dateTemp"> -->
<!-- 										               </td> -->
<!-- 									                   </tr> -->
<!-- 										             </c:if> -->
<!-- 								             </c:forEach> -->
<!-- 								            </table> -->
<!-- 								        <p class="remind">提醒：安排计划时，建议预留几天时间以应对意料之外的情况！</p> -->
	
<!-- 								            <p class="Apply_bottom"> -->
<!-- 								            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- 								            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- 								            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- 								            <button type="button" class="btn" onclick="applyFormSu()">马上提交竞拍</button> -->
<!-- 								            </p> -->
<!-- 								    </div> -->
							     </form>
						</div>
    		</div>
    	</div>
    </div>

	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
    <script>
    		jQuery(function(){	 
      		    //请填写您要竞拍的数量
		        $("input[name=auctionnum]").blur(function(){
		            if($(this).val() == ''){
		                $("#tips_success1").addClass("error_red");
		                $("#tips_success1").text("请填写您要竞拍的数量！");
		            }else{
		                var YauctionNum= parseInt(document.getElementById("YauctionNum").value);
		                if(parseInt($(this).val())>YauctionNum){
			                $("#tips_success1").addClass("error_red");
			                $("#tips_success1").text("竞拍的数量不能大于"+YauctionNum+"单");
		                }else{
			                $("#tips_success1").removeClass("error_red");
			                $("#tips_success1").text("");
		                }
		            }
		        });
		        $("input[name=auctionnum]").focus(function(){
		            $("#tips_success1").removeClass("error_red");
		            $("#tips_success1").text("");
		        });
		      
		       $("input[name=explicittel]").blur(function(){
		            if($(this).val() == ''){
		                $("#tips_success2").addClass("error_red");
		                $("#tips_success2").text("请填写您用的外显号码！");
		            }else{
		                $("#tips_success2").removeClass("error_red");
		                $("#tips_success2").text("");
		            }
		        });
		        $("input[name=explicittel]").focus(function(){
		           $("#tips_success2").removeClass("error_red");
		           $("#tips_success2").text("");
		        });
		     })  
		        
			 function applyFormSu(){
			      			$(".ApplyAuction input").blur();
			   				if(0!=$(".error_red").length){
								$('html,body').animate({scrollTop:$(".error_red").offset().top-200}, 800);
			   				}
							//触发所有input绑定的blur验证
							//判断是否有错误。有就返回false;
							if($(".error_red").length!=0){
								 return false;
							}
		                
		                
						  var usemycompanydata=document.getElementById("usemycompanydata").value;
						  if(usemycompanydata==''){
						    document.getElementById("tips_success3").style.display="";
						     return false;
						  }else{
						    document.getElementById("tips_success3").style.display="none";
						  }
						  var typeofinvoice=document.getElementById("typeofinvoice").value;
						  if(typeofinvoice==''){
						    document.getElementById("tips_success4").style.display="";
						     return false;
						  }else{
						    document.getElementById("tips_success4").style.display="none";
						  }
						  
						  var sfgz=document.getElementById("sfgz").checked;
						  if(!sfgz){
						 	 document.getElementById("tips_success5").style.display="";
						 	 return false;
						  }else{
						 	 document.getElementById("tips_success5").style.display="none";
						  }
// 		                   var  dva= document.getElementsByName("dateTempValue");
// 		                   if(dva>0){
// 		                             var allVlaue="";
// 		                     		 for(var i=0;i<dva.length;i++){
// 								         var dvaElment=dva[i];
// 								         var dvaValue=dvaElment.value;
// 								         allVlaue+=dvaValue;
// 									  }
// 									  if(allVlaue==''){
// 									        $("#tips_success3").addClass("error_red");
// 							                $("#tips_success3").text("请填写您的订单执行计划！");
// 							                return false;
// 									  }else{
// 									      	$("#tips_success3").removeClass("error_red");
// 							                $("#tips_success3").text("");
// 									  }
// 		                   }
		                    document.getElementById("executionplan").value="";
							applyForm.action="supplier_lj_ApplyAuctionDo"; 
							applyForm.method="post";
							applyForm.submit();		      
			 }
    </script>
</body>
</html>
						