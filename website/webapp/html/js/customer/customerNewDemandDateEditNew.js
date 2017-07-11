function getUrlGetDetailHfp(getDetailHfp){
  setTimeout(function(){
    React.render(<DateFilter data={getDetailHfp}/>,$(".clo1")[0]);
    React.render(<BasicInformation data={getDetailHfp}/>,$(".clo2")[0]);
    React.render(<Annex data={getDetailHfp}/>,$(".clo3")[0]);
    React.render(<PreviewRight />,$(".context-explain")[0]);
    $(".date span.types-of").text($(".content-right span.types-of").text());
    $(".date span.startDate").text($("input.startDate").val());
    $(".date span.endDate").text($("input.endDate").val());
    $(".date span.num").text($("input.num").val());
    $(".date span.money").text($("input.money").val());
    $(".date span.total").text($("input.num").val() * $("input.money").val());
    $(".loading_cover").hide();
    //console.log(urlGetDetailHfp);
  },0);
}
if(!sessionStorage.getItem(urlGetDetailHfp)){
 $.ajax({
     type:"GET",
     url:urlGetDetailHfp,
     dataType:"json",
     cache:false,
     success:function(result){
         if(result.code=="N"){
           //console.log(result.msg);
           $(".loading_cover").hide();
           return false;
         }
         sessionStorage.setItem(urlGetDetailHfp,JSON.stringify(result.detail));
         getUrlGetDetailHfp(JSON.parse(sessionStorage.getItem(urlGetDetailHfp)));
     },
     error:function(){
       $(".loading_cover").hide();
       console.log(msg);
     }
     });
}else{
getUrlGetDetailHfp(JSON.parse(sessionStorage.getItem(urlGetDetailHfp)));
}

