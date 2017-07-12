/*页面通过Preview 模块加载来实现业务的结算 通过 areaList() 函数来完成钱相关的算value */

//https://www.mshuoke.com/20170413030528403/getDetailHfp?_=1492069244062
function autocompleteCity(cities) {
    $('.city_name').autocomplete(cities, {
        max: 12, //列表里的条目数
        minChars: 0, //自动完成激活之前填入的最小字符
        width: 240, //提示的宽度，溢出隐藏
        scrollHeight: 300, //提示的高度，溢出显示滚动条
        matchContains: true, //包含匹配，就是data参数里的数据，是否只要包含文本框里的数据就显示
        autoFill: false, //自动填充
        formatItem: function (row, i, max) {
            return row.name + '（' + row.pinyin + '）';
        },
        formatMatch: function (row, i, max) {
            return row.match;
        },
        formatResult: function (row) {
            return row.name;
        }, resultsClass: 'search-text'
    }).result(function (event, row, formatted) {
        $('.area-box').hide();
        $('.areaList .select.area.js_area').val(row.name);
        $('.areaList .select.area.js_area').change().blur();
    });
}

var createTime;
import {Slider} from 'antd';
require('./copy5.css');
class Demo extends React.Component {
    state = {
        disabled: false,
        nub: 30,

    };
    handleDisabledChange = (disabled) => {
        this.setState({disabled});
    }

    onAfterChange(value) {
        // console.log(value,'--------------------------------');
    }

    componentDidMount() {
        //console.log($('.ant-slider-handle'));

        $('.ant-slider-handle').mouseout(function () {
            $('.ant-tooltip-placement-top').css({left: '-100px', top: '-100px'});
        });

        $('.ant-slider-handle').mouseover(function (ev) {
            $('.ant-tooltip-placement-top').css({left: '-100px', top: '-100px'});
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
    /*先清空数据*/
    $('.people-yang span.yuan').attr('data-value', '0');
    $('.people-yang span.yuan').html('+' + '0.00' + '元');

    /*第一个不能小于3 或者为空*/
    var startAge = $('.people-yang input.first').val();
    var endAge = $('.people-yang input.last').val();

    if (!startAge) {
        $('.people-yang').parent().find('p.error.first').html('请填写开始年龄！');
        $('.people-yang').parent().find('p.error.first').show();
        $('.people-yang input.first').data('check', false);
        return;
    }

    startAge *= 1;

    /*第一个不能小于3 或者为空*/

    if (startAge < 3) {
        $('.people-yang').parent().find('p.error.first').show();
        $('.people-yang').parent().find('p.error.first').html('开始年龄必须大于三岁！');
        $('.people-yang input.first').data('check', false);
        return;
    } else {
        $('.people-yang input.first').data('check', true);
        $('.people-yang').parent().find('p.error.first').hide();
    }

    /*不能小于54*/

    /*开始值最大54*/
    if (startAge > 54) {
        $('.people-yang').parent().find('p.error.first').show();
        $('.people-yang').parent().find('p.error.first').html('开始年龄必须小于五十四岁！');
        $('.people-yang input.first').data('check', false);
        return;
    } else {
        $('.people-yang').parent().find('p.error.first').hide();
        $('.people-yang input.first').data('check', true);
    }


    /*结束年龄不能为空 并且不能大于55 并且不能小于前面*/
    if (!(mark == 'start')) {
        if (!endAge) {
            $('.people-yang').parent().find('p.error.first').html('请填写结束年龄！');
            $('.people-yang').parent().find('p.error.first').show();
            $('.people-yang input.last').data('check', false);
            return;
        }
    }
    if (endAge == "0") {
        $('.people-yang').parent().find('p.error.first').html('结束年龄必须大于开始年龄');
        $('.people-yang').parent().find('p.error.first').show();
        $('.people-yang input.last').data('check', false);
        return;
    }
    endAge *= 1;
    /*第一个不能大于55 或者为空*/

    /*不能大于55*/

    if (endAge > 55) {
        $('.people-yang').parent().find('p.error.first').show();
        $('.people-yang').parent().find('p.error.first').html('结束年龄必须小于五十五岁！');
        $('.people-yang input.last').data('check', false);
        return;
    } else {
        if (endAge) {
            $('.people-yang').parent().find('p.error.first').hide();
            $('.people-yang input.last').data('check', true);
        }
    }

    /*结束年龄大于开始年龄*/
    //alert(endAge);
    if (endAge) {
        if (endAge < startAge) {
            $('.people-yang').parent().find('p.error.first').html('结束年龄必须大于开始年龄！');
            $('.people-yang').parent().find('p.error.first').show();
            $('.people-yang input.last').data('check', false);
            return;
        } else {
            $('.people-yang').parent().find('p.error.first').hide();
            $('.people-yang input.last').data('check', true);
        }
    }


    var firstCheck = $('.people-yang input.first').data('check');
    var laststCheck = $('.people-yang input.last').data('check');

    if (firstCheck && laststCheck) {
        var industryValue = $('.industry.select.area.js_area').attr('data-value') * 1;

        /*两个都合格了以后*/

        /*如果前面的小于等于 增加30%*/

        if ((endAge - startAge) < 5) {
            $('.people-yang span.yuan').attr('data-value', (industryValue / 10 * 1.5).toFixed(2));
            $('.people-yang span.yuan').html('+' + (industryValue / 10 * 1.5).toFixed(2) + '元');
        } else {
            $('.people-yang span.yuan').attr('data-value', '0');
            $('.people-yang span.yuan').html('+' + '0.00' + '元');
        }
        $('.target-population').html(startAge + '-' + endAge + '岁');
        /*算钱*/
        ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
    }
}

var newDandData = sessionStorage.getItem('newDandData');

$(".loading_cover").hide();
$('.industrySelect').show();
var labelList;
/*记载到这里关闭*/
/*行业模块*/
React.rootEl = $('#new_demand div.demend_left');

/**
 * 行业名  线上 竞赛辅导 基础单价
 */
class Yewu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            industry: '',
            industryHtml: '',
            onlineAndOffline: '',
            onlineAndOfflineHtml: '',
            leavalLastdata: '',
            leavalLastHtml: '',
        }
        /*初始化数据*/

    }

    init() {
        this.rootEl = React.rootEl.find(".form_col1>.main");
        this.selectIndustry();
        this.selectIndustry = this.selectIndustry.bind(this);
        this.createleavalLastHtml = this.createleavalLastHtml.bind(this);
        this.updataStructrue = this.updataStructrue.bind(this);
        this.controlShow();

        /*跟新结构数据*/
        this.updataStructrue(0);
        if (this.props.industry) {
            //debugger;
            var industry = this.props.industry;
            var twolevindustry = industry.demandname.slice(0, 2);	//线上、线下
            var industryId = industry.industryId;						//行业id
            var newIndustryPrice = industry.basicUnitPrice;	//基础单价
            // var demandname = industry.industry;				//行业全称  线下-竞赛辅导
            //var industryItem = industry.item;
            /*如果没有产品需求那么就不要走这个流程*/
            //debugger;
            // if(newIndustryId){
            //debugger;
            if (twolevindustry == '线下') {
                $('.btn.controlPub.control1').addClass('selected');
                $('.btn.controlPub.control2').removeClass('selected');
            }
            if (twolevindustry == '线上') {
                $('.btn.controlPub.control1').removeClass('selected');
                $('.btn.controlPub.control2').addClass('selected');
            }

            $('.industry.select.area.js_area').attr('data-nfiid', industryId);
            $('.industry.select.area.js_area').attr('data-value', newIndustryPrice);
            $('.industry.select.area.js_area').val(industry.demandname.substr(3));

            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
        }
        // }
    }

    componentDidMount() {
        $("head").find("style[type='text/css']").eq(0).remove()
        this.init();
    }

