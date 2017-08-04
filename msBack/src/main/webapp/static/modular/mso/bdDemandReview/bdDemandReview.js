/**
 * BD发包方需求审核管理初始化
 */
var BdDemandReview = {
    id: "BdDemandReviewTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
BdDemandReview.initColumn = function () {
    return  columns = [
		{field: 'selectItem', radio: true},
		{title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
		{  
		  field: 'id',  
		  title: '包id'  
		}, {  
		  field: 'username',  
		  title: '用户名'  
		}, {  
		  field: 'callname',  
		  title: '称呼'  
		}, {  
		  field: 'brandname',  
		  title: '品牌名'  
		}, {  
		  field: 'companyname',  
		  title: '公司名'  
		}, 
		 {  
		  field: 'servicetypedesc',  
		  title: '业务类型' ,
		}, 
		 {  
		  field: 'industry',  
		  title: '行业'  
		}, 
		 {  
		  field: 'demandname',  
		  title: '需求名'  
		}, 
		 {  
		  field: 'demandquantity',  
		  title: '需求量'  
		}, 
		 {  
		  field: 'totalprice',  
		  title: '总金额'  
		}, 
		{  
		  field: 'auditor',  
		  title: '审核人'  
		}, 
		{  
		  field: 'demandstatedesc',  
		  title: '状态'  
		}, 
		{  
		  field: 'vestingtime',  
		  title: '归属年月'  
		}, 
		{  
		  field: 'releasetime',  
		  title: '发布时间'  
		}, 
		{  
		  field: 'audittime',  
		  title: '审核时间'  
		}
		/*, 
		{  
		  field: 'sendstatus',  
		  title: '操作' ,
		  'class':'handle',
		  formatter:function (data,row,b){
			//var datarow = [row.servicetype,row.id];
			return '<div class="btn btn-primary btn-lg" data-state="'+row.demandstate+'" data-servicetype="'+row.servicetype+'"  data-requiredid="'+row.id+'"  >查看详情</div>';

		  }
		}
		*/
		] 
};

/**
 * 检查是否选中
 */
BdDemandReview.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        BdDemandReview.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加BD发包方需求审核
 */
BdDemandReview.openAddBdDemandReview = function () {
    var index = layer.open({
        type: 2,
        title: '添加BD发包方需求审核',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/bdDemandReview/bdDemandReview_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看BD发包方需求审核详情
 */
BdDemandReview.openBdDemandReviewDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'BD发包方需求审核详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/bdDemandReview/bdDemandReview_update/' + BdDemandReview.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除BD发包方需求审核
 */
BdDemandReview.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/bdDemandReview/delete", function (data) {
            Feng.success("删除成功!");
            BdDemandReview.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("bdDemandReviewId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询BD发包方需求审核列表
 */
BdDemandReview.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    BdDemandReview.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = BdDemandReview.initColumn();
	 
    var table = new msobackTable({
			bstableId:BdDemandReview.id,
			url:'https://gateway.mshuoke.com/pasf/bdusers/'+roleid+'/demands',
			queryParams:function (data){
				ifAll = $('#BDstaff').val();
				 if(!(ifAll == 1 || ifAll ==0)){
					 ifAll = 0;
				 }
				return  $.extend(true,{all:ifAll,size:100000000,isbdadmin:1},data);
			},
			columns:defaultColunms,
			paginationType:'client',
			responseHandler:function (data){
				//client data || serve rows
				return data.data;
			},
			onLoadSuccess:function (){
				// starting do soemthing after load succeed 
				
			}
		});
    BdDemandReview.table = table.init();

});
