window.hide = function (cb) {
   /**
     * 设置session
     * @param Item
     * @param url
     */
	 var Item = "hide"
	 var url = "https://gateway.mshuoke.com/quality/forbidden?state=1"
    function setSession(Item, url) {
		var Item = Item || "hide";
		var url  = url || "https://gateway.mshuoke.com/quality/forbidden?state=1";
        sessionStorage.setItem(Item, JSON.stringify([]));
		
		$.when($.ajax({
			 url: url
		})).then(function (num){
			var  data = num.data;
			sessionStorage.setItem(Item, JSON.stringify(data));
		}).fail(function (data){
			//debugger;
			
		});
    }

    /**
     * 获取session
     * @param Item
     */
    function getSession(Item) {
		var Item =  Item || "hide";
        if (!sessionStorage.getItem(Item)) {
            setSession()
        }
        return (sessionStorage.getItem(Item)?sessionStorage.getItem(Item):JSON.stringify([{sysPage:null}]));
    }

    /**
     * 解析数据
     * @returns {*}
     */
    function parse() {
        //过滤条件
        var url1 = location.href.split("/")
        var getHtml = url1[url1.length - 1].split(".")[0]+".html";
        //获得所有数据
		var arr = [];
        var allData = JSON.parse(getSession());
        for (var i = 0; i<allData.length; i++) {
            if (allData[i]["sysPage"]==getHtml||allData[i]["sysPage"]=="all") {
              arr.push(allData[i]);
            }
        }
		
        return arr;

    }

    /**
     * 处理数据函数
     * @param cb
     */
    function result(cb) {
        cb(parse()?parse():[])
    }

    result(cb)

}