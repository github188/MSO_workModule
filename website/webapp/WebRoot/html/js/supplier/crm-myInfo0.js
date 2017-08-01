var Gsjbxx=React.createClass({
 render:function(){
       if(isNull(this.props.data)){
             return(
                     <div>
                         <div className="rowtitle">公司基本信息</div>
                         <div className="rowmain">
                             <table>
                                 <tr>
                                     <td rowSpan="2" className="aRight" width="110px"><span>公司全称：</span><span className="red">*&nbsp;</span></td>
                                     <td><input maxLength="50" type="text" placeholder="请输入您的公司全称"  className="compname"  defaultValue={localStorage.getItem("compname")} /></td>
                                 </tr>
                                 <tr><td><p className="error-info">请输入公司全称</p></td></tr>
                                 <tr>
                                     <td rowSpan="2" className="aRight"><span>公司简称：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                                     <td><input maxLength="50" type="text" placeholder="您的公司简称，非必填" className="brandname"/></td>
                                 </tr>
                                 <tr><td><p className="error-info">请输入公司简称</p></td></tr>
                                 <tr>
                                     <td rowSpan="2" className="aRight"><span>公司地址：</span><span className="red">*&nbsp;</span></td>
                                     <td><input maxLength="50" type="text" placeholder="请输入您的公司详细地址" className="compaddr" /></td>
                                 </tr>
                                 <tr><td><p className="error-info">请输入公司地址</p></td></tr>
                                 <tr>
                                     <td rowSpan="2" className="aRight"><span>擅长行业：</span><span className="red">*&nbsp;</span></td>
                                     <td className="compind">
                                         <select className="schy">
                                             <option value="请选择贵公司行业性质">请选择贵公司行业性质</option>
                                             <option value="教育培训">教育培训</option>
                                             <option value="汽车行业">汽车行业</option>
                                             <option value="医美行业">医美行业</option>
                                             <option value="房地产">房地产</option>
                                             <option value="金融">金融</option>
                                             <option value="互联网">互联网</option>
                                             <option value="电商平台">电商平台</option>
                                             <option value="其他">其他</option>
                                         </select>
                                         <input maxLength="50" type="text" className="schy_other" placeholder="请输入您的行业名称"/>
                                     </td>
                                 </tr>
                                 <tr><td><p className="error-info">请输入您的行业名称</p></td></tr>
                                 <tr>
                                     <td rowSpan="2" className="aRight"><span>擅长项目：</span><span className="red">*&nbsp;</span></td>
                                     <td className="scxm" width="704px">
                                         <label><i className="radio"></i><span>意向邀约</span></label>
                                         <label><i className="radio"></i><span>邀约到访</span></label>
                                         <label><i className="radio"></i><span>增值服务</span></label>
                                         <label><i className="radio"></i><span>电话销售</span></label>
                                         <br/><label style={{"min-width":"auto"}}><i className="radio"></i><span>其他</span></label>
                                         <input maxLength="50" type="text" className="other" placeholder="请输入其他擅长项目，多条用，隔开"/>
                                     </td>
                                 </tr>
                                 <tr><td><p className="error-info">请选择擅长项目</p></td></tr>
                                 <tr>
                                     <td rowSpan="2" className="aRight"><span>公司网址：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                                     <td><input maxLength="50" type="text" placeholder="您的公司网址，非必填" className="compwebsite"/></td>
                                 </tr>
                                 <tr><td><p className="error-info">请输入公司网址</p></td></tr>
                                 <tr>
                                     <td rowSpan="2" className="aRight"><span>公司规模：</span><span className="red">*&nbsp;</span></td>
                                     <td className="companysize">
                                         <select className="gsgm">
                                             <option value="1">10人以下</option>
                                             <option value="2">10~50人</option>
                                             <option value="3">50~200人</option>
                                             <option value="4">200人以上</option>
                                         </select>
                                     </td>
                                 </tr>
                                 <tr><td><p className="error-info">请选择公司规模</p></td></tr>
                                 <tr>
                                     <td rowSpan="2" className="aRight"><span>公司图片：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                                     <td>
                                         <div className="file-list"><img src="images/public/file_aside.png" /><div className="ossfile" style={{"width":"300px"}}></div></div>
                                         <button type="button" className="btn" id="selectfiles" style={{"margin-right":"10px"}}>选择文件</button>
                                         <button type="button" className="btn" id="postfiles">开始上传</button>
                                     </td>
                                 </tr>
                                 <tr><td><p className="error-info">请选择公司图片</p></td></tr>
                             </table>
                         </div>
                     </div>
             )
       }
       var goodpro_other;
       var goodpro_other_val;
       var compind_other;
       var compind_other_val;
       if(!isNull(this.props.data.goodpro)){
         this.props.data.goodpro.split(",").map(function(result,index){
            if(this.props.data.goodpro.split(",").length-1==index){
              if(result!="意向邀约"&&result!="邀约到访"&&result!="增值服务"&&result!="电话销售"){
                goodpro_other=true;
                goodpro_other_val=result;
              }else{
                goodpro_other=false;
                goodpro_other_val="";
              }
            }
         }.bind(this));
       }else{
         goodpro_other=false;
         goodpro_other_val="";
       }
       if(!isNull(this.props.data.compind)){
          if(this.props.data.compind!="请选择贵公司行业性质"&&this.props.data.compind!="教育培训"&&this.props.data.compind!="汽车行业"&&this.props.data.compind!="医美行业"&&this.props.data.compind!="房地产"&&this.props.data.compind!="金融"&&this.props.data.compind!="互联网"&&this.props.data.compind!="电商平台"){
            compind_other=true;
            compind_other_val=this.props.data.compind;
          }else{
            compind_other=false;
            compind_other_val="";
          }
       }else{
         compind_other=false;
         compind_other_val="";
       }
       return (
                 <div>
                   <div className="rowtitle">公司基本信息</div>
                   <div className="rowmain">
                       <table>
                           <tr>
                               <td rowSpan="2" className="aRight" width="110px"><span>公司全称：</span><span className="red">*&nbsp;</span></td>
                               <td><input maxLength="50" type="text" defaultValue={this.props.data.compname} placeholder="请输入您的公司全称" className="compname"  /></td>
                           </tr>
                           <tr><td><p className="error-info">请输入公司全称</p></td></tr>
                           <tr>
                               <td rowSpan="2" className="aRight"><span>公司简称：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                               <td><input maxLength="50" type="text" defaultValue={this.props.data.brandname} placeholder="您的公司简称，非必填" className="brandname" /></td>
                           </tr>
                           <tr><td><p className="error-info">请输入公司简称</p></td></tr>
                           <tr>
                               <td rowSpan="2" className="aRight"><span>公司地址：</span><span className="red">*&nbsp;</span></td>
                               <td><input maxLength="50" type="text" defaultValue={this.props.data.compaddr} placeholder="请输入您的公司详细地址" className="compaddr" /></td>
                           </tr>
                           <tr><td><p className="error-info">请输入公司地址</p></td></tr>
                           <tr>
                               <td rowSpan="2" className="aRight"><span>擅长行业：</span><span className="red">*&nbsp;</span></td>
                               <td className="compind">
                                   <select className="schy">
                                       <option selected={this.props.data.compind=="请选择贵公司行业性质"?true:false} value="请选择贵公司行业性质">请选择贵公司行业性质</option>
                                       <option selected={this.props.data.compind=="教育培训"?true:false} value="教育培训">教育培训</option>
                                       <option selected={this.props.data.compind=="汽车行业"?true:false} value="汽车行业">汽车行业</option>
                                       <option selected={this.props.data.compind=="医美行业"?true:false} value="医美行业">医美行业</option>
                                       <option selected={this.props.data.compind=="房地产"?true:false} value="房地产">房地产</option>
                                       <option selected={this.props.data.compind=="金融"?true:false} value="金融">金融</option>
                                       <option selected={this.props.data.compind=="互联网"?true:false} value="互联网">互联网</option>
                                       <option selected={this.props.data.compind=="电商平台"?true:false} value="电商平台">电商平台</option>
                                       <option selected={compind_other} value="其他">其他</option>
                                   </select>
                                   <input maxLength="50" type="text" className="schy_other" placeholder="请输入您的行业名称" defaultValue={isNull(compind_other_val)?"":compind_other_val} style={{"display":!isNull(compind_other_val)?"inline-block":"none"}} />
                               </td>
                           </tr>
                           <tr><td><p className="error-info" >请输入您的行业名称</p></td></tr>
                           <tr>
                               <td rowSpan="2" className="aRight"><span>擅长项目：</span><span className="red">*&nbsp;</span></td>
                               <td className="scxm" width="704px">
                                   <label className={this.props.data.goodpro.indexOf("意向邀约")==-1?"":"active"}><i className="radio"></i><span>意向邀约</span></label>
                                   <label className={this.props.data.goodpro.indexOf("邀约到访")==-1?"":"active"}><i className="radio"></i><span>邀约到访</span></label>
                                   <label className={this.props.data.goodpro.indexOf("增值服务")==-1?"":"active"}><i className="radio"></i><span>增值服务</span></label>
                                   <label className={this.props.data.goodpro.indexOf("电话销售")==-1?"":"active"}><i className="radio"></i><span>电话销售</span></label>
                                   <br/><label className={!isNull(goodpro_other_val)?"active":""} style={{"min-width":"auto"}}><i className="radio"></i><span>其他</span></label>
                                   <input maxLength="50" type="text" className="other" defaultValue={goodpro_other_val} style={{"display":isNull(goodpro_other_val)?"none":"inline-block"}} placeholder="请输入其他擅长项目，多条用，隔开"/>
                               </td>
                           </tr>
                           <tr><td><p className="error-info" >请选择擅长项目</p></td></tr>
                           <tr>
                               <td rowSpan="2" className="aRight"><span>公司网址：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                               <td><input maxLength="50" type="text" placeholder="您的公司网址，非必填" className="compwebsite"  defaultValue={this.props.data.compwebsite} /></td>
                           </tr>
                           <tr><td><p className="error-info">请输入公司网址</p></td></tr>
                           <tr>
                               <td rowSpan="2" className="aRight"><span>公司规模：</span><span className="red">*&nbsp;</span></td>
                               <td className="companysize">
                                   <select className="gsgm">
                                       <option selected={this.props.data.companysize=="10人以下"?true:false} value="1">10人以下</option>
                                       <option selected={this.props.data.companysize=="10~50人"?true:false} value="2">10~50人</option>
                                       <option selected={this.props.data.companysize=="50~200人"?true:false} value="3">50~200人</option>
                                       <option selected={this.props.data.companysize=="200人以上"?true:false} value="4">200人以上</option>
                                   </select>
                               </td>
                           </tr>
                           <tr><td><p className="error-info">请选择公司规模</p></td></tr>
                           <tr>
                               <td rowSpan="2" className="aRight"><span>公司图片：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                               <td>
                                   <div className="file-list"><img src="images/public/file_aside.png" /><div className="ossfile" style={{"width":"300px"}}></div></div>
                                   <button type="button" className="btn" id="selectfiles" style={{"margin-right":"10px"}}>选择文件</button>
                                   <button type="button" className="btn" id="postfiles">开始上传</button>
                               </td>
                           </tr>
                           <tr><td><p className="error-info">请选择公司图片</p></td></tr>
                       </table>
                   </div>
               </div>
     )
   }
});
var Lxxx=React.createClass({
  render:function(){
      if(isNull(this.props.data)){
        return(
              <div>
                  <div className="rowtitle">联系信息</div>
                  <div className="rowmain">
                      <table>
                          <tr>
                              <td rowSpan="2" className="aRight" width="110px"><span>联系人：</span><span className="red">*&nbsp;</span></td>
                              <td><input maxLength="50" type="text" className="contacts" /></td>
                          </tr>
                          <tr><td><p className="error-info">请输入联系人</p></td></tr>
                          <tr>
                              <td rowSpan="2" className="aRight" width="110px"><span>联系电话：</span><span className="red">*&nbsp;</span></td>
                              <td><input maxLength="50" type="text" className="contactsphone" /></td>
                          </tr>
                          <tr><td><p className="error-info">请输入联系电话</p></td></tr>
                          <tr>
                              <td rowSpan="2" className="aRight" width="110px"><span>电子邮箱：</span><span className="red">*&nbsp;</span></td>
                              <td><input maxLength="50" type="text" className="compemail" /></td>
                          </tr>
                          <tr><td><p className="error-info">请输入电子邮箱</p></td></tr>
                          <tr>
                              <td rowSpan="2" className="aRight"><span>QQ：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                              <td><input maxLength="50" type="text" className="qq"/></td>
                          </tr>
                          <tr><td><p className="error-info">请输入QQ</p></td></tr>
                      </table>
                  </div>
              </div>
        )
      }
      return(
            <div>
                <div className="rowtitle">联系信息</div>
                <div className="rowmain">
                    <table>
                        <tr>
                            <td rowSpan="2" className="aRight" width="110px"><span>联系人：</span><span className="red">*&nbsp;</span></td>
                            <td><input maxLength="50" type="text" className="contacts" defaultValue={this.props.data.contacts} /></td>
                        </tr>
                        <tr><td><p className="error-info">请输入联系人</p></td></tr>
                        <tr>
                            <td rowSpan="2" className="aRight" width="110px"><span>联系电话：</span><span className="red">*&nbsp;</span></td>
                            <td><input maxLength="50" type="text" className="contactsphone" defaultValue={this.props.data.contactsphone} /></td>
                        </tr>
                        <tr><td><p className="error-info">请输入联系电话</p></td></tr>
                        <tr>
                            <td rowSpan="2" className="aRight" width="110px"><span>电子邮箱：</span><span className="red">*&nbsp;</span></td>
                            <td><input maxLength="50" type="text" className="compemail" /></td>
                        </tr>
                        <tr><td><p className="error-info">请输入电子邮箱</p></td></tr>
                        <tr>
                            <td rowSpan="2" className="aRight"><span>QQ：</span><span style={{"visibility":"hidden"}}>*&nbsp;</span></td>
                            <td><input maxLength="50" type="text" className="qq" defaultValue={this.props.data.qq} /></td>
                        </tr>
                        <tr><td><p className="error-info">请输入QQ</p></td></tr>
                    </table>
                </div>
            </div>
      )
    }
});




