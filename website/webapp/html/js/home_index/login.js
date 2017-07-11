
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
					   bconverRecord('2');
					   for(var name in data){
						   sessionStorage.setItem(name, data[name]);
						   localStorage.setItem(name, data[name]);
					   }
					   
					   whetherDown(data.jfuid,thenNext);
					   /*暂时中断*/
					   function thenNext(){
						   document.cookie="jfuid="+data.jfuid+"; domain=.mshuoke.com; path=/";
						  
						   document.cookie="showName="+encodeURIComponent(data.showName)+"; domain=.mshuoke.com; path=/";
						 
						  // sessionStorage.setItem("showName", data.showName);
						   /*
						   sessionStorage.setItem("showName", data.showName);//显示用户名123
						   sessionStorage.setItem("invitationcode", data.invitationcode);//邀请码
						   sessionStorage.setItem("headurls", data.headurls);//用户头像url
						   sessionStorage.setItem("compname", data.compname);//公司名
						   sessionStorage.setItem("jfuid", data.jfuid);//用户id
						   sessionStorage.setItem("compemail", data.compemail);//邮箱
						   sessionStorage.setItem("pid", data.pid);//父账号id
						   sessionStorage.setItem("realname", data.realname);//昵称
						   sessionStorage.setItem("jfustate", data.jfustate);//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
						   sessionStorage.setItem("jfutype", data.jfutype);//用户类型 1 发包方 2接包方
						   sessionStorage.setItem("jfuname",data.jfuname);
						   sessionStorage.setItem("remember",data.remember);
						   sessionStorage.setItem("logontimes",data.logontimes);
						   sessionStorage.setItem("trusteeship",data.trusteeship);//是否托管 0-非托管 1-托管,
						   sessionStorage.setItem("brandname",data.brandname);//品牌名

						   localStorage.setItem("jfuid", data.jfuid);//用户id
						   localStorage.setItem("showName", data.showName);//显示用户名
						   localStorage.setItem("invitationcode", data.invitationcode);//邀请码
						   localStorage.setItem("headurls", data.headurls);//用户头像url
						   localStorage.setItem("compname", data.compname);//公司名
						   localStorage.setItem("compemail", data.compemail);//邮箱
						   localStorage.setItem("pid", data.pid);//父账号id
						   localStorage.setItem("realname", data.realname);//昵称
						   localStorage.setItem("jfustate", data.jfustate);//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
						   localStorage.setItem("jfutype", data.jfutype);//用户类型 1 发包方 2接包方
						   localStorage.setItem("jfuname",data.jfuname);
						   localStorage.setItem("remember",data.remember);

						   localStorage.setItem("logontimes",data.logontimes);
						   localStorage.setItem("trusteeship",data.trusteeship);//是否托管 0-非托管 1-托管,
						   localStorage.setItem("brandname",data.brandname);//品牌名
						   */
							
							/*document.cookie="darren=27; domain=.mshuoke.com; path=/";*/

                 

	
						   if(data.remember=="1"){
							 sessionStorage.setItem("username", $.trim($("input.username").val()));//密码
							 sessionStorage.setItem("jfupassword", $("input.pswd").val());//密码
						   }
							var oJfuid = data.jfuid;
							//console.log(oJfuid);
							//var oJfustate = data.jfustate;
							if(data.jfutype==1){
								var urlCompanyInfo = domain137 + "/quality/" + oJfuid + "/enterpriseinfo";//企业认证
								//console.log(urlCompanyInfo);
								$.ajax({
									type:"get",
									url:urlCompanyInfo,
									async:true,
									contentType:"application/x-www-form-urlencoded;charset=utf-8",
									dataType: "json",
									success:function(r){
										//console.log(r.data.resultcode);
										sessionStorage.setItem("companyInfo",r.data.resultcode);
										window.location.href="html/customer_home.html";
									}
								});
								
							}else{
								if(data.jfustate==4){
									window.location.href="html/supplier_index.html";
								}else{
									window.location.href="html/crm-myInfo.html";
								}
							}
						}
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
