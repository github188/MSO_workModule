import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Table, Input, Button, Pagination, TreeSelect, Icon, Checkbox } from "antd";

const root = document.getElementById("main");
const domainDownShort = "http://res.mshuoke.com/";
import "./newStyle.css";

import Pop from "./common/Pop.jsx";
import Tip from "./common/Tips.jsx";

//状态组件
import State from "./common/State.jsx";
const StateOne = <State state={"待领取"}/>;
const StateThee = <State state={"已放弃"}/>;
const StateFour = <State state={"已放弃"}/>;
const StateFive = <State state={"进行中"}/>;
const StateSix = <State state={"暂停"}/>;
const StateSevent = <State state={"结算中"}/>;
const StateEight = <State state={"已完成"}/>;
const domain = "https://gateway.mshuoke.com"
//树形选择设置
const treeData = [
    {
        label: '全部',
        value: 'nine',
        key: '0'
    },
    {
        label: '待领取',
        value: 'one',
        key: '1'
    }, {
        label: '已放弃',
        value: 'three',
        key: '2'
    }, {
        label: '进行中',
        value: 'five',
        key: '3'
    }, {
        label: '暂停',
        value: 'six',
        key: '4'
    }, {
        label: '结算中',
        value: 'sevent',
        key: '5'
    }, {
        label: '已完成',
        value: 'eight',
        key: '6'
    },
];
//table头设置
const columns = [
    {
        title: '订单状态',
        dataIndex: 'orderState',
        width: 100,

    },
    {
        title: '操作',
        dataIndex: 'operate',
        width: 100,
    }, {
        title: '订单名',
        dataIndex: 'name',
        width: 260,
    }, 
    // {
    //     title: '订单号',
    //     dataIndex: 'id',
    //     width: 220,
    // },
     {
        title: '业务类型',
        dataIndex: 'serviceTypeNum',
        width: 140,

    }, {
        title: '订单数量',
        dataIndex: 'orderQuantity',
        width: 100,

    }, {
        title: '订单单价',
        dataIndex: 'unitPrice',
        width: 100,


    }, {
        title: '订单服务费',
        dataIndex: 'serviceCharge',
        width: 120,


    }, {
        title: '已完成量',
        dataIndex: 'orderCompleteQuantity',
        width: 100,

    }, {
        title: '订单创建时间',
        dataIndex: 'createtime',
        width: 240
    }];


class OrderList extends Component {
    constructor() {
        super()
        this.state = {
            updateOrderId: "", //点击领取时的订单id
            close: false, //弹窗状态，false 不显示，true显示
            jfuid: localStorage.mso_userid, //用户jfuid
            value: "全部", //属性选择框默认显示值
            totalNum: 0, //订单总数
            pageSize: 10, //当前每页条数
            currentPage: 1, //当前所在页
            totalOrder: { //状态  1-待领取 2-已领取显示进行中状态 3-已放弃 5-进行中 6-暂停 7-结算中 8-已完成 9-全部
                one: [],
                three: [],
                five: [],
                six: [],
                sevent: [],
                eight: [],
                nine: []
            },
            list: [] //显示的列表数据
        }
    }
    componentDidMount() {
        $(".ant-select-tree").css({
            fontSize: "16px"
        })
        $(".ant-table-thead>tr>th").css({
            backgroundColor: "#EDEDEB",
            fontSize: "16px"
        })
        $(".ant-table-tbody").css({
            fontSize: "16px",
            color: "#333333"
        })
        this.getData(); //获取全部数据
    }


    /**
     * @param jfuid   用户id
     * @param state   状态  1-待领取 3-已放弃 4-已取消    2-已领取显示5-进行中 6-暂停 7-结算中 8-已完成 9-全部
     * @param page    页数，默认从0开始  test jfuid 20170718044142856
     * @param size    每页的数量
     */
    getData(jfuid = (this.state.jfuid || "")) {
        var _this = this;
        $.ajax({
            type: "get",
            contentType: "application/json",
            url: `${domain}/worker/orders/${jfuid}`,
            success: function(result) {
                //处理data
                if (result.msg == "success") {
                    _this.updateData(result)
                }
            },
            error: function(err) {
                console.log(err);
            }

        })
    }

