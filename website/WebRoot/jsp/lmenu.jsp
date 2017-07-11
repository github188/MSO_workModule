<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

	    		<div class="menu_left">
		    		<c:if test="${user.jfutype=='1'}">
		    			<ul>
		    				<h3 class="nav05">完善资料</h3>
			    			<c:if test="${pagename=='customer_lj_AccountManagement'}">
			    				<li><a class="selected" href="html/customerMyInfo.html">基本信息</a></li>
			    			</c:if>
			    			<c:if test="${pagename!='customer_lj_AccountManagement'}">
			    				<li><a  href="html/customerMyInfo.html">基本信息</a></li>
			    			</c:if>
		    				<c:if test="${pagename=='customer_lj_PhotoSet'}">
			    				<li><a class="selected" href="customer_lj_PhotoSet">头像设置</a></li>
			    			</c:if>
			    			<c:if test="${pagename!='customer_lj_PhotoSet'}">
			    				<li><a href="customer_lj_PhotoSet">头像设置</a></li>
			    			</c:if>
		    			</ul>
		    			<ul class="last">
		    				<h3 class="nav06">安全设置</h3>
		    				<c:if test="${pagename=='customer_lj_ChangePassword'}">
			    				<li><a class="selected" href="customer_lj_ChangePassword">修改密码</a></li>
			    			</c:if>
			    			<c:if test="${pagename!='customer_lj_ChangePassword'}">
			    				<li><a href="customer_lj_ChangePassword">修改密码</a></li>
			    			</c:if>
		    			</ul>
		    	     </c:if>
		    	     
		    	     
		    			
		    			
		    			
		    			
			    	 <c:if test="${user.jfutype=='2'}">
			    	 	<ul>
		    				<h3 class="nav05">完善资料</h3>
			    			<c:if test="${pagename=='supplier_lj_Supplier_BasicInfo'}">
			    				<li><a class="selected" href="html/PerfectData.html">基本信息</a></li>
			    			</c:if>
			    			<c:if test="${pagename!='supplier_lj_Supplier_BasicInfo'}">
			    				<li><a  href="html/PerfectData.html">基本信息</a></li>
			    			</c:if>
		    				<c:if test="${pagename=='customer_lj_PhotoSet'}">
			    				<li><a class="selected" href="customer_lj_PhotoSet">头像设置</a></li>
			    			</c:if>
			    			<c:if test="${pagename!='customer_lj_PhotoSet'}">
			    				<li><a href="customer_lj_PhotoSet">头像设置</a></li>
			    			</c:if>
		    			</ul>
		    			
		    			<c:if test="${user.pid==''}">
			    			<ul>
			    				<h3 class="nav06">安全设置</h3>
			    				<c:if test="${pagename=='customer_lj_ChangePassword'}">
				    				<li><a class="selected" href="customer_lj_ChangePassword">修改密码</a></li>
				    			</c:if>
				    			<c:if test="${pagename!='customer_lj_ChangePassword'}">
				    				<li><a href="customer_lj_ChangePassword">修改密码</a></li>
				    			</c:if>
			    			</ul>
		    			
		    		   
			    		   <ul class="last">
			    				<h3 class="nav07">子账号管理</h3>
			    				<c:if test="${pagename=='supplier_lj_manegeAccount'}">
				    				<li><a class="selected" href="/html/subAccount.html">账号管理</a></li>
				    			</c:if>
				    			<c:if test="${pagename!='supplier_lj_manegeAccount'}">
				    				<li><a href="/html/subAccount.html">账号管理</a></li>
				    			</c:if>
			    			</ul>
		    		   </c:if>
		    		   <c:if test="${user.pid!=''}">
		    		   
		    		       	<ul class="last">
			    				<h3 class="nav06">安全设置</h3>
			    				<c:if test="${pagename=='customer_lj_ChangePassword'}">
				    				<li><a class="selected" href="customer_lj_ChangePassword">修改密码</a></li>
				    			</c:if>
				    			<c:if test="${pagename!='customer_lj_ChangePassword'}">
				    				<li><a href="customer_lj_ChangePassword">修改密码</a></li>
				    			</c:if>
			    			</ul>
		    			
		    		   
		    		    </c:if>
		    	     </c:if>
	    		</div>