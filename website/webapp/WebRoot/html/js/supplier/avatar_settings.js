var Setup=React.createClass({
 componentDidMount:function(){
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
                { title : "Image files", extensions : "jpg,jpeg,png" }
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
                  //  $('.ossfile').css({"text-align":"left"});
                    $('#postfiles').html("开始上传");
                    $('.ossfile').show()[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,6)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                        +'<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                        +'</div>';
                    // $(".ossfile .file_close").click(function(){
                    //     up.removeFile(up.files[0]);
                    //     $('.ossfile').hide()[0].innerHTML = '';
                    //   //  $('.ossfile').css({"text-align":"left"});
                    //     $('#selectfiles').html("重新选择");
                    //     $('#postfiles').html("开始上传");
                    //     $(".file-list img").attr("src","images/public/file_aside.png");
                    // });
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
                //$('.ossfile').css({"text-align":"center"});
                $('#postfiles').html("正在上传...");
                $(progBar).css({"width":file.percent+'%'});
                $(progBar).attr('aria-valuenow', file.percent);
                $(progBar).find("b").html(file.percent + "%");
                //progBar.style.width= file.percent+'%';
            },

            FileUploaded: function(up, file, info) {
                if (info.status == 200)
                {
                    //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                    $('#selectfiles').html("重新选择");
                    $('#postfiles').html("上传成功");
                    // $('.ossfile .progress-bar').css("width","0%");
                    //$('.ossfile .progress-bar')[0].setAttribute('aria-valuenow', 0);
                  //  $('.ossfile').find("span.bfb").html("");
                    $(".file-list").removeClass("error");$(".error-info").hide();
                    file1=f1;
                    setup();
                }
                else
                {
                    document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;
                }
            },

            Error: function(up, err) {
                if (err.code == -600) {
                    $(".error-info").html("图片大小不能超过1MB").show();
                    //alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
                }
                else if (err.code == -601) {
                    $(".error-info").html("仅支持jpg，jpeg，png格式的图片").show();
                    //alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型");
                    //document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
                }
                else if (err.code == -602) {
                    $(".error-info").html("图片已经上传过").show();
                    //alert("\n这个文件已经上传过一遍了");
                    //document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
                }
                else
                {
                    //alert("\nError xml:" + err.response);
                    $(".error-info").html("上传出错。请重新选择!").css("visibility","visible");
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
 },
 render:function(){
       return (
		   <div className="rowmain">
			  <div className="file-list"><img src={localStorage.getItem("headurls")} /></div>
			  <div className="file-button">
			  <div className="ossfile" style={{"width":"300px"}}></div>
				<p>
				  <button type="button" className="btn" id="selectfiles" style={{"margin-right":"10px"}}>选择图片</button>
				  <button type="button" className="btn" id="postfiles">上传头像</button>
				</p>
				<p className="error-info"></p>
				<p className="msg-tips">注：仅支持jpg、jpeg、png格式，图片大小限制1M以内</p>
			  </div>
		   </div>
     )
   }
});


function setup(){
  var data={
    jfuid:localStorage.getItem("jfuid"),
    headurl:file1
  }
  $.ajax({
          type:"POST",
          url:urlHeadurl,
          data:data,
          dataType:"json",
          contentType:"application/x-www-form-urlencoded;charset=utf-8",
          cache:false,
          success:function(result){
            if(result.code=="Y"){
              //$(".set_window").show();
			  $(".cover1").show();
              localStorage.setItem("headurls",domainDown+file1);
            }else{
              alert(result.code);
            }
          }.bind(this),
          error:function(){
              console.log("error");
          }
      });
}
React.render(<Setup/>,$(".row_0")[0]);
