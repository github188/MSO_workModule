var showName="";
var invitationcode="";
var headurls="";
var compname="";

if(isNull(sessionStorage.getItem("jfuid"))&&isNull(localStorage.getItem("jfuid"))){
	window.location.href = "../login.html";
}else{
	if(!isNull(localStorage.getItem("jfuid"))){
	  sessionStorage.setItem("showName",localStorage.getItem("showName"));//显示用户名
		sessionStorage.setItem("invitationcode",localStorage.getItem("invitationcode"));//显示用户名
		if(localStorage.getItem("headurls")=="null"){
			localStorage.setItem("headurls","images/public/default-photo.png");
			sessionStorage.setItem("headurls","images/public/default-photo.png");
		}else{
			sessionStorage.setItem("headurls",localStorage.getItem("headurls"));//显示用户名
		}
		sessionStorage.setItem("compname",localStorage.getItem("compname"));//显示用户名
		sessionStorage.setItem("jfuid",localStorage.getItem("jfuid"));//显示用户名
		sessionStorage.setItem("compemail",localStorage.getItem("compemail"));//显示用户名
		sessionStorage.setItem("pid",localStorage.getItem("pid"));//显示用户名
		sessionStorage.setItem("realname",localStorage.getItem("realname"));//显示用户名
		sessionStorage.setItem("jfustate",localStorage.getItem("jfustate"));//显示用户名
		sessionStorage.setItem("jfutype",localStorage.getItem("jfutype"));//显示用户名
		sessionStorage.setItem("jfuname",localStorage.getItem("jfuname"));//显示用户名
        sessionStorage.setItem("logontimes",localStorage.getItem("logontimes"));//登录次数
		 showName=localStorage.getItem("showName");
		 invitationcode=localStorage.getItem("invitationcode");
		 headurls=localStorage.getItem("headurls");
		 compname=localStorage.getItem("compname");
	}else if(!isNull(sessionStorage.getItem("jfuid"))){
		 showName=sessionStorage.getItem("showName");
		 invitationcode=sessionStorage.getItem("invitationcode");
		 headurls=sessionStorage.getItem("headurls");
		 compname=sessionStorage.getItem("compname");
	}
}

var menus = [
	{
		link:'supplier_index.html',
		name:"首页"
	},
	{
		link:'supplierDemandHall.html',
		name:"需求大厅"
	},
	{
		link:'supplierDemandList.html',
		name:"我的订单"
	},
	{
		link:'supplier_reports_1.html',
		name:"成单报表"
	},
];
//	{
//		link:'javascript:;',
//		name:"服务平台"
//	},
if(sessionStorage.getItem("jfustate")==4){
	$(".topNav .top .menu ul li:last-child").addClass("hide");
}

var Logo = React.createClass({
    render:function(){
		//href="http://vendor.mshuoke.com"
        return(
          <div className="logo">
            <a href="//www.mshuoke.com/demo/vendor/index.html"><img src="images/public/logo-white.png" /></a>
			<span className="logo-info">&nbsp;|&nbsp;服务商平台</span>
          </div>
        )
    }
});

var MenuHead = React.createClass({
  render:function(){
      var menuList = menus.map(
          function(menu,index){
              return(<li key={index}><a href={menu.link}>{menu.name}</a></li>);
          }
      );
      if(sessionStorage.getItem("pid")!==""){
        return(<div className="menu"></div>);
      }else{
          return(<div className="menu"><ul>{menuList}</ul></div>);
      }
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

        $(".topNav .top .right ul li.photo-box").hover(function(){
            $(this).find(".photo-details").show();
            $(this).addClass("selected");
        },function(){
            $(this).find(".photo-details").hide();
            $(this).removeClass("selected");
        });
        if(sessionStorage.getItem("compname")=="null"){
            $("li.company a").text("公司名为空");
        }
        var urlLink="";
        var urlPath = window.location.pathname;
      	var index = urlPath.lastIndexOf("\/");
      	urlPath  = urlPath.substring(index + 1, urlPath.length);
        $(".topNav .top .menu ul li a").each(function(){
            var urlLink = $(this).attr('href');
            if(urlPath==urlLink){
            	$(this).addClass("selected").siblings().removeClass("selected");
            	return false;
            }
        });
        $('a.logout').click(function(){
			msoLoginOut(function (){
				window.location.href="//www.mshuoke.com/demo/vendor/index.html";
			});
        });
    },
    render:function(){
      if(sessionStorage.getItem("pid")!==""){
        return(
            <div className="right">
                <p className="companySub">{this.state.compname}</p>
                <p className="logoutSub"><a className="logout" href="javascript:;">安全退出</a></p>
            </div>
        );
      }else{
        return(
            <div className="right">
                <ul>
                    <li className="company"><a href="PerfectData.html">{this.state.compname}</a></li>
                    <li className="photo-box">
                        <div className="photo"><a href="PerfectData.html"><img src={this.state.headurls} /></a></div>
                        <div className="photo-details">
                            <div className="pd-top">
                                <div className="default-photo"><a href="avatar_settings.html"><img src={this.state.headurls} /></a></div>
                                <div className="default-info">
                                    <p>用户名：{this.state.showName}</p>
                                    <p>邀请码：<span className="recommend">{this.state.invitationcode}</span></p>
                                </div>
                            </div>
                            <div className="pd-bottom">
                                <ul>
                                    <li className="icon-update"><a href="PerfectData.html">修改资料</a></li>
                                    <li className="icon-pswd"><a href="updatePassword.html">修改密码</a></li>
                                </ul>
                                <p><a className="logout" href="javascript:;">退出</a></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
      }

    }
});
var Guide = React.createClass({
    next:function(index){
        if(index!=4){
            $(".guide ul li.active").next().addClass("active").siblings().removeClass("active");
        }else{
            $(".supplier_guide").hide();
            sessionStorage.removeItem("logontimes");
            localStorage.removeItem("logontimes");
        }
    },
    close:function(){
        $(".supplier_guide").hide();
        sessionStorage.removeItem("logontimes");
        localStorage.removeItem("logontimes");
    },
    render:function(){
        if(localStorage.getItem("logontimes")==0&&sessionStorage.getItem("pid")==""){
            return (
                <div className="supplier_guide">
                <div className="gray"></div>
                <div className="guide">
                <ul>
                <li className="active">
                <button type="button" className="next" onClick={this.next.bind(this,1)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                <li>
                <button type="button" className="next" onClick={this.next.bind(this,2)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                <li>
                <button type="button" className="next" onClick={this.next.bind(this,3)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                <li>
                <button type="button" className="complete" onClick={this.next.bind(this,4)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                </ul>
                </div>
                </div>
        )
        }else{
            return false;
        }
    }
});
ReactDOM.render(
    <div className="top">
        <Logo />
        <MenuHead/>
        <LoginBox />
        <Guide />
    </div>,
    $(".topNav")[0]
);