var DateFilter = React.createClass({
    componentDidMount:function(){
      var newDate = new Date();
      //console.log(newDate);
      var t = newDate.toJSON();
      //console.log(t);
      $(".startDate").datetimepicker({
    		language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
            startDate:new Date(t),
		}).on("click",function(ev){
		    $(".startDate").datetimepicker("setEndDate", $(".endDate").val());
		});
		$(".endDate").datetimepicker({
		    language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
            startDate:new Date(t),
		}).on("click", function (ev) {
		    $(".endDate").datetimepicker("setStartDate", $(".startDate").val());
		});
    $("input.startDate").change(function(){
        $(".package li span.startDate").text($(this).val());
    });
    $("input.startDate").blur(function(){
        if($(this).val() == ''){
            $(this).addClass("error");
            $(this).parent().find("p.error").text("请填写开始日期").show();
            return false;
        }else{
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        }
    });
    $("input.startDate").focus(function(){
        $(this).removeClass("error");
        $(this).parent().find("p.error").hide();
    });
    $("table.table-condensed").click(function(){
        $("input.startDate").parent().find("p.error").hide();
        $("input.startDate").removeClass("error");
    });
    $("input.endDate").change(function(){
        $(".package li span.endDate").text($(this).val());
    });
    $("input.endDate").blur(function(){
        if($(this).val() == ''){
            $(this).addClass("error");
            $(this).parent().find("p.error").text("请填写结束日期").show();
            return false;
        }else{
            $(this).removeClass("error");
            $(this).parent().find("p.error").hide();
        }
    });
    $("input.endDate").focus(function(){
        $(this).removeClass("error");
        $(this).parent().find("p.error").hide();
    });
    $("table.table-condensed").click(function(){
        $("input.endDate").parent().find("p.error").hide();
        $("input.endDate").removeClass("error");
    });
    $("input[name=isFZ]").change(function(){
        if($(this).parent().text()=="是"){
            $(".radio_fz").show();
            $("input.pleader").blur(function(){
                if($(this).val() == ''){
                    $(this).addClass("error");
                    $(this).parent().next().text("请填写负责人姓名").show();
                    return false;
                }else{
                    $(this).removeClass("error");
                    $(this).parent().next().hide();
                }
            });
            $("input.pleader").focus(function(){
                $(this).removeClass("error");
                $(this).parent().next().hide();
            });
            $("input.pphone").blur(function(){
                if($(this).val() == ''){
                    $(this).addClass("error");
                    $(this).parent().next().text("请填写负责人电话").show();
                    return false;
                }else{
                    $(this).removeClass("error");
                    $(this).parent().next().hide();
                }
            });
            $("input.pphone").focus(function(){
                $(this).removeClass("error");
                $(this).parent().next().hide();
            });
        }else{
          $(".radio_fz").hide().next().hide();
          $(".radio_fz input").removeClass("error");
        }
    });
      $("input[name=isFJ]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_fj").show();
          }else{
              $(".radio_fj").hide();
          }
      });
      $("input[name=isXS]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_xs").show();
          }else{
              $(".radio_xs").hide();
          }
      });
      $("input[name=isHS]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_hs").show();
          }else{
              $(".radio_hs").hide();
          }
      });
      $("input[name=isMD]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_md").show();
          }else{
              $(".radio_md").hide();
          }
      });
      $("input.startDate").change(function(){
          $(".date li span.startDate").text($(this).val());
      });
      $("input.endDate").change(function(){
          $(".date li span.endDate").text($(this).val());
      });
      $("input.demand-name").blur(function(){
          if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").show();
              return false;
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();
          }
      });
      $("input.demand-name").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
      });
      $("textarea.descriptionDemand").blur(function(){
          if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").show();
              return false;
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();
          }
      });
      $("textarea.descriptionDemand").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
      });
      $("input.pro-name").blur(function(){
          if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").show();
              return false;
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();
          }
      });
      $("input.pro-name").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
      });
      $("textarea.introductionPro").blur(function(){
          if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").show();
              return false;
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();
          }
      });
      $("textarea.introductionPro").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
      });
	  $("span.help").hover(function(){
          $(this).next(".bubble").show();
      },function(){
		  $(this).next(".bubble").hide();
	  });
    },
    handleInput: function() {
      $(".descriptionDemand").next().find('.length>span.size2').html(150-$(".descriptionDemand").val().length);
	  $("span.num").text($("input.num").val());
      $("span.money").text($("input.money").val());
      $("span.total").text(parseInt($("input.num").val() * $("input.money").val()));
    },
    render:function(){
      var data=this.props.data;
        return(
          <div className="block-box">
            <div className="title-left">业务</div>
            <div className="content-right">
                <ul>
                    <li>
                        <label>业务类型：</label>
                        <span className="types-of">{data.servicetype}</span><i><span className="help">?</span><span className="bubble">针对企业自有数据和需求，进行有效触达</span></i>
                    </li>
                    <li>
                        <label>清洗渠道：</label>
                        <span>电话</span>
                    </li>
                    <li>
                        <label>数据条目：</label>
                        <input autoComplete="off" type="text" className="num" onInput={this.handleInput.bind(this)} defaultValue={data.releasenum} />
                        <span style={{"color":"#777777"}}>条</span>
                        <span className="margin-15">拨打次数：无人接听数据最多拨打 3 次</span>
                        <p className="error">请填写数据条目</p>
                    </li>
                    <li>
                        <label>单价：</label>
                        <input autoComplete="off" type="text" className="money" onInput={this.handleInput.bind(this)} defaultValue={data.pprice} />
                        <span style={{"color":"#777777"}}>元</span>
                        <p className="error">请填写单价</p>
                    </li>
                    <li className="hide">
                        <label>结算模式：</label>
                        <span>数据条目</span><i><span className="help">?</span><span className="bubble">按实际提交数据条目数乘以单价进行结算</span></i>
                    </li>
                </ul>
            </div>
          </div>
        );
    }
});



