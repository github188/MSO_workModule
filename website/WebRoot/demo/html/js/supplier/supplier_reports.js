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
            pn:isNull(this.props.pn)?1:this.props.pn
        }
        $.ajax({
            type:"get",
            url:urlReportj,
            async:true,
            data:data,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success:function(data){
                console.log(data);
                React.render(<Reports/>,$(".reports")[0],function(){this.setState({data:data})});
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
            ordername:$(".reports_name").val()
        }
        $.ajax({
            type:"get",
            url:urlReportj,
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
                <input type="text" placeholder="订单名称" className="reports_name" />
                <div className="right">
                <span>竞拍时间:&emsp;</span><input type="text" className="form_date startDate"  placeholder="发布时间"  / ><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
            <input type="text" className="form_date endDate" placeholder="发布时间" /><i className="date_icon"></i>
                <button type="button" className="search" onClick={this.search}>搜索</button>
            </div>
            <table className="reports">
                <thead>
                <tr>
                <th>序号</th>
                <th>订单名</th>
                <th>竞拍量</th>
                <th>上传量</th>
                <th>接收量</th>
                <th>成功量</th>
                <th>失败量</th>
                <th>竞拍时间</th>
                <th>操作</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="9">暂无数据</td>
						</tr>
                </tbody>
                </table>
                <p style={{"color":"#fd5352","margin-top":"18px"}}>注：当天的一些数据可能会因为平台质检的原因到次日才生成，请知悉</p>
            <div className="ajaxPageStr"></div>
                <hr/>
                <p className="reports_title">汇总</p>
                <table  className="reports">
                <thead>
                <tr>
                <th>竞拍量</th>
                <th>上传量</th>
                <th>接收量</th>
                <th>成功量</th>
                <th>失败量</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="5">暂无数据</td>
						</tr>
                </tbody>
                </table>
                </div>
        )
        }
        if(isNull(this.state.data.list)){
            return(
                <div>
                <input type="text" placeholder="订单名称" className="reports_name" />
                <div className="right">
                <span>竞拍时间:&emsp;</span><input type="text" className="form_date startDate"  placeholder="发布时间"  / ><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
            <input type="text" className="form_date endDate" placeholder="发布时间" /><i className="date_icon"></i>
                <button type="button" className="search" onClick={this.search}>搜索</button>
            </div>
            <table className="reports">
                <thead>
                <tr>
                <th>序号</th>
                <th>订单名</th>
                <th>竞拍量</th>
                <th>上传量</th>
                <th>接收量</th>
                <th>成功量</th>
                <th>失败量</th>
                <th>竞拍时间</th>
                <th>操作</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="9">暂无数据</td>
						</tr>
                </tbody>
                </table>
                <p style={{"color":"#fd5352","margin-top":"18px"}}>注：当天的一些数据可能会因为平台质检的原因到次日才生成，请知悉</p>
            <div className="ajaxPageStr"></div>
                <hr/>
                <p className="reports_title">汇总</p>
                <table  className="reports">
                <thead>
                <tr>
                <th>竞拍量</th>
                <th>上传量</th>
                <th>接收量</th>
                <th>成功量</th>
                <th>失败量</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="5">暂无数据</td>
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
            });
            $(".ajaxPageStr button").on("click",function(){
                toTZ();
            });
            $(".ajaxPageStr a:not(.next_page,.prev_page)").on("click",function(){
                nextPage($(this).html());
            });
        }
        return(
            <div>
            <input type="text" placeholder="订单名称" className="reports_name" />
            <div className="right">
            <span>竞拍时间:&emsp;</span><input type="text" className="form_date startDate"  placeholder="发布时间"  / ><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
        <input type="text" className="form_date endDate" placeholder="发布时间" /><i className="date_icon"></i>
            <button type="button" className="search" onClick={this.search}>搜索</button>
        </div>
        <table className="reports">
            <thead>
            <tr>
            <th>序号</th>
            <th>订单名</th>
            <th>竞拍量</th>
            <th>上传量</th>
            <th>接收量</th>
            <th>成功量</th>
            <th>失败量</th>
            <th>竞拍时间</th>
            <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.list.map(function(result,index){
                return (
                    <tr>
                    <td>{index+1}</td>
                    <td>{result.ordername}</td>
                <td>{result.auctionnum}</td>
                <td>{result.uploadnumber}</td>
                <td>{result.acceptquantity}</td>
                <td>{result.successfulnumber}</td>
                <td>{result.failureamount}</td>
                <td>{result.qachecktime}</td>
                <td><a href="javascript:" onClick={this.chakan.bind(this,result)}>查看</a></td>
                </tr>
                )
            },this)
    }
        </tbody>
        </table>
        <p style={{"color":"#fd5352","margin-top":"18px"}}>注：当天的一些数据可能会因为平台质检的原因到次日才生成，请知悉</p>
        <div className="ajaxPageStr"></div>
            <hr/>
            <p className="reports_title">汇总</p>
            <table  className="reports">
            <thead>
            <tr>
            <th>竞拍量</th>
            <th>上传量</th>
            <th>接收量</th>
            <th>成功量</th>
            <th>失败量</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>{this.state.data.sumauctionnum}</td>
        <td>{this.state.data.sumuploadnumber}</td>
        <td>{this.state.data.sumacceptquantity}</td>
        <td>{this.state.data.sumsuccessfulnumber}</td>
        <td>{this.state.data.sumfailureamount}</td>
        </tr>
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
    };
    $.ajax({
        type:"get",
        url:urlReportj,
        async:true,
        data:data,
        contentType:"application/x-www-form-urlencoded;charset=utf-8",
        dataType: "json",
        success:function(data){
            console.log(data);
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
            ordername:this.props.result.ordername,
            auctionnum:this.props.result.auctionnum
        }
        $.ajax({
            type:"get",
            url:urlReportj+"/"+sessionStorage.getItem("jfuid")+"/"+this.props.result.orderid,
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
            ordername:this.props.result.ordername,
            auctionnum:this.props.result.auctionnum,
            begintime:$(".startDate").val(),
            endtime:$(".endDate").val()
        }
        $.ajax({
            type:"get",
            url:urlReportj+"/"+sessionStorage.getItem("jfuid")+"/"+this.props.result.orderid,
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
    render:function(){
        if(this.state.data==null){
            return(
                <div>
                <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>订单名称:&emsp;<span  className="demand_name"></span></span>
                <span style={{"margin":"8px 48px 25px 0px","line-height":"30px"}}>竞拍量:&emsp;<span  className="demand_name"></span></span>
                <div className="right">
                <span>上传时间:&emsp;</span><input type="text" className="form_date startDate"  placeholder="上传时间"  / ><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
            <input type="text" className="form_date endDate" placeholder="上传时间" /><i className="date_icon"></i>
                <button type="button" className="search" onClick={this.search}>搜索</button>
            </div>
            <table className="reports">
                <thead>
                <tr>
                <th>序号</th>
                <th>订单名</th>
                <th>竞拍量</th>
                <th>上传量</th>
                <th>接收量</th>
                <th>成功量</th>
                <th>失败量</th>
                <th>竞拍时间</th>
                <th>操作</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="9">暂无数据</td>
						</tr>
                </tbody>
                </table>
                <p style={{"color":"#fd5352","margin-top":"18px"}}>注：当天的一些数据可能会因为平台质检的原因到次日才生成，请知悉</p>
            <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
            <hr/>
            <p className="reports_title">汇总</p>
                <table  className="reports">
                <thead>
                <tr>
                <th rowSpan="2">上传量</th>
                <th rowSpan="2">接收量</th>
                <th colSpan="2">成功量</th>
                <th colSpan="3">失败量</th>
                </tr>
                <tr>
                <th>合格量</th>
                <th>话术不规范量</th>
                <th>重复量</th>
                <th>取消量</th>
                <th>不合格量</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="5">暂无数据</td>
						</tr>
                </tbody>
                </table>
                </div>
        )
        }
        if(this.state.data.list==null){
            return(
                <div>
                <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>订单名称:&emsp;<span  className="ordername">{this.props.result.ordername}</span></span>
            <span style={{"margin":"8px 48px 25px 0px","line-height":"30px"}}>竞拍量:&emsp;<span  className="auctionnum">{this.props.result.auctionnum}</span></span>
            <div className="right">
                <span>上传时间:&emsp;</span><input type="text" className="form_date startDate"  placeholder="上传时间"  / ><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
            <input type="text" className="form_date endDate" placeholder="上传时间" /><i className="date_icon"></i>
                <button type="button" className="search" onClick={this.search}>搜索</button>
            </div>
            <table className="reports">
                <thead>
                <tr>
                <th>序号</th>
                <th>订单名</th>
                <th>竞拍量</th>
                <th>上传量</th>
                <th>接收量</th>
                <th>成功量</th>
                <th>失败量</th>
                <th>竞拍时间</th>
                <th>操作</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="9">暂无数据</td>
						</tr>
                </tbody>
                </table>
                <p style={{"color":"#fd5352","margin-top":"18px"}}>注：当天的一些数据可能会因为平台质检的原因到次日才生成，请知悉</p>
            <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
            <hr/>
            <p className="reports_title">汇总</p>
                <table  className="reports">
                <thead>
                <tr>
                <th rowSpan="2">上传量</th>
                <th rowSpan="2">接收量</th>
                <th colSpan="2">成功量</th>
                <th colSpan="3">失败量</th>
                </tr>
                <tr>
                <th>合格量</th>
                <th>话术不规范量</th>
                <th>重复量</th>
                <th>取消量</th>
                <th>不合格量</th>
                </tr>
                </thead>
                <tbody>
				<tr>
							<td colSpan="5">暂无数据</td>
						</tr>
                </tbody>
                </table>
                </div>
        )
        }
        return(
            <div>
            <span style={{"margin":"8px 50px 25px 0px","line-height":"30px"}}>订单名称:&emsp;<span  className="demand_name">{this.props.result.ordername}</span></span>
        <span style={{"margin":"8px 48px 25px 0px","line-height":"30px"}}>竞拍量:&emsp;<span  className="demand_name">{this.props.result.auctionnum}</span></span>
        <div className="right">
            <span>上传时间:&emsp;</span><input type="text" className="form_date startDate"  placeholder="上传时间"  / ><i className="date_icon"></i><span style={{"color":"#ddd"}}>&nbsp;—&nbsp;</span>
        <input type="text" className="form_date endDate" placeholder="上传时间" /><i className="date_icon"></i>
            <button type="button" className="search" onClick={this.search}>搜索</button>
        </div>
        <table className="reports">
            <thead>
            <tr>
            <th rowSpan="2">序号</th>
            <th rowSpan="2">上传量</th>
            <th rowSpan="2">接收量</th>
            <th colSpan="2">成功量</th>
            <th colSpan="3">失败量</th>
            <th rowSpan="2">查重附件</th>
            <th rowSpan="2">质检附件</th>
            <th rowSpan="2">上传时间</th>
            </tr>
            <tr>
            <th>合格量</th>
            <th>话术不规范量</th>
            <th>重复量</th>
            <th>取消量</th>
            <th>不合格量</th>
            </tr>
            </thead>
            <tbody>
            {this.state.data.list.map(function(result,index){
                return (
                    <tr>
                    <td>{index+1}</td>
                    <td>{result.ordernum}</td>
                <td>{result.dbareceive}</td>
                <td>{result.qaqualified}</td>
                <td>{result.qanotstandard}</td>
                <td>{result.dbarepetition}</td>
                <td>{result.qacancel}</td>
                <td>{result.qadisqualification}</td>
                <td>{isNull(result.dbaurl)?"无":<a id="downloadDB" href={domainDownShort+result.dbaurl} >下载</a>}</td>
                <td>{isNull(result.dbaurl)?"无":<a id="downloadQA" href={domainDownShort+result.qaurl} >下载</a>}</td>
                <td>{result.createtime}</td>
                </tr>
                )
            })
    }
        </tbody>
        </table>
        <p style={{"color":"#fd5352","margin-top":"18px"}}>注：当天的一些数据可能会因为平台质检的原因到次日才生成，请知悉</p>
        <a href="javascript:" type="button" className="back" onClick={this.back.bind(this)}>返回</a>
        <hr/>
        <p className="reports_title">汇总</p>
            <table  className="reports">
            <thead>
            <tr>
            <th rowSpan="2">上传量</th>
            <th rowSpan="2">接收量</th>
            <th colSpan="2">成功量</th>
            <th colSpan="3">失败量</th>
            </tr>
            <tr>
            <th>合格量</th>
            <th>话术不规范量</th>
            <th>重复量</th>
            <th>取消量</th>
            <th>不合格量</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>{this.state.data.sumuploadnumber}</td>
        <td>{this.state.data.sumacceptquantity}</td>
        <td>{this.state.data.sumqaqualified}</td>
        <td>{this.state.data.sumqanotstandard}</td>
        <td>{this.state.data.sumdbarepetition}</td>
        <td>{this.state.data.sumqacancel}</td>
        <td>{this.state.data.sumqadisqualification}</td>
        </tr>
        </tbody>
        </table>
        </div>
        )
    }
});
React.render(<Reports/>,$(".reports")[0]);
