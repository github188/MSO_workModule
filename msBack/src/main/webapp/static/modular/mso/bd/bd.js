/**
 * bd管理初始化
 */
var Bd = {
    id: "BdTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Bd.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        //{title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle', sortable: true},
        {title: 'id', field: 'id',  align: 'center', valign: 'middle', sortable: true},
        {title: '名称', field: 'name', align: 'center', valign: 'middle', sortable: true}
    ];
};

/**
 * 检查是否选中
 */
Bd.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Bd.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加bd
 */
Bd.openAddBd = function () {
    var index = layer.open({
        type: 2,
        title: '添加bd',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/bd/bd_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看bd详情
 */
Bd.openBdDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: 'bd详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/bd/bd_update/' + Bd.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除bd
 */
Bd.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/bd/delete", function (data) {
            Feng.success("删除成功!");
            Bd.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("bdId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询bd列表
 */
Bd.search = function () {
    var queryData = {};
    queryData['id'] = $("#id").val();
    queryData['name'] = $("#name").val();
    Bd.table.refresh({query: queryData});
};

$(function () {
	
    var defaultColunms = Bd.initColumn();
    var table = new BSTable(Bd.id, "/bd/list", defaultColunms);
    table.setPaginationType("client");
    Bd.table = table.init();
});
