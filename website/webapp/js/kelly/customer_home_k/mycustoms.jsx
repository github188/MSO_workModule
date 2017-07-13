
function addMark(str){
 		str+='';
 		//\b 匹配一个单词的边界 
 		//? 匹配前面元字符0次或1次
 		var re = /(?=(?!\b)(\d{3})+$)/g; 
 		return str.replace(re, ','); 
} 
class Mycustoms extends React.Component{
	constructor(props) {
		super(props);
		
		var date=new Date();
		var year=date.getFullYear(); 
	    var month=date.getMonth()+1;
		month = month-1
		
		this.state = {
			/*完成量*/
			paymentmoneySum:0,
			paymentnumSum:0,
			month:month,
			year:year
		}
	
	}
	componentDidMount(){
		this.changeTimeData();
		this.changeargu(this.state.year,this.state.month);
	}
	changeargu(year,month){
		this.getEchartsData(function (data){
			if(data.data){
				this.setState({
					paymentmoneySum:data.data.paymentmoneySum,
					paymentnumSum:data.data.paymentnumSum
				});
			}
		}.bind(this),year,month);
	}
	changeTimeData(){
		var _this = this;
		$('ul.js_change li').click(function (ev){
			$('ul.js_change li').removeClass('current');
			$(this).addClass('current');
			var dataTime = $(this).attr('data-time');
			
			switch(dataTime){
				case "now":
					_this.changeargu(_this.state.year,null);
				return;
				case "all":
					_this.changeargu();
				return;
				default:
					_this.changeargu(_this.state.year,_this.state.month);
			}
		});
	}
	getEchartsData(callBack,year,month){
		//192.168.2.127:8099/myDemandSum/{jfuid}
		//https://back.mshuoke.com/publicApi/huoke/statistics/user/55/2016/01";
		//year=?&month=?
		var data = {};
		var jfuid =  $.sessionStorage('jfuid');
		var url = domain + "/myDemandSum/"+ jfuid;
		callBack = callBack || function (){};
		if(year){
			data.year = this.state.year;
		}
		if(month){
			data.month = month;
		}
		$.when($.ajax({
			 type:'get',
			 contentType:'application/json',
			 data:data,
			 url:url,
		})).then(function (data){
			if(data.code=='Y'){
				callBack(data);
			}
			
		}).fail(function (data){
			//alert('获取数据失败！');
		});
	}
	render(){
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
								<i>{addMark(this.state.paymentnumSum)}</i>
								<i className="last">条</i>
							</div>
						</div>
						<div className="price">
						<img src="/images/public/redmoney.png" />
							<span className="first">获客费用</span>
							<div className="last">
								<i>{addMark(this.state.paymentmoneySum)}</i>
								<i className="last">元</i>
							</div>
						</div>
					</div>
				</div>);
	}
}
export default Mycustoms;