//notdownloadcount

function whetherDown(callBack){
	/*查看是有下载*/
		callBack = callBack || function (){};
		var url = domain + "/report/f";
		
		$.when($.ajax({
			 url:url,
			 type:"get",
			 contentType:'application/json',
			 data:{
			  "jfuid":sessionStorage.getItem("jfuid"),
			 }
		})).then(function (data){
			var ndcountHfd = data.ndcountHfd*1;
			var ndcountHfdf = data.ndcountHfdf*1;
			/*ndcountHfd 销售线索挖掘 ndcountHfdf 数据加工*/
			sessionStorage.setItem("notdownloadcount",(ndcountHfd+ndcountHfdf)); 
			
			callBack();
		}).fail(function (data){
			console.log('获取数据失败！');
		});
		
	//debugger;
}
whetherDown(function (){
	checkwhetherDown();
});

var Reports=React.createClass({
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
            jfuid:sessionStorage.getItem("jfuid"),
            pn:isNull(this.props.pn)?1:this.props.pn,
            servicetype:"数据加工"
        }
		
        $.ajax({
            type:"get",
            url:urlReportf,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
                React.render(<Reports/>,$(".reports")[0],
					function(){
						this.setState({data:data});
						//console.log(data.ndcountHfd);
						if(data.ndcountHfd*1){
							//debugger;
							$('.saleMessage').append(`<sup data-show="true" class="ant-scroll-number ant-badge-count">new</sup>`);
						}
					}
				);
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
            servicetype:"数据加工"
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
                  </div>
          )
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
                    {this.state.data.list.map(function(result,index){
						if(result.notdownloadcount){
							return (
							<tr>
								<td>{index+1}</td>
								<td>{result.demandname}</td>
								<td>{result.releasenum}</td>
								<td>{result.auctionnum}</td>
								<td>{result.completequantity}</td>
								<td>{result.releasetime}</td>
								<td style={{width:'150px'}}><a className="firstSaw" href="javascript:" onClick={this.chakan.bind(this,result)}>查看
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
        servicetype:"数据加工"
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
var Reports_2=React.createClass({
    getInitialState:function(){
        return{
            data:null
        }
    },
    componentDidMount:function(){
    $("table.reports").attr("border","1");
          $(".reports_tab li.active").click(function(){
              React.render(<Reports result={this.props.result} pn={1}/>,$(".reports")[0]);
          }.bind(this));
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
            servicetype:"数据加工"
        }
        $.ajax({
            type:"get",
            url:urlReportf+"/"+this.props.result.pid+"/"+this.props.result.demandid,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
				
                React.render(<Reports_2 result={this.props.result}  data={this.props.data}/>,$(".reports")[0],function(){this.setState({data:data})});
				
				downloadC();
            }.bind(this),
            error:function(msg){
                console.log(msg);
            },
        });
		//alert(2);
		
		//{domainDownShort+result.censusfile_url}
		//debugger;
		var _this = this;
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
							whetherDown();
							/*下载成功跟新代码*/
							
							 $.ajax({
								type:"get",
								url:urlReportf+"/"+_this.props.result.pid+"/"+_this.props.result.demandid,
								async:true,
								data:{
									pn:1,
									servicetype:"数据加工"
								},
								contentType:"application/x-www-form-urlencoded;charset=utf-8",
								dataType: "json",
								success:function(data){
										_this.setState({data:data});
										React.render(<Reports_2 result={_this.props.result}  data={_this.props.data}/>,$(".reports")[0],function(){
											whetherDown(function (){
												checkwhetherDown();
											});
											
										}
									);
									//downloadC();
								}.bind(this),
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
		
		checkwhetherDown();
    },
    back:function(){
        React.render(<Reports result={this.props.result} pn={this.props.pn}/>,$(".reports")[0]);
    },
    search:function(){
      var data={
          begintime:$(".startDate").val(),
          endtime:$(".endDate").val(),
          servicetype:"数据加工"
      }
      $.ajax({
          type:"get",
          url:urlReportf+"/"+this.props.result.pid+"/"+this.props.result.demandid,
          async:true,
          data:data,
          contentType:"application/x-www-form-urlencoded;charset=utf-8",
          dataType: "json",
          success:function(data){
              React.render(<Reports_2  result={this.props.result} data={this.props.data}/>,$(".reports")[0],function(){this.setState({data:data})});
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
					  <tr>
							<td colSpan="4">暂无数据</td>
						</tr>
                      </tbody>
                      </table>
                      <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                      <div className="ajaxPageStr"></div>
                      <hr/>
                      <p className="reports_title">录音文件</p>
                      <table  className="reports_file">
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
                      <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>需求名称:&emsp;
                      <span title={this.state.data.demandname} style={{"display":"inline-block","max-width":"6em","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis","vertical-align":"bottom"}}>{this.state.data.demandname}</span>
                      </span>
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
							<tr>
							<td colSpan="4">暂无数据</td>
						</tr>
                            </table>
                            <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                            <div className="ajaxPageStr"></div>
                            <hr/>
                            <p className="reports_title">录音文件</p>
                            <table  className="reports_file">
                            <tbody><tr>
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
                    <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>需求名称:&emsp;<span title={this.state.data.demandname} style={{"display":"inline-block","max-width":"6em","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis","vertical-align":"bottom"}}>{this.state.data.demandname}</span></span>
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
						
						//console.log(result);
						if(result.isdownloaded == null || result.isdownloaded=='0'){
							return (
							<tr>
								<td>{index+1}</td>
								<td>{result.completequantity}</td>
								<td>{result.censusday}</td>
								<td>{isNull(result.censusfile_url)?"无":
								<a id="downloadC" href={domainDownShort+result.censusfile_url} className="downloadC">
								<span className="ant-scroll-number-previous" data-stid={result.stid}>下载
										<sup data-show="true" className="ant-scroll-number ant-badge-count">new</sup>
								</span></a>}
								</td>
							</tr>
							);
						}
						
						return (
							<tr>
								<td>{index+1}</td>
								<td>{result.completequantity}</td>
								<td>{result.censusday}</td>
								<td>{isNull(result.censusfile_url)?"无":
								<a id="downloadC" href={domainDownShort+result.censusfile_url} className="downloadC">
								<span data-stid={result.stid}>下载</span></a>}
								</td>
							</tr>
							);
						
						
                    })
                    }
                    </tbody>
                    </table>
                    <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
                    <div className="ajaxPageStr"></div>
                    <hr/>
                    <p className="reports_title">录音文件</p>
                    <table  className="reports_file">
                    <tbody>
                    {this.state.data.luyinlist.map(function(result,index){
                        return (
                        <tr>
                            <td><span>{index+1}</span>&emsp;&emsp;&emsp;录音文件对应时间</td>
                            <td>{result.censusdayrangeh}</td>
                            <td>{isNull(result.census_recording_url)?"无":<a id="downloadC" className="downloadC" href={domainDownShort+result.census_recording_url} ><span>下载</span></a>}</td>
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
