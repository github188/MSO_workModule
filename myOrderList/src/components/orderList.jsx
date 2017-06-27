import React, {Component} from "react";
import ReactDOM, {render} from "react-dom";
import {Tabs, Badge, Input, Button, Pagination, Tooltip, TreeSelect} from "antd";
const TabPane = Tabs.TabPane;
const tabs = () => (<Badge count={5}><span style={{padding: "0 14px"}}>Tab 2</span></Badge>);

const root = document.getElementById("main");
// import style from "./style.css";
import Right from "./common/Right"
import "./style.css"
import noData from "../img/pic_noorder.png"


import State from "./common/State"
import Tips from "./common/Tips"
import Pop from "./common/Pop";

const treeData = [
    {
        label: '全部',
        value: '0',
        key: '0-0'
    },
    {
        label: '待领取',
        value: '1',
        key: '0-1'
    }, {
        label: '已放弃',
        value: '2',
        key: '0-2'
    }, {
        label: '进行中',
        value: '3',
        key: '0-3'
    }, {
        label: '暂停',
        value: '4',
        key: '0-4'
    }, {
        label: '结算中',
        value: '5',
        key: '0-5'
    }, {
        label: '已完成',
        value: '6',
        key: '0-6'
    },
];


class OrderList extends Component {
    constructor() {
        super();
        this.state = {
            sendOrder: {
                orderNum: "",   //领取或放弃的订单号
                index: null     //订单的index
            },
            value: "请选择",
            jfuid: sessionStorage.getItem("jfuid"),
            pop: false,             //false 弹框默认不显示
            pageSize: 10,
            pageTotal: 1,
            state: "0",
            totalNum: 0,           //数据总量
            tabName: ["所有订单", "待领取", "执行中", "已完成"],
            count: 150,
            list: [
                {
                    //createTime: "2017-06-12 18:26:00",       //订单创建时间
                    id: "3325452145644",      //订单号
                    //countDown: 0,                    //倒计时
                    orderquantity: "2100",             //订单数量
                    unitprice: "45.00",            //订单单价
                    orderstate: "待领取",              //订单状态
                    name: "线下E北京-1608",       //订单title
                    begintime: "2017-06-01",            //起时间
                    // endtime: "2017-06-31",              //止时间
                    servicetype: "销售线索挖掘",            //订单类型
                    targetarea: "上海",                         //目标区域
                    ordercompletequantity: 0,
                    //订单完成量


                    remainingTime: {
                        MS: 0,            //剩余时间毫秒数
                        hour: "",                  //显示小时数
                        minute: ""                  //显示分钟数
                    },

                    servicecharge: "2342",
                    settlementprice: 15351                  //实际结算金额 ==>后台给的     predict预计结算金额=订单完成量*订单单价

                }, {
                    // createTime: "2017-06-14",
                    id: "3325452145644",
                    countDown: 0,
                    orderquantity: "2100",
                    unitprice: "45.00",
                    orderstate: "待领取",
                    name: "线下E北京-1601",
                    begintime: "2017-06-01",
                    endtime: "2017-06-31",
                    servicetype: "销售线索挖掘",
                    targetarea: "",
                    completedPrice: 15351,
                    remainingTime: {
                        MS: 0,            //剩余时间毫秒数
                        hour: "",                  //显示小时数
                        minute: ""                  //显示分钟数
                    },
                    servicecharge: "345534",
                    ordercompletequantity: 0
                }
            ]
        }
    }

    /**
     * 树形选择框的回调
     * @param value
     * @param l
     * @param e
     */
    onChange = (value, l, e) => {
        console.log(value);
        console.log(l);
        console.log(e);
        this.setState({value});
    }

