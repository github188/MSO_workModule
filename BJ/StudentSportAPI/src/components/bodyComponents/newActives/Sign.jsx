import React from "react";
import {Icon, Button, Checkbox, Select, Input, DatePicker} from "antd";
const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
moment.locale('zh-cn')

const ldInp = [
    "学校名称",
    "报名老师",
    "领队名称",
    "联系方式",
    "教练名称",
    "联系方式",
    "教练名称",
    "联系方式"
];
const setMation = [
    {k: "教育ID", v: "09106072"},
    {k: "姓名", v: "张文"},
    {k: "出生日期", v: "2010-01-02"},
    {k: "身份证号", v: "1243353454352454"},
    {k: "性别", v: "男"},
    {k: "民族", v: "汉族"},
    {k: "户籍所在地", v: "北京市海淀区"},
    {k: "是否为京籍", v: "是"},
    {k: "学籍号", v: "09106072"},
    {k: "年级", v: "一年级"}
];
const setMationOpt = [
    {k: "教育ID", v: <Input placeholder="请输入教育ID"/>},
    {k: "姓名", v: <Input placeholder="请输入姓名"/>},
    {k: "出生日期", v: <DatePicker defaultValue={moment("2012-01-02", "YYYY-MM-DD")} />},
    {k: "身份证号", v: <Input placeholder="请输入身份证号"/>},
    {
        k: "性别", v: <Select
        showSearch
        style={{width: 160}}
        placeholder="请选择性别"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
        <Option value="男">男</Option>
        <Option value="女">女</Option>
    </Select>
    },
    {k: "民族", v: <Input placeholder="请输入民族"/>},
    {k: "户籍所在地", v: <Input placeholder="请输入户籍所在地"/>},
    {
        k: "是否为京籍", v: <Select
        showSearch
        style={{width: 160}}
        placeholder="是否为京籍"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
        <Option value="是">是</Option>
        <Option value="否">否</Option>
    </Select>
    },
    {k: "学籍号", v: <Input placeholder="请输入学籍号"/>},
    {
        k: "年级", v: <Select
        showSearch
        style={{width: 160}}
        placeholder="请选择年级"
        optionFilterProp="children"
        filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
        <Option value="一年级">一年级</Option>
        <Option value="二年级">二年级</Option>
        <Option value="三年级">三年级</Option>
        <Option value="四年级">四年级</Option>
    </Select>
    }
];
const projects = [
    "25米障碍往返（蛇形)",
    "10米正面交叉障碍往返",
    "竞速：300米",
    "竞速：1000米"
];
const manList = [
    {
        projects: projects,
        setMation: setMation
    }, {
        projects: projects,
        setMation: setMationOpt,
        set: true
    }

]
export default class Sign extends React.Component {
    render() {
        return (<div style={{width: "1100px", margin: "0 auto"}}>
            <h1 style={{
                letterSpacing: "2px",
                padding: "30px 0 14px 0",
                borderBottom: "1px solid #E5E5E5",
                position: "relative"
            }}>
                阳光体育2015年北京市中小学生轮滑比赛 <i style={{
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
                    活动<Icon type="right"/>滑轮比赛<Icon type="right"/><span style={{color: "#258ACC"}}>学校信息填写</span>
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
                    <ul className="clear">
                        {ldInp.map((v, k)=>(<li
                            key={k}
                            style={{
                                width: "374px",
                                marginBottom: "16px",
                                float: "left"
                            }}>
                            <span style={{color: "red"}}>*</span> <span
                            style={{margin: "0 10px"}}>{v + " :"}</span><input type="text" style={{
                            border: "1px solid #D8D8D8",
                            borderRadius: "4px",
                            width: "213px",
                            padding: "14px 0 14px 20px"
                        }} placeholder={"请输入" + v}/>
                        </li>))}
                    </ul>
                    <Button type="primary" style={{
                        bottom: "18px",
                        right: "80px",
                        position: "absolute",
                        width: "132px",
                        height: "46px"
                    }}>确定</Button>
                </div>
            </div>
            <ul>
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
                    </h1>
                    <ul>
                        {manList.map((vl, k)=>(
                            <li
                                key={k}
                                style={{borderBottom: "1px dashed #D7D7D7"}}>
                                <div style={{padding: "28px 60px 28px 0 "}}>
                                    <div style={{float: "right"}}>
                                        <a style={{display: !vl.set ? "" : "none"}}>编辑</a><span
                                        style={{display: !vl.set ? "" : "none", margin: "0 10px"}}>|</span><a>删除</a>
                                    </div>
                                    <span style={{color: "#000000", fontWeight: "bold", fontSize: "15px"}}>学生信息</span> <span
                                    style={{marginLeft: "10px", color: "#595959"}}>{"序号 " + (k + 1)}</span>
                                </div>
                                <ul>
                                    {vl.setMation.map((v, k)=>(<li
                                        key={k}
                                        className="clear"
                                        style={{width: "25%", height: vl.set ? "50px" : "30px", float: "left"}}>
                                        <label style={{
                                            marginTop: vl.set ? "5px" : "0px",
                                            color: "#595959",
                                            width: "82px",
                                            textAlign: "right",
                                            float: 'left'
                                        }}>{v.k + " :"}</label>
                                        <div style={{paddingLeft: "20px", float: 'left'}}>{v.v}</div>
                                    </li>))}
                                    <li className="clear" style={{width: "100%", height: "30px", clear: "both"}}>
                                        <label style={{color: "#595959", width: "82px", textAlign: "right", float: 'left'}}>参赛项目:</label>
                                        <ul className="clear" style={{float: 'left', paddingLeft: vl.set ? "20px" : 0}}>
                                            {vl.set ? ( <CheckboxGroup defaultValue={["10米正面交叉障碍往返"]} options={vl.projects}/>) : ( vl.projects.map((v, k)=>(<li
                                                style={{float: 'left'}}
                                                key={k}
                                            >
                                                <span style={{margin: "0 20px"}}>{v}</span>
                                            </li>)))}

                                        </ul>
                                    </li>
                                    <li style={{
                                        display: vl.set ? "block" : "none",
                                        height: "90px",
                                        lineHeight: "80px",
                                        textAlign: "center"
                                    }}><Button style={{width: "136px", height: "34px", backgroundColor: "#006FC1"}}
                                               type="primary">确定</Button>
                                        <div className="rl"> <Button type="primary" ghost
                                                      style={{height: "32px",right: "46px"}}>添加运动员</Button></div>
                                    </li>
                                </ul>
                            </li>
                        ))}
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
                        }}>高中男子组 4*100米接力赛-1队</span>
                        <Button type="primary" ghost
                                style={{height: "32px", position: "absolute", right: "46px"}}>添加运动员</Button>
                    </h1>
                    <ul>
                        {manList.map((vl, k)=>(
                            <li
                                key={k}
                                style={{borderBottom: "1px dashed #D7D7D7"}}>
                                <div style={{padding: "28px 60px 28px 0 "}}>
                                    <div style={{float: "right"}}>
                                        <a style={{display: !vl.set ? "" : "none"}}>编辑</a><span
                                        style={{display: !vl.set ? "" : "none", margin: "0 10px"}}>|</span><a>删除</a>
                                    </div>
                                    <span style={{color: "#000000", fontWeight: "bold", fontSize: "15px"}}>学生信息</span> <span
                                    style={{marginLeft: "10px", color: "#595959"}}>{"序号 " + (k + 1)}</span>
                                </div>
                                <ul>
                                    {vl.setMation.map((v, k)=>(<li
                                        key={k}
                                        className="clear"
                                        style={{width: "25%", height: vl.set ? "50px" : "30px", float: "left"}}>
                                        <label style={{
                                            marginTop: vl.set ? "5px" : "0px",
                                            color: "#595959",
                                            width: "82px",
                                            textAlign: "right",
                                            float: 'left'
                                        }}>{v.k + " :"}</label>
                                        <div style={{paddingLeft: "20px", float: 'left'}}>{v.v}</div>
                                    </li>))}
                                    <li className="clear" style={{width: "100%", height: "30px", clear: "both"}}>
                                        <label style={{color: "#595959", width: "82px", textAlign: "right", float: 'left'}}>参赛项目:</label>
                                        <ul className="clear" style={{float: 'left', paddingLeft: vl.set ? "20px" : 0}}>
                                            {vl.set ? ( <CheckboxGroup options={vl.projects}/>) : ( vl.projects.map((v, k)=>(<li
                                                style={{float: 'left'}}
                                                key={k}
                                            >
                                                <span style={{margin: "0 20px"}}>{v}</span>
                                            </li>)))}

                                        </ul>
                                    </li>
                                    <li style={{
                                        display: vl.set ? "block" : "none",
                                        height: "90px",
                                        lineHeight: "80px",
                                        textAlign: "center"
                                    }}><Button style={{width: "136px", height: "34px", backgroundColor: "#006FC1"}}
                                               type="primary">确定</Button></li>
                                </ul>
                            </li>
                        ))}
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
                        }}>高中男子组 4*100米接力赛-2队</span>
                        <Button type="primary" ghost
                                style={{height: "32px", position: "absolute", right: "46px"}}>添加运动员</Button>
                    </h1>
                    <ul>
                        {manList.map((vl, k)=>(
                            <li
                                key={k}
                                style={{borderBottom: "1px dashed #D7D7D7"}}>
                                <div style={{padding: "28px 60px 28px 0 "}}>
                                    <div style={{float: "right"}}>
                                        <a style={{display: !vl.set ? "" : "none"}}>编辑</a><span
                                        style={{display: !vl.set ? "" : "none", margin: "0 10px"}}>|</span><a>删除</a>
                                    </div>
                                    <span style={{color: "#000000", fontWeight: "bold", fontSize: "15px"}}>学生信息</span> <span
                                    style={{marginLeft: "10px", color: "#595959"}}>{"序号 " + (k + 1)}</span>
                                </div>
                                <ul>
                                    {vl.setMation.map((v, k)=>(<li
                                        key={k}
                                        className="clear"
                                        style={{width: "25%", height: vl.set ? "50px" : "30px", float: "left"}}>
                                        <label style={{
                                            marginTop: vl.set ? "5px" : "0px",
                                            color: "#595959",
                                            width: "82px",
                                            textAlign: "right",
                                            float: 'left'
                                        }}>{v.k + " :"}</label>
                                        <div style={{paddingLeft: "20px", float: 'left'}}>{v.v}</div>
                                    </li>))}
                                    <li className="clear" style={{width: "100%", height: "30px", clear: "both"}}>
                                        <label style={{color: "#595959", width: "82px", textAlign: "right", float: 'left'}}>参赛项目:</label>
                                        <ul className="clear" style={{float: 'left', paddingLeft: vl.set ? "20px" : 0}}>
                                            {vl.set ? ( <CheckboxGroup options={vl.projects}/>) : ( vl.projects.map((v, k)=>(<li
                                                style={{float: 'left'}}
                                                key={k}
                                            >
                                                <span style={{margin: "0 20px"}}>{v}</span>
                                            </li>)))}

                                        </ul>
                                    </li>
                                    <li style={{
                                        display: vl.set ? "block" : "none",
                                        height: "90px",
                                        lineHeight: "80px",
                                        textAlign: "center"
                                    }}><Button style={{width: "136px", height: "34px", backgroundColor: "#006FC1"}}
                                               type="primary">确定</Button></li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>

        </div>)
    }
}