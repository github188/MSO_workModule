var DemanSearch = React.createClass({
  render:function(){
    return (
      <div>
        <Industry />
      </div>
    );
  }

});

var Industry = React.createClass({
  render:function (){
    var industrys = [];
    industrys[0] = {"name":"成人教育"};
    industrys[1] = {"name":"青少儿教育"};
    industrys[2] = {"name":"房地产"};
    var industryList = industrys.map(
      function (industry,index){
        return (
          <li key={index}>{industry.name}</li>
        );
    });
    return(
      <div className="line-style">
        <p>面向行业：</p>
        <ul>
          <li className="selected">全部</li>
          <li>{industryList}</li>
        </ul>
      </div>
    );
  }
});
{<industry/>}


ReactDOM.render(
  <DemanSearch />,
  document.getElementById('deman_hall_search')
);

ReactDOM.render(
  <h1>Hello, the second paragraph!</h1>,
  document.getElementById('deman_hall_context')
);