var Sjkxx=React.createClass({
  render:function(){
      // if(isNull(this.props.data)){
        return (
          <div>
                    <div className="rowtitle">数据库信息</div>
                    <div className="rowmain">
                        <table>
                            <tr>
                                <td width="110px" className="aRight"><span>自有数据库：</span><span className="red">*&nbsp;</span></td>
                                <td width="706px">
                                    <label><input type="radio"  name="zysjk" defaultChecked/ ><span>无</span></label>
                                    <label style={{"marginLeft":"20px"}}><input type="radio"  name="zysjk"/><span>有</span></label>
                                </td>
                            </tr>
                            <tr id="zysjk" style={{"display":"none"}}>
                                <td rowSpan="3" width="110px" className="aRight"><span>数据分布：</span><span className="red">*&nbsp;</span></td>
                                <td>
                                    <label><input type="radio"  name="sjfb" defaultChecked/ ><span>全国</span></label>
                                    <label style={{"marginLeft":"20px"}}><input type="radio"  name="sjfb"/><span>自定义城市</span></label>
                                </td>
                            </tr>
                            <tr id="zdycs" style={{"display":"none"}}>
                                <td style={{"line-height":"26px"}}><span>已选择:</span><div><div className="activeCity"><ul></ul><button type="button" className="btn add_city area">选择城市</button></div></div></td>
                            </tr>
                            <tr style={{"display":"none"}}>
                                <td><p className="error-info">请选择至少一个城市作为数据分布城市</p></td>
                            </tr>
                        </table>
                    </div>
                </div>
        )
  }
});
var Cwxx=React.createClass({
  render:function(){
        if(isNull(this.props.data)){
              return (
                <div>
                          <div className="rowtitle">财务信息</div>
                          <div className="rowmain">
                              <table>
                                  <tr>
                                      <td rowSpan="2" className="aRight" width="110px"><span>开户名称：</span><span className="red">*&nbsp;</span></td>
                                      <td width="704px"><input maxLength="50" type="text" placeholder="请输入公司账户的开户名称" className="accountname" /></td>
                                  </tr>
                                  <tr><td><p className="error-info">请输入开户名称</p></td></tr>
                                  <tr>
                                      <td rowSpan="2" className="aRight" width="110px"><span>开户行：</span><span className="red">*&nbsp;</span></td>
                                      <td><input maxLength="50" type="text" placeholder="请输入开户的银行名称"className="bankaccount" /></td>
                                  </tr>
                                  <tr><td><p className="error-info">请输入开户行</p></td></tr>
                                  <tr>
                                      <td rowSpan="2" className="aRight" width="110px"><span>公司账号：</span><span className="red">*&nbsp;</span></td>
                                      <td><input maxLength="50" type="text" placeholder="请输入公司的账号" className="comaccount" /></td>
                                  </tr>
                                  <tr><td><p className="error-info">请输入公司账号</p></td></tr>
                                  <tr>
                                      <td rowSpan="2" className="aRight"><span>开发票类型：</span><span className="red">*&nbsp;</span></td>
                                      <td>
                                          <label><input type="radio" defaultChecked name="kfplx"/><span>增票（一般纳税人）</span></label>
                                          <label><input type="radio"  name="kfplx"/><span>增票（小规模纳税人）</span></label>
                                          <label><input type="radio"  name="kfplx"/><span>普票</span></label>
                                      </td>
                                  </tr>
                              </table>
                          </div>
                      </div>
              )
        }
        return (
          <div>
                <div className="rowtitle">财务信息</div>
                <div className="rowmain">
                    <table>
                        <tr>
                            <td rowSpan="2" className="aRight" width="110px"><span>开户名称：</span><span className="red">*&nbsp;</span></td>
                            <td width="704px"><input maxLength="50" type="text" placeholder="请输入公司账户的开户名称" defaultValue={this.props.data.accountname}  className="accountname" /></td>
                        </tr>
                        <tr><td><p className="error-info">请输入开户名称</p></td></tr>
                        <tr>
                            <td rowSpan="2" className="aRight" width="110px"><span>开户行：</span><span className="red">*&nbsp;</span></td>
                            <td><input maxLength="50" type="text" placeholder="请输入开户的银行名称" defaultValue={this.props.data.bankaccount} className="bankaccount" /></td>
                        </tr>
                        <tr><td><p className="error-info">请输入开户行</p></td></tr>
                        <tr>
                            <td rowSpan="2" className="aRight" width="110px"><span>公司账号：</span><span className="red">*&nbsp;</span></td>
                            <td><input maxLength="50" type="text" placeholder="请输入公司的账号" defaultValue={this.props.data.comaccount}  className="comaccount" /></td>
                        </tr>
                        <tr><td><p className="error-info">请输入公司账号</p></td></tr>
                        <tr>
                            <td rowSpan="2" className="aRight"><span>开发票类型：</span><span className="red">*&nbsp;</span></td>
                            <td>
                                <label><input type="radio" defaultChecked={this.props.data.openinvoicetype==1?true:false} name="kfplx"/><span>增票（一般纳税人）</span></label>
                                <label><input type="radio" defaultChecked={this.props.data.openinvoicetype==2?true:false} name="kfplx"/><span>增票（小规模纳税人）</span></label>
                                <label><input type="radio" defaultChecked={this.props.data.openinvoicetype==3?true:false} name="kfplx"/><span>普票</span></label>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
          )
  }
});
var Qysz=React.createClass({
  render:function(){
      return (
          <div>
                <div className="rowtitle">企业三证</div>
                <div className="rowmain">
                    <p>上传企业三证，如果三证合一，可上传3张一样的！仅支持jpg、png格式的图片，小于1MB</p>
                    <table>
                        <tr>
                            <td><div className="file-list2"><img src="images/public/file_list2.png" /><div className="ossfile2"></div></div></td>
                            <td><div className="file-list3"><img src="images/public/file_list3.png" /><div className="ossfile3"></div></div></td>
                            <td><div className="file-list4"><img src="images/public/file_list4.png" /><div className="ossfile4"></div></div></td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" className="btn" id="selectfiles2" style={{"margin-right":"10px"}}>选择文件</button>
                                <button type="button" className="btn" id="postfiles2">开始上传</button>
                            </td>
                            <td>
                                <button type="button" className="btn" id="selectfiles3" style={{"margin-right":"10px"}}>选择文件</button>
                                <button type="button" className="btn" id="postfiles3">开始上传</button>
                            </td>
                            <td>
                                <button type="button" className="btn" id="selectfiles4" style={{"margin-right":"10px"}}>选择文件</button>
                                <button type="button" className="btn" id="postfiles4">开始上传</button>
                            </td>
                        </tr>
                        <tr>
                            <td><p className="error-info">请上传营业执照</p></td>
                            <td><p className="error-info">请上传税务登记证</p></td>
                            <td><p className="error-info">请上传组织机构代码证</p></td>
                        </tr>
                    </table>
                </div>
            </div>
          )
  }
});



