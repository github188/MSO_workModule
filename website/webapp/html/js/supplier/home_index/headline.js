class Headline extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			 lineData:'',
			 HeadlineHtml:'',
			 pageId:1,
			 recommendHotData:'',
			 recommendHotHtml:'',
			 tagHotData:'',
			 tagHotHtml:'',
			 toppostListData:'',
			 toppostListHtml:'',
			 control:false
		};
		
		this.countArr = [];
		this.pageIndex = 1;
		this.init();
		this.addMoreData = this.addMoreData.bind(this);
		this.loadFailed = this.loadFailed.bind(this);
		this.windowTop = true;
	}
	init(){
		this.rootEl = $('#search_reslut');
	}
	componentDidMount(){
		$('.loadimg').hide();
		this.addMoreData();
		
		/*创建热文*/
		this.getRecommendHotData(function (data){
			this.setState({recommendHotData:data});
			this.setState({recommendHotHtml:this.createRecommendHotHtml()});
		}.bind(this));
		this.getTagHotData(function (data){
			this.setState({tagHotData:data});
			this.setState({tagHotHtml:this.createTagHotHtml()});
			this.changeTypeDdata();
		}.bind(this));
		//this.addMoreDataHtml.bind(this);
		this.addMoreDataHtml();
		this.getOthersData();
		
		/*置顶文章获取数据*/
		this.getToppostListData(function(data){
			this.setState({toppostListData:data});
			this.setState({toppostListHtml:this.createToppostListHtml()});
		}.bind(this));
		
	}
	componentWillUpdate(nextProps,nextState){
		//debugger; 测试真实的加载情况
	}
	componentDidUpdate(prevProps,prevState){
		//debugger;
	}
	addMoreData(id){
		/*调试数据*/
		id = id || 10;
		/*如果不传就默认10条*/
		var _this = this;
		
		this.getHeadlineData(function (data){
			
			var newarr = this.countArr.concat(data);
			this.countArr = newarr;
			this.setState({lineData:this.countArr});
			this.setState({HeadlineHtml:this.createHeadlineHtml()});
			var len = $('.news-list ul li.list-order').length
			
			if(this.state.control){
				//debugger;
				$('.load-more').show();
			}
			//debugger;
			if(this.state.pageId<=10){
				this.state.pageId = 10;
				/*如果开始的时候小于10默认关闭 load-more 按钮*/
			}
			if(this.state.pageId>len){
				//debugger;
				$('.load-more').hide();
			}
		}.bind(this),id);
		
	}
	getRecommendHotData(callBack){
		var url = domain + '/recommend';
		callBack = callBack || function (){};
		$.when($.ajax({
			  url:url,
			  "contentType": "application/x-www-form-urlencoded; charset=utf-8",
		})).then(function (data){
			if(!data.recommArticleList)return;
			callBack(data.recommArticleList);
		}).fail(function (data){
			alert('获取热文失败！');
		}.bind(this));
	}
	getHeadlineData(callBack,id){
		
		$('.loadimg').show();
		var url = domain + '/articles/'+1;
		var getData = {};
		if(location.href.indexOf('?')!=-1){
			/*如果头部有数据走一次*/
			if(this.windowTop){
				this.windowTop = false;
				getData = this.getSearchData();
			}else{
				getData = {};
			}
		}
		$.when($.ajax({
			url:url,
			data:{
				currentPage:id/10,
				pageSize:10,
				type:$('div.list-title li.current').attr('data-id'),
				label:getData.name?getData.name:$('.label1.tag a.current').attr('data-label'),
				state:1,
				orderby:'begintime',
				sort:'desc',
			},
		})).then(function (data){
			$('.loadimg').hide();
			$('.load-more').html('加载更多');
			$('.load-more').removeClass('load-more-error');
			callBack(data.articleList);
		}).fail(function (data){
			this.setState({cotrolTrue:true});
			$('.loadimg').hide();
			$('.load-more').html('加载失败，点击加载更多');
			$('.load-more').addClass('load-more-error');
			/*点击从新加载*/
			this.loadFailed();
		}.bind(this));
		
	}
	loadFailed(){
		var _this = this;
		$('.load-more-error')[0].onclick = function (){
			/*加载失败继续用原来的pageId*/
			_this.addMoreData(_this.state.pageId);
		}
		
	}
	addMoreDataHtml(){
		var _this = this;
		$('.load-more')[0].onclick = function (){
			var pageId = (_this.pageIndex+=1)*10;
			_this.setState({pageId:pageId});
			_this.addMoreData(pageId);
		}
	}
	createHeadlineHtml(){
		if(!this.state.lineData)return;
		//debugger;
		return this.state.lineData.map(function (name,index){
				//debugger;
				//name.content = 'sdafsdafsdafsdafsdafsdafsdfsdf';
				if(!name){
					return;
				}
				var content = name.content.substring(0,50);
				var title = name.title.substring(0,21);
				var type;
				if(name.type==1){
					type = "头条"
				}
				if(name.type==2){
					type = "课堂"
				}
				return (<li className="list-order">
					<div className="news-con">
						<a className="con" href={name.url} target="_blank"><img src={name.thumbnail} /></a>
						<div className="right">
							<h1><a href={name.url} target="_blank">{'【'+type+'】'+title+(name.title.length>21?'......':'')}</a></h1>
							<p className="context">{content+(name.content.length>50?'......':'')}</p>
							<ul className="date">
								<li>
									<span>更新于：</span>
									<span>{name.begintime}</span>
								</li>
								<li>
									<span>阅读数：</span>
									<span>{name.reading}</span>
								</li>
							</ul>
							
							
						</div>
					</div>
				</li>);
		}.bind(this));
		
	}
	createRecommendHotHtml(){
		if(!this.state.recommendHotData)return;
		return this.state.recommendHotData.map(function (name,index){
			//debugger;
			var type;
			if(name.type==1){
				type = "头条"
			}
			if(name.type==2){
				type = "课堂"
			}
			
			return (<div className="newsList">
						<a href={name.url} target="_blank">
							<div className="img"><img src={name.thumbnail} /></div>
							<p>{''+type+'：'+name.title}</p>
							<ul className="detals">
								<li>{name.createtime}</li>
								<li className="last"><img src="../html/images/home/like.png" />{name.reading}</li>
							</ul>
						</a>
					</div>)
		});
		
	}
	getTagHotData(callBack){
		callBack = callBack || function (){};
		var url = domain + '//hotlabel';
		$.when($.ajax({
			url:url,
		})).then(function (data){
			if(!data.hotLabelList)return;
			callBack(data.hotLabelList);
		}).fail(function (data){
			alert('获取热文标签！');
		}.bind(this));
		
	}
	createTagHotHtml(){
		if(!this.state.tagHotData)return;
		return this.state.tagHotData.map(function (name,index){
			var oHref = "/headline.html?name="+name.name;
			return (<a href="javascript:;" data-label={name.name}>{name.name}</a>)
		});
	}
	
	getOthersData(){
		$('.list-title ul li').click(function (){
			var dataId = $(this).attr('data-id');
			/*传值*/
		});
	}
	changeTypeDdata(){
		//debugger;
		// 空为全部
		//1 为眸事资讯
		//2 眸事课堂
		var  _this = this;
		$('.list-title li').click(function (){
			/*清除标签的状态*/
			$('.label1.tag a').removeClass('current');
			$('.list-title li').removeClass('current');
			$(this).addClass('current');
			/*切换类型清空列表数据*/
			_this.countArr =[];
			_this.setState({pageId:10});
			_this.addMoreData();
			_this.state.control = true;
			/*初始化第几页*/
			_this.pageIndex = 1;
		});
		
		/*热门标签切换*/
	
		
		$('.label1.tag a').click(function (){
			
			$('.label1.tag a').removeClass('current');
			$(this).addClass('current');
			_this.countArr =[];
			_this.setState({pageId:10});
			_this.addMoreData();
			/*控制加载按钮*/
			_this.state.control = true;
			/*初始化第几页*/
			_this.pageIndex = 1;
			
			/*设置头部展示*/
			$('.list-title li').removeClass('current');
			$('.list-title li').eq(0).addClass('current');
			$('body,html').animate({ scrollTop: 0 },0);
		});
	}
	getToppostListData(callBack){
		//toppostList
		//192.168.2.127:8099
		var url = domain + '/toppost';
		callBack = callBack || function (){};
		$.when($.ajax({
			  url:url,
			  "contentType": "application/x-www-form-urlencoded; charset=utf-8",
		})).then(function (data){
			if(!data.toppostList)return;
			callBack(data.toppostList);
		}).fail(function (data){
			alert('获取头部列表失败！');
		}.bind(this));
	}
	createToppostListHtml(){
		if(!this.state.toppostListData || !this.state.toppostListData[0])return;
		//1 2 3 4
		var _this = this;
		function findTopdirection(topdirection){
			for(var i=0,k;k=_this.state.toppostListData[i];i++){
				if(k.topdirection==topdirection){
					return k;
				}
			}
		}
		return (<div className="banner-multy">
					<div className="left">
						<a href={findTopdirection(1).url} target="_blank">
							<img src={findTopdirection(1).topphotourl} />
							<span>{findTopdirection(1).title}</span>
						</a>
					</div>
			
						<ol>
							<li>
								<a href={findTopdirection(2).url} target="_blank">
									<img src={findTopdirection(2).topphotourl} />
									<span>{findTopdirection(2).title}</span>
								</a>
							</li>
							<li className="last">
								<a href={findTopdirection(3).url} target="_blank">
									<img src={findTopdirection(3).topphotourl} />
									<span>{findTopdirection(3).title}</span>
								</a>
							</li>
						</ol>
			
					<div className="right">
						<a href={findTopdirection(4).url} target="_blank">
							<img src={findTopdirection(4).topphotourl} />
							<span>{findTopdirection(4).title}</span>
						</a>
					</div>
				</div>);
		
		
	}
	getSearchData(){
			var searchData = decodeURI(window.location.search);
			searchData = searchData.substring(searchData.indexOf("?")+1,searchData.length);
			searchData = searchData.split('&');
			var newData = {};
			for(var i=0;i<searchData.length;i++){
				newData[searchData[i].split('=')[0]] = searchData[i].split('=')[1];
			}
			return newData;
	}
	render(){
		return(
			<div className="content">
			<Loadimg />
				<div className="banner">
					<a  target="_black" href="https://www.mshuoke.com/active/training-of-education.html">
						<img src="html/images/public/ms_top.jpg" />
					</a>
				</div>
				
					{this.state.toppostListHtml}
				
				
				<div className="news-list">
					<div className="list-left">
						<div className="list-title">
							<ol>
								<li className="current" data-id="">全部</li>
								<li data-id="1">眸事资讯</li>
								<li data-id="2">眸事课堂</li>
							</ol>
						</div>
						<ul>
							{this.state.HeadlineHtml}
						</ul>
					</div>
					<div className="list-right">
						<div className="title"><h2>热文推荐</h2></div>
						<div className="box">
							{this.state.recommendHotHtml}
						</div>
						<div className="title"><h2>热文标签</h2></div>
						<div className="label1 tag">
							{this.state.tagHotHtml}
						</div>
					</div>
				</div>
					<a href="javascript:;" className="load-more">查看更多</a>
    		</div>
		);
	}
}
class Loadimg extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="loadimg">
				<div className="main"><img src="html/images/public/load.gif" /></div>
    		</div>
		);
	}
}
React.render(<Headline name="1"/>,$('.main_headline')[0]);