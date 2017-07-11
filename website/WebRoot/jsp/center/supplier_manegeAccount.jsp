<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>  
<!DOCTYPE html>
<html>
<head lang="en">
    <title></title>
    <meta charset="UTF-8">
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Expires" content="0" />
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
</head>
<body class="supplier">


	<form name="theform" action="customer_lj_DemandList?zt=dsjdemand">
	    <input type="text" id="uid"  name="uid" value="${user.jfuid}"  size="50" style="display:none;" />
	    <input type="radio" name="myradio" value="random_name" checked style="display:none;"/>
	    <input type="text" id="dirname" value="2016/01/21" size="50" style="display:none;"/>
	    <input type="hidden" id="pagename" value="${pagename}" size="50" />
	</form>
	<!-- jsp文件头和头部 -->
	<div class="topNav"></div>
	
	
    <div class="content">
        <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
				<%@ include file="../lmenu.jsp"%>
			
	    		<div class="content_right">
	    			<div class="tips">安全提醒：为确保您的账号安全，如果已启用的账号使用者发生人事变更，请及时修改对应的账号权限！</div>
	    			
	    			<div class="personal_info edit">
	    				<div class="title_edit">账号管理</div>
	    				<div class="search_line">
	    					<a href="supplier_lj_subAccount">新增账号</a>
	    				</div>
	    				
	    				
	    				<table class="tab subTable" id="tabledata"> 
	    					<thead>
	    					<tr class="tab-line1">
	    						<th>用户账号</th>
	    						<th>状态</th>
	    						<th>类型</th>
	    						<th>创建时间</th>
	    						<th width="240">操作</th>
	    					</tr>
	    					</thead>
	    					<tbody></tbody>
	    				</table>
	    			</div>
	    		</div>
				<script>
					jQuery(function(){
						getUsers();
					});
					
					//进入编辑页面
					function gotoUpdateHtml(jfuid){
					    var jfuid=jfuid.toString()
						window.location.href="supplier_lj_subAccountEdit?jfuid="+jfuid;
					}
					
					
					
					
					//启用  停用修改方法
					function updateUsers(state,jfuid){
						var jfuid=jfuid.toString()
						var subAccount1={
							"jfuid":jfuid,
				            "jfudisable":state
				        };
						$.post("user_toUpdateDisable",subAccount1,function(date){
							console.log(date);
							if(date.code=="Y"){
								alert("操作成功!");
								getUsers();
							}else{
								console.log(date.msg);
							}
						});
					}
					function editAccount(jfuid){						
						var subAccount={
				            "jfutype":3,  //1-发包方   2-接包方   3-子账号
				            "jfuid":jfuid,
				            "jfuname":$("input.accountName").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
				            "jfupassword":$("input.loginPsd").val(),//密码(密文)用于登录(6-20 位    区分大小写)
				            "jfudisable":$("input[name=jfudisable]:checked").is("#input1")?"1":"2"//1-启用  2-停用
				        };
						$.post("user_toUpdateDisable",subAccount,function(date){
							if(date.code=="Y"){
								alert("修改成功！");
							}else{
								alert(date.msg);
							}
						});
					}	
				
function editAccount(jfuid){
	setCookie("jfuid",jfuid,0);
	
}

					function getUsers(){
						var subAccount1={
							"pid":"",//后台缓存取得
				            "pageNo":10000,
				            "currentPage":1
				        };
						$.post("user_getCuser",subAccount1,function(date){
							console.log(date);
							if(date.code=="Y"){
								console.log("取得list！"+date.userList);
								$("#tabledata tbody").html("");
								$.each(date.userList, function(index, c)
								{	
									var str;
									var jfuid= c.jfuid.toString();
									var qidong = 'unstop' + index;
									var tingyong = 'stop'+ index;
									var bianji = 'bianji' + index;

									
									str='<tr><td>';
									str+=c.jfuname;
									str+='</td><td>';
									if(c.jfudisable == 1){
										str+='启用';
									}else {
										str+='停用';
									}
									str+='</td><td>子账号</td><td>';
									str+=c.createtime;
									str+='</td><td>';
									if(c.jfudisable == 1){
//									str+='<span value="1" class="stop" >启用</span><span value="2" class="unstop1" >停用</span><a href="supplier_subAccountEdit.html">编辑</a>';
									str+='<span value="1" class="stop">启用</span><span value="2" class="unstop1" id='+qidong+'>停用</span><a id='+bianji+' href="javascript:;" data-userid='+jfuid+'>编辑</a>';
									
									}else{
										str+='<span value="1"  class="unstop2"  id='+tingyong+'>启用</span><span value="2" class="stop">停用</span><a id='+bianji+'  href="javascript:;" data-userid='+jfuid+'>编辑</a>';
									}
									str+='</td></tr>';
									
									$("#tabledata tbody").append(str);
									
									$("#" + qidong).click(function(){
										updateUsers(2,c.jfuid.toString());
									});
									$("#" + tingyong).click(function(){
										updateUsers(1,c.jfuid.toString());
									});
									$("#" + bianji).click(function(){
										gotoUpdateHtml(jfuid.toString());
									});
//									
								}); 
								
							}else{
								console.log(date.msg);
							}
						});
					}
				</script>
    		</div>
    	</div>
    </div>
    
    
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
</body>
</html>
