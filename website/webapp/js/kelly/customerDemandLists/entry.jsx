import { Pagination } from 'antd';
$(".loading_cover").hide();
$.rootEl = $('#search_reslut')[0]; //数据列表
React.rootElPage = $('#page');
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceType: ["", "销售线索挖掘", "数据加工", ""],
            currentPage: 1, //当前的page
            Alldata: [], //所有数据
            AllMainHtml: '', //所有列表内容html
            pageCount: '', //总页数
            search: '', //搜索的  需求内容,起止时间
            indexSchedule: 1,
            indexPage: 2,
        };
        this.init();
    }

    init() {
        this.rootEl = $('#search_reslut');
        this.pageEl = $('#page');
    }

    componentDidMount() {
        $("style[type='text/css']").eq(0).remove(); //TODO 测试时移除antd基本样式
        /*拿到并跟新数据*/
        // this.getAllPageData({currentPage:1});  //TODO 获取所有的数据
        this.getAllPageData({}); //TODO 获取所有的数据
        /*获取当前页*/
        //this.getCurrentPage();    //初始化翻页函数

        /*状态处理 为了异常模块写的if*/
        if (this.props.getCurrentSate) {
            //点击切换订单状态
            this.props.getCurrentSate(function(data) {
                //console.log(data);
                this.getAllPageData({
                    par: data
                }); //TODO 根据传入的订单状态，获取数据
            }.bind(this));
        }
        this.questionsEvent(); //初始化，点击问号时显示提示内容，点击其他地方时隐藏

    }

    /**
     * 获取数据   obj可为currentPage; search条件
     * @param obj
     */
    getAllPageData(obj) {
        this.getAllData(function(data) {
            this.setState({
                Alldata: data, //获取的数据
                currentPage: 1
            });
            // this.setState({pageCount:data.pageCount});//获取的总页数
            this.setState({
                AllMainHtml: this.createMainHtml()
            });
            /*处理onclick*/
            //console.log('3333333333333');
            var GaugeMeter = $('.GaugeMeter canvas');

            // this.pageEl.html(data.ajaxPageStr); //翻页部分的html
            //debugger;
            for (var i = 0; i < GaugeMeter.length; i++) {
                animationCanvas(GaugeMeter[i]);
            //$(GaugeMeter[i]).gaugeMeter();
            }
        }.bind(this), obj);
    }

    //添加翻页的点击事件
    getCurrentPage() {
        /*上页 下页 当前页*/
        this.pageEl.on('click', '#page a', function(ev) {
            var currentPageNuber;
            var currentTag = this.pageEl.find(ev.currentTarget).html(); //获取被点击的页数
            if (currentTag == '下页') {
                currentPageNuber = this.pageEl.find('a.selected').html() * 1;
                currentPageNuber += 1;
            }
            if (currentTag == '上页') {
                currentPageNuber = this.pageEl.find('a.selected').html() * 1;
                currentPageNuber -= 1;
            }
            if (/\d+/g.test(currentTag * 1)) {
                currentPageNuber = this.pageEl.find(ev.currentTarget).html();
            }

            //TODO 根据页数获取
            this.getAllPageData({
                currentPage: currentPageNuber
            });


            $("body,html").stop(false, true).animate({
                "scrollTop": 0
            }, 0);
        }.bind(this));
        /*go*/
        this.pageEl.on('click', 'button', function(ev) {
            var currentPageNuber = this.pageEl.find('#toGoPage').val();
            if (!currentPageNuber) {
                currentPageNuber = 1;
                this.pageEl.find('#toGoPage').val(currentPageNuber);
            }
            if (currentPageNuber * 1 > this.state.pageCount) {
                currentPageNuber = this.state.pageCount;
                this.pageEl.find('#toGoPage').val(currentPageNuber);
            }
            this.getAllPageData({
                currentPage: currentPageNuber
            });
        }.bind(this));
    }

    //搜索内容变化重新获取数据
    componentWillReceiveProps(nextProps) {
        this.getAllPageData(nextProps.search);
    }

    /**
     * 获取当前页的数据
     * @param callBack
     * @param obj
     */
    getAllData(callBack, obj1) {
        var obj = Object.assign({}, obj1);
        callBack = callBack || function() {};
        /*处理异常模块*/
        if (this.props.state) {
            obj.par = this.props.state;
        } else {
            //par订单状态： 不填 全部 1审核 2进行 3结算 4已完成 6异常需求
            obj.par = $(".search-box li.selected").attr("data-state") || ""; //获取订单状态类型
        }
        // var url = domain + '/getHfps';
        var url;
        var jfuid = $.sessionStorage('jfuid');

        if (obj.par == 5) {
            //异常需求
            url = `${domain137}/quality/exceptionlist?jfuid=${jfuid || ""}&demandName=${obj.ycdemandname || ""}&startTime=${obj.startDate || ""}&endTime=${obj.endDate || ""}`

        } else {
            //列表需求
            url = `${domain137}/quality/demandlist?jfuid=${jfuid || ""}&demandName=${obj.ycdemandname || ""}&demandState=${obj.par || ""}&startTime=${obj.startDate || ""}&endTime=${obj.endDate || ""}`
        }
        /*jfuid(用户id) par(需求项) currentPage(当前页)*/
        //TODO 如果par==6 为异常需求

        $.when($.ajax({
            type: "get",
            url: url
        })).then(function(result) {
            if (result.msg = "success") {
                callBack(result.data);
            }

        }).done(function() {
            //debugger
        }).fail(function() {
            //debugger
        });
    }

    /**
     * 是否显示右上角订单状态，以及根据状态码转换对应的状态值
     * @param state
     * @param pause
     * @returns {{}}
     */
    isReview(state) {
        var dataState = {};
        if (state == '5') {
            dataState.pause = true;
            dataState.state = '驳回';
            return dataState;
        } else {
            switch (Number(state)) {
            case 1:
                dataState.class = 1;
                dataState.state = '审核中';
                return dataState;
            case 2:
                dataState.class = 'ing-blue';
                dataState.state = '进行中';
                return dataState;
            case 3:
                dataState.class = 'ing-red';
                dataState.state = '结算中';
                return dataState;
            case 4:
                dataState.class = 'done';
                dataState.state = '已完成';
                return dataState;
            default:
                dataState.class = '2';
                dataState.state = '无聊中';
                return dataState;
            }
        }
    }

    /**
     * 判断是否是异常需求，如果是返回审核状态，不是返回完成进度
     * @param obj
     * @returns {XML}
     */
    changeschedule(obj) {

        if (obj.pause && obj.pause.pause) {
            return (
                <div className="date">
                    <p>审核状态</p>
                    <h3 className="color-red">{obj.pause.state}</h3>
                </div>)
        } else {
            // data-percent完成量
            var contHtml = (<div className="GaugeMeter" data-percent={obj.checckSchedule}
            data-append="%" data-size="150" data-style="Semi" data-width="5" data-color="#ff9429">
                <canvas width="150" height="150"></canvas>
                <span className="round"></span>
                <span className="covered"></span>
            </div>);
            return (<div className={"schedule " + obj.releasenum}>
                {contHtml}
                <span className="data">{obj.checckSchedule}<i>%</i></span>
                <span className="start">0</span>
                <span className="descript">完成进度</span>
                <span className="end">{obj.releasenum}</span>
            </div>);
        }
    }


    checckSchedule(data) {
        if (data > 100) {
            return 100;
        }
        if (0 <= data && data <= 100) {
            return data;
        }
        return 0;
    }

    questionsEvent() {
        $(document).on('click', 'body', function(ev) {
            var oEvent = ev || event;
            var target = oEvent.target || oEvent.srcElement;
            if (target.className.indexOf('questions type') > -1) {
                this.rootEl.find(target).parent().addClass('selected');
                this.rootEl.find(target).addClass('selected');
                this.rootEl.find('.text_content').hide();
                this.rootEl.find(target).next().show();
                return;
            } else {
                this.rootEl.find('.questions').parent().removeClass('selected');
                this.rootEl.find('.questions').removeClass('selected');
                this.rootEl.find('.text_content').hide();
            }

            if (target.className.indexOf('questions mode') > -1) {
                this.rootEl.find(target).parent().addClass('selected');
                this.rootEl.find(target).addClass('selected');
                this.rootEl.find('.text_content').hide();
                this.rootEl.find(target).next().show();
            } else {
                this.rootEl.find('.questions').parent().removeClass('selected');
                this.rootEl.find('.questions').removeClass('selected');
                this.rootEl.find('.text_content').hide();
            }
        }.bind(this));
    }

    payPattern(data) {
        switch (data) {
        case '查重后质检':
            return '与甲方数据查重后进行录音的质量检验';
        case '回访电话接通数':
            return '甲方回访后的接通数量，剔除无效与未接通数（>4次）';
        case '数据条目':
            return '按实际提交数据条目数乘以单价进行结算';
        case '按提交线索数量结算':
            return '按提交线索数量结算';
        default:
            return '暂无';
        }
    }

    /**
     * 传入不同的业务类型，返回不同的详情页链接
     * @param data
     * @returns {*}
     */
    servicetype(data) {
        //servicetype 销售线索挖掘 2 数据 3人工客服
        if (data.servicetype == "2") {
            // return 'dataMining.html#';
            return 'data-mining.html#';
        }

        if (data.servicetype == "1" && data.industry == '教育培训') {
            // if (data.twolevindustry == "其他") {
            //     return 'customerMining.html#';
            // } else {
            // return 'customer_mining_normal.html#';
            return 'customerminingnormal.html#';
        // }
        }
        // return 'customerMining_new.html#';
        return 'customerminingnew.html#';
    }

    /**
     * 根据数据渲染
     * @returns {XML}
     */
    createMainHtml() {

        // if (!this.state.Alldata)return;
        if (!this.state.Alldata[0]) {
            return (<div className="no-reslut">暂无数据！</div>);
        }
        return this.state.Alldata.slice((this.state.currentPage - 1) * 10, this.state.currentPage * 10).map(function(name, index) {
            var checckSchedule = this.checckSchedule(parseInt(name.finishnum / name.releasenum * 100));
            var pause;
            var changeschedule;
            if (this.props.state == '5') { //异常需求
                pause = this.isReview(name.fdstate);
            } else {
                var isReview = this.isReview(name.fdstate); //转换状态值，非异常 需求
            }
            if (pause) {
                changeschedule = this.changeschedule({
                    pause: pause
                }); //返回审核状态
            } else {
                changeschedule = this.changeschedule({
                    checckSchedule: checckSchedule,
                    releasenum: name.releasenum
                }); //返回cavans图形
            }
            // var payPattern = this.payPattern(name.paymentstandard);
            var servicetype = this.servicetype({
                servicetype: name.servicetype,
                industry: name.industry,
                twolevindustry: name.twolevindustry
            }); //根据类型不同，返回不同的链接，可跳转到对应的详情页

            return (<div className="reslut_box" key={index}>
                <div className="title">
                    <h3 title={name.demandname}>{name.demandname}</h3>
                    <ul>
                        <li className={"bg_green " + (name.twolevindustry != null ? '' : 'hide')}>{name.twolevindustry == "0" ? "线下" : "线上"}</li>
                        { /*name.twolevindustry 线上或线下 如果没值隐藏*/ }
                        <li className={"bg_blue1 " + (name.industry ? '' : 'hide')}>{name.industry}</li>
                        { /*发包类型 eg:教育培训..*/ }
                        <li className="cash" style={{position:"absolute",right:330,top:115}}><span>￥</span><span
                className="font24">{name.demandpricetol.toFixed(2)}</span></li>
                        { /*金额 .toFixed四舍五入取一定的位数*/ }
                    </ul>
                </div>

                <div className="bottom">
                    <div className="type">
                        <p>业务类型</p>
                        <h3>{this.state.serviceType[name.servicetype]} { /*eg:销售线索挖掘*/ }
                            <i><span className="questions type">?</span><span
                className="text_content">{(name.servicetype == '1') ? '对用户行为和特征进行分析，通过有效触达，挖掘意向客户' : '针对企业自有数据和需求，进行有效触达'}</span></i>
                        </h3>
                    </div>
                    <div className="mode hide">
                        { /*<p>结算模式</p>*/ }
                        { /*<h3>{name.paymentstandard}*/ }
                        { /*<i><span className="questions mode">?</span><span*/ }
                        { /*className="text_content">{payPattern}</span></i>*/ }
                        { /*</h3>*/ }
                    </div>

                    <div className="date">
                        <p>发布时间</p><h3>{name.createtime}</h3>
                    </div>
                    {changeschedule}
                    <div className="btn-box">
                        <a href={servicetype + name.pid}> { /*订单号*/ }
                            <button type="button" className="bg_blue">查看详情</button>
                        </a>
                    </div>
                </div>
                { /*右上角状态显示*/ }
                {pause ? '' : (<div className="tag">
                    <span>{isReview ? isReview.state : ''}</span>
                    <i className={isReview ? isReview.class : ''}></i>
                </div>)}
            </div>);
        }.bind(this));

    }

    /**
     * 点击页码的回调
     * @param page  改变后的页码
     * @param pageSize 吗，每页的条数
     */
    changePage(page, pageSize) {
        this.setState({
            currentPage: page
        }, function() {
            this.setState({
                AllMainHtml: this.createMainHtml()
            })
        })
    }

    render() {
        /*jfuid par currentPage*/
        return (<div>
            <div style={{
                minHeight: 622
            }}>
                {this.state.AllMainHtml}
            </div>
            <div style={{
                textAlign: "right",
                padding: "30px 12px"
            }}>
                <Pagination style={{
                fontSize: "18px"
            }} showQuickJumper
            showTotal={total => `共${Math.ceil(total / 10)}页,共 ${total} 条`} defaultCurrent={1}
            total={this.state.Alldata.length || 0} onChange={this.changePage.bind(this)}/>
            </div>
        </div>);
    }
}
class AbnormalRequire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
        this.init();
    }

    init() {
        this.rootEl = $('#search_reslut');
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            search: nextProps.search
        });
    }

    componentDidMount() {
        //debugger;
        /*加载插件*/
        this.props.setDate();
        this.rootEl.find('#ycstart_date').attr("readonly", "readonly");
        this.rootEl.find('#ycend_date').attr("readonly", "readonly");
    }

    render() {
        return (
            <div className="deman_hall_search demand-list abnormal">
                <div className="search-box abnormal">
                    <input type="text" placeholder="请输入需求名" className="demand-name" id="ycdemandname"/>
                    <div className="left">
                        <label>发布时间：</label>
                        <input type="text" className="form_date start_date" date-format="yyyy-mm-dd" readonly
            id="ycstart_date"/><i className="date_icon"></i>
                        <label>-</label>
                        <input type="text" className="form_date end_date" date-format="yyyy-mm-dd" readonly
            id="ycend_date"/><i className="date_icon"></i>
                        <button type="button" data-seach="abnormal" id="seach">确定</button>
                    </div>
                </div>

                <div className="search-result" id="search_reslut_abnormal">
                    <Main search={this.state.search} state="5"/>
                </div>
            </div>
        );
    }
}
class DraftRequire extends React.Component {
    constructor(props) {
        super(props);
        this.init();
        this.state = {
            DraftData: '',
            DraftHtml: ''
        };
    }

