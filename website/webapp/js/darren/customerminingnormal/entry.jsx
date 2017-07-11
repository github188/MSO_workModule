
require('./more.css');


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
  },
  render:function(){
      if(isNull(this.state.data)){
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
              <tr className="hide">
                  <td>结算模式:</td>
                  <td>
                      <span className="jsms-title">暂无</span>
                      <i className="bubble-hover">?</i>
                      <div className="bubble jsms-text" style={{"width":"258px"}}>与甲方数据查重后进行录音的质量检验</div>
                  </td>
              </tr>
          </table>
        )
    }
    return(
          <table>
              <tr>
                  <td>业务类型:</td>
                  <td>
                      <span>{isNull(this.state.data.servicetype)?"暂无":this.state.data.servicetype}</span>
                      <i className="bubble-hover">?</i>
                      <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                  </td>
              </tr>
              <tr className="hide">
                  <td>结算模式:</td>
                  <td>
                      <span className="jsms-title">{isNull(this.state.data.paymentstandard)?"暂无":this.state.data.paymentstandard}</span>
                      <i className="bubble-hover">?</i>
                      <div className="bubble jsms-text" style={{"width":"258px"}}>与甲方数据查重后进行录音的质量检验</div>
                  </td>
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
  componentDidUpdate:function(){},
  render:function(){
      if(isNull(this.state.data)){
        return(
          <table>
              <tr>
                  <td>行<span className="zw"></span>业:</td>
                  <td><span>暂无</span></td>
              </tr>
              <tr>
                  <td>行业细分:</td>
                  <td><span>暂无</span></td>
              </tr>
          </table>
        )
      }



    return(
          <table>
              <tr>
                  <td>行<span className="zw"></span>业:</td>
                  <td><span>{isNull(this.state.data.industry)?"暂无":this.state.data.industry}</span></td>
              </tr>
              <tr>
                  <td>行业细分:</td>
                  <td>
					  <span>{isNull(this.state.data.demandname)?"暂无":this.state.data.demandname}</span>
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
      if(isNull(this.state.data)){
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
                  <td><span>{isNull(this.state.data.beginage)?"暂无":(this.state.data.beginage+'-'+this.state.data.endage+'岁')}</span></td>
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
      if(isNull(this.state.data)){
        return(
              <table>
                  <tr>
                      <td>需求名称:</td>
                      <td><span>暂无</span></td>
                  </tr>
                  <tr>
                      <td>需求描述:</td>
                      <td><span>暂无</span></td>
                  </tr>
                  <tr>
                      <td>产品名称:</td>
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
                  <tr>
                      <td>项目负责人:</td>
                      <td><span>无</span></td>
                  </tr>
                  <tr>
                      <td>负责人电话:</td>
                      <td><span>无</span></td>
                  </tr>
              </table>
        )
      }
      return(
            <table>
                <tr>
                    <td>需求名称:</td>
                    <td><span>{isNull(this.state.data.demandname)?"暂无":this.state.data.demandname}</span></td>
                </tr>
                <tr>
                    <td>需求备注:</td>
                    <td><span>{isNull(this.state.data.demanddescription)?"暂无":this.state.data.demanddescription}</span></td>
                </tr>
                <tr>
                    <td style={{"vertical-align":"top","line-height":"30px"}}>产品介绍:</td>
                    <td>
                    {isNull(this.state.data.productaccessories)?"暂无":<p>产品介绍附件:<a href={isNull(this.state.data.productaccessories)?"javascript:":(domainDownShort+this.state.data.productaccessories)} style={{"color":"#1aa0ff"}}>下载>></a></p>}
                    </td>
                </tr>
                <tr>
                    <td>开始日期:</td>
                    <td><span>{isNull(this.state.data.begintime)?"暂无":this.state.data.begintime}</span></td>
                </tr>
                <tr>
                    <td>结束日期:</td>
                    <td><span>{isNull(this.state.data.endtime)?"暂无":this.state.data.endtime}</span></td>
                </tr>
                <tr>
                    <td>项目负责人:</td>
                    <td><span>{isNull(this.state.data.pleader)?"无":this.state.data.pleader}</span></td>
                </tr>
                <tr>
                    <td>负责人电话:</td>
                    <td><span>{isNull(this.state.data.pphone)?"无":this.state.data.pphone}</span></td>
                </tr>
            </table>
      )
    }
});

var Fbfb=React.createClass({
  getInitialState:function(){
    return {
      data:null
    }
  },
  render:function(){
      if(isNull(this.state.data)){
        return false;
      }
      if(isNull(this.state.data.areaCityList)||this.state.data.areaCityList.length==0){
        return false;
      }
    return(
          <div className="area_table">
          {this.state.data.areaCityList.map(function(result,index){
          return (
              <div className="areaList">
                  <div className="input"><label>目标区域：</label>{result.targecity}</div>
                  <div className="input"><label>发布数量：</label><span className="size">{result.releasenum}</span>条</div>
                  <div className="input"><label>单价：</label><span className="size">{result.orderprice}</span>元</div>
                  <span className="green">总价：<span className="size">{result.orderpricetol}</span>元</span>
              </div>
              )
          })
          }
          </div>
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
    if(isNull(this.state.data)){
      return (
          <div className="fj_style">
              <div>
                <p>免费定制标签:</p><p>无</p>
              </div>
              <div>
                <p>选择的标签:</p><p>无</p>
              </div>
              <div>
                <p>自定义标签:</p><p>无</p>
              </div>
          </div>
      )
    }
      return(
        <div className="fj_style">
            <div className="box">
				<h4>免费定制标签</h4>
				<div className="tag-free">
					<FreeTag />
				</div>
            </div>
            <div className="box">
				<h4>选择的标签</h4>
				<div className="tag-free">
					<ChoiceTag />
				</div>
            </div>
            <div className="box">
				<h4>自定义标签</h4>
				<div className="tag-free">
					<CustomizeTag />
				</div>
            </div>
        </div>
      )
    }
});

//免费定制标签
var FreeTag = React.createClass({
    getInitialState:function(){
        return{
            config :[]
        }
    },
    componentDidMount:function(){
        var config = this.state.config;
        $.ajax({
            type:"GET",
            url:domain+"/baseLabel/1",
            dataType:"json",
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            cache:false,
            success:function(result){
              if(result.code=="N"){
                  $(".loading_cover").hide();
                  console.log(result.msg);
                  return false;
              }else if(result.code=="N001"){
				  sessionStorage.clear();
                  window.location.href="/login.html";
              }
              this.setState({
                   config : result.lableList
                });
				//console.log(result);
            }.bind(this),
            error:function(){
                console.log("error")
            }
        });
    },
    render:function(){
        var config = this.state.config;//初始化数组
		if(config==""||config==null){
			return (<p>暂无</p>);
		}
        var drafts = config.map(function(draft,index){
              return (<li key={index}>{draft.labelName}</li>);
            }
        );
        return(
          <ul className="tag1">{drafts}</ul>
        );
    }
});
//选择的标签
var ChoiceTag = React.createClass({
    getInitialState:function(){
        return{
            config :[]
        }
    },
    componentDidMount:function(){
        var config = this.state.config;
        $.ajax({
            type:"GET",
            url: urlGetDetailHfp,
            dataType:"json",
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            cache:false,
            success:function(result){
              if(result.code=="N"){
                  $(".loading_cover").hide();
                  console.log(result.msg);
                  return false;
              }else if(result.code=="N001"){
				  sessionStorage.clear();
                  window.location.href="/login.html";
              }
              this.setState({
                   config : result.detail.selectedlist
                });
				//console.log(result);
            }.bind(this),
            error:function(){
                console.log("error")
            }
        });
    },
    render:function(){
        var config = this.state.config;//初始化数组
		if(config==""||config==null){
			return(<p>暂无</p>);
		}
        var draftbs = config.map(function(draftb,index){
              return (<li key={index}>{draftb.labelName}</li>);
            }
        );
        return(
          <ul className="tag3">{draftbs}</ul>
        );
    }
});
//自定义标签
var CustomizeTag = React.createClass({
    getInitialState:function(){
        return{
            config :[],
			customizeData:'',
			customizeHtml:'',
        }
    },
    componentDidMount:function(){

	  this.getCustomizeData(function (data){
		  this.setState({customizeData:data});
		  this.setState({customizeHtml:this.createCustomize()});
	  }.bind(this));

    },
	createCustomize(){
		if(this.state.customizeData){
			return this.state.customizeData.map(function (name,index){
				return (<li>{name}</li>);
			}.bind(this));
		}
	},
	getCustomizeData(callBack){
		callBack = callBack || function (){};
		 var config = this.state.config;
		$.ajax({
            type:"GET",
            url:urlGetDetailHfp,
            dataType:"json",
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            cache:false,
            success:function(result){
              if(result.code=="N"){
                  $(".loading_cover").hide();
                  //console.log(result.msg);
                  return false;
              }else if(result.code=="N001"){
				  sessionStorage.clear();
                  window.location.href="/login.html";
              }else{
              this.setState({
                   config : result.detail.customlabel
                });
				//console.log(result.detail.customlabel);

				var abc = result.detail.customlabel;
				if(abc==""||abc==null){
					return callBack("");
				}
				var myobj=eval(abc);
				var arr=[];
				for(var i=0;i<myobj.length;i++){
					arr.push(myobj[i].labelName);
					//console.log(myobj[i].labelName);
				}
				if(arr[0]=="改价"){
					var a = arr.shift();
					callBack(arr);
					//console.log(arr);
				}else{
					callBack(arr);
					//console.log(arr);
				}
				//var a = arr.shift();
				//console.log(arr[0]);
				callBack(arr);
				//console.log(arr);
			}
            }.bind(this),
            error:function(){
                console.log("error")
            }
        });
	},

    render:function(){
      if(this.state.customizeHtml==""||this.state.customizeHtml==null){
			return(<p>暂无</p>);
		}
        return(
          <ul className="tag3">
		  {this.state.customizeHtml}
		  </ul>
        );
    }
});




class State extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			data:null,
			calcullationDetailHtml:'',
		};
		
		
	}
	createcalcullationDetailHtml(){
		if(this.props.data){
			var fdstate = this.props.data.fdstate;

			var releasenum=isNull(this.props.data.releasenum)?0:this.props.data.releasenum;
			var applicationnum=isNull(this.props.data.applicationnum)?0:this.props.data.applicationnum;
			var finishnum=isNull(this.props.data.finishnum)?0:this.props.data.finishnum;
		//	debugger;
			var orderpricetol=isNull(this.props.data.demandpricetol)?0:this.props.data.demandpricetol;
			//debugger;
			var finlishScale = finishnum/((releasenum==0)?1:releasenum);
			
			/*天数*/
			var date=new Date();
			var endtime=new Date(this.props.data.endtime);
			var diffday=Math.ceil(endtime.diff(date));
			 
			var packageid = this.props.data.packageid;
			 
			if(parseInt(diffday)<0){
				diffday=0;
			}
			 /*天数*/
			 
			 //demandid 在全局中
			 //审核中
			//debugger;
			if(fdstate==1){
				return(<div>
							<div className="right" style={{"margin-bottom":"20px"}}>
									<div className="title-explain">
										距离项目结束还剩
									</div>
									<div className="context-explain package">
										   <div className="countdown">
												<span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
										   </div>	  
									</div>
							</div>
							 <div className="right" style={{"margin-bottom":"20px","padding":"20px"}}>
							   <p style={{"margin":"15px 0px 27px 0px","color":"#999","text-align":"center"}}>该需求正在审核中，请耐心等待！</p>
							   {isNull(packageid)?<a href={"new_demand_copy_5.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
							   <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
							 </div>
						</div>

						);
			}
			
			/*进行中*/
			if(fdstate==2 || fdstate==4){
				return(<div>
							<div className="right" style={{"margin-bottom":"20px"}}>
									<div className="title-explain">
										距离项目结束还剩
									</div>
									<div className="context-explain package">
										   <div className="countdown">
												<span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
										   </div>	  
									</div>
							</div>
							
							  <div className="right">
               <div className="title-explain">
			   <span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>需求进度</span>
			   <a href="javascript:" className="progress_speed_show" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>
			   查看进度详情>>
			   </a>
			   <a href="javascript:" className="progress_speed_show_new" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>
			   查看进度详情>>
			   </a>
			   </div>
               <div className="context-explain package">
                   <div>
                      <table>
                    
                        <tr>
                          <td><label>完成进度:</label></td>
                        </tr>
                        <tr>
                        <td colSpan="2">
                        <div className="progress"><b>{parseInt(finlishScale*100)}%</b>
                          <div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(finlishScale*100)+"%"}}></div>
                          <div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p></div>
                        </div></td>
                        </tr>
                          <tr>
                            <td><label>预计结算金额:</label></td>
                          </tr>
                          <tr>
                            <td><span className="money"  style={{"float":"left"}}><span>¥</span><span className="size">{orderpricetol*finlishScale}</span></span></td>
                          </tr>
                      </table>
                      {isNull(packageid)?<a href={"new_demand_copy_5.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
                      <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
                       </div>
               </div>
           </div>
		   
		   
				</div>);
			}
			
			
			
			/*结算中*/
			//debugger;
			//orderpricetol
			if(fdstate==5){
				return (<div>
						
							  <div className="right">
               <div className="title-explain">
			   <span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>需求进度</span>
			   <a href="javascript:" className="progress_speed_show" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>
			   查看进度详情>>
			   </a>
			   <a href="javascript:" className="progress_speed_show_new" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>
			   查看进度详情>>
			   </a>
			   </div>
               <div className="context-explain package">
                   <div>
                      <table>
						
                        <tr>
                          <td><label>完成进度:</label></td>
                        </tr>
                        <tr>
                        <td colSpan="2">
                        <div className="progress"><b>{parseInt(finlishScale*100)}%</b>
                          <div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(finlishScale*100)+"%"}}></div>
                          <div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p></div>
                        </div></td>
                        </tr>
                          <tr>
                            <td><label>预计结算金额:</label></td>
                          </tr>
                          <tr>
                            <td><span className="money"  style={{"float":"left"}}><span>¥</span><span className="size">{orderpricetol*finlishScale}</span></span></td>
                          </tr>
                      </table>
                      {isNull(packageid)?<a href={"new_demand_copy_5.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
                      <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
                       </div>
               </div>
           </div>
				</div>)
			}
			
			if(fdstate==6){
				
				return (<div>
						
							  <div className="right">
               <div className="title-explain">
			   <span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>需求进度</span>
			   <a href="javascript:" className="progress_speed_show" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>
			   查看进度详情>>
			   </a>
			   <a href="javascript:" className="progress_speed_show_new" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>
			   查看进度详情>>
			   </a>
			   </div>
               <div className="context-explain package">
                   <div>
                      <table>
						<tr>
							<td style={{'textAlign':'center',"color":"#fd5352"}}>需求已完成！</td>
						</tr>
                        <tr>
                          <td><label>完成进度:</label></td>
                        </tr>
                        <tr>
                        <td colSpan="2">
                        <div className="progress"><b>{parseInt(finlishScale*100)}%</b>
                          <div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(finlishScale*100)+"%"}}></div>
                          <div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p></div>
                        </div></td>
                        </tr>
                          <tr>
                            <td><label>预计结算金额:</label></td>
                          </tr>
                          <tr>
                            <td><span className="money"  style={{"float":"left"}}><span>¥</span><span className="size">{orderpricetol*finlishScale}</span></span></td>
                          </tr>
                      </table>
                      {isNull(packageid)?<a href={"new_demand_copy_5.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
                      <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
                       </div>
               </div>
           </div>
				</div>)
			}
			
			
			/*异常*/
			if(fdstate==3){
			 return (
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
							  <td><span>{isNull(this.props.data.remark)?"暂无":this.props.data.remark}</span></td>
							</tr>
							<tr>
							  <td><label>时间:</label></td>
							  <td><span>{isNull(this.props.data.updatetime)?"暂无":this.props.data.updatetime}</span></td>
							</tr>
						  </table>
						  {isNull(this.props.data.packageid)?<a href={"new_demand_copy_5.html#"+demandid}><button id="copyDemand" type="button" className="submit hide">复制需求</button></a>:""}
						  <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(this.props.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
						  </div>
					 </div>
				 </div>
			 )
		 }
		}
		
	}
	componentDidMount(){
		//debugger;
		this.setState({
			calcullationDetailHtml:this.createcalcullationDetailHtml(),
		});
		
		$(".progress_speed_show").live("click",function(){
			  $(".progress_speed").show();
		});
		
		$(".progress_speed_show_new").live("click",function(){
			 location.href = "customerreportdown.html"+location.hash;
		});
		
		$(".progress_speed .close,.progress_speed .button_close").live("click",function(){
			  $(".progress_speed").hide();
		});
	}
    componentDidUpdate(){
		$(".progress").hover(function(){
			$(this).find(".bublle").show();
		},function(){
			$(this).find(".bublle").hide();
		});
   }
   render(){
	   return (
			<div>
				{this.state.calcullationDetailHtml}
			</div>
	   );
     }
};


var Progress_speed=React.createClass({

    getInitialState:function(){
      return {
        data:null
      }
    },
  render:function(){
    if(isNull(this.state.data)){
      return false
    }
    if(!isNull(this.state.data.demandProgressList)){
      if(this.state.data.demandProgressList.length==0){
        return (
            <div>
                <div className="top"><span>需求进度详情</span><i className="close"></i></div>
                <div className="main">
                </div>
                <div className="bottom"><button type="button" className="button_close">确&nbsp;定</button></div>
            </div>
          )
        }
    }else{
          return (
              <div>
                  <div className="top"><span>需求进度详情</span><i className="close"></i></div>
                  <div className="main">
                  </div>
                  <div className="bottom"><button type="button" className="button_close">确&nbsp;定</button></div>
              </div>
          )
    }
    return (
        <div>
            <div className="top"><span>需求进度详情</span><i className="close"></i></div>
            <div className="main">
            {this.state.data.demandProgressList.map(function(result,index){
              return (
                <div className="demand_list">
                  <p className="demand_title">{result.targecity}</p>
                  <p className="demand_main"><span>单价：{result.orderprice} 元</span><span>发布量：{result.releasenum} </span><span>竞拍量：{result.applicationnum}</span><span>完成量：{result.fishnum}</span><span>预计结算金额：<span className="red">¥&nbsp;<span className="size">{result.orderpriceTol}</span></span></span></p>
                </div>
              )
            })
            }
            </div>
            <div className="bottom"><button type="button" className="button_close">确&nbsp;定</button></div>
        </div>
    )
  }
});

React.render(<Yewu/>,$("#new_demand div.demend_left .form_col1>.main")[0]);
React.render(<Hangy/>,$("#new_demand div.demend_left .form_col6>.main")[0]);
React.render(<Mbkh/>,$("#new_demand div.demend_left .form_col2>.main")[0]);
React.render(<Jbxx/>,$("#new_demand div.demend_left .form_col3>.main")[0]);
React.render(<Fbfb/>,$("#new_demand div.demend_left .form_col4>.main")[0]);
React.render(<Fj/>,$("#new_demand div.demend_left .form_col5>.main")[0]);
React.render(<Progress_speed/>,$(".progress_speed")[0]);

$.ajax({
    type:"GET",
    url:urlGetDetailHfp,
    dataType:"json",
    cache:false,
    success:function(data){
		console.log(data);
        if(data.code=="N001"){
         //console.log(data.msg);
         sessionStorage.clear();
         $(".loading_cover").hide();
         window.location.href="/login.html";
         return false;
        }
        if(data.code=="N"){
          $(".loading_cover").hide();
          return false;
        }
        if(data.code=="Y"){


        $(".loading_cover").hide();
          $(".title_select p").text(data.detail.demandname);
          React.render(<Yewu/>,$("#new_demand div.demend_left .form_col1>.main")[0],function(){this.setState({data:data.detail})});
		  React.render(<Hangy/>,$("#new_demand div.demend_left .form_col6>.main")[0],function(){this.setState({data:data.detail})});
          React.render(<Mbkh/>,$("#new_demand div.demend_left .form_col2>.main")[0],function(){this.setState({data:data.detail})});
          React.render(<Jbxx/>,$("#new_demand div.demend_left .form_col3>.main")[0],function(){this.setState({data:data.detail})});
          React.render(<Fbfb/>,$("#new_demand div.demend_left .form_col4>.main")[0],function(){this.setState({data:data.detail})});
          React.render(<Fj/>,$("#new_demand div.demend_left .form_col5>.main")[0],function(){this.setState({data:data.detail})});
          React.render(<Progress_speed/>,$(".progress_speed")[0],function(){this.setState({data:data.detail})});
          React.render(<State data= { data.detail } />,$("#new_demand div.demend_right")[0],function(){
			 // console.log(data.detail,'===================================================');
			  this.setState({data:data.detail})
		});
      }
    },
    error:function(msg){
        $(".loading_cover").hide();
    }
    });
	
	
	//fdstate(参数详解 );
	
		/*进行中和审核中都是要显示天数样式的*/
		var  data = {
			//1:{name:''},
			1:{name:'审核中'},
			2:{name:'进行中'},
			3:{name:'结算中'},
			4:{name:'已完成'},
		}
	
	
