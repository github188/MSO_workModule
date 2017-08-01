

window.checkwhetherDown = function (){
	let notdownloadcount =  $.sessionStorage('notdownloadcount');
	console.log(notdownloadcount);
	if((notdownloadcount=='0')){
		//alert('你没有下载的了');
		//console.log($('.ant-popover.ant-popover-placement-bottomLeft'));
		$('.ant-popover.ant-popover-placement-bottomLeft').remove();
		return;
	}	
	var downHtml = `
		<div class="ant-popover ant-popover-placement-bottomLeft"><div class="ant-popover-content"><div class="ant-popover-arrow"></div><div class="ant-popover-inner"><div><div class="ant-popover-inner-content"><div class="ant-popover-message"><i class="anticon anticon-exclamation-circle"></i><div class="ant-popover-message-title">您有新的成单报表可下载</div><i class="anticon anticon-close"></i></div></div></div></div></div></div>
	`;

	
	$('.topNav .top .menu li.competeList').append(downHtml);
	
	$('.ant-popover-message-title').click(function (){
		if(result[i].componentId=="nav-rpt"){
			location.href = "customer_reports_1.html";
		}else{
			location.href = "customerreport.html";
		}
	});
	
	$('.anticon.anticon-close').click(function (){
		$('.ant-popover.ant-popover-placement-bottomLeft').hide();
	});
}


var showName="";
var invitationcode="";
var headurls="";
var compname="";

if(isNull(sessionStorage.getItem("jfuid"))&&isNull(localStorage.getItem("jfuid"))){
	window.location.href = "/login.html";
}else{
	if(!isNull(localStorage.getItem("jfuid"))){
	  sessionStorage.setItem("showName",localStorage.getItem("showName"));//显示用户名
		sessionStorage.setItem("invitationcode",localStorage.getItem("invitationcode"));//显示用户名
		if(localStorage.getItem("headurls")=="null"){
			localStorage.setItem("headurls","/html/images/public/default-photo.png");
			sessionStorage.setItem("headurls","/html/images/public/default-photo.png");
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
			link:'customer_home.html',
			name:"我的主页"
		},
		{
			link:'getsource.html',
			name:"目标查询"
		},
		{
			link:(sessionStorage.getItem("companyInfo")==4)?'customer_new_demand.html':'javascript:;',
			name:"发布需求"
		},
		{
			link:'customerDemandList.html',
			name:"我的需求"
		},
		{
			link:'customer_reports_1.html',
			name:"成单报表"
		},
	];


var Logo = React.createClass({
    render:function(){
        return(
        		<div className="logo">
        			<a href="../index.html"><img src="images/public/c_index_logo.png" /></a>
        		</div>
        );
    }
});

var MenuHead = React.createClass({
  componentDidMount:function (){
	  	if(sessionStorage.getItem("jfustate")!=4){
		$(".topNav .top .menu ul li:nth-child(3) a").click(function(){
			//debugger;
			$(".cover").show();
		});
	}
  },
  render:function(){
      var menuList = menus.map(
          function(menu,index){
			  //console.log(menu);
			  if(menu.name == '成单报表'){
				return(<li className="competeList" key={index}><a href={menu.link}>{menu.name}</a></li>);
			  }
			  return(<li key={index}><a href={menu.link}>{menu.name}</a></li>);
          }
      );
      return(<div className="menu"><ul>{menuList}</ul></div>);
  }
});

var LoginBox = React.createClass({
    getInitialState:function(){
        return{
            compname:"上海脉豪商务信息咨询有限公司",
            headurls:"images/public/default-photo.png",
            showName:"helloWorld",
            invitationcode:"123456"
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
        if(sessionStorage.getItem("companyInfo")!=4){
				$(".topNav .top .menu ul li:nth-child(3) a").click(function(){
                $(".cover").show();
            });
        }
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
        $(".close2").click(function(){
            $(".cover").hide();
        });
        $('a.logout').click(function(){
			msoLoginOut(function(){
				window.location.href="/index.html";
			});
        });
		checkwhetherDown();
		var urlCompanyInfo = domain137 + "/quality/" + oJfuid + "/enterpriseinfo";//企业认证
		console.log(88888888888888888888);
		$.ajax({
			type:"get",
			url:urlCompanyInfo,
			async:true,
			contentType:"application/x-www-form-urlencoded;charset=utf-8",
			dataType: "json",
			success:function(r){
				console.log(99999999999999);
				sessionStorage.setItem("companyInfo",r.data.resultcode);
			}
		});
    },
    render:function(){
        return(
            <div className="right">
                <ul>
                    <li className="company"><a href="customerMyInfo.html">{this.state.compname}</a></li>
                    <li className="photo-box">
                        <div className="photo"><a href="customerMyInfo.html"><img src={this.state.headurls} /></a></div>
                        <div className="photo-details">
                            <div className="pd-top">
                                <div className="default-photo"><a href="avatar_settings.html"><img src={this.state.headurls} /></a></div>
                                <div className="default-info">
                                    <p>用户名：{this.state.showName}</p>
                                    <p>邀请码：{this.state.invitationcode}</p>
                                </div>
                            </div>
                            <div className="pd-bottom">
                                <ul>
									<li className="myhone"><a href="/html/customer_home.html">我的主页</a></li>
                                    <li className="icon-update"><a href="customerMyInfo.html">修改资料</a></li>
                                    <li className="icon-pswd"><a href="updatePassword.html">修改密码</a></li>
                                </ul>
                                <p><a className="logout" href="javascript:;">退出</a></p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="cover">
                	<div className="cover-box">
                		<div className="title">提示<span className="close2"></span></div>
                		<div className="context" style={{"lineHeight":"200px"}}>您还未进行企业认证，无法发布需求！<a href="firm-identification.html">点此进行企业认证>></a></div>
                		<div className="bt-choose">
                			<button type="button" className="bg_blue close2">确定</button>
                		</div>
                	</div>
                </div>
            </div>
        );
    }
});

var Guide = React.createClass({
    next:function(index){
        if(index!=4){
            $(".guide ul li.active").next().addClass("active").siblings().removeClass("active");
        }else{
            $(".customer_guide").hide();
            sessionStorage.removeItem("logontimes");
            localStorage.removeItem("logontimes");
        }
    },
    close:function(){
        $(".customer_guide").hide();
        sessionStorage.removeItem("logontimes");
        localStorage.removeItem("logontimes");
    },
    render:function(){
        if(localStorage.getItem("logontimes")==0){
			$(".simulation").scrollTop(0);
            return (
                <div className="customer_guide">
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
								<button type="button" className="next" onClick={this.next.bind(this,4)}></button>
								<button type="button" className="guide_close" onClick={this.close}></button>
							</li>
							<li>
								<button type="button" className="complete" onClick={this.next.bind(this,5)}></button>
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