    init() {
        this.rootEl = $('#search_reslut');
    //par:7 草稿状态;
    }

    componentDidMount() {
        this.getDraftData(function(data) {
            this.setState({
                DraftData: data,
            });
            this.setState({
                DraftHtml: this.createDraftHtml(),
            });
        }.bind(this));
        /*删除本条信息并且跟新页面的margin-right value*/
        /**
         * 给每个草稿箱的删除按钮添加点击事件，点击时获取草稿箱号，草稿箱html，发送请求，成功后删除html,重新排列设定外边距
         */
        this.delDemandData(function() {
            var aDrafts = this.rootEl.find('.drafts_details');
            for (var i = 0; i < aDrafts.length; i++) {
                this.rootEl.find(aDrafts[i]).css({
                    'margin-right': '40px'
                });
                if ( ((i + 1) % 3 == 0) ) {
                    this.rootEl.find(aDrafts[i]).css({
                        'margin-right': 0
                    });
                }
            }
        }.bind(this));
        this.modifyAndDelete();
    }

    getDraftData(callBack) {
        callBack = callBack || function() {};
        var jfuid = $.sessionStorage('jfuid');
        // var url = domain + '/getHfps';
        var url = domain137 + `/quality/draftslist/${jfuid}`;
        /*jfuid(用户id) par(需求项) currentPage(当前页)*/

        $.when($.ajax({
            url: url,
            type: "get"
        })).then(function(result) {
            if (result.msg == "success") {
                callBack(result.data);
            }
        })

    // $.when($.ajax({
    //     url: url,
    //     data: {
    //         par: 7,
    //         jfuid: jfuid,
    //         currentPage: 1,
    //         date: new Date().getTime()
    //     },
    // })).then(function (data) {
    //     if (!data.hfpList)return;
    //     callBack(data.hfpList);
    // }).done(function () {
    //
    // }.bind(this)).fail(function () {
    //
    // }.bind(this));
    //GET /1_5/{pid}/delDemandByPid
    }

