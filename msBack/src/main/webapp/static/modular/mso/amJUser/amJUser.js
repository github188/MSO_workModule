/**
 * am接包方用户信息管理初始化
 */
var AmJUser = {
    id: "AmJUserTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
AmJUser.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
AmJUser.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        AmJUser.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加am接包方用户信息
 */
AmJUser.openAddAmJUser = function () {
    var index = layer.open({
        type: 2,
        title: '添加am接包方用户信息',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/amJUser/amJUser_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看am接包方用户信息详情
 */
AmJUser.openAmJUserDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'am接包方用户信息详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/amJUser/amJUser_update/' + AmJUser.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除am接包方用户信息
 */
AmJUser.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/amJUser/delete", function (data) {
            Feng.success("删除成功!");
            AmJUser.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("amJUserId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询am接包方用户信息列表
 */
AmJUser.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    AmJUser.table.refresh({query: queryData});
};

$(function () {
     var defaultColunms = AmJUser.initColumn();
    var table = new MSOTable(AmJUser.id, msourl+"XXXXXX", defaultColunms);
    table.setPaginationType("client");
    
    //返回值处理
    table.setResponseHandler(function(data){
    		//这里根据接口自定义
        return data._embedded.fbfDemandEntities;
    });
    AmJUser.table = table.init();

});
