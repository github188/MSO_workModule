var smsCode="";
var jfuname="";
var email="";
var timeout1;
var code;
var active=GetRequest();
var RetrievePassword = React.createClass({
    componentDidMount:function(){
          if(active.type==3){
            $(".register_form .retrieve_1").hide();
            $(".register_form .retrieve_3").show();
            $(".retrieve_progress ul li").eq(1).addClass("active");
            $(".retrieve_progress ul li").eq(2).addClass("active");
            $(".register_form button.submit").html("确定");
          }
        $(".register form").bind("submit",function(){
            if($(".register_form .retrieve_3").is(":visible")){
                return register_3_submit();
            }else if($(".register_form .retrieve_2").is(":visible")){
                return register_2_submit();
            }else{
            return register_1_submit();
            }
        });
        var time;
        if(!isNull(sessionStorage.getItem("codeTimeOut"))){
            clearInterval(timeout1);
            timeout1=setInterval(function(){
                time=parseInt((new Date()-new Date(sessionStorage.getItem("codeTimeOut")))/1000);
                if(time>=90){
                    $("button.msg_code_no").attr("class","msg_code").html("发送短信验证码");
                    clearInterval(timeout1);
                    sessionStorage.removeItem("codeTimeOut");
                }
                $("span.timeout").html(90-time);
            },1000);
        }
        $("button.msg_code").click(function(){
            if($(this).hasClass("msg_code")){
                phone_code();
            }
        });
        $("button.msg_url").click(function(){
                email_code();
        });
    },
    render:function(){
        return (
          <div className="retrieve">
            <div className="retrieve_progress">
                <ul>
                    <li className="active"><div className="index"><i>1</i></div><p>选择找回方式</p></li>
                    <li><div className="index"><i>2</i></div><p>验证信息</p></li>
                    <li><div className="index"><i>3</i></div><p>重置密码</p></li>
                    <li><div className="index"><i>4</i></div><p>成功！</p></li>
                </ul>
            </div>
            <div className="form_box">
              <div className="register_form">
                <form>
                <table className="retrieve_1">
                  <tbody>
                    <tr>
                        <tr>
                            <td>登录账号：</td>
                            <td>
                                <input type="text" className="jfuname test" placeholder="手机/邮箱/用户名"/><i className="prompt_img"></i><span className="prompt_title">请输入账号</span>
                            </td>
                        </tr>
                            <tr>
                                <td>选择找回方式：</td>
                                <td>
                                    <input type="radio" className="test" name="mode" defaultChecked /><span>手机号码</span><input type="radio" name="mode" className="test" /><span>邮箱</span>
                                </td>
                            </tr>
                    </tr>
                  </tbody>
                </table>
                <div className="retrieve_2">
                      <table className="retrieve_2_phone">
                          <tr>
                              <td colSpan="2">短信验证码将发送至您 <span className="jfuname">13***66</span> 的手机号上，请注意查收</td>
                          </tr>
                          <tr>
                            <td className="msg_code" colSpan="2">
                                <input type="text" className="test" placeholder="输入短信收到的验证码" />
                                {isNull(sessionStorage.getItem("codeTimeOut"))?<button type="button" className="msg_code">发送短信验证码</button>:<button type="button" className="msg_code_no"><span className="timeout">{90}</span>s后再次发送</button>}
                                <p><i className="prompt_img"></i><span className="prompt_title">请输入手机验证码</span></p>
                            </td>
                        </tr>
                    </table>
                    <table className="retrieve_2_email">
                        <tr>
                            <td colSpan="2">验证链接已发送至您 <span className="jfuname">t***@163.com</span> 的邮箱上，请保持网络畅通</td>
                        </tr>
                        <tr>
                          <td className="msg_code" colSpan="2">
                              没收到邮件？<button type="button" className="msg_url">重新发送</button>
                          </td>
                      </tr>
                  </table>
                </div>
                <table className="retrieve_3">
                  <tr>
                      <td><span className="red_star">*</span>设置新密码：</td>
                      <td>
                          <input type="password" placeholder="请输入6-16位数字和字母组成的密码" className="jfupassword test"maxLength="16" /><i className="prompt_img"></i><span className="prompt_title">请输入6-16位数字和字母组成的密码</span>
                      </td>
                  </tr>
                  <tr>
                      <td><span className="red_star">*</span>确认密码：</td>
                      <td>
                          <input type="password" placeholder="再次输入密码" className="jfupassword_again test"  maxLength="16" /><i className="prompt_img"></i><span className="prompt_title">请再次输入密码</span>
                      </td>
                  </tr>
              </table>
              <div className="retrieve_4">密码已成功修改，你可以 <a href="login.html">点击登录</a> 或者 <a href="index.html">返回首页</a> </div>
                <button type="submit" className="btn submit">下一步</button>
                </form>
              </div>
            </div>
        </div>
        )
    }
});

