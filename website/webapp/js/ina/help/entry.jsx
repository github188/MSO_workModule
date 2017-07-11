require("../../../public/nav.css");
require("../../../public/asideBar.css");
require("./style.css");

import Header from '../../../public/header.jsx';
import Footer from '../../../public/footer.jsx';
import MidCon from './midCon.jsx';
import AsideBar from '../../../public/asideBar.jsx';
 

/*统一使用公共模块*/
class Main extends React.Component{
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
		<div className="polict">
			<header>
				<Header />
			</header>
			<MidCon />
			<footer>
				<Footer />
			</footer>
			<AsideBar />
		</div>);
	}
}
ReactDOM.render(<Main />,document.getElementById('main'));
