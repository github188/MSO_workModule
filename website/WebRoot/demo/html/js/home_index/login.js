var LoginBox = React.createClass({
    componentDidMount:function(){
        document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
			if(e && e.keyCode==13){ // enter 键
				$('.btn_login').click();
			}
        };

    $('.btn_login').click(function(){
		var checkU = $.trim($("input.username").val());
		var checkP = $("input.pswd").val();
		if(checkU=="需求方"){
			var loginData={"report":null,"pageNo":1,"currentPage":0,"pageSize":10,"entityOrField":true,"url":null,"totalCount":0,"pageCount":0,"results":null,"pageStr":null,"ajaxPageStr":"","code":"Y","msg":"登录成功","newId":null,"jfuid":"60","jfutype":"1","pid":"","jfuname":"需求方","jfupassword":"kBuJV+le2Ns=","jfustate":4,"jfudisable":1,"jfumobilephone":" ","jfuinvitationcode":null,"invitationcode":"F2C774","showName":"需求方","headurls":"images/customer/photo.png","compemail":"","realname":"测试教育","compname":"测试教育","remember":"0","logontimes":14,"trusteeship":1,"brandname":"测试教育","userList":null,"companyInfo":4};
			for(var name in loginData){
				sessionStorage.setItem(name, loginData[name]); 
				localStorage.setItem(name, loginData[name]);
			} 
			location.href = "html/customer_home.html";
		}else {
			$("p.msg").addClass("msg-error").text("请输入'需求方'进入页面");
		}	
  	});
   },
   render:function(){
       return(
         <div>
         <form name="login">
         <ul>
            <li><p className="msg"></p></li>
            <li><i className="icon-user"></i><input type="text" className="username" placeholder="手机/邮箱/用户名" /></li>
            <li><i className="icon-psw"></i><input type="password" className="pswd" placeholder="密码" /></li>
            <li className="remember-psw">
                <span>记住密码</span>
                <a href="retrievePassword.html" id="forgetPSW">忘记密码</a>
            </li>
            <li><button type="button" className="btn_login">登录</button></li>
            <li className="a-center">还没有账号？马上<a href="register-customer.html">注册新账号</a></li>
         </ul>
         </form>
       </div>
       )
   }
});
React.render(<LoginBox/>,$(".login-box")[0]);
