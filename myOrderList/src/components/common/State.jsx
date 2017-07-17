import React, {Component} from "react";

export default class State extends Component {
    render() {
        var state = this.props.state;
        if (state == "已放弃"||state=="已取消") {
            return <div style={{margin:"0 auto",width:"64px",height:"27px",color:"#ffffff",textAlign:"center",lineHeight:"27px",backgroundColor:"#36D569"}}>已放弃</div>
        }
        if (state == "已完成") {
            return <div style={{margin:"0 auto",width:"64px",height:"27px",color:"#ffffff",textAlign:"center",lineHeight:"27px",backgroundColor:"#0098D8"}}>已完成</div>
        }
        if (state == "进行中") {
            return <div style={{margin:"0 auto",width:"64px",height:"27px",color:"#ffffff",textAlign:"center",lineHeight:"27px",backgroundColor:"#00C5D0"}}>进行中</div>
        }
        if (state == "结算中") {
            return <div style={{margin:"0 auto",width:"64px",height:"27px",color:"#ffffff",textAlign:"center",lineHeight:"27px",backgroundColor:"#00C5D0"}}>结算中</div>
        }
        if (state == "暂停") {
            return <div style={{margin:"0 auto",width:"64px",height:"27px",color:"#ffffff",textAlign:"center",lineHeight:"27px",backgroundColor:"#F4505D"}}>暂停</div>
        }
        if (state == "待领取") {
            return <div style={{margin:"0 auto",width:"64px",height:"27px",color:"#ffffff",textAlign:"center",lineHeight:"27px",backgroundColor:"#F4505D"}}>待领取</div>
        } else {
            return <span></span>
        }
    }
}