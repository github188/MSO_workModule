
class DraftRequire extends React.Component{
	constructor(props) {
		super(props);
		this.init();
		this.state = {
			 DraftData:'',
			 DraftHtml:''
		};
	}
	init(){
		this.rootEl = $('#search_reslut');
		//par:7 草稿状态;
	}	
	componentDidMount(){
		this.getDraftData(function (data){
			this.setState({
				DraftData:data,
			});
			this.setState({
				DraftHtml:this.createDraftHtml(),
			});
		}.bind(this));
		/*删除本条信息并且跟新页面的margin-right value*/
		this.delDemandData(function (){
			var  aDrafts = this.rootEl.find('.drafts_details');
			for(var i=0;i<aDrafts.length;i++){
				this.rootEl.find(aDrafts[i]).css({'margin-right':'40px'});
				if(((i+1)%3==0)){
					this.rootEl.find(aDrafts[i]).css({'margin-right':0});
				}
			}
		}.bind(this));
		this.modifyAndDelete();
	}
	getDraftData(callBack){
		callBack = callBack || function (){};
		var url = domain + '/getHfps';
		/*jfuid(用户id) par(需求项) currentPage(当前页)*/
		var jfuid = $.sessionStorage('jfuid');
		$.when($.ajax({
			url:url,
			data:{
				par:7,
				jfuid:jfuid,
				currentPage:1,
			},
		})).then(function (data){
			if(!data.hfpList)return;
			callBack(data.hfpList);
		}).done(function (){
			
		}.bind(this)).fail(function (){
			
		}.bind(this));
		//GET /1_5/{pid}/delDemandByPid
	}
	delDemandData(callBack){
		var url = domain;
		callBack = callBack || function (){};
		this.delDemandEvent(function (data,obj){
			$.when($.ajax({
				url:url+'/1_5/'+data+'/delDemandByPid',
			})).then(function (data){
				if(data=='Y'){
					obj.remove();
					/*重新计算margin值*/
					//alert('你删除成功了!');
					$(".cover1").show();
					$(".close2").click(function(){
						$(".cover1").hide();
					});
					callBack();		
				}
				//debugger;
			}).done(function (data){
				//debugger;
			}).fail(function (data){
				//debugger;
			});
		}.bind(this));
	}
	delDemandEvent(callBack){
		callBack = callBack || function (){};
		this.rootEl.on('click','#search_reslut_drafts .del',function (ev){
			var dataPid = this.rootEl.find(ev.currentTarget).attr('data-pid');
			
			callBack(dataPid,this.rootEl.find(ev.currentTarget).parents('.drafts_details'));
			//del
		}.bind(this));
	}
	modifyAndDelete(){
		this.rootEl.on('mouseenter','.update',function (ev){
			this.rootEl.find(ev.currentTarget).next().show();
		}.bind(this));
		this.rootEl.on('mouseleave','.update',function (ev){
			this.rootEl.find(ev.currentTarget).next().hide();
		}.bind(this));
		this.rootEl.on('mouseenter','.del',function (ev){
			this.rootEl.find(ev.currentTarget).next().show();
		}.bind(this));
		this.rootEl.on('mouseleave','.del',function (ev){
			this.rootEl.find(ev.currentTarget).next().hide();
		}.bind(this));
		
		
		this.rootEl.on('click','.update',function (ev){
			var target = this.rootEl.find(ev.currentTarget)
			var dataHref = target.attr('data-href');
			var newData = dataHref.split('#');
			$.setSessionStorage('draft',newData[1]);
			location.href = dataHref;
		}.bind(this));
		//del
	}
	
	industryservice(data){
		//console.log(data);
		if(data.industry == "教育培训"){
			return 'new_demand_copy_5.html#'; 
		}
		if(data.servicetype == "数据加工"){
			return 'customerDateEdit.html#'; 
		}

		return 'new_demand_copy_2.html#';
		
	}
	createDraftHtml(){
		
		return this.state.DraftData.map(function (name,index){
			var industryservice = this.industryservice({servicetype:name.servicetype,industry:name.industry});
			//console.log(name);
			var current = ((index+1)%3==0);
			return(<div className="drafts_details" id="divcg0" style={current?{'margin-right':0}:{right:0}}>
				<h3 title="草稿箱">{name.demandname}</h3>
				<p>
					<span className="date">{name.createtime}</span>
					<span className="del" data-pid={name.pid}></span>
					<span className="bubble bubble1">删除</span>
					<a className="update" href="javascript:;" data-href={industryservice+name.pid} target="_blank"></a>
					<span className="bubble bubble2">修改</span>
				</p>
			</div>)
		}.bind(this));
	}
	render(){
		return(
			<div className="demand-list drafts">
					<div className="cover"><div className="cover-box"><div className="title">提示<span className="close2"></span></div><div className="context" style={{"lineHeight":"200px"}}>已删除</div><div className="bt-choose"><button type="button" className="bg_blue close2">确定</button></div></div></div>
					<div id="search_reslut_drafts">
					{this.state.DraftHtml}
					</div>
					<div className="cover1"><div className="cover-box"><div className="title">提示<span className="close2"></span></div><div className="context" style={{"lineHeight":"200px"}}>已删除</div><div className="bt-choose"><button type="button" className="bg_blue close2">确定</button></div></div></div>
					<div id="search_reslut_drafts">
					{this.state.DraftHtml}
					</div>
			</div>
		);
	}
}





export default  DraftRequire;