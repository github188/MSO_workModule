require('./more.css');
var createTime,
    industryId;
import { addDemandSubmit, addDemand } from "./post_copy.js";

import { Slider } from 'antd';

class Demo extends React.Component {
    state = {
        disabled: false,
        nub: 30,

    };
    handleDisabledChange = (disabled) => {
        this.setState({
            disabled
        });
    }

    onAfterChange(value) {
        // console.log(value,'--------------------------------');
    }

    componentDidMount() {
        //console.log($('.ant-slider-handle'));

        $('.ant-slider-handle').mouseout(function() {
            $('.ant-tooltip-placement-top').css({
                left: '-100px',
                top: '-100px'
            });
        });
        $('.ant-slider-handle').mouseover(function(ev) {
            $('.ant-tooltip-placement-top').css({
                left: '-100px',
                top: '-100px'
            });
            var targat = ev.currentTarget;
            $(targat).show();
        });
    }

    render() {
        const {disabled} = this.state;

        return (
            <div>
                <Slider range value={[this.props.rangeArr[0], this.props.rangeArr[1]]}
            onAfterChange={this.onAfterChange} onChange={ this.props.change } min={3} max={55}
            disabled={disabled}/>
            </div>
        );
    }
}


function checkage(mark) {
    //debugger;
    //debugger;
    /*先清空数据*/
    //$('.people-yang span.yuan').attr('data-value','0');
    //$('.people-yang span.yuan').html('+'+'0.00'+'元');

    /*第一个不能小于3 或者为空*/
    var startAge = $('input.startAge').val();
    var endAge = $('input.endAge').val();

    if (!startAge) {
        $('.error.task-age').html('请填写开始年龄！');
        $('.people-yang').parent().find('p.error.first').show();
        $('input.startAge').data('check', false);
        return;
    }

    startAge *= 1;

    /*第一个不能小于3 或者为空*/

    if (startAge < 3) {
        $('.error.task-age').show();
        $('.error.task-age').html('开始年龄必须大于三岁！');
        $('input.startAge').data('check', false);
        return;
    } else {
        $('input.startAge').data('check', true);
        $('.error.task-age').hide();
    }

    /*不能小于54*/

    /*开始值最大54*/

    if (startAge > 54) {
        $('.error.task-age').show();
        $('.error.task-age').html('开始年龄必须小于五十四岁！');
        $('input.startAge').data('check', false);
        return;
    } else {
        $('.error.task-age').hide();
        $('input.startAge').data('check', true);
    }


    /*结束年龄不能为空 并且不能大于55 并且不能小于前面*/
    if (!(mark == 'start')) {
        if (!endAge) {
            $('.error.task-age').html('请填写结束年龄！');
            $('.error.task-age').show();
            $('input.endAge').data('check', false);
            return;
        }
    }
    if (endAge == "0") {
        $('.error.task-age').html('结束年龄必须大于开始年龄');
        $('.error.task-age').show();
        $('input.endAge').data('check', false);
        return;
    }
    endAge *= 1;
    /*第一个不能大于55 或者为空*/

    /*不能大于55*/

    if (endAge > 55) {
        $('.error.task-age').show();
        $('.error.task-age').html('结束年龄必须小于五十五岁！');
        $('input.endAge').data('check', false);
        return;
    } else {
        if (endAge) {
            $('.error.task-age').hide();
            $('input.endAge').data('check', true);
        }
    }

    /*结束年龄大于开始年龄*/
    //alert(endAge);
    if (endAge) {
        if (endAge < startAge) {
            $('.error.task-age').html('结束年龄必须大于开始年龄！');
            $('.error.task-age').show();
            $('input.endAge').data('check', false);
            return;
        } else {
            $('.error.task-age').hide();
            $('input.endAge').data('check', true);
        }
    }

}
React.rootEl = $('#new_demand div.demend_left');

class Yewu extends React.Component {
    constructor(...prop) {
        super(...prop)
        this.state = {
            servicetype: ["", "销售线索挖掘", "数据加工", "人工客服"]
        }
    }

    componentDidMount() {
        $(".bubble-hover").click(function() {
            $(this).next().css("display", "inline-block");
        }).mouseout(function() {
            $(this).next().hide();
        });
    }

    render() {
        var data = this.props.data;
        return (
            <table>
                <tbody>
                <tr>
                    <td>业务类型:</td>
                    <td><span
            className="business-types">{isNull(this.props.data.servicetype) ? "" : this.state.servicetype[this.props.data.servicetype]}</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                    </td>
                </tr>
                <tr className="hide">
                    <td>结算模式</td>
                    <td className="jsms-tag">按提交线索数量结算</td>
                </tr>
                </tbody>
            </table>
        )
    }



}



