import React,{Component} from "react";
import {Spin} from "antd";

export default class Loading extends Component{
    render(){
        return (<div>
            <h1 style={{height:"200px",backgroundColor:"red"}}>哈哈</h1>
            <Spin spinning={true}>
            <div style={{height:"500px"}}>WERWERWE</div>
            </Spin>
        </div>)
    }
}