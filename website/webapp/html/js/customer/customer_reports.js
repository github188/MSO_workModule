//notdownloadcount
function whetherDown(callBack){
	/*查看是有下载*/
		callBack = callBack || function (){};
    let url = domain137 + `/quality/firstreport?jfuid=${$.sessionStorage('jfuid')}&demandName=&demandState=&startTime=&endTime=`;
		
		
		$.when($.ajax({
			 url:url,
			 type:"get",
			 contentType:'application/json',
		})).then(function (result){
		  var num=0;
      for (var i = result.data.length - 1; i >= 0; i--) {
        if(result.data[i].downloadcount==0){
          num++
        }
      }
			sessionStorage.setItem("notdownloadcount",num; 
			
			callBack();
		}).fail(function (data){
			alert('获取数据失败！');
		});
		
	//debugger;
}
whetherDown(function (){
	checkwhetherDown();
});
var Reports =React.createClass({
    getInitialState:function(){
        return{
            data:null
        }
    },
    componentDidMount:function(){
        $(".startDate").datetimepicker({
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
            $(".startDate").datetimepicker("setEndDate", $(".endDate").val());
        });
        $(".endDate").datetimepicker({
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
            $(".endDate").datetimepicker("setStartDate", $(".startDate").val());
        });
        $("table.reports").attr("border","1");
        var data={
            jfuid:sessionStorage.getItem("jfuid"),
            pn:isNull(this.props.pn)?1:this.props.pn,
            servicetype:"销售线索挖掘"
        }
        $.ajax({
            type:"get",
            url:urlReportf,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
                React.render(<Reports/>,$(".reports")[0],function(){
					this.setState({data:data});
					if(data.ndcountHfdf*1){
						$('.dataAdd').append(`<sup data-show="true" class="ant-scroll-number ant-badge-count">new</sup>`);
					}
				});
            },
            error:function(msg){
                console.log(msg);
            },
        });
		
		
    },
    search:function(){
        var data={
            jfuid:sessionStorage.getItem("jfuid"),
            pn:1,
            begintime:$(".startDate").val(),
            endtime:$(".endDate").val(),
            demandname:$(".reports_name").val(),
            servicetype:"销售线索挖掘"
        }
        $.ajax({
            type:"get",
            url:urlReportf,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
                React.render(<Reports/>,$(".reports")[0],function(){this.setState({data:data})});
            },
            error:function(msg){
                console.log(msg);
            },
        });
    },
    chakan:function(result,dom){
      React.render(<Reports_2 result={result} pn={$(".page a.selected").text()}/>,$(".reports")[0]);
    },
    render:function(){
        if(this.state.data==null){
            return(
              <div>
                  <input type="text" placeholder="需求名称" className="reports_name" />
                  <div className="right">
                      <input type="text" className="form_date startDate" placeholder="发布时间"   />
                      <i className="date_icon"></i>
                      <span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
                      <input type="text" className="form_date endDate" placeholder="发布时间" /><i className="date_icon"></i>
                      <button type="button" className="search" onClick={this.search}>搜索</button>
                  </div>
                  <table className="reports" >
                      <thead>
                          <tr>
                              <th>序号</th>
                              <th>需求名称</th>
                              <th>发布量</th>
                              <th>竞拍量</th>
                              <th>完成量</th>
                              <th>发布时间</th>
                              <th>操作</th>
                          </tr>
                      </thead>
                      <tbody>
					  <tr>
							<td colSpan="7">暂无数据</td>
						</tr>
                      </tbody>
                  </table>
                  <div className="ajaxPageStr"></div>
                  <hr/>
                  <p className="reports_title">汇总</p>
                  <table  className="reports" >
                      <thead>
                          <tr>
                              <th>发布量</th>
                              <th>竞拍量</th>
                              <th>完成量</th>
                          </tr>
                      </thead>
                      <tbody>
					  <tr>
							<td colSpan="4">暂无数据</td>
						</tr>
                      </tbody>
                  </table>
              </div>
        )
        }
		
          if(isNull(this.state.data.list)){
              return(

                  <div>
                      <input type="text" placeholder="需求名称" className="reports_name" />
                      <div className="right">
                          <input type="text" className="form_date startDate" placeholder="发布时间"   /><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
                          <input type="text" className="form_date endDate" placeholder="发布时间" /><i className="date_icon"></i>
                          <button type="button" className="search" onClick={this.search}>搜索</button>
                      </div>
                      <table className="reports" >
                          <thead>
                              <tr>
                                  <th>序号</th>
                                  <th>需求名称</th>
                                  <th>发布量</th>
                                  <th>竞拍量</th>
                                  <th>完成量</th>
                                  <th>发布时间</th>
                                  <th>操作</th>
                              </tr>
                          </thead>
                          <tbody>
						  <tr>
							<td colSpan="7">暂无数据</td>
						</tr>
                          </tbody>
                      </table>
                      <div className="ajaxPageStr"></div>
                      <hr/>
                      <p className="reports_title">汇总</p>
                      <table  className="reports" >
                          <thead>
                              <tr>
                                  <th>发布量</th>
                                  <th>竞拍量</th>
                                  <th>完成量</th>
                              </tr>
                          </thead>
                          <tbody>
						  <tr>
							<td colSpan="4">暂无数据</td>
						</tr>
                          </tbody>
                      </table>
                  </div>
          )
          }
		  
        $(".ajaxPageStr").html(this.state.data.ajaxPageStr);
		
        if($(".ajaxPageStr a").length!=0){
            $(".ajaxPageStr button")[0].onclick=null;
            $(".ajaxPageStr a").each(function(){
                if($(this).hasClass("next_page")){
                  $(this).on("click",function(){
                      nextPage($(".page a.selected").html()-1+2);
                  });
                }
                if($(this).hasClass("prev_page")){
                  $(this).on("click",function(){
                      nextPage($(".page a.selected").html()-2+1);
                  });
                }
                $(this)[0].onclick=null;
            })
            $(".ajaxPageStr button").on("click",function(){
                toTZ();
            });
            $(".ajaxPageStr a:not(.next_page,.prev_page)").on("click",function(){
                nextPage($(this).html());
            });
        }
		
        return(
            <div>
                <input type="text" placeholder="需求名称" className="reports_name" />
                <div className="right">
                    <input type="text" className="form_date startDate" placeholder="发布时间"   /><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
                    <input type="text" className="form_date endDate" placeholder="发布时间" /><i className="date_icon"></i>
                    <button type="button" className="search" onClick={this.search}>搜索</button>
                </div>
                <table className="reports" >
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>需求名称</th>
                            <th>发布量</th>
                            <th>竞拍量</th>
                            <th>完成量</th>
                            <th>发布时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
						this.state.data.list.map(function(result,index){
							if(result.notdownloadcount){
								return (
								<tr>
									<td>{index+1}</td>
									<td>{result.demandname}</td>
									<td>{result.releasenum}</td>
									<td>{result.auctionnum}</td>
									<td>{result.completequantity}</td>
									<td>{result.releasetime}</td>
									<td style={{'width':'150px'}}><a className="firstSaw" href="javascript:" onClick={this.chakan.bind(this,result)}>
									查看
									<sup data-show="true" className="ant-scroll-number ant-badge-count">new</sup>
									</a></td>
								</tr>
								)
							}
							
							return (
								<tr>
									<td>{index+1}</td>
									<td>{result.demandname}</td>
									<td>{result.releasenum}</td>
									<td>{result.auctionnum}</td>
									<td>{result.completequantity}</td>
									<td>{result.releasetime}</td>
									<td><a href="javascript:" onClick={this.chakan.bind(this,result)}>查看</a></td>
								</tr>
								)
						},this)
					
                    }
                    </tbody>
                </table>
                <div className="ajaxPageStr"></div>
                <hr/>
                <p className="reports_title">汇总</p>
                <table  className="reports" >
                    <thead>
                        <tr>
                            <th>发布量</th>
                            <th>竞拍量</th>
                            <th>完成量</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{this.state.data.sumReleasenum}</td>
                        <td>{this.state.data.sumAuctionnum}</td>
                        <td>{this.state.data.sumcompletequantity}</td>
                    </tbody>
                </table>
            </div>
        )
    }
});
// React.render(<Reports/>,$(".reports")[0]);
//ajax，分页
function toTZ(){
    var toPaggeVlue = document.getElementById("toGoPage").value;
    var tolPageValue = document.getElementById("tolPageValue").value;
    if(toPaggeVlue == ''){
        document.getElementById("toGoPage").value=1;return;
    }
    if(isNaN(Number(toPaggeVlue))){
        document.getElementById("toGoPage").value=1;return;
    }
    if(Number(toPaggeVlue)>Number(tolPageValue)){
        document.getElementById("toGoPage").value=tolPageValue;return;
    }
    nextPage(toPaggeVlue);
}
function nextPage(page){
    getDemandList(page);
}
function getDemandList(page){
    //console.log(page);
    var data={
        jfuid:sessionStorage.getItem("jfuid"),
        pn:page,
        begintime:$(".startDate").val(),
        endtime:$(".endDate").val(),
        demandname:$(".reports_name").val(),
        servicetype:"销售线索挖掘"
    };
    $.ajax({
        type:"get",
        url:urlReportf,
        async:true,
        data:data,
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        dataType: "json",
        success:function(data){
            React.render(<Reports/>,$(".reports")[0],function(){this.setState({data:data})});
        },
        error:function(msg){
            console.log(msg);
        },
    });
}


