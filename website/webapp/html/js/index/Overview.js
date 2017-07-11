
var PhotoDeatils = React.createClass({
  getInitialState:function(){
      return {
          photoUrl:"images/public/ic-photo.png",
          inviteInfo:"别人使用您的邀请码注册，成功竞拍至少一个订单并且完成，则您将获得平台奖励的500元现金奖励"
      }
  },
  componentDidMount:function(){
    $(".welcome .left p.name span").text(sessionStorage.getItem("showName"));
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
            <p>邀请码： <span className="recommend">{this.state.inviteCode}</span><i className="bubble-hover">？</i></p>
          </div>
          <div className="bubble">{this.state.inviteInfo}</div>
        </div>
     )
 }
});


var DateDeatils = React.createClass({
    getInitialState:function(){
        return{
            name:this.props.name,
            number:"0",
            dollarF:this.props.dollarF,
            dollarB:this.props.dollarB
        }
    },
    componentDidMount:function(){
        $.ajax({
            type:"GET",
            url:this.props.apiUrl,
            dataType:"json",
            cache:false,
            success:function(data){
              var dataName=[];
              for(var name in data){
                dataName.push(data[name]);
              }
              if( this.props.isMoney=="0"){
                if (this.isMounted()) {
                  this.setState({
                    number: dataName[2],
                  });
                }
              }else{
                var newDot = formatNum(dataName[2].toString());
                if (this.isMounted()) {
                  this.setState({
                    number: newDot
                  });
                }
              }

            }.bind(this),
            error:function(){
                console.log(msg);
            }
        });
    },
    render:function (){
    return(
        <div className="overview-list">
          <p>{this.state.name}</p>
          <p className="money"><span className="cash">{this.state.dollarF}</span>{this.state.number}<span className="cash">{this.state.dollarB}</span></p>
        </div>
    );
  }
});

var Progress_speed = React.createClass({
  getInitialState:function(){
    return {
        data:null
    }
  },
  componentDidMount:function(){
    post();
    $(".demand_submit button.post").on("click",function(){
      var data={
          createtime:$(".demand_submit .createtime option:selected").index()==0||$(".demand_submit .createtime option:selected").index()==1?"":$(".demand_submit .createtime option:selected").index()-1,
          compname:$(".demand_submit .compname").val()
      }
      post(data);
    });
    $(".recommend").on("click",function(){
      $(".recommend_list").show();
    });
    $(".progress_speed .close,.progress_speed .button_close").on("click",function(){
        $(".progress_speed").hide();
    });
  },
  render:function (){
    if(isNull(this.state.data)){
        return (
                  <div className="demand_submit">
                      <div className="top"><span>我推荐的接包方</span><i className="close"></i></div>
                      <div className="main">
                          <div><span>推荐累计收益:</span><span style={{"font-size":"26px","color":"#fd5352"}}><span style={{"font-size":"16px"}}>￥</span>0.00</span></div>
                          <div><span>推荐的接包方:</span>
                          <select className="createtime"><option disabled selected>请输入月份</option>
                          <option>全部</option>
                          <option >1月</option>
                          <option >2月</option>
                          <option >3月</option>
                          <option >4月</option>
                          <option >5月</option>
                          <option >6月</option>
                          <option >7月</option>
                          <option >8月</option>
                          <option >9月</option>
                          <option >10月</option>
                          <option >11月</option>
                          <option >12月</option>
                          </select>
                          <input type="text" className="compname" placeholder="接包方公司名"/><button className="post" type="button">确定</button></div>
                          <table className="tab" style={{"width":"100%","margin-top":"22px"}}>
                            <thead>
                              <tr>
                                <th>接包方</th>
                                <th>累计成单量</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                  <td>抓取接包方公司名字</td>
                                  <td>抓取累计的竞拍成功量</td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                      <div className="bottom"><button type="submit" className="button_close">确&nbsp;定</button></div>
                  </div>
        )
    }else{
        return (
                  <div className="demand_submit">
                      <div className="top"><span>我推荐的接包方</span><i className="close"></i></div>
                      <div className="main">
                          <div><span>推荐累计收益:</span><span style={{"font-size":"26px","color":"#fd5352"}}><span style={{"font-size":"16px"}}>￥</span>{isNull(this.state.data.sumprofit)?0:this.state.data.sumprofit}</span></div>
                          <div><span>推荐的接包方:</span>
                          <select className="createtime"><option disabled selected>请输入月份</option>
                          <option >全部</option>
                          <option >1月</option>
                          <option >2月</option>
                          <option >3月</option>
                          <option >4月</option>
                          <option >5月</option>
                          <option >6月</option>
                          <option >7月</option>
                          <option >8月</option>
                          <option >9月</option>
                          <option >10月</option>
                          <option >11月</option>
                          <option >12月</option>
                          </select>
                          <input type="text"  className="compname" placeholder="接包方公司名"/><button className="post" type="button">确定</button></div>
                          <table className="tab" style={{"width":"100%","margin-top":"22px"}}>
                            <thead>
                              <tr>
                                <th>接包方</th>
                                <th>累计成单量</th>
                              </tr>
                            </thead>
                            <tbody>
                            {this.state.data.jlist.map(function(result,index){
                              return (
                                <tr>
                                    <td>{result.companyname}</td>
                                    <td>{isNull(result.sumauctionnum)?0:result.sumauctionnum}</td>
                                </tr>
                              )
                            })
                            }
                            </tbody>
                          </table>
                      </div>
                      <div className="bottom"><button type="submit" className="button_close">确&nbsp;定</button></div>
                  </div>
        )
    }
  }
});

ReactDOM.render(
    <div>
      <PhotoDeatils loginUrl={urlLogin}/>
            <div className="overview-fbf" >
            <DateDeatils apiUrl={urlGetHead1} name="总收入" isMoney="1" />
            <DateDeatils apiUrl={urlGetHead2} name="竞拍订单总量" isMoney="1"/>
            <DateDeatils apiUrl={urlGetHead3} name="结算总金额" isMoney="1" />
            <div className="box">
            <DateDeatils apiUrl={urlGetHead4} name="本月预计收入" dollarB="元" isMoney="1"/>
            <DateDeatils apiUrl={urlGetHead5} name="本月完成订单量" dollarB="条" />
            <DateDeatils apiUrl={urlGetHead6} name="剩余订单量" dollarB="条"/>
            </div>
      </div>
    </div>
  ,$(".col1")[0],function(){
    $(".overview-fbf>.overview-list").each(function(i){
      $(this).addClass("overview-nav0"+i);
    });
    $(".bubble-hover").hover(function(){
      $(".photo-box div.bubble").show();
    },function(){
      $(".photo-box div.bubble").hide();
    });
    $(".loading_cover").hide();
  });

  function post(data){
      $.ajax({
          type:"GET",
          url:urlJfuinvitationcode,
          dataType:"json",
          cache:false,
          data:data,
          success:function(data){
              if(data.code=="N"){
                console.log(data.msg);
                return false;
              }
              if(data.code=="Y"){
                ReactDOM.render(<Progress_speed/>,$(".recommend_list")[0],function(){this.setState({data:data})});
              }
          }.bind(this),
          error:function(msg){
              console.log(msg);
          }
      });
  }

  ReactDOM.render(<Progress_speed/>,$(".recommend_list")[0]);
