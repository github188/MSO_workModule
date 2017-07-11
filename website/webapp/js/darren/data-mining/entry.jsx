
require('./more.css');
var fileArr = [];
var getRecord = [];
var jsonRecord ;
/*装所有的上传的文件*/
function isJson(obj){  
    var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;   
    return isjson;  
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}



function uploadtab(){
   React.render(<Progress_speed />,$(".progress_speed")[0],function(){
	   this.setState({
              res:getRecord
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
   });
}

var Progress_speed=React.createClass({
    getInitialState:function(){
      return {
        data:null,
        res:'',
      }
    },
    componentDidMount:function(){
		this.rooEl = $('.progress_speed');
      $("#seach").live("click",function(){
        var urlUploadSchedule = urlUploadSchedule + "?sbeginDateValue=" + $(".start_date").val() + "&sendDateValue=" + $(".end_date").val();
			uploadtab();
      });
	  
	  
	  /*关闭下载视图*/
	  
	  $('.close1').click(function (){
		  $('.progress_speed').hide();
	  });
	  
	  $('.button_close1').click(function (){
		  $('.progress_speed').hide();
	  });
	  
	  
	  /*更新上传记录*/
	  this.updataDoloadRecord();
	 
    },
	updataDoloadRecord:function (){
		//debugger;
		this.rooEl.on('click','.downLoad',function (ev){
			var target = ev.currentTarget;
			var index = $(target).attr('data-index')*1;
			var url = domain + "/hfp/"+pid;
			/*开始跟新上传记录*/
			try {
				jsonRecord  = JSON.parse(getRecord);
				jsonRecord[index].ifdownload = 1;
			}catch(err){
				jsonRecord = [];
			}
			
			//debugger;
			$.when($.ajax({
				processData : false,
				dataType : 'json',
				type:"PUT",
				url:url,
				data:JSON.stringify(jsonRecord),
				contentType: "application/json;charset=UTF-8",
				dataType:"json",
				cache:false})
			).then(function (data){
				//debugger;
			}).fail(function (data){
				//debugger;
			});
				
			
		}.bind(this));
		
	},
    componentDidUpdate:function(){
		/*
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
		*/
    },
    render:function(){
            if(this.state.res == "null" || this.state.res == null || this.state.res==""){
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
	
			if(this.state.res){
				//debugger;
				var res = this.state.res;//初始化数组
				res = JSON.parse(res);
		
			
				var uploadTabs = res.map(function(uploadTab,index){
				  if(!uploadTab || !uploadTab.filename){
					  return;
				  }
				  return (
					<tr>
						<td>{uploadTab.filename}</td>
						<td>{uploadTab.uploadtime}</td>
						<td>{<a data-index={index} className="downLoad" href={domainDown+uploadTab.url}>下载</a>}</td>
					</tr>
				  )
				});
			}
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
                    <div className="top"><span>上传记录</span><i className="close1"></i></div>
                    <div className="main" >
                        <div className="new_demand">
                            <div className="time_search">
							
                            </div>
                            <div className="tab-scroll">
                            <table className="tab" style={{"width":"100%"}}>
                          
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
        if(isNull(this.state.data)){
            return(
                <table>
                <tr>
                <td>业务类型:</td>
            <td>
            <span>无</span>
            <i className="bubble-hover">?</i>
            <div className="bubble">针对企业自有数据和需求，进行有效触达</div>
            </td>
            </tr>
            <tr>
            <td>清洗渠道:</td>
            <td><span>无</span></td>
            </tr>
            <tr>
            <td>数据条目:</td>
            <td><span>无</span></td>
            </tr>
            <tr>
            <td>拨打次数:</td>
            <td><span>无人接听数据最多拨打 3 次</span></td>
            </tr>
            <tr>
            <td>单价:</td>
            <td><span>无</span></td>
            </tr>
            <tr className="hide">
            <td>结算模式</td>
            <td>
            <span className="jsms-title">无</span>
                <i className="bubble-hover">?</i>
            <div className="bubble jsms-text" style={{"width":"273px"}}>按实际提交数据条目数乘以单价进行结算</div>
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
        <span>{isNull(this.state.data.servicetype)?"无":this.state.data.servicetype}</span>
        <i className="bubble-hover">?</i>
        <div className="bubble">针对企业自有数据和需求，进行有效触达</div>
        </td>
        </tr>
        <tr>
        <td>清洗渠道:</td>
        <td><span>{isNull(this.state.data.cleaningchannel)?"无":this.state.data.cleaningchannel}</span></td>
        </tr>
        <tr>
        <td>数据条目:</td>
        <td><span>{isNull(this.state.data.releasenum)?"无":this.state.data.releasenum+" 条"}</span></td>
        </tr>
        <tr>
        <td>拨打次数:</td>
        <td><span>无人接听数据最多拨打 3 次</span></td>
        </tr>
        <tr>
        <td>单价:</td>
        <td><span>{isNull(this.state.data.pprice)?"无":this.state.data.pprice+" 元"}</span></td>
        </tr>
        <tr className="hide">
        <td>结算模式</td>
        <td>
        <span className="jsms-title">{isNull(this.state.data.paymentstandard)?"无":this.state.data.paymentstandard}</span>
        <i className="bubble-hover">?</i>
        <div className="bubble jsms-text" style={{"width":"273px"}}>按实际提交数据条目数乘以单价进行结算</div>
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
        if(isNull(this.state.data)){
            return(
                <table>
                <tr>
                <td>需求名称:</td>
            <td><span>无</span></td>
            </tr>
            <tr>
            <td>需求描述:</td>
            <td><span>无</span></td>
            </tr>
            <tr>
            <td>开始日期:</td>
            <td><span>无</span></td>
            </tr>
            <tr>
            <td>结束日期:</td>
            <td><span>无</span></td>
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
        <td><span>{isNull(this.state.data.demandname)?"无":this.state.data.demandname}</span></td>
        </tr>
        <tr>
        <td>需求描述:</td>
        <td><span>{isNull(this.state.data.demanddescription)?"无":this.state.data.demanddescription}</span></td>
        </tr>
        <tr>
        <td>开始日期:</td>
        <td><span>{isNull(this.state.data.begintime)?"无":this.state.data.begintime}</span></td>
        </tr>
        <tr>
        <td>结束日期:</td>
        <td><span>{isNull(this.state.data.endtime)?"无":this.state.data.endtime}</span></td>
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
var Fj=React.createClass({
    getInitialState:function(){
        return {
            data:null
        }
    },
    render:function(){
        if(isNull(this.state.data)){
            return(
                <table style={{"width":"780px","margin":"0 auto"}}>
        <tr>
            <td width="33.333%" style={{"text-align":"left","padding":"20px 0px"}}>销售线索文件:</td>
            <td width="33.333%" style={{"text-align":"center","padding":"20px 0px"}}>无</td>
            </tr>
            <tr>
				<td style={{"text-align":"left","padding":"20px 0px"}}>话术文件:</td>
				<td style={{"text-align":"center","padding":"20px 0px"}}>无</td>
            </tr>
            <tr style={{"display":"none"}}>
				<td style={{"text-align":"left","padding":"20px 0px"}}>目标客户名单:</td>
				<td style={{"text-align":"center","padding":"20px 0px"}}>无</td>
            </tr>
            </table>
        )
        }
        return(
            <table style={{"width":"780px","margin":"0 auto"}}>
        <tr>
        <td width="33.333%" style={{"text-align":"left","padding":"20px 0px"}}>销售线索文件:</td>
        <td width="33.333%" style={{"text-align":"center","padding":"20px 0px"}}>{isNull(this.state.data.xsxsurl)?"无":'1 份'}</td>
        <td width="33.333%" style={{"text-align":"right","padding":"20px 0px"}}>{isNull(this.state.data.xsxsurl)?"":<a href={domainDownShort+this.state.data.xsxsurl}>下载</a>}</td>
        </tr>
        <tr>
        <td style={{"text-align":"left","padding":"20px 0px"}}>话术文件:</td>
        <td style={{"text-align":"center","padding":"20px 0px"}}>{isNull(this.state.data.standardoperation)?"无":'1 份'}</td>
        <td style={{"text-align":"right","padding":"20px 0px"}}>{isNull(this.state.data.standardoperation)?"":<a href={domainDownShort+this.state.data.standardoperation}>下载</a>}</td>
        </tr>
        <tr  style={{"display":"none"}}>
			<td style={{"text-align":"left","padding":"20px 0px"}}>目标客户名单:</td>
			<td style={{"text-align":"center","padding":"20px 0px"}}>{isNull(this.state.data.standardoperation)?"无":'1 份'}</td>
			<td style={{"text-align":"right","padding":"20px 0px"}}>{isNull(this.state.data.otherreport)?"":<a href={domainDownShort+this.state.data.otherreport}>下载</a>}</td>
        </tr>
        </table>
        )
    }
});




var countIndex = 0;


class State extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			calcullationDetailHtml:'',
		};
		
		
	}
	createcalcullationDetailHtml(){
		if(this.props.data){
			var fdstate = this.props.data.fdstate;

			var releasenum=isNull(this.props.data.releasenum)?0:this.props.data.releasenum;
			var applicationnum=isNull(this.props.data.applicationnum)?0:this.props.data.applicationnum;
			var finishnum=isNull(this.props.data.finishnum)?0:this.props.data.finishnum;
			//debugger;
			var orderpricetol=isNull(this.props.data.demandpricetol)?0:this.props.data.demandpricetol;
			//debugger;
			var finlishScale = finishnum/((releasenum==0)?1:releasenum);
			//debugger;
			
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
		   
		   
		   <div className="right">
                <div className="title-explain">
					<span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>上传目标客户名单</span><a href="javascript:"className="upload_info_show" id="checkUp" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>上传记录>></a></div>
					<div className="context-explain Supplier_Mining">
						<p><span>目标客户名单：&nbsp;</span><a href="javascript:" id="selectfiles" style={{"color":"#0099ff","text-decoration":"underline","font-size":"14px"}}>选择文件</a></p>
						<div><div className="ossfile" style={{"width":"180px"}}></div><button type="button" className="btn" id="postfiles">开始上传</button></div>
						<button type="button" className="submit upload_submit_show"  >确定上传</button><a href="customerDemandList.html"><button type="button" className="drafts">返回上一页</button></a>
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
		
		this.setState({
			calcullationDetailHtml:this.createcalcullationDetailHtml(),
		});
		this.rooEl = this.rooEl = $('.demend_right');
        $(".progress_speed_show").live("click",function(){
            $(".progress_speed").show();
        });
        $(".progress_speed .close,.progress_speed .button_close").live("click",function(){
            $(".progress_speed").hide();
        });
		this.uploadSubmit();
		this.showdetails();
    }
    componentDidUpdate(){
        $(".progress").hover(function(){
            $(this).find(".bublle").show();
        },function(){
            $(this).find(".bublle").hide();
        });
		
		/*upload_info_show ** */
    }
	showdetails(){
		this.rooEl.on('click','.upload_info_show',function (){
			uploadtab();
		});
	}
	uploadSubmit(){
		
		/*已经再全局变量里面pid*/
		var url = domain + "/hfp/"+pid;
		//
		this.rooEl.on('click','.upload_submit_show',function (ev){
			
			var  _this = ev.currentTarget;
			if(!file1){
				alert('请选择文件!');
				return;
			}

			var namefile = file1.split('/');
			var le = namefile.length;
			filename = namefile[le-1];
			
			var data = {
				"keyid": "",
				"ifdownload": "0",
				"uploadtime":new Date().Format("yyyy-MM-dd hh:mm:ss"),
				"filename":filename,
				"url":file1
			  }
			$.when($.ajax({
				processData : false,
				dataType : 'json',
				type:"PUT",
				url:url,
				data:JSON.stringify(data),
				contentType: "application/json;charset=UTF-8",
				dataType:"json",
				cache:false})
			).then(function (data){
				if(data.code=='Y'){
					
					var url = serverUrlpre + '/publicApi/email/dream/'+pid;
					
					$.when($.ajax({
						type:'get',
						url:url,
						contentType: "application/json;charset=UTF-8",
					})).then(function (data){
						//debugger;
						console.log('sucucess');
					}).fail(function (data){
						console.log('error');
						//debugger;
					});
					
					//window.location.reload();
				}
			}.bind(this)).fail(function (data){
				//debugger;
			});
				
	
		}.bind(this));
	}
    render(){
		 return (
			<div>
				{this.state.calcullationDetailHtml}
			</div>
	   );
	   /*
        if(this.state.data==null){
            return false;
        }
        var releasenum=isNull(this.state.data.releasenum)?0:this.state.data.releasenum;
        var applicationnum=isNull(this.state.data.applicationnum)?0:this.state.data.applicationnum;
        var finishnum=isNull(this.state.data.finishnum)?0:this.state.data.finishnum;
        var orderpricetol=isNull(this.state.data.demandpricetol)?0:this.state.data.demandpricetol;
        var date=new Date();
        var endtime=new Date(this.state.data.endtime);
        var diffday=Math.ceil(endtime.diff(date))+1;
        if(parseInt(diffday)<0){
            diffday=0;
        }
        //  if(!isNull(this.state.data.demandProgressList)){
        //      if(this.state.data.demandProgressList.length!=0){
        //          this.state.data.demandProgressList.map(function(result){
        //              finishnum+=isNull(result.finishnum)?0:result.finishnum;
        //              applicationnum+=isNull(result.applicationnum)?0:result.applicationnum;
        //          });
        //      }
        //  }
        //  if(!isNull(this.state.data.areaCityList)){
        //      if(this.state.data.areaCityList.length!=0){
        //          this.state.data.areaCityList.map(function(result){
        //              orderpricetol+=isNull(result.orderpricetol)?0:result.orderpricetol;
        //          });
        //      }
        //  }
        if(this.state.data.pause==1){
            return (
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
            {isNull(this.state.data.packageid)?<a href={"customerDateEditNew.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
        <a href="customerDemandList.html"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
            </div>
            </div>
            </div>
        )
        }
        if(this.state.data.fdstate==1){
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
                <div className="right" style={{"margin-bottom":"20px","padding":"20px"}}>
        <p style={{"margin":"15px 0px 27px 0px","color":"#999","text-align":"center"}}>该需求正在审核中，请耐心等待！</p>
            {isNull(this.state.data.packageid)?<a href={"customerDateEditNew.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
        <a href="customerDemandList.html"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
            </div>
            </div>
        )
        }else if(this.state.data.fdstate==4||this.state.data.fdstate==2){
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
						<div className="right">
							<div className="title-explain"><span style={{"font-size":"16px","margin-left":"20px"}}>需求进度</span></div>
							<div className="context-explain package">
							<div>
								<table>
									<tr><td ><label>竞拍进度:</label></td></tr>
								
									<tr>
									<td colSpan="2">
										<div className="progress"><b>{parseInt(applicationnum/releasenum*100)}%</b>
									<div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(applicationnum/releasenum*100)+"%"}}></div>
									<div className="bublle"><p>竞拍量：{applicationnum}</p><p>发布量：{releasenum}</p></div>
									</div>
									</td>
									</tr>
									<tr>
									<td><label>完成进度:</label></td>
									</tr>
									<tr>
									<td colSpan="2">
										<div className="progress"><b>{parseInt(finishnum/releasenum*100)}%</b>
									<div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(finishnum/releasenum*100)+"%"}}></div>
									<div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p></div>
									</div></td>
									</tr>
									<tr>
									<td><label>总金额:</label></td>
									</tr>
									<tr>
									<td><span className="money"  style={{"float":"left"}}><span>¥</span><span className="size">{orderpricetol}</span></span></td>
										</tr>
								</table>
								{isNull(this.state.data.packageid)?<a href={"customerDateEditNew.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
								<a href="customerDemandList.html"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
							</div>
						</div>
					</div>
					
					
					
					
			<div className="right">
                <div className="title-explain">
					<span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>上传目标客户名单</span><a href="javascript:"className="upload_info_show" id="checkUp" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>上传记录>></a></div>
					<div className="context-explain Supplier_Mining">
						<p><span>目标客户名单：&nbsp;</span><a href="javascript:" id="selectfiles" style={{"color":"#0099ff","text-decoration":"underline","font-size":"14px"}}>选择文件</a></p>
						<div><div className="ossfile" style={{"width":"180px"}}></div><button type="button" className="btn" id="postfiles">开始上传</button></div>
						<button type="button" className="submit upload_submit_show"  >确定上传</button><a href="customerDemandList.html"><button type="button" className="drafts">返回上一页</button></a>
				</div>
            </div>
			</div>
        )
        }else if(this.state.data.fdstate==3){
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
            <td><span>{isNull(this.state.data.remark)?"暂无":this.state.data.remark}</span></td>
            </tr>
            <tr>
            <td><label>时间:</label></td>
            <td><span>{isNull(this.state.data.updatetime)?"暂无":this.state.data.updatetime}</span></td>
            </tr>
            </table>
            {isNull(this.state.data.packageid)?<a href={"customerDateEditNew.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
        <a href="customerDemandList.html"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
            </div>
            </div>
            </div>
        )
        }else if(this.state.data.fdstate==5){
            return (
                <div className="right">
                <div className="title-explain"><span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>结算详情</span></div>
            <div className="context-explain package">
                <table>
                <tr>
                <td ><label>竞拍进度:</label></td>
            </tr>
            <tr>
            <td colSpan="2">
                <div className="progress"><b>{parseInt(applicationnum/releasenum*100)}%</b>
            <div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(applicationnum/releasenum*100)+"%"}}></div>
            <div className="bublle"><p>竞拍量：{applicationnum}</p><p>发布量：{releasenum}</p></div>
            </div>
            </td>
            </tr>
            <tr>
            <td><label>完成进度:</label></td>
            </tr>
            <tr>
            <td colSpan="2">
                <div className="progress"><b>{parseInt(finishnum/releasenum*100)}%</b>
            <div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(finishnum/releasenum*100)+"%"}}></div>
            <div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p></div>
            </div></td>
            </tr>
            <tr>
            <td><label>预计结算金额:</label></td>
            </tr>
            <tr>
            <td><span className="money"  style={{"float":"left"}}><span>¥</span><span className="size">{orderpricetol}</span></span></td>
                </tr>
                </table>
                <hr/>
                <p style={{"padding":"20px 0px"}}><label>发票状态:</label><span>发票未寄出</span></p>

            {isNull(this.state.data.packageid)?<a href={"customerDateEditNew.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
        <a href="customerDemandList.html"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
            </div>
            </div>
        )
        }else if(this.state.data.jdstate=6){
            return (
                <div className="right" style={{"margin-bottom":"20px"}}>
        <div className="title-explain"><span style={{"font-size":"16px"}}>需求进度</span></div>
            <div className="context-explain package">
                <div>
                <table>
                <tr>
                <td style={{"color":"#fd5352"}}>需求已完成！</td>
            </tr>
            <tr>
            <td ><label>竞拍进度:</label></td>
            </tr>
            <tr>
            <td colSpan="2">
                <div className="progress"><b>{parseInt(applicationnum/releasenum*100)}%</b>
            <div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(applicationnum/releasenum*100)+"%"}}></div>
            <div className="bublle"><p>竞拍量：{applicationnum}</p><p>发布量：{releasenum}</p></div>
            </div>
            </td>
            </tr>
            <tr>
            <td><label>完成进度:</label></td>
            </tr>
            <tr>
            <td colSpan="2"><div className="progress"><b>{parseInt(finishnum/applicationnum*100)}%</b><div className="progress-bar brown" style={{"max-width":"100%","width":parseInt(finishnum/applicationnum*100)+"%"}}></div>
            <div className="bublle"><p>竞拍量：{applicationnum}</p><p>完成量：{finishnum}</p></div></div></td>
            </tr>
            <tr>
            <td><label>结算金额:</label></td>
            </tr>
            <tr>
            <td><span className="money" style={{"float":"left","color":"#fd5352"}}><span>¥</span><span className="size">{this.state.data.paymentmoney}</span></span></td>
            </tr>
            </table>
            {isNull(this.state.data.packageid)?<a href={"customerDateEditNew.html#"+demandid}><button id="copyDemand" type="button" className="submit">复制需求</button></a>:""}
        <a href="customerDemandList.html"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
            </div>
            </div>
            </div>
        )
        }else{
            return false;
        }
		*/
    }
};


/*
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
*/


$.ajax({
    type:"GET",
    url:urlGetDetailHfp,
    dataType:"json",
    cache:false,
    success:function(data){
        if(data.code=="N001"){
            sessionStorage.clear();
            console.log(data.msg);
            $(".loading_cover").hide();
            window.location.href="/login.html";
            return false;
        }
        if(data.code=="N"){
            console.log(data.msg);
            $(".loading_cover").hide();
            return false;
        }
        if(data.code=="Y"){
			/*上传记录模块具体数据*/
			if(data.detail.otherreport){
				 //JSON.parse(data.detail.otherreport)
				getRecord = data.detail.otherreport;
			}
			
			
            $(".loading_cover").hide();
            $(".title_select p").text(data.detail.demandname);
            React.render(<Yewu/>,$("#new_demand div.demend_left .form_col1>.main")[0],function(){this.setState({data:data.detail})});
            React.render(<Jbxx/>,$("#new_demand div.demend_left .form_col3>.main")[0],function(){this.setState({data:data.detail})});
            React.render(<Fj/>,$("#new_demand div.demend_left .form_col5>.main")[0],function(){this.setState({data:data.detail})});
           // React.render(<Progress_speed/>,$(".progress_speed")[0],function(){this.setState({data:data.detail})});
            React.render(<State data= { data.detail } />,$("#new_demand div.demend_right")[0],function(){this.setState({data:data.detail})});
			   
			   //debugger;
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
                       if (info.status == 200){
                           //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                           file1=f1;
                           $('#selectfiles').html("重新上传");
                           $('#postfiles').html("上传成功");
                           $('.ossfile .progress-bar').css("width","0%");
                           $('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
                           $('.ossfile').find("span.bfb").html("");
						   /*keyid 可以使用up.id o_1b902lpqd2701c1214ndahk14th1*/
						   /*是否下载 0未下载 1 */
						  
						   /*数据调试完毕*/
                       }else{
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
			
			
        }
    },
    error:function(msg){
        console.log(msg);
        $(".loading_cover").hide();
    }
});
