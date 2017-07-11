var jfutype=isNull(sessionStorage.getItem("jfutype"))?localStorage.getItem("jfutype"):sessionStorage.getItem("jfutype");
if('1'==jfutype){

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
	            localStorage.setItem("headurls","html/images/public/default-photo.png");
	            sessionStorage.setItem("headurls","html/images/public/default-photo.png");
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
	        sessionStorage.setItem("showName",localStorage.getItem("showName"));//显示用户名
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
	
	
	
	var menus = [];
	var menu1 = new Object();
	menu1.name = "首页";
	menu1.link = "/html/customer_home.html";
	var menu2 = new Object();
	menu2.name = "发布新需求";
	if(sessionStorage.getItem("jfustate")=="4"){
	    menu2.link = "/html/customer_new_demand.html";
	}else{
	    menu2.link = "javascript:;";
	    $(".topNav .top .menu ul li:nth-child(2) a").click(function(){
	        $(".cover").show();
	    });
	}
	var menu3 = new Object();
	menu3.name = "我的需求";
	menu3.link = "/html/customerDemandList.html";
	//var menu4 = new Object();
	//menu4.name = "需求大厅";
	//menu4.link = "/html/supplierDemandHall.html";
	var menu4 = new Object();
	menu4.name = "成单报表";
	menu4.link = "/html/customer_reports_1.html";
	menus[0] = menu1;
	menus[1] = menu2;
	menus[2] = menu3;
	menus[3] = menu4;
	//menus[4] = menu5;
	
	var Logo = React.createClass({
	    render:function(){
	        return(
	            <div className="logo">
	            <a href="../index.html"><img src="html/images/public/logo.png" /></a>
	            </div>
	        );
	    }
	});
	
	var MenuHead = React.createClass({
	    render:function(){
	        var menuList = menus.map(
	            function(menu,index){
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
	            headurls:"html/images/public/default-photo.png",
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
	                            sessionStorage.removeItem("logontimes");//登录次数
	
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
	                            localStorage.removeItem("logontimes");//登录次数
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
	                            localStorage.removeItem("logontimes");//登录次数
	                        }
	                        window.location.href="index.html";
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
	            <div className="right">
	            <ul>
	            <li className="company"><a href="html/customerMyInfo.html">{this.state.compname}</a></li>
	        <li className="photo-box">
	            <div className="photo"><a href="html/customerMyInfo.html"><img src={this.state.headurls} /></a></div>
	        <div className="photo-details">
	            <div className="pd-top">
	            <div className="default-photo"><a href="html/avatar_settings.html"><img src={this.state.headurls} /></a></div>
	        <div className="default-info">
	            <p>用户名：{this.state.showName}</p>
	        <p>邀请码：{this.state.invitationcode}</p>
	        </div>
	        </div>
	        <div className="pd-bottom">
	            <ul>
	            <li className="icon-update"><a href="html/customerMyInfo.html">修改资料</a></li>
	            <li className="icon-pswd"><a href="html/updatePassword.html">修改密码</a></li>
	            </ul>
	            <p><a className="logout" href="javascript:;">退出</a></p>
	            </div>
	            </div>
	            </li>
	            </ul>
	            <div className="cover">
	            <div className="cover-box">
	            <div className="title">提示<span className="close2"></span></div>
	            <div className="context">您还未进行企业认证，无法发布需求！<a href="html/firm-identification.html">点此进行企业认证>></a></div>
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
	        }
	    },
	    close:function(){
	        $(".customer_guide").hide();
	    },
	    render:function(){
	        if(localStorage.getItem("logontimes")!==0){
	            return (
	                <div className="customer_guide">
	                <div className="gray"></div>
	                <div className="guide">
	                <ul>
	                <li className="active">
	                <button type="button" className="next" onClick={this.next.bind(this,1)}></button>
	            <button type="button" className="close" onClick={this.close}></button>
	            </li>
	            <li>
	            <button type="button" className="next" onClick={this.next.bind(this,2)}></button>
	            <button type="button" className="close" onClick={this.close}></button>
	            </li>
	            <li>
	            <button type="button" className="next" onClick={this.next.bind(this,3)}></button>
	            <button type="button" className="close" onClick={this.close}></button>
	            </li>
	            <li>
	            <button type="button" className="complete" onClick={this.next.bind(this,4)}></button>
	            <button type="button" className="close" onClick={this.close}></button>
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


}