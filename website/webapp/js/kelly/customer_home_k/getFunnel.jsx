import {observable, autorun, action} from "mobx";
import { observer } from 'mobx-react';

/*mobx测试数据*/
function changeValue(_this,method,Value){
	_this.props.appState[method] = action(function() {
		_this.props.appState.timer = Value;
	}.bind(_this));
	_this.props.appState[method]();
}


class Funnel extends React.Component{
	constructor(props) {
		super(props);
		/*可以采用局部也可以采用全局*/
			
		var date=new Date();
		var year=date.getFullYear(); 
	    var month=date.getMonth()+1;
		var lastMonth = (month-1)+"";
	
		if(lastMonth.length==1){
			 lastMonth = "0"+lastMonth;
		}
		this.state = {
			/*完成量*/
			releasenum:1,
			applicationnum:0,
			tj_num:0,
			paymentnum:0,
			month:lastMonth,
			year:year,
		}
		
		this.changeargu = this.changeargu.bind(this);
	}
	componentDidMount(){
		this.changeTimeData();
		this.changeargu(this.state.year,this.state.month);	
	}
	changeargu(year,month){
		this.getFunnelData(function (data){
			if(data.data){
				
				this.setState({
					releasenum:data.data.releasenum?data.data.releasenum:1,
					applicationnum:data.data.applicationnum,
					tj_num:data.data.tj_num,
					paymentnum:data.data.paymentnum,
				});
				this.funnelEcharts();
			}
		}.bind(this),year,month);
	}
	changeTimeData(){
		var _this = this;
		$('ul.js_funnel_change li').click(function (ev){
			$('ul.js_funnel_change li').removeClass('current');
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
	
	
	getFunnelData(callBack,year,month){
		var data = {};
		var jfuid =  $.sessionStorage('jfuid');
		//GET /pasf/ups/{jfuid}/passengerFunnel
		var url = domain137 + '/pasf/ups/'+jfuid+'/passengerFunnel';
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
			if(data.msg=='success'){
				//debugger;
				callBack(data);
			}
		}).fail(function (data){
			//alert('获取数据失败！');
		});
	}
	funnelEcharts(){
		
		String.prototype.startWith=function(str){     
		  var reg=new RegExp("^"+str);     
		  return reg.test(this);        
		} 
		
		var myChart = echarts.init($(".funnel-box")[0]);
		
		/*this.state.paymentnum 如果这个等于零隐藏起来*/
		var color = ["#7cd6cf","#63b2ee","#9f99f1","#ed8ceb"];		
		
		var option = {
				title: {
					//text: '漏斗图',
				//	subtext: '纯属虚构'
				},
				color:color,
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c}%"
				},
				//toolbox: {
					//feature: {
						//dataView: {readOnly: false},
						//restore: {},
						//saveAsImage: {}
					//}
				//},
				legend: {
					data: ['展现','点击','访问','咨询','订单']
				},
				calculable: true,
				series: [
					{
						name:'漏斗图',
						type:'funnel',
						left: '0%',
						top: 0,
						//x2: 80,
						bottom: 0,
						width: '100%',
						// height: {totalHeight} - y - y2,
						min: 0,
						max: 100,
						//minSize: '0%',
						maxSize: '100%',
						sort: 'descending',
						//gap: 0,
						label: {
							normal: {
								show: true,
								position: 'inside'
							},
							emphasis: {
								textStyle: {
									fontSize: 20
								}
							}
						},
						labelLine: {
							normal: {
								length: 10,
								lineStyle: {
									width: 1,
									type: 'solid'
								}
							}
						},
						itemStyle: {
							normal: {
								borderColor: '#fff',
								borderWidth: 1
							}
						},
						data: [
							{value: (this.state.releasenum*1)*100, name: ''},
							{value: (this.state.applicationnum*1)*100, name: ''},
							{value: (this.state.tj_num*1)*100, name: ''},
							{value: (this.state.paymentnum*1)*100, name: ''},
						]
					}
				]
			};
		myChart.setOption(option);
	}
	render(){
		;
		return (
				<div className="funnel">
					<div className="funneltitle">
						<div className="requirearts"></div>
						<div className="require">获客漏斗</div>
						<ul className="js_funnel_change">
							<li data-time="2" className="current">上月</li>
							<li data-time="now">今年</li>
							<li data-time="all">全部</li>
						</ul>
					</div>
					
					
					<div className="working">
						<div className="funnel-box" style={{width:'250px',height:'318px'}}>
						
						</div>
						<div className="funnel-publish">
							<span>发布需求{
							((this.state.releasenum*1).toFixed(2)*100).toFixed(2)+'%'
							}</span>
							
						</div>
						<div className="funnel-execute">
							<span>需求执行率{
								((this.state.applicationnum*1).toFixed(2)*100).toFixed(2)+'%'}</span>
							
						</div>
						<div className="funnel-post" >
							<span>提交率{
								((this.state.tj_num*1).toFixed(2)*100).toFixed(2)+'%'
							}</span>
						
						</div>
						<div className="funnel-complete" >
						
							<span>完成率{
							((this.state.paymentnum*1).toFixed(2)*100).toFixed(2)+'%'
							}</span>
						</div>
					</div>
				</div>
				);
	}
}

export default Funnel;