
/*统一使用公共模块*/

/*https://gateway.mshuoke.com/quality/updatereport reportid downloadcount*/
//https://gateway.mshuoke.com/quality/ccreport/20160725062619411



window.tableTotal = function(data) {
$('#tableTotal').bootstrapTable({
    data: data
});
}

class Customerreport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            releasenumSum: 0,
            demandname: ''
        }
    }
    componentDidMount() {
        this.rootEl = $('#toolbar');
        this.setState({
            demandname: localStorage.getItem('currentData-demandname'),
            releasenumSum: localStorage.getItem('currentData-releasenum')
        })
        this.oneLoadTable();
        //var $table = $('#tableTotal').bootstrapTable({url:url});

    }
    oneLoadTable() {
        // var url = domain137 + '/quality/ccreport/'+location.hash.substr(1);
        var url = domain137 + `/quality/secondreport?pid=${location.hash.substr(1)}`
        $.ajax({
            url: url,
        }).then(function(result) {
            console.log(result, 666)
            // if(data.hfp.releasenum){//发布量
            // 	this.setState({
            // 		releasenumSum:data.hfp.releasenum,		//发布量
            // 		demandname:data.hfp.demandname,			//需求名
            // 	});
            // }
            tableTotal(result.data); //；列表数据
            /*控制样式*/
            if ($('.pull-right.pagination').css('display') == 'none') {
                $('#toolbar .back').addClass('current');
            }

            $('#toolbar .back').click(function() {
                history.go(-1);
            //location.href = 'customerreport.html';
            });

            this.donwFile();
        }.bind(this)).fail(function(data) {
            //debugger;

        });
    }
    /*
    *下载文件
    */
    donwFile() {
        //updatereport reportid downloadcount
        //debugger;
        this.rootEl.on('click', '.donwFile1', function(ev) {

            var target = ev.currentTarget;
            var reportid = $(target).attr('data-reportid');
            let url = domain137 + `/quality/download?reportid=${reportid}`;

            $.ajax({
                type: "patch",
                url: url,
                success: function(data) {
                   
                },
            });
        }.bind(this));

    }
    render() {
        return (
            <div id="toolbar">
				<div>
					<div className="require">
						<ul>
							<li>需求名称：</li>
							<li>{this.state.demandname}</li>
							<li>发布量：</li>
							<li>{this.state.releasenumSum}</li>
							
						</ul>
						<div className="timebox"></div>
					</div>
					<table id="tableTotal"
            data-search="true"
            data-query-params="queryParams"
            data-pagination="true"

            data-response-handler="responseHandler" >
						<thead>
							<tr>
							  <th data-formatter="oderdemandname">序号</th>
							  <th data-field="finishnum">完成量</th>
							  <th data-field="reporttime">完成时间</th>
							  <th data-formatter="reporturl">成单报告</th>
							</tr>
						</thead>
					</table>
					<a href="javascript:" type="button" className="back" data-reactid=".5.5">返回</a>
				</div>
				</div>
        );
    }
}


window.oderdemandname = function(value, row, index) {
return index += 1;
};


window.reporturl = function(value, row, index) {
//href="'+'http://res.mshuoke.com/'+row.reporturl+'"
//console.log(value,row,index);			//	downloadcount下载次数								///reporturl 下载路径
if (row.downloadcount == '0') {
    return `<a class="donwFile1" data-reportid="${row.reportid}" href="https://package.mshuoke.com${row.reporturl}">
		
				<span class="ant-scroll-number-previous"  ><span >下载</span><sup data-show="true" class="ant-scroll-number ant-badge-count">new</sup></span>
		</a>`;
}

return `<a class="donwFile1" data-reportid="${row.reportid}" href="https://package.mshuoke.com${row.reporturl}">下载</a>`;

};

export default Customerreport;



