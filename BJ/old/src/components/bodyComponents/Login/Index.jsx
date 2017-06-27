import React,{Component} from "react";
export default class Index extends Component{
    // componentWillUnmount(){
    //     sessionStorage.setItem("a","w3453")
    // }
    render(){
        return (<div>
            {this.props.children}
        </div>)
    }
}