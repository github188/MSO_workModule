/**
 * am订单管理管理初始化
 */
var AmOrderManage = {
    id: "AmOrderManageTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
AmOrderManage.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
AmOrderManage.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        AmOrderManage.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加am订单管理
 */
AmOrderManage.openAddAmOrderManage = function () {
    var index = layer.open({
        type: 2,
        title: '添加am订单管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/amOrderManage/amOrderManage_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看am订单管理详情
 */
AmOrderManage.openAmOrderManageDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'am订单管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/amOrderManage/amOrderManage_update/' + AmOrderManage.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除am订单管理
 */
AmOrderManage.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/amOrderManage/delete", function (data) {
            Feng.success("删除成功!");
            AmOrderManage.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("amOrderManageId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询am订单管理列表
 */
AmOrderManage.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    AmOrderManage.table.refresh({query: queryData});
};

$(function () {
     var defaultColunms = AmOrderManage.initColumn();
    var table = new MSOTable(AmOrderManage.id, msourl+"XXXXXX", defaultColunms);
    table.setPaginationType("client");
    
    //返回值处理
    table.setResponseHandler(function(data){
    		//这里根据接口自定义
        return data._embedded.fbfDemandEntities;
    });
    AmOrderManage.table = table.init();

});
