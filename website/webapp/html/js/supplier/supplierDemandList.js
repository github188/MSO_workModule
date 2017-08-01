$(".loading_cover").hide();
$.rootEl = $('#search_reslut')[0];
React.rootElPage = $('#page');
class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			Alldata:'',
			AllMainHtml:'',
			pageCount:'',
			search:'',
		};
		this.init();
		this.props.pid='';
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
				this.getAllPageData({currentPage:1,par:data});
			}.bind(this));
		}
		this.questionsEvent();
	}
	getAllPageData(obj){
		this.getAllData(function (data){
			//debugger;
			this.setState({
				Alldata:data,
			});
			this.setState({pageCount:data.pageCount});
			this.setState({AllMainHtml:this.createMainHtml()});
			/*处理onclick*/
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
		if(this.props.jdstate){
			obj.par = this.props.jdstate;
		}else{
			obj.par = $(".search-box li.selected").attr("data-state") || 0;
		}
		
		var jfuid = $.sessionStorage('jfuid');
		//var classify = $(".content .title_select ul li.selected").attr("data-classify");
		//var jdstate = "0";
		var url = domain + '/orderlist/'+jfuid+'/'+obj.par;
		/*jfuid(用户id) par(需求项) currentPage(当前页)*/
		//debugger;
		var jfuid = $.sessionStorage('jfuid');
			console.log(obj.par);
		var data={
				jdstate:obj.par,
				currentPage:obj.currentPage,
				jfuid:jfuid,
				begintime:obj.startDate,
				endtime:obj.endDate,
				demandname:obj.ycdemandname,
				orderid:obj.orderid,
			};
		$.when($.ajax({
			url:url,
			data:data
		})).then(function (data){
			/*处理onclick*/
			var newstr = data.ajaxPageStr.replace(/onclick="nextPage\([\d]*\)"+/g,"");
			//onclick="toTZ();
			var toTZ = newstr.replace(/onclick="toTZ\(\);"+/g,"");
			data.resultlist.ajaxPageStr = toTZ;
			data.resultlist.pageCount = data.pageCount;
			
			callBack(data.resultlist);
			$(".subhide").html("");
		}).done(function (){
				//debugger
		}).fail(function (){
				//debugger
		});
	}
	isReview(jdstate,pause){
		var  dataState = {};
		if(this.props.jdstate=='8'){
			if(pause=='0'){
				if(jdstate=='3'){
					dataState.pause = true;
					dataState.jdstate = '驳回';
					return dataState;
				}
				if(jdstate=='7'){
					dataState.pause = true;
					dataState.jdstate = '被关闭';
					return dataState;
				}
			}
			if('1'==pause){
				dataState.pause = true;
				dataState.jdstate = '暂停';
				return dataState;
			}
		}else{
			switch(jdstate){
				case (1):
					dataState.class = '';
					dataState.jdstate = '审核中';
					return dataState;
				case (2 || 4):
					dataState.class = 'ing-blue';
					dataState.jdstate = '进行中';
					return dataState;
				case 5:
					dataState.class = 'ing-red';
					dataState.jdstate = '结算中';
					return dataState;
				case 6:
					dataState.class = 'done';
					dataState.jdstate = '已完成';
					return dataState;
				default:
					dataState.class = 'hide';
					dataState.jdstate = '';
					return dataState;
			}
		}
	}
	changeschedule(obj){
		//console.log(obj);
		 if(obj.pause && obj.pause.pause){
			  return (
					<div className="date">
						<p>审核状态</p>
						<h3 className="color-red">{obj.pause.jdstate}</h3>
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
	priceandtype(obj){
		if(obj.jdstate=="3"|| obj.jdstate=="7"){
			  return(
			  <div className="type">
				<p>业务类型</p>
				<h3>{obj.servicetype}<i><span className="questions type">?</span><span className="text_content">{(obj.servicetype=="数据加工")?"针对企业自有数据和需求，进行有效触达":"对用户行为和特征进行分析，通过有效触达，挖掘意向客户"}</span></i></h3>
			</div>);
		 }else{
			 return (<div className="type">
				<p>订单单价</p>
				<h3>
					<span className="font18">{(sessionStorage.getItem("pid")!=="")?"**":(obj.jbfprice.toFixed(2))}</span>
					<span className="font12">元</span>
				</h3>
			</div>)
		 }
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
		//debugger;
		$(document).on('click','body',function (ev){
		    var oEvent = ev || event;
			var target  = oEvent.target ||  oEvent.srcElement;
			if(target.className.indexOf('questions mode')>-1){
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
			return 'supplier-data.html#'; 
		}
		if(data.servicetype == "销售线索挖掘" && data.industry=="教育培训"){
			if(data.twolevindustry=="其他"){
				return 'supplier-unnormal.html#';
			}else{
				return 'supplier-normal.html#';
			}			 
		}
		return 'supplier-unnormal.html#';
		
	}
	createMainHtml(){
		//debugger;
		if(!this.state.Alldata)return;
		if(!this.state.Alldata[0]){
			return (<div className="no-reslut">暂无数据！</div>);
		}
		return this.state.Alldata.map(function (name,index){
			//console.log(name);
			var checckSchedule =  this.checckSchedule(parseInt(name.fishnum/name.auctionnum*100));
			var pause;
			var changeschedule;			
			var priceandtype = this.priceandtype(name);
			
			if(this.props.jdstate=='8'){
				//debugger;
				pause =  this.isReview(name.jdstate,name.pause);
			}else{
				var  isReview = this.isReview(name.jdstate);
			}
			if(pause){
				changeschedule = this.changeschedule({pause:pause});
			}else{
				changeschedule = this.changeschedule({checckSchedule:checckSchedule,releasenum:name.auctionnum});
			}
			var payPattern = this.payPattern(name.paymentstandard);
			var servicetype = this.servicetype({servicetype:name.servicetype,industry:name.industry,twolevindustry:name.twolevindustry});
			return (<div className="reslut_box">
						<div className="title">
							<h3 title={name.demandname}>{name.demandname}</h3>
							<ul>
								<li className={"bg_green "+(name.twolevindustry?'':'hide')}>{name.twolevindustry}</li>
								<li className={"bg_blue1 "+(name.industry?'':'hide')}>{name.industry}</li>
								
								<li className={"cash "+(name.pid!==''?'':'subhide')}><span>￥</span><span className="font24">{(name.settlementmethod=="2") ? name.pricetol: name.auctionnum*name.jbfprice}</span></li>
								<li className="number"><span>订单编号：</span>{name.orderid}</li>
							</ul>
						</div>
						<div className="bottom">
							{priceandtype}
							<div className="mode hide">
								<p>结算模式</p>
								<h3>{name.paymentstandard}
									<i><span className="questions mode">?</span><span className="text_content">{payPattern}</span></i>
								</h3>
							</div>
							
							<div className="date">
								<p>竞拍时间</p><h3>{name.createtime.substr(0, 10)}</h3>
							</div>
							{changeschedule}
							<div className="btn-box">
								<a href={servicetype+name.orderid}>
									<button type="button" className="bg_blue">查看详情</button>
								</a>
							</div>
						</div>
						{pause?'':(<div className="tag">
							<span>{isReview?isReview.jdstate:''}</span>
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
class AbnormalRequire extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			search:'',
		};
		this.init();
	}
	init(){
		this.rootEl = $('#search_reslut');
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			search:nextProps.search
		});
	}
	componentDidMount(){
		//debugger;
		/*加载插件*/
		this.props.setDate();
		this.rootEl.find('#ycstart_date').attr("readonly","readonly");
		this.rootEl.find('#ycend_date').attr("readonly","readonly");
	}
	render(){
		return(
			<div className="deman_hall_search demand-list abnormal">
    			<div className="search-box abnormal">
    				<input type="text" placeholder="请输入订单名" className="demand-name" id="ycdemandname" />
    				<div className="left">
    					<label>发布时间：</label>
    					<input type="text" className="form_date start_date" date-format="yyyy-mm-dd" readonly  id="ycstart_date" /><i className="date_icon"></i>
    					<label>-</label>
    					<input type="text" className="form_date end_date" date-format="yyyy-mm-dd" readonly id="ycend_date" /><i className="date_icon"></i>
    					<button type="button" data-seach="abnormal" id="seach">确定</button>
    				</div>
    			</div>
    			<div className="search-result" id="search_reslut_abnormal">
					<Main search={this.state.search} jdstate="8" />
				</div>
    		</div>
		);
	}
}


class CustomerDemandList extends React.Component{
	constructor(props) {
		super(props);
		this.init();
		this.state = {
			requireState:'list',
			search:'',
			requireClassify:'0'
		};
	}
	init(){
		this.rootEl = $('.deman_hall_search');
		//search-box
		this.searchBoxEl = $('.search-box');
		this.titleSelectEl = $('.title_select');
		this.setDate = this.setDate.bind(this);
		this.getCurrentSate = this.getCurrentSate.bind(this);
		this.changTitleSelect = this.changTitleSelect.bind(this);
	}
	componentDidMount(){
		this.changTitleSelect();
		this.seachData();
	}
	getCurrentSate(callBack){
		callBack = callBack || function (){};
		this.searchBoxEl.on('click','ul li',function (ev){
			var state = this.searchBoxEl.find(ev.currentTarget).attr('data-state');
			this.searchBoxEl.find('ul li').removeClass('selected');
			this.searchBoxEl.find(ev.currentTarget).addClass('selected');
			this.rootEl.find('#demandname').val('');
			this.rootEl.find('#start_date').val('');
			this.rootEl.find('#end_date').val('');
			callBack(state);
		}.bind(this));
	}
	setDate(){
		$(".start_date").datetimepicker({
		language:  'zh-CN',
		weekStart: 1,
		todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0,
		format: 'yyyy-mm-dd',
		}).on("click",function(ev){
			$(".start_date").datetimepicker("setEndDate", $(".end_date").val());
		});
		
		$(".end_date").datetimepicker({
			language:  'zh-CN',
			weekStart: 1,
			todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			format: 'yyyy-mm-dd',
		}).on("click", function (ev) {
			$(".end_date").datetimepicker("setStartDate", $(".start_date").val());
		});
	}
	changTitleSelect(){
		this.titleSelectEl.on('click','ul li',function(ev){
			this.titleSelectEl.find('ul li').removeClass('selected');
			this.titleSelectEl.find(ev.currentTarget).addClass('selected');
			this.searchBoxEl.find('ul li').removeClass('selected');
			this.searchBoxEl.find('ul li').eq(0).addClass('selected');
			var dataState =  this.titleSelectEl.find(ev.currentTarget).attr('data-state');
			var dataClassify =  this.titleSelectEl.find(ev.currentTarget).attr('data-classify');
			this.setState({
				requireState:dataState,
				requireClassify:dataClassify,
			});
		}.bind(this));
	}
	//shouldComponentUpdate(data){
		//this.setDate();
		//return true;
	//}
	//componentWillReceiveProps(nextProps) {
		//debugger;
	//}
	changeModdle(){
		this.props.name = 2;
		if(this.state.requireState=='list'){
			$('.center_text').show();
			this.searchBoxEl.show();
			this.setDate();
			return <Main search={this.state.search}  getCurrentSate={this.getCurrentSate} />;
		}
		if(this.state.requireState=='abnormal'){
			$('.center_text').show();
			this.searchBoxEl.hide();
			return <AbnormalRequire requireClassify = "8" search={this.state.search} setDate={this.setDate} />;
		}
	}
	seachData(){
		
		this.rootEl.on('click','#seach',function (ev){
			
			var abnormal = this.rootEl.find(ev.currentTarget).attr('data-seach');
			if(abnormal == "abnormal"){
				var ycdemandname = this.rootEl.find('#ycdemandname').val();
				var startDate = this.rootEl.find('#ycstart_date').val();
				
				var endDate = this.rootEl.find('#ycend_date').val();
				this.setState({
					search:{ycdemandname:ycdemandname,startDate:startDate,endDate:endDate}
				});
			}else{
				var demandname = this.rootEl.find('#demandname').val();
				var orderid = this.rootEl.find('#orderid').val();
				var startDate = this.rootEl.find('#start_date').val();
				var endDate = this.rootEl.find('#end_date').val();
				var dataState =  this.rootEl.find('.search-box ul li.selected').attr('data-state');
				var dataJdstate =  this.rootEl.find('.search-box ul li.selected').attr('data-jdstate');
				this.setState({
					search:{ycdemandname:demandname,orderid:orderid,startDate:startDate,endDate:endDate,par:dataState}
				});
			}
		}.bind(this))
	}
	render(){
		return (<div>
		{this.changeModdle()}
			<div className="darren" ref="darren"></div>
		</div>)
	}
}
	
React.render(<CustomerDemandList name="1"/>,$.rootEl);