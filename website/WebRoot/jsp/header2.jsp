<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<meta name="baidu-site-verification" content="iElKrFy73G" />
	<link rel="stylesheet" href="home2/css/style.css"/>
	<script type="text/javascript" src="home2/js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="home2/js/main.js"></script>
	<script type="text/javascript" src="sweetalertjs/sweet-alert.js"></script>
	
	<c:if test="${'home2_toIndex'==page||'home2_toCase'==page||'home2_toAbout'==page||'home2_toHelp'==page}">
	    <div class="quick_menu">
			<ul>
				<li class="icon05"><a href="tencent://message/?uin=2850840276&Site=&menu=yes">联系客服</a></li>
			</ul>
		</div>
	</c:if>
    <div class="header clear">
        <div>
            <img src="home2/images/logo.gif" class="logo" alt="MSO营销服务外包平台" title="MSO营销服务外包平台" />
            <div>
                <span style="font-size:16px;">
                	<c:if test="${islogin=='nologin'}">
	    			 您好，欢迎来到眸事营销服务外包平台
	    			</c:if>
	    			<c:if test="${islogin=='login'}">
	    			 ${showName}，欢迎来到眸事营销服务外包平台
	    			</c:if>
               	</span>
                <div style="float:right;">
	    			<c:if test="${'nologin'==islogin}">
	    			  <a href="javascript:" class="search"></a> <a href="home2_toLogin" class="login">登录</a> <a href="home2_toRegister" class="register">注册</a>
	    			</c:if>
	                <c:if test="${'login'==islogin}">
	    			  <c:if test="${user.jfutype=='1'}">
	    			  <a href="../mso1.4.2/customer_home.html" class="login" style="border:0;width:auto;padding:0 12px;">发包方首页</a>
	    			  </c:if>
	    			  <c:if test="${user.jfutype=='2'}">
	    			  <a href="../mso1.4.2/supplier_index.html" class="login" style="border:0;width:auto;padding:0 12px;">接包方首页</a>
	    			  </c:if>
	    			  <a href="user_toLoginOut" class="register" style="border:0;width:auto;padding:0 12px;">安全退出</a>
	    			</c:if>
                </div>
            </div>
            
            <div>
                <span>总订单量：<span style="color:#006cb8;">368</span>个</span>&emsp;&emsp;<span>获客数量：<span style="color:#006cb8;">632,500</span>个</span>&emsp;&emsp;<span>交易金额：<span style="color:#006cb8;">22,453,750</span>元</span>
                <div class="nav">
                    <ul class="clear">

                    	<c:if test="${'home2_toIndex'==page}">
                    	  <li class="active"><a href="home2_toIndex">首页</a></li>
	    				</c:if>
	    				<c:if test="${'home2_toIndex'!=page}">
                    	  <li><a href="home2_toIndex">首页</a></li>
	    				</c:if>

	    				<c:if test="${'home2_toCase'==page}">
                    	  <li class="active"><a href="home2_toCase">案例中心</a></li>
	    				</c:if>
	    				<c:if test="${'home2_toCase'!=page}">
                    	   <li><a href="home2_toCase">案例中心</a></li>
	    				</c:if>
	    				
	    				
	    				<c:if test="${'home2_toHelp'==page}">
                    	  <li class="active"><a href="home2_toHelp">帮助中心</a></li>
	    				</c:if>
	    				<c:if test="${'home2_toHelp'!=page}">
                    	   <li><a href="home2_toHelp">帮助中心</a></li>
	    				</c:if>
                       
	    				
	    				<c:if test="${'home2_toAbout'==page}">
                    	  <li class="active"><a href="home2_toAbout">关于我们</a></li>
	    				</c:if>
	    				<c:if test="${'home2_toAbout'!=page}">
                    	  <li><a href="home2_toAbout">关于我们</a></li>
	    				</c:if>
                      
                    </ul>
                </div>
            </div>
        </div>
    </div>





    