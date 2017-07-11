var cityChange= eval(cityChange);
function append_city(){
    if($("div.area").find("div.list1").length!=0){
        $("div.list1 .citylist").append(cityarea);
    }
    if($("div.area").find("div.list4").length!=0){
        $("div.list4 .citylist").append(cityarea);
        $("div.list4 .citylist").find("li a").prepend("<i class='radio'></i>");
    }
}
function append_city_1(){
    if($("div.area").find("div.list1").length!=0){
        $("div.list1 .citylist").append(cityarea);
    }
    if($("div.area").find("div.list4").length!=0){
        $("div.list4 .citylist").append(cityarea);
        $("div.list4 .citylist").find("li a").prepend("<i class='radio'></i>");
    }
    $('.city_name').autocomplete(cities, {
        max: 12, //列表里的条目数
        minChars: 0, //自动完成激活之前填入的最小字符
        width: 240, //提示的宽度，溢出隐藏
        scrollHeight: 300, //提示的高度，溢出显示滚动条
        matchContains: true, //包含匹配，就是data参数里的数据，是否只要包含文本框里的数据就显示
        autoFill: false, //自动填充
        formatItem: function(row, i, max) {
            return row.name + '（'+row.pinyin+'）';
        },
        formatMatch: function(row, i, max) {
            return row.match;
        },
        formatResult: function(row) {
            return row.name;
        },resultsClass:'search-text'
    }).result(function(event, row, formatted) {
        $(".area div.list4 .search-citys-list ul li a[title="+row.name+"]").parent().click();
    });
    $(".area ul.list i.close").click(function(){
        $(this).parent().parent().hide();
    });
    $(".area div.list4 .search-citys-list li").click(function(){
        change_city_val();
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(".area div.list4 .activeCity ul li[title="+$(this).text()+"]").remove();
        }else{
            $(this).addClass("active");
            var li=$("<li title="+$(this).text()+"><span>"+$(this).text()+"</span><i class='close'></i></li>");
            $(li).find("i.close").click(function(){
                $("div.list4 .search-citys-list ul li a[title="+$(this).parent().attr("title")+"]").parent().click();
            });
            $(".area div.list4 .activeCity ul").append(li);
        }
    });
    $(".area div.list4 p button").click(function(){
        var List=$("div.area div.list4  .activeCity ul").clone();
        $(List).find("li").each(function(){
            $(this).find("i.close").click(function(){
                $(".area div.list4 .activeCity ul li[title="+$(this).parent().text()+"] i.close").click();
                $(".area div.list4 p button").click();
            });
            $("button.add_city").html("重新选择");
        });
        $("button.area").prev().html(List);
        if($("#zdycs .activeCity>ul>ul li").length!=0){
            $("#zdycs").removeClass("error");
            $(".error-info").eq(12).css("visibility","hidden");
        }
        $("div.area").hide();
    });
    $("button.area").on("click",function(){
        var index=$(this).parent().parent().parent().index();
        $("div.area").show();
        $("div.area>div").css({left:"calc(50% - 197px)",top:$(this).offset().top+30}).show();
    });
}
//直接输入地址框的onkeyup事件
function input_keyup()
{
    var value = $('#city_name').val();
    if($('#hid_real_city_name').val()!=value || $('#hid_real_city_name').val()=='')
    {
        $('#cityarea').hide();
    }else if(value==$('#hid_real_city_name').val())
    {
        $('#cityarea').hide();
    }
}
function check_input(){
    var value = $('.city_name').val();
    if(value==$('#hid_real_city_name').val() && $("#hid_city_name").val()!=""){
        return true;
    }
    return false;
}

