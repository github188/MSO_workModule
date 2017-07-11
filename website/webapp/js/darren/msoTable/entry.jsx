import RactTable from '../../../public/reactTable/entry.jsx';

/*统一使用公共模块*/

class Cell extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			cellHtml:'',
		}
		
	}
	componentDidMount(){
		this.setState({
			cellHtml:this.createCell(),
		})
	}
	createCell(){
		if(this.props.data){
			return this.props.data.map(function (data,index){
				return (<div>{data.updateTime}</div>)
			});
		}
	}
	render(){
		return (
				<div>
					{this.state.cellHtml}
				</div>
				);
	}
}



class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			entryData:{
				data:{
					url:'http://192.168.2.68:8080/testxx',/*(必须)*/
					page:2,/*(必须)*/
					sort:'name',
					ContentType:"application/json; charset=utf-8", /*(必须)*/
				    xhrFields: {
					  withCredentials: true
				    }	/*(必须)*/				
				},/*(必须)*/
				paging:true,/*是否显示分页 (必须)*/
				gotoAppoint:true,/*是否允许输入页数，点击按钮跳转*/
				mainButton:10,/*分页显示得button大于多少开始显示...*/
				useElement:'div',//table and div /*(必须)*/
				useClassName:'reslut_box',
				cellName:'testx',/*cell json.name 需要得字段(必须)*/
				cell:function (data){
					console.log(data);
					return <Cell data={data} />
				}
			}
		}
		/*拿到数据触发*/
		/*测试数据接口*/
		//http://192.168.2.68:8080/testxx
		/*数据加载成功以后开始create 数据*/
	}
	componentDidMount(){
	
	}

	render(){
		return (
				<div>
					<RactTable data={this.state.entryData} />
				</div>
				);
	}
}

ReactDOM.render(<Main />,document.getElementById('supplier'));
