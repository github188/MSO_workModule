import React from "react";
import {Table} from "react";
import bg from "../../../imgs/bg.png";
import mingci from "../../../imgs/mingci.png";
import three from "../../../imgs/three.png";
import second from "../../../imgs/second.png";
import top from "../../../imgs/top.png";

const data1 = [
    {teamType: "初中组", num: [{img: top, name: "张文"}, {img: second, name: "陈思思"}, {img: three, name: "李丽"}]},
    {teamType: "小学甲组", num: [{img: top, name: "张文"}, {img: second, name: "陈思思"}, {img: three, name: "李丽"}]}
]
const data2 = [
    {
        teamType: "初中组",
        teamNum: [
            {img: top, teamName: "北京市海淀区第一中学-1队", detail: ["唐一", "唐二", "唐二", "唐二", "唐二", "唐二", "唐二"]},
            {img: second, teamName: "北京市海淀区第一中学-2队", detail: ["唐一", "唐二", "唐二", "唐二", "唐二", "唐二", "唐二"]},
            {img: three, teamName: "北京市海淀区第一中学-3队", detail: ["唐一", "唐二", "唐二", "唐二", "唐二", "唐二", "唐二"]}
        ]
    }, {
        teamType: "小学甲组",
        teamNum: [
            {img: top, teamName: "北京市海淀区第一中学-1队", detail: ["唐一", "唐二", "唐二", "唐二", "唐二", "唐二", "唐二"]},
            {img: second, teamName: "北京市海淀区第一中学-2队", detail: ["唐一", "唐二", "唐二", "唐二", "唐二", "唐二", "唐二"]},
            {img: three, teamName: "北京市海淀区第一中学-3队", detail: ["唐一", "唐二", "唐二", "唐二", "唐二", "唐二", "唐二"]}
        ]
    }
]
export default class LookScore extends React.Component {
    render() {
        return (<div style={{
            width: "100%",
            backgroundImage: "url(" + bg + ")",
            backgroundPosition: "top center",
            backgroundSize: "1920px",
            backgroundRepeat: "no-repeat",
            paddingTop:"224px"
        }}>
            <div style={{width: "1100px", margin: "0 auto",backgroundColor:"#FFFFFF"}}>

                <div style={{marginBottom: "30px"}}>
                    <header style={{
                        backgroundColor: "#F8F8F8",
                        letterSpacing: "1px",
                        padding: "16px 0 16px 70px",
                        border: "1px solid #EAEAEA",
                        color: "#333333",
                        fontSize: "20px",
                        fontWeight: "bold",
                        position: "relative"
                    }}>25米障碍往返 （蛇形）
                        <i style={{
                            position: "absolute",
                            top: "50%",
                            marginTop: "-9px",
                            left: "44px",
                            width: "6px",
                            height: "18px",
                            backgroundColor: "#006ebb",
                            borderRadius: "3px"
                        }}></i>
                    </header>
                    <div className="body clear">
                        {data1.map((v, k)=>(<ul
                                key={k}
                                style={{
                                    color: "#000000",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                    borderLeft: k == 0 ? "1px solid #EAEAEA" : "none",
                                    borderRight: "1px solid #EAEAEA",
                                    float: 'left',
                                    width: "50%"
                                }}>

                                <li
                                    style={{
                                        paddingLeft: "46px",
                                        lineHeight: "58px",
                                        borderBottom: "1px solid #EAEAEA",
                                        height: "58px"
                                    }}>组别：{v.teamType}</li>
                                {v.num.map((v, k)=>(
                                    <li
                                        style={{
                                            lineHeight: "58px",
                                            textAlign: "center",
                                            borderBottom: "1px solid #EAEAEA",
                                            position: "relative",
                                            height: "58px",
                                            backgroundColor: k == 1 ? "#F8F8F8" : "#FFFFFF"
                                        }}
                                        key={k}>
                                        <div style={{
                                            color: "red",
                                            position: "absolute",
                                            top: "50%",
                                            marginTop: "-20px",
                                            left: "76px",
                                            lineHeight: "40px",
                                            textAlign: "center",
                                            width: "40px",
                                            height: "40px",
                                            backgroundPosition: "center",
                                            backgroundImage: "url(" + mingci + ")"
                                        }}>{k + 1}</div>
                                        <img style={{
                                            position: "absolute",
                                            top: "50%",
                                            marginTop: "-13.33px",
                                            left: "188px",
                                            width: "20px"
                                        }} src={v.img} alt=""/>
                                        <span>
                                            {v.name}
                                        </span>
                                    </li>))}
                                <li style={{
                                    borderBottom: "1px solid #EAEAEA",
                                    lineHeight: "58px",
                                    height: "58px",
                                    textAlign: "center"
                                }}><span style={{cursor:"pointer"}}>查看更多</span>
                                </li>
                            </ul>
                        ))}

                    </div>
                </div>

                {data2.map((v2, k2)=>(<li
                        key={k2}
                        style={{marginBottom: "30px"}}>
                        <header style={{
                            backgroundColor: "#F8F8F8",
                            letterSpacing: "1px",
                            padding: "16px 0 16px 70px",
                            border: "1px solid #EAEAEA",
                            color: "#333333",
                            fontSize: "20px",
                            fontWeight: "bold",
                            position: "relative"
                        }}>足球联赛
                            <i style={{
                                position: "absolute",
                                top: "50%",
                                marginTop: "-9px",
                                left: "44px",
                                width: "6px",
                                height: "18px",
                                backgroundColor: "#006ebb",
                                borderRadius: "3px"
                            }}></i>
                        </header>
                        <ul style={{
                            color: "#000000",
                            fontWeight: "bold",
                            fontSize: "14px",
                            border: "1px solid #EAEAEA",
                            borderTop: "none"
                        }}>
                            <li
                                style={{
                                    paddingLeft: "46px",
                                    lineHeight: "58px",
                                    borderBottom: "1px solid #EAEAEA",
                                    height: "58px"
                                }}>组别：{v2.teamType}</li>

                            {v2.teamNum.map((v1, k1)=>(<li
                                style={{
                                    lineHeight: "58px",
                                    paddingLeft: "250px",
                                    borderBottom: "1px solid #EAEAEA",
                                    position: "relative",
                                    height: "58px",
                                    backgroundColor: k1 == 1 ? "#F8F8F8" : "#FFFFFF"
                                }}
                                key={k1}>

                                <div style={{
                                    color: "red",
                                    position: "absolute",
                                    top: "50%",
                                    marginTop: "-20px",
                                    left: "76px",
                                    lineHeight: "40px",
                                    textAlign: "center",
                                    width: "40px",
                                    height: "40px",
                                    backgroundPosition: "center",
                                    backgroundImage: "url(" + mingci + ")"
                                }}>{k1 + 1}</div>

                                <img style={{
                                    position: "absolute",
                                    top: "50%",
                                    marginTop: "-13.33px",
                                    left: "188px",
                                    width: "20px"
                                }} src={v1.img} alt=""/>

                                <div>
                                    <p style={{height:"20px",lineHeight:"42px"}}>{v1.teamName}</p>
                                    <p style={{fontSize:"12px",height:"38px",lineHeight:"32px",fontWeight: "normal", color: "#989898"}}>
                                        {v1.detail.map((v, k)=>(<span
                                            key={k}>
                                        {k == 0 ? v : ("、" + v)}
                                    </span>))}
                                    </p>
                                </div>
                            </li>))}


                            <li style={{
                                lineHeight: "58px",
                                height: "58px",
                                textAlign: "center"
                            }}><span style={{cursor:"pointer"}}>查看更多</span>
                            </li>
                        </ul>
                    </li>)
                )
                }


            </div>
        </div>)
    }
}