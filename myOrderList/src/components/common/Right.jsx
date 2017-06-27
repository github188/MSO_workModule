import React, {Component} from "react";
import Tips from "./Tips";

export default class Right extends Component {

    render() {
        if (this.props.state == "待领取") {
            return ( <span className="timer">此订单剩余时间还有：
                      <span className="red">{this.props.remainingTime}
                              <span className="bubble-box">
                                  <Tips title={"每个订单的领取时间为24小时，超过时间未领取的订单将被视为自动放弃"} pos={"bottomRight"}/>
                             </span>
                        </span>
                  </span>)
        }
        if (this.props.state == "结算中") {
            //实际结算金额= 完成量*单价
            return (<span className="cash">预计结算金额：<span className="blue">{"¥"+this.props.futurePrice+".00"}</span></span>)
        }
        if (this.props.state == "已完成") {
            //数据由后台给
            return (<span className="cash">实际结算金额：<span className="blue">{"¥"+this.props.completedPrice}</span></span>)
        }else{
            return (<span></span>)
        }
    }
}