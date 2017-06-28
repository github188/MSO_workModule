import React from "react";
import {Link} from "react-router";
import {Icon} from "antd";

const data = [
    {
        liTitle: "一、主办单位：北京学生活动管理中心",
        ul: []

    },
    {
        liTitle: "二、承办单位：海淀区教育委员会",
        ul: []

    },
    {
        liTitle: "三、协办单位：",
        ul: [
            "北京市师达中学",
            "北京美轮美动国际轮滑俱乐部有限公司"
        ]

    },
    {
        liTitle: "四、比赛时间：2015年6月14日（星期日）",
        ul: []

    },
    {
        liTitle: "五、比赛地点：北京市师达中学",
        ul: []

    },
    {
        liTitle: "六、比赛分组 :",
        ul: [
            "高中男子组",
            " 高中女子组",
            "初中男子组",
            " 初中女子组",
            "小学男子甲组",
            "小学女子甲组",
            "小学男子乙组",
            "小学女子乙组（凡报乙组者需为2004年1月1日以后出生）"
        ]
    },
    {
        liTitle: "七、比赛项目：",
        ul: [
            "（一）趣味竞技：25米障碍往返（蛇形）；10米正面交叉障碍往返。",
            "（二）竞速：300米； 1000米(小学乙组500米)。"
        ]

    },
    {
        liTitle: "八、参加办法：",
        ul: [
            "（一）以学校为单位组队参赛。凡具有我市正式学籍的在校生，积极参加轮滑训练，经医生检查身体健康，适合参加该项比赛，并已上人身意外伤害事故保险者方可报名参赛。",
            "（二）参加比赛的学校可报领队1人，教练2人，运动员限报16人，每人限报2项。",
            "（三）各学校按组别（每个组别一张报名表，过期不再补报）填好姓名、年级、参加项目，并附上领队、教练电话，报名表由主管领导审查队员资格并签字后加盖公章和医务章。",
            "（四）运动员必须佩带号码参赛（由大会提供），无号码者不得参赛。",
            "（五）为确保比赛安全，参赛运动员的轮滑器材要由学校认真检查，达到安全参赛的质量标准。比赛时必须戴全护具。",
            "（六）比赛场外学生的安全由学校领队、教练负责。",
            "（七）严肃赛场纪律，禁止冒名顶替，禁止以大打小，一经查出，取消比赛成绩，取消团体总分，追究领队、教练员责任。",
            "（八）竞赛办法：采用中国轮滑协会最新竞赛规则。"
        ]

    },
    {
        liTitle: "九、名次录取：",
        ul: [
            "（一）各组各项录取前八名，分别按9、7、6、5、4、3、2、1计分。",
            "（二）各项报名人数不足录取名次或等于录取名次时，采取报名人数减一录取名次。",
            "（三）团体总分：分别录取中学组、小学组两个组别的前八名。"
        ]
    },
    {
        liTitle: "十、报名办法：",
        ul: [
            "（一）2015年5月20日（星期三）9：00至16：00到北京市师达中学（海淀区闵庄路70号）报名。",
            "（二）按报名表要求填写基本信息，所打印报名表由主管领导审查队员资格并签字后加盖公章和医务章。",
            "（三）报名时须携带纸质报名表（每个组别一张报名表，加盖学校公章、医务章）、电子版报名表、学生卡（带照片），小学乙组须带身份证或户口本原件。"
        ]

    },
    {
        liTitle: "十一、领队会：",
        ul: [
            "定于2015年6月10日（星期三）下午14：00在北京市师达中学召开。"
        ]

    },
    {
        liTitle: "十二、其他未尽事宜由组委会另行通知。",
        ul: [
            "联系人：齐景宇 13811882223  李卫东 18600198567"
        ]

    }
]
export default class Detail extends React.Component {
    render() {
        return (<div style={{width: "1100px", margin: "0 auto"}}>
            <h5 style={{position:"relative",height: "76px", lineHeight: "76px", fontSize: "12px",paddingLeft:"30px"}}><Icon
                type="environment" style={{color: "#108ee9", fontSize: "24px",position:"absolute",top:"50%",margin:"-12px 0 0 -30px"}}/>&nbsp; <span style={{color:"#000000", fontWeight:600}}>当前位置: 活动 > 轮滑比赛</span></h5>
            <div style={{border: "1px solid #E5E5E5", padding: "80px 94px 0px 94px",marginBottom:"100px"}}>
                <h1 style={{textAlign: "center"}}>阳光体育2017北京中小学生轮滑比赛</h1>
                <p style={{fontWeight:500,textAlign: "center", color:"#888888",padding:"16px",fontSize:"16px"}}> 彭维勇 2017.5</p>
                <p style={{textAlign: "right",letterSpacing:"1px",fontSize:"13px",padding:"40px 20px 30px 0"}}>发布时间: 2017-03-11</p>
                <ul style={{color: "#666666", lineHeight: "35px"}}>
                    {data.map((v, k)=>(
                        <li key={k}>
                            <p style={{color: "#666666"}}>{v.liTitle}</p>
                            <ul style={{paddingLeft:"30px"}}>
                                {
                                    v.ul.map((v, k)=>(<li key={k}>
                                        {v}
                                    </li>))
                                }
                            </ul>
                        </li>
                    ))}
                </ul>
                <p style={{fontSize:"14px",color:"#555555",textAlign: "right",color:"#7E7E7E"}}>2017年3月11日</p>
                <div><Link to="/ACTIVE/Login?to=Sign">
                    <div style={{
                        cursor:"pointer",
                        margin:"80px auto",
                        color:"#FFFFFF",
                        backgroundColor:"#0093F0",
                        border:"1px solid #0093F0",
                        fontSize:"14px",
                        width:"160px",
                        height:"48px",
                        textAlign:"center",
                        lineHeight:"46px",
                        borderRadius:"2px"
                    }}>报名</div></Link>
                </div>
            </div>
        </div>)
    }
}