$(".loading_cover").hide();
var file1;
var file2;
var file3;
var file4;
React.rootEl = $('#new_demand div.demend_left');
import {addDemandSubmit, addDemand} from "./post.js";

require('./more.css');

import {Slider} from 'antd';

class Demo extends React.Component {
    constructor(...prop) {
        super(...prop)
        this.state = {
            disabled: false,
            nub: 30
        }
    }

    handleDisabledChange(disabled){
        this.setState({disabled})
    }
    componentDidMount() {
        $("head").find("style[type='text/css']").eq(0).remove();
        $('.ant-slider-handle').mouseout(function () {
            $('.ant-tooltip-placement-top').css({left: '-100px', top: '-100px'});
        });
        $('.ant-slider-handle').mouseover(function (ev) {
            $('.ant-tooltip-placement-top').css({left: '-100px', top: '-100px'});
            var targat = ev.currentTarget;
            $(targat).show();
        });
    }

    render(){
        const {disabled} = this.state;

        return (
            <div>
                <Slider range value={[this.props.rangeArr[0], this.props.rangeArr[1]]}
                        onAfterChange={this.onAfterChange} onChange={this.props.change} min={3} max={55}
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


/*业务模块*/
class Yewu extends React.Component {
    componentDidMount() {
        $(".bubble-hover").click(function () {
            $(this).next().css("display", "inline-block");
        }).mouseout(function () {
            $(this).next().hide();
        });
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>业务类型:</td>
                    <td><span className="business-types">销售线索挖掘</span>
                        <i className="bubble-hover">?</i>
                        <div className="bubble">对用户行为和特征进行分析，通过有效触达，挖掘意向客户</div>
                    </td>
                </tr>
                <tr className="hide">
                    <td>结算模式:</td>
                    <td className="tg settlement-pattern1">按提交线索数量结算</td>
                </tr>
                </tbody>
            </table>
        )
    }
}

/*目标客户*/
class Mbkh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            crowd: '',
            crowdHtml: '',
            range: [8, 38]
        }
        this.init();
        this.change = this.change.bind(this);
    }

    init() {
        this.rootEl = React.rootEl.find(".form_col2>.main");
        //this.controlCrowd();
    }

    componentDidMount() {
        //this.setState({crowdHtml:this.createCrowd()});
        $(".zdy input").on("input", function () {
            $(".demend_right .target-population").text($(this).val());
        });

        $("input.startAge").blur(function () {
            checkage('start');
        });
        /*
         $("input.startAge").focus(function(){
         $(this).removeClass("error");
         $(this).parent().find("p.error").hide();
         //$("input.endAge").attr("min",$(this).val());
         });
         */

        $("input.endAge").blur(function () {
            checkage();
        });

        /*
         $("input.endAge").focus(function(){
         $(this).removeClass("error");
         $(this).parent().find("p.error").hide();
         });
         */

        this.rootEl.on('input', '.startAge', function (ev) {
            var target = ev.currentTarget;
            this.setState({range: [$(target).val() * 1, $('.endAge').val() * 1]});
        }.bind(this));

        this.rootEl.on('input', '.endAge', function (ev) {
            var target = ev.currentTarget;
            this.setState({range: [$('.startAge').val() * 1, $(target).val() * 1]});
        }.bind(this))
    }

    change(value) {
        this.setState({range: [value[0], value[1]]});

        $('.startAge').val(value[0]);
        $('.endAge').val(value[1]);
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>目标人群：</td>
                    <td className="mbrq">
                        <select className="ui-select2 target-population" name="drop">
                            <option>成人</option>
                            <option>青少儿</option>
                            <option>学生</option>
                            <option>自定义</option>
                        </select>
                    </td>
                    <td className="zdy"><input autoComplete="off" type="text" placeholder="请输入自定义人群（12个字以内）"
                                               className="mbrq" style={{"width": "234px"}}/></td>
                </tr>
                <tr className="task-age-box">
                    <td>对象年龄：</td>
                    <td>
                        <Demo change={this.change} rangeArr={ this.state.range }/>
                    </td>
                    <td className="age">
                        <input autoComplete="off" type="number" className="startAge ageCalculation" defaultValue="8"
                               min="0"/> - <input autoComplete="off" type="number" className="endAge ageCalculation"
                                                  defaultValue="38" max="120"/>
                        <span style={{"marginLeft": "12px", "color": "#999"}}>周岁</span>
                        <p className="error  task-age"></p></td>
                </tr>
                <tr>
                    <td>获客渠道：</td>
                    <td className="hkqd">
                        <select className="ui-select3 channel" name="drop">
                            <option>电话营销</option>
                            <option>网络营销</option>
                            <option>地推推广</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

/*基本信息*/
class Jbxx extends React.Component {
    constructor(props) {
        super(props);
        this.init();
        this.state = {
            label: [],
            labelHtml: ''
        }
        this.init();
    }

    init() {
        this.rootEl = React.rootEl.find(".form_col3>.main");
        this.countWord();
    }

    countWord() {
        this.rootEl.on('input', 'textarea', function (ev) {
            $(".introductionPro").next().find('.length>span.size').html(150 - $(".introductionPro").val().length);
            $(".descriptionDemand").next().find('.length>span.size2').html(150 - $(".descriptionDemand").val().length);
        }.bind(this));
    }

    componentDidMount() {
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
        }).on("click", function (ev) {
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
        }).on("click", function (ev) {
            $(".endDate").datetimepicker("setStartDate", $(".startDate").val());
        });
        $("input[name=isFZ]").change(function () {
            if ($(this).parent().text() == "是") {
                $(".radio_fz").show();
                $("input.pleader").blur(function () {
                    if ($(this).val() == '') {
                        $(this).addClass("error");
                        $(this).parent().next().text("请填写负责人姓名").show();
                        return false;
                    } else {
                        $(this).removeClass("error");
                        $(this).parent().next().hide();
                    }
                });
                $("input.pleader").focus(function () {
                    $(this).removeClass("error");
                    $(this).parent().next().hide();
                });
                $("input.pphone").blur(function () {
                    if ($(this).val() == '') {
                        $(this).addClass("error");
                        $(this).parent().next().text("请填写负责人电话").show();
                        return false;
                    } else {
                        $(this).removeClass("error");
                        $(this).parent().next().hide();
                    }
                });
                $("input.pphone").focus(function () {
                    $(this).removeClass("error");
                    $(this).parent().next().hide();
                });
            } else {
                $(".radio_fz").hide().next().hide();
                $(".radio_fz input").removeClass("error");
            }
        });
        $("input[name=isFJ]").change(function () {
            if ($(this).parent().text() == "是") {
                $(".radio_fj").show();
            } else {
                $(".radio_fj").hide();
            }
        });
        $("input.startDate").change(function () {
            $(".package li span.startDate").text($(this).val());
        });
        $("input.startDate").blur(function () {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").text("请填写开始日期").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.startDate").focus(function () {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("table.table-condensed").click(function () {
            //alert(1);
            $("input.startDate").parent().find("p.error").hide();
            $("input.startDate").removeClass("error");
        });
        $("input.endDate").change(function () {
            $(".package li span.endDate").text($(this).val());
        });
        $("input.endDate").blur(function () {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").text("请填写结束日期").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.endDate").focus(function () {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("table.table-condensed").click(function () {
            $("input.endDate").parent().find("p.error").hide();
            $("input.endDate").removeClass("error");
        });
        var number1 = $(".demend_left .age input[type=number]").eq(0).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(0).val();
        var number2 = $(".demend_left .age input[type=number]").eq(1).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(1).val();
        $(".demend_right .age").html(number1 + "-" + number2 + " 周岁");
        $(".demend_right .startDate").html($(".demend_left .startDate").val());
        $(".demend_right .endDate").html($(".demend_left .endDate").val());

        $("input.demand-name").blur(function () {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.demand-name").focus(function () {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("textarea.descriptionDemand").blur(function () {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("textarea.descriptionDemand").focus(function () {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("input.pro-name").blur(function () {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("input.pro-name").focus(function () {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        $("textarea.introductionPro").blur(function () {
            if ($(this).val() == '') {
                $(this).addClass("error");
                $(this).parent().find("p.error").show();
                return false;
            } else {
                $(this).removeClass("error");
                $(this).parent().find("p.error").hide();
            }
        });
        $("textarea.introductionPro").focus(function () {
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        });
        upload1();
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td>需求名称：</td>
                    <td><input type="text" className="demand-name" maxLength="12"/><span className="info">为您的需求命名，限制 12 个字</span>
                        <p className="error">请填写需求名称</p></td>
                </tr>
                <tr>
                    <td style={{"verticalAlign": "top", "lineHeight": "30px"}}>需求描述：</td>
                    <td><textarea maxLength="150" className="descriptionDemand"></textarea><p><span className="length">还可以输入 <span
                        className="size2">150</span> 个字</span></p>
                        <p className="error">请填写需求描述</p></td>
                </tr>
                <tr>
                    <td>产品名称：</td>
                    <td>
                        <input type="text" maxLength="12" className="pro-name" name="proname" autoComplete="on"/><span
                        className="info">您的产品或服务名，限制 12 个字</span>
                        <p className="error">请填写产品名称</p>
                    </td>
                </tr>
                <tr>
                    <td style={{"verticalAlign": "top", "lineHeight": "30px"}}>产品介绍：</td>
                    <td>
                        <textarea maxLength="150" className="introductionPro"
                                  placeholder="产品或服务介绍，可上传附件，可填入网站链接"></textarea>
                        <p>是否上传产品介绍附件：<label><input type="radio" name="isFJ"/>是</label><label><input type="radio"
                                                                                                     name="isFJ"
                                                                                                     defaultChecked/>否</label><span
                            className="length">还可以输入 <span className="size">150</span> 个字</span></p>
                        <p className="error" style={{top:120,left:0}}>请填写产品介绍</p>
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
                    <td className="date-p"><input autoComplete="off" type="text" className="form_date startDate"
                                                  readOnly/><i className="date_icon"></i><span>结束日期:</span><input
                        autoComplete="off" type="text" className="form_date endDate" readOnly/><i
                        className="date_icon"></i>
                        <p className="error"></p></td>
                </tr>
                <tr>
                    <td style={{"verticalAlign": "top", "lineHeight": "30px"}}>项目负责人：</td>
                    <td>
                        <p style={{"marginBottom": "20px"}}>是否需要其他人负责此需求：<label><input type="radio"
                                                                                       name="isFZ"/>是</label><label><input
                            type="radio" name="isFZ" defaultChecked/>否</label></p>
                        <p className="radio_fz"><span>负责人姓名：</span><input type="text" style={{"width": "120px"}}
                                                                          className="pleader"/><span
                            style={{"marginLeft": "50px"}}>负责人电话：</span><input autoComplete="off" type="text"
                                                                               style={{"width": "162px"}}
                                                                               className="pphone"/></p>
                        <p className="error">请填写负责人姓名</p>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

/*发布分布*/


class AreaAndRequirement extends React.Component {
    constructor(props) {
        super(props);
        ////热门城市
        this.state = {
            hotCity: ["北京", "上海", "广州", "深圳", "杭州", "苏州", "南京", "成都", "重庆", "天津"],
            hotCityHtml: '',
            cityTop: ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STUV', 'WXYZ'],
            cityTopHtml: '',
            chooseCity: '',
            chooseCityHtml: '',
            provinceData: '',
            provinceHtml: '',
            controlVar: 'city',
            areaData: '',
            areaTtml: '',
            countNumber: [true],
            changeCityData: [],
            cityValue: ''
            /*city province area defined*/
        };
        this.init();
    }

    init() {
        this.rootEl = React.rootEl.find(".form_col4>.main");
        this.addMutilCityEvent = this.addMutilCityEvent.bind(this);
        this.checkChooseAreaValue = this.checkChooseAreaValue.bind(this);
    }

    componentDidMount() {
        this.setState({hotCityHtml: this.createHotCity()});
        /*abc def top*/

        this.setState({cityTopHtml: this.createCityTop()});
        //console.log(123);
        /*获取选择城市数据*/
        this.getChooseCityData(function (data) {
            this.setState({chooseCity: data});
            /*第一次默认abc*/
            this.setState({chooseCityHtml: this.createChooseCity(['A', 'B', 'C'])});
        }.bind(this));
        /*选择 abc DEF ....*/
        this.chooseTypeCityEvent(function (data) {
            this.setState({chooseCityHtml: this.createChooseCity(data)});
        }.bind(this));

        this.chooseAreaCityEvent(function (data, currentType) {
            if (currentType == 'province') {
                this.setState({provinceHtml: data, controlVar: currentType});
            }
            if (currentType == 'city' || currentType == 'area' || currentType == 'defined') {
                this.setState({controlVar: currentType});
            }
        }.bind(this));

        /*预加载省份数据*/
        this.getProvinceData(function (data) {
            this.setState({provinceData: data});
        }.bind(this));
        /*预加载区域数据*/
        this.getAreaData(function (data) {
            this.setState({areaData: data});
            this.setState({areaTtml: this.createAreaHtml()});
        }.bind(this));
        /*控制显示citylist*/
        this.controlCityListShow();
        /*选择具体city*/
        this.chooseOnlyCity();
        /*添加多个区域*/
        this.closeCity();//点击关闭当前地区选择

        /*default arealistHtml*/
        //this.areaListList = this.areaListList.bind(this);
        this.setState({arealistHtml: this.createAreaHtml()});
        //this.setState({arealistHtml:this.areaListList()})
        this.addMutilCityEvent();
        this.delMutilCityEvent();
        $(".radio-test1").click(function () {
        });
        this.changePriceNumber();
        /*验证这个框子的所有值*/
        this.checkChooseNumberValue();
        this.checkChooseAreaValue();
        /*是否添加描述*/
        this.hasCityDescription();
    }

    hasCityDescription() {
        this.rootEl.on('click', '.radio-test1', function (ev) {

            var isTrue = this.rootEl.find(ev.currentTarget)[0].checked;
            if (isTrue) {
                this.rootEl.find(ev.currentTarget).parent().parent().find('.cityDescription').show();
            }
        }.bind(this));

        this.rootEl.on('click', '.radio-test2', function (ev) {
            var isTrue = this.rootEl.find(ev.currentTarget)[0].checked;
            if (isTrue) {
                this.rootEl.find(ev.currentTarget).parent().parent().find('.cityDescription').hide();
            }
        }.bind(this));
        //radio-test1
    }

    checkChooseAreaValue() {
        this.rootEl.on('blur', '.select.area', function (ev) {
            this.timer = setTimeout(function () {
                var target = this.rootEl.find(ev.currentTarget);
                var value = target.val();
                //console.log(this.state.cityValue);
                if (!value) {
                    target.parents('.js_input').find('p.error').show();
                } else {
                    target.parents('.js_input').find('p.error').hide();
                }
                //clearTimeout(this.timer);
            }.bind(this), 120);

        }.bind(this));
    }

    checkChooseNumberValue() {
        this.rootEl.on('blur', 'input.number', function (ev) {
            var target = this.rootEl.find(ev.currentTarget);
            var value = target.val();
            if (!value) {
                target.parents('.input').find('p.error').show();
            } else {
                target.parents('.input').find('p.error').hide();
            }
        }.bind(this));
    }

    controlCityListShow() {
        this.rootEl.on('click', '.select.area', function (ev) {
            var dataIndex = this.rootEl.find(ev.currentTarget).attr('data-index');
            var AreaBox = this.rootEl.find('.area-box');
            AreaBox.hide();
            for (var i = 0, k; k = AreaBox[i]; i++) {
                if (dataIndex === this.rootEl.find(k).attr('data-index')) {
                    this.rootEl.find(k).show();
                    this.rootEl.find(k).find('.list li').removeClass('active');
                    this.rootEl.find(k).find('.list li').eq(0).addClass('active');
                    this.setState({controlVar: 'city'});
                }
            }
        }.bind(this));
    }

    chooseOnlyCity() {

        /*hot city province area*/

        /*一定要这边选了确定的才通知消息栏*/
        this.rootEl.on('click', '.js_key', function (ev) {
            var arr = this.state.changeCityData;
            var target = this.rootEl.find(ev.currentTarget);
            var oValue = target.find('a').html();
            var dataId = target.parents('.areaList').attr('data-id') * 1;
            target.parents('.area-box').hide();
            target.parents('.js_input').find('.js_area').val(oValue);
            var currentValue = target.parents('.js_input').find('.js_area').val();
            /*通知对方*/
            //console.log(arr);
            var onlyValue = target.parents('.areaList').find('.number.only').val();
            var priceValue = target.parents('.areaList').find('.number.price').val();
            var dataJson = {id: dataId, name: currentValue, number: onlyValue, unitPrice: priceValue};
            var isTrue = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    if (arr[i].id == dataId) {
                        /*当同一个需要改变的时候 相同就替换*/
                        arr[i].name = currentValue;
                        arr[i].number = onlyValue;
                        arr[i].unitPrice = priceValue;
                        isTrue = true;
                    }
                }
            }
            if (!isTrue) {
                /*如果不相同就push*/
                arr.push(dataJson);
                isTrue = false;
            }
            /*跟新自己的存储*/
            this.setState({changeCityData: arr});
            /*跟新对方的值*/
            //debugger;
            //console.log(arr);
            getCityNews(arr);
            /*zaizheli*/


        }.bind(this));
    }

    closeCity() {
        /*hot city province area*/
        this.rootEl.on('click', 'i.close', function (ev) {
            var oValue = this.rootEl.find(ev.currentTarget).find('a').html();
            this.rootEl.find('.area-box').hide();
        }.bind(this));
    }

    addMutilCityEvent() {
        this.rootEl.on('click', '.areaList_add button', function () {
            var countNumber = this.state.countNumber.length;
            var arr = this.state.countNumber;
            countNumber++;
            var len = this.rootEl.find('.areaList').length;
            if (len >= 5) {
                return;
            }
            arr.push(true);
            this.setState({countNumber: arr});
            //debugger;
            this.rootEl.find('.length').html(5 - (this.rootEl.find('.areaList').length));
        }.bind(this));
    }

    delMutilCityEvent() {
        this.rootEl.on('click', '.areaList div.close', function (ev) {
            var cityDataArr = this.state.changeCityData;
            var arr = this.state.countNumber;
            var len = this.rootEl.find('.areaList').length;
            var indexId = this.rootEl.find(ev.currentTarget).attr('data-id');
            if (len <= 1) {
                return;
            }
            delete arr[indexId];
            /*删除时跟新右侧栏数据*/
            for (var i = 0; i < cityDataArr.length; i++) {
                if (cityDataArr[i]) {
                    if (cityDataArr[i].id == indexId) {
                        delete cityDataArr[i];
                    }
                }

            }
            /*同时对方*/
            getCityNews(cityDataArr);
            /*跟新数据储存*/
            this.setState({countNumber: arr, changeCityData: cityDataArr});
            this.rootEl.find('.length').html(5 - (this.rootEl.find('.areaList').length));
        }.bind(this));
    }

    changePriceNumber() {
        this.rootEl.on('input', 'input.number', function (ev) {
            var arr = this.state.changeCityData;
            var target = this.rootEl.find(ev.currentTarget);
            var oValue = parseInt(target.val());
            //debugger;
            var indexId = target.parents('.areaList').attr('data-id');
            //console.log(indexId);
            //console.log(oValue);
            //console.log(isNaN(oValue));
            /*分成数量和单价*/
            if (target[0].className.indexOf('only') > -1) {
                /*数量*/
                if (isNaN(oValue)) {
                    target.val('');
                } else {
                    target.val(oValue);
                }

            } else {    /*单价*/
                var oValue = target.val();
                var reg = /^\d+(\.\d{0,2})?$/;
                if ((oValue * 1 + '') == 'NaN') {
                    target.val('0.00');
                } else if (!reg.test(oValue)) {
                    if (oValue == "") {
                        target.val('');
                    } else {
                        var arr = oValue.split('.');
                        //debugger;
                        //console.log(arr);
                        if (arr[1].length > 2) {
                            var sub = arr[1].substring(0, 2);
                            target.val(parseInt(oValue) + '.' + sub);
                        }
                    }
                }


            }

            /*查询数组是否有值 if过有值跟新值没有不做任何操作*/
            //console.log(arr[indexId]);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    if (arr[i].id == indexId) {
                        //console.log(indexId);
                        if (target[0].className.indexOf('only')) {
                            arr[i].number = target.val();
                        } else {
                            arr[i].unitPrice = target.val();
                        }
                        this.setState({changeCityData: arr});
                        getCityNews(arr);
                    }
                }
            }

            /*计算每个总价*/
            //debugger
            target.parents('.areaList').find('span.size').html(target.parents('.areaList').find('input.only').val() * target.parents('.areaList').find('input.price').val());
        }.bind(this));
    }

    createHotCity() {
        /*创建热门城市*/
        return this.state.hotCity.map(function (name, index) {
            return (<li key={index} className="click js_key"><a href="javascript:;" className="click">{name}</a></li>);
        });
    }

    createCityTop() {
        /*头部导航城市*/
        return this.state.cityTop.map(function (name, index) {
            if (index == 0) {
                return (
                    <li key={index} className="current click"><a href="javascript:;" className="click">{name}</a><i></i>
                    </li>);
            } else {
                return (
                    <li key={index} className="click"><a href="javascript:;" className="click">{name}</a><i></i></li>);
            }
        }.bind(this));
    }

    getAreaData(callBack) {
        //getBaseRegionType/4 /*area*/
        callBack = callBack || function () {
            };
        var url = domain + '/getBaseRegionType/4/';
        $.when($.ajax({
            url: url
        })).then(function (data) {
            if (!data.basreglist[0])return;
            callBack(data.basreglist);
        }.bind(this)).done(function () {

        }).fail(function (data) {
            /*假数据*/
        });
    }

    createAreaHtml() {
        if (this.state.areaData) {
            return this.state.areaData.map(function (Area, index) {
                for (var key in Area) {
                    return (<li key={index} className="js_key">
                        <a href="javascript:;">{Area[key].regionName}</a>
                        <span>{Area[key].remark}</span>
                    </li>);
                }
            }.bind(this));
        }
    }

    getProvinceData(callBack) {
        //getBaseRegionType/1 /*省份*/
        callBack = callBack || function () {
            };
        var url = domain + '/getBaseRegionType/1/';
        $.when($.ajax({
            url: url
        })).then(function (data) {
            if (!data.basreglist[0])return;
            callBack(data.basreglist);
        }.bind(this)).done(function () {

        }).fail(function () {
        });
    }

    getChooseCityData(callBack) {
        //getBaseRegionType/2 /*一线城市*/
        /*2 我要选城市*/
        callBack = callBack || function () {
            };
        var url = domain + '/getBaseRegionType/2';
        $.when($.ajax({
            url: url,
        })).then(function (data) {
            if (!data.basreglist[0])return;

            callBack(data.basreglist);
        }.bind(this)).done(function () {

        }).fail(function () {
        });
    }

    createChooseCity(data) {
        /*创建选择城市*/
        if (this.state.chooseCity) {
            if (data.length == 3) {
                return this.state.chooseCity.map(function (city, index) {
                    for (var key in city) {
                        if (key === data[0] || key === data[1] || key === data[2]) {
                            return (<li key={index} title={city[key].regionName} className="click js_key"
                                        href="javascript:;"><a>{city[key].regionName}</a></li>);
                        }
                    }
                }.bind(this));
            } else {
                return this.state.chooseCity.map(function (city, index) {
                    for (var key in city) {
                        if (key === data[0] || key === data[1] || key === data[2] || key === data[3]) {
                            return (<li key={index} data-name={city[key].regionPy} title={city[key].regionName}
                                        className="click js_key" href="javascript:;"><a>{city[key].regionName}</a>
                            </li>);
                            //console.log(city[key].regionName);
                        }
                    }
                }.bind(this));
            }
        }
    }

    chooseTypeCityEvent(callBack) {
        callBack = callBack || function () {
            };
        this.rootEl.on('click', '.citytop li.click', function (ev) {
            var typeCity = this.rootEl.find(ev.currentTarget).find('a.click').html();
            this.rootEl.find('.citytop li.click').removeClass('current');
            this.rootEl.find(ev.currentTarget).addClass('current');
            callBack(typeCity.split(''));
        }.bind(this));
    }

    chooseAreaCityEvent(callBack) {
        callBack = callBack || function () {
            };
        this.rootEl.on('click', '.area .list li', function (ev) {
            var currentType = this.rootEl.find(ev.currentTarget).attr('data-type');
            this.rootEl.find('.area .list li').removeClass('active');
            this.rootEl.find(ev.currentTarget).addClass('active');
            var province = this.createprovinceTtml();
            callBack(province, currentType);
        }.bind(this));
    }

    createprovinceTtml() {
        if (this.state.provinceData) {
            return this.state.provinceData.map(function (province, index) {
                for (var key in province) {
                    return (<li key={index} data-name={province[key].regionPy} title={province[key].regionName}
                                className="click js_key" href="javascript:;"><a>{province[key].regionName}</a></li>);
                }
            }.bind(this));
        }
    }

    selectArea() {
        if (this.state.controlVar == 'city') {
            return this.state.chooseCityHtml;
        } else if (this.state.controlVar == 'province') {
            return this.state.provinceHtml;
        } else if (this.state.controlVar == 'area') {
            return this.state.areaTtml;
        }
    }

    controlStructure() {
        if (this.state.controlVar == 'city') {
            return (
                <div>
                    <div className="hot">
                        <span>热门城市:</span>
                        <div className="list1 active">{this.state.hotCityHtml}</div>
                    </div>
                    <div className="search pop search-citys-pop click cityarea">
                        <input type="text" placeholder="输入拼音首字母" className="text city_name"/>
                        <ul className="citytop">
                            {this.state.cityTopHtml}
                        </ul>
                    </div>
                    <div className="search-citys-list click citylist">
                        <div>
                            <ul className="s-citys1 click" id="s-citys1">{this.selectArea()}</ul>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.controlVar == 'province') {
            return (
                <div>
                    <div className="search-citys-list click citylist">
                        <div>
                            <p style={{margin: "30px 0px 30px 20px"}}>请选择省份:</p>
                            <ul className="s-citys1 click" id="s-citys1">{this.selectArea()}</ul>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.state.controlVar == 'area') {
            return (
                <div className="list3  active">
                    <p style={{margin: "30px 0px 30px 20px"}}>请选择区域:</p>
                    <ul className="area">
                        {this.selectArea()}
                    </ul>
                </div>
            );
        }
    }

    areaListList() {
        var _this = this;
        return this.state.countNumber.map(function (name, index) {
            return (
                <div key={index} data-id={index} className="areaList">
                    <div className="input js_input">
                        <label>目标区域:</label>
                        <input type="text" data-index={"index" + index} className={"select area js_area"}
                               placeholder="请选择区域" title=""/>
                        <i className="select_icon"></i>
                        <p className="error">请选择区域</p>
                        <div className="area">
                            <div data-index={"index" + index} className={"area-box"}>
                                <ul className="list">
                                    <li data-type="city" className="active">我要选城市</li>
                                    <li data-type="province">我要选省份</li>
                                    <li data-type="area">我要选区域</li>
                                    <i data-id={index} className="close"></i>
                                </ul>
                                {_this.controlStructure()}
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <label>发布数量:</label>
                        <input type="text" className="only number size" title=""/>
                        <i>条</i>
                        <p className="error">请填写发布数量</p>
                    </div>
                    <div className="input">
                        <label>单价:</label>
                        <input type="text" className="price number size" title=""/>
                        <i>元</i>
                        <p className="error">请填写单价</p>
                    </div>
                    <span className="green">总价:<span className="size">0</span>元</span>
                    <div data-id={index} className="close"></div>
                    <div className="input isNote" value="123456" name="darren" data-name="darren">
                        <label>是否备注:</label>
                        <input type="radio" className="radio-test1" name={'note' + index}/>
                        <span>是</span>
                        <input type="radio" className="radio-test2" name={'note' + index} defaultChecked/>
                        <span>否</span>
                    </div>
                    <div className="input cityDescription" style={{"display": "none"}}>
                        <label>备注:</label>
                        <input type="text" className="noteinfo" placeholder="填写备注信息" maxLength="50"/>
                        <span className="gray">最多可输入 50 个字</span>
                        <p className="error">请填写备注</p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.areaListList()}
                <div className="areaList_add">
                    <button type="button">
                        <i className="add"></i><span>添加区域</span>
                    </button>
                    <span>
						<span>还可以添加</span>
						<span className="length"> 4 </span>
						<span>个区域</span>
					</span>
                </div>
            </div>
        )
    }
}

/*附件*/
class Fj extends React.Component {
    componentDidMount() {
        $(".form_col5 i.bubble-hover").click(function () {
            $(this).next().show();
        });
        $(".form_col5 .bubble-click").click(function () {
            $(this).hide();
        });
        $(".form_col5 .bubble-click>div").click(function (e) {
            e.stopPropagation();
        });
        $("input[name=isXS]").change(function () {
            if ($(this).parent().text() == "是") {
                $(".radio_xs").show();
            } else {
                $(".radio_xs").hide();
            }
        });
        $("input[name=isHS]").change(function () {
            if ($(this).parent().text() == "是") {
                $(".radio_hs").show();
            } else {
                $(".radio_hs").hide();
            }
        });
        $("input[name=isMD]").change(function () {
            if ($(this).parent().text() == "是") {
                $(".radio_md").show();
            } else {
                $(".radio_md").hide();
            }
        });
        upload234();
    }

    render() {
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
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="radio_xs">
                    <td>
                        <button type="button" className="btn" id="selectfiles2" style={{"width": "158px"}}><i
                            className="add"></i><span>上传销售线索文件</span></button>
                    </td>
                    <td>
                        <div className="ossfile2" style={{"width": "370px"}}></div>
                    </td>
                    <td>
                        <button type="button" className="btn" id="postfiles2" style={{"width": "152px"}}>开始上传</button>
                    </td>
                </tr>
                <tr>
                    <td>是否上传话术：</td>
                    <td><label><input type="radio" name="isHS"/>是</label><label><input type="radio" name="isHS"
                                                                                       defaultChecked/>否</label></td>
                </tr>
                <tr className="radio_hs">
                    <td>
                        <button type="button" className="btn" id="selectfiles3" style={{"width": "158px"}}><i
                            className="add"></i><span>上传话术</span></button>
                    </td>
                    <td>
                        <div className="ossfile3" style={{"width": "370px"}}></div>
                    </td>
                    <td>
                        <button type="button" className="btn" id="postfiles3" style={{"width": "152px"}}>开始上传</button>
                    </td>
                </tr>
                <tr>
                    <td>是否上传目标客户名单：</td>
                    <td><label><input type="radio" name="isMD"/>是</label><label><input type="radio" name="isMD"
                                                                                       defaultChecked/>否</label></td>
                </tr>
                <tr className="radio_md">
                    <td>
                        <button type="button" className="btn" id="selectfiles4" style={{"width": "158px"}}><i
                            className="add"></i><span>上传目标客户名单</span></button>
                    </td>
                    <td>
                        <div className="ossfile4" style={{"width": "370px"}}></div>
                    </td>
                    <td>
                        <button type="button" className="btn" id="postfiles4" style={{"width": "152px"}}>开始上传</button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

var Annex = React.createClass({
    componentDidMount: function () {
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
                    {extensions: "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar"}
                ],
                max_file_size: '1000mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },

            init: {
                PostInit: function () {
                    $('.ossfile')[0].innerHTML = '';
                    document.getElementById('postfiles').onclick = function () {
                        set_upload_param(uploader, '', false, 1);
                        return false;
                    };
                },
                FilesAdded: function (up, files) {
                    plupload.each(files, function (file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile').css({"text-align": "left"});
                        $('#postfiles').html("开始上传");
                        $('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 4) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile .file_close").click(function () {
                            up.removeFile(up.files[0]);
                            $('.ossfile')[0].innerHTML = '';
                            $('.ossfile').css({"text-align": "left"});
                            $('#selectfiles').html("重新上传");
                            $('#postfiles').html("开始上传");
                        });
                    });
                },
                BeforeUpload: function (up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 1);
                },
                UploadProgress: function (up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile').css({"text-align": "center"});
                    $('#postfiles').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function (up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file1 = get_uploaded_object_name(file.name);
                        $('#selectfiles').html("重新上传");
                        $('#postfiles').html("上传成功");
                        $('.ossfile .progress-bar').css("width", "0%");
                        $('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile').find("span.bfb").html("");
                    }
                    else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },

                Error: function (up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    }
                    else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    }
                    else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                        //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    }
                    else {
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
        uploader.bind('FilesAdded', function (uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name;
                //构造html来更新UI
                !function (i) {
                    previewImage(files[i], function (imgsrc) {
                        $('.file-list img').attr('src', imgsrc);
                    })
                }(i);
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
                max_file_size: '1000mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },

            init: {
                PostInit: function () {
                    $('.ossfile2')[0].innerHTML = '';
                    document.getElementById('postfiles2').onclick = function () {
                        set_upload_param(uploader2, '', false, 2);
                        return false;
                    };
                },

                FilesAdded: function (up, files) {
                    plupload.each(files, function (file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile2').css({"text-align": "left"});
                        $('#postfiles2').html("开始上传");
                        $('.ossfile2')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 4) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile2 .file_close").click(function () {
                            up.removeFile(up.files[0]);
                            $('.ossfile2')[0].innerHTML = '';
                            $('.ossfile2').css({"text-align": "left"});
                            $('#selectfiles2').html("重新上传");
                            $('#postfiles2').html("开始上传");
                        });
                    });
                },

                BeforeUpload: function (up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 2);
                },

                UploadProgress: function (up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile2').css({"text-align": "center"});
                    $('#postfiles2').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function (up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file2 = f2;
                        $('#selectfiles2').html("重新上传");
                        $('#postfiles2').html("上传成功");
                        $('.ossfile2 .progress-bar').css("width", "0%");
                        $('.ossfile2 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile2').find("span.bfb").html("");
                    }
                    else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },
                Error: function (up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    }
                    else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    }
                    else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                        //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    }
                    else {
                        alert("拒绝访问。请重新上传!");
                        $(".ossfile2 .file_close").click();
                        //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                    }
                }
            }
        });

        uploader2.init();

        //绑定文件添加进队列事件
        uploader2.bind('FilesAdded', function (uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name; //文件名
                //构造html来更新UI
                !function (i) {
                    previewImage(files[i], function (imgsrc) {
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
                max_file_size: '1000mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },

            init: {
                PostInit: function () {
                    $('.ossfile3')[0].innerHTML = '';
                    document.getElementById('postfiles3').onclick = function () {
                        set_upload_param(uploader3, '', false, 3);
                        return false;
                    };
                },


                FilesAdded: function (up, files) {
                    plupload.each(files, function (file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile3').css({"text-align": "left"});
                        $('#postfiles3').html("开始上传");
                        $('.ossfile3')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 6) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile3 .file_close").click(function () {
                            up.removeFile(up.files[0]);
                            $('.ossfile3')[0].innerHTML = '';
                            $('.ossfile3').css({"text-align": "left"});
                            $('#selectfiles3').html("重新上传");
                            $('#postfiles3').html("开始上传");
                        });
                    });
                },

                BeforeUpload: function (up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 3);
                },

                UploadProgress: function (up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile3').css({"text-align": "center"});
                    $('#postfiles3').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function (up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file3 = f3;
                        $('#selectfiles3').html("重新上传");
                        $('#postfiles3').html("上传成功");
                        $('.ossfile3 .progress-bar').css("width", "0%");
                        $('.ossfile3 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile3').find("span.bfb").html("");
                    }
                    else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },


                Error: function (up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    }
                    else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    }
                    else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                        //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    }
                    else {
                        alert("拒绝访问。请重新上传!");
                        $(".ossfile3 .file_close").click();
                        //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                    }
                }
            }
        });
        uploader3.init();

        //绑定文件添加进队列事件
        uploader3.bind('FilesAdded', function (uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name; //文件名
                //构造html来更新UI
                !function (i) {
                    previewImage(files[i], function (imgsrc) {
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
                max_file_size: '1000mb', //最大只能上传10mb的文件
                prevent_duplicates: true //不允许选取重复文件
            },

            init: {
                PostInit: function () {
                    $('.ossfile4')[0].innerHTML = '';
                    document.getElementById('postfiles4').onclick = function () {
                        set_upload_param(uploader4, '', false, 4);
                        return false;
                    };
                },

                FilesAdded: function (up, files) {
                    plupload.each(files, function (file) {
                        if (up.files.length > 1) {
                            up.removeFile(up.files[0]);
                        }
                        $('.ossfile4').css({"text-align": "left"});
                        $('#postfiles4').html("开始上传");
                        $('.ossfile4')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 6) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                            + '<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                            + '</div>';
                        $(".ossfile4 .file_close").click(function () {
                            up.removeFile(up.files[0]);
                            $('.ossfile4')[0].innerHTML = '';
                            $('.ossfile4').css({"text-align": "left"});
                            $('#selectfiles4').html("重新上传");
                            $('#postfiles4').html("开始上传");
                        });
                    });
                },

                BeforeUpload: function (up, file) {
                    check_object_radio();
                    set_upload_param(up, file.name, true, 4);
                },

                UploadProgress: function (up, file) {
                    var d = document.getElementById(file.id);
                    var prog = d.getElementsByTagName('div')[0];
                    var progBar = prog.getElementsByTagName('div')[0]
                    $('.ossfile4').css({"text-align": "center"});
                    $('#postfiles4').html("正在上传...");
                    progBar.style.width = file.percent + '%';
                    $(d).find("span.bfb").html("..." + file.percent + "%");
                    progBar.setAttribute('aria-valuenow', file.percent);
                },

                FileUploaded: function (up, file, info) {
                    if (info.status == 200) {
                        //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                        file4 = f4;
                        $('#selectfiles4').html("重新上传");
                        $('#postfiles4').html("上传成功");
                        $('.ossfile4 .progress-bar').css("width", "0%");
                        $('.ossfile4 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                        $('.ossfile4').find("span.bfb").html("");
                    }
                    else {
                        document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                    }
                },

                Error: function (up, err) {
                    if (err.code == -600) {
                        alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                    }
                    else if (err.code == -601) {
                        alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                        //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                    }
                    else if (err.code == -602) {
                        alert("\n这个文件已经上传过一遍了");
                        //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                    }
                    else {
                        alert("拒绝访问。请重新上传!");
                        $(".ossfile4 .file_close").click();
                        //alert("\nError xml:" + err.response);
                        //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                    }
                }
            }
        });

        uploader4.init();

        //绑定文件添加进队列事件
        uploader4.bind('FilesAdded', function (uploader, files) {
            for (var i = 0, len = files.length; i < len; i++) {
                var file_name = files[i].name; //文件名
                //构造html来更新UI
                !function (i) {
                    previewImage(files[i], function (imgsrc) {
                        $('.file-list4 img').attr('src', imgsrc);
                    })
                }(i);
            }
        });
        $(".bubble-hover").click(function () {
            $(this).next().show();
        });
        $(".bubble-click").click(function () {
            $(this).hide();
        });


    },
    render: function () {
        return (
            <div className="block-box">
                <div className="title-left">附件</div>
                <div className="content-right">
                    <div className="main">
                        <p>请选择上传相关附件，单个附件最大限制为100MB，不支持应用程序、音频和视频等文件上传</p>
                        <table>
                            <tbody>
                            <tr className="radio_main">
                                <td width="178">是否上传销售线索文件：</td>
                                <td width="470"><label><input type="radio" name="isXS"/>是</label><label><input
                                    type="radio" name="isXS" defaultChecked/>否</label>
                                    <i className="bubble-hover" id="bubble">?</i>
                                    <div className="bubble-click">
                                        <div>
                                            <img src="images/public/pic-jbf-nodata.jpg"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="radio_xs">
                                <td>
                                    <button type="button" className="btn" id="selectfiles2" style={{"width": "158px"}}>
                                        <i className="add"></i><span>上传销售线索文件</span></button>
                                </td>
                                <td>
                                    <div className="ossfile2" style={{"width": "450px"}}></div>
                                </td>
                                <td>
                                    <button type="button" className="btn" id="postfiles2" style={{"width": "152px"}}>
                                        开始上传
                                    </button>
                                </td>
                            </tr>
                            <tr className="radio_main">
                                <td>是否上传话术：</td>
                                <td><label><input type="radio" name="isHS"/>是</label><label><input type="radio"
                                                                                                   name="isHS"
                                                                                                   defaultChecked/>否</label>
                                </td>
                            </tr>
                            <tr className="radio_hs">
                                <td>
                                    <button type="button" className="btn" id="selectfiles3" style={{"width": "158px"}}>
                                        <i className="add"></i><span>上传话术</span></button>
                                </td>
                                <td>
                                    <div className="ossfile3" style={{"width": "450px"}}></div>
                                </td>
                                <td>
                                    <button type="button" className="btn" id="postfiles3" style={{"width": "152px"}}>
                                        开始上传
                                    </button>
                                </td>
                            </tr>
                            <tr className="radio_main">
                                <td>是否上传目标客户名单：</td>
                                <td><label><input type="radio" name="isMD"/>是</label><label><input type="radio"
                                                                                                   name="isMD"
                                                                                                   defaultChecked/>否</label>
                                </td>
                            </tr>
                            <tr className="radio_md">
                                <td>
                                    <button type="button" className="btn" id="selectfiles4" style={{"width": "158px"}}>
                                        <i className="add"></i><span>上传目标客户名单</span></button>
                                </td>
                                <td>
                                    <div className="ossfile4" style={{"width": "450px"}}></div>
                                </td>
                                <td>
                                    <button type="button" className="btn" id="postfiles4" style={{"width": "152px"}}>
                                        开始上传
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
});


/*右侧预览*/
class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.init();
        this.state = {
            getInformationHtml: '',
        }
    }

    init() {
        this.rootEl = $(".demend_right .right");
    }

    componentDidUpdate() {
        var arrTotal = this.rootEl.find('td.total');
        var startValue = 0;
        for (var i = 0, k; k = arrTotal[i]; i++) {
            startValue += this.rootEl.find(k).html() * 1;
        }
        this.rootEl.find('.countPrice .price').text(startValue);
    }

    getCityAddInformation(data) {
        if (data) {
            return data.map(function (name, index) {
                if (!name)return;
                return (
                    <tr>
                        <td>{name.name}</td>
                        <td>{name.number}</td>
                        <td>{name.unitPrice}</td>
                        <td className="total">{name.unitPrice * name.number}</td>
                    </tr>
                );
            }.bind(this));

        }
    }

    componentDidMount() {
        topStick();
        $("span.industry").text($.sessionStorage("industry"));
        //$("span.target-population").text($("td.mbrq .select-set").text());
        $(".demend_left .settlement-pattern").selectWidget({
            change: function (changes) {
                $(".demend_right .settlement-pattern").text(changes);
            },
            effect: "slide",
            keyControl: false,
            speed: 200,
            scrollHeight: 167,
            overflow: "hidden"
        });
        $(".demend_left .target-population").selectWidget({
            change: function (changes) {
                if (changes == "自定义") {
                    $("td.zdy").show();
                    $(".demend_right .target-population").text($(".zdy input").val());
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
            change: function (changes) {
                $(".demend_right .channel").text(changes);
            },
            effect: "slide",
            keyControl: false,
            speed: 200,
            scrollHeight: 167,
            overflow: "hidden"
        });
        $(".demend_left .age input[type=number]").on("input", function () {
            var number1 = $(".demend_left .age input[type=number]").eq(0).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(0).val();
            var number2 = $(".demend_left .age input[type=number]").eq(1).val() === "" ? "?" : $(".demend_left .age input[type=number]").eq(1).val();
            $(".demend_right .age").html(number1 + "-" + number2 + " 周岁");
        });
        $(".demend_left .startDate").on("change", function () {
            $(".demend_right .startDate").html($(this).val());
        });
        $(".demend_left .endDate").on("change", function () {
            $(".demend_right .endDate").html($(this).val());
        });
        var that = this;
        window.getCityNews = function (data) {
            //this.setState({getInformation:data});
            var getInformationHtml = this.getCityAddInformation(data);
            this.setState({getInformationHtml: getInformationHtml});
        }.bind(this);

        $(".progress_speed_show").on("click", function () {
            //debugger
            /*所有写过inputonblur验证的*/

            /*特殊校验inputarea*/
            $("input:visible").blur();
            $("textarea").blur();
            if (typeof($("input.area").attr("title")) == "undefined") {
                $("input.area").addClass("error");
                $("input.area").parent().find("p.error").show();
                return false;
            }

            if ($("input").hasClass("error") || $("textarea").hasClass("error") || $("input.form_date").val() == "") {
                return false;
            } else {
                if (!$("p.error:visible").length) {
                    $(".progress_speed").show();
                }
            }

        });
        $(".progress_speed .close,.progress_speed .button_close").on("click", function () {
            $(".progress_speed").hide();
        });
        this.rootEl.find('.rowspan').attr('colspan', 3);


        this.getAddDraft();
    }

    getAddDraft() {
        this.rootEl.on('click', '.btn_tj2', function () {
            addDemand();
        }.bind(this));
    }

    render() {
        return (
            <div className="context-explain package package1">
                <div>
                    <ul>
                        <li><label>业务类型：</label><span className="business-types">销售线索挖掘</span></li>
                        <li><label>行业：</label><span className="industry"></span></li>
                        <li><label>目标人群：</label><span className="target-population">成人</span></li>
                        <li><label>开始日期：</label><span className="startDate"></span></li>
                        <li><label>结束日期：</label><span className="endDate"></span></li>
                    </ul>
                    <table className="cost">
                        <thead>
                        <tr>
                            <th width="80px">目标区域</th>
                            <th width="50px">数量</th>
                            <th width="50px">单价</th>
                            <th>总价</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.getInformationHtml}
                        </tbody>
                        <tfoot className="fixed-tfoot">
                        <tr>
                            <td colSpan="4">总金额：</td>
                        </tr>
                        <tr>
                            <td colSpan="4" className="countPrice"><span className="cash">￥</span><span
                                className="price">0</span></td>
                        </tr>
                        <tr className="hide">
                            <td colSpan="4">结算模式：按提交线索数量结算</td>
                        </tr>
                        </tfoot>
                    </table>
                    <button type="button" className="submit btn progress_speed_show">提交审核</button>
                    <button type="button" className="drafts btn btn_tj2">加入草稿箱</button>
                </div>
            </div>
        )
    }
}

class Fbfb extends React.Component {
    componentDidMount() {

        $(".main div[class^=areaList]:not(.areaList_add) .isNote input[name^=note]").live("change", function () {
            if ($(this).parent().text() == "是") {
                $(this).parent().parent().next().show();
                $("input.noteinfo").blur(function () {
                    if ($(this).val() == '') {
                        $(this).addClass("error");
                        $(this).parent().find("p.error").show();
                        return false;
                    } else {
                        $(this).removeClass("error");
                        $(this).parent().find("p.error").hide();
                    }
                });
                $("input.noteinfo").focus(function () {
                    $(this).removeClass("error");
                    $(this).parent().find("p.error").hide();
                });
            } else {
                $(this).parent().parent().next().hide();
            }
        });
        $("input.area").on("click", function () {
            var index = $(this).parent().parent().parent().index();
            ReactDOM.render(<Area area={area} province={province} hotCity={hotCity}
                                  index={index}/>, $("#new_demand div.demend_left div.area")[0]);
            $("div.area>div").css({left: $(this).offset().left, top: $(this).offset().top + 30}).show();
        });
        var i = 3;
        $("input.area").live("change", function () {
            ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
        });
        $("input.size").live("input", function () {
            ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
        });
        $("input.money").live("input", function () {
            ReactDOM.render(<JinE data={areaList()}/>, $("#new_demand div.demend_right .right").eq(1)[0]);
        });
    }

    render() {
        return (
            <div>
                <div className="areaList">
                    <AreaList data={this.props.data} length={1}/>
                </div>
                <div className="areaList_add">
                    <button type="button"><i className="add"></i><span>添加区域</span></button>
                    <span>还可以添加<span className="length"> 4 </span>个区域</span></div>
            </div>
        )
    }
}

class Progress_speed extends React.Component {
    constructor(props) {
        super(props);
        this.rootEl = $('.progress_speed');

    }

    componentDidMount() {
        this.getSubmit();
    }

    getSubmit() {
        this.rootEl.find('.button_close').eq(1).click(function () {
            $('.progress_speed').hide();
        }.bind(this))
        this.rootEl.on('click', 'i.close', function () {
            $('.progress_speed').hide();
        }.bind(this));
        this.rootEl.on('click', '.btn_tj', function () {
            addDemandSubmit();
        }.bind(this));
    }

    render() {
        return (
            <div className="demand_submit">
                <div className="top"><span>提示</span><i className="close"></i></div>
                <div className="main">
                    <p>您确定提交审核吗？</p>
                </div>
                <div className="bottom">
                    <button type="button" className="button_close btn_tj">确&nbsp;定</button>
                    <button type="button" className="button_close">取&nbsp;消</button>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Yewu/>, $("#new_demand div.demend_left .form_col1>.main")[0]);
ReactDOM.render(<Mbkh />, $("#new_demand div.demend_left .form_col2>.main")[0]);
ReactDOM.render(<Jbxx />, $("#new_demand div.demend_left .form_col3>.main")[0]);
ReactDOM.render(<AreaAndRequirement/>, $("#new_demand div.demend_left .form_col4>.main")[0]);
ReactDOM.render(<Fj />, $("#new_demand div.demend_left .form_col5>.main")[0]);
// ReactDOM.render(<Annex />,$("#new_demand div.demend_left .form_col5>.main")[0]);
ReactDOM.render(<Preview/>, $("#new_demand div.demend_right .right").eq(0)[0]);
ReactDOM.render(<Progress_speed/>, $(".progress_speed")[0]);