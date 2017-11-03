import React from "react";
import {Upload, Icon, Modal} from 'antd';
import '../../style.css';
// import ReactRouter,{Link} from "react-router"
// var aa=require("react-router-dom")
// console.log(a);
export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            key: "",
            action: "",
            policy: "",
            OSSAccessKeyId: "",
            Signature: "",
            a: 0,
            previewVisible: false,
            previewImage: '',
            fileList: []
        };
    }


    onRemove() {

    }

    handleCancel() {
        this.setState({previewVisible: false})
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    componentDidUpdate() {
        console.log(this.state.fileList[0]&&this.state.fileList[0].status);
    }

    handleChange({fileList}) {
        this.setState({fileList});
    }


    beforeUpload(file) {
        var signture = JSON.parse(getSignature({fileName: 'credentials'}));

        this.setState({
            key: signture.dir + '${filename}',
            action: signture.host,
            policy: signture.policy,
            OSSAccessKeyId: signture.accessid,
            Signature: signture.signature,
        });

    }

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>)
        return (<div id="content" style={{width: "300px", height: "300px"}}>
            <Upload
                beforeUpload={(e) => this.beforeUpload(e)}                    //传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
                action={this.state.action}                                  // 上传的地址
                listType="picture-card"                                     //	上传列表的内建样式，支持两种基本样式 text or picture
                fileList={fileList}                                         //已经上传的文件列表（受控），使用此参数时
                onPreview={this.handlePreview.bind(this)}                  //点击文件链接或预览图标时的回调
                onChange={this.handleChange.bind(this)}                    //上传中、完成、失败都会调用这个函数。
                accept={".jpg,.png"}                                              //允许上传的格式
                onRemove={this.onRemove}                                    //删除时回调函数
                data={{                                                     //发到后台的文件参数名
                    'key': this.state.key,
                    "OSSAccessKeyId": this.state.OSSAccessKeyId,
                    'policy': this.state.policy,
                    'Signature': this.state.Signature
                }}
            >
                {fileList.length >= 3 ? null : uploadButton}
            </Upload>


            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </div>)
    }
}
/**
 * 后端签名，
 * uid:用户id ,parm.fileName 后端创建的文件夹，用户存储路径为 用户id/文件夹名
 * @param parm
 */
function getSignature(parm) {

    if (!parm) {
        return;
    }

    if (!parm.fileName) {
        return;
    }
    var uid = 30;
    var xmlhttp = null;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlhttp) {

        var credentials = parm.fileName;
        var serverUrl = "https://back.mshuoke.com" + '/ali.do?uid=' + uid + '&type=' + credentials;
        xmlhttp.open("GET", serverUrl, false);
        xmlhttp.send(null);
        return xmlhttp.responseText
    } else {
        alert("Your browser does not support XMLHTTP.");
    }
}