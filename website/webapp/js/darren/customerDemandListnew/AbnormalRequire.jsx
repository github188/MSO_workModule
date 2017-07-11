
import Main from './Main.jsx';

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
    				<input type="text" placeholder="请输入需求名" className="demand-name" id="ycdemandname" />
    				<div className="left">
    					<label>发布时间：</label>
    					<input type="text" className="form_date start_date" date-format="yyyy-mm-dd" readonly  id="ycstart_date" /><i className="date_icon"></i>
    					<label>-</label>
    					<input type="text" className="form_date end_date" date-format="yyyy-mm-dd" readonly id="ycend_date" /><i className="date_icon"></i>
    					<button type="button" data-seach="abnormal" id="seach">确定</button>
    				</div>
    			</div>
    			<div className="search-result" id="search_reslut_abnormal">
					<Main search={this.state.search} state="6" />
				</div>
    		</div>
		);
	}
}

export default AbnormalRequire;