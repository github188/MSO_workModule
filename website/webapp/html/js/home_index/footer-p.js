var Footer = React.createClass({
    render:function(){
        return(
            <div className="nav-bottom">
				<div className="nav-li">
					<ul>
						<li><a href="//www.mshuoke.com" className="footer-nav1">首页</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href="//www.mshuoke.com/headline.html" className="footer-nav2">眸事资讯</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href="//www.mshuoke.com/production.html" className="footer-nav3">产品</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href="//www.mshuoke.com/help.html" className="footer-nav4">帮助中心</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href="//www.mshuoke.com/about.html" className="footer-nav5">关于我们</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href="//www.mshuoke.com/friendship.html" className="footer-nav6">友情链接</a>&nbsp;&nbsp;|&nbsp;&nbsp;</li>
						<li><a href="//www.mshuoke.com/legal-statement.html" target="_blank" className="footer-nav7">法律声明</a></li>
					</ul>
					<p>Copyright © 2011-2017   上海脉豪商务信息咨询有限公司   版权所有 沪ICP备15029022号</p>
					<p>上海市虹口区四平路198号轻工国际大厦3楼</p>
				</div>
				<div className="contact">
					<div className="qr-code"><img src="//www.mshuoke.com/html/images/public/winxin_code.png" /></div>
					<div className="tel">
						<p>联系方式</p>
						<h2>400-900-5288</h2>
						<a href="//wpa.qq.com/msgrd?v=3&uin=2850840276&site=qq&menu=yes" target="_blank">qq</a>
					</div>
				</div>
			</div>
        )
    }
});
ReactDOM.render(<Header/>,$(".footer")[0]);