    delDemandData(callBack) {
        // var url = domain;
        var url = domain137;
        callBack = callBack || function() {};
        this.delDemandEvent(function(data, obj) {
            $.when($.ajax({
                type: "patch",
                // url: url + '/1_5/' + data + '/delDemandByPid',
                url: url + `/quality/drafts/${data}`
            })).then(function(data) {
                if (data.msg == 'success') {
                    obj.remove();
                    /*重新计算margin值*/
                    //alert('你删除成功了!');
                    $(".cover1").show();
                    $(".close2").click(function() {
                        $(".cover1").hide();
                    });
                    callBack();
                }
            //debugger;
            }).done(function(data) {
                //debugger;
            }).fail(function(data) {
                //debugger;
            });
        }.bind(this));
    }

    delDemandEvent(callBack) {
        callBack = callBack || function() {};
        this.rootEl.on('click', '#search_reslut_drafts .del', function(ev) {
            var dataPid = this.rootEl.find(ev.currentTarget).attr('data-pid');

            callBack(dataPid, this.rootEl.find(ev.currentTarget).parents('.drafts_details'));
        //del
        }.bind(this));
    }

    /**
     * 给草稿箱添加enter,leave事件
     * 点击修改按钮 将草稿箱的号存入session ，然后跳转到对应的修改页面
     */
    modifyAndDelete() {
        this.rootEl.on('mouseenter', '.update', function(ev) {
            this.rootEl.find(ev.currentTarget).next().show();
        }.bind(this));
        this.rootEl.on('mouseleave', '.update', function(ev) {
            this.rootEl.find(ev.currentTarget).next().hide();
        }.bind(this));
        this.rootEl.on('mouseenter', '.del', function(ev) {
            this.rootEl.find(ev.currentTarget).next().show();
        }.bind(this));
        this.rootEl.on('mouseleave', '.del', function(ev) {
            this.rootEl.find(ev.currentTarget).next().hide();
        }.bind(this));


        this.rootEl.on('click', '.update', function(ev) {
            var target = this.rootEl.find(ev.currentTarget)
            var dataHref = target.attr('data-href');
            var newData = dataHref.split('#');
            $.setSessionStorage('draft', newData[1]);
            location.href = dataHref;
        }.bind(this));
    //del
    }

