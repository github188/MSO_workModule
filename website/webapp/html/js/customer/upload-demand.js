function upload1(){
	var uploader = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',
		browse_button : 'selectfiles',
		//multi_selection: false,
		container: $('.container')[0],
		flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
		silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
		url : 'http://oss.aliyuncs.com',

		filters: {
			mime_types : [ //只允许上传图片和zip,rar文件
				{  extensions : "ppt,pptx,pdf,doc,docx" }
			],
			max_file_size : '100mb', //最大只能上传10mb的文件
			prevent_duplicates : true //不允许选取重复文件
		},

		init: {
			PostInit: function() {
				$('.ossfile')[0].innerHTML = '';
				document.getElementById('postfiles').onclick = function() {
					set_upload_param(uploader, '', false,1);
					return false;
				};
			},

			FilesAdded: function(up, files) {
				plupload.each(files, function(file) {
					if(up.files.length>1){
						up.removeFile(up.files[0]);
					}
					$('.ossfile').css({"text-align":"left"});
					$('#postfiles').html("开始上传");
					$('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
						+'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
						+'</div>';
					$(".ossfile .file_close").click(function(){
						up.removeFile(up.files[0]);
						$('.ossfile')[0].innerHTML = '';
						$('.ossfile').css({"text-align":"left"});
						$('#selectfiles').html("重新上传");
						$('#postfiles').html("开始上传");
					});
				});
			},

			BeforeUpload: function(up, file) {
				check_object_radio();
				set_upload_param(up, file.name, true,1);
			},

			UploadProgress: function(up, file) {
				var d = document.getElementById(file.id);
				var prog = d.getElementsByTagName('div')[0];
				var progBar = prog.getElementsByTagName('div')[0]
				$('.ossfile').css({"text-align":"center"});
				$('#postfiles').html("正在上传...");
				progBar.style.width= file.percent+'%';
				$(d).find("span.bfb").html("..."+file.percent + "%");
				progBar.setAttribute('aria-valuenow', file.percent);
			},

			FileUploaded: function(up, file, info) {
				if (info.status == 200)
				{
					//document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
					file1=f1;
					$('#selectfiles').html("重新上传");
					$('#postfiles').html("上传成功");
					$('.ossfile .progress-bar').css("width","0%");
					$('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
					$('.ossfile').find("span.bfb").html("");
				}
				else
				{
					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
				}
			},

			Error: function(up, err) {
				if (err.code == -600) {
					alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
					//document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
				}
				else if (err.code == -601) {
					alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
					//document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
				}
				else if (err.code == -602) {
					alert("\n这个文件已经上传过一遍了");
					//document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
				}
				else
				{
					//alert("\nError xml:" + err.response);
					alert("拒绝访问。请重新上传!");
					$(".ossfile .file_close").click();
					//document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
				}
			}
		}
	});
	uploader.init();
	  //绑定文件添加进队列事件
	uploader.bind('FilesAdded',function(uploader,files){
		for(var i = 0, len = files.length; i<len; i++){
			var file_name=files[i].name;
			  //构造html来更新UI
			!function(i){
				previewImage(files[i],function(imgsrc){
					$('.file-list img').attr('src',imgsrc);
				})
			}(i);
		}
	});
}

