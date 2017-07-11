var smsCode="";
var jfuname="";
var timeout1;
var code;
var active=GetRequest();
var Registe = React.createClass({
  componentDidMount:function(){
        createCode();
        $(".jfutype button").click(function(){
           $(this).addClass("active").siblings().removeClass("active");
        });
        $(".new_register form").bind("submit",function(){
          if($(".register_form .register_2").is(":visible")){
            return register_2_submit();
          }
          return register_1_submit();
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
        $("i.register_close").click(function(){
            $(".register_window").hide();
        });
  },
  render:function(){
    return (
      <form>
          <div className="register_form">
                  <table>
                      <tbody className="register_1">
                          <tr>
                              <td><span className="red_star">*</span>手机号码：</td>
                              <td>
                                  <input type="text" className="jfuname test" style={{"width":"360px"}} /><i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请输入手机号码</span></div>
                              </td>
                          </tr>
                          <tr>
                              <td><span className="red_star">*</span>图形验证码：</td>
                              <td className="img_code">
                                  <input type="text" placeholder="输入图片内的验证码" className="test" /><div id="img_code"></div><i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请输入图片内的验证码</span></div>
                              </td>
                          </tr>
                          <tr>
                              <td><span className="red_star">*</span>短信验证码：</td>
                              <td className="msg_code">
                                  <input type="text" className="test" />
                                  {isNull(sessionStorage.getItem("codeTimeOut"))?<button type="button" className="msg_code">发送短信验证码</button>:<button type="button" className="msg_code_no"><span className="timeout">{parseInt((new Date()-new Date(sessionStorage.getItem("codeTimeOut")))/1000)}</span>s后再次发送</button>}
                                  <i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请输入手机验证码</span></div>
                              </td>
                          </tr>
                      </tbody>
                      <tbody className="register_2">
                        <tr>
                            <td><span className="red_star">*</span>注册类型：</td>
                            <td className="jfutype" style={{"line-height":"40px","font-size":"16px"}}>服务方</td>
                        </tr>
                        <tr>
                            <td><span className="red_star">*</span>贵公司名称：</td>
                            <td>
                                <input type="text" placeholder="请输入贵公司的名称" className="compname test" /><i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请输入贵公司的名称</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="red_star">*</span>您的称呼：</td>
                            <td>
                                <input type="text" placeholder="请输入您的称呼，以便您的专属客服联系您" className="realname test" /><i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请输入您的称呼</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="red_star">*</span>邮箱：</td>
                            <td>
                                <input type="text" placeholder="请输入您的邮箱，以方便联系" className="compemail test" /><i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请输入邮箱</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="red_star">*</span>登录密码：</td>
                            <td>
                                <input type="password" placeholder="请输入您6-16位数字或字母组成的密码" maxLength="16" className="jfupassword test" /><i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请输入您6-16位数字或字母组成的密码</span></div>
                            </td>
                        </tr>
                        <tr>
                            <td><span className="red_star">*</span>确认密码：</td>
                            <td>
                                <input type="password" placeholder="请再次输入密码" className="jfupassword_again test" /><i className="prompt_img_right"></i><div><i className="prompt_img_error"></i><span className="prompt_title">请再次输入密码</span></div>
                            </td>
                        </tr>
                        </tbody>
                  </table>
          </div>
          <button type="submit" className="submit"></button>
      </form>
    )
  }
})

function register_1_submit(){
      var phone=new RegExp("^[1][0-9]{10}$");
      if($(".jfuname").val().replace(/\s+/g,"")==""){
          $("html,body").animate({"scrollTop":0},300);
          $(".jfuname").focus().parent().removeClass("test_right").addClass("test_error");
          return false;
      }else{
        if(isNull(jfuname)?!phone.test($(".jfuname").val().replace(/\s+/g,"")):$(".jfuname").val().replace(/\s+/g,"")!=jfuname){
            $("html,body").animate({"scrollTop":0},300);
            $(".jfuname").focus().parent().removeClass("test_right").addClass("test_error").find(".prompt_title").html("请输入正确手机号码");
            return false;
        }else{
            $(".jfuname").parent().removeClass("test_error").addClass("test_right");
        }
      }
      if($("td.img_code input.test").val().replace(/\s+/g,"")==""){
          $("html,body").animate({"scrollTop":0},300);
          $("td.img_code").removeClass("test_right").addClass("test_error").find("input.test").focus();
          return false;
      }else{
        if($("td.img_code input.test").val().toLowerCase()!=code.toLowerCase()){
            $("html,body").animate({"scrollTop":0},300);
            $("input.test").focus();
            $("td.img_code").removeClass("test_right").addClass("test_error").find(".prompt_title").html("验证码错误，请重新输入");
            return false;
        }else{
            $("td.img_code").removeClass("test_error").addClass("test_right");
        }
      }
      if($("td.msg_code input.test").val().replace(/\s+/g,"")==""){
          $("html,body").animate({"scrollTop":0},300);
          $("td.msg_code").removeClass("test_right").addClass("test_error").find("input.test").focus();
          return false;
      }else{
      // if(isNull(smsCode)?true:$("td.msg_code input.test").val()!=smsCode){
      //     $("html,body").animate({"scrollTop":0},300);
      //     $("td.msg_code").removeClass("test_right").addClass("test_error").find(".prompt_title").html("验证码错误，请重新输入");
      //     return false;
      // }else{
      //     $("td.msg_code").removeClass("test_error").addClass("test_right");
      // }
      }
      $(".register_form .register_1").hide();
      $(".register_form .register_2").show();
      //$(".register_progress ul li").eq(1).addClass("active").siblings().removeClass("active");
      $("button.submit").addClass("button_register");
      $(".new_register p.title").css("margin-bottom","50px");
      location.hash="#step2";
    return false;
}
function register_2_submit(){
    if($(".compname").val()==""){
        $("html,body").animate({"scrollTop":0},300);
        $(".compname").focus().parent().removeClass("test_right").addClass("test_error");
        return false;
    }else{
        $(".compname").parent().removeClass("test_error").addClass("test_right");
    }
    if($(".realname").val()==""){
        $("html,body").animate({"scrollTop":0},300);
        $(".realname").focus().parent().removeClass("test_right").addClass("test_error");
        return false;
    }else{
        $(".realname").parent().removeClass("test_error").addClass("test_right");
    }
    if($(".compemail").val()==""){
        $("html,body").animate({"scrollTop":0},300);
        $(".compemail").focus().parent().removeClass("test_right").addClass("test_error").find(".prompt_title").text("请输入邮箱");
        $(".compemail").parent().removeClass("test_right").addClass("test_error").focus();
        return false;
    }else{
      if($(".compemail").val().indexOf("@")==-1){
          $("html,body").animate({"scrollTop":0},300);
          $(".compemail").focus().parent().removeClass("test_right").addClass("test_error").find(".prompt_title").text("请输入正确的邮箱");
          $(".compemail").parent().removeClass("test_right").addClass("test_error").focus();
          return false;
      }
        $(".compemail").parent().removeClass("test_error").addClass("test_right");
    }
    if($(".jfupassword").val()==""){
        $("html,body").animate({"scrollTop":0},300);
        $(".jfupassword").focus().parent().removeClass("test_right").addClass("test_error");
        return false;
    }else{
        $(".jfupassword").parent().removeClass("test_error").addClass("test_right");
    }
    if($(".jfupassword_again").val()==""){
        $("html,body").animate({"scrollTop":0},300);
        $(".jfupassword_again").focus().parent().removeClass("test_right").addClass("test_error");
        return false;
    }else{
      if($(".jfupassword_again").val()!=$(".jfupassword").val()){
          $("html,body").animate({"scrollTop":0},300);
          $(".jfupassword_again").focus().parent().removeClass("test_right").addClass("test_error").find(".prompt_title").text("两次输入不一致");
          return false;
      }else{
          $(".jfupassword_again").parent().removeClass("test_error").addClass("test_right");
      }
    }
    post();
    return false;
}

function phone_code(){
    var json={
        type:1,//用户类型
        jfuname:$("input.jfuname").val(),//用户名/ 对应 2.0版本的手机号
      };
  jQuery.ajax({
        type : 'get',
        url : urlTelCode,
        dataType : 'json',
        data : json,
        success : function(res) {
          if(res.code=="Y"){
            smsCode = res.smsCode;
            jfuname = res.jfuname;
            sessionStorage.setItem("codeTimeOut",new Date());
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
            $("button.msg_code").attr("class","msg_code_no").html('<span class="timeout">90</span>s后再次发送');
          }else{
              $("input.jfuname").focus().parent().removeClass("test_right").addClass("test_error").find(".prompt_title").html(res.msg);
          }
        },
        error : function(msg) {
           console.log(msg);
        }
    });
}
function post(){
  var json={
    jfutype:2,//用户类型
    jfuname:jfuname,//用户名/ 对应 2.0版本的手机号
    realname:$("input.realname").val(),//昵称
    jfupassword:$("input.jfupassword").val(),//登陆密码
    compname:$("input.compname").val(),//公司名
    jfuinvitationcode:isNull(GetRequest().jfuinvitationcode)?"":GetRequest().jfuinvitationcode,//邀请码
    compemail:$("input.compemail").val(),//邮箱
    usersouce:1,//用户来源   0-官网
    };
    jQuery.ajax({
          type : 'POST',
          url : urlToRegoster,
          dataType : 'json',
          data : json,
          success : function(res) {
            if(res.code=="Y"){
                $(".new_register p.title").css("margin-bottom","36px");
                $(".form_box").html('<div class="success"><p><img src="images/home/success_icon.png" /></p><p>注册成功！</p><p>恭喜您成功注册眸事网，您的专属客服将在24小时<br/>内与您联系！您也可以<a href="//www.mshuoke.com/login.html">点此到官网登录</a></p><p><button type="button" onclick="location.reload()"></button></p></div>');
                //$(".register_progress ul li").eq(2).addClass("active").siblings().removeClass("active");
                location.hash="#step3";
            }else{
              alert(res.msg);
            }
          },
          error : function(msg) {
             console.log(msg);
          }
      });
}

function createCode() {
    code = "";
    var codeLength = 6; //验证码的长度
    var checkCode = document.getElementById("img_code");
    var codeChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    $("#img_code").html(code);
    $("#img_code").click(function(){
       createCode();
    });
}

$(".register_show").click(function(){
    $(".register_window").show();
    $(".form_box").html("");
    React.render( < Registe / >, $(".form_box")[0]
    )
});;
React.render( < Registe / >, $(".form_box")[0]
)
