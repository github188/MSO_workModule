/**
 * 初始化am接包方用户信息详情对话框
 */
var AmJUserInfoDlg = {
    amJUserInfoData : {}
};

/**
 * 清除数据
 */
AmJUserInfoDlg.clearData = function() {
    this.amJUserInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
AmJUserInfoDlg.set = function(key, val) {
    this.amJUserInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
AmJUserInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
AmJUserInfoDlg.close = function() {
    parent.layer.close(window.parent.AmJUser.layerIndex);
}

/**
 * 收集数据
 */
AmJUserInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
AmJUserInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.amJUserInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.amJUserInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.AmJUser.table.refresh();
	         AmJUserInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
AmJUserInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.amJUserInfoData.id,
    	data: JSON.stringify(this.amJUserInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.AmJUser.table.refresh();
	        AmJUserInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
