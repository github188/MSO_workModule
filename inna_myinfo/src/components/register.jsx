import React, {Component} from "react";
import {Button, Input, Select, Form, Checkbox, Upload, Radio, Col, Row} from "antd";
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import "../css/base.css";
import imgUrl from "../img/file_aside.png";
import imgUrl1 from "../img/file_list2.png";
import imgUrl2 from "../img/file_list3.png";
import imgUrl3 from "../img/file_list4.png";
class RegisterF extends Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };

        return (<div style={{width: 880, backgroundColor: "#ffffff",}}>
            <div className="title2">账号信息</div>
            <Form layout="horizontal">
                <div className="company_info">
                    <div className="title3">公司基本信息</div>
                    <div className="regist_content">
                        <FormItem label="公司全称" {...formItemLayout}>
                            {getFieldDecorator("fullName", {rules: [{required: true, message: "请输入公司全称"}]})(<Input
                                placeholder="请输入您的公司全称"/>
                            )}
                        </FormItem>
                        <FormItem label="公司简称" {...formItemLayout}>
                            {getFieldDecorator("shortName")(<Input placeholder="您的公司简称，非必填"/>
                            )}
                        </FormItem>
                        <FormItem label="公司地址" {...formItemLayout}>
                            {getFieldDecorator("address", {rules: [{required: true, message: "请输入公司全称"}]})(<Input
                                placeholder="请输入公司全称"/>
                            )}
                        </FormItem>
                        <FormItem label="擅长行业" {...formItemLayout}>
                            {getFieldDecorator("goodIndustry", {rules: [{required: true, message: "擅长行业"}]})(<Select
                                showSearch
                                style={{width: 200}}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                // onChange={handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>)}
                        </FormItem>

                        <FormItem label="擅长项目" {...formItemLayout}>
                            {getFieldDecorator("goodItem", {rules: [{required: true, message: " "}]})(<CheckboxGroup
                                options={["意向邀约", "邀约到访", "增值服务", "电话销售", "其他"]}/>)}
                        </FormItem>

                        <FormItem label="公司网址" {...formItemLayout}>
                            {getFieldDecorator("companyNet")(<Input placeholder="您的公司网址，非必填"/>)}

                        </FormItem>

                        <FormItem label="公司规模" {...formItemLayout}>
                            {getFieldDecorator("scale", {rules: [{required: true, message: "请输入公司全称"}]})(<Select
                                showSearch
                                style={{width: 200}}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                // onChange={handleChange}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Option value="jack">10人以下</Option>
                                <Option value="lucy">10~50人</Option>
                                <Option value="tom">50~200人</Option>
                                <Option value="tom">200人</Option>
                            </Select>)}
                        </FormItem>

                        <FormItem label="公司图片" {...formItemLayout}>
                            {getFieldDecorator("companyPhotos", {rules: [{required: true, message: "请输入公司全称"}]})(<Upload
                                className="avatar-uploader"
                                name="avatar"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                // beforeUpload={beforeUpload}
                                // onChange={this.handleChange}
                            >
                                {
                                    imgUrl ?
                                        <img src={imgUrl} alt="" className="avatar"/> :
                                        <Icon type="plus" className="avatar-uploader-trigger"/>
                                }
                            </Upload>)}
                        </FormItem>


                    </div>
                </div>
                <div className="contact_info">
                    <div className="title3">联系信息</div>
                    <div className="regist_content">
                        <FormItem label="联系人" {...formItemLayout}>
                            {getFieldDecorator("linkMan", {rules: [{required: true, message: "请输入联系人"}]})(<Input/>)}
                        </FormItem>
                        <FormItem label="联系电话" {...formItemLayout}>
                            {getFieldDecorator("linkTel", {
                                rules: [{
                                    required: true,
                                    pattern: "/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/",
                                    message: "请输入正确的手机号"
                                }]
                            })(<Input/>)}
                        </FormItem>
                        <FormItem label="电子邮箱" {...formItemLayout}>
                            {getFieldDecorator("email", {
                                rules: [{
                                    required: true,
                                    pattern: "/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/",
                                    message: "请输入正确的电子邮箱"
                                }]
                            })(<Input/>)}
                        </FormItem>
                        <FormItem label="QQ" {...formItemLayout}>
                            {getFieldDecorator("qq")(<Input/>)}
                        </FormItem>
                    </div>
                </div>
                <div className="DB_info">
                    <div className="title3">数据库信息</div>
                    <div className="register_content">
                        <FormItem label="自有数据库" {...formItemLayout}>
                            {getFieldDecorator("DBdata", {rules: [{required: true, message: ""}]})(<RadioGroup
                                value={1}>
                                <Radio value={1}>无</Radio>
                                <Radio value={2}>有</Radio>
                            </RadioGroup>)}
                        </FormItem>
                        <FormItem label="数据分布" {...formItemLayout}>
                            {getFieldDecorator("distribution", {rules: [{required: true, message: ""}]})(<RadioGroup
                                value={1}>
                                <Radio value={1}>全部</Radio>
                                <Radio value={2}>自定义城市</Radio>
                            </RadioGroup>)}
                        </FormItem>

                    </div>
                </div>
                <div className="finance_info">
                    <div className="title3">财务信息</div>
                    <div className="register_content">
                        <FormItem label="开户名称" {...formItemLayout}>
                            {getFieldDecorator("accountName", {rules: [{required: true, message: "请输入公司账户的开户名称"}]})(
                                <Input placeholder="请输入公司账户的开户名称"/>)}
                        </FormItem>
                        <FormItem label="开户行" {...formItemLayout}>
                            {getFieldDecorator("bank", {rules: [{required: true, message: "请输入开户银行的名称"}]})(<Input
                                placeholder="请输入开户银行的名称"/>)}
                        </FormItem>
                        <FormItem label="公司账号" {...formItemLayout}>
                            {getFieldDecorator("accountNumber", {rules: [{required: true, message: "请输入公司账号"}]})(<Input
                                placeholder="请输入公司账号"/>)}
                        </FormItem>
                        <FormItem label="开发票类型" {...formItemLayout}>
                            {getFieldDecorator("accountNumber", {rules: [{required: true, message: "请输入公司账号"}]})(
                                <RadioGroup value={1}>
                                    <Radio value={1}>增票(一般纳税人)</Radio>
                                    <Radio value={2}>增票(小规模纳税人)</Radio>
                                    <Radio value={3}>普票</Radio>
                                </RadioGroup>)}
                        </FormItem>
                    </div>
                </div>
                <div className="company_photos">
                    <div className="title3">企业三证</div>
                    <div className="register_content">
                        <p style={{paddingLeft: 120}}>上传企业三证，如果三证合一，可上传3张一样的！仅支持jpg、png格式的图片，小于1MB</p>
                        <Row gutter={0}>
                            <Col span={8}>
                                <FormItem>
                                    {getFieldDecorator("license", {rules: [{required: true, message: "请输入公司全称"}]})(
                                        <Upload
                                            className="avatar-uploader"
                                            name="avatar"
                                            showUploadList={false}
                                            action="//jsonplaceholder.typicode.com/posts/"
                                            // beforeUpload={beforeUpload}
                                            // onChange={this.handleChange}
                                        >
                                            {
                                                imgUrl1 ?
                                                    <img src={imgUrl1} alt="" className="avatar"/> :
                                                    <Icon type="plus" className="avatar-uploader-trigger"/>
                                            }
                                        </Upload>)}
                                </FormItem>

                            </Col>
                            <Col span={8}>
                                <FormItem>
                                    {getFieldDecorator("license", {rules: [{required: true, message: "请输入公司全称"}]})(
                                        <Upload
                                            className="avatar-uploader"
                                            name="avatar"
                                            showUploadList={false}
                                            action="//jsonplaceholder.typicode.com/posts/"
                                            // beforeUpload={beforeUpload}
                                            // onChange={this.handleChange}
                                        >
                                            {
                                                imgUrl2 ?
                                                    <img src={imgUrl2} alt="" className="avatar"/> :
                                                    <Icon type="plus" className="avatar-uploader-trigger"/>
                                            }
                                        </Upload>)}
                                </FormItem>

                            </Col>
                            <Col span={8}>
                                <FormItem>
                                    {getFieldDecorator("license", {rules: [{required: true, message: "请输入公司全称"}]})(
                                        <Upload
                                            className="avatar-uploader"
                                            name="avatar"
                                            showUploadList={false}
                                            action="//jsonplaceholder.typicode.com/posts/"
                                            // beforeUpload={beforeUpload}
                                            // onChange={this.handleChange}
                                        >
                                            {
                                                imgUrl3 ?
                                                    <img src={imgUrl3} alt="" className="avatar"/> :
                                                    <Icon type="plus" className="avatar-uploader-trigger"/>
                                            }
                                        </Upload>)}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Form>
            <div className="submit">
                <Button type="primary" style={{marginRight: 40}}>确认提交</Button>
                <Button type="primary">保存</Button>
            </div>
        </div>)
    }
}

const Register = Form.create()(RegisterF)
export default Register;