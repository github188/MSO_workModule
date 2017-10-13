
/*查看是否有下载*/
function whetherDown(jfuid,callBack){
		callBack = callBack || function (){};
	/*查看是有下载*/
		var url = domain + "/report/f";
		
		$.when($.ajax({
			 url:url,
			 type:"get",
			 contentType:'application/json',
			 data:{
			  "jfuid": jfuid
			 }
		})).then(function (data){
			var ndcountHfd = data.ndcountHfd*1;
			var ndcountHfdf = data.ndcountHfdf*1;
			/*ndcountHfd 销售线索挖掘 ndcountHfdf 数据加工*/
			sessionStorage.setItem("notdownloadcount",(ndcountHfd+ndcountHfdf)); 
			callBack();
		}).fail(function (data){
			//alert('获取数据失败！');
		});
		
	//debugger;
}

var LoginBox = React.createClass({
   componentDidMount:function(){
     if(sessionStorage.getItem("remember")=="1"){
       $("input.username").val(sessionStorage.getItem("username"));//用户名
       $("input.pswd").val(sessionStorage.getItem("jfupassword"));//密码
       $(".login-box ul li.remember-psw span").addClass("selected");
     }
     $("input.username").blur(function(){
      if($(this).val() == ''){
          $(this).addClass("error");
          $("p.msg").addClass("msg-error").text("请输入账号");
          return false;
      }else{
          $(this).removeClass("error");
          $("p.msg").removeClass("msg-error").text("");
      }
      });
      $("input.username").focus(function(){
          $(this).removeClass("error");
          $("p.msg").removeClass("msg-error").text("");
      });
      $("input.pswd").blur(function(){
          if($(this).val() == ''){
              $(this).addClass("error");
              $("p.msg").addClass("msg-error").text("请输入密码");
              return false;
          }else{
              $(this).removeClass("error");
              $("p.msg").removeClass("msg-error").text("");
          }
      });
      $("input.pswd").focus(function(){
          $(this).removeClass("error");
          $("p.msg").removeClass("msg-error").text("");
      });
      $(".login-box ul li.remember-psw span").toggle(function(){
          $(this).addClass("selected");
      },function(){
          $(this).removeClass("selected");
      });
      document.onkeydown=function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];
             if(e && e.keyCode==13){ // enter 键
                 $('.btn_login').click();
            }
        };
		
	
	function bconverRecord(crtype){
		var bconverRecordUrl = domain+'/bconverRecord';
		var mosid = sessionStorage.getItem('msoid');
		var visitid = sessionStorage.getItem('visitid');
//		if(mosid.substring(0,1)==1){
//			return;
//		}
		$.when($.ajax({
			 url:bconverRecordUrl,
			 type:"post",
			 contentType:'application/json',
			 data:JSON.stringify({
			  "cookie":mosid,
			  "createtime": "",
			  "crtype":crtype,
			  "updatetime": "",
			  "visitid": visitid,
			  "crid": "",
			  "jfuid": ""
			 })
		})).then(function (data){
			//debugger;
		}).fail(function (data){
			//debugger;
		});
	}
  $('.btn_login').click(function(){
		var checkU = $.trim($("input.username").val());
		var checkP = $("input.pswd").val();
		// console.log(checkU);
		// console.log(checkP);
  		if(checkU!="" && checkP!=""){
        sessionStorage.removeItem("showName");//显示用户名
        sessionStorage.removeItem("invitationcode");//邀请码
        sessionStorage.removeItem("headurls");//用户头像url
        sessionStorage.removeItem("compname");//公司名
        sessionStorage.removeItem("jfuid");//用户id
        sessionStorage.removeItem("compemail");//邮箱
        sessionStorage.removeItem("pid");//父账号id
        sessionStorage.removeItem("realname");//昵称
        sessionStorage.removeItem("jfustate");//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
        sessionStorage.removeItem("jfutype");//用户类型 1 发包方 2接包方
        sessionStorage.removeItem("jfuname");
        sessionStorage.removeItem("remember");
        sessionStorage.removeItem("logontimes");
        sessionStorage.removeItem("trusteeship");//是否托管 0-非托管 1-托管,
        sessionStorage.removeItem("brandname");//品牌名
            var showName = "";
            var invitationcode = "";
            var headurls = "";
            var compname = "";
            var jfuid = "";
            var pid = "";
            var realname = "";
            var jfustate = "";
            var jfutype = "";
            var compemail = "";
            var remember = "";
			if($(".remember-psw span").hasClass("selected")){
				 remember="1";
			   }else{
				 remember="0";
			   }
			var data = {
			  remember:remember,//0-不记住 1-记住密码
			  jfuname:$("input.username").val(),//用户名/手机号
			  jfupassword:$("input.pswd").val(),//登录密码
			}
		
            $.ajax({
                type:"post",
                url:urlLogin,
                async:true,
                data:data,
                contentType:"application/x-www-form-urlencoded;charset=utf-8",
                dataType: "json",
                success:function(data){
	                if(data.code=="Y"){
						document.cookie="jfuid="+data.jfuid+"; domain=.mshuoke.com; path=/";
						document.cookie="showName="+encodeURIComponent(data.showName)+"; domain=.mshuoke.com; path=/";
						document.cookie="jfuname="+encodeURIComponent(data.jfuname)+"; domain=.mshuoke.com; path=/";
						
						window.location.href="https://customer.mshuoke.com";
						
					}else if(data.code=="ER003"){//用户名不存在
					   $("p.msg").addClass("msg-error").text("您输入的用户名不存在！");
					}else if(data.code=="ER004"){//密码错误
					   $("p.msg").addClass("msg-error").text("您的密码有误！");
					}else if(data.code=="ER005"){//账号已停用
					   $("p.msg").addClass("msg-error").text("该账号已停用！");
					}else if(data.code=="N"){//登录失败
					   $("p.msg").addClass("msg-error").text("登录失败！");
					}else{
					   return false;
					}
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
					 console.log(XMLHttpRequest);
					 console.log(textStatus);
					 console.log(errorThrown);
					 console.log(this);
				  },
             });
  		}else if(checkU!=""){
          $("p.msg").addClass("msg-error").text("请输入密码");
      }else if(checkP!=""){
          $("p.msg").addClass("msg-error").text("请输入用户名");
      }else {
        $("p.msg").addClass("msg-error").text("请输入用户名和密码");
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
                <a href="retrievePassword.html" id="forgetPSW" className="forgetPSW">忘记密码</a>
            </li>
            <li><button type="button" className="btn_login">登录</button></li>
            <li className="a-center">还没有账号？马上<a className="register-new" href="register-customer.html">注册新账号</a></li>
         </ul>
         </form>
       </div>
       )
   }
});
React.render(<LoginBox/>,$(".login-box")[0]);
