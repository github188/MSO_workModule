var OrderSelect=React.createClass({
  getInitialState:function(){
    return {
        option:null,
    }
  },
  render:function(){
    return(
      <select name="drop1" className="ui-select-line">
        {this.props.option}
      </select>
  )
  }
});
var OrderSpan=React.createClass({
  getDefaultProps:function(){
    return {
      name:null,
      size:null,
      className:null,
      quantifier:null
    }
  },
  render:function(){
    return(
      <span className={this.props.className} style={{"vertical-align":"middle"}}>{this.props.name}{this.props.size}{this.props.quantifier}</span>
    )
  }
});
var OrderLine=React.createClass({
  getInitialState:function(){
      return {
      result:null,
      qachecktime:null,
      order_num:null,
      wcl:null
      }
  },
  componentWillMount:function(){
    $.ajax({
        type:"GET",
        url:this.props.urlOrderReport,
        dataType:"json",
        cache:false,
        success:function(result){
            if(result.code=="N"){
              console.log(msg);
              return false;
            }
            var data=result.orderReportList[0];
            var qachecktime=[];
            var order_num=[];
            var wcl=[];
            $(result.orderReportList).each(function(i){
                qachecktime.push(this.qachecktime.substr(this.qachecktime.length-5));
                order_num.push(this.order_num);
                wcl.push(this.wcl);
            });
            this.setState({
              //修改数据
              result:result,
              qachecktime:qachecktime,
              order_num:order_num,
              wcl:wcl
            });
        }.bind(this),
        error:function(){
            console.log(msg);
        }
    });
  },
  componentDidUpdate:function(){
    var myChart = echarts.init($(".line")[0]);
    var option = {
      textStyle:{
          color: "#999",
      },
      title: {
          left:"15px"
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          right:"18px",
          top:"0px",
          width:"10px",
          padding:[0,0,0,0],
          data: [
              {
                  name: '日提交量',
                  // 强制设置图形为圆。
                  icon: 'square',
              },
              {
                  name: '质检成功量',
                  // 强制设置图形为圆。
                  icon: 'square'
              }
          ]
      },
      grid: {
          show:false,
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: {
          type: 'category',
          data: this.state.qachecktime,
          axisLine:{
              show:false
          },
          axisTick:{
              show:false
          },
          axisLabel : {
              margin:20
          },
          nameLocation:"start",
          boundaryGap:["0%","0%"]
      },
      yAxis: {
          type: 'value',
          axisLine:{
              show:false
          },
          axisTick:{
              show:false
          },
          axisLabel:{
              margin:20
          },
          boundaryGap:["10%","0%"],
          min:0
      },
      series: [
          {
              name:'日提交量',
              type:'line',
              symbolSize:6,
              silent: false,
              data:this.state.order_num,
              itemStyle: {
                  normal: {
                      color: "rgb(109,147,253)"
                  }
              },
          },
          {
              name:'质检成功量',
              type:'line',
              data:this.state.wcl,
              symbolSize:6,
              itemStyle: {
                  normal: {
                      color: "rgb(255,102,130)"
                  }
              },
          }
      ]};
    myChart.setOption(option);
  },
  render:function(){
    return (
        <div className="line"></div>
    )
  }
});
var Order=React.createClass({
  getDefaultProps:function(){
      return {
        optionIndex:null,
        result:null
      }
  },
  componentDidMount:function(){

  },
  render:function(){
        var result = this.props.result;
        var optionIndex=this.props.result.orderSelectList[this.props.optionIndex];
        if(result.orderSelectList.length != 0){
          var value = function (){
              var option = [];
              $(result.orderSelectList).each(function(i){
                option.push(<option>{this.ordername}</option>);
              });
              return option;
          };
         return (
                <div>
                    <div className="date">
                       <OrderSelect option={value()} />
                       <OrderSpan className="date1" name="竞拍量:" size={optionIndex.auctionnum} quantifier="条"/>
                       <OrderSpan className="date2" name="订单单价:" size={optionIndex.orderprice} quantifier="元"/>
                       <OrderSpan className="date3" name="已完成:" size={optionIndex.fishnum} quantifier="条"/>
                    </div>
                    <OrderLine urlOrderReport={urlOrderReport()}/>
                </div>
         )
    }else{
        return (
              <div>
                  <div className="date">
                    <select>
                        <option>暂无订单</option>
                    </select>
                  </div>
                  <div className="nodate">
                    <p><img src="images/public/ic-jbf-nodata.png" /></p>
                    <p>您还未竞拍任何订单，马上到<a href="/html/supplierDemandHall.html" style={{"font-size":"18px","color":"#fd5352","text-decoration":"underline"}}>需求大厅</a>竞拍订单！</p>
                  </div>
              </div>
        )
  }
}
});

var SelectResult;


$.ajax({
  type:"GET",
  url:urlOrderProfileSelect1,
  dataType:"json",
  cache:false,
  success:function(result){
      if(result.code=="N"){
        console.log(msg);
        return false;
      }
      SelectResult=result;
      var data=result.orderSelectList[$("#main .date select option:selected").index()];
      var ordername=[];
      var optionIndex=$("#main select option:selected").length==0?0:$("#main select option:selected").index();
      $(result.orderSelectList).each(function(i){
          ordername.push(this.ordername);
      });
      if(result.orderSelectList[optionIndex]!==undefined){
        demandid=result.orderSelectList[optionIndex].demandid;
        React.render(<Order urlOrderProfileSelect={urlOrderProfileSelect1} result={result} optionIndex={0}/>,$("#main")[0]);
        React.render(<Rank urlOrderAuctionList={urlOrderAuctionList()} urlOrderConversionRateList={urlOrderConversionRateList()}/>,$(".rank")[0],function(){
          this.setState({
            orderCompletionRate:result.orderSelectList[optionIndex].orderCompletionRate
          });
        });
      }else{
        React.render(<Order urlOrderProfileSelect={urlOrderProfileSelect1} result={result} optionIndex={0}/>,$("#main")[0]);
        React.render(<Rank />,$(".rank")[0]);
      }
  }.bind(this),
  error:function(){
      console.log(msg);
  }
});
var Rank=React.createClass({
  getInitialState:function(){
      return {
          AuctionList:null,
          ConversionList:null,
          myAuctionRank:{rank:1,name:"我",number:0},
          myConversionRank:{rank:1,name:"我",number:"0%"},
          orderCompletionRate:"0"
      }
  },
  componentWillMount:function(){
      //渲染前在这里获取服务器数据
      $.ajax({
          type:"GET",
          url:this.props.urlOrderAuctionList,
          dataType:"json",
          cache:false,
          success:function(result){
              if(result.code=="N"){
                console.log(msg);
                return false;
              }
              this.setState({
                //修改数据
                AuctionList:result
              });
          }.bind(this),
          error:function(){
              console.log(msg);
          }
      });
      $.ajax({
          type:"GET",
          url:this.props.urlOrderConversionRateList,
          dataType:"json",
          cache:false,
          success:function(result){
              if(result.code=="N"){
                console.log(msg);
                return false;
              }
              this.setState({
                //修改数据
                ConversionList:result
              });
          }.bind(this),
          error:function(){
              console.log(msg);
          }
      });
  },
  componentDidMount:function(){
          //渲染后给DOM绑定hover事件
        $(".rank ul li").hover(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".rank .top table").eq($(this).index()).show().siblings().hide();
        });
        circleGreen();
      	$(".circle-green").hover(function(){
            $(this).find(".bubble").toggle();
        });
        $(".ui-select-line").selectWidget({
      		change  : function (changes) {
              var index=$("#main ul.select-list li.active").index();
              demandid=SelectResult.orderSelectList[index].demandid;
              React.render(<Order urlOrderProfileSelect={urlOrderProfileSelect1} result={SelectResult} optionIndex={index}/>,$("#main")[0]);
              $(".rank").html("");
              React.render(<Rank urlOrderAuctionList={urlOrderAuctionList()} urlOrderConversionRateList={urlOrderConversionRateList()}/>,$(".rank")[0],function(){
                this.setState({orderCompletionRate:SelectResult.orderSelectList[index].orderCompletionRate});
              });
              React.render(<OrderLine urlOrderReport={urlOrderReport()} />,$(".line")[0]);
      			return changes;
      		},
      		effect       : "slide",
      		keyControl   : false,
      		speed        : 200,
      		scrollHeight : 167,
          overflow: "hidden"
      	});
  },
  componentDidUpdate:function(){
        circleGreen();
  },
  render:function(){
   var AuctionList = [];
   var ConversionList = [];
   //拼接竞拍量排行榜
   if($(this.state.AuctionList).length!=0){
     $(this.state.AuctionList.auctionList).each(function(i){
         if(i<3){
            var imgSrc="images/public/ic-rank-num"+(i+1)+".png";
              if(this.jfuid==oJfuid){
                AuctionList.push(<tr className="myrank"><td><img src={imgSrc} /></td><td>我</td><td>{this.auctionnum}</td></tr>);
                return true;
              }
                AuctionList.push(<tr><td><img src={imgSrc} /></td><td>{this.invitationcode}</td><td>{this.auctionnum}</td></tr>);
                return true;
         }
           if(this.jfuid==oJfuid){
             AuctionList.push(<tr className="myrank"><td>{this.number}</td><td>我</td><td>{this.auctionnum}</td></tr>);
             return true;
           }
            AuctionList.push(<tr><td>{this.number}</td><td>{this.invitationcode}</td><td>{this.auctionnum}</td></tr>);
     });
   }else{
      AuctionList.push(<tr className="myrank"><td>{this.state.myAuctionRank.rank}</td><td>{this.state.myAuctionRank.name}</td><td>{this.state.myAuctionRank.number}</td></tr>);
   }
   if($(this.state.ConversionList).length!=0){
     $(this.state.ConversionList.auctionList).each(function(i){
         if(i<3){
            var imgSrc="images/public/ic-rank-num"+(i+1)+".png";
              if(this.jfuid==oJfuid){
                ConversionList.push(<tr className="myrank"><td><img src={imgSrc} /></td><td>我</td><td>{this.conversionRate==null?0:this.conversionRate}<span>%</span></td></tr>);
                return true;
              }
                ConversionList.push(<tr><td><img src={imgSrc} /></td><td>{this.invitationcode}</td><td>{this.conversionRate==null?0:this.conversionRate}<span>%</span></td></tr>);
                return true;
         }
           if(this.jfuid==oJfuid){
             ConversionList.push(<tr className="myrank"><td>{this.number}</td><td>我</td><td>{this.conversionRate==null?0:this.conversionRate}<span>%</span></td></tr>);
             return true;
           }
            ConversionList.push(<tr><td>{this.number}</td><td>{this.invitationcode}</td><td>{this.conversionRate==null?0:this.conversionRate}<span>%</span></td></tr>);
     });
   }else{
        ConversionList.push(<tr className="myrank"><td>{this.state.myConversionRank.rank}</td><td>{this.state.myConversionRank.name}</td><td>{this.state.myConversionRank.number}</td></tr>);
   }
   //拼接我的竞拍量排行
   return (
           <div className="rank">
               <ul>
                   <li className="active"><span>竞拍量榜</span></li>
                   <li><span>转换率榜</span></li>
               </ul>
               <div className="top">
                   <table>
                       <thead>
                           <tr>
                                <td width="66px">排名</td><td width="106px">接包方</td><td width="66px">竞拍量</td>
                           </tr>
                       </thead>
                       <tbody>
                        {AuctionList}
                       </tbody>
                   </table>
                   <table style={{"display":"none"}}>
                       <thead>
                           <tr>
                            <td width="66px">排名</td><td width="106px">接包方</td><td width="66px">转换率</td>
                           </tr>
                       </thead>
                       <tbody>
                       {ConversionList}
                       </tbody>
                   </table>
               </div>
               <div className="size">
                    <p>订单完成率</p>
                    <div className="circle-green"><strong ><span className="number">{parseInt(this.state.orderCompletionRate)}</span><span>%</span></strong><p className="bubble">质检成功量和竞拍量的比率</p></div>
           </div>
    </div>
   )
}});