    /*跟新结构数据*/
    updataStructrue(id) {
        var dataId = id;
        this.getIndustryData(function (onlineAndOffline) {
            /*zhe li you parentId 使用parentId查询 name":"教育培训",*/
            //for(var ){}
            //debugger;
            /*线下*/
            this.setState({onlineAndOffline: onlineAndOffline[0].list});

            this.setState({onlineAndOfflineHtml: this.createIndustry(dataId)});


        }.bind(this));
    }

    getIndustryData(callBack) {
        /*onoff=1 是线上 onoff=2*/
        //http://192.168.2.137:8090/bs2/industrys/level/1?onoff=1
        /*获取数据的只处理数据*/
        callBack = callBack || function () {
            };
        /*fiid=7 list fiid=8 online and offline */

        //http://192.168.2.137:8090/bs2/industrys/level/1
        let url = domain137 + '/quality/getIndustryList';

        $.when($.ajax({
            url: url
        })).then(function (data) {
            if (data.msg == 'success') {
                callBack(data.data.list);
            }
        }.bind(this)).done(function (data) {
            //debugger;
            //console.log(2);
        }).fail(function (data) {
            //console.log(3);
        });
    }

    componentDidUpdate() {
        /*跟新模块*/
        if (!newDandData) {
            /*如果没有回填数据执行这里*/
            this.rootEl.find(".industry .btn:visible:first").click();
        }

    }

    selectIndustry() {
        var IndustryValue = "";

        /*点击其它地方这个也消失*/
        $(document).on('click', document.body, function (ev) {
            var target = ev.target || ev.srcElement;
            var leavalFirst = $(target).parent()[0].className;
            //console.log(leavalFirst);
            if (!(leavalFirst == 'leavalFirst' || leavalFirst == 'leavalThen' || leavalFirst == 'leaval-box')) {
                this.rootEl.find('.leavalFirst').hide();
                this.rootEl.find('.leavalThen').hide();
            }
        }.bind(this));


        this.rootEl.on('focus', '.leaval-box input', function (ev) {
            var target = ev.currentTarget;
            $(".leavalFirst").show();
        }.bind(this));

        this.rootEl.on('blur', '.industry.select.area.js_area', function (ev) {
            var target = ev.currentTarget;
            if (!$(target).val()) {
                $(".error.industry").show();
            } else {
                $(".error.industry").hide();
            }
        }.bind(this));


        /*点击一级列表*/
        this.rootEl.on('click', '.leavalFirst li', function (ev) {
            IndustryValue = "";
            var target = ev.currentTarget;

            /*二级数据*/
            var dataList = JSON.parse($(target).attr('data-list'));

            this.setState({leavalLastdata: dataList});
            this.setState({leavalLastHtml: this.createleavalLastHtml()});
            this.rootEl.find('.leavalThen').show();
            var _value = $(target).html();
            IndustryValue += _value;

        }.bind(this));

        /*点击二级列表*/
        this.rootEl.on('click', '.leavalThen li', function (ev) {

            var target = ev.currentTarget;
            this.rootEl.find('.leavalFirst').hide();
            this.rootEl.find('.leavalThen').hide();
            var _value = $(target).html();
            IndustryValue += '/' + _value;
            this.rootEl.find('.leaval-box input').val(IndustryValue);
            var price = $(target).attr('data-price');
            //console.log(price);
            $('input.industry.select.area.js_area').attr('data-value', price);

            $('input.industry.select.area.js_area').attr('data-txt', _value);

            $('.people-yang .first').blur();

            /*算钱*/
            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);

            /*城市的算价系统*/
            $(".demend_left input.js_area").change();
            /*城市的算价系统*/


            /*选择行业判断*/

            if (!$(".industry.select.area.js_area").val()) {
                //debugger;
                $(".demend_left .industry p.error").html("请至少选择一项行业").show();
            } else {
                if ($(".industry .btn.selected:visible").hasClass("other")) {
                    if (isNull($(".industry.select.area.js_area").val())) {
                        $(".demend_left .industry p.error").html("请选择您的行业").show();
                    } else {
                        $(".demend_left .industry p.error").hide();
                    }
                } else {
                    $(".demend_left .industry p.error").hide();
                }
            }


            /*data-nfiid 处理行业id*/
            this.rootEl.find('.leaval-box input').attr('data-nfiid', $(target).attr('data-nfiid'));
            //
            ordername();
            //console.log(IndustryValue);
        }.bind(this));


    }

    createleavalLastHtml() {
        if (this.state.leavalLastdata) {
            var leavalLastdata = this.state.leavalLastdata;
            return leavalLastdata.map(function (data, index) {
                return (
                    <li key={index} data-price={data.price ? data.price : 0} data-nfiid={data.nfiid ? data.nfiid : 0}
                        className="leaval-ft">{data.name}</li>);
            });

        }
    }

    createIndustry(id) {
        if (this.state.onlineAndOffline) {
            var onlineAndOffline = this.state.onlineAndOffline;
            /*0线下 1 线上*/
            return onlineAndOffline.map(function (data, index) {
                if (data.onoff == id) {
                    return (<li key={index} data-price={0} data-onoff={data.onoff} data-list={JSON.stringify(data.list)}
                                className="leaval-ft">{data.name}</li>);
                }
            });

        }
    }

    controlShow() {
        /*需要从新回填数据*/
        this.rootEl.on('click', '.controlPub', function (ev) {
            //debugger;
            var currentClass = ev.currentTarget.className;

            $(".demend_right .industry").html($(ev.currentTarget).find(".btn.selected").html());

            $(ev.currentTarget).addClass("selected").siblings().removeClass("selected");

            this.rootEl.find(".industry .btn:not(.other)").hide();
            this.rootEl.find("div[data-parentfiid=" + $(ev.currentTarget).attr("data-fiid") + "]").css("display", "inline-block");
            this.rootEl.find('.btn.other').removeClass("selected");
            this.rootEl.find('.industry .btn:visible:first').click();
            $(".demend_right .industry").html(this.rootEl.find('.industry .btn:visible:first').text());

            var target = ev.currentTarget;

            /*跟新结构数据*/
            var dataId = $(target).attr('data-fiid');
            //console.log(dataId);
            this.updataStructrue(dataId);

            $('.industry.select.area.js_area').val('');
            $('.industry.select.area.js_area').attr('data-value', '0');
            $('.industry.select.area.js_area').attr('data-txt', '0');
            $('.industry.select.area.js_area').attr('data-nfiid', '0');
            $('.color-red .price').html('0.00');
            $('.number.size').val(0);
            $('.people-yang .yuan').html('+0.00元');
            $('.people-yang .yuan').attr('data-value', '0.00');


            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);

            ordername();
        }.bind(this));

        /*change开始改变下面的 老数据代码
         this.rootEl.on('click','.industry .btn',function (ev){

         $(ev.currentTarget).addClass("selected").siblings().removeClass("selected");

         $(".demend_left input.js_area").change();

         if(!$(ev.currentTarget).hasClass("other")){
         $(".demend_right .industry").html($(ev.currentTarget).html());
         }else{
         $(".demend_right .industry").html(this.rootEl.find('.other+input').val());
         }
         ordername();
         }.bind(this));

         this.rootEl.on('input','.other+input',function (ev){
         $(".demend_right .industry").html($(ev.currentTarget).val());
         ordername();
         });

         */
    }

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td> 选择行业：</td>

                    <td >
                        <div data-prece="0" data-fiid="0" className="btn controlPub control1 selected">线下</div>
                        <div data-price="0" data-fiid="1" className="btn controlPub control2">线上</div>
                    </td>

                </tr>
                <tr>
                    <td></td>
                    <td className="industry">
                        <div className="leaval-box">
                            <p className="error industry">请至少选择一个行业！</p>
                            <input type="text" data-nfiid={0} data-value={0} readOnly="readonly"
                                   style={{width: '370px'}} className="industry select area js_area" data-txt={" "}
                                   placeholder="请选择行业" title=""/>
                            <ul className="leavalFirst">
                                {this.state.onlineAndOfflineHtml}
                            </ul>

                            <ul className="leavalThen">
                                {this.state.leavalLastHtml}
                            </ul>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

/*目标人群模块*/
/**
 * 开始年龄 结束年龄 基础单价
 */
