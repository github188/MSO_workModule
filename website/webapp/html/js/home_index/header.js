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
		var urlAll = document.location.href;
		var crmOut = urlAll.split('?')[1];
		if(crmOut == "from=crm"){
			msoLoginOut(function(){
				window.location.href="login.html";
			});
		}
        $('a.logout').click(function(){
			msoLoginOut(function(){
				window.location.href="";
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
                <div className="nav_top">
					<div className="home_logo">
						<a href="//www.mshuoke.com"><img src="//www.mshuoke.com/html/images/public/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo" /></a>
					</div>                
					<ul>
						<li><a className="menu1" href="//www.mshuoke.com">首页</a></li>
						<li><a className="menu2" href="//www.mshuoke.com/headline.html">眸事资讯</a></li>
						<li><a className="menu3" href="//www.mshuoke.com/production.html">产品</a></li>
						<li><a className="menu4" href="//www.mshuoke.com/help.html">帮助中心</a></li>
					</ul>
					<div className="login_right">
						<a href="html/customerMyInfo.html" className="MyInfo">{showName}</a>
						<a className="logout" href="javascript:;">安全退出</a>
					</div>
                </div>
        )
        }else if(jfutype==2){
            var linkSupplier = "";
            var wordSupplier = "";
            if(jfustate==4){
                var p = "mso_userid="+sessionStorage.getItem("jfuid");
				var pEnc = strEnc(p,key1,key2,key3);
				linkSupplier = "https://crm.mshuoke.com/sapi/msocallcenter/login?"+pEnc;
				wordSupplier = "竞拍订单";
            }else{
                linkSupplier = "html/crm-myInfo.html";
                wordSupplier = "竞拍订单";
            }
            return(
				<div className="nav_top">
					<div className="home_logo">
						<a href="//www.mshuoke.com"><img src="//www.mshuoke.com/html/images/public/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo" /></a>
					</div>                
					<ul>
						<li><a className="menu1" href="//www.mshuoke.com">首页</a></li>
						<li><a className="menu2" href="//www.mshuoke.com/headline.html">眸事资讯</a></li>
						<li><a className="menu3" href="//www.mshuoke.com/production.html">产品</a></li>
						<li><a className="menu4" href="//www.mshuoke.com/help.html">帮助中心</a></li>
					</ul>
					<div className="login_right">
						<a href={linkSupplier} className="MyInfo">{showName}</a>
						<a className="logout" href="javascript:;">安全退出</a>
					</div>
                </div>
			)
        }else{
            return(
				<div className="nav_top">
					<div className="home_logo">
						<a href="//www.mshuoke.com"><img src="//www.mshuoke.com/html/images/public/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo" /></a>
					</div>                
					<ul>
						<li><a className="menu1" href="//www.mshuoke.com">首页</a></li>
						<li><a className="menu2" href="//www.mshuoke.com/headline.html">眸事资讯</a></li>
						<li><a className="menu3" href="//www.mshuoke.com/production.html">产品</a></li>
						<li><a className="menu4" href="//www.mshuoke.com/help.html">帮助中心</a></li>
					</ul>
					<div className="login_right">
						<a className="home-login" href="//www.mshuoke.com/login.html">登录</a>
						<a className="home-register" href="//www.mshuoke.com/register-customer.html">注册</a>
					</div>
                </div>
			)
        }
    }
});
React.render(<Header/>,$(".header")[0]);