function getUrlCity(getCity){
    cityarea = $('<div></div>');
    var ulABC=$('<ul class="s-citys1 click" id="s-citys1" style="display: block;"></ul>');
    var ulDEF=$('<ul class="s-citys2" style="display: none;"></ul>');
    var ulGHI=$('<ul class="s-citys3" style="display: none;"></ul>');
    var ulJKL=$('<ul class="s-citys4" style="display: none;"></ul>');
    var ulMNO=$('<ul class="s-citys5" style="display: none;"></ul>');
    var ulPQR=$('<ul class="s-citys6" style="display: none;"></ul>');
    var ulSTUV=$('<ul class="s-citys7" style="display: none;"></ul>');
    var ulWXYZ=$('<ul class="s-citys8" style="display: none;"></ul>');
    $(cityarea).append(ulABC,ulDEF,ulGHI,ulJKL,ulMNO,ulPQR,ulSTUV,ulWXYZ);
    var cityList={};
    var ul_index;
    getCity.map(function(result,index){
        for(var key in result){
            if(isNull(cityList[key])){
                cityList[key]=[];
            }
            cityList[key].push(result[key]);

            var city={
                "name": result[key].regionName,
                "match": result[key].regionName+"|"+result[key].regionPinyyin+"|"+result[key].regionPy,
                "pinyin": result[key].regionPinyyin,
                "sanzima": result[key].regionPy
            }
            cities.push(city);
        }
    });
    for(var key in cityList){
        if(key==="A"||key==="B"||key==="C")ul_index=0;
        if(key==="D"||key==="E"||key==="F")ul_index=1;
        if(key==="G"||key==="H"||key==="I")ul_index=2;
        if(key==="J"||key==="K"||key==="L")ul_index=3;
        if(key==="M"||key==="N"||key==="O")ul_index=4;
        if(key==="P"||key==="Q"||key==="R")ul_index=5;
        if(key==="S"||key==="T"||key==="U"||key==="V")ul_index=6;
        if(key==="W"||key==="X"||key==="Y"||key==="Z")ul_index=7;
        cityList[key].map(function(result,index){
            var li='<li class="click"><a title="'+result.regionName+'" onclick="change_city_val(&quot;'+result.regionName+'&quot;,&quot;'+result.regionPinyyin+'&quot;)" href="javascript:;">'+result.regionName+'</a></li>';
            cityarea.find("ul").eq(ul_index).append(li);
        });
    }
    cityarea=cityarea[0].outerHTML;

}
function uploadIng(){
	
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
                { title : "Image files", extensions : "jpg,png" }
            ],
            max_file_size : '1mb', //最大只能上传10mb的文件
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
                    $('.ossfile').show()[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                        +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                        +'</div>';
                    $(".ossfile .file_close").click(function(){
                        up.removeFile(up.files[0]);
                        $('.ossfile').hide()[0].innerHTML = '';
                        $('.ossfile').css({"text-align":"left"});
                        $('#selectfiles').html("重新选择");
                        $('#postfiles').html("开始上传");
                        $(".file-list img").attr("src","images/public/file_aside.png");
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
                    $('#selectfiles').html("重新选择");
                    $('#postfiles').html("上传成功");
                    $('.ossfile .progress-bar').css("width","0%");
                    $('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
                    $('.ossfile').find("span.bfb").html("");
                    $(".file-list").removeClass("error");$(".error-info").eq(7).css("visibility","hidden");
                    file1=f1;
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
            },

            Error: function(up, err) {
                if (err.code == -600) {
                    $(".error-info").eq(7).html("图片大小不能超过1MB").css("visibility","visible");
                    //alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    $(".error-info").eq(7).html("仅支持jpg，png格式的图片").css("visibility","visible");
                    //alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    $(".error-info").eq(7).html("图片已经上传过").css("visibility","visible");
                    //alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                    //alert("\nError xml:" + err.response);
                    $(".error-info").eq(7).html("上传出错。请重新选择!").css("visibility","visible");
                    //alert("上传错误。请重新选择!");
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
                    { title : "Image files", extensions : "jpg,png" }
                ],
                max_file_size : '1mb', //最大只能上传10mb的文件
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
                    $('.ossfile2').show()[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                        +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                        +'</div>';
                    $(".ossfile2 .file_close").click(function(){
                        up.removeFile(up.files[0]);
                        $('.ossfile2').hide()[0].innerHTML = '';
                        $('.ossfile2').css({"text-align":"left"});
                        $('#selectfiles2').html("重新选择");
                        $('#postfiles2').html("开始上传");
                        $(".file-list2 img").attr("src","images/public/file_list2.png");
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
                    $('#selectfiles2').html("重新选择");
                    $('#postfiles2').html("上传成功");
                    $('.ossfile2 .progress-bar').css("width","0%");
                    $('.ossfile2 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                    $('.ossfile2').find("span.bfb").html("");
                    $(".file-list2").removeClass("error");$(".error-info").eq(16).css("visibility","hidden");
                    file2=f2;
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
            },

            Error: function(up, err) {
                if (err.code == -600) {
                    $(".error-info").eq(16).html("图片大小不能超过1MB").css("visibility","visible");
                    //alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    $(".error-info").eq(16).html("仅支持jpg，png格式的图片").css("visibility","visible");
                    //alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    $(".error-info").eq(16).html("图片已经上传过").css("visibility","visible");
                    //alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                    //alert("\nError xml:" + err.response);
                    $(".error-info").eq(16).html("上传出错。请重新选择!").css("visibility","visible");
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
            var file_name=files[i].name;
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
                { title : "Image files", extensions : "jpg,png" }
            ],
            max_file_size : '1mb', //最大只能上传10mb的文件
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
                    $('.ossfile3').show()[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                        +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                        +'</div>';
                    $(".ossfile3 .file_close").click(function(){
                        up.removeFile(up.files[0]);
                        $('.ossfile3').hide()[0].innerHTML = '';
                        $('.ossfile3').css({"text-align":"left"});
                        $('#selectfiles3').html("重新选择");
                        $('#postfiles3').html("开始上传");
                        $(".file-list3 img").attr("src","images/public/file_list3.png");
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
                    $('#selectfiles3').html("重新选择");
                    $('#postfiles3').html("上传成功");
                    $('.ossfile3 .progress-bar').css("width","0%");
                    $('.ossfile3 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                    $('.ossfile3').find("span.bfb").html("");
                    $(".file-list3").removeClass("error");$(".error-info").eq(17).css("visibility","hidden");
                    file3=f3;
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
            },

            Error: function(up, err) {
                if (err.code == -600) {
                    $(".error-info").eq(17).html("图片大小不能超过1MB").css("visibility","visible");
                    //alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    $(".error-info").eq(17).html("仅支持jpg，png格式的图片").css("visibility","visible");
                    //alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    $(".error-info").eq(17).html("图片已经上传过").css("visibility","visible");
                    //alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                    //alert("\nError xml:" + err.response);
                    $(".error-info").eq(17).html("上传出错。请重新选择!").css("visibility","visible");
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
            var file_name=files[i].name;
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
                { title : "Image files", extensions : "jpg,png" }
            ],
            max_file_size : '1mb', //最大只能上传10mb的文件
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
                    $('.ossfile4').show()[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                        +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                        +'</div>';
                    $(".ossfile4 .file_close").click(function(){
                        up.removeFile(up.files[0]);
                        $('.ossfile4').hide()[0].innerHTML = '';
                        $('.ossfile4').css({"text-align":"left"});
                        $('#selectfiles4').html("重新选择");
                        $('#postfiles4').html("开始上传");
                        $(".file-list4 img").attr("src","images/public/file_list4.png");
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
                    $('#selectfiles4').html("重新选择");
                    $('#postfiles4').html("上传成功");
                    $('.ossfile4 .progress-bar').css("width","0%");
                    $('.ossfile4 .progress-bar')[0].setAttribute('aria-valuenow', 0);
                    $('.ossfile4').find("span.bfb").html("");
                    $(".file-list4").removeClass("error");$(".error-info").eq(18).css("visibility","hidden");
                    file4=f4;
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
            },


            Error: function(up, err) {
                if (err.code == -600) {
                    $(".error-info").eq(18).html("图片大小不能超过1MB").css("visibility","visible");
                    //alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    $(".error-info").eq(18).html("仅支持jpg，png格式的图片").css("visibility","visible");
                    //alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    $(".error-info").eq(18).html("图片已经上传过").css("visibility","visible");
                    //alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                    //alert("\nError xml:" + err.response);
                    $(".error-info").eq(18).html("上传出错。请重新选择!").css("visibility","visible");
                    $(".ossfile4 .file_close").click();
                    //document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
                }
            }
        }
    });
    uploader4.init();
    //绑定文件添加进队列事件
    uploader4.bind('FilesAdded',function(uploader,files){
        for(var i = 0, len = files.length; i<len; i++){
            var file_name=files[i].name;
            //构造html来更新UI
            !function(i){
                previewImage(files[i],function(imgsrc){
                    $('.file-list4 img').attr('src',imgsrc);
                })
            }(i);
        }
    });

    
}



/**
 * 字母页面内链
 *
 */
function letter_scroll(letter)
{
    var obj = $("#c_"+letter);
    $('html,body').animate({scrollTop: obj.offset().top}, 500);
}
/*
 * 用户点击城市后，城市名填入input框
 */
function hide_div(e){
    $("div.area").html("");
}
function change_city_val(city, pinyin_city)
{
}
function tabCutover(c,d){
    $(c).parent().attr("class");$(c).parent().children().removeClass("current");
    $(c).addClass("current");$("."+d).parent().children().hide();$("."+d).show();
}

$(function(){
});
    $(function(){
        $('#index_province').change(function(){
            for(var i in cityChange){
                if(i==this.value){
                    var index_city_obj = $('#index_city')[0];
                    index_city_obj.innerHTML='';
                    var obj = cityChange[i];
                    for(var k in obj){
                        if(obj[k].name){
                            index_city_obj.options[index_city_obj.options.length] = new Option( obj[k].name,obj[k].pinyin);
                        }
                    }
                    break;
                }
            }
        });
    });
