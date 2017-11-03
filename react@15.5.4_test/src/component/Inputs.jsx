import React from "react"
import {Form, Icon, Input, Button} from "antd"
const FormItem = Form.Item;
class Forms extends React.Component {
    constructor(props) {
        super(props);
        // // console.log(11111111111);
        // const {data} = props;
        // // console.log(data);
        // this.state = {
        //     count: data,
        //     num: 2
        // }
    }

    componentWillMount() {
        console.log("willMount");

        console.log(this.props.data[0]);
    }

    componentDidMount() {
        console.log("DidMount");
        // To disabled submit button at the beginning.
        // if(this.props.data[0]){
        console.log(this.props);
        console.log(this.props.data);

        // console.log(this.state.count);
        this.props.form.setFieldsValue(this.props.data);

        // }


    }

    handleSubmit(e) {
        e.preventDefault();
        this.submit(this.props.form.getFieldsValue())
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps");
        console.log(nextProps.data);
       // this.setState({count: this.state.num++})


    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        console.log(nextState);
       // console.log(nextState.count == nextProps.data);
        console.log(nextProps.data);
        // return false;
        // if(nextState.count == nextProps.data){
        //     return false;
        // }
        return true;
    }

    /**
     * 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate");
        console.log(this.props.data[0]);


    }

    componentDidUpdate() {
        console.log("DidUpdate");
        console.log(this.props.data[0]);

        // console.log(111111);
    }

    componentWillUnmount() {

    }

    render() {
        console.log("render");
        console.log(this.props.data[0]);
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

        // Only show error after a field is touched.
        /**
         * isFieldTouched判断一个输入控件是否经历过 getFieldDecorator 的值收集时机
         * getFieldError获取某个输入控件的 Error
         */
        console.log(isFieldTouched('userName'));
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <Form layout="inline">
                <FormItem
                    validateStatus={userNameError ? 'error' : 'success'}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        onClick={this.handleSubmit.bind(this)}
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const demo = Form.create()(Forms)
export default demo;
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class a extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            a:23
        }
    }

    /**
     * 组件第一次创建时调用，只会调用一次
     * 允许在渲染前最后一次修改状态，可调用setState
     */
    componentWillMount(){

    }

    render(){
        return (<div>
            {this.state.a}
        </div>)
    }

    /**
     * 组件第一次渲染后调用，可获取真是dom对象，只调用一次
     */
    componentDidMount(){

    }

    /**
     * 组件接收新属性时调用，一般发生在嵌套组件，单一组件不会调用
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        console.log(123);
        //可调用 setState方法
    }

    /**
     * 通过对比新属性和新状态 return true 生命周期不在往下走
     * @param nextProps
     * @param nextState
     */
    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    /**
     * 组件更新渲染前调用
     * @param nextProps
     * @param nextState
     */
    componentWillUpdate(nextProps,nextState) {

    }

    /**
     * 组件更新渲染后调用
     * @param preProps
     * @param preState
     */
    componentDidUpdate(preProps,prevState){

    }

    /**
     * 组件将要卸载时调用,此时应清除定时器，清除监听函数
     */
    componentWillUnmount(){

    }

}