    industryservice(data) {
        if (data.serviceType == "1" && (data.industry =="教育行业"|| data.industry=="教育培训"||data.industry==null)) {
            return 'new_demand_copy_5.html#';
        }
        if (data.serviceType == "2") {
            return 'customerDateEdit.html#';
        }
        return 'new_demand_copy_2.html#';
    }

    createDraftHtml() {

        return this.state.DraftData.map(function(name, index) {
            var industryservice = this.industryservice({
                serviceType: name.serviceType,
                industry: name.industry
            }); //数据类型
            var current = ((index + 1) % 3 == 0);
            return (<div className="drafts_details" id="divcg0" style={current ? {
                    'margin-right': 0
                } : {
                    right: 0
                }}>
                <h3 title="草稿箱">{name.demandname}</h3>
                <p>
                    <span className="date">{name.createtime}</span>
                    <span className="del" data-pid={name.pid}></span>
                    <span className="bubble bubble1">删除</span>
                    <a className="update" href="javascript:;" data-href={industryservice + name.pid}></a>
                    <span className="bubble bubble2">修改</span>
                </p>
            </div>)
        }.bind(this));
    }

    render() {
        return (
            <div className="demand-list drafts">
                <div id="search_reslut_drafts">
                    {this.state.DraftHtml}
                </div>
            </div>
        );
    }
}
class CustomerDemandList extends React.Component {
    constructor(props) {
        super(props);
        this.init();
        this.state = {
            requireState: 'list', //默认为 列表需求
            search: ''
        };
        this.changeModdle = this.changeModdle.bind(this);
    }