var BasicInformation = React.createClass({
    componentDidMount:function(){
      var newDate = new Date();
      var t = newDate.toJSON();
      $(".startDate").datetimepicker({
    		language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
            startDate:new Date(t),
		}).on("click",function(ev){
		    $(".startDate").datetimepicker("setEndDate", $(".endDate").val());
		});
		$(".endDate").datetimepicker({
		    language:  'zh-CN',
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0,
            format: 'yyyy-mm-dd',
            startDate:new Date(t),
		}).on("click", function (ev) {
		    $(".endDate").datetimepicker("setStartDate", $(".startDate").val());
		});
      $("input[name=isFZ]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_fz").show();
              $("input.pleader").blur(function(){
                  if($(this).val() == ''){
                      $(this).addClass("error");
                      $(this).parent().next().text("请填写负责人姓名").show();
                      return false;
                  }else{
                      $(this).removeClass("error");
                      $(this).parent().next().hide();
                  }
              });
              $("input.pleader").focus(function(){
                  $(this).removeClass("error");
                  $(this).parent().next().hide();
              });
              $("input.pphone").blur(function(){
                  if($(this).val() == ''){
                      $(this).addClass("error");
                      $(this).parent().next().text("请填写负责人电话").show();
                      return false;
                  }else{
                      $(this).removeClass("error");
                      $(this).parent().next().hide();
                  }
              });
              $("input.pphone").focus(function(){
                  $(this).removeClass("error");
                  $(this).parent().next().hide();
              });
          }else{
              $(".radio_fz").hide();
          }
      });
      $("input[name=isFJ]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_fj").show();
          }else{
              $(".radio_fj").hide();
          }
      });

      $("input.startDate").change(function(){
          $(".date li span.startDate").text($(this).val());
      });
      $("input.endDate").change(function(){
          $(".date li span.endDate").text($(this).val());
      });
      $("input.demand-name").blur(function(){
          if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").show();
              return false;
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();
          }
      });
      $("input.demand-name").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
      });
      $("textarea.descriptionDemand").blur(function(){
          if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").show();
              return false;
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();
          }
      });
      $("textarea.descriptionDemand").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
      });
    },
    handleInput: function() {
      $(".descriptionDemand").next().find('.length>span.size2').html(150-$(".descriptionDemand").val().length);
    },
    render:function(){
        var data=this.props.data;
        return(
          <div className="block-box">
            <div className="title-left">基本信息</div>
            <div className="content-right">
            <div className="main">
                        <table>
                            <tr>
                                <td>需求名称：</td>
                                <td><input autoComplete="off" type="text" defaultValue={data.demandname} className="demand-name" maxLength="12" /><span className="info">为您的需求命名，限制 12 个字</span>
                                <p className="error">请填写需求名称</p></td>
                            </tr>
                            <tr>
                                <td style={{"verticalAlign": "top"}}>需求描述：</td>
                                <td><textarea maxLength="150" defaultValue={data.demanddescription} className="descriptionDemand" onInput={this.handleInput.bind(this)}></textarea><p><span className="length">还可以输入 <span className="size2">150</span> 个字</span></p>
                                <p className="error">请填写需求描述</p></td>
                            </tr>

                            <tr>
                                <td><span>开始日期:</span></td>
                                <td><input autoComplete="off" type="text" className="form_date startDate" readonly onChange={this.handleInput.bind(this)} /><i className="date_icon"></i><span>结束日期:</span><input type="text" className="form_date endDate" readonly onChange={this.handleInput.bind(this)} /><i className="date_icon"></i></td>
                            </tr>
                            <tr>
                                <td style={{"verticalAlign": "top"}}>项目负责人：</td>
                                <td>
                                    <p style={{"marginBottom":"20px"}}>是否需要其他人负责此需求：<label><input type="radio" name="isFZ" />是</label><label><input type="radio" name="isFZ" defaultChecked />否</label></p>
                                    <p className="radio_fz"><span>负责人姓名：</span><input autoComplete="off" type="text" defaultValue={data.pleader} style={{"width":"162px"}} className="pleader" /><span style={{"marginLeft":"84px"}}>负责人电话：</span><input autoComplete="off" type="text" defaultValue={data.pphone} className="pphone" style={{"width":"162px"}} /></p>
                                    <p className="error">请填写负责人姓名</p>
                                </td>
                            </tr>
                        </table>
                    </div>
            </div>
          </div>
        );
    }
});

