/**
 * 初始化任务管理ae详情对话框
 */
var TaskManageAeInfoDlg = {
    taskManageAeInfoData : {}
};

/**
 * 清除数据
 */
TaskManageAeInfoDlg.clearData = function() {
    this.taskManageAeInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
TaskManageAeInfoDlg.set = function(key, val) {
    this.taskManageAeInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
TaskManageAeInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
TaskManageAeInfoDlg.close = function() {
    parent.layer.close(window.parent.TaskManageAe.layerIndex);
}

/**
 * 收集数据
 */
TaskManageAeInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
TaskManageAeInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.taskManageAeInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.taskManageAeInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.TaskManageAe.table.refresh();
	         TaskManageAeInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
TaskManageAeInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.taskManageAeInfoData.id,
    	data: JSON.stringify(this.taskManageAeInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.TaskManageAe.table.refresh();
	        TaskManageAeInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
