
var Yewu=React.createClass({
    getInitialState:function(){
        return {
            data:null
        }
    },
    componentDidUpdate:function(){
        if($(".jsms-title").text()=="查重后质检"){
            $(".jsms-text").text("与甲方数据查重后进行录音的质量检验");
        }
        if($(".jsms-title").text()=="回访电话接通数"){
            $(".jsms-text").text("甲方回访后的接通数量，剔除无效与未接通数（>4次）");
        }
        if($(".jsms-title").text()=="数据条目"){
            $(".jsms-text").text("按实际提交数据条目数乘以单价进行结算");
        }
    },
    render:function(){
        if(this.state.data==null){
            return(
                <table>
                    <tr>
                      <td>业务类型:</td>
                      <td>
                        <span>暂无</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble">针对企业自有数据和需求，进行有效触达</div>
                      </td>
                    </tr>
                    <tr>
                      <td>筛选渠道:</td>
                      <td><span>暂无</span></td>
                    </tr>
                    <tr>
                      <td>数据条目:</td>
                      <td><span>暂无</span></td>
                    </tr>
                    <tr>
                      <td>单&emsp;&emsp;价:</td>
                      <td><span>暂无</span></td>
                    </tr>
                    <tr>
                      <td>拨打次数:</td>
                      <td><span>无人接听数据最多拨打三次</span></td>
                    </tr>
                    <tr className="hide">
                      <td>结算模式:</td>
                      <td>
                        <span className="jsms-title">暂无</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble jsms-text" style={{"width":"258px"}}>与甲方数据查重后进行录音的质量检测</div>
                      </td>
                    </tr>
                    <tr>
                      <td>结算时间:</td>
                      <td>暂无</td>
                    </tr>
                </table>
        )}

                  return(
                        <table>
                            <tr>
                              <td>业务类型:</td>
                              <td>
                                <span>{isNull(this.state.data.category3)?"暂无":this.state.data.category3}</span>
                                <i className="bubble-hover">?</i>
                                <div className="bubble">针对企业自有数据和需求，进行有效触达</div>
                              </td>
                            </tr>
                            <tr>
                              <td>筛选渠道:</td>
                              <td><span>{isNull(this.state.data.category2)?"暂无":this.state.data.category2}</span></td>
                            </tr>
                            <tr>
                              <td>数据条目:</td>
                              <td><span>{isNull(this.state.data.releasenum)?"暂无":this.state.data.releasenum}</span></td>
                            </tr>
                            <tr>
                              <td>单&emsp;&emsp;价:</td>
                              <td><span>{isNull(this.state.data.jbfprice)?"暂无":this.state.data.jbfprice}</span></td>
                            </tr>
                            <tr>
                              <td>拨打次数:</td>
                              <td><span>无人接听数据最多拨打三次</span></td>
                            </tr>
                            <tr className="hide">
                              <td>结算模式:</td>
                              <td>
                                <span className="jsms-title">{isNull(this.state.data.paymentstandard)?"暂无":this.state.data.paymentstandard}</span>
                                <i className="bubble-hover">?</i>
                                <div className="bubble jsms-text" style={{"width":"258px"}}>与甲方数据查重后进行录音的质量检测</div>
                              </td>
                            </tr>
                            <tr>
                              <td>结算时间:</td>
                              <td>{isNull(this.state.data.paymenttime)?"暂无":this.state.data.paymenttime}</td>
                            </tr>
                        </table>
              )
    }
});
var Jbxx=React.createClass({
    getInitialState:function(){
        return {
            data:null
        }
    },
    render:function(){
        if(this.state.data==null){
            return(
                <table>
                <tr>
                <td>需求描述:</td>
                <td><span>暂无</span></td>
                </tr>
                <tr>
                <td>开始日期:</td>
                <td><span>暂无</span></td>
                </tr>
                <tr>
                <td>结束日期:</td>
                <td><span>暂无</span></td>
                </tr>
                </table>
        )
        }
        return(
            <table>
            <tr>
            <td>需求描述:</td>
            <td><span>{isNull(this.state.data.demanddescription)?"暂无":this.state.data.demanddescription}</span></td>
            </tr>
            <tr>
            <td>开始日期:</td>
            <td><span>{isNull(this.state.data.begintime)?"暂无":this.state.data.begintime}</span></td>
            </tr>
            <tr>
            <td>结束日期:</td>
            <td><span>{isNull(this.state.data.endtime)?"暂无":this.state.data.endtime}</span></td>
            </tr>
            </table>
        )
    }
});
var Fj=React.createClass({
    getInitialState:function(){
        return {
            data:null
        }
    },
    render:function(){
        if(this.state.data==null){
            return(
                <div className="fj_style">
                <div>
                <p>销售线索文件:</p><p>无</p>
            </div>
            <div>
            <p>话术文件:</p><p>无</p>
            </div>
            <div>
            <p>目标客户名单:</p><p>无</p>
            </div>
            </div>
        )
        }
        return(
            <div className="fj_style">
                <div>
                <p>销售线索文件:</p><p>{isNull(this.state.data.xsxsurl)?"无":'1 份'}</p><p>{isNull(this.state.data.xsxsurl)?"":<a href={domainDownShort+this.state.data.xsxsurl}>下载</a>}</p>
                </div>
                <div>
                <p>话术文件:</p><p>{isNull(this.state.data.standardoperation)?"无":'1 份'}</p><p>{isNull(this.state.data.standardoperation)?"":<a href={domainDownShort+this.state.data.standardoperation}>下载</a>}</p>
                </div>
                <div>
                <p>目标客户名单:</p><p>{isNull(this.state.data.otherreport)?"无":'1 份'}</p><p>{isNull(this.state.data.otherreport)?"":<a href={domainDownShort+this.state.data.otherreport}>下载</a>}</p>
                </div>
            </div>
        )
    }
});


