var Done = React.createClass({
    render:function(){
        return(
            <div className="done-box">
                <h2>保存成功！</h2>
                <p>您的需求已经保存至草稿箱，您可以到草稿箱中查看。</p>
                <a className="a-btn" href={this.props.pid}>继续编辑</a>
            </div>
        );
    }
});

ReactDOM.render(<Done pid={draftPidD} />,$(".demand-done")[0],
    function(){
        $(".topNav .top .menu ul li:nth-child(2) a").addClass("selected");
        $(".loading_cover").hide();

    }
);
