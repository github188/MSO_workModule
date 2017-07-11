class Header extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			topHtml:''
		}
		this.init();
		this.animate();
	}
	init(){
		this.createTop = this.createTop.bind(this);
	}
	componentDidMount(){
		this.setState({topHtml:this.createTop()});
	}
	animate(){
		setTimeout(function(){
			$("div.index_logo div.left>div,div.index_logo div.right>div").addClass("load");
		},500);
	}
	createTop(){
		if(this.props.hasOwnProperty('header')){
			return this.props.header.map((data,index)=>{
				return (<li><a href={data.href}>{data.title}</a></li>);
			});
		}
	}

	render(){
		return (<div className={"header"}>
			<div className="header-box">
				<div className="index_logo">
					<img src="images/index_logo.png" />
				</div>
				<ul className="header-list">
					<li><a href="//www.mshuoke.com/">首页</a></li>
					<li><a href="//www.mshuoke.com/headline.html">眸事资讯</a></li>
					<li><a href="//www.mshuoke.com/help.html">帮助中心</a></li>
					<li><a href="//vendor.mshuoke.com">服务商</a></li>
				</ul>
				<div className={"sign-box"}>
					<a href="//www.mshuoke.com/login.html" className={"sign-in"}>登录</a>
					<a href="//www.mshuoke.com/register-customer.html" className={"sign-up"}>注册</a>
				</div>
			</div>
		</div>);
	}
}
export default Header;
