var Done = React.createClass({
    render:function(){
        return(
            <div className="done-box">
                <h2>提交成功，您的需求已提交审核！</h2>
                <p>您的需求将在24小时内审核完成，请耐心等待！您也可以<a href="tencent://message/?uin=2850840269&Site=&menu=yes" id="contact">点此联系客服>></a></p>
                <a className="a-btn" href="customerDemandList.html">返回我的需求列表</a>
            </div>
        );
    }
});

ReactDOM.render(<Done />,$(".demand-done")[0],
    function(){
        $(".loading_cover").hide();
    }
);
