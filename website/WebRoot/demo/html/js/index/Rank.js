var Rank=React.createClass({
getInitialState:function(){
    return {
        myAuctionRank:{rank:1,name:"我",number:0},
        myConversionRank:{rank:1,name:"我",number:"0%"},
        orderCompletionRate:"0"
    }
},
componentWillMount:function(){
    //渲染前在这里获取服务器数据
      this.setState({
        //修改数据
          AuctionRank:[{rank:1,name:"sdas**sd",number:500},{rank:2,name:"zxzxa**sd",number:400},{rank:3,name:"jhjtzxa**sd",number:300},{rank:4,name:"xssxzxa**sd",number:200},{rank:5,name:"dsdsdzxa**sd",number:100}],
          ConversionRank:[{rank:1,name:"sdas**sd",number:"95%"},{rank:2,name:"zxzxa**sd",number:"87%"},{rank:3,name:"jhjtzxa**sd",number:"78%"},{rank:4,name:"xssxzxa**sd",number:"75%"},{rank:5,name:"dsdsdzxa**sd",number:"72%"}],
          myAuctionRank:{rank:3,name:"我",number:300},
          myConversionRank:{rank:12,name:"我",number:"69%"}
    });
},
componentDidMount:function(){
    //渲染后判断我的竞拍量排行
    if($(this.state.AuctionRank).length!=0){
      var dom=$(".rank table").eq(0).find(".myrank");
      var topSize=$(dom).find("td").eq(0).html();
      if(topSize<=5){
          $(dom).css("visibility","hidden");
          $(dom).parent().find("tr").eq(topSize-1).addClass("myrank").find(":nth-of-type(2)").html("我");
      }
    }
      //渲染后判断我的转换率排行
      if($(this.state.ConversionRank).length!=0){
        var dom=$(".rank table").eq(1).find(".myrank");
        var topSize=$(dom).find("td").eq(0).html();
        if(topSize<=5){
            $(dom).css("visibility","hidden");
            $(dom).parent().find("tr").eq(topSize-1).addClass("myrank").find(":nth-of-type(2)").html("我");
        }
      }
        //渲染后给DOM绑定hover事件
      $(".rank ul li").hover(function(){
          $(this).addClass("active").siblings().removeClass("active");
          $(".rank .top table").eq($(this).index()).show().siblings().hide();
      });
      circleGreen();
},
render:function(){
   var AuctionList = [];
   var ConversionList = [];
   //拼接竞拍量排行榜
   if($(this.state.AuctionRank).length!=0){
     $(this.state.AuctionRank).each(function(i){
        var imgSrc="images/public/ic-rank-num"+(i+1)+".png";
         if(i<3){
             AuctionList.push(<tr><td><img src={imgSrc} /></td><td>{$(this)[0].name}</td><td>{$(this)[0].number}</td></tr>);
         }else{
             AuctionList.push(<tr><td>{$(this)[0].rank}</td><td>{$(this)[0].name}</td><td>{$(this)[0].number}</td></tr>);
         }
     });
   }
   //拼接我的竞拍量排行
           AuctionList.push(<tr className="myrank"><td>{this.state.myAuctionRank.rank}</td><td>{this.state.myAuctionRank.name}</td><td>{this.state.myAuctionRank.number}</td></tr>);
   //拼接转换率排行榜
   if($(this.state.ConversionRank).length!=0){
     $(this.state.ConversionRank).each(function(i){
        var imgSrc="images/public/ic-rank-num"+(i+1)+".png";
         if(i<3){
             ConversionList.push(<tr><td><img src={imgSrc} /></td><td>{$(this)[0].name}</td><td>{$(this)[0].number}</td></tr>)
         }else{
             ConversionList.push(<tr><td>{$(this)[0].rank}</td><td>{$(this)[0].name}</td><td>{$(this)[0].number}</td></tr>)
         }
     });
   }
   //拼接我的转换率排行
           ConversionList.push(<tr className="myrank"><td>{this.state.myConversionRank.rank}</td><td>{this.state.myConversionRank.name}</td><td>{this.state.myConversionRank.number}</td></tr>);
   return (
           <div className="rank">
               <ul>
                   <li className="active" id="listA"><span>竞拍量榜</span></li>
                   <li id="listB"><span>转换率榜</span></li>
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
               <div className="circle-green"><strong>{this.state.orderCompletionRate}</strong></div>
           </div>
    </div>
   )
}
});
React.render(<Rank/>,$(".rank")[0]);
