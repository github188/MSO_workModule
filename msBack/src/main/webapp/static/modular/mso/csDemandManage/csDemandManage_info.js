/**
 * 初始化cs需求管理详情对话框
 */
var CsDemandManageInfoDlg = {
    csDemandManageInfoData : {}
};

/**
 * 清除数据
 */
CsDemandManageInfoDlg.clearData = function() {
    this.csDemandManageInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CsDemandManageInfoDlg.set = function(key, val) {
    this.csDemandManageInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CsDemandManageInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CsDemandManageInfoDlg.close = function() {
    parent.layer.close(window.parent.CsDemandManage.layerIndex);
}

/**
 * 收集数据
 */
CsDemandManageInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
CsDemandManageInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.csDemandManageInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.csDemandManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.CsDemandManage.table.refresh();
	         CsDemandManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
CsDemandManageInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.csDemandManageInfoData.id,
    	data: JSON.stringify(this.csDemandManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.CsDemandManage.table.refresh();
	        CsDemandManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
