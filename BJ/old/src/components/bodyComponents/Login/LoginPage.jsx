import React from "react";
import {browserHistory} from "react-router";
import Bg from "../../../imgs/regesit_bg.jpg";
import {Input, Icon, Button, message} from "antd";

const Message = (state, content) => {
    if (state == 1) {
        message.success(content, 1);
    }
    if (state == 2) {
        message.error(content, 1);
    }
};

export default class LoginPage extends React.Component {
    constructor(){
        super()
        this.state={
            username:"",
            password:""
        }
    }
    onChangeUserName(e,type) {
        if(type=="username"){
            this.setState({
                username:e.target.value.trim()
            })
        }else{
            this.setState({
                password:e.target.value.trim()
            })
        }
    }

    ClickBtn() {

    }

    login() {
        var username=this.state.username;
        var password=this.state.password;
        if (username == "" || password == "") {
            Message(2, "用户名或密码不能为空")
            return;
        }
        /*
         * 登录成功后，返回  userid学校id，utoken
         * */
        $.ajax({
            url: `http://max.mydanweb.com/index.php?g=Api&m=Public&a=doLogin&username=${username}&password=${password}`,
            success: function (result) {
                if (result.code == "1") {
                    sessionStorage.setItem("data", JSON.stringify(result.data));
                    Message(1, "登录成功")
                    browserHistory.push(`/LOGIN/SportType`);

                } else {
                    Message(2, "登录失败")
                }

            },
            error: function () {
                //网络错误
                Message(2, "网络错误")

            }
        })
        // var tar=this.props.location.query.to;
    }

    render() {
        return (<div>
            <div style={{
                width: "100%",
                height: "540px",
                backgroundImage: "url(" + Bg + ")",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div style={{
                    padding: "90px 0 30px 0",
                    textAlign: "center",
                    margin: "0px auto",
                    color: "#FFFFFF",
                    fontSize: "26px"
                }}>
                    <div>顺义区学生活动管理中心</div>
                    <div style={{fontSize: "14px"}}>Shunyi District student activity management center</div>
                </div>
                <div style={{
                    padding: "45px 45px 0px 45px",
                    width: "372px",
                    height: "268px",
                    backgroundColor: "#FFFFFF",
                    margin: "0 auto",
                    borderRadius: "10px"
                }}>
                    <div style={{marginBottom: "25px"}}>
                        <Input
                            size="large"
                            onPressEnter={this.ClickBtn.bind(this)}
                            placeholder="请输入账号"
                            prefix={<Icon type="user"/>}
                            onChange={e=>this.onChangeUserName(e,"username")}
                        />
                    </div>
                    <div style={{marginBottom: "25px"}}>
                        <Input
                            size="large"
                            placeholder="请输入密码"
                            prefix={<Icon type="lock"/>}
                            onChange={e=>this.onChangeUserName(e,"password")}
                        />
                    </div>
                    <div style={{marginBottom: "20px"}}><Button onClick={this.login.bind(this)}
                                                                style={{width: "100%", height: "40px"}} type="primary"
                                                                size="large">登陆</Button></div>
                    <div style={{textAlign: "right"}}>
                        <span style={{cursor: "pointer"}}>忘记密码？ </span> | <span
                        style={{cursor: "pointer"}}> 注册新账号</span>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center", fontSize: "12px", color: "#828282", padding: "37px 0 61px 0"}}>
                <span>承办单位 : &nbsp;北京学生活动管理中心</span> <span style={{marginLeft: "54px"}}>协办单位 : &nbsp;区教委、区体育局</span>
            </div>
        </div>);

    }
}