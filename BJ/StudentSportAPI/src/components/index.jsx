/**
 * Created by kellyZhang on 2017/3/15.
 */

import React from "react";
import "../css/common.css";
import Header from "./header";


export default class Index extends React.Component{
    render(){
        return (<div>
            <Header/>
            <div>{this.props.children}</div>
        </div>)
    }
}