var Submit=React.createClass({
  submit_window_show:function(){

    $("input[type=text]:visible").blur();
	
    if($(".compind .select-set").text()=="请选择贵公司行业性质"){
      $(".error-info").eq(3).css("visibility","visible");
      $(".compind .select-main").addClass("error");
    }
    if($(".scxm label.active").length==0){
      $(".error-info").eq(4).css("visibility","visible");
      $(".scxm").addClass("error");
    }
    if($("input[name=zysjk]:checked").next().text()=="有"&&$("input[name=sjfb]:checked").next().text()=="自定义城市"&&$("#zdycs .activeCity>ul>ul li").length==0){
      $(".error-info").eq(12).css("visibility","visible");
      $("#zdycs").addClass("error");
    }
    if(isNull(file2)){
      $(".error-info").eq(16).html("请上传营业执照").css("visibility","visible");
      $(".file-list2").addClass("error");
    }
    if(isNull(file3)){
      $(".error-info").eq(17).html("请上传税务登记证").css("visibility","visible");
      $(".file-list3").addClass("error");
    }
    if(isNull(file4)){
      $(".error-info").eq(18).html("请上传组织机构代码证").css("visibility","visible");
      $(".file-list4").addClass("error");
    }
    if($(".error").length>0){
      $("html,body").animate({"scrollTop":$(".error").eq(0).offset().top-100},300);
      return false;
    }
    $(".submit_window").show();
  },
  save:function(){
    var goodpro="";
    var datacity="";
    var j=0;
    $("td.scxm label").each(function(i){
        if($(this).hasClass("active")){
          j++;
          i==4?goodpro+=$("td.scxm .other").val():j==$("td.scxm label.active").length?goodpro+=$(this).text():goodpro+=$(this).text()+",";
        }
    });
    if($("input[name=zysjk]:checked").next().text()=="有"){
        if($("input[name=sjfb]:checked").next().text()=="全国"){
          datacity="全国";
        }else{
          $("#zdycs .activeCity li").each(function(i){
            i==$("#zdycs .activeCity li").length-1?datacity+=$(this).text():datacity+=$(this).text()+",";
          });
        }
    }else{
      datacity="无";
    }
    var data={
      jfuid:localStorage.getItem("jfuid"),
      jfutype:2,
      compname :$("input.compname").val(),
      brandname : $("input.brandname").val(),
      compaddr : $("input.compaddr").val(),
      compind :$(".compind .select-set").text()=="其他"?$("input.schy_other").val():$(".compind .select-set").text() ,
      compwebsite :$("input.compwebsite").val(),
      compimg : f1,
      contacts : $("input.contacts").val(),
      contactsphone : $("input.contactsphone").val(),
      compemail :$("input.compemail").val() ,
      complicense : f2,
      comptaxcer :f3 ,
      comporgcode : f4,
      goodpro : goodpro,
      companysize :$(".companysize .select-set").text() ,
      qq :$("input.qq").val() ,
      hasdb :$("input[name=zysjk]:checked").parent().index(),
      datacity :datacity,
      accountname :$("input.accountname").val() ,
      bankaccount :$("input.bankaccount").val() ,
      comaccount : $("input.comaccount").val(),
      openinvoicetype : $("input[name=kfplx]:checked").parent().index()+1,
      other:$("td.scxm .other").prev().hasClass("active")?$("input.other").val():"",
      schy_other:$(".compind .select-set").text()=="其他"?$("input.schy_other").val():""
    };
    localStorage.setItem("data",JSON.stringify(data));
    $(".save_window").show();
  },
  render:function(){
    return (
      <div>
          <button type="button" className="btn submit" onClick={this.submit_window_show}>确认提交</button><button type="button" className="btn save" onClick={this.save}>保存</button>
      </div>
    )
  }
});