class Mbkh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category2: ["", "电话营销", "网络营销", "地推推广"],
            range: [8, 38]
        }
        this.change = this.change.bind(this);
        this.rootEl = React.rootEl.find(".form_col2>.main");
    }

    componentDidMount() {
        $("head").find("style[type='text/css']").eq(0).remove()

        $(".zdy input").on("input", function() {
            $(".demend_right .target-population").text($(this).val());
        });

        $("input.startAge").blur(function() {
            checkage('start');
        });

        $("input.endAge").blur(function() {
            checkage();
        });
        /*
         $("input.startAge").blur(function(){
         if($("input.startAge").val()!==""){
         if(parseInt($(this).val()) > parseInt($("input.endAge").val())){
         $(this).addClass("error");
         $(this).parent().find("p.error").text("开始年龄需小于结束年龄").show();
         }
         }else if($(this).val() == ''){
         $(this).addClass("error");
         $(this).parent().find("p.error").text("请填写开始年龄").show();
         return false;
         }else{
         $(this).removeClass("error");
         $(this).parent().find("p.error").hide();

         }
         });
         $("input.startAge").focus(function(){
         $(this).removeClass("error");
         $(this).parent().find("p.error").hide();
         //$("input.endAge").attr("min",$(this).val());
         });
         */
        /*
         $("input.endAge").blur(function(){
         $("input.endAge").attr("min",$("input.startAge").val());
         var oNum = $("input.startAge").val();
         if($(this).val() == ''){
         $(this).addClass("error");
         $(this).parent().find("p.error").text("请填写结束年龄").show();
         return false;
         }else if(parseInt($(this).val()) < parseInt($("input.startAge").val())){
         $(this).addClass("error");
         $(this).parent().find("p.error").text("结束年龄需大于开始年龄").show();
         }else{
         $(this).removeClass("error");
         $(this).parent().find("p.error").hide();
         if(parseInt($(this).val()) < parseInt(oNum)){
         $(this).val($("input.startAge").val());
         }
         $(".package li span.age").text($(".startAge").val() + "-" + $(".endAge").val() + "周岁");
         }
         });
         $("input.endAge").focus(function(){
         $(this).removeClass("error");
         $(this).parent().find("p.error").hide();
         });
         */
        this.rootEl.on('input', '.startAge', function(ev) {
            var target = ev.currentTarget;
            this.setState({
                range: [$(target).val() * 1, $('.endAge').val() * 1]
            });
        }.bind(this));

        this.rootEl.on('input', '.endAge', function(ev) {
            var target = ev.currentTarget;
            this.setState({
                range: [$('.startAge').val() * 1, $(target).val() * 1]
            });
        }.bind(this));


        /*年龄控件回填*/
        var data = this.props.data;
        if (data.beginage || data.endage) {
            this.setState({
                range: [data.beginage, data.endage]
            });
        }
    }

    change(value) {
        this.setState({
            range: [value[0], value[1]]
        });

        $('.startAge').val(value[0]);
        $('.endAge').val(value[1]);
    }

    render() {
        var data = this.props.data;
        var _this = this;
        return (
            <table>
                <tbody>
                <tr>
                    <td>目标人群：</td>
                    <td>
                        <select className="ui-select2 target-population" name="drop" required>
                            { /*<option ></option>*/ }
                            {target_population.map(function(result, index) {
                if (result == data.targethumen) {
                    if (result == "自定义") {
                        $(".zdy").show();
                    }
                    return <option key={ index } selected>{result}</option>
                } else {
                    return <option key={ index }>{result}</option>
                }
            })}
                        </select>
                    </td>
                    <td className="zdy"><input type="text" placeholder="请输入自定义人群（12个字以内）"
            defaultValue={data.targethumen} style={{
                "width": "234px"
            }}/></td>
                </tr>
                <tr>
                    <td>对象年龄：</td>
                    <td><Demo change={this.change} rangeArr={ this.state.range }/></td>
                    <td className="age">
                        <input type="number" required defaultValue={data.beginage} min="0" max="120"
            className="startAge"/> - <input type="number" required min="0" max="120"
            defaultValue={data.endage} className="endAge"/><span
            style={{
                "marginLeft": "12px",
                "color": "#999"
            }}>周岁</span>
                        <p className="error task-age"></p></td>
                </tr>
                <tr>
                    <td>获客渠道：</td>
                    <td className="hkqd">
                        <select className="ui-select3 channel" name="drop" required>
                            { /*<option></option>*/ }
                            {channel.map(function(result, index) {
                if (result != _this.state.category2[data.category2]) {
                    return <option key={ index }>{result}</option>
                } else {
                    return <option key={ index } selected>{result}</option>
                }
            })}
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}


var Jbxx = React.createClass({
    componentDidMount: function() {
        $("head").find("style[type='text/css']").eq(0).remove()
        var newDate = new Date();
        var t = newDate.toJSON();
        $(".startDate").datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
            startDate: new Date(t),
        }).on("click", function(ev) {
            $(".startDate").datetimepicker("setEndDate", $(".endDate").val());
        });
        $(".endDate").datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
            startDate: new Date(t),
        }).on("click", function(ev) {
            $(".endDate").datetimepicker("setStartDate", $(".startDate").val());
        })
        $("input[name=isFZ]").change(function() {
            if ($(this).parent().text() == "是") {
                $(".radio_fz").show();
                $("input.pleader").blur(function() {
                    if ($(this).val() == '') {
                        $(this).addClass("error");
                        $(this).parent().next().text("请填写负责人姓名").show();
                        return false;
                    } else {
                        $(this).removeClass("error");
                        $(this).parent().next().hide();
                    }
                });
                $("input.pleader").focus(function() {
                    $(this).removeClass("error");
                    $(this).parent().next().hide();
                });
                $("input.pphone").blur(function() {
                    if ($(this).val() == '') {
                        $(this).addClass("error");
                        $(this).parent().next().text("请填写负责人电话").show();
                        return false;
                    } else {
                        $(this).removeClass("error");
                        $(this).parent().next().hide();
                    }
                });
                $("input.pphone").focus(function() {
                    $(this).removeClass("error");
                    $(this).parent().next().hide();
                });
            } else {
                $(".radio_fz").hide().next().hide();
                $(".radio_fz input").removeClass("error");
            }
        });
        $("input[name=isFJ]").change(function() {
            if ($(this).parent().text() == "是") {
                $(".radio_fj").show();
            } else {
                $(".radio_fj").hide();
            }
        });
        $("input.startDate").change(function() {
            $(".package li span.startDate").text($(this).val());
        });
        $("input.startDate").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").text("请填写开始日期").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.startDate").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("table.table-condensed").click(function() {
            //alert(1);
            $("input.startDate").parent().find("p.error").hide();
            $("input.startDate").removeClass("error");
        });
        $("input.endDate").change(function() {
            $(".package li span.endDate").text($(this).val());
        });
        $("input.endDate").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").text("请填写结束日期").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.endDate").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("table.table-condensed").click(function() {
            $("input.endDate").parent().find("p.error").hide();
            $("input.endDate").removeClass("error");
        });
        var uploader = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: 'selectfiles',
            //multi_selection: false,
            container: $('.container')[0],
            flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
            silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
            url: 'http://oss.aliyuncs.com',

            filters: {
                mime_types: [ //只允许上传图片和zip,rar文件
                    {
                        extensions: "ppt,pptx,pdf,doc,docx"
                    }
                ],
                max_file_size: '100mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },

            init: {
                PostInit: function() {
                    $('.ossfile')[0].innerHTML = '';
                    document.getElementById('postfiles').onclick = function() {
                        set_upload_param(uploader, '', false, 1);
                        return false;
                    };
                },

                FilesAdded: function(up, files) {
                    plupload.each(files, function(file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile').css({
                            "text-align": "left"
                        });
                        $('#postfiles').html("开始上传");
                        $('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 6) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile .file_close").click(function() {
                            up.removeFile(up.files[0]);
                            $('.ossfile')[0].innerHTML = '';
                            $('.ossfile').css({
                                "text-align": "left"
                            });
                            $('#selectfiles').html("重新上传");
                            $('#postfiles').html("开始上传");
                        });
                    });
                },

                BeforeUpload: function(up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 1);
                },

                UploadProgress: function(up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile').css({
                        "text-align": "center"
                    });
                    $('#postfiles').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function(up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file1 = f1;
                        $('#selectfiles').html("重新上传");
                        $('#postfiles').html("上传成功");
                        $('.ossfile .progress-bar').css("width", "0%");
                        $('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile').find("span.bfb").html("");
                    } else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },

                Error: function(up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    } else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    } else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    } else {
                        //alert("\nError xml:" + err.response);
                        alert("拒绝访问。请重新上传!");
                        $(".ossfile .file_close").click();
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                    }
                }
            }
        });
        uploader.init();
        //绑定文件添加进队列事件
        uploader.bind('FilesAdded', function(uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name;
                //构造html来更新UI
                !function(i) {
                    previewImage(files[i], function(imgsrc) {
                        $('.file-list img').attr('src', imgsrc);
                    })
                }(i);
            }
        });
        $("input.demand-name").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.demand-name").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("textarea.descriptionDemand").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("textarea.descriptionDemand").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("input.pro-name").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.pro-name").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("textarea.introductionPro").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("textarea.introductionPro").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });

    },
    handleInput: function() {
        $(".introductionPro").next().find('.length>span.size').html(150 - $(".introductionPro").val().length);
        $(".descriptionDemand").next().find('.length>span.size2').html(150 - $(".descriptionDemand").val().length);
    },
    render: function() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>需求名称：</td>
                    <td><input type="text" className="demand-name" maxLength="12" required
            defaultValue={this.props.data.demandname}/><span className="info">为您的需求命名，限制 12 个字</span>
                        <p className="error">请填写需求名称</p></td>
                </tr>
                <tr>
                    <td style={{
                "verticalAlign": "top",
                "lineHeight": "30px"
            }}>需求描述：</td>
                    <td><textarea maxLength="150" className="descriptionDemand" required
            onInput={this.handleInput.bind(this)}>{this.props.data.demanddescription}</textarea>
                        <p><span className="length">还可以输入 <span className="size2">150</span> 个字</span></p>
                        <p className="error">请填写需求描述</p></td>
                </tr>
                <tr>
                    <td>产品名称：</td>
                    <td>
                        <input type="text" maxLength="12" defaultValue={this.props.data.productname}
            className="pro-name" name="proname" autoComplete="on"/><span className="info">您的产品或服务名，限制 12 个字</span>
                        <p className="error">请填写产品名称</p>
                    </td>
                </tr>
                <tr>
                    <td style={{
                "verticalAlign": "top",
                "lineHeight": "30px"
            }}>产品介绍：</td>
                    <td>
                        <textarea maxLength="150" className="introductionPro" required
            defaultValue={this.props.data.demand} placeholder="产品或服务介绍，可上传附件，可填入网站链接"
            onInput={this.handleInput.bind(this)}></textarea>
                        <p>是否上传产品介绍附件：<label><input type="radio" name="isFJ"/>是</label><label><input type="radio"
            name="isFJ"
            defaultChecked/>否</label><span
            className="length">还可以输入 <span className="size">150</span> 个字</span></p>
                        <p className="error">请填写产品介绍</p>
                        <div className="radio_fj">
                            <p>附件支持ppt、pdf、doc等格式文件，大小不可超过100MB</p>
                            <div className="file_box">
                                <button type="button" className="btn" id="selectfiles">选择文件</button>
                                <div className="ossfile"></div>
                                <button type="button" className="btn" id="postfiles">开始上传</button>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><span>开始日期:</span></td>
                    <td><input type="text" className="form_date startDate" required autoComplete="off"
            onChange={this.handleInput.bind(this)}/><i
            className="date_icon"></i><span>结束日期:</span><input type="text" className="form_date endDate"
            autoComplete="off" required
            onChange={this.handleInput.bind(this)}/><i
            className="date_icon"></i>
                        <p className="error" style={{
                "left": "0",
                "top": "33px"
            }}></p></td>
                </tr>
                <tr>
                    <td style={{
                "verticalAlign": "top",
                "lineHeight": "30px"
            }}>项目负责人：</td>
                    <td>
                        <p style={{
                "marginBottom": "20px"
            }}>是否需要其他人负责此需求：<label><input type="radio" name="isFZ"
            defaultChecked={!(isNull(this.props.data.pleader) && isNull(this.props.data.pphone))}/>是</label><label><input
            type="radio" name="isFZ"
            defaultChecked={isNull(this.props.data.pleader) && isNull(this.props.data.pphone)}/>否</label>
                        </p>
                        <p className="radio_fz"
            style={isNull(this.props.data.pleader) && isNull(this.props.data.pphone) ? {
                "display": "none"
            } : {
                "display": "block"
            }}>
                            <span>负责人姓名：</span><input type="text" style={{
                "width": "162px"
            }}
            defaultValue={this.props.data.pleader} className="pleader"/><span
            style={{
                "marginLeft": "34px"
            }}>负责人电话：</span><input type="text" style={{
                "width": "162px"
            }}
            defaultValue={this.props.data.pphone}
            className="pphone"/></p>
                        <p className="error">请填写负责人姓名</p>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
});

