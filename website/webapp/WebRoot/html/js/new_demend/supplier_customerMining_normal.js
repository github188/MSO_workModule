var flag=true;
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
        if($(".jsms-title").text()=="按提交线索数量结算"){
            $(".jsms-text").text("按提交线索数量结算");
        }
        if(sessionStorage.getItem("pid")!==""){
           $(".hideSub").hide();
        }
    },
    render:function(){
      if(this.state.data==null){
        return(
            <table>
                <tr>
                  <td>业务类型:</td>
                  <td>
                    <span>销售线索挖掘</span>
                    <i className="bubble-hover">?</i>
                    <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                  </td>
                </tr>
				<tr>
                  <td>竞拍数量:</td>
                  <td><span>暂无</span></td>
                </tr>
                <tr className="hideSub">
                  <td>单&emsp;&emsp;价:</td>
                  <td><span>暂无</span></td>
                </tr>
				<tr>
                  <td>包坐席单价:</td>
                  <td><span>暂无</span></td>
                </tr>
                <tr>
                  <td>竞拍手续费:</td>
                  <td><span>暂无</span></td>
                </tr>
                <tr className="hide">
                  <td>结算模式:</td>
                  <td>
                    <span className="jsms-title">暂无</span>
                    <i className="bubble-hover">?</i>
                    <div className="bubble jsms-text" style={{"width":"258px"}}>与甲方数据查重后进行录音的质量检验</div>
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
                      <span>销售线索挖掘</span>
                      <i className="bubble-hover">?</i>
                      <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                    </td>
                  </tr>
				  <tr>
                    <td>竞拍数量:</td>
                    <td><span>{isNull(this.state.data.auctionnum)?"暂无":this.state.data.auctionnum}</span></td>
                  </tr>
				  <tr className="hideSub">
                    <td>单&emsp;&emsp;价:</td>
                    <td><span>{isNull(this.state.data.orderprice)?"暂无":this.state.data.orderprice}</span></td>
                    <td style={{"color":"#FF6666"}}>{isNull(this.state.data.subdescription)?"":"特别注意："+this.state.data.subdescription}</td>
                  </tr>
				<tr>
                  <td>包坐席单价:</td>
                  <td><span>{this.state.data.sittingprice}</span></td>
                </tr>
                  <tr>
                    <td>竞拍手续费:</td>
                    <td><span>{isNull(this.state.data.biddingcommission)||this.state.data.biddingcommission==0||this.state.data.favorableway==1?"免手续费":this.state.data.biddingcommission}</span></td>
                  </tr>
                  <tr className="hide">
                    <td>结算模式:</td>
                    <td>
                      <span className="jsms-title">{isNull(this.state.data.paymentstandard)?"暂无":this.state.data.paymentstandard}</span>
                      <i className="bubble-hover">?</i>
                      <div className="bubble jsms-text" style={{"width":"258px"}}>与甲方数据查重后进行录音的质量检验</div>
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
            </table>
          )
        }
        return(
            <table>
            <tr>
            <td>目标人群:</td>
            <td><span>{isNull(this.state.data.beginage+this.state.data.endage)?"暂无":(this.state.data.beginage+'-'+this.state.data.endage+'岁')}</span></td>
            </tr>
            </table>
        )
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
                    <td>行业:</td>
                    <td><span>暂无</span></td>
                  </tr>
            </table>
          )
        }
        return(
            <table>
            <tr>
                    <td>行业:</td>
                    <td><span>{isNull(this.state.data.industry)?"暂无":this.state.data.industry}</span></td>
                  </tr>
				  <tr>
                    <td>行业细分:</td>
                    <td>
                     
					  <span>{isNull(this.state.data.ordername)?"暂无":this.state.data.ordername}</span>
                  </td>
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
                      <td>目标区域:</td>
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
            );
        }
        return(
            <table>
              <tr>
                <td>目标区域:</td>
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
              <p>销售线索文件:</p><p>{isNull(this.state.data.xsxsurl)?"无":'1 份'}</p><p>{isNull(this.state.data.xsxsurl)?"":<a href={domainDown+this.state.data.xsxsurl}>下载</a>}</p>
              </div>
              <div>
              <p>话术文件:</p><p>{isNull(this.state.data.standardoperation)?"无":'1 份'}</p><p>{isNull(this.state.data.standardoperation)?"":<a href={domainDown+this.state.data.standardoperation}>下载</a>}</p>
              </div>
              <div>
              <p>目标客户名单:</p><p>{isNull(this.state.data.otherreport)?"无":'1 份'}</p><p>{isNull(this.state.data.otherreport)?"":<a href={domainDown+this.state.data.otherreport}>下载</a>}</p>
              </div>
            </div>
        )
    }
});
var State=React.createClass({
    getInitialState:function(){
      return {
        data:null
      }
    },
    componentDidMount:function(){
        $(".upload_info_show").live("click",function(){
            uploadtab();
        });
        $(".progress_speed .upload_submit button[type=submit]").live("click",function(){
          location.reload();
        });
        $(".progress_speed .close,.progress_speed .button_close").live("click",function(){
            //$(".progress_speed").hide();
            location.reload();
        });
        $(".progress_speed .close1,.progress_speed .button_close1").live("click",function(){
            $(".progress_speed").hide();
        });
    },
    componentDidUpdate:function(){
      $(".progress").hover(function(){
          $(this).find(".bublle").show();
      },function(){
          $(this).find(".bublle").hide();
      });
      if(sessionStorage.getItem("pid")!==""){
         $(".hideSub").hide();
      }
    },
    post:function(){
      if(flag){
          flag=false;
          var result=this.state.data;
          var data={
            orderid:result.orderid,
            jfuid:sessionStorage.getItem("jfuid"),
            report:file1,
            recording:file2,
            ordernum:$(".Supplier_Mining input.ordernum").val(),
            demandid:result.demandid
          }
          $.ajax({
               type:"post",
               url:urlUploadSingleReport,
               dataType:"json",
               data:data,
               cache:false,
               success:function(data){
                   if(data.code=="Y"){
                       console.log(data.msg);
                       $(".progress_speed").show();
                       $(".progress_speed .upload_submit").show();
                       $(".progress_speed .upload_info").hide();
                   }else{
                     flag=true;
                     alert(data.msg);
                   }
                 }.bind(this),
               error:function(msg){
                 flag=true;
                 console.log(msg);
               }
        });
      }
    },
    render:function(){
        if(this.state.data==null){
            return false;
        }
        var data=this.state.data;
        var releasenum=isNull(this.state.data.releasenum)?0:this.state.data.releasenum;
        var auctionnum=isNull(this.state.data.auctionnum)?0:this.state.data.auctionnum;
        var fishnum=isNull(this.state.data.fishnum)?0:this.state.data.fishnum;
        var pricetol;
        this.state.data.settlementmethod==1?pricetol=fishnum*this.state.data.orderprice:pricetol=isNull(this.state.data.pricetol)?0:this.state.data.pricetol;
        // var applicationnum=0;
        // var orderpricetol=0;
        // var fishnum=0;
        var date=new Date();
        var endtime=new Date(this.state.data.endtime);

        var diffday=Math.ceil(endtime.diff(date));
        if(parseInt(diffday)<0){
            diffday=0;
        }
        var upload=[];
        if(this.state.data.whetherupload==1){
            upload.push(
            <div className="right">
              <div className="title-explain"><span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>上传成单报告</span><a href="javascript:"className="upload_info_show" id="checkUp" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>查看上传记录>></a></div>
              <div className="context-explain Supplier_Mining">
                <p><span>本次上传单量：&nbsp;</span><input type="text"  className="ordernum" style={{"width":"160px"}}  /></p>
                <p><span>上传成单报告：&nbsp;</span><a href="javascript:" id="selectfiles" style={{"color":"#0099ff","text-decoration":"underline","font-size":"14px"}}>选择文件</a></p>
                <div><div className="ossfile" style={{"width":"180px"}}></div><button type="button" className="btn" id="postfiles">开始上传</button></div>
                <p><span>上传录音文件：&nbsp;</span><a href="javascript:" id="selectfiles2" style={{"color":"#0099ff","text-decoration":"underline","font-size":"14px"}}>选择文件</a></p>
                <div><div className="ossfile2" style={{"width":"180px"}}></div><button type="button" className="btn" id="postfiles2">开始上传</button></div>
                <button type="button" className="submit upload_submit_show"  onClick={this.post.bind(this)}>确定上传</button><a href="supplierDemandList.html"><button type="button" className="drafts">返回上一页</button></a>
              </div>
            </div>
          );
        }
        if(this.state.data.pause==1){
            return (
              <div>
                <div className="right">
                  <div className="title-explain">需求预览</div>
                  <div className="context-explain package">
                      <div>
                         <table>
                           <tr>
                             <td width="80px"><label>需求状态:</label></td>
                             <td><span>暂停</span></td>
                           </tr>
                           <tr>
                             <td style={{"vertical-align":"top"}}><label>原因:</label></td>
                             <td><span>{isNull(this.state.data.pausedescription)?"暂无":this.state.data.pausedescription}</span></td>
                           </tr>
                           <tr>
                             <td><label>时间:</label></td>
                             <td><span>{isNull(this.state.data.updatetime)?"暂无":this.state.data.updatetime}</span></td>
                           </tr>
                         </table>
                         <a href="supplierDemandList.html"><button type="button" className="drafts" style={{"width":"100%"}}>返回上一页</button></a>
                    </div>
                    </div>
                </div>
                </div>
            )
        }
        if(this.state.data.jdstate==1){
            return (
                  <div>
                  <div className="right" style={{"margin-bottom":"20px","height":"280px"}}>
                  <div className="title-explain">距离项目结束还剩</div>
                  <div className="context-explain package">
                  <div className="countdown">
                  <span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
                  </div>
                  </div>
                  </div>
                  <div className="right" style={{"margin-bottom":"20px","padding":"20px"}}>
                    <p style={{"margin":"15px 0px 27px 0px","color":"#999","text-align":"center"}}>该订单正在审核中，请耐心等待！</p>
                    <a href="supplierDemandList.html"><button type="button" className="drafts" style={{"width":"100%"}} >返回上一页</button></a>
                  </div>
                  {upload}
                  </div>
              )
        }else if(this.state.data.jdstate==4||this.state.data.jdstate==2){
          // if(this.state.data.demandpause==1){
          //             return (
          //                 <div>
          //                   <div className="right" style={{"margin-bottom":"20px"}}>
          //                     <div className="title-explain">距离项目结束还剩</div>
          //                       <div className="context-explain package">
          //                         <div className="countdown">
          //                         <span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
          //                         </div>
          //                       </div>
          //                   </div>
          //                   <div className="right" style={{"margin-bottom":"20px"}}>
          //                     <div className="title-explain"><span style={{"font-size":"16px"}}>完成进度</span></div>
          //                       <div className="context-explain package">
          //                         <div>
          //                         <table>
          //                         <tr>
          //                         <td><label>完成进度:</label></td>
          //                         </tr>
          //                         <tr>
          //                         <td colSpan="2"><div className="progress"><b>{parseInt(fishnum/auctionnum*100)}%</b><div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(fishnum/auctionnum*100)+"%"}}></div>
          //                         <div className="bublle"><p>竞拍量：{auctionnum}</p><p>完成量：{fishnum}</p></div></div></td>
          //                         </tr>
          //                         <tr className="hideSub">
          //                         <td><label>预计结算金额:</label></td>
          //                         </tr>
          //                         <tr className="hideSub">
          //                         <td><span className="money" style={{"float":"none","color":"#fd5352"}}><span>¥</span><span className="size">{pricetol}</span></span></td>
          //                         </tr>
          //                         </table>
          //                         </div>
          //                       </div>
          //                     </div>
          //                     <div className="right">
          //                       <div className="title-explain"><span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>上传成单报告</span><a href="javascript:"className="upload_info_show" id="checkUp" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>查看上传记录>></a></div>
          //                       <div className="context-explain" style={{"color":"#666"}}>非常抱歉，由于此订单已被暂停，您暂时无法上传成单报告，您可在上传功能重新开启后再行上传，您也可以<a href="tencent://message/?uin=2850840272&Site=&menu=yes" style={{"color":"#0099ff","text-decoration":"underline"}}>点此联系客服咨询</a>
          //                       <a href="supplierDemandList.html"><button type="button" className="drafts" style={{"width":"100%","margin-top":"20px"}}>返回上一页</button></a>
          //                       </div>
          //                     </div>
          //                 </div>
          //                 )
          //         }
            return (
                <div>
                  <div className="right" style={{"margin-bottom":"20px"}}>
                    <div className="title-explain">距离项目结束还剩</div>
                      <div className="context-explain package">
                        <div className="countdown">
                        <span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
                        </div>
                      </div>
                  </div>
                  <div className="right" style={{"margin-bottom":"20px"}}>
                  <div className="title-explain"><span style={{"font-size":"16px"}}>完成进度</span></div>
                    <div className="context-explain package">
                      <div>
                      <table>
                      <tr>
                      <td><label>完成进度:</label></td>
                      </tr>
                      <tr>

                      <td colSpan="2">
                      <div className="progress"><b>{parseInt(fishnum/auctionnum*100)}%</b>
                        <div className="progress-bar brown" style={{"max-width":"100%","width":(auctionnum!=0?parseInt(fishnum/auctionnum*100):0)+"%"}}></div>
                        <div className="bublle"><p>竞拍量：{auctionnum}</p><p>完成量：{fishnum}</p></div>
                      </div>
                      </td>
                      </tr>
                      <tr className="hideSub">
                      <td><label>预计结算金额:</label></td>
                      </tr>
                      <tr className="hideSub">
                      <td><span className="money" style={{"float":"none","color":"#fd5352"}}><span>¥</span><span className="size">{pricetol}</span></span></td>
                      </tr>
                      </table>
                      </div>
                    </div>
                  </div>
                  {upload}
                </div>
              )
        }else if(this.state.data.jdstate==3){
            return (
              <div>
                <div className="right">
                <div className="title-explain">需求预览</div>
                <div className="context-explain package">
                <div>
                <table>
                <tr>
                <td width="80px"><label>需求状态:</label></td>
                <td><span>驳回</span></td>
                </tr>
                <tr>
                <td style={{"vertical-align":"top"}}><label>原因:</label></td>
                <td><span>{isNull(this.state.data.dremark)?"暂无":this.state.data.dremark}</span></td>
                </tr>
                <tr>
                <td><label>时间:</label></td>
                <td><span>{isNull(this.state.data.updatetime)?"暂无":this.state.data.updatetime}</span></td>
                </tr>
                </table>
                <a href="/html/supplierDemandHall.html"><button type="button" className="submit">需求大厅</button></a><a href="supplierDemandList.html"><button type="button" className="drafts">返回上一页</button></a>
                </div>
                </div>
                </div>
                {upload}
                </div>
        )
      }else if(this.state.data.jdstate==5){
            return (
              <div>
              <div className="right" style={{"margin-bottom":"20px","height":"280px"}}>
              <div className="title-explain">距离项目结束还剩</div>
              <div className="context-explain package">
              <div className="countdown">
              <span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
              </div>
              </div>
              </div>
              <div className="right" style={{"margin-bottom":"20px"}}>
              <div className="title-explain"><span style={{"font-size":"16px"}}>订单进度</span></div>
                <div className="context-explain package">
                  <div>
                  <table>
                  <tr>
                  <td style={{"color":"#fd5352"}}>此订单正在结算中，请耐心等待！</td>
                  </tr>
                  <tr>
                  <td><label>完成进度:</label></td>
                  </tr>
                  <tr>
                  <td colSpan="2"><div className="progress"><b>{auctionnum!=0?parseInt(fishnum/auctionnum*100):0}%</b><div className="progress-bar brown" style={{"max-width":"100%","width":(auctionnum!=0?parseInt(fishnum/auctionnum*100):0)+"%"}}></div>
                  <div className="bublle"><p>竞拍量：{auctionnum}</p><p>完成量：{fishnum}</p></div></div></td>
                  </tr>
                  <tr>
                  <td><label style={{"width":"auto"}}>成单报告:</label>&emsp;<a href="javascript:"className="upload_info_show" id="checkUp" style={{"color":"#1aa0ff"}}>查看上传记录>></a></td>
                  </tr>
                  <tr className="hideSub">
                  <td><label>预计结算金额&nbsp;:</label></td>
                  </tr>
                  <tr className="hideSub">
                  <td><span className="money" style={{"float":"none","color":"#fd5352"}}><span>¥</span><span className="size">{pricetol}</span></span></td>
                  </tr>
                  </table>
                  <a href="supplierDemandList.html"><button type="button" className="drafts" style={{"width":"100%"}}>返回上一页</button></a>
                </div>
              </div>
            </div>
            {upload}
            </div>
        )
      }else if(this.state.data.jdstate=6){
                return (
                  <div>
                  <div className="right" style={{"margin-bottom":"20px"}}>
                  <div className="title-explain"><span style={{"font-size":"16px"}}>订单进度</span></div>
                    <div className="context-explain package">
                      <div>
                      <table>
                      <tr>
                      <td style={{"color":"#fd5352"}}>订单已完成！</td>
                      </tr>
                      <tr>
                      <td><label>完成进度:</label></td>
                      </tr>
                      <tr>
                      <td colSpan="2"><div className="progress"><b>{auctionnum!=0?parseInt(fishnum/auctionnum*100):0}%</b><div className="progress-bar brown" style={{"max-width":"100%","width":(auctionnum!=0?parseInt(fishnum/auctionnum*100):0)+"%"}}></div>
                      <div className="bublle"><p>竞拍量：{auctionnum}</p><p>完成量：{fishnum}</p></div></div></td>
                      </tr>
                      <tr>
                      <td><label style={{"width":"auto"}}>成单报告:</label>&emsp;<a href="javascript:"className="upload_info_show" id="checkUp" style={{"color":"#1aa0ff"}}>查看上传记录>></a></td>
                      </tr>
                      <tr className="hideSub">
                      <td><label>结算金额:</label></td>
                      </tr>
                      <tr className="hideSub">
                      <td><span className="money" style={{"float":"none","color":"#fd5352"}}><span>¥</span><span className="size">{this.state.data.paymentmoney}</span></span></td>
                      </tr>
                      </table>
                      <a href="supplierDemandList.html"><button type="button" className="drafts" style={{"width":"100%"}}>返回上一页</button></a>
                    </div>
                  </div>
                </div>
                {upload}
                </div>
            )
        }else{
            return false;
        }
    }
});

