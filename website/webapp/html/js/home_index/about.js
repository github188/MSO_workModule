var LoginBox = React.createClass({
   componentDidMount:function(){
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
    $(".btn_login").click(function(){
      $("input").blur();
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
        remember==1;
      }else{
        remember==0;
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
              //console.log(data);
          if(data.code=="Y"){
            sessionStorage.setItem("showName", data.showName);//显示用户名
            sessionStorage.setItem("invitationcode", data.invitationcode);//邀请码
            sessionStorage.setItem("headurls", data.headurls);//用户头像url
            sessionStorage.setItem("compname", data.compname);//公司名
            sessionStorage.setItem("jfuid", data.jfuid);//用户id
            sessionStorage.setItem("compemail", data.compemail);//邮箱
            sessionStorage.setItem("pid", data.pid);//父账号id
            sessionStorage.setItem("realname", data.realname);//昵称
            sessionStorage.setItem("jfustate", data.jfustate);//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
            //sessionStorage.setItem("jfutype", data.jfutype);//用户类型 1 发包方 2接包方
            if(data.jfutype==1){
              window.location.href="customer_home.html"
            }else{
              window.location.href="supplier_index.html"
            }
          }else if(data.code=="ER003"){//用户名不存在
            $("p.msg").addClass("msg-error").text(data.msg);
          }else if(data.code=="ER004"){//密码错误
            $("p.msg").addClass("msg-error").text(data.msg);
          }else if(data.code=="ER005"){//账号已停用
            $("p.msg").addClass("msg-error").text(data.msg);
          }else if(data.code=="N"){//账号停用
            $("p.msg").addClass("msg-error").text(data.msg);
          }else{
            return false;
          }
            },
            error:function(){},
      });
    });
   },
   render:function(){
       return(
         <div>
         <h2>账号登录</h2>
         <ul>
            <li><p className="msg"></p></li>
            <li><i className="icon-user"></i><input type="text" className="username" placeholder="手机/邮箱/用户名" /></li>
            <li><i className="icon-psw"></i><input type="password" className="pswd" placeholder="密码" /></li>
            <li className="remember-psw">
                <span>记住密码</span>
                <a href="forget.html">忘记密码</a>
            </li>
            <li><button type="button" className="btn_login">登录</button></li>
            <li className="a-center">还没有账号？马上<a href="register.html">注册新账号</a></li>
         </ul>





       </div>
       )
   }
});
React.render(<LoginBox/>,$(".login-box")[0]);
