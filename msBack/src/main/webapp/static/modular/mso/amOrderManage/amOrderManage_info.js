/**
 * 初始化am订单管理详情对话框
 */
var AmOrderManageInfoDlg = {
    amOrderManageInfoData : {}
};

/**
 * 清除数据
 */
AmOrderManageInfoDlg.clearData = function() {
    this.amOrderManageInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
AmOrderManageInfoDlg.set = function(key, val) {
    this.amOrderManageInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
AmOrderManageInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
AmOrderManageInfoDlg.close = function() {
    parent.layer.close(window.parent.AmOrderManage.layerIndex);
}

/**
 * 收集数据
 */
AmOrderManageInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
AmOrderManageInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.amOrderManageInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.amOrderManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.AmOrderManage.table.refresh();
	         AmOrderManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
AmOrderManageInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.amOrderManageInfoData.id,
    	data: JSON.stringify(this.amOrderManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.AmOrderManage.table.refresh();
	        AmOrderManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