var State=React.createClass({
    getInitialState:function(){
        return {
            data:null,
            jbfprice:null
        }
    },
    componentDidMount:function(){
        $(".progress_speed_show").live("click",function(){
            $(".progress_speed").show();
        });
        $(".progress_speed .close,.progress_speed .button_close").live("click",function(){
            $(".progress_speed").hide();
        });
        $(".Auction_Apply button.drafts").live("click",function(){
          history.go(-1);
        });
    },
    render:function(){
        if(this.state.data==null){
            return false;
        }
        var data=this.state.data;
        var jbfprice=this.state.data.jbfprice;
        $("input[name=invoice_type_1]").live("change",function(){
          $("input[name=invoice_type_1]").parent().next().hide();
          $("input[name=invoice_type_1]:checked").parent().next().show();
          $(".Auction_Apply.active>p:nth-of-type(9) span.money").html((jbfprice*$("input.auctionSize").val()-$(this).parent().next().find("span.money").text()).toFixed(2));
        });
        $("input.auctionSize").live("change",function(){
          $(".Auction_Apply.active>p:nth-of-type(7) span.money").html((isNull($(this).val())?0:jbfprice*$(this).val()*3/100).toFixed(2));
          $(".Auction_Apply.active>p:nth-of-type(8) span.money").html((isNull($(this).val())?0:jbfprice*$(this).val()*6/100).toFixed(2));
          $(".Auction_Apply.active>p:nth-of-type(9) span.money").html((isNull($(this).val())?0:jbfprice*$(this).val()-$("input[name=invoice_type_1]:checked").parent().next().find("span.money").text()).toFixed(2));
            $(this).val()>(data.releasenum-data.applicationnum)?$(this).val(data.releasenum-data.applicationnum).change():"";
        });
        $(".Auction_Apply button.submit").live("click",function (){
          post(data);
        });
            return (
                <div className="right">
                  <div className="title-explain">竞拍申请</div>
                  <div className="settlement">
                      <div className="context-explain Auction_Apply active">
                        <p className="strong" style={{"margin-bottom":"0px"}}><span>竞拍数量：&nbsp;</span><input type="text" required className="auctionSize" placeholder={"最多还可竞拍 "+(this.state.data.releasenum-this.state.data.applicationnum)+" 单" }/></p>
                        <div className="auctionSize" style={{"line-height":"20px"}}><i className="prompt_img"></i><span className="prompt_title">请输入竞拍数量</span></div>
                        <p className="strong" style={{"margin-bottom":"0px"}}><span>外显号码：&nbsp;</span><input type="text" required className="number"   placeholder="输入外显号码,多条用;隔开"/></p>
                        <div className="number"  style={{"line-height":"20px"}}><i className="prompt_img"></i><span className="prompt_title">请输入外显号码</span></div>
                        <p className="strong"><span>预计收益：&nbsp;</span><a href="javascript:" style={{"color":"#1aa0ff"}}><span  className="progress_speed_show">查看MSO平台收费规则>></span></a></p>
                        <p><span>竞拍手续费：&nbsp;</span><span className="money" style={{"width":"auto"}}>0</span>&nbsp;元</p>
                        <p><span>我能开的发票类型：</span><span>(小规模纳税人增票另收3%税费，普票需另收6%税费)</span></p>
                        <p><label><input type="radio" name="invoice_type_1" required value="1"/><span>增税(一般纳税人)</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p><label><input type="radio" name="invoice_type_1" required value="2"/><span>增税(小规模纳税人)</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p><label><input type="radio" name="invoice_type_1" required value="3"/><span>普票</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p className="strong">预计收益：&nbsp;<span className="money">0.00</span></p>
                        <p className="strong">信息服务费：&nbsp;结算金额的8%</p>
                        <div>
                        <button type="button" className="submit">确认提交</button><a href="javascript:history.go(-1)"><button type="button" className="drafts">返回上一页</button></a>
                        </div>
                      </div>
                  </div>
                </div>
              )
    }
});