var Fj = React.createClass({
    componentDidMount: function() {
        $(".form_col5 i.bubble-hover").click(function() {
            $(this).next().show();
        });
        $(".form_col5 .bubble-click").click(function() {
            $(this).hide();
        });
        $(".form_col5 .bubble-click>div").click(function(e) {
            e.stopPropagation();
        });
        $("input[name=isXS]").change(function() {
            if ($(this).parent().text() == "是") {
                $(".radio_xs").show();
            } else {
                $(".radio_xs").hide();
            }
        });
        $("input[name=isHS]").change(function() {
            if ($(this).parent().text() == "是") {
                $(".radio_hs").show();
            } else {
                $(".radio_hs").hide();
            }
        });
        $("input[name=isMD]").change(function() {
            if ($(this).parent().text() == "是") {
                $(".radio_md").show();
            } else {
                $(".radio_md").hide();
            }
        });

        var uploader2 = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: 'selectfiles2',
            //multi_selection: false,
            container: $('.container2')[0],
            flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
            silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
            url: 'http://oss.aliyuncs.com',
            filters: {
                mime_types: [ //只允许上传图片和zip,rar文件
                    {
                        extensions: "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar,7z"
                    }
                ],
                max_file_size: '100mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },

            init: {
                PostInit: function() {
                    $('.ossfile2')[0].innerHTML = '';
                    document.getElementById('postfiles2').onclick = function() {
                        set_upload_param(uploader2, '', false, 2);
                        return false;
                    };
                },

                FilesAdded: function(up, files) {
                    plupload.each(files, function(file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile2').css({
                            "text-align": "left"
                        });
                        $('#postfiles2').html("开始上传");
                        $('.ossfile2')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 6) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile2 .file_close").click(function() {
                            up.removeFile(up.files[0]);
                            $('.ossfile2')[0].innerHTML = '';
                            $('.ossfile2').css({
                                "text-align": "left"
                            });
                        });
                    });
                },

                BeforeUpload: function(up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 2);
                },

                UploadProgress: function(up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile2').css({
                        "text-align": "center"
                    });
                    $('#postfiles2').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function(up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file2 = f2;
                        $('#selectfiles2').html("重新上传");
                        $('#postfiles2').html("上传成功");
                        $('.ossfile2 .progress-bar').css("width", "0%");
                        $('.ossfile2 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile2').find("span.bfb").html("");
                    } else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },


                Error: function(up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    } else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    } else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    } else {
                        alert("\nError xml:" + err.response);
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                    }
                }
            }
        });

        uploader2.init();

        //绑定文件添加进队列事件
        uploader2.bind('FilesAdded', function(uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name; //文件名
                //构造html来更新UI
                !function(i) {
                    previewImage(files[i], function(imgsrc) {
                        $('.file-list2 img').attr('src', imgsrc);
                    })
                }(i);
            }
        });
        var uploader3 = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: 'selectfiles3',
            //multi_selection: false,
            container: $('.container3')[0],
            flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
            silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
            url: 'http://oss.aliyuncs.com',
            filters: {
                mime_types: [ //只允许上传图片和zip,rar文件
                    {
                        extensions: "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar,7z"
                    }
                ],
                max_file_size: '100mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },

            init: {
                PostInit: function() {
                    $('.ossfile3')[0].innerHTML = '';
                    document.getElementById('postfiles3').onclick = function() {
                        set_upload_param(uploader3, '', false, 3);
                        return false;
                    };
                },


                FilesAdded: function(up, files) {
                    plupload.each(files, function(file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile3').css({
                            "text-align": "left"
                        });
                        $('#postfiles3').html("开始上传");
                        $('.ossfile3')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 6) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile3 .file_close").click(function() {
                            up.removeFile(up.files[0]);
                            $('.ossfile3')[0].innerHTML = '';
                            $('.ossfile3').css({
                                "text-align": "left"
                            });
                        });
                    });
                },

                BeforeUpload: function(up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 3);
                },

                UploadProgress: function(up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile3').css({
                        "text-align": "center"
                    });
                    $('#postfiles3').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function(up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file3 = f3;
                        $('#selectfiles3').html("重新上传");
                        $('#postfiles3').html("上传成功");
                        $('.ossfile3 .progress-bar').css("width", "0%");
                        $('.ossfile3 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile3').find("span.bfb").html("");
                    } else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },


                Error: function(up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    } else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    } else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    } else {
                        alert("\nError xml:" + err.response);
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                    }
                }
            }
        });

        uploader3.init();

        //绑定文件添加进队列事件
        uploader3.bind('FilesAdded', function(uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name; //文件名
                //构造html来更新UI
                !function(i) {
                    previewImage(files[i], function(imgsrc) {
                        $('.file-list3 img').attr('src', imgsrc);
                    })
                }(i);
            }
        });


        var uploader4 = new plupload.Uploader({
            runtimes: 'html5,flash,silverlight,html4',
            browse_button: 'selectfiles4',
            //multi_selection: false,
            container: $('.container4')[0],
            flash_swf_url: 'lib/plupload-2.1.2/js/Moxie.swf',
            silverlight_xap_url: 'lib/plupload-2.1.2/js/Moxie.xap',
            url: 'http://oss.aliyuncs.com',
            filters: {
                mime_types: [ //只允许上传图片和zip,rar文件
                    {
                        extensions: "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar,7z"
                    }
                ],
                max_file_size: '100mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },
            init: {
                PostInit: function() {
                    $('.ossfile4')[0].innerHTML = '';
                    document.getElementById('postfiles4').onclick = function() {
                        set_upload_param(uploader4, '', false, 4);
                        return false;
                    };
                },

                FilesAdded: function(up, files) {
                    plupload.each(files, function(file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile4').css({
                            "text-align": "left"
                        });
                        $('#postfiles4').html("开始上传");
                        $('.ossfile4')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 6) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile4 .file_close").click(function() {
                            up.removeFile(up.files[0]);
                            $('.ossfile4')[0].innerHTML = '';
                            $('.ossfile4').css({
                                "text-align": "left"
                            });
                        });
                    });
                },

                BeforeUpload: function(up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 4);
                },

                UploadProgress: function(up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile4').css({
                        "text-align": "center"
                    });
                    $('#postfiles4').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function(up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file4 = f4;
                        $('#selectfiles4').html("重新上传");
                        $('#postfiles4').html("上传成功");
                        $('.ossfile4 .progress-bar').css("width", "0%");
                        $('.ossfile4 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile4').find("span.bfb").html("");
                    } else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },

                Error: function(up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    } else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    } else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    } else {
                        alert("\nError xml:" + err.response);
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                    }
                }
            }
        });

        uploader4.init();

        //绑定文件添加进队列事件
        uploader4.bind('FilesAdded', function(uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name; //文件名
                //构造html来更新UI
                !function(i) {
                    previewImage(files[i], function(imgsrc) {
                        $('.file-list4 img').attr('src', imgsrc);
                    })
                }(i);
            }
        });

    },
    render: function() {
        return (
            <table>
                <tbody>
                <tr>
                    <td width="178px">是否上传销售线索文件：</td>
                    <td width="470px"><label><input type="radio" name="isXS"/>是</label><label><input type="radio"
            name="isXS"
            defaultChecked/>否</label>
                        <i className="bubble-hover" id="bubble">?</i>
                        <div className="bubble-click">
                            <div>
                                <img src="images/public/pic-jbf-nodata.jpg"/>
                                <p>销售线索文件是一个规定表头的表格，每一个表头即是一个字段，每一个字段即被认定为您要求采集的字段信息，请详细填写每一个字段，上图可作为参考</p>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="radio_xs">
                    <td>
                        <button type="button" className="btn" id="selectfiles2" style={{
                "width": "158px"
            }}><i
            className="add"></i><span>上传销售线索文件</span></button>
                    </td>
                    <td>
                        <div className="ossfile2" style={{
                "width": "370px"
            }}></div>
                    </td>
                    <td>
                        <button type="button" className="btn" id="postfiles2" style={{
                "width": "152px"
            }}>开始上传</button>
                    </td>
                </tr>
                <tr>
                    <td>是否上传话术：</td>
                    <td><label><input type="radio" name="isHS"/>是</label><label><input type="radio" name="isHS"
            defaultChecked/>否</label></td>
                </tr>
                <tr className="radio_hs">
                    <td>
                        <button type="button" className="btn" id="selectfiles3" style={{
                "width": "158px"
            }}><i
            className="add"></i><span>上传话术</span></button>
                    </td>
                    <td>
                        <div className="ossfile3" style={{
                "width": "370px"
            }}></div>
                    </td>
                    <td>
                        <button type="button" className="btn" id="postfiles3" style={{
                "width": "152px"
            }}>开始上传</button>
                    </td>
                </tr>
                <tr>
                    <td>是否上传目标客户名单：</td>
                    <td><label><input type="radio" name="isMD"/>是</label><label><input type="radio" name="isMD"
            defaultChecked/>否</label></td>
                </tr>
                <tr className="radio_md">
                    <td>
                        <button type="button" className="btn" id="selectfiles4" style={{
                "width": "158px"
            }}><i
            className="add"></i><span>上传目标客户名单</span></button>
                    </td>
                    <td>
                        <div className="ossfile4" style={{
                "width": "370px"
            }}></div>
                    </td>
                    <td>
                        <button type="button" className="btn" id="postfiles4" style={{
                "width": "152px"
            }}>开始上传</button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
});