function register_1_submit(){
    var phone=new RegExp("^[1][358][0-9]{9}$");
    if($(".jfuname").val().replace(/\s+/g,"")==""){
        $("html,body").animate({"scrollTop":0},300);
        $(".jfuname").removeClass("test_right").addClass("test_error").focus();
        return false;
    }else{
          $(".jfuname").removeClass("test_error").addClass("test_right");
    }
    if($("input[name=mode]:checked+span").text()=="手机号码"){
      phone_code();
    }else{
      email_code();
    }
    // $(".register_form .register_1").hide();
    // $(".register_form .register_2").show();
    // $(".register_progress ul li").eq(1).addClass("active").siblings().removeClass("active");
    // $("button.submit").text("注册");
    return false;
}
function register_2_submit(){
    if($("td.msg_code input.test").val().replace(/\s+/g,"")==""){
        $("td.msg_code").removeClass("test_right").addClass("test_error").find("input.test").focus();
        return false;
    }else{
    if(isNull(smsCode)?true:$("td.msg_code input.test").val()!=smsCode){
        $("td.msg_code").removeClass("test_right").addClass("test_error").find("input.test").focus().next().next().next().html("验证码错误，请重新输入");
        return false;
    }else{
        $(".register_form .retrieve_2").hide();
        $(".register_form .retrieve_3").show();
        $(".retrieve_progress ul li").eq(1).addClass("active");
        $(".retrieve_progress ul li").eq(2).addClass("active");
        $(".register_form button.submit").html("确定");
    }
    }
    return false;
}
function register_3_submit(){
    if($(".jfupassword").val()==""){
        $(".jfupassword").removeClass("test_right").addClass("test_error").focus();
        return false;
    }else{
        $(".jfupassword").removeClass("test_error").addClass("test_right");
    }
    if($(".jfupassword_again").val()==""){
        $(".jfupassword_again").removeClass("test_right").addClass("test_error").focus();
        return false;
    }else{
      if($(".jfupassword_again").val()!=$(".jfupassword").val()){
          $(".jfupassword_again").removeClass("test_right").addClass("test_error").focus().next().next().text("两次输入不一致");
          return false;
      }else{
          $(".jfupassword_again").removeClass("test_error").addClass("test_right");
      }
    }
    post();
    return false;
}
function phone_code(){
    var json={
        type:2,//用户类型
        jfuname:strEnc($("input.jfuname").val(),key1,key2,key3),//用户名/ 对应 2.0版本的手机号
    };
    jQuery.ajax({
        type : 'post',
        url : urlTelCode,
        dataType : 'json',
        data : json,
        success : function(res) {
            if(res.code=="Y"){
                smsCode = res.smsCode;
                jfuname = res.jfuname;
                $(".register_form .retrieve_1").hide();
                $(".register_form .retrieve_2").show();
                $(".register_form .retrieve_2_emain").hide();
                $(".register_form .retrieve_2_phone").show();
                $(".retrieve_progress ul li").eq(1).addClass("active");
                var a=jfuname.substring(2,9);
                var jfunameText=jfuname.replace(a,'***');
                $(".retrieve_2_phone .jfuname").html(jfunameText);
                sessionStorage.setItem("codeTimeOut",new Date());
                $("button.msg_code").attr("class","msg_code_no").html('<span class="timeout">90</span>s后再次发送');
                clearInterval(timeout1);
                timeout1=setInterval(function(){
                    var time=parseInt((new Date()-new Date(sessionStorage.getItem("codeTimeOut")))/1000);
                    if(time>=90){
                        $("button.msg_code_no").attr("class","msg_code").html("发送短信验证码");
                        clearInterval(timeout1);
                        sessionStorage.removeItem("codeTimeOut");
                    }
                    $("span.timeout").html(90-time);
                },1000);
            }else if(res.code=="N"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("操作失败");
            }else if(res.code=="ER0013"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("用户名或者手机号码不能为空!");
            }else if(res.code=="ER003"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("您输入的用户名不存在!");
            }
        },
        error : function(msg) {
            console.log(msg);
        }
    });
}
function email_code(){
    var json={
        jfuname:$("input.jfuname").val(),//用户名/ 对应 2.0版本的手机号
    };
    jQuery.ajax({
        type : 'get',
        url : urlEmailCode,
        dataType : 'json',
        data : json,
        success : function(res) {
            if(res.code=="Y"){
                smsCode = res.smsCode;
                jfuname = res.jfuname;
                email = res.email;
                $(".register_form .retrieve_1").hide();
                $(".register_form button.submit").hide();
                $(".register_form .retrieve_2").show();
                $(".register_form .retrieve_2_email").show();
                $(".register_form .retrieve_2_phone").hide();
                $(".retrieve_progress ul li").eq(1).addClass("active");
                var a=email.indexOf('@');
                var b=email.substring(1,a);
                var emailText=email.replace(b,'***');
                $(".retrieve_2_email .jfuname").html(emailText);
            }else if(res.code=="N"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("操作失败");
            }else if(res.code=="ER003"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("您输入的用户名不存在!");
            }else if(res.code=="ER0013"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("用户名或者手机号码不能为空!");
            }else if(res.code=="ER0011"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("您输入的用户名或手机号码格式不对!");
            }else if(res.code=="ER0027"){
                $("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html("邮件格式不正确!");
            }
        },
        error : function(msg) {
            console.log(msg);
        }
    });
}
function post(){
    var json={
        type:isNull(active.type)?2:active.type,//用户类型
        username:isNull(active.jfuname)?jfuname:active.jfuname,//用户名/ 对应 2.0版本的手机号
        password:$("input.jfupassword").val(),//登陆密码
        smscode:isNull(active.smsCode)?smsCode:active.smsCode,//邀请码
    };
    jQuery.ajax({
        type : 'POST',
        url : urlResetPassword,
        dataType : 'json',
        data : json,
        success : function(res) {
          if(res.code=="Y"){
                $(".retrieve_progress ul li").eq(3).addClass("active");
                $(".register_form .retrieve_3").hide();
                $(".register_form .retrieve_4").show();
                $(".register_form button.submit").hide();
            }else{
                alert(res.msg);
            }
        },
        error : function(msg) {
            console.log(msg);
        }
    });
}

React.render(<RetrievePassword/>,$(".register")[0]);
