require("../nav.css");
require("./index_header.css");
require("./style.css");
require("../asideBar.css");
import Header from './index_header.jsx';
import Footer from '../footer.jsx';
import GetCustomer from './getCustomer.jsx';
import ServiceType from './serviceType.jsx';
import Advantage from  './advantage.jsx';
import MsoHead from './msoHead.jsx';
import Companions from './companions.jsx';
import MsoProcess from './msoProcess.jsx';
import Immutable from 'immutable';
import AsideBar from '../asideBar.jsx';
 

/*统一使用公共模块*/
class Mains extends React.Component{
	constructor(props) {
		super(props);
		this.state = {  
			header:[{title:'首页',href:'https://www.baidu.com/'},{title:'眸事资讯',href:'1'},{title:'帮助中心',href:'1'},{title:'服务商',href:'1'}],
		}
		this.init();
	}
	init(){
		
	}
	componentDidMount(){

	}

	render(){
		return (
		<div>
			<header>
					<Header/>
			</header>
			<div className="home-index">
				
				<GetCustomer />
				<ServiceType />
				<Advantage />
				<MsoHead />
				<Companions />
				<MsoProcess />
				<footer>
					<Footer />
				</footer>
				<AsideBar />
			</div>
		</div>
		);
	}
}

export default  Mains;
