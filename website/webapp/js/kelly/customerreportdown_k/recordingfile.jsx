
/*统一使用公共模块*/

/*https://gateway.mshuoke.com/quality/updatereport reportid downloadcount*/
//https://gateway.mshuoke.com/quality/ccreport/20160725062619411

window.tableTotal = function(data) {
$('#tableTotal').bootstrapTable({
    data: data
});
}

class Recordingfile extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			recordingHtml:"",
			recordingData:'',
			demandreleasequantity:0,
			demandcompletequantity:0,
		};
        this.oneLoadTable =  this.oneLoadTable.bind(this);
    }
    componentDidMount() {
	   $('.reports.count').attr('border',1);
       this.oneLoadTable(function (data){
		   //debugger;
		   this.setState({
			   recordingData:data.recordings,
			   demandreleasequantity:data.demandreleasequantity,
			   demandcompletequantity:data.demandcompletequantity
		   });
		   this.setState({recordingHtml:this.createRecordingHtml()});
	   }.bind(this));
    }
	createRecordingHtml(){
		var recordingData = this.state.recordingData;
		if(recordingData){
			return recordingData.map(function (data,index){
				return(
					<tr>
						<td>
							<span>{index+1}</span>
							<span className="timetitle">&nbsp;&nbsp;&nbsp;&nbsp;录音文件对应时间</span>
						</td>
						<td>{data.censusdayrange}</td>
						<td>
							<a className="downloadC" href={domainDown+data.recordingurl}>
								<span>下载</span>
							</a>
						</td>
				   </tr>
				);
			});
		}
	}
    oneLoadTable(callBack) {
    
		callBack = callBack || function (){};
		//GET 开发完成 /quality/demands/{demandid}/recordings
	   // var url = domain137 + `/quality/demands?pid=${location.hash.substr(1)}`;
		
		var url = domain137 + `/quality/demands/${location.hash.substr(1)}/recordings?size=10000`
        $.ajax({
            url: url,
        }).then(function(result) {
			if(result.msg == "success"){
				callBack(result.data);
			}
        }).fail(function(data) {
           

        });
    }
    donwFile() {
      

    }
    render() {
        return (
            <div className="reports">
				<p className="reports_title">汇总</p>
				<table className="reports count" BorDer="1">
					<thead >
						<tr>
							<th>发布量</th>
							<th>完成量</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{this.state.demandreleasequantity}</td>
							<td>{this.state.demandcompletequantity}</td>
						</tr>
					</tbody>
				</table>
				
				<p className="reports_title">录音文件</p>
				<table className="reports_file">
					<tbody>
						{this.state.recordingHtml}
					</tbody>
				</table>
			</div>
        );
    }
}



export default Recordingfile;



