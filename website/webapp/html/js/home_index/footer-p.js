var Footer = React.createClass({
    componentDidMount:function(){
        $(".nav_bottom ul li").click(function(){
            $(this).addClass("active").parent().siblings().find("li").removeClass("active");
        });
    },
    render:function(){
        return(
            <div>
            <div className="nav_bottom">
            <div>
            <div className="left">
            <div>
            <ul>
            <a href="//www.mshuoke.com"><li className="footer-nav1">首页</li></a>丨
            <a href="//www.mshuoke.com/headline.html"><li className="footer-nav2">眸事资讯</li></a>丨
			<a href="//www.mshuoke.com/production.html"><li className="footer-nav3">产品</li></a>丨
            <a href="//www.mshuoke.com/help.html"><li className="footer-nav4">帮助中心</li></a>丨
            <a href="//www.mshuoke.com/about.html"><li className="footer-nav5">关于我们</li></a>丨
            <a href="//vendor.mshuoke.com" target="_blank"><li className="footer-nav6">服务商</li></a>丨
            <a href="//www.mshuoke.com/friendship.html"><li className="footer-nav7">友情链接</li></a>丨
            <a href="//www.mshuoke.com/legal-statement.html" target="_blank"><li className="footer-nav8">法律声明</li></a>
            </ul>
            </div>
            <div>Copyright&nbsp;©&nbsp;2011-2017&emsp;&nbsp;&nbsp;上海脉豪商务信息咨询有限公司&emsp;&nbsp;&nbsp;版权所有&nbsp;&nbsp;沪ICP备17004427号-1</div>
        <div>上海市虹口区四平路198号轻工国际大厦3楼</div>
        </div>
        <div className="right" style={{"float":"none"}}><div><a className="footer-qq" href="tencent://message/?uin=2850840276&Site=&menu=yes"></a><a><div><div><img src="/html/images/public/winxin_code.png" /><i></i></div></div></a></div><div><p>服务热线：</p><p>400-900-5288</p></div></div>
        </div>
        </div>
        </div>
        )
    }
});
ReactDOM.render(<Footer/>,$("footer")[0]);
