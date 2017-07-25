

function addMark(str) {
    str += '';
    //\b 匹配一个单词的边界 
    //? 匹配前面元字符0次或1次
    var re = /(?=(?!\b)(\d{3})+$)/g;
    return str.replace(re, ',');
}
class Echarts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            releasenum: [],
            selectLineData: '',
            selectLineHtml: [],
            requireData: {},
            censusday: [],
            chagneModlue: true,
            checkReleasenum: 0,
            paymentmoneySum: 0,
            /*完成量*/
            paymentnumSum: 0,
            noFinishSum: 0,
            nofinishScale: 0,
            finishScale: 0,
        };

    //https://www.mshuoke.com/1_4_home/201701060704116351/demandReport?_=1489821486569
    ///publicApi/huoke/statistics/{year}/{month}
    //http://192.168.2.33:8091/gxcms/publicApi/huoke/statistics/
    //https://www.mshuoke.com/1_4_home/201701060704116351/demandReport?_=1489977048862
    //地图数据接口
    }
    componentDidMount() {
        this.getEchartsData(function(data) {
            //debugger;
            var arr = [];

            var redemandList = data.data;
            /*第一次加载图表*/
            if (!redemandList[0]) {
                this.setState({
                    chagneModlue: false
                });
                this.defaultGoToInfo();
                return;
            }
            this.changeDemandReport(redemandList[0].id);
            this.setState({
                requireData: redemandList[0],
                selectLineData: redemandList
            });
            this.setState({
                selectLineHtml: this.createSelectLineHtml()
            });

            $(".ui-select-line").selectWidget({
                change: function(value) {

                    var data = JSON.parse(value);
                    this.setState({
                        requireData: data,
                    });
                    this.changeDemandReport(data.id);

                    return value;
                }.bind(this),
                effect: "slide",
                keyControl: false,
                speed: 60,
                scrollHeight: 167,
            });
        }.bind(this));

    }
    /*
    根据id获取图表数据
    */
    changeDemandReport(id) {
        this.queryDemandReport(id, function(result) {
            var arr = [];
            var dayArr = [];
            var reportDemandList = result.data;
            [reportDemandList].map(function(data, index) {
                arr.push(data.releasenum);
                dayArr.push(data.createTime.substr(data.createTime.length - 5)); //时间
            });

            var releasenumSum = result.data.unfinishNum * 1 + result.data.finishNum * 1 > 0 ? result.data.unfinishNum * 1 + result.data.finishNum * 1 : 1;
            this.setState({
                releasenum: arr,
                censusday: dayArr,
                checkReleasenum: result.data.qualityNum,
                settlementTotalPrice: addMark(result.data.settlementTotalPrice),
                noFinishSum: result.data.unfinishNum, //未完成量
                paymentnumSum: result.data.finishNum,
                nofinishScale: result.data.unfinishNum / releasenumSum,
                finishScale: result.data.finishNum / releasenumSum

            }, function() {
                if (this.state.finishScale < 0.01) {
                    this.setState({
                        finishScale: 0,
                        nofinishScale: 100
                    });
                } else {
                    this.setState({
                        finishScale: this.state.finishScale.toFixed(2),
                        nofinishScale: this.state.nofinishScale.toFixed(2)
                    });
                }

            });
        }.bind(this));
    }
    componentDidUpdate() {
        if (this.state.chagneModlue) {
            this.initEcharts();
        }

    }
    //GET /quality/ups/{jfuid}/qualityTest/{demandid} 获取平台质检量
    // getqualityTest(demandid, callBack) {

    //     callBack = callBack || function() {};
    //     var jfuid = $.sessionStorage('jfuid');

    //     var url = domain137 + "/quality/ups/" + jfuid + "/qualityTest/" + demandid;
    //     //var url = domain + "/ups/"+jfuid+"/qualityTest";

    //     ///ups/{jfuid}/qualityTest
    //     $.when($.ajax({
    //         type: 'get',
    //         contentType: 'application/json',
    //         url: url,
    //     })).then(function(data) {
    //         // console.log(data,5555555555)
    //         if (data.msg == "success") {
    //             callBack(data.data);
    //         } else {
    //             //alert('获取数据失败了');
    //         }
    //     }).fail(function(data) {
    //         //alert('获取数据失败了');
    //     });

    // }
    /*
        获取下拉列表数据
    */
    getEchartsData(callBack) {
        callBack = callBack || function() {};
        var jfuid = $.sessionStorage('jfuid');

        // var url = domain + "/1_4_home/"+jfuid+"/getHead";
        //var url = domain + "/ups/"+jfuid+"/qualityTest";
        var url = `${domain137}/quality/demandnames?jfuid=${jfuid}`

        ///ups/{jfuid}/qualityTest
        $.when($.ajax({
            type: 'get',
            // contentType:'application/json',
            url: url,
        })).then(function(data) {
            if (data.code == "0") {
                callBack(data);
            } else {
                //alert('获取数据失败了');
            }
        }).fail(function(data) {
            //alert('获取数据失败了');
        });
    }
    queryDemandReport(id, callBack) {
        var jfuid = $.sessionStorage('jfuid');
        // var url = domain + "/1_4_home/"+id+"/demandReport";
        var url = `${domain137}/quality/demandcount?jfuid=${jfuid}&id=${id}`
        callBack = callBack || function() {}
        $.when($.ajax({
            type: 'get',
            // contentType:'application/json',
            url: url,
        })).then(function(data) {
            if (data.code == "0") {
                callBack(data);
            } else {
                //alert('获取数据失败了');
            }
        }).fail(function(data) {
            //alert('获取数据失败了');
        });
    }
    initEcharts() {
        var myChartR = echarts.init(document.getElementById("requireBox"));
        var app = {};
        app.title = '环形图';
        var optionR = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#69b6fc', '#ffc959'],
            /*
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            */
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },

                    data: [
                        {
                            value: this.state.paymentnumSum,
                            name: '完成量'
                        },

                        {
                            value: this.state.noFinishSum,
                            name: '未完成量'
                        }
                    ]
                }
            ]
        };
        myChartR.setOption(optionR);


        var myChart = echarts.init($(".my-needs-tab")[0]);
        var option = {
            color: ['#d3fae8', '#2f4554', '#61a0a8'],
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: this.state.censusday //   日期时间arr
                }
            ],
            yAxis: [
                {
                    type: 'value',
                }
            ],
            series: [

                {
                    name: '平台质检量',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            }
                        }
                    },
                    data: [this.state.checkReleasenum] //质检量
                },
            // {
            //  name:'提交量',
            //  type:'line',
            //  smooth:true,
            //  itemStyle: {normal: {areaStyle: {type: 'default'}}},
            //  data:[this.state.requireData.fishnum]
            // },
            ]
        };
        // console.log(this.state.requireData.fishnum+'=======');
        myChart.setOption(option);
    }

    createSelectLineHtml() {
        var selectLineData = this.state.selectLineData;
        if (selectLineData) {
            return selectLineData.map(function(data, index) {
                /*当数据一天的时候*/
                return (<option value={JSON.stringify(data)}>{data.demandName}</option>);
            }.bind(this));
        }
    }
    defaultGoToInfo() {
        $('.default-send a').click(function() {
            if (sessionStorage.getItem("companyInfo") == "4") {
                // console.log(domain + '/html/customerNewDemand.html')
                location.href = domain + 'html/customer_new_demand.html';
            //customerNewDemand.html
            } else {
                $(".cover").show();
            }
        });
    }
    render() {
        return (<div className="echarts my_needs">
                
                        <div className="echartstitle">
                            <div className="requirearts"></div>
                            <div className="require">我的需求统计</div>
                        </div>
                        
                        
                        
                        {this.state.chagneModlue ? (<div className="rectangle-box">
                            <div className="rectangle">
                        
                                <div className="army">

                                {this.state.selectLineHtml.length ?

                (<select className="ui-select-line">
                                        {this.state.selectLineHtml}
                                    </select>) : (<div style={{float:"left",width:200,height:40,lineHeight:"40px"}}>没有数据</div>)}
                                    <div className="requireTitle">
                                        <ul>
                                            <li><label>平台质检量:</label><span>{this.state.checkReleasenum}条</span></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                        
                        
                                <ul className="unit">
                                    <li><span></span><label>平台质检量</label></li>
                                    <li className="last">单位：条</li>
                                </ul>
                                <div className="my-needs-tab" style={{
                position: "relative",
                overflow: "hidden",
                width: "866px",
                height: "422px",
                cursor: "default"
            }}>
                                </div>
                            </div>
{ /*--------------------------------------------------------右侧获客费用------------------------------------------------------------------*/ }
                        <div className="round">
                    <div className="spentPrice">
                        <span>获客费用</span>
                        <ul className="money">
                            <li>￥</li>
                            <li>{this.state.paymentmoneySum}</li>
                        </ul>
                    </div>
                    
                    
                    <div className="finished">
                        <span className="ftitle">需求完成情况</span>
                        <div id="requireBox" style={{
                width: '300px',
                height: '180px'
            }}></div>
                        <ul className="finish">
                            <li className="first"></li>
                            <li className="last">完成量：{this.state.paymentnumSum + ' (' + this.state.finishScale + ')%'}</li>
                        </ul>
                        <ul className="unfinish">
                            <li className="first"></li>
                            <li className="last">未完成量：{this.state.noFinishSum + ' (' + this.state.nofinishScale + ')%'}</li>
                        </ul>
                    </div>
                </div>
{ /*--------------------------------------------右侧获客费用------------------------------------------------------------------*/ }



                            { /*<Round />*/ }
                        </div>) :
                (<div className="rectangle-null">
                            <img src="/images/public/null.png" />
                            <div className="default-send">
                                <span>你暂未发布需求，</span>
                                <a href="javascript:;">点此立即发布获客需求！</a>
                            </div>
                        </div>)}
                            
                </div>
        );
    }
}
export default Echarts;


