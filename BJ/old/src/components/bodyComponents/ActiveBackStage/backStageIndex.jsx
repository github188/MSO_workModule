import React from "react";
import {Button, Input} from "antd";

const titleData = [
    {
        title: "基础信息配置",
        context: ["赛制管理", "学校管理", "场地管理"]
    },
    {
        title: "注册管理",
        context: ["学生管理", "教师管理", ""]
    },
    {
        title: "常用操作",
        context: ["新建活动", "", ""]
    }
];
const state = ["待发布", "待举行", "进行中"];
const items = ["2017届 “绿港杯区” 青少年足球超级联赛", "区域小学生滑轮比赛", "篮球超级联赛", "2016届 “绿港杯区” 青少年足球超级联赛"];
const list=[
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛",
    "2017届 “绿港杯区” 青少年足球超级联赛"
]
export default class BackStageIndex extends React.Component {
    render() {
        return (<div style={{width: "1100px", margin: "0 auto"}}>
            <div className="clear" style={{
                padding: "40px 0", letterSpacing: "1px"
            }}>
                {titleData.map((v, k)=>(
                    <ul
                        key={k}
                        className="fl"
                        style={{
                            border: "1px solid #E7E7E7",
                            width: "360px",
                            marginLeft: k == 0 ? "0px" : "10px"
                        }}>
                        <li style={{
                            height: "58px",
                            lineHeight: "58px",
                            paddingLeft: "48px",
                            fontSize: "22px",
                            fontWeight: "bold",
                            position: "relative"
                        }}>
                            {v.title}
                            <i style={{
                                position: "absolute",
                                width: "8px",
                                height: "20px",
                                backgroundColor: "#016EC1",
                                top: "50%",
                                marginTop: "-10px",
                                left: "18px",
                                borderRadius: "4px"
                            }}></i>
                        </li>
                        {v.context.map((v1, k1)=>(<li
                            style={{
                                paddingLeft: "48px",
                                lineHeight: "46px",
                                height: "46px",
                                borderTop: k1 == 0 ? "1px solid #E5E5E5" : "1px dashed #C5C5C5"
                            }}
                            key={k1}>
                            {v1}
                        </li>))}
                    </ul>
                ))}
            </div>
            <div>
                <ul className="clear" style={{
                    padding: "0px 6px",
                    borderBottom: "1px solid #E7E7E7"
                }}>
                    {state.map((v, k)=>(<li
                        className="clear"
                        key={k}
                        style={{float: "left"}}
                    >
                        <h2 style={{
                            position: "relative",
                            fontSize: "22px",
                            fontWeight: "bold",
                            float: "left",
                            padding: k == 0 ? "0 40px 26px 0" : "0 40px 26px 40px"
                        }}>{v}
                            <i style={{
                                display: k == 0 ? "block" : "none",
                                position: "absolute",
                                width: "38px",
                                height: "4px",
                                borderRadius: "2px",
                                left: "50%",
                                marginLeft: k == 0 ? "-38px" : "-19px",
                                bottom: "14px",
                                backgroundColor: "#016EC1"
                            }}></i>
                        </h2>
                        <span style={{marginTop: "8px", float: "right", color: "#E5E5E5"}}>|</span>
                    </li>))}
                </ul>
                <ul style={{marginTop: "24px", border: "1px solid #E7E7E7"}}>
                    {items.map((v, k)=>(<li key={k}>
                        <li style={{
                            lineHeight: "56px",
                            padding: "0 60px",
                            height: "56px",
                            borderTop: k == 0 ? "none" : "1px solid #E7E7E7"
                        }}>

                            <div className="rl" style={{height: "56px"}}>
                                <Button style={{height: "40px"}}>查看详情</Button>
                                <Button style={{marginLeft: "18px", height: "40px"}} type="primary">立即发布</Button>
                            </div>
                            {v}
                        </li>
                    </li>))}
                </ul>
            </div>
            <div style={
            {
                height: "800px"
            }
            }>
                <h1 style={{
                    height: "71px",
                    lineHeight: "70px",
                    paddingRight: "70px",
                    paddingLeft: "10px",
                    borderBottom: "1px solid #E5E5E5",
                    position: "relative"
                }}>
                    体育活动 <i style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "1px",
                    width: "600px",
                    backgroundColor: "#2081C9"
                }}></i>
                    <div className="rl">
                        <Input style={{width: "182px", height: "44px"}} placeholder="请输入搜索内容"/><Button
                        style={{height: "44px", marginLeft: "16px"}} type="primary" icon="search">搜索</Button>
                    </div>
                </h1>

                <ul style={{border:"1px solid #E5E5E5",margin:"20px 0"}}>
                    {list.map((v,k)=>(<li style={{
                        borderTop:k==0?"none":"1px solid #E5E5E5",
                        padding:"0 64px 0 58px",
                        height:"56px",
                        lineHeight:"54px"}}>
                        {v} <span className="rl">(04-05)</span>
                    </li>))}
                </ul>
                
                
                <footer style={{border: "1px solid #E5E5E5", lineHeight:"58px",height: "60px", padding: "0 70px 0 142px"}}>
                    第1页 , 每页7条 , 共2页 , 共20条数据
                    <div className="rl">
                        <Button>首页</Button> &nbsp;<Button>上一页</Button> &nbsp;<Button>下一页</Button> &nbsp;<Button>尾页</Button>
                    </div>
                </footer>
            </div>
        </div>)
    }
}