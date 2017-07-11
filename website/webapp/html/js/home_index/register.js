
var smsCode="";
var jfuname="";
var timeout1;
var code;
var active=GetRequest();
var sPath = window.location.hash;
var sourceID = sPath.split('#')[1];
var bok = true;

var Registe = React.createClass({
	//ssss
	getInitialState(){
		return {
					isRequest:false,
					isService:false,
			   }
			   //isRequest 1 
			   //isService 2 
	},
	componentDidMount:function(){
		//手机号验证
        $("input.jfuname").blur(function(){
		    if($(this).val() == ''){
			    $(this).next().addClass("error-msg").text("请输入手机号码！");
			    return false;
		    }else{
			    $(this).next().removeClass("error-msg").text("");
		    }
		});
		
		$("input.jfuname").focus(function(){
			$(this).next().removeClass("error-msg").text("");
		});
		
		//手机验证码
		$("input.yzm").blur(function(){
		    if($(this).val() == ''){
			    $(this).next().next().addClass("error-msg").text("请输入短信验证码！");
			    return false;
		    }else{
			    $(this).next().next().removeClass("error-msg").text("");
		    }
		});
		$("input.yzm").focus(function(){
			$(this).next().next().removeClass("error-msg").text("");
		});
		//公司名称验证
		$("input.compname").blur(function(){
		    if($(this).val() == ''){
			    $(this).next().addClass("error-msg").text("请输入公司名称！");
			    return false;
		    }else{
			    $(this).next().removeClass("error-msg").text("");
		    }
		});
		$("input.compname").focus(function(){
			$(this).next().removeClass("error-msg").text("");
		});
		//请输入您的称呼！
		$("input.realname").blur(function(){
		    if($(this).val() == ''){
			    $(this).next().addClass("error-msg").text("请输入您的称呼！");
			    return false;
		    }else{
			    $(this).next().removeClass("error-msg").text("");
		    }
		});
		$("input.realname").focus(function(){
			$(this).next().removeClass("error-msg").text("");
		});
		//密码验证
		$("input[type=password]").blur(function(){
		    if($(this).val() == ''){
			    $(this).next().addClass("error-msg").text("请输入密码！");
			    return false;
		    }else{
			    $(this).next().removeClass("error-msg").text("");
		    }
		});
		$("input[type=password]").focus(function(){
			$(this).next().removeClass("error-msg").text("");
		});
		
		
		
        $(".jfutype button").click(function(){
           $(this).addClass("active").siblings().removeClass("active");
        });
		
        $(".register").on("click",".submit",function(){
			if(bok){
				bok = false;
				$("input").blur();
				if($(".register .form_box ul li p").hasClass("error-msg")){
					bok = true;
					return false;
				}
				if($("i.checked").hasClass("unchecked")){
					$(".check-agree .error-msg").html("<br />请先阅读《眸事网站服务条款》");
				}else{
					$(".check-agree .error-msg").html("");
					post();
			   }
		   }
        }.bind(this));

		
		
		
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
			
			var phoneValue = $("input.jfuname").val();
			$("input.jfuname").next().removeClass("error-msg");
			if(!phoneValue){
				$("input.jfuname").next().addClass("error-msg").text("请输入手机号码！");
			}
			
			
			
			if(phoneValue){
				//debugger;
				/*验证是否正确*/
				var reg = /^1\d{10}/;
				if(reg.test(phoneValue)){
					$("input.jfuname").next().removeClass("error-msg").text("");
				}else{
					$("input.jfuname").next().addClass("error-msg").text("请输入格式正确的手机号码！");
				}
			}
			
			
          if($(this).hasClass("msg_code")){
			  /*验证手机号是否正确*/
			if(!($("input.jfuname").next().hasClass('error-msg'))){
				phone_code();
			}
          }
        });
		
		$("i.checked").toggle(function(){
			$(this).addClass("unchecked");
		},function(){
			$(this).removeClass("unchecked");
			$(".check-agree .error-msg").html("");
		});
		
		this.requestEvent();
		this.serviceEvent();
		this.second();

		if(sourceID=="tomail"||sourceID=="tobd"){			
		    sessionStorage.setItem("fbid",1);
		}
		if(sessionStorage.getItem("fbid")==2){
			$(".fbf-show").show();
			$(".form_box").addClass("regHeight");
		}

  },
  requestEvent(){
	  //发包方
	  $('.request').click(function (){
		  console.log(this);
		  sessionStorage.setItem("fbid",1);
		  this.setState({
			  isRequest:1,
			  isService:false
		  })
	  }.bind(this));
  },
  serviceEvent(){
	  //接包方
	 $('.service').click(function (){
		  console.log(this);
		  sessionStorage.setItem("fbid",2);
		  $(".fbf-show").show();
		  $(".form_box").addClass("regHeight");
		   this.setState({
			  isRequest:false,
			  isService:2
		  })
	  }.bind(this)); 
  },
  second(){
	  $('.nextStep').click(function (){
		  if($('.register_first li').hasClass("selected")){
			  if(this.state.isRequest){
				   console.log('需求方');
				   $('.register_first').hide();
				   $('.form_box').show();
			   }
			   
			   if(this.state.isService){
					console.log('服务方');
					 $('.register_first').hide();
					$('.form_box').show();
			   }
		  }
		   
	  }.bind(this));
	 
  },
  render:function(){
    return (
        <div>
            <div className="register_form">
				<ul>
					<li>
						<i className="icon-tel"></i>
						<input type="tel" className="jfuname test" maxLength="11" placeholder="请输入您的手机号码" />
						<p></p>
					</li>
					<li>
						<i className="icon-yzm"></i>
						<input type="text" className="yzm test" placeholder="请输入短信验证码" />
                        {isNull(sessionStorage.getItem("codeTimeOut"))?<button type="button" className="msg_code">获取验证码</button>:<button type="button" className="msg_code_no">已发送（<span className="timeout">{parseInt((new Date()-new Date(sessionStorage.getItem("codeTimeOut")))/1000)}</span>s）</button>}
                        <p></p>
					</li>
					<li>
						<i className="icon-company"></i>
						<input type="text" placeholder="请输入您的公司名称" className="compname test" />
						<p></p>
					</li>
					<li>
						<i className="icon-name"></i>
						<input type="text" placeholder="请输入您的称呼，如王先生" className="realname test" />
						<p></p>
					</li>
					<li>
						<i className="icon-pswd"></i>
						<input type="password" placeholder="请输入6~16位数字或字母组成的密码" maxLength="16" className="jfupassword test" />
						<p></p>
					</li>
					<li className="fbf-show">
						<i className="icon-code"></i>
						<input type="text" placeholder="请输入邀请人的邀请码，没有可不填" className="jfuinvitationcode test" />
						<p></p>
					</li>
				</ul>
          </div>
		  <p className="check-agree"><i className="checked"></i>我已阅读并同意<a target="_blank" href={sessionStorage.getItem("fbid")=="1"?"terms-customer.html":"terms-supplier.html"}>《眸事网站服务条款》</a><span className="error-msg"></span></p>
          <button className="btn submit">注册</button>
		  
          <div>已有账号？<a href={sessionStorage.getItem("fbid")=="1"?"//www.mshuoke.com/login.html":"//www.mshuoke.com/c_login.html"}>立即登录</a></div>
      </div>
    )
  }
});

