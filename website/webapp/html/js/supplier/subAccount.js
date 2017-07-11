var Sub = React.createClass({
    componentDidMount:function(){
        var data = {
            pid:"",//后台缓存取得
            pageNo:10000,
            currentPage:1,
            jfuid:sessionStorage.getItem("jfuid")
        }
        var config = this.state.config;
        $.ajax({
            type:"post",
            url:urlSubAccount,
            async:true,
            contentType:"application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            data:data,
            success:function(r){
                // var d = r.userList;
                // var jfuname = d.jfuname;
                // var jfudisable = d.jfudisable;
                // var createtime = d.createtime;
                this.setState({
                         config : r.userList
                      });
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            },
        });
    },
    render:function(){
        var config = this.state.config;//初始化数组
        var subs = config.map(function(sub,index){
                return(
                  <tr key={index}>
                      <td>{menu.jfuname}</td>
                      <td>{menu.jfudisable}</td>
                      <td>子账号</td>
                      <td>{menu.createtime}</td>
                      <td>
                          <span>启用</span>
                          <span>停用</span>
                          <a href="#">编辑</a>
                      </td>
                  </tr>
                );
            }
        );
        return(
            <div>
                <a className="addAccount" href="subAccountNew.html">新增账号</a>
                <table>
                    <thead>
                        <tr>
                            <th>用户账号</th>
                            <th>状态</th>
                            <th>类型</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {menus}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

ReactDOM.render(<Sub />,$(".add-box")[0]);
