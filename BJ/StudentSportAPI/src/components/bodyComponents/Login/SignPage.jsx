import React, {Component} from "react";
import {Icon, Button, Checkbox, Select, Input, DatePicker, message, Form, Modal} from "antd";
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
moment.locale('zh-cn');

const projects = [

    "25米障碍往返（蛇形)",
    "10米正面交叉障碍往返",
    "10米正面交叉障碍往返1",
    "1返2",
    "10返3",
    "10米正面交叉障碍往返4",
    "10米正面交叉障碍往返5",
    "10米正面交叉障碍往返6",
    "竞速：1000米"
];
const setMation = [
    {"教育ID": "09106072"},
    {"姓名": "张文"},
    {"出生日期": "2010-01-02"},
    {"身份证号": "1243353454352454"},
    {"性别": "男"},
    {"民族": "汉族"},
    {"户籍所在地": "北京市海淀区"},
    {"是否为京籍": "是"},
    {"学籍号": "09106072"},
    {"年级": "一年级"},
    {"班级": "一班"}
];
//TODO  使用antd form表单
class InputF extends Component {
    constructor() {
        super()
        this.state = {};
    }

    //属性变化时调用设置新状态，setFieldsValue不能在此使用，否则会死循环
    componentDidMount() {
        // return ;
        if (this.props.data) {
            var transformObj = {};
            var arr = this.props.data;
            for (var i = 0; i < arr.length; i++) {
                Object.assign(transformObj, arr[i])
            }
            this.props.form.setFieldsValue(transformObj)
        }

    }

    componentWillUpdate() {
        // console.log(this.props.data);
        // if(this.props.data){
        //     // console.log(this.props);
        //     // console.log(123);
        //         var transformObj={};
        //     var arr=this.props.data;
        //     for (var i = 0; i < arr.length; i++) {
        //         Object.assign(transformObj,arr[i])
        //     }
        //     this.props.form.setFieldsValue(transformObj)
        // }
    }

    update() {
        debugger;
        if (Object.keys(this.state).length > 0) {
            var obj = {};

            this.props.form.setFieldsValue(this.state)

        }
    }


    submit() {
        // setFieldsValue 设置
        var _this = this;
        this.props.form.validateFields(function (err, vals) {
     //
            if (!err) {
                _this.props.submit(vals)
            }
        })
    }

