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
            <a href="index.html"><li>首页</li></a>丨
            <a href="headline.html"><li>眸事资讯</li></a>丨
			<a href="production.html"><li>产品</li></a>丨
            <a href="help.html"><li>帮助中心</li></a>丨
            <a href="about.html"><li>关于我们</li></a>丨
            <a href="vendor/index.html" target="_blank"><li>服务商</li></a>丨
            <a href="friendship.html"><li>友情链接</li></a>丨
            <a href="legal-statement.html"><li>法律声明</li></a>
            </ul>
            </div>
            <div>Copyright&nbsp;©&nbsp;2011-2017&emsp;&nbsp;&nbsp;上海脉豪商务信息咨询有限公司&emsp;&nbsp;&nbsp;版权所有&nbsp;&nbsp;沪ICP备17004427号-1</div>
        <div>上海市虹口区四平路198号轻工国际大厦3楼</div>
        </div>
        <div className="right" style={{"float":"none"}}><div><a href="//wpa.qq.com/msgrd?v=3&uin=2850840269&site=qq&menu=yes" target="_blank"></a><a><div><div><img src="html/images/public/winxin_code.png" /><i></i></div></div></a></div><div><p>服务热线：</p><p>400-900-5288</p></div></div>
        </div>
        </div>
        </div>
        )
    }
});
React.render(<Footer/>,$("footer")[0]);