class Round extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentmoneySum: 0,
            /*完成量*/
            paymentnumSum: 0,
            noFinishSum: 0,
            nofinishScale: 0,
            finishScale: 0,
        }

    }
    componentDidMount() {
        this.getEchartsData(function(data) {
            if (data.data) {
                if (data.data.paymentmoneySum) {
                    var paymentmoneySum = data.data.paymentmoneySum;
                    this.setState({
                        paymentmoneySum: addMark(paymentmoneySum),
                        noFinishSum: data.data.noFinishSum,
                        paymentnumSum: data.data.paymentnumSum,
                        nofinishScale: data.data.noFinishSum / data.data.releasenumSum,
                        finishScale: data.data.paymentnumSum / data.data.releasenumSum
                    });

                    if (this.state.finishScale < 0.01) {
                        this.setState({
                            finishScale: 0,
                            nofinishScale: 100
                        });
                    } else {
                        this.setState({
                            finishScale: this.state.finishScale.toFixed(2),
                            nofinishScale: this.state.nofinishScale.toFixed(2)
                        });
                    }
                }
            }
            /*
                noFinishSum:439514
                paymentmoneySum:10370
                //完成量
                paymentnumSum:3333
                paytime:""
                releasenumSum:442847
            */
            this.initEcharts();
            this.initEchartsR();

        }.bind(this));
    }
    initEchartsR() {
        var myChart = echarts.init(document.getElementById("requireBox"));
        var app = {};
        app.title = '环形图';

        var optionR = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color: ['#69b6fc', '#ffc959'],
            /*
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            */
            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '14',
                                fontWeight: 'normal'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },

                    data: [
                        {
                            value: this.state.paymentnumSum,
                            name: '完成量'
                        },

                        {
                            value: this.state.noFinishSum,
                            name: '未完成量'
                        }
                    ]
                }
            ]
        };


        myChart.setOption(optionR);
    }

    getEchartsData(callBack) {
        //192.168.2.127:8099/myDemandSum/{jfuid}
        //https://back.mshuoke.com/publicApi/huoke/statistics/user/55/2016/01";
        //year=?&month=?
        var jfuid = $.sessionStorage('jfuid');
        var url = domain + "/myDemandSum/" + jfuid;
        callBack = callBack || function() {};

        $.when($.ajax({
            type: 'get',
            contentType: 'application/json',
            url: url,
        })).then(function(data) {
            if (data.code == 'Y') {
                callBack(data);
            }

        }).fail(function(data) {
            //alert('获取数据失败！');
        });
    }
    render() {
        return (<div className="round">
                    <div className="spentPrice">
                        <span>获客费用</span>
                        <ul className="money">
                            <li>￥</li>
                            <li>{this.state.paymentmoneySum}</li>
                        </ul>
                    </div>
                    
                    
                    <div className="finished">
                        <span className="ftitle">需求完成情况</span>
                        <div id="requireBox" style={{
                width: '300px',
                height: '180px'
            }}></div>
                        <ul className="finish">
                            <li className="first"></li>
                            <li className="last">完成量：{this.state.paymentnumSum + '(' + this.state.finishScale + ')%'}</li>
                        </ul>
                        <ul className="unfinish">
                            <li className="first"></li>
                            <li className="last">未完成量：{this.state.noFinishSum + '(' + this.state.nofinishScale + ')%'}</li>
                        </ul>
                    </div>
                </div>
        );
    }
}