/*上传用户浏览的顺序id*/
function bconverRecord(crtype){
		var bconverRecordUrl = domain+'/bconverRecord';
		var mosid = sessionStorage.getItem('msoid');
		var visitid = sessionStorage.getItem('visitid');
		if(mosid.substring(0,1)==1){
			return;
		}
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
	

function phone_code(){
	urlTelCode = domain + '/user/telCode';
    var json={
        type:1,//用户类型
        jfuname:strEnc($("input.jfuname").val(),key1,key2,key3),//用户名/ 对应 2.0版本的手机号
      };
	  /*正确以后只能点击一次通过classname control*/
	  $("button.msg_code").removeClass('msg_code').addClass('msg_code_no').html('<span class="timeout">90</span>s后再次发送');
	   sessionStorage.setItem("codeTimeOut",new Date());
       clearInterval(timeout1);
       timeout1=setInterval(function(){
		  var time=parseInt((new Date()-new Date(sessionStorage.getItem("codeTimeOut")))/1000);
		  if(time>=90){
				$("button.msg_code_no").attr("class","msg_code").html("发送短信验证码");
				// $("button.msg_code").attr("class","msg_code_no").html('<span class="timeout">90</span>s后再次发送');
				clearInterval(timeout1);
				sessionStorage.removeItem("codeTimeOut");
		  }
		$("span.timeout").html(90-time);
	  },1000);
			
     
			
  jQuery.ajax({
        type : 'post',
        url :  urlTelCode,
        dataType : 'json',
        data : json,
        success : function(res) {
          if(res.code=="Y"){
            smsCode = res.smsCode;
            jfuname = res.jfuname;
           
          }else{
              //$("input.jfuname").removeClass("test_right").addClass("test_error").focus().next().next().html( res.msg);
			  $(".jfuname").next().addClass("error-msg").text(res.msg);
			  console.log(res.msg);
          }
        },
        error : function(msg){
			$(".jfuname").next().addClass("error-msg").text("服务器出错!");
           console.log(msg);
        }
    });
}


/*自己需要check 这里*/
function post(){
	console.log(usersouce);
	// var sPath = window.location.hash;
	// var sourceID = sPath.split('#')[1];
	if(sourceID=="tomail"){
		usersouce = 2;
	}
	if(sourceID=="tobd"){
		usersouce = 4;
	}
  var json={
		jfutype:sessionStorage.getItem("fbid"),//用户类型
		jfuname:$("input.jfuname").val(),//用户名/ 对应 2.0版本的手机号
		realname:$("input.realname").val(),//称呼
		jfupassword:$("input.jfupassword").val(),//登陆密码
		compname:$("input.compname").val(),//公司名
		jfuinvitationcode:$("input.jfuinvitationcode").val(),//邀请码
		//compemail:'',//邮箱
		usersouce:usersouce,//用户来源   0-官网
		customerinformation:JSON.parse(sessionStorage.getItem("customerinformation")),
    };
    //active.jfutype=$("td.jfutype button.active").index()+1;
    jQuery.ajax({
          type : 'POST',
          url : urlToRegoster,
          dataType : 'json',
          data : json,
          success : function(res) {
          	console.log(json);
            if(res.code=="Y"){
				bok = true;
				if(res.jfutype=="1"){
                	$(".form_box").css({"width":"100%","background":"none"});
                    $(".form_box").html('<div class="success"><p>注册成功！</p><p>恭喜您成功注册眸事网，页面即将自动跳转或 <a href="//www.mshuoke.com/login.html">点击登录>></a></p></div>');
                }else if(res.jfutype=="2"){
					$(".form_box").css({"width":"100%","background":"none"});
                    $(".form_box").html('<div class="success"><p>注册成功！</p><p>恭喜您成功注册眸事网，页面即将自动跳转或 <a href="//www.mshuoke.com/c_login.html">点击登录>></a></p></div>');
                }
				
				
                $(".register_progress ul li").eq(2).addClass("active").siblings().removeClass("active");
                setTimeout(function(){
                    if(sessionStorage.getItem("fbid")=="1"){
                        window.location.href="//www.mshuoke.com/login.html";
                    }else if(sessionStorage.getItem("fbid")=="2"){
                        window.location.href="//www.mshuoke.com/c_login.html";
                    }
                },3000);
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
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
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


React.render(<Registe/>,$(".form_box")[0]);
