import React from "react";
import {Link} from "react-router";
import IndexBodyImg from "../../../imgs/IndexBody.jpg";


const data = [
    {
        bigFont: "体育",
        icon: "icon iconfont icon-tiyu",
        iconColor: "#FD6D90",
        link:"/ACTIVE/Classify"
    },
    {
        bigFont: "科技",
        icon: "icon iconfont icon-huojian",
        iconColor: "#01BAFD",
        link:"/ACTIVE/Classify"
    },
    {
        bigFont: "艺术",
        icon: "icon iconfont icon-yishu",
        iconColor: "#FCB42E",
        link:"/ACTIVE/Login?to=ArtIndex"
    }
]
export default class IndexAvtive extends React.Component {
    render() {
        return (<div>
                <img src={IndexBodyImg} style={{width: "100%"}}/>
                <div style={{
                    width: "1100px",
                    position: "relative",
                    margin: "0px auto",
                    marginTop: "-68px"
                }}>
                    <ul className="clear">
                        {
                            data.map((v, k)=>(
                                <li key={k} className="fl" style={{
                                    boxShadow: "0px 0px 50px 1px rgba(0,0,0,0.2)",
                                    backgroundColor: "#ffffff",
                                    width: "344px",
                                    height: "200px",
                                    padding: "57px 70px",
                                    margin: k == 1 ? "0 34px" : 0
                                }}>
                                    <div className="fl" style={{width: "100px", height: "86px", lineHeight: "86px"}}>
                                        <i style={{fontSize: "63px", color: v.iconColor}} className={v.icon}></i>
                                    </div>
                                    <div className="fl" style={{width: "86px", height: "86px"}}>
                                        <h1 style={{margin: "10px 0"}}>{v.bigFont}</h1>
                                        <Link to={v.link}><p style={{color: "#9E9E9E", cursor: "pointer"}}>
                                            查看更多>></p></Link>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}