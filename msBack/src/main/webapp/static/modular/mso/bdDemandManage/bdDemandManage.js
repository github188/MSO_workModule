/**
 * BD发包方需求管理管理初始化
 */
var BdDemandManage = {
    id: "BdDemandManageTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
BdDemandManage.initColumn = function () {
    return [
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
				  title: '业务类型',
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
					return '<div class="btn btn-primary btn-lg"  data-servicetype="'+row.servicetype+'"  data-requiredid="'+row.id+'"  >查看详情</div>';

				  }
				  
				}
				*/
				]  
};

/**
 * 检查是否选中
 */
BdDemandManage.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        BdDemandManage.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加BD发包方需求管理
 */
BdDemandManage.openAddBdDemandManage = function () {
    var index = layer.open({
        type: 2,
        title: '添加BD发包方需求管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/bdDemandManage/bdDemandManage_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看BD发包方需求管理详情
 */
BdDemandManage.openBdDemandManageDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'BD发包方需求管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/bdDemandManage/bdDemandManage_update/' + BdDemandManage.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除BD发包方需求管理
 */
BdDemandManage.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/bdDemandManage/delete", function (data) {
            Feng.success("删除成功!");
            BdDemandManage.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("bdDemandManageId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询BD发包方需求管理列表
 */
BdDemandManage.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    BdDemandManage.table.refresh({query: queryData});
};

$(function () {
     var defaultColunms = BdDemandManage.initColumn();
	 
    var table = new msobackTable({
			bstableId:BdDemandManage.id,
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

   
    BdDemandManage.table = table.init();
	
	
	/*处理bdlist相关数据*/
	$.fn.extend({
		getRoleList:function (data){
			//GET 开发完成 /pasf/pt/sysusers
			var url = domain137 + "/pt/sysusers";
			var bdUsername = 'BD专员';
			$.when($.ajax({
				url:url,
				//选择BD专员
				data:{rolename:bdUsername},
				dataType:'json',
			})).then(function (data){
				if(data.msg=="success"){
					data.data.map(function (data,index){
						$('#BDstaff').append('<option value="'+data.userid+'">'+data.username+'</option>');
					});
				}
				
			}).fail(function (data){
		
			});
		}
	});
	
	$('#BDstaff').getRoleList();
	
	$('#BDstaff').change(function (){
			/*获取某个bd专员的数据*/	

		url = domain137+'/bdusers/'+this.value+'/demands';

		$('#' + BdDemandManage.id).bootstrapTable('refresh',{url:url});
				
	});
});
