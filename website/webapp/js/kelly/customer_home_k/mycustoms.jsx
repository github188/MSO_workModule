
function addMark(str) {
    str += '';
    //\b 匹配一个单词的边界 
    //? 匹配前面元字符0次或1次
    var re = /(?=(?!\b)(\d{3})+$)/g;
    return str.replace(re, ',');
}
class Mycustoms extends React.Component {
    constructor(props) {
        super(props);

        var date = new Date();
        var year = date.getFullYear().toString();
        var month = date.getMonth() + 1;
        month = month - 1
        var months = month < 10 ? "0" + month : month;
        this.state = {
            /*完成量*/
            paymentmoneySum: 0,
            paymentnumSum: 0,
            month: year + "-" + months,
            year: year
        }

    }
    getEchartsData(callBack, time) {
        //192.168.2.127:8099/myDemandSum/{jfuid}
        //https://back.mshuoke.com/publicApi/huoke/statistics/user/55/2016/01";
        //year=?&month=?
        var jfuid = $.sessionStorage('jfuid');
        // var url = domain + "/myDemandSum/"+ jfuid;
        var url = `${domain137}/quality/forcustomer?jfuid=${jfuid}&year=${time.year ? time.year : ""}&month=${time.month ? time.month : ""}`;
        callBack = callBack || function() {};
        $.when($.ajax({
            type: 'get',
            contentType: 'application/json',
            url: url,
        })).then(function(data) {
            if (data.code == '0') {
                callBack(data);
            }

        }).fail(function(data) {
            //alert('获取数据失败！');
        });
    }
    componentDidMount() {
        this.changeTimeData();
        this.changeargu({
            month: this.state.month
        });
    }
    changeargu(time) {
        this.getEchartsData(function(result) {
            if (result.data) {
                this.setState({
                    paymentmoneySum: result.data.finishNumTotal,
                    paymentnumSum: result.data.settlementTotalPrice
                });
            }
        }.bind(this), time);
    }
    changeTimeData() {
        var _this = this;
        $('ul.js_change li').click(function(ev) {
            $('ul.js_change li').removeClass('current');
            $(this).addClass('current');
            var dataTime = $(this).attr('data-time');

            switch (dataTime) {
            case "now":
                _this.changeargu({
                    year: _this.state.year
                });
                return;
            case "all":
                _this.changeargu({});
                return;
            default:
                _this.changeargu({
                    month: _this.state.month
                });
            }
        });
    }

    render() {
        return (<div className="mycustoms">
					<div className="customstitle">
						<div className="mypic"></div>
						<div className="top">
							<span><img src="" /></span>
							<span className="pole">我的获客</span>
						</div>
						<ul className="js_change">
							<li data-time={this.state.month} className="current" >上月</li>
							<li data-time="now">今年</li>
							<li data-time="all">全部</li>
						</ul>
					</div>
					<div className="main">
						<div className="amount">
							<img src="/images/public/checkmount.png" />
							<span className="first">获客完成量</span>
							<div className="last">
								<i>{addMark(this.state.paymentmoneySum > 0 ? this.state.paymentmoneySum : 0)}</i>
								<i className="last">条</i>
							</div>
						</div>
						<div className="price">
						<img src="/images/public/redmoney.png" />
							<span className="first">获客费用</span>
							<div className="last">
							<i>{addMark(this.state.paymentnumSum > 0 ? this.state.paymentnumSum : 0)}</i>
								<i className="last">元</i>
							</div>
						</div>
					</div>
				</div>);
    }
}
export default Mycustoms;