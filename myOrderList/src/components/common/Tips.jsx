import React, {Component} from "react";
import {Tooltip} from "antd";

export default class Tip extends Component {
    render() {
        return (<Tooltip  title={this.props.title || ""} placement={this.props.pos || "topRight"}>
             <span className="bubble-box" style={{display:!this.props.hide?"inline-block":"none"}}>
            <i>？</i>
             </span>
        </Tooltip>)
    }
}