
require('./main.css');
class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			Alldata:'',
			AllMainHtml:'',
			pageCount:'',
			search:'',
			indexSchedule:1,
			indexPage:2,
		};
		this.init();
		this.componentDidUpdate.bind(this);
	}
	init(){
		this.rootEl = $('#search_reslut');
		this.pageEl = $('#page');
	}
	componentDidMount(){
		/*拿到并跟新数据*/
		this.getAllPageData({currentPage:1});
		/*获取当前页*/
		this.getCurrentPage();
		
		/*状态处理 为了异常模块写的if*/
		if(this.props.getCurrentSate){
			this.props.getCurrentSate(function (data){
				//console.log(data);
				this.getAllPageData({currentPage:1,par:data});
			}.bind(this));
		}
		this.questionsEvent();
		
	}
	getAllPageData(obj){
		this.getAllData(function (data){
			this.setState({
				Alldata:data,
			});
			this.setState({pageCount:data.pageCount});
			this.setState({AllMainHtml:this.createMainHtml()});
			/*处理onclick*/
			//console.log('3333333333333');
			var GaugeMeter = $('.GaugeMeter canvas');
			for(var i=0;i<GaugeMeter.length;i++){
				//$(GaugeMeter[i]).html('');
			}
			
			this.pageEl.html(data.ajaxPageStr);
			//debugger;
			for(var i=0;i<GaugeMeter.length;i++){
				animationCanvas(GaugeMeter[i]);
				//$(GaugeMeter[i]).gaugeMeter();
			}
		}.bind(this),obj);
	}
	getCurrentPage(){
		/*上页 下页 当前页*/
		this.pageEl.on('click','#page a',function (ev){
			var currentPageNuber;
			var currentTag = this.pageEl.find(ev.currentTarget).html();
			if(currentTag=='下页'){
				currentPageNuber = this.pageEl.find('a.selected').html()*1;
				currentPageNuber+=1;
			}
			if(currentTag=='上页'){
				currentPageNuber = this.pageEl.find('a.selected').html()*1;
				currentPageNuber-=1;
			}
			if(/\d+/g.test(currentTag*1)){
				currentPageNuber = this.pageEl.find(ev.currentTarget).html();
			}
			this.getAllPageData({currentPage:currentPageNuber});
			$("body,html").stop(false,true).animate({"scrollTop":0},0);
		}.bind(this));
		/*go*/
		this.pageEl.on('click','button',function (ev){
			var currentPageNuber = this.pageEl.find('#toGoPage').val();
			if(!currentPageNuber){
				currentPageNuber =1;
				this.pageEl.find('#toGoPage').val(currentPageNuber);
			}
			if(currentPageNuber*1>this.state.pageCount){
				currentPageNuber = this.state.pageCount;
				this.pageEl.find('#toGoPage').val(currentPageNuber);
			}
			this.getAllPageData({currentPage:currentPageNuber});
		}.bind(this));
	}
	componentWillReceiveProps(nextProps) {
		this.getAllPageData(nextProps.search);
	}
	getAllData(callBack,obj){
		callBack = callBack || function(){};
		/*处理异常模块*/
		if(this.props.state){
			obj.par = this.props.state;
		}else{
			obj.par = $(".search-box li.selected").attr("data-state") || 0;
		}
		
		var url = domain + '/getHfps';
		/*jfuid(用户id) par(需求项) currentPage(当前页)*/
		
		var jfuid = $.sessionStorage('jfuid');
		$.when($.ajax({
			url:url,
			data:{
				par:obj.par,
				currentPage:obj.currentPage,
				jfuid:jfuid,
				begincreatetime:obj.startDate,
				endcreatetime:obj.endDate,
				demandname:obj.ycdemandname
			}
		})).then(function (data){
			/*处理onclick*/
			var newstr = data.ajaxPageStr.replace(/onclick="nextPage\([\d]*\)"+/g,"");
			//onclick="toTZ();
			var toTZ = newstr.replace(/onclick="toTZ\(\);"+/g,"");
			data.hfpList.ajaxPageStr = toTZ;
			data.hfpList.pageCount = data.pageCount;
			callBack(data.hfpList);
		}).done(function (){
				//debugger
		}).fail(function (){
				//debugger
		});
	}
	isReview(state,pause){
		var  dataState = {};
		if(this.props.state=='6'){
			if(pause=='0'){
				if(state=='3'){
					dataState.pause = true;
					dataState.state = '驳回';
					return dataState;
				}
				if(state=='7'){
					dataState.pause = true;
					dataState.state = '被关闭';
					return dataState;
				}
			}
			if('1'==pause){
				dataState.pause = true;
				dataState.state = '暂停';
				return dataState;
			}
		}else{
			switch(state){
				case (1):
					dataState.class = 1;
					dataState.state = '审核中';
					return dataState;
				case (2 || 4):
					dataState.class = 'ing-blue';
					dataState.state = '进行中';
					return dataState;
				case 5:
					dataState.class = 'ing-red';
					dataState.state = '结算中';
					return dataState;
				case 6:
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
	changeschedule(obj){
		
		 if(obj.pause && obj.pause.pause){
			  return (
					<div className="date">
						<p>审核状态</p>
						<h3 className="color-red">{obj.pause.state}</h3>
					</div>)
		 }else{
			 var contHtml = (<div className="GaugeMeter" data-percent={obj.checckSchedule} 
								data-append="%" data-size="150" data-style="Semi" data-width="5" data-color="#ff9429">
								<canvas width="150" height="150" ></canvas>
								<span className="round"></span>
								<span className="covered"></span>
						    </div>);
		 return(<div className={"schedule "+obj.releasenum}>
						{contHtml}
						<span className="data">{obj.checckSchedule}<i>%</i></span>
						<span className="start">0</span>
						<span className="descript">完成进度</span>
						<span className="end">{obj.releasenum}</span>					
			      </div>);
		 }
	}
	componentWillUnmount(){
		
	}
	componentWillUpdate(){}
	//componentWillUpdate(){
		//componentWillUpdate  每次更新以前
		//componentDidUpdate   每次更新以后
	//}

	componentDidUpdate(prevProps,prevState){
		

		
	}
	checckSchedule(data){
		if(data>100){
			return 100;
		}
		if(0<=data&&data<=100){
			return data;
		}
		return 0;
	}
	questionsEvent(){
		$(document).on('click','body',function (ev){
		    var oEvent = ev || event;
			var target  = oEvent.target ||  oEvent.srcElement;
			if(target.className.indexOf('questions type')>-1){
				this.rootEl.find(target).parent().addClass('selected');
				this.rootEl.find(target).addClass('selected');
				this.rootEl.find('.text_content').hide();
				this.rootEl.find(target).next().show();
				return;
			}else{
				this.rootEl.find('.questions').parent().removeClass('selected');
				this.rootEl.find('.questions').removeClass('selected');
				this.rootEl.find('.text_content').hide();
			}
			
			if(target.className.indexOf('questions mode')>-1){
				this.rootEl.find(target).parent().addClass('selected');
				this.rootEl.find(target).addClass('selected');
				this.rootEl.find('.text_content').hide();
				this.rootEl.find(target).next().show();
			}else{
				this.rootEl.find('.questions').parent().removeClass('selected');
				this.rootEl.find('.questions').removeClass('selected');
				this.rootEl.find('.text_content').hide();
			}
		}.bind(this));
	}
	payPattern(data){
		switch(data){
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
	servicetype(data){
		if(data.servicetype == "数据加工"){
			return 'dataMining.html#'; 
		}
		if(data.servicetype == "销售线索挖掘" && data.industry=='教育培训'){
			if(data.twolevindustry=="其他"){
				return 'customerMining.html#';
			}else{
				return 'customer_mining_normal.html#'; 
			}
		}
		return 'customerMining_new.html#';		
	}
	createMainHtml(){
		if(!this.state.Alldata)return;
		if(!this.state.Alldata[0]){
			return (<div className="no-reslut">暂无数据！</div>);
		}
		return this.state.Alldata.map(function (name,index){
			//debugger
			var checckSchedule =  this.checckSchedule(parseInt(name.applicationnum/name.releasenum*100));
			var pause;
			var changeschedule;
			if(this.props.state=='6'){
				pause =  this.isReview(name.fdstate,name.pause);
			}else{
				var  isReview = this.isReview(name.fdstate);
			}
			if(pause){
				changeschedule = this.changeschedule({pause:pause});
			}else{
				changeschedule = this.changeschedule({checckSchedule:checckSchedule,releasenum:name.releasenum});
			}
			var payPattern = this.payPattern(name.paymentstandard);
			var servicetype = this.servicetype({servicetype:name.servicetype,industry:name.industry,twolevindustry:name.twolevindustry});
			return (<div className="reslut_box">
						<div className="title">
							<h3 title={name.demandname}>{name.demandname}</h3>
							<ul>
								<li className={"bg_green "+(name.twolevindustry?'':'hide')}>{name.twolevindustry}</li>
								<li className={"bg_blue1 "+(name.industry?'':'hide')}>{name.industry}</li>
								<li className="cash"><span>￥</span><span className="font24">{name.demandpricetol.toFixed(2)}</span></li>
							</ul>
						</div>
						
						<div className="bottom">
							<div className="type">
								<p>业务类型</p>
								<h3>{name.servicetype}
								<i><span className="questions type">?</span><span className="text_content">{(name.servicetype=='销售线索挖掘')?'对用户行为和特征进行分析，通过有效触达，挖掘意向客户':'针对企业自有数据和需求，进行有效触达'}</span></i>
								</h3>
							</div>
							<div className="mode hide">
								<p>结算模式</p>
								<h3>{name.paymentstandard}
									<i><span className="questions mode">?</span><span className="text_content">{payPattern}</span></i>
								</h3>
							</div>
							
							<div className="date">
								<p>发布时间</p><h3>{name.createtime}</h3>
							</div>
							{changeschedule}
							<div className="btn-box">
								<a href={servicetype+name.pid}>
									<button type="button" className="bg_blue">查看详情</button>
								</a>
							</div>
						</div>
						{pause?'':(<div className="tag">
							<span>{isReview?isReview.state:''}</span>
							<i className={isReview?isReview.class:''}></i>
						</div>)}
					</div>);
		}.bind(this));
	
	}
	render(){
		/*jfuid par currentPage*/
		return (<div>
					{this.state.AllMainHtml}
				</div>);
	}
}

export default Main;