    updateData(result = []) {
        console.log(result);
        var data = result.data || [];
        var totalOrder = {};
        totalOrder.one = [];
        totalOrder.three = [];
        totalOrder.five = [];
        totalOrder.six = [];
        totalOrder.sevent = [];
        totalOrder.eight = [];
        totalOrder.nine = [];
        var serviceTypeNum = ["", "销售线索挖掘", "数据加工", ""]
        for (let i = 0; i < data.length; i++) {
            data[i].orderCompleteQuantity = (data[i].orderCompleteQuantity || 0) + "条";
            data[i].createtime = data[i].createTime
            data[i].serviceTypeNum = serviceTypeNum[data[i].serviceTypeNum];
            var index = Object.assign({}, data[i]),
                newObj = {}
            index.unitPrice = ("¥" + index.unitPrice).indexOf(".") == "-1" ? ("¥" + index.unitPrice + ".00") : ("¥" + index.unitPrice)
            index.serviceCharge = index.serviceCharge > 0 ? (("¥" + index.serviceCharge).indexOf(".") == "-1" ? ("¥" + index.serviceCharge + ".00") : ("¥" + index.serviceCharge)) : "无服务费"
            // if (index.orderState == "1") {
            //     index.operate = (<div><Button onClick={this.getOrder.bind(this, index.id)}
            //     style={{
            //         backgroundColor: "#0098D8",
            //         float: "left",
            //         color: "#ffffff",
            //         fontSize: 16,
            //         padding: "2px 10px"
            //     }}>立即领取</Button>
            //             <Button
            //     onClick={this.detail.bind(this, index.id, index.createTime, index.orderState)}
            //     icon="edit"
            //     style={{
            //         backgroundColor: "#8F44AD",
            //         color: "#ffffff",
            //         float: "right",
            //         fontSize: 16,
            //         padding: "2px 10px"
            //     }}>查看</Button></div>)
            // } else {
            //     index.operate = ( <div><Button
            //     onClick={this.detail.bind(this, index.id, index.createTime, index.orderState)}
            //     icon="edit"
            //     style={{
            //         backgroundColor: "#8F44AD",
            //         color: "#ffffff",
            //         float: "right",
            //         fontSize: 16,
            //         padding: "2px 10px"
            //     }}>查看</Button></div>)
            // }

			index.operate = ( <div><Button
                onClick={this.detail.bind(this, index.id, index.createTime, index.orderState)}
                icon="edit"
                style={{
                    backgroundColor: "#8F44AD",
                    color: "#ffffff",
                    // float: "right",
                    fontSize: 16,
                    padding: "2px 8px"
                }}>查看</Button></div>)

            index.createTime = moment(index.createTime).format("YYYY-MM-DD DD:mm:ss");
            switch (Number(index.orderState)) {
            case 1: //1-待领取
                newObj.orderState = StateOne;
                newObj.key = Number(totalOrder.one.length);
                totalOrder.one.push(Object.assign({}, index, newObj))
                break;

            case ( 2): //5-进行中
                newObj.orderState = StateFive;
                newObj.key = Number(totalOrder.five.length);
                totalOrder.five.push(Object.assign({}, index, newObj))
                break;
            case 3: //3-已放弃
                newObj.orderState = StateThee;
                newObj.key = Number(totalOrder.three.length);
                totalOrder.three.push(Object.assign({}, index, newObj))
                break;
            case 4: //4-已取消     已取消统称为已放弃

                newObj.orderState = StateFour;
                newObj.key = Number(totalOrder.three.length);
                totalOrder.three.push(Object.assign({}, index, newObj))
                break;

            case ( 5): //5-进行中
                newObj.orderState = StateFive;
                newObj.key = Number(totalOrder.five.length);
                totalOrder.five.push(Object.assign({}, index, newObj))
                break;
            case 6: //6-暂停
                newObj.orderState = StateSix;
                newObj.key = Number(totalOrder.six.length);
                totalOrder.six.push(Object.assign({}, index, newObj))
                break;
            case 7: //7-结算中
                newObj.orderState = StateSevent;
                newObj.key = Number(totalOrder.sevent.length);
                totalOrder.sevent.push(Object.assign({}, index, newObj))
                break;
            case 8: //8-已完成
                newObj.orderState = StateEight;
                newObj.key = Number(totalOrder.eight.length);
                totalOrder.eight.push(Object.assign({}, index, newObj))
                break;
            }
            var obj = Object.assign({}, index, newObj, {
                key: i
            })
            totalOrder.nine.push(obj);

        }
        this.setState({
            totalOrder: totalOrder,
            list: totalOrder.nine,
            totalNum: result.totalNum || 0,
            value: "全部",
            currentPage: 1
        })

    }