class Mbkh extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            crowd: [
                {"content": "学龄前儿童(3~6岁)", "title": "学龄前儿童"},
                {"content": "小学生(6~12岁)", "title": "小学生"},
                {"content": "初中生(12~15岁)", "title": "初中生"},
                {"content": "高中生(15~18岁)", "title": "高中生"},
                {"content": "大学生(18~22岁)", "title": "大学生"},
                {"content": "成人(22~55岁)", "title": "成人"}
            ],
            crowdHtml: '',
            range: [8, 38]
        }
        this.init();
        this.controlCrowd = this.controlCrowd.bind(this);
        this.createCrowd = this.createCrowd.bind(this);
        this.change = this.change.bind(this);
    }

    init() {
        this.rootEl = React.rootEl.find(".form_col2>.main");
    }

    componentDidMount() {
        //this.setState({crowdHtml:this.createCrowd()});
        this.controlCrowd();
        /*回填关于人的字段*/

        /*回填模块数据*/

        if (this.props.targethumen) {
            var targethumen = this.props.targethumen;
            var startAge = targethumen.beginage;//开始年龄
            var endAge = targethumen.endage;	//结束年龄

            //console.log(targethumen);
            $('.people-yang input.first').val(startAge);
            $('.people-yang input.last').val(targethumen.endage);

            /*算基础单价*/

            var industryValue = targethumen.basicUnitPrice;//基础单价
            $('.people-yang span.yuan').html('+' + targethumen.endage + '元');

            if ((endAge - startAge) < 5) {
                $('.people-yang span.yuan').attr('data-value', (industryValue / 10 * 1.5).toFixed(2));
                $('.people-yang span.yuan').html('+' + (industryValue / 10 * 1.5).toFixed(2) + '元');
            } else {
                $('.people-yang span.yuan').attr('data-value', '0');
                $('.people-yang span.yuan').html('+' + '0.00' + '元');
            }

            /*更新年龄控件*/
            this.setState({range: [startAge, endAge]});

            /*算钱*/
            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
        }
    }

    componentDidUpdate() {

    }

    createCrowd() {

        //return ();

    }

    controlCrowd() {
        /*111111
         this.rootEl.on('input','.people-yang input',function (ev){
         var target = ev.currentTarget;
         var value = target.value.replace(/[^\d]/g,'');
         $(target).val(value);
         console.log($(target).val());
         }.bind(this));
         */
        /*开始年龄*/
        /*默认开始值为真*/

        $('.people-yang input.first').data('check', true);

        this.rootEl.on('blur', '.people-yang input.first', function (ev) {
            checkage('start');
        }.bind(this));


        /*结束年龄*/
        $('.people-yang input.last').data('check', false);

        this.rootEl.on('input', '.people-yang input.first', function (ev) {
            var target = ev.currentTarget;
            var firstValue = $(target).val();
            //console.log(typeof firstValue);

            this.setState({range: [firstValue * 1, $('.people-yang input.last').val() * 1]});
        }.bind(this));


        this.rootEl.on('input', '.people-yang input.last', function (ev) {
            var target = ev.currentTarget;
            var lastValue = $(target).val();
            //console.log(typeof firstValue);

            this.setState({range: [$('.people-yang input.first').val() * 1, lastValue * 1]});
        }.bind(this));


        this.rootEl.on('blur', '.people-yang input.last', function (ev) {
            checkage();
        }.bind(this));
    }

    change(value) {
        this.setState({range: [value[0], value[1]]});

        $('.people-yang input.first').val(value[0]);
        $('.people-yang input.last').val(value[1]);
        checkage();
    }

    render() {
        return (
            <table className="crowd">
                <tbody>
                <tr>
                    <td style={{"verticalAlign": "text-top", "lineHeight": "30px"}}>目标人群：</td>
                    <td className="slider-parent">
                        <Demo change={this.change} rangeArr={ this.state.range }/>
                    </td>
                    <td style={{"verticalAlign": "text-top", "lineHeight": "30px"}}>

                        <div className="people-yang">
                            <input className="first" type="text" defaultValue="3"/>
                            <span className="marked">~</span>
                            <input className="last" type="text"/>
                            <span className="age">周岁</span>
                            <span className="yuan" data-value={0}>+0.00元</span>
                        </div>
                        <p className="error first"></p>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

/*区域和需求*/
var backSwitch = true;
var newPriceBesic = 0;
class AreaAndRequirement extends React.Component {
    constructor(props) {
        super(props);
        ////热门城市
        this.state = {
            hotCity: ["北京", "上海", "广州", "深圳", "杭州", "苏州", "南京", "成都", "重庆", "天津"],
            hotCityHtml: '',
            cityTop: ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STUV', 'WXYZ',],
            cityTopHtml: '',
            chooseCity: '',
            chooseCityHtml: '',
            provinceData: '',
            provinceHtml: '',
            controlVar: 'city',
            areaData: '',
            areaTtml: '',
            countNumber: [true],
            areaLength: 1,
            newarealistHtml: '',
            /*city province area defined*/
            cities: []
        };
        this.init();
    }

    init() {
        this.rootEl = React.rootEl.find(".form_col3>.main");
        this.addMutilCityEvent = this.addMutilCityEvent.bind(this);
    }

    componentDidMount() {
        this.setState({hotCityHtml: this.createHotCity()});
        /*abc def top*/
        this.setState({cityTopHtml: this.createCityTop()});
        /*获取选择城市数据*/
        this.getChooseCityData(function (data) {
            this.setState({chooseCity: data});
            /*第一次默认abc*/
            this.setState({chooseCityHtml: this.createChooseCity(['A', 'B', 'C'])});

            var cityList = {};
            var cities = [];

            data.map(function (result, index) {
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

            //debugger;

            this.setState({
                cities: cities,
            })
            autocompleteCity(this.state.cities);

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
            autocompleteCity(this.state.cities);
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
        /*default arealistHtml*/
        //this.areaListList = this.areaListList.bind(this);
        this.setState({arealistHtml: this.createAreaHtml()});
        //this.setState({arealistHtml:this.areaListList()})
        this.addMutilCityEvent();
        this.delMutilCityEvent();
        this.areaInput();
        this.close();
        /*开始回填城市*/

        this.resetCityValue();
    }

    resetCityValue() {
        if(this.props.area){
            var areaCityList = this.props.area.areaanddemandquantity;
            if(!areaCityList)return;
            var arr = [];
            for(var i=0;i<JSON.parse(areaCityList).length;i++){
                arr.push(true);
            }
            this.setState({countNumber:arr});
        }
    }

    componentDidUpdate() {
        // if (!this.props.area.isFirst) {
        //     this.props.area.isFirst = true;
            var areaCityList = this.props.area.areaanddemandquantity;
            //debugger;
            newPriceBesic = this.props.area.basicUnitPrice;//基础单价
            if (!areaCityList)return;
            // var arr = [];
            // for (let i = 0; i < data.length; i++) {
            //     //组装对象
            //     var obj = {};
            //     var objArr = data[i].slice(1, -1).split(",");
            //     for (let i = 0; i < objArr.length; i++) {
            //         obj[objArr[i].split(":")[0].toString().replace(/'/g, "")] = objArr[i].split(":")[1].toString().replace(/'/g, "")
            //     }
            //     arr.push(obj)
            //
            // }

            // areaCityList = arr;
        JSON.parse(areaCityList).map(function (name, index) {
                //console.log(areaCityList);
                this.rootEl.find('.select.area').eq(index).val(name.target);//城市名称
                this.rootEl.find('.number.size').eq(index).val(name.releasenum);//发包数量
                //$('.color-red span.price').eq(index).html((areaCityList.newIndustryPrice/10*2));

                /*算钱*/
                ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
                //console.log($(".js_area"));
                //$(".js_area").change();

            }.bind(this));
            $(".js_area").change();
        // }

    }

    close() {
        this.rootEl.on("click", "div.area ul.list i.close", function () {
            $(this).parent().parent().hide();
        });
    }

    controlCityListShow() {
        this.rootEl.on('click', '.select.area', function (ev) {
            var target = this.rootEl.find(ev.currentTarget);
            var dataIndex = target.attr('data-index');
            var AreaBox = this.rootEl.find('.area-box');
            AreaBox.hide();
            //target.parents('.areaList').find('.list li.city').addClass('active');
            for (var i = 0, k; k = AreaBox[i]; i++) {
                if (dataIndex === this.rootEl.find(k).attr('data-index')) {
                    this.rootEl.find(k).show();
                    /*跟新到第一个*/
                    this.rootEl.find(k).find('.list li').removeClass('active');
                    this.rootEl.find(k).find('.list li').eq(0).addClass('active');
                    this.setState({controlVar: 'city'});
                }
            }
        }.bind(this));
    }

    chooseOnlyCity() {
        /*hot city province area*/
        this.rootEl.on('click', '.js_key', function (ev) {
            console.log('==============');
            //debugger;
            //debugger;
            var oValue = this.rootEl.find(ev.currentTarget).find('a').html();
            //debugger;
            this.rootEl.find(ev.currentTarget).parents('.area-box').hide();
            this.rootEl.find(ev.currentTarget).parents('.js_input').find('.js_area').val(oValue).change().blur();

            if (isNull(this.rootEl.find(ev.currentTarget).parents('.areaList').find('.number.size').val())) {

                this.rootEl.find(ev.currentTarget).parents('.areaList').find('.number.size').val(1).change().blur();
            }
            //this.rootEl.find('.select.area').val(oValue);
            //this.rootEl.find('.area-box').hide();
        }.bind(this));
    }

    addMutilCityEvent() {
        this.rootEl.on('click', '.areaList_add button', function () {
            var arr = this.state.countNumber;
            var count = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    count++;
                }
            }
            if (count >= 5) {
                return false;
            }
            arr.push(true);
            this.setState({countNumber: arr});
            console.log(this.rootEl.find(".areaList").length);
            //this.setState({areaLength:this.rootEl.find(".areaList").length});
            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
            $(".js_area").change();
        }.bind(this));
    }

    delMutilCityEvent() {
        this.rootEl.on('click', 'i.close', function (ev) {
            var dataId = this.rootEl.find(ev.currentTarget).attr('data-id') * 1;
            var count = 0;
            /*这里也是++*/
            var arr = this.state.countNumber;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i]) {
                    count++;
                }
            }
            if (count == 1) {
                return false;
            }
            delete arr[dataId];
            //console.log(arr);
            this.setState({countNumber: arr});
            this.setState({areaLength: this.rootEl.find(".areaList").length});
            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
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
            data.basreglist.map(function (result, index) {
                for (var key in result) {
                    var city = {
                        "name": result[key].regionName,
                        "match": result[key].regionName + "|" + result[key].regionPinyyin + "|" + result[key].regionPy,
                        "pinyin": result[key].regionPinyyin,
                        "sanzima": result[key].regionPy
                    }
                    cities.push(city);
                }
            });
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
                            //	console.log(city[key].regionName);
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
                            //	console.log(city[key].regionName);
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
            this.rootEl.find(ev.currentTarget).addClass('active').siblings().removeClass("active");
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

    areaInput() {
        this.rootEl.on("change", "input.js_area", function (ev) {

            //debugger;
            /*614*/
            if ($(ev.currentTarget).val().indexOf("北京") != -1 || $(ev.currentTarget).val().indexOf("上海") != -1 || $(ev.currentTarget).val().indexOf("广州") != -1 || $(ev.currentTarget).val().indexOf("深圳") != -1 || $(ev.currentTarget).val().indexOf("杭州") != -1 || $(ev.currentTarget).val().indexOf("一线城市") != -1) {
                var price;
                var _value = $(".industry.select.area.js_area").attr("data-value") * 1;
                isNull(_value)
                    ?
                    price = ($(".label_list-title span.price").html() - 1 + 1).toFixed(2)
                    :
                    price = ((_value * 2 / 10)).toFixed(2);

                /*处理回显*/

                if (!((price * 1).toFixed(0) * 1)) {
                    price = ((newPriceBesic * 2 / 10)).toFixed(2);
                }
                $(ev.currentTarget).parent().parent().find("span.price").html(price);

            } else {
                $(ev.currentTarget).parent().parent().find("span.price").html("0.00");
            }
            $(".demend_left .industry .btn.selected").attr("data-price");
            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
        }.bind(this));

        this.rootEl.on("change", "input.number.size", function () {
            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
        });

        this.rootEl.on("blur", "input.js_area", function (ev) {
            if (isNull($(ev.currentTarget).val())) {
                $(ev.currentTarget).parent().parent().find("p.error").eq(0).show();
            } else {
                $(ev.currentTarget).parent().parent().find("p.error").eq(0).hide();
            }
        });

        var re = /^[1-9]+[0-9]*]*$/;

        this.rootEl.on("blur", "input.number.size", function (ev) {
            if (isNull($(ev.currentTarget).val())) {
                $(ev.currentTarget).parent().parent().find("p.error").eq(1).show();
            } else {
                if (!re.test($(ev.currentTarget).val())) {
                    $(ev.currentTarget).parent().parent().find("p.error").eq(1).show();
                } else {
                    $(ev.currentTarget).parent().parent().find("p.error").eq(1).hide();
                }
            }
        });

        //console.log(cities,'***********************************');


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
            if (!name)return;

            return (
                <div className="areaList" key={ index }>
                    <div className="input js_input">

                        <input type="text" required="" data-index={"index" + index} className={"select area js_area"}
                               placeholder="请选择区域" title=""/>
                        <i className="select_icon"></i>
                        <div className="area">
                            <div data-index={"index" + index} className={"area-box"}>
                                <ul className="list">
                                    <li data-type="city" className="active">我要选城市</li>
                                    <li data-type="province">我要选省份</li>
                                    <li data-type="area">我要选区域</li>
                                    <i className="close"></i>
                                </ul>
                                {_this.controlStructure()}
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <label className="color-red"><span>单价：+&nbsp;<span
                            className="price 11111">0.00</span>&nbsp;&nbsp;元</span></label>
                    </div>
                    <div className="input">
                        <label>需求量:</label>
                        <input type="text" className="number size"/>
                    </div>
                    <i data-id={index} className="close"></i>
                    <p className="error area">请选择目标区域</p><p className="error size">请输入需求量，请输入一个大于1 的整数</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="area-title">区域和需求量：</div>
                <div className="area-box-add">
                    {this.areaListList()}
                </div>
                <div className="areaList_add">
						<span>
							<span>还可以添加</span>
							<span className="length"> {5 - this.state.areaLength} </span>
							<span>个区域</span>
						</span>
                    <button type="button">
                        <i className="add"></i><span>添加区域</span>
                    </button>
                </div>
            </div>
        )
    }
}

/*sale template*/
class SaleTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.init();
        this.state = {
            freelabel: [],
            chargelabel: [],
            freelabelHtml: '',
            chargelabelHtml: '',
            activelength: 0,
            activeprice: 0,
            diylabellength: 0
        }
    }

    init() {
        this.rootEl = React.rootEl.find(".form_col4>.main");
        this.addshow();
        this.activelabel();
        this.addlabel();
        this.removelabel();
        this.getfreelabelData(function (data) {
            this.setState({freelabel: data});
            this.setState({freelabelHtml: this.createfreelabel()});
        }.bind(this));
        this.getchargelabelData(function (data) {
            this.setState({chargelabel: data});
            this.setState({chargelabelHtml: this.createchargelabel()});
        }.bind(this));
    }

    createfreelabel() {
        /*创建标签名称*/
        return this.state.freelabel.map(function (name, index) {
            return (<li key={index}><span>{name.labelName}</span></li>);
        });
    }

    createchargelabel() {
        /*创建标签名称*/
        return this.state.chargelabel.map(function (name, index) {
            return (<li key={index} title={name.labelPrice}><span>{name.labelName}</span><i></i></li>);
        });
    }

    addshow() {
        this.rootEl.on("click", ".label_list-title", function () {
            this.rootEl.find(".add-label").toggleClass("active");
            if (this.rootEl.find(".add-label").hasClass("active")) {
                this.rootEl.find(".add-show span").text("点击收起");
            } else {
                this.rootEl.find(".add-show span").text("点击展开");
            }
        }.bind(this));
    }

    activelabel() {
        this.rootEl.on("click", ".add_label_list li", function (ev) {
            //debugger;
            $(ev.currentTarget).toggleClass("active");

            var activeprice = 0;
            $(".add_label_list li.active").each(function () {
                activeprice += ($(this).attr("title") * 1);
            });
            //console.log('=================99999999',activeprice);
            $('.label_list-title .price').html(activeprice.toFixed(2));
            //this.setState({activelength:$(".add_label_list li.active").length});

            this.setState({activeprice: activeprice});
            $("input.js_area").change();
            $('.activelength').html($('.add_label_list ul li.active').length);
        }.bind(this));

        this.rootEl.on("blur", ".diylabel input", function (ev) {
            if (isNull($(ev.currentTarget).val())) {

            }
        }.bind(this));
    }

    addlabel() {
        var diylabel = '<div class="diylabel"><span>标签名：</span><input type="text" maxLength="20" placeholder="输入自定义标签名，最多可输入20个字"/><span class="close"></span></div>';

        this.rootEl.on("click", ".label_add button", function () {
            var length = this.rootEl.find(".diylabel").length;
            if (length < 20) {
                this.rootEl.find(".diylabel_box").append(diylabel);
                this.setState({diylabellength: this.rootEl.find(".diylabel").length});
            } else {
                this.rootEl.find(".label_add p.error").show();
            }
        }.bind(this));
    }

    removelabel() {
        this.rootEl.on("click", ".diylabel .close", function (ev) {
            $(ev.currentTarget).parent().remove();
            this.rootEl.find(".label_add p.error").hide();
            this.setState({diylabellength: this.rootEl.find(".diylabel").length});
        }.bind(this));
    }

    getfreelabelData(callBack) {
        callBack = callBack || function () {
            };
        let url = domain + '/baseLabel' + '/' + '1';
        $.when($.ajax({
            url: url
        })).then(function (data) {
            callBack(data.lableList);
        }.bind(this)).done(function (data) {
            //console.log(2);
        }).fail(function (data) {
            //console.log(3);
        });
    }

    getchargelabelData(callBack) {
        callBack = callBack || function () {
            };
        let url = domain + '/baseLabel' + '/' + '2';
        $.when($.ajax({
            url: url
        })).then(function (data) {
            labelList = data.lableList;
            callBack(data.lableList);
        }.bind(this)).done(function (data) {
            //console.log(2);
        }).fail(function (data) {
            //console.log(3);
        });
    }

    resetStrcture() {
        var selectedlist = this.props.element.chargeTag;	//todo 收费标签json数组列表 {tagname}选中
        if (this.props.element.customlabel) {
            var customlabel = JSON.parse(this.props.element.customlabel);
        }

        var add_label_list = this.rootEl.find('.add_label_list ul li');
        /*如果回填的数据拿到 并且初始数据添加到页面*/
        if (selectedlist&&JSON.parse(selectedlist)[0] && add_label_list[0]) {
            /*如果拿到数据关闭初始化开关*/
            this.isselectedlist = true;
            //this.rootEl.find('.add_label_list').show();
            this.rootEl.find(".add-label").toggleClass("active");
            if (this.rootEl.find(".add-label").hasClass("active")) {
                this.rootEl.find(".add-show span").text("点击收起");
            } else {
                this.rootEl.find(".add-show span").text("点击展开");
            }
            JSON.parse(selectedlist).map(function (name, index) {
                for (var i = 0, k; k = add_label_list[i]; i++) {
                    var current = this.rootEl.find(k).find('span').html();
                    if (current == name.labelName) {
                        this.rootEl.find(k).find('span').parent().addClass('active');
                    }
                }
            }.bind(this));

            /*开始算钱*/
            var arrCurrent = this.rootEl.find('.add_label_list ul li.active');
            var countPrice = 0;
            for (var i = 0, k; k = arrCurrent[i]; i++) {
                var onlyPrice = this.rootEl.find(k).attr('title') * 1;
                countPrice += onlyPrice;
            }

            this.rootEl.find('.label_list-title .price').html(countPrice.toFixed(2));
            this.setState({activeprice:countPrice});
            //debugger;
            var value = $('.money span.size').html();
            if (/\./.test(value)) {
                var price = value.split('.');
                $('.money span.size').html((price[0] * 1 + countPrice * 1) + '.' + price[1]);
            }
//TODO ---------自定义标签 customlabel json数组   {tagname，price}
            /*自定义标签*/
            if (!Array.isArray(customlabel))return;

            for (var i = 0; i<customlabel.length; i++) {
                    var diylabel = '<div class="diylabel"><span>标签名：</span><input type="text" value="' + customlabel[i].tagname + '" maxLength="20" placeholder="输入自定义标签名，最多可输入20个字"/><span class="close"></span></div>';
                    this.rootEl.find(".diylabel_box").append(diylabel);
                    this.setState({diylabellength: this.rootEl.find(".diylabel").length});
            }

            $('.activelength').html($('.add_label_list ul li.active').length);
            ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);

        }
    }

    componentDidUpdate() {
        if (!this.isselectedlist) {
            //this.props.isselectedlist = true;
            this.resetStrcture();
        }
    }
    render() {
        return (
            <div>
                <p className="color">请选择需要的标签，标签即成单信息字段</p>
                <div className="label-box">
                    <p className="label-title">免费标签</p>
                    <div className="label-list">
                        <ul>{this.state.freelabelHtml}</ul>
                    </div>
                </div>
                <div className="add-label">
                    <div className="label_list-title"><span>付费标签</span><span>已选择：&nbsp;&nbsp;<span
                        className="activelength">{this.state.activelength}</span>&nbsp;&nbsp;个</span><span>单价：&emsp;
                        +<span className="price">{this.state.activeprice.toFixed(2)}</span>&nbsp;&nbsp;元</span><span
                        className="add-show">点击展开<i></i></span></div>
                    <div className="add_label_list">
                        <ul>{this.state.chargelabelHtml}</ul>
                    </div>
                </div>
                <div className="diylabel_box">
                </div>
                <div className="label_add">
                    <button type="button">
                        <i className="add"></i><span>添加标签</span>
                    </button>
                    <span>添加自定义标签，已添加{this.state.diylabellength}个；客服会在一个工作日内与您确认具体费用</span>
                    <p className="error">最多可添加&nbsp;20&nbsp;条自定义标签</p>
                </div>
            </div>
        );
    }
}