var Progress_speed=React.createClass({
    getInitialState:function(){
        return {
            data:null
        }
    },
    render:function(){
        if(this.state.data==null){
            return false;
        }
            return (
                <div className="window_table">
                    <div className="top" style={{"text-align":"center"}}><span>MSO平台收费规则</span><i className="close"></i></div>
                    <div className="main">
                        <div className="new_demand">
                            <table className="tab" style={{"width":"100%"}}>
                                <tr>
                                    <th>收费内容</th>
                                    <th>收费标准</th>
                                </tr>
                                <tr>
                                    <td>竞拍手续费</td>
                                    <td>平台免收交易佣金，但会根据您的竞拍量收取一定的手续费，每单收取1元</td>
                                </tr>
                                <tr>
                                    <td>税费</td>
                                    <td>一般纳税人增值税发票不收费，小规模纳税人增值税发票加收3%，普票加收6%</td>
                                </tr>
                                <tr>
                                    <td>信息服务费</td>
                                    <td>按订单结算金额收取8%的信息服务费</td>
                                </tr>
                                <tr>
                                    <td>CRM系统</td>
                                    <td style={{"color":"#fd5352"}}>免费</td>
                                </tr>
                                <tr>
                                    <td>培训</td>
                                    <td style={{"color":"#fd5352"}}>免费</td>
                                </tr>
                                <tr>
                                    <td>线路话费</td>
                                    <td>如果需要使用平台提供的电话线路，将按0.06元/分钟的标准计费</td>
                                </tr>
                                <tr>
                                    <td>电话审核</td>
                                    <td>对网络营销公司所提交的数据，按1元/条收取电话审核费</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="bottom"><button type="button" className="button_close">确&nbsp;定</button></div>
                </div>
        )
    }
});

