import React from "react";
export default class ActiveHome extends React.Component{
    render(){
        return (<div>
            {this.props.children}
        </div>)
    }
}