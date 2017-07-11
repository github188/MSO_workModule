function getUrlPackage(result){
  console.log(result);
    ReactDOM.render(
        <div>
            <Package data={result}/>
            <ContentPackage data={result}/>
            <TargetCustomers data={result}/>
            <BasicInformation data={result}/>
            <Annex data={result}/>
        </div>,
        $(".package")[0]
    );
}

if(!sessionStorage.getItem(urlPackage)){
    $.ajax({
        type:"GET",
        url:urlPackage,
        dataType:"json",
        cache:false,
        success:function(result){
          if(result.code=="N"){
              console.log(result.msg);
              return false;
          }
          sessionStorage.setItem(urlPackage,JSON.stringify(result.getGxPackageManagerList));
					getUrlPackage(JSON.parse(sessionStorage.getItem(urlPackage)));

          // this.setState({
          //      config : result.getGxPackageManagerList
          //   });
          //   packageDemand();
        },
        error:function(){
            console.log(msg)
        }
    });
}else{
    getUrlPackage(JSON.parse(sessionStorage.getItem(urlPackage)));
}


var Package = React.createClass({
    getInitialState:function(){
        return{
            config :[]
        }
    },
    componentDidMount:function(){
        var config = this.state.config;
        $.ajax({
            type:"GET",
            url:urlPackage,
            dataType:"json",
            cache:false,
            success:function(result){
              if(result.code=="N"){
                  console.log(result.msg);
                  return false;
              }
              this.setState({
                   config : result.getGxPackageManagerList
                });
                packageDemand();
            }.bind(this),
            error:function(){
                console.log("error")
            }
        });
    },
    render:function(){
      console.log(this.props.data);
        return(
          <div className="block-box">
            <div className="title-left">套餐</div>
            <div className="content-right">
                {this.props.data.map(function(draft,index){
                      return (
                        <div className="drafts_details" key={index}>
                            <h2>{draft.name}</h2>
                            <p className="money"><i className="money">{draft.price}</i>/次</p>
                            <p className="details">{draft.intro}</p>
                            <p className="industry hide">{draft.category1}</p>
                            <p className="coupon hide">{draft.pricetol}</p>
                            <p className="number hide">{draft.num}</p>
                            <p className="cycle hide">{draft.finishperiod}</p>
                            <p className="billing hide">{draft.paymentmodel}</p>
                        </div>
                      );
                    }
                )}
                </div>
          </div>
        );
    }
});

var ContentPackage = React.createClass({
    componentDidMount:function(){
      $(".block-box .content-right li i").toggle(function(){
          $(this).addClass("selected");
          $(this).children(".bubble").show();
      },function(){
          $(this).removeClass("selected");
          $(this).children(".bubble").hide();
      });

    },
    render:function(){
        return(
          <div className="block-box">
            <div className="title-left">套餐内容</div>
            <div className="content-right">
                <ul>
                    <li>
                        <label>套餐名称：</label>
                        <span className="name"></span>
                    </li>
                    <li>
                        <label>业务类型：</label>
                        <span className="types-of"></span><i><span className="help">?</span><span className="bubble">通过致电目标群体，以标准话术挖掘意向客户</span></i>
                    </li>
                    <li>
                        <label>行业：</label>
                        <span className="industry"></span>
                    </li>
                    <li>
                        <label>套餐优惠价：</label>
                        <span className="coupon"></span>
                    </li>
                    <li>
                        <label>需求单价：</label>
                        <span className="money"></span>
                    </li>
                    <li>
                        <label>需求数量：</label>
                        <span className="number"></span>
                    </li>
                    <li>
                        <label>完成周期：</label>
                        <span className="cycle"></span><i><span className="help">?</span><span className="bubble">完成周期是指完成此需求的期限，从需求上架之日算起。</span></i>
                    </li>
                    <li className="hide">
                        <label>结算模式：</label>
                        <span className="billing"></span><i><span className="help">?</span><span className="bubble">与甲方数据查重后进行录音的质量检测</span></i>
                    </li>
                </ul>
            </div>
          </div>
        );
    }
});

