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
		var userArr = ["showName","invitationcode","headurls","compname","jfuid","compemail","pid","realname","jfustate","jfutype","jfuname","logontimes"];
		$('a.logout').click(function () {
			$.ajax({
				type: "post",
				url: "https://www.mshuoke.com/loginOut",
				async: true,
				contentType: "application/x-www-form-urlencoded;charset=utf-8",
				dataType: "json",
				success: function (data) {
					if (data.code == "Y") {
						$.cookie('jfuid', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
						$.cookie('showName', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
						$.cookie('isLogout', true,{ path: '/' , domain:'.mshuoke.com'});
						if (sessionStorage.getItem("remember") == "1") {
							for(var i=0;i<userArr.length;i++){
								sessionStorage.removeItem(userArr[i]);//显示用户名
								localStorage.removeItem(userArr[i]);//显示用户名
							}
							//debugger;
							
							/*
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
							*/
						} else {
							sessionStorage.clear();
							for(var i=0;i<userArr.length;i++){
								localStorage.removeItem(userArr[i]);//显示用户名
							}
							//localStorage.clear();
							
							/*
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
							*/
						}
						window.location.href = "//vendor.mshuoke.com";
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
		var username = $.cookie('showName');
		if(username){
			return (
					<div>
						<div className="nav_top">
							<div>
								<div className="c_home_logo"><a href="//vendor.mshuoke.com"><img src="/images/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo"/></a></div>
								<ul>
									<a href="index.html"><li>首页<i></i></li></a>
									<a href="joined-policy.html"><li>加盟政策<i></i></li></a>
									<a href="platform_support.html"><li>平台支持<i></i></li></a>
								<a href="help.html"><li>帮助中心<i></i></li></a>
								</ul>
								<div className="login_right">
									<a href="html/PerfectData.html" className="MyInfo">{username}</a>
									<a className="logout"	href="javascript:;">安全退出</a>
								</div>

							</div>
						</div>
					</div>
				)
		}else{
			var isLogout = $.cookie('isLogout');
			if(isLogout=="true"){
				sessionStorage.clear();
				localStorage.clear();
				//$.cookie('isLogout', null,{ path: '/' , domain:'.mshuoke.com',expires:-1});
			}
			var jfutype = sessionStorage.getItem("jfutype");//用户类型 1 发包方 2接包方
			var jfuname = sessionStorage.getItem("jfuname");//用户名
			var jfustate = sessionStorage.getItem("jfustate");//用户状态
			var pid = sessionStorage.getItem("pid");//有值表示当前账号为子账号
			var compname = sessionStorage.getItem("compname");
			
			
			if (jfutype == 1) {
				var homeCustomer = "";
				var linkCustomer = "";
				var wordCustomer = "发布需求";
				if (jfustate == 4) {
					homeCustomer = "html/customer_home.html";
					linkCustomer = "html/customerNewDemand.html";
				} else {
					homeCustomer = "html/customerMyInfo.html";
					linkCustomer = "html/customerMyInfo.html";
				}
				return (
					<div>
						<div className="nav_top">
							<div>
								<div className="c_home_logo"><a href="//vendor.mshuoke.com"><img src="/images/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo"/></a></div>
								<ul>
									<a href="index.html"><li>首页<i></i></li></a>
									<a href="joined-policy.html"><li>加盟政策<i></i></li></a>
									<a href="platform_support.html"><li>平台支持<i></i></li></a>
								</ul>
								<div className="login_right">
									<a href="html/customerMyInfo.html" className="MyInfo">{compname}</a><a
									className="logout" href="javascript:;">安全退出</a>
								</div>
							</div>
						</div>
					</div>
				)
			} else if (jfutype == 2) {
				var homeSupplier = "";
				var linkSupplier = "";
				var wordSupplier = "";
				if (jfustate == 4) {
					homeSupplier = "html/supplier_index.html";
					linkSupplier = "supplier_lj_demandHall2";
					wordSupplier = "竞拍订单";
				} else {
					if (pid !== "") {
						homeSupplier = "html/supplierDemandList.html";
						linkSupplier = "html/supplierDemandList.html";
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
							<div>
								<div className="c_home_logo"><a href="//vendor.mshuoke.com"><img src="/images/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo"/></a></div>
								<ul>
									<a href="index.html"><li>首页<i></i></li></a>
									<a href="joined-policy.html"><li>加盟政策<i></i></li></a>
									<a href="platform_support.html"><li>平台支持<i></i></li></a>
								<a href="help.html"><li>帮助中心<i></i></li></a>
								</ul>
								<div className="login_right">
									<a href="html/PerfectData.html" className="MyInfo">{compname}</a>
									<a className="logout"	href="javascript:;">安全退出</a>
								</div>
							</div>
						</div>
					</div>
				)
				} else {
				return (
					<div>
						<div className="nav_top">
							<div>
								<div className="c_home_logo"><a href="//vendor.mshuoke.com"><img src="/images/c_index_logo.png" title="MSO-眸事网，国内专业营销服务外包平台" alt="logo"/></a></div>
								<ul>
									<a href="index.html"><li>首页<i></i></li></a>
									<a href="joined-policy.html"><li>加盟政策<i></i></li></a>
									<a href="platform_support.html"><li>平台支持<i></i></li></a>
									<a href="help.html"><li>帮助中心<i></i></li></a>
								</ul>
								<div className="c_right">
									<a href="c_login.html">登录</a>
									<a href="register-supplier.html">注册</a>
								</div>

							</div>
						</div>
					</div>
				)
			}
		}
	}
}
export default Header;
