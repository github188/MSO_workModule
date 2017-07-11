require("../../../public/nav.css");
//require("../../../public/index_header.css");
require("./index_header.css");

require("../../../public/asideBar.css");

$(function(){
	var sHeight = $(window).height();
	if(sHeight>=880){
		require("./style.css"); 	
	}
});

//import Header from '../../../public/index_header.jsx';
import Header from './index_header.jsx';
import Footer from '../../../public/footer.jsx';
import GetCustomer from './getCustomer.jsx';
import ServiceType from './serviceType.jsx';
import Advantage from  './advantage.jsx';
import MsoHead from './msoHead.jsx';
import Companions from './companions.jsx';
import MsoProcess from './msoProcess.jsx';
import Immutable from 'immutable';
import AsideBar from '../../../public/asideBar.jsx';

import Maincopy from '../../../public/indexs/index.jsx';
 
/*统一使用公共模块*/
//import antd from '../../../../node_modules/antd'; 


import { Slider, Switch } from 'antd';

//var Slider = antd.Slider;
//var Switch =  antd.Switch;

class Demo extends React.Component {
  state = {
    disabled: false,
  };
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    );
  }
}


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
		<div>
				<header>
					<Header/>
				</header>
			<div className="home-index" id="pageContain">
				
				<div className="page page1 section">
					<div className="contain">
				
						<GetCustomer />
					</div>
				</div>
				<div className="page page2 section">
					<div className="contain">
						<ServiceType />
					</div>
				</div>
				<div className="page page3 section">
					<div className="contain">
						<Advantage />
						<MsoHead />
					</div>
				</div>
				<div className="page page4 section">
					<div className="contain">
						<Companions />
					</div>
				</div>
				<div className="page page5 section">
					<div className="contain">
						<MsoProcess />
						<footer>
							<Footer />
						</footer>
					</div>
				</div>
				
			</div>
			<div className="page page6 section">
				<div className="contain">
					<MsoProcess />
					<footer>
						<Footer />
					</footer>
				</div>
			</div>
			
			
			<AsideBar />
		</div>
		);
	}
}

$(function(){
	var sHeight = $(window).height();
	if(sHeight>=880){
		ReactDOM.render(<Main />,document.getElementById('main'));
	}else{
		ReactDOM.render(<Maincopy />,document.getElementById('main'));
	}
});