var TargetCustomers = React.createClass({
    componentDidMount:function(){


    },
    handleInput: function() {
      $('.target-population').html($(".mbrq").val());
      //$(".descriptionDemand").next().find('.length>span.size2').html(150-$(".descriptionDemand").val().length);
    },
    render:function(){
        return(
          <div className="block-box">
            <div className="title-left">目标客户</div>
            <div className="content-right">
            <div className="main">
                        <table>
                            <tr>
                                <td>目标人群：</td>
                                <td>
                                    <select className="ui-select" name="drop">
                                        <option>自定义</option>
                                    </select>
                                </td>
                                <td>自定义：</td>
                                <td><input type="text" maxLength="12" placeholder="请输入自定义人群（12个字以内）" className="mbrq" onInput={this.handleInput.bind(this)} /></td>
                            </tr>
                            <tr>
                                <td>对象年龄：</td>
                                <td><input type="number" className="startAge" />&nbsp;&nbsp;-&nbsp;&nbsp;<input type="number" className="endAge" /><span>&nbsp;&nbsp;周岁</span></td>
                            </tr>
                            <tr>
                                <td>获客渠道：</td>
                                <td>
                                    <select className="ui-select" name="drop">
                                        <option>自定义</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </div>
            </div>
          </div>
        );
    }
});

