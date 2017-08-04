/**
 * 订单管理管理初始化
 */
var OrderManage = {
    id: "OrderManageTable", //表格id
    seItem: null, //选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
OrderManage.initColumn = function() {
return [
    {
        field: 'selectItem',
        radio: true
    },
    {
        title: '订单ID',
        field: 'orderid',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '订单名',
        field: 'ordername',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '接包方用户名',
        field: 'username',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '接包方公司名',
        field: 'companyname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '内部简称',
        field: 'shortname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '业务类型',
        field: 'servicetypedesc',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '订单数量',
        field: 'orderquantity',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '完成数量',
        field: 'completequantity',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '订单单价',
        field: 'unitprice',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '状态',
        field: 'orderstatedesc',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '是否暂停',
        field: 'ispause',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '归属年月',
        field: 'vestingtime',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: 'AE负责人',
        field: 'ae',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '创建时间',
        field: 'createtime',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '更新时间',
        field: 'updatetime',
        visible: true,
        align: 'center',
        valign: 'middle'
    }
];
};

/**
 * 检查是否选中
 */
OrderManage.check = function() {
var selected = $('#' + this.id).bootstrapTable('getSelections');
if (selected.length == 0) {
    Feng.info("请先选中表格中的某一记录！");
    return false;
} else {
    OrderManage.seItem = selected[0];
    return true;
}
};

/**
 * 点击添加订单管理
 */
OrderManage.openAddOrderManage = function() {
var index = layer.open({
    type: 2,
    title: '添加订单管理',
    area: ['800px', '420px'], //宽高
    fix: false, //不固定
    maxmin: true,
    content: Feng.ctxPath + '/orderManage/orderManage_add'
});
this.layerIndex = index;
};

/**
 * 打开查看订单管理详情
 */
OrderManage.openOrderManageDetail = function() {
if (this.check()) {
    var index = layer.open({
        type: 2,
        title: '订单管理详情',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/orderManage/orderManage_update/' + OrderManage.seItem.id
    });
    this.layerIndex = index;
}
};

/**
 * 删除订单管理
 */
OrderManage.delete = function() {
if (this.check()) {
    var ajax = new $ax(Feng.ctxPath + "/orderManage/delete", function(data) {
        Feng.success("删除成功!");
        OrderManage.table.refresh();
    }, function(data) {
        Feng.error("删除失败!" + data.responseJSON.message + "!");
    });
    ajax.set("orderManageId", this.seItem.id);
    ajax.start();
}
};

/**
 * 查询订单管理列表
 */
OrderManage.search = function() {
var queryData = {};
queryData['condition'] = $("#condition").val();
OrderManage.table.refresh({
    query: queryData
});
};

$(function() {
var csuserid = "5aa62e535d2b4e218f20b5cd7d13697a";
var defaultColunms = OrderManage.initColumn();
var table = new MSOTable(OrderManage.id, msourl + `/pasf/csusers/${csuserid}/orders?all=1&size=1000000`, defaultColunms);
table.setPaginationType("client");

//返回值处理
table.setResponseHandler(function(result) {
    //这里根据接口自定义
    return result.data;
});
OrderManage.table = table.init();

});