    /**
     * 模糊查询
     */
    search() {
        var content = $(this.refs.input.refs.input).val().trim();
        const reg = new RegExp(content, 'gi');
        var filter = this.state.totalOrder.nine.map((record) => {
            const match = record.name.match(reg) || record.id.match(reg);
            if (!match) {
                return null;
            }
            return {
                ...record,
                name: (
                <span>
              {record.name.split(reg).map((text, i) => (
                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
                ))}
            </span>
                ),
            };
        }).filter(record => !!record)
        this.setState({
            currentPage: 1,
            value: "nine",
            list: filter
        })
        $(this.refs.input.refs.input).val("")

    }

    /**
     * 查看详情
     */
    detail(id, createTime, orderState) {
        this.props.detail(false, id, createTime, orderState)
    }

    /**
     * 立即领取
     *  /worker/receiveorder/{orderId}/{state} 订单id  5:领取3:放弃
     */
    getOrder(id) {
        this.setState({
            close: true,
            updateOrderId: id
        })
    }

    /**
     *
     * @param page  当前所在页数
     * @param pagesize 每页的条数
     */
    sizeChange(page, pageSize) {
        //TODO pagesize变化时回调
        this.setState({
            currentPage: 1,
            pageSize: pageSize
        })
    }

    /**
     *
     * @param current点击的页数
     * @param size  每页现实的条数
     */
    paginatChange(currentPage, size) {
        this.setState({
            currentPage: currentPage
        })
        //页码变化的回调

    }

    /**
     *树形选择框的change回调
     * @param value  选中的值,手动改变value值时onChange函数value值为undefined
     * @param l
     * @param e
     */
    onChange(value = "nine", l, e) {
        $(this.refs.input.refs.input).val("");
        this.setState({
            list: this.state.totalOrder[value],
            value: value,
            currentPage: 1
        });


    }

    updateClose(num) {
        this.setState({
            close: false
        })

        if (num == 1) {
            //TODO 更改状态 orderState  3放弃取消  5 领取
            //根据订单号替换此条数据
            this.updateState(this.state.updateOrderId)
        }

    }

    /** TODO  接口未完善
     * /worker/receiveorder/{orderId}/{state}
     * @param orderId  订单id
     * @param state   3放弃取消  5 领取
     */
    updateState(orderId) {
        var _this = this;
        $.ajax({
            url: `${domain}/worker/receiveorder/${orderId}/5`,
            type: "patch",
            contentType: "application/json",
            success: function(result) {
                if (result.msg == "success") {
                    //更新所有数据
                    _this.getData()

                }

            }
        })
    }

