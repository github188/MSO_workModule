
/*统一使用公共模块*/

class Customerreport extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		this.rootEl = $('#toolbar');
		this.oneLoadTable();
	}
	oneLoadTable(){
		let url = domain137 + `/quality/firstreport?jfuid=${$.sessionStorage('jfuid')}&demandName=&demandState=&startTime=&endTime=`;
		var $table = $('#table').bootstrapTable({
			url:url,
			pageNumber:$.setSessionStorage('pagination-page-number')?$.setSessionStorage('pagination-page-number')*1:1
		});
		
		
		this.rootEl.on('click','a.checkDetail',function (ev){
			
			var target = ev.currentTarget;
			var index = $(target).attr('data-index');
			var countData = $table.bootstrapTable('getData');
			var currentData = countData[index];
			//debugger;
			
			var demandname = $(target).attr('data-name');

			var releasenumSum = $(target).attr('data-releasenum');
			//alert(demandname);
			//alert(currentData.demandname);
			localStorage.setItem("currentData-demandname",demandname)

			// $.setSessionStorage('currentData-demandname',demandname)
			localStorage.setItem('currentData-releasenum',releasenumSum)
			location.href = 'customerreportdown.html#'+currentData.pid;
		}.bind(this));
	}
	
	render(){
		return (
				<div id="toolbar">
					<table id="table"
						
						data-search="true"
						data-query-params="queryParams"
						data-pagination="true"  
						
						data-page-list="[10, 15, 20, 50, ALL]"
						data-response-handler="responseHandler" 
						data-sort-name="releasetime"
						data-sort-order="desc"
						
						>
					<thead>
						<tr>
						  <th data-formatter="oderdemandname" data-width="60px">序号</th>
						  <th data-field="demandname"><div>需求名称</div></th>
						  <th data-field="releasenum" data-width="90px"><div>发布量</div></th>
						  <th data-field="finishnum" data-width="90px"><div>完成量</div></th>
						  <th data-field="createtime" data-width="295px"><div>发布时间</div></th>
						  <th data-formatter="editNext" data-width="150px"><div>操作</div></th>
						</tr>
					</thead>
			    </table>
				<div>
					<div>汇总</div>
					<table id="tableTotal">
						<thead>
							<tr>
							  <th data-field="releasetotal">发布量</th>
							  <th data-field="finishtotal">完成量</th>
							</tr>
						</thead>
					</table>
				</div>
				</div>
			);
	}
}

/*
data Arr
*/
window.tableTotal = function(data){
	 $('#tableTotal').bootstrapTable({
		 data: data,
	 });
}
window.responseHandler = function (result){
	console.log(result,11)
	result.finishtotal>0?"":result.finishtotal=0;
	result.releasetotal>0?"":result.releasetotal=0;
	var data=result.data;
	for (var i = data.length - 1; i >= 0; i--) {
		data[i].finishnum>0?"":data[i].finishnum=0
		data[i].releasenum>0?"":data[i].releasenum=0
	}

	
	/*参数必须数组 如果不用url访问*/
	tableTotal([result]);
	
	return result.data;
}


window.oderdemandname = function (value,row,index){
	return index+=1;
};

window.queryParams = function (params) {
   return {};
}

window.editNext = function (value,row,index) {
	//$.setSessionStorage('pagination-page-number',$('.pagination .page-number.active a').html());
	if(row.downloadcount == '0'){		//downloadneed 0 b不显示  1 显示	
		return `<a class="checkDetail" data-releasenum=${row.releasenum} data-name=${row.demandname}  data-index=${index} href="javascript:;" >
		
		<span class="ant-scroll-number-previous"  ><span >查看</span><sup data-show="true" class="ant-scroll-number ant-badge-count">new</sup></span>
		</a>`;
	}
	return 	`<a class="checkDetail" data-releasenum=${row.releasenum} data-name=${row.demandname} data-index=${index} href="javascript:;" >查看</a>`;
}


/*单个参数one value second 这一例的对象  three  current of index*/
window.demandidFormatter = function(value,row,index){
	return '$'+value+"first-test";
			
}

export default Customerreport;



