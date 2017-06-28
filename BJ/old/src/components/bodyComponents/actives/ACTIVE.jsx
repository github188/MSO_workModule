/**
 * Created by kellyZhang on 2017/3/16.
 */
import React from "react";
import {Row, Col, Button, Input, Icon} from "antd";
import More from "../more";
import MoreJ from "../+more";
import img02 from "../../../imgs/new_03-02.jpg";
import img04 from "../../../imgs/new_03-04.jpg";
import img05 from "../../../imgs/new_03-05.jpg";

const foot = [
    {img: img02, p: "中学生书法"},
    {img: img04, p: "中学生书法"},
    {img: img05, p: "中学生书法"}
]

const mark = [
    "近期在北京学生活动",
    "动员会顺利完成",
    "动员会顺利完成",
    "动员会顺利完成"
];
const sign = [
    " 近期在北京学生活动",
    "动员会顺利完成",
    "动员会顺利完成",
    "动员会顺利完成"
]
export default class IndexPage extends React.Component {
    render() {
        return (<div style={{width: "1100px", margin: "0 auto"}}>
            <Row style={{marginTop: "40px"}}>
                <Col span={8}>
                    <div style={{
                        width: "100%",
                        height: "260px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                    }}>
                        <h1 style={{
                            padding: "10px",
                            marginRight: "4px",
                            borderBottom: "1px solid #E5E5E5",
                            fontSize: "18px"
                        }}>
                            <MoreJ/>
                            <i style={{
                                marginTop: "3px",
                                float: "left",
                                display: "block",
                                width: "6px",
                                height: "20px",
                                backgroundColor: "blue",
                                borderRadius: "8px"
                            }}></i>
                            <span style={{marginLeft: "8px"}}>成绩公布</span>
                        </h1>
                        <ul style={{padding: "10px 16px 0 8px", color: "#949494"}}>
                            {mark.map((v, k)=>(<li
                                key={k}
                                style={{
                                    padding: "12px 6px",
                                    borderBottom: "1px dashed #CDCDCD",
                                    fontSize: "14px"
                                }}>
                                {v}
                            </li>))}
                        </ul>
                    </div>
                </Col>
                <Col span={10}>
                    <div style={{width: "100%", height: "240px"}}>
                        <div style={{
                            margin: "0 auto",
                            width: "90%",
                            height: "260px",
                            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                        }}>
                            <h1 style={{
                                padding: "10px",
                                marginRight: "4px",
                                borderBottom: "1px solid #E5E5E5",
                                fontSize: "18px"
                            }}>
                                <MoreJ/>
                                <i style={{
                                    marginTop: "3px",
                                    float: "left",
                                    display: "block",
                                    width: "6px",
                                    height: "20px",
                                    backgroundColor: "blue",
                                    borderRadius: "8px"
                                }}></i>
                                <span style={{marginLeft: "8px"}}>正在报名</span>
                            </h1>
                            <ul style={{padding: "10px 16px 0 8px", color: "#949494"}}>
                                {sign.map((v, k)=>(<li
                                    style={{
                                        padding: "12px 6px",
                                        borderBottom: "1px dashed #CDCDCD",
                                        fontSize: "14px"
                                    }}
                                    key={k}>
                                    {v}
                                </li>))}

                            </ul>
                        </div>
                    </div>
                </Col>
                <Col span={6}>
                    <div style={{
                        width: "100%",
                        height: "260px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                    }}>
                        <ul className="clear"
                            style={{
                                borderBottom: "1px solid #E6E6E6",
                                textAlign: "center",
                                padding: "10px 0",
                                fontSize: "14px"
                            }}>
                            <li style={{float: "left", width: "50%"}}>
                                <div style={{borderRight: "1px solid #E9E9E9"}}>查看报名</div>
                                <div style={{
                                    margin: "0 auto",
                                    marginTop: "5px",
                                    width: "50px",
                                    backgroundColor: "blue",
                                    height: "2px"
                                }}></div>
                            </li>
                            <li style={{float: "left", width: "50%"}}>
                                <div style={{borderRight: "1px solid #E9E9E9"}}>活动管理</div>
                                <div style={{
                                    margin: "0 auto",
                                    marginTop: "5px",
                                    width: "40px",
                                    backgroundColor: "none",
                                    height: "2px"
                                }}></div>
                            </li>
                        </ul>
                        <ul style={{textAlign: "center", fontSize: "14px"}}>
                            <li style={{margin: "30px 0"}}>
                                <Input style={{width: "224px"}}
                                       prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="请输入账号"/>
                            </li>
                            <li style={{margin: "30px 0"}}>
                                <Input style={{width: "150px", marginRight: "10px"}}
                                       prefix={<Icon type="lock" style={{fontSize: 13}}/>} placeholder="请输入密码"/>
                                <Button type="primary">登陆</Button></li>
                            <li ><span style={{cursor: "pointer"}}>忘记密码?</span>&nbsp;|&nbsp; <span
                                style={{cursor: "pointer"}}>注册新账号</span></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: "10px"}}>
                <h1 style={{
                    padding: "10px",
                    paddingLeft: 0,
                    borderBottom: "1px solid #EAEAEA",
                    fontSize: "18px",
                    position: "relative"
                }}>
                    <MoreJ mt={8}/>
                    体育活动
                    <div style={{
                        position: "absolute",
                        height: "1px",
                        width: "540px",
                        backgroundColor: "#1F7FC9",
                        bottom: "-1px"
                    }}></div>
                </h1>
                <Row style={{marginTop: "30px", fontSize: "13px"}}>
                    <Col span={7}>
                        <div style={{height: "300px", paddingLeft: "20px"}}>
                            <div style={{
                                height: "200px",
                                backgroundImage: "url(" + img02 + ")",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%"
                            }}></div>
                            <h5 style={{
                                textAlign: "center",
                                fontSize: "13px",
                                letterSpacing: "2px",
                                color: "#484848",
                                fontWeight: "bold",
                                padding: "18px 0"
                            }}>“绿港杯”区青少年足球超级联赛</h5>
                            <p style={{marginTop: "-10px", padding: "0px 30px 0px 15px", lineHeight: "20px"}}>
                                近期在北京学生活动管理中心多功能展厅召开“中华美德少”大会
                                <More/>
                            </p>
                        </div>
                    </Col>
                    <Col span={7}>
                        <div style={{
                            height: "300px",
                            paddingLeft: "20px"
                        }}>
                            <div style={{
                                height: "200px",
                                backgroundImage: "url(" + img05 + ")",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "100%"
                            }}></div>
                            <h5 style={{
                                fontSize: "13px",
                                letterSpacing: "2px",
                                color: "#484848",
                                fontWeight: "bold",
                                textAlign: "center",
                                padding: "18px 0"
                            }}>“绿港杯”区青少年足球超级联赛</h5>
                            <p style={{marginTop: "-10px", padding: "0px 30px 0px 15px", lineHeight: "20px"}}>
                                近期在北京学生活动管理中心多功能展厅召开“中华美德少”大会 <More/>
                            </p>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div style={{height: "300px", paddingLeft: "40px"}}>
                            <h5 style={{
                                fontSize: "13px",
                                letterSpacing: "2px",
                                color: "#484848",
                                fontWeight: "bold",
                                padding: "18px 0"
                            }}>“绿港杯”区青少年足球超级联赛</h5>
                            <ul style={{paddingRight: "10px"}}>
                                <li style={{
                                    padding: "0px 0px 10px 4px",
                                    borderBottom: "1px dashed #CDCDCD",
                                    lineHeight: "24px"
                                }}>
                                    近期在北京学生活动管理中心多功能厅召开“中华美德少年行-家风故事汇”全市动员大会。近期在北京学生活动管理中心多功能厅召开了“中华美德少年行-家风故事汇” &nbsp;
                                    <More/>
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
            </Row>
            <Row style={{margin: "40px 0"}}>
                <Col span={11}>
                    <div>
                        <div style={{
                            fontSize: "16px",
                            display: "inline-block",
                            color: "#ffffff",
                            padding: "13px 22px",
                            backgroundColor: "#006FC1"
                        }}> 科技活动
                        </div>
                    </div>
                    <div style={{height: "300px"}}>
                        <h5 style={{
                            fontSize: "13px",
                            letterSpacing: "2px",
                            color: "#484848",
                            fontWeight: "bold",
                            padding: "18px 0"
                        }}>“绿港杯”区青少年足球超级联赛</h5>
                        <ul style={{
                            paddingRight: "10px", fontSize: "13px",
                        }}>
                            <li style={{
                                padding: "0px 40px 10px 4px",
                                borderBottom: "1px dashed #CDCDCD",
                                lineHeight: "24px"
                            }}>
                                近期在北京学生活动管理中心多功能厅召开“中华美德少年行-家风故事汇”全市动员大会。近期在北京学生活动管理中心多功能厅召开了“中华美德少年行-家风故事汇” &nbsp;
                                <More/>
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
                <Col span={2}/>
                <Col span={11}>
                    <div>
                        <div style={{
                            fontSize: "16px",
                            display: "inline-block",
                            color: "#ffffff",
                            padding: "13px 22px",
                            backgroundColor: "#006FC1"
                        }}>艺术活动
                        </div>
                    </div>
                    <div style={{height: "300px"}}>
                        <h5 style={{
                            fontSize: "13px",
                            letterSpacing: "2px",
                            color: "#484848",
                            fontWeight: "bold",
                            padding: "18px 0"
                        }}>“绿港杯”区青少年足球超级联赛</h5>
                        <ul style={{
                            paddingRight: "10px", fontSize: "13px",
                        }}>
                            <li style={{
                                padding: "0px 40px 10px 4px",
                                borderBottom: "1px dashed #CDCDCD",
                                lineHeight: "24px"
                            }}>
                                近期在北京学生活动管理中心多功能厅召开“中华美德少年行-家风故事汇”全市动员大会。近期在北京学生活动管理中心多功能厅召开了“中华美德少年行-家风故事汇” &nbsp;
                                <More/>
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
            <Row style={{margin: "40px 0"}}>
                <h1 style={{
                    padding: "10px",
                    paddingLeft: 0,
                    borderBottom: "1px solid #EAEAEA",
                    fontSize: "18px",
                    position: "relative"
                }}>
                    活动瞬间
                    <div style={{
                        position: "absolute",
                        height: "1px",
                        width: "540px",
                        backgroundColor: "#1F7FC9",
                        bottom: "-1px"
                    }}></div>
                </h1>
                <ul className="clear" style={{
                    letterSpacing: "2px",
                    fontSize: "14px",
                    marginTop: "30px",
                    padding: "16px 8px",
                    border: "1px solid #E7E7E7"
                }}>
                    {
                        foot.map((v, k)=>(
                            <li key={k} style={{padding: "0 8px", float: "left", width: "33.3%", height: "300px"}}>
                                <div style={{
                                    height: "260px",
                                    width: "100%",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundImage: "url(" + v.img + ")"
                                }}>
                                </div>
                                <p style={{textAlign: "center", padding: "14px 0"}}>{v.p}</p>
                            </li>))
                    }

                </ul>
            </Row>
        </div>)
    }
}