    init() {
        this.rootEl = $('.deman_hall_search'); //列表需求最外层
        //search-box
        this.searchBoxEl = $('.search-box'); //搜索部分
        this.titleSelectEl = $('.title_select'); //tab部分
        this.setDate = this.setDate.bind(this); // 获取搜索框时间部分
        this.getCurrentSate = this.getCurrentSate.bind(this); //点击状态获取对应状态的订单
        this.changTitleSelect = this.changTitleSelect.bind(this); //点击tab获取对应状态
    }

    componentDidMount() {
        this.changTitleSelect();
        this.seachData();
    }

    /**
     *点击切换订单状态，改变样式，清空起止时间和需求名
     */
    getCurrentSate(callBack) {
        callBack = callBack || function() {};

        this.searchBoxEl.on('click', 'ul li', function(ev) {
            var state = this.searchBoxEl.find(ev.currentTarget).attr('data-state');
            this.searchBoxEl.find('ul li').removeClass('selected');
            this.searchBoxEl.find(ev.currentTarget).addClass('selected');
            this.rootEl.find('#demandname').val('');
            this.rootEl.find('#start_date').val('');
            this.rootEl.find('#end_date').val('');
            callBack(state);
        }.bind(this));
    }

    /**
     * 添加搜索框点击事件，获取时间部分
     */
    setDate() {
        $(".start_date").datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
        }).on("click", function(ev) {
            $(".start_date").datetimepicker("setEndDate", $(".end_date").val());
        });

        $(".end_date").datetimepicker({
            language: 'zh-CN',
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
        }).on("click", function(ev) {
            $(".end_date").datetimepicker("setStartDate", $(".start_date").val());
        });
    }

    /**
     * 点击tab获取对应状态
     */
    changTitleSelect() {
        this.titleSelectEl.on('click', 'ul li', function(ev) {
            this.titleSelectEl.find('ul li').removeClass('selected');
            this.titleSelectEl.find(ev.currentTarget).addClass('selected');
            this.searchBoxEl.find('ul li').removeClass('selected');
            this.searchBoxEl.find('ul li').eq(0).addClass('selected');
            var dataState = this.titleSelectEl.find(ev.currentTarget).attr('data-state');
            /*是否点击草稿箱*/
            if (dataState == "draft") {
                $.setSessionStorage('draft', 'current');
            } else {
                $.setSessionStorage('draft', 'noncurrent');
            }

            this.setState({
                requireState: dataState,
            });
        }.bind(this));
    }


    /**
     * 切换tab
     * @param callBack
     * @returns {XML}
     */
    changeModdle(callBack) {
        //search  点击确定按钮获取需求名 ，起止时间 ，父组件改变状态，子组件属性发生变化，从新搜索获取数据
        //setDate  日历插件初始化
        // getCurrentSate 初始化 列表需求，异常需求，草稿箱 按钮点击事件

        if (this.state.requireState == 'list') {
            // $('.center_text').show();  //翻页
            this.searchBoxEl.show(); //搜索
            this.setDate();
            return <Main search={this.state.search} getCurrentSate={this.getCurrentSate}/>;
        }
        if (this.state.requireState == 'abnormal') {
            // $('.center_text').show();
            this.searchBoxEl.hide();
            return <AbnormalRequire search={this.state.search} setDate={this.setDate}/>;
        }
        if (this.state.requireState == 'draft') {
            this.searchBoxEl.hide();
            $('.center_text').hide();
            return <DraftRequire data=''/>;
        }
    }

    /**
     * 确定按钮点击事件
     */
    seachData() {

        this.rootEl.on('click', '#seach', function(ev) {
            // return ;
            var abnormal = this.rootEl.find(ev.currentTarget).attr('data-seach');
            if (abnormal == "abnormal") { //异常需求
                var ycdemandname = this.rootEl.find('#ycdemandname').val();
                var startDate = this.rootEl.find('#ycstart_date').val();

                var endDate = this.rootEl.find('#ycend_date').val();
                this.setState({
                    search: {
                        ycdemandname: ycdemandname,
                        startDate: startDate,
                        endDate: endDate
                    }
                });
            } else { //列表需求
                var demandname = this.rootEl.find('#demandname').val();
                var startDate = this.rootEl.find('#start_date').val();

                var endDate = this.rootEl.find('#end_date').val();
                var dataState = this.rootEl.find('.search-box ul li.selected').attr('data-state');
                this.setState({
                    search: {
                        ycdemandname: demandname,
                        startDate: startDate,
                        endDate: endDate,
                        par: dataState
                    }
                });
            }
        }.bind(this))
    }

    render() {
        return (<div>
            {this.changeModdle()}
            <div className="darren" ref="darren"></div>
            <div className="cover1">
                <div className="cover-box">
                    <div className="title">提示<span className="close2"></span></div>
                    <div className="context" style={{
                "lineHeight": "200px"
            }}>已删除</div>
                    <div className="bt-choose">
                        <button type="button" className="bg_blue close2">确定</button>
                    </div>
                </div>
            </div>
        </div>)
    }
}
ReactDOM.render(<CustomerDemandList name="1"/>, $.rootEl);