    render() {


        const {getFieldDecorator} = this.props.form;
        const config = {rules: [{required: true, message: '不能为空'}]}


       // debugger;

        return (<li style={{borderBottom: "1px dashed #D7D7D7"}}>
            <div style={{padding: "28px 60px 28px 0 "}}>
                <div style={{float: "right"}}>
                    <a onClick={this.props.del}>删除</a>
                </div>
                <span style={{color: "#000000", fontWeight: "bold", fontSize: "15px"}}>学生信息</span>
                <span
                    style={{marginLeft: "10px", color: "#595959"}}>{"序号 " + (this.props.k + 1)}</span>
            </div>
            <Form>
                <ul>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="教育ID"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('educateId', config)(
                                <Input placeholder="请输入教育ID"/>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="姓名"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('name', config)(
                                <Input placeholder="请输入姓名"/>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="出生日期"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('birthday', config)(
                                <DatePicker format="YYYY-MM-DD"/>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="身份证号"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('cardID', {rules: [{required: false}]})(
                                <Input placeholder="请输入身份证号"/>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="性别"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('sex', config)(
                                <Select
                                    showSearch
                                    style={{width: 160}}
                                    placeholder="请选择性别"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="1">男</Option>
                                    <Option value="2">女</Option>
                                </Select>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="民族"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('nation', config)(
                                <Input placeholder="请输入民族"/>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="户籍所在地"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('location', config)(
                                <Input placeholder="请输入户籍所在地"/>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>

                        <FormItem
                            label="是否为京籍"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('ibCapital', config)(
                                <Select
                                    showSearch
                                    style={{width: 160}}
                                    placeholder="是否为京籍"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="1">是</Option>
                                    <Option value="0">否</Option>
                                </Select>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="学籍号"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('eduNum', config)(
                                <Input placeholder="请输入学籍号"/>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="年级"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('grade', config)(
                                <Select
                                    showSearch
                                    style={{width: 160}}
                                    placeholder="请选择年级"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="1">一年级</Option>
                                    <Option value="2">二年级</Option>
                                    <Option value="3">三年级</Option>
                                    <Option value="4">四年级</Option>
                                    <Option value="5">五年级</Option>
                                    <Option value="6">六年级</Option>
                                    <Option value="7">七年级</Option>
                                    <Option value="8">八年级</Option>
                                    <Option value="9">九年级</Option>
                                    <Option value="10">十年级</Option>
                                    <Option value="11">十一年级</Option>
                                    <Option value="12">十二年级</Option>
                                </Select>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear"
                        style={{width: "25%", height: "60px", float: "left"}}>
                        <FormItem
                            label="班级"
                            labelCol={{span: 8}}
                            wrapperCol={{span: 14, offset: 1}} hasFeedback
                        >
                            {getFieldDecorator('classes', config)(
                                <Select
                                    showSearch
                                    style={{width: 160}}
                                    placeholder="请选择班级"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="1">一班</Option>
                                    <Option value="2">二班</Option>
                                    <Option value="3">三班</Option>
                                    <Option value="4">四班</Option>
                                    <Option value="5">五班</Option>
                                    <Option value="6">六班</Option>
                                    <Option value="7">七班</Option>
                                    <Option value="8">八班</Option>
                                    <Option value="9">九班</Option>
                                    <Option value="10">十班</Option>
                                </Select>
                            )}
                        </FormItem>
                    </li>
                    <li className="clear" style={{width: "100%", clear: "both"}}>
                        <FormItem
                            label="参赛项目"
                            labelCol={{span: 2}}
                            wrapperCol={{span: 21, offset: 1}}
                        >
                            {getFieldDecorator('inProject', {rules: [{required: true, message: "   "}]})(
                                <CheckboxGroup options={projects}/>
                            )}
                        </FormItem>
                    </li>
                    <li style={{
                        height: "90px",
                        lineHeight: "80px",
                        textAlign: "center"
                    }}><Button style={{width: "136px", height: "34px", backgroundColor: "#006FC1"}}
                               type="primary" onClick={() => {
                        this.submit()
                    }}>确定</Button>
                    </li>
                </ul>
            </Form>
        </li>)
    }

}

const Inputs = Form.create()(InputF)
class Show extends Component {


    render() {
        let list = this.props.show || []
        return (<li style={{borderBottom: "1px dashed #D7D7D7"}}>

            <div style={{padding: "28px 60px 28px 0 "}}>
                <div style={{float: "right"}}>
                    <a onClick={this.props.edit}>编辑11</a><span
                    style={{margin: "0 10px"}}>|</span><a onClick={this.props.del}>删除</a>
                </div>
                <span style={{color: "#000000", fontWeight: "bold", fontSize: "15px"}}>学生信息</span>
                <span
                    style={{marginLeft: "10px", color: "#595959"}}>{"序号 " + (this.props.k + 1)}</span>
            </div>

            <ul>
                {list.map((v, k) => (
                    k == (list.length - 1) ? ( <li className="clear" style={{
                            width: "100%",
                            clear: "both"
                        }} key={k}>
                            <label style={{
                                color: "#595959",
                                width: "82px",
                                textAlign: "right",
                                float: 'left'
                            }}>{v[Object.keys(v)[0]][0] + ":"}</label>
                            <ul className="clear" style={{float: 'left', width: "1000px", paddingLeft: "20px"}}>
                                {(Array.isArray(v[Object.keys(v)[0]][1]) ? v[Object.keys(v)[0]][1] : []).map((vs, ks) => (
                                    <li style={{float: 'left', width: "20%", marginBottom: "20px"}} key={ks}>
                                        <span>{vs}</span>
                                    </li>))}

                            </ul>
                        </li>
                    ) : ( <li
                            key={k}
                            className="clear"
                            style={{width: "25%", height: "40px", float: "left"}}>
                            <label style={{
                                marginTop: "0px",
                                color: "#595959",
                                width: "82px",
                                textAlign: "right",
                                float: 'left'
                            }}>{v[Object.keys(v)[0]][0] + " :"}</label>
                            <div style={{paddingLeft: "20px", float: 'left'}}>{v[Object.keys(v)[0]][1]}</div>
                        </li>
                    )
                ))}
            </ul>

        </li>)
    }
}




const li = {
    height: "58px",
    width: "374px",
    marginBottom: "16px",
    float: "left"
}

class LeaderF extends Component {
    submit() {
        var _this = this;
        this.props.form.validateFields(function (err, vals) {
            if (!err) {
                //提交后台
                console.log(123);
                _this.props.submit(vals)
            }
        })
    }

    componentDidMount() {
        //设定默认值
        // this.props.form.setFieldsValue()
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (<div>
            <h1 style={{
                height: "90px",
                position: "relative",
                padding: "42px 0 0 26px",
                marginRight: "4px",
                borderBottom: "1px solid #E5E5E5",
                fontSize: "18px"
            }}>
                <i style={{
                    position: "absolute",
                    left: 0,
                    top: "46px",
                    width: "7px",
                    height: "18px",
                    backgroundColor: "blue",
                    borderRadius: "4px"
                }}></i>
                <span style={{
                    letterSpacing: "2px"
                }}>领队信息</span>
            </h1>
            <div style={{
                position: "relative",
                width: "920px",
                padding: "32px 110px 0 0",
                margin: "0 auto"
            }}>
                <Form>
                    <ul className="clear leader">
                        <li style={li}>
                            <FormItem label={"学校名称"} labelCol={{span: 6}}
                                      wrapperCol={{span: 14, offset: 1}} hasFeedback>
                                {getFieldDecorator("schoolId", {

                                    rules: [{required: true, message: "学校名称不能为空"}],
                                })(
                                    <Input style={{width: 213}} placeholder={"请输入学校名称"}/>
                                )}
                            </FormItem>
                        </li>
                        <li style={li}></li>
                        <li style={li}>
                            <FormItem label={"领队名称"} labelCol={{span: 6}}
                                      wrapperCol={{span: 14, offset: 1}} hasFeedback>
                                {getFieldDecorator("leader", {
                                    rules: [{required: true, message: "领队名称不能为空"}],
                                })(
                                    <Input style={{width: 213}} placeholder={"请输入领队名称"}/>
                                )}
                            </FormItem></li>
                        <li style={li}>
                            <FormItem label={"联系方式"} labelCol={{span: 6}}
                                      wrapperCol={{span: 14, offset: 1}} hasFeedback>
                                {getFieldDecorator("tel", {

                                    rules: [{required: true, message: ("请输入正确的手机号"), pattern: /^1[34578]\d{9}$/}],
                                })(
                                    <Input style={{width: 213}} placeholder={"请输入联系方式"}/>
                                )}
                            </FormItem></li>
                        <li style={li}>
                            <FormItem label={"教练名称"} labelCol={{span: 6}}
                                      wrapperCol={{span: 14, offset: 1}} hasFeedback>
                                {getFieldDecorator("coach1", {
                                    rules: [{required: true, message: "教练名称不能为空"}],
                                })(<Input style={{width: 213}} placeholder={"请输入教练名称"}/>
                                )}
                            </FormItem></li>
                        <li style={li}>
                            <FormItem label={"联系方式"} labelCol={{span: 6}}
                                      wrapperCol={{span: 14, offset: 1}} hasFeedback>
                                {getFieldDecorator("tel1", {

                                    rules: [{required: true, message: ("请输入正确的手机号" ), pattern: /^1[34578]\d{9}$/}],
                                })(
                                    <Input style={{width: 213}} placeholder={"请输入联系方式"}/>
                                )}
                            </FormItem></li>
                        <li style={li}>
                            <FormItem label={"教练名称"} labelCol={{span: 6}}
                                      wrapperCol={{span: 14, offset: 1}} hasFeedback>
                                {getFieldDecorator("coach2", {

                                    rules: [{required: true, message: "教练名称不能为空"}],
                                })(
                                    <Input style={{width: 213}} placeholder={"请输入教练名称"}/>
                                )}
                            </FormItem></li>
                        <li style={li}>
                            <FormItem label={"联系方式"} labelCol={{span: 6}}
                                      wrapperCol={{span: 14, offset: 1}} hasFeedback>
                                {getFieldDecorator("tel2", {

                                    rules: [{required: true, message: "请输入正确的手机号", pattern: /^1[34578]\d{9}$/}],
                                })(
                                    <Input style={{width: 213}} placeholder={"请输入联系方式"}/>
                                )}
                            </FormItem>
                        </li>


                    </ul>
                </Form>
                <Button type="primary"
                        onClick={this.submit.bind(this)}
                        style={{
                            bottom: 42,
                            right: -40,
                            position: "absolute",
                            width: 94,
                            height: 32
                        }}>确定</Button>
            </div>
        </div>)
    }
}

const Leader = Form.create()(LeaderF)
//TODO 待完成
/**
 * 1.登录获取获取utoken,学校id并存入session
 * 2.
 */
export default class SignPage extends React.Component {
    constructor() {
        super()
        this.state = {
            schoolId: "1",  //后台暂定为1
            groupid: "",      //领队信息提交获取
            userToken: "",
            userId: "",
            itemType: ["25米障碍往返（蛇形)",
                "10米正面交叉障碍往返",
                "竞速：300米",
                "竞速：1000米"],
            model: [
                {educateId: ["教育ID"]},
                {name: ["姓名"]},
                {birthday: ["出生日期"]},
                {cardID: ["身份证号"]},
                {sex: ["性别"]},
                {nation: ["民族"]},
                {location: ["户籍所在地"]},
                {ibCapital: ["是否为京籍"]},
                {eduNum: ["学籍号"]},
                {grade: ["年级"]},
                {classes: ["班级"]},
                {inProject: ["参赛项目"]}
            ],
            relayRace: [{edit: true}],
            manTeam: [{
                edit: true
            }
            ]
        }
    }

    componentDidMount() {

        var data = [
            {educateId: ["教育ID", "34234"]},
            {name: ["姓名", "twreg"]},
            {birthday: ["出生日期", moment("2017-09-08").format("YYYY-MM-DD")]},
            {cardID: ["身份证号", "3223524352"]},
            {sex: ["性别", "男"]},
            {nation: ["民族", "汉"]},
            {location: ["户籍所在地", "北京"]},
            {ibCapital: ["是否为京籍", "是"]},
            {eduNum: ["学籍号", "3456776543"]},
            {grade: ["年级", "一年级"]},
            {classes: ["班级", "二班"]},
            {
                item: ["参赛项目", ["25米障碍往返（蛇形)",
                    "10米正面交叉障碍往返"]]
            }
        ]

        $(".ant-checkbox-group>label").css({width: "20%", marginBottom: "10px"})

        var data = JSON.parse(sessionStorage.getItem("data")) || {};
        this.setState({
            userToken: data.userToken || "",
            userId: data.userId || ""
        })
    }
    componentDidUpdate(data){

       // debugger;
    }
    edit(type, k) {
        //信息的编辑和修改
        var arr;
        arr = [];
        var oldState = this.state[type];
        for (var i = 0; i < oldState.length; i++) {
            arr.push(Object.assign({}, oldState[i]))
        }
        for (var i = 0; i < arr[k].data.length; i++) {
            var key = Object.keys(arr[k].data[i])[0];
            var index = arr[k].data[i];
            if (key == "birthday") {
                index[key] = moment(index[key][1])
            } else if (key == "sex") {
                index[key] = (index[key][1] == "男" ? "1" : "2")
            } else if (key == "ibCapital") {
                index[key] = (index[key][1] == "是" ? "1" : "0")
            } else if (key == "grade") {
                index[key] = gradeTnum(index[key][1])
            } else if (key == "classes") {
                index[key] = gradeTnum(index[key][1])
            } else {
                index[key] = index[key][1]
            }
        }
        arr[k] = Object.assign({}, arr[k], {edit: true})
        var obj = {};
        obj[type] = arr;

        console.log(obj,'darren');

        this.setState(obj)
    }

    /**
     * del删除
     * */
    del(type, k) {
        var _this = this;

        //TODO 发送请求成功后删除
        var newArr;
        if (type == "manTeam") {

            newArr = [...this.state.manTeam];

            newArr.splice(k, 1)
            this.setState({
                manTeam: newArr
            })

        } else {
            newArr = [...this.state.relayRace];
            newArr.splice(k, 1)
            this.setState({
                relayRace: newArr
            })
        }
        return;
        //TODO --------------以下为接口部分------------------


        if (type == "manTeam") {

            newArr = [...this.state.manTeam];
            if (newArr[k].id != undefined) {
                $.ajax({
                    url: `http://max.mydanweb.com/index.php?g=Api&m=Apply&a=deleStuden&userToken=${this.state.userToken}&id=${newArr[k].id}`,
                    success: function (result) {
                        if (result.code == "1") {
                            newArr.splice(k, 1)
                            _this.setState({
                                manTeam: newArr
                            })
                        }
                    }
                })
            } else {
                newArr.splice(k, 1)
                this.setState({
                    manTeam: newArr
                })
            }

        } else {
            newArr = [...this.state.relayRace];
            newArr.splice(k, 1)
            this.setState({
                relayRace: newArr
            })
        }
        //删除
    }

    /**
     *添加信息填写框
     * */
    add(type) {
        if (type == "manTeam") {
            this.setState({
                manTeam: [...this.state.manTeam, {edit: true}]
            })
        } else {
            this.setState({
                relayRace: [...this.state.relayRace, {edit: true}]
            })
        }
    }

    /**
     * 学生信息提交
     * @param type
     * @param k
     * @param data
     */
    submit(type, k, data) {
        //copy model

        var _this = this;
        //TODO 传给后台的值
      //  debugger;
        updateState(_this)
/**
        var obj = {};
        var userToken = this.state.userToken;
        data.studentId = this.state.userId;
        data.schoolId = this.state.schoolId
        data.birthday = data.birthday.format("YYYY-MM-DD");
        data.inProject = data.inProject.join(";")
        obj.data = data;
        obj.userToken = userToken;
        $.ajax({
            url: "http://max.mydanweb.com/index.php?g=Api&m=Apply&a=addStuden",
            type: "post",
            data: obj,
            success: function (result) {
                if (result.code == "1") {
                    updateState(_this)
                    success("学生信息增加成功")
                } else {
                    error("学生信息增加失败")
                }
            }

        })
 **/
        /**
         * 更新本地数据
         * */
        function updateState(__this) {
            var _this = __this;

            var model = _this.state.model;
            var copyModel = [];
            for (var i = 0; i < model.length; i++) {
                var obj = Object.assign({}, model[i]);
                copyModel.push(obj);
            }


            // 存入状态   转换数据格式
            for (var i = 0; i < copyModel.length; i++) {
                var key = Object.keys(copyModel[i])[0];
                if (key == "birthday") {
                    copyModel[i][key][1] = (data[key] ? data[key].format("YYYY-MM-DD") : "")
                } else if (key == "sex") {
                    copyModel[i][key][1] = (data[key] == "1" ? "男" : "女")
                } else if (key == "ibCapital") {
                    copyModel[i][key][1] = (data[key] == "1" ? "是" : "否")
                } else if (key == "grade") {
                    copyModel[i][key][1] = (data[key] == "" ? "" : numTgrade(data[key], "年级"))
                } else if (key == "classes") {
                    copyModel[i][key][1] = (data[key] == "" ? "" : numTgrade(data[key], "班"))
                } else {
                    copyModel[i][key][1] = data[key] || ""
                }

            }
            //获取value值，发送请求成功后

            var newArr = []
            var objValue = {edit: false, data: copyModel};//状态改为不编辑
            if (type == "manTeam") {
                newArr = [..._this.state.manTeam];
                newArr.splice(k, 1, objValue);
                _this.setState({
                    manTeam: newArr
                })
            } else {
                newArr = [..._this.state.relayRace];
                newArr.splice(k, 1, objValue);
                _this.setState({
                    relayRace: newArr
                })
            }

        }
    }

    /**
     * 领队信息提交
     * */
    submitLeader(data) {
        var _this = this;
        var obj = {}
        obj.schoolId = "1";
        obj[0] = {leader: data.leader, phone: data.tel}
        obj[1] = {leader: data.coach1, phone: data.tel1}
        obj[2] = {leader: data.coach2, phone: data.tel2}
        $.ajax({
            url: "http://max.mydanweb.com/index.php?g=Api&m=Apply&a=addLeader",
            type: "post",
            success: function (result) {
                if (result.code == "1") {
                    _this.setState({
                        groupid: result.data.groupid
                    })
                    success("领队信息注册成功")
                } else {
                    error("领队信息注册失败")
                }
            }
        })

    }

    render() {
        //console.log('==================darren');
        return (<div style={{width: "1100px", margin: "0 auto"}}>
            <h1 style={{
                letterSpacing: "2px",
                padding: "30px 0 14px 0",
                borderBottom: "1px solid #E5E5E5",
                position: "relative"
            }}>
                体育比赛 <i style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "1px",
                width: "48%",
                backgroundColor: "#006ebb"
            }}></i>
                <span style={{
                    marginTop: "20px",
                    letterSpacing: "1px",
                    float: "right",
                    fontSize: "12px",
                    fontWeight: "normal"
                }}>
                    活动<Icon type="right"/>
                    {/*滑轮比赛<Icon type="right"/>*/}
                    <span style={{color: "#258ACC"}}>学校信息填写</span>
                </span>
            </h1>
            <Leader submit={data => this.submitLeader(data)}/>
            <ul style={{minHeight: "200px"}}>
                <li>
                    <h1 style={{
                        height: "90px",
                        position: "relative",
                        padding: "42px 0 0 26px",
                        marginRight: "4px",
                        borderBottom: "1px solid #E5E5E5",
                        fontSize: "18px"
                    }}>
                        <i style={{
                            position: "absolute",
                            left: 0,
                            top: "46px",
                            width: "7px",
                            height: "18px",
                            backgroundColor: "#006ebb",
                            borderRadius: "4px"
                        }}></i>
                        <span style={{
                            letterSpacing: "2px"
                        }}>高中男子组</span>
                        <Button type="primary" ghost
                                onClick={this.add.bind(this, "manTeam")}
                                style={{height: "32px", position: "absolute", right: "46px"}}>添加运动员</Button>
                    </h1>
                    <ul>
                        { this.state.manTeam.map((v, k) => (v.edit ?
                            <Inputs data={v.data} submit={(data) => this.submit("manTeam", k, data)}
                                    itemType={this.state.itemType} key={k} k={k} del={() => {
                                this.del("manTeam", k)
                            }}/> :
                            <Show edit={this.edit.bind(this, "manTeam", k)} k={k} key={k} show={v.data} del={() => {
                                this.del("manTeam", k)
                            }}/>))}

                    </ul>
                </li>
                <li>
                    <h1 style={{
                        height: "90px",
                        position: "relative",
                        padding: "42px 0 0 26px",
                        marginRight: "4px",
                        borderBottom: "1px solid #E5E5E5",
                        fontSize: "18px"
                    }}>
                        <Button type="primary" ghost
                                onClick={this.add.bind(this)}
                                style={{
                                    display: this.state.relayRace.length == 5 ? "none" : "block",
                                    height: "32px",
                                    position: "absolute",
                                    right: "46px"
                                }}>添加运动员</Button>
                        <i style={{
                            position: "absolute",
                            left: 0,
                            top: "46px",
                            width: "7px",
                            height: "18px",
                            backgroundColor: "#006ebb",
                            borderRadius: "4px"
                        }}></i>
                        <span style={{
                            letterSpacing: "2px"
                        }}>高中男子组 4*100米接力赛</span>

                    </h1>
                    <ul>
                        { this.state.relayRace.map((v, k) => (v.edit ?
                            <Inputs submit={(data) => this.submit("relayRace", k, data)}
                                    itemType={this.state.itemType}
                                    key={k} k={k} del={() => {
                                this.del("", k)
                            }}/> :
                            <Show edit={this.edit.bind(this, "relayRace", k)} k={k} key={k} show={v.data} del={() => {
                                this.del("relayRace", k)
                            }}/>))}
                    </ul>
                </li>
            </ul>
        </div>)
    }
}


function numTgrade(num, type) {
    switch (Number(num)) {
        case 1:
            return "一" + type;
        case 2:
            return "二" + type;
        case 3:
            return "三" + type;
        case 4:
            return "四" + type;
        case 5:
            return "五" + type;
        case 6:
            return "六" + type;
        case 7:
            return "七" + type;
        case 8:
            return "八" + type;
        case 9:
            return "九" + type;
        case 10:
            return "十" + type;
        case 11:
            return "十一" + type;
        case 12:
            return "十二" + type;

    }

}
function gradeTnum(grade) {
    switch (grade) {
        case "一年级":
            return "1";
        case "二年级":
            return "2";
        case "三年级":
            return "3";
        case "四年级":
            return "4";
        case "五年级":
            return "5";
        case "六年级":
            return "6";
        case "七年级":
            return "7";
        case "八年级":
            return "8";
        case "九年级":
            return "9";
        case "十年级":
            return "10";
        case "十一年级":
            return "11";
        case "十二年级":
            return "12";
        case "一班":
            return "1";
        case "二班":
            return "2";
        case "三班":
            return "3";
        case "四班":
            return "4";
        case "五班":
            return "5";
        case "六班":
            return "6";
        case "七班":
            return "7";
        case "八班":
            return "8";
        case "九班":
            return "9";
        case "十班":
            return "10";

    }
}
function error(msg = "密码或用户名错误") {
    Modal.error({
        okText: "确定",
        maskClosable: true,
        title: msg
    });
}
function success(msg = "注册成功") {
    Modal.success({
        okText: "确定",
        maskClosable: true,
        title: msg,
    });
}