/*第二个调用第三个*/
var Reports_2=React.createClass({
    getInitialState:function(){
        return{
            data:null
        }
    },
    componentDidMount:function(){
      $("table.reports").attr("border","1");
        var data={
            demandname:this.props.result.demandname,
            servicetype:"销售线索挖掘"
        }
        $.ajax({
            type:"get",
            url:urlReportf+"/"+this.props.result.pid,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
                React.render(<Reports_2 result={this.props.result} pn={this.props.pn}/>,$(".reports")[0],function(){this.setState({data:data})});
            }.bind(this),
            error:function(msg){
                console.log(msg);
            },
        });
    },
    back:function(){
        React.render(<Reports pn={this.props.pn}/>,$(".reports")[0]);
    },
    search:function(){
        var data={
            demandid:this.props.result.demandid,
            ordername:this.props.result.ordername,
            auctionnum:this.props.result.auctionnum,
            begintime:$(".startDate").val(),
            endtime:$(".endDate").val(),
            servicetype:"销售线索挖掘"
        }
        $.ajax({
            type:"get",
            url:urlReportf,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
                React.render(<Reports_2 result={this.props.result} pn={this.props.pn}/>,$(".reports")[0],function(){this.setState({data:data})});
            }.bind(this),
            error:function(msg){
                console.log(msg);
            },
        });
    },
    chakan:function(result,dom){
	  /*第二层开始调用第三个 模块*/
      React.render(<Reports_3 result={result} data={this.props.result} pn={this.props.pn}/>,$(".reports")[0]);
    },
    render:function(){
        if(isNull(this.state.data)){
            return(
                <div>
                      <span style={{"margin":"8px 0px 25px 0px","line-height":"30px"}}>需求名称：<span  className="demand_name"></span></span>
                      <table className="reports" >
                          <thead>
                              <tr>
                                  <th>序号</th>
                                  <th>目标区域</th>
                                  <th>发布量</th>
                                  <th>竞拍量</th>
                                  <th>完成量</th>
                                  <th>操作</th>
                              </tr>
                          </thead>
                          <tbody>
						  <tr>
							<td colSpan="6">暂无数据</td>
						</tr>
                          </tbody>
                      </table>
                      <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                </div>
        )
        }
            if(isNull(this.state.data.list)){
                return(
                    <div>
                        <span style={{"margin":"8px 0px 25px 0px","line-height":"30px"}}>需求名称：<span  className="demand_name"></span></span>
                        <table className="reports" >
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>目标区域</th>
                                    <th>发布量</th>
                                    <th>竞拍量</th>
                                    <th>完成量</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
							<tr>
							<td colSpan="6">暂无数据</td>
						</tr>
                            </tbody>
                        </table>
                        <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                    </div>
            )
            }
        return(
              <div>
                  <span style={{"margin":"8px 0px 25px 0px","line-height":"30px"}}>需求名称：<span  className="demand_name">{this.props.result.demandname}</span></span>
                  <table className="reports" >
                      <thead>
                          <tr>
                              <th>序号</th>
                              <th>目标区域</th>
                              <th>发布量</th>
                              <th>竞拍量</th>
                              <th>完成量</th>
                              <th>操作</th>
                          </tr>
                      </thead>
                      <tbody>
                      {this.state.data.list.map(function(result,index){
						  
						  if(result.notdownloadcount){
						  /*下载第二部*/
							  return (
							  <tr>
								  <td>{index+1}</td>
								  <td>{result.targecity}</td>
								  <td>{result.releasenum}</td>
								  <td>{result.auctionnum}</td>
								  <td>{result.completequantity}</td>
								  <td className="secondSaw" style={{'width':'150px'}}><a href="javascript:;" onClick={this.chakan.bind(this,result)}>查看
								  <sup data-show="true" className="ant-scroll-number ant-badge-count">new</sup>
								  </a></td>
							  </tr>
							  )
						  }
						  
						   return (
							  <tr>
								  <td>{index+1}</td>
								  <td>{result.targecity}</td>
								  <td>{result.releasenum}</td>
								  <td>{result.auctionnum}</td>
								  <td>{result.completequantity}</td>
								  <td><a href="javascript:" onClick={this.chakan.bind(this,result)}>查看</a></td>
							  </tr>
							  )
                      },this)
                      }
                      </tbody>
                  </table>
                  <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
              </div>
        )
    }
});






