function uploadtab() {
  var data={}
  $.ajax({
    type:"get",
    url:urlUploadSchedule,
    async:true,
    contentType:"application/x-www-form-urlencoded;charset=utf-8",
    dataType: "json",
    data:data,
    success:function(data){
       if(data.code=="Y"){
           React.render(<Progress_speed/>,$(".progress_speed")[0],function(){
             this.setState({
               res : data.uploadProressList
             });
           });
           $(".dba0").text("正确");
           $(".dba1").text("错误");
           $(".dbanull").text("未审查");
           $(".qa0").text("正确");
           $(".qa1").text("错误");
           $(".qanull").text("未审查");
           $(".progress_speed").show();
           $(".progress_speed .upload_submit").hide();
           $(".progress_speed .upload_info").show();
        }else{
          return false;
        }
    },
    error:function(){

    },
  });
}

var Progress_speed=React.createClass({
    getInitialState:function(){
      return {
        data:null,
        res:null
      }
    },
    componentDidMount:function(){
      $("#seach").live("click",function(){
        var urlUploadSchedule = urlUploadSchedule + "?sbeginDateValue=" + $(".start_date").val() + "&sendDateValue=" + $(".end_date").val();
        uploadtab();
      });
    },
    componentDidUpdate:function(){
       $(".start_date").datetimepicker({
   		    language:  'zh-CN',
           weekStart: 1,
           todayBtn:  1,
           autoclose: 1,
           todayHighlight: 1,
           startView: 2,
           minView: 2,
           forceParse: 0,
           format: 'yyyy-mm-dd',
   		}).on("click",function(ev){
   		    $(".start_date").datetimepicker("setEndDate", $(".end_date").val());
   		});
   		$(".end_date").datetimepicker({
   		      language:  'zh-CN',
               weekStart: 1,
               todayBtn:  1,
               autoclose: 1,
               todayHighlight: 1,
               startView: 2,
               minView: 2,
               forceParse: 0,
               format: 'yyyy-mm-dd',
   		}).on("click", function (ev) {
   		    $(".end_date").datetimepicker("setStartDate", $(".start_date").val());
   		});
    },
    render:function(){
          if(this.state.data==null){
            return false;
            }
            if(this.state.res==null){
                return(
                  <div style={{"width":"auto"}}>
                    <div className="upload_submit"  style={{"width":"700px"}}>
                        <div className="top"><span>提示</span><i className="close"></i></div>
                        <div className="main" style={{"min-height":"230px","text-align":"center","line-height":"230px","font-size":"18px"}}>
                        <p>上传成功！</p>
                        </div>
                        <div className="bottom"><button type="submit" className="button_close btn_tj">确&nbsp;定</button></div>
                    </div>
                    <div style={{"width":"900px"}} className="upload_info">
                        <div className="top"><span>成单报告上传记录</span><i className="close1"></i></div>
                        <div className="main" >
                            <div className="new_demand">
                                <div className="time_search">
                                  <span>上传时间：</span>
                                  <input type="text" className="form_date start_date" date-format="yyyy-mm-dd" defaultReadOnly id="start_date" /><i className="date_icon"></i>
                                  <span>&nbsp;-&nbsp;</span>
                                  <input type="text" className="form_date end_date" date-format="yyyy-mm-dd" defaultReadOnly id="end_date" /><i className="date_icon"></i>
                                  <button type="button" id="seach" value="" >确定</button>
                                </div>
                                <div className="tab-scroll">
                                <table className="tab" style={{"width":"100%"}}>
                                <thead>
                                    <tr>
                                        <th>上传时间</th>
                                        <th>上传量</th>
                                        <th>成功量</th>
                                        <th>失败量</th>
                                        <th>重复数据明细</th>
                                        <th>质检反馈报告</th>
                                        <th>dba审查</th>
                                        <th>qa审查</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                        <div className="bottom"><button type="button" className="button_close1">确&nbsp;定</button></div>
                    </div>
                  </div>
                );
            }
            var res = this.state.res;//初始化数组
            var uploadTabs = res.map(function(uploadTab,index){
                  return (
                    <tr>
                        <td>{uploadTab.createtime}</td>
                        <td>{uploadTab.order_num}</td>
                        <td>{uploadTab.cgl}</td>
                        <td>{uploadTab.sbl}</td>
                        <td>{isNull(uploadTab.dba_url)?"":<a href={domainDown+uploadTab.dba_url}>下载</a>}</td>
                        <td>{isNull(uploadTab.qa_url)?"":<a href={domainDown+uploadTab.qa_url}>下载</a>}</td>
                        <td className={"dba"+uploadTab.dba_check}>未审查</td>
                        <td className={"qa"+uploadTab.qa_check}>未审查</td>
                    </tr>
                  )
                });
            return(
              <div style={{"width":"auto"}}>
                <div className="upload_submit"  style={{"width":"700px"}}>
                    <div className="top"><span>提示</span><i className="close"></i></div>
                    <div className="main" style={{"min-height":"230px","text-align":"center","line-height":"230px","font-size":"18px"}}>
                    <p>上传成功！</p>
                    </div>
                    <div className="bottom"><button type="submit" className="button_close btn_tj">确&nbsp;定</button></div>
                </div>
                <div style={{"width":"900px"}} className="upload_info">
                    <div className="top"><span>成单报告上传记录</span><i className="close1"></i></div>
                    <div className="main" >
                        <div className="new_demand">
                            <div className="time_search">
                              <span>上传时间：</span>
                              <input type="text" className="form_date start_date" date-format="yyyy-mm-dd" defaultReadOnly id="start_date" /><i className="date_icon"></i>
                              <span>&nbsp;-&nbsp;</span>
                              <input type="text" className="form_date end_date" date-format="yyyy-mm-dd" defaultReadOnly id="end_date" /><i className="date_icon"></i>
                              <button type="button" id="seach" value="" >确定</button>
                            </div>
                            <div className="tab-scroll">
                            <table className="tab" style={{"width":"100%"}}>
                            <thead>
                                <tr>
                                    <th>上传时间</th>
                                    <th>上传量</th>
                                    <th>成功量</th>
                                    <th>失败量</th>
                                    <th>重复数据明细</th>
                                    <th>质检反馈报告</th>
                                    <th>dba审查</th>
                                    <th>qa审查</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {uploadTabs}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <div className="bottom"><button type="button" className="button_close1">确&nbsp;定</button></div>
                </div>
              </div>
            );
      }
});
function post(result){
  var data={
    orderid:result.orderid,
    jfuid:sessionStorage.getItem("jfuid"),
    report:file1,
    recording:file2,
    ordernum:$(".Supplier_Mining input.ordernum").val(),
    demandid:result.demandid
  }
  $.ajax({
       type:"post",
       url:urlUploadSingleReport,
       dataType:"json",
       data:data,
       cache:false,
       success:function(data){
           if(data.code=="Y"){
               console.log(data.msg);
               $(".progress_speed").show();
               $(".progress_speed .upload_info").hide();
               $(".progress_speed .upload_submit").show();
           }else{
             alert(data.msg);
           }
         },
       error:function(msg){
         console.log(msg);
       }
});
}
React.render(<Yewu/>,$("#new_demand div.demend_left .form_col1>.main")[0]);
React.render(<Hangy/>,$("#new_demand div.demend_left .form_col6>.main")[0]);
React.render(<Jbxx/>,$("#new_demand div.demend_left .form_col3>.main")[0]);
React.render(<Fj/>,$("#new_demand div.demend_left .form_col5>.main")[0]);
React.render(<Progress_speed/>,$(".progress_speed")[0]);
React.render(<State/>,$("#new_demand div.demend_right")[0],function(){$(".loading_cover").hide();});