function upload234(){
	var uploader2 = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
        browse_button : 'selectfiles2',
        //multi_selection: false,
        container: $('.container2')[0],
        flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
        silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
        url : 'http://oss.aliyuncs.com',
        filters: {
            mime_types : [ //只允许上传图片和zip,rar文件
                {extensions : "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar,7z" }
            ],
            max_file_size : '100mb', //最大只能上传10mb的文件
            prevent_duplicates : true //不允许选取重复文件
        },

        init: {
            PostInit: function() {
                $('.ossfile2')[0].innerHTML = '';
                document.getElementById('postfiles2').onclick = function() {
                    set_upload_param(uploader2, '', false,2);
                    return false;
                };
            },

            FilesAdded: function(up, files) {
                plupload.each(files, function(file) {
                    if(up.files.length>1){
                        up.removeFile(up.files[0]);
                    }
                    $('.ossfile2').css({"text-align":"left"});
                    $('#postfiles2').html("开始上传");
                    $('.ossfile2')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                        +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                        +'</div>';
                    $(".ossfile2 .file_close").click(function(){
                        up.removeFile(up.files[0]);
                        $('.ossfile2')[0].innerHTML = '';
                        $('.ossfile2').css({"text-align":"left"});
                        $('#selectfiles2').html("重新上传");
                        $('#postfiles2').html("开始上传");
                    });
                });
            },

            BeforeUpload: function(up, file) {
                check_object_radio();
                set_upload_param(up, file.name, true,2);
            },

            UploadProgress: function(up, file) {
                var d = document.getElementById(file.id);
                var prog = d.getElementsByTagName('div')[0];
                var progBar = prog.getElementsByTagName('div')[0]
                $('.ossfile2').css({"text-align":"center"});
                $('#postfiles2').html("正在上传...");
                progBar.style.width= file.percent+'%';
                $(d).find("span.bfb").html("..."+file.percent + "%");
                progBar.setAttribute('aria-valuenow', file.percent);
            },

            FileUploaded: function(up, file, info) {
                if (info.status == 200)
                {
                    //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                    file2=f2;
                    $('#selectfiles2').html("重新上传");
                    $('#postfiles2').html("上传成功");
                    $('.ossfile2 .progress-bar').css("width","0%");
                    $('.ossfile2 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                    $('.ossfile2').find("span.bfb").html("");
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
            },


            Error: function(up, err) {
                if (err.code == -600) {
                    alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                    alert("拒绝访问。请重新上传!");
                    $(".ossfile2 .file_close").click();
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                }
            }
        }
    });
    uploader2.init();

    //绑定文件添加进队列事件
    uploader2.bind('FilesAdded',function(uploader,files){
        for(var i = 0, len = files.length; i<len; i++){
            var file_name = files[i].name; //文件名
            //构造html来更新UI
            !function(i){
                previewImage(files[i],function(imgsrc){
                    $('.file-list2 img').attr('src',imgsrc);
                })
            }(i);
        }
    });
    var uploader3 = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
        browse_button : 'selectfiles3',
        //multi_selection: false,
        container: $('.container3')[0],
        flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
        silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
        url : 'http://oss.aliyuncs.com',
        filters: {
            mime_types : [ //只允许上传图片和zip,rar文件
                {extensions : "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar,7z" }
            ],
            max_file_size : '100mb', //最大只能上传10mb的文件
            prevent_duplicates : true //不允许选取重复文件
        },

        init: {
            PostInit: function() {
                $('.ossfile3')[0].innerHTML = '';
                document.getElementById('postfiles3').onclick = function() {
                    set_upload_param(uploader3, '', false,3);
                    return false;
                };
            },



            FilesAdded: function(up, files) {
                plupload.each(files, function(file) {
                    if(up.files.length>1){
                        up.removeFile(up.files[0]);
                    }
                    $('.ossfile3').css({"text-align":"left"});
                    $('#postfiles3').html("开始上传");
                    $('.ossfile3')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                        +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                        +'</div>';
                    $(".ossfile3 .file_close").click(function(){
                        up.removeFile(up.files[0]);
                        $('.ossfile3')[0].innerHTML = '';
                        $('.ossfile3').css({"text-align":"left"});
                        $('#selectfiles3').html("重新上传");
                        $('#postfiles3').html("开始上传");
                    });
                });
            },

            BeforeUpload: function(up, file) {
                check_object_radio();
                set_upload_param(up, file.name, true,3);
            },

            UploadProgress: function(up, file) {
                var d = document.getElementById(file.id);
                var prog = d.getElementsByTagName('div')[0];
                var progBar = prog.getElementsByTagName('div')[0]
                $('.ossfile3').css({"text-align":"center"});
                $('#postfiles3').html("正在上传...");
                progBar.style.width= file.percent+'%';
                $(d).find("span.bfb").html("..."+file.percent + "%");
                progBar.setAttribute('aria-valuenow', file.percent);
            },

            FileUploaded: function(up, file, info) {
                if (info.status == 200)
                {
                    //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                    file3=f3;
                    $('#selectfiles3').html("重新上传");
                    $('#postfiles3').html("上传成功");
                    $('.ossfile3 .progress-bar').css("width","0%");
                    $('.ossfile3 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                    $('.ossfile3').find("span.bfb").html("");
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
            },


            Error: function(up, err) {
                if (err.code == -600) {
                    alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                      alert("拒绝访问。请重新上传!");
                      $(".ossfile3 .file_close").click();
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                }
            }
        }
    });

    uploader3.init();

    //绑定文件添加进队列事件
    uploader3.bind('FilesAdded',function(uploader,files){
        for(var i = 0, len = files.length; i<len; i++){
            var file_name = files[i].name; //文件名
            //构造html来更新UI
            !function(i){
                previewImage(files[i],function(imgsrc){
                    $('.file-list3 img').attr('src',imgsrc);
                })
            }(i);
        }
    });


    var uploader4 = new plupload.Uploader({
        runtimes : 'html5,flash,silverlight,html4',
        browse_button : 'selectfiles4',
        //multi_selection: false,
        container: $('.container4')[0],
        flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
        silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
        url : 'http://oss.aliyuncs.com',
        filters: {
            mime_types : [ //只允许上传图片和zip,rar文件
                {extensions : "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar,7z" }
            ],
            max_file_size : '100mb', //最大只能上传10mb的文件
            prevent_duplicates : true //不允许选取重复文件
        },

        init: {
            PostInit: function() {
                $('.ossfile4')[0].innerHTML = '';
                document.getElementById('postfiles4').onclick = function() {
                    set_upload_param(uploader4, '', false,4);
                    return false;
                };
            },

                    FilesAdded: function(up, files) {
                        plupload.each(files, function(file) {
                            if(up.files.length>1){
                                up.removeFile(up.files[0]);
                            }
                            $('.ossfile4').css({"text-align":"left"});
                            $('#postfiles4').html("开始上传");
                            $('.ossfile4')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                                +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                                +'</div>';
                            $(".ossfile4 .file_close").click(function(){
                                up.removeFile(up.files[0]);
                                $('.ossfile4')[0].innerHTML = '';
                                $('.ossfile4').css({"text-align":"left"});
                                $('#selectfiles4').html("重新上传");
                                $('#postfiles4').html("开始上传");
                            });
                        });
                    },

                    BeforeUpload: function(up, file) {
                        check_object_radio();
                        set_upload_param(up, file.name, true,4);
                    },

                    UploadProgress: function(up, file) {
                        var d = document.getElementById(file.id);
                        var prog = d.getElementsByTagName('div')[0];
                        var progBar = prog.getElementsByTagName('div')[0]
                        $('.ossfile4').css({"text-align":"center"});
                        $('#postfiles4').html("正在上传...");
                        progBar.style.width= file.percent+'%';
                        $(d).find("span.bfb").html("..."+file.percent + "%");
                        progBar.setAttribute('aria-valuenow', file.percent);
                    },

                    FileUploaded: function(up, file, info) {
                        if (info.status == 200)
                        {
                            //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                            file4=f4;
                            $('#selectfiles4').html("重新上传");
                            $('#postfiles4').html("上传成功");
                            $('.ossfile4 .progress-bar').css("width","0%");
                            $('.ossfile4 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                            $('.ossfile4').find("span.bfb").html("");
                        }
                        else
                        {
                            document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                        }
                    },

            Error: function(up, err) {
                if (err.code == -600) {
                    alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                    alert("拒绝访问。请重新上传!");
                    $(".ossfile4 .file_close").click();
                    //alert("\nError xml:" + err.response);
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                }
            }
        }
    });

    uploader4.init();

    //绑定文件添加进队列事件
    uploader4.bind('FilesAdded',function(uploader,files){
        for(var i = 0, len = files.length; i<len; i++){
            var file_name = files[i].name; //文件名
            //构造html来更新UI
            !function(i){
                previewImage(files[i],function(imgsrc){
                    $('.file-list4 img').attr('src',imgsrc);
                })
            }(i);
        }
    });
}