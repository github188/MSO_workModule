/**
 * Created by kellyZhang on 2017/3/16.
 */
import React from "react";
import IndexBodyImg from "../../imgs/IndexBody.jpg";
import IndexNews from "./IndexNews";
const IndexNews1 = {
    iconName: "icon iconfont icon-tongzhi",
    style: {
        position: "absolute",
        left: "-26px",
        top: "50%",
        marginTop: "-33px",
        borderRadius: "5px",
        width: "66px",
        height: "66px",
        textAlign: "center",
        lineHeight: "66px",
        color: "#ffffff",
        fontSize: "34px",
        backgroundColor: "#00C1EE"

    },
    title: "通知/公告",
    mation: [{
        l: "北京学生活动管理中心主楼周边绿化养护招标公告",
        r: ""
    }, {
        l: "北京学生活动管理中心网络安全加固建设...",
        r: ""
    }, {
        l: "北京学生活动管理中心网络安全加固建设...",
        r: ""
    }]
}
const IndexNews2 = {
    iconName: "icon iconfont icon-xinwen",
    style: {
        position: "absolute",
        left: "-26px",
        top: "50%",
        marginTop: "-33px",
        borderRadius: "5px",
        width: "66px",
        height: "66px",
        textAlign: "center",
        lineHeight: "66px",
        color: "#ffffff",
        fontSize: "34px",
        backgroundColor: "#06C181"
    },
    title: "新闻中心",
    mation: [{
        l: "市教委国际合作与交流处领导到中心调研",
        r: "(04-05)"
    }, {
        l: "市教委基督一处到中心调研",
        r: "(04-05)"
    }, {
        l: "中心党委书记张萍参加支部党员教育活动",
        r: "(04-03)"
    }]
}
import activeLogin from "./newActives/Login";//


export default class IndexPages extends React.Component {
    render() {
        return (<div style={{backgroundColor:"red "}}>
            {/*<img src={IndexBodyImg} alt="" style={{width: "100%"}}/>*/}
            {/*<div style={{margin: "0 auto", marginTop: "-160px", width: "1100px",textAlign:"center"}}>*/}
                {/*<IndexNews {...IndexNews1}/>*/}
                {/*<div style={{display:"inline-block", width: "40px"}}></div>*/}
                {/*<IndexNews {...IndexNews2}/>*/}
            {/*</div>*/}

{activeLogin}


        </div>)
    }
}