    render() {
        return (<div style={{
                display: this.props.show ? "block" : "none",
                padding: "40px 20px"
            }} className="root">
            <Pop close={this.state.close} cb={this.updateClose.bind(this)}/>
            <div className="titles">我的订单</div>
            <div style={{
                padding: "10px 0 20px"
            }}>
                <Input size="large"
            ref="input"
            onPressEnter={this.search.bind(this)}
            placeholder="请输入订单名称或订单号进行搜索"
            style={{
                fontSize: "14px",
                width: "300px"
            }}/>
                <Button
            type="primary"
            onClick={this.search.bind(this)}
            style={{
                height: "30px",
                fontSize: "14px",
                marginLeft: "10px"
            }}
            >订单搜索</Button>
            </div>
            <div className="select" style={{
                paddingBottom: "20px"
            }}>
                <span style={{
                paddingRight: "7px"
            }}>订单状态:</span>
                <TreeSelect
            style={{
                width: 226,
                fontSize: 16
            }}
            value={this.state.value}
            dropdownStyle={{
                maxHeight: 400,
                overflow: 'auto',
                fontSize: 16
            }}
            treeData={treeData}
            treeDefaultExpandAll
            onChange={this.onChange.bind(this)}
            />
            </div>

            <div className="table">
                <Table
            size="small"
            loading={false}
            columns={columns}
            dataSource={this.state.list.slice(0 + this.state.pageSize * (this.state.currentPage - 1), this.state.pageSize * this.state.currentPage)}
            bordered={true}
            scroll={{
                y: 440
            }}
            pagination={false}

            />
            </div>

            <div style={{
                display: this.state.list == 0 ? "none" : "block",
                padding: "30px 0",
                textAlign: "center"
            }}>
                <Pagination
            showSizeChanger={true}
            showQuickJumper
            showTotal={(total, range) => `共${Math.ceil(total / this.state.pageSize)}页 共${total} 条`}
            onShowSizeChange={this.sizeChange.bind(this)}
            defaultCurrent={1}
            current={Number(this.state.currentPage)}
            total={this.state.list.length}
            onChange={this.paginatChange.bind(this)}
            />
            </div>
        </div>)
    }


}

import back from "../img/go back_icon.png"
class Detail extends Component {
    componentWillMount() {
        this.state = {
            state: "", //放弃或领取订单  3  5
            close: false, //弹窗默认不显示
            checked: true, //条例默认不选中
            hour: "00", //倒计时剩余小时数
            minute: "00", //倒计时剩余分钟数
            "createTime": " ",
            "orderState": "",
            "modifiedTime": "",
            "ordersNum": "",
            "invoiceType": "", //发票类型，写
            "createTime": "",
            "unitPrice": "",
            "endTime": "",
            "serviceTypeNum": "",
            "id": "",
            "settlementQuantity": "",
            "targetArea": "",
            "speechcraft": "",
            "orderCompleteQuantity": "",
            "sales": "",
            "name": "",
            "releaseNum": "",
            "quality": "",
            "settlementPrice": "",
            "comment": "",
            "settlementCycle": "",
            "orderQuantity": "",
            "serviceCharge": "",
            "precisionInfoService": ""
        }
    }

    /**
     * orderId订单号
     */
    componentDidMount() {
        var _this = this;
        _this.setState(Object.assign({}, {
            orderState: this.transformState(_this.props.prop.orderState),
            createTime: _this.props.prop.createTime
        }), function() {
            if (_this.props.prop.orderState == "待领取") {
                _this.countDown()
            }
        })
        $.ajax({
            url: `${domain}/worker/orderdetail/${_this.props.prop.orderId}`,
            type: "get",
            success: function(result) {
                if (result.msg == "success") {
                    result.data.orderState = _this.transformState(result.data.orderState)
                    var countDown = {}
                    if (result.data.orderState == "待领取") {
                        countDown = _this.getCountDownTime(result.data.createTime)
                    }
                    _this.setState(Object.assign({}, _this.state, result.data, countDown), function() {
                        if (_this.state.orderState == "待领取") {
                            _this.countDown()
                        }
                    })
                }

            }
        })
    }

    componentDidUpdate() {
        $(".invoice").height($(".special").height())

    }

