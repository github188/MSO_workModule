/**
 * 任务管理ae管理初始化
 */
var TaskManageAe = {
    id: "TaskManageAeTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
TaskManageAe.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
TaskManageAe.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        TaskManageAe.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加任务管理ae
 */
TaskManageAe.openAddTaskManageAe = function () {
    var index = layer.open({
        type: 2,
        title: '添加任务管理ae',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/taskManageAe/taskManageAe_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看任务管理ae详情
 */
TaskManageAe.openTaskManageAeDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '任务管理ae详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/taskManageAe/taskManageAe_update/' + TaskManageAe.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除任务管理ae
 */
TaskManageAe.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/taskManageAe/delete", function (data) {
            Feng.success("删除成功!");
            TaskManageAe.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("taskManageAeId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询任务管理ae列表
 */
TaskManageAe.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    TaskManageAe.table.refresh({query: queryData});
};

$(function () {
     var defaultColunms = TaskManageAe.initColumn();
    var table = new MSOTable(TaskManageAe.id, msourl+"XXXXXX", defaultColunms);
    table.setPaginationType("client");
    
    //返回值处理
    table.setResponseHandler(function(data){
    		//这里根据接口自定义
        return data._embedded.fbfDemandEntities;
    });
    TaskManageAe.table = table.init();

});
