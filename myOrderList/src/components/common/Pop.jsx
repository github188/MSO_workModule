import React, {Component} from "react";
import "../pop.css";
export default class Pop extends Component {
    close(num) {
        this.props.cb(num)
    }

    render() {
        return (<div className="cover" style={{display: this.props.close ? "block" : "none"}}>
            <div className="cover-box">
                <div className="title">提示<span className="close2" onClick={() => this.close(0)}/></div>
                <div className="context" >{this.props.content||"确认领取此订单吗？"}</div>
                <div className="bt-choose">
                    <button type="button" className="bd_gray close2" onClick={() => this.close(0)}>取消</button>
                    <button type="button" className="bg_red close2" onClick={() => this.close(1)}>确定</button>
                </div>
            </div>
        </div>)
    }
}