/*基本信息*/
class EssentialInformation extends React.Component {
    constructor(props) {
        super(props);
        this.init();
        this.state = {
            descriptionDemandLength: 0
        }
    }

    init() {
        this.rootEl = React.rootEl.find(".form_col5>.main");
        this.isFJ();
    }

    componentDidMount() {
        this.upload();
        this.form_date();
        this.inputsize();
        // this.setState({labelHtml:this.createLable()});

        /*回填描述*/
        if (this.props.information) {
            var information = this.props.information;
            var demandname = information.demandname;//需求名   线下-。。。
            var demanddescription = information.demanddescription;//需求描述
            var begintime = information.begintime;//开始时间
            var endtime = information.endtime;	//结束时间
            var beginage = information.beginage;	//开始年龄
            var endage = information.endage;		//结束年龄

            var brandname = isNull(sessionStorage.getItem("brandname")) || sessionStorage.getItem("trusteeship") == 1 ? "" : sessionStorage.getItem("brandname") + "-";
            $('.ordername').html(demandname);
            //console.log(information);

            $('.descriptionDemand').val(demanddescription);
            $('.form_date.start_date').val();
            $('.form_date.end_date').val();


            /*modoel of right*/
            if (beginage || endage) {
                $('.target-population').html(beginage + '-' + endage + '周岁');
            }
            $('.startDate').html(begintime);
            $('.endDate').html(endtime);
            $('.context-explain .industry').html(demandname);

        }
        /*
         if(this.props.discrible){
         var discrible = this.props.discrible.discrible;
         $('.descriptionDemand').val(discrible);
         var ordernamecurnnt =   $('.ordername').html();

         var finmae = JSON.parse(newDandData).industry.item.finmae;
         $('.ordername').html(ordernamecurnnt+finmae);
         //debugger;
         //selected
         }
         */
        //debugger;
    }

