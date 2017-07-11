class Footer extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			  copyRight:"Copyright © 2011-2017  上海脉豪商务信息咨询有限公司  版权所有  沪ICP备17004427号-1",
			  address:"上海市虹口区四平路198号轻工国际大厦3楼  |  400-900-5288",
		}
	}
    render(){
        return(
          <div className="footer">
              <p>{this.state.copyRight}</p>
              <p>{this.state.address}</p>
          </div>
        )
    }
}
export default Footer;