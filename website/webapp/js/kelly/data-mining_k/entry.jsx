require('./more.css');
var fileArr = [];
var getRecord = [];
var jsonRecord,allData;
/*装所有的上传的文件*/
function isJson(obj) {
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


function uploadtab() {
    React.render(<Progress_speed />, $(".progress_speed")[0], function () {
        this.setState({
            res: getRecord
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

var Progress_speed = React.createClass({
    getInitialState: function () {
        return {
            data: null,
            res: '',
        }
    },
    componentDidMount: function () {
        this.rooEl = $('.progress_speed');
        $("#seach").live("click", function () {
            var urlUploadSchedule = urlUploadSchedule + "?sbeginDateValue=" + $(".start_date").val() + "&sendDateValue=" + $(".end_date").val();
            uploadtab();
        });


        /*关闭下载视图*/

        $('.close1').click(function () {
            $('.progress_speed').hide();
        });

        $('.button_close1').click(function () {
            $('.progress_speed').hide();
        });


        /*更新上传记录*/
        this.updataDoloadRecord();

    },
    updataDoloadRecord: function () {
        //debugger;
        this.rooEl.on('click', '.downLoad', function (ev) {
            var target = ev.currentTarget;
            var index = $(target).attr('data-index') * 1;
            var url = domain + "/hfp/" + pid;
            /*开始跟新上传记录*/
            try {
                jsonRecord = JSON.parse(getRecord);
                jsonRecord[index].ifdownload = 1;
            } catch (err) {
                jsonRecord = [];
            }

            //debugger;
            $.when($.ajax({
                    processData: false,
                    dataType: 'json',
                    type: "PUT",
                    url: url,
                    data: JSON.stringify(jsonRecord),
                    contentType: "application/json;charset=UTF-8",
                    dataType: "json",
                    cache: false
                })
            ).then(function (data) {
                //debugger;
            }).fail(function (data) {
                //debugger;
            });


        }.bind(this));

    },
    componentDidUpdate: function () {
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
    render: function () {
        if (this.state.res == "null" || this.state.res == null || this.state.res == "") {
            return (
                <div style={{"width": "auto"}}>
                    <div className="upload_submit" style={{"width": "700px"}}>
                        <div className="top"><span>提示</span><i className="close"></i></div>
                        <div className="main" style={{
                            "min-height": "230px",
                            "text-align": "center",
                            "line-height": "230px",
                            "font-size": "18px"
                        }}>
                            <p>上传成功！</p>
                        </div>
                        <div className="bottom">
                            <button type="submit" className="button_close btn_tj">确&nbsp;定</button>
                        </div>
                    </div>
                    <div style={{"width": "900px"}} className="upload_info">
                        <div className="top"><span>成单报告上传记录</span><i className="close1"></i></div>
                        <div className="main">
                            <div className="new_demand">
                                <div className="time_search">
                                    <span>上传时间：</span>
                                    <input type="text" className="form_date start_date" date-format="yyyy-mm-dd"
                                           defaultReadOnly id="start_date"/><i className="date_icon"></i>
                                    <span>&nbsp;-&nbsp;</span>
                                    <input type="text" className="form_date end_date" date-format="yyyy-mm-dd"
                                           defaultReadOnly id="end_date"/><i className="date_icon"></i>
                                    <button type="button" id="seach" value="">确定</button>
                                </div>
                                <div className="tab-scroll">
                                    <table className="tab" style={{"width": "100%"}}>
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
                        <div className="bottom">
                            <button type="button" className="button_close1">确&nbsp;定</button>
                        </div>
                    </div>
                </div>
            );
        }

        if (this.state.res) {
            //debugger;
            var res = this.state.res;//初始化数组
            res = JSON.parse(res);


            var uploadTabs = res.map(function (uploadTab, index) {
                if (!uploadTab || !uploadTab.filename) {
                    return;
                }
                return (
                    <tr>
                        <td>{uploadTab.filename}</td>
                        <td>{uploadTab.uploadtime}</td>
                        <td>{<a data-index={index} className="downLoad" href={domainDown + uploadTab.url}>下载</a>}</td>
                    </tr>
                )
            });
        }
        return (
            <div style={{"width": "auto"}}>
                <div className="upload_submit" style={{"width": "700px"}}>
                    <div className="top"><span>提示</span><i className="close"></i></div>
                    <div className="main" style={{
                        "min-height": "230px",
                        "text-align": "center",
                        "line-height": "230px",
                        "font-size": "18px"
                    }}>
                        <p>上传成功！</p>
                    </div>
                    <div className="bottom">
                        <button type="submit" className="button_close btn_tj">确&nbsp;定</button>
                    </div>
                </div>
                <div style={{"width": "900px"}} className="upload_info">
                    <div className="top"><span>上传记录</span><i className="close1"></i></div>
                    <div className="main">
                        <div className="new_demand">
                            <div className="time_search">

                            </div>
                            <div className="tab-scroll">
                                <table className="tab" style={{"width": "100%"}}>

                                    <tbody>
                                    {uploadTabs}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <button type="button" className="button_close1">确&nbsp;定</button>
                    </div>
                </div>
            </div>
        );
    }
});


var Yewu = React.createClass({
    getInitialState: function () {
        return {
            serviceType: ["", "销售线索挖掘", "数据加工", "人工客服"],
            data: null
        }
    },
    componentDidUpdate: function () {
        if ($(".jsms-title").text() == "查重后质检") {
            $(".jsms-text").text("与甲方数据查重后进行录音的质量检验");
        }
        if ($(".jsms-title").text() == "回访电话接通数") {
            $(".jsms-text").text("甲方回访后的接通数量，剔除无效与未接通数（>4次）");
        }
        if ($(".jsms-title").text() == "数据条目") {
            $(".jsms-text").text("按实际提交数据条目数乘以单价进行结算");
        }
    },

    render: function () {
        if (isNull(this.state.data)) {
            return (
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
                            <div className="bubble jsms-text" style={{"width": "273px"}}>按实际提交数据条目数乘以单价进行结算</div>
                        </td>
                    </tr>
                </table>
            )
        }
        return (
            <table>
                <tr>
                    <td>业务类型:</td>
                    <td>
                        <span>{isNull(this.state.data.servicetype) ? "无" : this.state.serviceType[this.state.data.servicetype]}</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble">针对企业自有数据和需求，进行有效触达</div>
                    </td>
                </tr>
                <tr>
                    <td>清洗渠道:</td>
                    <td><span>电话</span></td>
                </tr>
                <tr>
                    <td>数据条目:</td>
                    <td><span>{isNull(this.state.data.releasenum) ? "无" : this.state.data.releasenum + " 条"}</span></td>
                </tr>
                <tr>
                    <td>拨打次数:</td>
                    <td><span>无人接听数据最多拨打 3 次</span></td>
                </tr>
                <tr>
                    <td>单价:</td>
                    <td><span>{isNull(this.state.data.pprice) ? "无" : this.state.data.pprice + " 元"}</span></td>
                </tr>
                <tr className="hide">
                    <td>结算模式</td>
                    <td>
                        <span
                            className="jsms-title">{isNull(this.state.data.paymentstandard) ? "无" : this.state.data.paymentstandard}</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble jsms-text" style={{"width": "273px"}}>按实际提交数据条目数乘以单价进行结算</div>
                    </td>
                </tr>
            </table>
        )
    }
});
var Jbxx = React.createClass({
    getInitialState: function () {
        return {
            data: null
        }
    },
    render: function () {
        if (isNull(this.state.data)) {
            return (
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
        return (
            <table>
                <tr>
                    <td>需求名称:</td>
                    <td><span>{isNull(this.state.data.demandname) ? "无" : this.state.data.demandname}</span></td>
                </tr>
                <tr>
                    <td>需求描述:</td>
                    <td>
                        <span>{isNull(this.state.data.demanddescription) ? "无" : this.state.data.demanddescription}</span>
                    </td>
                </tr>
                <tr>
                    <td>开始日期:</td>
                    <td><span>{isNull(this.state.data.begintime) ? "无" : this.state.data.begintime}</span></td>
                </tr>
                <tr>
                    <td>结束日期:</td>
                    <td><span>{isNull(this.state.data.endtime) ? "无" : this.state.data.endtime}</span></td>
                </tr>
                <tr>
                    <td>项目负责人:</td>
                    <td><span>{isNull(this.state.data.pleader) ? "无" : this.state.data.pleader}</span></td>
                </tr>
                <tr>
                    <td>负责人电话:</td>
                    <td><span>{isNull(this.state.data.pphone) ? "无" : this.state.data.pphone}</span></td>
                </tr>
            </table>
        )
    }
});
var Fj = React.createClass({
    getInitialState: function () {
        return {
            data: null,
            type: ["", "销售线索:", "话术文件:", "目标客户名单:", "质检标准:", "产品介绍:"]
        }
    },
    render: function () {

        return (<table style={{"width": "780px", "margin": "0 auto"}}>

            {(Array.isArray(this.state.data) && this.state.data.length > 0) ? (this.state.data.map((v, k) => (
                <tr key={k}>
                    <td width="33.333%"
                        style={{"text-align": "left", "padding": "20px 0px"}}>{this.state.type[v.type]}</td>
                    <td width="33.333%" style={{"text-align": "center", "padding": "20px 0px"}}>1 份</td>
                    <td width="33.333%" style={{"text-align": "right", "padding": "20px 0px"}}>{<a
                        href={domainDownShort + v.path}>下载</a>}</td>
                </tr>))) : (<tbody>
            <tr>
                <td width="33.333%" style={{"text-align": "left", "padding": "20px 0px"}}>销售线索文件:</td>
                <td width="33.333%" style={{"text-align": "center", "padding": "20px 0px"}}>无</td>
            </tr>
            <tr>
                <td style={{"text-align": "left", "padding": "20px 0px"}}>话术文件:</td>
                <td style={{"text-align": "center", "padding": "20px 0px"}}>无</td>
            </tr>
            <tr>
                <td style={{"text-align": "left", "padding": "20px 0px"}}>目标客户名单:</td>
                <td style={{"text-align": "center", "padding": "20px 0px"}}>无</td>
            </tr>
            </tbody>)}
        </table>)

    }
});

var countIndex = 0;


class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calcullationDetailHtml: '',
        };
    }

    createcalcullationDetailHtml() {
        if (this.props.data) {
            var fdstate = this.props.data.fdstate;

            var releasenum = isNull(this.props.data.releasenum) ? 0 : this.props.data.releasenum;//需求发布量
            //   var applicationnum = isNull(this.state.data.applicationnum) ? 0 : this.state.data.applicationnum;
            var finishnum = isNull(this.props.data.finishnum) ? 0 : this.props.data.finishnum;      //完成量
            //	debugger;
            var orderpricetol = isNull(this.props.data.paymentmoney) ? 0 : this.props.data.paymentmoney;
            //debugger;
            var finlishScale = finishnum / ((releasenum == 0) ? 1 : releasenum);

            /*天数*/
            var date = new Date();
            var endtime = new Date(this.props.data.endtime);
            var diffday = Math.ceil(endtime.diff(date));
            if (parseInt(diffday) < 0) {
                diffday = 0;
            }
            /*天数*/
            //demandid 在全局中
            if (fdstate == 1) {
                return (<div>
                        <div className="right" style={{"margin-bottom": "20px"}}>
                            <div className="title-explain">
                                距离项目结束还剩
                            </div>
                            <div className="context-explain package">
                                <div className="countdown">
                                    <span className="blue"><span className="size">{diffday}</span>&emsp;<span
                                        className="day">天</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="right" style={{"margin-bottom": "20px", "padding": "20px"}}>
                            <p style={{"margin": "15px 0px 27px 0px", "color": "#999", "text-align": "center"}}>
                                该需求正在审核中，请耐心等待！</p>
                            <a href="javascript:self.location=document.referrer;">
                                <button type="button" className="drafts"
                                        style={{"width": "100%"}}>返回上一页
                                </button>
                            </a>
                        </div>
                    </div>

                );
            }

            /*进行中*/
            if (fdstate == 2) {
                return (<div>
                    <div className="right" style={{"margin-bottom": "20px"}}>
                        <div className="title-explain">
                            距离项目结束还剩
                        </div>
                        <div className="context-explain package">
                            <div className="countdown">
                                <span className="blue"><span className="size">{diffday}</span>&emsp;<span
                                    className="day">天</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="title-explain">
                            <span style={{"font-size": "16px", "float": "left", "margin-left": "20px"}}>需求进度</span>
                            {/*<a href="javascript:" className="progress_speed_show"*/}
                            {/*style={{"color": "#fff", "font-size": "14px", "float": "right", "margin-right": "10px"}}>*/}
                            {/*查看进度详情>>*/}
                            {/*</a>*/}
                            {/*<a href="javascript:" className="progress_speed_show_new"*/}
                            {/*style={{"color": "#fff", "font-size": "14px", "float": "right", "margin-right": "10px"}}>*/}
                            {/*查看进度详情>>*/}
                            {/*</a>*/}
                        </div>
                        <div className="context-explain package">
                            <div>
                                <table>

                                    <tr>
                                        <td><label>完成进度:</label></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="progress"><b>{parseInt(finlishScale * 100)}%</b>
                                                <div className="progress-bar brown" style={{
                                                    "max-width": "100%",
                                                    "width": parseInt(finlishScale * 100) + "%"
                                                }}></div>
                                                <div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>预计结算金额:</label></td>
                                    </tr>
                                    <tr>
                                        <td><span className="money" style={{"float": "left"}}><span>¥</span><span
                                            className="size">{orderpricetol * finlishScale}</span></span></td>
                                    </tr>
                                </table>
                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                                            style={{"width": "100%"}}>返回上一页
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="title-explain">
                            <span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>上传目标客户名单</span><a href="javascript:"className="upload_info_show" id="checkUp" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px",display:"none"}}>上传记录>></a></div>
                        <div className="context-explain Supplier_Mining">
                            <p><span>目标客户名单：&nbsp;</span><a href="javascript:" id="selectfiles" style={{"color":"#0099ff","text-decoration":"underline","font-size":"14px"}}>选择文件</a></p>
                            <div><div className="ossfile" style={{"width":"180px"}}></div><button type="button" className="btn" id="postfiles">开始上传</button></div>
                            <button type="button" className="submit upload_submit_show"  >确定上传</button><a href="customerDemandList.html"><button type="button" className="drafts">返回上一页</button></a>
                        </div>
                    </div>

                </div>);
            }


            /*结算中*/
            if (fdstate == 3) {
                return (<div>

                    <div className="right">
                        <div className="title-explain">
                            <span style={{"font-size": "16px", "float": "left", "margin-left": "20px"}}>需求进度</span>
                            {/*<a href="javascript:" className="progress_speed_show"*/}
                            {/*style={{"color": "#fff", "font-size": "14px", "float": "right", "margin-right": "10px"}}>*/}
                            {/*查看进度详情>>*/}
                            {/*</a>*/}
                            {/*<a href="javascript:" className="progress_speed_show_new"*/}
                            {/*style={{"color": "#fff", "font-size": "14px", "float": "right", "margin-right": "10px"}}>*/}
                            {/*查看进度详情>>*/}
                            {/*</a>*/}
                        </div>
                        <div className="context-explain package">
                            <div>
                                <table>

                                    <tr>
                                        <td><label>完成进度:</label></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="progress"><b>{parseInt(finlishScale * 100)}%</b>
                                                <div className="progress-bar brown" style={{
                                                    "max-width": "100%",
                                                    "width": parseInt(finlishScale * 100) + "%"
                                                }}></div>
                                                <div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>预计结算金额:</label></td>
                                    </tr>
                                    <tr>
                                        <td><span className="money" style={{"float": "left"}}><span>¥</span><span
                                            className="size">{orderpricetol * finlishScale}</span></span></td>
                                    </tr>
                                </table>
                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                                            style={{"width": "100%"}}>返回上一页
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>)
            }

            /*已经完成*/
            if (fdstate == 4) {

                return (<div>

                    <div className="right">
                        <div className="title-explain">
                            <span style={{"font-size": "16px", "float": "left", "margin-left": "20px"}}>需求进度</span>
                            {/*<a href="javascript:" className="progress_speed_show"*/}
                            {/*style={{"color": "#fff", "font-size": "14px", "float": "right", "margin-right": "10px"}}>*/}
                            {/*查看进度详情>>*/}
                            {/*</a>*/}
                            {/*<a href="javascript:" className="progress_speed_show_new"*/}
                            {/*style={{"color": "#fff", "font-size": "14px", "float": "right", "margin-right": "10px"}}>*/}
                            {/*查看进度详情>>*/}
                            {/*</a>*/}
                        </div>
                        <div className="context-explain package">
                            <div>
                                <table>
                                    <tr>
                                        <td style={{'textAlign': 'center', "color": "#fd5352"}}>需求已完成！</td>
                                    </tr>
                                    <tr>
                                        <td><label>完成进度:</label></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="progress"><b>{parseInt(finlishScale * 100)}%</b>
                                                <div className="progress-bar brown" style={{
                                                    "max-width": "100%",
                                                    "width": parseInt(finlishScale * 100) + "%"
                                                }}></div>
                                                <div className="bublle"><p>完成量：{finishnum}</p><p>发布量：{releasenum}</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>预计结算金额:</label></td>
                                    </tr>
                                    <tr>
                                        <td><span className="money" style={{"float": "left"}}><span>¥</span><span
                                            className="size">{orderpricetol * finlishScale}</span></span></td>
                                    </tr>
                                </table>

                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                                            style={{"width": "100%"}}>返回上一页
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>)
            }


            /*异常*/
            if (fdstate == 5) {
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
                                        <td style={{"vertical-align": "top"}}><label>原因:</label></td>
                                        <td>
                                            <span>{isNull(this.props.data.remark) ? "暂无" : this.props.data.remark}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>时间:</label></td>
                                        <td>
                                            <span>{isNull(this.props.data.updatetime) ? "暂无" : this.props.data.updatetime}</span>
                                        </td>
                                    </tr>
                                </table>

                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                                            style={{"width": "100%"}}>返回上一页
                                    </button>
                                </a>


                            </div>
                        </div>
                    </div>
                )
            }
        }

    }

    componentDidMount() {
        this.setState({
            calcullationDetailHtml: this.createcalcullationDetailHtml(),
        });
        this.rooEl = this.rooEl = $('.demend_right');
        $(".progress_speed_show").live("click", function () {
            $(".progress_speed").show();
        });
        $(".progress_speed .close,.progress_speed .button_close").live("click", function () {
            $(".progress_speed").hide();
        });
        this.uploadSubmit();
        this.showdetails();
    }

    componentDidUpdate() {
        $(".progress").hover(function () {
            $(this).find(".bublle").show();
        }, function () {
            $(this).find(".bublle").hide();
        });

        /*upload_info_show ** */
    }

    showdetails() {
        this.rooEl.on('click', '.upload_info_show', function () {
            uploadtab();
        });
    }

    uploadSubmit() {

        /*已经再全局变量里面pid*/
        // var url = domain + "/hfp/" + pid;
        //
        this.rooEl.on('click', '.upload_submit_show', function (ev) {
            var _this = ev.currentTarget;
            if (!file1) {
                alert('请选择文件!');
                return;
            }
var fileXs,fileHs;
for(let i=0;i<allData.attachment.length;i++){
    if(allData.attachment[i].type=="1"){
        fileXs=allData.attachment[i].path
    }
    if(allData.attachment[i].type=="2"){
        fileHs=allData.attachment[i].path
    }
}



 var data = {
            "createTime":allData.demand.createTime,
            "releaseQuantity": allData.demand.releasenum,//todo "integer,需求发布量",
            "areaAndDemandQuantity": "",//目标区域
            "endTime": allData.demand.endtime,//Todo"string,结束时间",
            "demandName": allData.demand.demandname,//todo "string,需求名",
            "projectLeader":allData.demand.pleader,//todo  "string,项目负责人",
            "chargeTag": "",//todo "string,收费标签",
            "sales": fileXs||"",//----------------------------------todo "string,销售线索附件",
            "productPresentation": "",//todo "string,产品介绍附件",
            "dataCleaningUnitPrice": allData.demand.pprice,//Todo "double,数据加工单价",
            "basicUnitPrice": "",//"double,基础单价",//TODO 行业单价
            "productIntroduce": "",// todo "string,产品介绍",
            "customerList": file1,//todo "string,目标客户名单附件path",
            "demandDesc": allData.demand.demanddescription,//Todo "string,需求描述 可变长度，最多65535个字符",
            "totalPrice":allData.demand.pprice*allData.demand.releasenum,//todo  "double,需求总价",
            "targetChannel": "",//todo "integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
            "favorableMode": "",//todo "integer,优惠方式 1-无优惠 2-免手续费",
            "beginTime": allData.demand.begintime,//todo "string,开始时间",
            "serviceType": "2",//Todo "string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
            "industryXifen": "",//todo "string,行业细分",//todo 3级
            "targetPopulation": "",//todo "string,目标人群",
            "speechcraft": fileHs||"",//---------------------------todo "string,话术附件",
            "targetAgeTo": "",//todo "integer,目标区域人群年龄 to",
            "projectLeaderPhone":   allData.demand.pphone,//todo "string,项目负责人电话",
            "customTag":"",//todo "string,自定义标签",
            "targetAgeFrom":"",//todo "integer,目标区域人群年龄 from"
    };




            $.ajax({
                url:`${domain137}/quality/drafts/${this.props.data.pid}/1`,
                type:"patch",
                contentType:"application/json",
                data:JSON.stringify(data),
                success:function(result){
                    if(result.code=="0"){
                        $(".cover").show().find(".context").html("<span>上传成功</span>");
                    }
                },
                error(err){
                  $(".cover").show().find(".context").html("<span>上传失败</span>")
                    console.log(err);
                }
            })



    return ;

            var namefile = file1.split('/');
            var le = namefile.length;
            filename = namefile[le - 1];


            var data = {
                "keyid": "",
                "ifdownload": "0",
                "uploadtime": new Date().Format("yyyy-MM-dd hh:mm:ss"),
                "filename": filename,
                "url": file1
            }
            $.when($.ajax({
                    processData: false,
                    dataType: 'json',
                    type: "PUT",
                    url: url,
                    data: JSON.stringify(data),
                    contentType: "application/json;charset=UTF-8",
                    dataType: "json",
                    cache: false
                })
            ).then(function (data) {
                if (data.code == 'Y') {

                    var url = serverUrlpre + '/publicApi/email/dream/' + pid;

                    $.when($.ajax({
                        type: 'get',
                        url: url,
                        contentType: "application/json;charset=UTF-8",
                    })).then(function (data) {
                        //debugger;
                        //console.log('sucucess');
                    }).fail(function (data) {
                        //console.log('error');
                        //debugger;
                    });

                    //window.location.reload();
                }
            }.bind(this)).fail(function (data) {
                //debugger;
            });


        }.bind(this));
    }

    render() {
        return (
            <div>
                {this.state.calcullationDetailHtml}
            </div>
        );

    }
}
;


$.ajax({
    type: "GET",
    url: `${domain137}/quality/demanddetail/${location.hash.slice(1)}`,
    dataType: "json",
    cache: false,
    success: function (result) {
        if (result.code == "N001") {
            sessionStorage.clear();
            $(".loading_cover").hide();
            window.location.href = "/login.html";
            return false;
        }
        if (result.code == "N") {
            $(".loading_cover").hide();
            return false;
        }
        if (result.code == "0") {
            /*上传记录模块具体数据*/
            allData=result;
            if (result.attachment) {
                //JSON.parse(data.detail.otherreport)
                getRecord = result.attachment;

            }
            $(".cover").find("button,.close2").click(function(){
                        location.reload();
            })

            $(".loading_cover").hide();
            $(".title_select p").text(result.demand.demandname);
            React.render(<Yewu/>, $("#new_demand div.demend_left .form_col1>.main")[0], function () {
                this.setState({data: result.demand})
            });
            React.render(<Jbxx/>, $("#new_demand div.demend_left .form_col3>.main")[0], function () {
                this.setState({data: result.demand})
            });
            React.render(<Fj/>, $("#new_demand div.demend_left .form_col5>.main")[0], function () {
                this.setState({data: result.attachment})
            });
            // React.render(<Progress_speed/>,$(".progress_speed")[0],function(){this.setState({data:data.detail})});
            React.render(<State data={ result.demand }/>, $("#new_demand div.demend_right")[0], function () {
                this.setState({data: result.demand})
            });

            //debugger;
            var uploader = new plupload.Uploader({
                runtimes: 'html5,flash,silverlight,html4',
                browse_button: 'selectfiles',
                //multi_selection: false,
                container: $('.container')[0],
                flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
                silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
                url: 'http://oss.aliyuncs.com',
                filters: {
                    mime_types: [ //只允许上传图片和zip,rar文件
                        {extensions: "txt,doc,docx,xls,xlsx,zip,rar,7z"}
                    ],
                    max_file_size: '100mb', //最大只能上传10mb的文件
                    prevent_duplicates: true //不允许选取重复文件
                },

                init: {
                    PostInit: function () {
                        $('.ossfile')[0].innerHTML = '';
                        document.getElementById('postfiles').onclick = function () {
                            set_upload_param(uploader, '', false, 1);
                            return false;
                        };
                    },
                    FilesAdded: function (up, files) {
                        plupload.each(files, function (file) {
                            if (up.files.length > 1) {
                                up.removeFile(up.files[0]);
                            }
                            $('.ossfile').css({"text-align": "left"});
                            $('#postfiles').html("开始上传");
                            $('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 4) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                                + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                                + '</div>';
                            $(".ossfile .file_close").click(function () {
                                up.removeFile(up.files[0]);
                                $('.ossfile')[0].innerHTML = '';
                                $('.ossfile').css({"text-align": "left"});
                                $('#selectfiles').html("重新上传");
                                $('#postfiles').html("开始上传");
                            });
                        });
                    },
                    BeforeUpload: function (up, file) {
                        check_object_radio();
                        set_upload_param(up, file.name, true, 1);
                    },
                    UploadProgress: function (up, file) {
                        var d = document.getElementById(file.id);
                        var prog = d.getElementsByTagName('div')[0];
                        var progBar = prog.getElementsByTagName('div')[0]
                        $('.ossfile').css({"text-align": "center"});
                        $('#postfiles').html("正在上传...");
                        progBar.style.width = file.percent + '%';
                        $(d).find("span.bfb").html("..." + file.percent + "%");
                        progBar.setAttribute('aria-valuenow', file.percent);
                    },
                    FileUploaded: function (up, file, info) {
                        if (info.status == 200) {
                            //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                            file1 = f1;
                            $('#selectfiles').html("重新上传");
                            $('#postfiles').html("上传成功");
                            $('.ossfile .progress-bar').css("width", "0%");
                            $('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
                            $('.ossfile').find("span.bfb").html("");
                            /*keyid 可以使用up.id o_1b902lpqd2701c1214ndahk14th1*/
                            /*是否下载 0未下载 1 */

                            /*数据调试完毕*/
                        } else {
                            document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                        }
                    },

                    Error: function (up, err) {
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
                        else {
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
            uploader.bind('FilesAdded', function (uploader, files) {
                for (var i = 0, len = files.length; i < len; i++) {
                    var file_name = files[i].name;
                    //构造html来更新UI
                    !function (i) {
                        previewImage(files[i], function (imgsrc) {
                            $('.file-list img').attr('src', imgsrc);
                        })
                    }(i);
                }
            });


        }
    },
    error: function (msg) {
        console.log(msg);
        $(".loading_cover").hide();
    }
});
