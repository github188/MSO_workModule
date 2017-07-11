var Drafts = React.createClass({
  getInitialState : function(){
      return{
          config :[]
      }
  },
  componentWillMount: function() {
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
        }.bind(this),
        error:function(){
            console.log("error")
        }
    });
  },
  componentDidlMount: function() {

  },
render: function() {
  var config = this.state.config;//初始化数组
  var drafts = config.map(function(draft,index){
      return (
        <div className="drafts_details">
    				<h3>{draft.name}</h3>
    				<p>
    					<span className="date">{draft.date}</span>
		                <span className="time">{draft.time}</span>
		                <span className="del"></span>
		                <span className="bubble bubble1">删除</span>
		                <a className="update"></a>
		                <span className="bubble bubble2">修改</span>
    				</p>
    			</div>
      );
  },this);
  return (
    <div>
      {items}
    </div>
  );
}
});

ReactDOM.render(<Drafts />,$(".drafts")[0],
function(){
    $(".loading_cover").hide();
});