    componentDidMount() {
        var _this = this;

        //如果是未完善信息界面，获取dom元素设定响应式高度
        if (this.state.noInfo) {
            $(window).resize(function () {
                $(".incomplete").height($(window).height() - 220).css({backgroundPosition: "center " + ($(window).height() - 220) * 0.2 + "px"})
                $(".fonts").css("top", (($(window).height() - 220) * 0.2 + 190 + "px"))

            }).triggerHandler("resize")
            return;
        }

        //徽标位置
        $(".ant-badge").find(".ant-badge-count").css({
            left: "74px",
            top: "-5px"
        })

        //获取数据
        // this.getData("all")


        //获取剩余时间条件
        /**
         * 1.list条数大于0
         * 2.初次渲染和更新后要调用更新
         * 3.在获取数据后获取结束时间同时设置剩余时间
         * 4.组件更新后清除定时器再设置定时器
         * 5.调用定时器前先调用一次更新函数，避免延迟
         *
         */
        this.updateTime()


    }


    componentWillUnmount() {
        clearInterval(this.setInterval)
    }

    /**
     * TODO 更新时间，获取未领取剩余时间，
     * @param oldlist  数据列表
     */
    updateTime() {
        if (!this.state.list.length > 0) {
            return;
        }
        var bool = true;
        for (var i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].orderstate == "待领取") {
                bool = false;
            }
        }
        if (bool) {
            return;
        }
        var _this = this;

        update()
        this.setInterval = setInterval(function () {
            update();
        }, 1000 * 5)
        function update() {
            var arr = [], oldlist = _this.state.list;


            for (var i = 0; i < oldlist.length; i++) {
                var obj = {};
                var timeDiff = moment(oldlist[i].begintime).diff(moment()) > 0 ? moment(oldlist[i].begintime).diff(moment()) : 0; //时间差
                if (oldlist[i].orderstate == "待领取" && timeDiff > 0) {
                    var hours = moment.duration(timeDiff).hours() < 10 ? "0" + moment.duration(timeDiff).hours() : moment.duration(timeDiff).hours();//转化为小时格式为00
                    var minutes = moment.duration(timeDiff).minutes() < 10 ? "0" + moment.duration(timeDiff).minutes() : moment.duration(timeDiff).minutes();//转化为分钟格式为00
                    obj.remainingTime = {
                        MS: timeDiff,
                        hour: hours,
                        minute: minutes
                    }

                }
                if (oldlist[i].orderstate == "待领取" && !timeDiff > 0) {
                    obj.remainingTime = {
                        MS: "00",
                        hour: "00",
                        minute: "00"
                    }
                    obj.orderstate = "已放弃"
                    _this.receiveorder(oldlist[i].id, 3, function (data) {
                        //更改后台数据
                    })
                }
                arr[i] = Object.assign({}, oldlist[i], obj)
            }
            _this.setState({
                list: arr
            })
        }
    }


    /**
     * 切换tab时触发此函数
     * @param num
     */
    onTabClick(num) {
        this.clearInput();//清空搜索框
        this.getData(num, this.state.page)
        this.setState({state: num})
    }

    /**
     *订单搜索按钮事件 默认状态跳到所有订单状态,获取数据
     * 如果条件为空，则等价于点击所有订单
     */
    search() {
        this.setState({state: "0"})
        var _this=this;
        return;
        var content = $(this.refs.input.refs.input).val().trim()
        if (content.length > 0) {
            var name, orderid;
            if (typeof (Number(content)) == "number") {
                orderid = content;
                name = ""
            } else {
                name = content
                orderid = ""
            }
                    $.ajax({
                        url: `worker/queryorder?name=${name}&orderid=${orderid}`,
                        type: "get",
                        contentType: "application/json",
                        success: function (result) {
                                    if(result.msg=="success"){
                                        _this.setState({
                                            list:Object.assign(
                                                {
                                                    remainingTime: {
                                                        MS: 0,            //剩余时间毫秒数
                                                        hour: "",                  //显示小时数
                                                        minute: ""                  //显示分钟数
                                                    }
                                                }, result.data
                                        ,function(){
                                                    _this.setState({
                                                        totalNum:_this.state.list.length
                                                    })
                                                })
                                    })}
                        }
                    })
        }
        this.clearInput()
    }

    clearInput() {
        this.refs.input.refs.input.value = ""
    }


    /**
     * 点击分页时触发  获取数据
     * @param page    将要跳到的页数
     */
    paginatChange(page) {

        this.getData(this.state.state, page)
    }


    /**
     *
     * @param jfuid   用户id
     * @param state   状态
     * @param page    页数，默认从0开始
     * @param size    每页的数量
     */
    getData(jfuid, state, page = 0, size = 10) {
        return;
        //TODO 数据更新，重新更新倒计时
        clearInterval(this.setInterval)
        var _this = this;
        //每次更新数据时先让state清空，防止错位
        _this.abort = $.ajax({
            beforeSend: function () {
                if (_this.abort) {
                    _this.abort.abort()
                }
                // _this.setState({
                //     list:[]
                // })
            },
            type: "get",
            url: `worker/orders/${jfuid}/${state}/${page}/${size}`,
            data: data,
            success: function (result) {
                if (!_this.abort) {
                    //处理data
                    if (result.msg == "success") {

                                _this.setState({
                                    list: Object.assign(
                                        {
                                            remainingTime: {
                                                MS: 0,            //剩余时间毫秒数
                                                hour: "",                  //显示小时数
                                                minute: ""                  //显示分钟数
                                            }
                                        }, result.data
                                    ),
                                    totalNum: result.totalNum
                                })

                    }
                }
            },
            error: function (err) {
                console.log(err);
            },
            complete: function () {
                _this.abort = null;
            }

        })
    }


    /**
     * 订单领取放弃接口
     * @param orderid  订单号
     * @param state    订单状态  2 领取 3 放弃
     */
    receiveorder(orderid, state, cb) {
        $.ajax({
            url: `PATCH /worker/receiveorder/${orderid}/${state}`,
            type: "patch",
            contentType: "application/json",
            success: function (data) {
                cb(data)
            }
        })
    }


    /**
     * 弹窗回调，点击确定 1  其他 0
     * {
          "endtime": "string,订单结束时间",
          "id": "string,订单id",
          "unitprice": "string,订单单价",    格式 aa.00
          "servicetype": "string,业务类型",
          "ordercompletequantity": "string,完成订单量",  没有显示0
          "orderstate": "string,订单状态",
          "orderquantity": "string,订单量",
          "begintime": "string,订单开始时间", 格式 YYYY-MM-DD HH:mm:ss
          "name": "string,订单名称",
          "settlementprice": "string,结算金额",
          "targetarea": "string,目标区域",
          "servicecharge": "string,订单服务费"
}

     * @param num
     */
    popcb(num) {
        if (num == 0) {
            this.setState({
                pop: false
            })
        }
        if (num === 1) {
            var _this = this;

            //TODO 领取订单,清空订单号
            this.receiveorder(this.state.sendOrder, 2, function (data) {
                var obj = {}, newObj, index = _this.state.sendOrder.index, list;
                for (var key in data) {
                    obj[key] = data[key]
                }
                list = [..._this.state.list]

                newObj = Object.assign({}, list[index], obj)
                list.splice(index, 1, newObj);
                _this.setState({
                    list: list,
                    sendOrder: {
                        orderNum: "",
                        index: null
                    },
                    pop: false
                })
            })

        }

    }

    /**
     *点击立即领取,更改状态显示弹窗，设置查看的订单号
     */
    pop(orderNum, k) {
        this.setState({
            pop: true,
            sendOrder: {
                orderNum: orderNum,
                index: k
            }
        })
    }

    sizeChange(currentPage, pageSize) {
        this.setState({
            pageSize: pageSize
        })

    }

    render() {
        return (<div className="wrap">
            <Pop
                cb={this.popcb.bind(this)}
                close={this.state.pop}/>
            <TreeSelect
                style={{width: 400}}
                value={this.state.value}
                dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                treeData={treeData}
                treeDefaultExpandAll
                onChange={this.onChange}
            />
            <Tabs activeKey={this.state.state} onTabClick={this.onTabClick.bind(this)}>
                {this.state.tabName.map((v, k) => (<TabPane tab={k == 1 ?
                    <Badge count={this.state.count}><span style={{padding: "0 10px"}}>{v}</span></Badge> : v}
                                                            key={k}>
                    <div style={{padding: "10px 0 20px"}}>
                        <Input size="large" ref="input"
                               onPressEnter={this.search.bind(this)}
                               placeholder="请输入订单名称或订单号进行搜索"
                               style={{fontSize: "14px", width: "300px"}}/>
                        <Button
                            type="primary" onClick={this.search.bind(this)}
                            style={{height: "30px", fontSize: "14px", marginLeft: "10px"}}
                        >订单搜索</Button></div>

                    <div className="cont-box">
                        <ul className="tab-title">
                            <li className="col1">订单</li>
                            <li className="col2">订单数量</li>
                            <li className="col3">订单单价</li>
                            <li className="col4">订单服务费
                                <Tips pos={"bottomRight"} title={"根据订单数量，每一条收取1元钱的订单服务费"}/>
                            </li>
                            <li className="col5">订单状态</li>
                            <li className="col6">订单操作</li>
                        </ul>
                        <div className="list-box">
                            {this.state.list.length > 0 ? this.state.list.map((v, k) => (
                                <div key={k} className="my-order">
                                    <div className="order-title">
                                        <div className="left">
                                            <span className="date">{v.begintime}</span>
                                            <span className="order-num">{"订单号：" + v.id}</span>
                                        </div>
                                        <div className="right">
                                            <Right
                                                remainingTime={v.remainingTime.hour + "小时" + v.remainingTime.minute + "分钟"}
                                                state={v.orderstate}
                                                futurePrice={v.ordercompletequantity * v.unitprice}
                                                completedPrice={v.completedPrice}/>
                                        </div>

                                    </div>
                                    <div className="order-info">
                                        <ul>
                                            <li className="col1">
                                                <h3><a href="./detail" target="_blank">{v.name}</a></h3>

                                            </li>
                                            <li className="col2">
                                                <span>{v.orderquantity}</span>
                                            </li>
                                            <li className="col3">{"¥" + v.unitprice}</li>
                                            <li className="col4">{v.servicetype == "数据加工" ? "无服务费" : "¥" + v.orderquantity + ".00"}</li>
                                            <li className="col5">
                                                <State state={v.orderstate}/>
                                            </li>
                                            <li className="col6">
                                                <div style={{
                                                    display: v.orderstate == "待领取" ? "block" : "none",
                                                    marginBottom: "6px"
                                                }}>
                                                    <Button type={"primary"}
                                                            onClick={this.pop.bind(this, v.id, k)}>立即领取</Button>
                                                </div>
                                                <div><a style={{paddingLeft: "14px"}} href="./detail"
                                                        target="_blank">查看详情</a></div>
                                            </li>
                                            <li className="icon-bg">
                                    <span
                                        style={{backgroundColor: v.servicetype == "销售线索挖掘" ? "#23A4FF" : "#FF9A4D"}}>{v.servicetype}</span>
                                            </li>
                                            <li className="progress-bar"
                                                style={{display: v.ordercompletequantity ? "block" : "none"}}>
                                                <div className="outter-bar">
                                                    <div className="jquery"
                                                         style={{width: (100 * v.ordercompletequantity / v.orderquantity) + "%"}}/>
                                                </div>
                                                {/*--注：此处css为精度条动效，width与上方width保持一致---*/}
                                                {/*--注：此处css为精度条动效，width与上方width保持一致---*/}
                                                <div
                                                    className="finish-num">{"已完成：" + v.ordercompletequantity + " 条"}</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>)) :
                                <div style={{
                                    width: "100%",
                                    height: "500px",
                                    textAlign: "center",
                                    lineHeight: "740px",
                                    background: "url(" + noData + ") no-repeat center"
                                }}>
                                    暂无订单!</div>}

                        </div>
                    </div>
                    <div style={{
                        display: this.state.list.length == 0 ? "none" : "block",
                        padding: "30px 0",
                        textAlign: "center"
                    }}>
                        <Pagination
                            showSizeChanger={true}
                            showQuickJumper
                            showTotal={(total, range) => `共${Math.ceil(total / this.state.pageSize)}页 共${total} 条`}
                            onShowSizeChange={this.sizeChange.bind(this)}
                            defaultCurrent={1}
                            total={this.state.totalNum}
                            onChange={this.paginatChange.bind(this)}/>
                    </div>
                </TabPane>))}
            </Tabs>
        </div>)

    }
}


render(<OrderList/>, root)