var OrderSelect=React.createClass({
  getInitialState:function(){
    return {
        option:null
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
      <li className={this.props.className}>{this.props.name}{this.props.size}{this.props.quantifier}</li>
    )
  }
});
var OrderBar=React.createClass({
  getInitialState:function(){
      return {
      result:null,
      censusday:null,
      releasenum:null,
      jfuid:null,
      demandid:null
      }
  },
  componentWillMount:function(){
	  
    $.ajax({
        type:"GET",
        url:this.props.urlDemandReport,
        dataType:"json",
        cache:false,
        success:function(result){
            if(result.code=="N"){
              //console.log(msg);
              return false;
            }else if(result.code=="N001"){
				sessionStorage.clear();
              window.location.href="/login.html";
            }
            var data=result.reportDemandList[0];
            var censusday=[];
            var releasenum=[];
            $(result.reportDemandList).each(function(i){
                censusday.push(this.censusday.substr(this.censusday.length-5));
                releasenum.push(this.releasenum);
            });
            this.setState({
              //修改数据
              result:result,
              censusday:censusday,
              releasenum:releasenum,
            });

        }.bind(this),
        error:function(){
            //console.log(msg);
        }
    });
  },
  componentDidUpdate:function(){
    needHide();
	console.log(this.state.releasenum);
    var myChart = echarts.init($("#my-needs-tab")[0]);
	
	
	
		var option = {
	   color:['#000000','#2f4554', '#61a0a8'],
	   /*
    title : {
        text: '某楼盘销售情况',
        subtext: '纯属虚构'
    },
	*/
    tooltip : {
        trigger: 'axis'
    },
	/*
    legend: {
        data:['意向','预购']
    },
	
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
	*/
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
           // data : ['周一','周二','周三','周四','周五','周六','周日']
		   data:this.state.censusday
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : 
		//this.state.releasenum
	[
       
        {
            name:'完成量',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:this.state.releasenum
        },
		/*
        {
            name:'意向',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[1320, 1132, 601, 234, 120, 90, 20]
        }
		*/
		
    ]
};

	/*
    var option = {
       textStyle:{
           color: "#999",
       },
       tooltip : {
           trigger: 'axis',
           axisPointer : {            
               type : 'shadow'        
           }
       },
       textStlye:{
           fontSize:26
       },
       grid: {
           left: '3%',
           right: '4%',
           bottom: '3%',
           containLabel: true,
           backgroundColor:"#fff",
           borderColor:"#fff"
       },
       xAxis : [
           {
               type : 'category',
               data : this.state.censusday,
               axisTick: {
                   show: false
               },
               axisLabel : {
                   margin:10
               }
           }
       ],
       yAxis : [
           {
               type : 'value',
               axisLine:{
                 lineStyle:{
                   color:'#999'
                 }
               },
               axisTick: {
                   show: false
               },
               axisLabel : {
                   margin:20
               }
           }
       ],
       series : [
           {
               name:'完成量',
               type:'bar',
               barWidth: '20px',
               data:this.state.releasenum,
               label:{
                   normal:{
                       show:true,
                       position:"top",
                       formatter:function(e){
                            return e.value;
                       },
                       textStyle:{
                           color:"#666"
                       }
                   }
               },
               itemStyle: {
                   normal: {
                         color: "#ff6682",
                   }
               },
               markPoint:{
                   data:[10, 52, 200, 334, 390, 330, 220,34,45,3,234,234]
                 }
           }
       ]};
	   */
    myChart.setOption(option);
  },
  render:function(){
    return (
        <div id="my-needs-tab"></div>
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
  render:function(){
        var result = this.props.result;
        var optionIndex=this.props.result.redemandList[this.props.optionIndex];
        if(result.redemandList.length != 0){
          var value = function (){
              var option = [];
              $(result.redemandList).each(function(i){
                option.push(<option key={this.demandid}>{this.ordername}</option>);
              });
              return option;
          };
         return (
           <div>
               <div className="title">我的需求</div>
               <div className="line-1">
					 <div className="select-box">
						 <div className="date">
						   <OrderSelect  option={value()} />
						 </div>
					 </div>
					 <div className="needs-dada">
					   <ul>
						 <OrderSpan name="需求量：" size={optionIndex.releasenum} quantifier="条"/>
						 <OrderSpan name="需求单价：" size={optionIndex.orderprice} quantifier="元"/>
						 <OrderSpan name="竞拍量：" size={optionIndex.applicationnum} quantifier="条"/>
						 <OrderSpan name="已完成：" size={optionIndex.fishnum} quantifier="条"/>
					   </ul>
					 </div>
               </div>
               <div className="needs-color">完成量<i></i>单位：条</div>
               <OrderBar urlDemandReport={urlDemandReport()} />
           </div>
         )
    }else{
        return (
          <div>
              <div className="title">我的需求</div>
              <div className="line-1">
                 <div className="select-box">
              <div className="date">
                <select>
                    <option>暂无需求</option>
                </select>
              </div></div></div>
              <div className="nodate">
                <p>您还未发布过任何需求！</p>
                <a className="btn-new" href="../customer_lj_DemandManagement1" style={{"display":"none"}}>发布新需求</a>
              </div>
          </div>
        )
  }
}
});

var SelectResult;


$.ajax({
  type:"GET",
  url:urlOrderProfileSelect,
  dataType:"json",
  cache:false,
  success:function(result){
      if(result.code=="N"){
        //console.log(msg);
        return false;
      }else if(result.code=="N001"){
		  sessionStorage.clear();
        window.location.href="/login.html";
      }
      SelectResult=result;
      var data=result.redemandList[$(".my-needs-tab .date select option:selected").index()];
      var ordername=[];
      var optionIndex=$(".my-needs-tab select option:selected").length==0?0:$(".my-needs-tab select option:selected").index();
      $(result.redemandList).each(function(i){
          ordername.push(this.ordername);
      });
      if(result.redemandList[optionIndex]!==undefined){
        demandid=result.redemandList[optionIndex].demandid;
        //urlOrderProfileSelect
        ReactDOM.render(<Order urlOrderProfileSelect={urlOrderProfileSelect} result={result} optionIndex={0}/>,$(".my-needs-tab")[0]);
        //urlDemandAuctionList
        ReactDOM.render(<Rank urlDemandAuctionList={urlDemandAuctionList()} urlCompleteList={urlCompleteList()} urlCompletionRateList={urlCompletionRateList()} />,$(".my-leaderboard")[0],function(){
          this.setState({
            //圆形图
            completionPercentage:result.redemandList[optionIndex].completionPercentage
          });
        });
      }else{
        ReactDOM.render(<Order urlOrderProfileSelect={urlOrderProfileSelect} result={result} optionIndex={0}/>,$(".my-needs-tab")[0]);
        ReactDOM.render(<Rank />,$(".my-leaderboard")[0]);
      }
  }.bind(this),
  error:function(){
      //console.log(msg);
  }
});


var Rank=React.createClass({
  getInitialState:function(){
      return {
          AuctionList:null,
          ConversionList:null,
          myAuctionRank:{rank:1,name:"我",number:0},
          myConversionRank:{rank:1,name:"我",number:"0"},
          myCompletionRateList:{rank:1,name:"我",number:"0%"},
          completionPercentage:"0"
      }
  },
  componentWillMount:function(){
      //渲染前在这里获取服务器数据
      $.ajax({
          type:"GET",
          url:this.props.urlDemandAuctionList,
          dataType:"json",
          cache:false,
          success:function(result){
            if(result.code=="N"){
              //console.log(msg);
              return false;
            }else if(result.code=="N001"){
				sessionStorage.clear();
              window.location.href="/login.html";
            }
              this.setState({
                //修改数据
                AuctionList:result
              });
          }.bind(this),
          error:function(){
              //console.log(msg);
          }
      });
      $.ajax({
          type:"GET",
          url:this.props.urlCompleteList,
          dataType:"json",
          cache:false,
          success:function(result){
              if(result.code=="N"){
                //console.log(msg);
                return false;
              }else if(result.code=="N"){
                window.location.href="login.html";
              }
              this.setState({
                //修改数据
                ConversionList:result
              });
          }.bind(this),
          error:function(){
              //console.log(msg);
          }
      });
      $.ajax({
          type:"GET",
          url:this.props.urlCompletionRateList,
          dataType:"json",
          cache:false,
          success:function(result){
              if(result.code=="N"){
                //console.log(msg);
                return false;
              }else if(result.code=="N"){
                window.location.href="login.html";
              }
              this.setState({
                //修改数据
                CompletionRateList:result
              });
          }.bind(this),
          error:function(){
              //console.log(msg);
          }
      });
  },

  componentDidMount:function(){
    //渲染后给DOM绑定hover事件
  $(".my-leaderboard ul li").hover(function(){
      $(this).addClass("active").siblings().removeClass("active");
      $(".my-leaderboard .top table").eq($(this).index()).show().siblings().hide();
  });
  $(".circle-green").hover(function(){
      $(this).find(".bubble").toggle();
  });
  circleGreen();
  $(".ui-select-line").selectWidget({
    change  : function (changes) {
        var index=$(".my-needs-tab ul.select-list li.active").index();
        demandid=SelectResult.redemandList[index].demandid;
        React.render(<Order urlOrderProfileSelect={urlOrderProfileSelect} result={SelectResult} optionIndex={index}/>,$(".my-needs-tab")[0]);
        $(".my-leaderboard").html("");
        React.render(<Rank urlDemandAuctionList={urlDemandAuctionList()} urlCompleteList={urlCompleteList()} urlCompletionRateList={urlCompletionRateList()}/>,$(".my-leaderboard")[0],function(){
          this.setState({completionPercentage:SelectResult.redemandList[index].completionPercentage});
        });
        React.render(<OrderBar urlDemandReport={urlDemandReport()} />,$("#my-needs-tab")[0]);
      return changes;
    },
    effect       : "slide",
    keyControl   : false,
    speed        : 200,
    scrollHeight : 150,
    overflow: "hidden"
  });
},
componentDidUpdate:function(){
  circleGreen();
},
  render:function(){
   var AuctionList = [];
   var ConversionList = [];
   var CompletionRateList = [];
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
   }
   else {
     //设置的默认 myAuctionRank
     AuctionList.push(<tr className="aCenter"><td colSpan="3" height="94">暂无数据!</td></tr>);
   }

   if($(this.state.ConversionList).length!=0){
     $(this.state.ConversionList.auctionList).each(function(i){
         if(i<3){
            var imgSrc="images/public/ic-rank-num"+(i+1)+".png";
              if(this.jfuid==oJfuid){
                ConversionList.push(<tr className="myrank"><td><img src={imgSrc} /></td><td>我</td><td>{this.fishnum}</td></tr>);
                return true;
              }
                ConversionList.push(<tr><td><img src={imgSrc} /></td><td>{this.invitationcode}</td><td>{this.fishnum}</td></tr>);
                return true;
         }
           if(this.jfuid==oJfuid){
             ConversionList.push(<tr className="myrank"><td>{this.number}</td><td>我</td><td>{this.fishnum}</td></tr>);
             return true;
           }
            ConversionList.push(<tr><td>{this.number}</td><td>{this.invitationcode}</td><td>{this.fishnum}</td></tr>);
     });
   }else{//需要更改
        ConversionList.push(<tr className="aCenter"><td colSpan="3" height="94">暂无数据!</td></tr>);
   }
   if($(this.state.CompletionRateList).length!=0){
     $(this.state.CompletionRateList.auctionList).each(function(i){
         if(i<3){
            var imgSrc="images/public/ic-rank-num"+(i+1)+".png";
              if(this.jfuid==oJfuid){
                CompletionRateList.push(<tr className="myrank"><td><img src={imgSrc} /></td><td>我</td><td>{parseInt(this.completionPercentage*100)}<span>%</span></td></tr>);
                return true;
              }
                CompletionRateList.push(<tr><td><img src={imgSrc} /></td><td>{this.invitationcode}</td><td>{parseInt(this.completionPercentage*100)}<span>%</span></td></tr>);
                return true;
         }
           if(this.jfuid==oJfuid){
             CompletionRateList.push(<tr className="myrank"><td>{this.number}</td><td>我</td><td>{parseInt(this.completionPercentage*100)}<span>%</span></td></tr>);
             return true;
           }
            CompletionRateList.push(<tr><td>{this.number}</td><td>{this.invitationcode}</td><td>{parseInt(this.completionPercentage*100)}<span>%</span></td></tr>);
     });
   }else{
        CompletionRateList.push(<tr className="aCenter"><td colSpan ="3" height="94">暂无数据!</td></tr>);
   }

   //拼接我的竞拍量排行
   return (
     <div>
         <div className="title">我的接包方</div>
          <div className="rank">
              <ul>
                  <li className="active" id="listA"><span>竞拍榜</span></li>
                  <li id="listB"><span>完成榜</span></li>
                  <li id="listC"><span>完成率榜</span></li>
              </ul>
              <div className="top">
                  <table width="100%">
                      <thead>
                          <tr>
                               <td width="66px">排名</td><td width="106px">接包方</td><td width="66px">竞拍量</td>
                          </tr>
                      </thead>
                      <tbody >
                           {AuctionList}
                      </tbody>
                  </table>
                  <table style={{"display":"none"}} width="100%">
                      <thead>
                          <tr>
                           <td width="66px">排名</td><td width="106px">接包方</td><td width="66px">完成量</td>
                          </tr>
                      </thead>
                      <tbody>
                           {ConversionList}
                      </tbody>
                  </table>
                  <table style={{"display":"none"}} width="100%">
                      <thead>
                          <tr>
                               <td width="66px">排名</td><td width="106px">接包方</td><td width="66px">完成率</td>
                          </tr>
                      </thead>
                      <tbody>
                           {CompletionRateList}
                      </tbody>
                  </table>
              </div>
              <div className="size">
                 <div className="circle_name">需求完成率</div>
                 <div className="circle-green">
                    <strong ><span className="number">{this.state.completionPercentage}</span><span></span></strong>
                    <p className="bubble">质检成功量和发布量的比率</p>
                 </div>
               </div>
          </div>
   </div>
   )
}});
