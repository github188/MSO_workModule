/*逻辑可以分为(认证中|已经认证)！(未认证|驳回)*/
var currentUploadId;
import { Upload, Icon, Modal, Alert, Radio, Button } from 'antd';

import Uploads from './uploads.jsx';

var RadioGroup = Radio.Group;


require('./more.css');

class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
    };
    componentDidMount() {
        /*点击上传图片然后签名*/
        $("#" + this.props.faceplusimg).click(function(ev) {

            var target = ev.currentTarget;
            var currentIdEle = $(target).parents('li.uploads-js-id');
            //debugger;
            currentUploadId = currentIdEle.attr('data-index');
            setclp(currentIdEle);
        });
    }
    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
        <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
        );
        return (
            <div className="clearfix">
		<div className="faceplus" id={this.props.faceplusimg}>
			<Icon type="plus" />
			<div className="pluswords">点击上传图片</div>
		</div>
        <Upload
            action="https://mso.oss-cn-shanghai.aliyuncs.com/"
            listType="picture-card"
            fileList={fileList}
            accept={'.png,.jpg,.bmp,.jpeg,.gif'}
            >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
		
        <Modal visible={previewVisible} footer={null} >
          <img alt="example" style={{
                width: '100%'
            }} src={previewImage} />
        </Modal>
      </div>
        );
    }
}





class Myinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledone: false,
            disabledeach: false,
            value: 1,
            industry: [],
            alllicenseurl: "",
            businesslicenseurl: "",
            taxregcerturl: "",
            organizationcodeurl: "",
            industryValue: '',
        }
        /*初始化数据*/
        this.onChange = this.onChange.bind(this);
        this.getPath = this.getPath.bind(this);
        this.selectIndustry = this.selectIndustry.bind(this);
        this.createListSecond = this.createListSecond.bind(this);
        this.saveData = this.saveData.bind(this);

    }
    /*获取当前的状态*/
    getprocesstates(callBack) {
        var url = domain137 + '/quality/' + $.sessionStorage('jfuid') + '/enterpriseinfo';
        var callBack = callBack || function() {};
        $.when($.ajax(
            url:url,
        )).then(function(data) {
            //debugger;
            if (data.msg == "success") {

                callBack(data.data);
            }
        //debugger;
        }).fail(function(data) {
            //debugger;
        });
    }
    componentDidMount() {

        $(".select-box p.product-classify").click(function() {
            //debugger;
            $('.select-list').show();
        });
        this.getListdata(function(data) {
            this.createList(data);
            this.getprocesstates(function(data) {

                //resultcode_注释": "0 - 未认证（初始），1 - 认证中，3 - 认证驳回，4 - 已认证",
                //data.resultcode = '4';//模拟测试
                //debugger;
                //debugger;
                $.setSessionStorage("companyInfo", data.resultcode);

                if (data.resultcode == "1") {

                    //console.log('认证中');
                    $('.processingwarning .ant-alert-warning.top').show();
                    $("#commentForm :input").hide();
                    $('#commentForm .select-box').hide();
                    //debugger;
                    $('span.firmname').html(data.companyname);
                    $('span.signup').html(data.licensecode);
                    //debugger;
                    //
                    if (data.industry && (data.industry.indexOf("[") != -1)) {

                        var industryone = JSON.parse(data.industry)[0];
                        var industrytwo = JSON.parse(data.industry)[1];
                        //debugger;
                        /*处理有问题的数据*/
                        if (industryone) {
                            if (industryone.constructor == Array) {
                                industryone = industryone[0];
                                industrytwo = industryone[1]
                            }
                        }

                        if (industryone) {
                            //debugger;
                            $('span.industry').html(industryone);

                        }
                        if (industrytwo) {
                            //debugger;
                            $('span.industry').html(industryone + '/' + industrytwo);
                        }
                    } else {
                        if (data.industry) {
                            $('span.industry').html(data.industry);
                        }
                    }

                    $('span.conpanyadrress').html(data.companyaddress);
                    $('span.representative').html(data.corporation);
                    //debugger;
                    /*上传屏蔽*/
                    $('.clearfix').hide();
                    $('.coverd-box').show();

                    if (!data.alllicenseurl) {
                        this.setState({
                            disabledone: true
                        });
                        /*三证分离*/
                        $('.ant-radio-input').eq(1).click();
                        $('.coverd-box').eq(1).html('<img src="' + domainDown + data.businesslicenseurl + '" />');
                        $('.coverd-box').eq(2).html('<img src="' + domainDown + data.taxregcerturl + '" />');
                        $('.coverd-box').eq(3).html('<img src="' + domainDown + data.organizationcodeurl + '" />');
                    //$('.clearfix').hide();
                    } else {
                        this.setState({
                            disabledeach: true
                        });
                        //debugger;
                        $('.coverd-box').eq(0).html('<img src="' + domainDown + data.alllicenseurl + '" />');
                    //
                    //$('.clearfix').hide();
                    }
                    //disabled 保存按钮
                    $('.saveData button').hide();
                    //firmname
                    //signup
                    //industry
                    //conpanyadrress
                    //representative
                    //debugger;

                    //alllicenseurl

                }

                if (data.resultcode == "3") {
                    //debugger;
                    $('.processingwarning .ant-alert-error').show();
                    $('i.reasoning').html('(原因：' + data.reason + ')');


                    $('#firmname').val(data.companyname);
                    $('#signup').val(data.licensecode);
                    $('#conpanyadrress').val(data.companyaddress);
                    $('#representative').val(data.corporation);
                    //防止老数据进来
                    if (data.resultcode == "3" && (data.industry.indexOf("[") != -1)) {
                        if (data.industry) {
                            var firstinsustryvalue = JSON.parse(data.industry);
                            /*处理有问题的数据*/
                            if (firstinsustryvalue) {
                                if (firstinsustryvalue[0].constructor == Array) {
                                    firstinsustryvalue = firstinsustryvalue[0];
                                }
                            }
                            $('.product-classify').html(firstinsustryvalue[0]);

                            if (firstinsustryvalue[0] == "其他行业") {
                                $('.other-select').show();
                                if (firstinsustryvalue[1]) {
                                    $('.other-select').val(firstinsustryvalue[1]);
                                }
                                $('.select-list li').map(function(index, data) {
                                    //console.log(index);
                                    if ($(data).html() == firstinsustryvalue[0]) {
                                        //var currData = $(data).data('myself');
                                        $(".select-list").find(data).click();
                                        //console.log(currData);
                                        //debugger;
                                        //this.createListSecond(currData);

                                    }
                                }.bind(this));
                            } else {
                                $('p.classify').show();


                                //debugger;
                                if (firstinsustryvalue[1]) {
                                    $('p.classify').attr('title', firstinsustryvalue[1]);
                                    /*创建第二层列表*/
                                    //debugger;
                                    $('.select-list li').map(function(index, data) {
                                        if ($(data).html() == firstinsustryvalue[0]) {

                                            $(".select-list").find(data).click();
                                        }
                                    }.bind(this));
                                    $('p.classify').addClass('current');
                                    var text = firstinsustryvalue[1];
                                    if (text.length > 16) {
                                        $('p.classify').html(text.substr(0, 16) + '......');
                                    } else {
                                        $('p.classify').html(text);
                                    }
                                    $('p.classify').attr('title', text);
                                //$('p.classify').html();
                                }
                                /*从新创建*/
                                //debugger;


                            }
                        }
                    }
                }


                if (data.resultcode == "4") {
                    //debugger;
                    $('.processingwarning .ant-alert-success').show();
                    $("#commentForm :input").hide();
                    $('#commentForm .select-box').hide();
                    //debugger;
                    $('span.firmname').html(data.companyname);
                    $('span.signup').html(data.licensecode);
                    if (data.industry && (data.industry.indexOf("[") != -1)) {
                        var industryone = JSON.parse(data.industry)[0];
                        var industrytwo = JSON.parse(data.industry)[1];
                        //debugger;
                        if (industryone) {
                            if (industryone.constructor == Array) {
                                industryone = industryone[0];
                                industrytwo = industryone[1]
                            }
                        }
                        if (industryone) {
                            //debugger;
                            $('span.industry').html(industryone);

                        }
                        if (industrytwo) {
                            //debugger;
                            $('span.industry').html(industryone + '/' + industrytwo);
                        }
                    } else {
                        //debugger;
                        if (data.industry) {
                            //data.industry.indexOf(',')
                            $('span.industry').html(data.industry);
                        }

                    }
                    $('span.conpanyadrress').html(data.companyaddress);
                    $('span.representative').html(data.corporation);
                    //debugger;
                    /*上传屏蔽*/
                    $('.clearfix').hide();
                    $('.coverd-box').show();

                    if (!data.alllicenseurl) {
                        this.setState({
                            disabledone: true
                        });
                        /*三证分离*/
                        $('.ant-radio-input').eq(1).click();

                        $('.coverd-box').eq(1).html('<img src="' + domainDown + data.businesslicenseurl + '" />');
                        $('.coverd-box').eq(2).html('<img src="' + domainDown + data.taxregcerturl + '" />');
                        $('.coverd-box').eq(3).html('<img src="' + domainDown + data.organizationcodeurl + '" />');
                    //$('.clearfix').hide();
                    } else {
                        this.setState({
                            disabledeach: true
                        });
                        $('.coverd-box').eq(0).html('<img src="' + domainDown + data.alllicenseurl + '" />');
                    //$('.clearfix').hide();
                    }

                    $('.saveData button').hide();
                /*已经认证*/
                }
            //debugger;
            }.bind(this));
        }.bind(this));

        //createList
        this.selectIndustry();
        this.saveData();

        $().ready(function() {
            $("#commentForm").validate({
                "rules": {
                    "firmname": {
                        "required": true,
                        "minlength": 2,
                        isText: true
                    },
                    "signup": {
                        "required": true,
                        isText: true
                    },
                    "conpanyadrress": {
                        "required": true,
                        isText: true
                    },
                    "representative": {
                        "required": true,
                        isText: true
                    }
                },
                "messages": {
                    "firmname": {
                        "required": '请填写公司名称！',
                        "minlength": '请填写正确公司名称！',
                        "isText": "请输入正确信息"
                    },
                    "signup": {
                        "required": '请填写营业执照注册号！',
                        "isText": "请输入正确信息"
                    },
                    "conpanyadrress": {
                        "required": '请填写公司地址！',
                        "isText": "请输入正确信息"
                    },
                    "representative": {
                        "required": '请填写法人代表！',
                        "isText": "请输入正确信息"
                    }
                //
                }
            });
            //检测信息是否正确  
            jQuery.validator.addMethod("isText", function(value, element) {
                var regText = /<|>/;
                return this.optional(element) || (!regText.test(value));
            }, "请正确填写信息");





            $("#commentForm :input").blur(function() {
                $(this).valid();
            });
        });



    }
    selectIndustry() {
        var oIndustry;
        var _this = this;
        $(".select-list").on('click', 'li', function() {
            //debugger;
            //debugger;
            $("p.msg-error.hy").hide();
            $(".select-box").removeClass("error");
            if ($(this).hasClass("last")) {
                $(".other-select").show();
                oIndustry = $(".other-select").val();

                _this.setState({
                    industry: [oIndustry]
                });
            } else {
                $(".other-select").hide();
                oIndustry = $(this).text();

                _this.setState({
                    industry: [oIndustry]
                });
            }
            //$(this).addClass("selected").siblings().removeClass("selected").parent().prev().text($(this).text());
            $('p.product-classify').html($(this).text());
            $(this).parent().hide();
            var data = $(this).data('myself');


            /*其它行业*/
            //debugger;
            if (data.nfiid == 'ff8080815b64e782015b66b67603001f') {
                /*清空title*/
                $('p.classify').attr('title', '');
                $('.classify').hide();
                $('.other-select').show();
            } else {
                $('.classify').removeClass('current');
                $('.select-list-second').hide();
                $('.classify').html('选择行业分类');
                $('.classify').show();
                $('.other-select').hide();
            }
            //debugger;
            _this.createListSecond(data);
        });


        $(".select-box p.classify").click(function() {
            $('.select-list-second').show();
        });


        $("input.other-select").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).next().show();
            } else {
                $(this).removeClass("error");
                $(this).next().hide();
            }
        });
        $("input.other-select").focus(function() {
            $(this).removeClass("error");
            $(this).next().hide();
        });
    }
    createListSecond(data) {
        $('.select-list-second').html('');
        data.list.map(function(data, index) {
            var oLi = $('<li></li>');
            oLi.html(data.name);
            oLi.data('switch', false);
            $('.select-list-second').append(oLi);
        });
        //console.log(data);

        /*处理点击事件*/
        var haveCurrenttxt = '';
        function findHaveCurrent() {
            haveCurrenttxt = "";
            $('.select-list-second li').map(function(index, data) {
                if ($(data).hasClass('current')) {
                    haveCurrenttxt += $(data).html() + ',';
                }
            });

            return haveCurrenttxt.substr(0, haveCurrenttxt.length - 1);

        }

        $('.select-list-second li').click(function(ev) {

            //console.log('---);
            var _switch = $(this).data('switch');
            if (!_switch) {
                $(this).data('switch', true);
                $(this).addClass('current');
            } else {
                $(this).data('switch', false);
                $(this).removeClass('current');
            }
            var text = findHaveCurrent();


            if (text) {
                $('p.classify').addClass('current');
                if (text.length > 16) {
                    $('p.classify').html(text.substr(0, 16) + '......');
                } else {
                    $('p.classify').html(text);
                }
                $('p.classify').attr('title', text);
            } else {
                $('p.classify').removeClass('current');
                $('p.classify').html('选择行业分类');
            }

        });

        /*点击其它地方消失*/
        $(document).click(function(ev) {
            var target = ev.target || ev.srcElement;
            if (!($(target).parents().hasClass('select-list-second') || $(target).hasClass('classify'))) {
                $('.select-list-second').hide();
            }
        });

    }
    getListdata(callBack) {
        callBack = callBack || function() {};
        var url = domain137 + '/quality/getIndustryList';
        var _this = this;
        $.ajax({
            type: "get",
            url: url,
            data: {
                onoff: 0
            },
            // contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            success: function(data) {
                //debugger;
                if (data.msg == 'success') {
                    callBack(data.data);
                    _this.setState({
                        industryValue: data,
                        data
                    });
                }

            }
        });
    }
    createList(data) {
        data.list.map(function(data, index) {
            var oLi = $('<li></li>');
            oLi.data('myself', data);
            oLi.html(data.name);
            $('.select-list').append(oLi);
        });

    /**/
    //selectBox();
    }

    onChange(e) {
        //console.log('radio checked', e.target.value);
        if (e.target.value == 1) {
            $('.three-each').hide();
            $('.three-one').show();

        } else {


            $('.three-each').show();
            $('.three-one').hide();
        }

        this.setState({
            value: e.target.value,
        });
    }
    saveData() {
        var _this = this;
        var bOk = true;
        var titleTxt = "";
        var otherselect = "";
        $('.saveData button').click(function() {
            $('#form-sub').submit();


            var url = domain137 + '/quality/' + $.sessionStorage('jfuid') + '/enterpriseinfo';

            /*处理industry*/
            if (_this.state.industry[0]) {

                titleTxt = $('.classify').attr('title');
                otherselect = $('.other-select').val();
                // debugger;
                if (titleTxt) {
                    //debugger;
                    //var newArr = [];
                    // = _this.state.industry.push(titleTxt);
                    _this.setState({
                        "industry": [_this.state.industry[0]].concat(titleTxt),
                    //_this.state.industry.other titleTxt,
                    })
                //debugger;
                } else if (otherselect) {
                    //debugger;
                    _this.setState({
                        "industry": [_this.state.industry[0]].concat(otherselect),
                    // "industry":[[_this.state.industry[0]].concat(titleTxt)],
                    });
                //debugger;
                }
            }


            /*判断是否三证合一*/
            var data;
            if (_this.state.value == 1) {
                if (!_this.state.alllicenseurl) {
                    $('.three-one li p.msg-error').show();
                    $('.three-one li p.msg-error').html('请上传营业执照！');
                    $('.three-one li p.msg-error').removeClass('fail');
                } else {
                    if ($('.three-one li p.msg-error').hasClass('fail')) {
                        // debugger; 
                        return;
                    }
                    $('.three-one li p.msg-error').hide();
                }
                data = {
                    "companyname": $('#firmname').val(),
                    "licensecode": $('#signup').val(),
                    "industry": _this.state.industry,
                    "companyaddress": $('#conpanyadrress').val(),
                    "corporation": $('#representative').val(),
                    "alllicenseurl": _this.state.alllicenseurl,
                    "businesslicenseurl": "",
                    "taxregcerturl": "",
                    "organizationcodeurl": "",
                };
            } else {

                if (!_this.state.businesslicenseurl) {

                    $('.three-each li').eq(0).find('p.msg-error').show();
                    $('.three-each li').eq(0).find('p.msg-error').html('请上传营业执照！');
                } else {
                    //debugger;
                    if ($('.three-each li').eq(0).find('p.msg-error').hasClass('fail')) {
                        // debugger; 
                        return;
                    }
                    $('.three-each li').eq(0).find('p.msg-error').hide();
                }

                if (!_this.state.taxregcerturl) {
                    $('.three-each li').eq(1).find('p.msg-error').show();
                    $('.three-each li').eq(1).find('p.msg-error').html('请上传税务登记证！');
                } else {
                    if ($('.three-each li').eq(1).find('p.msg-error').hasClass('fail')) {
                        // debugger; 
                        return;
                    }
                    $('.three-each li').eq(1).find('p.msg-error').hide();
                }

                if (!_this.state.organizationcodeurl) {
                    $('.three-each li').eq(2).find('p.msg-error').show();
                    $('.three-each li').eq(2).find('p.msg-error').html('请上传组织机构代码证!');
                } else {
                    if ($('.three-each li').eq(2).find('p.msg-error').hasClass('fail')) {
                        // debugger; 
                        return;
                    }
                    $('.three-each li').eq(2).find('p.msg-error').hide();
                }

                data = {
                    "companyname": $('#firmname').val(),
                    "licensecode": $('#signup').val(),
                    "industry": _this.state.industry,
                    "companyaddress": $('#conpanyadrress').val(),
                    "corporation": $('#representative').val(),
                    "alllicenseurl": "",
                    "businesslicenseurl": _this.state.businesslicenseurl,
                    "taxregcerturl": _this.state.taxregcerturl,
                    "organizationcodeurl": _this.state.organizationcodeurl,
                };
            }

            if (data.industry[0]) {
                $('.select-box p.msg-error').hide();
            } else {
                $('.select-box p.msg-error').show();
            }
            // console.log(data.industry);
            if ($('p.msg-error:visible').length) {
                return;
            }

            if ($('label.error:visible').length) {
                return;
            }
            // debugger;
            $('.cover2').show();

            $('.close3').click(function() {
                $('.cover2').hide();
            });

            $('.cover2 .bg_gray').click(function() {
                $('.cover2').hide();
            });
            // encodeURIComponent(encodedURIString) 

            data.industry = encodeURI(JSON.stringify(data.industry));

            // encodeURI
            console.log(decodeURIComponent(data.industry));
            // debugger;
            //return;
            //decodeURIComponent
            data = JSON.stringify(data);

            //console.log(data);
            //debugger;
            // console.log();
            // debugger;
            //return;
            $('.cover2 .bg_blue').click(function() {
                // debugger;
                // return;
                $.when($.ajax(
                    {
                        type: 'PATCH',
                        url: url,
                        contentType: 'application/json',
                        data: data
                    }
                )).then(function(data) {
                    location.reload();
                }).fail(function(data) {
                    //debugger; 
                });
            });
        });
    }

    getPath(value) {
        //alllicenseurl
        if (currentUploadId == "1") {
            this.setState({
                alllicenseurl: value
            });
        }
        //businesslicenseurl
        if (currentUploadId == "2") {
            this.setState({
                businesslicenseurl: value
            });
        }
        //taxregcerturl
        if (currentUploadId == "3") {
            this.setState({
                taxregcerturl: value
            });
        }

        //organizationcodeurl
        if (currentUploadId == "4") {
            this.setState({
                organizationcodeurl: value
            });
        }

    }
    render() {
        return (

            <div>
				<form id="commentForm" method="get" action="">
					<span className="infoTitle">企业认证</span>
					<Alert
            message="这是一项身份识别服务，请注意以下几点："
            description="请确保贵公司具有法人资格，您需提供可证明贵公司依法设立、依法经营，开展社会活动的执照、证件等（如营业执照副本）为了能更顺利通过认证，您填写的信息需与执照或证件上的信息保持一致"
            type="warning"
            showIcon
            />
					<ul className="infoList">
						<li> 
							<div className="infoName">公司全称：</div>
							<input id="firmname" name="firmname" type="text"   placeholder="请填写与营业执照一致的公司全称" /> 
							<span className="firmname"></span>
						</li>
						
						<li> 
							<div  className="infoName">营业执照注册号：</div>
							<div className="special">(统一社会信用代码)</div>
							 <input id="signup" name="signup" className="phone-num" placeholder="请输入与营业执照上一致的营业执照注册号" type="text"/> 
							
							 <span className="signup"></span>
						</li>
						<li className="industry-list"> 
							<div  className="infoName">所属行业：</div>
							<div className="select-box">
								<p className="product-classify">选择您的产品所属行业</p>
								<p className="classify">选择行业分类</p>
								
								<ul className="select-list"></ul>
								<ul className="select-list-second"></ul>
								<input className="other-select" type="text" maxlength="50" placeholder="请输入您的行业名称" />
								<p className="msg-error hy">请选择或输入您的行业名称</p>
							</div>
							<span className="industry"></span>
						</li>
						<li> 
							<div  className="infoName">公司地址：</div>
							<input id="conpanyadrress" name="conpanyadrress" placeholder="请输入贵公司详细地址" type="text" />
							<span className="conpanyadrress"></span>
						</li>
						<li> 
							<div  className="infoName">法人代表：</div>
							<input id="representative" name="representative" placeholder="请输入与营业执照一致的法人代表" type="text"/> 
							<span className="representative"></span>
						</li>
					</ul>
					<input style={{
                'display': 'none'
            }}  id="form-sub" type="submit" />
				</form>
				<div className="uploadcertificate">
					<span className="infoTitle">上传三证</span>
					<ul>
						<li>
							<i className="node-icon"></i>
							<span>必须为清晰 、完整的<i className="current">彩色</i>原件扫描件或数码照</span>
						</li>
						<li>
							<i className="node-icon"></i>
							<span>仅支持.jpg/.bmp/.png的图片格式，<i className="current">图片大小不超过3M</i></span>
						</li>
						<li>
							<i className="node-icon"></i>
							<span>必须在有效期内且年检章齐全（当年成立的公司可无年检章）</span>
						</li>
						<li>
							<i className="node-icon"></i>
							<span>必须为中国大陆工商局颁发</span>
						</li>
						<li>
							<i className="node-icon"></i>
							<span><i className="current">三证合一</i>的用户请上传营业执照扫描件或数码照</span>
						</li>
					</ul>
					
					<div className="uploadPhoto">
						<RadioGroup onChange={this.onChange} value={this.state.value}>
							<div className="citify">
								<Radio disabled={this.state.disabledone} value={1}></Radio>
								<div className="citifyword">三证合一</div>
							</div>
							<div className="citify">
								<Radio disabled={this.state.disabledeach} value={2}></Radio>
								<div className="citifyword">三证分离</div>
							</div>
						</RadioGroup>
						
						<ul className="three-one">
							<li data-index={1} className="uploads-js-id uploads1">
								<div className="coverd-box"></div>
								<PicturesWall getthisEle = {this.getthisEle} faceplusimg={'faceplusimg'} />
								<Uploads data={{
								formid: 'postform',
								fileType: 'application/x-www-form-urlencoded',
								fileId: 'selectFile',
								fileName: 'credentials',
								faceplusimg: 'faceplusimg',
								getPath: this.getPath
							}}/>
								<span className="name">营业执照</span>
								<p className="msg-error hy">请上传营业执照</p>
							</li>
						
							
						</ul>
						<ul className="three-each">
							<li  data-index={2}  className="uploads-js-id">
								<div className="coverd-box"></div>
								<PicturesWall  faceplusimg={'faceplusimg1'} />
								<Uploads data={{
                //formid:'postform1',
                fileType: 'application/x-www-form-urlencoded',
                //fileId:'selectFile1',
                fileName: 'credentials',
                faceplusimg: 'faceplusimg1',
                getPath: this.getPath
            }}/>
								<span className="name">营业执照</span>
								<p className="msg-error hy">请上传营业执照</p>
							</li>
							<li  data-index={3} className="uploads-js-id">
								<div className="coverd-box"></div>
								<PicturesWall  faceplusimg={'faceplusimg2'} />
								<Uploads data={{
                //formid:'postform2',
                fileType: 'application/x-www-form-urlencoded',
                //fileId:'selectFile2',
                fileName: 'credentials',
                faceplusimg: 'faceplusimg2',
                getPath: this.getPath
            }}/>
								<span className="name">税务登记证</span>
								<p className="msg-error hy">税务登记证</p>
							</li>
							<li data-index={4} className="uploads-js-id">
								<div className="coverd-box"></div>
								<PicturesWall  faceplusimg={'faceplusimg3'} />
								<Uploads data={{
                //formid:'postform3',
                fileType: 'application/x-www-form-urlencoded',
                //fileId:'selectFile3',
                fileName: 'credentials',
                faceplusimg: 'faceplusimg3',
                getPath: this.getPath
            }}/>
								<span className="name">组织机构代码证</span>
								<p className="msg-error hy">组织机构代码证</p>
							</li>	
						</ul>
						
						<ul className="comfirm">
							<li className="saveData">
								<Button>
									提交认证
								</Button>
							</li>
						</ul>
					</div>
				</div>
			</div>
        );
    }
}






/*优化页面的加载进度*/
import AsideBar from '../../../html/js/asideBar.js';
import Headercustomer from '../../../html/js/header-customer.js';
import leftMenu from '../../../html/js/customer/leftMenu.js';
import Footer from '../../../html/js/footer.js';


ReactDOM.render(<Myinfo />, $('.context .right')[0]);


/*POST /quality/acquirecustsources



const RadioGroup = Radio.Group;

class App extends React.Component {
  state = {
    value: 1,
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </RadioGroup>
    );
  }
}


PATCH /quality/{userid}/enterpriseinfo
*/