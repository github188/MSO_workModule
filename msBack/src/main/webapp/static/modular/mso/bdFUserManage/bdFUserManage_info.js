/**
 * 初始化bd发包方用户管理详情对话框
 */
var pagedata = JSON.parse($('.pagedata').html());
var BdFUserManageInfoDlg = {
    bdFUserManageInfoData : {},
	newPageData:$.extend(true,pagedata,{})
};

/**
 * 清除数据
 */
BdFUserManageInfoDlg.clearData = function() {
    this.bdFUserManageInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdFUserManageInfoDlg.set = function(key, val) {
    this.bdFUserManageInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdFUserManageInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
BdFUserManageInfoDlg.close = function() {
    parent.layer.close(window.parent.BdFUserManage.layerIndex);
}

/**
 * 收集数据
 */
BdFUserManageInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
BdFUserManageInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.bdFUserManageInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.bdFUserManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.BdFUserManage.table.refresh();
	         BdFUserManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
BdFUserManageInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
	var userdata = BdFUserManageInfoDlg.newPageData;
	var jfuid = userdata.jfuid;
	console.log(userdata);
	//验证是否填写信息停用信息
    $('.disableremark').blur();
	
	/*更新数据详情*/
		$('textarea').blur();
		
		if($('.error:visible').length){
			return;
		}
		
		var jfuid = $(this).attr('jfuid');


		/*称呼*/
		userdata.name = $('.form-control.name').val();
		/*真实姓名*/
		userdata.realname = $('.form-control.realname').val();
		
		//form-control jfumobilephone
		userdata.jfumobilephone = $('.form-control.jfumobilephone').val();
		
		//form-control compemail
		userdata.compemail = $('.form-control.compemail').val();
		
		//form-control weixin
		userdata.weixin = $('.form-control.weixin').val();
		
		//form-control qq
		userdata.qq = $('.form-control.qq').val();
		
		//form-control brandname
		userdata.brandname = $('.form-control.brandname').val();
		
		//form-control compwebsite
		userdata.compwebsite = $('.form-control.compwebsite').val();
		
		//optionsRadiosinline trusteeship 托管
		userdata.trusteeship = $('.trusteeship').get(0).checked?$('.trusteeship').get(0).value*1:($('.trusteeship').get(1).checked?$('.trusteeship').get(1).value*1:"");
		
		//form-control BDstaff2 //分配专员
		//userdata.realname = $('.form-control.BDstaff2').find('option:selected').text();
		
		//form-control jfudisable 是否冻结
		userdata.jfudisable = $('.form-control.jfudisable').val();
		
		
			//2停用 1 启用
		if(userdata.jfudisable == 2){
			userdata.disableremark = $('.disableremark').val();
		}
		
		//compimg
		
		//upload compimg
		var compimg = $('.upload.compimg').attr('data-path');
		var fulllicense = $('.upload.fulllicense').attr('data-path');
		var complicense = $('.upload.complicense').attr('data-path');
		var comptaxcer =  $('.upload.comptaxcer').attr('data-path');
		var comporgcode =  $('.upload.comporgcode').attr('data-path');
		
		if(compimg){
			userdata.compimg = compimg;
		}
		
		if(fulllicense){
			userdata.fulllicense = fulllicense;
		}else{
			if(complicense){
				userdata.complicense = complicense;
			}
			
			if(comptaxcer){
				userdata.comptaxcer = comptaxcer;
			}	
			
			if(comporgcode){
				userdata.comptaxcer = comptaxcer;
			}
		
		}
		
		
		$('#loading').modal('show');
		$('#myModal').modal('hide');
		

		//PATCH 开发完成 /bdusers/admin/users/{jfuid}/{USER_ID}
		/*跟新专员*/
		//console.log(jfuid,'67018442beb7424b850e658aa43af830');
		var url2 = domain137 + '/bdusers/admin/users/'+jfuid +'/'+$('.BDstaff2').val();
		
		$.when($.ajax({
			url:url2,
			type:'PATCH',
			contentType:'application/json',
			//data:JSON.stringify(userdata),
		})).then(function (data){
			if(data.msg == "success"){
				$('#loading').modal('hide');
			}
			
		}).fail(function (data){
		
		});
		
		
		
		
		
		
		
		/*跟新数据列表*/
		$.when($.ajax({
			url:url,
			type:'PUT',
			contentType:'application/json',
			data:JSON.stringify(userdata),
		})).then(function (data){
			if(data.msg == "success"){
				$('#loading').modal('hide');
				
				$table.bootstrapTable('refresh');
				
			}
			
		}).fail(function (data){
		
		});
	
	//PATCH 开发完成 /bdusers/all/users/{jfuid} bd管理员专员更新用户详情	
	//'https://gateway.mshuoke.com/pasf/bdusers/all/users/'+jfuid;
	var url = Feng.ctxPath + '/bdFUserManage/update/'+userdata.jfuid;
    $.ajax({
		type: "PUT",
		url: url,
    	data: JSON.stringify(userdata),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.BdFUserManage.table.refresh();
	        BdFUserManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});   
}

$(function() {
	
	function setUserInfo(data){
		

		$('.trusteeship').eq(data.trusteeship).prop("checked",true);
		
		if(data.compimg){
			$('.upload.compimg .salepad.test').html('<img src="'+domainDownShort+data.compimg+'">');
		}
		
		if(data.compind){
			var compind  = JSON.parse(data.compind);
			if(compind && compind[0]){
				$('.compind').html(compind[0]);
				if(compind[0] && compind[1]){
						$('.compind').html(compind[0]+'-'+compind[1]);
				}
			}
		}
		
		if(data.jfudisable){
			$('.jfudisable').val(data.jfudisable);
			if(data.jfudisable==2){
				$('.disableremark').parents('.flag').show();
			}else{
				$('.disableremark').parents('.flag').hide();
				$('.disableremark').val('');
			}
		}
		
		for(var name in data){
			//默认状态图片
			$('.main-list-item li.upload.updata').hide();
			$('.main-list-item li.upload.updata').eq(0).show();
			//处理状态
			if(name=="fulllicense" || name=="complicense" ||  name=="comptaxcer" || name=="comporgcode"){
				if(name=="fulllicense"){
					if(data[name]){
						$('.optionsRadiosinline.one').attr('checked',true);
						
						//$('.optionsRadiosinline').change();
						$('.main-list-item li.upload.updata').hide();
						$('.main-list-item li.upload.updata').eq(0).show();
					
						$('.'+name+' .salepad.test').html('<img src="'+domainDownShort+data[name]+'">');
					}
					
				}else{
					if(data[name]){
						$('.optionsRadiosinline.two').attr('checked',true);
						$('.main-list-item li.upload.updata').show();
				
						$('.main-list-item li.upload.updata').eq(0).hide();
						
						$('.'+name+' .salepad.test').html('<img src="'+domainDownShort+data[name]+'">');
					}
				}
			}
		}
		
	}
	
	
	

	
	
	/*切换状态*/
	
	$.fn.extend({
		getRoleList:function (){
			var url = domain137 + 'pt/sysusers';
			var bdUsername = 'BD专员';
			
			$.when($.ajax({
				url:url,
				data:{rolename:bdUsername},
				dataType:'json',
			})).then(function (data){
				if(data.msg=="success"){
					data.data.map(function (data,index){
						$('.BDstaff2').append('<option value='+data.userid+'>'+data.username+'</option>');
					});
					
				}
			}).fail(function (data){
				//$('#loading').modal('hide');
			});
		},
		optionsRadiosinline:function (){
			$(document).on('change','.optionsRadiosinline',function (){
				if($(this).hasClass('one')){
					$('.main-list-item li.upload.updata').hide();
					$('.main-list-item li.upload.updata').eq(0).show();
				}
				
				if($(this).hasClass('two')){
					$('.main-list-item li.upload.updata').show();
					
					$('.main-list-item li.upload.updata').eq(0).hide();
				}
			});
		},
		disableremark:function (){
			//暂停原因	
			$(document).on('blur','.disableremark',function (){
				if($('.jfudisable').val()==2){
					console.log(this.value);
					if(this.value){
						$('#disableremark-error').hide();
					}else{
						$('#disableremark-error').show();
					}
				}
			});
		},
		jfudisable:function (){
			/*是否启用*/
			$(document).on('change','.jfudisable',function (){
				if(this.value == 2){
					$('.disableremark').parents('.flag').show();
				}else{
					$('.disableremark').parents('.flag').hide();
				}
			});
		}
	});

	
	$.extend({
		setUserInfo:setUserInfo,
	});
	
	$.setUserInfo(BdFUserManageInfoDlg.newPageData);
	
	$('.BDstaff2').getRoleList();
	$('.optionsRadiosinline').optionsRadiosinline();
	$('.disableremark').disableremark();
	$('.jfudisable').jfudisable();
	
	
	
	
	//上传代码
	/*上传到ali云并且判断是否成功*/
function uploadByForm(currentIdEle,host) {
	  /*模拟二进制流*/
	  var formData = new FormData(currentIdEle.find('form')[0]);
	 // oMyForm.append("username", "Groucho");
	 // var url = "https://mso.oss-cn-shanghai.aliyuncs.com"; 

	function setingpic(host,formData){
		return $.when(
			$.ajax({  
				url : host,  
				type : 'POST',  
				data : formData,  
				processData : false,  
				contentType : false,  
			})
		)
	}
	//debugger;
	var seting = setingpic(host,formData);
	
	seting.then(function (data){
	//debugger;
		$('.msg-error.hy').removeClass('fail');
		$('.msg-error.hy').hide();
		//console.log('上传成功');
	});
	
	seting.fail(function (data){
		currentIdEle.find('.msg-error.hy').show();
		currentIdEle.find('.msg-error.hy').addClass('fail');
		currentIdEle.find('.msg-error.hy').html('您上传失败请从新上传！');
	});
		
 }  


 $(document).on('click',".salepad",function (ev){
 
	var target = ev.currentTarget;
	var currentIdEle = $(target).parents('li.upload');
	
	/*通过id识别every type*/
	currentUploadId = currentIdEle.attr('data-index');
	
	//console.log(currentIdEle,currentUploadId);
	
	/*获取签名*/
	resultSignature =  JSON.parse(getSignature({fileName:'credentials'}));
	
	
	currentIdEle.find('.file')[0].onchange = function (){
		
		var typeArr = ['image/jpeg','image/png','image/bmp'];
		var file = this.files[0];
		var flag = false;
		
		typeArr.map(function (data,index){
			if(file.type==data){
				flag = true;
			}
		});
		
		
		/*图片格式验证*/
		if(!flag){
			currentIdEle.find('.msg-error.hy').show();
			currentIdEle.find('.msg-error.hy').html('请您上传,jpg,jpeg,png,bmp!');
			return;
		}
		
		
		/*大小验证*/
		if((file.size/1024)>3072){
			//debugger;
			currentIdEle.find('.msg-error.hy').show();
			currentIdEle.find('.msg-error.hy').removeClass('fail');
			currentIdEle.find('.msg-error.hy').html('请您上传小于3M的图片');
			return;
		}else{
			currentIdEle.find('.msg-error.hy').hide();
		}
		
		
		
		
		/*设置签名信息*/
		currentIdEle.find('form')[0].action = resultSignature.host;
		currentIdEle.find('.idkey').val(resultSignature.dir+'${filename}');
		currentIdEle.find('.idpolicy').val(resultSignature.policy);
		currentIdEle.find('.idOSSAccessKeyId').val(resultSignature.accessid);
		currentIdEle.find('.idSignature').val(resultSignature.signature);
		
		/*组合path路径给后台*/
		
		var _path = resultSignature.dir+file.name;
		/*设置在每个自己身上path*/
		currentIdEle.attr('data-path',_path);
		
		
		/*设置图片路径*/
		var readerd = new FileReader();
		readerd.readAsDataURL(file);
		readerd.onload = function (e) {
			currentIdEle.find('div.salepad').html('');
			currentIdEle.find('div.salepad').append('<img src="'+this.result+'"/>');
		   ///currentIdEle.find('div.salepad img')[0].src = this.result;
		}
		
		uploadByForm(currentIdEle,currentIdEle.find('form')[0].action);
	};
	
	return currentIdEle.find('.file').click();

});
});
