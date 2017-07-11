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
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            cache:false,
            success:function(result){
              if(result.code=="N"){
                  $(".loading_cover").hide();
                  console.log(result.msg);
                  return false;
              }else if(result.code=="N001"){
				  sessionStorage.clear();
                  window.location.href="/login.html";
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
        var config = this.state.config;//初始化数组
        var drafts = config.map(function(draft,index){
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
                    <p className="pid hide">{draft.pid}</p>
                </div>
              );
            }
        );
        return(
          <div className="block-box">
            <div className="title-left">套餐</div>
            <div className="content-right" id="package">{drafts}</div>
          </div>
        );
    }
});

var ContentPackage = React.createClass({
    componentDidMount:function(){
      $(".block-box .content-right li i").hover(function(){
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
      $(".demend_left .settlement-pattern").selectWidget({
          change  : function (changes) {
              $(".demend_right .settlement-pattern").text(changes);
          },
          effect       : "slide",
          keyControl   : false,
          speed        : 200,
          scrollHeight : 167,
          overflow: "hidden"
      });
      $(".mbrq .target-population").selectWidget({
          change  : function (changes) {
              if(changes=="自定义"){
                $("td.zdy").show();
              }else{
                $("td.zdy").hide();
              }
              $("span.target-population").text(changes);
          },
          effect       : "slide",
          keyControl   : false,
          speed        : 200,
          scrollHeight : 167,
          overflow: "hidden"
      });
      $(".hkqd .channel").selectWidget({
          change  : function (changes) {
              $("span.channel").text(changes);
          },
          effect       : "slide",
          keyControl   : false,
          speed        : 200,
          scrollHeight : 167,
          overflow: "hidden"
      });
      $(".demend_left .age input[type=number]").on("input",function(){
          var number1=$(".demend_left .age input[type=number]").eq(0).val()===""?"?":$(".demend_left .age input[type=number]").eq(0).val();
          var number2=$(".demend_left .age input[type=number]").eq(1).val()===""?"?":$(".demend_left .age input[type=number]").eq(1).val();
          $(".demend_right .age").html(number1+"-"+number2+" 周岁");
      });
      //var re = /^\d+(?=\.{0,1}\d+$|$)/;
      $("input.startAge").blur(function(){
          if($("input.startAge").val()!==""){
            if(parseInt($(this).val()) > parseInt($("input.endAge").val())){
                $(this).addClass("error");
                $(this).parent().find("p.error").text("开始年龄需小于结束年龄").show();
            }
          }else if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").text("请填写开始年龄").show();
              return false;
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();

          }
      });
      $("input.startAge").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
          //$("input.endAge").attr("min",$(this).val());
      });
      $("input.endAge").focus(function(){

      });
      $("input.endAge").blur(function(){
          $("input.endAge").attr("min",$("input.startAge").val());
          var oNum = $("input.startAge").val();
          if($(this).val() == ''){
              $(this).addClass("error");
              $(this).parent().find("p.error").text("请填写结束年龄").show();
              return false;
          }else if(parseInt($(this).val()) < parseInt($("input.startAge").val())){
              $(this).addClass("error");
              $(this).parent().find("p.error").text("结束年龄需大于开始年龄").show();
          }else{
              $(this).removeClass("error");
              $(this).parent().find("p.error").hide();
              if(parseInt($(this).val()) < parseInt(oNum)){
                  $(this).val($("input.startAge").val());
              }
              $(".package li span.age").text($(".startAge").val() + "-" + $(".endAge").val() + "周岁");
          }
      });
      $("input.endAge").focus(function(){
          $(this).removeClass("error");
          $(this).parent().find("p.error").hide();
      });
      $("input.mbrq").live("input",function(){
          if($(".select-list li:nth-child(4)").hasClass("active")){
              $('span.target-population').html($("input.mbrq").val());
          }
      });
    },
    handleInput: function() {
      $(".package li span.age").text($(".startAge").val() + "-" + $(".endAge").val() + "周岁");
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
                                <td className="mbrq">
                                    <select className="ui-select2 target-population" name="drop">
                                        <option>成人</option>
                                        <option>青少儿</option>
                                        <option>学生</option>
                                        <option>自定义</option>
                                    </select>
                                </td>
                                <td className="zdy" style={{"display":"none"}}>自定义：</td>
                                <td className="zdy" style={{"display":"none"}}><input  type="text" maxLength="12" placeholder="请输入自定义人群（12个字以内）" className="mbrq" /></td>
                            </tr>
                            <tr>
                                <td>对象年龄：</td>
                                <td className="age"><input type="number" autoComplete="off" className="startAge" required onInput={this.handleInput.bind(this)} min="0" max="120" />&nbsp;&nbsp;-&nbsp;&nbsp;<input type="number" className="endAge" autoComplete="off" onInput={this.handleInput.bind(this)} max="120" min="0" /><span>&nbsp;&nbsp;周岁</span>
                                    <p className="error"></p>
                                </td>
                            </tr>
                            <tr>
                                <td>获客渠道：</td>
                                <td className="hkqd">
                                    <select className="ui-select3 channel" name="drop">
                                        <option>电话营销</option>
                                        <option>网络营销</option>
                                        <option>地推推广</option>
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
      $(".hkqd .ui-select").selectWidget({
          change  : function (changes) {
              $("span.channel").text(changes);
          },
          effect       : "slide",
          keyControl   : false,
          speed        : 200,
          scrollHeight : 167,
          overflow: "hidden"
      });
      $(".mbrq .ui-select").selectWidget({
          change  : function (changes) {

          },
          effect       : "slide",
          keyControl   : false,
          speed        : 200,
          scrollHeight : 167,
          overflow: "hidden"
      });
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
      $("table.table-condensed td.day").click(function(){
          $("input.startDate").parent().find("p.error").hide();
          $("input.startDate").removeClass("error");
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
      var ReactThis=this;

      append_city();
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
          $("#hid_city_name").val(row.pinyin);
          $("#hid_real_city_name").val(row.name);
          $('#pop_cities').hide();
          if($(this).parent().parent().is(".list4")){
              $(".area div.list4 .search-citys-list ul li a[title="+row.name+"]").parent().click();
          }else{
              $("input.area").eq(ReactThis.props.index).val(row.name).attr("title",row.name);
              $("input.area").eq(ReactThis.props.index).change();
              $("div.area").html("");
          }
      });
        $('.area ul.list li').click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $('.area div[class^=list]').eq($(this).index()).addClass("active").siblings().removeClass("active");
        });
        $('.area a').click(function(){
            $('.area div[class^=list]:visible a').removeClass("active");
            $(this).addClass("active");
        });
        $(".area ul.list i.close").click(function(){
            $(this).parent().parent().remove();
        });
        $(".area div[class^=list]:not(.list4) li a").click(function(){
            $("input.area").eq(ReactThis.props.index).val($(this).text()).attr("title",$(this).text());
            $("input.area").eq(ReactThis.props.index).change();
            $("div.area").html("");
        });
        $(".area div.list4 .search-citys-list li").click(function(){
          change_city_val();
            if($(this).hasClass("active")){
                $(this).removeClass("active");
                $(".area div.list4 .activeCity ul li[title="+$(this).text()+"]").remove();
                $(".area div.list4 span.length").html($(".area div.list4 .activeCity ul li").length);
            }else{
                if($(".area div.list4 .activeCity ul li").length<20){
                  $(this).addClass("active");
                  var li=$("<li title="+$(this).text()+"><span>"+$(this).text()+"</span><i class='close'></i></li>");
                  $(li).find("i.close").click(function(){
                      $("div.list4 .search-citys-list ul li a[title="+$(this).parent().attr("title")+"]").parent().click();
                  });
                  $(".area div.list4 .activeCity ul").append(li);
                  $(".area div.list4 span.length").html($(".area div.list4 .activeCity ul li").length);
                }else{
                  alert("最多可以添加20个城市!");
                }
            }
        });
        $(".area div.list4 p button").click(function(){
            var text;
           $(".area div.list4 .activeCity ul li").each(function(i){
               if(i==0){
                   text=$(this).text()+";";
                   return true;
               }
               text+=$(this).text()+";";
           });
             $("input.area").eq(ReactThis.props.index).val("自定义").attr("title", text);
             $("input.area").eq(ReactThis.props.index).change();
            $("div.area").html("");
        });
        $("input.area").live("click",function(){
            $("input.area").removeClass("error");
            $("input.area").parent().find("p.error").hide();
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
                                <td><input type="text" autoComplete="off" className="demand-name" maxLength="12" required /><span className="info">为您的需求命名，限制 12 个字</span>
                                    <p className="error">请填写需求名称</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"verticalAlign": "top"}}>需求描述：</td>
                                <td><textarea maxLength="150" className="descriptionDemand" required onInput={this.handleInput.bind(this)}></textarea><p><span className="length">还可以输入 <span className="size2">150</span> 个字</span></p>
                                    <p className="error">请填写需求描述</p>
                                </td>
                            </tr>
                            <tr>
                                <td>产品名称：</td>
                                <td>
                                    <input type="text" autoComplete="off" maxLength="12" className="pro-name" required /><span className="info">您的产品或服务名，限制 12 个字</span>
                                    <p className="error">请填写产品名称</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"verticalAlign": "top"}}>产品介绍：</td>
                                <td>
                                    <textarea maxLength="150" className="introductionPro" required  placeholder="产品或服务介绍，可上传附件，可填入网站链接" onInput={this.handleInput.bind(this)}></textarea>
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
                                <td>目标区域：</td>
                                <td className="hkqd area">
                                  <input type="text" autoComplete="off" readOnly className="select area" placeholder="请选择区域" />
                                  <p className="error">请选择区域</p>
                                </td>
                            </tr>
                            <tr>
                                <td><span>开始日期:</span></td>
                                <td className="date"><input type="text" autoComplete="off" className="form_date startDate" readonly /><i className="date_icon"></i>
                                    <p className="error">请填写开始日期</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"verticalAlign": "top"}}>项目负责人：</td>
                                <td>
                                    <p style={{"marginBottom":"20px"}}>是否需要其他人负责此需求：<label><input type="radio" name="isFZ" />是</label><label><input type="radio" name="isFZ" defaultChecked />否</label></p>
                                    <p className="radio_fz"><span>负责人姓名：</span><input autoComplete="off" type="text" style={{"width":"162px"}} className="pleader" /><span style={{"marginLeft":"84px"}}>负责人电话：</span><input type="text" autoComplete="off" className="pphone" style={{"width":"162px"}} /></p>
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
                  {extensions : "doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar"}
              ],
              max_file_size : '1000mb', //最大只能上传10mb的文件
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
                      $('.ossfile')[0].innerHTML = '<div id="' + file.id + '"><span class="file_name">' + (file.name.substr(0,4)+/\.[^\.]+/.exec(file.name)) + ' (' + plupload.formatSize(file.size) + ')'
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
                      file1=get_uploaded_object_name(file.name);
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



      $(".bubble-hover").click(function(){
          $(this).next().show();
      });
      $(".bubble-click").click(function(){
          $(this).hide();
      });
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
      $(".hkqd span.channel").text($(".select-set").text());
        $(".btn_tj").click(function(){
            $("input:visible").blur();
            $("textarea").blur();
            if(typeof($(".hkqd input.area").attr("title")) == "undefined"){
                //alert(1);
                $(".hkqd input.area").addClass("error");
                $(".hkqd input.area").parent().find("p.error").show();
                return false;
            }
            sessionStorage.removeItem("demandtype");
            sessionStorage.removeItem("fdstate");
            sessionStorage.setItem("demandtype", 1);
            sessionStorage.setItem("fdstate", 1);

            if($("input").hasClass("error") || $("textarea").hasClass("error") || $("input.form_date").val()==""){
              //alert(1);addDemand();
            }else{
                addDemand();
            }

          });
    },
    render:function(){
        return(
            <div>
                <ul>
                    <li>
                        <label>业务类型：</label>
                        <span className="types-of">{sessionStorage.getItem("servicetype")}</span>
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
                </ul>
                <p className="top">
                    <span className="numbername">需求数量：</span>
                    <span className="number"></span>
                    <span className="money"></span>
                    <span className="Money">需求单价：</span>
                </p>
                <p>总金额：</p>
                <h2><span className="coupon-d">￥</span><span className="coupon">0</span></h2>
                <button type="button" className="btn_tj">提交审核</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Package />
        <ContentPackage />
        <TargetCustomers />
        <BasicInformation />
        <Annex />
    </div>,
    $(".package")[0]
);
ReactDOM.render(<PreviewRight />,$(".context-explain")[0],
function(){
    $(".loading_cover").hide();
    $("span.target-population").text($(".mbrq .target-population+div .select-block .select-items.active").text());
    $("span.channel").text($(".hkqd .channel+div .select-block .select-items.active").text());
});
