import React,{Component} from "react";
import {render} from "react-dom";
var root = document.getElementById("footer");

class Footer extends React.Component{
    render(){
       return ( <h1 style={{backgroundColor:"blue",textAlign:"center"}}>1234</h1>)
    }
}

render(<Footer/>,root)