    isFJ() {
        this.rootEl.on("change", "input[name=isFJ]", function () {
            this.rootEl.find(".radio_fj").toggle();
        }.bind(this));
        this.rootEl.on("change", "input[name=isFZ]", function () {
            this.rootEl.find(".radio_fz").toggle();
        }.bind(this));
    }

    upload() {
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
                    {extensions: "ppt,pptx,pdf,doc,docx"}
                ],
                max_file_size: '100mb', //最大只能上传10mb的文件
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
                        $('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0, 6) + /\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
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
                        file1 = f1;
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
    }

    form_date() {
        var newDate = new Date();
        var t = newDate.toJSON();
        this.rootEl.find(".start_date").datetimepicker({
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
            $(".start_date").datetimepicker("setEndDate", $(".end_date").val());
        }).on("change", function (ev) {
            $(".startDate").html($(".start_date").val());
            $(".start_date").blur();
        }).on("blur", function (ev) {
            if (isNull($(".start_date").val())) {
                $(this).parent().find("p.error").eq(0).show();
            } else {
                $(this).parent().find("p.error").eq(0).hide();
            }
        });
        this.rootEl.find(".end_date").datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
        }).on("click", function (ev) {
            $(".end_date").datetimepicker("setStartDate", $(".start_date").val());
        }).on("change", function (ev) {
            $(".endDate").html($(".end_date").val());
            $(".end_date").blur();
        }).on("blur", function (ev) {
            if (isNull($(".end_date").val())) {
                $(this).parent().find("p.error").eq(1).show();
            } else {
                $(this).parent().find("p.error").eq(1).hide();
            }
        });
    }

    inputsize() {
        this.rootEl.find(".descriptionDemand").on("input", function (ev) {
            this.setState({descriptionDemandLength: $(ev.currentTarget).val().length});
        }.bind(this));
        this.rootEl.find(".pleader").on("blur", function (ev) {
            if (isNull($(".pleader").val())) {
                $(this).parent().parent().find("p.error").eq(0).show();
            } else {
                $(this).parent().parent().find("p.error").eq(0).hide();
            }
        });
        this.rootEl.find(".pphone").on("blur", function (ev) {
            if (isNull($(".pphone").val())) {
                $(this).parent().parent().find("p.error").eq(1).show();
            } else {
                $(this).parent().parent().find("p.error").eq(1).hide();
            }
        });
    }

    render() {

        return (
            <div className="messsage-box">
                <div className="messsage-title">基本信息：</div>
                <table className="messsage-table">
                    <tbody>
                    <tr>
                        <td>需求名称：</td>
                        <td className="ordername">{ordername()}</td>
                    </tr>
                    <tr>
                        <td style={{"verticalAlign": "top", "lineHeight": "30px"}}>需求描述：</td>
                        <td><textarea maxLength="150" placeholder="输入需求的备注的信息，如无特殊说明，可以不填" className="descriptionDemand"
                                      required></textarea><p className="messsage-area"><span
                            className="length">还可以输入 <span
                            className="size2">{150 - this.state.descriptionDemandLength}</span> 个字</span></p></td>
                    </tr>
                    <tr>
                        <td style={{"verticalAlign": "top", "lineHeight": "30px"}}>产品介绍：</td>
                        <td>
                            <p className="file_box_p">是否上传产品介绍附件：<label>
                                <input type="radio" name="isFJ" required/>是</label><label>
                                <input type="radio" name="isFJ" defaultChecked required/>否</label></p>
                            <div className="radio_fj">
                                <p>附件支持ppt、pdf、doc等格式文件，大小不可超过100MB</p>
                                <div className="file_box">
                                    <button type="button" className="btn" id="selectfiles">选择文件</button>
                                    <div className="ossfile"></div>
                                    <button type="button" className="btn" id="postfiles">开始上传</button>
                                    <p className="error file">请上传产品介绍附件</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="date-title"><span>选择日期：</span></td>
                        <td className="date-p">
                            <div className="data-box">
                                <input autoComplete="off" placeholder="开始日期" type="text"
                                       className="form_date start_date" readOnly/><i
                                className="date_icon"></i><span>~</span>
                                <input autoComplete="off" placeholder="开始日期" type="text" className="form_date end_date"
                                       readOnly/><i className="date_icon"></i>
                                <p className="error time">请填写开始日期</p><p className="error time">请填写结束日期</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style={{"verticalAlign": "top", "lineHeight": "30px"}}>项目负责人：</td>
                        <td>
                            <p style={{"marginBottom": "20px"}}>是否需要其他人负责此需求：<label><input type="radio" name="isFZ"
                                                                                           required/>是</label><label><input
                                type="radio" name="isFZ" defaultChecked required/>否</label></p>
                            <div className="radio_fz">
                                <div>
                                    <span>负责人姓名：</span>
                                    <input type="text" style={{"width": "162px"}} className="pleader"/>
                                    <p className="error fz">请填写负责人姓名</p>
                                </div>
                                <br/>
                                <div>
                                    <span>负责人电话：</span>

                                    <input autoComplete="off" type="text" style={{"width": "162px"}}
                                           className="pphone"/>
                                    <p className="error fz">请填写负责人电话</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
;

class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.init();
    }

    init() {
        this.rootEl = $(".demend_right .right");
    }

    componentDidMount() {
        this.bubble();
        this.progress_speed_show();
        this.save();
        if (newDandData) {
            //debugger;
            var finmae = JSON.parse(newDandData).industry.item.finmae;
            var price = JSON.parse(newDandData).countPrice
            var twolevindustry = JSON.parse(newDandData).industry.twolevindustry;

            $('.demend_right span.industry').html(twolevindustry + '-' + finmae);
            $($('.areaList1 td')[2]).html(price);
            $($('.areaList1 td')[3]).html(price);
        }
    }

    bubble() {
        this.rootEl.find(".bubble-hover").click(function () {
            $(this).next().css("display", "inline-block");
        }).mouseout(function () {
            $(this).next().hide();
        });
    }

    progress_speed_show() {
        /*开始审核代码*/
        this.rootEl.find(".progress_speed_show").click(function () {
            //debugger;
            //debugger;
            if (!$(".industry.select.area.js_area").val()) {
                //debugger;
                $(".demend_left .industry p.error").html("请至少选择一项行业").show();
            } else {
                $(".demend_left .industry p.error").hide();
            }

            if (isNull($(".demend_right .target-population").text())) {
                $(".crowd p.error").show();
            } else {
                $(".crowd p.error").hide();
            }
            if ($(".radio_fj").is(":visible") && isNull(file1)) {
                $(".radio_fj").find("p.error").show();
            } else {
                $(".radio_fj").find("p.error").hide();
            }
            $("input:visible,textarea").blur();

            /*使用这个可以一次采用*/
            if ($("p.error:visible").length != 0) {
                return false;
            } else {
                $(".progress_speed").show();
            }
        });
    }

    /**
     * 草稿箱
     */
    save() {
        this.rootEl.find("button.btn_tj2").click(function () {
            var areaCityList = [];//城市list
            var labelActive = [];//收费标签list
            var customlabel = [];//自定义标签List
            var demandpricetol = $(".cost .money .size").text();//总价
            var releasenum = 0;
            var pleader = $("input.pleader:visible").val() === undefined ? "" : $("input.pleader:visible").val();
            var pphone = $("input.pphone:visible").val() === undefined ? "" : $("input.pphone:visible").val();
            var productaccessories = $(".radio_fj").is(":visible") ? file1 : "";
            $(".cost tr[class^=areaList]").each(function (i) {
                releasenum += Number($(this).find("td").eq(1).text());
                areaCityList[i] = {
                    "target": $(this).find("td").eq(0).text(),
                    "releasenum": $(this).find("td").eq(1).text(),
                    "price": $(this).find("td").eq(2).text(),
                    "totalprice": $(this).find("td").eq(3).text(),
                    "remark": "",
                    "auto_calc": ""
                };
            });
            $(".form_col4 .add_label_list li").each(function (i) {
                if ($(this).hasClass("active")) {
                    labelActive.push(labelList[$(this).index()]);
                }
            });
            $(".form_col4 .diylabel").each(function (i) {
                var list;
                if ($(this).find("input").val().replace(/\s+/g, "") != "") {
                    list = {
                        tagname: $(this).find("input").val(),
                        price: "0"
                    }
                    customlabel.push(list);

                }
            });

            var newIndustryId = $('.industry.select.area.js_area').attr('data-nfiid');


            //todo  更改  star

            var url = domain137 + `/quality/adddemand/${sessionStorage.getItem("jfuid")}/0?industryId=${newIndustryId || ""}`;
            var urlDraft = domain137 + `/quality/drafts/${location.hash.substr(1)}/0?industryId=${newIndustryId || ""}`;
            var typeDraft = "patch";
            var type = "get";
            var choose = location.hash.substr(0,4) == "copy";

            var data = {
                createTime:createTime,
                "demandComment": "",//"string,需求备注",
                "releaseQuantity": releasenum,//"integer,需求发布量",
                "areaAndDemandQuantity": JSON.stringify(areaCityList),// "string,原子需求[{\"target\":\"目标区域\",\"releasenum\":\"发布数量\",\"price\":\"单价\",\"totalprice\":\"总价\",\"remark\":\"备注\",\"auto_calc\":\"单价设定方式 1-根据标签计算 2-手动设定\"}]",
                "endTime": $("input.end_date").val(),//"string,结束时间",
                "demandName": $("td.ordername").text(),//"string,需求名",
                "projectLeader": pleader,// "string,项目负责人",
                "chargeTag": JSON.stringify(labelActive),//"string,收费标签",
                "sales": "",//"string,销售线索附件",
                "productPresentation": productaccessories,// "string,产品介绍附件",
                "dataCleaningUnitPrice": "",//"double,数据加工单价",
                "basicUnitPrice": $(".leaval-box").children("input").data("value") || 0,//"double,基础单价",//TODO 行业单价
                "productIntroduce": "",// "string,产品介绍",
                "customerList": "",//"string,目标客户名单附件path",
                "demandDesc": $(".descriptionDemand").val(),//"string,需求描述 可变长度，最多65535个字符",
                "totalPrice": demandpricetol,// "double,需求总价",
                "targetChannel": "",//"integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
                "favorableMode": "",//"integer,优惠方式 1-无优惠 2-免手续费",
                "beginTime": $("input.start_date").val(),//"string,开始时间",
                "serviceType": "1",//"string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
                "industryXifen": ordername,//"string,行业细分",//todo 3级
                "targetPopulation": $(".target-population").html(),//"string,目标人群",
                "speechcraft": "",//"string,话术附件",
                "targetAgeTo": $('.people-yang input.last').val(),//"integer,目标区域人群年龄 to",
                "projectLeaderPhone": pphone,//"string,项目负责人电话",
                "customTag": customlabel.length != 0 ? JSON.stringify(customlabel) : "",//"string,自定义标签",
                "targetAgeFrom": $('.people-yang input.first').val(),//"integer,目标区域人群年龄 from"
            }
            data = JSON.stringify(data);
            $.ajax({
                type: choose ? type : typeDraft,
                url: choose ? url : urlDraft,
                data: data,
                contentType: 'application/json',
                success: function (result) {
                    if (result.msg == "success") {
                        if (choose) {
                            sessionStorage.removeItem("copy")
                        }
                        sessionStorage.setItem("cgid", result.data.id);
                        window.location.href = "customerDemandDraftDone2.html";
                    }
                }
            })

        }.bind(this));
    }

    render() {
        var data = this.props.data;
        var dom = [];
        var total = 0;
        var price = 0;
        for (var name in data) {
            if (!(isNull(data[name].area) || isNull(data[name].size))) {
                total = Number(data[name].total) + total;
                dom.push(<tr className={name} key={total}>
                    <td title={data[name].areaTitle}>{data[name].area}</td>
                    <td>{data[name].size}</td>
                    <td>{data[name].price}</td>
                    <td>{(data[name].total).toFixed(2)}</td>
                </tr>);
            } else {
                price = data[name].price;
            }
        }
        return (
            <div className="context-explain package package1">
                <div>
                    <ul>
                        <li><label>业务类型：</label><span className="business-types">销售线索挖掘</span></li>
                        <li><label>行业：</label><span className="industry">{}</span></li>
                        <li><label>目标人群：</label><span className="target-population"></span></li>
                        <li><label>开始日期：</label><span className="startDate"></span></li>
                        <li><label>结束日期：</label><span className="endDate"></span></li>
                    </ul>
                    <table className="cost">
                        <thead>
                        <tr>
                            <th width="80px">目标区域</th>
                            <th width="50px">数量</th>
                            <th width="50px">单价</th>
                            <th width="80px">总价</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dom}
                        <tr>
                            <th>总金额：</th>
                        </tr>
                        <tr>
                            <td colSpan="4"><span className="money">
															 ¥<span className="size">
															 {total == 0 ? price : total.toFixed(2)}
															 </span></span>
                            </td>
                        </tr>
                        <tr className="hide">
                            <th>结算模式：</th>
                            <th colSpan="3">查重后质检<i className="bubble-hover">?</i>
                                <div className="bubble">与甲方数据查重后进行录音的质量检验</div>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                    <button type="button" className="submit btn progress_speed_show">提交审核</button>
                    <button type="button" className="drafts btn btn_tj2">加入草稿箱</button>
                </div>
            </div>
        )
    }
}