var Submit_window=React.createClass({
  submit:function(){
      $(".submit_window").hide();
      var goodpro="";
      var datacity="";
      var j=0;
      $("td.scxm label").each(function(i){
          if($(this).hasClass("active")){
            j++;
            i==4?goodpro+=$("td.scxm .other").val():j==$("td.scxm label.active").length?goodpro+=$(this).text():goodpro+=$(this).text()+",";
          }
      });
      if($("input[name=sjfb]:checked").next().text()=="全国"){
        datacity="全国";
      }else{
        $("#zdycs .activeCity li").each(function(i){
          i==$("#zdycs .activeCity li").length-1?datacity+=$(this).text():datacity+=$(this).text()+",";
        });
      }
      var data={
        jfuid:localStorage.getItem("jfuid"),
        jfutype:2,
        compname :$("input.compname").val(),
        brandname : $("input.brandname").val(),
        compaddr : $("input.compaddr").val(),
        compind :$(".compind .select-set").text()=="其他"?$("input.schy_other").val():$(".compind .select-set").text() ,
        compwebsite :$("input.compwebsite").val(),
        compimg : f1,
        contacts : $("input.contacts").val(),
        contactsphone : $("input.contactsphone").val(),
        compemail :$("input.compemail").val() ,
        complicense : f2,
        comptaxcer :f3 ,
        comporgcode : f4,
        goodpro : goodpro,
        companysize :$(".companysize .select-set").text() ,
        qq :$("input.qq").val() ,
        hasdb :$("input[name=zysjk]:checked").parent().index(),
        datacity :datacity,
        accountname :$("input.accountname").val() ,
        bankaccount :$("input.bankaccount").val() ,
        comaccount : $("input.comaccount").val(),
        openinvoicetype : $("input[name=kfplx]:checked").parent().index()+1
      };
      $.ajax({
              type:"POST",
              url:urlInformation,
              data:data,
              dataType:"json",
              contentType:"application/x-www-form-urlencoded;charset=utf-8",
              cache:false,
              success:function(result){
                if(result.code=="Y"){
                  localStorage.setItem("jfustate", "1");
                  localStorage.removeItem("data");
				  $("body").css("min-width","1260px");
				  $(".sub-account .context").css("width","990px");
				  $(".content .right").addClass("success").html("<div class='title'></div><div class='box'><h3>提交成功，您的信息已上传成功！</h3><p>您上传的信息将在24小时内审核完毕，请耐心等待！您也可以 <a href='//wpa.qq.com/msgrd?v=3&uin=2850840277&site=qq&menu=yes' target='_blank'>点此联系客服>></a></p><a href='crm-myInfo.html' class='btn-refresh'>确定</a></div>");
				  //window.location.reload(); 
                  //location.href="PerfectDateDone.html";
                }else{
                  //alert(result.code);
                }
              }.bind(this),
              error:function(){
                  console.log("error");
              }
          });
  },
  submit_window_hide:function(){
    $(".submit_window").hide();
  },
  render:function(){
    return (
        <div className="demand_submit">
            <div className="top" style={{"text-align":"left"}}><span>提示</span><i className="close" onClick={this.submit_window_hide}></i></div>
            <div className="main">
            <p>确认提交吗？</p>
            </div>
            <div className="bottom"><button type="button" className="button_close bg_red" onClick={this.submit}>确&nbsp;定</button><button type="button" className="button_close bd_gray" onClick={this.submit_window_hide}>取&nbsp;消</button></div>
        </div>
    )
  }
});
var Save_window=React.createClass({
  save_window_hide:function(){
    $(".save_window").hide();
    $("body,html").scrollTop(0);
  },
  render:function(){
    return (
        <div className="demand_submit">
            <div className="top" style={{"text-align":"left"}}><span>提示</span><i className="close" onClick={this.save_window_hide}></i></div>
            <div className="main">
            <p>保存成功</p>
            </div>
            <div className="bottom"><button type="button" className="button_close bg_red" onClick={this.save_window_hide}>确&nbsp;定</button></div>
        </div>
    )
  }
});
var Area=React.createClass({
  componentDidMount:function(){
    append_city_1();
    uploadIng();
      // if(!isNull(this.props.data)){
      //   Array.isArray(this.props.data.datacity)?"":this.props.data.datacity=this.props.data.datacity.split(",");
      //   this.props.data.datacity.map(function(data,index){
      //     $("div.list4 .search-citys-list ul li a[title="+data+"]").click();
      //     $(".area div.list4 p button").click();
      //   });
      // }
  },
  handleClick: function(index) {
    tabCutover($(this.getDOMNode()).find("div[class^=list]:visible .search ul li").eq(index-1),'s-citys'+index);
  },
 render:function(){
       return (
           <div>
               <ul className="list">
                   <li className="active">自定义区域</li>
                   <i className="close"></i>
               </ul>
               <div className="list4 active">
                   <p style={{"margin":"30px 20px;font-size:16px"}}><span>已选择：</span><button type="button" style={{"float":"right"}} id="area">确定选择</button></p>
                   <div className="activeCity">
                       <ul>
                       </ul>
                   </div>
                   <div className="search pop search-citys-pop click cityarea" >
                       <input maxLength="50" type="text" placeholder="输入拼音首字母" className="text city_name"   />
                       <ul>
                           <li className="current click"  onClick={this.handleClick.bind(this,1)} href="javascript:void(0)">ABC<i></i></li>
                           <li className="click" onClick={this.handleClick.bind(this,2)}href="javascript:void(0)">DEF<i></i></li>
                           <li className="click" onClick={this.handleClick.bind(this,3)} href="javascript:void(0)">GHI<i></i></li>
                           <li className="click" onClick={this.handleClick.bind(this,4)} href="javascript:void(0)">JKL<i></i></li>
                           <li className="click" onClick={this.handleClick.bind(this,5)} href="javascript:void(0)">MNO<i></i></li>
                           <li className="click" onClick={this.handleClick.bind(this,6)} href="javascript:void(0)">PQR<i></i></li>
                           <li className="click" onClick={this.handleClick.bind(this,7)} href="javascript:void(0)">STUV<i></i></li>
                           <li className="click" onClick={this.handleClick.bind(this,8)} href="javascript:void(0)">WXYZ<i></i></li>
                       </ul>
                   </div>
                   <div className="search-citys-list click citylist"></div>
               </div>
           </div>
     )
 }
});
var data;
if(!isNull(localStorage.getItem("data"))){
  if(JSON.parse(localStorage.getItem("data")).jfuid==localStorage.getItem("jfuid")){
    data=JSON.parse(localStorage.getItem("data"));
  }else{
    data=null;
  }
}
      React.render(<Gsjbxx data={data}/>,$(".row_0")[0]);
      React.render(<Lxxx data={data}/>,$(".row_1")[0]);
      React.render(<Sjkxx data={data}/>,$(".row_2")[0]);
      React.render(<Cwxx data={data}/>,$(".row_3")[0]);
      React.render(<Qysz data={data}/>,$(".row_4")[0]);
      React.render(<Submit data={data}/>,$(".submit_box")[0]);
      React.render(<Submit_window data={data}/>,$(".submit_window")[0]);
      React.render(<Save_window data={data}/>,$(".save_window")[0]);
      $.ajax({
          type:"GET",
          url:urlCity,
          dataType:"json",
          cache:false,
          success:function(result){
              if(result.code=="Y"){
                  //console.log(result.msg);
                  localStorage.setItem(urlCity,JSON.stringify(result.basreglist));
                  getUrlCity(JSON.parse(localStorage.getItem(urlCity)));
                  React.render(<Area/>,$("div.area")[0]);
              }
              if(result.code=="N"){
                  console.log(result.msg);
              }
          },
          error:function(){
              console.log(msg);
          }
      });

	  
	  
	  
	  $(".schy").selectWidget({
        change  : function (changes) {
            if(changes=="其他"){
                $("input.schy_other").show();
            }else{
                $(".compind .select-main").removeClass("error");
                $(".error-info").eq(3).css("visibility","hidden");$("input.schy_other").removeClass("error");
                $("input.schy_other").hide();
            }
            return changes;
        },
        effect       : "slide",
        keyControl   : false,
        speed        : 200,
        scrollHeight : 167,
        overflow: "hidden"
    });
    $(".gsgm").selectWidget({
        change  : function (changes) {
            return changes;
        },
        effect       : "slide",
        keyControl   : false,
        speed        : 200,
        scrollHeight : 167,
        overflow: "hidden"
    });
    $(".scxm label").click(function(){
        $(this).toggleClass("active");
        if($(this).text()=="其他"){
            $(this).next().toggle();
            if(!$(this).hasClass("active")){
                $(".error-info").eq(4).css("visibility","hidden");$("input.other").removeClass("error");
            }
        }else{
            if($(this).hasClass("active")){
                $(".scxm").removeClass("error");
            }
        }
    });
    $("input[name=sjfb]").change(function(){
        if($(this).next().text()=="自定义城市"){
            $("tr#zdycs").show();
            $("tr#zdycs+tr").show();
        }else{
            $("input[name=sjfb]").parent().parent().removeClass("error");
            $(".error-info").eq(12).css("visibility","hidden");$("tr#zdycs").hide();
        }
    });
    $("input[name=zysjk]").change(function(){
        if($(this).next().text()=="有"){
            $("tr#zysjk").show();
            if($("input[name=sjfb]:checked").next().text()=="自定义城市"){
                $("tr#zdycs").show();
                $("tr#zdycs+tr").show();
            }
        }else{
            $("tr#zysjk").hide();
            $("tr#zdycs").hide();
            $("tr#zdycs+tr").hide();
        }
    });
    $(".file-list img").click(function(){$("#selectfiles").click();});
    $(".file-list2 img").click(function(){$("#selectfiles2").click();});
    $(".file-list3 img").click(function(){$("#selectfiles3").click();});
    $(".file-list4 img").click(function(){$("#selectfiles4").click();});

    $("input.compname").blur(function(){
        if($(this).val()==""){
            $(".error-info").eq(0).css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(0).css("visibility","hidden");$(this).removeClass("error");
        }
    });
    $("input.compaddr").blur(function(){
        if($(this).val()==""){
            $(".error-info").eq(2).css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(2).css("visibility","hidden");$(this).removeClass("error");
        }
    });
    $("input.schy_other").blur(function(){
        if($(".compind .select-set").text()=="其他"&&$(this).val()==""){
            $(".error-info").eq(3).css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(3).css("visibility","hidden");$(this).removeClass("error");
        }
    });
    $("input.other").blur(function(){
        if($(".scxm label").eq(4).text()=="其他"&&$(this).val()==""){
            $(".error-info").eq(4).html("请输入其他擅长项目").css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(4).css("visibility","hidden");$(this).removeClass("error");$(".scxm").removeClass("error");
        }
    });
	$(".scxm label").click(function(){
		if($(this).hasClass("active")){
			$(".error-info").eq(4).css("visibility","hidden");$(this).removeClass("error");$(".scxm").removeClass("error");
		}
	});
    $("input.contacts").blur(function(){
        if($.trim($(this).val())==""){
            $(".error-info").eq(8).css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(8).css("visibility","hidden");$(this).removeClass("error");
        }
    });
	var mobile = $.trim($("input.contactsphone").val());
    var isMobile = /^1(3|4|5|7|8)\d{9}$/; 
    $("input.contactsphone").blur(function(){
		var MobileOk = isMobile.test($(this).val());
        if($.trim($(this).val())==""){
            $(".error-info").eq(9).css("visibility","visible");$(this).addClass("error");
        }else if(!MobileOk){
			$(".error-info").eq(9).css("visibility","visible");$(this).addClass("error");
		}else{
            $(".error-info").eq(9).css("visibility","hidden");$(this).removeClass("error");
        }
    });	
    $("input.compemail").blur(function(){
        if($.trim($(this).val())==""){
            $(".error-info").eq(10).css("visibility","visible");$(this).addClass("error");
        }else if (!$(this).val().match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){
			$(".error-info").eq(10).css("visibility","visible");$(this).addClass("error");
		}else{
            $(".error-info").eq(10).css("visibility","hidden");$(this).removeClass("error");
        }
    });
    $("input.accountname").blur(function(){
        if($(this).val()==""){
            $(".error-info").eq(13).css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(13).css("visibility","hidden");$(this).removeClass("error");
        }
    });
    $("input.bankaccount").blur(function(){
        if($(this).val()==""){
            $(".error-info").eq(14).css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(14).css("visibility","hidden");$(this).removeClass("error");
        }
    });
    $("input.comaccount").blur(function(){
        if($(this).val()==""){
            $(".error-info").eq(15).css("visibility","visible");$(this).addClass("error");
        }else{
            $(".error-info").eq(15).css("visibility","hidden");$(this).removeClass("error");
        }
    });