/**
 * bd用户审核管理初始化
 */
var BdFUserReview = {
    id: "BdFUserReviewTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
BdFUserReview.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
BdFUserReview.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        BdFUserReview.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加bd用户审核
 */
BdFUserReview.openAddBdFUserReview = function () {
    var index = layer.open({
        type: 2,
        title: '添加bd用户审核',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/bdFUserReview/bdFUserReview_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看bd用户审核详情
 */
BdFUserReview.openBdFUserReviewDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'bd用户审核详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/bdFUserReview/bdFUserReview_update/' + BdFUserReview.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除bd用户审核
 */
BdFUserReview.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/bdFUserReview/delete", function (data) {
            Feng.success("删除成功!");
            BdFUserReview.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("bdFUserReviewId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询bd用户审核列表
 */
BdFUserReview.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    BdFUserReview.table.refresh({query: queryData});
};

$(function () {
     var defaultColunms = BdFUserReview.initColumn();
    var table = new MSOTable(BdFUserReview.id, msourl+"XXXXXX", defaultColunms);
    table.setPaginationType("client");
    
    //返回值处理
    table.setResponseHandler(function(data){
    		//这里根据接口自定义
        return data._embedded.fbfDemandEntities;
    });
    BdFUserReview.table = table.init();

});