class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.init();
    }

    init() {
        this.rootEl = $(".demend_left .progress_speed");
    }

    componentDidMount() {
        this.close();
        this.submit();
        this.scroll();
    }

    close() {
        this.rootEl.find(".button_close,.close").click(function () {
            this.rootEl.hide();
        }.bind(this));
    }

    scroll() {
        topStick();
    }

    /**
     * 提交审核
     */
    submit() {
        /*提交审核 确定按钮*/
        this.rootEl.find("button.btn_tj").click(function () {
            var areaCityList = [];//城市list
            var labelActive = [];//收费标签list
            var customlabel = [];//自定义标签List
            var demandpricetol = $(".cost .money .size").text();//总价
            var releasenum = 0;
            var pleader = $("input.pleader:visible").val() === undefined ? "" : $("input.pleader:visible").val();
            var pphone = $("input.pphone:visible").val() === undefined ? "" : $("input.pphone:visible").val();
            var productaccessories = $(".radio_fj").is(":visible") ? file1 : "";
            $(".cost tr[class^=areaList]").each(function (i) {
                releasenum += Number($(this).find("td").eq(1).text());
                areaCityList[i] = {
                    "target": $(this).find("td").eq(0).text(),
                    "releasenum": $(this).find("td").eq(1).text(),
                    "price": $(this).find("td").eq(2).text(),
                    "totalprice": $(this).find("td").eq(3).text(),
                    "remark": "",
                    "auto_calc": ""
                };
            });
            $(".form_col4 .add_label_list li").each(function (i) {
                if ($(this).hasClass("active")) {
                    labelActive.push(labelList[$(this).index()]);
                }
            });
            $(".form_col4 .diylabel").each(function (i) {
                var list;
                if ($(this).find("input").val().replace(/\s+/g, "") != "") {
                    list = {
                        tagname: $(this).find("input").val(),
                        price: "0"
                    }
                    customlabel.push(list);

                }
            });

            var newIndustryId = $('.industry.select.area.js_area').attr('data-nfiid');

            //todo  更改  star
            var url = `${domain137}/quality/adddemand/${sessionStorage.getItem("jfuid")}/1?industryId=${newIndustryId || ""}`;
            var urlDraft = `${domain137}/quality/drafts/${location.hash.substr(1)}/1?industryId=${newIndustryId || ""}`;
            var typeDraft = "patch";
            var type = "get";
            var choose = location.hash.substr(0,4) == "copy"
            var data = {
                createTime:createTime,
                "demandComment": "",//"string,需求备注",
                "releaseQuantity": releasenum,//"integer,需求发布量",
                "areaAndDemandQuantity": JSON.stringify(areaCityList),// "string,原子需求[{\"target\":\"目标区域\",\"releasenum\":\"发布数量\",\"price\":\"单价\",\"totalprice\":\"总价\",\"remark\":\"备注\",\"auto_calc\":\"单价设定方式 1-根据标签计算 2-手动设定\"}]",
                "endTime": $("input.end_date").val(),//"string,结束时间",
                "demandName": $("td.ordername").text(),//"string,需求名",
                "projectLeader": pleader,// "string,项目负责人",
                "chargeTag": JSON.stringify(labelActive),//"string,收费标签",
                "sales": "",//"string,销售线索附件",
                "productPresentation": productaccessories,// "string,产品介绍附件",
                "dataCleaningUnitPrice": "",//"double,数据加工单价",
                "basicUnitPrice": $(".leaval-box").children("input").data("value") || 0,//"double,基础单价",//TODO 行业单价
                "productIntroduce": "",// "string,产品介绍",
                "customerList": "",//"string,目标客户名单附件path",
                "demandDesc": $(".descriptionDemand").val(),//"string,需求描述 可变长度，最多65535个字符",
                "totalPrice": demandpricetol,// "double,需求总价",
                "targetChannel": "",//"integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
                "favorableMode": "",//"integer,优惠方式 1-无优惠 2-免手续费",
                "beginTime": $("input.start_date").val(),//"string,开始时间",
                "serviceType": "1",//"string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
                "industryXifen": ordername,//"string,行业细分",//todo 3级
                "targetPopulation": $(".target-population").html(),//"string,目标人群",
                "speechcraft": "",//"string,话术附件",
                "targetAgeTo": $('.people-yang input.last').val(),//"integer,目标区域人群年龄 to",
                "projectLeaderPhone": pphone,//"string,项目负责人电话",
                "customTag": customlabel.length != 0 ? JSON.stringify(customlabel) : "",//"string,自定义标签",
                "targetAgeFrom": $('.people-yang input.first').val(),//"integer,目标区域人群年龄 from"
            }
            data = JSON.stringify(data);
            $.ajax({
                type: choose ? type : typeDraft,
                url: choose ? url : urlDraft,
                data: data,
                contentType: 'application/json',
                success: function (result) {
                    if (result.msg == "success") {
                        if (choose) {
                            sessionStorage.removeItem("copy")
                        }
                        sessionStorage.setItem("cgid", result.id);
                        window.location.href = "customerDemandDone.html";
                    }
                },
                error: function (err) {
                    console.log(err);
                }

            })


            //todo 更改  end

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

/*采集页面所有的数据*/
function areaList() {
    var data = {};
    $("div.form_col4 div.areaList").each(function (i) {
        var name = $(this).attr("class") + (i + 1);
        var area = $(this).find(".js_area").val();
        var areaTitle = $(this).find(".js_area").attr("title");
        var size = $(this).find("input.size").val();

        var industryPrice = $('input.industry.select.area.js_area').attr('data-value');

        var ageValue = $('.people-yang span.yuan').attr('data-value') * 1;
        //debugger;


        /*年龄算价系统*/
        var firstValue = $('.people-yang input.first').val() * 1;
        var lastValue = $('.people-yang input.last').val() * 1;
        var firstCheck = $('.people-yang input.first').data('check');
        var lststCheck = $('.people-yang input.last').data('check');
        //var lastValue = $('.people-yang input.last').val()*1;

        if (firstCheck && lststCheck) {
            var industryValue = $('.industry.select.area.js_area').attr('data-value') * 1;

            /*两个都合格了以后*/

            /*如果前面的小于等于 增加30%*/

            if ((lastValue - firstValue) < 5) {
                $('.people-yang span.yuan').attr('data-value', (industryValue / 10 * 1.5).toFixed(2));
                $('.people-yang span.yuan').html('+' + (industryValue / 10 * 1.5).toFixed(2) + '元');
            } else {
                $('.people-yang span.yuan').attr('data-value', '0');
                $('.people-yang span.yuan').html('+' + '0.00' + '元');
            }
        }
        /*年龄算价系统*/

        //console.log(industryPrice);
        var price = (Number(ageValue) + Number($(this).find("span.price").html()) + Number(industryPrice) + Number($(".label_list-title .price").html())).toFixed(2);

        //	var total=price*$(this).find("input.size").val();
        var total = price * 1;
      //  console.log($(this).find("input.size").val() + 'input.size');
        //	debugger;
        //var total=price*1;
        data[name] = [];
        data[name].area = area;
        data[name].areaTitle = areaTitle;
        data[name].size = size;
        data[name].price = price;
        data[name].total = total * size;
        //data[name].countTotal=price;
        //console.log(price);
        //debugger;
        //data[name].ageValue = '0';
    });
    return data;
}


function ordername() {
    var brandname = isNull(sessionStorage.getItem("brandname")) || sessionStorage.getItem("trusteeship") == 1 ? "" : sessionStorage.getItem("brandname") + "-";
    var twolevindustry = $(".controlPub.selected").index() == 0 ? "线下-" : "线上-";
    //industry select area js_area
    var threelevindustry = $('input.industry.select.area.js_area').attr('data-txt'); //$(".demend_right .industry").text();
    //debugger;
    //console.log(twolevindustry+threelevindustry+'====twolevindustry');
    // console.log(threelevindustry);
    $(".demend_right .industry").html(twolevindustry + threelevindustry);
    //debugger;
    //debugger;
    $(".ordername").html(brandname + twolevindustry + threelevindustry);

    return brandname + twolevindustry + threelevindustry;
}

/*拿到以后立刻清除*/
sessionStorage.removeItem("newDandData");


var resetStrcture = function (cb) {
    var callback = cb || function () {
        };
    // var currentId = location.hash.substring(1);
    // var url = domain + '/' + currentId + '/getDetailHfp';
    var url = `${domain137}/quality/demanddetail/${location.hash.slice(1).substr(0,4)=="copy"?location.hash.slice(1).substr(4):location.hash.slice(1)}`;
    $.ajax({
        url: url,
        type: "get",
        success: function (result) {
            if (result.code == "0") {
                createTime=result.demand.createTime;
                console.log(result,111166);
                callback(result)
            }
        },
        error: function (err) {
            "use strict";
            console.log(err);
        }
    })
}


resetStrcture(function (data) {
    ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);//右侧部分

    ReactDOM.render(<Yewu industry={data.demand} name="1"/>, React.rootEl.find(".form_col1>.main")[0]);//选择行业部分

    ReactDOM.render(<Mbkh targethumen={data.demand} name='1'/>, React.rootEl.find(".form_col2>.main")[0]);

    ReactDOM.render(<AreaAndRequirement area={data.demand} name='1'/>, React.rootEl.find(".form_col3>.main")[0]);

    ReactDOM.render(<SaleTemplate element={data.demand} name='1'/>, React.rootEl.find(".form_col4>.main").eq(1)[0]);

    ReactDOM.render(<EssentialInformation information={data.demand}
                                          name='1'/>, React.rootEl.find(".form_col5>.main")[0]);

    ReactDOM.render(<Preview name='1' data={areaList()}/>, $(".demend_right .right")[0]);
    ReactDOM.render(<Progress name='1'/>, $(".demend_left .progress_speed")[0]);

    window.onload = function () {
        $("td.industry .btn.selected").click();
    }
});





				