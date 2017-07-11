var Overview = React.createClass({
  render:function(){
    return (
      <div>
        <PhotoDeatils loginUrl={urlLogin} />
        <DateDeatils apiUrl={urlGetHead} />
      </div>
    );
  }

});

var PhotoDeatils = React.createClass({
  getInitialState:function(){
      return {
          photoUrl:"images/public/ic-photo.png",
          inviteInfo:"别人使用您的邀请码注册，并发布至少一个需求，而且该需求最终完成，则您将获得平台奖励的500元现金奖励！"
      }
  },
  componentDidMount:function(){

	  this.setState({
          userName: sessionStorage.getItem("showName"),
          inviteCode: sessionStorage.getItem("invitationcode"),
          photoUrl: sessionStorage.getItem("headurls"),
        });


  },
 render:function (){
     return (
       <div className="photo-box">
          <span className="arrow"></span>
          <div className="photo-img"><img src={this.state.photoUrl} /></div>
          <div className="details">
            <p className="name">欢迎您：<span className="uName" title={this.state.userName}>{this.state.userName}</span></p>
            <p>邀请码： {this.state.inviteCode}<i className="bubble-hover">？</i></p>
          </div>
          <div className="bubble">{this.state.inviteInfo}</div>
        </div>
     )
 }

});


//需求发布总量---6块
var DateDeatils = React.createClass({
    getInitialState:function(){
        return{
            name:this.props.name,
            number:"0",
            dollarF:this.props.dollarF,
            dollarB:this.props.dollarB,
        }
    },
    componentDidMount:function(){
        $.ajax({
            type:"GET",
            url:this.props.apiUrl,
            dataType:"json",
            cache:false,
            success:function(data){
                if(data.code=="N"){
                  console.log(data.msg);
                  return false;
                }else if(data.code=="N001"){
					sessionStorage.clear();
                  window.location.href="/login.html";
                }
                var oNum1 = formatNum(data.tolFbl.toString());
                var oNum2 = formatNum(data.tolWcl.toString());
                var oNum3 = formatNum(data.jsTolPrice.toString());
                var oNum6 = formatNum(data.djsTolPrice.toString());
                this.setState({
                  tolFbl: oNum1,
                  tolWcl: oNum2,
                  jsTolPrice: oNum3,
                  thisMonthtolFbl: data.thisMonthtolFbl,
                  thisMonthtolWcl: data.thisMonthtolWcl,
                  djsTolPrice: oNum6,
                });
                info_head();
            }.bind(this),
            error:function(){
                //console.log()
            }
        });
    },
    render:function (){
        //console.log(this.state.name);
    return(
      <div className="overview">
        <div className="overview-list">
          <p>需求发布总量</p>
          <p className="money">{this.state.tolFbl}</p>
        </div>
        <div className="overview-list">
          <p>成单总量</p>
          <p className="money">{this.state.tolWcl}</p>
        </div>
        <div className="overview-list">
          <p>结算总金额</p>
          <p className="money"><span className="cash">￥</span>{this.state.jsTolPrice}</p>
        </div>
        <div className="overview-list">
          <p>本月新增需求发布量</p>
          <p className="money">{this.state.thisMonthtolFbl}<span className="cash">条</span></p>
        </div>
        <div className="overview-list">
          <p>本月成单量</p>
          <p className="money">{this.state.thisMonthtolWcl}<span className="cash">条</span></p>
        </div>
        <div className="overview-list">
          <p>待结算金额</p>
          <p className="money">{this.state.djsTolPrice}<span className="cash">元</span></p>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Overview />,customerOverview);
