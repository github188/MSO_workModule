var showName="";
var invitationcode="";
var headurls="";
var compname="";

if(sessionStorage.getItem("jfuid")==undefined){
	window.location.href = "/login.html";
}else{

	if(sessionStorage.getItem("headurls")=="null"){
		localStorage.setItem("headurls","images/public/default-photo.png");
		sessionStorage.setItem("headurls","images/public/default-photo.png");
	}else{
		sessionStorage.setItem("headurls",localStorage.getItem("headurls"));//显示用户名
	}

	showName=localStorage.getItem("showName");
	invitationcode=localStorage.getItem("invitationcode");
	headurls=localStorage.getItem("headurls");
	compname=localStorage.getItem("compname");
}

var Logo = React.createClass({
    render:function(){
        return(
          <div className="logo">
            <a href="//vendor.mshuoke.com"><img src="images/public/logo-white.png" /></a>
			<span className="logo-info">&nbsp;|&nbsp;获客营销服务平台</span>
          </div>
        )
    }
});



var LoginBox = React.createClass({
    getInitialState:function(){
        return{
            compname:"20",
            headurls:"images/public/default-photo.png",
            showName:"helloWorld",
            invitationcode:"123456",
        }
    },
    componentWillMount:function(){
      this.setState({
            showName: showName,
            invitationcode: invitationcode,
            headurls: headurls,
            compname: compname,
      });
    },
    componentDidMount:function(){

        $(".topNav .top .right").hover(function(){
            $(this).find(".photo-details").show();
            $(this).find(".photo-box").addClass("selected");
			$(this).addClass("selected");
        },function(){
            $(this).find(".photo-details").hide();
            $(this).find(".photo-box").removeClass("selected");
			$(this).removeClass("selected");
        });
        if(sessionStorage.getItem("compname")=="null"){
            $("li.company a").text("公司名为空");
        }
    
        $('a.logout').click(function(){
			msoLoginOut(function (){
				window.location.href="//vendor.mshuoke.com/";
			});
        });
    },
    render:function(){
		return(
            <div className="right">
				<div className="photo-box">
					<div className="photo"><a href="crm-updatePhoto.html"><img src={this.state.headurls} /></a></div>
					<div className="name"><a href="crm-myInfo.html">{this.state.compname}</a></div>
					<span className="more">></span>
				</div>
				<div className="photo-details">
					<div className="pd-top">
						<p>用户名：{this.state.showName}</p>
						<p>邀请码：<span className="recommend">{this.state.invitationcode}</span></p>
					</div>
					<div className="pd-mid">
						<ul>
							<li className="icon-update"><a href="crm-myInfo.html">修改资料</a></li>
							<li className="icon-pswd"><a href="crm-updatePassword.html">修改密码</a></li>
						</ul>
					</div>
					<div className="pd-bottom">
						<p><a className="logout" href="javascript:;">退出</a></p>
					</div>
				</div>
            </div>
        );

    }
});

ReactDOM.render(
    <div className="top">
        <Logo />
        <LoginBox />
    </div>,
    $(".topNav")[0]
);

var LeftNav = React.createClass({
	componentDidMount:function(){
        var urlLink="";
        var urlPath = window.location.pathname;
      	var index = urlPath.lastIndexOf("\/");
      	urlPath  = urlPath.substring(index + 1, urlPath.length);
        $(".leftNav ul li a").each(function(){
            var urlLink = $(this).attr('href');
            if(urlPath==urlLink){
            	$(this).parent().addClass("selected").siblings().removeClass("selected");
            	return false;
            }
        });
    },
    render:function(){
        return(
          <div>
            <h3><span>账号信息</span></h3>
			<ul>
				<li className="icon1"><a href="crm-myInfo.html">我的信息</a></li>
				<li className="icon2"><a href="crm-updatePhoto.html">头像设置</a></li>
				<li className="icon3"><a href="crm-updatePassword.html">修改密码</a></li>
			</ul>
          </div>
        )
    }
});
ReactDOM.render(<LeftNav />,$(".leftNav")[0]);

var Footer = React.createClass({
    render:function(){
        return(<p>Copyright © 2011-2017</p>)
    }
});
ReactDOM.render(<Footer />,$(".footer")[0]);
