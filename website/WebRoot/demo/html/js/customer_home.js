//需求动态
var DynamicDemand = React.createClass({
    render:function(){
        return (
            <div>
                <div className="title">需求动态</div>
                <div className="info-box">
                    <UserGist source={urlDemandDynamics} />
                </div>

            </div>
        );
    }
});
var UserGist = React.createClass({
    getInitialState : function(){
        return{
            config :[]
        }
    },
    //组件第一次渲染调用后，使用ajax
    componentDidMount: function() {
      var config = this.state.config;
      $.ajax({
          type:"GET",
          url:this.props.source,
          dataType:"json",
          cache:false,
          success:function(result){
            this.setState({
                     config : result.redemandList
                  });
                  //console.log(result);
                  //取值成功后，调用圆圈百分比效果
                  circular();
                  circleTogglt();
          }.bind(this),
          error:function(){
              console.log("error")
          }
      });
    },
  render: function() {
    var config = this.state.config;//初始化数组
	if(config==""||config==null){
		return (<div className="no-reslut">暂无数据</div>);
	}else{
		var items = config.map(function(item,index){
			return (
			  <div className="dynamic_demand_details" key={index}>
				  <div className="completion-rate">
					  <div className="circle">
							<strong>{item.completionPercentage}</strong>
						<p className="bubble">需求已被竞拍{item.completionPercentage}%</p>
						</div>
				  </div>
				  <div className="dynamic_demand_info">
					  <h2><span>{item.ordername}</span><span className="money">{item.orderpricetol}<i>元</i></span></h2>
					  <h4>需求数量：{item.releasenum} 条</h4>
					  <p>{item.demanddescription}</p>
				  </div>
			  </div>
			);
		},this);
		return (
		  <div>
			{items}
		  </div>
		);
	}
    
  }
});

ReactDOM.render(<DynamicDemand />,dynamicDemand);