var Preview = React.createClass({
    componentDidMount: function() {
        $(".demend_left .industry div.btn").click(function() {
            $(this).addClass("selected").siblings().removeClass("selected");
            $(".demend_right .industry").html($(".demend_left .industry div.selected").text());
        });
        $(".demend_left .settlement-pattern").selectWidget({
            change: function(changes) {
                $(".demend_right .settlement-pattern").text(changes);
            },
            effect: "slide",
            keyControl: false,
            speed: 200,
            scrollHeight: 167,
            overflow: "hidden"
        });
        $(".demend_left .target-population").selectWidget({
            change: function(changes) {
                if (changes == "自定义") {
                    $("td.zdy").show();
                    $(".demend_right .target-population").text(isNull($(".zdy input").val()));
                } else {
                    $("td.zdy").hide();
                    $(".demend_right .target-population").text(changes);
                }
            },
            effect: "slide",
            keyControl: false,
            speed: 200,
            scrollHeight: 167,
            overflow: "hidden"
        });
        $(".demend_left .channel").selectWidget({
            change: function(changes) {
                $(".demend_right .channel").text(changes);
            },
            effect: "slide",
            keyControl: false,
            speed: 200,
            scrollHeight: 167,
            overflow: "hidden"
        });
        $(".demend_left .age input[type=number]").on("input", function() {
            var number1 = $(".demend_left .age input[type=number]").eq(0).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(0).val();
            var number2 = $(".demend_left .age input[type=number]").eq(1).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(1).val();
            $(".demend_right .age").html(number1 + "-" + number2 + " 周岁");
        });
        $(".demend_left .startDate").on("change", function() {
            $(".demend_right .startDate").html($(this).val());
        });
        $(".demend_left .endDate").on("change", function() {
            $(".demend_right .endDate").html($(this).val());
        });
    },
    render: function() {
        return (
            <div>
                <div className="title-explain">需求预览</div>
                <div className="context-explain package package1">
                    <div>
                        <ul>
                            <li><label>业务类型：</label><span className="business-types"></span></li>
                            <li><label>行业：</label><span className="industry"></span></li>
                            <li className="hide"><label>结算模式：</label><span className="settlement-pattern"></span></li>
                            <li><label>目标人群：</label><span className="target-population"></span></li>
                            <li><label>对象年龄：</label><span className="age"></span></li>
                            <li><label>获客渠道：</label><span className="channel"></span></li>
                            <li><label>开始日期：</label><span className="startDate"></span></li>
                            <li><label>结束日期：</label><span className="endDate"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});


var Area = React.createClass({
    handleClick: function(index) {
        tabCutover($(this.getDOMNode()).find("div[class^=list]:visible .search ul li").eq(index - 1), 's-citys' + index);
    },
    componentDidMount: function() {
        var ReactThis = this;
        append_city();
        $('.city_name').autocomplete(cities, {
            max: 12, //列表里的条目数
            minChars: 0, //自动完成激活之前填入的最小字符
            width: 240, //提示的宽度，溢出隐藏
            scrollHeight: 300, //提示的高度，溢出显示滚动条
            matchContains: true, //包含匹配，就是data参数里的数据，是否只要包含文本框里的数据就显示
            autoFill: false, //自动填充
            formatItem: function(row, i, max) {
                return row.name + '（' + row.pinyin + '）';
            },
            formatMatch: function(row, i, max) {
                return row.match;
            },
            formatResult: function(row) {
                return row.name;
            },
            resultsClass: 'search-text'
        }).result(function(event, row, formatted) {

            $("#hid_city_name").val(row.pinyin);
            $("#hid_real_city_name").val(row.name);
            $('#pop_cities').hide();
            if ($(this).parent().parent().is(".list4")) {
                $(".area div.list4 .search-citys-list ul li a[title=" + row.name + "]").parent().click();
            } else {
                $("input.area").eq(ReactThis.props.index).val(row.name).attr("title", row.name);
                $("input.area").eq(ReactThis.props.index).change();
                $("div.area").html("");
            }
        });
        $('.area ul.list li').click(function() {
            $(this).addClass("active").siblings().removeClass("active");
            $('.area div[class^=list]').eq($(this).index()).addClass("active").siblings().removeClass("active");
        });
        $('.area a').click(function() {
            $('.area div[class^=list]:visible a').removeClass("active");
            $(this).addClass("active");
        });
        $(".area ul.list i.close").click(function() {
            $(this).parent().parent().remove();
        });
        $(".area div[class^=list]:not(.list4):not(.list3) li a").click(function() {
            $("input.area").eq(ReactThis.props.index).val($(this).text()).attr("title", $(this).text());
            $("input.area").eq(ReactThis.props.index).change();
            $("div.area").html("");
        });
        $(".area div.list3 li a").click(function() {
            $("input.area").eq(ReactThis.props.index).val($(this).text()).attr("title", isNull($(this).next().text()) ? $(this).text() : $(this).next().text());
            $("input.area").eq(ReactThis.props.index).change();
            $("div.area").html("");
        });
        $(".area div.list4 .search-citys-list li").click(function() {
            change_city_val();
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(".area div.list4 .activeCity ul li[title=" + $(this).text() + "]").remove();
                $(".area div.list4 span.length").html($(".area div.list4 .activeCity ul li").length);
            } else {
                if ($(".area div.list4 .activeCity ul li").length < 20) {
                    $(this).addClass("active");
                    var li = $("<li title=" + $(this).text() + "><span>" + $(this).text() + "</span><i class='close'></i></li>");
                    $(li).find("i.close").click(function() {
                        $("div.list4 .search-citys-list ul li a[title=" + $(this).parent().attr("title") + "]").parent().click();
                    });
                    $(".area div.list4 .activeCity ul").append(li);
                    $(".area div.list4 span.length").html($(".area div.list4 .activeCity ul li").length);
                } else {
                    alert("最多可以添加20个城市!");
                }
            }
        });
        $(".area div.list4 p button").click(function() {
            var text;
            $(".area div.list4 .activeCity ul li").each(function(i) {
                if (i == 0) {
                    text = $(this).text() + ";";
                    return true;
                }
                text += $(this).text() + ";";
            });
            $("input.area").eq(ReactThis.props.index).val("自定义").attr("title", text);
            $("input.area").eq(ReactThis.props.index).change();
            $("div.area").html("");
        });
    },
    render: function() {
        return (
            <div className="area-box">
                <ul className="list">
                    <li className="active">我要选城市</li>
                    <li>我要选省份</li>
                    <li>我要选区域</li>
                    <li>自定义区域</li>
                    <i className="close"></i>
                </ul>
                <div className="list1 active">
                    <div className="hot"><span>热门城市:</span>
                        {this.props.hotCity.map(function(result) {
                return <li className="click"><a href="javascript:;" className="click">{result}</a></li>;
            })}
                    </div>
                    <div className="search pop search-citys-pop click cityarea">
                        <input type="text" placeholder="输入拼音首字母" className="text city_name"/>
                        <ul>
                            <li className="current click" onClick={this.handleClick.bind(this, 1)}
            href="javascript:void(0)">ABC<i></i></li>
                            <li className="click" onClick={this.handleClick.bind(this, 2)} href="javascript:void(0)">DEF<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 3)} href="javascript:void(0)">GHI<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 4)} href="javascript:void(0)">JKL<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 5)} href="javascript:void(0)">MNO<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 6)} href="javascript:void(0)">PQR<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 7)} href="javascript:void(0)">
                                STUV<i></i></li>
                            <li className="click" onClick={this.handleClick.bind(this, 8)} href="javascript:void(0)">
                                WXYZ<i></i></li>
                        </ul>
                    </div>
                    <div className="search-citys-list click citylist"></div>
                </div>
                <div className="list2">
                    <div className="search-citys-list click">
                        <p style={{
                "margin": "30px 0px 30px 20px"
            }}>请选择省份:</p>
                        <ul>
                            {this.props.province.map(function(result) {
                for (var key in result) {
                    return <li><a href="javascript:;">{result[key].regionName}</a></li>;
                }
            })}
                        </ul>
                    </div>
                </div>
                <div className="list3 ">
                    <p style={{
                "margin": "20px 0px 30px 20px"
            }}>请选择区域:</p>
                    <ul className="area">
                        {this.props.area.map(function(result) {
                for (var key in result) {
                    return <li ><a
                        href="javascript:;">{result[key].regionName}</a><span>{result[key].remark}</span>
                                </li>;
                }
            })}
                    </ul>
                </div>
                <div className="list4 ">
                    <p style={{
                "margin": "30px 20px;font-size:16px"
            }}><span>选择城市加入到自定义区域，最多可添加20个城市，已选择<span
            className="length">0</span>个</span>
                        <button type="button" style={{
                "float": "right"
            }} id="area">确定选择</button>
                    </p>
                    <div className="activeCity">
                        <ul>
                        </ul>
                    </div>
                    <div className="search pop search-citys-pop click cityarea">
                        <input type="text" placeholder="输入拼音首字母" className="text city_name"/>
                        <ul>
                            <li className="current click" onClick={this.handleClick.bind(this, 1)}
            href="javascript:void(0)">ABC<i></i></li>
                            <li className="click" onClick={this.handleClick.bind(this, 2)} href="javascript:void(0)">DEF<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 3)} href="javascript:void(0)">GHI<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 4)} href="javascript:void(0)">JKL<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 5)} href="javascript:void(0)">MNO<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 6)} href="javascript:void(0)">PQR<i></i>
                            </li>
                            <li className="click" onClick={this.handleClick.bind(this, 7)} href="javascript:void(0)">
                                STUV<i></i></li>
                            <li className="click" onClick={this.handleClick.bind(this, 8)} href="javascript:void(0)">
                                WXYZ<i></i></li>
                        </ul>
                    </div>
                    <div className="search-citys-list click citylist"></div>
                </div>
            </div>
        )
    }
});


