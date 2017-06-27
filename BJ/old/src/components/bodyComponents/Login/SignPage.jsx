import React, {Component} from "react";
import {Icon, Button, Checkbox, Select, Input, DatePicker, message, Spin, Form} from "antd";
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
moment.locale('zh-cn')

const ldInp = [
    "学校名称",
    "领队名称",
    "领队名称",
    "联系方式",
    "教练名称",
    "联系方式",
    "教练名称",
    "联系方式"
];
const projects = [

    "25米障碍往返（蛇形)",
    "10米正面交叉障碍往返",
    "竞速：300米",
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
var test = [...setMation, {"参赛项目": projects.slice(2)}]
const Message = (state, content) => {
    if (state == 1) {
        message.success(content, 1);
    }
    if (state == 2) {
        message.error(content, 1);
    }
};
//TODO  使用antd form表单
class Inputs extends Component {
    constructor() {
        super();
        this.state = {
            "教育ID": "",
            "姓名": "",
            "出生日期": "",
            "身份证号": "",
            "性别": "",
            "民族": "",
            "户籍所在地": "",
            "是否为京籍": "",
            "学籍号": "",
            "年级": "",
            "班级": "",
            "参赛项目": []
        }
    }

    submit() {

        var eduID = this.refs.eduID.refs.input.value;
        var name = this.refs.name.refs.input.value;
        var cardID = this.refs.cardID.refs.input.value;
        var nation = this.refs.nation.refs.input.value;
        var place = this.refs.place.refs.input.value;
        var eduNUM = this.refs.eduNUM.refs.input.value;

        this.setState({
            "教育ID": eduID,
            "姓名": name,
            "身份证号": cardID,
            "民族": nation,
            "户籍所在地": place,
            "学籍号": eduNUM
        }, function () {
            this.props.submit(this.state)
        })
    }

    DateChange(val) {
        this.setState({
            "出生日期": moment(val).format("YYYY-MM-DD")
        })
    }

    CheckChange(checkValue) {
        this.setState({
            "参赛项目": checkValue
        })

    }

    Selected(val, ref) {
        var obj = {};
        obj[ref] = val;
        this.setState(obj)
    }

    render() {
        let arr = this.props.data || [];
        var data = {};
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                var key = Object.keys(arr[i])[0]
                data[key] = arr[i][key]
            }
        }


        return (<li style={{borderBottom: "1px dashed #D7D7D7"}} key={this.props.k}>
            <div style={{padding: "28px 60px 28px 0 "}}>
                <div style={{float: "right"}}>
                    <a onClick={this.props.del}>删除</a>
                </div>
                <span style={{color: "#000000", fontWeight: "bold", fontSize: "15px"}}>学生信息</span>
                <span
                    style={{marginLeft: "10px", color: "#595959"}}>{"序号 " + (this.props.k + 1)}</span>
            </div>
            <ul>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 教育ID：</label>

                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Input ref="eduID" placeholder="请输入教育ID" defaultValue={data["教育ID"] || ""}/>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 姓名：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Input ref="name" placeholder="请输入姓名" defaultValue={data["姓名"] || ""}/>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 出生日期：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <DatePicker ref="birth" onChange={this.DateChange.bind(this)}
                                    defaultValue={data["出生日期"] ? moment(data["出生日期"], "YYYY-MM-DD") : ""}/>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 身份证号：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Input placeholder="请输入身份证号" ref="cardID" defaultValue={data["身份证号"] || ""}/>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 性别：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Select
                            showSearch
                            onSelect={this.Selected.bind(this, "性别")}
                            defaultValue={data["性别"]}
                            style={{width: 160}}
                            placeholder="请选择性别"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="男">男</Option>
                            <Option value="女">女</Option>
                        </Select>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 民族：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Input placeholder="请输入民族" ref="nation" defaultValue={data["民族"] || ""}/>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 户籍所在地：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Input placeholder="请输入户籍所在地" ref="place" defaultValue={data["户籍所在地"] || ""}/>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 是否为京籍：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Select
                            ref="BJ"
                            showSearch
                            onSelect={this.Selected.bind(this, "是否为京籍")}
                            defaultValue={data["是否为京籍"]}
                            style={{width: 160}}
                            placeholder="是否为京籍"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="是">是</Option>
                            <Option value="否">否</Option>
                        </Select>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 学籍号：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Input placeholder="请输入学籍号" ref="eduNUM" defaultValue={data["学籍号"]}/>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 年级：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Select
                            onselect={this.Selected.bind(this, "年级")}
                            showSearch
                            defaultValue={data["年级"]}
                            style={{width: 160}}
                            placeholder="请选择年级"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="一年级">一年级</Option>
                            <Option value="二年级">二年级</Option>
                            <Option value="三年级">三年级</Option>
                            <Option value="四年级">四年级</Option>
                            <Option value="五年级">五年级</Option>
                            <Option value="六年级">六年级</Option>
                            <Option value="七年级">七年级</Option>
                            <Option value="八年级">八年级</Option>
                            <Option value="九年级">九年级</Option>
                            <Option value="十年级">十年级</Option>
                            <Option value="十一年级">十一年级</Option>
                            <Option value="十二年级">十二年级</Option>
                        </Select>
                    </div>
                </li>
                <li className="clear"
                    style={{width: "25%", height: "50px", float: "left"}}>
                    <label style={{
                        marginTop: "5px",
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}> 班级：</label>
                    <div style={{paddingLeft: "20px", float: 'left'}}>
                        <Select
                            showSearch
                            onSelect={this.Selected.bind(this, "班级")}
                            defaultValue={data["班级"]}
                            style={{width: 160}}
                            placeholder="请选择班级"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="一班">一班</Option>
                            <Option value="二班">二班</Option>
                            <Option value="三班">三班</Option>
                            <Option value="四班">四班</Option>
                            <Option value="五班">五班</Option>
                            <Option value="六班">六班</Option>
                            <Option value="七班">七班</Option>
                            <Option value="八班">八班</Option>
                            <Option value="九班">九班</Option>
                            <Option value="十班">十班</Option>
                        </Select>
                    </div>
                </li>
                <li className="clear" style={{width: "100%", height: "30px", clear: "both"}}>
                    <label style={{
                        color: "#595959",
                        width: "82px",
                        textAlign: "right",
                        float: 'left'
                    }}>参赛项目:</label>
                    <ul className="clear" style={{float: 'left', paddingLeft: "20px", width: "1000px"}}>
                        <CheckboxGroup onChange={this.CheckChange.bind(this)} defaultValue={data["参赛项目"] || []}
                                       options={this.props.itemType || []}/>
                    </ul>
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
        </li>)
    }

}
class Show extends Component {
    render() {
        let list = this.props.show || []
        return (<li key={this.props.k} style={{borderBottom: "1px dashed #D7D7D7", paddingBottom: "20px"}}>

            <div style={{padding: "28px 60px 28px 0 "}}>
                <div style={{float: "right"}}>
                    <a onClick={this.props.edit}>编辑</a><span
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
                            height: "30px",
                            clear: "both"
                        }} key={k}>
                            <label style={{
                                color: "#595959",
                                width: "82px",
                                textAlign: "right",
                                float: 'left'
                            }}>{Object.keys(v)[0] + ":"}</label>
                            <ul className="clear" style={{float: 'left', width: "1000px", paddingLeft: "20px"}}>
                                {(Array.isArray(v[Object.keys(v)[0]]) ? v[Object.keys(v)[0]] : []).map((vs, k) => (
                                    <li style={{float: 'left', width: "20%", marginBottom: "20px"}} key={k}>
                                        <span>{vs}</span>
                                    </li>))}

