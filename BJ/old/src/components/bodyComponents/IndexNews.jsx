/**
 * Created by kellyZhang on 2017/3/16.
 */
/**
 * Props
 * icon:图标，
 * iconH:图标高度，
 * iconW:图标宽度，
 * matin:{
 *  r:右边信息，
 *  l:左边信息
 * }
 */
import React from　"react";
import MoreJ from "./+more";
const ULStyle={
    textAlign:"left",
    boxShadow:"0 10px 10px #e9ecf2",
    padding:"0 20px 30px 50px",
    position:"relative",
    backgroundColor:"#ffffff",
    display:"inline-block"
}
const mationLI={
    fontSize:"13px",
    fontWeight:600,
    color:"#676767",
    width:"420px",
    padding:"15px 20px 15px 0",
    borderBottom:"1px dashed #C3C3C3"
}
export default class IndexNews extends React.Component{
    render(){
        return (<ul style={ULStyle}>
                <div className={this.props.iconName} style={this.props.style}></div>
                <li style={mationLI}>
                    <MoreJ mt={3}/>
                    <div style={{fontSize:"15px",color:"#3B3B3B"}}>{this.props.title}</div>
                </li>
                {this.props.mation.map((v,k)=>(<li style={mationLI} key={k}>
                    <span style={{float:"right"}}>{v.r}</span>
                    <div style={{
                        width:"330px"
                    }}>{v.l}</div>
                    </li>))}
        </ul>)
    }
}