var Reports_3 =React.createClass({
    getInitialState:function(){
        return{
            data:null
        }
    },
    componentDidMount:function(){
		
          $("table.reports").attr("border","1");
		  
          $(".startDate").datetimepicker({
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
              $(".startDate").datetimepicker("setEndDate", $(".endDate").val());
          });
		  
          $(".endDate").datetimepicker({
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
              $(".endDate").datetimepicker("setStartDate", $(".startDate").val());
          });
		  
        var data={
            pn:1,
            servicetype:"销售线索挖掘"
        }
		/*第一次自动跟新代码*/
        $.ajax({
            type:"get",
            url:urlReportf+"/"+this.props.result.pid+"/"+this.props.result.demandid,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
				//debugger;
                React.render(<Reports_3 result={this.props.result} data={this.props.data}/>,
				$(".reports")[0],function(){
					this.setState({data:data})
				});
				
				downloadC();
            }.bind(this),
            error:function(msg){
                console.log(msg);
            },
        });
		
		
		var _this = this;
		//GET /report/f/{pid}/{demandid}
		function downloadC(){
			$(".downloadC span").click(function(){
				var stid = $(this).attr('data-stid');
				var oParent = $(this).parent();
				//var herfId = $(this).parent().attr('data-href');
				$.ajax({
					type:"put",
					url:domain+"/report/editDownloadStatus",
					headers: {'Content-Type': 'application/json'},
					data:JSON.stringify({
						stid:stid,
						isdownloaded:"1"
					}),
					success:function(data){
						if(data.code=='Y'){
							
							
							/*下载成功跟新代码*/
							
							$.ajax({
								type:"get",
								url:urlReportf+"/"+_this.props.result.pid+"/"+_this.props.result.demandid,
								async:true,
								data:data,
								contentType:"application/x-www-form-urlencoded;charset=utf-8",
								dataType: "json",
								success:function(data){
									//debugger;
									_this.setState({data:data});
									React.render(<Reports_3 result={_this.props.result} data={_this.props.data}/>,
									$(".reports")[0],function(){
										
										whetherDown(function (){
											checkwhetherDown();
										});
										
									});
									
									//downloadC();
								},
								error:function(msg){
									console.log(msg);
								},
							});
						}
						
					}.bind(this),
					error:function(msg){
						//debugger;
					},
				});
			});
		};
		
		
    },
    back:function(){
        React.render(<Reports_2 result={this.props.data} pn={this.props.pn}/>,$(".reports")[0]);
    },
    search:function(){
		//alert(9);
      var data={
          begintime:$(".startDate").val(),
          endtime:$(".endDate").val(),
          servicetype:"销售线索挖掘"
      }
      $.ajax({
          type:"get",
          url:urlReportf+"/"+this.props.result.pid+"/"+this.props.result.demandid,
          async:true,
          data:data,
          contentType:"application/x-www-form-urlencoded;charset=utf-8",
          dataType: "json",
          success:function(data){
              React.render(<Reports_3 result={this.props.result} data={this.props.data}/>,$(".reports")[0],function(){this.setState({data:data})});
          }.bind(this),
          error:function(msg){
              console.log(msg);
          },
      });
	  
    },
    render:function(){
        if(isNull(this.state.data)){
            return(
                <div>
                <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>需求名称:&emsp;<span></span></span>
                      <span style={{"margin":"8px 48px 25px 0px","line-height":"30px"}}>目标区域:&emsp;<span></span></span>
                      <span style={{"margin":"8px 0px 25px 0px","line-height":"30px"}}>发布量:&emsp;<span></span></span>
                      <div className="right">
                      <input type="text" className="form_date startDate" placeholder="成单时间"  /><i className="date_icon"></i><span  style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
                      <input type="text" className="form_date endDate"  placeholder="成单时间" /><i className="date_icon"></i>
                      <button type="button" className="search" onClick={this.search}>搜索</button>
                      </div>
                      <table className="reports" >
                      <thead>
                          <tr>
                              <th>序号</th>
                              <th>完成量</th>
                              <th>成单时间</th>
                              <th>成单报告</th>
                          </tr>
                      </thead>
                      <tbody>
                      </tbody>
                      </table>
                      <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                      <div className="ajaxPageStr"></div>
                      <hr/>
                      <p className="reports_title">汇总</p>
                      <table  className="reports">
                      <thead>
                          <tr>
                              <th>发布量</th>
                              <th>完成量</th>
                          </tr>
                      </thead>
                      <tbody>
                      </tbody>
                      </table>
                      <hr/>
                      <p className="reports_title">录音文件</p>
                      <table  className="reports_file">
                      <tbody>

                      </tbody>
                      </table>
                </div>
        )
        }
            if(isNull(this.state.data.list)){
                return(<div>
                      <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>需求名称:&emsp;<span title={this.props.data.demandname} style={{"display":"inline-block","max-width":"6em","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis","vertical-align":"bottom"}}>{this.props.data.demandname}</span></span>
                      <span style={{"margin":"8px 48px 25px 0px","line-height":"30px"}}>目标区域:&emsp;<span>{this.props.result.targecity}</span></span>
                      <span style={{"margin":"8px 0px 25px 0px","line-height":"30px"}}>发布量:&emsp;<span>{this.props.result.releasenum}</span></span>
                      <div className="right">
                      <input type="text" className="form_date startDate" placeholder="成单时间"   /><i className="date_icon"></i><span  style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
                      <input type="text" className="form_date endDate" placeholder="成单时间"   /><i className="date_icon"></i>
                      <button type="button" className="search"  onClick={this.search}>搜索</button>
                      </div>
                      <table className="reports">
                      <thead>
                          <tr>
                              <th>序号</th>
                              <th>完成量</th>
                              <th>成单时间</th>
                              <th>成单报告</th>
                          </tr>
                      </thead>
                      <tbody>
                      </tbody>
                      </table>
                      <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                      <div className="ajaxPageStr"></div>
                      <hr/>
                      <p className="reports_title">汇总</p>
                      <table  className="reports">
                      <thead>
                          <tr>
                              <th>发布量</th>
                              <th>完成量</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.state.data.sumReleasenum}</td>
                          <td>{this.state.data.sumcompletequantity}</td>
                        </tr>
                      </tbody>
                      </table>
                      <hr/>
                      <p className="reports_title">录音文件</p>
                      <table  className="reports_file">
                      <tbody>
                      {this.state.data.luyinlist.map(function(result,index){
						 
                          return (
                          <tr>
                              <td><span>{index+1}</span>&emsp;&emsp;&emsp;录音文件对应时间</td>
                              <td>{result.censusdayrangeh}</td>
                              <td>{isNull(result.census_recording_url)?"无":<a id="downloadC" className="downloadC" href={domainDownShort+result.census_recording_url} ><span data-stid={result.stid}>下载</span></a>}</td>
                          </tr>
                          )
                      })
                      }
                      </tbody>
                      </table>
                </div>
            )
            }
          $(".ajaxPageStr").html(this.state.data.ajaxPageStr);
          if($(".ajaxPageStr a").length!=0){
              $(".ajaxPageStr button")[0].onclick=null;
              $(".ajaxPageStr a").each(function(){
                  if($(this).hasClass("next_page")){
                    $(this).on("click",function(){
                        nextPage($(".page a.selected").html()-1+2);
                    });
                  }
                  if($(this).hasClass("prev_page")){
                    $(this).on("click",function(){
                        nextPage($(".page a.selected").html()-2+1);
                    });
                  }
                  $(this)[0].onclick=null;
              })
              $(".ajaxPageStr button").on("click",function(){
                  toTZ();
              });
              $(".ajaxPageStr a:not(.next_page,.prev_page)").on("click",function(){
                  nextPage($(this).html());
              });
          }
        return(
              <div>
                    <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>需求名称:&emsp;<span title={this.props.data.demandname} style={{"display":"inline-block","max-width":"6em","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis","vertical-align":"bottom"}}>{this.props.data.demandname}</span></span>
                    <span style={{"margin":"8px 48px 25px 0px","line-height":"30px"}}>目标区域:&emsp;<span>{this.props.result.targecity}</span></span>
                    <span style={{"margin":"8px 0px 25px 0px","line-height":"30px"}}>发布量:&emsp;<span>{this.props.result.releasenum}</span></span>
                    <div className="right">
                    <input type="text" className="form_date startDate" placeholder="成单时间"   /><i className="date_icon"></i><span  style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
                    <input type="text" className="form_date endDate" placeholder="成单时间"   /><i className="date_icon"></i>
                    <button type="button" className="search"  onClick={this.search}>搜索</button>
                    </div>
                    <table className="reports">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>完成量</th>
                            <th>成单时间</th>
                            <th>成单报告</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.list.map(function(result,index){
						/*这里是下载*/
						
						if(result.isdownloaded == null || result.isdownloaded=='0'){
							return (
							<tr>
								<td>{index+1}</td>
								<td>{result.completequantity}</td>
								<td>{result.censusday}</td>
								<td>{isNull(result.censusfile_url)?"无":<a id="downloadC" className="downloadC" href={domainDownShort+result.censusfile_url} >
								<span className="ant-scroll-number-previous" data-stid={result.stid}>下载
										<sup data-show="true" className="ant-scroll-number ant-badge-count">new</sup>
								</span>
								</a>}
								</td>
							</tr>
							)
						}
						
						return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{result.completequantity}</td>
                            <td>{result.censusday}</td>
                            <td className="downLoadFile">{isNull(result.censusfile_url)?"无":<a id="downloadC" className="downloadC" href={domainDownShort+result.censusfile_url} ><span data-stid={result.stid}>下载</span></a>}</td>
                        </tr>
                        )
                       
                    })
                    }
                    </tbody>
                    </table>
                    <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                    <div className="ajaxPageStr"></div>
                    <hr/>
                    <p className="reports_title">汇总</p>
                    <table  className="reports">
                    <thead>
                        <tr>
                            <th>发布量</th>
                            <th>完成量</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.state.data.sumReleasenum}</td>
                        <td>{this.state.data.sumcompletequantity}</td>
                      </tr>
                    </tbody>
                    </table>
                    <hr/>
                    <p className="reports_title">录音文件</p>
                    <table  className="reports_file">
                    <tbody>
                    {this.state.data.luyinlist.map(function(result,index){
                        return (
                        <tr>
                            <td><span>{index+1}</span>&emsp;&emsp;&emsp;录音文件对应时间</td>
                            <td>{result.censusdayrangeh}</td>
                            <td>{isNull(result.census_recording_url)?"无":<a id="downloadC" className="downloadC" href={domainDownShort+result.census_recording_url} ><span data-stid={result.stid}>下载</span></a>}</td>
                        </tr>
                        )
                    })
                    }
                    </tbody>
                    </table>
              </div>
        )
    }
});



React.render(<Reports/>,$(".reports")[0]);
