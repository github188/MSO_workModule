var Service = React.createClass({
    componentDidMount:function(){
        $(".go-to-top").click(function(){
            $('html,body').animate({scrollTop: '0px'}, 800);
        });
    },
    render:function(){
        return(
            <div className="aside-bar">
                <ul>
                    <li className="online-service"><a href="tencent://message/?uin=2850840276&Site=&menu=yes">联系客服</a></li>
                    <li className="go-to-top">向上置顶</li>
                </ul>
            </div>
        );
    }
})

ReactDOM.render(<Service />,$(".service")[0]);