var BasicInformation = React.createClass({
    componentDidMount:function(){
      $(".ui-select").selectWidget({
          change  : function (changes) {
          },
          effect       : "slide",
          keyControl   : false,
          speed        : 200,
          scrollHeight : 167,
          overflow: "hidden"
      });
      $('.form_date').datetimepicker({
          language:  'zh-CN',
          weekStart: 1,
          todayBtn:  1,
          autoclose: 1,
          todayHighlight: 1,
          startView: 2,
          minView: 2,
          forceParse: 0
      }).on("click", function (ev) {
          $(".form_date").datetimepicker("setEndDate", $(".form_date2").val());
      });
      $("input[name=isFZ]").change(function(){
          if($(this).parent().text()=="是"){
              $(".radio_fz").show();
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

    },
    handleInput: function() {
      $(".introductionPro").next().find('.length>span.size').html(150-$(".introductionPro").val().length);
      $(".descriptionDemand").next().find('.length>span.size2').html(150-$(".descriptionDemand").val().length);
    },
    render:function(){
        return(
          <div className="block-box">
            <div className="title-left">基本信息</div>
            <div className="content-right">
            <div className="main">
                        <table>
                            <tr>
                                <td>需求名称：</td>
                                <td><input type="text" className="demand-name" maxLength="12" /><span className="info">为您的需求命名，限制 12 个字</span></td>
                            </tr>
                            <tr>
                                <td>需求描述：</td>
                                <td><textarea maxLength="150" className="descriptionDemand" onInput={this.handleInput.bind(this)}></textarea><p><span className="length">还可以输入 <span className="size2">150</span> 个字</span></p></td>
                            </tr>
                            <tr>
                                <td>产品名称：</td>
                                <td>
                                    <input type="text" maxLength="12" /><span className="info">您的产品或服务名，限制 12 个字</span>
                                </td>
                            </tr>
                            <tr>
                                <td>产品介绍：</td>
                                <td>
                                    <textarea maxLength="150" className="introductionPro"  placeholder="产品或服务介绍，可上传附件，可填入网站链接" onInput={this.handleInput.bind(this)}></textarea>
                                    <p>是否上传产品介绍附件：<label><input type="radio" name="isFJ" />是</label><label><input type="radio" name="isFJ" defaultChecked />否</label><span className="length">还可以输入 <span className="size">150</span> 个字</span></p>
                                    <div className="radio_fj">
                                        <p>附件支持ppt、pdf、doc等格式文件，大小不可超过100MB</p>
                                        <div className="file_box">
                                            <button type="button" className="btn" id="selectfiles">选择文件</button>
                                            <div className="ossfile"></div>
                                            <button type="button" className="btn" id="postfiles">开始上传</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><span>开始日期:</span></td>
                                <td><input type="text" className="form_date" readonly /><i className="date_icon"></i><span>结束日期:</span><input type="text" className="form_date" readonly /><i className="date_icon"></i></td>
                            </tr>
                            <tr>
                                <td>项目负责人：</td>
                                <td>
                                    <p style={{"marginBottom":"20px"}}>是否需要其他人负责此需求：<label><input type="radio" name="isFZ" />是</label><label><input type="radio" name="isFZ" defaultChecked />否</label></p>
                                    <p className="radio_fz"><span>负责人姓名：</span><input type="text" style={{"width":"162px"}} /><span style={{"marginLeft":"84px"}}>负责人电话：</span><input type="text" style={{"width":"162px"}} /></p>
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
        now = timestamp = Date.parse(new Date()) / 1000;

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
              serverUrl = 'http://mso-china.cn:8091/gxcms/ali.do?uId=test&type=h'
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
              suffix = filename.substring(pos)
          }
          return suffix;
        }

        function calculate_object_name(filename)
        {
          if (g_object_name_type == 'local_name')
          {
              g_object_name += "${filename}"
          }
          else if (g_object_name_type == 'random_name')
          {
              suffix = get_suffix(filename)
              g_object_name = key + random_string(10) + suffix
          }
          return ''
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

        function set_upload_param(up, filename, ret)
        {
          if (ret == false)
          {
              ret = get_signature()
          }
          g_object_name = key;
          if (filename != '') {
              suffix = get_suffix(filename)
              calculate_object_name(filename)
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
                  { title : "word files", extensions : "ppt,pdf,doc" }
              ],
              max_file_size : '1000mb', //最大只能上传10mb的文件
              prevent_duplicates : true //不允许选取重复文件
          },

          init: {
              PostInit: function() {
                  $('.ossfile')[0].innerHTML = '';
                  document.getElementById('postfiles').onclick = function() {
                      set_upload_param(uploader, '', false);
                      return false;
                  };
              },

              FilesAdded: function(up, files) {
                  plupload.each(files, function(file) {
                      if(up.files.length>1){
                          up.removeFile(up.files[0]);
                      }
                      $('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,8)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
                          +'<span class="bfb"></span><i class="file_close"></i></span><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                          +'</div>';
                      $(".file_close").click(function(){
                          $("#"+file.id).find("span.file_name").remove();
                      });
                  });
              },

              BeforeUpload: function(up, file) {
                  check_object_radio();
                  set_upload_param(up, file.name, true);
              },

              UploadProgress: function(up, file) {
                  var d = document.getElementById(file.id);
                  setTimeout(function(){
                      $(d).find("span.bfb").html("..."+file.percent + "%");
                  },600);
                  var prog = d.getElementsByTagName('div')[0];
                  var progBar = prog.getElementsByTagName('div')[0]
                  progBar.style.width= 2*file.percent+'px';
                  progBar.setAttribute('aria-valuenow', file.percent);
              },

              FileUploaded: function(up, file, info) {
                  if (info.status == 200)
                  {
                      //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                      file1=get_date_url()+get_uploaded_object_name(file.name);
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
                      alert("\nError xml:" + err.response);
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
                  { title : "word files", extensions : "ppt,pdf,doc" }
              ],
              max_file_size : '1000mb', //最大只能上传10mb的文件
              prevent_duplicates : true //不允许选取重复文件
          },

          init: {
              PostInit: function() {
                  $('.ossfile2')[0].innerHTML = '';
                  document.getElementById('postfiles2').onclick = function() {
                      set_upload_param(uploader2, '', false);
                      return false;
                  };
              },

              FilesAdded: function(up, files) {
                  plupload.each(files, function(file) {
                      if(up.files.length>1){
                          up.removeFile(up.files[0]);
                      }
                      $('.ossfile2')[0].innerHTML = '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')'
                          +'<div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                          +'</div>';
                  });
              },

              BeforeUpload: function(up, file) {
                  check_object_radio();
                  set_upload_param(up, file.name, true);
              },

              UploadProgress: function(up, file) {
                  var d = document.getElementById(file.id);
                  setTimeout(function(){
                      d.getElementsByTagName('b')[0].innerHTML = '<span style="color:#fff;">' + file.percent + "%</span>";
                  },600);
                  var prog = d.getElementsByTagName('div')[0];
                  var progBar = prog.getElementsByTagName('div')[0]
                  progBar.style.width= 2*file.percent+'px';
                  progBar.setAttribute('aria-valuenow', file.percent);
              },

              FileUploaded: function(up, file, info) {
                  if (info.status == 200)
                  {
                      //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                      file2=get_date_url()+get_uploaded_object_name(file.name);
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
                      alert("\nError xml:" + err.response);
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
                  { title : "word files", extensions : "ppt,pdf,doc" }
              ],
              max_file_size : '1000mb', //最大只能上传10mb的文件
              prevent_duplicates : true //不允许选取重复文件
          },

          init: {
              PostInit: function() {
                  $('.ossfile3')[0].innerHTML = '';
                  document.getElementById('postfiles3').onclick = function() {
                      set_upload_param(uploader3, '', false);
                      return false;
                  };
              },

              FilesAdded: function(up, files) {
                  plupload.each(files, function(file) {
                      if(up.files.length>1){
                          up.removeFile(up.files[0]);
                      }
                      $('.ossfile3')[0].innerHTML = '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')'
                          +'<div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div>'
                          +'</div>';
                  });
              },

              BeforeUpload: function(up, file) {
                  check_object_radio();
                  set_upload_param(up, file.name, true);
              },

              UploadProgress: function(up, file) {
                  var d = document.getElementById(file.id);
                  setTimeout(function(){
                      d.getElementsByTagName('b')[0].innerHTML = '<span style="color:#fff;">' + file.percent + "%</span>";
                  },600);
                  var prog = d.getElementsByTagName('div')[0];
                  var progBar = prog.getElementsByTagName('div')[0]
                  progBar.style.width= 2*file.percent+'px';
                  progBar.setAttribute('aria-valuenow', file.percent);
              },

              FileUploaded: function(up, file, info) {
                  if (info.status == 200)
                  {

                      //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
                      file3=get_date_url()+get_uploaded_object_name(file.name);
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
                      alert("\nError xml:" + err.response);
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


    },
    render:function(){
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
                                    <i className="bubble-hover">?</i>
                                    <div className="bubble-click">
                                        <div>
                                            <img src="images/public/pic-jbf-nodata.png" />
                                            <p>销售线索文件是一个规定表头的表格，每一个表头即是一个字段，每一个字段即被认定为您要求采集的字段信息，请详细填写每一个字段，上图可作为参考</p>
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
        $("span.types-of").text(sessionStorage.getItem("businessType"));
    },
    render:function(){
        return(
            <div>
                <ul>
                    <li>
                        <label>业务类型：</label>
                        <span className="types-of"></span>
                    </li>
                    <li>
                        <label>行业：</label>
                        <span className="industry"></span>
                    </li>
                    <li className="hide">
                        <label>结算模式：</label>
                        <span className="billing"></span>
                    </li>
                    <li>
                        <label>目标人群：</label>
                        <span className="target-population"></span>
                    </li>
                    <li>
                        <label>对象年龄：</label>
                        <span className="age"></span>
                    </li>
                    <li>
                        <label>获客渠道：</label>
                        <span className="channel"></span>
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
                <p className="top">
                    <span className="numbername">需求数量：</span>
                    <span className="number"></span>
                    <span className="money"></span>
                    <span className="Money">需求单价：</span>
                </p>
                <p>总金额：</p>
                <h2><span className="coupon">&nbsp;</span></h2>
                <button type="button" className="btn_tj">提交审核</button>
            </div>
        );
    }
});

ReactDOM.render(<PreviewRight />,$(".context-explain")[0]);