var AreaList = React.createClass({
    componentDidMount: function() {

        var areaListBox = $('.areaList-box');

        areaListBox.find("input.size").on("input", function() {
            $(this).val(parseInt($(this).val()) || 0)
            var total = $(this).parent().parent().find("span.green span.size");
            var money = $(this).parent().next().find("input.money");
            $(total).text((($(this).val() * $(money).val()) || 0).toFixed("2"));
        });
        areaListBox.find("input.money").on("input", function() {

            if ($(this).val().split(".").length == 2) {
                if (($(this).val().split(".")[1] !== "") || ($(this).val().split(".")[1] != 0)) {
                    if ($(this).val().split(".")[1].length > 2) {
                        $(this).val(Number($(this).val()) > 0 ? Number($(this).val()).toFixed(2) : 0)
                    } else {
                        $(this).val(Number($(this).val()) || 0)
                    }
                }
            } else {
                $(this).val(Number($(this).val()) || 0)
            }


            var total = $(this).parent().parent().find("span.green span.size");
            var size = $(this).parent().prev().find("input.size");
            $(total).text((($(this).val() * $(size).val()) || 0).toFixed("2"));
        });
        $("input.number.money").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.number.money").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("input.number.size").blur(function() {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.number.size").focus(function() {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
    },
    render: function() {
        if (isNull(this.props.data)) {
            return (
                <div className="areaList-box">
                    <div className="input"><label>目标区域:</label><input type="text" required className="select area"
                placeholder="请选择区域"/><i
                className="select_icon"></i>
                        <p className="error">请选择区域</p></div>
                    <div className="input"><label>发布数量:</label><input type="text" required
                className="number size"/><i>条</i>
                        <p className="error">请填写发布数量</p></div>
                    <div className="input"><label>单价:</label><input type="text" required
                className="number money"/><i>元</i>
                        <p className="error">请填写单价</p></div>
                    <span className="green">总价:<span className="size"> 0 </span>元</span>
                    <i className="close"></i>
                    <div className="input isNote"><label>是否备注:</label><label><input type="radio"
                name={"note" + this.props.length}/><span>是</span></label><label><input
                type="radio" name={"note" + this.props.length} defaultChecked/><span>否</span></label></div>
                    <div className="input" style={{
                    "display": "none"
                }}><label>备注:</label><input type="text"
                placeholder="填写备注信息"
                maxLength="50"/><span
                className="gray">最多可输入 50 个字</span></div>
                </div>
            )
        } else {
            return (
                <div className="areaList-box">
                    <div className="input">
                    <label>目标区域:</label>
                    <input type="text" required className="select area"
                placeholder="请选择区域"
                defaultValue={this.props.data.target}
                title={this.props.data.target}/><i
                className="select_icon"></i>
                        <p className="error">请选择区域</p></div>
                    <div className="input"><label>发布数量:</label><input type="text" className="number size"
                defaultValue={this.props.data.releasenum}/><i>条</i>
                        <p className="error">请填写发布数量</p></div>
                    <div className="input"><label>单价:</label><input type="text" className="number money"
                defaultValue={this.props.data.price}/><i>元</i>
                        <p className="error">请填写单价</p></div>
                    <span className="green">总价:<span
                className="size">{isNull(this.props.data.totalprice) ? "0" : this.props.data.totalprice} </span>元</span>
                    <i className="close"></i>
                    <div className="input isNote"><label>是否备注:</label><label><input type="radio"
                name={"note" + this.props.length}
                defaultChecked={!isNull(this.props.data.remark)}/><span>是</span></label><label><input
                type="radio" name={"note" + this.props.length}
                defaultChecked={isNull(this.props.data.remark)}/><span>否</span></label></div>
                    <div className="input"
                style={isNull(this.props.data.remark) ? {
                    "display": "none"
                } : {
                    "display": "inline-block"
                }}>
                        <label>备注:</label><input type="text" placeholder="填写备注信息" maxLength="50"
                defaultValue={this.props.data.remark}/><span className="gray">最多可输入 50 个字</span>
                    </div>
                </div>
            )
        }
    },
});


var Fbfb = React.createClass({
    componentDidMount: function() {
        $(".form_col4>.main").on("click", ".close", function() {
            var main = $(this).parent().parent().parent();
            var area = $(this).parent().parent();
            if ($(".form_col4 .main div.areaList").length > 1) {
                $(area).remove();
                $(main).find(".length").html(5 - $(main).find("div.areaList").length);
                ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
            } else {
                alert("请至少保留一个区域");
            }
        })

        $(".main div[class^=areaList]:not(.areaList_add) .isNote input[name^=note]").live("change", function() {
            if ($(this).parent().text() == "是") {
                $(this).parent().parent().next().show();
            } else {
                $(this).parent().parent().next().hide();
            }
        });
        $("input.area").on("click", function() {
            var index = $(this).parent().parent().parent().index();
            ReactDOM.render(<Area area={area} province={province} hotCity={hotCity}
            index={index}/>, $("#new_demand div.demend_left div.area")[0]);
            $("div.area>div").css({
                left: $(this).offset().left,
                top: $(this).offset().top + 30
            }).show();
        });
        var i = $("div.form_col4 .main .areaList").length + 1;
        $(".areaList_add button").click(function() {
            var main = $(this).parent().parent();
            var length_add = $(main).find("div.areaList").length + 1;
            if (length_add <= 5) {
                $(main).find("div.areaList_add").before("<div class='areaList'></div>");
                ReactDOM.render(<AreaList length={i++}/>, $(main).find("div.areaList").eq(length_add - 1)[0]);
                $(this).next().find(".length").html(5 - $(main).find("div.areaList").length);
                ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
            } else {
                alert("最多添加5个区域！");
            }
            $("input.area").on("click", function() {
                var index = $(this).parent().parent().parent().index();
                ReactDOM.render(<Area area={area} province={province} hotCity={hotCity}
                index={index}/>, $("#new_demand div.demend_left div.area")[0]);
                $("div.area>div").css({
                    left: $(this).offset().left,
                    top: $(this).offset().top + 30
                }).show();
            });
        });

        $("input.area").live("change", function() {
            ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
        });
        $("input.size").live("input", function() {
            ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
        });
        $("input.money").live("input", function() {
            ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
        });
    },
    render: function() {
        var areaCityList;
        if (!JSON.parse(this.props.data.areaanddemandquantity).length) {
            return (
                <div>
                <div className="areaList">
                     <AreaList length={1}/>
                </div>
                    <div className="areaList_add">
                        <button type="button"><i className="add"></i><span>添加区域</span></button>
                        <span>还可以添加<span
                className="length"> {!JSON.parse(this.props.data.areaanddemandquantity).length ? 4 : 5 - JSON.parse(this.props.data.areaanddemandquantity).length} </span>个区域</span>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {JSON.parse(this.props.data.areaanddemandquantity).map(function(result, index) {
                return (
                    <div key={index} className="areaList">
                            <AreaList data={result} length={index + 1}/>
                        </div>
                )
            })
            }
                <div className="areaList_add">
                    <button type="button"><i className="add"></i><span>添加区域</span></button>
                    <span>还可以添加<span
            className="length"> {!JSON.parse(this.props.data.areaanddemandquantity).length ? 4: 5 - JSON.parse(this.props.data.areaanddemandquantity).length} </span>个区域</span>
                </div>
            </div>
        )
    }
});
var JinE = React.createClass({
    componentDidMount: function() {
        $(".btn_tj").on("click", function() {
            addDemandSubmit(createTime, industryId);
        });
        $(".btn_tj2").on("click", function() {
            addDemand(createTime, industryId);
        });
        $(".progress_speed_show").on("click", function() {
            $("input:visible").blur();
            $("textarea").blur();
            if (typeof ($("input.area").attr("title")) == "undefined") {
                //alert(1);
                $("input.area").addClass("error");
                $("input.area").parent().find("p.error").show();
                return false;
            }
            if (!$("p.error:visible").length) {
                $(".progress_speed").show();
            }

        });
        $(".progress_speed .close,.progress_speed .button_close").on("click", function() {
            $(".progress_speed").hide();
        });
    },
    render: function() {
        var data = this.props.data;
        var dom = [];
        var total = 0;
        var i = 0;
        for (var key in data) {
            i++;
            total = (data[key].total - 1 + 1) + total;
            dom.push(<tr key={i} className={key}>
                <td width="25%" title={data[key].areaTitle}>{data[key].area}</td>
                <td>{data[key].size}</td>
                <td>{data[key].money}</td>
                <td>{data[key].total}</td>
            </tr>);
        }
        return (
            <div>
                <div className="title-explain">需求金额</div>
                <div className="context-explain package package1">
                    <div>
                        <table className="cost">
                            <thead>
                            <tr>
                                <th width="25%">城市</th>
                                <th width="25%">数量</th>
                                <th width="25%">单价</th>
                                <th width="25%">总价</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dom}
                            <tr>
                                <th>总金额：</th>
                            </tr>
                            <tr>
                                <td colSpan="4"><span className="money">¥<span className="size">{total}</span></span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <button type="button" className="submit btn progress_speed_show">提交审核</button>
                        <button type="button" className="drafts btn btn_tj2">加入草稿箱</button>
                    </div>
                </div>
            </div>
        )
    }
});


var Progress_speed = React.createClass({
    render: function() {
        return (
            <div className="demand_submit">
                <div className="top"><span>提示</span><i className="close"></i></div>
                <div className="main">
                    <p>您确定提交审核吗？</p>
                </div>
                <div className="bottom">
                    <button type="button" className="button_close btn_tj">确 定</button>
                    <button type="button" className="button_close">取 消</button>
                </div>
            </div>
        )
    }
});

function getUrlGetDetailHfp(getDetailHfp) {
    setTimeout(function() {
        ReactDOM.render(<Yewu data={getDetailHfp.demand}/>, $("#new_demand div.demend_left .form_col1>.main")[0]);
        ReactDOM.render(<Mbkh data={getDetailHfp.demand}/>, $("#new_demand div.demend_left .form_col2>.main")[0]);
        ReactDOM.render(<Jbxx data={getDetailHfp.demand}/>, $("#new_demand div.demend_left .form_col3>.main")[0]);
        ReactDOM.render(<Fbfb data={getDetailHfp.demand}/>, $("#new_demand div.demend_left .form_col4>.main")[0]);
        ReactDOM.render(<Fj data={getDetailHfp.demand}/>, $("#new_demand div.demend_left .form_col5>.main")[0]);
        ReactDOM.render(<Preview data={getDetailHfp.demand}/>, $("#new_demand div.demend_right .right").eq(0)[0]);
        ReactDOM.render(<Progress_speed data={getDetailHfp.demand}/>, $(".progress_speed")[0]);
        ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
        $(".demend_right .business-types").text($(".demend_left .business-types").text());
        $("span.industry").text($(".content .title_select ul li.selected a").text());
        $(".demend_right .settlement-pattern").text($(".demend_left .settlement-pattern+div .select-block .select-items.active").text());
        $(".demend_right .target-population").text($(".demend_left .target-population+div .select-block .select-items.active").text());
        $(".demend_right .channel").text($(".demend_left .channel+div .select-set").text());
        var number1 = $(".demend_left .age input[type=number]").eq(0).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(0).val();
        var number2 = $(".demend_left .age input[type=number]").eq(1).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(1).val();
        $(".demend_right .age").html(number1 + "-" + number2 + " 周岁");
        $(".demend_right .startDate").html($(".demend_left .startDate").val());
        $(".demend_right .endDate").html($(".demend_left .endDate").val());
        $(".loading_cover").hide();
        $(".form_col5>.main>table").before("<p>请选择上传相关附件，单个附件最大限制为100MB，不支持应用程序、音频和视频等文件上传</p>");
    }, 0);
}

$.ajax({
    type: "GET",
    url: `${domain137}/quality/demanddetail/${location.hash.slice(1)}`,
    dataType: "json",
    cache: false,
    success: function(result) {
        if (result.code == "N001") {
            sessionStorage.clear();
            $(".loading_cover").hide();
            window.location.href = "/login.html";
            return false;
        }
        if (result.code == "N") {
            // console.log(result.msg);
            $(".loading_cover").hide();
            return false;
        }
        if (result.code == "0") {
            createTime = result.demand.createTime
            industryId = result.demand.industryId
            var industry = result.demand.industry;

            $(".content .title_select ul li a").each(function() {
                var liIndustry = $(this).text();
                if (liIndustry == industry) {
                    $(this).parent().addClass("selected").siblings().removeClass("selected");
                    return false;
                }
            });
            sessionStorage.setItem("cgpid", JSON.stringify(result.demand.pid));
            getUrlGetDetailHfp(result);
        }
    },
    error: function(msg) {
        $(".loading_cover").hide();
        console.log(msg);
    }
});


/**
 * Created by uu on 2016/9/13.
 */
function getUrlCity(getCity) {
    cityarea = $('<div></div>');
    var ulABC = $('<ul class="s-citys1 click" id="s-citys1" style="display: block;"></ul>');
    var ulDEF = $('<ul class="s-citys2" style="display: none;"></ul>');
    var ulGHI = $('<ul class="s-citys3" style="display: none;"></ul>');
    var ulJKL = $('<ul class="s-citys4" style="display: none;"></ul>');
    var ulMNO = $('<ul class="s-citys5" style="display: none;"></ul>');
    var ulPQR = $('<ul class="s-citys6" style="display: none;"></ul>');
    var ulSTUV = $('<ul class="s-citys7" style="display: none;"></ul>');
    var ulWXYZ = $('<ul class="s-citys8" style="display: none;"></ul>');
    $(cityarea).append(ulABC, ulDEF, ulGHI, ulJKL, ulMNO, ulPQR, ulSTUV, ulWXYZ);
    var cityList = {};
    var ul_index;

    getCity.map(function(result, index) {
        for (var key in result) {
            if (isNull(cityList[key])) {
                cityList[key] = [];
            }
            cityList[key].push(result[key]);

            var city = {
                "name": result[key].regionName,
                "match": result[key].regionName + "|" + result[key].regionPinyyin + "|" + result[key].regionPy,
                "pinyin": result[key].regionPinyyin,
                "sanzima": result[key].regionPy
            }
            cities.push(city);
        }
    });
    for (var key in cityList) {
        if (key === "A" || key === "B" || key === "C")
            ul_index = 0;
        if (key === "D" || key === "E" || key === "F")
            ul_index = 1;
        if (key === "G" || key === "H" || key === "I")
            ul_index = 2;
        if (key === "J" || key === "K" || key === "L")
            ul_index = 3;
        if (key === "M" || key === "N" || key === "O")
            ul_index = 4;
        if (key === "P" || key === "Q" || key === "R")
            ul_index = 5;
        if (key === "S" || key === "T" || key === "U" || key === "V")
            ul_index = 6;
        if (key === "W" || key === "X" || key === "Y" || key === "Z")
            ul_index = 7;
        cityList[key].map(function(result, index) {
            var li = '<li class="click"><a title="' + result.regionName + '" onclick="change_city_val(&quot;' + result.regionName + '&quot;,&quot;' + result.regionPinyyin + '&quot;)" href="javascript:;">' + result.regionName + '</a></li>';
            cityarea.find("ul").eq(ul_index).append(li);
        });
    }
    cityarea = cityarea[0].outerHTML;
}

if (!sessionStorage.getItem(urlCity)) {
    $.ajax({
        type: "GET",
        url: urlCity,
        dataType: "json",
        cache: false,
        success: function(result) {
            if (result.code == "N") {
                console.log(result.msg);
                return false;
            }
            sessionStorage.setItem(urlCity, JSON.stringify(result.basreglist));
            getUrlCity(JSON.parse(sessionStorage.getItem(urlCity)));
        },
        error: function() {
            console.log(msg);
        }
    });
} else {
    getUrlCity(JSON.parse(sessionStorage.getItem(urlCity)));
}


function getUrlProvince(getProvince) {
    province = getProvince;
}

if (!sessionStorage.getItem(urlProvince)) {
    $.ajax({
        type: "GET",
        url: urlProvince,
        dataType: "json",
        cache: false,
        success: function(result) {
            if (result.code == "N") {
                // console.log(result.msg);
                return false;
            }
            sessionStorage.setItem(urlProvince, JSON.stringify(result.basreglist));
            getUrlProvince(JSON.parse(sessionStorage.getItem(urlProvince)));
        },
        error: function() {
            console.log(msg);
        }
    });
} else {
    getUrlProvince(JSON.parse(sessionStorage.getItem(urlProvince)));
}


function getUrlArea(getArea) {
    area = getArea;
    setTimeout(function() {}, 0);
}

if (!sessionStorage.getItem(urlArea)) {
    $.ajax({
        type: "GET",
        url: urlArea,
        dataType: "json",
        cache: false,
        success: function(result) {
            if (result.code == "N") {
                console.log(result.msg);
                return false;
            }
            sessionStorage.setItem(urlArea, JSON.stringify(result.basreglist));
            getUrlArea(JSON.parse(sessionStorage.getItem(urlArea)));
        },
        error: function() {
            console.log(msg);
        }
    });
} else {
    getUrlArea(JSON.parse(sessionStorage.getItem(urlArea)));
}
function areaList() {
    var data = {};
    $("div.form_col4 div.areaList").each(function(i) {
        var name = $(this).attr("class") + (i + 1);
        var area = $(this).find("input.area").val();
        var areaTitle = $(this).find("input.area").attr("title");
        var size = $(this).find("input.size").val();
        var money = $(this).find("input.money").val();
        var total = $(this).find("span.green>span.size").text();
        data[name] = [];
        data[name].area = area;
        data[name].areaTitle = areaTitle;
        data[name].size = size;
        data[name].money = money;
        data[name].total = total;
    });
    return data;
}

// console.log($('.title_select')); 

//demend_left
//$('.demend_left').offset();
//debugger;

//本页面样式不好，所以采用了js来控制
$('.title_select').css({
    left: $('.demend_left').offset().left - 90,
    top: $('.demend_left').offset().top
});