                            </ul>
                        </li>
                    ) : ( <li
                            key={k}
                            className="clear"
                            style={{width: "25%", height: "30px", float: "left"}}>
                            <label style={{
                                marginTop: "0px",
                                color: "#595959",
                                width: "82px",
                                textAlign: "right",
                                float: 'left'
                            }}>{Object.keys(v)[0] + " :"}</label>
                            <div style={{paddingLeft: "20px", float: 'left'}}>{v[Object.keys(v)[0]]}</div>
                        </li>
                    )
                ))}
            </ul>

        </li>)
    }
}
//TODO 待完成
/**
 * 1.登录获取获取utoken,学校id并存入session
 * 2.
 */
export default class SignPage extends React.Component {
    constructor() {
        super()
        this.state = {
            userToken: "",
            userId: "",
            model: [
                {"教育ID": ""},
                {"姓名": ""},
                {"出生日期": ""},
                {"身份证号": ""},
                {"性别": ""},
                {"民族": ""},
                {"户籍所在地": ""},
                {"是否为京籍": ""},
                {"学籍号": ""},
                {"年级": ""},
                {"班级": ""},
                {"参赛项目": []}],
            itemType: ["25米障碍往返（蛇形)",
                "10米正面交叉障碍往返",
                "竞速：300米",
                "竞速：1000米"],
            relayRace: [{edit: true}, {edit: true}, {edit: true}, {edit: true}],
            manTeam: [{edit: true}]
        }
    }

