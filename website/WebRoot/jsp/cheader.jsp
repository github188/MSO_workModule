<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>  
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/style.css"/>
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>	
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" >
	function seachtop1(){
		    var a=document.getElementById("ztseach");
		    a.value="supplier_lj_demandHall";
		    var seachtop=document.getElementById("seachtop");
			seachtop.action="supplier_lj_demandHall2"; 
			seachtop.method="post";
			seachtop.submit();
	}
</script>
	<form name="theform" action="customer_lj_DemandList?zt=dsjdemand">
	    <input type="text" id="uid"  name="uid" value="${user.jfuid}"  size="50" style="display:none;" />
	    <input type="radio" name="myradio" value="random_name" checked style="display:none;"/>
	    <input type="text" id="dirname" value="2016/01/21" size="50" style="display:none;"/>
	    <input type="hidden" id="pagename" value="${pagename}" size="50" />
	</form>
	
	<div class="top">
    	<div class="welcome_box">
    		<div class="welcome">
	    		<div class="left">
					<p class="name">欢迎您,<span>${showName}</span>!</p>
	    			<p class="mail">站内信<span>6</span></p>
	    		</div>
	    		<div class="right">
	    			<ul>
	    				<li ><a href="home2_toIndex">眸事首页</a></li>
	    				
	    				<c:if test="${user.jfutype=='1'}">
		    				<li><a href="customer_lj_DemandList?zt=zxzorder">我的订单</a></li>
		    				<li><a href="tencent://message/?uin=2850840276&Site=&menu=yes">客服中心</a></li>
	    				</c:if>
	    				
	    				<c:if test="${user.jfutype=='2'}">
		    				<li><a href="supplier_lj_OrderList?zt=dshorder">我的订单</a></li>
		    				<li><a href="tencent://message/?uin=2850840278&Site=&menu=yes">客服中心</a></li>
	    				</c:if>
	    				
	    				<li class="last"><a href="user_toLoginOut">安全退出</a></li>
	    			</ul>
	    		</div>
    		</div>
    	</div>
    	<div class="logo_box">
    		<div class="left">
    			<div class="logo"><img src="images/public/logo.png" /></div>
    			<div class="logo_word">
    				<p class="bottom_line">眸事，让销售变简单！</p>
    				<p>www.mshuoke.com</p>
    			</div>
    		</div>
    		
    		<div class="right">
    			<c:if test="${user.jfutype=='1'}">
    			 		<c:if test="${user.jfustate==4}">
		    			    <!--<a href="customer_lj_DemandManagement1">发布一个需求</a>-->
		    			</c:if>  
    			</c:if>
    			
    			<c:if test="${user.jfutype=='2'}">
	    			<form name="seachtop"  method="post" id="seachtop" action="">
	    				<input type="hidden" name="ztseach" id="ztseach" value="${ztseach}"/>
		    			<input type="text" name="sorderName" id="sorderName" value="${pa.sorderName}" style="font-family:'Arial';font-size: 13px; color:#000000;font-weight: normal;font-style: normal;text-decoration: none;"/>
		    			<button  onclick="seachtop1()">搜索需求</button>
		    		</form>
    			</c:if>
    			
    		</div>
    		
    	</div>
    </div>





    