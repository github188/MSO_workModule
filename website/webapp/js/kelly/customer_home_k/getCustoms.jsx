

class Getcustoms extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			text:'我很想你收到了飞机开绿灯是福建省电力科技发达',
			lightId:1,
			isLightId:true,
			datalist:[],
		};
		this.checkProcess = this.checkProcess.bind(this);
		this.findStateId = this.findStateId.bind(this);
	}
	componentDidMount(){
		
		this.checkProcess(this.state.lightId);
	}
	componentDidUpdate(){
		/*比对完毕 开始show lighting*/
		if(this.state.isLightId){
			this.state.isLightId = false;
			// console.log(this.state.lightId+'============');
			this.checkProcess(this.state.lightId);
		}
	}
	substrText(str){
		if(str.length>=16){
			return str.substr(0,16) + '...';
		}
		return str;
	}
	checkProcess(id){
	
		var columnArr =  $('.column div');
		for(var i=1;i<=id;i++){
			/*利用反差 列5-1 5-2 5-3*/
			$(columnArr[columnArr.length-i]).addClass('current');
		}
		
		this.getStateData(function (data){
			var newArr = [];
			//debugger;
			var datalist = data.data.datalist;
			datalist.map(function (data,index){
				/*倒叙排列*/
				newArr.push(data.state);
				newArr.sort(function (m,n){
					return n-m;
				});
			});

			/*采用倒叙比对*/
			light:for(var i=0;i<newArr.length;i++){
					for(var k=0;k<datalist.length;k++){
						if((datalist[k].state==newArr[i]) && (datalist[k].light)){
							this.setState({lightId:newArr[i],datalist:datalist});
							break light;
						}
					}
			}
		}.bind(this));
	}
	findStateId(id){
		var datalist = this.state.datalist;
		
		for(var i=datalist.length-1;i>=0;i--){
			if(datalist[i].state == id){
				return datalist[i];
			}
		}
		return {titleValue:"",contentValue:""};
	}
	getStateData(callBack){
		var data = {};
		var jfuid =  $.sessionStorage('jfuid');
		/*quality*/
		var url = domain137 + '/quality/ups/'+jfuid+'/cdsnew';
		callBack = callBack || function (){};
		$.when($.ajax({
			 type:'get',
			 contentType:'application/json',
			 url:url,
		})).then(function (data){
			if(data.msg=='success'){
				callBack(data);
			}
		}).fail(function (data){
			
			//alert('获取数据失败！');
		});
	}
	render(){
		return (
				<div className="column-box">
					<div className="columntitle">
						<div className="requirearts"></div>
						<div className="require">获客需求进度</div>
					</div>
					
					<div className="column">
						<div className={"column-top"} ></div>
						<div className={"column-suc"} ></div>
						<div className={"column-paying"} ></div>
						<div className={"column-making"} ></div>
						<div className={"column-examine"} ></div>
					</div>
					
					<ul>
						<li className="first">
							<h3>{this.substrText(this.findStateId(5).titleValue)}</h3>
							<span>{this.findStateId(5).contentValue}</span>
							<span className="endTime">{this.findStateId(5).time}</span>
						</li>
						<li>
							<h3>{this.findStateId(4).titleValue}</h3>
							<span>{this.findStateId(4).contentValue}</span>
						</li>
						<li>
							<h3>{this.findStateId(3).titleValue}</h3>
							<span>{this.findStateId(3).contentValue}</span>
						</li>
						<li className="making-words">
							<h3>{this.findStateId(2).titleValue}</h3>
							<span>{this.findStateId(2).contentValue}</span>
						</li>
						<li className="examine-words">
							<h3>{this.findStateId(1).titleValue}</h3>
							<span>{this.findStateId(1).contentValue}</span>
						</li>
					</ul>
				</div>
				);
	}
}

export default Getcustoms;