    /**
     * 组件销毁清除定时器
     */
    componentWillUnmount() {
        clearInterval(this.setInterval)
    }

    /**
     * 倒计时
     */
    countDown() {
        var _this = this;
        this.setInterval = setInterval(function() {
            var countDown = _this.getCountDownTime(_this.state.createTime);
            if (!(countDown.timeDiff > 0)) {
                clearInterval(_this.setInterval)
                _this.setState({
                    state: 3
                }, function() {
                    _this.setOrderState()
                })
            }
            _this.setState({
                hour: countDown.hour,
                minute: countDown.minute
            })
        }, 1000)
    }

    /**
     * 获取倒计时剩下的时间
     * @param currentTime  当前时间，计算规则 开始时间+24h-当前时间
     */
    getCountDownTime(createTime) {
        var timeDiff = moment(createTime).add(24, "hours").diff(moment()) > 0 ? moment(createTime).add(24, "hours").diff(moment()) : 0; //时间差
        var hour = moment.duration(timeDiff).hours() < 10 ? "0" + moment.duration(timeDiff).hours() : moment.duration(timeDiff).hours(); //转化为小时格式为00
        var minute = moment.duration(timeDiff).minutes() < 10 ? "0" + moment.duration(timeDiff).minutes() : moment.duration(timeDiff).minutes(); //转化为分钟格式为00
        return {
            timeDiff: timeDiff,
            hour: hour,
            minute: minute
        }
    }

    /**
     * 状态值转化为中文
     * @param state
     * @returns {*}
     */
    transformState(state) {
        switch (Number(state)) {
        case 1:
            return "待领取";
        case 2:
            return "进行中";
        case 3:
            return "已放弃";
        case 4:
            return "已放弃";
        case 5:
            return "进行中";
        case 6:
            return "暂停";
        case 7:
            return "结算中";
        case 8:
            return "已完成";
        }
    }

    /**
     * 立即领取
     *  /worker/receiveorder/{orderId}/{state} 订单id  5:领取3:放弃
     */
    getOrder(state) {
        this.setState({
            close: true,
            state: state
        })
    }

    select(state) {
        this.setState({
            checked: state.target.checked
        })
    }

    /**
     * 领取或放弃订单
     * */
    updateClose(num) {
        this.setState({
            close: false
        })
        if (num == 1) {
            this.setOrderState()
        }
    }

    setOrderState() {
        var _this = this;
        $.ajax({
            url: `${domain}/worker/receiveorder/${_this.state.id}/${_this.state.state}`,
            type: "patch",
            contentType: "application/json",
            success: function(result) {
                if (result.msg == "success") {
                    //TODO  重置数据
                    result.data.orderState = _this.transformState(result.data.orderState);
                    _this.setState(Object.assign({}, _this.state, result.data, {
                        state: "",
                        hour: "00",
                        minute: "00"
                    }))
                }

            }
        })
    }

