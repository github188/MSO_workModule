/**
 * 订单指派管理初始化
 */
var OrderSet = {
    id: "OrderSetTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
OrderSet.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
OrderSet.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        OrderSet.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加订单指派
 */
OrderSet.openAddOrderSet = function () {
    var index = layer.open({
        type: 2,
        title: '添加订单指派',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/orderSet/orderSet_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看订单指派详情
 */
OrderSet.openOrderSetDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '订单指派详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/orderSet/orderSet_update/' + OrderSet.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除订单指派
 */
OrderSet.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/orderSet/delete", function (data) {
            Feng.success("删除成功!");
            OrderSet.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("orderSetId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询订单指派列表
 */
OrderSet.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    OrderSet.table.refresh({query: queryData});
};

$(function () {
     var defaultColunms = OrderSet.initColumn();
    var table = new MSOTable(OrderSet.id, msourl+"XXXXXX", defaultColunms);
    table.setPaginationType("client");
    
    //返回值处理
    table.setResponseHandler(function(data){
    		//这里根据接口自定义
        return data._embedded.fbfDemandEntities;
    });
    OrderSet.table = table.init();

});
