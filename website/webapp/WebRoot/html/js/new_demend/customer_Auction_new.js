var Yewu=React.createClass({
    getInitialState:function(){
        return {
            data:null
        }
    },
    componentDidUpdate:function(){
        if($(".jsms-title").text()=="查重后抽检"){
            $(".jsms-text").text("与甲方数据查重后进行录音的质量检验");
        }
        if($(".jsms-title").text()=="回访电话接通数"){
            $(".jsms-text").text("甲方回访后的接通数量，剔除无效与未接通数（>4次）");
        }
        if($(".jsms-title").text()=="数据条目"){
            $(".jsms-text").text("按实际提交数据条目数乘以单价进行结算");
        }
        if($(".jsms-title").text()=="按提交线索数量结算"){
            $(".jsms-text").text("按提交线索数量结算");
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
                <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                </td>
                </tr>
                <tr>
                <td>需求数量:</td>
                <td><span>暂无</span></td>
                </tr>
                <tr>
                <td>单&emsp;&emsp;价:</td>
                <td><span>暂无</span></td>
                </tr>
                <tr>
                </tr>
                <tr className="hide">
                <td>结算模式:</td>
                <td>
                <span className="jsms-title">暂无</span>
                <i className="bubble-hover">?</i>
                <div className="bubble jsms-text" style={{"width":"258px"}}></div>
                </td>
                </tr>
                <tr>
                <td>结算时间:</td>
                <td>暂无</td>
                </tr>
                </table>
        )
        }else{
                  return(
                      <table>
                      <tr>
                      <td>业务类型:</td>
                      <td>
                      <span>{isNull(this.state.data.category3)?"暂无":this.state.data.category3}</span>
                      <i className="bubble-hover">?</i>
                      <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                      </td>
                      </tr>
                      <tr>
                      <td>需求数量:</td>
                      <td><span>{isNull(this.state.data.releasenum)?"暂无":this.state.data.releasenum}</span></td>
                      <td style={{"color":"#FF6666"}}>剩余数量：{this.state.data.releasenum-this.state.data.applicationnum}</td>
                      </tr>
                      <tr>
                      <td>单&emsp;&emsp;价:</td>
                      <td><span>{isNull(this.state.data.jbfprice)?"暂无":this.state.data.jbfprice}</span></td>
                      <td style={{"color":"#FF6666","width":"500px"}}>{isNull(this.state.data.subdescription)?"":"特别注意："+this.state.data.subdescription}</td>
                      </tr>
                      <tr>
                      <td>包坐席单价:</td>
                      <td><span>{isNull(this.state.data.sittingprice)?"暂无":this.state.data.sittingprice}</span></td>
                      </tr>
                      <tr className="hide">
                      <td>结算模式:</td>
                      <td>
                      <span  className="jsms-title">{isNull(this.state.data.paymentstandard)?"暂无":this.state.data.paymentstandard}</span>
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
    }
});
var Hangy=React.createClass({
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
            <td>行业:</td>
            <td><span>暂无</span></td>
            </tr>
            <tr>
            <td>行业细分:</td>
            <td>暂无</td>
            </tr>
            </table>
        )}
        return(
            <table>
            <tr>
			  <td>行业:</td>
			  <td><span>{isNull(this.state.data.category1)?"暂无":this.state.data.category1}</span></td>
			  </tr>
            <tr>
            <td>行业细分:</td>
            <td>
				{isNull(this.state.data.ordername)?"暂无":this.state.data.ordername}
			</td>
            </tr>
            </table>
        )
    }
});
var Mbkh=React.createClass({
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
            <td>目标人群:</td>
            <td><span>暂无</span></td>
            </tr>
            <tr>
            <td>对象年龄:</td>
            <td>暂无</td>
            </tr>
            <tr>
            <td>获客渠道:</td>
            <td>暂无</td>
            </tr>
            </table>
        )}
        return(
            <table>
            <tr>
            <td  style={{"padding-bottom":this.state.data.category1=="教育培训"?"0":"30px"}}>目标人群:</td>
            <td  style={{"padding-bottom":this.state.data.category1=="教育培训"?"0":"30px"}}><span>{isNull(this.state.data.beginage+this.state.data.endage)?"暂无":(this.state.data.beginage+'-'+this.state.data.endage+'岁')}</span></td>
            </tr>
            <tr style={{"display":this.state.data.category1=="教育培训"?"none":"table-row"}}>
            <td >对象年龄:</td>
            <td>{isNull(this.state.data.beginage)&&isNull(this.state.data.endage)?"暂无":this.state.data.beginage+"-"+this.state.data.endage+" 周岁"}</td>
            </tr>
            <tr style={{"display":this.state.data.category1=="教育培训"?"none":"table-row"}}>
            <td>获客渠道:</td>
            <td>{isNull(this.state.data.category2)?"暂无":this.state.data.category2}</td>
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
                <td>目标城市:</td>
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
            <td>目标城市:</td>
            <td><span>{isNull(this.state.data.targecity)?"暂无":this.state.data.targecity}</span></td>
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
        $("input[name=settlement_method]").live("change",function(){
            if($(this).val()=="客户效果付费"){
              $(".right .settlement .Auction_Apply").eq(0).addClass("active").siblings().removeClass("active");
            }else{
              $(".right .settlement .Auction_Apply").eq(1).addClass("active").siblings().removeClass("active");
            }
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
            var sittingprice=this.state.data.sittingprice;
            var date=new Date();
            var endtime=new Date(this.state.data.endtime);
            var activeDay=Math.ceil(endtime.diff(date));
            var favorableway=this.state.data.favorableway;
            $("input[name=invoice_type_1]").live("change",function(){
              $("input[name=invoice_type_1]").parent().next().hide();
              $("input[name=invoice_type_1]:checked").parent().next().show();
              $(".Auction_Apply.active>p:nth-of-type(9) span.money").html((jbfprice*$("input.auctionSize").val()-$("input.auctionSize").val()-$(this).parent().next().find("span.money").text()).toFixed(2));
            });
            $("input[name=invoice_type_2]").live("change",function(){
              $("input[name=invoice_type_2]").parent().next().hide();
              $("input[name=invoice_type_2]:checked").parent().next().show();
              var seatSize=isNull($("input.seatSize").val())?0:$("input.seatSize").val();
              var activeDay=isNull($("input.activeDay").val())?0:$("input.activeDay").val();
              var invoice_type_2=$("input[name=invoice_type_2]:checked").parent().next().find("span.money").text();
              $(".Auction_Apply.active>p:nth-of-type(9) span.money").html((sittingprice*seatSize*activeDay-invoice_type_2).toFixed(2));
            });
            $("input.auctionSize").live("change",function(){
              if(favorableway==0){
                $(".Auction_Apply.active>p:nth-of-type(4) span.money").html(isNull($(this).val())?0:$(this).val());
              }
              $(".Auction_Apply.active>p:nth-of-type(7) span.money").html((isNull($(this).val())?0:jbfprice*$(this).val()*3/100).toFixed(2));
              $(".Auction_Apply.active>p:nth-of-type(8) span.money").html((isNull($(this).val())?0:jbfprice*$(this).val()*6/100).toFixed(2));
              $(".Auction_Apply.active>p:nth-of-type(9) span.money").html((isNull($(this).val())?0:jbfprice*$(this).val()-$(this).val()-$("input[name=invoice_type_1]:checked").parent().next().find("span.money").text()).toFixed(2));
                $(this).val()>(data.releasenum-data.applicationnum)?$(this).val(data.releasenum-data.applicationnum).change():"";
            });
            $("input.seatSize").live("change",function(){
              var seatSize=isNull($("input.seatSize").val())?0:$("input.seatSize").val();
              var activeDay=isNull($("input.activeDay").val())?0:$("input.activeDay").val();
              var invoice_type_2=$("input[name=invoice_type_2]:checked").parent().next().find("span.money");
              $(".Auction_Apply.active>p:nth-of-type(7) span.money").html((seatSize==0||activeDay==0?0:sittingprice*seatSize*activeDay*3/100).toFixed(2));
              $(".Auction_Apply.active>p:nth-of-type(8) span.money").html((seatSize==0||activeDay==0?0:sittingprice*seatSize*activeDay*6/100).toFixed(2));
              $(".Auction_Apply.active>p:nth-of-type(9) span.money").html((sittingprice*seatSize*activeDay-$(invoice_type_2).text()).toFixed(2));
            });
            $("input.activeDay").live("change",function(){
              $(this).val()>activeDay?$(this).val(activeDay).change():"";
              $("input.seatSize").change();
              });
            $(".Auction_Apply button.submit").live("click",function (){
              post(data);
            });
            return (
                <div className="right">
                  <div className="title-explain">竞拍申请</div>
                  <div className="radio_active">
                    <p>请选择结算方式</p>
                    <p><label><input type="radio" name="settlement_method" value="客户效果付费" defaultChecked/>客户效果付费,与甲方结算</label></p>
                    <p><label><input type="radio" name="settlement_method" value="包坐席"/>包坐席,与平台结算</label></p>
                    <p>包坐席需完成每日通话时间3.5小时/坐席，或者每日至少400个通话记录</p>
                  </div>
                  <div className="settlement">
                      <div className="context-explain Auction_Apply active">
                        <p className="strong" style={{"margin-bottom":"0px"}}><span>竞拍数量：&nbsp;</span><input type="text" required className="auctionSize" placeholder={"最多还可竞拍 "+(this.state.data.releasenum-this.state.data.applicationnum)+" 单" }/></p>
                        <div className="auctionSize" style={{"line-height":"20px"}}><i className="prompt_img"></i><span className="prompt_title">请输入竞拍数量</span></div>
                        <p className="strong" style={{"margin-bottom":"0px"}}><span>外显号码：&nbsp;</span><input type="text" required className="number"   placeholder="输入外显号码,多条用;隔开"/></p>
                        <div className="number"  style={{"line-height":"20px"}}><i className="prompt_img"></i><span className="prompt_title">请输入外显号码</span></div>
                        <p className="strong"><span>预计收益：&nbsp;</span><a href="javascript:" style={{"color":"#1aa0ff"}}><span id="check" className="progress_speed_show">查看MSO平台收费规则>></span></a></p>
                        <p><span>竞拍手续费：&nbsp;</span><span className="money">0</span>&nbsp;元</p>
                        <p><span>我能开的发票类型：</span><span>(小规模纳税人增票另收3%税费，普票需另收6%税费)</span></p>
                        <p><label><input type="radio" name="invoice_type_1" required value="1"/><span>增税(一般纳税人)</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p><label><input type="radio" name="invoice_type_1" required value="2"/><span>增税(小规模纳税人)</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p><label><input type="radio" name="invoice_type_1" required value="3"/><span>普票</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p className="strong">预计收益：&nbsp;<span className="money">0</span></p>
                        <p className="strong">选择精准信息服务：</p>
                        <p id="infoA"><label><input type="radio" name="service_type" required value="0"/><span>第三方平台，按结算金额15%收费</span></label></p>
                        <p id="infoB"><label><input type="radio" name="service_type" required value="1"/><span>MSO平台，按结算金额8%收费</span></label></p>
                        <p id="infoC"><label><input type="radio" name="service_type" required value="2"/><span>不使用</span></label></p>
                        <div>
                        <button type="button" className="submit">确认提交</button><a href="javascript:"><button type="button" className="drafts">返回上一页</button></a>
                        </div>
                      </div>
                      <div className="context-explain Auction_Apply">
                        <p className="strong"  style={{"margin-bottom":"0px"}}><span>坐席数量：&nbsp;</span><input type="text" className="seatSize" placeholder="请输入坐席数量"/></p>
                        <div className="seatSize"  style={{"line-height":"20px"}}><i className="prompt_img"></i><span className="prompt_title">请输入坐席数量</span></div>
                        <p className="strong"  style={{"margin-bottom":"0px"}}><span>执行天数：&nbsp;</span><input type="text" className="activeDay" placeholder={"请输入执行天数，最多"+activeDay+"天"}/></p>
                        <div className="activeDay" style={{"line-height":"20px"}} ><i className="prompt_img"></i><span className="prompt_title">请输入执行天数</span></div>
                        <p className="strong"><span>预计收益：&nbsp;</span><a href="javascript:" style={{"color":"#1aa0ff"}}><span id="check" className="progress_speed_show">查看MSO平台收费规则>></span></a></p>
                        <p><span>竞拍手续费：&nbsp;</span><span className="money">0</span>&nbsp;元</p>
                        <p><span>我能开的发票类型：</span><span>(小规模纳税人增票另收3%税费，普票需另收6%税费)</span></p>
                        <p><label><input type="radio" name="invoice_type_2" required value="1"/><span>增税(一般纳税人)</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p><label><input type="radio" name="invoice_type_2" required value="2"/><span>增税(小规模纳税人)</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p><label><input type="radio" name="invoice_type_2" required value="3"/><span>普票</span></label><span>税费:<span className="money">0</span>&nbsp;元</span></p>
                        <p className="strong">预计收益：&nbsp;<span className="money">0</span></p>
                        <div>
                        <button type="button" className="submit">确认提交</button><a href="javascript:"><button type="button" className="drafts">返回上一页</button></a>
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
                                    <td>如果需要使用平台提供的电话线路，将按0.07元/分钟的标准计费</td>
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
  if($("input[name=settlement_method]:checked").val()=="客户效果付费"){
        if(isNull($("input.auctionSize").val())){
            $("div.number span.prompt_title").html("请输入外显号码");
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
        if($("input[name=service_type]:checked").length==0){
          alert("选择精准信息服务");
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
        usemycompanydata:$(".Auction_Apply input[name=service_type]:checked").val(),//0 ：第三方平台 0.4元一条1 ：MSO平台(按使用收费) 2 ：不使用
        settlementmethod:1,//结算方法 1-客户效果付费 2-包坐席值为1 时 usemycompanydata auctionnum explicittel不能为空 为2时 executiondays seatsnum不能为空
        };
  }else{
      if(isNull($("input.seatSize").val())){
        $("div.seatSize").addClass("test_error");
        return false;
      }else{
        $("div.seatSize").removeClass("test_error");
      }
      if(isNull($("input.activeDay").val())){
        $("div.activeDay").addClass("test_error");
        return false;
      }else{
        $("div.activeDay").removeClass("test_error");
      }
      if($("input[name=invoice_type_2]:checked").length==0){
        alert("请选择发票类型");
        return false;
      }
      var json={
        jfuid:sessionStorage.getItem("jfuid"),//用户ID
        servicetype:data.category3,//需求业务类型
        pid:data.pid,//当前需求包id
        demandid:data.demandid,//竞拍的需求id
        orderprice:data.jbfprice,//订单价格(需求价格)请输入坐席数量
        biddingcommission:0,//竞拍手续费
        typeofinvoice:$(".Auction_Apply input[name=invoice_type_2]:checked").val(),//1增票(一般纳税人) 2增票（小规模纳税人一般纳税人 收3%的) 3普票(收6%的)
        settlementmethod:2,//结算方法 1-客户效果付费 2-包坐席;值为1 时 usemycompanydata auctionnum explicittel不能为空 为2时 executiondays seatsnum不能为空
        executiondays:$(".Auction_Apply input.activeDay").val(),//执行天数
        seatsnum:$(".Auction_Apply input.seatSize").val(),//坐席数量
        pricetol:$(".Auction_Apply.active>p:nth-of-type(9) span.money").html() //包坐席预计收益
        };
  }

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
React.render(<Hangy/>,$("#new_demand div.demend_left .form_col6>.main")[0]);
React.render(<Mbkh/>,$("#new_demand div.demend_left .form_col2>.main")[0]);
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
		console.log(data);
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
		  React.render(<Hangy/>,$("#new_demand div.demend_left .form_col6>.main")[0],function(){this.setState({data:data.demand})});
          React.render(<Mbkh/>,$("#new_demand div.demend_left .form_col2>.main")[0],function(){this.setState({data:data.demand})});
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
