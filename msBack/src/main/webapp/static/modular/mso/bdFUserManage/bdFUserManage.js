/**
 * bd发包方用户管理管理初始化
 */
var BdFUserManage = {
    id: "BdFUserManageTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
BdFUserManage.initColumn = function () {
    return [ 	
				{field: 'selectItem', radio: true},
				{title: 'jfuid', field: 'jfuid', visible: false, align: 'center', valign: 'middle'},
				{  
				  field: 'jfuname',  
				  title: '用户名'  
				}, {  
				  field: 'compname',  
				  title: '公司名'  
				}, 
				 {  
				  field: 'compfullname',  
				  title: '公司全称'  
				}, 
				 {  
				  field: 'brandname',  
				  title: '品牌名'  
				}, 
				 {  
				  field: 'name',  
				  title: '称呼'  
				}, 
				 {  
				  field: 'sourceName',  
				  title: '来源',
				
				}, 
				 {  
				  field: 'jfumobilephone',  
				  title: '手机号'  
				}, 
				{  
				  field: 'jfudisable',  
				  title: '是否冻结',
				  formatter:function (data,row,index){
					  var  arr = ['启用','停用'];
					  return arr[row.jfudisable-1];
				  }
				}, 
				{  
				  field: 'sysName',  
				  title: '审核人'  
				}, 
				{  
				  field: 'distributionstate',  
				  title: '状态',
				  formatter:function (data,row,index){
					 var arr = ['待审核','','','驳回','通过','再次提交'];
					 return arr[row.distributionstate];
				  }
				}, 
				{  
				  field: 'createtime',  
				  title: '注册时间'  
				}, 
				{  
				  field: 'releasetime',  
				  title: '审核时间'  
				}, 
				{  
				  field: 'audittime',  
				  title: '特殊说明'  
				}/*, 
				{  
				  field: 'sendstatus',  
				  title: '操作' ,
				  'class':'handle',
				  formatter:function (data,row,b){
					//var datarow = [row.servicetype,row.id];
					
					return '<div class="btn btn-primary btn-lg"  data-servicetype="'+row.servicetype+'"  data-jfuid="'+row.jfuid+'"  >查看用户详情</div>';

				  }
				}
				*/
			];  
};

/**
 * 检查是否选中
 */
BdFUserManage.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');

    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        BdFUserManage.seItem = selected[selected.length-1];
        return true;
    }
};

/**
 * 点击添加bd发包方用户管理
 */
BdFUserManage.openAddBdFUserManage = function () {
    var index = layer.open({
        type: 2,
        title: '添加bd发包方用户管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/bdFUserManage/bdFUserManage_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看bd发包方用户管理详情
 */
BdFUserManage.openBdFUserManageDetail = function () {
	
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'bd发包方用户管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/bdFUserManage/bdFUserManage_update/' + BdFUserManage.seItem.jfuid
        });
        this.layerIndex = index;
    }
};

/**
 * 删除bd发包方用户管理
 */
BdFUserManage.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/bdFUserManage/delete", function (data) {
            Feng.success("删除成功!");
            BdFUserManage.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("bdFUserManageId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询bd发包方用户管理列表
 */
BdFUserManage.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    BdFUserManage.table.refresh({query: queryData});
};

$(function () {

	var defaultColunms = BdFUserManage.initColumn();
	 
	var url =  'https://gateway.mshuoke.com/pasf/' + 'bdusers/admin/users';
    var table = new msobackTable({
			bstableId:BdFUserManage.id,
			url:url,
			queryParams:function (data){
				ifAll = $('#BDstaff').val();
				 if(!(ifAll == 1 || ifAll ==0)){
					 ifAll = 0;
				 }
				return  $.extend(true,{all:ifAll,size:100000000,isbdadmin:1,time:new Date()},data);
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
    BdFUserManage.table = table.init();
	
	
	
});
