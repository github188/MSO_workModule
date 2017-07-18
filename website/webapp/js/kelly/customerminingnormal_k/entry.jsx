require('./more.css');


var Yewu = React.createClass({
    getInitialState: function() {
        return {
            serviceType: ["", "销售线索挖掘", "数据筛选", "人工客服"],
            data: null
        }
    },
    componentDidUpdate: function() {
        if ($(".jsms-title").text() == "查重后质检") {
            $(".jsms-text").text("与甲方数据查重后进行录音的质量检验");
        }
        if ($(".jsms-title").text() == "回访电话接通数") {
            $(".jsms-text").text("甲方回访后的接通数量，剔除无效与未接通数（>4次）");
        }
        if ($(".jsms-title").text() == "数据条目") {
            $(".jsms-text").text("按实际提交数据条目数乘以单价进行结算");
        }
        if ($(".jsms-title").text() == "按提交线索数量结算") {
            $(".jsms-text").text("按提交线索数量结算");
        }
    },
    render: function() {
        if (isNull(this.state.data)) {
            return (
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
                            <div className="bubble jsms-text" style={{
                    "width": "258px"
                }}>与甲方数据查重后进行录音的质量检验</div>
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
                        <span>{isNull(this.state.data.servicetype) ? "暂无" : this.state.serviceType[this.state.data.servicetype]}</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                    </td>
                </tr>
                <tr className="hide">
                    <td>结算模式:</td>
                    <td>
                        <span
            className="jsms-title">{isNull(this.state.data.paymentstandard) ? "暂无" : this.state.data.paymentstandard}</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble jsms-text" style={{
                "width": "258px"
            }}>与甲方数据查重后进行录音的质量检验</div>
                    </td>
                </tr>
            </table>
        )
    }
});


