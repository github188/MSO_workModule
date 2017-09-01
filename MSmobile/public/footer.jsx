class Footer extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		$(".nav_bottom ul li").click(function(){
			$(this).addClass("active").parent().siblings().find("li").removeClass("active");
		});
	}
	render(){
		return(
			<div>
				<div className="nav_bottom">
					<div>
						<div className="left">
							<div>
								<ul>
									<a href="/index.html"><li>首页</li></a>丨
									<a href="/joined-policy.html"><li>加盟政策</li></a>丨
									<a href="/platform_support.html"><li>平台支持</li></a>丨
									<a href="/help.html"><li>帮助中心</li></a>丨
									<a href="/about.html"><li>关于我们</li></a>
								</ul>
							</div>
							<div>Copyright&nbsp;©&nbsp;2011-2017&emsp;&nbsp;&nbsp;上海脉豪商务信息咨询有限公司&emsp;&nbsp;&nbsp;版权所有&nbsp;&nbsp;沪ICP备17004427号-1</div>
							<div>上海市虹口区四平路198号轻工国际大厦3楼</div>
						</div>
						
						
						
						
						<div className="right" style={{"float":"none"}}><div><a href="tencent://message/?uin=2850840276&Site=&menu=yes"></a><a><div><div><img src="../../../images/winxin_code.png" /><i></i></div></div></a></div><div><p>服务热线：</p><p>400-900-5288</p></div></div>
					</div>
				</div>
			</div>
		)
	}
}
export default Footer;
