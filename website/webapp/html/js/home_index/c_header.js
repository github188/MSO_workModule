var Header = React.createClass({
   componentDidMount:function(){
       $(".nav_top ul li").click(function(){
            $(this).addClass("active").parent().siblings().find("li").removeClass("active");
       });
       var urlLink="";
       var urlPath = window.location.pathname;
       var index = urlPath.lastIndexOf("\/");
       urlPath  = urlPath.substring(index + 1, urlPath.length);
       $(".nav_top ul li").each(function(){
           $(this).parent().attr('href');
           var urlLink = $(this).parent().attr('href');
           if(urlPath==urlLink){
               $(this).addClass("active").parent().siblings().find("li").removeClass("active");
           }
       });
       $('a.logout').click(function(){
		   msoLoginOut(function(){
				location.reload();
		   });
       });
   },
   render:function(){
	   
    var isLogout = $.cookie('isLogout');
	if(isLogout=="true"){
		sessionStorage.clear();
		localStorage.clear();
		$.cookie('isLogout', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
	}
	
	
     var jfutype = sessionStorage.getItem("jfutype");//用户类型 1 发包方 2接包方
     var jfuname = sessionStorage.getItem("jfuname");//用户名
     var jfustate = sessionStorage.getItem("jfustate");//用户状态
     var pid = sessionStorage.getItem("pid");//有值表示当前账号为子账号
     var showName = sessionStorage.getItem("showName");
   if(jfutype==1){
     var homeCustomer = "";
     var linkCustomer = "";
     var wordCustomer = "发布需求";
     if(jfustate==4){
         homeCustomer = "/html/customer_home.html";
         linkCustomer = "/html/customer_new_demand.html";
     }else{
         homeCustomer = "html/customerMyInfo.html";
         linkCustomer = "html/customerMyInfo.html";
     }
     return(
         <div>
             <div className="nav_top">
                  <div>
                      <div className="c_home_logo"><a href="//vendor.mshuoke.com/"><img src="html/images/public/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo" /></a></div>
                      <ul>
                            <a href="//vendor.mshuoke.com/"><li>首页<i></i></li></a>
                            <a href="//vendor.mshuoke.com/joined-policy.html"><li>加盟政策<i></i></li></a>
                            <a href="//vendor.mshuoke.com/platform_support.html"><li>平台支持<i></i></li></a>
						    <a href="//vendor.mshuoke.com/help.html"><li>帮助中心<i></i></li></a>
                      </ul>
                      <div className="login_right">
                             <a href="html/customerMyInfo.html" className="MyInfo">{showName}</a><a className="logout" href="javascript:;">安全退出</a>
                      </div>
                  </div>
             </div>
         </div>
     )
   }else if(jfutype == 2){
       var homeSupplier = "";
       var linkSupplier = "";
       var wordSupplier = "";
     if(jfustate==4){
        homeSupplier = "https://crm.mshuoke.com/sapi/msocallcenter/login?mso_userid="+sessionStorage.getItem("jfuid");
                linkSupplier = "https://crm.mshuoke.com/sapi/msocallcenter/login?mso_userid="+sessionStorage.getItem("jfuid");
                wordSupplier = "竞拍订单";
     }else{
         homeSupplier = "html/crm-myInfo.html";
                linkSupplier = "html/crm-myInfo.html";
                wordSupplier = "竞拍订单";
     }
     return(
         <div>
             <div className="nav_top">
                  <div>
                      <div className="c_home_logo"><a href="//vendor.mshuoke.com/"><img src="html/images/public/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo" /></a></div>
                      <ul>
                           <a href="//vendor.mshuoke.com/"><li>首页<i></i></li></a>
                           <a href="//vendor.mshuoke.com/joined-policy.html"><li>加盟政策<i></i></li></a>
                           <a href="//vendor.mshuoke.com/platform_support.html"><li>平台支持<i></i></li></a>
						   <a href="//vendor.mshuoke.com/help.html"><li>帮助中心<i></i></li></a>
                      </ul>
                      <div className="login_right">
                            <a href={homeSupplier} className="MyInfo">{showName}</a><a className="logout" href="javascript:;">安全退出</a>
                      </div>
                  </div>
             </div>
         </div>
     )
   }else{
     return(
         <div>
             <div className="nav_top">
                  <div>
                      <div className="c_home_logo"><a href="//vendor.mshuoke.com/"><img src="html/images/public/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo" /></a></div>
                      <ul>
                        <a href="//vendor.mshuoke.com/"><li>首页<i></i></li></a>
                       <a href="//vendor.mshuoke.com/joined-policy.html"><li>加盟政策<i></i></li></a>
                       <a href="//vendor.mshuoke.com/platform_support.html"><li>平台支持<i></i></li></a>
					   <a href="//vendor.mshuoke.com/help.html"><li>帮助中心<i></i></li></a>
                      </ul>
                      <div className="c_right">
                          <a href="//www.mshuoke.com/c_login.html">登录</a>
                          <a href="//www.mshuoke.com/register-supplier.html">注册</a>
                      </div>
                  </div>
             </div>
         </div>
     )
   }

   }
});
React.render(<Header/>,$("header")[0]);
