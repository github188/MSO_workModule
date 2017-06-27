/**
 * Created by kellyZhang on 2017/3/16.
 */

import React from "react";
import {IndexLink,Link} from "react-router";
import {Row, Col} from "antd";
import logo from "../imgs/logo.png";
import "../css/head";
export default class Header extends React.Component {
    componentDidMount(){

    }
    render() {
        return (<header style={{height:"69px",borderBottom:"1px solid #E5E5E5"}}>
            <Row style={{width:"1100px",margin:"0 auto"}}>
                <Col span={8}>
                    <Row>
                        <Col span={3}>
                            <img src={logo} style={{width:"80%",margin:"11px 0 0 0"}} alt=""/>
                        </Col>
                        <Col span={21} style={{padding:"11px 1px"}}>
                            <div className="head_title">顺义区学生活动管理中心</div>
                            <div className="head_title_EN">High school students track and field sports registration system</div>
                        </Col>
                    </Row>
                </Col>
                <Col span={16}>
                    <ul className="headerList">
                        <Link activeClassName="active" to="/LOGIN"> <li>登陆 </li></Link>
                        <Link activeClassName="active" to="/GK"><li>概况</li></Link>
                        <Link activeClassName="active" to="/NEWS"><li>新闻</li></Link>
                        <Link activeClassName="active" to="/ACTIVE"><li>活动</li></Link>
                        <Link activeClassName="active" to="/LookScore"><li>查看成绩</li></Link>
                    </ul>
                </Col>
            </Row>
        </header>)
    }
}