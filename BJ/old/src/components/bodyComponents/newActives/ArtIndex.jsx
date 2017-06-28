import React from "react";
import {Link} from "react-router";
import artBg from "../../../imgs/artBg.jpg";
const title = [
    {iconColor: "#FC9B3A", iconSize: "40px", iconClass: "iconfont  icon-fuzeren", name: "学校负责人"},
    {iconColor: "#D463E7", iconSize: "35px", iconClass: "iconfont icon-xiangmu", name: "集体项目展演"},
    {iconColor: "#68D4F8", iconSize: "34px", iconClass: "iconfont icon-xiangmu1", name: "集体项目展示"},
    {iconColor: "#81D565", iconSize: "40px", iconClass: "iconfont icon-wudao", name: "个人项目展演"}
]
export default class ArtIndex extends React.Component {
    mouseover(ele) {
        $(this.refs[ele]).css("boxShadow", "0 0 10px 2px rgba(0,0,0,.1)")
    }
    mouseout(ele) {
        $(this.refs[ele]).css("boxShadow", "")
    }
    render() {
        return (<div style={{
            minHeight: "1311px",
            backgroundImage: "url(" + artBg + ")",
            backgroundSize: "1920px 711px",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat"
        }}>
            <div style={{width: "1100px", margin: "0px auto"}}>
                <ul className="clear" style={{padding: "10px 0 20px 0"}}>
                    {title.map((v, k)=>(<Link key={k}
                                              to={`/ACTIVE/ArtIndex/ArtTab${k+1}`}>
                        <li
                            ref={"title" + k}
                            onMouseOver={this.mouseover.bind(this, "title" + k)}
                            onMouseOut={this.mouseout.bind(this, "title" + k)}
                            className="fl"
                            style={{
                                cursor: "pointer",
                                backgroundColor: "#FFFFFF",
                                position: "relative",
                                lineHeight: "116px",
                                paddingLeft: "70px",
                                width: "262px",
                                height: "118px",
                                border: "1px solid #E2E3E5",
                                marginLeft: k == 0 ? 0 : "14px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                letterSpacing: "2px",
                                color: "#000000"
                            }}
                        >
                            <i style={{
                                color: v.iconColor,
                                position: "absolute",
                                left: "10px",
                                top: "0",
                                fontSize: v.iconSize
                            }}
                               className={v.iconClass}></i>
                            <span>
                            {v.name}
                        </span>
                        </li>
                    </Link>))}
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        </div >)
    }
}