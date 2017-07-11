
class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		$(".nav_top ul li").click(function () {
			$(this).addClass("active").parent().siblings().find("li").removeClass("active");
		});
		var urlLink = "";
		var urlPath = window.location.pathname;
		var index = urlPath.lastIndexOf("\/");
		urlPath = urlPath.substring(index + 1, urlPath.length);
		$(".nav_top ul li").each(function () {
			$(this).parent().attr('href');
			var urlLink = $(this).parent().attr('href');
			if (urlPath == urlLink) {
				$(this).addClass("active").parent().siblings().find("li").removeClass("active");
			}
		});
		var percent=0;
		var clip=0;
		var clip1=0;
		var loading1 = setInterval(function(){
			$(".circleLeft").fadeOut(500);
			$(".circle").css("border","1px solid rgba(255,255,255,.5)");
			clearInterval(loading);
		},1200);
		var loading=setInterval(function(){
			if(percent>100){
				percent=0;
				$('.circle').removeClass('clip-auto');
				$('.circleRight').addClass('wth0');
			}else if(percent>50){
				$('.circle').addClass('clip-auto');
				$('.circleRight').removeClass('wth0');
			}
			if(percent%4==0){
				clip++;
				$('.circleLeft').eq(0).css({"clip":"rect(30px,60px,60px,"+(60-clip)+"px)"});
				$('.circleLeft').eq(1).css({"clip":"rect(30px,60px,60px,"+(60-clip)+"px)"});
			}
			$('.circleLeft').eq(2).css({"clip":"rect(30px,60px,60px,"+(60-clip1)+"px)"});
			clip1++;
			percent++;
		},10);
		setInterval(function(){
			percent=0;
			clip=0;
			clip1=0;
			$(".circleLeft").show();
			$(".circle").css("border-color","rgba(255,255,255,0)");
			clearInterval(loading);
			clearInterval(loading1);
			loading1 = setInterval(function(){
				$(".circleLeft").fadeOut(500);
				$(".circle").css("border","1px solid rgba(255,255,255,.5)");
				clearInterval(loading);
			},1200);
			loading=setInterval(function(){
				if(percent>100){
					percent=0;
					$('.circle').removeClass('clip-auto');
					$('.circleRight').addClass('wth0');
				}else if(percent>50){
					$('.circle').addClass('clip-auto');
					$('.circleRight').removeClass('wth0');
				}
				if(percent%4==0){
					clip++;
					$('.circleLeft').eq(0).css({"clip":"rect(30px,60px,60px,"+(60-clip)+"px)"});
					$('.circleLeft').eq(1).css({"clip":"rect(30px,60px,60px,"+(60-clip)+"px)"});
				}
				$('.circleLeft').eq(2).css({"clip":"rect(30px,60px,60px,"+(60-clip1)+"px)"});
				clip1++;
				percent++;
			},10);
		},3000);
		$('a.logout').click(function () {
			$.ajax({
				type: "post",
				url: urlLogout,
				async: true,
				contentType: "application/x-www-form-urlencoded;charset=utf-8",
				dataType: "json",
				success: function (data) {
					//  console.log(data);
					if (data.code == "Y") {
						$.cookie('jfuid', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
						$.cookie('showName', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
						if (sessionStorage.getItem("remember") == "1") {
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
						} else {
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
					} else {
						return false;
					}
				},
				error: function () {
				},
			});
		});
	}

	render() {
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
		if (jfutype == 1) {
			var homeCustomer = "";
			var linkCustomer = "";
			var wordCustomer = "发布需求";
			if (jfustate == 4) {
				homeCustomer = "/html/customer_home.html";
				linkCustomer = "/html/customerNewDemand.html";
			} else {
				homeCustomer = "html/customerMyInfo.html";
				linkCustomer = "html/customerMyInfo.html";
			}
			return (
				<div>
					<div className="nav_top">
						<div className="header-box">
							<div className="wrap">
								<div className="circle">
									<div className="percent circleLeft"></div>
									<div className="percent circleRight wth0"></div>
									<div className="percent circleLeft"></div>
									<div className="percent circleRight wth0"></div>
									<div className="percent circleLeft"></div>
									<div className="percent circleRight wth0"></div>
								</div>
								<div className="num"><img src="images/index_logo.png" alt="" style={{"display":"inline-block"}} /></div>
							</div>
							<ul className="header-list">
								<a href="//www.mshuoke.com">
									<li>首页<i></i></li>
								</a>
								<a href="//www.mshuoke.com/headline.html">
									<li>眸事资讯<i></i></li>
								</a>
								<a href="//www.mshuoke.com/production.html"><li>产品<i></i></li></a>
								<a href="//www.mshuoke.com/help.html">
									<li>帮助中心<i></i></li>
								</a>
								<a href="//vendor.mshuoke.com" target="_blank">
									<li>服务商<i></i></li>
								</a>
							</ul>
							<div className="login_right">
								<a href="html/customerMyInfo.html" className="MyInfo">{showName}</a><a
								className="logout" href="javascript:;">安全退出</a>
							</div>
						</div>
					</div>
				</div>
			)
		} else if (jfutype == 2) {
			/*jfutype == 2 并且 $.cookie('isLogout') vendor.mshuoke.com 没有退出登录*/
			var homeSupplier = "";
			var linkSupplier = "";
			var wordSupplier = "";
			if (jfustate == 4) {
				homeSupplier = "/html/supplier_index.html";
				linkSupplier = "/html/supplierDemandHall.html";
				wordSupplier = "竞拍订单";
			} else {
				if (pid !== "") {
					homeSupplier = "/html/supplierDemandList.html";
					linkSupplier = "/html/supplierDemandList.html";
					wordSupplier = "我的订单";
				} else {
					homeSupplier = "html/PerfectData.html";
					linkSupplier = "html/PerfectData.html";
					wordSupplier = "竞拍订单";
				}
			}
			
			return (
				<div>
					<div className="nav_top">
						<div className="header-box">
			<div className="wrap">
			<div className="circle">
			<div className="percent circleLeft"></div>
			<div className="percent circleRight wth0"></div>
			<div className="percent circleLeft"></div>
			<div className="percent circleRight wth0"></div>
			<div className="percent circleLeft"></div>
			<div className="percent circleRight wth0"></div>
			</div>
			<div className="num"><img src="images/index_logo.png" alt=""  style={{"display":"inline-block"}} /></div>
			</div>
							<ul className="header-list">
								<a href="//www.mshuoke.com">
									<li>首页<i></i></li>
								</a>
								<a href="//www.mshuoke.com/headline.html">
									<li>眸事资讯<i></i></li>
								</a>
								<a href="//www.mshuoke.com/production.html"><li>产品<i></i></li></a>
								<a href="//www.mshuoke.com/help.html">
									<li>帮助中心<i></i></li>
								</a>
								<a href="//vendor.mshuoke.com" target="_blank">
									<li>服务商<i></i></li>
								</a>
							</ul>
							<div className="sign-box">
								<a href="html/PerfectData.html" className="MyInfo">{showName}</a>
								<a className="logout" href="javascript:;">安全退出</a>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					<div className="nav_top">
						<div className="header-box">
							<div className="wrap">
							<div className="circle">
							<div className="percent circleLeft"></div>
							<div className="percent circleRight wth0"></div>
							<div className="percent circleLeft"></div>
							<div className="percent circleRight wth0"></div>
							<div className="percent circleLeft"></div>
							<div className="percent circleRight wth0"></div>
							</div>
							<div className="num"><img src="images/index_logo.png" alt="" style={{"display":"inline-block"}} /></div>
							</div>
							<ul className="header-list">
								<a href="//www.mshuoke.com">
									<li>首页<i></i></li>
								</a>
								<a href="//www.mshuoke.com/headline.html">
									<li>眸事资讯<i></i></li>
								</a>
								<a href="//www.mshuoke.com/production.html"><li>产品<i></i></li></a>
								<a href="//www.mshuoke.com/help.html">
									<li>帮助中心<i></i></li>
								</a>
								<a href="//vendor.mshuoke.com" target="_blank">
									<li>服务商<i></i></li>
								</a>
							</ul>
							<div className="sign-box">
								<a className="sign-in" href="//www.mshuoke.com/login.html">登录</a>
								<a className="sign-up" href="//www.mshuoke.com/register-supplier.html">注册</a>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}
export default Header;
