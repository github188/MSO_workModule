/**
 * 初始化任务管理详情对话框
 */
var TaskManageInfoDlg = {
    taskManageInfoData : {}
};

/**
 * 清除数据
 */
TaskManageInfoDlg.clearData = function() {
    this.taskManageInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
TaskManageInfoDlg.set = function(key, val) {
    this.taskManageInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
TaskManageInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
TaskManageInfoDlg.close = function() {
    parent.layer.close(window.parent.TaskManage.layerIndex);
}

/**
 * 收集数据
 */
TaskManageInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
TaskManageInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.taskManageInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.taskManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.TaskManage.table.refresh();
	         TaskManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
TaskManageInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.taskManageInfoData.id,
    	data: JSON.stringify(this.taskManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.TaskManage.table.refresh();
	        TaskManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