    render() {
        return (<div style={{
                padding: "20px",
                display: !this.props.prop.hide ? "block" : "none"
            }}>
            <Pop close={this.state.close} cb={this.updateClose.bind(this)}
            content={this.state.state == 5 ? "确认领取此订单吗？" : "确认放弃此订单吗？"}/>
            <div className="cont-box">
                <div className="back" onClick={() => {
                this.props.back(true, "")
            }}><img style={{
                display: "inline-block"
            }} src={back}
            alt=""/>返回
                </div>
                <div className="breadcrumb-nav">
                    订单信息
                </div>
                <div className="details-box">
                    <ul>
                    <div>
                        <li>
                            <label>订单名称：</label>
                            <span>{this.state.name}</span>
                        </li>
                         <li>
                            <label>订单号：</label>
                            <span>{this.state.id}</span>
                        </li>
                         <li>
                            <label>订单号总金额：</label>
                            <span>{("¥" + this.state.ordersNum).indexOf(".") == "-1" ? ("¥" + this.state.ordersNum + ".00") : this.state.ordersNum}</span>
                        </li>
                         <li>
                            <label>订单数量：</label>
                            <span>{this.state.orderQuantity}</span>
                        </li>
                        
                       
                       

                        <li>
                            <label>单价：</label>
                            <span>{("¥" + this.state.unitPrice).indexOf(".") == "-1" ? ("¥" + this.state.unitPrice + ".00") : this.state.unitPrice}</span>
                        </li>
                        
                        <li className="special">
                            <label>特别注意：</label>
                            <span>{this.state.comment || "暂无"}</span>
                        </li>
                      <li>
                            <label>订单服务费：</label>
                            <span>{this.state.serviceCharge == "0" ? "免订单服务费" : ("¥" + this.state.serviceCharge).indexOf(".") == "-1" ? ("¥" + this.state.serviceCharge + ".00") : ("¥" + this.state.serviceCharge)}
                                <Tip hide={this.state.serviceCharge == "0" ? true : false}
            title={"根据订单数量，每一条收取1元钱的订单服务费"} pos={"bottomLeft"}/>
                            </span>
                        </li>
                        <li>
                            <label>精准信息服务：</label>
                            <span>{this.state.precisionInfoService == "0" ? "不使用" : "MSO平台，按结算金额8%收费"}</span>
                        </li>
                        <li>
                            <label>订单状态：</label>
                            <span className="blue">{this.state.orderState}</span>
                        </li>
                            </div>

                            <div>

                            <li>
                            <label>业务类型：</label>
                            <span> {this.state.serviceTypeNum == "1" ? "销售线索挖掘" : (this.state.serviceTypeNum == "2" ? "数据加工" : "标签匹配")}<span className="bubble-box">
                                <Tip title={this.state.serviceTypeNum == "1" ? "对用户行为和特征进行分析，通过有效触达，挖掘意向客户" : "针对企业自有数据和需求，进行有效触达"} pos={"bottomLeft"}/>
                                </span>
                            </span>
                        </li>
                         <li style={{
                display: this.state.serviceTypeNum == "1" ? "block" : "none"
            }}>
                            <label>目标区域：</label>
                            <span>  {this.state.targetArea}</span>
                        </li>
                           <li>
                            <label>开始日期：</label>
                            <span>{moment(this.state.createTime).format("YYYY-MM-DD")}</span>
                        </li>
                        
                        
                        <li>
                            <label>结束日期：</label>
                            <span>{moment(this.state.endTime).format("YYYY-MM-DD")}</span>
                        </li>
                        
                        <li>
                            <label>结算时间：</label>
                            <span>{this.state.settlementCycle || 0}个工作日</span>
                        </li>
                          <li className="invoice ">
                            <label>发票类型：</label>
                            <span>以实际开票为准,小规模纳税人增票补收3%税费,普票补收6%税费"</span>
                        </li>
                        <li>
                            <label>质检标准附件：</label>
                            <span>{this.state.quality ? <a href={domainDownShort + this.state.quality}>下载</a> : <span>文件未上传</span>}</span>
                        </li>
                        
                        <li>
                            <label>销售线索模板：</label>
                            <span>{this.state.sales ? <a href={domainDownShort + this.state.sales}>下载</a> : <span>文件未上传</span>}</span>
                        </li>
                      
                        <li>
                            <label>话术文件：</label>
                           <span>{this.state.speechcraft ? <a href={domainDownShort + this.state.speechcraft}>下载</a> : <span>文件未上传</span>}</span>
                        </li>
                        </div>
                    </ul>
                    { /*--待领取-*/ }
                    <div className="order-state" style={{
                display: this.state.orderState == "待领取" ? "block" : "none"
            }}>
                        <p>此订单剩余领取时间还有：
                            <span className="red"
            style={{
                paddingLeft: "28px"
            }}>{this.state.hour + "小时" + this.state.minute + "分"}
                                <Tip title={"每个订单的领取时间为24小时，超过时间未领取的订单将被视为自动放弃"} pos={"rightTop"}/>
                        </span>
                        </p>
                        <div className="btn-box">
                            <Button type={"primary"} style={{
                marginRight: "20px"
            }} disabled={!this.state.checked}
            onClick={this.getOrder.bind(this, 5)}>立即领取</Button>
                            <Button onClick={this.getOrder.bind(this, 3)}>放弃订单</Button>
                        </div>
                        <label className="ant-checkbox-wrapper">
                            <Checkbox  defaultChecked={true} onChange={this.select.bind(this)}>
                                <span>我已阅读并同意<a target="_blank"
            href="//www.mshuoke.com/terms-receive.html">《眸事网订单领取条例》</a></span>
                            </Checkbox>
                        </label>
                    </div>
                    { /*--已放弃-*/ }
                    <div className="order-state"
            style={{
                display: this.state.orderState == "已放弃" || this.state.orderState == "已取消" ? "block" : "none"
            }}>
                        <span className="red">此订单已被放弃，您可以领取其他订单！</span>
                    </div>
                    { /*--进行中-*/ }
                    <div className="order-state" style={{
                display: this.state.orderState == "进行中" ? "block" : "none"
            }}>
                        <p style={{
                marginBottom: "16px"
            }}>
                            <label className="state-label">订单已完成：</label>
                            <span className="red">{(this.state.orderCompleteQuantity || 0) + "条"}</span>
                        </p>
                    </div>
                    { /*--暂停-*/ }
                    <div className="order-state" style={{
                display: this.state.orderState == "暂停" ? "block" : "none"
            }}>
                        <p style={{
                marginBottom: "16px"
            }}>
                            <label className="state-label">订单已完成：</label>
                            <span className="red">{(this.state.orderCompleteQuantity || 0) + "条"}</span>
                        </p>
                    </div>
                    { /*--结算中-*/ }
                    <div className="order-state" style={{
                display: this.state.orderState == "结算中" ? "block" : "none"
            }}>
                        <p style={{
                marginBottom: "16px"
            }}>
                            <label className="state-label">订单已完成：</label>
                            <span className="red">{(this.state.orderCompleteQuantity || 0) + "条"} </span>
                        </p>
                        <p>
                            <label className="state-label2">此订单正在结算中，预计结算金额：</label>
                            <span
            className="red">{("¥" + this.state.releaseNum).indexOf(".") == "-1" ? ("¥" + this.state.releaseNum + ".00") : ("¥" + this.state.releaseNum)}</span>
                        </p>

                    </div>
                    { /*--已完成-*/ }
                    <div className="order-state" style={{
                display: this.state.orderState == "已完成" ? "block" : "none"
            }}>
                        <p style={{
                marginBottom: "16px"
            }}>
                            <label className="state-label">订单已完成：</label>
                            <span className="red">{(this.state.orderCompleteQuantity || 0) + "条"} </span>
                        </p>
                        <p>
                            <label className="state-label2">此订单已完成，实际结算金额：</label>
                            <span
            className="red">{("¥" + this.state.settlementPrice).indexOf(".") == "-1" ? ("¥" + this.state.settlementPrice + ".00") : ("¥" + this.state.settlementPrice)}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>)
    }
}

class List extends Component {
    constructor() {
        super()
        this.state = {
            listShow: !location.hash.split("=")[1],
            orderId: location.hash.split("=")[1] || "",
            createTime: "",
            orderState: ""
        }
    }
    cb(bool, num, createTime, orderState) {
        this.setState({
            listShow: bool,
            orderId: num,
            createTime: createTime,
            orderState: orderState
        })
    }
    render() {
        return (<div>
            {this.state.listShow ? <OrderList detail={this.cb.bind(this)} show={this.state.listShow}/> :
                <Detail prop={{
                    ...this.state
                }} back={this.cb.bind(this)}/>}
        </div>)
    }

}

render(<List/>, root)