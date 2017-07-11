$(".loading_cover").hide();
$.rootEl = $('#search_reslut')[0];
React.rootElPage = $('#page');

import DraftRequire from './DraftRequire.jsx';
import AbnormalRequire from  './AbnormalRequire.jsx'
import Main from './Main.jsx';






class CustomerDemandList extends React.Component{
	constructor(props) {
		super(props);
		this.init();
		this.state = {
			requireState:'list',
			search:''
		};
		this.changeModdle = this.changeModdle.bind(this);
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
			
			if(dataState=="draft"){
				$.setSessionStorage('draft','current');
			}else{
				$.setSessionStorage('draft','noncurrent');
			}
			
			this.setState({
				requireState:dataState,
			});
		}.bind(this));
	}
	
	componentWillReceiveProps(nextProps) {
		//debugger;
	}
	changeModdle(callBack){
		//console.log(callBack);
		//this.props.name = 2;
		if(this.state.requireState=='list'){
			$('.center_text').show();
			this.searchBoxEl.show();
			this.setDate();
			return <Main search={this.state.search}  getCurrentSate={this.getCurrentSate} />;
		}
		if(this.state.requireState=='abnormal'){
			$('.center_text').show();
			this.searchBoxEl.hide();
			return <AbnormalRequire search={this.state.search} setDate={this.setDate} />;
		}
		if(this.state.requireState=='draft'){
			this.searchBoxEl.hide();
			$('.center_text').hide();
			return <DraftRequire data='' />;
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
				var startDate = this.rootEl.find('#start_date').val();
				
				var endDate = this.rootEl.find('#end_date').val();
				var dataState =  this.rootEl.find('.search-box ul li.selected').attr('data-state');
				this.setState({
					search:{ycdemandname:demandname,startDate:startDate,endDate:endDate,par:dataState}
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