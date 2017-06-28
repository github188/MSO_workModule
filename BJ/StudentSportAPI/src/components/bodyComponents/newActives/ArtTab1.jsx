import React from "react";
import {Input,  Button} from "antd";
import teachImg from "../../../imgs/teacher.png";
const data=[
    "学校填报人",
    "移动电话",
    "负责人职务",
    "电子邮箱",
    "办公电话"
]
export default class ArtTab1 extends React.Component{
    render(){
        return (<div style={{
            backgroundColor:"#FFFFFF",
            height:"414px",
            border:"1px solid #E5E5E5",
            borderRadius:"4px",
            position:'relative'
        }}>
            <img src={teachImg} style={{position:"absolute",width:"128px",right:0,bottom:"-60px"}} alt=""/>
            <h3 style={{position:"relative",fontSize:"16px",letterSpacing:"1px",paddingLeft:"50px",lineHeight:"65px",height:"66px",borderBottom:"1px solid #E5E5E5"}}>
                学校负责人信息
                <i style={{borderRadius:"4px",position:"absolute",width:"8px",height:"20px",left:"24px",top:"50%",marginTop:"-10px",backgroundColor:"#006FC1"}}></i>
            </h3>
            <div style={{padding:"42px 164px"}}>
                <ul className="clear">
                    {data.map((v,k)=>(<li
                        className="fl"
                        key={k}
                        style={{width:"350px",height:"60px"}}
                    >
                        <label style={{fontSize:"13px",colro:"#000000",position:"relative",textAlign:"right",float:"left",width:"90px",lineHeight:"42px"}}> <span style={{position:"absolute",top:"4px",left:"2px",color:"red",fontSize:"18px"}}>* </span>{v+" :"}</label>
                        <Input style={{float:"left",marginLeft:"28px",width:"196px",height:"42px"}} placeholder={"请输入"+v}/>
                    </li>))}
                </ul>
                <div style={{marginTop:"30px",textAlign:"center"}}><Button type="primary" style={{width:"122px",height:"46px"}}>确定</Button></div>
            </div>
        </div>)
    }
}