$.ajax({
     type:"GET",
     url:urlOrderDetail,
     dataType:"json",
     cache:false,
     success:function(data){
         if(data.code=="N001"){
		         sessionStorage.clear();
             console.log(data.msg);
             window.location.href="/login.html";
         }
         if(data.code=="N"){
             console.log(data.msg);
         }
         if(data.code=="Y"){
           $(".title_select p").html(data.orderDetail.ordername);
           React.render(<Yewu/>,$("#new_demand div.demend_left .form_col1>.main")[0],function(){this.setState({data:data.orderDetail})});
		   React.render(<Hangy/>,$("#new_demand div.demend_left .form_col6>.main")[0],function(){this.setState({data:data.orderDetail})});
           React.render(<Mbkh/>,$("#new_demand div.demend_left .form_col2>.main")[0],function(){this.setState({data:data.orderDetail})});
           React.render(<Jbxx/>,$("#new_demand div.demend_left .form_col3>.main")[0],function(){this.setState({data:data.orderDetail})});
           React.render(<Fj/>,$("#new_demand div.demend_left .form_col5>.main")[0],function(){this.setState({data:data.orderDetail})});
           React.render(<Progress_speed/>,$(".progress_speed")[0],function(){this.setState({data:data.orderDetail})});
           React.render(<State/>,$("#new_demand div.demend_right")[0],function(){this.setState({data:data.orderDetail})});
           var uploader = new plupload.Uploader({
               runtimes : 'html5,flash,silverlight,html4',
               browse_button : 'selectfiles',
               //multi_selection: false,
               container: $('.container')[0],
               flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
               silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
               url : 'http://oss.aliyuncs.com',

               filters: {
                   mime_types : [ //只允许上传图片和zip,rar文件
                       {extensions : "txt,doc,docx,xls,xlsx,zip,rar,7z"}
                   ],
                   max_file_size : '100mb', //最大只能上传10mb的文件
                   prevent_duplicates : true //不允许选取重复文件
               },

               init: {
                   PostInit: function() {
                       $('.ossfile')[0].innerHTML = '';
                       document.getElementById('postfiles').onclick = function() {
                           set_upload_param(uploader, '', false,1);
                           return false;
                       };
                   },
                   FilesAdded: function(up, files) {
                       plupload.each(files, function(file) {
                           if(up.files.length>1){
                               up.removeFile(up.files[0]);
                           }
                           $('.ossfile').css({"text-align":"left"});
                           $('#postfiles').html("开始上传");
                           $('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,4)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                               +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                               +'</div>';
                           $(".ossfile .file_close").click(function(){
                               up.removeFile(up.files[0]);
                               $('.ossfile')[0].innerHTML = '';
                               $('.ossfile').css({"text-align":"left"});
                               $('#selectfiles').html("重新上传");
                               $('#postfiles').html("开始上传");
                           });
                       });
                   },
                   BeforeUpload: function(up, file) {
                       check_object_radio();
                       set_upload_param(up, file.name, true,1);
                   },
                   UploadProgress: function(up, file) {
                       var d = document.getElementById(file.id);
                       var prog = d.getElementsByTagName('div')[0];
                       var progBar = prog.getElementsByTagName('div')[0]
                       $('.ossfile').css({"text-align":"center"});
                       $('#postfiles').html("正在上传...");
                       progBar.style.width= file.percent+'%';
                       $(d).find("span.bfb").html("..."+file.percent + "%");
                       progBar.setAttribute('aria-valuenow', file.percent);
                   },

                   FileUploaded: function(up, file, info) {
                       if (info.status == 200)
                       {
                           //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                           file1=f1;
                           $('#selectfiles').html("重新上传");
                           $('#postfiles').html("上传成功");
                           $('.ossfile .progress-bar').css("width","0%");
                           $('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
                           $('.ossfile').find("span.bfb").html("");
                       }
                       else
                       {
                           document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                       }
                   },

                   Error: function(up, err) {
                       if (err.code == -600) {
                           alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                           //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                       }
                       else if (err.code == -601) {
                           alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                           //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                       }
                       else if (err.code == -602) {
                           alert("\n这个文件已经上传过一遍了");
                           //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                       }
                       else
                       {
                           //alert("\nError xml:" + err.response);
                           alert("拒绝访问。请重新上传!");
                           $(".ossfile .file_close").click();
                           //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                       }
                   }
               }
           });
           uploader.init();
           //绑定文件添加进队列事件
           uploader.bind('FilesAdded',function(uploader,files){
                     for(var i = 0, len = files.length; i<len; i++){
                         var file_name=files[i].name;
                         //构造html来更新UI
                         !function(i){
                             previewImage(files[i],function(imgsrc){
                                 $('.file-list img').attr('src',imgsrc);
                             })
                         }(i);
                     }
                 });
                         var uploader2 = new plupload.Uploader({
                             runtimes : 'html5,flash,silverlight,html4',
                             browse_button : 'selectfiles2',
                             //multi_selection: false,
                             container: $('.container2')[0],
                             flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
                             silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
                             url : 'http://oss.aliyuncs.com',
                             filters: {
                                 mime_types : [ //只允许上传图片和zip,rar文件
                                     {extensions : "zip,rar,mp3,mp4,mp5,rvmb,7z" }
                                 ],
                                 max_file_size : '1000mb', //最大只能上传10mb的文件
                                 prevent_duplicates : true //不允许选取重复文件
                             },
                             init: {
                                 PostInit: function() {
                                     $('.ossfile2')[0].innerHTML = '';
                                     document.getElementById('postfiles2').onclick = function() {
                                         set_upload_param(uploader2, '', false,2);
                                         return false;
                                     };
                                 },
                                 FilesAdded: function(up, files) {
                                     plupload.each(files, function(file) {
                                         if(up.files.length>1){
                                             up.removeFile(up.files[0]);
                                         }
                                         $('.ossfile2').css({"text-align":"left"});
                                         $('#postfiles2').html("开始上传");
                                         $('.ossfile2')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                                             +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                                             +'</div>';
                                         $(".ossfile2 .file_close").click(function(){
                                             up.removeFile(up.files[0]);
                                             $('.ossfile2')[0].innerHTML = '';
                                             $('.ossfile2').css({"text-align":"left"});
                                         });
                                     });
                                 },

                                 BeforeUpload: function(up, file) {
                                     check_object_radio();
                                     set_upload_param(up, file.name, true,2);
                                 },

                                 UploadProgress: function(up, file) {
                                     var d = document.getElementById(file.id);
                                     var prog = d.getElementsByTagName('div')[0];
                                     var progBar = prog.getElementsByTagName('div')[0]
                                     $('.ossfile2').css({"text-align":"center"});
                                     $('#postfiles2').html("正在上传...");
                                     progBar.style.width= file.percent+'%';
                                     $(d).find("span.bfb").html("..."+file.percent + "%");
                                     progBar.setAttribute('aria-valuenow', file.percent);
                                 },

                                 FileUploaded: function(up, file, info) {
                                     if (info.status == 200)
                                     {
                                         //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                                         file2=f2;
                                         $('#selectfiles2').html("重新上传");
                                         $('#postfiles2').html("上传成功");
                                         $('.ossfile2 .progress-bar').css("width","0%");
                                         $('.ossfile2 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                                         $('.ossfile2').find("span.bfb").html("");
                                     }
                                     else
                                     {
                                         document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                                     }
                                 },


                                 Error: function(up, err) {
                                     if (err.code == -600) {
                                         alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                                         //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                                     }
                                     else if (err.code == -601) {
                                         alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                                         //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                                     }
                                     else if (err.code == -602) {
                                         alert("\n这个文件已经上传过一遍了");
                                         //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                                     }
                                     else
                                     {
                                         alert("\nError xml:" + err.response);
                                         //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                                     }
                                 }
                             }
                         });
           uploader2.init();
                 //绑定文件添加进队列事件
           uploader2.bind('FilesAdded',function(uploader,files){
                     for(var i = 0, len = files.length; i<len; i++){
                         var file_name = files[i].name; //文件名
                         //构造html来更新UI
                         !function(i){
                             previewImage(files[i],function(imgsrc){
                                 $('.file-list2 img').attr('src',imgsrc);
                             })
                         }(i);
                     }
                 });

         }
     },
     error:function(msg){
         console.log(msg);
     }
 });
