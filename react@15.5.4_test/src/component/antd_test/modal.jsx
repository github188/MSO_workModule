import React,{Component} from "react";
import { Modal, Button} from "antd";


function success() {
    Modal.success({
        okText:"确定",
        maskClosable:true,
        title: 'This is a success message',
        // content: 'some messages...some messages...',
    });
}

function error() {
    Modal.error({
        okText:"确定",
        maskClosable:true,
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
}

export default class Test extends Component{
    render(){
        return (<div>
            <Button onClick={()=>success()}>Success</Button>
            <Button onClick={error}>Error</Button>
        </div>)
    }
}