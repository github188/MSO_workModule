var BarSelect=React.createClass({
  getInitialState:function(){
    return {
        option:null,
    }
  },
  render:function(){
    return(
        <select name="drop1" className="ui-select-bar">
          {this.props.option}
        </select>
        )
  }
});

var BarLine=React.createClass({
  getInitialState:function(){
    return {
      result:null,
      ym:null,
      yyauctionnumtol:null,
      urlHistoricalOrderSummary:this.props.urlHistoricalOrderSummary
    }
  },
  componentWillMount:function(){
      $.ajax({
          type:"GET",
          url:this.state.urlHistoricalOrderSummary,
          dataType:"json",
          cache:false,
          success:function(result){
              if(result.code=="N"){
                console.log(result.msg);
                return false;
              }
              var ym=[];
              var yyauctionnumtol=[];
              $(result.hisOrderSummaryList).each(function(i){
                  ym.push((this.ym.substr(this.ym.length-2))-1+1+"月");
                  yyauctionnumtol.push(this.yyauctionnumtol);
              });
              if(result.hisOrderSummaryList.length==0){
                  this.setState({
                    result:null,
                    ym:null,
                    yyauctionnumtol:null
                  });
              }else {
                this.setState({
                  result:result,
                  ym:ym,
                  yyauctionnumtol:yyauctionnumtol
                });
              }
          }.bind(this),
          error:function(){
              console.log(msg);
          }
      });
  },
  componentDidUpdate:function(){
      if(this.state.result==null||this.state.result=="undefined"||this.state.result==""){
        return false;
      }
      if(this.state.result.hisOrderSummaryList.length!=0){
        var myChart = echarts.init($(".bar")[0]);
        var option = {
           textStyle:{
               color: "#999",
           },
           tooltip : {
               trigger: 'axis',
               axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                   type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
               }
           },
           textStlye:{
               fontSize:26
           },
           grid: {
               show:true,
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
                   data : this.state.ym,
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
                   name:'竞拍总量',
                   type:'bar',
                   barWidth: '20px',
                   data:this.state.yyauctionnumtol,
                   label:{
                       normal:{
                           show:true,
                           position:"top",
                           formatter:function(e){
                                return e.value+"单";
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
        myChart.setOption(option);
      }
  },
  render:function(){
      if(null==this.state.result)
      {
        return (
            <div className="nodate">
              <p><img src="images/public/pic-jbf-nodata.png"/></p>
              <p>您暂时还没有订单，马上到<a href="/html/supplierDemandHall.html" style={{"font-size":"18px","color":"#fd5352","text-decoration":"underline"}}>需求大厅</a>竞拍订单！</p>
            </div>
        )
      }else {
        if(this.state.result.hisOrderSummaryList.length!=0){;
          return (<div className="bar"></div>)
        }else{
          return (
                <div className="nodate">
                  <p><img src="images/public/pic-jbf-nodata.png"/></p>
                  <p>您暂时还没有订单，马上到<a href="/html/supplierDemandHall.html" style={{"font-size":"18px","color":"#fd5352","text-decoration":"underline"}}>需求大厅</a>竞拍订单！</p>
                </div>
          )
        }
      }
    }
});

var Bar=React.createClass({
    getDefaultProps:function(){
        return {
          date:[2016]
        }
    },
    componentDidMount:function(){
            $(".ui-select-bar").selectWidget({
          		change  : function (changes) {
                  // var date=$("#main1 ul.select-list li.active").text();
                  // $("#main1 .bar").html("");
                  // React.render(<BarLine urlHistoricalOrderSummary={urlHistoricalOrderSummary()}/>,$("#main1 .bar")[0]);
          			return changes;
          		},
          		effect       : "slide",
          		keyControl   : false,
          		speed        : 100,
          		scrollHeight : 167,
          	});
    },
    render:function(){
        var date = [];
        $(this.props.date).each(function(){
          date.push(<option>{this}</option>);
        });
           return (
             <div>
                <div className="date">
                  <BarSelect option={date}/>
                </div>
                  <BarLine  urlHistoricalOrderSummary={urlHistoricalOrderSummary()}/>
             </div>
           )
   }
});
React.render(<Bar/>,$("#main1")[0],
  function(){
    $(".loading_cover").hide();
  }
);

//{$("#main1 .date select option:selected").text()}