var Annex = React.createClass({
    componentDidMount:function(){
        var uploader2 = new plupload.Uploader({
                runtimes : 'html5,flash,silverlight,html4',
                browse_button : 'selectfiles2',
                //multi_selection: false,
                container: $('.container2')[0],
                flash_swf_url : 'lib/plupload-2.1.2/js/Moxie.swf',
                silverlight_xap_url : 'lib/plupload-2.1.2/js/Moxie.xap',
                url : 'http://oss.aliyuncs.com',
                filters: {
                    max_file_size : '1000mb', //最大只能上传10mb的文件
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
                            $('.ossfile2')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,4)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
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
                max_file_size : '1000mb', //最大只能上传10mb的文件
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
                max_file_size : '1000mb', //最大只能上传10mb的文件
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

      $("input[name=isXS]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_xs").show();
          }else{
              $(".radio_xs").hide();
          }
      });
      $("input[name=isHS]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_hs").show();
          }else{
              $(".radio_hs").hide();
          }
      });
      $("input[name=isMD]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_md").show();
          }else{
              $(".radio_md").hide();
          }
      });
      $(".radio_main i.bubble-hover").click(function(){
          $(this).next().show();
      });
      $(".radio_main .bubble-click").click(function(){
          $(this).hide();
      });
      $(".radio_main .bubble-click>div").click(function(e){
          e.stopPropagation();
      });
    },
    render:function(){
      var data=this.props.data;
        return(
          <div className="block-box">
            <div className="title-left">附件</div>
            <div className="content-right">
            <div className="main">
                        <p>请选择上传相关附件，单个附件最大限制为100MB，不支持应用程序、音频和视频等文件上传</p>
                        <table>
                            <tr className="radio_main">
                                <td width="178">是否上传销售线索文件：</td>
                                <td width="470"><label><input type="radio" name="isXS" />是</label><label><input type="radio" name="isXS" defaultChecked />否</label>
                                    <i className="bubble-hover" id="bubble">?</i>
                                    <div className="bubble-click">
                                        <div>
                                            <img src="images/public/pic-jbf-nodata.jpg" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="radio_xs">
                                <td><button type="button" className="btn" id="selectfiles2" style={{"width":"158px"}}><i className="add"></i><span>上传销售线索文件</span></button></td>
                                <td><div className="ossfile2" style={{"width":"450px"}}></div></td>
                                <td><button type="button" className="btn" id="postfiles2" style={{"width":"152px"}}>开始上传</button></td>
                            </tr>
                            <tr className="radio_main">
                                <td>是否上传话术：</td>
                                <td><label><input type="radio" name="isHS" />是</label><label><input type="radio" name="isHS" defaultChecked />否</label></td>
                            </tr>
                            <tr className="radio_hs">
                                <td><button type="button" className="btn" id="selectfiles3" style={{"width":"158px"}}><i className="add"></i><span>上传话术</span></button></td>
                                <td><div className="ossfile3" style={{"width":"450px"}}></div></td>
                                <td><button type="button" className="btn" id="postfiles3"  style={{"width":"152px"}}>开始上传</button></td>
                            </tr>
                            <tr className="radio_main">
                                <td>是否上传目标客户名单：</td>
                                <td><label><input type="radio" name="isMD" />是</label><label><input type="radio" name="isMD" defaultChecked />否</label></td>
                            </tr>
                            <tr className="radio_md">
                                <td><button type="button" className="btn" id="selectfiles4" style={{"width":"158px"}}><i className="add"></i><span>上传目标客户名单</span></button></td>
                                <td><div className="ossfile4" style={{"width":"450px"}}></div></td>
                                <td><button type="button" className="btn" id="postfiles4"  style={{"width":"152px"}}>开始上传</button></td>
                            </tr>
                        </table>
                    </div>
            </div>
          </div>
        );
    }
});


var PreviewRight = React.createClass({
    componentDidMount:function(){
      sessionStorage.removeItem("fdstate");
        //$(".topNav .top .menu ul li:nth-child(3) a").addClass("selected");
        $(".btn_tj").click(function(){
            $("input:visible").blur();
            $("textarea").blur();
            sessionStorage.removeItem("fdstate");
            sessionStorage.setItem("fdstate", 1);
            if($("input").hasClass("error") || $("textarea").hasClass("error") || $("input.form_date").val()==""){
              //alert(1);addDemand();
            }else{
                addDemand(1);
            }
          });
        $("button.btn_cg").click(function(){
          $(".loading_cover").show();
          sessionStorage.setItem("fdstate", 0);
          addDemand(0);
        });
    },
    render:function(){
      var data=this.props.data;
        return(
            <div>
                <ul>
                    <li>
                        <label>业务类型：</label>
                        <span className="types-of"></span>
                    </li>
                    <li>
                        <label>清洗渠道：</label>
                        <span className="qxqd">电话</span>
                    </li>
                    <li>
                        <label>拨打次数：</label>
                        <span>无人接听数据最多拨打3次</span>
                    </li>
                    <li className="hide">
                        <label>结算模式：</label>
                        <span  className="jsms">数据条目</span>
                    </li>
                    <li>
                        <label>开始日期：</label>
                        <span className="startDate"></span>
                    </li>
                    <li>
                        <label>结束日期：</label>
                        <span className="endDate"></span>
                    </li>
                </ul>
                <ul className="top">
                  <li>
                      <label>数据条目：</label>
                      <span className="num"></span>
                  </li>
                  <li>
                      <label>需求单价：</label>
                      <span className="money"></span>
                  </li>
                </ul>
                <p>总金额：</p>
                <h2><span className="total-d">￥</span><span className="total"></span></h2>
                <div>
                    <button type="button" className="btn_tj" id="add-sh">提交审核</button>
                    <button type="button" className="btn_cg" id="add-cg">加入草稿箱</button>
                </div>

            </div>
        );
    }
});
