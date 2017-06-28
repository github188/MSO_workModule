import React from "react";
import {Icon} from "antd";
import {browserHistory,Link} from "react-router";
import img1 from "../../../imgs/footImg1.png";
import img2 from "../../../imgs/footImg2.png";
const data=[
    {
        title:"足球/篮球/排球比赛",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"联盟校间球类比赛",
        son:[
            "高中男子组",
            "高中男子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"中学生橄榄球比赛",
        son:[
        ]
    },
    {
        title:"中学生滑轮球比赛",
        son:[
        ]
    },
    {
        title:"田径运动会",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"中小学生跳绳/皮筋展示活动",
        son:[
        ]
    },
    {
        title:"中小学生绫球比赛",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"乒乓球/羽毛球赛",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"中学生健美操比赛",
        son:[
        ]
    },
    {
        title:"中学生武术比赛",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"冰雪运动",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"中学生集体项目运动会",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    },
    {
        title:"中小学勇敢小伙伴比赛",
        son:[
            "高中男子组",
            "高中女子组",
            "中学生排球比赛",
            "绿林青少年足球比赛"
        ]
    }
];
const num=Math.ceil(data.length/2);
export default class SportType extends React.Component{
    mouseOver(k){
        var li=this.refs[k];
        $(li).css({borderRight:"none",backgroundColor:"#FFFFFF"}).find("ul").show().end().children("span").hide()

    }
    mouseOut(k){
        var li=this.refs[k];
        $(li).css({borderRight:"1px solid #E1E1E1",backgroundColor:"#FAFAFA"}).find("ul").hide().end().children("span").show()
    }
    click(){
        browserHistory.push("/LOGIN/SignPage")
    }
    render(){
        return (<div style={{width:"1100px",margin:"0 auto"}}>
            <div className="clear" style={{position:"relative",zIndex:30,height:"600px",margin:"0 auto",padding:"40px 30px 0px 30px"}}>
                <ul className="fl uls clear">
                    {
                        data.slice(0,num).map((v,k)=>(<li
                            ref={k}
                            onMouseOver={()=>{v.son.length>0?this.mouseOver(k):""}}
                            onMouseOut={()=>{v.son.length>0?this.mouseOut(k):""}}
                            onClick={()=>{v.son.length>0?"":this.click(k)}}
                            key={k}
                            style={{
                                backgroundColor:"#FAFAFA",
                                position:"relative",
                                fontSize:"16px",
                                fontWeight:"bold",
                                padding:"22px 20px",
                                cursor:v.son.length>0?"":"pointer",
                                width:"292px",
                                height:"74px",
                                border:"1px solid #E1E1E1",
                                borderTop:k==0?"1px solid #E1E1E1":"none"
                            }}
                        >
                            {v.title} <span className="rl"><Icon style={{display:v.son.length>0?"block":"none",fontSize:"20px",marginTop:"2px",color:"#AEAEAE"}} type="right" /></span>
                            <ul style={{display:"none",
                                backgroundColor:"#FFFFFF",
                                width:"228px",
                                position:"absolute",
                                left:"290px",
                                top:"-1px",
                                border:"1px solid #E1E1E1",
                                borderLeft:"none",
                                paddingTop:"10px"}}>
                                {
                                    v.son.map((v,k)=>(
                                        <li
                                            onClick={this.click}
                                            key={k}
                                            style={{
                                                borderLeft:k==0?"none":"1px solid #E1E1E1",
                                                cursor:"pointer",
                                                paddingLeft:"48px",
                                                height:"63px",
                                                lineHeight:"63px",
                                                fontSize:"14px",
                                                fontWeight:600
                                            }}>{v}</li>
                                    ))
                                }
                            </ul>
                        </li>))
                    }
                </ul>
                {/*<span className="rl" style={{cursor:"pointer",marginTop:"-33px",width:"105px",height:"34px",color:"#2080C8"}}><Link style={{display:"block",width:"105px",height:"32px",textAlign:"center",lineHeight:"32px"}} to="/ACTIVE/BackStageIndex">管理活动入口</Link></span>*/}
                <ul className="rl uls clear" style={{marginRight:"46px"}}>
                    {
                        data.slice(num).map((v,k)=>(<li
                            onMouseOver={()=>{v.son.length>0?this.mouseOver(num+k):""}}
                            onMouseOut={()=>{v.son.length>0?this.mouseOut(num+k):""}}
                            onClick={()=>{v.son.length>0?"":this.click(num+k)}}
                            ref={num+k}
                            key={k}
                            style={{
                                position:"relative",
                                fontSize:"16px",
                                fontWeight:"bold",
                                padding:"22px 20px",
                                cursor:v.son.length>0?"":"pointer",
                                width:"292px",
                                height:"74px",
                                border:"1px solid #E1E1E1",
                                borderTop:k==0?"1px solid #E1E1E1":"none"

                            }}
                        >
                            {v.title} <span className="rl"><Icon style={{display:v.son.length>0?"block":"none",fontSize:"20px",marginTop:"2px",color:"#AEAEAE"}} type="right" /></span>
                            <ul style={{
                                display:"none",
                                backgroundColor:"#FFFFFF",
                                width:"228px",
                                position:"absolute",
                                left:"290px",
                                top:"-1px",
                                border:"1px solid #E1E1E1",
                                borderLeft:"none",
                                paddingTop:"10px"}}>
                                {
                                    v.son.map((v,k)=>(
                                        <li
                                            onClick={this.click}
                                            key={k}
                                            style={{
                                                borderLeft:k==0?"none":"1px solid #E1E1E1",
                                                cursor:"pointer",
                                                paddingLeft:"48px",
                                                height:"63px",
                                                lineHeight:"63px",
                                                fontSize:"14px",
                                                fontWeight:600
                                            }}>{v}</li>
                                    ))
                                }
                            </ul>
                        </li>))
                    }
                </ul>
            </div>
            <div style={{height:"140px",position:'relative',marginBottom:"50px"}}>
                <div style={{position:"absolute",bottom:0,left:0}}>
                    <img  style={{width:"390px"}} src={img1} alt=""/>
                </div>
                <div style={{position:"absolute",bottom:0,right:0}}>
                    <img src={img2} alt=""/>
                </div>
            </div>
        </div>)
    }
}