    componentDidMount() {
        var _this = this;
        $(".ant-checkbox-group>label").css({width: "20%", marginBottom: "10px"})
        var vals = $(".leader").find("input");

        function messge() {
            if ($(this).val().trim() == "") {
                Message(1, "手机号不能为空")
            } else {
                if (!/^1[34578]\d{9}$/.test($(this).val())) {
                    Message(2, "手机号格式错误")
                }
            }

        }

        vals.eq(3).blur(messge)
        vals.eq(5).blur(messge)
        vals.eq(7).blur(messge)
        //TODO 领队信息获取

        var data = JSON.parse(sessionStorage.getItem("data"));
        this.setState({
            userToken: data.userToken,
            userId: data.userId
        })
        $.ajax({
            url: `http://max.mydanweb.com/index.php?g=Api&m=Apply&a=getLeader&userToken=${data.userToken}&schoolId=${data.userId}`,
            success: function (result) {
                if (result.code == "1") {
                    vals.eq(0).val(data.userId)
                    vals.eq(2).val(result.data[0].leader)
                    vals.eq(3).val(result.data[0].phone)
                    vals.eq(4).val(result.data[1].leader)
                    vals.eq(5).val(result.data[1].phone)
                    vals.eq(6).val(result.data[2].leader)
                    vals.eq(7).val(result.data[2].phone)
                } else {
                    for (var i = 0; i < vals.length; i++) {
                        vals[i].value = ""
                    }
                }

            }
        })

        //学生信息获取
        $.ajax({
            url: `http://max.mydanweb.com/index.php?g=Api&m=Apply&a=getStuden&userToken=${data.userToken}`,
            success: function (result) {
                if (result.code == "1") {
                    var allMation = result.data.datalist
                    //moment.unix("978278400").format("YYYY-MM-DD")
                    var manTeam = []
                    for (var i = 0; i < allMation.length; i++) {
                        var obj = {edit: false};
                        obj.id = allMation[i].id;
                        var data = {};
                        //教育id   educateId
                        // 姓名":  username
                        // 出生日期    birthday
                        // 身份证号  IDcard
                        // 性别":    sex   1男2女
                        // 民族":   nation
                        // 户籍所在  location
                        // 是否为京  ibCapital   0否 1是
                        // 学籍号"    studentNum
                        // 年级":     grade
                        // 班级":
                        // 参赛项目  addProject
                        data["教育id"] = allMation[i].educateId
                        data["姓名"] = allMation[i].username
                        data["出生日期"] = moment.unix(allMation[i].birthday).format("YYYY-MM-DD")
                        data["身份证号"] = allMation[i].IDcard
                        data["性别"] = allMation[i].sex == "1" ? "男" : "女"
                        data["民族"] = allMation[i].nation
                        data["户籍所在"] = allMation[i].location
                        data["是否为京"] = allMation[i].ibCapital == "0" ? "否" : "是";
                        data["学籍号"] = allMation[i].studentNum
                        data["年级"] = numTgrade(allMation[i].grade,"年级")||""
                        data["班级"] = numTgrade(allMation[i].inClass,"班级") || ""
                        data["参赛项目"] = allMation[i].addProject || []
                        obj.data = data
                        manTeam.push(obj);
                    }
                    _this.setState({
                        manTeam: manTeam
                    })

                }
            }

        })
    }

