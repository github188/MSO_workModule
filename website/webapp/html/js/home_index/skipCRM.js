var locations = location.search.slice(1);
var jiemi = strDec(locations, key1, key2, key3);
const jfuid = jiemi.split("&");
var obj = {};
for (var i = jfuid.length - 1; i >= 0; i--) {
    obj[jfuid[i].split("=")[0]] = jfuid[i].split("=")[1]
}
if (obj.jfuid&&(obj.jfuid == localStorage.getItem("jfuid"))) {
    var jiami = strEnc(`orderid=${obj.orderid}&mso_userid=${obj.jfuid}`, key1, key2, key3)
    location.href = `http://crm.mshuoke.com/sapi/msocallcenter/login?${jiami}`;
}