function post(data){
        if(isNull($("input.auctionSize").val())){
          $("div.auctionSize").addClass("test_error");
          return false;
        }else{
          $("div.auctionSize").removeClass("test_error");
        }
        if(isNull($("input.number").val())){
          $("div.number").addClass("test_error");
          return false;
        }else{
          if($("input.number").val().length<11){
              $("div.number span.prompt_title").html("请输入至少11位的外显号码");
                $("div.number").addClass("test_error");
                return false;
          }else{
          $("div.number").removeClass("test_error");
          }
        }
        if($("input[name=invoice_type_1]:checked").length==0){
          alert("请选择发票类型");
          return false;
        }
      var json={
        jfuid:sessionStorage.getItem("jfuid"),//用户ID
        servicetype:data.category3,//需求业务类型
        pid:data.pid,//当前需求包id
        demandid:data.demandid,//竞拍的需求id
        orderprice:data.jbfprice,//订单价格(需求价格)请输入坐席数量
        auctionnum:$(".Auction_Apply input.auctionSize").val(),//竞拍数量
        explicittel:$(".Auction_Apply input.number").val(),//竞拍-外显号码
        biddingcommission:$(".Auction_Apply.active>p:nth-of-type(4) span.money").text(),//竞拍手续费
        typeofinvoice:$(".Auction_Apply input[name=invoice_type_1]:checked").val(),//1增票(一般纳税人) 2增票（小规模纳税人一般纳税人 收3%的) 3普票(收6%的)
        usemycompanydata:2,//0 ：第三方平台 0.4元一条1 ：MSO平台(按使用收费) 2 ：不使用
        settlementmethod:1,//结算方法 1-客户效果付费 2-包坐席值为1 时 usemycompanydata auctionnum explicittel不能为空 为2时 executiondays seatsnum不能为空
        pricetol:$(".Auction_Apply.active>p:nth-of-type(9) span.money").html() //包坐席预计收益
        };
    jQuery.ajax({
          type : 'POST',
          url : urlAuctionOrder,
          dataType : 'json',
          data : json,
          success : function(res) {
            if(res.code=="Y"){
              window.location.href="AuctionDone.html";
            }else{
              alert(res.code);
            }
          },
          error : function(msg) {
             console.log(msg);
          }
      });
}
React.render(<Yewu/>,$("#new_demand div.demend_left .form_col1>.main")[0]);
React.render(<Jbxx/>,$("#new_demand div.demend_left .form_col3>.main")[0]);
React.render(<Fj/>,$("#new_demand div.demend_left .form_col5>.main")[0]);
React.render(<Progress_speed/>,$(".progress_speed")[0]);
React.render(<State/>,$("#new_demand div.demend_right")[0],function(){$(".loading_cover").hide();});

$.ajax({
    type:"GET",
    url:urlDemandDetail,
    dataType:"json",
    cache:false,
    success:function(data){
        if(data.code=="N001"){
            console.log(data.msg);
			sessionStorage.clear();
            window.location.href="/login.html";
        }
        if(data.code=="N"){
            console.log(data.msg);
        }
        if(data.code=="Y"){
        $(".title_select p").text(data.demand.ordername);
          React.render(<Yewu/>,$("#new_demand div.demend_left .form_col1>.main")[0],function(){this.setState({data:data.demand})});
          React.render(<Jbxx/>,$("#new_demand div.demend_left .form_col3>.main")[0],function(){this.setState({data:data.demand})});
          React.render(<Fj/>,$("#new_demand div.demend_left .form_col5>.main")[0],function(){this.setState({data:data.demand})});
          React.render(<Progress_speed/>,$(".progress_speed")[0],function(){this.setState({data:data.demand})});
          React.render(<State/>,$("#new_demand div.demend_right")[0],function(){this.setState({data:data.demand,jbfprice:data.demand});});
        }
    },
    error:function(msg){
        console.log(msg);
    }
});