var Hangy = React.createClass({
    getInitialState: function() {
        return {
            data: null
        }
    },
    componentDidUpdate: function() {},
    render: function() {
        if (isNull(this.state.data)) {
            return (
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


        return (
            <table>
                <tr>
                    <td>行<span className="zw"></span>业:</td>
                    <td><span>教育培训</span></td>
                </tr>
                <tr>
                    <td>行业细分:</td>
                    <td>
                        <span>{isNull(this.state.data.demandname) ? "暂无" : this.state.data.demandname.substr(this.state.data.demandname.lastIndexOf("-") * 1 + 1)}</span>
                    </td>
                </tr>
            </table>
        )
    }
});


var Mbkh = React.createClass({
    getInitialState: function() {
        return {
            data: null
        }
    },
    render: function() {
        if (isNull(this.state.data)) {
            return (
                <table>
                    <tr>
                        <td>目标人群:</td>
                        <td><span>暂无</span></td>
                    </tr>
                </table>
            )
        }
        return (
            <table>
                <tr>
                    <td>目标人群:</td>
                    <td>
                        <span>{isNull(this.state.data.beginage) ? "暂无" : (this.state.data.beginage + '-' + this.state.data.endage + '岁')}</span>
                    </td>
                </tr>
            </table>
        )
    }
});

var Jbxx = React.createClass({
    getInitialState: function() {
        return {
            data: null
        }
    },
    render: function() {
        if (isNull(this.state.data)) {
            return (
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
        return (
            <table>
                <tr>
                    <td>需求名称:</td>
                    <td><span>{isNull(this.state.data.demandname) ? "暂无" : this.state.data.demandname}</span></td>
                </tr>
                <tr>
                    <td>需求描述:</td>
                    <td>
                        <span>{isNull(this.state.data.demanddescription) ? "暂无" : this.state.data.demanddescription}</span>
                    </td>
                </tr>
                <tr>
                    <td style={{
                "vertical-align": "top",
                "line-height": "30px"
            }}>产品介绍:</td>
                    <td>
                        {isNull(this.state.data.path) ? "暂无" : <p>产品介绍附件:<a
            href={isNull(this.state.data.path) ? "javascript:" : (domainDownShort + this.state.data.path)}
            style={{
                "color": "#1aa0ff"
            }}>下载>></a></p>}
                    </td>
                </tr>
                <tr>
                    <td>开始日期:</td>
                    <td><span>{isNull(this.state.data.begintime) ? "暂无" : this.state.data.begintime}</span></td>
                </tr>
                <tr>
                    <td>结束日期:</td>
                    <td><span>{isNull(this.state.data.endtime) ? "暂无" : this.state.data.endtime}</span></td>
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

var Fbfb = React.createClass({
    getInitialState: function() {
        return {
            data: null
        }
    },
    render: function() {
        if (isNull(this.state.data) || isNull(this.state.data.areaanddemandquantity)) {
            return false;
        }

        // var data = this.state.data.areaanddemandquantity.replace(/},/g, "}|").slice(1, -1).split("|");
        // var arr = [];
        // for (let i = 0; i < data.length; i++) {
        //     //组装对象
        //     var obj = {};
        //     var objArr = data[i].slice(1, -1).split(",");
        //     for (let i = 0; i < objArr.length; i++) {
        //         obj[objArr[i].split(":")[0].toString().replace(/'/g,"")] = objArr[i].split(":")[1].toString().replace(/'/g,"")
        //     }
        //     arr.push(obj)
        // }

        return (<div className="area_table">
                {JSON.parse(this.state.data.areaanddemandquantity).map(function(result, index) {
                return (
                    <div className="areaList">
                            <div className="input"><label>目标区域：</label>{result.target}</div>
                            <div className="input"><label>发布数量：</label><span className="size">{result.releasenum}</span>条
                            </div>
                            <div className="input"><label>单价：</label><span className="size">{result.price}</span>元
                            </div>
                            <span className="green">总价：<span className="size">{result.totalprice}</span>元</span>
                        </div>
                )
            })
            }
            </div>
        )
    }
});

//Todo 标签类

var Fj = React.createClass({
    getInitialState: function() {
        return {
            data: null
        }
    },
    render:function() {
        if (isNull(this.state.data)) {
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
        return (
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
                        {(this.state.data.chargeTag && JSON.parse(this.state.data.chargeTag).length > 0) ? (
                <ul className="tag3">{JSON.parse(this.state.data.chargeTag).map((v, k) => (
                    <li key={k}>{v.tagname}</li>))}</ul>) : <p>暂无</p>}
                    </div>
                </div>
                <div className="box">
                    <h4>自定义标签</h4>
                    <div className="tag-free">
                        {this.state.data.customlabel ? (
                <ul className="tag3">{JSON.parse(this.state.data.customlabel).map((v, k) => (
                    <li key={k}>{v.tagname}</li>))}</ul>) : <p>暂无</p>}
                    </div>
                </div>
            </div>
        )
    }
})


//免费定制标签
var FreeTag = React.createClass({
    getInitialState: function() {
        return {
            config: []
        }
    },
    componentDidMount: function() {
        var config = this.state.config;
        $.ajax({
            type: "GET",
            url: domain + "/baseLabel/1",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            cache: false,
            success: function(result) {
                if (result.code == "N") {
                    $(".loading_cover").hide();
                    return false;
                } else if (result.code == "N001") {
                    sessionStorage.clear();
                    window.location.href = "/login.html";
                }
                this.setState({
                    config: result.lableList
                });
            //console.log(result);
            }.bind(this),
            error: function() {
                console.log("error")
            }
        });
    },
    render: function() {
        var config = this.state.config; //初始化数组
        if (config == "" || config == null) {
            return (<p>暂无</p>);
        }
        var drafts = config.map(function(draft, index) {
            return (<li key={index}>{draft.labelName}</li>);
        }
        );
        return (
            <ul className="tag1">{drafts}</ul>
        );
    }
});


var State = React.createClass({
    getInitialState: function() {
        return {
            data: null,
            calcullationDetailHtml: '',
        }
    },
    setCopy: function() {
        sessionStorage.setItem("copy", "normal");
    },
    createcalcullationDetailHtml: function() {
        if (this.props.data) {
            var fdstate = this.props.data.fdstate;

            var releasenum = isNull(this.props.data.releasenum) ? 0 : this.props.data.releasenum;
            var applicationnum = isNull(this.props.data.applicationnum) ? 0 : this.props.data.applicationnum;
            var finishnum = isNull(this.props.data.finishnum) ? 0 : this.props.data.finishnum;
            //  debugger;
            var orderpricetol = isNull(this.props.data.demandpricetol) ? 0 : this.props.data.demandpricetol;
            //debugger;
            var finlishScale = finishnum / ((releasenum == 0) ? 1 : releasenum);

            /*天数*/
            var date = new Date();
            var endtime = new Date(this.props.data.endtime);
            var diffday = Math.ceil(endtime.diff(date));

            var packageid = this.props.data.packageid;

            if (parseInt(diffday) < 0) {
                diffday = 0;
            }
            /*天数*/

            //demandid 在全局中
            if (fdstate == 1) {
                return (<div>
                        <div className="right" style={{
                        "margin-bottom": "20px"
                    }}>
                            <div className="title-explain">
                                距离项目结束还剩
                            </div>
                            <div className="context-explain package">
                                <div className="countdown">
                                    <span className="blue"><span className="size">{diffday}</span> <span
                    className="day">天</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="right" style={{
                        "margin-bottom": "20px",
                        "padding": "20px"
                    }}>
                            <p style={{
                        "margin": "15px 0px 27px 0px",
                        "color": "#999",
                        "text-align": "center"
                    }}>
                                该需求正在审核中，请耐心等待！</p>
                            <a href={"new_demand_copy_5.html#copy" + demandid} data-reactid=".6.1.1">
                                <button id="copyDemand" type="button" className="submit" onclick={this.setCopy}>复制需求
                                </button>
                            </a>
                            <a href="javascript:self.location=document.referrer;">
                                <button type="button" className="drafts" style={{
                        margin: 0,
                        display: "inline-block"
                    }}>
                                    返回上一页
                                </button>
                            </a>
                        </div>
                    </div>

                );
            }

            /*进行中*/
            if (fdstate == 2) {
                return (<div>
                    <div className="right" style={{
                        "margin-bottom": "20px"
                    }}>
                        <div className="title-explain">
                            距离项目结束还剩
                        </div>
                        <div className="context-explain package">
                            <div className="countdown">
                                <span className="blue"><span className="size">{diffday}</span> <span
                    className="day">天</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="title-explain">
                            <span style={{
                        "font-size": "16px",
                        "float": "left",
                        "margin-left": "20px"
                    }}>需求进度</span>
                      {/*      <a href="javascript:" className="progress_speed_show"
                    style={{
                        "color": "#fff",
                        "font-size": "14px",
                        "float": "right",
                        "margin-right": "10px"
                    }}>
                                查看进度详情>>
                            </a>
                            <a href="javascript:" className="progress_speed_show_new"
                    style={{
                        "color": "#fff",
                        "font-size": "14px",
                        "float": "right",
                        "margin-right": "10px"
                    }}>
                                查看进度详情>>
                            </a>*/}
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
                                        <td><span className="money" style={{
                        "float": "left"
                    }}><span>¥</span><span
                    className="size">{orderpricetol * finlishScale}</span></span></td>
                                    </tr>
                                </table>
                                <a href={"new_demand_copy_5.html#copy" + demandid} data-reactid=".6.1.1">
                                    <button id="copyDemand" type="button" className="submit" onclick={this.setCopy}>复制需求
                                    </button>
                                </a>
                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                    style={{
                        margin: 0,
                        display: "inline-block"
                    }}>返回上一页
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>


                </div>);
            }


            /*结算中*/
            //debugger;
            //orderpricetol
            if (fdstate == 3) {
                return (<div>

                    <div className="right">
                        <div className="title-explain">
                            <span style={{
                        "font-size": "16px",
                        "float": "left",
                        "margin-left": "20px"
                    }}>需求进度</span>
                  { /*         <a href="javascript:" className="progress_speed_show"
                    style={{
                        "color": "#fff",
                        "font-size": "14px",
                        "float": "right",
                        "margin-right": "10px"
                    }}>
                                查看进度详情>>
                            </a>
                            <a href="javascript:" className="progress_speed_show_new"
                    style={{
                        "color": "#fff",
                        "font-size": "14px",
                        "float": "right",
                        "margin-right": "10px"
                    }}>
                                查看进度详情>>
                            </a>*/}
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
                                        <td><span className="money" style={{
                        "float": "left"
                    }}><span>¥</span><span
                    className="size">{orderpricetol * finlishScale}</span></span></td>
                                    </tr>
                                </table>
                                <a href={"new_demand_copy_5.html#copy" + demandid} data-reactid=".6.1.1">
                                    <button id="copyDemand" type="button" className="submit" onclick={this.setCopy}>复制需求
                                    </button>
                                </a>
                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                    style={{
                        margin: 0,
                        display: "inline-block"
                    }}>返回上一页
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
                            <span style={{
                        "font-size": "16px",
                        "float": "left",
                        "margin-left": "20px"
                    }}>需求进度</span>
                   {/*<a href="javascript:" className="progress_speed_show" style={{
                        "color": "#fff",
                        "font-size": "14px",
                        "float": "right",
                        "margin-right": "10px"
                    }}>
                                查看进度详情>>
                            </a>
                            <a href="javascript:" className="progress_speed_show_new"
                    style={{
                        "color": "#fff",
                        "font-size": "14px",
                        "float": "right",
                        "margin-right": "10px"
                    }}>
                                查看进度详情>>
                            </a>*/}
                        </div>
                        <div className="context-explain package">
                            <div>
                                <table>
                                    <tr>
                                        <td style={{
                        'textAlign': 'center',
                        "color": "#fd5352"
                    }}>需求已完成！</td>
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
                                        <td><span className="money" style={{
                        "float": "left"
                    }}><span>¥</span><span
                    className="size">{orderpricetol * finlishScale}</span></span></td>
                                    </tr>
                                </table>

                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                    style={{
                        "width": "100%"
                    }}>返回上一页
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
                                        <td style={{
                        "vertical-align": "top"
                    }}><label>原因:</label></td>
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
                    style={{
                        "width": "100%"
                    }}>返回上一页
                                    </button>
                                </a>


                            </div>
                        </div>
                    </div>
                )
            }
        }

    },
    componentDidMount: function() {
        //debugger;
        this.setState({
            calcullationDetailHtml: this.createcalcullationDetailHtml(),
        });

        $(".progress_speed_show").live("click", function() {
            $(".progress_speed").show();
        });

        $(".progress_speed_show_new").live("click", function() {
            location.href = "customerreportdown.html" + location.hash;
        });

        $(".progress_speed .close,.progress_speed .button_close").live("click", function() {
            $(".progress_speed").hide();
        });
    },

    componentDidUpdate: function() {
        $(".progress").hover(function() {
            $(this).find(".bublle").show();
        }, function() {
            $(this).find(".bublle").hide();
        });
    },

    render: function() {
        return (
            <div>
                {this.state.calcullationDetailHtml}
            </div>
        );
    }
})




var Progress_speed = React.createClass({

    getInitialState: function() {
        return {
            data: null
        }
    },
    render: function() {
        if (isNull(this.state.data)) {
            return false
        }
        if (!isNull(this.state.data.demandProgressList)) {
            if (this.state.data.demandProgressList.length == 0) {
                return (
                    <div>
                        <div className="top"><span>需求进度详情</span><i className="close"></i></div>
                        <div className="main">
                        </div>
                        <div className="bottom">
                            <button type="button" className="button_close">确 定</button>
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <div className="top"><span>需求进度详情</span><i className="close"></i></div>
                    <div className="main">
                    </div>
                    <div className="bottom">
                        <button type="button" className="button_close">确 定</button>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="top"><span>需求进度详情</span><i className="close"></i></div>
                <div className="main">
                    {this.state.data.demandProgressList.map(function(result, index) {
                return (
                    <div className="demand_list">
                                <p className="demand_title">{result.targecity}</p>
                                <p className="demand_main"><span>单价：{result.orderprice}
                                    元</span><span>发布量：{result.releasenum} </span><span>完成量：{result.fishnum}</span><span>预计结算金额：<span
                    className="red">¥ <span
                    className="size">{result.orderpriceTol}</span></span></span></p>
                            </div>
                )
            })
            }
                </div>
                <div className="bottom">
                    <button type="button" className="button_close">确 定</button>
                </div>
            </div>
        )
    }
});

React.render(<Yewu/>, $("#new_demand div.demend_left .form_col1>.main")[0]);
React.render(<Hangy/>, $("#new_demand div.demend_left .form_col6>.main")[0]);
React.render(<Mbkh/>, $("#new_demand div.demend_left .form_col2>.main")[0]);
React.render(<Jbxx/>, $("#new_demand div.demend_left .form_col3>.main")[0]);
React.render(<Fbfb/>, $("#new_demand div.demend_left .form_col4>.main")[0]);
// React.render(<Fj/>, $("#new_demand div.demend_left .form_col5>.main")[0]);
React.render(<Progress_speed/>, $(".progress_speed")[0]);
$.ajax({
    type: "GET",
    url: `${domain137}/quality/demanddetail/${location.hash.slice(1)}`,
    dataType: "json",
    cache: false,
    success: function(result) {

        if (result.code == "N001") {
            //console.log(data.msg);
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
            var fj = Array.isArray(result.attachment) ? result.attachment : [];
            var obj = {};
            for (var i = 0; i < fj.length; i++) {
                if (fj[i].type == "5") {
                    obj.path = fj[i].path;
                }
            }

            obj = Object.assign({}, result.demand, obj);
            $(".loading_cover").hide();
            $(".title_select p").text(result.demand.demandname);
            React.render(<Yewu/>, $("#new_demand div.demend_left .form_col1>.main")[0], function() {
                this.setState({
                    data: result.demand
                })
            });
            React.render(<Hangy/>, $("#new_demand div.demend_left .form_col6>.main")[0], function() {
                this.setState({
                    data: result.demand
                })
            });
            React.render(<Mbkh/>, $("#new_demand div.demend_left .form_col2>.main")[0], function() {
                this.setState({
                    data: result.demand
                })
            });
            React.render(<Jbxx/>, $("#new_demand div.demend_left .form_col3>.main")[0], function() {
                this.setState({
                    data: obj
                })
            });
            React.render(<Fbfb/>, $("#new_demand div.demend_left .form_col4>.main")[0], function() {
                this.setState({
                    data: result.demand
                })
            });
            React.render(<Fj/>, $("#new_demand div.demend_left .form_col5>.main")[0], function() {
                this.setState({
                    data: result.demand
                })
            });
            React.render(<Progress_speed/>, $(".progress_speed")[0], function() {
                this.setState({
                    data: data.detail
                })
            });
            React.render(<State data={result.demand }/>, $("#new_demand div.demend_right")[0], function() {
                // console.log(data.detail,'===================================================');
                this.setState({
                    data: result.demand
                })
            });
        }
    },
    error: function(msg) {
        $(".loading_cover").hide();
    }
})
;


//fdstate(参数详解 );

/*进行中和审核中都是要显示天数样式的*/
var data = {
    //1:{name:''},
    1: {
        name: '审核中'
    },
    2: {
        name: '进行中'
    },
    3: {
        name: '结算中'
    },
    4: {
        name: '已完成'
    },
}


