require('./more.css');
var Yewu = React.createClass({
    getInitialState: function () {
        return {
            serviceType: ["", "销售线索挖掘", "数据筛选", "人工客服"],
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
        if ($(".jsms-title").text() == "按提交线索数量结算") {
            $(".jsms-text").text("按提交线索数量结算");
        }
    },
    render: function () {
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
                    <tr>
                        <td>行业:</td>
                        <td><span>暂无</span></td>
                    </tr>
                    <tr className="hide">
                        <td>结算模式:</td>
                        <td>
                            <span className="jsms-title">暂无</span>
                            <i className="bubble-hover">?</i>
                            <div className="bubble jsms-text" style={{"width": "258px"}}>与甲方数据查重后进行录音的质量检验</div>
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
                <tr>
                    <td>行业:</td>
                    <td><span>{isNull(this.state.data.industry) ? "暂无" : this.state.data.industry}</span></td>
                </tr>
                <tr className="hide">
                    <td>结算模式:</td>
                    <td>
                        <span
                            className="jsms-title">{isNull(this.state.data.paymentstandard) ? "暂无" : this.state.data.paymentstandard}</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble jsms-text" style={{"width": "258px"}}>暂无</div>
                    </td>
                </tr>
            </table>
        )
    }
});
var Mbkh = React.createClass({
    getInitialState: function () {
        return {
            data: null,
            targetChannel: ["", "电话营销", "网络营销", "地推推广"]
        }
    },
    render: function () {
        if (isNull(this.state.data)) {
            return (
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
            )
        }

        return (
            <table>
                <tr>
                    <td>目标人群:</td>
                    <td>
                        <span>{isNull(this.state.data.targethumen) ? "暂无" : this.state.data.targethumen}</span>
                    </td>
                </tr>
                <tr>
                    <td>对象年龄:</td>
                    <td>{isNull(this.state.data.beginage) && isNull(this.state.data.endage) ? "暂无" : this.state.data.beginage + "-" + this.state.data.endage + " 周岁"}</td>
                </tr>
                <tr>
                    <td>获客渠道:</td>
                    <td>{isNull(this.state.data.category2) ? "暂无" : this.state.targetChannel[this.state.data.category2]}</td>
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
                        <td style={{"vertical-align": "top", "line-height": "30px"}}>产品介绍:</td>
                        <td>暂无</td>
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
                        <td><span>暂无</span></td>
                    </tr>
                    <tr>
                        <td>负责人电话:</td>
                        <td><span>暂无</span></td>
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
                    <td>产品名称:</td>
                    <td><span>{isNull(this.state.data.productname) ? "暂无" : this.state.data.productname}</span></td>
                </tr>
                <tr>
                    <td style={{"vertical-align": "top", "line-height": "30px"}}>产品介绍:</td>
                    <td>
                        {isNull(this.state.data.demand) ? <p>暂无</p> : <p>{this.state.data.demand}</p>}
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
                    <td><span>{isNull(this.state.data.pleader) ? "暂无" : this.state.data.pleader}</span></td>
                </tr>
                <tr>
                    <td>负责人电话:</td>
                    <td>
                        <span>{isNull(this.state.data.pphone) ? "暂无" : this.state.data.pphone}</span>
                    </td>
                </tr>
            </table>
        )
    }
});
var Fbfb = React.createClass({
    getInitialState: function () {
        return {
            data: null
        }
    },
    render: function () {

        if (isNull(this.state.data) || isNull(this.state.data.areaanddemandquantity)) {
            return false;
        }

        return (
            <div className="area_table">
                {JSON.parse(this.state.data.areaanddemandquantity).map(function (result, index) {
                    return (
                        <div className="areaList" key={index}>
                            <div className="input"><label>目标区域:</label>{result.target}</div>
                            <div className="input"><label>发布数量:</label><span
                                className="size">{result.releasenum}</span>条
                            </div>
                            <div className="input"><label>单价:</label><span className="size">{result.price}</span>元
                            </div>
                            <span className="green">总价:<span className="size">{result.totalprice}</span>元</span>
                            <br/>
                            <div className="input">
                                <label>单价说明:</label><span>{isNull(result.remark) ? "暂无" : result.remark}</span>
                            </div>
                        </div>
                    )
                })
                }
            </div>
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
        return (<div className="fj_style">
            {(Array.isArray(this.state.data)&&this.state.data.length>0)?this.state.data.map((v, k) => (<div key={k}>
                <div>
                    <p>{this.state.type[v.type]}</p><p>1 份</p>
                    <p><a href={domainDownShort + v.path}>下载</a></p>
                </div>
            </div>)):<div>
                <div>
                    <p>销售线索文件:</p><p>无</p>
                </div>
                <div>
                    <p>话术文件:</p><p>无</p>
                </div>
                <div>
                    <p>目标客户名单:</p><p>无</p>
                </div>
            </div>}
        </div>)



    }
});

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            calcullationDetailHtml: '',
            copyDemandHtml: '',
            checkIndustryHtml: ''
        };
    }

    createcalcullationDetailHtml() {
        //debugger;
        if (this.props.data) {
            var fdstate = this.props.data.fdstate;
            var releasenum = isNull(this.props.data.releasenum) ? 0 : this.props.data.releasenum;//需求发布量
            var applicationnum = isNull(this.props.data.applicationnum) ? 0 : this.props.data.applicationnum;
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
                            <a href={"new_demand_copy_5.html#copy" + demandid} data-reactid=".6.1.1">
                                <button id="copyDemand" type="button" className="submit" onclick={this.setCopy}>复制需求
                                </button>
                            </a>
                            <a href="javascript:self.location=document.referrer;">
                                <button type="button" className="drafts" style={{margin: 0, display: "inline-block"}}>
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
                                            className="size">{(orderpricetol * finlishScale).toFixed(2)}</span></span></td>
                                    </tr>
                                </table>
                                <a href={"new_demand_copy_5.html#copy" + demandid} data-reactid=".6.1.1">
                                    <button id="copyDemand" type="button" className="submit" onclick={this.setCopy}>复制需求
                                    </button>
                                </a>
                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                                            style={{margin: 0, display: "inline-block"}}>返回上一页
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
                                            className="size">{(orderpricetol * finlishScale).toFixed(2)}</span></span></td>
                                    </tr>
                                </table>
                                <a href={"new_demand_copy_5.html#copy" + demandid} data-reactid=".6.1.1">
                                    <button id="copyDemand" type="button" className="submit" onclick={this.setCopy}>复制需求
                                    </button>
                                </a>
                                <a href="javascript:self.location=document.referrer;">
                                    <button type="button" className="drafts"
                                            style={{margin: 0, display: "inline-block"}}>返回上一页
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
                                            className="size">{(orderpricetol * finlishScale).toFixed(2)}</span></span></td>
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
        this.rootEl = $('.demend_right');
        $(".progress_speed_show").live("click", function () {
            $(".progress_speed").show();
        });
        $(".progress_speed .close,.progress_speed .button_close").live("click", function () {
            $(".progress_speed").hide();
        });
        this.copyDemandEvent();
    }

    componentDidUpdate() {
        $(".progress").hover(function () {
            $(this).find(".bublle").show();
        }, function () {
            $(this).find(".bublle").hide();
        });
    }

    copyDemandEvent() {
        this.rootEl.on('click', '#copyDemand', function () {

            this.setState({copyDemandHtml: this.copyDemand()});
            this.rootEl.find('.cover1').show();
            // console.log(this.state.copyDemandHtml);
        }.bind(this));

        this.rootEl.on('click', '.confirm', function (ev) {
            location.href = 'customer_new_demand.html';
        }.bind(this));

        this.rootEl.on('click', '.cancel', function (ev) {
            this.rootEl.find('.cover1').hide();
        }.bind(this));
        this.rootEl.on('click', '.close2', function (ev) {
            this.rootEl.find('.cover1').hide();
        }.bind(this));

    }

    copyDemand() {
        return (<div className="cover1">
            <div className="cover-box">
                <div className="title">
                    <span>提示</span>
                    <i className="close2">X</i>
                </div>
                <div className="context">
							<span>网站新的版本已经发布，发布需求流程已经变更，暂时无法使用复制需求功能，
							</span>
                    <a href="11111">点此从新发布需求</a>
                </div>
                <div className="bt-choose">
                    <button className="confirm bg_blue close2" type="button">确定</button>
                    <button className="cancel" type="button">取消</button>
                </div>
            </div>
        </div>);
    }

    checkIndustry(data) {
        switch (data.industry) {
            case ("汽车行业"):
                return (<a href={"new_demand_copy_2.html#" + demandid}>
                    <button id="copyDemand_1" type="button" className="submit hide">复制需求</button>
                </a>);
            case ("医美行业"):
                return (<a href={"new_demand_copy_2.html#" + demandid}>
                    <button id="copyDemand_1" type="button" className="submit hide">复制需求</button>
                </a>);
            case ("房地产"):
                return (<a href={"new_demand_copy_2.html#" + demandid}>
                    <button id="copyDemand_1" type="button" className="submit hide">复制需求</button>
                </a>);
            case ("电商平台"):
                return (<a href={"new_demand_copy_2.html#" + demandid}>
                    <button id="copyDemand_1" type="button" className="submit hide">复制需求</button>
                </a>);
            case ("金融"):
                return (<a href={"new_demand_copy_2.html#" + demandid}>
                    <button id="copyDemand_1" type="button" className="submit hide">复制需求</button>
                </a>);
            case ("教育培训"):
                return (<a href="javascript:;">
                    <button id="copyDemand" type="button" className="submit">复制需求</button>
                </a>);
        }

    }

    render() {
        if (this.state.data) {
            var fdstate = this.state.data.fdstate;

            var releasenum = isNull(this.state.data.releasenum) ? 0 : this.state.data.releasenum;//需求发布量
         //   var applicationnum = isNull(this.state.data.applicationnum) ? 0 : this.state.data.applicationnum;
            var finishnum = isNull(this.state.data.finishnum) ? 0 : this.state.data.finishnum;      //完成量
            //	debugger;
            var orderpricetol = isNull(this.state.data.paymentmoney) ? 0 : this.state.data.paymentmoney;
            //debugger;
            var finlishScale = finishnum / ((releasenum == 0) ? 1 : releasenum);

            /*天数*/
            var date = new Date();
            var endtime = new Date(this.state.data.endtime);
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
                                            className="size">{(orderpricetol * finlishScale).toFixed(2)}</span></span></td>
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


                </div>);
            }


            /*结算中*/
            //debugger;
            //orderpricetol
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
                                            className="size">{(orderpricetol * finlishScale).toFixed(2)}</span></span></td>
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
                                            className="size">{(orderpricetol * finlishScale).toFixed(2)}</span></span></td>
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
                                            <span>{isNull(this.state.data.remark) ? "暂无" : this.state.data.remark}</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>时间:</label></td>
                                        <td>
                                            <span>{isNull(this.state.data.updatetime) ? "暂无" : this.state.data.updatetime}</span>
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
        }else{
            return (<div></div>)
        }
    }
        /*
         if(isNull(this.state.data)){
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
         var checkIndustryHtml = this.checkIndustry(this.state.data);
         //debugger;
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
         //debugger;
         if(this.state.data.pause==1){
         return (
         <div className="right">
         {this.state.copyDemandHtml}
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
         {isNull(this.state.data.packageid)?checkIndustryHtml:""}
         <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
         </div>
         </div>
         </div>
         )
         }




         if(this.state.data.fdstate==1){
         return (
         <div>
         <div className="right" style={{"margin-bottom":"20px"}}>
         {this.state.copyDemandHtml}
         <div className="title-explain">距离项目结束还剩</div>
         <div className="context-explain package">
         <div className="countdown">
         <span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
         </div>
         </div>
         </div>
         <div className="right" style={{"margin-bottom":"20px","padding":"20px"}}>
         <p style={{"margin":"15px 0px 27px 0px","color":"#999","text-align":"center"}}>该需求正在审核中，请耐心等待！</p>
         {isNull(this.state.data.packageid)?checkIndustryHtml:""}
         <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
         </div>
         </div>
         )
         }else if(this.state.data.fdstate==4||this.state.data.fdstate==2){
         return (
         <div>
         <div className="right" style={{"margin-bottom":"20px"}}>
         {this.state.copyDemandHtml}
         <div className="title-explain">距离项目结束还剩</div>
         <div className="context-explain package">
         <div className="countdown">
         <span className="blue"><span className="size">{diffday}</span>&emsp;<span className="day">天</span></span>
         </div>
         </div>
         </div>
         <div className="right">
         <div className="title-explain"><span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>需求进度</span><a href="javascript:" className="progress_speed_show" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>查看进度详情>></a></div>
         <div className="context-explain package">
         <div>
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
         <td><label>总金额:</label></td>
         </tr>
         <tr>
         <td><span className="money"  style={{"float":"left"}}><span>¥</span><span className="size">{orderpricetol}</span></span></td>
         </tr>
         </table>
         {isNull(this.state.data.packageid)?checkIndustryHtml:""}
         <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
         </div>
         </div>
         </div>
         </div>
         )
         }else if(this.state.data.fdstate==3){
         return (
         <div className="right">
         {this.state.copyDemandHtml}
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
         {isNull(this.state.data.packageid)?checkIndustryHtml:""}
         <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
         </div>
         </div>
         </div>
         )
         }else if(this.state.data.fdstate==5){
         return (
         <div className="right">
         {this.state.copyDemandHtml}
         <div className="title-explain"><span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>结算详情</span><a href="javascript:"className="progress_speed_show"  style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>查看进度详情>></a></div>
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
         <td><span className="money" style={{"float":"left"}}><span>¥</span><span className="size">{orderpricetol}</span></span></td>
         </tr>
         </table>
         <hr/>
         <p style={{"padding":"20px 0px"}}><label>发票状态:</label><span>发票未寄出</span></p>
         {isNull(this.state.data.packageid)?checkIndustryHtml:""}
         <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
         </div>
         </div>
         )
         }else if(this.state.data.jdstate=6){
         return (
         <div className="right" style={{"margin-bottom":"20px"}}>
         {this.state.copyDemandHtml}
         <div className="title-explain"><span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>需求进度</span><a href="javascript:" className="progress_speed_show" style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>查看进度详情>></a></div>
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
         {isNull(this.state.data.packageid)?checkIndustryHtml:""}
         <a href="javascript:self.location=document.referrer;"><button type="button" className="drafts" style={isNull(this.state.data.packageid)?{}:{"width":"100%"}}>返回上一页</button></a>
         </div>
         </div>
         </div>
         )
         }else{
         return false;
         }
         */
}

