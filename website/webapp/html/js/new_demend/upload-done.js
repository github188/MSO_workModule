var Done = React.createClass({
    render:function(){
        return(
            <div className="done-box">
                <h2>上传成功，您的信息已提交审核！</h2>
                <p>您的需求将在24小时内审核完成，请耐心等待！您也可以<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此联系客服>></a></p>
                <a className="a-btn" href="/html/supplierDemandHall.html">返回需求大厅</a>
            </div>
        );
    }
});

ReactDOM.render(<Done />,$(".demand-done")[0],
    function(){
        $(".topNav .top .menu ul li:nth-child(2) a").addClass("selected");
        $(".loading_cover").hide();
    }
);
