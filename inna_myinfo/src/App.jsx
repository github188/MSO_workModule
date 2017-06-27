import React,{Component} from "react";
import {render} from "react-dom";
const root = document.getElementById("main");
import Register from "./components/register";
class App extends Component{
    render(){
        return (<div style={{padding:40,backgroundColor:"green"}}>
            <Register/>
        </div>)
    }
}
render(<App/>,root);

