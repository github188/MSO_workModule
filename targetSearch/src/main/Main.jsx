import React, {Component} from "react";
import {Spin} from "antd";
import {render} from "react-dom";
import "./style.css";
import cityLocation from "../util/cityLocation";
import xwtzSjzl_data  from "../util/xwtz_sjzl-datas";
var root = document.getElementById("main");
/**
 * 转换数据格式 {}=>[{name:"",value:""}]
 * @param obj
 * @returns {Array}
 */
function transform(obj) {
    var arr = [];
    for (var key in obj) {
        var newObj = {};
        newObj.name = key;
        newObj.value = obj[key];
        arr.push(newObj);
    }
    return arr;
}
/**
 * 初始化echarts对象
 * @param id
 */
function init(id) {
    return echarts.init(document.getElementById(id))
}

/**
 * 获取一组随机数，第一个数最大，其他随机
 * @param arr  对应数组
 * @returns {Array}
 */
function getRandom(arr) {
    //生成随机数
    var result = [], max, f = false;
    for (var i = 0; i < arr.length; i++) {
        result.push(Math.random());
    }
    max = result[0];
    //第一个数字最大
    for (var j = 0; j < result.length; j++) {
        if (j === 0) {
            continue;
        }
        if (result[j] > max) {
            f = true;
            max = result[j];
        }
    }
    if (f) {
        result.splice(result.indexOf(max), 1);
        result.unshift(max);
    }
    return result;
}
/**
 *
 * @param title二级title
 */
function getOption1(title) {
    var obj = {}, arr = [], values;
    values = xwtzSjzl_data[title] ? xwtzSjzl_data[title].XWTZ : []
    obj.value = getRandom(values);
    for (var i = 0; i < values.length; i++) {
        var item = {};
        item.max = 1;
        item.name = values[i];
        arr.push(item);
    }
    obj.indicator = arr;
    obj.loading = false;
    return obj;
}

function getOption5(title) {
    var obj = {};
    obj.shiji = xwtzSjzl_data[title] ? transform(xwtzSjzl_data[title].SJZL.shiji) : [];
    obj.yuqi = xwtzSjzl_data[title] ? transform(xwtzSjzl_data[title].SJZL.yuqi) : [];
    obj.loading = false
    return obj;
}

class Main extends Component {
    constructor(...prop) {
        super(...prop)
        this.state = {
            aa: [12, 34],
            total: 0,
            industryinfo: "",
            op1: {
                loading: true,
                indicator: [], value: []
            },
            op2: {
                loading: true,
                type: [],
                data: []
            },
            op3: {
                loading: true,
                data: []
            },
            op4: {
                loading: true,
                inner: [], outer: []
            },
            op5: {
                loading: true,

                shiji: [],
                yuqi: []
            },
            op6: {
                loading: true, data: []
            }
        }
    }

