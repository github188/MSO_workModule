import React from "react";
import { Form, Input, Button, Checkbox ,Select ,DatePicker } from 'antd';
const plainOptions = ['Apple', 'Pear', 'Orange'];
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';
const CheckboxGroup = Checkbox.Group;
const { Option, OptGroup } = Select;

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};
class DynamicRule extends React.Component {
    state = {
        checkNick: false,
    };
    check = () => {
   this.props.form.setFieldsValue({nickname:moment("2017-09-12"),username:undefined})
        this.props.form.validateFields(
            (err) => {
                if (!err) {
                    console.info('success');
                }
            },
        );
    }
    handleChange = (e) => {
        this.setState({
            checkNick: e.target.checked,
        }, () => {
            this.props.form.validateFields(['nickname'], { force: true });
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form>
                <FormItem {...formItemLayout} label="Name">
                    {getFieldDecorator('username', {
                        rules: [{
                            required: true,
                            message: 'Please input your name',
                        }],
                    })(
                        <Select
                            placeholder="fsdgsf"
                            style={{ width: 200 }}
                        >
                            <OptGroup label="Manager">
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                            </OptGroup>
                            <OptGroup label="Engineer">
                                <Option value="Yiminghe">yiminghe</Option>
                            </OptGroup>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="Nickname">
                    {getFieldDecorator('nickname', {
                        rules: [{
                            required: this.state.checkNick,
                            message: 'Please input your nickname',
                        }],
                    })(
                        <DatePicker   format={dateFormat}/>
                    )}
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Checkbox
                        value={this.state.checkNick}
                        onChange={this.handleChange}
                    >
                        Nickname is required
                    </Checkbox>
                </FormItem>
                <FormItem {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                        Check
                    </Button>
                </FormItem>
                </Form>
            </div>
        );
    }
}

const WrappedDynamicRule = Form.create()(DynamicRule);
export default WrappedDynamicRule;