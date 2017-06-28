/**
 * Created by kellyZhang on 2017/3/16.
 */
import React from "react";
import {Row, Col,Icon} from "antd";

const gkL = ["中心简介", "领导介绍", "结构设置", "场馆介绍", "联系我们"];

export default class GK extends React.Component {
    render() {
        return (<div>
            <Row style={{margin:"0 auto",width:"1100px"}}>
                <Col span={6}>
                    <ul style={{margin: "40px 20px 20px 10px"}}>
                        {gkL.map((v, k)=>(<li
                            style={{
                                cursor:"pointer",
                                fontSize: "14px",
                                fontWeight: 500,
                                border: "1px solid #cccccc",
                                padding: "20px 0 20px 70px",
                                textAlign: "center",
                                borderTop: k == 0 ? "1px solid #cccccc" : "none"
                            }}
                            key={k}>
                            {v} <span style={{marginLeft:"60px"}}><Icon type="right" /></span>
                        </li>))}
                    </ul>
                </Col>
                <Col span={18} style={{boxSize:"border-box",padding:"40px 0 0 30px"}}>
                    <div style={{borderBottom:"1px solid #ECECEC",textAlign:"right"}}>
                        首页<Icon type="right"/> <span style={{color:"#4B8EAD"}}>概况</span>
                    </div>
                    <h1 style={{padding:"20px 5px 20px"}}>概况</h1>
                    <p style={{marginBottom:"30px",fontSize:"14px"}}> 中心是“全国青少年校外活动示范基地”“全国科普教育基地”“全国中小学环境教育社会实践基地”。曾多次圆满完成教育部、科技部、环保部、文化部、国侨办等政府部门交办的国际性、全国性学生活动组织工作。每年开展北京学生艺术节、北京学生科技节、阳光体育联赛等全市性大型学生活动100余项，参与学生100万人次。每年指导或组织全市性中小学生社会大课堂实践活动、大课堂市级示范活动、“四个一”活动，参与学生100万人次。每年开展植物与环境教育活动、开放活动，参与学生10万人次。建有市级金鹏科技团，及市级阳光少年舞蹈团、管乐团、手风琴团等多个学生校外活动团队，开设校外兴趣小组400余个，有学员9000余名。每年开展全市性校外教研科研活动30余项，培训校外教师约2000人次。</p>
                    <p style={{textIndent:"1rem",fontSize:"14px"}}>中心是“全国青少年校外活动示范基地”“全国科普教育基地”“全国中小学环境教育社会实践基地”。曾多次圆满完成教育部、科技部、环保部、文化部、国侨办等政府部门交办的国际性、全国性学生活动组织工作。每年开展北京学生艺术节、北京学生科技节、阳光体育联赛等全市性大型学生活动100余项，参与学生100万人次。每年指导或组织全市性中小学生社会大课堂实践活动、大课堂市级示范活动、“四个一”活动，参与学生100万人次。每年开展植物与环境教育活动、开放活动，参与学生10万人次。建有市级金鹏科技团，及市级阳光少年舞蹈团、管乐团、手风琴团等多个学生校外活动团队，开设校外兴趣小组400余个，有学员9000余名。每年开展全市性校外教研科研活动30余项，培训校外教师约2000人次。</p>
                </Col>
            </Row>
        </div>)
    }
}