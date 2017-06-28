/**
 * Created by kellyZhang on 2017/3/16.
 */
import React from "react";
import {Row, Col} from "antd";
import MoreJ from "./+more";
import bigNew from "../../imgs/new.jpg";
import newImg0 from "../../imgs/new_03-02.jpg";
import newImg1 from "../../imgs/new_03-03.jpg";
import newImg2 from "../../imgs/new_03-04.jpg";
import newImg3 from "../../imgs/new_03-05.jpg";
import newImg4 from "../../imgs/new_03-06.jpg";

const LBData = [
    '招投标通知',
    '“中华美德少年行-家风故事汇” &nbsp;动员会',
    '“中华美德少年行-家风故事汇” &nbsp;动员会',
    '“中华美德少年行-家风故事汇” &nbsp;动员会',
    '“中华美德少年行-家风故事汇” &nbsp;动员会',
    '“中华美德少年行-家风故事汇” &nbsp;动员会',
    '“中华美德少年行-家风故事汇” &nbsp;动员会'
]

const RBData = [
    {font: "我中心开展消防演练活动", img:newImg0},
    {font: "我中心开展消防演练活动", img:newImg1},
    {font: "我中心开展消防演练活动", img:newImg2},
    {font: "我中心开展消防演练活动", img:newImg3},
    {font: "我中心开展消防演练活动", img:newImg4},
    {font: "我中心开展消防演练活动", img:newImg0}
]
export default class IndexPage extends React.Component {
    render() {
        return (<div>
            <Row  style={{width:"1100px", margin:"20px auto"}}>
                <Col span={12}>
                    <div style={{
                        border: "1px solid #EEEEEE",
                        width: "100%",
                        height: "400px",
                        padding: "20px"
                    }}>
                        <div style={{
                            width: "100%",
                            height: "358px",
                            backgroundImage:"url("+bigNew+")",
                            backgroundSize:"cover",
                            backgroundPosition:"center"
                        }}></div>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{width: "100%", height: "400px", padding: "0 0 0 20px"}}>
                        <h1 style={{
                            padding: "10px",
                            paddingLeft: 0,
                            borderBottom: "1px solid #E5E5E5",
                            position:"relative"
                        }}>
                            <MoreJ mt={8}/>
                            新闻动态 <i style={{position:"absolute",left:0,bottom:0,height:"1px",width:"200px",backgroundColor:"#2081C9"}}></i>
                        </h1>
                        <h4 style={{padding: "20px 0 10px 0", fontSize: "16px"}}>“ 中华美德少年行-家风故事汇 ” &nbsp;&nbsp;动员</h4>
                        <ul style={{paddingRight: "10px", color: "#9D9D9D",fontSize:"14px"}}>
                            <li style={{padding: "0 34px 10px 0", borderBottom: "1px dashed #CDCDCD",lineHeight:"24px"}}>
                                近期在北京学生活动管理中心多功能厅召开“中华美德少年行-家风故事汇”全市动员大会。近期在北京学生活动管理中心多功能厅召开了“中华美德少年行-家风故事汇” &nbsp;<span style={{color:"#5F5F5F"}}>【更多】</span>
                            </li>
                            <li style={{padding: "16px 2px", borderBottom: "1px dashed #CDCDCD"}}><span
                                style={{float: "right"}}>（04-05）</span> “中华美德少年行-家风故事汇” &nbsp;动员会顺利完成
                            </li>
                            <li style={{padding: "16px 2px", borderBottom: "1px dashed #CDCDCD"}}><span
                                style={{float: "right"}}>（04-05）</span> “中华美德少年行-家风故事汇” &nbsp;动员会顺利完成
                            </li>
                            <li style={{padding: "16px 2px", borderBottom: "1px dashed #CDCDCD"}}><span
                                style={{float: "right"}}>（04-05）</span> “中华美德少年行-家风故事汇” &nbsp;动员会顺利完成
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row style={{margin:"40px auto",width:"1100px"}}>
                <Col span={10}>
                    <div style={{width: "100%", padding: "0px 0px 100px 20px"}}>
                        <h1 style={{
                            padding: "10px",
                            paddingLeft: 0,
                            borderBottom: "1px solid #E5E5E5",
                            position:"relative"
                        }}>
                           <MoreJ/>
                            公告 <i style={{position:"absolute",left:0,bottom:0,height:"1px",width:"200px",backgroundColor:"#2081C9"}}></i>
                        </h1>

                        <ul style={{color: "#939393", paddingTop: "20px",fontSize:"14px"}}>
                            {LBData.map((v, k)=>(
                                <li key={k} style={{padding: "16px 2px", borderBottom: "1px dashed #CDCDCD"}}>
                                    <span style={{float: "right", marginRight: "8px"}}>（04-05）</span>
                                    <div dangerouslySetInnerHTML={{__html: v}}></div>
                                </li>
                            ))}

                        </ul>
                    </div>
                </Col>
                <Col span={14}>
                    <div style={{width: "100%", paddingLeft: "30px"}}>
                        <h1 style={{
                            padding: "10px",
                            paddingLeft: 0,
                            borderBottom: "1px solid #E5E5E5",
                            position:"relative"
                        }}>
                            <MoreJ/>
                            精彩图文 <i style={{position:"absolute",left:0,bottom:0,height:"1px",width:"300px",backgroundColor:"#2081C9"}}></i>
                        </h1>
                        <ul >
                            {RBData.map((v, k)=>(<li
                                style={{
                                    float: 'left',
                                    width: "33%",
                                    padding: "10px 15px 15px 0",
                                    textAlign: "center"
                                }}
                                key={k}>
                                <div style={{
                                    width: "100%",
                                    height: "160px",
                                    marginBottom: "10px",
                                    backgroundImage: "url("+v.img+")",
                                    backgroundSize:"cover",
                                    backgroundPosition:"center"
                                }}></div>
                                <span style={{color: "#434343"}}>{v.font}</span>
                            </li>))}
                        </ul>
                    </div>
                </Col>

            </Row>
        </div>)
    }
}