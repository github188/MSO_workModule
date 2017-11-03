import React, {Component} from "react";
import {Tabs, Badge, Input, Button} from 'antd';
const TabPane = Tabs.TabPane;

const tabs = () => (<Badge count={5}><span style={{padding: "0 14px"}}>Tab 2</span></Badge>);
export default class C extends React.Component {
    constructor() {
        super();
        this.state = {
            tabName: ["所有订单","待领取", "已放弃", "进行中", "暂停", "结算中", "已完成"],
            value:"43253",
            count:1
        }
    }

    componentDidMount() {

    }
    onTabClick(){
        console.log(2);
    }
    onChange(){
        this.setState({
            value:""
        })
    }
    render() {
        const content = () => (<div>
            <div><Input size="large" placeholder="large size" style={{width: "300px"}}/> <Button type="primary" value={this.state.value}>订单搜索</Button>
            </div>
        </div>)
        return ( <Tabs onChange={this.onChange.bind(this)} onTabClick={this.onTabClick.bind(this)}  defaultActiveKey="0" >
            {this.state.tabName.map((v, k) => (<TabPane tab={k==1?<Badge count={this.state.count}><span style={{padding:"0 10px"}}>{v}</span></Badge>:v} key={k}>
                {content()}
            </TabPane>))}
        </Tabs>)
    }
}

