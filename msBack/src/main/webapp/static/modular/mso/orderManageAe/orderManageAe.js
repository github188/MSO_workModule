/**
 * 订单管理ae管理初始化
 */
var OrderManageAe = {
    id: "OrderManageAeTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
OrderManageAe.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
OrderManageAe.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        OrderManageAe.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加订单管理ae
 */
OrderManageAe.openAddOrderManageAe = function () {
    var index = layer.open({
        type: 2,
        title: '添加订单管理ae',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/orderManageAe/orderManageAe_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看订单管理ae详情
 */
OrderManageAe.openOrderManageAeDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '订单管理ae详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/orderManageAe/orderManageAe_update/' + OrderManageAe.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除订单管理ae
 */
OrderManageAe.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/orderManageAe/delete", function (data) {
            Feng.success("删除成功!");
            OrderManageAe.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("orderManageAeId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询订单管理ae列表
 */
OrderManageAe.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    OrderManageAe.table.refresh({query: queryData});
};

$(function () {
     var defaultColunms = OrderManageAe.initColumn();
    var table = new MSOTable(OrderManageAe.id, msourl+"XXXXXX", defaultColunms);
    table.setPaginationType("client");
    
    //返回值处理
    table.setResponseHandler(function(data){
    		//这里根据接口自定义
        return data._embedded.fbfDemandEntities;
    });
    OrderManageAe.table = table.init();

});
