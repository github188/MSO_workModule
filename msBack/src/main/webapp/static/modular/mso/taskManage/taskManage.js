/**
 * 任务管理管理初始化
 */
var TaskManage = {
    id: "TaskManageTable", //表格id
    seItem: null, //选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
TaskManage.initColumn = function() {
return [
    {
        title: '操作',
        radio: true
    },
    {
        title: '任务ID',
        field: 'taskid',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '任务名',
        field: 'taskname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '发包方公司',
        field: 'companyname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '品牌名',
        field: 'brandname',
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
        title: '任务单价',
        field: 'unitprice',
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
    }
];
};

/**
 * 检查是否选中
 */
TaskManage.check = function() {
var selected = $('#' + this.id).bootstrapTable('getSelections');
if (selected.length == 0) {
    Feng.info("请先选中表格中的某一记录！");
    return false;
} else {
    TaskManage.seItem = selected[0];
    return true;
}
};

/**
 * 点击添加任务管理
 */
TaskManage.openAddTaskManage = function() {
var index = layer.open({
    type: 2,
    title: '添加任务管理',
    area: ['800px', '420px'], //宽高
    fix: false, //不固定
    maxmin: true,
    content: Feng.ctxPath + '/taskManage/taskManage_add'
});
this.layerIndex = index;
};

/**
 * 打开查看任务管理详情
 */
TaskManage.openTaskManageDetail = function() {
if (this.check()) {
    var index = layer.open({
        type: 2,
        title: '任务管理详情',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/taskManage/taskManage_update/' + TaskManage.seItem.id
    });
    this.layerIndex = index;
}
};

/**
 * 删除任务管理
 */
TaskManage.delete = function() {
if (this.check()) {
    var ajax = new $ax(Feng.ctxPath + "/taskManage/delete", function(data) {
        Feng.success("删除成功!");
        TaskManage.table.refresh();
    }, function(data) {
        Feng.error("删除失败!" + data.responseJSON.message + "!");
    });
    ajax.set("taskManageId", this.seItem.id);
    ajax.start();
}
};

/**
 * 查询任务管理列表
 */
TaskManage.search = function() {
var queryData = {};
queryData['condition'] = $("#condition").val();
TaskManage.table.refresh({
    query: queryData
});
};

$(function() {
var csuserid = "5aa62e535d2b4e218f20b5cd7d13697a";
var defaultColunms = TaskManage.initColumn();
var table = new MSOTable(TaskManage.id, msourl + `/pasf/csusers/${csuserid}/tasks?all=1&size=1000000`, defaultColunms);
table.setPaginationType("client");

//返回值处理
table.setResponseHandler(function(result) {
    //这里根据接口自定义
    return result.data;
});
TaskManage.table = table.init();

});
