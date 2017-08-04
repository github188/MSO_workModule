/**
 * 初始化BD发包方需求管理详情对话框
 */
var pagedata = JSON.parse($('.pagedata').html());
var BdDemandManageInfoDlg = {
    bdDemandManageInfoData : {},
	newPageData:$.extend(true,pagedata,{})
};
/**
 * 清除数据
 */
BdDemandManageInfoDlg.clearData = function() {
    this.bdDemandManageInfoData = {};
}
/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdDemandManageInfoDlg.set = function(key, val) {
    this.bdDemandManageInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}
/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdDemandManageInfoDlg.get = function(key) {
    return $("#" + key).val();
}
/**
 * 关闭此对话框
 */
BdDemandManageInfoDlg.close = function() {
    parent.layer.close(window.parent.BdDemandManage.layerIndex);
}
/**
 * 收集数据
 */
BdDemandManageInfoDlg.collectData = function() {
    this.set('id');
}
/**
 * 提交添加
 */
BdDemandManageInfoDlg.addSubmit = function() {
    this.clearData();
    this.collectData();
    
    //删除id
    delete this.bdDemandManageInfoData['id'];
    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.bdDemandManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.BdDemandManage.table.refresh();
	         BdDemandManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}
/**
 * 提交修改
 */
BdDemandManageInfoDlg.editSubmit = function() {
	var demandata = BdDemandManageInfoDlg.newPageData;


    var url = Feng.ctxPath + '/bdDemandManage/update/'+demandata.demandid+"?rolename="+rolename+'&roleid='+roleid ;
	
	/*归属时间*/
	demandata.vestingtime = $('.vestingtime input:visible').val();
	/*状态更新*/
	if(demandata.demandstate == 2){
		/*只有计算的可以改变其他的原样返回*/
		demandata.demandstate = $('.form-control.demandstate').val();
	}
	/*子需求*/
	$('.subdemands input.comment').map(function (index,data){
		if(data){
			demandata.subdemands[index].remark = $('.subdemands input.comment').eq(index).val();
		}
	});
	
	
    $.ajax({
		type: "PUT",
		url:url,
    	data:JSON.stringify(demandata),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.BdDemandManage.table.refresh();
	        BdDemandManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	}); 
}
$(function() {
	
	function setValuedata(data){
		
		var  servicetype = data.servicetype;
		
		var demandstate = data.demandstate;
		var isindustry = data.industry;
		/*判断页面的显示流程*/
		if(servicetype=="1" && isindustry == "教育培训"){
			/*标准发包 销售线索挖掘*/
			/*标准发包*/
			$('.attachment').hide();
			
			$('.saletemplate').show();
			
			/*基本信息*/
			$('.basicdetail').show();
			$('.basicnot').hide();
			$('.basicmaked').hide();
		}
		if(servicetype=="1" && isindustry != "教育培训"){
			/*非标准发包*/
			$('.attachment').show();
			
			$('.saletemplate').show();
			/*基本信息*/
			$('.basicdetail').hide();
			$('.basicnot').show();
			$('.basicmaked').hide();
		}
	
		if(servicetype=="2"){
			/*数据加工*/
			$('.attachment').show();
			
			$('.saletemplate').show();
			
			/*基本信息*/
			$('.basicmaked').show();
			$('.basicdetail').hide();
			$('.basicnot').hide();
			
		}
	
		//下载模块
		for(var name in data){
			if(name=="saleleadsurl" || name=="speechcrafturl" || name == "targetcusturl"){
				if(data[name]){
					$('.'+name+' a').html('下载')[0].href = domainDownShort +  data[name];
				}else{
					$('.'+name+' a').html('未上传');
				}
			}
		}
	
	
		//targetaddprice 标签加价
		if(data.targetaddprice){
			$('.targetaddprice').html(data.targetaddprice.toFixed(2));
		}
		
		//demandtotalprice // 需求总价
		if(data.demandtotalprice){
			$('.demandtotalprice').html(data.demandtotalprice.toFixed(2));
		}
		
		//productattach
		if(data.productattach){
			$('.productattach').html('<a href="'+domainDownShort + data.productattach +'">下载</a>');
		}else{
			$('.productattach').html('暂无');
		}
		
		
		if(data.customtags){
			$('div.customtags').show();
			if(data.customtags[0]){
				var indexValue = 0;
				data.customtags.map(function (data,index){
					indexValue+=data.price;
				});
				$('span.customtags').html('+'+indexValue+'元');
			}else{
				$('div.customtags').hide();
			}
		}
			
	}
	
	$.extend({
		setValuedata:setValuedata,
	});
	
	
	$.setValuedata(BdDemandManageInfoDlg.newPageData);
	
	//清除隐藏域数据
	$('.pagedata').remove();
	
	
	//end_date修复bug
	
});