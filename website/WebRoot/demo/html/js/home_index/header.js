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
            $.ajax({
                type:"post",
                url:urlLogout,
                async:true,
                contentType:"application/x-www-form-urlencoded;charset=utf-8",
                dataType: "json",
                success:function(data){
                    //  console.log(data);
                    if(data.code=="Y"){
                        if(sessionStorage.getItem("remember")=="1"){
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
                            sessionStorage.removeItem("jfuname");//用户名
                            sessionStorage.removeItem("logontimes");//用户名
                            localStorage.removeItem("showName");//显示用户名
                            localStorage.removeItem("invitationcode");//邀请码
                            localStorage.removeItem("headurls");//用户头像url
                            localStorage.removeItem("compname");//公司名
                            localStorage.removeItem("jfuid");//用户id
                            localStorage.removeItem("compemail");//邮箱
                            localStorage.removeItem("pid");//父账号id
                            localStorage.removeItem("realname");//昵称
                            localStorage.removeItem("jfustate");//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
                            localStorage.removeItem("jfutype");//用户类型 1 发包方 2接包方
                            localStorage.removeItem("jfuname");//用户名
                            localStorage.removeItem("logontimes");//用户名
                        }else{
                            sessionStorage.clear();
                            localStorage.removeItem("showName");//显示用户名
                            localStorage.removeItem("invitationcode");//邀请码
                            localStorage.removeItem("headurls");//用户头像url
                            localStorage.removeItem("compname");//公司名
                            localStorage.removeItem("jfuid");//用户id
                            localStorage.removeItem("compemail");//邮箱
                            localStorage.removeItem("pid");//父账号id
                            localStorage.removeItem("realname");//昵称
                            localStorage.removeItem("jfustate");//用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回
                            localStorage.removeItem("jfutype");//用户类型 1 发包方 2接包方
                            localStorage.removeItem("jfuname");//用户名
                            localStorage.removeItem("logontimes");//用户名
                        }
                        location.reload();
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
                <div className="nav_top">
                <div>
                <div className="home_logo"><a href="index.html"><img src="html/images/public/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo" /></a></div>
                <ul>
                <a href="index.html">
                <li>首页<i></i></li>
                </a>
                <a href="headline.html">
                <li>眸事资讯<i></i></li>
                </a>
				<a href="production.html">
                <li>产品<i></i></li>
                </a>
                <a href="help.html">
                <li>帮助中心<i></i></li>
                </a>
                <a href="vendor/index.html" target="_blank">
                <li>服务商<i></i></li>
                </a>
                </ul>
                <div className="c_right">
                <a href="login.html">登录</a>
                <a href="register-customer.html">注册</a>
                </div>
                </div>
                </div>
                </div>
        )
    }
});
React.render(<Header/>,$("header")[0]);