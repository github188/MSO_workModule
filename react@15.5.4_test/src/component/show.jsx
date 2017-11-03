import React from "react";

export default class Show extends React.Component{
    edit(){
        this.props.edit()
    }
    render(){
        return (<div style={{width:660,margin:"0 auto"}}>
            <h2 style={{textAlign:"right"}}><span onClick={this.edit.bind(this)}>编辑</span></h2>
            <ul>
                <li>
                    <label htmlFor="">userName :</label> <span>{this.props.data.userName}</span>
                </li>
                <li>
                    <label htmlFor="">password :</label> <span>{this.props.data.password}</span>
                </li>
            </ul>
        </div>)
    }
}