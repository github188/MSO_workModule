var OrderList = React.createClass({
  getInitialState : function(){
      return{
          config :[]
      }
  },
  componentDidMount: function() {
    // if("page"!=page){
    //     document.getElementById("currentPage").value="1";
    // }
    // var demandname="";
    // var beginreleasetime="";
    // var endreleasetime="";
    // var currentPage=$("#currentPage").val();
    // var par=document.getElementById("par").value;
    // if("6"==par){//异常需求
    //      demandname=$("#ycdemandname").val();
    //      beginreleasetime=$(".ycstart_date").val();
    //      endreleasetime=$(".ycend_date").val();
    // }if("7"==par){//草稿箱
    //   //demandname=$("#demandname").val();
    // }else{//列表需求
    //     demandname=$("#demandname").val();
    //     beginreleasetime=$(".start_date").val();
    //     endreleasetime=$(".end_date").val();
    // }
    //   var data={
    //     "par":par,
    //     "beginreleasetime":beginreleasetime,
    //     "endreleasetime":endreleasetime,
    //     "demandname":demandname,
    //     "currentPage":currentPage,
    //     "jfuid":sessionStorage.getItem("jfuid"),
    //   };
    //   urlDemandList="";
    // urlDemandList = urlDemandList + "par" + par + "beginreleasetime" + beginreleasetime + "endreleasetime" + endreleasetime + "demandname" + demandname + "currentPage" + currentPage;

    //var data = this.state.data;
    console.log(data);
    $.ajax({
        type:"GET",
        url:"js/supplier/d.js",
        dataType:"json",
        cache:false,
        success:function(data){
            this.setState({
               data : data.hfpList
            });
            console.log(data);
            if($("li.bg_rose").text()==""){
                $(this).addClass("hide");
            }
            var per = parseInt(data.applicationnum/data.releasenum*100);
            if('数据加工'==data.servicetype){
                this.props.url = "dataMining.html#" + pid;
            }else{
                this.props.url = "customerMining.html#" + pid;
            }
            $(".tag1").addClass("tag").find("word").text("审核中").next().addClass("ing-gray");
            $(".tag2").addClass("tag").find("word").text("进行中").next().addClass("ing-blue");
            $(".tag5").addClass("tag").find("word").text("结算中").next().addClass("ing-red");
            $(".tag6").addClass("tag").find("word").text("已完成").next().addClass("done");
            $(".loading_cover").hide();

        }.bind(this),
        error:function(){
            console.log("error")
            $(".loading_cover").hide();
        }
    });
  },
render:function() {
  if(this.state.data==null){
      return(<div className="no-reslut">暂无数据</div>);
  }else{






    // var repos = this.state.data.items;
    // var repoList = repos.map(function (repo, index) {
    //   return (
    //     <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
    //   );
    // });
    // return (
    //   <main>
    //     <h1>Most Popular JavaScript Projects in Github</h1>
    //     <ol>{repoList}</ol>
    //   </main>
    // );







    var demands = this.state.data;//初始化数组
    var demandsList = data.map(function(demand,index){
      return (
          <div className="reslut_box" key={index}>
              <div className="title">
                  <h3>{demand.demandname}</h3>
                  <ul>
                      <li className="bg_rose">{demand.industry}</li>
                      <li className="cash"><span>￥</span>{demand.demandpricetol}</li>
                  </ul>
              </div>
              <div className="bottom">
                  <div className="type">
                      <p>业务类型</p>
                      <h3>{demand.servicetype}<i>?<span>通过致电目标群体，以标准话术挖掘意向客户</span></i></h3>
                  </div>
                  <div className="mode hide">
                      <p>结算模式</p>
                      <h3>{demand.paymentstandard}<i>?<span>与甲方数据查重后进行录音的质量检测</span></i></h3>
                  </div>
                  <div className="date">
                      <p>发布时间</p>
                      <h3>{demand.releasetime}</h3>
                  </div>
                  <div className="schedule">
                      <div className="GaugeMeter gaugeMeter" dataPercent={parseInt(demand.applicationnum/demand.releasenum*100)} dataAppend="%" dataSize="150" dataStyle="Semi" dataWidth="5" dataColor="#ff9429" style={{"width":"150px"}}></div>
                      <span className="data">{}<i>%</i></span>
                      <span className="start">0</span>
                      <span className="descript">竞拍进度</span>
                      <span className="end">{demand.releasenum}</span>
                  </div>
                  <div className="btn-box">
                      <a href={demand.url}>
                        <button type="button" className="bg_blue">查看详情</button>
                      </a>
                  </div>
              </div>
              <div className={"tag"+demand.fdstate}><span className="word">审核中</span><i className=""></i></div>
          </div>
        );

    },this);

    }

  return (
    <div>
      {demandsList}
    </div>
  );
}
});

ReactDOM.render(<OrderList />,$("#search_reslut")[0]);
