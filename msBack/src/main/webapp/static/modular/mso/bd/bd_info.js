/**
 * 初始化bd详情对话框
 */
var BdInfoDlg = {
    bdInfoData : {}
};

/**
 * 清除数据
 */
BdInfoDlg.clearData = function() {
    this.bdInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdInfoDlg.set = function(key, val) {
    this.bdInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
BdInfoDlg.close = function() {
    parent.layer.close(window.parent.Bd.layerIndex);
}

/**
 * 收集数据
 */
BdInfoDlg.collectData = function() {
    this.set('id');
    this.set('name');
}

/**
 * 提交添加
 */
BdInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/bd/add", function(data){
        Feng.success("添加成功!");
        window.parent.Bd.table.refresh();
        BdInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.bdInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
BdInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/bd/update", function(data){
        Feng.success("修改成功!");
        window.parent.Bd.table.refresh();
        BdInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.bdInfoData);
    ajax.start();
}

$(function() {

});