    componentDidMount() {
        var __this = this;
        setTimeout(function () {
            __this.setState({aa: [...__this.state.aa, 23, 456]})
        }, 2000)
        var _this = this,
            search,
            sendData,
            option1,
            option2,
            option3,
            option4,
            option5,
            option6,
            myChart1,
            myChart2,
            myChart3,
            myChart4,
            myChart5,
            myChart6;
        myChart1 = init('div1');
        myChart2 = init('div2');
        myChart3 = init('div3');
        myChart4 = init('div4');
        myChart5 = init('div5');
        myChart6 = init('div6');

        var geoCoordMap = cityLocation;//地理位置信息
        function convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        //更新数据
        function update() {
            option1 = {
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                title: {
                    top: "center",
                    left: "center",
                    text: "学习意向",
                    textStyle: {
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: 14,
                        color: "#333333"
                    }
                },
                radar: {
                    // shape: 'circle',

                    indicator: _this.state.op1.indicator,
                    // [{name: '英语辅导', max: 1},
                    // {name: '出国留学', max: 1},
                    // {name: '艺术培训', max: 1},
                    // {name: '中小学教育', max: 1},
                    // {name: '幼儿早教', max: 1},
                    // {name: '学科教育', max: 1}]

                    name: {
                        textStyle: {
                            color: "#666666",
                            fontSize: 14
                        }
                    },
                    radius: 132
                },
                series: [{
                    // name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    data: [
                        {
                            value: _this.state.op1.value,
                            name: '行为特征',

                            lineStyle: {
                                normal: {
                                    color: "#91D230"
                                }
                            },
                            areaStyle: {
                                normal: {
                                    opacity: 0.5,
                                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                        {
                                            color: '#91D230',
                                            offset: 0
                                        }
                                    ])
                                }
                            }
                        }
                    ]
                }]
            };
            option2 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',//距离左边位置
                    right: '4%',//距离右边位置
                    bottom: '12%',//距离底部位置
                    top: "6%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: _this.state.op2.type,
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        min: 0,
                        max: 100,
                        axisLabel: {
                            formatter: "{value}%"
                        }
                    }
                ],
                series: [
                    {
//                name: '直接访问',
                        type: 'bar',
                        barWidth: '50%',
                        data: _this.state.op2.data,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#3795D2', '#75CAF1', '#3795D2', '#75CAF1', '#3795D2'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }

                    }
                ]
            };
            option3 = {
                bmap: {
                    center: [115, 35],
                    zoom: 6,
                    roam: true,
                    mapStyle: {
                        styleJson: [{
                            'featureType': 'water',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'land',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#f3f3f3'
                            }
                        }, {
                            'featureType': 'railway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fdfdfd'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'poi',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'green',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'subway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'manmade',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'local',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'boundary',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'building',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'label',
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'color': '#999999'
                            }
                        }]
                    }
                },
                series: [
                    {

                        name: '',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: convertData(_this.state.op3.data),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#3795D2'
                            }
                        }
                    },
                    {
                        name: '',
                        type: 'effectScatter',
                        coordinateSystem: 'bmap',
                        data: convertData(_this.state.op3.data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#3795D2',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            };
            option4 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                series: [
                    {
                        name: '性别',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = ["#9CDFF9", "#F9B9DB"];
                                    return colorList[params.dataIndex]
                                }
                            }
                        },
                        data: _this.state.op4.inner

                    },
                    {
                        name: '年龄',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        data: _this.state.op4.outer,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#bccc30', '#c980b8', '#f9cc42', '#40b4e8', '#f99a14'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            option5 = {

                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '实际',
                        type: 'funnel',
                        left: 'center',
                        top: '15%',
                        width: '70%',
                        maxSize: '80%',
                        label: {
                            normal: {
                                position: 'inside',
                                formatter: '{c}%',
                                textStyle: {
                                    color: '#333333'
                                }
                            },
                            emphasis: {
                                position: 'inside',
                                formatter: '{b}实际: {c}%'
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.5,
                                borderColor: '#fff',
                                borderWidth: 1,
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#3796d2', '#40b4e8', '#9be0f8'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        },
                        data: _this.state.op5.shiji
                    },
                    {
                        name: '预期',
                        type: 'funnel',
                        left: 'center',
                        top: '15%',
                        width: '70%',
                        maxSize: '100%',
                        label: {
                            normal: {
                                formatter: '{b}预期'
                            },
                            emphasis: {
                                position: 'inside',
                                formatter: '{b}预期: {c}%'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.7,
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#4fabde', '#74caf0', '#c3ecfb'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        },
                        data: _this.state.op5.yuqi
                    }

                ]
            };
            option6 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                areaStyle: "red",
                calculable: true,
                series: [
                    {
                        name: '家庭年收入',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['50%', '45%'],
                        roseType: 'area',
                        data: _this.state.op6.data,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#f99a14', '#bccc30', '#f9cc42', '#d08ac0', '#40b4e8'];
                                    return colorList[params.dataIndex]
                                }
                            }
                        }
                    }
                ]
            };
            myChart1.setOption(option1);
            myChart2.setOption(option2);
            myChart3.setOption(option3);
            myChart4.setOption(option4);
            myChart5.setOption(option5);
            myChart6.setOption(option6);
        }
        //
        // if (window.location.search.slice(1) && window.location.search.slice(1).split("=") && window.location.search.slice(1).split("=")[1]) {
        //     search = JSON.parse(decodeURI(window.location.search.slice(1)).split("=")[1]);
        // }
        search={"city":[{"name":"北京","regionid":"52"}],"industry":{"name":"中小学辅导/小学辅导","nfiid":"ff8080815b64e782015b66dbe8be0038"}};
        // if (!search || !search.industry || !search.industry.nfiid) {
        //     return;
        // }
        // if (search && search.city && search.city.length && search.city.length > 0) {
        //     sendData = JSON.stringify({
        //         "cityList": search.city
        //     })
        // } else {
        //     sendData = {}
        // }
        $.ajax({
            url: "https://gateway.mshuoke.com/chart/chartdata/" + "小学辅导",//search.industry.nfiid,
            type: "post",
            contentType: "application/json",
            data: {},
            success: function (result) {
                if (result.code == 0) {
                    var op2, op3, op4, op6;
                    if (Object.keys(result.data.edu).length > 0) {
                        var arrType = [], arrData = [];
                        for (var key in result.data.edu) {
                            arrType.push(key);
                            arrData.push(result.data.edu[key]);
                        }
                        op2 = {};
                        var sum = 0;
                        for (var i = 0; i < arrData.length; i++) {
                            sum += arrData[i]
                        }
                        for (var j = 0; j < arrData.length; j++) {
                            arrData[j] = Math.ceil(100 * arrData[j] / sum)
                        }
                        op2.type = arrType;
                        op2.data = arrData;
                        op2.loading = false;
                    }
                    if (Object.keys(result.data.income).length > 0) {
                        op6 = {};
                        op6.loading = false;
                        op6.data = transform(result.data.income)
                    }
                    if (Object.keys(result.data.sex).length > 0 && Object.keys(result.data.age).length > 0) {
                        var inner = transform(result.data.sex);
                        var outer = transform(result.data.age);
                        op4 = {};
                        op4.loading = false;
                        op4.inner = inner;
                        op4.outer = outer;
                    }
                    if (Object.keys(result.data.location).length > 0) {
                        op3 = {};
                        op3.loading = false;
                        op3.data = transform(result.data.location);
                    }
                    if (search && search.industry && search.industry.name && search.industry.name.split("/") && search.industry.name.split("/")[1] && xwtzSjzl_data[search.industry.name.substr(search.industry.name.indexOf("/") + 1)]) {
                        _this.setState({
                            total: result.data.total,
                            industryinfo: search.industry.name.substr(search.industry.name.indexOf("/") + 1),
                            op1: getOption1(search.industry.name.substr(search.industry.name.indexOf("/") + 1)),
                            op5: getOption5(search.industry.name.substr(search.industry.name.indexOf("/") + 1)),
                            op2: op2 || _this.state.op2,
                            op3: op3 || _this.state.op3,
                            op4: op4 || _this.state.op4,
                            op6: op6 || _this.state.op6
                        }, function () {
                            update();
                        })
                    }
                }
            }
        });

    }

    render() {
        return (<div className="content">
            <div className="title">
                <h2>目标客户查询
                    e= <span
                        style={{display: this.state.industryinfo ? "inline" : 'none'}}>:<span>{this.state.industryinfo[0]}</span>><span>{this.state.industryinfo[1]}</span></span>
                </h2>
                <h2>数据总量&nbsp;&nbsp;<span>{this.state.total}</span>条</h2>
            </div>
            <div className="content clear">
                <ul className="clear">
                    <li>
                        <h2>行为特征</h2>
                        <div className="spin">
                            <div className="echarts" id="div1">
                            </div>
                            <div className="spinPos" style={{display: this.state.op1.loading ? "block" : "none"}}>
                                <div className="tip"><Spin spinning={this.state.op1.loading} size="large"
                                                           tip="Loading..."/></div>
                            </div>
                        </div>

                    </li>
                    <li>
                        <h2>学历情况</h2>
                        <div className="spin">
                            <div className="echarts" id="div2"></div>
                            <div className="spinPos" style={{display: this.state.op2.loading ? "block" : "none"}}>
                                <div className="tip"><Spin spinning={this.state.op2.loading} size="large"
                                                           tip="Loading..."/></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>人群分布</h2>
                        <div className="spin">
                            <div className="echarts">
                                <div id="bmap">
                                    <div id="div3"></div>
                                </div>
                            </div>
                            <div className="spinPos" style={{display: this.state.op3.loading ? "block" : "none"}}>
                                <div className="tip"><Spin spinning={this.state.op3.loading} size="large"
                                                           tip="Loading..."/></div>
                            </div>
                        </div>
                    </li>
                    <li>

                        <h2>性别和年龄</h2>
                        <div className="spin">
                            <div className="echarts" id="div4"></div>
                            <div className="sex">
                                <div className="right">
                                    <ul>
                                        <li><label htmlFor="">外环：</label><span>年龄段占比</span></li>
                                        <li><label htmlFor="">内圆：</label><span>男女比例</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="spinPos" style={{display: this.state.op4.loading ? "block" : "none"}}>
                                <div className="tip"><Spin spinning={this.state.op4.loading} size="large"
                                                           tip="Loading..."/></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>数据质量</h2>
                        <div className="spin">
                            <div className="echarts" id="div5"></div>
                            <div className="spinPos" style={{display: this.state.op5.loading ? "block" : "none"}}>
                                <div className="tip"><Spin spinning={this.state.op5.loading} size="large"
                                                           tip="Loading..."/></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>家庭年收入</h2>
                        <div className="spin">
                            <div className="echarts" id="div6"></div>
                            <div className="spinPos" style={{display: this.state.op6.loading ? "block" : "none"}}>
                                <div className="tip"><Spin spinning={this.state.op6.loading} size="large"
                                                           tip="Loading..."/></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>)
    }
}

render(<Main/>, root)




