

var Area=React.createClass({
 componentDidMount:function(){
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
         var List=$("div.area div.list4  .activeCity ul").clone();
         $(List).find("li").each(function(){
            $(this).click(function(){
                $(".area div.list4 .activeCity ul li[title="+$(this).text()+"] i.close").click();
                $(".area div.list4 p button").click();
            });
         });
         $("button.area").prev().html(List);
         $("div.area").hide();
     });
     $("button.area").on("click",function(){
       var index=$(this).parent().parent().parent().index();
         $("div.area").show();
         $("div.area>div").css({left:"calc(50% - 357px)",top:$(this).offset().top+30}).show();
     });
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
                 <p style={{"margin":"30px 20px;font-size:16px"}}><span>选择城市加入到自定义区域，最多可添加20个城市，已选择<span className="length">0</span>个</span><button type="button" style={{"float":"right"}} id="area">确定选择</button></p>
                 <div className="activeCity">
                     <ul>
                     </ul>
                 </div>
                 <div className="search pop search-citys-pop click cityarea" >
                     <input type="text" placeholder="输入拼音首字母" className="text city_name"   />
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
    ReactDOM.render(<Area/>,$("div.area")[0]);
}

if(!sessionStorage.getItem(urlCity)){
    $.ajax({
        type:"GET",
        url:urlCity,
        dataType:"json",
        cache:false,
        success:function(result){
            if(result.code=="N"){
                console.log(result.msg);
                return false;
            }
            sessionStorage.setItem(urlCity,JSON.stringify(result.basreglist));
            getUrlCity(JSON.parse(sessionStorage.getItem(urlCity)));
        },
        error:function(){
            console.log(msg);
        }
    });
}else{
    getUrlCity(JSON.parse(sessionStorage.getItem(urlCity)));
}