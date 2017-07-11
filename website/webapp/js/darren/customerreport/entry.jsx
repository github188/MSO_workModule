
/*统一使用公共模块*/
require("./styleline.css");
import HeaderCustomer from '../../../public/header-customer.jsx';
import Tablelist from './tablelist.jsx';
import Footer from '../../../public/footer.js';




class Customerreport extends React.Component{
	constructor(props) {
		super(props);
		
		
	}	
	render(){
		return (
				<div>
					<div className="customerreport" >
						<div className="topNav">
							<HeaderCustomer />
						</div>
						
						<Tablelist />
					</div>
					<div className="footer_box">
						<Footer />
					</div>
				</div>
				);
	}
}


ReactDOM.render(<Customerreport />,document.getElementById('main'));