    componentDidUpdate() {
        $(".ant-checkbox-group>label").css({width: "20%", marginBottom: "10px"})

    }

    edit(type, k) {
        //信息的编辑和修改
        var arr;
        if (type == "manTeam") {
            arr = [...this.state.manTeam]
            arr[k] = Object.assign({}, arr[k], {edit: true})
            this.setState({
                manTeam: arr
            })
        } else {
            arr = [...this.state.relayRace]
            arr[k] = Object.assign({}, arr[k], {edit: true})
            this.setState({
                manTeam: arr
            })
        }
    }

    /**
     * del删除
     * */
    del(type, k) {
        var _this = this;

        //TODO 发送请求成功后删除
        var newArr = []
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

    submit(type, k, data) {
        var model = this.state.model;
        var _this = this;
        var arr = [];
        for (var i = 0; i < model.length; i++) {
            var key = Object.keys(model[i])[0];
            var obj = {};
            obj[key] = data[key];
            var newObj = Object.assign({}, model[i], obj)
            arr.push(newObj)
        }
        //获取value值，发送请求成功后
        var newArr = []
        var objValue = {edit: false, data: arr};//状态改为不编辑

        var data={};//后台传递数据
        //
        data.educateId="";
        data.username="";
        data.birthday="";
        data.IDcard="";
        data.sex="";
        data.nation="";
        data.location="";
        data.ibCapital="";
        data.studentNum="";
       //TODO groupTypeid??????????




        if (type == "manTeam") {
            newArr = [...this.state.manTeam];
            if (newArr[k].id != undefined) {
                //修改
                $.ajax({
                    url: `http://max.mydanweb.com/index.php?g=Api&m=Apply&a=editStuden&userToken=${this.state.userToken}&id=${newArr[k].id}`,
                    data: JSON.stringify(data),
                    success: function (result) {
                        if (result.code == "1") {
                            newArr.splice(k, 1, objValue);
                            _this.setState({
                                manTeam: newArr
                            })
                        }
                    }
                })


            } else {
                //新增
                //data学校的id
                $.ajax({
                    url: `http://max.mydanweb.com/index.php?g=Api&m=Apply&a=addStuden&userToken=${this.state.userToken}`,
                    data:  JSON.stringify(data),
                    success: function (result) {
                        if (result.code == "1") {

                            objValue.id=result.data.id
                            newArr.splice(k, 1, objValue);
                            _this.setState({
                                manTeam: newArr
                            })
                        }
                    }
                })


            }


        } else {
            newArr = [...this.state.relayRace];
            newArr.splice(k, 1, objValue);
            this.setState({
                relayRace: newArr
            })
        }
    }

    leaderMation() {
        var _this = this;
        //验证11位手机号
        var vals = $(".leader").find("input");
        var schoolName = vals[0].value;
        var leader = vals[2].value;
        var Tel = vals[3].value;
        var coach1 = vals[4].value;
        var Tel1 = vals[5].value;
        var coach2 = vals[6].value;
        var Tel2 = vals[7].value;
        var bool = true;
        for (var i = 0; i < vals.length; i++) {
            if (i == 1) {
                continue;
            }
            if ($(vals[i]).val().trim() == "") {
                bool = false;
            }
            if (i == 3 || i == 5 || i == 7) {
                if (!/^1[34578]\d{9}$/.test($(vals[i]).val())) {
                    bool = false;
                }
            }

        }
        if (bool) {
            var data = [];
            //data[0][Identity]  身份 1＝领队  2＝教练
            data[0] = {
                Identity: 1,
                leader: leader,
                phone: Tel
            }
            data[1] = {
                Identity: 2,
                leader: coach1,
                phone: Tel1
            }
            data[2] = {
                Identity: 2,
                leader: coach2,
                phone: Tel2
            }

            //发送ajax请求
            $.ajax({
                url: `http://max.mydanweb.com/index.php?g=Api&m=Apply&a=addLeader&userToken=${_this.state.userToken}&schoolId=${_this.state.userId}`,
                data: JSON.stringify(data),
                success: function (result) {
                    if (result.code == "1") {
                        message(1, "修改信息成功")
                    } else {
                        message(2, "修改信息失败")
                    }

                }
            })
        }


    }

    render() {
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
            <div>
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


                    <ul className="clear leader">
                        {ldInp.map((v, k) => (<li
                            key={k}
                            style={{
                                height: "48px",
                                width: "374px",
                                marginBottom: "16px",
                                float: "left"
                            }}>
                            <div style={{display: k == 1 ? "none" : "block"}}>
                                <span style={{color: "red"}}>*</span> <span
                                style={{margin: "0 10px"}}>{v + " :"}</span><input type="text" style={{
                                border: "1px solid #D8D8D8",
                                borderRadius: "4px",
                                width: "213px",
                                padding: "14px 0 14px 20px"
                            }} placeholder={"请输入" + v}/>
                            </div>
                        </li>))}
                    </ul>


                    <Button type="primary"
                            onClick={this.leaderMation.bind(this)}
                            style={{
                                bottom: "18px",
                                right: "80px",
                                position: "absolute",
                                width: "132px",
                                height: "46px"
                            }}>确定</Button>
                </div>
            </div>
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
                            <Inputs submit={(data) => this.submit("relayRace", k, data)} itemType={this.state.itemType}
                                    key={k} k={k} del={() => {
                                this.del("", k)
                            }}/> : <Show edit={this.edit.bind(this, "relayRace", k)} show={v.data} k={k} del={() => {
                                this.del("", k)
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
            return 1;
        case "二年级":
            return 2;
        case "三年级":
            return 3;
        case "四年级":
            return 4;
        case "五年级":
            return 5;
        case "六年级":
            return 6;
        case "七年级":
            return 7;
        case "八年级":
            return 8;
        case "九年级":
            return 9;
        case "十年级":
            return 10;
        case "十一年级":
            return 11;
        case "十二年级":
            return 12;
        case "一班":
            return 1;
        case "二班":
            return 2;
        case "三班":
            return 3;
        case "四班":
            return 4;
        case "五班":
            return 5;
        case "六班":
            return 6;
        case "七班":
            return 7;
        case "八班":
            return 8;
        case "九班":
            return 9;
        case "十班":
            return 10;

    }
}


//TODO  编辑或新增字段，提交时班级名转换，数据转换， 参赛项目的获取
/*
* react报错信息
*VM22605:6 Uncaught Error: Minified React error #119; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=119 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
 at n (eval at globalEval (jquery.js:330), <anonymous>:6:1367)
 at Object.addComponentAsRefTo (eval at globalEval (jquery.js:330), <anonymous>:23:15227)
 at r (eval at globalEval (jquery.js:330), <anonymous>:23:16521)
 at Object.a.attachRefs (eval at globalEval (jquery.js:330), <anonymous>:23:16728)
 at h.r (eval at globalEval (jquery.js:330), <anonymous>:6:11628)
 at e.notifyAll (eval at globalEval (jquery.js:330), <anonymous>:21:6431)
 at r.close (eval at globalEval (jquery.js:330), <anonymous>:23:16009)
 at r.closeAll (eval at globalEval (jquery.js:330), <anonymous>:6:23692)
 at r.perform (eval at globalEval (jquery.js:330), <anonymous>:6:23181)
 at o.perform (eval at globalEval (jquery.js:330), <anonymous>:6:23098)
*
* */
