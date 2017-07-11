
accessid = ''
accesskey = ''
host = ''
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
f1='';
f2='';
f3='';
f4='';
var file1;
var file2;
var file3;
var file4;
now = timestamp = Date.parse(new Date()) / 1000;
var pagename='';
pagename=document.getElementById("pagename").value;
var credentials="credentials";


//测试库
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function send_request()
{
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (xmlhttp!=null)
    {
        var uid=sessionStorage.getItem("jfuid");
        //成单报表上传
        if("customer_lj_DemandDetail"==pagename){
            var orderId=document.getElementById("orderid").value;
            credentials="jbcdbg";
            serverUrl = serverUrlpre+'/aliOrder.do?orderId='+orderId+'&type='+credentials;
        }else if("customer_lj_DemandManagement2"==pagename){
            credentials="fbxq";
            serverUrl = serverUrlpre+'/aliOrder.do?orderId='+uid+'&type='+credentials;
        }
        else{
            //头像设置 type=headimg
            //证书设置 type=credentials
            //成单报表 type=user
            if("customer_lj_PhotoSet"==pagename){
                credentials="headimg";
            }else{
                credentials="credentials";
            }
            serverUrl = serverUrlpre+'/ali.do?uid='+uid+'&type='+credentials;
        }


        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
};

function check_object_radio() {
    var tt = document.getElementsByName('myradio');
    for (var i = 0; i < tt.length ; i++ )
    {
        if(tt[i].checked)
        {
            g_object_name_type = tt[i].value;
            break;
        }
    }
}

function get_signature()
{
    //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
    now = timestamp = Date.parse(new Date()) / 1000;
    if (expire < now + 3)
    {
        body = send_request()
        var obj = eval ("(" + body + ")");
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback']
        key = obj['dir']
        return true;
    }
    return false;
};

function random_string(len) {
    len = len || 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function get_suffix(filename) {
    pos = filename.lastIndexOf('.')
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos);
    }
    return suffix;
}

function filterStr(str)
{
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");
    var specialStr = "";
    for(var i=0;i<str.length;i++)
    {
        specialStr += str.substr(i, 1).replace(pattern, '_');
    }
    return specialStr;
}

function calculate_object_name(filename,i)
{
    if (g_object_name_type == 'local_name')
    {
        g_object_name += "${filename}";
    }
    else if (g_object_name_type == 'random_name')
    {
        pos = filename.lastIndexOf('.');
        if (pos != -1) {
            file_name1 = filename.substring(0,pos);
        }
        suffix = get_suffix(filename);
        //g_object_name = key + random_string(10) + suffix
        var str = new Date().Format("hhmmss");

        var ss  =filterStr(file_name1);
        g_object_name =  key+ss+'_'+str+suffix;
        if(i==1) {f1= g_object_name;};
        if(i==2) {f2= g_object_name;};
        if(i==3) {f3= g_object_name;};
        if(i==4) {f4= g_object_name;};
    }
    return ''
}

function getFileName(filename){
    var pos ;
    var file_name1;
    var suffix;

    pos = filename.lastIndexOf('.');
    if (pos != -1) {
        file_name1 = filename.substring(0,pos);
    }
    suffix = get_suffix(filename);
    //g_object_name = key + random_string(10) + suffix
    return key+file_name1+ suffix;

}
function get_uploaded_object_name(filename)
{
    console.log(g_object_name_type);
    if (g_object_name_type == 'local_name')
    {
        tmp_name = g_object_name
        tmp_name = tmp_name.replace("${filename}", filename);
        return tmp_name
    }
    else if(g_object_name_type == 'random_name')
    {
        return g_object_name
    }
}

function set_upload_param(up, filename, ret,i)
{
    if (ret == false)
    {
        ret = get_signature()
    }
    g_object_name = key;
    if (filename != '') {
        suffix = get_suffix(filename)
        calculate_object_name(filename,i)
    }
    new_multipart_params = {
        'key' : g_object_name,
        'policy': policyBase64,
        'OSSAccessKeyId': accessid,
        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
        'callback' : callbackbody,
        'signature': signature,
    };

    up.setOption({
        'url': host,
        'multipart_params': new_multipart_params
    });

    up.start();
}
function get_date_url(){
    var time=new Date();
    var Year=time.getFullYear();
    var Month=(time.getMonth()+1)<10?+"0"+(time.getMonth()+1).toString():time.getMonth()+1;
    var Day=time.getDate()<10?+"0"+time.getDate().toString():time.getDate();
    return "img/"+Year+"/"+Month+"/"+Day+"/"
}
/*var uploader = new plupload.Uploader({
    runtimes : 'html5,flash,silverlight,html4',
    browse_button : 'selectfiles',
    //multi_selection: false,
    container: $('.container')[0],
    flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
    silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
    url : 'http://oss.aliyuncs.com',
    filters: {
        mime_types : [ //只允许上传图片和zip,rar文件
            { title : "Image files", extensions : "jpg,gif,png,bmp" }
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
            { title : "Image files", extensions : "jpg,gif,png,bmp" }
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
                //alert("\nError xml:" + err.response);
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
            { title : "Image files", extensions : "jpg,gif,png,bmp" }
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
                //alert("\nError xml:" + err.response);
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
            { title : "Image files", extensions : "jpg,gif,png,bmp" }
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
                //alert("\nError xml:" + err.response);
                alert("拒绝访问。请重新上传!");
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
});*/



//plupload中为我们提供了mOxie对象
//有关mOxie的介绍和说明请看：https://github.com/moxiecode/moxie/wiki/API
//如果你不想了解那么多的话，那就照抄本示例的代码来得到预览的图片吧
function previewImage(file,callback){//file为plupload事件监听函数参数中的file对象,callback为预览图片准备完成的回调函数
    if(!file || !/image\//.test(file.type)) return; //确保文件是图片
    if(file.type=='image/gif'){//gif使用FileReader进行预览,因为mOxie.Image只支持jpg和png
        var fr = new mOxie.FileReader();
        fr.onload = function(){
            callback(fr.result);
            fr.destroy();
            fr = null;
        }
        fr.readAsDataURL(file.getSource());
    }else{
        var preloader = new mOxie.Image();
        preloader.onload = function() {
            preloader.downsize( 300, 300 );//先压缩一下要预览的图片,宽300，高300
            var imgsrc = preloader.type=='image/jpeg' ? preloader.getAsDataURL('image/jpeg',80) : preloader.getAsDataURL(); //得到图片src,实质为一个base64编码的数据
            callback && callback(imgsrc); //callback传入的参数为预览图片的url
            preloader.destroy();
            preloader = null;
        };
        preloader.load( file.getSource() );
    }
}
