var Verified=React.createClass({
    render:function(){
          return (
                  <div>
                      <div className="rowtitle">审核结果</div>
                      <div className="rowmain" style={{"padding":"40px"}}>
						<p>审核结果：您上传的信息正在审核中，请耐心等待！</p>
                      </div>
                  </div>
          )
    }
});
var Gsjbxx=React.createClass({
 render:function(){
         if(isNull(this.props.result)){
               return(
                       <div>
                           <div className="rowtitle">公司基本信息</div>
                           <div className="rowmain">
                               <table>
                                   <tr>
                                       <td width="110px"><span className="red">*&nbsp;</span><span>公司全称：</span></td>
                                       <td></td>
                                   </tr>
                                   <tr>
                                       <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>公司简称：</span></td>
                                       <td></td>
                                   </tr>
                                   <tr>
                                       <td><span className="red">*&nbsp;</span><span>公司地址：</span></td>
                                       <td></td>
                                   </tr>
                                   <tr>
                                       <td><span className="red">*&nbsp;</span><span>擅长行业：</span></td>
                                       <td className="compind"></td>
                                   </tr>
                                   <tr>
                                       <td><span className="red">*&nbsp;</span><span>擅长项目：</span></td>
                                       <td className="scxm" width="704px"></td>
                                   </tr>
                                   <tr>
                                       <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>公司网址：</span></td>
                                       <td></td>
                                   </tr>
                                   <tr>
                                       <td><span className="red">*&nbsp;</span><span>公司规模：</span></td>
                                       <td className="companysize"></td>
                                   </tr>
                                   <tr>
                                       <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>公司图片：</span></td>
                                       <td></td>
                                   </tr>
                               </table>
                           </div>
                       </div>
               )
         }
         return (
                   <div>
                     <div className="rowtitle">公司基本信息</div>
                     <div className="rowmain">
                         <table>
                             <tr>
                                 <td width="110px"><span className="red">*&nbsp;</span><span>公司全称：</span></td>
                                 <td>{this.props.result.compname}</td>
                             </tr>
                             <tr>
                                 <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>公司简称：</span></td>
                                 <td>{this.props.result.brandname}</td>
                             </tr>
                             <tr>
                                 <td><span className="red">*&nbsp;</span><span>公司地址：</span></td>
                                 <td>{this.props.result.compaddr}</td>
                             </tr>
                             <tr>
                                 <td><span className="red">*&nbsp;</span><span>擅长行业：</span></td>
                                 <td className="compind">{this.props.result.compind}</td>
                             </tr>
                             <tr>
                                 <td><span className="red">*&nbsp;</span><span>擅长项目：</span></td>
                                 <td className="scxm" width="704px">{this.props.result.goodpro}</td>
                             </tr>
                             <tr>
                                 <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>公司网址：</span></td>
                                 <td>{this.props.result.compwebsite}</td>
                             </tr>
                             <tr>
                                 <td><span className="red">*&nbsp;</span><span>公司规模：</span></td>
                                 <td className="companysize">{this.props.result.companysize}</td>
                             </tr>
                             <tr>
                                 <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>公司图片：</span></td>
                                 <td><div className="file-list"><img src={this.props.result.compimg=="images/customer/photo.png"?"images/public/file_aside.png":this.props.result.compimg} /></div></td>
                             </tr>
                         </table>
                     </div>
                 </div>
       )
   }
});
var Lxxx=React.createClass({
  render:function(){
        if(isNull(this.props.result)){
          return(
                <div>
                    <div className="rowtitle">联系信息</div>
                    <div className="rowmain">
                        <table>
                            <tr>
                                <td width="110px"><span className="red">*&nbsp;</span><span>联系人：</span></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td width="110px"><span className="red">*&nbsp;</span><span>联系电话：</span></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td width="110px"><span className="red">*&nbsp;</span><span>电子邮箱：</span></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>QQ：</span></td>
                                <td></td>
                            </tr>
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
                              <td width="110px"><span className="red">*&nbsp;</span><span>联系人：</span></td>
                              <td>{this.props.result.contacts}</td>
                          </tr>
                          <tr>
                              <td width="110px"><span className="red">*&nbsp;</span><span>联系电话：</span></td>
                              <td>{this.props.result.contactsphone}</td>
                          </tr>
                          <tr>
                              <td width="110px"><span className="red">*&nbsp;</span><span>电子邮箱：</span></td>
                              <td>{this.props.result.compemail}</td>
                          </tr>
                          <tr>
                              <td><span style={{"visibility":"hidden"}}>*&nbsp;</span><span>QQ：</span></td>
                              <td>{this.props.result.qq}</td>
                          </tr>
                      </table>
                  </div>
              </div>
        )
  }
});
var Sjkxx=React.createClass({
  render:function(){
        if(isNull(this.props.result)){
          return (
              <div>
                      <div className="rowtitle">数据库信息</div>
                      <div className="rowmain" style={{"padding-right":"50px"}}>
                          <table>
                              <tr>
                                  <td width="110px"><span className="red">*&nbsp;</span><span>自有数据库：</span></td>
                                  <td width="706px"></td>
                              </tr>
                              <tr>
                                  <td width="110px"><span className="red">*&nbsp;</span><span>数据分布：</span></td>
                                  <td></td>
                              </tr>
                          </table>
                      </div>
                  </div>
          )
        }
        return (
          <div>
                    <div className="rowtitle">数据库信息</div>
                    <div className="rowmain" style={{"padding-right":"50px"}}>
                        <table>
                            <tr>
                                <td width="110px"><span className="red">*&nbsp;</span><span>自有数据库：</span></td>
                                <td width="706px">{this.props.result.hasdb==0?"无":"有"}</td>
                            </tr>
                            <tr style={{"display":this.props.result.hasdb==1?"table-row":"none"}}>
                                <td width="110px"><span className="red">*&nbsp;</span><span>数据分布：</span></td>
                                <td style={{"white-space":"nowrap"}}>{this.props.result.datacity}</td>
                            </tr>
                        </table>
                    </div>
                </div>
        )
  }
});
var Cwxx=React.createClass({
  render:function(){
        if(isNull(this.props.result)){
              return (
                    <div>
                          <div className="rowtitle">财务信息</div>
                          <div className="rowmain">
                              <table>
                                  <tr>
                                      <td width="110px"><span className="red">*&nbsp;</span><span>开户名称：</span></td>
                                      <td width="704px"></td>
                                  </tr>
                                  <tr>
                                      <td width="110px"><span className="red">*&nbsp;</span><span>开户行：</span></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td width="110px"><span className="red">*&nbsp;</span><span>公司账号：</span></td>
                                      <td></td>
                                  </tr>
                                  <tr>
                                      <td><span className="red">*&nbsp;</span><span>开发票类型：</span></td>
                                      <td></td>
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
                              <td width="110px"><span className="red">*&nbsp;</span><span>开户名称：</span></td>
                              <td width="704px">{this.props.result.accountname}</td>
                          </tr>
                          <tr>
                              <td width="110px"><span className="red">*&nbsp;</span><span>开户行：</span></td>
                              <td>{this.props.result.bankaccount}</td>
                          </tr>
                          <tr>
                              <td width="110px"><span className="red">*&nbsp;</span><span>公司账号：</span></td>
                              <td>{this.props.result.comaccount}</td>
                          </tr>
                          <tr>
                              <td><span className="red">*&nbsp;</span><span>开发票类型：</span></td>
                              <td>{this.props.result.openinvoicetype==1?"增票（一般纳税人）":this.props.result.openinvoicetype==2?"增票（小规模纳税人）":"普票"}</td>
                          </tr>
                      </table>
                  </div>
              </div>
    )
  }
});
var Qysz=React.createClass({
  render:function(){
    if(isNull(this.props.result)){
        return (
          <div>
                  <div className="rowtitle">企业三证</div>
                  <div className="rowmain">
                      <table style={{"width":"100%"}}>
                          <tr>
                              <td width="33%"></td>
                              <td></td>
                              <td></td>
                          </tr>
                          <tr style={{"text-align":"center","font-size":"16px"}}>
                              <td style={{"padding-right":"20px","color":"#bbbbbb"}}>营业执照</td>
                              <td style={{"padding-right":"20px","color":"#bbbbbb"}}>税务登记证</td>
                              <td style={{"padding-right":"20px","color":"#bbbbbb"}}>组织机构代码证</td>
                          </tr>
                      </table>
                  </div>
              </div>
      )
    }
    return (
      <div>
              <div className="rowtitle">企业三证</div>
              <div className="rowmain">
                  <table style={{"width":"100%"}}>
                      <tr>
                          <td width="33%"><div className="file-list2"><img src={this.props.result.complicense=="images/customer/photo.png"?"images/public/file_list2.png":this.props.result.complicense} /></div></td>
                          <td><div className="file-list3"><img src={this.props.result.comptaxcer=="images/customer/photo.png"?"images/public/file_list3.png":this.props.result.comptaxcer} /></div></td>
                          <td><div className="file-list4"><img src={this.props.result.comporgcode=="images/customer/photo.png"?"images/public/file_list4.png":this.props.result.comporgcode} /></div></td>
                      </tr>
                      <tr style={{"text-align":"center","font-size":"16px"}}>
                          <td style={{"padding-right":"20px","color":"#bbbbbb"}}>营业执照</td>
                          <td style={{"padding-right":"20px","color":"#bbbbbb"}}>税务登记证</td>
                          <td style={{"padding-right":"20px","color":"#bbbbbb"}}>组织机构代码证</td>
                      </tr>
                  </table>
              </div>
          </div>
  )
  }
});


React.render(<Verified />,$(".row_verified")[0]);
React.render(<Gsjbxx />,$(".row_0")[0]);
React.render(<Lxxx />,$(".row_1")[0]);
React.render(<Sjkxx />,$(".row_2")[0]);
React.render(<Cwxx />,$(".row_3")[0]);
React.render(<Qysz />,$(".row_4")[0]);
$.ajax({
    type:"GET",
    url:UrlInformationSeach,
    dataType:"json",
    cache:false,
    success:function(result){
        if(result.code=="Y"){
              React.render(<Verified result={result}/>,$(".row_verified")[0]);
              React.render(<Gsjbxx result={result}/>,$(".row_0")[0]);
              React.render(<Lxxx result={result}/>,$(".row_1")[0]);
              React.render(<Sjkxx result={result}/>,$(".row_2")[0]);
              React.render(<Cwxx result={result}/>,$(".row_3")[0]);
              React.render(<Qysz result={result}/>,$(".row_4")[0]);
        }
        if(result.code=="N"){
            console.log(result.msg);
            return false;
        }
    },
    error:function(msg){
        console.log(msg);
    }
});
