import React,{Component} from "react";
import ReactDOM from "react-dom";
var root = document.getElementById("header");

class Head extends Component{
    render(){
       return <h1 style={{backgroundColor:"blue",textAlign:"center"}}>我是头部</h1>
    }
}
ReactDOM.render(<Head/>,root)