var Progress_speed = React.createClass({

    getInitialState: function () {
        return {
            data: null
        }
    },
    render: function () {
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
                            <button type="button" className="button_close">确&nbsp;定</button>
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
                        <button type="button" className="button_close">确&nbsp;定</button>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="top"><span>需求进度详情</span><i className="close"></i></div>
                <div className="main">
                    {this.state.data.demandProgressList.map(function (result, index) {
                        return (
                            <div className="demand_list">
                                <p className="demand_title">{result.targecity}</p>
                                <p className="demand_main"><span>单价：{result.orderprice}
                                    元</span><span>发布量：{result.releasenum} </span><span>竞拍量：{result.applicationnum}</span><span>完成量：{result.fishnum}</span><span>预计结算金额：<span
                                    className="red">¥&nbsp;<span
                                    className="size">{result.orderpriceTol.toFixed(2)}</span></span></span></p>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="bottom">
                    <button type="button" className="button_close">确&nbsp;定</button>
                </div>
            </div>
        )
    }
});

React.render(<Yewu/>, $("#new_demand div.demend_left .form_col1>.main")[0]);
React.render(<Mbkh/>, $("#new_demand div.demend_left .form_col2>.main")[0]);
React.render(<Jbxx/>, $("#new_demand div.demend_left .form_col3>.main")[0]);
React.render(<Fbfb/>, $("#new_demand div.demend_left .form_col4>.main")[0]);
React.render(<Fj/>, $("#new_demand div.demend_left .form_col5>.main")[0]);
React.render(<Progress_speed/>, $(".progress_speed")[0]);
React.render(<State/>,$("#new_demand div.demend_right")[0],function(){$(".loading_cover").hide();});

$.ajax({
    type: "GET",
    url: `${domain137}/quality/demanddetail/${location.hash.slice(1)}`,
    success: function (result) {
        if (result.code == "N001") {
            //从新登陆
            sessionStorage.clear();
            $(".loading_cover").hide();
            window.location.href = "/login.html";
            return false;
        }
        if (result.code == "N") {
            //没查到信息
            $(".loading_cover").hide();
            return false;
        }
        if (result.code == "0") {
            $(".loading_cover").hide();
            $(".title_select p").text(result.demand.demandname);

            React.render(<Yewu/>, $("#new_demand div.demend_left .form_col1>.main")[0], function () {
                this.setState({data: result.demand})
            });
            React.render(<Mbkh/>, $("#new_demand div.demend_left .form_col2>.main")[0], function () {
                this.setState({data: result.demand})
            });
            React.render(<Jbxx/>, $("#new_demand div.demend_left .form_col3>.main")[0], function () {
                this.setState({data: result.demand})
            });
            React.render(<Fbfb/>, $("#new_demand div.demend_left .form_col4>.main")[0], function () {
                this.setState({data: result.demand})
            });
            React.render(<Fj/>, $("#new_demand div.demend_left .form_col5>.main")[0], function () {
                this.setState({data: result.attachment})
            });
            React.render(<Progress_speed/>, $(".progress_speed")[0], function () {
                this.setState({data: result.demand})
            });
            React.render(<State/>, $("#new_demand div.demend_right")[0], function () {
                this.setState({data: result.demand})
            });
        }
    },
    error: function (msg) {
        console.log(msg);
        $(".loading_cover").hide();
    }
});